import Logo from '../../../public/assets/ICON Amarelo.png'
import Image from 'next/image'
import { SlSocialInstagram, SlSocialFacebook  } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import Link from 'next/link'

export default function Header() {
    return (
        <header className="w-full h-24 bg-customGray font-mono px-4 md:px-8 lg:px-24 flex justify-between items-center">
            <div className='flex items-center gap-4'>
                <Image src={Logo} alt='logo Voice up' width={50} height={50} priority />
                <h1 className='font-semibold font-header text-gray-300 text-xl md:text-2xl'>VOICE UP</h1>
            </div>
            <div className='text-gray-300 text-xl md:text-2xl font-bold flex items-center gap-4 md:gap-6'>
                <Link href="https://www.instagram.com/afernandacunha_/" target='_blank'>
                    <SlSocialInstagram />
                </Link>
                <Link href='https://wa.me/5551993504346' target="_blank">
                    <SiWhatsapp  />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61554686494887&mibextid=ZbWKwL" target="_blank">
                    <SlSocialFacebook />
                </Link>
            </div>
        </header>
    )
}
