

import TopLeft from "./TopLeft"
import TopRightMap from "./TopRightMap"

const IndexTop = () => {
    return (
        <div className="flex justify-between sm:flex sm:flex-col md:flex ">
            <TopLeft />
            <TopRightMap />
        </div>
    )
}

export default IndexTop