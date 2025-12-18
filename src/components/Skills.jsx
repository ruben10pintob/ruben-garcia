import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariant = {
    hidden: { 
        opacity: 0, 
        y: 20, 
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5
        }
    }
}

const itemsVariants = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export const Skills = () => {
    return (
        <div 
            className="container mx-auto"
            id="skills"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Skills & Technologies
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Technologies I work with daily to create robust and scalable solutions
                </p>
            </div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={ containerVariant }
                className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8"
            >

            { 
                SKILLS.map(( { experience, icon, name } = skill, index ) => (
                    <motion.div
                        variants={ itemsVariants }
                        className={`py-6 flex items-center justify-between hover:bg-white/5 rounded-xl transition-all duration-300 px-4 group ${ index !== SKILLS.length -1 ? "border-b border-white/10" : "" }`}
                        key={index}
                        whileHover={{ x: 5 }}
                    >
                        <div className="flex items-center">
                            <div className="text-3xl mr-6 p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 group-hover:border-blue-400/30 transition-colors duration-300">
                                { icon }
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                                { name }
                            </h3>
                        </div>

                        <div className="text-sm font-medium text-gray-300 bg-white/10 px-4 py-2 rounded-full group-hover:bg-blue-400/20 group-hover:text-white transition-all duration-300">
                            { experience }
                        </div>

                    </motion.div>
                )) 
            }


            </motion.div>

        </div>
    )
}

