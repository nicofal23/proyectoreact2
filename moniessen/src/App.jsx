import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './components/NavBar/NavBar.module.css'
import './App.css';
import ImagenLogo from './components/Logo/ImagenLogo';
import RouterPrincipal from './routers/RouterPrincipal';

const App = () => {
    return (
      <>
        <header>
            <ImagenLogo /> 
             
        </header>
        <main>
            <RouterPrincipal/>
        </main>
        </>
    );
}

export default App;
