import React, { useState } from 'react'
import data from './data'
import './Accordion.css'
const Accordion = () => {

    const [selected , setSelected] = useState(null);
    const handleSingleSelection = (getId) =>{
        setSelected(getId === selected ? null : getId);
    }
  return (
    <div className='wrapper'>
        {
            data && data.length > 0 ?
            data.map(dataItems =>
            <div className="item">
                <div onClick={()=>handleSingleSelection(dataItems.id)} className="title">
                    <h3>{dataItems.question}</h3>
                    <span> + </span>
                    {
                        selected === dataItems.id ?
                        <div className="content">
                            {dataItems.answer}
                        </div>
                        : null
                    }
                </div>
            </div>
            ) 
            :
            <div>
                No data found !
            </div>
            
        }
    </div>
  )
}

export default Accordion