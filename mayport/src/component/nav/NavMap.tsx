import { navbar, navBar } from "../constant/global";
import Nav from "./Nav";





const NavMap = () => {
    return (
        <div className="flex justify-center items-center bg-customBlue w-990 h-72 md:hidden sm:hidden   ">
            <ul className="flex gap-x-6  sm:gap-y-2 sm:bg-red-950 ">
            {
                navBar.map((navitem: navbar) => (
                    <Nav
                    key={navitem.id}
                        link={navitem.link}
                        navName={navitem.navName}
                    />
                ))
            }
            </ul>

        </div>
    )
}

export default NavMap