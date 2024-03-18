import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {
  const { id } = useParams()
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    salary: "",
    address: "",
    category_id: "",
  });

  const [category, setCategory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category',)
      .then(result => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error)
        }

      }).catch(err => console.log(err))

    axios.get('http://localhost:3000/auth/employee/' + id)
      .then(result => {
        setEmployee({
          ...employee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          salary: result.data.Result[0].salary,
          category_id: result.data.Result[0].category_id,
        })
      }).catch(err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3000/auth/edit_employee/' + id, employee)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/employee')
        }
        else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }


  return (
    <div className='d-flex justify-content-center align-items-center mt-4'>
      <div className='p-3 rounded w-50 border '>
        <h2 className='text-center'>Edit Employee</h2>
        <form className='row g-1' onSubmit={handleSubmit} >
          <div className='col-12'>
            <label htmlFor="inputName" className='form-label'>Name</label>
            <input type="text" name='category' placeholder='Enter Name'
              value={employee.name}
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })} className='form-control rounded-0' id='inputName' required />
          </div>
          <div className='col-12'>
            <label htmlFor="inputEmail" className='form-label'>Email</label>
            <input type="email" className='form-control rounded-0' id='inputEmail' placeholder='Enter Email' value={employee.email} onChange={(e) => setEmployee({ ...employee, email: e.target.value })} autoComplete='off' required />
          </div>
          <div className='col-12'>
            <label htmlFor="inputSalary" className='form-label'>Salary</label>
            <input type="text" className='form-control rounded-0' id='inputSalary' placeholder='Enter Salary' value={employee.salary} onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} autoComplete='off' />
          </div>
          <div className='col-12'>
            <label htmlFor="inputAddress" className='form-label'>Address</label>
            <input type="text" className='form-control rounded-0' id='inputAddress' placeholder='Enter Address' value={employee.address} onChange={(e) => setEmployee({ ...employee, address: e.target.value })} autoComplete='off' />
          </div>
          <div className='col-12'>
            <label htmlFor="category" className='form-label'>Category</label>
            <select name="category" id="category" className='form-select' onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })} required>
              {category.map(c => {

                return <option value={c.id}>{c.name}</option>

                // <option
                //   key={c._id}
                //   defaultValue={c._id}
                //   selected={c._id === parent}>
                //   {c.name}
                // </option>
              })}
            </select>
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary w-100'>Edit Employee</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default EditEmployee