'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Mail, Code, User, Briefcase, } from 'lucide-react'; // Import icons
import { useState, useEffect } from 'react'; // Import useState and useEffect

// Sample Project Data (you can expand this)
const featuredProjectsData = [
  {
    id: 1,
    title: 'POS System for Café',
    description: 'A robust point-of-sale system built with React and Firebase, streamlining orders and payments.',
    image: '/projects/typica.png', // Replace with actual path
    tags: ['React', 'Firebase', 'Electron'],
  },
 {
    id: 2,
    title: 'Tailoring Services Landing Page',
    description: 'A modern landing page to enhance the online presence of an alterations business, improving customer engagement and accessibility',
    image: '/projects/alterations.png', // Replace with actual path
    tags: ['React', 'Vercel', 'Github'],
  },
  {
    id: 3,
    title: 'Caroco GEMA application',
    description: 'Developed a React application for the administration and control of mining production as part of my graduation project',
    image: '/projects/caroco.png', // Replace with actual path
    tags: ['React', 'MongoDB', 'Next.js', 'Electron'],
  }
];

// Skills Data
const skillsData = [
  { name: 'React',  icon: <Image src="/icons/iconReact.svg" alt="React icon" width={25} height={25} className="mr-2" /> },
  { name: 'Ionic', icon: <Image src="/icons/iconIonic.svg" alt="ionic icon" width={25} height={25} className="mr-2" /> },
  { name: 'Firebase' , icon: <Image src="/icons/iconFirebase.svg" alt="Firebase icon" width={25} height={25} className="mr-2" />  }, // Custom Firebase Icon
  { name: 'Node.js ',  icon: <Image src="/icons/iconNodeJs.svg" alt="Node icon" width={25} height={25} className="mr-2" />},
  { name: 'JavaScript ',  icon: <Image src="/icons/iconJavaScrip.svg" alt="JavaScript icon" width={25} height={25} className="mr-2" />},
  { name: 'HTML5 & CSS3',  icon: <Image src="/icons/iconHtml.svg" alt="Html icon" width={25} height={25} className="mr-2" />},
  { name: 'Tailwind CSS',  icon: <Image src="/icons/iconTailCss.svg" alt="TailwindCss icon" width={25} height={25} className="mr-2" />},
  { name: 'Git & GitHub',  icon: <Image src="/icons/iconGithub.svg" alt="GitHUb icon" width={25} height={25} className="mr-2" />},
  { name: 'MongoDb',  icon: <Image src="/icons/iconMongoDb.png" alt="GitHUb icon" width={25} height={25} className="mr-2" />},
];

const skillsDataLight = [
  { name: 'React',  icon: <Image src="/icons/iconReact2.svg" alt="React icon" width={25} height={25} className="mr-2" /> },
  { name: 'Ionic', icon: <Image src="/icons/iconIonic2.svg" alt="ionic icon" width={25} height={25} className="mr-2" /> },
  { name: 'Firebase' , icon: <Image src="/icons/iconFirebase2.png" alt="Firebase icon" width={25} height={25} className="mr-2" />  }, // Custom Firebase Icon
  { name: 'Node.js ',  icon: <Image src="/icons/iconNodeJs2.svg" alt="Node icon" width={25} height={25} className="mr-2" />},
  { name: 'JavaScript ',  icon: <Image src="/icons/iconJavaScrip2.svg" alt="JavaScript icon" width={25} height={25} className="mr-2" />},
  { name: 'HTML5 & CSS3',  icon: <Image src="/icons/iconHtml2.svg" alt="Html icon" width={25} height={25} className="mr-2" />},
  { name: 'Tailwind CSS',  icon: <Image src="/icons/iconTailCss2.svg" alt="TailwindCss icon" width={25} height={25} className="mr-2" />},
  { name: 'Git & GitHub',  icon: <Image src="/icons/iconGithub2.svg" alt="GitHUb icon" width={25} height={25} className="mr-2" />},
  { name: 'MongoDb',  icon: <Image src="/icons/iconMongoDb2.png" alt="GitHUb icon" width={25} height={25} className="mr-2" />},
];


export default function HomePage() {
  const [colorScheme, setColorScheme] = useState('light');

   useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // Set initial scheme
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');
    // Listener for changes
    const handleChange = (e) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []); 

  return (
    <main className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16 md:py-24 space-y-8 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          <span className="block">Hi, I&apos;m Carlos.</span> {/* CORRECTED */}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 mt-2">
            Full-Stack Developer.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          I craft modern, responsive web & mobile applications with a focus on user experience and robust backends. Passionate about bringing ideas to life using React, Ionic, Firebase, and more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work <ArrowRight size={20} className="ml-2" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 dark:text-blue-500 dark:border-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Contact Me <Mail size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="/assets/image.png" // Replace with your profile image
              alt="Carlos Velarde - Software Developer"
              width={900}
              height={1280}
              className="rounded-xl object-cover w-full h-auto shadow-2xl relative" // Added relative for stacking context
              priority // Important for LCP
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center">
              <User size={36} className="mr-3 text-blue-600 dark:text-blue-500" />
              About Me
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I&apos;m a software engineer passionate about building clean, efficient digital solutions. From point-of-sale apps to complex administrative systems, I enjoy solving real problems with code. {/* CORRECTED */}
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I&apos;m always eager to learn new technologies and take on fresh challenges, pushing myself to grow with every project. My goal is to create software that is not only functional but also a joy to use. {/* CORRECTED */}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 font-semibold text-lg group"
            >
              Learn more about my journey
              <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 px-4 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center">
            <Code size={36} className="mr-3 text-blue-600 dark:text-blue-500" />
            My Tech Stack
          </h2>
          {colorScheme === 'light' 
          ?
            <div className="flex flex-wrap justify-center gap-4">
            {skillsDataLight.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-md font-medium"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
          :
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-5 py-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-md font-medium"
              >
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
          }


        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center">
            <Briefcase size={36} className="mr-3 text-blue-600 dark:text-blue-500" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjectsData.map((project) => (
              <div
                key={project.id}
                className="group block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="relative w-full aspect-video overflow-hidden"> {/* Fixed aspect ratio for images */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill // Use fill for responsive images within a sized container
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-xl mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="inline-block bg-slate-200 dark:bg-slate-700 rounded-full px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200 mr-2 mb-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              See All Projects <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white dark:from-blue-700 dark:to-cyan-600">
        <div className="max-w-3xl mx-auto text-center px-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to build something great?</h2>
          <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200">
            I&apos;m currently open for freelance projects or full-time opportunities. Let&apos;s connect and discuss how I can help bring your vision to life! {/* CORRECTED (both instances) */}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-bold shadow-xl hover:bg-slate-100 transition-colors duration-300 transform hover:scale-105 text-lg"
          >
            Get in Touch <Mail size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}