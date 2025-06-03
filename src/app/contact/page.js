// pages/contact.js or app/contact/page.js
// (Ensure the filename matches how you route to this page)

import UserForm from '../components/UserForm'; // Adjust path if needed
import { Mail } from 'lucide-react'; // For the header

export default function ContactPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        {/* Page Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 flex items-center justify-center">
            <Mail size={40} className="mr-4 hidden sm:inline-block" />
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? I&apos;d love to hear from you!
          </p>
        </header>

        {/* Contact Form Section */}
        <section id="contact-form-section" className="max-w-xl mx-auto"> {/* Centering the form card */}
          <UserForm />
        </section>
      </div>
    </div>
  );
}