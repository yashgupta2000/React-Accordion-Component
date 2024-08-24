import React, { useState } from 'react'

export default function Subcard({ title, value, index, showItem, setShowItem }) {

    return (
        <div className=' '>
            <div className='mt-4 rounded-md p-5 bg-mustard border-l-4  border-borderYellow'>
                <h1>{title}</h1>
            </div>

            {
                showItem == index ? <div className='mt-1 bg-purple rounded-md p-5  border-l-4 border-borderPurple'>
                    <p>{value}</p>
                </div> : null
            }

        </div>
    )
}
