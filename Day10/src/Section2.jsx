import './Section2.css';

const Section2 = () => {
  return (
    <>
        <section className="section2">
        <div className="container">
        <h2>What’s waiting for you {<br/>}on the app?</h2>
        <p>Our app is packed with features that{<br/>}enable you to experience food {<br/>} delivery like never before</p>
        </div>
        <div className='custom-card-container'>
                <div className='custom-card-1'>
                    <div className='Card'>
                        <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardImg1.png'></img>
                        <span>Offers</span>
                    </div>
                    <div className='Card'>
                        <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardImg2.png'></img>
                        <span>Veg Mode</span>
                    </div>
                    <div className='Card'>
                        <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardImg3.png'></img>
                        <span>Plan a Party</span>
                    </div>
                    <div className='Card'>
                        <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardImg4.png'></img>
                        <span>Gift Cards</span>
                    </div>
                </div>
                <div className='custom-card-2'>
                    <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardMobileImg.PNG'></img>
                </div>
                <div className='custom-card-3'>
                    <div className='Card'>
                        <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardImg6.png'></img>
                        <span>Offers</span>
                    </div>
                    <div className='Card'>
                        <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardImg7.png'></img>
                        <span>Order On Train</span>
                    </div>
                    <div className='Card'>
                        <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardImg5.png'></img>
                        <span>Gourmet</span>
                    </div>
                    <div className='Card'>
                        <img src='https://jetsetterindia.com/assets/front_end/classic/images/cardImg8.png'></img>
                        <span>Homely Meals</span>
                    </div>
                </div>
        </div>
        </section>
    </>
  )
}

export default Section2