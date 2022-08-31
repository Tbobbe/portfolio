import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from "next/image"
import AboutObject from "./AboutTypes";

const About = ({data}: {data: AboutObject}) => {

    const { ref: textBox, inView: textBoxInView } = useInView();
    const { ref: slice, inView: sliceInView } = useInView();
    const { ref: profileImg, inView: profileImgInView } = useInView();

    const image: StaticImageData = require(`../../../public/images/${data.image}`)

    return (
        <div className="flex">
            <div className=" w-screen pt-[20rem] mb-[20rem] " id={`${data.title}`}>
                <div ref={slice} className={` bg-[#3D405B] w-full md:h-[50rem] h-[40rem] pt-[3rem] skew-y-6 transition-all duration-1000 ease-linear ${sliceInView ? 'translate-y-10 opacity-100' : 'opacity-0'}`}>
                    <div className=" bg-[#E07A5F] w-full md:h-[44rem] h-[34rem]">
                        <div ref={profileImg} className={` relative -skew-y-6 md:h-[30rem] md:w-[30rem] h-[20rem] w-[20rem] 2xl:mx-0 mx-auto 2xl:left-[15%] 2xl:top-[10rem] top-[-15rem] border-8 border-[#F4F1DE] rounded-full transition-all duration-1000 ease-linear ${profileImgInView ? '-translate-y-20 opacity-100' : 'opacity-0'}`}>
                            <Image src={image} alt="No image" className="rounded-full"/>
                        </div>
                        <div ref={textBox} className={` relative -skew-y-6 flex-grow w-[70%] 2xl:w-[40%] 2xl:left-[50%] 2xl:top-[-40rem] top-[-15rem] -left-10 2xl:mx-0 mx-auto rounded-xl text-center p-6 bg-[#F4F1DE] transition-all duration-1000 ease-linear ${textBoxInView ? 'translate-x-10 -translate-y-10 opacity-100' : 'opacity-0'}`}>
                            <h1 className=" text-[#E07A5F] ">
                                {data.heading}
                            </h1>
                            <p className=" 2xl:text-3xl md:text-2xl text-xl text-[#3D405B] py-2 mt-[2rem]">
                                {data.text}   
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About