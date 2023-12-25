import axios from "../axios";

export default function getUserInfoById(id) {
    axios.get(`/users/${id}`)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
            return null;
        })
}