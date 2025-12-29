// frontend > src > components > VehicleCard.tsx

import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";

type Props = {
    id: number;
    title: string;
    price: string;
    desc?: string;
    img?: string;
    modelo?: string;
    anio?: string;
    motor?: string;
    transmision?: string;
    caballaje?: string;
};

export default function VehicleCard({ id, title, price, desc, img, modelo, anio, motor, transmision, caballaje }: Props) {
    const [loaded, setLoaded] = useState(false);

    // Sanea título por si viene con '|' accidental al inicio
    const cleanTitle = useMemo(() => title.replace(/^\s*\|\s*/, '').trim(), [title]);

    const waText = `Hola, estoy interesado en el vehículo: ${cleanTitle}. ¿Me brindas más información?`;
    const waHref = `https://wa.me/+5217771810370?text=${encodeURIComponent(waText)}`;

    const logoSrc = document.documentElement.classList.contains("dark")
        ? "/images/logotipo-claro.png"
        : "/images/logotipo.png";

    const candidates = useMemo(() => {
        const raw = (img || "").trim();
        if (!raw) return [] as string[];

        const hasExt = /\.[a-z0-9]+$/i.test(raw);
        const asWebp = (p: string) => p.replace(/\.(png|jpe?g)$/i, ".webp");
        const swap = (p: string) =>
            p.endsWith(".png") ? p.replace(/\.png$/i, ".jpg") : p.replace(/\.jpe?g$/i, ".png");

        if (raw.toLowerCase().endsWith(".webp")) {
            return [raw, raw.replace(/\.webp$/i, ".png"), raw.replace(/\.webp$/i, ".jpg")];
        }
        if (hasExt) {
            return [asWebp(raw), raw, swap(raw)];
        }
        return [`${raw}.webp`, `${raw}.png`, `${raw}.jpg`];
    }, [img]);

    const [currentSrc, setCurrentSrc] = useState<string>(candidates[0] || logoSrc);

    useEffect(() => {
        setLoaded(false);
        setCurrentSrc(candidates[0] || logoSrc);
    }, [candidates, logoSrc]);

    const specs = useMemo(() => {
        const s: Record<string, string | undefined> = {};
        if (modelo) s.modelo = modelo;
        if (anio) s.anio = anio;
        if (motor) s.motor = motor;
        if (transmision) s.transmision = transmision;
        if (caballaje) s.caballaje = caballaje;

        const yearMatch = cleanTitle.match(/\b(19|20)\d{2}\b/);
        if (!s.anio && yearMatch) s.anio = yearMatch[0];
        const modelFromTitle = yearMatch ? cleanTitle.replace(yearMatch[0], "").trim().replace(/[\s-–]+$/, "") : cleanTitle.trim();
        if (!s.modelo && modelFromTitle) s.modelo = modelFromTitle;
        if (!s.motor && desc) {
            const motorMatch = desc.match(/Motor\s+([^,;]+)/i);
            if (motorMatch) s.motor = motorMatch[1].trim();
        }
        if (!s.transmision && desc) {
            const transMatch = desc.match(/Transmisi[oó]n\s+([^,;]+)/i) || desc.match(/Caja(?:\s+de\s+velocidades)?\s+([^,;]+)/i);
            if (transMatch) s.transmision = transMatch[1]?.trim?.() || transMatch[0].trim();
        }
        if (!s.caballaje && desc) {
            const hpMatch = desc.match(/(\d+(?:[.,]\d+)?)\s*HP/i);
            if (hpMatch) s.caballaje = `${hpMatch[1].replace(',', '')} HP`;
        }
        return s;
    }, [title, desc, modelo, anio, motor, transmision, caballaje]);

    const rows = useMemo(() => {
        const r: Array<{ label: string; value?: string }> = [
            { label: 'MODELO', value: specs.modelo },
            { label: 'AÑO', value: specs.anio },
            { label: 'MOTOR', value: specs.motor },
            { label: 'TRANSMISIÓN', value: specs.transmision },
            { label: 'CABALLAJE', value: specs.caballaje },
        ];
        return r.filter(x => x.value && x.value.trim().length > 0);
    }, [specs]);

    const hasStructured = rows.length > 0;

    const normalizeSentence = (s?: string) => {
        if (!s) return s;
        const lower = s.toLocaleLowerCase('es-MX');
        return lower.replace(/^\s*([a-zñáéíóúü])/i, (_m, c) => c.toLocaleUpperCase('es-MX'));
    };

    return (
        <article
            className="group relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-blue-500/30 w-full max-w-sm mx-auto sm:max-w-none flex flex-col"
        >
            <Link to={`/vehicle/${id}`} className="flex flex-col flex-1 h-full">
                {/* Media */}
                <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-gray-50 to-white shrink-0">
                    {!loaded && (
                        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100" />
                    )}

                    {currentSrc ? (
                        <img
                            src={currentSrc}
                            alt={cleanTitle}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            onLoad={() => setLoaded(true)}
                            onError={() => {
                                const idx = candidates.indexOf(currentSrc);
                                const next = idx >= 0 && idx < candidates.length - 1 ? candidates[idx + 1] : null;
                                setCurrentSrc(next || logoSrc);
                            }}
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                    ) : (
                        <img
                            src={logoSrc}
                            alt="Sin imagen"
                            loading="lazy"
                            decoding="async"
                            onLoad={() => setLoaded(true)}
                            className="h-full w-full object-contain"
                        />
                    )}

                    <div className="absolute right-0 top-0 rounded-bl-xl bg-[#006CFA] px-3 py-2 text-base font-bold md:text-lg text-white shadow-[0_4px_14px_rgba(0,0,0,0.15)] whitespace-nowrap z-10">
                        {price}
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/90 to-transparent" />
                </div>

                <div className="flex flex-col flex-1 px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 pt-3 sm:pt-4">
                    <h3
                        className="text-sm sm:text-base md:text-lg font-bold text-gray-900 transition-colors group-hover:text-[#006CFA]"
                        title={cleanTitle}
                    >
                        {cleanTitle}
                    </h3>

                    {hasStructured ? (
                        <div className="mt-1 sm:mt-2 mb-3 sm:mb-4">
                            <div className="overflow-hidden rounded-xl border border-gray-200 divide-y divide-gray-200">
                                {rows.map((row, i) => (
                                    <div key={i} className="grid grid-cols-2 min-w-0">
                                        <div className="bg-white px-3 py-2 text-left text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-600 truncate min-w-0" title={row.label}>
                                            {row.label}
                                        </div>
                                        <div className="bg-white px-3 py-2 text-right text-base sm:text-lg text-gray-900 truncate min-w-0" title={row.value}>
                                            {normalizeSentence(row.value)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="mt-1 sm:mt-2 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed text-gray-700 line-clamp-3 sm:line-clamp-none">
                            {desc}
                        </p>
                    )}
                </div>
            </Link>

            {/* CTA */}
            <div className="px-3 sm:px-4 md:px-5 pb-4 grid grid-cols-2 gap-2">
                <Link
                    to={`/vehicle/${id}`}
                    className="flex items-center justify-center rounded-xl bg-gray-100 px-2 py-2 text-xs sm:text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-all shadow-sm ring-1 ring-black/5"
                >
                    Más información
                </Link>
                <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta inline-flex items-center justify-center gap-1 rounded-xl bg-[#FBCC13] px-2 py-2 text-xs sm:text-sm font-semibold text-black hover:brightness-95 transition-all shadow-sm ring-1 ring-black/5"
                >
                    <MdOutlineWhatsapp size={18} className="text-black" />
                    <span>WhatsApp</span>
                </a>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 transition-opacity group-hover:opacity-0" />
        </article>
    );
}
