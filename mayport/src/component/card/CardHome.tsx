import React from 'react'
import ImgComponent from '../customcomponent/ImgComponent'

import { top1rightmap } from '../constant/global'



const CardHome: React.FC<top1rightmap> = ({ image, p1, p2 }) => {
    return (
        <div className="flex flex-col lg:mt-4 sm:mt-4 md:mt-4">

            <ImgComponent
                imgClass="contain"
                image={image}
                classname=" "
            />

            <div className="flex flex-col py-[24px] px-[16] 
            ">
                <div className="flex flex-col gap-y-4 flex-1 ml-4">
                    <p className="flex text-16 lg:text-[18px]"> {p1} </p>
                    <p className="w-360 text-14 text-customGray sm:w-[200px] md:w-[220px]">{p2}</p>
                </div>

            </div>

        </div>
    )
}

export default CardHome