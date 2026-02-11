import Papa from 'papaparse';
import type { Vehicle } from '../data/vehicles';

// Reemplaza este URL con el tuyo (Archivo > Compartir > Publicar en la web > CSV)
const GOOGLE_SHEETS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRvSWp-RXLVXXgTG3D3XIj9sEpdCZJ6DEvoFAR0e-1qQQJfB-I7aKRTiqrMjGMvwWz2E3sUgF2kMRdQ/pub?output=csv';

export const fetchVehicles = async (): Promise<Vehicle[]> => {
    try {
        const response = await fetch(GOOGLE_SHEETS_CSV_URL);
        const csvText = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const mappedVehicles: Vehicle[] = results.data
                        .filter((row: any) => {
                            // Validar que la fila no sea un encabezado repetido o esté vacía
                            const hasId = row.id && !isNaN(Number(row.id));
                            const isNotHeader = row.title && row.title.toLowerCase() !== 'title';
                            return hasId && isNotHeader;
                        })
                        .map((row: any) => {
                            // Procesar imágenes: si es una cadena separada por comas, convertir a array
                            let imagesArray: string[] = [];
                            if (row.images) {
                                imagesArray = row.images.split(',')
                                    .map((img: string) => img.trim())
                                    .filter((img: string) => img !== '');
                            }

                            return {
                                id: Number(row.id),
                                title: row.title || '',
                                price: row.price || '',
                                desc: row.desc || '',
                                img: row.img || imagesArray[0] || '',
                                category: (row.category as Vehicle['category']) || 'camiones',
                                images: imagesArray,
                                modelo: row.modelo || '',
                                anio: row.anio || '',
                                motor: row.motor || '',
                                transmision: row.transmision || '',
                                caballaje: row.caballaje || '',
                            };
                        });
                    resolve(mappedVehicles);
                },
                error: (error: any) => {
                    reject(error);
                }
            });
        });
    } catch (error) {
        console.error('Error fetching vehicles from Google Sheets:', error);
        throw error;
    }
};
