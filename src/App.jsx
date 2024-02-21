import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Banner from "./Sections/Banner";
import Intro from "./Sections/Intro";
import Reviews from "./Sections/Reviews";
import SkillStack from "./Sections/SkillStack";
import Work from "./Sections/Work";

function App() {
  return (
    <main className=" h-screen w-full">
      <Header />
      <Banner />
      <Intro />
      <SkillStack/>
      <Work/>
      <Reviews/>
      <Footer/>
    </main>
  );
}

export default App;
