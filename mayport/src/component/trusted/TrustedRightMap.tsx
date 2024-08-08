

import { trustedimage, TrustedImage } from "../constant/global"

import TrustedRight from "./TrustedRight"


const TrustedRightMap = () => {
    return (
        <div className="flex justify-center items-center lg:flex sm:flex md:flex sm:flex-wrap md:flex-wrap lg:flex-wrap sm:items-center md:items-center lg:items-center sm:justify-center  md:justify-center lg:justify-center md:gap-x-4 md:gap-y-4 lg:gap-y-4 lg:gap-x-4
        lg:p-0
        md:p-0
        sm:p-0">
            <ul className="flex lg:flex-wrap md:flex-wrap sm:flex-wrap lg:items-center md:items-center sm:items-center  lg:justify-center md:justify-center  sm:justify-center">
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