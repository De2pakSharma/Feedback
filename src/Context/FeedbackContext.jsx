
import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()
export const FeedbackProvider = ({ children }) => {
    
    
    
    const[feedback, setFeedback] = useState([

        {
            id: 1,
            text: 'This item is from context',
            rating: 9,
        },
        {
            id: 2,
            text: 'This item is from context123',
            rating: 6,
        },
        {
            id: 3,
            text: 'This item is from context3216',
            rating: 3,
        },
        {
            id: 4,
            text: 'This item is from context852963',
            rating: 2,
        },
    ])


const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
})




    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

 const deleteFeedback = (id) => {
    if(window.confirm('Are you sure want to delete?')){
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}
const editFeedback = (item) => {
    setFeedbackEdit({
        item,
        edit: true
    })
}
const updateFeedback = (id, updItem) => {
    setFeedback(
        feedback.map ((item)  => (item.id === id ? { ...item, ...updItem } : item))
    )
}
    return(
        <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
            
        }}>
        {children}
        </FeedbackContext.Provider>
    )
}
export default FeedbackContext