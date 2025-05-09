import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar1 from "./components/navbar/_1_Navbar";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar1/>
    }
  ])
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
