



import { TopRightImage, trustedimage } from "../constant/global"
import TopRight from "./TopRight"


const TopRightMap = () => {
    return (
        <div className="flex flex-1 justify-end bg-customBlue h-72 p-4 sm:flex sm:justify-center sm:items-center
        md:justify-center md:items-center lg:items-center lg:justify-center xl:justify-center xl:items-center
        ">
            <div className="flex  items-center">
                <div className="flex  gap-4 ">
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