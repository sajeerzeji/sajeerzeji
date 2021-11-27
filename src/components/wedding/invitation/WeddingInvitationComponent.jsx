import './WeddingInvitationComponent.scss';
import heart from '../../../assets/images/icons/other/heart-shaped.png';
import queryString from 'query-string';
import {useLocation} from "react-router-dom";

export default function WeddingInvitationComponent() {
    const location = useLocation();
    const params = queryString.parse(location.search);
    let name = params.name;
    name = name?.length ? name : null;
    const presence = params.presence;
    document.title = 'Sajeer weds Anshifa';
    document.getElementById('favicon').href = heart;
    return(
        <div className={"invitation-container d-flex align-items-center"}>
            <div className={"invitation-content mx-auto text-center"}>
                <div className={"invitation-content-heading mb-2"}>
                    <span>{ presence !== 'bride' ? 'Sajeer ' : 'Anshifa '}</span>
                    <span>
                        <img src={heart} />
                    </span>
                    <span>{presence !== 'bride' ? ' Anshifa' : ' Sajeer'}</span>
                </div>
                <div className={"invitation-content-sub-heading mb-5"}>
                    <div className={"invitation-content-sub-heading-description"}>Please Cross your Calendar for</div>
                    DEC <span className={"text-danger"}>12</span> 2021
                </div>

                <div className={"invitation-content-description col-md-6 mx-auto px-1 mb-5"}>
                    <span>Hey {(name === 'retailcloud' ? 'fellow retailcloudians' : name) ?? 'there'} </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                         className="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    <span>, We invite you to share in our</span>
                    <span className={"text-danger"}> joy </span>
                    <span>and request your</span>
                    <span className={"text-danger"}> presence </span>
                    <span> at the</span>
                    <span className={"text-danger"}> wedding </span>
                </div>

                <div>
                    { presence !== 'bride' ?
                        (<iframe
                            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0646279522803!2d75.9518364653347!3d10.882689142249545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b10251d4ebd7%3A0x160d399354f0ac23!2sVellariyil%20Auditorium%2C%20Koloopalam%20Mukkilapeedika%20Rd%2C%20MH%20Nagar%2C%20Thekkan%20Kuttoor%2C%20Vengaloor%2C%20Kerala%20676102!5e0!3m2!1sen!2sin!4v1638016912457!5m2!1sen!2sin"}
                            width={"400"} height={"300"} style={{border: 0}} allowFullScreen={""} loading={"lazy"}></iframe>) :
                        (<iframe
                            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2067143705685!2d75.93114081533457!3d10.871876392256816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b04e3f342edd%3A0x977bde071101b1d1!2sKairali%20Auditorium!5e0!3m2!1sen!2sin!4v1638021368444!5m2!1sen!2sin"}
                            width={"400"} height={"300"} style={{border: 0}} allowFullScreen={""} loading={"lazy"}></iframe>)
                    }
                </div>
            </div>
        </div>
    )
}
