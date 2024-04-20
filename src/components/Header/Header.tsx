import {
    NavItem,
    NavbarBrand,
    Container,
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavLink

} from 'reactstrap'
import chaveiroLogo from '../../assets/logo-cb.jpeg';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.scss'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <header className='bg-black sticky'>
                <Container >
                    <Navbar className='w-100'
                        expand="lg">
                        <NavbarBrand href='#top'>
                            <img src={chaveiroLogo} alt="Logotipo do Chaveiro Barão"
                                className='img-fluid logo' width={'130'} />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} className="me-2 bg-light" />
                        <Collapse isOpen={isOpen} navbar >
                            <Nav className="d-flex ms-auto" navbar>
                                <NavItem >
                                    <NavLink href='#contact'>
                                        <b className='text-light'>Contatos</b>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href='#aboutus'>
                                        <b className='text-light'>Sobre Nós</b>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </header>
        </>
    )
}