import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/employee/employee_login', values);
      
      if (response.data.loginStatus) {
        localStorage.setItem("valid", true);
        navigate('/employee_details' + response.data.id);
      } else {
        setError(response.data.Error);
      }
    } catch (error) {
      // Handle Axios errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("Error while sending request: " + error.message);
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-warning'>{error && error}</div>
        <h2 className='text-center'>Login Page</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              autoComplete='off'
              placeholder='Enter Email'
              className='form-control rounded-0'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              className='form-control rounded-0'
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              required
            />
          </div>
          <button className='btn btn-success w-100 rounded-0 mb-2'>Login</button>
          <div className='mb-1'>
            <input type='checkbox' name='tick' id='tick' className='me-2' />
            <label htmlFor='password'>You agree with terms & conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;




