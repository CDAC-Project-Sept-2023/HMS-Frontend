import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
//import drItem from "../pages/AddCar";
import axios from "axios";
import { createUrl, log } from '../utils/utils';

const DoctorListing = () => {
  //const [cars, setCars] = useState([]); 
  const [doctor, setDoctor] = useState([]);
  useEffect( () => {
    loadDoctors();
  }, []);

  const loadDoctors = () => {
    const url = createUrl('/doctor');
    axios.get(url)
    .then(function (response) {
      setDoctor(response.data);
      log(response);
    })
    .catch(function (error) {
      
      log(error);
    })
    .finally(function () {
     
    });
  }
  return (
    <Helmet title="Doctor">
      <CommonSection title="Doctor List" />
    <h1>mayue</h1>
      <section>
        <Container>
          <Row>
          <h1>mayue</h1>
            {doctor.map((doctors) => (
              <CarItem doctors={doctor} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default DoctorListing;
