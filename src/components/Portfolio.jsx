import React from 'react';

export default function Portfolio() {
  const skills = [
    'Java 8/17',
    'Spring Boot',
    'Spring Security',
    'Microservices',
    'REST API',
    'Hibernate/JPA',
    'PostgreSQL',
    'MySQL',
    'Kafka',
    'AWS EC2',
    'Docker',
    'Jenkins',
    'Git & GitHub',
    'Java Swing/AWT',
    'OpenCV',
  ];

  const projects = [
    {
      title: 'Online Pre-Examination Registration Portal',
      description:
        'Built a secure Spring Boot application for competitive exam registration with authentication, document upload, admit card generation, admin dashboard, and QR verification system.',
    },
    {
      title: 'JCERT Olympiad Platform',
      description:
        'Developed an Olympiad management system supporting online exams, participant registration, automated grading, and admin monitoring.',
    },
    {
      title: 'Optimark License Project',
      description:
        'Created a license management platform with automated renewal reminders, validation checks, and reporting.',
    },
    {
      title: 'Optimark OMR Software',
      description:
        'Designed an offline OMR processing software using Java Swing/AWT and OpenCV with multilingual support.',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-6 md:px-20 py-28 bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#ffffff22,_transparent_40%)]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-5 tracking-tight">
            Amit Kumar
          </h1>

          <p className="text-2xl md:text-3xl text-gray-300 font-medium mb-8">
            Java Full Stack Developer
          </p>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Passionate Java Developer with professional experience in Spring
            Boot, REST APIs, Microservices, backend development, and enterprise
            application development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="mailto:amitshuckraliya@gmail.com"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
            >
              Hire Me
            </a>

            <a
              href="https://github.com/amitprajapati00"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>

            <p className="text-gray-400 leading-8 text-lg">
              Driven and hardworking Java Developer with MCA degree and
              professional experience in developing scalable and secure
              enterprise applications using Spring Boot, Hibernate, PostgreSQL,
              and Microservices architecture.
            </p>

            <div className="mt-8 space-y-3 text-gray-300">
              <p>📍 Delhi, India</p>
              <p>📧 amitshuckraliya@gmail.com</p>
              <p>📞 +91-7248895180</p>
            </div>
          </div>

          <div className="bg-zinc-900 p-10 rounded-[30px] border border-zinc-800 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>

            <div>
              <h4 className="text-xl font-bold">
                TechBets Infotech Pvt. Ltd.
              </h4>

              <p className="text-gray-400 mt-2">
                Java Developer | 2023 - Present
              </p>

              <p className="text-gray-500 mt-4 leading-7">
                Working on Spring Boot enterprise applications, authentication
                systems, REST APIs, PDF generation, and desktop OMR software
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-zinc-950 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl text-center text-gray-200 hover:scale-105 hover:border-white transition duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-20 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[30px] p-8 shadow-xl hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8 text-lg">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-zinc-950 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-900 p-10 rounded-[30px] border border-zinc-800">
            <h2 className="text-3xl font-bold mb-8">Education</h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold">
                Master of Computer Applications
              </h3>

              <p className="text-gray-400 mt-2">
                Dewan Institute of Management Studies
              </p>

              <p className="text-gray-500">CGPA: 8.4</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Bachelor of Computer Applications
              </h3>

              <p className="text-gray-400 mt-2">
                Dewan Institute of Management Studies
              </p>

              <p className="text-gray-500">CGPA: 7.2</p>
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="bg-zinc-900 p-10 rounded-[30px] border border-zinc-800">
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>

            <ul className="space-y-5 text-gray-300 text-lg leading-8">
              <li>🏆 Awarded in IT Quiz Competition</li>
              <li>🥇 3 Gold Medals in Sports State Championship</li>
              <li>💻 Solved 100+ Problems on HackerRank</li>
              <li>⭐ 4 Star in Java on HackerRank</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-zinc-800 text-gray-500">
        <p>© 2026 Amit Kumar | Java Developer Portfolio</p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/amitprajapati00"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amit-kumar-943b22239"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}