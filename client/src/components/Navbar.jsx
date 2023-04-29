const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Convo</span>
      <div className="user">
        <img alt="https://3.bp.blogspot.com/-2lKQwxopQO0/VZDdfZ9RYmI/AAAAAAAAOuk/w-Lk5Uu8ukc/s1600/pixels_movie.jpg" />
        <span>New User</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
