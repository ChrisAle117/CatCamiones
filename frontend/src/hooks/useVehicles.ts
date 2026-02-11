import { useState, useEffect } from 'react';
import type { Vehicle } from '../data/vehicles';
import { fetchVehicles } from '../services/googleSheetsService';

export const useVehicles = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setIsLoading(true);
                const data = await fetchVehicles();
                setVehicles(data);
                setError(null);
            } catch (err) {
                console.error('Failed to load vehicles:', err);
                setError(err instanceof Error ? err : new Error('Unknown error loading data'));
            } finally {
                setIsLoading(false);
            }
        };

        loadData();
    }, []);

    return { vehicles, isLoading, error };
};
