import React from 'react'
import './home.css'

export default function Home() {
    return (
        <div>
            <div className="header fixed-top">
                <label htmlFor="chk" className="show-menu-btn"/>
                    <img src={process.env.PUBLIC_URL + '/margazine-images/Group 4.png'} className="logo"/>
                <label/>
                <input id="chk" type="checkbox"/>
                <div className="suffix">
                    <img src={process.env.PUBLIC_URL + '/margazine-images/Group 13.png'} alt=""/>
                </div> 

                <ul className="menu">
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#featured">featured</a></li>
                            <li><a href="">interviews</a></li>
                            <li><a href="">news</a></li>
                            <li><a href="">contact</a></li>
                        </ul>
                    <label htmlFor="chk" className="hide-menu-btn">
                        <img src="margazine-images/Group 4.png" alt="" class="logo"/>
                    </label>   
                </ul>
            </div>

            <section className="section billboard">
            <div class="container-fluid">
                <div className="row ">
                    <div className="col-md-6 p-0 " > 
                        <img src="margazine-images/philip-martin-5aGUyCW_PJw-unsplash.png" alt="" className="img-fluid " />
                    </div>
                    <div className="col-md-6  pl-5 inner2">
                        <div className="inner-date d-flex  ">
                            <a href="#" >10 / 10 / 2020</a>
                            <a href="#" className="link">LIFESTYLE</a>
                        </div>
                        <h1 className="text-uppercase">At vero eos et accusamus et</h1>
                        <p> odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                            corrupti quos dolores et quas molestias excepturi sint occaecati
                        </p>
                        <a href="#" className="btn2">read more</a>

                    </div>
                </div>
            </div>
            </section>

            <section>
                <div className="container">
                    <h3>featured</h3>
                    <div className="row">
                    
                        <div className="col-md-6">
                            <div className="card margazine-card ">
                            <img src="margazine-images/Screen Shot 2560-08-18 at 4.23.48 PM.png" alt="" className="large-img"/>
                            <div className="inner-date d-flex ">
                                <a href="">10/10/2020</a>
                                <a href="" className="link">LIFESTYLE</a>
                            </div>  
                            <h2>Lorem ipsum dolor sit, amet elit consectetur adipisicing elit.</h2>
                            <p>ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                            </div>
                    </div>

                        <div className="col-md-6">
                            <div className="card margazine-card">
                            <img src="margazine-images/photo-1492447166138-50c3889fccb1.png" alt="" className="large-img"/>
                            <div className="inner-date d-flex">
                                <a href="">10/10/2020</a>
                                <a href="" className="link">LIFESTYLE</a>
                            </div>   
                            <h2>Lorem ipsum dolor sit, amet  elit consectetur adipisicing elit.</h2>
                            <p>ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </div>
                    </div>

                        
                        <div className="col-md-4">
                            <div className="card margazine-card  margazine-card-small">
                            <img src="margazine-images/img-1.png" alt="" className="small-img"/>
                            <div className="inner-date d-flex ">
                                <a href="">10/10/2020</a>
                                <a href="" className="link">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et accusamus et iusto</h3>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card margazine-card margazine-card-small">
                            <img src="margazine-images/img-2.png" alt="" className="small-img "/>
                            <div className="inner-date d-flex">
                                <a href="">10/10/2020</a>
                                <a href="" className="link">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et</h3>
                            </div>
                        </div>
                    

                        <div className="col-md-4">
                            <div className="card margazine-card margazine-card-small">
                            <img src="margazine-images/img-3.png" alt="" className="small-img"/>
                            <div className="inner-date d-flex">
                                <a href="">10/10/2020</a>
                                <a href="" className="link ">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et accusamus et iusto</h3>
                        </div>
                        </div>
                    </div>
                <div className="see-all mt-3"><a href="" className="btn text-uppercase">see all</a></div>
                </div>
            </section>

            <section className="section interviews">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 p-0 " > 
                            <img src="margazine-images/photo-1520781359717-3eb98461c9fe.png" alt="" className="img-fluid " />
                        </div>
                        <div className="col-md-6 ">
                            <h2 className="text-uppercase text-white">issue 22 - may 2020</h2>
                            <a href="#" className="btn2 mt-md-2 subscribe">subscribe now</a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h3 className="text-uppercase">interviews</h3>
                    <div className="row">
                        
                        <div className="col-md-4">
                            <div className="card margazine-card  margazine-card-small">
                            <img src="margazine-images/img-5.png" alt="" className="small-img"/>
                            <div className="inner-date d-flex ">
                                <a href="#">10/10/2020</a>
                                <a href="#" className="link">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et accusamus et iusto</h3>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card margazine-card margazine-card-small">
                            <img src="margazine-images/img-6.png" alt="" className="small-img "/>
                            <div className="inner-date d-flex">
                                <a href="#">10/10/2020</a>
                                <a href="#" className="link">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et</h3>
                            </div>
                        </div>
                    

                        <div className="col-md-4">
                            <div className="card margazine-card margazine-card-small">
                            <img src="margazine-images/img-7.png" alt="" className="small-img"/>
                            <div className="inner-date d-flex">
                                <a href="#">10/10/2020</a>
                                <a href="#" className="link ">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et accusamus et iusto</h3>
                        </div>
                        </div>
                    </div>
                <div className="see-all mt-3"><a href="#" className="btn text-uppercase">see all</a></div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h3 className="text-uppercase">news</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card margazine-card  margazine-card-small">
                            <img src="margazine-images/Screen Shot 2560-08-18 at 4.39.04 PM Copy 3.jpg" alt="" className="small-img"/>
                            <div className="inner-date d-flex ">
                                <a href="#">10/10/2020</a>
                                <a href="#" className="link">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et accusamus et iusto</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card margazine-card margazine-card-small">
                            <img src="margazine-images/Screen Shot 2560-08-18 at 4.38.56 PM Copy 5.jpg" alt="" className="small-img "/>
                            <div className="inner-date d-flex">
                                <a href="#">10/10/2020</a>
                                <a href="#" className="link">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et</h3>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card margazine-card margazine-card-small">
                            <img src="margazine-images/Screen Shot 2560-08-18 at 4.38.56 PM Copy 6.jpg" alt="" className="small-img"/>
                            <div className="inner-date d-flex">
                                <a href="#">10/10/2020</a>
                                <a href="#" className="link ">LIFESTYLE</a>
                            </div> 
                            <h3 className="feature-h3">At vero eos et accusamus et iusto</h3>
                        </div>
                        </div>
                    </div>
                <div className="see-all mt-3"><a href="" className="btn text-uppercase">see all</a></div>
                </div>
            </section>

            <footer className="footer">
                <img src="margazine-images/Group 2.png" alt="" className="footer-img"/>
                <a href="#" >designed by suffix</a>
            </footer>
</div>


    )
}
