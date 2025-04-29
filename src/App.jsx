import { Routes, Route } from "react-router-dom"; // Import Route and Routes
import Navbar from "./Component/Navigation/Navbar";
import HomeSection from './Component/Pages/HeroSection'
import About from "./Component/Pages/About";
import FixturesPage from "./Component/Pages/FixturesPage";
import MeetTheTeam from "./Component/Pages/MeetTheTeam";
import Gallery from "./Component/Pages/Gallery";
import  News from './Component/Pages/News'
import NewsDetails from "./Component/Pages/NewsDetails";
import Contact from "./Component/Pages/Contact";






export default function App() {
  return (
    <div>
  
      <Routes>

  <Route path="/gallery" element={<Gallery />} />
  <Route path="/team" element={<MeetTheTeam />} />
  <Route path="/news-details/:id" element={<NewsDetails />} />


  {/* Add other routes here */}

  <Route
    path="/"
    element={
      <>
        <div id="home">
          <HomeSection />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="fixtures">
          <FixturesPage />
        </div>
        <div id="news">
          <News />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </>
    }
  />
</Routes>


    </div>
  )
}



