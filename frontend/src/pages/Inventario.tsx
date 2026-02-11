import { useOutletContext } from 'react-router-dom'
import VehicleCard from '../components/VehicleCard'
import type { Vehicle } from '../data/vehicles'

type ContextType = {
    activeTab: string;
    vehicles: Vehicle[];
    isLoading: boolean;
    searchQuery: string;
}

export default function Inventario() {
    const { activeTab, vehicles, isLoading, searchQuery } = useOutletContext<ContextType>();

    if (isLoading) {
        return (
            <div className="w-full bg-gray-50 min-h-screen">
                <section className="w-full py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-[1920px] mx-auto">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="w-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm flex flex-col h-full min-h-[480px]">
                                <div className="aspect-[4/3] bg-gray-100 animate-pulse" />
                                <div className="px-3 sm:px-4 md:px-5 pb-4 sm:pb-5 pt-3 sm:pt-4 flex-1 flex flex-col space-y-4">
                                    <div className="h-6 bg-gray-100 rounded-md w-3/4 animate-pulse" />
                                    <div className="space-y-2">
                                        <div className="h-4 bg-gray-50 rounded w-full animate-pulse" />
                                        <div className="h-4 bg-gray-50 rounded w-5/6 animate-pulse" />
                                    </div>
                                    <div className="mt-auto grid grid-cols-2 gap-2">
                                        <div className="h-10 bg-gray-50 rounded-xl animate-pulse" />
                                        <div className="h-10 bg-gray-50 rounded-xl animate-pulse" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }

    // Filtrar vehículos según la categoría seleccionada y el buscador
    const filteredVehicles = (vehicles || []).filter(vehicle => {
        const matchesCategory = vehicle.category === activeTab;
        const query = (searchQuery || '').toLowerCase().trim();

        if (!query) return matchesCategory;

        const matchesSearch =
            vehicle.title.toLowerCase().includes(query) ||
            (vehicle.modelo || '').toLowerCase().includes(query) ||
            (vehicle.anio || '').toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="w-full bg-gray-50">
            <section className="w-full py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-[1920px] mx-auto items-stretch content-stretch">
                    {filteredVehicles.length > 0 ? (
                        filteredVehicles.map((v) => (
                            <div key={v.id} className="w-full h-full p-2">
                                <VehicleCard {...v} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-gray-400 text-xl font-medium">No se encontraron vehículos en esta categoría.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
