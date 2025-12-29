import { useState } from 'react';
import { FaShoppingCart, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { id: 'camiones', label: 'Camiones', path: '/camiones' },
        { id: 'coches', label: 'Coches', path: '/coches' },
        { id: 'cortes', label: 'Cortes', path: '/cortes' },
        { id: 'fabrica', label: 'Fábrica', path: '/fabrica' },
    ];

    const socialLinks = [
        { icon: <FaFacebook />, url: 'https://www.facebook.com/boomtractopartes', color: 'text-blue-600' },
        { icon: <FaInstagram />, url: 'https://instagram.com/elboomtractopartes', color: 'text-pink-600' },
        { icon: <FaTiktok />, url: 'https://tiktok.com/@elboomtractopartes', color: 'text-gray-800' },
        { icon: <FaWhatsapp />, url: 'https://wa.me/7771810370', color: 'text-green-600' },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header id="app-navbar" className="fixed top-0 left-0 w-full z-50 shadow-md">
            {/* Top Bar - Socials & Contact */}
            <div className="bg-gray-100 py-1.5 px-4 md:px-8 border-b border-gray-200 hidden sm:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
                    <div className="flex items-center space-x-4 text-gray-600">
                        <span className="flex items-center">
                            <FaPhoneAlt className="mr-2 text-red-600" />
                            777-181-0370
                        </span>
                        <span className="hidden lg:inline border-l border-gray-300 pl-4">
                            ventas.alpuyeca@refaccioneselboom.com
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-500 font-medium">Síguenos:</span>
                        <div className="flex items-center space-x-3">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${social.color} hover:scale-125 transition-transform duration-300 text-lg`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="bg-[#FBCC13] py-2 md:py-3 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <a href="https://camiones.refaccioneselboom.com/" aria-label="Ir a la página principal">
                            <img
                                src="/images/logotipo.png"
                                alt="El Boom Tractopartes"
                                className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
                            />
                        </a>
                    </div>

                    {/* Right Side - Actions */}
                    <div className="flex items-center space-x-4">
                        {/* Store CTA Desktop */}
                        <div className="hidden md:flex flex-col items-end mr-4">
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
                            className="text-3xl text-gray-800 md:hidden p-1"
                            aria-label="Menu"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#FBCC13] shadow-2xl border-t border-yellow-500 z-[100]">
                    <div className="flex flex-col p-6 space-y-6">
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

                        {/* Categories Mobile */}
                        <div className="space-y-3">
                            <p className="text-center font-bold text-gray-800 border-b border-yellow-600 pb-2">
                                NUESTRO CATÁLOGO
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={item.path}
                                        className={`py-4 px-4 rounded-lg text-center font-bold transition-all text-sm ${location.pathname.includes(item.id)
                                            ? 'bg-white text-[#C71940] shadow-inner'
                                            : 'bg-yellow-400 text-gray-800 hover:bg-yellow-200'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Socials & Contact Mobile */}
                        <div className="space-y-4 pt-4">
                            <div className="flex justify-center space-x-8">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-4xl ${social.color} hover:scale-110 transition-transform`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                            <div className="text-center text-gray-700 text-sm font-medium">
                                <p className="flex items-center justify-center">
                                    <FaPhoneAlt className="mr-2 text-red-600" />
                                    777-181-0370
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
