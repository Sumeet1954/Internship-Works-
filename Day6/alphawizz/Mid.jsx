import "./index.css";
import Card from "./Card";
import Sec1 from "./Sec1";

function Mid({para}) {
  return (
    <>
      <div className="mid-sec">
        <div className="mid-head">
          <div>
            <Sec1 btn="Why Accupay" h3="A platform for your global team" />
          </div>
          <div className="mid-para">
            <p>
             {para}
            </p>
          </div>
        </div>
        <div>
          <Card
            img_src="/images/whyAccoupayCard_1.png"
            para="Hire or relocate team member with in house visa support"
          />
        </div>
        <div>
          <Card
            img_src="/images/whyAccoupayCard_2.png"
            para="Create complaint contracts with a single click"
          />
        </div>
        <div>
          <Card
            img_src="/images/whyAccoupayCard_3.png"
            para="Send equipment worldwide, without the hassle"
          />
        </div>
        <div>
          <Card
            img_src="/images/whyAccoupayCard_4.png"
            para="Offer country-specific benefits at competitive rates"
          />
        </div>
        <div>
          <Card
            img_src="/images/whyAccoupayCard_5.png"
            para="Provide your team with co-working access via work"
          />
        </div>
        <div>
          <Card
            img_src="/images/whyAccoupayCard_6.png"
            para="Save time using advance integrations"
          />
        </div>
      </div>
    </>
  );
}
export default Mid;
