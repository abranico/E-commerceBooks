import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>

      {children}
    </>
  );
};

export default Layout;
