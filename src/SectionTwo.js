import React from 'react'

function SectionTwo() {
    return (
        <div>
            <section data-aos="fade" id="Sect2">
        <div class="jumbotron d-flex justify-content-center" style={{backgroundColor:"rgb(255,255,255)", marginBottom:"-29px"}}><button class="btn btn-outline-primary btn-block" type="button" disabled="disabled" id="btn1">Button</button>
            <h1 style={{fontSize:"51px", color:"rgb(0,0,0)"}}>Recommended &nbsp; &nbsp; &nbsp; For You</h1><button class="btn btn-outline-primary btn-block" type="button" disabled="disabled" id="btn2">Button</button></div>
        <section data-aos="fade-up" data-aos-duration="1000"><div class="wrapper">
        <div class="row">
            <div class="col-xl-4">
            <div class="card">
                <input type="checkbox" id="card1" class="more" aria-hidden="true"></input>
                <div class="content">
                    <div class="front" style={{backgroundImage: 'url('+'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80'+')'}}>
                        <div class="inner">
                            <h2>Cozy apartment</h2>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <label for="card1" class="button" aria-hidden="true">
                                Details
                            </label>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <div class="info">
                                <span>5</span>
                                <div class="icon">
                                    <i class="fa fa-users"></i>
                                    <span>people</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>4</span>
                                <div class="icon">
                                    <i class="fa fa-door-open"></i>
                                    <span>rooms</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>3</span>
                                <div class="icon">
                                    <i class="fa fa-bed"></i>
                                    <span>beds</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>1</span>
                                <div class="icon">
                                    <i class="fa fa-bath"></i>
                                    <span>bath</span>
                                </div>
                            </div>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                    ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                    tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                            </div>
                            <div class="location">Warsaw, Poland</div>
                            <div class="price">38€ / day</div>
                            <label for="card1" class="button return" aria-hidden="true">
                                <i class="fa fa-arrow-left"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-xl-4">
            <div class="card">
                <input type="checkbox" id="card2" class="more"></input>
                <div class="content">
                    <div class="front" style={{backgroundImage: 'url('+'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80'+')'}}>
                        <div class="inner">
                            <h2>Modern flat</h2>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-alt"></i>
                            </div>
                            <label for="card2" class="button" aria-hidden="true">
                                Details
                            </label>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <div class="info">
                                <span>4</span>
                                <div class="icon">
                                    <i class="fa fa-users"></i>
                                    <span>people</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>3</span>
                                <div class="icon">
                                    <i style={{fontSize:"19px"}} class='fas'>&#xf52b;</i>
                                    <span>rooms</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>2</span>
                                <div class="icon">
                                    <i class="fa fa-bed"></i>
                                    <span>beds</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>1</span>
                                <div class="icon">
                                    <i class="fa fa-bath"></i>
                                    <span>bath</span>
                                </div>
                            </div>
                            <div class="description">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas
                                    fuga
                                    odio vel veniam eveniet, explicabo autem earum?</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div class="location">Warsaw, Poland</div>
                            <div class="price">42€ / day</div>
                            <label for="card2" class="button return" aria-hidden="true">
                                <i class="fa fa-arrow-left"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-xl-4">
            <div class="card">
                <input type="checkbox" id="card3" class="more"></input>
                <div class="content">
                    <div class="front" style={{backgroundImage: 'url('+'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80'+')'}}>
                        <div class="inner">
                            <h2>Luxury property</h2>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <label for="card3" class="button" aria-hidden="true">
                                Details
                            </label>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <div class="info">
                                <span>8</span>
                                <div class="icon">
                                    <i class="fa fa-users"></i>
                                    <span>people</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>7</span>
                                <div class="icon">
                                    <i class="fa fa-door-open"></i>
                                    <span>rooms</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>5</span>
                                <div class="icon">
                                    <i class="fa fa-bed"></i>
                                    <span>beds</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>2</span>
                                <div class="icon">
                                    <i class="fa fa-bath"></i>
                                    <span>baths</span>
                                </div>
                            </div>
                            <div class="description">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa libero
                                    totam nostrum consequatur autem quae provident quos alias fugit maxime nisi labore,
                                    temporibus tempore illo natus voluptates aliquam ipsum officia quasi placeat aut
                                    facilis
                                    laudantium nam!</p>
                                <p>Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt,
                                    repudiandae
                                    aspernatur explicabo numquam! Tenetur!</p>
                            </div>
                            <div class="location">Cracow, Poland</div>
                            <div class="price">60€ / day</div>
                            <label for="card3" class="button return" aria-hidden="true">
                                <i class="fa fa-arrow-left"></i>
                            </label>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        </div>
     <div class="row">
            <div class="col-xl-4">
            <div class="card">
                <input type="checkbox" id="card4" class="more" aria-hidden="true"></input>
                <div class="content">
                    <div class="front" style={{backgroundImage: 'url('+'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80'+')'}}>
                        <div class="inner">
                            <h2>Cozy apartment</h2>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <label for="card4" class="button" aria-hidden="true">
                                Details
                            </label>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <div class="info">
                                <span>5</span>
                                <div class="icon">
                                    <i class="fa fa-users"></i>
                                    <span>people</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>4</span>
                                <div class="icon">
                                    <i class="fa fa-door-open"></i>
                                    <span>rooms</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>3</span>
                                <div class="icon">
                                    <i class="fa fa-bed"></i>
                                    <span>beds</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>1</span>
                                <div class="icon">
                                    <i class="fa fa-bath"></i>
                                    <span>bath</span>
                                </div>
                            </div>
                            <div class="description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, accusamus.</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates earum nostrum ipsam
                                    ullam, reiciendis nam consectetur? Doloribus voluptate architecto possimus perferendis
                                    tenetur nemo amet temporibus, enim soluta nam, debitis.</p>
                            </div>
                            <div class="location">Warsaw, Poland</div>
                            <div class="price">38€ / day</div>
                            <label for="card4" class="button return" aria-hidden="true">
                                <i class="fa fa-arrow-left"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-xl-4">
            <div class="card">
                <input type="checkbox" id="card5" class="more"></input>
                <div class="content">
                    <div class="front" style={{backgroundImage: 'url('+'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80'+')'}}>
                        <div class="inner">
                            <h2>Modern flat</h2>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-alt"></i>
                            </div>
                            <label for="card5" class="button" aria-hidden="true">
                                Details
                            </label>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <div class="info">
                                <span>4</span>
                                <div class="icon">
                                    <i class="fa fa-users"></i>
                                    <span>people</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>3</span>
                                <div class="icon">
                                    <i style={{fontSize:"19px"}} class='fas'>&#xf52b;</i>
                                    <span>rooms</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>2</span>
                                <div class="icon">
                                    <i class="fa fa-bed"></i>
                                    <span>beds</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>1</span>
                                <div class="icon">
                                    <i class="fa fa-bath"></i>
                                    <span>bath</span>
                                </div>
                            </div>
                            <div class="description">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem unde ea voluptas
                                    fuga
                                    odio vel veniam eveniet, explicabo autem earum?</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
                                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div class="location">Warsaw, Poland</div>
                            <div class="price">42€ / day</div>
                            <label for="card5" class="button return" aria-hidden="true">
                                <i class="fa fa-arrow-left"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-xl-4">
            <div class="card">
                <input type="checkbox" id="card6" class="more"></input>
                <div class="content">
                    <div class="front" style={{backgroundImage: 'url('+'https://images.unsplash.com/photo-1529408686214-b48b8532f72c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=986e2dee5c1b488d877ad7ba1afaf2ec&auto=format&fit=crop&w=1350&q=80'+')'}}>
                        <div class="inner">
                            <h2>Luxury property</h2>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <label for="card6" class="button" aria-hidden="true">
                                Details
                            </label>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <div class="info">
                                <span>8</span>
                                <div class="icon">
                                    <i class="fa fa-users"></i>
                                    <span>people</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>7</span>
                                <div class="icon">
                                    <i class="fa fa-door-open"></i>
                                    <span>rooms</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>5</span>
                                <div class="icon">
                                    <i class="fa fa-bed"></i>
                                    <span>beds</span>
                                </div>
                            </div>
                            <div class="info">
                                <span>2</span>
                                <div class="icon">
                                    <i class="fa fa-bath"></i>
                                    <span>baths</span>
                                </div>
                            </div>
                            <div class="description">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa libero
                                    totam nostrum consequatur autem quae provident quos alias fugit maxime nisi labore,
                                    temporibus tempore illo natus voluptates aliquam ipsum officia quasi placeat aut
                                    facilis
                                    laudantium nam!</p>
                                <p>Quam, iusto.Neque ratione ut deserunt unde dicta nesciunt,
                                    repudiandae
                                    aspernatur explicabo numquam! Tenetur!</p>
                            </div>
                            <div class="location">Cracow, Poland</div>
                            <div class="price">60€ / day</div>
                            <label for="card6" class="button return" aria-hidden="true">
                                <i class="fa fa-arrow-left"></i>
                            </label>
                        </div>
                    </div>
                </div>
                </div>
        </div>
        </div>
</div></section>
    </section>
        </div>
    )
}

export default SectionTwo
