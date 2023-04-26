import Chat from "../components/Chat";
import Slidebar from "../components/Slidebar";
import "../style.scss";
const Home = () => {
  return (
    <div className="container">
      <Slidebar />
      <Chat />
    </div>
  );
};

export default Home;
