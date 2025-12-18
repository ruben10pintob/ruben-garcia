import { useState, useEffect } from 'react';

// Hook simple y confiable para detectar dispositivos móviles
export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(navigator.maxTouchPoints > 0);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    return isMobile;
};