import axios from "axios";

export default class ProductService{
    getProduct(){
        return axios.get("https://fakestoreapi.com/products");
    }

    getByProductName(name){
        return axios.get("https://fakestoreapi.com/products/" + name);
    }
}