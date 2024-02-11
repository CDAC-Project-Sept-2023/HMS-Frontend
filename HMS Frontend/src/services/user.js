import axios from 'axios';
import { createUrl, log } from '../utils/utils';

export async function registerUser(
  name,
  email,
  password,
  contactNo,
  age,
  bloodGroup,
  address,
  role
) {
  const url = createUrl('/patient/register');
  const body = {
    name,
    email,
    password,
    contactNo,
    age,
    bloodGroup,
    address,
    role
  };

  try {
   // Check if the user already exists by email
    // try {
    //   const getUserResponse = await axios.get(url);
    //   debugger;
    //   if (getUserResponse.data && getUserResponse.data.email === email) {
    //     console.log(getUserResponse.data);
    //     return { email: '' }; // Return an empty object to indicate existing email
    //   }
    //   if(getUserResponse.data && getUserResponse.data.role === 'Patient'){
    //     return {userRoles : 'Patient'}
    //   }
    //   else if (getUserResponse.data && getUserResponse.data.userRoles === 'Admin'){
    //     return {userRoles : 'Admin'}
    //   }
    //   else if (getUserResponse.data && getUserResponse.data.userRoles === 'Doctor'){
    //     return {userRoles : 'Doctor'}
    //   }
    // } catch (getUserEx) {
    //    log('Error fetching user data by email:', getUserEx);
    // }

    // Proceed with registration if the email is not found in the database
    debugger;
    const response = await axios.post(url, body);
    log(response.data);
    return response.data;
  } catch (ex) {
    log('Error registering user:', ex);
    return null;
  }
}

export async function loginUser(email, password) {
  //const url = createUrl('/auth/signin')
  const url = createUrl('/patient/signin')
  const body = {
    email,
    password,
  }

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    debugger; 
    const token = response.data.jwt;
    const userRoles = response.data.role;
    const userId = response.data.id;
    const isLoggedIn = true;//response.data.isLoggedIn;

    sessionStorage.setItem("token" , token);
    sessionStorage.setItem("userRoles", userRoles);
    sessionStorage.setItem("userId", userId);
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
    console.log(sessionStorage.getItem(userId));
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getPatientById(patientId){

  const url = createUrl(`/patient/${patientId}`)
debugger;
  // const body = {
  //   patientId
  // }
  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.get(url)
    log(response.data)
    debugger; 
    // const token = response.data.jwt;
    // const userRoles = response.data.role;
    // const userId = response.data.id;
    // const isLoggedIn = true;//response.data.isLoggedIn;

    // sessionStorage.setItem("token" , token);
    // sessionStorage.setItem("userRoles", userRoles);
    // sessionStorage.setItem("userId", userId);
    // sessionStorage.setItem("isLoggedIn", isLoggedIn);
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}