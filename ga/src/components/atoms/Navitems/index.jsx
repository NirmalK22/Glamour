const NavItems=({name,path})=>{
    return(
        <div>
            <div>
        <li class="nav-item">
        <a class="nav-link " aria-current="page"  href={path}>{name}</a>
    </li>
    </div>
        </div>
    );

};
export default NavItems;