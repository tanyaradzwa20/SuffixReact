import React from 'react'
import './home.css'
import Card from './Card'
import MenuItem from './Navbar/MenuItem'

export default function Home() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
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
                            {MenuItem.map((Item, index) =>{
                            return(
                                <li key={index}>
                                    <a className={Item.cName} href={Item.url}>{Item.title} </a>
                                </li>
                                )
                           })}
                        </ul>

                    <label htmlFor="chk" className="hide-menu-btn">
                        <img src={process.env.PUBLIC_URL + '/margazine-images/Group 4.png'} alt="" class="logo"/>
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
                           <Card                        
                                image = "margazine-images/Screen Shot 2560-08-18 at 4.23.48 PM.png"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='Lorem ipsum dolor sit, amet  elit consectetur adipisicing elit.'
                                paragraph='ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' >
                            </Card>
                        </div>

                        <div className="col-md-6">
                            <Card                        
                                image = "margazine-images/photo-1492447166138-50c3889fccb1.png"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='Lorem ipsum dolor sit, amet  elit consectetur adipisicing elit.'
                                paragraph='ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' >
                            </Card>
                        </div>

                        
                        <div className="col-md-4">
                            <Card                         
                                image = "margazine-images/img-1.png"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>

                        </div>

                        <div className="col-md-4">
                            <Card                         
                                image = "margazine-images/img-2.png"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>
                        </div>
                        <div className="col-md-4">
                           <Card                         
                                image = "margazine-images/img-3.png"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>
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
                            <Card                         
                                image = "margazine-images/img-5.png"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>
                        </div>

                        <div className="col-md-4">
                            <Card                         
                                image = "margazine-images/img-6.png"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>
                        </div>
                        <div className="col-md-4">
                           <Card                         
                                image = "margazine-images/img-7.png"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>
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
                            <Card                         
                                image = "margazine-images/Screen Shot 2560-08-18 at 4.39.04 PM Copy 3.jpg"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card                         
                                image = "margazine-images/Screen Shot 2560-08-18 at 4.38.56 PM Copy 5.jpg"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card                         
                                image = "margazine-images/Screen Shot 2560-08-18 at 4.38.56 PM Copy 6.jpg"
                                date={date}
                                heading='LIFESTYLE'
                                mainHeading='At vero eos et accusamus et iusto'>
                            </Card>
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
