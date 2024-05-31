import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col bg-customGray font-mono px-24 py-5 items-center text-gray-300">
            <h1 className=" text-2xl font-semibold pb-2" >Contatos</h1>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <CiMail />
                    <p className="text-sm">fernanda.voiceup@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoIosPhonePortrait  />
                    <p className="text-sm">(51) 9 9350-4346</p>
                </div>
                <div className="flex items-center gap-2">
                    <SlSocialLinkedin  />
                    <p className="text-sm">https://www.linkedin.com/in/fernandafrohlich</p>
                </div>
            </div>
        </footer>
    )
}