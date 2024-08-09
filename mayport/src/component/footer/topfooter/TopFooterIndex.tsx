import React from 'react'
import ImgComponent from '../../customcomponent/ImgComponent'
import { top1rightmap } from '../../constant/global'



const TopFooterIndex: React.FC<top1rightmap> = ({ image, p1, p2 }) => {
    return (
        <>
            <div className="flex sm:flex sm:items-center sm:justify-center  lg:flex lg:items-center lg:justify-center md:flex md:items-center md:justify-center">
                <div>
                    <ImgComponent
                        image={image}
                        alt="earth-logo"
                    />
                </div>
                <div className="ml-2 text-customRed text-5xl font-extrabold sm:text-sm md:text-base">{p1}</div>
            </div>
            <p className="flex text-base font-normal ml-4 mt-4 sm:text-xs sm:mb-2 md:text-xs md:mb-2 xl:mb-4">
                {p2}
            </p>
        </>
    )
}

export default TopFooterIndex


