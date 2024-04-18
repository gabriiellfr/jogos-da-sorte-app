import {
    RouterProvider as RouterProviderRRD,
    createBrowserRouter,
    Navigate,
} from 'react-router-dom';

import { AppLayout, AuthLayout } from '../layouts';

import { LoginPage, RegisterPage } from '../pages/auth';
import { HomePage } from '../pages/app';

import PocketBaseProvider from './pocketBase.provider';

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <LoginPage />,
                path: '/login',
            },
            {
                element: <RegisterPage />,
                path: '/register',
            },
        ],
    },
    {
        element: <AppLayout />,
        children: [
            {
                element: <HomePage />,
                path: '/',
            },
        ],
    },
    { path: '*', element: <Navigate to="/" replace /> },
]);

const RouterProvider = () => {
    return (
        <PocketBaseProvider>
            <RouterProviderRRD
                router={router}
                fallbackElement={<p>Initial Load...</p>}
            />
        </PocketBaseProvider>
    );
};

export default RouterProvider;
