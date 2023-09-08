 import{ useState, useContext, useEffect } from 'react'
 import FeedbackContext from '../Context/FeedbackContext'

 function RatingSelect({ select }) {
  const[Selected,setSelected] = useState(10)
  
  const { feedbackEdit } = useContext
  (FeedbackContext)
  
  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)

 
  }

  return ( <ul className='rating'>
    <li>
      <input type='radio'
             id='num1'
             name='rating'
             value='1'
             onChange={handleChange}
             checked={Selected===1} />
             <lable htmlFor='num1'>1</lable>
    </li>
    <li>
      <input type='radio'
             id='num2'
             name='rating'
             value='2'
             onChange={handleChange}
             checked={Selected===2} />
             <lable htmlFor='num2'>2</lable>
    </li>
    <li>
      <input type='radio'
             id='num3'
             name='rating'
             value='3'
             onChange={handleChange}
             checked={Selected===3} />
             <lable htmlFor='num3'>3</lable>
    </li>
    <li>
      <input type='radio'
             id='num4'
             name='rating'
             value='4'
             onChange={handleChange}
             checked={Selected===4} />
             <lable htmlFor='num4'>4</lable>
    </li>
    <li>
      <input type='radio'
             id='num5'
             name='rating'
             value='5'
             onChange={handleChange}
             checked={Selected===5} />
             <lable htmlFor='num5'>5</lable>
    </li>
    <li>
      <input type='radio'
             id='num6'
             name='rating'
             value='6'
             onChange={handleChange}
             checked={Selected===6} />
             <lable htmlFor='num6'>6</lable>
    </li>
    <li>
      <input type='radio'
             id='num7'
             name='rating'
             value='7'
             onChange={handleChange}
             checked={Selected===7} />
             <lable htmlFor='num7'>7</lable>
    </li>
    <li>
      <input type='radio'
             id='num8'
             name='rating'
             value='8'
             onChange={handleChange}
             checked={Selected===8} />
             <lable htmlFor='num8'>8</lable>
    </li>
    <li>
      <input type='radio'
             id='num9'
             name='rating'
             value='9'
             onChange={handleChange}
             checked={Selected===9} />
             <lable htmlFor='num9'>9</lable>
    </li>
    <li>
      <input type='radio'
             id='num10'
             name='rating'
             value='10'
             onChange={handleChange}
             checked={Selected===10} />
             <lable htmlFor='num10'>10</lable>
    </li>
  </ul>
  )
  
}
export default RatingSelect