import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home.jsx";
import PackageDetails from "../Pages/PackageDetails.jsx";
import AdminDashboard from "../Pages/AdminDashboard.jsx";
import AdminLogin from "../Pages/AdminLogin.jsx";
import ProtectedRoute from "../Components/ProtectedRoute.jsx";
import Destinations from "../Pages/Destination.jsx";
import Packages from "../Pages/Package.jsx";
import Hotels from "../Pages/Hotel.jsx";
import About from "../Pages/About.jsx";
import DestinationDetails from "../Pages/DestinationDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/destination/:slug",
    element:<DestinationDetails/>,
  },
  {
  path: "/destinations",
  element: <Destinations />,
},

   {
    path: "/packages/:slug",
    element: <PackageDetails />,
  },
   {
  path: "/admin",
  element: (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  ),
},

  {
  path: "/admin-login",
  element: <AdminLogin />,
},
{
  path: "/packages",
  element: <Packages />,
},
{
  path: "/hotels",
  element: <Hotels />,
},
{
  path:"/about",
  element:<About/>
}
]);