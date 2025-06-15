
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';

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
  const TOTAL_SLOTS = 5;
  const placeholders = Math.max(0, TOTAL_SLOTS - projects.length);

  return (
    <PhotoProvider>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            <PhotoView src={project.cover}>
              <img 
                src={project.cover} 
                alt={project.title} 
                className="h-64 w-full object-cover transition-transform duration-300"
                loading="lazy"
              />
            </PhotoView>
          </motion.div>
        ))}
        
        {/* Placeholders pour les emplacements restants */}
        {Array.from({ length: placeholders }, (_, index) => (
          <motion.div
            key={`placeholder-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (projects.length + index) * 0.1 }}
            className="aspect-[3/4] rounded-lg border border-neutral-700 bg-neutral-900/40
                       flex items-center justify-center text-neutral-400 italic text-sm
                       hover:scale-105 transition-transform duration-300"
            aria-label="Emplacement photo à venir"
          >
            À venir
          </motion.div>
        ))}
      </div>
    </PhotoProvider>
  );
}
