'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Code } from 'lucide-react'; // Using Lucide icons

const projects = [
  {
    id: 1,
    title: 'Alterations Landing Page',
    desc: 'Developed and deployed a modern landing page to enhance the online presence of an alterations business, improving customer engagement and accessibility',
    image: '/projects/alterations.png',
    tech: [ 'React', 'Vercel', 'Github','HTML', 'CSS']
  },
  {
    id: 2,
    title: 'POS System for Café Typica',
    desc: "Custom Electron-based Point of Sale (POS) software solution to optimize sales operations and improve business efficiency for a prominent coffee restaurant in Bolivia. The system provided comprehensive management tools and integrated smoothly with the restaurant's workflow.",
    image: '/projects/typica.png',
    tech: ['Electron', 'React', 'Firebase','HTML', 'CSS']
  },
  {
    id: 3,
    title: 'Mining Production Control System',
    desc: 'React & Electron desktop application for the administration and control of mining production as part of my graduation project. It ensures accurate tracking of employees, production, sales, machine maintenance, and expenses for the mineral processing company Caroco GEMA.',
    image: '/projects/caroco.png',
    tech: ['React', 'Electron', 'MongoDB', 'Node.js', 'HTML', 'CSS']
  },
  {
    id: 4,
    title: 'Application in Ionic for storage control',
    desc: "Application aimed at improving company management and organization for enhanced efficiency, utilizing Ionic and Firebase, making the application accessible on both Android and iOS platforms",
    image: '/projects/3dApp.png',
    tech: ['Ionic', 'Firebase', 'Github']
  },

];


export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalProjects = projects.length;

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? totalProjects - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const isLastSlide = currentIndex === totalProjects - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const currentProject = projects[currentIndex];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative w-full aspect-[16/9] sm:aspect-[18/10] rounded-xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800 group mb-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            onTransitionEnd={() => { if (index === currentIndex) setIsTransitioning(false);}}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
              className="object-cover w-full h-full dark:brightness-80" // Use object-cover for better fill
              priority={index === 0} // Prioritize the first image for LCP
            />
          </div>
        ))}

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          aria-label="Previous project"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/60 dark:bg-black/40 rounded-full shadow-lg hover:bg-white dark:hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all opacity-70 group-hover:opacity-100"
        >
          <ChevronLeft size={28} className="text-slate-800 dark:text-slate-100" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          aria-label="Next project"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/60 dark:bg-black/40 rounded-full shadow-lg hover:bg-white dark:hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all opacity-70 group-hover:opacity-100"
        >
          <ChevronRight size={28} className="text-slate-800 dark:text-slate-100" />
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-2.5 mb-8">
        {projects.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            aria-label={`Go to project ${slideIndex + 1}`}
            className={`h-3 w-3 rounded-full transition-all duration-300 ease-in-out
              ${currentIndex === slideIndex ? 'bg-blue-600 scale-125' : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'}`}
          />
        ))}
      </div>

      {/* Project Details */}
      <div className="px-2 sm:px-4 text-center max-w-3xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900 dark:text-white">
          {currentProject.title}
        </h3>
        <p className="text-md sm:text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
          {currentProject.desc}
        </p>

        <div className="flex items-center justify-center text-lg font-semibold mb-3 text-slate-800 dark:text-slate-200">
          <Code size={22} className="mr-2 text-blue-500" />
          Technologies Used
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {currentProject.tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}