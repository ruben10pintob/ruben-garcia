import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

export const EducationSection = () => {

    return (
        <section 
            className="container mx-auto px-4 py-20"
            id="education"
        >
            <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    Education
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Academic background that built the foundation of my technical skills
                </p>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">

            {
                EDUCATION.map(( { degree, description, duration, institution } = edu , index) => (

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }} 
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 hover:border-blue-400/30 transition-all duration-300"
                        key={index}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                                    { degree }
                                </h3>
                                <p className="text-xl text-white font-medium">{ institution }</p>
                            </div>
                            <span className="text-sm text-gray-400 bg-white/10 px-4 py-2 rounded-full mt-2 md:mt-0">
                                { duration }
                            </span>
                        </div>
                        <p className="text-gray-200 leading-relaxed">{ description }</p>

                    </motion.div>

                ))
            }
            </div>

        </section>
    )

}