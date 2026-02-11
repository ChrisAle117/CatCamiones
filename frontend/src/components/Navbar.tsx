import { useState } from 'react';
import { FaShoppingCart, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaYoutube, FaPhoneAlt, FaTruck, FaCar, FaCut, FaTools } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { id: 'camiones', label: 'Camiones', path: '/camiones', icon: <FaTruck /> },
        { id: 'coches', label: 'Coches', path: '/coches', icon: <FaCar /> },
        { id: 'cortes', label: 'Cortes', path: '/cortes', icon: <FaCut /> },
        { id: 'fabrica', label: 'Fábrica', path: '/fabrica', icon: <FaTools /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    const socialLinks = [
        { icon: <FaFacebook />, url: 'https://www.facebook.com/boomtractopartes', color: 'text-blue-600', label: 'Facebook' },
        { icon: <FaInstagram />, url: 'https://instagram.com/elboomtractopartes', color: 'text-pink-600', label: 'Instagram' },
        { icon: <FaTiktok />, url: 'https://tiktok.com/@elboomtractopartes', color: 'text-gray-800', label: 'TikTok' },
        { icon: <FaYoutube />, url: 'https://www.youtube.com/channel/UCQa22awfS3vx5iRdxKS9-Ag', color: 'text-red-700', label: 'YouTube' },
        { icon: <FaWhatsapp />, url: 'https://wa.me/7771810370', color: 'text-green-600', label: 'WhatsApp' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header id="app-navbar" className="fixed top-0 left-0 w-full z-50 shadow-md">
            {/* Main Navbar */}
            <nav className="bg-[#FBCC13] py-2 md:py-3 px-4 md:px-10">
                <div className="w-full flex items-center justify-between md:grid md:grid-cols-3">
                    {/* Left Column - Socials (Desktop Only) */}
                    <div className="hidden md:flex items-center space-x-6">
                        {socialLinks.map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="flex items-center group relative cursor-pointer"
                                initial="initial"
                                whileHover="hover"
                            >
                                <motion.span
                                    className={`${social.color} text-xl lg:text-2xl transition-transform duration-300 group-hover:scale-110`}
                                >
                                    {social.icon}
                                </motion.span>
                                <span className="sr-only">Visítanos en {social.label}</span>

                                <motion.div
                                    variants={{
                                        initial: { width: 0, opacity: 0, marginLeft: 0 },
                                        hover: { width: "auto", opacity: 1, marginLeft: 12 }
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="overflow-hidden whitespace-nowrap"
                                >
                                    <span className="bg-white text-gray-800 px-2 py-1 rounded-md text-[10px] font-bold shadow-sm uppercase tracking-tighter">
                                        {social.label}
                                    </span>
                                </motion.div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Center Column - Logo */}
                    <div className="flex md:justify-center items-center">
                        <Link to="/" aria-label="Ir a la página principal">
                            <span className="sr-only">Ir a la página de inicio de El Boom Tractopartes</span>
                            <img
                                src="/images/logotipo.png"
                                alt="El Boom Tractopartes - Venta de Camiones y Tractopartes"
                                width="200"
                                height="80"
                                className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
                            />
                        </Link>
                    </div>

                    {/* Right Column - Actions */}
                    <div className="flex items-center justify-end space-x-4">
                        {/* Store CTA Desktop */}
                        <div className="hidden md:flex flex-col items-end">
                            <p className="text-[10px] lg:text-xs font-bold text-gray-800 uppercase tracking-wider mb-1">
                                ¿Buscas refacciones?
                            </p>
                            <a
                                href="https://refaccioneselboom.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#C71940] text-white font-bold py-2 px-4 lg:px-6 rounded-md shadow-lg hover:bg-white hover:text-[#C71940] hover:scale-105 transition-all duration-300 flex items-center justify-center whitespace-nowrap text-xs lg:text-sm"
                            >
                                <FaShoppingCart className="mr-2" />
                                <span>IR A LA TIENDA</span>
                            </a>
                        </div>

                        {/* Hamburger Button (Mobile) */}
                        <button
                            onClick={toggleMenu}
                            className="text-3xl text-gray-800 md:hidden p-1 relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
                            aria-label="Menu"
                        >
                            <div className="relative w-6 h-5">
                                <motion.span
                                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                    className="absolute block h-0.5 w-6 bg-gray-800 rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.span
                                    animate={isMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    className="absolute block h-0.5 w-6 bg-gray-800 rounded-full top-2"
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                    className="absolute block h-0.5 w-6 bg-gray-800 rounded-full top-4"
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="md:hidden absolute top-full left-0 w-full shadow-2xl border-t border-yellow-500 z-[100] overflow-hidden"
                    >
                        {/* Top Section - Yellow */}
                        <div className="bg-[#FBCC13] p-6 pb-2 space-y-6">
                            {/* Store Section Mobile */}
                            <div className="space-y-3">
                                <p className="text-center font-bold text-gray-800 border-b border-yellow-600 pb-2">
                                    RECAMBIOS Y REFACCIONES
                                </p>
                                <a
                                    href="https://refaccioneselboom.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#C71940] text-white font-bold py-4 px-6 rounded-lg shadow-lg text-center flex items-center justify-center space-x-3 text-lg"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FaShoppingCart />
                                    <span>VISITA NUESTRA TIENDA</span>
                                </a>
                            </div>

                            {/* Catalogue Header Only */}
                            <p className="text-center font-bold text-gray-800 border-b border-yellow-600 pb-2">
                                NUESTRO CATÁLOGO
                            </p>
                        </div>

                        {/* Bottom Section - White */}
                        <div className="bg-white p-6 pt-4 space-y-8">
                            {/* Categories Grid - Staggered */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className="grid grid-cols-2 gap-3"
                            >
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <motion.div
                                            variants={itemVariants}
                                            whileTap={{ scale: 0.95 }}
                                            className={`py-4 px-4 rounded-lg flex flex-col items-center justify-center space-y-2 font-bold transition-all text-sm border ${location.pathname.includes(item.id)
                                                ? 'bg-yellow-100 text-[#C71940] shadow-inner border-yellow-200'
                                                : 'bg-gray-50 text-gray-800 border-gray-100 hover:bg-yellow-50 hover:text-[#C71940] hover:border-yellow-200'
                                                }`}
                                        >
                                            <span className="text-2xl opacity-80">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </motion.div>

                            {/* Socials & Contact Mobile */}
                            <div className="space-y-6">
                                <div className="flex justify-center space-x-6">
                                    {socialLinks.map((social, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`text-4xl ${social.color}`}
                                            aria-label={`Seguir en ${social.label}`}
                                        >
                                            <span className="sr-only">Nuestra página de {social.label}</span>
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                                <div className="text-center text-gray-700 text-sm font-medium border-t border-gray-100 pt-4">
                                    <p className="flex items-center justify-center text-lg font-bold">
                                        <FaPhoneAlt className="mr-3 text-red-600" />
                                        777-181-0370
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
