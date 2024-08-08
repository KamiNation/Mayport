import ImgComponent from "../customcomponent/ImgComponent"


import { top1rightmap } from "../constant/global"

const WhatCard: React.FC<top1rightmap> = ({ p1, p2, image, p3 }) => {
    return (
        <div className=" flex flex-col">
            
            <ImgComponent
                imgClass="contain"
                image={image}
                classname="sm:w-[250px]"
            />

            <div className="flex flex-col p-6 gap-y-8  flex-1 w-408 sm:w-[200px]">
                <div className="flex flex-col gap-y-4 mb-8 flex-1 sm:flex">
                    <p className="flex text-28 sm:text-[20px] sm:flex">{p1}</p>
                    <p className=" w-360 sm:w-[200px] sm:text-center text-20v1 text-customGray sm:text-[18px]">{p2}</p>
                </div>
                <div className="bg-customRed p-[10px] rounded-[4px]  w-91 h-39 text-16 text-custom2White">
                    <p className="flex">{p3}</p>
                </div>
            </div>

        </div>
    )
}

export default WhatCard