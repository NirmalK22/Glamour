import './style.css';

function Footer() {
    return (
<footer className="footer">
    <div className="container">
        <div className="footer-content">

          {/*socail colomn*/}
            <div class="social">
                <h6 className='text-uppercase fw-bold mb-4'>Galmour Avenue</h6>
                <div class="icon"><a href="https://web.facebook.com">
                <img src="facebook.png" alt="Visit facebook" />
                </a>
                <a href="https://www.instagram.com">
                <img src="instagram.png" alt="visi instagram" />
                 </a>
                <a href="https://www.youtube.com">
                <img src="youtube.png" alt="visit youtube" />
                 </a>
                <a href="https://www.twitter.com">
                <img src="twitter.png" alt="visit twitter" />
                </a></div>
                
    </div>

                {/*services colomn*/}
          <div class="services">
                    <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                    <p>
                        <a href='#!' className='text-reset'> Hair</a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>Skin</a>
                    </p>
          </div>

                {/*Legal colomn*/}
          <div class="Legal">
                    <h6 className='text-uppercase fw-bold mb-4'>
                        <br/>Legal</h6>
              <p>
                <a href='#!' className='text-reset'>Privacy
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Refund Policy
                </a>
              </p></div>              
                
                {/*Contact colomn*/}
              <div classname="contact">
              <h6 className='text-uppercase fw-bold mb-4'>
                <br/>Contact</h6>
              <p>              
                Galle, NY 10012, LK
              </p>
              <p>                
                galmouravenue@official.com
              </p>
      </div>           
      </div>
          <br/><br/>
                <p>&copy; {new Date().getFullYear()} Glamour-Avenue. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;