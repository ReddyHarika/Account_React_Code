import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShoppingService from './ShoppingService';
 function ShoppingComponent() {
     const [employees , setEmployees] = useState([])
     
     useEffect(() => {
        getEmployees()    
     },[])
     const getEmployees = ()=>{
         ShoppingService.getAccounts().then((response) =>{
            setEmployees(response.data)
            console.log(response.data);
         }
         );
     };
     const handleDelete = id =>{
        ShoppingService.deleteAcountById(id)
        .then(response => {
            console.log("Deleted Successfully", response.data);
            getEmployees();
        })
        .catch(error => {
            console.log("Something went wrong", error);
        })
    }

    return (
        <div className="container">
            <h1 className="text-center">Online Shopping</h1>
            <hr/>
            <h1 className="text-center">Members List</h1>
            <Link to="/add" className="btn btn-primary">Add Member</Link> &nbsp;&nbsp;
            
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(
                            employee => 
                            <tr key= {employee.id}>
                                <td>{employee.id}</td>
                                <td> {employee.name}</td>
                                <td> {employee.phone}</td>
                                <td> {employee.email}</td>
                                <td>
                                <Link className="btn btn-info" to={`/accounts/edit/${employee.id}`}>Edit</Link>
                                </td>
                                <td>
                                <button className="btn btn-danger" onClick={(e) => handleDelete(employee.id)}>Delete</button>
                                </td>
                            </tr>


                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ShoppingComponent;