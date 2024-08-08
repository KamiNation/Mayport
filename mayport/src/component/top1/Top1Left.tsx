

import earth from "../../assets/earth.png"
import ImgComponent from "../customcomponent/ImgComponent"

const Top1Left = () => {
    return (
        <div className="flex items-center ml-9 flex-col sm:ml-0 sm:flex sm:justify-center sm:items-center">
            <div className="flex justify-center items-center mb-2 ">
                <div>
                    <ImgComponent
                        image={earth}
                        alt="earth-logo"
                    />
                </div>
                <div className="ml-2 text-customRed text-5xl font-extrabold sm:text-2xl sm:font-semibold">MayPort</div>
            </div>
            <p className="text-base font-normal ml-4 sm:text-[10px] sm:flex sm:ml-0">
                POWERING PROGRESS. ENERGIZING YOUR WORLD.
            </p>
        </div>
    )
}

export default Top1Left