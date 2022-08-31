import Card from '../shared/Card'
import PropTypes from 'prop-types'

const FeedbackItem = ({ item }) => {
  return (
    <Card >
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.node.isRequired
}

export default FeedbackItem
