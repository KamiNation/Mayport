import shell from "../../assets/Frame21.png"
import oando from "../../assets/Frame22.png"
import chevron from "../../assets/Frame23.png"
import mtn from "../../assets/Frame24.png"
import dangote from "../../assets/Frame25.png"
import location from "../../assets/location-06.png"
import phone from "../../assets/call-02.png"
import fb from "../../assets/facebook-02.png"
import x from "../../assets/new-twitter.png"
import linkedin from "../../assets/linkedin-02.png"
import vector from "../../assets/Vector.png"
import arab from "../../assets/Frame37.png"
import arab1 from "../../assets/Frame37(1).png"
import arab2 from "../../assets/Frame37(2).png"
import arab3 from "../../assets/Frame37(3).png"
import arab4 from "../../assets/Frame37(4).png"
import arab5 from "../../assets/Frame37(5).png"
import world from "../../assets/Group.png"
import settings from "../../assets/Frame.png"
import achieve from "../../assets/Frame(1).png"
import cert from "../../assets/Frame(2).png"
import crane from "../../assets/crane.jpeg"
import arabmw from "../../assets/Frame56.png"
import boat from "../../assets/Frame27.png"
import arabtool from "../../assets/Frame58.png"
import earth from "../../assets/earth.png"


export interface navbar {
    id?: number
    navName: string
    link?: string
}

export interface trustedimage {
    id?: number
    image?: string
    alt?: string
    link?: string
}


export interface imgcomponent {
    image?: string
    alt?: string
    classname?: string
    imgClass?: string
}

export interface top1rightmap {
    id?: number
    image?: string
    p1?: string
    p2?: string
    p3?: string
}


export interface footer {
    id?: number
    parent: string
    child: string
    child1: string
    child2: string
    child3: string
}



export const navBar: navbar[] = [
    {
        id: 0,
        navName: "HOME",
        link: "#",
    },
    {
        id: 1,
        navName: "ABOUT AITEO",
        link: "#",
    },
    {
        id: 2,
        navName: "WHAT WE DO",
        link: "#",
    },
    {
        id: 3,
        navName: "SOCIAL RESPONSIBILITY",
        // link: ,
    },
    {
        id: 4,
        navName: "CAREERS",
        // link: ,
    },
    {
        id: 5,
        navName: "NEWS",
        // link: ,
    },
    {
        id: 6,
        navName: "CONTACT",
        // link: ,
    }
]


export const TrustedImage: trustedimage[] = [
    {
        id: 0,
        image: shell
    },
    {
        id: 1,
        image: oando
    },
    {
        id: 2,
        image: chevron
    },
    {
        id: 3,
        image: mtn
    },
    {
        id: 4,
        image: dangote
    },
]

export const TopRightImage: trustedimage[] = [
    {
        id: 0,
        image: fb,
        alt: "company-facebook-link",
        // link: 
    },
    {
        id: 1,
        image: x,
        alt: "company-x-link",
        link: "http://x.com/Mayport_oil_gas"
    },
    {
        id: 2,
        image: linkedin,
        alt: "company-linkedIn-link",
        link: "http://linkedIn.com/@mayport_oil_gas"
    },
]


export const TopRightMap: top1rightmap[] = [
    {
        id: 0,
        image: location,
        p1: "Locate Us",
        p2: "Lorem ipsum dolor sit amet consectetur",
    },
    {
        id: 1,
        image: phone,
        p1: "Contact Us",
        p2: "09168634073, 09168634074, 09168634078, 09168634071"
    },
]


export const ExperinceRightMap: top1rightmap[] = [
    {
        id: 0,
        image: vector,
        p1: "VISION",
        p2: "To be the top-tier energy services company in Africa creating exceptional value to our customers and shareholders."
    },
    {
        id: 1,
        image: vector,
        p1: "MISSION",
        p2: "To provide reliable, innovative, and cost-effective energy solutions leveraging our team to build processes, and technology and sustain industry best practices."
    },
]


export const WhatMapContent: top1rightmap[] = [
    {
        id: 0,
        image: arab,
        p1: "De-risking",
        p2: "involves identifying and mitigating potential project risks through advanced risk assessment techniques and strategic planning. ",
        p3: "See More"
    },
    {
        id: 1,
        image: arab1,
        p1: "Due Diligence",
        p2: "LMayport teams regularly act as independent consultants, engineers, and technical advisors to lenders, owners, and investors.",
        p3: "See More"
    },
    {
        id: 2,
        image: arab2,
        p1: "Relinquishment and Revocation",
        p2: "We ensure compliance with legal and regulatory requirements while managing asset transfer processes.",
        p3: "See More"
    },
    {
        id: 3,
        image: arab3,
        p1: "Petroleum Products Trading & Distribution",
        p2: "Mayport Oil and Gas Company Limited offers petroleum products trading and distribution services by leveraging a robust network and market expertise",
        p3: "See More"
    },
    {
        id: 4,
        image: arab4,
        p1: "Operation & Maintenance (O&M)",
        p2: "Mayport offers O&M support either as a standalone service or as a component of its Technical & Financial Services package",
        p3: "See More"
    },
    {
        id: 5,
        image: arab5,
        p1: "Marine Services",
        p2: "Mayport Oil and Gas Company Limited provides marine services, including vessel chartering, brokerage, and ancillary services, to support the oil and gas industry.",
        p3: "See More"
    },
]


export const AchieveLeftContent: top1rightmap[] = [
    {
        id: 0,
        image: world,
        p1: "40",
        p2: "Offices WorldWide",
    },
    {
        id: 1,
        image: settings,
        p1: "12",
        p2: "Refineries & Operations",
    },
    {
        id: 2,
        image: achieve,
        p1: "7000",
        p2: "Satisfied Employees",
    },
    {
        id: 3,
        image: cert,
        p1: "128",
        p2: "Awards & Recognition",
    },
]

export const AchieveR1Content: top1rightmap[] = [
    {
        id: 0,
        image: crane,
        p1: "Featured Project",
        p2: "Lorem ipsum dolor sit amet consectetur. Ipsum id justo duis in nibh adipiscing vitae integer nunc amet consectetur. Ipsum",
        p3: "View All"
    },
    {
        id: 1,
        image: crane,
        p1: "Featured Project",
        p2: "Awards Lorem ipsum dolor sit amet consectetur. Ipsum id justo duis in nibh adipiscing vitae integer nunc amet consectetur. Ipsum",
        p3: "View All"
    },
]

export const AchieveR2Content: top1rightmap[] = [
    {
        id: 0,
        image: arab,
        p1: "Lorem Project",
        p2: "View"
    },
    {
        id: 1,
        image: arabmw,
    },
    {
        id: 2,
        image: boat,
        p1: "Lorem Project",
        p2: "View"
    },
    {
        id: 3,
        image: arabtool
    }
]

export const CardContent: top1rightmap[] = [
    {
        id: 0,
        image: arab4,
        p1: "Lorem Ipsum",
        p2: "Lorem ipsum dolor sit amet consectetur. Ipsum id just",
    },
    {
        id: 1,
        image: arab4,
        p1: "Lorem Ipsum",
        p2: "Lorem ipsum dolor sit amet consectetur. Ipsum id just",
    },
    {
        id: 2,
        image: arab4,
        p1: "Lorem Ipsum",
        p2: "Lorem ipsum dolor sit amet consectetur. Ipsum id just",
    },
]

export const TopFooterContent: top1rightmap[] = [
    {
        id: 0,
        image: earth,
        p1: "MayPort",
        p2: "POWERING PROGRESS. ENERGIZING YOUR WORLD"
    }
]

export const MiddleFooterContent: footer[] = [
    {
        id: 0,
        parent: "Our Services",
        child: "Marine Services",
        child1: "Asset Management",
        child2: "Consulting & Training",
        child3: "Operation & Maintenance ",
    },
    {
        id: 1,
        parent: "Our Services",
        child: "Technical & Financial Services",
        child1: "Renewable/Sustainable Energy",
        child2: "Exploration & Production/ Gas Services",
        child3: "Engineering, Project Management & Construction",
    },
    {
        id: 2,
        parent: "Our Services",
        child: "Procurement, Supply & Logistics",
        child1: "Information, Communication and Technology Services",
        child2: "Manpower Supply Services & Management(Secondment)",
        child3: "Petroleum & Petroleum Products Trading, Supply & Distribution",
    }

]
