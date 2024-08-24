import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nome from "./components/Nome";
import About from "./components/About";
import Bank from "./components/Bank";
import Appointments from "./components/Appointments";
import Treatments from "./components/Treatments";
import Sidebar from "./components/Sidebar";
import MainLayout from "./components/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Nome />
            </>
          ),
        },
        {
          path: "/message",
          element: (
            <>
              <Nome />
            </>
          ),
        },
        {
          path: "/post",
          element: (
            <>
              <Nome />
            </>
          ),
        },
        {
          path: "/about",
          element: (
            <>
              <About />
            </>
          ),
        },
        {
          path: "/treatments",
          element: (
            <>
              <Treatments />
            </>
          ),
        },
        {
          path: "/appointments",
          element: (
            <>
              <Appointments />
            </>
          ),
        },
        {
          path: "/bank",
          element: (
            <>
              <Bank />
            </>
          ),
        },
      ],
    },
    // {
    //   path: "/post",
    //   element: <MainLayout />,
    //   children: [
    //     {
    //       path: "/",
    //       element: (
    //         <>
    //           <Nome />
    //         </>
    //       ),
    //     },
    //     {
    //       path: "/about",
    //       element: (
    //         <>
    //           <About />
    //         </>
    //       ),
    //     },
    //     {
    //       path: "/treatments",
    //       element: (
    //         <>
    //           <Treatments />
    //         </>
    //       ),
    //     },
    //     {
    //       path: "/appointments",
    //       element: (
    //         <>
    //           <Appointments />
    //         </>
    //       ),
    //     },
    //     {
    //       path: "/bank",
    //       element: (
    //         <>
    //           <Bank />
    //         </>
    //       ),
    //     },
    //   ],
    // },
    // {
    //   path: "/message",
    //   element: <MainLayout />,
    //   children: [
    //     {
    //       path: "/",
    //       element: (
    //         <>
    //           <Nome />
    //         </>
    //       ),
    //     },
    //     {
    //       path: "/about",
    //       element: (
    //         <>
    //           <About />
    //         </>
    //       ),
    //     },
    //     {
    //       path: "/treatments",
    //       element: (
    //         <>
    //           <Treatments />
    //         </>
    //       ),
    //     },
    //     {
    //       path: "/appointments",
    //       element: (
    //         <>
    //           <Appointments />
    //         </>
    //       ),
    //     },
    //     {
    //       path: "/bank",
    //       element: (
    //         <>
    //           <Bank />
    //         </>
    //       ),
    //     },
    //   ],
    // },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
