import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    password: '',
    salary: '',
    address: '',
    category_id: '',
    image: ''
  })
  const [category, setCategory] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(result => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error)
        }

      }).catch(err => console.log(err))
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('image', employee.image);
    formData.append('category_id', employee.category_id);

    axios.post('http://localhost:3000/auth/add_employee', formData)
    .then(result =>  {
      if(result.data.Status) {
          navigate('/dashboard/employee')
      }else{
          alert(result.data.Error)
      }
  })
  .catch(err => console.log(err))
}
return (
  <div className='d-flex justify-content-center align-items-center mt-4'>
    <div className='p-3 rounded w-50 border '>
      <h2 className='text-center'>Add Employee</h2>
      <form className='row g-1' onSubmit={handleSubmit} >
        <div className='col-12'>
          <label htmlFor="inputName" className='form-label'>Name</label>
          <input type="text" name='category' placeholder='Enter Name' onChange={(e) => setEmployee({ ...employee, name: e.target.value })} className='form-control rounded-0' id='inputName' required />
        </div>
        <div className='col-12'>
          <label htmlFor="inputEmail" className='form-label'>Email</label>
          <input type="email" className='form-control rounded-0' id='inputEmail' placeholder='Enter Email' onChange={(e) => setEmployee({ ...employee, email: e.target.value })} autoComplete='off' required />
        </div>
        <div className='col-12'>
          <label htmlFor="inputPassword" className='form-label'>Password</label>
          <input type="password" className='form-control rounded-0' id='inputPassword' placeholder='Enter Password' onChange={(e) => setEmployee({ ...employee, password: e.target.value })} required />

          <label htmlFor="inputSalary" className='form-label'>Salary</label>
          <input type="text" className='form-control rounded-0' id='inputSalary' placeholder='Enter Salary' onChange={(e) => setEmployee({ ...employee, salary: e.target.value })} autoComplete='off' />
        </div>
        <div className='col-12'>
          <label htmlFor="inputAddress" className='form-label'>Address</label>
          <input type="text" className='form-control rounded-0' id='inputAddress' placeholder='Enter Address' onChange={(e) => setEmployee({ ...employee, address: e.target.value })} autoComplete='off' />
        </div>
        <div className='col-12'>
          <label htmlFor="category" className='form-label'>Category</label>
          <select name="category" id="category" className='form-select' onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })} required>
            {category.map(c => {

              return <option key={c.id} value={c.id}>{c.name}</option>
            })}
          </select>
        </div>
        <div className='col-12 mb-3'>
          <label htmlFor="inputImage" className='form-label'>Select Image</label>
          <input type="file" className='form-control rounded-0' id='inputImage'
            name="image"
            onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })} />
        </div>
        <div className='col-12'>
          <button type='submit' className='btn btn-primary w-100'>Add Employee</button>
        </div>

      </form>
    </div>
  </div>
)
}

export default AddEmployee