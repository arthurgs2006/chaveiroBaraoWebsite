import { Container, Row } from 'reactstrap'
import ControlsImg from '../../../assets/images/Controles_Image.jpg'
import ServiceItem from './serviceItem'


export default function ServiceGrid() {
    return (
        <>
            <section className="bg-black pb-5">
                <Container xs>
                    <h1 className='text-white'>Confira alguns de nossos serviços:</h1>
                    <hr className='text-white' />
                    <Row className='d-flex justify-content-center mt-5 gap-4'>
                        <ServiceItem imgUrl={ControlsImg} spanText='Conserto de Controles' id={Math.random() * 100} />
                        <ServiceItem imgUrl={ControlsImg} spanText='Afiação de Alicates' id={Math.random() * 100} />
                        <ServiceItem imgUrl={ControlsImg} spanText='Cópias de Chaves' id={Math.random() * 100} />
                    </Row>
                    <Row className='d-flex justify-content-center gap-4 mt-3'>
                        <ServiceItem imgUrl={ControlsImg} spanText='Conserto de Controles' id={Math.random() * 100} />
                        <ServiceItem imgUrl={ControlsImg} spanText='Afiação de Alicates' id={Math.random() * 100} />
                        <ServiceItem imgUrl={ControlsImg} spanText='Cópias de Chaves' id={Math.random() * 100} />
                    </Row>
                </Container>
            </section>
        </>
    )
}