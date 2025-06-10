import ProjectCarousel from '../components/ProjectCarousel';
import { Briefcase } from 'lucide-react'; 

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">

        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 flex items-center justify-center">
            <Briefcase size={60} className="mr-4 hidden sm:inline-block" />
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of applications I&apos;ve built, demonstrating my skills in action.
          </p>
        </header>

        <section id="project-showcase">
          <ProjectCarousel />
        </section>
      </div>
    </div>
  );
}