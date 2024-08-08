



import { TopRightImage, trustedimage } from "../constant/global"
import TopRight from "./TopRight"


const TopRightMap = () => {
    return (
        <div className="flex justify-end bg-customBlue h-72 w-680 sm:w-[250px] md:w-[300px] sm:flex sm:justify-center sn:items-center">
            <div className="flex items-center">
                <div className="flex gap-4 ">
                    {
                        TopRightImage.map((toprightimage: trustedimage) => (
                            <TopRight
                            key={toprightimage.id}
                                image={toprightimage.image}
                                alt={toprightimage.alt}
                            />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default TopRightMap