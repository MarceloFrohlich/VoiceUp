import { IServices } from "./servicesImageRight"


const ServicesImageLeft: React.FC<IServices> = ({ title, description, background }) => {
    return (
        <div className="flex text-gray-300 w-full my-1">
            <div data-aos="fade-up" className={`flex-1 ${background} hidden md:flex bg-cover bg-center rounded-tl-2xl rounded-bl-2xl md:rounded-br-none md:rounded-tr-none `}></div>
            <div data-aos="fade-up" className="flex-1 flex justify-center items-center bg-slate-900 rounded-lg md:rounded-tl-none md:rounded-bl-none ">
                <div className="w-full lg:w-3/4 text-justify flex flex-col gap-8 px-3 py-10">
                    <h1 className="text-xl text-left lg:text-2xl text-green-800">{title}</h1>
                    <p className="text-xl lg:text-2xl">{description}</p>
                </div>
            </div>

        </div>
    )
}

export default ServicesImageLeft