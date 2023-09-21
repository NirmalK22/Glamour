import './style.css';

const Homebody = () => {
    return (
<div>
<div>
    <div id="billboard" class="py-1 py-md-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <div class="text-content mt-5" data-aos="fade-in">
                        <h1 class="display-1 text-uppercase">A Better Beauty Experience</h1>
                        <a href="#Home" class="btn btn-dark px-5 py-3">Read more</a>
                    </div>
                </div>
                <div class="col-md-8">
					<figure class="fixed">
            <div className="homecard" >
                <div class="s">
                <a href="index.html">
                <img src="homemain2.jpg"   alt="home image" width="450px" height="auto" className="img-fluid rounded" />
                </a>
                </div>
                
            <div className="card-body">    
                  <p className="card-text">
            <h3>
                <br/><br/><br/>
                      We can help you to</h3><hr/>
                      <h2><b>Reveal Your<br/>
                       Natural<br/>
                        Beauty Skin</b><br/> </h2>     
                  </p>
      </div>
      </div>
						
					</figure>
				</div>
			</div>
		</div>    
                    </div>
                    
                </div>
                
            </div>
      
    );
};

export default Homebody;