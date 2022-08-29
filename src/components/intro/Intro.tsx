import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link';
import IntroObject from './IntroTypes';

const Intro = ({data, name}: {data: IntroObject, name: string}) => {

    const { ref, inView } = useInView();

    return (
        <div className='flex'>
            <div ref={ref} id="intro" className={` w-screen text-center pt-[20rem] mb-[20rem] items-center top-0 left-0 transition-all duration-1000 ease-linear ${inView ? 'translate-y-10 opacity-100' : 'opacity-0'} `} >
                <div className={`w-[90%] lg:h-[20rem] h-[30rem] bg-[#F4F1DE] rounded-3xl mx-auto p-2 flex justify-center items-center `}>
                    <div>
                        <h1 className=" py-4 text-[#3D405B]">
                            Hi! I am <span className=" text-[#E07A5F]">{name}</span> 
                        </h1>
                        <h1 className=" py-2 text-[#3D405B]">
                            {data.heading}
                        </h1>
                        <p className=" text-[#3D405B] py-4 max-w-[70%] m-auto text-2xl">{data.text}</p>
                    </div>
                </div>
                <div className=' flex mt-[10rem] w-[60%] h-[10rem] mx-auto items-center justify-between ' >
                    <Link href={data.githubLink}>
                        <div className=' rounded-full  p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 h-[8rem] w-[8rem] '>
                            <FaGithub className=' h-full w-full ' />
                        </div>
                    </Link>
                    <Link href={data.linkedInLink}>
                        <div className=' rounded-full  p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 h-[8rem] w-[8rem] '>
                            <FaLinkedin className=' h-full w-full ' />
                        </div>
                    </Link>
                    <Link href={data.mailLink}>
                        <div className=' rounded-full  p-3 cursor-pointer transition-all duration-200 ease-linear hover:scale-110 h-[8rem] w-[8rem] '>
                            <AiOutlineMail className=' h-full w-full ' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Intro