import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

export const ContactForm = () => {

    const emailDataEmpty = { name: "", email: "", message: "" }

    const [ formData, setFormData ] = useState(emailDataEmpty);

    const [ errors, setErrors ] = useState({});
    const [ isSending, setIsSending ] = useState(false);

    const handleChange = (e) => {
        
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })

    }

    const validate = () => {

        let errors = {};
        const { email: emailFormData, message: messageFormData, name: nameFormData } = formData;

        if(!nameFormData) errors.name = "Name is required";
        if(!emailFormData) { 
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(emailFormData)) {
            errors.email= "Email is invalid";
        }
        if(!messageFormData) errors.message = "Message is required";

        return errors;

    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const validationErrors = validate();

        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs.send(
                "service_2pdjp2y",
                "template_ovfli8o",
                formData,
                "z2OqSjVi0t_3Uy_se"
            ).then(( response ) => {
                toast.success("Message sent successfully");
                setFormData(emailDataEmpty);
            }).catch(( error ) => {
                console.log("FAILED...", error)
                toast.error("Failed to send message. Please try again later.");
            }).finally(() => {
                setIsSending(false);
            })
        }

    }
    
    return (
        <section
            id="contact"
            className="container mx-auto px-4 py-20"
        >
            
            <Toaster />

            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }} 
                    className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Let's Connect
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Ready to collaborate? Send me a message and let's discuss your next project
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8"
            >
                <motion.form
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    onSubmit={handleSubmit}
                >
                <div className="mb-4 flex space-x-4">
                    <div className="lg:w-1/2">
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className="mb-4 w-full appearance-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300" 
                        />
                        {errors.name && ( 
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-sm text-rose-800"
                            >
                                {errors.name}
                            </motion.p> 
                        )}
                    </div>
                    <div className="lg:w-1/2">
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="mb-4 w-full appearance-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300" 
                        />
                        {errors.email && ( 
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-sm text-rose-800"
                            >
                                {errors.email}
                            </motion.p> 
                        )}
                    </div>
                </div>
                <div className="mb-4">
                        <textarea 
                            id="message"
                            name="message"
                            value={formData.message}
                            placeholder="Message"
                            onChange={handleChange}
                            className="mb-4 w-full appearance-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-all duration-300 resize-none"
                            rows="6" 
                        />
                        {errors.message && ( 
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-sm text-rose-800"
                            >
                                {errors.message}
                            </motion.p> 
                        )}
                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${ isSending ? "cursor-not-allowed opacity-50" : "hover:shadow-lg hover:shadow-blue-500/20" }`}
                        disabled={isSending}
                    >
                        {isSending ? "Sending..." : "Send Message"}
                        <FiSend className={isSending ? "animate-pulse" : ""} />
                    </button>
                </motion.form>
            </motion.div>
        </section>
    )

}