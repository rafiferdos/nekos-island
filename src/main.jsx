import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Routes/Routes.jsx'
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider.jsx";

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider } from 'react-helmet-async'

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirebaseProvider>
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>
        </FirebaseProvider>
    </React.StrictMode>,
)
