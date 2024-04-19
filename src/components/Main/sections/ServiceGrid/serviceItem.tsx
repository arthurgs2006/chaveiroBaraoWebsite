
interface ServiceItemType {
    id: number,
    imgUrl: string,
    spanText: string,
}

export default function ServiceItem <T extends ServiceItemType >(props : T) {
    const {id, imgUrl, spanText} = props;
    return (
        <>
            <div className='flex-column clipImg gap-2' key={id}>
                <img src={imgUrl} alt={spanText}
                    className='img-fluid object-fit-cover rounded'
                />
                <span className='text-white '>
                    {spanText}
                </span>
            </div>
        </>
    )
}