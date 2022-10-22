import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaSearchLocation } from "react-icons/fa";

const PersonCard = ({ details }) => {
  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <img
            height="150"
            width="150"
            className="rounded-circle img-thumbnail border-danger "
            src={details.picture?.large}
            alt=""
          ></img>

          <CardTitle className="text-primary">
            <h1>
              <span className="p-2">{details.name?.title}</span>
              <span className="p-2">{details.name?.first}</span>
              <span className="p-2">{details.name?.last}</span>
            </h1>

            <p>
              <AiOutlineMail />
              <span className="p-2">{details.email}</span>
            </p>
            <div className=" container-md  w-75 d-flex flex-row align-items-start align justify-content-center ">
              <div className="">
                <span className="p-2 fs-5">
                  {" "}
                  <AiFillPhone /> {details.phone}
                </span>
              </div>

              <div className="">
                <span className="p-2 fs-5">
                  {" "}
                  <FaSearchLocation />
                  {details.location?.city}
                </span>
              </div>
            </div>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;
