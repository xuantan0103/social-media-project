import axios from 'axios';

export default function editInfo(payload){
  let initialData = {
    fullname:"",
    email:"",
    dayofbirth:"",
    phone:"",
    address:"",
  }

  switch (payload.type) {
    case "fullname":
      initialData.fullname = payload.value;
      break;
    case "email":
      initialData.email = payload.value;
      break;
    case "dayofbirth":
      initialData.dayofbirth = payload.value;
      break;
    case "phone":
      initialData.phone = payload.value;
      break;
    case "address":
      initialData.address = payload.value;
      break;
    }

    return axios.post("auth/local/editproffile", initialData)
  }