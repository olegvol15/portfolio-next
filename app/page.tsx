import SkillsSection, {Skill} from "./components/SkillsSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Hero from "./components/Hero"

export default function HomePage() {
  const skills: Skill[] = [
    { name: "JavaScript", level: "learning" },
    { name: "React", level: "learning" },
    { name: "Next.js", level: "beginner" },
    { name: "TypeScript", level: "beginner" }
  ]

  return (
    <main>
      <Hero
        name="Oleh"
        role="Frontend Developer"
        intro="This is my portfolio."
        learning={["React", "Next.js", "TypeScript"]}
      />

      <SkillsSection skills={skills} />
      <ProjectsSection />
      <ContactSection 
          email="olehvolostnykh15@gmail.com"
          telegram="https://t.me/oleeg15"
          github="https://github.com/olegvol15"
      />
    </main>
  )
}


