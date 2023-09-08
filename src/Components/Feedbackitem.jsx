import { FaTimes,FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import Card from './Shared/Card'
import FeedbackContext from '../Context/FeedbackContext'

function Feedbackitem({ item}) {
  const { deleteFeedback, editFeedback} = useContext
  (FeedbackContext)



   return (
     <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} 
        className='close'>
          <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='red' />
        </button>
        <div className='text-display'>{item.text}</div> 
     </Card>
   )
 }

 
 Feedbackitem.propTypes = {
  item:PropTypes.object.isRequired,
  
 }

 export default Feedbackitem
 