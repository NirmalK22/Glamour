import './style.css'; 

const Cards=()=>{
    return(
    
    <div>
      
      <div className="cards-container">
  <div className="card">
    <a href="/services">
      <img src="haircut.png" alt="site logo" />
    </a>
    <div className="card-body">
      <p className="card-text"><h4>Haircut</h4>
      "Revitalize your look with our expert hair cut service. Our skilled stylists will enhance your natural beauty, 
      delivering the perfect cut to suit your style.
      Book now for a fresh and fabulous appearance."<br/>
      <a><img src="tiks.svg" width='20px' height='auto' /></a>60 Minutes - $25<br/>
          <a><img src="tiks.svg" width='20px' height='auto' /></a> 90 Minutes - $40<br/>
      </p>
        <a href='/services' class="btn btn-dark">Book Now</a>
   
  </div>
      </div>
        

  <div className="card" >
    <a href="/services">
      <img src="facial.png" alt="site logo" />
    </a>
    <div className="card-body">
      <p className="card-text"><h4>Facial</h4>
      "Revitalize your skin with our expertly crafted facials. Tailored to your skin type and concerns,
      our facial treatments leave you feeling refreshed and glowing. Discover your skin's potential at Glamour Avenue."<br/>
      <a><img src="tiks.svg" width='20px' height='auto' /></a>60 Minutes - $25<br/>
          <a><img src="tiks.svg" width='20px' height='auto' /></a> 90 Minutes - $40
      </p>
      <a href='/services' class="btn btn-dark">Book Now</a>
    </div>
  </div>

  <div className="card">
    <a href="/services">
      <img src="threading.png" alt="site logo" />
    </a>
    <div className="card-body">
      <p className="card-text"><h4>Threading</h4>
      "Experience the Art of Threading
      Discover precision and gentleness in hair removal at our salon. 
      Achieve beautifully sculpted eyebrows and smooth skin with this long-lasting method. Try threading for precise results!"<br/>
      <a><img src="tiks.svg" width='20px' height='auto' /></a>60 Minutes - $25<br/>
          <a><img src="tiks.svg" width='20px' height='auto' /></a> 90 Minutes - $40
      </p>
        <a href='/services' class="btn btn-dark">Book Now</a>
    </div>
  </div>

  

  <div className="card">
    <a href="/services">
      <img src="waxing.png" alt="site logo" />
    </a>
    <div className="card-body">
      <p className="card-text"><h4>Waxing</h4>
      "Smooth, Hair-Free Skin Awaits
        Experience expert waxing for lasting, sleek results. Say goodbye to shaving at our salon!"<br/>
        <a><img src="tiks.svg" width='20px' height='auto' /></a>60 Minutes - $25<br/>
          <a><img src="tiks.svg" width='20px' height='auto' /></a> 90 Minutes - $40</p><br/>
        <a href='/services' class="btn btn-dark">Book Now</a>
    </div>
  </div>
  <div className="card">
    <a href="/services">
      <img src="pedicure.png" alt="site logo" />
    </a>
    <div className="card-body">
      <p className="card-text"><h4>Pedicure</h4>
      "Revitalize your feet with our soothing pedicure. Enjoy a relaxing soak, nail care, exfoliation, and a rejuvenating massage. 
      Get ready to flaunt beautiful, refreshed feet."<br/>
      60 Minutes - $25<br/>
      90 Minutes - $40
      </p>
      <a href='/services' class="btn btn-dark">Book Now</a>
    </div>
  </div>
  <div className="card">
    <a href="/services">
      <img src="dressing.png" alt="site logo" />
    </a>
    <div className="card-body">
      <p className="card-text"><h4>Dressing</h4>
      "Elevate Your Style with Our Expert Help
        From wardrobe advice to outfit coordination, 
        we're here to boost your confidence and help you express your unique style through fashion."<br/>
       < a><img src="tiks.svg" width='20px' height='auto' /></a>60 Minutes - $25<br/>
          <a><img src="tiks.svg" width='20px' height='auto' /></a> 90 Minutes - $40
      </p>
      <a href='/services' class="btn btn-dark">Book Now</a>
    </div>
  </div>
</div>


            
        
    </div>

    );

};
export default Cards;