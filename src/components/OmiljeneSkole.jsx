import React, { useState } from 'react'
 
import SkolaComponenta from './SkolaComponenta';

function OmiljeneSkole({skole,onAdd,onRemove }) {
 
  return (
    <div>
 
        <div className='sveSkole'>
              
     
                {skole.map((t)=>(<SkolaComponenta key={t.id} skola={t}   onAdd={onAdd} onRemove={onRemove} ></SkolaComponenta>))}
               
                     
            
              
              

        </div>
    </div>
  )
}

export default OmiljeneSkole;