import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  //root route
  res.send("My speed has never failed anyone");
});
app.listen(5000, () => console.log("Server is running on port 5000"));
