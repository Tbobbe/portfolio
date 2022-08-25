import { useEffect, useState } from 'react'
import bg from "../../../public/background.png"
import Image from "next/image"

const Bg = () => {

    const [offsetY, setOffsetY] = useState(0);
  
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  })


    return (
        <div className=" bg ">
          <Image 
            src={bg}
            alt="No image"
            className={" -z-10 "}
            style={{transform: `translateY(${offsetY*-0.3}px)`}}
        />
        </div>
    )
}

export default Bg