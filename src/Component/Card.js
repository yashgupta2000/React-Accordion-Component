import React, { useState } from 'react'
import Subcard from './Subcard'

export default function Card() {

    const [showItem, setShowItem] = useState(0)

    const data = [
        {
            index: 1,
            title: '1. Who am I?',
            value: 'I am a passionate software developer with a strong foundation in frontend technologies like React. I enjoy building interactive and responsive user interfaces that enhance user experience'
        },
        {
            index: 2,
            title: '2. What are my core technical skills? ',
            value: 'I specialize in JavaScript, React, and modern web development practices. My expertise includes building reusable components, managing state, and optimizing performance. I also have experience with backend technologies, version control (Git), and deploying applications.'
        },
        {
            index: 3,
            title: '3. How do I approach problem-solving',
            value: 'I follow a methodical approach to problem-solving, breaking down complex issues into manageable tasks. I use tools like debugging and code reviews to ensure the quality and functionality of my solutions.'
        }
    ]
    const handleClick = (index) => {
        setShowItem(index)
    }
    return (<>
    <h1 className='text-center mt-5 text-2xl font-bold'>ACCORDION</h1>
        <div className="flex items-center justify-center ">

            <div className='flex flex-col w-3/4 mt-20'>
                {
                    data.map((item, index) => (
                        <div key={index} onClick={() => handleClick(item.index)}>
                            <Subcard showItem={showItem} title={item.title} value={item.value} index={item.index} setShowItem={setShowItem} />
                        </div>
                    ))
                }
            </div>
        </div>
    </>

    )
}
