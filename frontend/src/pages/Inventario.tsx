import { useOutletContext } from 'react-router-dom'
import VehicleCard from '../components/VehicleCard'
import { vehicles } from '../data/vehicles'

type ContextType = { activeTab: string }

export default function Inventario() {
    const { activeTab } = useOutletContext<ContextType>();

    // Filtrar vehículos según la categoría seleccionada
    const filteredVehicles = vehicles.filter(vehicle => vehicle.category === activeTab);

    return (
        <div className="w-full bg-gray-50">
            <section className="w-full py-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-[1920px] mx-auto items-stretch content-stretch">
                    {filteredVehicles.map((v) => (
                        <div key={v.id} className="w-full h-full p-2">
                            <VehicleCard {...v} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
