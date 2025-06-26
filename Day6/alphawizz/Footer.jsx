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
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About Page</a></li>
                        <li><a href='/'>FAQs Page</a></li>
                        <li><a href='/'>Blog</a></li>
                        <li><a href='/'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className='box-3'>
                    <div className='box-3-hd'><h4><span>Get</span> In Touch</h4></div>
                    <div className='box-3-ul'>
                        <ul>
                            <li><a href='/'>info@mail.com</a></li>
                            <li><a href='/'>+112 1254 124</a></li>
                            <li><a href='/'>255 Sheet, City Name Home Land, NY</a></li> 
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