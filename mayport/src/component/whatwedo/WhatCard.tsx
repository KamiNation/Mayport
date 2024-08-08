import ImgComponent from "../customcomponent/ImgComponent"


import { top1rightmap } from "../constant/global"

const WhatCard: React.FC<top1rightmap> = ({ p1, p2, image, p3 }) => {
    return (
        <div className=" flex flex-col">
            
            <ImgComponent
                imgClass="contain"
                image={image}
                classname="sm:w-[250px] md:w-[416px]"
            />

            <div className="flex flex-col p-6 gap-y-8  flex-1 w-408 sm:w-[200px] md:w-[416px] lg:w-[587px] lg:items-center">
                <div className="flex flex-col gap-y-4 mb-8 flex-1 sm:flex md:flex">
                    <p className="flex text-28 sm:text-[20px] md:text-[22px] lg:text-[26px] lg:flex md:flex sm:flex">{p1}</p>
                    <p className=" w-360 sm:w-[200px] md:w-[416px] lg:w-[587px] md:text-center sm:text-center text-20v1 text-customGray sm:text-[18px] md:text-[20px] lg:text-[22px]">  {p2}</p>
                </div>
                <div className="bg-customRed p-[10px] rounded-[4px] lg:flex  w-91 h-39 text-16 text-custom2White">
                    <p className="flex lg:flex-row">{p3}</p>
                </div>
            </div>

        </div>
    )
}

export default WhatCard