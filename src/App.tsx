import Hero from "./components/sections/Hero";
import Problem from "./components/sections/Problem";
import HowItWorks from "./components/sections/HowItWorks";
import WhyStellar from "./components/sections/WhyStellar";
import Progress from "./components/sections/Progress";
import OpenSource from "./components/sections/OpenSource";
import Roadmap from "./components/sections/Roadmap";
import Team from "./components/sections/Team";
import Waitlist from "./components/sections/Waitlist";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-primary-900">
      <Hero />
      <Problem />
      <HowItWorks />
      <WhyStellar />
      <Progress />
      <OpenSource />
      <Roadmap />
      <Team />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
