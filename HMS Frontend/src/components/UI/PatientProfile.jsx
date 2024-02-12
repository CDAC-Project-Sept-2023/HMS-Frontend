import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createUrl, log } from "../../utils/utils";
import { getPatientById } from "../../services/user";

const ServiceBook = () => {
  const { id, name } = useParams();
  const [description, setDescription] = useState("");
  const [carId, setCarId] = useState("");
  const [patient, setPatient] = useState("");
  const navigate = useNavigate();

  const getPatient = async () => {
    try {
      const patientId= sessionStorage.getItem("userId");
      const response = await getPatientById(patientId);
      console.log(response);
      setPatient(response);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during getching patient");
    }
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="form">
            <h1>Your Profile</h1>
            <div class="mb-3">
              <div class="table-responsive">
                <table class="table">
                  <tbody>
                    <tr>
                      <td className="p-3"> Name:{patient.name} </td>
                    </tr>
                    <tr>
                      <td>Email:{patient.email} </td>
                    </tr>
                    <tr>
                      <td>Password:{patient.password} </td>
                    </tr>
                    <tr>
                      <td>Contact No:{patient.contactNo} </td>
                    </tr>
                    
                      <tr>
                        <td>Age:{patient.age} </td>
                      </tr>
                      <tr>
                        <td>Address:{patient.address} </td>
                      </tr>
                      <tr>
                        <td>BloodGroup:{patient.bloodGroup} </td>
                      </tr>
                    
                    <tr></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <button type="submit" class="btn btn-success" onClick={getPatient}>
              Submit
            </button>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
};

export default ServiceBook;

/*return (
    <div className="container">

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">
            <h1>Book Service</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="serviceId">Service ID</label>
                <input
                  type="text"
                  id="serviceId"
                  name="serviceId"
                  value={id}
                  className="form-control"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="serviceName">Service Name</label>
                <input
                  type="text"
                  id="serviceName"
                  name="serviceName"
                  value={name}
                  className="form-control"
                  disabled
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  placeholder="Enter description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="carId">Car ID</label>
                <input
                  type="text"
                  id="carId"
                  name="carId"
                  placeholder="Enter car ID"
                  className="form-control"
                  value={carId}
                  onChange={(e) => setCarId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="serviceDate">Service Date</label>
                <input
                  type="date"
                  id="serviceDate"
                  name="serviceDate"
                  className="form-control"
                  value={serviceDate}
                  onChange={(e) => setServiceDate(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );*/
