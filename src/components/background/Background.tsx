import { useEffect, useState } from 'react'
import Image, { StaticImageData } from "next/image"

const Bg = ({background}: {background: string}) => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  const image: StaticImageData = require(`../../../public/images/${background}`)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  })

  return (
      <div className=" fixed top-0 left-0 -z-10 w-screen h-auto ">
        <Image 
          src={image}
          alt="No background image"
          className={" -z-10 "}
          style={{transform: `translateY(${offsetY*-0.3}px)`}}
      />
      </div>
  )
}

export default Bg