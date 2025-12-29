import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="border-t bg-white w-full">
            <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Catálogo de camiones</h3>
                        <p className="text-gray-500">En El Boom Tractopartes, contamos con camiones totalmente listos para trabajar. <br />
                            Contamos con tractocamiones, camiones, volteos, plataformas, camiones de carga y más. <br />
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-center">Redes sociales</h3>
                        <p className="mb-4 text-center">¡Síguenos en nuestras redes sociales!</p>
                        <p className="text-center text-gray-600 mb-3 font-medium">@elboomtractopartes</p>
                        {/* Ajuste específico para pantallas entre 768px y 1250px */}
                        <div className="flex flex-wrap justify-center md:gap-4 lg:gap-0 lg:space-x-6">
                            <a href="https://www.facebook.com/boomtractopartes" target="_blank" rel="noopener noreferrer"  
                               className="text-3xl text-blue-600 hover:text-blue-800 hover:scale-110 transition-all duration-200 mx-3 md:mx-0 md:mb-2 lg:mb-0">
                                <FaFacebook />
                                <span className="sr-only">Facebook: El Boom Tractopartes</span>
                            </a>
                            <a href="https://instagram.com/elboomtractopartes" target="_blank" rel="noopener noreferrer" 
                               className="text-3xl text-pink-600 hover:text-pink-800 hover:scale-110 transition-all duration-200 mx-3 md:mx-0 md:mb-2 lg:mb-0">
                                <FaInstagram />
                                <span className="sr-only">Instagram: @elboomtractopartes</span>
                            </a>
                            <a href="https://tiktok.com/@elboomtractopartes" target="_blank" rel="noopener noreferrer" 
                               className="text-3xl text-gray-800 hover:text-gray-600 hover:scale-110 transition-all duration-200 mx-3 md:mx-0 md:mb-2 lg:mb-0">
                                <FaTiktok />
                                <span className="sr-only">TikTok: @elboomtractopartes</span>
                            </a>
                            <a href="https://wa.me/7771810370" target="_blank" rel="noopener noreferrer" 
                               className="text-3xl text-green-600 hover:text-green-800 hover:scale-110 transition-all duration-200 mx-3 md:mx-0 md:mb-2 lg:mb-0">
                                <FaWhatsapp />
                                <span className="sr-only">WhatsApp: El Boom Tractopartes</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
                        <ul className="space-y-2 text-gray-500">
                            <li>Teléfono: 777-181-0370</li>
                            <li>Correo: ventas.alpuyeca@refaccioneselboom.com</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} El Boom Tractopartes. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    )
}
