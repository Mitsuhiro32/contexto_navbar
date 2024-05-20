import { useContext } from 'react';
import { UserContext } from './Context';

function Form() {
    const { name, setName } = useContext(UserContext);

    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="name">Tu nombre: </label>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
        </form>
    );
}

export default Form;