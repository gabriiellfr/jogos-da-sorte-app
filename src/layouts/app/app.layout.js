import { Outlet } from 'react-router-dom';

import { FooterComponent, HeaderComponent } from '../../components';

const AppLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderComponent />

            <main className="flex-1 pt-16 pb-20">
                <Outlet />
            </main>

            <FooterComponent />
        </div>
    );
};

export default AppLayout;
