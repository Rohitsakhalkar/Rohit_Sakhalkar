import { CurrentlyBuilding } from "../components/home/currently-building";
import { Hero } from "../components/hero/hero";
import { FeaturedProject } from "../components/projects/featured-project";

export default function Home() {
  return (
    <main id="home">
      <Hero />
      <CurrentlyBuilding />
      <FeaturedProject />
    </main>
  );
}
