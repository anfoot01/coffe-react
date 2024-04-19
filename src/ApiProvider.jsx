import { Outlet, useLocation } from 'react-router-dom';
import { createContext, useMemo } from 'react';
import { Header } from './shared/components/Header/Header';
import { Sidebar } from './shared/components/Sidebar/Sidebar';

export const ApiContext = createContext({});

export const ApiProvider = () => {
    const location = useLocation();
    const currentPath = location.pathname;    
    console.log(currentPath);
    const value = useMemo(() => ({}), []);

    return (
        <ApiContext.Provider value={value}>
            {currentPath !== "/product" && <Header />}
            <div className="main">
                <Outlet />
            </div>
            {currentPath !== "/product" && <Sidebar />}
        </ApiContext.Provider>
    );
};