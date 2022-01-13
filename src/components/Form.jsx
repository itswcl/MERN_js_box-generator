import React, { useState } from 'react';

const Form = (props) => {
    const [color, setColor] = useState("")

    const addColor = (e) => {
        setColor(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color)
        // can use e.target.reset() instead we use setColor back to default value
        setColor("");
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className='form-group'>
                <p>Color
                    <input
                        className='form-control text-center'
                        onChange={addColor}
                        value={color}
                        type="text"
                        name="color"
                        placeholder='enter a color'/>
                </p>
                <input className='btn btn-success' type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form;