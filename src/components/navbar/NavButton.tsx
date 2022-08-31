import Link from "next/link"

const NavButton = ( {title, scrollToId}: {title: string, scrollToId: string} ) => {

    
    return (        
        <Link href={`/#${scrollToId}`}>
            <li className=" 
            text-gray-700 hover:text-black hover:bg-[#E07A5F]
              cursor-pointer transition-colors duration-300 ease-linear
              hover:underline-offset-8 float-right h-[6rem] md:w-[15rem] w-[10rem] text-center p-8
              uppercase "
            >
                {title}
            </li>
        </Link>
    )
    
}

export default NavButton