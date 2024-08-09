

import TopLeft from "./TopLeft"
import TopRightMap from "./TopRightMap"

const IndexTop = () => {
    return (
        <section id="top" className="justify-between flex-1  sm:flex sm:flex-col md:flex md:flex-col ">
            <TopLeft />
            <TopRightMap />
        </section>
    )
}

export default IndexTop