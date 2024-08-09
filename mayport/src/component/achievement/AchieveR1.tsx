

import { top1rightmap } from "../constant/global"

const AchieveR1: React.FC<top1rightmap> = ({ image, p2, p1, p3 }) => {
    return (
        // sm:w-[256px] md:w-[416px] lg:w-[587px] xl:w-[704px]
        <div
            style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className=" flex flex-col flex-1 rounded-md h-300 justify-center items-center opacity-70 sm:p-4 md:p-4 lg:p-4 xl:p-4 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-4 sm:flex md:flex lg:flex sm:flex-col md:flex-col lg:flex-col"
        >
            <div className="px-32 gap-y-4  justify-center items-center flex flex-col flex-1 sm:px-0 md:px-0 lg:px-0 sm:justify-center md:justify-center lg:justify-center sm:flex md:flex lg:flex">
                <div className="flex flex-col flex-1 p-2
                sm:flex md:flex lg:flex xl:flex
                sm:justify-center md:justify-center xl:justify-center lg:justify-center xl:items-center
                sm:items-center md:items-center 
                lg:items-center
                2xl:flex-none
                ">
                    <p className="flex flex-1 text-custom2White text-4xl sm:text-2xl md:text-3xl">  {p1}</p>
                    <p className="flex flex-1 text-custom2White text-base sm:text-sm md:text-lg">{p2}</p>
                </div>
                <div className="flex-row 2xl:mb-2 bg-customRed p-3 rounded-sm  text-custom2White text-base ">
                    <p className="flex-row">{p3} </p>
                </div>
            </div>
        </div>
    )
}

export default AchieveR1