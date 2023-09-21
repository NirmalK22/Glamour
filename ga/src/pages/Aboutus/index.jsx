import './style.css';
import Navbar from "../../components/molecules/Navbar";
import Footer from "../../components/molecules/Footer";
import Aboutcard from "../../components/molecules/Aboutcard";


const Aboutus =()=>{ 
  const headerStyle = {
    backgroundImage: 'url("dressing.png")',
    backgroundSize:  'auto', // Adjust this as needed
    backgroundRepeat: 'no-repeat', // Adjust this as needed
    width:'100%',
    height: '100vh',
  };
    return(
      <div>
        <Navbar/>
        <header  style={headerStyle}>
       
        <h3>Your beauty skin is our priority<br/>
        We provid the best salon experience that guarantees to make your healthier & make you look more beautiful</h3>
        <p>Welcome to glamour-Avenue where beauty meets relaxation. Our salon is more than just a place to get a haircut or a spa treatment;
          it's a sanctuary where you can unwind, rejuvenate, and leave feeling your best.
          Founded in 2015, glamour Avenue has been a labor of love for Imesha Shamindi & Niska Zameek. 
          What started as a small, family-owned salon has blossomed into a beloved community space. 
          We've grown, but our commitment to providing exceptional beauty and wellness services with a personal touch remains unchanged.
          At glamour avenue we believe that beauty isn't just about appearances; 
          it's about feeling confident and empowered. We focus on enhancing your natural beauty while promoting self-care and self-love.
          We are committed to exceeding your expectations. From personalized consultations to a range of eco-friendly and cruelty-free products, 
          we are dedicated to delivering the best possible salon experience.
          We invite you to become a part of the Glamour-Avenue family. 
          Whether you're looking for a fresh hairstyle, a relaxing spa day, or a moment of self-indulgence, 
          we're here to make it happen. Book an appointment today, and let us transform your beauty routine.</p> 
        </header>
        
        <div class="hd">
        <h3>Customer say About us,</h3>
        </div>
        <Aboutcard/>
      
        <Footer/>
              
         </div>
    )
  }
  export default Aboutus;