import { useState } from 'react';
import { UserContext } from './Context';
import PropTypes from 'prop-types';

function Wrapper({ children }) {
    const [name, setName] = useState('Usuario');

    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default Wrapper;