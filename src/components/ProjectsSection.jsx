import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Import images
import ecom from "./images/ecom.png";
import p1 from "./images/p1.png";
import lp from "./images/lp.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description: "A responsive E-Commerce app built with React & Vite, featuring product filtering, cart, login, and scalable UI/UX.",
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
    demoUrl: "https://my-portfolio-ten-neon-48.vercel.app/",
    githubUrl: "https://github.com/harshitvik/my_portfolio",
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
    <section id="projects" className="py-24 px-4 relative">
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
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
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
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
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
