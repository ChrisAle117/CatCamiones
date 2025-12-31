import { useParams, useNavigate, Link, useOutletContext } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { vehicles } from '../data/vehicles';
import { MdOutlineWhatsapp, MdArrowBack, MdCalendarToday, MdSettings, MdBolt, MdInfoOutline } from 'react-icons/md';
import { HiOutlineTag } from 'react-icons/hi';
import { GiGearStick } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

export default function VehicleDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);
    const { navHeight } = useOutletContext<{ navHeight: number }>();

    const vehicle = useMemo(() => {
        return vehicles.find(v => v.id === Number(id));
    }, [id]);

    const relatedVehicles = useMemo(() => {
        if (!vehicle) return [];
        return vehicles
            .filter(v => v.category === vehicle.category && v.id !== vehicle.id)
            .slice(0, 4);
    }, [vehicle]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveImage(0);
    }, [id]);

    if (!vehicle) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
                <h2 className="text-2xl font-bold text-gray-800">Vehículo no encontrado</h2>
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 px-6 py-2 bg-[#006CFA] text-white rounded-xl hover:bg-blue-700 transition-colors"
                >
                    Volver al inventario
                </button>
            </div>
        );
    }

    const cleanTitle = vehicle.title.replace(/^\s*\|\s*/, '').trim();
    const waText = `Hola, estoy interesado en el vehículo: ${cleanTitle}. ¿Me brindas más información?`;
    const waHref = `https://wa.me/+5217771810370?text=${encodeURIComponent(waText)}`;

    const specs = [
        { label: 'MODELO', value: vehicle.modelo, icon: <HiOutlineTag className="text-blue-500" /> },
        { label: 'AÑO', value: vehicle.anio, icon: <MdCalendarToday className="text-red-500" /> },
        { label: 'MOTOR', value: vehicle.motor, icon: <MdSettings className="text-gray-600" /> },
        { label: 'TRANSMISIÓN', value: vehicle.transmision, icon: <GiGearStick className="text-orange-500" /> },
        { label: 'CABALLAJE', value: vehicle.caballaje, icon: <MdBolt className="text-yellow-500" /> },
    ].filter(s => s.value);

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Navigation Header */}
            <div
                className="sticky z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 mb-6"
                style={{ top: navHeight }}
            >
                <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#006CFA] transition-colors font-medium"
                    >
                        <MdArrowBack size={20} />
                        Regresar
                    </button>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        {vehicle.category}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Images */}
                    <div className="space-y-4">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl group">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImage}
                                    src={vehicle.images[activeImage]}
                                    alt={cleanTitle}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full object-contain"
                                />
                            </AnimatePresence>

                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#006CFA] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-lg sm:text-xl shadow-lg whitespace-nowrap z-10">
                                {vehicle.price}
                            </div>
                        </div>

                        {/* Thumbnails */}
                        {vehicle.images.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                {vehicle.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveImage(idx)}
                                        className={`relative w-24 aspect-square rounded-xl overflow-hidden border-2 transition-all shrink-0 ${activeImage === idx ? 'border-[#006CFA] ring-2 ring-blue-100' : 'border-transparent hover:border-gray-300'
                                            }`}
                                    >
                                        <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side: Details */}
                    <div className="flex flex-col h-full space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                                {cleanTitle}
                            </h1>
                            <div className="flex items-center gap-2 text-gray-500 font-bold text-sm uppercase tracking-wider mb-6">
                                <span className="bg-gray-100 px-3 py-1 rounded-full">{vehicle.category}</span>
                            </div>
                        </div>

                        {/* Technical Specs Table */}
                        <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm">
                            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 px-2 flex items-center gap-2">
                                <MdInfoOutline size={18} />
                                Características Técnicas
                            </h2>
                            <div className="grid grid-cols-1 gap-1">
                                {specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 rounded-xl hover:bg-white transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xl">{spec.icon}</span>
                                            <span className="text-gray-500 font-medium text-sm">{spec.label}</span>
                                        </div>
                                        <span className="text-gray-900 font-bold text-right text-sm md:text-base">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description Section */}
                        {vehicle.desc && (
                            <div className="bg-blue-50/30 rounded-3xl p-6 border border-blue-100/50">
                                <h2 className="text-sm font-bold text-blue-600/60 uppercase tracking-wider mb-3 px-2">
                                    Información Adicional
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed font-medium px-2">
                                    {vehicle.desc}
                                </p>
                            </div>
                        )}

                        {/* Contact CTA */}
                        <div className="mt-auto space-y-4">
                            <a
                                href={waHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 w-full py-5 bg-[#FBCC13] text-[#E7000B] rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
                            >
                                <MdOutlineWhatsapp size={28} className="text-black" />
                                <span className="text-black">Contactar por WhatsApp</span>
                            </a>
                            <p className="text-center text-sm text-gray-500">
                                Disponibilidad inmediata
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related Vehicles Section */}
                {relatedVehicles.length > 0 && (
                    <div className="mt-24">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">Vehículos Relacionados</h2>
                            <Link to={`/${vehicle.category}`} className="text-[#006CFA] font-bold hover:underline">
                                Ver todo en {vehicle.category}
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedVehicles.map((rv) => (
                                <Link
                                    key={rv.id}
                                    to={`/vehicle/${rv.id}`}
                                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
                                >
                                    <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
                                        <img
                                            src={rv.images[0] || rv.img}
                                            alt={rv.title}
                                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-900 truncate mb-1">{rv.title}</h3>
                                        <p className="text-[#006CFA] font-bold">{rv.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
