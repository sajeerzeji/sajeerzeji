import './WeddingGalleryComponent.scss';
import wdImg1 from "../../../assets/images/wedding/wd-1.jpg";
import wdImg2 from "../../../assets/images/wedding/wd-2.jpg";
import wdImg3 from "../../../assets/images/wedding/wd-3.jpg";
import wdImg4 from "../../../assets/images/wedding/wd-4.jpg";
import wdImg5 from "../../../assets/images/wedding/wd-5.jpg";
import wdImg6 from "../../../assets/images/wedding/wd-6.jpg";
import wdImg7 from "../../../assets/images/wedding/wd-7.jpg";
import wdImg8 from "../../../assets/images/wedding/wd-8.jpg";
import wdImg9 from "../../../assets/images/wedding/wd-9.jpg";
import wdImg10 from "../../../assets/images/wedding/wd-10.jpg";
import wdImg11 from "../../../assets/images/wedding/wd-11.jpg";
import wdImg12 from "../../../assets/images/wedding/wd-12.jpg";
import wdImg13 from "../../../assets/images/wedding/wd-13.jpg";
import wdImg14 from "../../../assets/images/wedding/wd-14.jpg";

export default function WeddingGalleryComponent() {
    return(
        <div className={"gallery-container"}>
            <div className={"gallery-child-container"}>
                <img src={wdImg1} alt={"pic 1"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg2} alt={"pic 2"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg3} alt={"pic 3"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg9} alt={"pic 4"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg5} alt={"pic 5"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg6} alt={"pic 6"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg4} alt={"pic 7"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg8} alt={"pic 8"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg9} alt={"pic 9"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg10} alt={"pic 10"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg11} alt={"pic 11"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg12} alt={"pic 12"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg13} alt={"pic 13"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg14} alt={"pic 13"} />
            </div>
            <div className={"gallery-child-container"}>
                <img src={wdImg7} alt={"pic 13"} />
            </div>
        </div>
    )
}
