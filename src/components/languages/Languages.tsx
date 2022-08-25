
import { useInView } from "react-intersection-observer";

import haskell_logo from "../../../public/haskell_logo.png"
import scala_logo from "../../../public/scala_logo.png"
import Language from "./Language"


const Languages = () => {
    
    const { ref: languages, inView: languagesInView } =  useInView();
    
    return (
        <div className="flex">
            <div ref={languages} id="languages" className={` w-screen pt-[10rem] transition-all duration-1000 ease-linear ${languagesInView ? 'translate-y-10 opacity-100' : 'opacity-0'}`}>
                <div className=" w-[90%] 2xl:h-[9rem] xl:h-[13rem] h-[15rem] rounded-xl bg-[#F4F1DE] mb-[10rem] mx-auto border-8 border-[#3D405B] text-center p-8 ">
                    <h1 className=" text-[#E07A5F] ">
                        My Favorite Programming Languages
                    </h1>
                </div>
                <Language
                    logo={haskell_logo}
                    heading="Haskell"
                    body="Haskell is a purely functional programming language. A lot of the functional tools one can see in modern programming languages of all paradigms originates from Haskell. For example monads (they are very useful once you get to know them). Since Haskell is built for functionall programming and functional programming oonly, it's syntax is very expressive and one can write code with a lot of functionality using only a few lines. Haskell is also ideal for applying a functional program architecture which yields a program that is safe, has few bugs and is easy to maintain."
                />
                <Language 
                    logo={scala_logo} 
                    heading="Scala" 
                    body="Scala is a mix of an object oriented and a functional programming language. It runs on the Java Virtual Machine which means that it can use the Java libraries. Campared to Java however, Scala has, in my oppinion, a much cleaner and more concise syntax. It also supports a lot of functional programming features such as immutable data structures."
                />
            </div>
        </div>
        
    )

}

export default Languages