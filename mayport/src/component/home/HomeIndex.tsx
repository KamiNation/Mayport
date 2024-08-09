

import homeIndex from "../../assets/homeIndex.jpeg"


const HomeIndex = () => {
    return (
        <div 
        style={{
            backgroundImage: `url(${homeIndex})`
        }}
        className="sm:hidden md:hidden lg:hidden h-[750px] w-full
        xl:flex
        bg-no-repeat bg-cover" 
        >
            
        </div>
    )
}

export default HomeIndex