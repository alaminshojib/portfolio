import {
    createBrowserRouter
  } from "react-router-dom";
  import ErrorPage from '../components/ErrorPage';
  import Home from '../components/Home';
  import Skills from '../components/Skills';
  import Projects from '../components/Projects';
  import Experience from '../components/Experience';
  import Education from '../components/Education';
  import Contact from '../components/Contact';
import Layout from "../layout/Layout";
import LandingPage from "../layout/LandingPage";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [

        
        {
            path: "/",
            element: <LandingPage />
          },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/skills",
          element: <Skills />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/experience",
          element: <Experience />
        },
        {
          path: "/education",
          element: <Education />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    }
  ]);
  