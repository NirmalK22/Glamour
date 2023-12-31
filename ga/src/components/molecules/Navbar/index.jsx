import NavItems from "../../atoms/Navitems";
import './style.css';

const Navbar=()=>
{
    return(
<div>
<nav class="navbar navbar-expand-lg " style={{ backgroundColor: "#B4A89A" }}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      < img src="pa.png" alt="Logo" width="35" height="29" class="d-inline-block align-text-center rounded"/>
      Glamour Avenue</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {<NavItems path={'/'} name={'Home'}  />}
              <NavItems path={'/services'} name={'Services'}  />
              <NavItems path={'/Packages'} name={'Packages'}  />
              <NavItems path={'/Aboutus'} name={'About Us'}  />

        {/*<li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
    </li>*/}
    </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>


    );
}
export default Navbar;