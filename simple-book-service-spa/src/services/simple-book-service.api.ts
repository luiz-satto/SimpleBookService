import axios from "axios";

const simple_book_service_api = axios.create({
    baseURL: "https://localhost:44307"
});

export default simple_book_service_api