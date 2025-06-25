import './index.css';
import Sec1 from './Sec1';
import SmallCard from './SmallCard';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SectionCard = () => (
    <><div className="bottom-sec">
          <div>
            <Sec1 btn="Integrations" h3="All in One Place All in Sync." para="Experience seamless coordination with our comprehensive services. From accounting to payroll, we bring everything together in one place"/>
          </div>
    
  <div className='bottom-sec'>  
        <SmallCard  icon="/images/coin.png" title="Payment Gateways" bg_style="bg_color"/>
        <SmallCard  icon="/images/tax.png" title="Tax Software Integration"/>
  </div>
  </div>
  <div className='bottom-sec-row'>    
        <SmallCard  icon="/images/multiple-users-silhouette.png" title="Expense Management" bg_style="bg_color"/>
        <SmallCard  icon="/images/stopwatch.png" title="Time Tracking Systems"/>
        <SmallCard  icon="/images/hand.png" title="Customer Relationship" bg_style="bg_color"/>
  </div>
  </>
);

export default SectionCard;
