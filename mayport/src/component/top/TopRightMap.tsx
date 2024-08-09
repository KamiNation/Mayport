



import { TopRightImage, trustedimage } from "../constant/global"
import TopRight from "./TopRight"


const TopRightMap = () => {
    return (
        <div className="flex  justify-end bg-customBlue h-72 p-4 w-full
        sm:flex sm:justify-center sm:items-center
        md:justify-center md:items-center lg:items-center lg:justify-center xl:justify-center xl:items-center
        "
            style={{ clipPath: 'polygon(0 1%, 100% 0%, 100% 100%, 59% 100%, 31% 55%)' }}

        >
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