import "./index.css";

function Sec1({btn,h3,para,id}) {
  return (
    <>
      <section class='sec-1'>
            <div>
              <button id={id} className="button">{btn}</button>
              <h3 style={{ color: "black" }}>{h3}</h3>
              <p>{para}
              </p>
            </div>
        </section>
    </>
  );
}
export default Sec1;
