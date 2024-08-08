

import { trustedimage, TrustedImage } from "../constant/global"

import TrustedRight from "./TrustedRight"


const TrustedRightMap = () => {
    return (
        <div className="flex justify-center items-center  sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:p-0">
            <ul className="flex sm:flex-wrap sm:items-center sm:justify-center">
                {
                    TrustedImage.map((trusteditem: trustedimage) => (
                        <TrustedRight
                            image={trusteditem.image}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default TrustedRightMap