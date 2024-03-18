import axios from 'axios'
import { useEffect, useState } from "react";


const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0)
  const [employeeTotal, setEmployeeTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])
  
  useEffect(() => {
    adminCount();
    employeeCount();
    salaryCount();
    AdminRecords();
  }, [])

  const AdminRecords = () => {
    axios.get('http://localhost:3000/auth/admin_records')
    .then(result => {
      if(result.data.Status){
        setAdmins(result.data.Result)
      }
      else{
        alert(result.data.Error)
      }
    })
  }

  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count')
    .then(result => {
      if(result.data.Status){
        setAdminTotal(result.data.Result[0].admin)
      }
    })
  }
  const employeeCount = () => {
    axios.get('http://localhost:3000/auth/employee_count')
      .then(result => {
        if (result.data.Status) {
          setEmployeeTotal(result.data.Result[0].employee)
        }
      })
  }
  const salaryCount = () => {
    axios.get('http://localhost:3000/auth/salary_count')
      .then(result => {
        if (result.data.Status) {
          setSalaryTotal(result.data.Result[0].salary)
        }
        else{
          alert(result.data.Error)
        }
      })
  }


  return (
  <div>
    <div className='p-3 d-flex justify-content-around mt-3'>
      <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className='text-center pb-1'>
          <h4>Admin</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h4>Total:</h4>
          <h4>{adminTotal}</h4>
        </div>
       </div>
       <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className='text-center pb-1'>
          <h4>Employee</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h4>Total:</h4>
          <h4>{employeeTotal}</h4>
        </div>
       </div>
       <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
        <div className='text-center pb-1'>
          <h4>Salary:</h4>
        </div>
        <hr />
        <div className='d-flex justify-content-between'>
          <h4>Total:</h4>
          <h4>{salaryTotal}</h4>
        </div>
       </div>
    </div>
    <div className='mt-4 px-5 pt-3'>
      <h4>List of Admin</h4>
      <table className='table'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            admins.map(a => (
              <tr key={a.email}>
                <td>{a.email}</td>
                <td>
                  <button className='btn btn-info btn-sm me-2'>Edit</button>
                  <button className='btn btn-warning btn-sm'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  </div>
)



}


export default Home;