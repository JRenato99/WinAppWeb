import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        setShowSidebar (location.pathname.startsWith("/home/admin")); //Solo en Asmin
    }, [location.pathname]);

    return(
        <div className="Layout">
            {/* Barra superopr */}
            <nav className="topbar">
                <ul> 
                    <li><a href="/home/overview">Overview</a></li>
                    <li><a href="/home/devices">Devices</a></li>
                    <li><a href="/home/faults">Faults</a></li>
                    <li><a href="/home/admin">Admin</a></li>
                </ul>
            </nav>
            <div>
                {showSidebar &&(
                <aside>
                    <ul>
                        <li><a href="/home/admin/presets">Presets</a></li>
                        <li><a href="/home/admin/provisions">Provisions</a></li>
                        <li><a href="/home/admin/files">Files</a></li>
                        <li><a href="/home/admin/config">Config</a></li>
                        <li><a href="/home/admin/permissions">Permissions</a></li>
                        <li><a href="/home/admin/users">Users</a></li>
                    </ul>
                </aside>
                )}

            {/* Contenido principql.*/}
            <main>{children}</main>
            </div>
        </div>
    );

}

export default Layout;