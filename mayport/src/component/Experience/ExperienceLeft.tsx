
import boat from "../../assets/Frame27.png"
import ImgComponent from "../customcomponent/ImgComponent"





const ExperienceLeft = () => {
    return (
        // sm:w-[250px] md:w-[416px] lg:w-[587px] xl:w-[704px]"
        <div className="flex flex-col mb-4
        border border-emerald-900
        ">
            <div className="
    flex-1 flex
    border border-orange-600
            w-full h-full rounded-lg">
                <ImgComponent
                classname="w-full
                border border-green-900
                "
                    imgClass="contain"
                    image={boat}
                />
            </div>
            <div className="bg-customBlue rounded-lg h-88 w-367  sm:h-[2.75rem] sm:p-[0.125rem] sm:w-[9.375rem] lg:mb-4 p-6 flex items-center justify-center ">
                <p className="text-30 text-custom2White  md:text-[1.9rem] sm:text-[0.8rem]">20 Years of Experience</p>
            </div>
        </div>
    )
}

export default ExperienceLeft