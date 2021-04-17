import axios from "axios";

function getEmployee() {
    return axios.get("https://randomuser.me/api/?results=20&nat=au");
}

export default getEmployee;