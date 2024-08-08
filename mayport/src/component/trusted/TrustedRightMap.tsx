

import { trustedimage, TrustedImage } from "../constant/global"

import TrustedRight from "./TrustedRight"


const TrustedRightMap = () => {
    return (
        <div className="flex justify-center items-center  sm:flex md:flex sm:flex-wrap md:flex-wrap sm:items-center md:items-center sm:justify-center  md:justify-center md:gap-x-4 md:gap-y-4
        md:p-0
        sm:p-0">
            <ul className="flex md:flex-wrap sm:flex-wrap md:items-center sm:items-center md:justify-center  sm:justify-center">
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