import HomeHero from "@/components/site/home/Hero";
import Identity from "@/components/site/home/Identity";
import Engagement from "@/components/site/home/Engagement";
import Projects from "@/components/site/home/Projects";
import Impact from "@/components/site/home/Impact";
import CallToAction from "@/components/site/home/CallToAction";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <Identity />
      <Engagement />
      <Projects />
      <Impact />
      <CallToAction />
    </main>
  );
};

export default HomePage;
