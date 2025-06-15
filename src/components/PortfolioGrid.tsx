
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  cover: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Projet 1",
    cover: "/lovable-uploads/2f19b9d4-8a21-4465-98f9-aae1f9ba1d5d.png"
  },
  {
    id: 2,
    title: "Projet 2", 
    cover: "/lovable-uploads/9d5f788c-cda1-4309-88c8-f15e3bd7bc21.png"
  }
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ scale: 1.05 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <img 
            src={project.cover} 
            alt={project.title} 
            className="h-64 w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}
