import { FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav
            id="app-navbar"
            className="bg-[#FBCC13] py-2 sm:py-3 w-full fixed top-0 left-0 z-50 shadow-md "
        >
            <div className="w-full px-4 flex flex-col md:flex-row items-center">
                <div className="flex justify-center md:justify-start md:ml-0 lg:ml-[2%] w-full md:w-1/4 lg:w-1/6 mb-4 md:mb-0">
                    <a href="https://refaccioneselboom.com/" aria-label="Ir a la página principal">
                        <img
                            src="/images/logotipo.png"
                            alt="El Boom Tractopartes"
                            className="h-16 sm:h-20 md:h-[45px] lg:h-[75px] w-auto transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
                        />
                    </a>
                </div>

                <div className="w-full md:flex md:flex-col md:justify-center md:items-center md:w-2/4 lg:w-4/6 px-4 mb-4 md:mb-0">
                    <p className="text-center font-medium mb-2 sm:mb-3">
                        ¿Buscas comprar accesorios y/o refacciones para tu camión?
                    </p>
                    <a
                        href="https://refaccioneselboom.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#C71940] text-white font-bold py-2 sm:py-3 md:py-2 lg:py-3  px-4 sm:px-5 md:px-3 lg:px-6 rounded-lg shadow-lg hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center whitespace-nowrap"
                    >
                        <span className="text-sm sm:text-base md:text-xs lg:text-base flex items-center">
                            <FaShoppingCart className="text-base sm:text-lg md:text-sm lg:text-xl" />
                            <span className="ml-2 sm:ml-2 md:ml-2 lg:ml-3">
                                <span className="md:hidden">¡Visita nuestra tienda en línea dando clic aquí!</span>
                                <span className="hidden md:inline xl:hidden">¡Visita nuestra tienda en línea dando clic aquí!</span>
                                <span className="hidden xl:inline">¡Visita nuestra tienda en línea dando clic aquí!</span>
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
