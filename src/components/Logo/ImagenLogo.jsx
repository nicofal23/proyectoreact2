import {moniessen} from '../NavBar/NavBar.module.css'
import moniessenImage from '../../assets/img/moniessen.png';
const Logo = () => {
    return (
        <div>
        <a href="#"><img src={moniessenImage} alt="MoniEssen" className={moniessen}/></a>
    </div>
    );
  };
  export default Logo  