import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filterdUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); //this doesnot include us i.e the loggedin user we cant send messagees ourselves but if we want to we have to remove { _id: { $ne: loggedInUserId } } command

    res.status(200).json(filterdUsers);
  } catch (error) {
    console.error("Error in getUserForSidebar", error.message);
    res.status(500).json("Internal server error!");
  }
};
