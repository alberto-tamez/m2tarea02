// pages/_app.js
import { useEffect, useState, createContext, useContext } from 'react';
import { supabase } from '../utils/supabaseClient';

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <UserContext.Provider value={{ session }}>
            <Component {...pageProps} />
        </UserContext.Provider>
    );
}

export default MyApp;
