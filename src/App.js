import Header from './components/Header.jsx'
import FeedbackStats from './components/FeedbackStats'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList.jsx'
import FeedbackForm from './components/FeedbackForm'
import { useState } from 'react'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id))
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList handleDelete={deleteFeedback} feedback={feedback} />
      </div>
    </>
  )
}

export default App
