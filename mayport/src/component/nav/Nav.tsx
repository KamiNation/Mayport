import { useEffect } from "react"
import { navbar } from "../constant/global"







const Nav: React.FC<navbar> = ({ link, navName }) => {
    useEffect(() => {
        console.log(link);
    }, [link])
    return (

        <li className="sm:flex ">
            <a className="text-sm text-custom2White sm:text-[8px]" href={link}>
                {navName}
            </a>
        </li>

    )
}

export default Nav