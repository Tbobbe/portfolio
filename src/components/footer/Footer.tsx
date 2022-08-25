import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link';

const Footer = () => {

    return (
        <footer id="footer" className="w-screen h-[15rem] mt-[10rem] bg-[#3D405B] pt-[3rem] ">
            <div className=' flex w-[60%] h-[10rem] mx-auto items-center justify-between  ' >
                <Link href={'https://github.com/Tbobbe'}>
                    <div className=' rounded-full bg-[#F4F1DE]  p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 h-[8rem] w-[8rem] '>
                        <FaGithub className=' h-full w-full ' />
                    </div>
                </Link>
                <Link href={'www.linkedin.com/in/tobias-bäckemo-3927491a1'}>
                    <div className=' rounded-full bg-[#F4F1DE]  p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 h-[8rem] w-[8rem] '>
                        <FaLinkedin className=' h-full w-full ' />
                    </div>
                </Link>
                <Link href={'mailto:tobias.backemo@gmail.com'}>
                    <div className=' rounded-full bg-[#F4F1DE] p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 h-[8rem] w-[8rem] '>
                        <AiOutlineMail className=' h-full w-full ' />
                    </div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer