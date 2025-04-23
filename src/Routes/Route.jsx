import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";

import LawyerDetails from "../Components/LawyerDetails";
import MyBookings from "../Pages/MyBookings";
import Spinner from "../Components/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/bookings",
        Component: MyBookings,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/blogs",
        Component: Blogs,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("/blogData.json"),
      },
      {
        path: "/contact",
        Component: ContactUs,
      },

      {
        path: "/lawyerDetails/:license",
        Component: LawyerDetails,
        hydrateFallbackElement: <Spinner></Spinner>,
        loader: () => fetch("/data.json"),
      },
    ],
  },

  {
    path: "*",
    Component: Error,
  },
]);

export default router;
