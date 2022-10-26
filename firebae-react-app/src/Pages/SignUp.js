import React, { useContext, useState } from "react";

import {
  Container,
  Form,
  Button,
  Label,
  Col,
  Input,
  Row,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "reactstrap";

import { UserContext } from "../Context/UserContext";
import { Navigate, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        toast(error.message, { type: "error" });
        console.log("This is error", error);
        // ..
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/" />}></Route>{" "}
      </Routes>
    );
  } else {
    return (
      <Container className="text-center">
        <Row>
          <Col lg={6} className="offset-lg-3 mt-5">
            <Card>
              <Form onSubmit={handleFormSubmit}>
                <CardHeader className="">SignUp here</CardHeader>
                <CardBody>
                  <div className="d-flex mb-4">
                    <Label for="email" sm={3}>
                      Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="provide your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>
                  </div>
                  <div className="d-flex">
                    <Label for="password" sm={3}>
                      Password
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="your password here"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Col>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button type="submit" block color="primary">
                    Sign In
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default SignUp;
