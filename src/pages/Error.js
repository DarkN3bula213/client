import {Link} from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'


const Error = () => {
  return (
<Wrapper className='full-page'>
    <div>
        <img src={img} alt="Error" />
        <h3>Page not found</h3>
        <p>We could not get the page you were looking for</p>
        <Link to='/'>Return to Home</Link>
    </div>
</Wrapper>
  )
}
export default Error