import { useEffect, useState } from 'react'

const Bg = () => {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  })

  return (
      <div className={` fixed top-0 left-0 -z-10 w-full h-[30000px] bg-background `} style={{transform: `translateY(${offsetY*-0.3}px)`}} />
  )
}

export default Bg