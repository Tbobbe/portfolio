
import { useInView } from "react-intersection-observer";

import haskell_logo from "../../../public/images/haskell_logo.png"
import scala_logo from "../../../public/images/scala_logo.png"
import Language from "./Language"
import { LanguagesObject } from "./LanguageTypes";


const Languages = ({data}: {data: LanguagesObject}) => {
    
    const { ref: languages, inView: languagesInView } =  useInView();
    
    return (
        <div className="flex">
            <div ref={languages} id={`${data.title}`} className={` w-screen md:pt-[10rem] pt-[5rem] transition-all duration-1000 ease-linear ${languagesInView ? 'translate-y-10 opacity-100' : 'opacity-0'}`}>
                <div className=" w-[90%] flex-grow rounded-xl bg-[#F4F1DE] md:mb-[10rem] mb-[5rem] mx-auto md:border-8 border-4 border-[#3D405B] text-center md:p-8 p-4 ">
                    <h1 className=" text-[#E07A5F] ">
                        My Favorite Programming Languages
                    </h1>
                </div>
                {data.entries.map((entry) => {
                    return (
                        <Language data={entry} key={entry.heading} />
                    )
                })}
            </div>
        </div>
        
    )

}

export default Languages