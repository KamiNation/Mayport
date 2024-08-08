
import boat from "../../assets/Frame27.png"
import ImgComponent from "../customcomponent/ImgComponent"





const ExperienceLeft = () => {
    return (
        <div className="">
            <div className="w-531 h-489 rounded-lg sm:w-[250px] ">
                <ImgComponent
                    imgClass="contain"
                    image={boat}
                />
            </div>
            <div className="bg-customBlue rounded-lg h-88 w-367 sm:h-[44px] sm:p-[2px] sm:w-[150px]  p-6 flex items-center justify-center ">
                <p className="text-30 text-custom2White sm:text-[10px]">20 Years of Experience</p>
            </div>
        </div>
    )
}

export default ExperienceLeft