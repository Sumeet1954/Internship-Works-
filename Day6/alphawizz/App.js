import Nav from './Nav';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Hero from './Hero';
import Mid from './Mid';
import SectionCard from './SectionCard';
import Footer from './Footer';
function App() {
  return (
    <>
    <Nav/>
    <Hero h6="EFFICIENCY PAYROLL AND WORKFORCE MASTERY" h3=" We Make " h3_1= " Painless. " span="Payroll" para="We get your employee paid while providing online access to
                paystubs,tax reports and payroll tax filings" btn_1=" Get Started" btn_2="Learn More" img_src="/images/hero_illus.png"/>
    <Sec1 btn="Solutions" h3="The global payroll solution" para="When it comes to payroll solutions, we have a variety of options
                that benefit both your company and your contractar"/>
    <Sec2/>
    <Sec1 btn="  How it works " h3="A Step-by-Step Guide to Our Platform" para=" Explore our platform with ease! Sign up, Select your industry , and seemlessly integrate our tailored payment solutions."/>
   
    <Mid para=" Your dependable guide to achieving freedom from manual HR work
              and building that perfect workplace you have always aspired to
              build. Your dependable guide to achieving freedom."/>
    <SectionCard />
     <Hero h6="Experience AccuPay" h3="We've got everything you need?" para="We save you from all that boring paperwork! From global hiring, to instant payments, and taxes, we've got your back." img_src="/images/contact_illus.png"/> 
    <Footer/>
    </>
  );
}

export default App;
