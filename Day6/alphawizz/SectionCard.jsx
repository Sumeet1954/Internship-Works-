import "./index.css";
import Sec1 from "./Sec1";
import SmallCard from "./SmallCard";
import "bootstrap/dist/js/bootstrap.bundle.min";

const SectionCard = () => (
  <>
    <div class="sec-cards">
      <div class="div1">
        <Sec1
          btn="Integrations"
          h3="All in One Place All in Sync."
          para="Experience seamless coordination with our comprehensive services. From accounting to payroll, we bring everything together in one place"
        />
      </div>
      <div class="div2">
        <SmallCard icon="/images/coin.png" title="Payment Gateways" />
      </div>
      <div class="div3">
        <SmallCard icon="/images/tax.png" title="Tax Software Integration" />
      </div>
      <div class="div4">
        <SmallCard icon="/images/stopwatch.png" title="Time Tracking Systems" />
      </div>
      <div class="div5">
        <SmallCard
          icon="/images/hand.png"
          title="Customer Relationship"
        />
      </div>
      <div class="div6">
        <SmallCard
          icon="/images/multiple-users-silhouette.png"
          title="Expense Management"
        />
      </div>
    </div>
  </>
);

export default SectionCard;
