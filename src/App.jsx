import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";

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
          <div>Login</div>
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
