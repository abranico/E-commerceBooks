import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>

      {children}
    </>
  );
};

export default Layout;
