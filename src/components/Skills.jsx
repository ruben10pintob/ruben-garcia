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
            <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
                Skills
            </h2>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                variants={ containerVariant }
                className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border border-stone-50/30"
            >

            { 
                SKILLS.map(( { experience, icon, name } = skill, index ) => (
                    <motion.div
                        variants={ itemsVariants }
                        className={`py-6 flex items-center justify-between ${ index !== SKILLS.length -1 ? "border-b border-stone-50/30" : "" }`}
                        key={index}
                    >
                        <div className="flex items-center">

                            { icon }
                            <h3 className="px-6 text-lg lg:text-2xl">
                                { name }
                            </h3>

                        </div>

                        <div className="text-md font-semibold lg:text-xl">
                            { experience }
                        </div>

                    </motion.div>
                )) 
            }


            </motion.div>

        </div>
    )
}

