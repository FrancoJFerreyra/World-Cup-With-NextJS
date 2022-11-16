import {
  Button,
  Container,
  Offcanvas,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='md' className='mb-3'>
      <Container fluid='xxl'>
        <div className='logo__container'>
          <Link className='navbar-brand' href='/'>
            <img
              className='logo'
              src='https://seeklogo.com/images/F/fifa-world-cup-2022-logo-0E5F05028D-seeklogo.com.png'
              alt='Qatar world cup logo'
            />
          </Link>
        </div>
        <div>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
        </div>
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-md'
          aria-labelledby='offcanvasNavbarLabel-expand-md'
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel-expand-md'>
              <img
                className='img-fluid'
                src='https://seeklogo.com/images/F/fifa-world-cup-qatar-2022-logo-32157477CB-seeklogo.com.png'
                alt='Qatar world cup logo'
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3' as='ul'>
              <li>
                <Link className='nav-link' href='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link className='nav-link' href='/qatar'>
                  Qatar 2022
                </Link>
              </li>
              <li>
                <NavDropdown
                  title='Dropdown'
                  id='offcanvasNavbarDropdown-expand-md'
                  as='ul'
                >
                  <li>
                    <Link className='dropdown-item' href='#action3'>
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' href='#action4'>
                      Another action
                    </Link>
                  </li>
                </NavDropdown>
              </li>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
