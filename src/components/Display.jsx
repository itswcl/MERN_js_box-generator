import React, { useState } from 'react';

const Display = (props) => {


    return (
        <>
            {JSON.stringify(props)}
            <p>Color</p>
            <div className='d-flex flex-wrap'>
                {
                    props.colors.map((color, i) => {
                        return (
                            <div className="m-1 border"
                                key={i}
                                style={{
                                    backgroundColor: color,
                                    width: "55px",
                                    height: "55px"
                                }}>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Display