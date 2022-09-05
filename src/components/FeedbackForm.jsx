import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  function handleTextChange(e) {
    setText(e.target.value)
    if (text === '') {
      setBtnDisabled(true)
      setMessage('')
    } else if (text !== '' && text.trim().length < 10) {
      setMessage('Must be at least 10 characters long')
      setBtnDisabled(true)
    } else {
      setBtnDisabled(true)
      setMessage(null)
    }
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
          <Button isDisabled={btnDisabled} type='submit'>
            send
          </Button>
        </div>
      </form>
      {message && <div className='message'>{message}</div>}
    </Card>
  )
}

export default FeedbackForm
