import { useState } from 'react'

const RatingSelect = ({select}) => {
  const [selected, setSelected] = useState(null)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          id='num1'
          name='rating'
          value='1'
          checked={selected === 1}
          onChange={handleChange}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          id='num2'
          name='rating'
          value='2'
          checked={selected === 2}
          onChange={handleChange}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          id='num3'
          name='rating'
          value='3'
          checked={selected === 3}
          onChange={handleChange}
        />
        <label htmlFor='num3'>3</label>
      </li>
    </ul>
  )
}

export default RatingSelect
