import { CurrentlyBuilding } from "../components/home/currently-building";
import { Contributions } from "../components/contributions/contributions";
import { Hero } from "../components/hero/hero";
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
    </main>
  );
}
