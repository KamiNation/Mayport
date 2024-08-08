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
    navName: string
    link?: string
}

export interface trustedimage {
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
    image?: string
    p1?: string
    p2?: string
    p3?: string
}


export interface footer {
    parent: string
    child: string
    child1: string
    child2: string
    child3: string
}



export const navBar: navbar[] = [
    {
        navName: "HOME",
        link: "#",
    },
    {
        navName: "ABOUT AITEO",
        link: "#",
    },
    {
        navName: "WHAT WE DO",
        link: "#",
    },
    {
        navName: "SOCIAL RESPONSIBILITY",
        // link: ,
    },
    {
        navName: "CAREERS",
        // link: ,
    },
    {
        navName: "NEWS",
        // link: ,
    },
    {
        navName: "CONTACT",
        // link: ,
    }
]


export const TrustedImage: trustedimage[] = [
    {
        image: shell
    },
    {
        image: oando
    },
    {
        image: chevron
    },
    {
        image: mtn
    },
    {
        image: dangote
    },
]

export const TopRightImage: trustedimage[] = [
    {
        image: fb,
        alt: "company-facebook-link",
        // link: 
    },
    {
        image: x,
        alt: "company-x-link",
        link: "http://x.com/Mayport_oil_gas"
    },
    {
        image: linkedin,
        alt: "company-linkedIn-link",
        link: "http://linkedIn.com/@mayport_oil_gas"
    },
]


export const TopRightMap: top1rightmap[] = [
    {
        image: location,
        p1: "Locate Us",
        p2: "Lorem ipsum dolor sit amet consectetur",
    },
    {

        image: phone,
        p1: "Contact Us",
        p2: "09168634073, 09168634074, 09168634078, 09168634071"
    },
]


export const ExperinceRightMap: top1rightmap[] = [
    {

        image: vector,
        p1: "VISION",
        p2: "To be the top-tier energy services company in Africa creating exceptional value to our customers and shareholders."
    },
    {

        image: vector,
        p1: "MISSION",
        p2: "To provide reliable, innovative, and cost-effective energy solutions leveraging our team to build processes, and technology and sustain industry best practices."
    },
]


export const WhatMapContent: top1rightmap[] = [
    {

        image: arab,
        p1: "De-risking",
        p2: "involves identifying and mitigating potential project risks through advanced risk assessment techniques and strategic planning. ",
        p3: "See More"
    },
    {

        image: arab1,
        p1: "Due Diligence",
        p2: "LMayport teams regularly act as independent consultants, engineers, and technical advisors to lenders, owners, and investors.",
        p3: "See More"
    },
    {

        image: arab2,
        p1: "Relinquishment and Revocation",
        p2: "We ensure compliance with legal and regulatory requirements while managing asset transfer processes.",
        p3: "See More"
    },
    {

        image: arab3,
        p1: "Petroleum Products Trading & Distribution",
        p2: "Mayport Oil and Gas Company Limited offers petroleum products trading and distribution services by leveraging a robust network and market expertise",
        p3: "See More"
    },
    {

        image: arab4,
        p1: "Operation & Maintenance (O&M)",
        p2: "Mayport offers O&M support either as a standalone service or as a component of its Technical & Financial Services package",
        p3: "See More"
    },
    {

        image: arab5,
        p1: "Marine Services",
        p2: "Mayport Oil and Gas Company Limited provides marine services, including vessel chartering, brokerage, and ancillary services, to support the oil and gas industry.",
        p3: "See More"
    },
]


export const AchieveLeftContent: top1rightmap[] = [
    {

        image: world,
        p1: "40",
        p2: "Offices WorldWide",
    },
    {

        image: settings,
        p1: "12",
        p2: "Refineries & Operations",
    },
    {

        image: achieve,
        p1: "7000",
        p2: "Satisfied Employees",
    },
    {

        image: cert,
        p1: "128",
        p2: "Awards & Recognition",
    },
]

export const AchieveR1Content: top1rightmap[] = [
    {

        image: crane,
        p1: "Featured Project",
        p2: "Lorem ipsum dolor sit amet consectetur. Ipsum id justo duis in nibh adipiscing vitae integer nunc amet consectetur. Ipsum",
        p3: "View All"
    },
    {

        image: crane,
        p1: "Featured Project",
        p2: "Awards Lorem ipsum dolor sit amet consectetur. Ipsum id justo duis in nibh adipiscing vitae integer nunc amet consectetur. Ipsum",
        p3: "View All"
    },
]

export const AchieveR2Content: top1rightmap[] = [
    {
        image: arab,
        p1: "Lorem Project",
        p2: "View"
    },
    {
        image: arabmw,
    },
    {
        image: boat,
        p1: "Lorem Project",
        p2: "View"
    },
    {
        image: arabtool
    }
]

export const CardContent: top1rightmap[] = [
    {

        image: arab4,
        p1: "Lorem Ipsum",
        p2: "Lorem ipsum dolor sit amet consectetur. Ipsum id just",
    },
    {

        image: arab4,
        p1: "Lorem Ipsum",
        p2: "Lorem ipsum dolor sit amet consectetur. Ipsum id just",
    },
    {

        image: arab4,
        p1: "Lorem Ipsum",
        p2: "Lorem ipsum dolor sit amet consectetur. Ipsum id just",
    },
]

export const TopFooterContent: top1rightmap[] = [
    {
        image: earth,
        p1: "MayPort",
        p2: "POWERING PROGRESS. ENERGIZING YOUR WORLD"
    }
]

export const MiddleFooterContent: footer[] = [
    {
        parent: "Our Services",
        child: "Marine Services",
        child1: "Asset Management",
        child2: "Consulting & Training",
        child3: "Operation & Maintenance ",
    },
    {
        parent: "Our Services",
        child: "Technical & Financial Services",
        child1: "Renewable/Sustainable Energy",
        child2: "Exploration & Production/ Gas Services",
        child3: "Engineering, Project Management & Construction",
    },
    {
        parent: "Our Services",
        child: "Procurement, Supply & Logistics",
        child1: "Information, Communication and Technology Services",
        child2: "Manpower Supply Services & Management(Secondment)",
        child3: "Petroleum & Petroleum Products Trading, Supply & Distribution",
    }

]
