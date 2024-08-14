import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Socials from "./components/socials";
import Members from "./components/members";
import Footer from "./components/footer";
import Newsletter from "./components/newsletter";
import Content from "./components/content";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Socials/>
      <Members/>
      <Content/>
      <Newsletter/>
      <Footer/>
    </main>
  );
}
