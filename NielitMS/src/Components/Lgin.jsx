import { useState } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Lgin = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin', values)
            .then(result => {
                if (result.data.loginStatus) {
                    navigate('/dashboard')
                } else {
                    setError(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-warning'>
                    {error && error}
                </div>
                <h2>Login Page</h2>
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
            </div>
        </div>
    )
}

export default Lgin


// Start
import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'




const Start = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3000/verify')
            .then(result => {
                if (result.data.Status) {
                    if (result.data.role === "admin") {
                        navigate('/dashboard');
                    } else {
                        navigate('/employee_details' + result.data.id);
                    }
                }
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2 className='text-center'>Login As</h2>

                <div className='d-flex justify-content-between mt-5 mb-2'>
                    <button type='button' className='btn btn-primary' onClick={() => { navigate('/employee_login') }}>Employee</button>
                    <button type='button' className='btn btn-success' onClick={() => { navigate('/adminlogin') }}>Admin</button>
                </div>
            </div>
        </div>

    )
}

export default Start;



// Employee Login 2
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
  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios({
        method: 'post',
        url: 'http://localhost:5173/employee/employee_login',
        data: values,
      });

      if (result.data.loginStatus) {
        localStorage.setItem("valid", true);
        navigate('/employee_details/' + result.data.id);
      } else {
        setError(result.data.Error);
      }
    } catch (err) {
      console.error("Error fetching employee details:", err);
      // setError("An error occurred while logging in. Please try again. Check console for more details.");

      if (err.response && err.response.status === 404) {
        setError("Endpoint not found. Double-check the server configuration.");
      } else {
        setError("An error occurred while logging in. Please try again.");
      }
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <div className='text-warning'>{error && error}</div>
        <h2>Login Page</h2>
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

// Start
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    
    axios.defaults.withCredentials = true;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:3000/verify');
                
                if (result.data.Status) {
                    if (result.data.role === 'admin') {
                        navigate('/dashboard');
                    } else {
                        navigate('/employee_details' + result.data.id);
                    }
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2 className='text-center'>Login As</h2>
                <div className='d-flex justify-content-between mt-5 mb-2'>
                    <button type='button' className='btn btn-primary' onClick={() => { navigate('/employee_login') }}>Employee</button>
                    <button type='button' className='btn btn-success' onClick={() => { navigate('/adminlogin') }}>Admin</button>
                </div>
            </div>
        </div>
    );
};

export default Start;

// header
<header>
<Navbar bg="dark" variant="dark" expand="lg">
    <Container >
        <Navbar.Brand href="/">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-15px">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form block className="ml-auto">
                <Form.Control type="text" placeholder="Search" className="mr-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
            <Dropdown className="ml-2">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Login
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate('/employee_login')}>Employee</Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate('/adminlogin')}>Admin</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar.Collapse>
    </Container>
</Navbar>
</header>





// employee
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
  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/employee/employee_login', values)
    .then(result => {
      if(result.data.loginStatus){
        localStorage.setItem("valid", true)
        navigate('/employee_details'+result.data.id);
      }else{
        setError(result.data.Error)
      }
    }).catch(err => console.log(err))
  }



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

// new start
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Navbar, Nav, Carousel, Row, Col, Card, Form, Button, Dropdown } from 'react-bootstrap';
import slide1 from "../assets/Images/slide1.png"
import tech_1 from "../assets/Images/tect_1.jpg";
import tech_2 from "../assets/Images/tech_2.jpg";
import tech_3 from "../assets/Images/tech_3.jpg";

const LandingPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('http://localhost:3000/verify');

                if (result.data.Status) {
                    if (result.data.role === 'admin') {
                        navigate('/dashboard');
                    } else {
                        navigate(`/employee_details/${result.data.id}`);
                    }
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    if (loading) {
        return <p>Loading...</p>;
    }

    // Carousel Function
    const imageStyle = {
        height: '450px',
        width: '100%',
    };

    const [formData, setFormData] = useState({
        name: '',
        level: '1',
        basicSalary: '',
        da: '',
        ta: '',
        htr: '',
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
            setResult('Please Enter all the values to calculate the salary.');
        }
    };


    return (
        <div>
            {/* Header */}
            <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img
                                src="" // Replace with your logo image URL
                                width="150"
                                height="50"
                                alt="Nielit"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="mx-auto my-2 my-lg-3"
                                style={{ maxHeight: '200px' }}>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control type="text" placeholder="Search" className="mr-2" />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Login
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/employee_login">Employee</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/adminlogin">Admin</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            {/* Carousel Layout */}
            <Carousel className="mt-0">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                        style={imageStyle}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tech_1}
                        alt="First slide"
                        style={imageStyle}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tech_2}
                        alt="Second slide"
                        style={imageStyle}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tech_3}
                        alt="Second slide"
                        style={imageStyle}
                    />
                </Carousel.Item>
                {/* Add more Carousel items with imported images as needed */}
            </Carousel>

            {/* Main Sections */}
            <Container className="mt-3">
                <Row>
                    <Col md={6}>
                        <section>
                            <h2>Section 1</h2>
                            <p>NIELIT Centre, Patna was established in the year 2008 and is operational from its Permanent Campus at Bihta (Near IIT Patna), with an objective to co-ordinate the activities of the various NIELIT Centres in the Eastern Region and to undertake pro-active role for promotion of NIELIT activities in the region thereby, extending the access of NIELIT to promote knowledge and skill development in Information, Electronics and Communications Technology (IECT) at various levels which will meet the requirement of the industry, thereby making the overall development of the region specially in Bihar State..</p>
                        </section>
                    </Col>
                    <Col md={6}>
                        <section>
                            <h2>Section 2</h2>
                            <p>NIELIT Centre, Patna was established in the year 2008 and is operational from its Permanent Campus at Bihta (Near IIT Patna), with an objective to co-ordinate the activities of the various NIELIT Centres in the Eastern Region and to undertake pro-active role for promotion of NIELIT activities in the region thereby, extending the access of NIELIT to promote knowledge and skill development in Information, Electronics and Communications Technology (IECT) at various levels which will meet the requirement of the industry, thereby making the overall development of the region specially in Bihar State..</p>
                        </section>
                    </Col>
                </Row>
            </Container>

            {/* Aside */}
            <Container className="mt-3">
                <aside>
                    <Card>
                        <Card.Body>
                            <Card.Title>Aside Section</Card.Title>
                            <Card.Text>NIELIT Centre, Patna was established in the year 2008 and is operational from its Permanent Campus at Bihta (Near IIT Patna), with an objective to co-ordinate the activities of the various NIELIT Centres in the Eastern Region and to undertake pro-active role for promotion of NIELIT activities in the region thereby, extending the access of NIELIT to promote knowledge and skill development in Information, Electronics and Communications Technology (IECT) at various levels which will meet the requirement of the industry, thereby making the overall development of the region specially in Bihar State..</Card.Text>
                        </Card.Body>
                    </Card>
                </aside>
            </Container>

            {/* calculation section */}
            <div className="ms-system">
                <h2>Salary Management System</h2>
                <form >
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text"
                        id='name'
                        placeholder='Enter Employee Name'
                        required
                        value={FormData.name}
                        onChange={handleInputChange} />

                    <label htmlFor="level">Level of CPC:</label>
                    <select id="level"
                        required
                        value={FormData.level}
                        onChange={handleInputChange}>
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

                    <label htmlFor="basicSalary">Select Basic Salary:</label>
                    <input type="number"
                        id='basicSalary'
                        placeholder='Enter Basic Salary'
                        required
                        value={FormData.basicSalary}
                        onChange={handleInputChange} />

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
            </div >

            {/* Footer */}
            < footer className="mt-3 bg-dark text-light" >
                <Container>
                    <Row className="py-3">
                        <Col xs={12} md={6}>
                            <p>&copy; 2024 Your Company</p>
                        </Col>
                        <Col xs={12} md={6} className="text-md-right">
                            <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
                        </Col>
                    </Row>
                </Container>
            </footer >
        </div >
    );
};

export default LandingPage;


//
<Navbar bg="dark" variant="dark" expand="lg">
<Container xl>
<Navbar.Brand as={Link} to="/">
        <img
            src="" // Replace with your logo image URL
            width="150"
            height="50"
            alt="Nielit"
        />
    </Navbar.Brand>
    <Navbar.Brand href="#home">Salary MSystem</Navbar.Brand>
    <Navbar.Text>
    <p>राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान ,पटना</p>
    <p>National Institute of Electronics & Information Technology,Patna</p>
    </Navbar.Text>

    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto my-2 my-lg-3"
            style={{ maxHeight: '200px' }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
            <Nav.Link as={Link} to="/Placement">Placement</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
        {/* <Form className="d-flex">
            <Form.Control type="text" placeholder="Search" className="mr-2" />
            <Button variant="outline-light">Search</Button>
        </Form> */}
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Login
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/employee_login">Employee</Dropdown.Item>
                <Dropdown.Item as={Link} to="/adminlogin">Admin</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </Navbar.Collapse>
</Container>
</Navbar>



