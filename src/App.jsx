
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import './App.css'

//imported the format function from date-fns to format date and time 
function App() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

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
