import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {

    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const [ activeSection, setActiveSection ] = useState("");

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (ev, href) => {
        ev.preventDefault();
        const targetElement = document.querySelector(href);

        if(targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }

        setIsMobileMenuOpen(false);
    }

    // Detectar sección activa al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = NAVIGATION_LINKS.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 150;

            // Si está arriba del todo, no seleccionar nada
            if (window.scrollY < 200) {
                setActiveSection('');
                return;
            }

            // Verificar si estamos cerca del final de la página (para Contact)
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrolledToBottom = scrollPosition + windowHeight >= documentHeight - 100;

            if (scrolledToBottom) {
                setActiveSection('contact');
                return;
            }

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        // Llamar una vez para setear el inicial
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return ( 
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                {/* DESKTOP MENU */}
                <div className="mx-auto hidden max-w-4xl items-center justify-between rounded-2xl border border-white/20 bg-black/60 px-8 py-4 backdrop-blur-lg lg:flex">
                    <div>
                        <a href="#" className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-300">
                            RUBÉN GARCÍA
                        </a>
                    </div>

                    <div>
                        <ul className="flex items-center gap-8">
                            { 
                                NAVIGATION_LINKS.map(
                                    ( { href, label } = item, index ) => (
                                        <li key={index}>
                                            <a 
                                                className={`font-medium transition-colors duration-300 px-3 py-2 rounded-lg ${
                                                    activeSection === href.substring(1) 
                                                    ? 'text-blue-400 bg-blue-400/20 border border-blue-400/30' 
                                                    : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/10'
                                                }`}
                                                href={href}
                                                onClick={(e) => handleLinkClick(e, href)}
                                            >
                                                { label }
                                            </a>
                                        </li>
                                    )
                                ) 
                            }
                        </ul>
                    </div>
                </div>

                {/*DESKTOP MENU*/}
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">

                        <div>
                            <a 
                                className="m-8" 
                                href="#"
                            >
                                RUBÉN GARCÍA
                            </a>
                        </div>

                        <div className="flex items-center">
                            <button 
                                className="focus:outline-none lg:hidden"
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen 
                                    ? (
                                        <FaTimes className="m-2 h-6 w-5"/>
                                    ) 
                                    : (
                                        <FaBars className="m-2 h-6 w-5" />
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    { isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                            {NAVIGATION_LINKS.map(
                                ( { href, label } = item, index ) => (
                                    <li key={index}>
                                        <a
                                            className={`block w-full text-lg px-3 py-2 rounded-lg transition-colors duration-300 ${
                                                activeSection === href.substring(1) 
                                                ? 'text-blue-400 bg-blue-400/20' 
                                                : 'text-gray-300 hover:text-blue-400 hover:bg-blue-400/10'
                                            }`} 
                                            href={href}
                                            onClick={(e) => handleLinkClick(e, href)}
                                        >
                                            { label }
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    ) }
                </div>
            </nav>
        </div>
     );

}
 