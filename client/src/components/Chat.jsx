import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Convo</span>
        <div className="chatIcons">
          <img alt="" />
          <img alt="" />
          <img alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
