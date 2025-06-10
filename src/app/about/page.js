
import { Brain, Sparkles, Briefcase, Target, Code, Star, GraduationCap } from 'lucide-react'; // Import some icons

const educationData = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Universidad Privada Boliviana (UPB)',
    period: '2024',
    description: 'My degree provided a robust, software-centric education built upon a strong foundation in mathematics and physics. The curriculum focused on equipping me with the tools of a modern software engineer, from mastering Agile methodologies and design patterns to a deep dive into algorithms, data structures, and both Object-Oriented and Functional programming. This was rounded out by practical experience in computer networks, robotics, and database management with SQL and NoSQL technologies.'
  },
  {
    degree: 'Responsive Web Design',
    institution: 'FreeCodeCamp',
    period: '2023',
    description: 'A comprehensive certification focused on the principles and practical application of building accessible and fully responsive websites using modern HTML5 and CSS.'
  },
  {
    degree: 'Neural Network and Deep Learning',
    institution: 'Coursera',
    period: '2021',
    description: 'A rigorous Coursera certification focused on the foundational theory and practical application of building deep neural networks, providing a core understanding of modern AI.'
  },
];

const journeyParagraphs = [
  "I'm a software engineer with a deep-seated passion for crafting user-friendly applications and tackling real-world problems through code. My journey into tech was driven by a fascination with how software can simplify complex tasks and enhance everyday life.",
  "From the initial spark of an idea to the final deployment, I thrive on the entire development lifecycle. I particularly enjoy the challenge of translating user needs into elegant and efficient digital solutions, whether it's building intuitive point-of-sale systems or robust administrative platforms.",
  "Continuous learning is at the core of my philosophy. The tech landscape is ever-evolving, and I'm always eager to explore new technologies, refine my skills, and push the boundaries of what's possible with each project I undertake."
];

const projectsWorkedOn = [
  { name: 'Alterations Booking Ap', tech: 'React, Vercel, Github', description: 'A comprehensive desktop application for managing orders, inventory, and sales.' },
  { name: 'POS System for Café', tech: 'React, Firebase, Electron', description: 'A robust point-of-sale system built with React and Firebase, streamlining orders and payments.' },
  { name: 'Caroco GEMA application', tech: 'Next.js, React, MongoDB , Electron', description: 'Developed a React application for the administration and control of mining production as part of my graduation project.' },
];

const skillsData = [
  { name: 'JavaScript', level: 10, icon: <Code size={18} className="mr-2 text-yellow-500" /> },
  { name: 'Python', level: 8, icon: <Code size={18} className="mr-2 text-green-500" /> },
  { name: 'React / Next.js', level: 9, icon: <Sparkles size={18} className="mr-2 text-sky-500" /> },
  { name: 'HTML5 & CSS3', level: 9, icon: <Code size={18} className="mr-2 text-red-500" /> },
  { name: 'UI/UX Principles', level:8, icon: <Brain size={18} className="mr-2 text-purple-500" /> },
  { name: 'Git & GitHub', level: 8, icon: <Code size={18} className="mr-2 text-slate-500" /> },
  { name: 'Node.js / Express', level: 8, icon: <Code size={18} className="mr-2 text-green-500" /> },
  { name: 'Ionic Framework', level: 8, icon: <Target size={18} className="mr-2 text-blue-500" /> },
  { name: 'Firebase', level: 8, icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2 text-orange-500"><path d="M6.91205 3.08722L6.00002 2L2.40002 15.2L5.66402 22L11.0161 8.73605L6.91205 3.08722Z"/><path d="M7.20007 3L17.6281 7.39209L11.0641 8.78406L7.20007 3Z"/><path d="M17.8801 7.75201L18.2881 7.94403L21.6001 9.60004L11.0641 8.78403L17.8801 7.75201Z"/><path d="M11.0161 8.73605L5.66406 22L11.0161 21.96L17.3041 9.52802L11.0161 8.73605Z"/></svg> },
  { name: 'MongoDB / SQL', level: 7, icon: <Briefcase size={18} className="mr-2 text-teal-500" /> },
  { name: 'Tailwind CSS', level: 7, icon: <Sparkles size={18} className="mr-2 text-cyan-500" /> },
];


export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
        {/* Page Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A glimpse into my journey, the tools I wield, and the creations I&apos;m proud of.
          </p>
        </header>

        {/* My Journey Section */}
        <section id="journey" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center text-slate-900 dark:text-white">
            <Sparkles size={28} className="mr-3 text-blue-500" />
            My Journey
          </h2>
          <div className="space-y-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            {journeyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Projects I've Worked On Section */}
        <section id="highlighted-projects" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center text-slate-900 dark:text-white">
            <Briefcase size={28} className="mr-3 text-blue-500" />
            Project Highlights
          </h2>
          <div className="space-y-8">
            {projectsWorkedOn.map((project, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">{project.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">Tech: {project.tech}</p>
                <p className="text-slate-700 dark:text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

       {/* Education Section */}
        <section id="education" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center text-slate-900 dark:text-white">
            <GraduationCap size={28} className="mr-3 text-blue-500" />
            Education
          </h2>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">{edu.degree}</h3>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 text-right">{edu.period}</span>
                </div>
                <p className="text-md text-slate-600 dark:text-slate-300 font-medium mb-2">{edu.institution}</p>
                <p className="text-slate-700 dark:text-slate-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* My Skills  */}
        <section id="skills-rpg" className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold flex items-center text-slate-900 dark:text-white">
            <Brain size={28} className="mr-3 text-blue-500" />
            My Skill Arsenal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="p-5 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex items-center mb-2">
                  {skill.icon || <Star size={18} className="mr-2 text-yellow-400" />}
                  <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100">{skill.name}</h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Proficiency: {skill.level} / 10</p>
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300"
                    style={{ width: `${skill.level * 10}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="10"
                    role="progressbar"
                    aria-label={`${skill.name} proficiency level`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}