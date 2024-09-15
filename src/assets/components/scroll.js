//import react
import {useEffect}from "react";
import { useLocation } from "react-router-dom";

const ScrollToFooter = () => {
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === "/contact") {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);
  
    return null;
  };


export default ScrollToFooter