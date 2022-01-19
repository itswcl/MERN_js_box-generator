import React, { useState } from 'react';

const Display = (props) => {


    return (
        <>
            {/* {JSON.stringify(props)} */}
            <div className='d-flex flex-wrap'>
                {
                    props.colors.map((color, i) => {
                        return (
                            <div className="m-1 border"
                                key={i}
                                style={{
                                    backgroundColor: color,
                                    width: props.sizes[i] + "px",
                                    height: props.sizes[i] + "px"
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