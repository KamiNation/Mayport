

import { top1rightmap } from "../constant/global"

const AchieveR1: React.FC<top1rightmap> = ({ image, p2, p1, p3 }) => {
    return (
        <div
        style={{
            backgroundImage: `url(${image})`, 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        className="flex flex-col h-300 justify-center items-center opacity-70 sm:p-4 md:p-4 sm:w-[256px] md:w-[416px] sm:mb-4 md:mb-4 sm:flex md:flex sm:flex-col md:flex-col"
        >
            <div className="px-32 gap-y-4  justify-center items-center flex flex-col sm:px-0 md:px-0 sm:justify-center md:justify-center sm:flex md:flex">
            <div className="flex flex-col sm:flex md:flex sm:justify-center md:justify-center sm:items-end md:items-end ">
                <p className="flex text-custom2White text-4xl sm:text-2xl md:text-3xl"> {p1}</p>
                <p className="flex text-custom2White text-base sm:text-sm md:text-lg">{p2}</p>
            </div>
            <div className="flex-row bg-customRed p-3 rounded-sm gap-3 text-custom2White text-base ">
                <p className="flex-row">{p3}</p>
            </div>
            </div>
        </div>
    )
}

export default AchieveR1