// import { useState } from "react";
// import { Button, Container, Form,} from "react-bootstrap";
// import { fetchBooks } from "../services/UserServices";

// export function Search(){

//     const[searchData,setSearchData]=useState("")

//     const handleSearch=(e)=>{
//         setSearchData({...searchData,[e.target.name]:e.target.value});
//     }

//     const handleSearchSubmit=async(e)=>{
//         e.preventDefault();
//         try{
//             const result=await fetchBooks(searchData);
//             console.log(searchData)
//         }catch(error){
//             console.log(error);
//         }
//     }
//     return(
//         <Container>
//         <Form onSubmit={handleSearchSubmit}>
//             <div>
//                 <input type="text" placeholder="Search" name="search" onKeyUp={handleSearch}/>
//             </div>
//             <div>
//                 <Button type="submit" className="button-style btn-sm">Search</Button>
//             </div>
//         </Form>
//         </Container>
//     )
// }

// Search.js
import React from "react";
import { Form, Button } from "react-bootstrap";

export function Search() {
    return (
        <Form className="d-flex">
            {/* <Form.Control type="text" placeholder="Search"  className="mr-2" />
            <Button variant="outline-success" type="submit" className="ml-2"> */}
            <Form.Control type="text" placeholder="Search" size="sm" className="mr-2" />
            {/* <Button variant="outline-success" type="submit" className="ml-2"> */}
            <Button variant="outline-success" type="submit" className="ml-2" style={{ backgroundColor: 'lightgreen' }}>
                Search
            </Button>
        </Form>
    );
}
