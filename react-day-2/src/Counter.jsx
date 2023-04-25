import { useState } from 'react'
import './Button'
 export default function Counter() {
     const [count, setCount] = useState(0);
     return <article className="counter">
         <div className="counter-number">
            {count}
         </div>
         <div>
         <Button onClick="" >-</Button>
         <Button>reset</Button>
         <Button>+</Button>
         </div>
    </article>
 }