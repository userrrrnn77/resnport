import Hero from "./components/Hero/Hero";
import Project from "./components/Projects/Project";
import Sidebar from "./components/Sidebar/Sidebar";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css'
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";


const App = () => {
  const styleApp = {
    background: "#111",
    width: "100%",
    display: "flex",
  };

  const sidebarStyle = {
    height: "100vh",
    width: "auto",
    backgroundColor: "#222",
    position: "sticky",
    left: 0,
    top: 0,
  };

  const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "12px",
    overflowY: "auto",
  };

  return (
    <div style={styleApp}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={contentStyle}>
        <Hero />
        <Project />
        <Pricing />
        <Contact />
      </div>
    </div>
  );
};

export default App;
