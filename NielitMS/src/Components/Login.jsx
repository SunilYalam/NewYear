// Importing React and useState hook
import { useState } from 'react';

// Importing styles and images
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";
import Nielit_Logo from '../assets/Images/NIELIT_Logo.jpg'
import Emblem_of_India1 from '../assets/Images/Emblem_of_India1.jpg'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// Functional component named Login
const Login = () => {
  // Login Form
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/auth/adminlogin', values)
      .then(result => {
        if (result.data.loginStatus) {
          localStorage.setItem("valid", true)
          navigate('/dashboard')
        } else {
          setError(result.data.Error)
        }
      })
      .catch(err => console.log(err));
  }
  // State management using the useState hook to control the login form visibility
  const [loginForm, setLoginForm] = useState(true);

  // Event handler to open the login form
  // const handleOpenClick = () => {
  //   setLoginForm(true);
  // };

  // Event handler to close the form
  const handleFormClose = () => {
    setLoginForm(false);
  };

  // Event handler to switch to the signup form
  const handleSignupClick = (e) => {
    e.preventDefault();
    setLoginForm(false);
  };

  // Event handler to switch back to the login form
  const handleLoginClick = (e) => {
    e.preventDefault();
    setLoginForm(true);
  };

  const [formData, setFormData] = useState({
    name: '',
    level: '1',
    basicSalary: '',
    da: '',
    ta: '',
    hra: '',
  });

  const [result, setResult] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const calculateSalary = () => {
    const { name, level, basicSalary, da, ta, hra } = formData;
    let totalSalary;

    if (basicSalary !== '' && da !== '' && ta !== '' && hra !== '') {
      totalSalary =
        parseFloat(basicSalary) +
        (parseFloat(basicSalary) * parseFloat(da)) / 100 +
        (parseFloat(basicSalary) * parseFloat(ta)) / 100 +
        (parseFloat(basicSalary) * parseFloat(hra)) / 100;

      setResult(
        <div>
          <h3>Salary Details for {name}</h3>
          <p>Level of CPC: {level}</p>
          <p>Basic Salary: {basicSalary}</p>
          <p>DA: {da}%</p>
          <p>TA: {ta}%</p>
          <p>HRA: {hra}%</p>
          <p>Total Salary: {totalSalary}</p>
        </div>
      );
    } else {
      setResult('Please enter all the values to calculate the salary.');
    }
  };

  // JSX code for rendering the component
  return (
    <>
      {/* Header section */}
      <div className='l-flex'>
        <header className='header'>
          {/* Logo section */}
          <div className='header-left-logo'>
            <a href="#">
              <img src={Nielit_Logo} alt="Nielit" />
            </a>
          </div>
          {/* Mid section */}
          <div className='header-mid'>
            {/* Organization name in Hindi and English */}
            <p>राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान, पटना</p>
            <p>National Institute of Electronics & Information Technology, Patna</p>
          </div>
          {/* Right section */}
          <div className='header-rgt'>
            {/* Ministry information */}
            <p>Ministry of Electronics & Information Technology</p>
            <p>Government of India</p>
          </div>
          {/* Emblem section */}
          <div className='header-mid-elbum'>
            <img src={Emblem_of_India1} alt="elbm" className='elbum' />
          </div>
        </header>
      </div>
      {/* Slide section (empty in your code) */}
      <div className='silide'>
        <img src="" alt="" />
      </div>
      {/* Main section with login/signup forms */}
      <section className='home'>
        <div className='form-container'>
          {/* Close button for the form */}
          <i className='fa fa-close form-close' onClick={handleFormClose}></i>
          {/* Actual form for login/signup */}
          <div className={`form ${loginForm ? 'login-form' : 'signup-form'}`}>
            <form action="">
              {/* Title of the form (Login/Signup) */}
              <h2>{loginForm ? 'Login' : 'Signup'}</h2>
              {/* Email input */}
              <div className='input-box'>
                <input type="email" placeholder='Enter Email' required />
                <i className='fa fa-envelope email'></i>
              </div>
              {/* Password input */}
              <div className='input-box'>
                <input type="password" placeholder='Enter Password' required />
                <i className='fa fa-lock password'></i>
                <i className='fa fa-eye-s pw-hide'></i>
              </div>
              {/* Option field (Remember me and Forgot Password) */}
              <div className='option-field'>
                <span className='checkbox'>
                  <input type="checkbox" name='' id='check' />
                  <label htmlFor="check">Remember me</label>
                </span>
                <a href="" className='forgot-pw'>Forgot Password</a>
              </div>
              {/* Login/Signup button */}
              <button className='button'>{loginForm ? 'Login Here' : 'Signup Here'}</button>
              {/* Login/Signup switch */}
              <div className='login-signup'>
                {loginForm ? "Do not have an account?" : "Already have an account?"}
                <a href="#" id='signup' onClick={handleSignupClick}>
                  {loginForm ? 'Signup' : 'Login'}
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Additional form (empty in your code) */}
      <div className="form signup-form">
        <form action="#">
          <h2>Signup</h2>
          <div className="input-box">
            <input type="text" placeholder="Enter Name" required />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Enter Email" required />
            <i className="fa fa-envelope email"></i>
          </div>
          <div className="input-box">
            <input type="number" placeholder="Phone Number" required />
            <i className="fa fa-phone phone"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" required />
            <i className="fa fa-lock password"></i>
            <i className="fa fa-eye-s pw-hide"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm password" required />
            <i className="fa fa-lock password"></i>
            <i className="fa fa-eye-s pw-hide"></i>
          </div>
          <button className="button">Signup Here</button>
          <div className="login-signup">
            Already have an account? <a href="#" id="login" onClick={handleLoginClick}>Login</a>
          </div>
          {/* ... (similar structure as the login/signup form above) */}
        </form>
      </div>
      {/* Menu content section */}
      <div className='menu-content'>
        {/* Introduction section */}
        <div className='menu-ms'>
          <h2>Inroduction</h2>
          <p>NIELIT Centre, Patna was established in the year 2008 and is operational from its Permanent Campus at Bihta (Near IIT Patna), with an objective to co-ordinate the activities of the various NIELIT Centres in the Eastern Region and to undertake pro-active role for promotion of NIELIT activities in the region thereby, extending the access of NIELIT to promote knowledge and skill development in Information, Electronics and Communications Technology (IECT) at various levels which will meet the requirement of the industry, thereby making the overall development of the region specially in Bihar State.</p>
          <p>NIELIT Patna is now going to launch its prestigious National Skill Quality Framework (NSQF) aligned courses with its accredited institutes for Software Courses/For Hardware Courses/ Electronic System Design and Manufacturing (ESDM) / NIELIT Facilitation Center/ CCAC Centres in online and blended mode. Where all theory classes will be provided by NIELIT Patna Centre through online classes and students can complete their practical session at our nearest infrastructure partner which are listed in the website. The facilities provided to the students are as follows:</p>
        </div>
        {/* Salary Management System section */}
        <div className='ms-system'>
          <h2>Salary Management System</h2>
          <form>
            <label htmlFor='name'>Employee Name:</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Employee Name'
              required
              value={formData.name}
              onChange={handleInputChange}
            />

            <label htmlFor='level'>Level of CPC:</label>
            <select
              id='level'
              required
              value={formData.level}
              onChange={handleInputChange}
            >
              <option value="1">Level (1)-PB-1 (5200-20200) G.P. 1800</option>
              <option value="2">Level (2)-PB-1 (5200-20200) G.P. 1900</option>
              <option value="3">Level (3)-PB-1 (5200-20200) G.P. 2000</option>
              <option value="4">Level (4)-PB-1 (5200-20200) G.P. 2400</option>
              <option value="5">Level (5)-PB-1 (5200-20200) G.P. 2800</option>
              <option value="6">Level (6)-PB-2 (9300-34800) G.P. 4200</option>
              <option value="7">Level (7)-PB-2 (9300-34800) G.P. 4600</option>
              <option value="8">Level (8)-PB-2 (9300-34800) G.P. 4800</option>
              <option value="9">Level (9)-PB-2 (9300-34800) G.P. 5400</option>
              <option value="10">Level (10)-PB-3 (15600-39100) G.P. 5400</option>
              <option value="11">Level (11)-PB-3 (15600-39100) G.P. 6600</option>
              <option value="12">Level (12)-PB-3 (15600-39100) G.P. 7600</option>
              <option value="13">Level (13)-PB-4 (37400-67000) G.P. 8700</option>
              <option value="14">Level (13)-PB-4 (37400-67000) G.P. 8900</option>
              <option value="15">Level (14)-PB-4 (37400-67000) G.P. 10000</option>
              <option value="16">Level (15)- 67000-79000</option>
              <option value="17">Level (16)- 75000-80000</option>
              <option value="18">Level (17)- 80000</option>
              <option value="19">Level (17)- 90000</option>
              {/* Add more options as needed */}
            </select>

            <label htmlFor='basicSalary'>Select Basic Salary:</label>
            <input
              type='number'
              id='basicSalary'
              placeholder='Enter Basic Salary '
              required
              value={formData.basicSalary}
              onChange={handleInputChange}
            />

            <label htmlFor='da'>Enter DA %:</label>
            <input
              type='number'
              id='da'
              placeholder='Enter DA'
              required
              value={formData.da}
              onChange={handleInputChange}
            />

            <label htmlFor='ta'>Enter TA %:</label>
            <input
              type='number'
              id='ta'
              placeholder='Enter TA'
              required
              value={formData.ta}
              onChange={handleInputChange}
            />

            <label htmlFor='hra'>Enter HRA%:</label>
            <input
              type='number'
              id='hra'
              placeholder='Enter HRA'
              required
              value={formData.hra}
              onChange={handleInputChange}
            />

            <button type='button' onClick={calculateSalary}>
              Calculate Salary
            </button>
            <div className='' id='result'>
              {result}
            </div>
          </form>
        </div>
        {/* Login section (empty in your code) */}
        <div className='menu-mst p-5 rounded w-25 border'>
          <div className='text-warning'>
            {error && error}
          </div>
          <h3>Login Page</h3>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
                onChange={(e) => setValues({ ...values, email: e.target.value })} className='form-control rounded-0' />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" name='password' placeholder='Enter Password'
                onChange={(e) => setValues({ ...values, password: e.target.value })} className='form-control rounded-0' />
            </div>
            <button className='btn btn-success w-100 rounded-0'>Login</button>
            <div className='mb-1'>
              <input type="checkbox" name='tick' id='tick' className='me-2' />
              <label htmlFor="password">You are agree with terms & conditions</label>
            </div>
          </form>
          {/* ... (content for login section) */}

        </div>
      </div>
      {/* Footer section */}
      <footer className="footer">
        <div className="md-1">
          <h3>Important Link</h3>
          <a href="https://india.gov.in/">https://india.gov.in/</a>
          <a href="https://www.mygov.in/">https://www.mygov.in/</a>
          <a href="https://rtionline.gov.in/">https://rtionline.gov.in/</a>
          <a href="http://meity.gov.in/">http://meity.gov.in/</a>
          <a href="NIELIT HQ">NIELIT HQ</a>
          {/* ... (links to important websites) */}
        </div>
        <div className="md-2">
          <h3>Explore Nielit Patna</h3>
          <ul>
            {/* ... (navigation links) */}
            <li><a href="">About Us</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Condition</a></li>
            <li><a href="">Cancellation/Refund</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div className="md-3">
          <h3><b>Contact US:</b></h3>
          {/* ... (contact information) */}
          Nielit Patna Centre, Near IIT Patna, Amhara, Bihta, Patna(Bihar) -801106.
          Mobile:  +91-6287942211(Academic Section)
          email: patna@nielit.gov.in
          For More visit our Website: https://www.nielit.gov.in/patna
          <h4><b>Working Hours</b> (09:00 AM To 5:30 PM( Mon-Fri only))</h4>
        </div>
      </footer>
    </>
  );
}

// Exporting the Login component
export default Login;














