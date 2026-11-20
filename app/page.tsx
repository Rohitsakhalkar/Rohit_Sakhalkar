import { CurrentlyBuilding } from "../components/home/currently-building";
import { Contributions } from "../components/contributions/contributions";
import { About } from "../components/about/about";
import { Hero } from "../components/hero/hero";
import { DeveloperJourney } from "../components/journey/developer-journey";
import { FeaturedProject } from "../components/projects/featured-project";
import { SelectedProjects } from "../components/projects/selected-projects";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <CurrentlyBuilding />
      <FeaturedProject />
      <SelectedProjects />
      <Contributions />
      <DeveloperJourney />
      <About />
    </main>
  );
}
