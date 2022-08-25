import Experience from "./Experience"
import ericsson_logo from "../../../public/Ericsson_logo.png"

const Experiences = () => {

    return (
        <div className="flex w-screen">
            <div id="experience" className={` w-screen pt-[20rem] mb-[20rem] `} >
                <Experience
                    image={ericsson_logo}
                    heading={"Intern at Ericsson"}
                    content={"During my master studies I spent two years as an intern at Ericsson. During the summer I worked full time and the rest of the year I worked part time. While at Ericsson I learned a lot! I gained experience in how to work in the Linux environment, I got to work with tools for the CI pipeline such as Jenkins and I got to work with both front-end, back-end and scripting languages. "}
                    period={"2020-2022"} 
                />
            </div>
        </div>
    )
}

export default Experiences