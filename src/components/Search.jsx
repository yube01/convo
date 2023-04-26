const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="userChat">
        <img alt="" />
        <div className="userChatInfo">
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Search;
