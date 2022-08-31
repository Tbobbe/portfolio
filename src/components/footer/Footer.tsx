import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link';
import FooterObject from './FooterTypes';

const Footer = ({data}: {data:FooterObject}) => {

    return (
        <footer id="footer" className="w-screen md:h-[15rem] h-[10rem] md:mt-[10rem] mt-5 bg-[#3D405B] pt-[3rem] ">
            <div className=' flex w-[60%] md:h-[10rem] h-[5rem] mx-auto items-center justify-between  ' >
                <Link href={data.githubLink}>
                    <div className=' rounded-full bg-[#F4F1DE]  p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 md:h-[8rem] md:w-[8rem] h-[4rem] w-[4rem] '>
                        <FaGithub className=' h-full w-full ' />
                    </div>
                </Link>
                <Link href={data.linkedInLink}>
                    <div className=' rounded-full bg-[#F4F1DE]  p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 md:h-[8rem] md:w-[8rem] h-[4rem] w-[4rem] '>
                        <FaLinkedin className=' h-full w-full ' />
                    </div>
                </Link>
                <Link href={data.mailLink}>
                    <div className=' rounded-full bg-[#F4F1DE] p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 md:h-[8rem] md:w-[8rem] h-[4rem] w-[4rem] '>
                        <AiOutlineMail className=' h-full w-full ' />
                    </div>
                </Link>
            </div>
        </footer>
    )
}

export default Footer