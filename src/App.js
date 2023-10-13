import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Aboutus from "./pages/About";
import Career from "./pages/Career";
import Footer from "./components/partials/Footer";
import ScrollToTop from "./components/partials/ScrollToTop";
import Switcher from "./components/partials/Switcher";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Error from "./pages/404";
import Projects from "./pages/Projects";
import ServiceDetails from "./pages/ServiceDetails";
import BlogDetail from "./pages/blogs-details";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add("light");
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/career" element={<Career />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/article" element={<Blogs />} /> */}
        {/* <Route path="/blog/:slug" element={<BlogDetail />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
      {/* <Switcher /> */}
    </BrowserRouter>
  );
}

export default App;
