
import {Link} from 'react-scroll'
import './TopContent.css'
const TopContent = ({setTab}) => {
 

  
  return (
    <div className='topContent'>
        <div className='topContent__container'>
            <h1>Mr. GOWTHAM S</h1>
            <p>Certified FullStack Developer</p>
          
                <button className='topContent__downloadBtn'onClick={() => setTab("sign-in")} >Login</button>
               
               
                <Link to='projects' smooth={true} duration={500}>
                <button className='topContent__workBtn'onClick={() => setTab("sign-up")}>Sign-Up</button>

                </Link>
          
            
        </div>
  
    </div>
  )
}

export default TopContent;