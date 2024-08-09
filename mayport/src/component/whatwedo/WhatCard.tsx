import ImgComponent from "../customcomponent/ImgComponent"


import { top1rightmap } from "../constant/global"

const WhatCard: React.FC<top1rightmap> = ({ p1, p2, image, p3 }) => {
    return (
        <div className=" flex flex-1 flex-col">
            
            <ImgComponent
                imgClass="contain"
                image={image}
                classname="w-full"
            />

            <div className="flex border-b rounded-b-xl border-red-900  flex-col p-6 gap-y-8  flex-1 lg:items-center xl:p-4">
                <div className="flex  flex-col gap-y-4 mb-8 flex-1 sm:flex md:flex xl:flex">
                    <p className="flex flex-1 text-28  md:text-[1.375rem] lg:text-[1.625rem] lg:flex md:flex sm:flex">{p1}</p>
                    <p className="  flex-1 md:text-center sm:text-center text-20v1 text-customGray sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.375rem]">  {p2}</p>
                </div>
                <div className="bg-customRed p-[0.625rem] rounded-[0.25rem] lg:flex  w-91 h-39 text-16 text-custom2White">
                    <p className="flex lg:flex-row">{p3}</p>
                </div>
            </div>

        </div>
    )
}

export default WhatCard