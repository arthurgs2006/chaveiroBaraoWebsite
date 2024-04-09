import { Container, Row } from 'reactstrap'
import ControlsImg from '../../../assets/images/Controles_Image.jpg'
import plierImg from '../../../assets/images/Alicates_Image.jpg'
export default function ServiceGrid() {

    return (
        <>
            <section className="bg-black ">
                <Container xs>
                    <h1 className='text-white'>Confira alguns de nossos serviços:</h1>
                    <hr className='text-white'/>
                    <Row className='d-flex justify-content-center mt-5'>
                        <div className='gridCol'>
                            <img src={ControlsImg} alt="Conserto de Controles"
                                className='img-fluid img-rounded clipImg'
                            />
                            <span className='text-white '>
                                Conserto de Controles
                            </span>
                        </div>
                        <div className='gridCol'>
                            <img src={plierImg} alt="Conserto de Controles"
                                className='img-fluid clipImg'
                            />
                            <span className='text-white'>
                                Afiação de Alicates
                            </span>
                        </div>
                        <div className='gridCol'>
                            <img src={ControlsImg} alt="Conserto de Controles"
                                className='img-fluid clipImg'
                            />
                            <span className='text-white'>
                                Conserto de Controles
                            </span>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}