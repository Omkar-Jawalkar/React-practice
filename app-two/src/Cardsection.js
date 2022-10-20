import React from "react";
import Card from "./Card";
const Cardsection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">We love new friends!</h2>
        <div className="row">
          <div className="col-4">
            <Card title="Lohagad" text="This is an Awesome Place" />
          </div>
          <div className="col-4">
            <Card />
          </div>
          <div className="col-4">
            <Card title="Matheran" text="This is an Awesome Place too" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cardsection;
