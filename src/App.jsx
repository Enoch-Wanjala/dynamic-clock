
import { useState } from 'react'
import { format } from 'date-fns'
import './App.css'

//imported the format function from date-fns to format date and time 
function App() {
  const [count, setCount] = useState(0)

  const now = new Date()

  return (

    <div className="color-clock">
      <h1 className="color-clock-title">Color Clock</h1>
      <div className="clock-format">
        {/* displaying the current date and time using the format function */}
        <p className='clock-time'>{format(now, 'HH:mm:ss')}</p>
        <p className='clock-date'>{format(now, 'yyyy-MM-dd')}</p>
        
      </div>
    </div>
  )
}

export default App
