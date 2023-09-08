import { Link } from 'react-router-dom';
function AboutPage() {
    return (
        <card>
        <div className='about'>
            <h1>About This Project</h1><br/>
            <p>This is a React App to leave Feedback For a Product or Service</p>
            <p> Version: 0</p><br/><hr/>
            <p>
            <Link to = '/'>Back To Home</Link>
            </p>
           
        </div>
        </card>
    )
}
export default AboutPage