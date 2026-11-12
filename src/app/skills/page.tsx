import LocationHeader from "@/components/LocationHeader";
import SkillModules from "@/components/SkillModules";

export const metadata = {
  title: "Engineering Lab | Rohit Sakhalkar",
  description:
    "Technologies Rohit uses in backend development, software testing, automation, and web development.",
};

export default function SkillsPage() {
  return (
    <div className="location-scene mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <LocationHeader
        sector="02 / 05"
        name="Engineering Lab"
        title="Technical modules"
        description="A project-grounded map of the languages, frameworks, and tools in my current toolkit. Select a module to see where it appears in my work—without arbitrary proficiency scores."
      />
      <SkillModules />
    </div>
  );
}
