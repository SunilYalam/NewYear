import React, { useState } from 'react';
import "./styles.css";
import Nielit_Logo from '../assets/Images/NIELIT_Logo.jpg'
import Emblem_of_India1 from '../assets/Images/Emblem_of_India1.jpg'


const Login = () => {
  const [loginForm, setLoginForm] = useState(true);

  const handleOpenClick = () => {
    setLoginForm(true);
  };

  const handleFormClose = () => {
    setLoginForm(false);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    setLoginForm(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setLoginForm(true);
  };

  return (
    <>
      <div className='d-flex'>
        <header className='header'>
          <div className='header-left-logo'>
            <a href="#">
              <img src={Nielit_Logo} alt="Nielit" />
            </a>
          </div>
          <div className='header-mid'>
            <p>राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान, पटना</p>
            <p>National Institute of Electronics & Information Technology, Patna</p>
          </div>
          <div className='header-rgt'>
            <p>Ministry of Electronics & Information Technology</p>
            <p>Government of India</p>
          </div>
          <div className='header-mid-elbum'>
            <img src={Emblem_of_India1} alt="elbm" className='elbum' />
          </div>
          <div className='header-elbum-rgt'>
            <button className='btn' id='open-btn' onClick={handleOpenClick}>Login</button>
          </div>
        </header>
      </div>
      <div className='silide'>
        <img src="" alt="" />
      </div>
      <section className='home'>
        <div className='form-container'>
          <i className='fa fa-close form-close' onClick={handleFormClose}></i>
          <div className={`form ${loginForm ? 'login-form' : 'signup-form'}`}>
            <form action="">
              <h2>{loginForm ? 'Login' : 'Signup'}</h2>
              <div className='input-box'>
                <input type="email" placeholder='Enter Email' required />
                <i className='fa fa-envelope email'></i>
              </div>
              <div className='input-box'>
                <input type="password" placeholder='Enter Password' required />
                <i className='fa fa-lock password'></i>
                <i className='fa fa-eye-s pw-hide'></i>
              </div>
              <div className='option-field'>
                <span className='checkbox'>
                  <input type="checkbox" name='' id='check' />
                  <label htmlFor="check">Remember me</label>
                </span>
                <a href="" className='forgot-pw'>Forgot Password</a>
              </div>
              <button className='button'>{loginForm ? 'Login Here' : 'Signup Here'}</button>
              <div className='login-signup'>
                {loginForm ? "Do not have an account?" : "Already have an account?"}
                <a href="#" id='signup' onClick={handleSignupClick}>{loginForm ? 'Signup' : 'Login'}</a>
              </div>

            </form>
          </div>
        </div>
      </section>
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
        </form>
      </div>
      <div className='menu-content'>
        <div className='menu-ms'>
          <h2>Inroduction</h2>
          <p>NIELIT Centre, Patna was established in the year 2008 and is operational from its Permanent Campus at Bihta (Near IIT Patna), with an objective to co-ordinate the activities of the various NIELIT Centres in the Eastern Region and to undertake pro-active role for promotion of NIELIT activities in the region thereby, extending the access of NIELIT to promote knowledge and skill development in Information, Electronics and Communications Technology (IECT) at various levels which will meet the requirement of the industry, thereby making the overall development of the region specially in Bihar State.</p>
          <p>NIELIT Patna is now going to launch its prestigious National Skill Quality Framework (NSQF) aligned courses with its accredited institutes for Software Courses/For Hardware Courses/ Electronic System Design and Manufacturing (ESDM) / NIELIT Facilitation Center/ CCAC Centres in online and blended mode. Where all theory classes will be provided by NIELIT Patna Centre through online classes and students can complete their practical session at our nearest infrastructure partner which are listed in the website. The facilities provided to the students are as follows:</p>

        </div>
        <div className='ms-system'>
          <h2 >Salary Management System</h2>
          <form action="" id='salaryForm'>
            <label htmlFor="name">Employee Name:</label>
            <input type="text" id='name' placeholder='Enter Employee Name' required />

            <label htmlFor="level">Level of CPC:</label>
            <select name="" id="level" required>
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
            </select>
            <label htmlFor="basicSalary">Basic Salary:</label>
            <input type="number" id='basicSalary' placeholder='Enter Basic Salary 18000' required />

            <label htmlFor="da">DA 48%:</label>
            <input type="number" id='da' placeholder='Enter DA' required />

            <label htmlFor="ta">TA 10%:</label>
            <input type="number" id='ta' placeholder='Enter TA' required />

            <label htmlFor="hra">HRA 20%:</label>
            <input type="number" id='hra' placeholder='Enter HRA' required />

            <button type='button' >Calculate Salary</button>
            <div className='' id='result'></div>
          </form>
        </div>
        <div className='menu-mst'>
          <h3>Login</h3>

        </div>
      </div>
      <footer className="footer">
        <div className="md-1">
          <h3>Important Link</h3>
          <a href="https://india.gov.in/">https://india.gov.in/</a>
          <a href="https://www.mygov.in/">https://www.mygov.in/</a>
          <a href="https://rtionline.gov.in/">https://rtionline.gov.in/</a>
          <a href="http://meity.gov.in/">http://meity.gov.in/</a>
          <a href="NIELIT HQ">NIELIT HQ</a>
        </div>
        <div className="md-2">
          <h3>Explore Nielit Patna</h3>
          <ul>
            <li><a href="">About Us</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Condition</a></li>
            <li><a href="">Cancellation/Refund</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div className="md-3">
          <h3><b>Contact US:</b></h3>
          Nielit Patna Centre, Near IIT Patna, Amhara, Bihta, Patna(Bihar) -801106.
          Mobile:  +91-6287942211(Academic Section)
          email: patna@nielit.gov.in
          For More visit our Website: https://www.nielit.gov.in/patna
          <h4><b>Working Hours</b> (09:00 AM To 5:30 PM( Mon-Fri only))</h4>

        </div>

        <ul className='list-group'>
            <li><a href="https://nielitpatnaonline.in/ONLINECOURSE/index.php">Home</a></li>
            <li><a href="https://nielitpatnaonline.in/ONLINECOURSE/Certificate_Course.php">Certificate/ Internship Courses</a></li>
            <li><a href="https://nielitpatnaonline.in/ONLINECOURSE/Certificate_Course_special.php">Special Course</a></li>
            <li><a href="https://nielitpatnaonline.in/industry_BSDM/">BSDM(PCB/EPT/SOLAR LED)</a></li>
            <li><a href="https://nielitpatnaonline.in/ONLINECOURSE/term_condition.php">Terms & Condition</a></li>
            <li><a href="https://nielitpatnaonline.in/ONLINECOURSE/privacy_policy.php">Privacy Policy</a></li>
          </ul>
      </footer>
    </>
  );
}

export default Login;