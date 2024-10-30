import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <div>Hola</div>
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <Login />
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          <div>Register</div>
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
