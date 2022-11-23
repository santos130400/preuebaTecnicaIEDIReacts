import React from 'react';
import Estilos from './Navbar.module.css'

const Navbar = ({brand}) => {
    return ( 
        <nav>
            <div className={Estilos.container}>
                <a className={Estilos.brand}>{brand}</a>
            </div>
        </nav>
    );
}
 
export default Navbar;