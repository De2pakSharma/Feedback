
import {BrowserRouter as Router,Route,Routes,
NavLink } from 'react-router-dom'
import AboutIconLink from './Components/AboutIconLink'
import Header from'./Components/Header'
import Feedbackitem from './Components/Feedbackitem'
import Feedbacklist from './Components/Feedbacklist'
import Card from './Components/Shared/Card'
import FeedbackStates from './Components/FeedbackStates'
import FeedbackForm from './Components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './Context/FeedbackContext'


function App() {
    

 return (
    <FeedbackProvider>
<Router>
    <Header />
    <div className='container'>
        <Routes>
        <Route exact path='/'
        element={
            <>
        <FeedbackForm />
        <FeedbackStates />
        <Feedbacklist />
        </>
        }>
          </Route>
        </Routes>
        <Card>
            <NavLink to ='/' activeClassName='active'>Home</NavLink>
            <NavLink to='/about' activeClassName='active'>About</NavLink>
        </Card> 
        <AboutIconLink/>   
    </div>
    </Router>
    </FeedbackProvider>
 )
}
 export default App