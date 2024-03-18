import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const EmployeeDetails = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:3000/employee/details/'+id)
      .then(result => {
        setEmployee(result.data[0])
      }).catch(err => {
        console.error("Error fetching employee details:", err);
      })
      
  }, [id])

  const handleLogout = () => {
    axios.get('http://localhost:3000/employee/logout')
    .then(result => {
      if(result.data.Status){
        localStorage.removeItem("valid")
        navigate('/')
      }
    }).catch(err => console.log(err))
  }
  return (
    <div>
      <div className='p-2 d-flex justify-content-center shadow'>
        <h4>Employee Management System</h4>
      </div>
      <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
        <img src={'http://localhost:3000/Images/' + employee.image} className='emp_det_image' alt="" />
        <div className='d-flex align-items-center flex-column mt-5'>
          <h4>Name: {employee.name}</h4>
          <h4>Email: {employee.email}</h4>
          <h4>Salary: {employee.salary}</h4>
        </div>
        <div>
          <button className='btn btn-primary me-2'>Edit</button>
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails