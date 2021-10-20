import './Board.css';
import { useState } from 'react';

const Cell = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const valueSetter = () => {
        props.player ? setValue('X') : setValue('O');
        console.log(props.value)
    }

    return (
        <button className='cell' onClick={() => {
            setOpen(true); 
            props.playerToggler();
            console.log(props.player);
            valueSetter();
        }}>
            {open ? (value) : <></>}
        </button>
    )
}

export default Cell;