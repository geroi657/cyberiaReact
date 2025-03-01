import { createContext, useEffect, useState } from "react";

export const Theme = createContext( undefined );

export default function ThemeProvider({ children }) {

    const [mobile, setMobile] = useState(false);

    const handleMobile = () => {
        if (window.innerWidth <= 414) {
            setMobile(() => true);
        } else {
            setMobile(() => false);
        }
    }

    useEffect(() => {
        if (window.innerWidth <= 414) { setMobile(() => true); }

        window.addEventListener('resize', () => { handleMobile() });

        return () => window.removeEventListener('resize', () => handleMobile());

    }, []);

    return <Theme.Provider value={{ mobile }}>
        { children }
    </Theme.Provider>;
}