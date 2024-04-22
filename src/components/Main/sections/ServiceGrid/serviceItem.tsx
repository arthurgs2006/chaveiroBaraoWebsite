import { useState } from "react"
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
interface ServiceItemType {
    id: number,
    imgUrl: string,
    title: string,
    description: string
}

export default function ServiceItem<T extends ServiceItemType>(props: T) {
    const { id, imgUrl, title, description } = props;
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return (
        <>
            <div className='flex-column clipImg gap-2' key={id}>
                <a onClick={toggle}>
                    <img src={imgUrl} alt={title}
                        className='img-fluid object-fit-cover rounded'
                    />
                    <span className='text-white '>
                        {title}
                    </span>
                </a>
            </div>
            <Modal isOpen={modal} toggle={toggle} className="d-flex align-items-center">
                <ModalHeader toggle={toggle}>
                    {title}
                </ModalHeader>
                <ModalBody>
                    <img src={imgUrl} alt={title} className="img-fluid object-fit-cover rounded" />
                    {description}
                </ModalBody>
            </Modal>
        </>
    )
}