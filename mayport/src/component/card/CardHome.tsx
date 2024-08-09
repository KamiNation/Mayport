import React from 'react'
import ImgComponent from '../customcomponent/ImgComponent'

import { top1rightmap } from '../constant/global'



const CardHome: React.FC<top1rightmap> = ({ image, p1, p2 }) => {
    return (
        <div className="flex rounded-lg flex-1 flex-col xl:mt-4 lg:mt-4 sm:mt-4 md:mt-4 border-b border-customBlue sm:mb-4">

            <ImgComponent
                imgClass="contain"
                image={image}
            />

            <div className="flex flex-1 flex-col py-[1.5rem] px-[1rem] 
            ">
                <div className="flex  flex-col gap-y-4 flex-1 ml-4">
                    <p className="flex text-16 xl:text-[1.9rem] lg:text-[1.125rem]"> {p1} </p>
                    <p className=" text-14 text-customGray flex-1 xl:text-[1.5rem]">{p2}</p>
                </div>

            </div>

        </div>
    )
}

export default CardHome