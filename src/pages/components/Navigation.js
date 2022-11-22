import { Button, Container, Offcanvas, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

const Navigation = () => {
	return (
		<Navbar expand='md' className='mb-3 navbar__container'>
			<Container fluid='xxl'>
				<div className='logo__container'>
					<Link className='navbar-brand' href='/'>
						<img
							className='logo'
							src='https://cdn-ukwest.onetrust.com/logos/236f1ae3-e97b-4fdf-9cb6-0803d748da2f/5ebc1394-b1a3-4a42-88c6-20bb30cc3831/48d0f561-6f01-496b-b552-aebd8fb0cbf3/logo_(1).png'
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
								<Link className='nav-link text-secondary' href='/'>
									Home
								</Link>
							</li>
							<li>
								<Link className='nav-link text-secondary' href='/qatar'>
									Qatar 2022
								</Link>
							</li>
							<li>
								<NavDropdown
									title={<span className='text-secondary'>Historia del mundial</span>}
									id='offcanvasNavbarDropdown-expand-md dropdown__title'
									as='ul'
								>
									<li>
										<Link className='dropdown-item' href='/worldcuphistory/all'>
											Todo
										</Link>
									</li>
									<li>
										<Link className='dropdown-item' href='#action3'>
											Resultados
										</Link>
									</li>
									<li>
										<Link className='dropdown-item' href='#action3'>
											Formaciones
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
