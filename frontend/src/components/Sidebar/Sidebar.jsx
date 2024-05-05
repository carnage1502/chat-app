import Conversations from "./Conversations";
import SearchBar from "./SearchBar";
import LogoutBtn from "./LogoutBtn";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchBar />

      <div className="divider px-3"></div>

      <Conversations />
      <LogoutBtn />
    </div>
  );
};

export default Sidebar;
