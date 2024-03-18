import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import CalculateSalary from './CalculateSalary';
import { Container, Navbar, Nav, Carousel, Row, Col, Card, Image, Form, Button, Dropdown } from 'react-bootstrap';
import slide1 from "../assets/Images/slide1.png";
import tech_1 from "../assets/Images/tech_1.jpeg";
import tech_2 from "../assets/Images/tech_2.jpg";
import tech_3 from "../assets/Images/tech_3.png";
import tech_4 from "../assets/Images/tech_4.png";
import NIELIT_logo from "../assets/Images/NIELIT_Logo.jpg";
import Emblem_of_India1 from "../assets/Images/Emblem_of_India1.jpg";


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

    // result clc




    return (
        <div>
            {/* Header */}
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container >
                        <Navbar.Brand as={Link} to="/">
                            <img
                                src={NIELIT_logo} // Replace with your logo image URL
                                width="150"
                                height="50"
                                alt="Nielit"
                            />
                        </Navbar.Brand>
                        {/* <Navbar.Brand href="#home" xs={20} bg="purple">Nielit MSystem</Navbar.Brand> */}
                        <Navbar.Text >
                            <p>राष्ट्रीय इलेक्ट्रॉनिकी एवं सूचना प्रौद्योगिकी संस्थान ,पटना</p>
                            <p>National Institute of Electronics & Information Technology,Patna</p>
                        </Navbar.Text>

                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav" >
                            <Nav className="mx-auto my-2 my-lg-3"
                                style={{ maxHeight: '200px' }}>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
                                <Nav.Link as={Link} to="/Placement">Placement</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>
                            <Col xs={6} md={4} >
                                <Image src={Emblem_of_India1} rounded />
                            </Col>
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
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={tech_4}
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
            {/* Calculate Salary */}
            <CalculateSalary />
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




