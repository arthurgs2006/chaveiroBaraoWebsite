import whatsApp from '../../../assets/whatsApp-Icon.svg'

export default function (){
    return(
        <>
            <div className="fixed-bottom right-100 pb-3 whatsAppIcon">
                <a href="" target="_blank">
                    <img src={whatsApp} alt="Ícone para o WhatsApp"
                    width={'130'} className='img-fluid' 
                    />
                </a>
            </div>
        </>
    )
}