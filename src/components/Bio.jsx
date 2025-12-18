import { BIO } from "../constants";
import { motion } from "framer-motion";

export const Bio = () => {
    return (  
        <section 
            className="container mx-auto px-4 py-20"
            id="bio"
        >
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }} 
                    className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                    About Me
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Get to know more about my journey and passion for development
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-6xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 lg:p-12"
            >
                { 
                    BIO.map((bio, index) => (

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }} 
                            className="mb-6 text-lg lg:text-xl text-gray-100 leading-relaxed"
                            key={index}
                        >
                            {bio}
                        </motion.p>

                    )) 
                }
            </motion.div>

        </section>
    );
}
 
