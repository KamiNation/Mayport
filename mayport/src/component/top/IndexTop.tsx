

import TopLeft from "./TopLeft"
import TopRightMap from "./TopRightMap"

const IndexTop = () => {
    return (
        <section className="flex justify-between sm:flex sm:flex-col md:flex ">
            <TopLeft />
            <TopRightMap />
        </section>
    )
}

export default IndexTop