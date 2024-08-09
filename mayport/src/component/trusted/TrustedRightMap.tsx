

import { trustedimage, TrustedImage } from "../constant/global"

import TrustedRight from "./TrustedRight"


const TrustedRightMap = () => {
    return (
        <div className="flex flex-1 justify-center items-center lg:flex sm:flex md:flex xl:flex sm:flex-wrap md:flex-wrap xl:flex-wrap lg:flex-wrap sm:items-center md:items-center lg:items-center xl:items-center sm:justify-center  md:justify-center lg:justify-center xl:justify-center xl:gap-x-4 xl:gap-y-4 md:gap-x-4 md:gap-y-4 lg:gap-y-4 lg:gap-x-4 xl:mt-6
        lg:p-0
        md:p-0
        sm:p-0">
            <ul className="flex flex-1 lg:flex-wrap md:flex-wrap sm:flex-wrap xl:flex-wrap xl:items-center lg:items-center md:items-center sm:items-center  lg:justify-center md:justify-center xl:justify-center sm:justify-center">
                {
                    TrustedImage.map((trusteditem: trustedimage) => (
                        <TrustedRight
                        key={trusteditem.id}
                            image={trusteditem.image}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TrustedRightMap