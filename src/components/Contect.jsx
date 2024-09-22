// About.js
import React from 'react';
import { useState } from 'react'

function Contect() {

  const [count, setCount] = useState(0)
 return (
    <>   
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>       
      </div>
      
    </>
  )
    

}

export default Contect;