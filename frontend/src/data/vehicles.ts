export type Vehicle = {
    id: number;
    title: string;
    price: string;
    desc?: string;
    img?: string;
    category: 'camiones' | 'cortes' | 'coches' | 'fabrica';
    images: string[];
    modelo?: string;
    anio?: string;
    motor?: string;
    transmision?: string;
    caballaje?: string;
};

// Este array ya no se usa como fuente de verdad, 
// los datos ahora se consumen desde Google Sheets a través del hook useVehicles.
export const vehicles: Vehicle[] = [];