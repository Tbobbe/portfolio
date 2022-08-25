import profile_picture from "../../../public/profilbild_delta.jpg"
import { useInView } from "react-intersection-observer";
import Image from "next/image"

export default function About() {

    const { ref: textBox, inView: textBoxInView } = useInView();
    const { ref: slice, inView: sliceInView } = useInView();
    const { ref: profileImg, inView: profileImgInView } = useInView();

    return (
        <div className="flex">
            <div className=" w-screen pt-[20rem] mb-[20rem] " id="about">
                <div ref={slice} className={` bg-[#3D405B] w-full h-[50rem] pt-[3rem] skew-y-6 transition-all duration-1000 ease-linear ${sliceInView ? 'translate-y-10 opacity-100' : 'opacity-0'}`}>
                    <div className=" bg-[#E07A5F] w-full h-[44rem]">
                        <div ref={profileImg} className={` relative -skew-y-6 h-[30rem] w-[30rem] 2xl:mx-0 mx-auto 2xl:left-[15%] 2xl:top-[10rem] top-[-15rem] border-8 border-[#F4F1DE] rounded-[30rem] transition-all duration-1000 ease-linear ${profileImgInView ? '-translate-y-20 opacity-100' : 'opacity-0'}`}>
                            <Image src={profile_picture} alt="No image" className="rounded-full"/>
                        </div>
                        <div ref={textBox} className={` relative -skew-y-6 xl:h-[30rem] 2xl:h-[50rem] h-[40rem] w-[70%] 2xl:w-[40%] 2xl:left-[50%] 2xl:top-[-40rem] top-[-15rem] -left-10 2xl:mx-0 mx-auto rounded-xl text-center p-6 bg-[#F4F1DE] transition-all duration-1000 ease-linear ${textBoxInView ? 'translate-x-10 -translate-y-10 opacity-100' : 'opacity-0'}`}>
                            <h1 className=" text-[#E07A5F] ">
                                About me
                            </h1>
                            <p className=" 2xl:text-3xl text-2xl text-[#3D405B] py-2 mt-[2rem]">
                                Hi there! As you should know now after reading the headline, I am a software engineer. Naturally, programming and computers is a passion of mine, but I have more interests
                                than just my job. I enjoy being outdoors in nature, especially I like hiking the swedish montains in the summer and skiing in the winter. I also have a passion for martial arts.
                                During my young years I practiced a lot of judo and ju-jutsu, then later, during my studies at the university, I picked up krav maga. Other than that I enjoy what most people enjoy:
                                A drink on the weekend, travelling on vacation and good food.      
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}