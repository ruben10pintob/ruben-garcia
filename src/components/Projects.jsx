import { FaLink, FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useTouchDevice";

export const Projects = () => {
    const isMobile = useIsMobile();

    return (
        <section 
            className="container mx-auto px-4 py-20" 
            id="projects"
        >
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Featured Projects
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    A showcase of projects that demonstrate my technical skills and creativity
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                { PROJECTS.map(
                    ( { name, description, githubLink, id, image, projectLink } = project, index ) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 h-96 hover:border-blue-400/30 transition-all duration-300"
                        >
                            <div className="absolute inset-0">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full w-full object-cover" 
                                    src={image} 
                                    alt={name} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent"></div>
                            </div>

                            {/* Contenido condicional basado en tipo de dispositivo */}
                            {isMobile ? (
                                // Dispositivos táctiles: contenido siempre visible
                                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                                        { name }
                                    </h3>
                                    <p className="text-white mb-6 leading-relaxed text-sm">
                                        { description }
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <a
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-300" 
                                            href={ githubLink } 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub />
                                            <span>Code</span>
                                        </a>

                                        {projectLink && (
                                            <a
                                                className="flex items-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300" 
                                                href={ projectLink } 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                <FaLink />
                                                <span>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                // Dispositivos no táctiles: hover overlay
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100"
                                >
                                    <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                                        { name }
                                    </h3>
                                    <p className="text-white mb-6 leading-relaxed text-sm">
                                        { description }
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <a
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-medium transition-colors duration-300" 
                                            href={ githubLink } 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub />
                                            <span>Code</span>
                                        </a>

                                        {projectLink && (
                                            <a
                                                className="flex items-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300" 
                                                href={ projectLink } 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                <FaLink />
                                                <span>Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </motion.div>
                    )
                )}
            </div>
        </section>
    )
}
