import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

export const EducationSection = () => {

    return (
        <section 
            className="py-8"
            id="education"
        >
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-4 text-center text-3xl font-bold"
            >
                Education
            </motion.h2>

            {
                EDUCATION.map(( { degree, description, duration, institution } = edu , index) => (

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1,  delay: index * 0.5 }} 
                        className="mb-6 p-10"
                        key={index}
                    >
                        <h3 className="text-xl font-semibold">
                            { degree }
                        </h3>

                        <p className="text-lg">{ institution }</p>
                        <p className="text-sm text-stone-300">{ duration }</p>
                        <p className="mt-2">{ description }</p>

                    </motion.div>

                ))
            }

        </section>
    )

}