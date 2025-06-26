import './index.css'

const Footer = () => {
  return (
    <>
        <div className='container'>
                <div className='box-1'>
                    <div className='box-1-img'>
                        <img src="/images/logo.png"></img>
                    </div>
                    <div className='box-1-para'>
                        <p>Your trusted partner in accounting and payroll solutions. We deliver precision, efficiency, and tailored services</p>
                    </div>
                    <div className='box-1-span'>
                        <span></span>
                    </div>
                </div>
                <div className='box-2'>
                    <div className='box-2-hd'><h4><span>Res</span>ources</h4></div>
                    <div className='box-2-ul'>
                        <ul>
                        <li>Home</li>
                        <li>About Page</li>
                        <li>FAQs Page</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='box-3'>
                    <div className='box-3-hd'><h4><span>Get</span> In Touch</h4></div>
                    <div className='box-3-ul'>
                        <ul>
                            <li>info@mail.com</li>
                            <li>+112 1254 124</li>
                            <li>255 Sheet, City Name Home Land, NY</li> 
                        </ul>
                    </div>
                </div>
        </div>
        <div className='end-text'>
            <p>Alpha Billing© Copyright 2025. All Rights Reserved.</p>
        </div>
    </>
)
}
export default Footer