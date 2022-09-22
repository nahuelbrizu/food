import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import QuoteSections from "./components/QuoteSections";
import ChiefSection from "./components/ChiefSection";

function App() {
  return (
    <div className="App">
    <NavBar/>
      <div className="container main">
        <HeroSection />
        <ImproveSkills/>
        <QuoteSections />
        <ChiefSection/>
      </div>
    </div>
  );
}

export default App;
