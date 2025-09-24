// import { ArrowRight, ExternalLink, Github } from "lucide-react";

// // Import images from src
// import ecom from "./images/ecom.png";
// import p1 from "./images/p1.png";
// import lp from "./images/lp.png";

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Web Application",
//     description:
//       "A responsive E-Commerce app built with React & Vite, featuring product filtering, cart, login, and scalable UI/UX.",
//     image: ecom,
//     tags: ["React.js", "JavaScript", "Typescript"],
//     demoUrl: "https://shopi-mart.vercel.app/",
//     githubUrl: "https://github.com/harshitvik/ShopiMart",
//   },
//   {
//     id: 2,
//     title: "Modern Portfolio",
//     description:
//       "Built a responsive React portfolio with reusable components, animations, smooth navigation, and optimized performance for an engaging user experience.",
//     image: p1,
//     tags: ["React.js", "Tailwind CSS", "Radix UI"],
//     demoUrl: "#",
//     githubUrl: "#",
//   },
//   {
//     id: 3,
//     title: "SaaS Landing Page",
//     description:
//       "Engineered a scalable SaaS landing page with React and Vite, featuring modular components, responsive design, smooth animations, and optimized performance.",
//     image: lp,
//     tags: ["React.js", "Tailwind CSS", "Vite"],
//     demoUrl: "https://landing-page-website-blond.vercel.app/",
//     githubUrl: "https://github.com/harshitvik/landing_page_website",
//   },
// ];

// export const ProjectsSection = () => {
//   return (
//     <section id="projects" className="py-24 px-4 relative bg-gray-50">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Featured <span className="text-primary">Projects</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Here are some of my recent projects. Each project was carefully
//           crafted with attention to detail, performance, and user experience.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>

//               <div className="p-6">
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
//                 <p className="text-muted-foreground text-sm mb-4">
//                   {project.description}
//                 </p>

//                 <div className="flex justify-between items-center">
//                   <div className="flex space-x-3">
//                     <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-700 hover:text-primary transition-colors duration-300"
//                     >
//                       <ExternalLink size={20} />
//                     </a>
//                     <a
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-gray-700 hover:text-primary transition-colors duration-300"
//                     >
//                       <Github size={20} />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             className="cosmic-button w-fit flex items-center mx-auto gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300"
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://github.com/harshitvik"
//           >
//             Check My Github <ArrowRight size={16} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };


import { ArrowRight, ExternalLink } from "lucide-react";

// Import images from src
import ecom from "./images/ecom.png";
import p1 from "./images/p1.png";
import lp from "./images/lp.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description:
      "A responsive E-Commerce app built with React & Vite, featuring product filtering, cart, login, and scalable UI/UX.",
    image: ecom,
    tags: ["React.js", "JavaScript", "Typescript"],
    demoUrl: "https://shopi-mart.vercel.app/",
    githubUrl: "https://github.com/harshitvik/ShopiMart",
  },
  {
    id: 2,
    title: "Modern Portfolio",
    description:
      "Built a responsive React portfolio with reusable components, animations, smooth navigation, and optimized performance for an engaging user experience.",
    image: p1,
    tags: ["React.js", "Tailwind CSS", "Radix UI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description:
      "Engineered a scalable SaaS landing page with React and Vite, featuring modular components, responsive design, smooth animations, and optimized performance.",
    image: lp,
    tags: ["React.js", "Tailwind CSS", "Vite"],
    demoUrl: "https://landing-page-website-blond.vercel.app/",
    githubUrl: "https://github.com/harshitvik/landing_page_website",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* Demo link */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    {/* GitHub SVG */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                      >
                        <path d="M12 .296a12 12 0 00-3.794 23.398c.6.111.82-.261.82-.58v-2.234c-3.338.726-4.042-1.612-4.042-1.612-.546-1.386-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.085 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.932 0-1.31.468-2.38 1.236-3.221-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016 0c2.292-1.552 3.3-1.23 3.3-1.23.652 1.653.24 2.873.116 3.176.768.841 1.236 1.911 1.236 3.221 0 4.61-2.807 5.625-5.479 5.921.429.369.812 1.096.812 2.21v3.28c0 .322.216.697.824.58A12.004 12.004 0 0012 .296z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/harshitvik"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
