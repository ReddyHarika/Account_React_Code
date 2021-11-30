import { useState, useEffect } from "react";
import ShoppingService from "./ShoppingService";
import { Link, useParams } from "react-router-dom";
const AddMember = () =>{
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email,setEmail] = useState('');
    
    const {id} = useParams();

    const saveEmployee = (e)=>{
        //to avoid refresh
        e.preventDefault();
        const employee = {name, phone, email, id};
        if(id){
            
            //update
            ShoppingService.updateAccount(employee)
            .then(response => {
                console.log("Data Updated Successfully",response.data);
                window.location = "/";
            })

            .catch(error =>{
                console.log("Something went wrong",error);
            })
        }
        else{
            //create
            ShoppingService.addAccount(employee)
        .then(response => {
            console.log('Member data added successfully',response.data);
            window.location = '/';
        })
        .catch(error =>{
            console.log('Something went wrong',error);
        });
        }
    }   
    useEffect(() => {
        
        if(id){
            ShoppingService.getAccountById(id)
            .then(employee =>{
                setName(employee.data.name);
                setPhone(employee.data.phone);
                setEmail(employee.data.email);
            })
            .catch(error => {
                console.log('Something went wrong',error);
            })
        }
        
    },[]) 
    
    
    return(
        <div className="container">
        <h4>Add new Member</h4>
        <hr/>
        <form>
        <div className="form-group">
        <input type="text" className="form-control col-4" id="name" value={name}
        onChange={(e) => setName(e.target.value) } placeholder="Member name"
        />
        </div>
        <div className="form-group">
        <input type="text" className="form-control col-4" id="phone" value={phone}
        onChange={(e) => setPhone(e.target.value) } placeholder="Phone"
        />
</div>
<div className="form-group">
        <input type="text" className="form-control col-4" id="email" value={email}
        onChange={(e) => setEmail(e.target.value) } placeholder="Email"
        />
        
        </div>
        <div>
        <button className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
        </div>
        </form>
        <hr/>
        <Link to="/">Back to List</Link>
        </div>

    );
}

export default AddMember;