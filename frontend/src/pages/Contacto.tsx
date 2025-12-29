export default function Contacto() {
    return (
        <div className="w-full bg-gray-50">
            <div className="w-full bg-blue-700 text-white py-8 px-4 sm:px-6 lg:px-8 mb-6">
                <div className="container mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold">Contacto</h1>
                </div>
            </div>
            
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                        <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
                        <div className="space-y-4 text-lg">
                            <p className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Teléfono: <strong>55 1234 5678</strong>
                            </p>
                            <p className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Correo: <strong>ventas@catcamiones.com</strong>
                            </p>
                            <p className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Ubicación: <strong>CDMX</strong>
                            </p>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-3">Horario de Atención</h3>
                            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                            <p>Sábados: 9:00 AM - 2:00 PM</p>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-100">
                        <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Correo</label>
                                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                                <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
                            </div>
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
