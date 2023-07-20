import "./CardGroup.css";
import Card from "./Card";
// import jobInformation from "../data.json"
// import firstlogo from "../assets/logos/pod.svg"

function CardGroup() {
  return (
    <section className="CardGroup">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 ">
            <Card />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card />
          </div>

          <div className="col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card />
          </div>
          <div className="col-md-6 col-lg-4">
            <Card />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default CardGroup;
