// import {} from "./style.css"
import { NavLink  , useNavigate} from "react-router-dom"

export default function Header (){

    const setNavItemColor=(val)=>{
        // console.log(e.target);
     
        const itemarray2 = document.querySelectorAll("#navItems a")
       console.log(itemarray2)
        for(var i=0;i<itemarray2.length;i++){
            console.log(itemarray2[i].style.color)
            if(i==val){
                continue
            }else{
                itemarray2[i].style.color="rgb(255 , 211 , 51)"
            }
        }
        itemarray2[val].style.color=="rgb(245 , 245 , 245)" ? itemarray2[val].style.color="rgb(255 , 211 , 51)" :  itemarray2[val].style.color="rgb(245 , 245 , 245)"
    }

    const history = useNavigate();
            return(
                <>
                <div className="container-fluid">
                    <div className="row bg-secondary py-1 px-xl-5">
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="d-inline-flex align-items-center h-100 uperNavItems">
                                <a className="text-body mr-3" href="">About</a>
                               <NavLink to="/contact">   <a className="text-body list-none mr-3">Contact</a> </NavLink>
                                <a className="text-body mr-3" href="">Help</a>
                                <a className="text-body mr-3" href="">FAQs</a>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <button className="dropdown-item" type="button">Sign in</button>
                                        <button className="dropdown-item" type="button">Sign up</button>
                                    </div>
                                </div>
                                <div className="btn-group mx-2">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <button className="dropdown-item" type="button">EUR</button>
                                        <button className="dropdown-item" type="button">GBP</button>
                                        <button className="dropdown-item" type="button">CAD</button>
                                    </div>
                                </div>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <button className="dropdown-item" type="button">FR</button>
                                        <button className="dropdown-item" type="button">AR</button>
                                        <button className="dropdown-item" type="button">RU</button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-inline-flex align-items-center d-block d-lg-none">
                                <a href="" className="btn px-0 ml-2">
                                    <i className="fas fa-heart text-dark"></i>
                                    <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                                </a>
                                <a href="" className="btn px-0 ml-2">
                                    <i className="fas fa-shopping-cart text-dark"></i>
                                    <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                        <div className="col-lg-4">
                            <a href="" className="text-decoration-none">
                                <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                                <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                            </a>
                        </div>
                        <div className="col-lg-4 col-6 text-left">
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for products"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent text-primary">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 col-6 text-right">
                            <p className="m-0">Customer Service</p>
                            <h5 className="m-0">+012 345 6789</h5>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-dark mb-30">
                    <div className="row px-xl-5">
                        <div className="col-lg-3 d-none d-lg-block">
                            <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: "65px",padding: "0 30px"}}>
                                <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                                <i className="fa fa-angle-down text-dark"></i>
                            </a>
                            <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{width: "calc(100% - 30px)", zIndex: "999"}}>
                                <div className="navbar-nav w-100">
                                    <div className="nav-item dropdown dropright">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dresses <i className="fa fa-angle-right float-right mt-1"></i></a>
                                        <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                            <a href="" className="dropdown-item">Men's Dresses</a>
                                            <a href="" className="dropdown-item">Women's Dresses</a>
                                            <a href="" className="dropdown-item">Baby's Dresses</a>
                                        </div>
                                    </div>
                                    <a href="" className="nav-item nav-link">Shirts</a>
                                    <a href="" className="nav-item nav-link">Jeans</a>
                                    <a href="" className="nav-item nav-link">Swimwear</a>
                                    <a href="" className="nav-item nav-link">Sleepwear</a>
                                    <a href="" className="nav-item nav-link">Sportswear</a>
                                    <a href="" className="nav-item nav-link">Jumpsuits</a>
                                    <a href="" className="nav-item nav-link">Blazers</a>
                                    <a href="" className="nav-item nav-link">Jackets</a>
                                    <a href="" className="nav-item nav-link">Shoes</a>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-9">
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                                <a href="" className="text-decoration-none d-block d-lg-none">
                                    <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                                    <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                                </a>
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav mr-auto py-0" id="navItems">
                                        <NavLink to="/home" style={{color:"rgb(245,245,245)"}}>  <li  className="nav-item nav-link active" onClick={()=>{setNavItemColor(0)}}  >Home</li> </NavLink>
                                        <NavLink to="/shop" style={{color:"rgb(255,211,51)"}}>  <li  className="nav-item nav-link"        onClick={()=>{setNavItemColor(1)}} >Shop</li>  </NavLink>
                                        <NavLink to="/shopdetail" style={{color:"rgb(255,211,51)"}}> <li className="nav-item nav-link "  onClick={()=>{setNavItemColor(2)}}  >Shop Detail</li> </NavLink>
                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"style={{color:"rgb(245,245,245)"}}>Pages <i className="fa fa-angle-down mt-1"></i></a>
                                            <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                              <NavLink to="/shoppingcart" >   <li className="dropdown-item" onClick={()=>{setNavItemColor(3)}} >Shopping Cart</li> </NavLink>
                                              <NavLink to="/checkout">  <li  className="dropdown-item" onClick={()=>{setNavItemColor(3)}}>Checkout</li>  </NavLink>
                                            </div>
                                        </div>
                                      <NavLink to="/contact" style={{color:"rgb(255,211,51)"}}>   <li className="nav-item nav-link"onClick={(e)=>{setNavItemColor(6)}}  >Contact</li> </NavLink>
                                   
                                    </div>
                                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                        <a href="" className="btn px-0">
                                            <i className="fas fa-heart text-primary"></i>
                                            <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                                        </a>
                                        <a href="" className="btn px-0 ml-3">
                                            <i className="fas fa-shopping-cart text-primary"></i>
                                            <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: "2px"}}>0</span>
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>


                </>

            )        
    }