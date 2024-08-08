

import homeIndex from "../../assets/homeIndex.jpeg"


const HomeIndex = () => {
    return (
        <div 
        style={{
            backgroundImage: `url(${homeIndex})`, 
            height: "750px", 
            width: "1165px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        className="sm:hidden md:hidden" 
        >
            
        </div>
    )
}

export default HomeIndex