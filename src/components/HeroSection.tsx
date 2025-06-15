
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-cover bg-center" style={{backgroundImage:'url(/lovable-uploads/2f19b9d4-8a21-4465-98f9-aae1f9ba1d5d.png)'}}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center text-4xl font-display text-primary-foreground"
      >
        <h1 className="mb-4 text-5xl lg:text-6xl font-bold">Julio</h1>
        <p className="text-lg lg:text-xl font-sans">Présence discrète · Énergie magnétique</p>
      </motion.div>
    </section>
  );
}
