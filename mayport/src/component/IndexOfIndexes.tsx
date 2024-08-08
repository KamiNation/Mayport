
import IndexNav from "./nav/IndexNav"
import IndexTop from "./top/IndexTop"
import IndexTop1 from "./top1/IndexTop1"
import IndexOfHome from "./home/IndexHome"
import IndexTrusted from "./trusted/IndexTrusted"
import IndexExperience from "./Experience/IndexExperience"
import IndexWhat from "./whatwedo/IndexWhat"
import IndexAchieve from "./achievement/IndexAchieve"
import IndexCard from "./card/IndexCard"
import IndexContact from "./contact/IndexContact"
import IndexFooter from "./footer/IndexFooter"

const IndexOfIndexes = () => {
    return (
        <section>
            <IndexTop />
            <IndexTop1 />
            <IndexNav />
            <IndexOfHome />
            <IndexTrusted />
            <IndexExperience />
            <IndexWhat />
            <IndexAchieve />
            <IndexCard />
            <IndexContact />
            <IndexFooter />
        </section>
    )
}

export default IndexOfIndexes