

import homeIndex from "../../assets/homeIndex.jpeg"


const HomeIndex = () => {
    return (
        <div 
        style={{
            backgroundImage: `url(${homeIndex})`
        }}
        className="sm:hidden md:hidden lg:hidden h-[750px] w-[1165px] 
        xl:flex xl:w-[704px] 
        
        bg-no-repeat bg-cover" 
        >
            
        </div>
    )
}

export default HomeIndex