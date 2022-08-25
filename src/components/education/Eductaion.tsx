import Image from "next/image"
import chalmers from "../../../public/chalmers_logo.png"
import bar from "../../../public/bar.jpg"
import bar2 from "../../../public/bar2.jpg"
import kostym from "../../../public/kostym.jpg"
import { useInView } from "react-intersection-observer";

const Education = () => {

    const { ref: background, inView: backgroundInView } = useInView();
    const { ref: logo, inView: logoInView } = useInView();
    const { ref: textbox, inView: textboxImgInView } = useInView();

    return (
        <div className="flex">
            <div id="edu_background" className=" w-screen pt-[30rem] mb-[20rem] ">
                <div ref={background} className={` w-[90%] rounded-xl bg-[#F4F1DE] h-[40rem] mx-auto transition-all duration-1000 ease-linear ${backgroundInView ? '-translate-y-10 opacity-100' : 'opacity-0'}`}>
                    <div ref={logo} className={` rounded-full top-[-15rem] 2xl:left-[5rem] -left-10 2xl:mx-0 mx-auto h-[25rem] w-[25rem] border-8 border-[#3D405B] bg-white relative transition-all duration-1000 ease-linear ${logoInView ? 'translate-x-10 opacity-100' : 'opacity-0'} `}>
                        <Image src={chalmers} alt={"Chalmers"} />
                    </div>
                    <div ref={textbox} className={` 2xl:float-right 2xl:mr-[5%] mx-auto 2xl:left-0 left-10 h-[30rem] 2xl:w-[50%] w-[80%] 2xl:top-[-40rem] top-[-5rem] border-8 border-[#3D405B] bg-[#F4F1DE] rounded-xl relative p-8 transition-all duration-1000 ease-linear ${textboxImgInView ? '-translate-x-10 opacity-100' : 'opacity-0'} `}>
                        <p className=" text-2xl text-[#3D405B] " >
                            I started my education at Chalmers University of Technology in the summer of 2017. Five years alter, in the summer of 2022 i finished my master thesis and left Chalmers with a bachelor in Computer Science and Enginering
                            and a master degree in Algorithms, Languages and Logic. But my time at Chalmers did not only include studying, I also took part in many student activities and was involved in multiple student commités. My time at the
                            university was without a doubt one of the most fun parts of my life.      
                        </p>
                    </div> 
                    <div className=" flex absolute mx-auto w-full h-[24rem] items-center justify-between invisible 2xl:visible ">
                        <div className=" rounded-xl w-[28.5rem] h-[80%] border-8 border-[#3D405B]">
                            <Image src={bar} alt={"Bar"} />
                        </div>
                        <div className=" rounded-xl w-[28.5rem] h-[80%] border-8 border-[#3D405B]">
                            <Image src={kostym} alt={"Party"} />
                        </div>
                        <div className=" rounded-xl w-[28.5rem] h-[80%] border-8  border-[#3D405B]">
                            <Image src={bar2} alt={"Another bar"} />
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Education