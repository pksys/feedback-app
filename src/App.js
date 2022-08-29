import Header from './components/Header.jsx'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList.jsx'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedback = {feedback}/>
      </div>
    </>
  )
}

export default App
