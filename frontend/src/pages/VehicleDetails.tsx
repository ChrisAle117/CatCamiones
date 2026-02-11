import { useParams, useNavigate, Link, useOutletContext } from 'react-router-dom';
import { useState, useMemo, useEffect, useRef } from 'react';
import type { Vehicle } from '../data/vehicles';
import { MdOutlineWhatsapp, MdArrowBack, MdCalendarToday, MdSettings, MdBolt, MdInfoOutline, MdChevronLeft, MdChevronRight, MdClose, MdFullscreen, MdZoomIn } from 'react-icons/md';
import { HiOutlineTag } from 'react-icons/hi';
import { GiGearStick } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';

type ContextType = {
    vehicles: Vehicle[];
    isLoading: boolean;
    navHeight: number;
}

export default function VehicleDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [zoom, setZoom] = useState(false);
    const { navHeight, vehicles, isLoading } = useOutletContext<ContextType>();
    const thumbnailContainerRef = useRef<HTMLDivElement>(null);

    const vehicle = useMemo(() => {
        return (vehicles || []).find(v => v.id === Number(id));
    }, [id, vehicles]);

    const relatedVehicles = useMemo(() => {
        if (!vehicle || !vehicles) return [];
        return vehicles
            .filter(v => v.category === vehicle.category && v.id !== vehicle.id)
            .slice(0, 4);
    }, [vehicle, vehicles]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveImage(0);
    }, [id]);

    const nextImage = () => {
        if (!vehicle) return;
        setActiveImage((prev) => (prev + 1) % vehicle.images.length);
    };

    const prevImage = () => {
        if (!vehicle) return;
        setActiveImage((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isLightboxOpen) {
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
                if (e.key === 'Escape') setIsLightboxOpen(false);
            } else {
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, vehicle]);

    useEffect(() => {
        if (thumbnailContainerRef.current) {
            const activeButton = thumbnailContainerRef.current.children[activeImage] as HTMLElement;
            if (activeButton) {
                activeButton.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeImage]);

    if (isLoading) {
        return (
            <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white">
                <div className="w-12 h-12 border-4 border-[#006CFA] border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500 font-bold animate-pulse">Cargando detalles...</p>
            </div>
        );
    }

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
                        aria-label="Regresar al listado"
                    >
                        <MdArrowBack size={24} />
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
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl group cursor-zoom-in"
                            onClick={() => setIsLightboxOpen(true)}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImage}
                                    src={vehicle.images[activeImage]}
                                    alt={cleanTitle}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-full object-contain"
                                />
                            </AnimatePresence>

                            {/* Navigation Arrows */}
                            {vehicle.images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-gray-800 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center z-10"
                                        aria-label="Imagen anterior"
                                    >
                                        <MdChevronLeft size={48} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg text-gray-800 transition-all opacity-0 group-hover:opacity-100 hidden md:flex items-center justify-center z-10"
                                        aria-label="Siguiente imagen"
                                    >
                                        <MdChevronRight size={48} />
                                    </button>
                                </>
                            )}

                            {/* Fullscreen Button */}
                            <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                                <MdFullscreen size={28} />
                            </div>

                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#006CFA] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-bold text-lg sm:text-xl shadow-lg whitespace-nowrap z-10">
                                {vehicle.price}
                            </div>

                            {/* Image Counter Overlay */}
                            {vehicle.images.length > 1 && (
                                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold border border-white/20 z-10">
                                    {activeImage + 1} / {vehicle.images.length}
                                </div>
                            )}
                        </div>

                        {/* Thumbnails */}
                        {vehicle.images.length > 1 && (
                            <div className="relative group/thumbs">
                                <div
                                    ref={thumbnailContainerRef}
                                    className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide px-2 pt-2"
                                    style={{
                                        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
                                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
                                    }}
                                >
                                    {vehicle.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImage(idx)}
                                            className={`relative w-24 aspect-square rounded-xl overflow-hidden border-2 transition-all shrink-0 ${activeImage === idx ? 'border-[#006CFA] ring-4 ring-blue-100 scale-105 z-10' : 'border-transparent hover:border-gray-300 opacity-70 hover:opacity-100'
                                                }`}
                                            aria-label={`Ver imagen ${idx + 1}`}
                                        >
                                            <img src={img} alt={`Vista ${idx + 1}`} width="96" height="96" className="w-full h-full object-cover" loading="lazy" />
                                        </button>
                                    ))}
                                </div>

                                {/* Scroll Arrows for Thumbnails */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-full bg-gradient-to-r from-white via-white/80 to-transparent flex items-center justify-start pl-1 opacity-100 md:opacity-0 group-hover/thumbs:opacity-100 transition-opacity z-20"
                                    aria-label="Anterior galería"
                                >
                                    <MdChevronLeft className="text-[#006CFA]" size={44} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-full bg-gradient-to-l from-white via-white/80 to-transparent flex items-center justify-end pr-1 opacity-100 md:opacity-0 group-hover/thumbs:opacity-100 transition-opacity z-20"
                                    aria-label="Siguiente galería"
                                >
                                    <MdChevronRight className="text-[#006CFA]" size={44} />
                                </button>
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
                                <MdInfoOutline size={22} />
                                Características Técnicas
                            </h2>
                            <div className="grid grid-cols-1 gap-1">
                                {specs.map((spec, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 rounded-xl hover:bg-white transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">{spec.icon}</span>
                                            <span className="text-gray-500 font-bold text-base">{spec.label}</span>
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
                                className="flex items-center justify-center gap-3 w-full py-5 bg-[#FBCC13] text-[#E7000B] rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] active:scale-[0.99]"
                            >
                                <MdOutlineWhatsapp size={32} className="text-black" />
                                <span className="text-black text-xl">Contactar por WhatsApp</span>
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
                                    aria-label={`Ver detalles de ${rv.title}`}
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => { setIsLightboxOpen(false); setZoom(false); }}
                            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors z-50"
                        >
                            <MdClose size={40} />
                        </button>

                        {/* Image Container */}
                        <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-12 overflow-hidden">
                            <motion.img
                                key={activeImage}
                                src={vehicle.images[activeImage]}
                                alt={cleanTitle}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: 1,
                                    scale: zoom ? 1.5 : 1,
                                    cursor: zoom ? 'zoom-out' : 'zoom-in'
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                onClick={() => setZoom(!zoom)}
                                className="max-w-full max-h-full object-contain select-none"
                            />

                            {/* Lightbox Navigation */}
                            {vehicle.images.length > 1 && !zoom && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-5 rounded-full text-white transition-all backdrop-blur-md"
                                    >
                                        <MdChevronLeft size={56} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-5 rounded-full text-white transition-all backdrop-blur-md"
                                    >
                                        <MdChevronRight size={56} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Lightbox Footer/Counter */}
                        {!zoom && (
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                                <div className="text-white bg-white/10 px-6 py-2 rounded-full font-bold text-lg backdrop-blur-md">
                                    {activeImage + 1} / {vehicle.images.length}
                                </div>
                                <div className="flex gap-3 overflow-x-auto max-w-[90vw] scrollbar-hide pb-4">
                                    {vehicle.images.map((img, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImage(idx)}
                                            className={`relative w-24 md:w-32 aspect-square rounded-xl overflow-hidden border-4 transition-all shrink-0 ${activeImage === idx ? 'border-white scale-110 shadow-2xl' : 'border-transparent opacity-50 hover:opacity-100'
                                                }`}
                                        >
                                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Zoom Hint */}
                        <div className="absolute bottom-4 left-4 text-white/70 text-sm flex items-center gap-2 font-bold bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                            <MdZoomIn size={20} />
                            {zoom ? 'Click para alejar' : 'Click para ampliar'}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
}
