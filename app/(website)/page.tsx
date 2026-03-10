import HomeHero from "@/components/site/home/Hero";
import Partners from "@/components/site/home/Partners";
import Identity from "@/components/site/home/Identity";
import Engagement from "@/components/site/home/Engagement";
import Projects from "@/components/site/home/Projects";
import Impact from "@/components/site/home/Impact";
import CallToAction from "@/components/site/home/CallToAction";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <Partners />
      <Identity />
      <Engagement />
      <Projects />
      <Impact />
      <CallToAction />
    </main>
  );
};

export default HomePage;
