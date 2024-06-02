export interface IServices {
    title: string
    description: string
    background: string
}

const ServicesImageRight: React.FC<IServices> = ({title, description, background}) => {
    return (
        <div className="flex text-gray-300 w-full my-1" >
            <div data-aos="fade-up" className="flex-1 flex justify-center items-center bg-slate-900 md:rounded-tr-none md:rounded-br-none md:rounded-tl-2xl md:rounded-bl-2xl rounded-lg"    >
                <div className="w-full lg:w-3/4 text-justify flex flex-col gap-8 px-3 py-10">
                    <h1 className="text-xl text-left lg:text-2xl text-green-800">{title}</h1>
                    <p className="text-xl lg:text-2xl">{description}</p>
                </div>
            </div>
            <div data-aos="fade-up" className={`flex-1 ${background} hidden md:flex bg-cover bg-center rounded-tr-2xl rounded-br-2xl`}></div>
        </div>
    )
}

export default ServicesImageRight