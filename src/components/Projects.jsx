import { FaLink, FaGithub } from "react-icons/fa";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

export const Projects = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <section 
            className="pt-10" 
            id="projects"
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8 text-center text-3xl lg:text-4xl"
            >
                Projects
            </motion.h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                { PROJECTS.map(
                    ( { name, description, githubLink, id, image, projectLink } = project, index ) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            key={index}
                            onClick={() => setIsVisible(!isVisible)} // Cambia la visibilidad al tocar
                            className="group relative overflow-hidden rounded-3xl"
                        >
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                src={image} 
                                alt={name} 
                            />

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                animate={{ opacity: isVisible ? 1 : 0 }} // Cambia opacidad según estado
                                className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
                            >
                                <h3 className="mb-2 text-xl">
                                    { name }
                                </h3>
                                <p className="mb-12 p-4">
                                    { description }
                                </p>

                                <div className="flex items-center justify-between gap-2">
                                    <a
                                        className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300" 
                                        href={ githubLink } 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <div className="flex items-center">
                                            <FaGithub />
                                        </div>
                                    </a>

                                    {
                                        projectLink

                                        ?

                                        <a
                                            className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300" 
                                            href={ projectLink } 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >
                                        <div className="flex items-center">
                                            <FaLink />
                                        </div>
                                    </a>

                                        :

                                            <div></div>
                                    }

                                   
                                </div>
                                
                            </motion.div>
                        </motion.div>
                    )
                )}
            </div>
        </section>
    )
}
