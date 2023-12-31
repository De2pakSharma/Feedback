import { useContext } from 'react'
import Feedbackitem from './Feedbackitem'
import FeedbackContext from '../Context/FeedbackContext'


function FeedbackList({  }) {
    const {feedback} = useContext(FeedbackContext)
if (!feedback || feedback.length === 0) {
    return <p> No Feedback yet</p>
}




return(
    <div className='feedback-list'>
        {feedback.map((item) => (
            <Feedbackitem 
             key={item.id} 
             item={item}
             />
        ))}
    </div>
)

        }

      
export default FeedbackList