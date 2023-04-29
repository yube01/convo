import Chat from "../components/Chat";
import Slidebar from "../components/Slidebar";
import "../style.scss";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Slidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
