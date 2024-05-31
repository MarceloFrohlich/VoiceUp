export interface IServices {
    title: string
    description: string
    background: string
}

const ServicesImageRight: React.FC<IServices> = ({title, description, background}) => {
    return (
        <div className="flex text-gray-300 w-full my-1" >
            <div data-aos="fade-up" className="flex-1 h-[400px] flex justify-center items-center bg-slate-900 rounded-tl-2xl rounded-bl-2xl">
                <div className="w-1/2 py-10">
                    <h1 className="text-2xl text-green-800">{title}</h1>
                    <p className="text-2xl">{description}</p>
                </div>
            </div>
            <div data-aos="fade-up" className={`flex-1 ${background} bg-cover bg-center rounded-tr-2xl rounded-br-2xl`}></div>
        </div>
    )
}

export default ServicesImageRight