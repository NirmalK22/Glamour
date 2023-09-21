import Navbar from "../../components/molecules/Navbar";
import Form from "../../components/molecules/Form";
import Footer from "../../components/molecules/Footer";
import image from './book.png'



const Services =()=>{ 
    return(
      <div>
         <div className="container5"style={{ backgroundImage: `url(${image})` }}>

</div>
         
        <Navbar/>
        <Form/>
        <Footer/>
          
      </div>
    )
  }
  export default Services;