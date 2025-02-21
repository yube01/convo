import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";

const Slidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Slidebar;
