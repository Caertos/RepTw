import Navbar from "../components/Navbar";
import LateralPanel from "../components/LateralPanel";
import CentralPanel from "../components/CentralPanel";
import NewTweetPanel from "../components/NewTweetPanel";
import Footer from "../components/Footer";
import "../homeStyle.css";

function HomePage() {
  return (
    <>
    <div className="flex flex-col">
      <Navbar />
      <div className="panelContainer mt-32">
        <div className="flex flex-col">
          <div className="NewTweetPanelContainer">
            <NewTweetPanel />
          </div>
          <div className="centralPanelContainer bg-white rounded-t-3xl mx-2">
            <CentralPanel />
          </div>
        </div>
        <div className="p-2 lateralPanelContainer">
          <LateralPanel />
        </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;
