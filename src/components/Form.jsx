import React, { useState } from 'react';

const Form = (props) => {
    const [color, setColor] = useState([])

    const colorChange = (e) => {
        e.preventDefault();
    }
    return (
        <div className="container">
            <form onSubmit={colorChange} className='form-group'>
                <p>Color
                    <input className='form-control text-center' type="text" name="color" />
                </p>
                <input className='btn btn-success' type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form;