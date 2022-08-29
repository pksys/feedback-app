import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback</p>
  }

  return (
    <div className='item-list'>
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />
      })}
    </div>
  )
}

export default FeedbackList
