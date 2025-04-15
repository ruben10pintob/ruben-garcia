import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

export const Footer = () => {

    return (
        <div className="mb-8 mt-20">

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }} 
                className="flex items-center justify-center my-20"
            >
                RUBÉN GARCÍA
            </motion.div>

            <div className="flex items-center justify-center gap-8">
                {
                    SOCIAL_MEDIA_LINKS.map(( { href, icon } = link, index ) => (
                        <motion.a 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.5 }}
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </motion.a>
                    ))
                }
            </div>

            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
                &copy;Rubén García. All rights reserved.
            </p>

        </div>
    )

}
