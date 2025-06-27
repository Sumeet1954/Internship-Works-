import "./index.css";
import Card from "./Card";
import Sec1 from "./Sec1";

function Mid({ para }) {
  return (
    <>
      <div className="mid-sec-top">
        <div className="mid-sec">
        <div className="mid-head">
          <div>
            <Sec1 btn="Why Accupay" h3="A platform for your global team" id="btn-3-3"/>
          </div>
          <div className="mid-para">
            <p>
             {para}
            </p>
          </div>
        </div>
          <div class="card-parent">
            <div class="card-1">
              <Card
            img_src="/images/whyAccoupayCard_1.png"
            para="Hire or relocate team member with in house visa support"
          />
            </div>
            <div class="card-2">
            <Card
            img_src="/images/whyAccoupayCard_2.png"
            para="Create complaint contracts with a single click"
          /></div>
            <div class="card-3">
                <Card
            img_src="/images/whyAccoupayCard_3.png"
            para="Send equipment worldwide, without the hassle"
          />
            </div>
            <div class="card-4">
              <Card
            img_src="/images/whyAccoupayCard_4.png"
            para="Offer country-specific benefits at competitive rates"
          />
            </div>
            <div class="card-5">
              <Card
            img_src="/images/whyAccoupayCard_5.png"
            para="Provide your team with co-working access via work"
          />
            </div>
            <div class="card-6">
              <Card
            img_src="/images/whyAccoupayCard_6.png"
            para="Save time using advance integrations"
          />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mid;
