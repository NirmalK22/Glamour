import './style.css';
import Navbar from "../../components/molecules/Navbar";
import Footer from "../../components/molecules/Footer";
import Homebody from '../../components/molecules/Homebody';
import Minislide from "../../components/molecules/Minislide";

const Home=()=>{
    return(
<div>
        <Navbar/>
        <Homebody/>
        <Minislide/>
        <Footer/>
</div>

    );
}
export default Home;