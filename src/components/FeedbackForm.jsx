import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')

  function handleTextChange(e) {
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            placeholder='write a review'
            type='text'
            value={text}
          />
          <Button type='submit'>send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
