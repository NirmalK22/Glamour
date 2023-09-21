import './style.css'

const Form =()=>{ 
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting (which is the default behavior)
    e.target.reset();
    
    // Display an alert when the button is clicked
    alert('Form submitted!'); // You can customize the alert message here
    
  };
    return(
      <div>  
  <body>
  
    
   <div class="H">
       <header class="text-center">
           <h1 class="display-6">Booking your time</h1>
           <div>Easier your life</div>
       </header>
   </div>
   
   <section class="container my-2 bg-dark w-50 text-light p-2">
   
    <form class="row g-3 p-3" onSubmit={handleSubmit}>
    <div class="col-md-6">
    <label for="validationDefault01" class="form-label">First Name</label>
    <input type="text" class="form-control" id="validationDefault01" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="validationDefault01" required/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-6">
  <label  for="validationDefault01" class="form-label">ContactNo</label>
  <input type="text" class="form-control" id="validationDefault01" placeholder="+94" pattern="[0-9]+" required  />
  </div>
  <div class="col-6">
    <label for="inputAddress2" class="form-label">Email</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="name@example.com"/>
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Packages</label>
    <select id="inputState" class="form-select">
      <option selected>"Choose Your Package."</option>
      <option>Haircut</option>
      <option>Facial</option>
      <option>Threading</option>
      <option>Waxing</option>
      <option>Pedicure</option>
      <option>Dressing</option>
    </select>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"   required/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
        <div class="submit">
          <button type="submit" class="btn btn-primary">Book In</button>
  
        </div>
      </form>
   </section>
   
  </body>

         
         
          
      </div>
    )
  }
  export default Form;