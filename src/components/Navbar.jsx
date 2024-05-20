// Navbar.js
import { useContext } from 'react';
import { UserContext } from './Context';

function Navbar() {
    const { name } = useContext(UserContext);

    return (
        <div className='navbar'>
            <h1>¡Hola, {name}!</h1>
        </div>
    );
}

export default Navbar;