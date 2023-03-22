import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const style_1 = {
        backgroundRepeat:"no-repeat", 
        backgroundColor:"#000000"
    };

    const img = 'assets/img/icons8-menu-48.png';
    return (
        <nav class="navbar navbar-light navbar-expand-md sticky-top" style={style_1}>
        <div class="container-fluid">
            <Link to='/' class="navbar-brand navbar-brand-centered">
                <img src="assets/img/dh.png" id="img" style={{maxHeight:"50px"}}/>
            </Link>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1" style={{color:"rgba(0,0,0,0.5)"}}><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon navbar-dark" style={{backgroundImage:'url('+ img +')'}}></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-1" style={{fontFamily:"Ubuntu, sans-serif"}}>
                <ul class="nav navbar-nav">
                    <Link to='/dummy'><li class="nav-item" role="presentation" id="navitem"><a class="nav-link" href="#" data-bs-hover-animate="jello" style={{color:"rgb(255,255,255)"}}>Rent</a></li></Link>
                    <Link to='/buy'><li class="nav-item" role="presentation" data-bs-hover-animate="jello" id="navitem"><a class="nav-link" href="#" style={{color:"rgb(255,255,255)", fontStyle:"normal"}}>Buy</a></li></Link>
                    <li class="nav-item" role="presentation" id="navitem"><a class="nav-link" href="#" data-bs-hover-animate="jello" style={{color:"rgb(255,255,255)"}} data-toggle="modal" data-target="#sell_Modal">Sell</a></li>
                    <li class="nav-item" role="presentation" id="navitem"><a class="nav-link" href="#" data-bs-hover-animate="jello" style={{color:"rgb(255,255,255)"}}>Blog</a></li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation" id="naviten"><a class="nav-link" href="#" data-bs-hover-animate="jello" style={{color:"rgb(255,255,255)"}}>Sign in</a></li>
                    <li class="nav-item" role="presentation" id="naviten"><a class="nav-link" href="#" data-bs-hover-animate="jello" style={{color:"rgb(255,255,255)"}}>Sign up</a></li>
                </ul>
        </div>
        </div>
    </nav>
    )
}

export default Nav
