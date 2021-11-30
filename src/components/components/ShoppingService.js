import axios from 'axios';

 const SHOPPING_REST_API_URL="http://localhost:8082/accountapi/accounts";

 
class ShoppingService{

    getAccounts(){
        return axios.get(SHOPPING_REST_API_URL);

    }
    addAccount(data){
          return  axios.post(SHOPPING_REST_API_URL,data)
    }
    updateAccount(data){
        return axios.put(SHOPPING_REST_API_URL,data);
     }
    getAccountById(id){
        return axios.get(`${SHOPPING_REST_API_URL}/${id}`);
    }
    deleteAcountById(id){
        return axios.delete(`${SHOPPING_REST_API_URL}/${id}`)
    }
    
}

export default new ShoppingService();