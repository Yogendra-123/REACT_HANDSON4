import { Link } from "react-router-dom"
import React from "react";


const StudentList = () => {
    return(
        <>
        <div className="container">
        <div className="link" > 
        <Link to='/' style={{ textDecoration: 'none' , color:'white'}}>Home Page</Link>
        </div>

        <div className="link">
            Student Page
        </div>

        <div className="link">
            <Link to='/contact' style={{ textDecoration: 'none' , color:'white'}}>Contact Us</Link>
        </div>
        </div> <br /> <br />
    
    <div className="studentitem">
    <h1 className="studentlist">Student List</h1>
    </div>

    <div>
        <Link to='/studentlist/AddStudents'>
        <button type="button" className="button">Add New Student</button>
        </Link>
    </div>

   <table border={1}> 
    <th>Name</th>
    <th>Age</th>
    <th>Course</th>
    <th>Batch</th>
    <th>Change</th>

    <tr>
        <td>Yogendra</td>
        <td>25</td>
        <td>Full Stack Development</td>
        <td>sep 2022</td>
        <th>Edit</th>
    </tr>

    <tr>
        <td>chiku</td>
        <td>25</td>
        <td>Business Management</td>
        <td>sep 2022</td>
        <th>Edit</th>
    </tr>

    <tr>
        <td>aayush</td>
        <td>22</td>
        <td>Full Stack Development</td>
        <td>sep 2022</td>
        <th>Edit</th>
    </tr>

    <tr>
        <td>virat</td>
        <td>25</td>
        <td>HR</td>
        <td>oct 2022</td>
        <th>Edit</th>
    </tr>

    <tr>
        <td>devendra</td>
        <td>25</td>
        <td>Full Stack Development</td>
        <td>nov 2022</td>
        <th>Edit</th>
    </tr>
   </table>

    </>

    )
}


export default StudentList;