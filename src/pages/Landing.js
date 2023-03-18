import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../Components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
<Wrapper>
  <nav>
  <Logo />
  </nav>
  <div className="container page">
    <div className="info">
      <h1>Job <span>Tracking</span> App</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eveniet nihil architecto ea molestiae nulla laudantium, aliquid natus sit, dolor optio consectetur fugiat perferendis nesciunt.</p>
      <Link to='/register' className="btn btn-hero">Login/Register</Link>
    </div>
    <img src={main} alt="Job Hunting" className="img main-img" />
  </div>
</Wrapper>  )
}


export default Landing