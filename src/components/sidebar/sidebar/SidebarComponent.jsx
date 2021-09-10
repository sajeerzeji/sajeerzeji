import './SidebarComponent.scss';
import React from 'react';
import socialIconTwitter from '../../../assets/images/icons/social/twitter-icon.svg';
import socialIconLinkedIn from '../../../assets/images/icons/social/linkedin-icon.svg';
import socialIconGithub from '../../../assets/images/icons/social/github-icon.svg';
import socialIconDiscord from '../../../assets/images/icons/social/discord-icon.svg';
import socialIconMedium from '../../../assets/images/icons/social/medium-icon.svg';
import socialIconDevFolio from '../../../assets/images/icons/social/devfolio-icon.svg';
import socialIconBuyMeACoffee from '../../../assets/images/icons/social/buymeacoffee-icon.svg';
import socialIconTelegram from '../../../assets/images/icons/social/telegram-icon.svg';
import socialIconMeetup from '../../../assets/images/icons/social/meetup-icon.svg';
import socialIconInstagram from '../../../assets/images/icons/social/instagram-icon.svg';
import socialIconFacebook from '../../../assets/images/icons/social/facebook-icon.svg';

const sidebarReference = React.createRef();

export default function SidebarComponent() {
    const sidebarItems = fetchSidebarItems();
    return(
        <div className={"app-sidebar app-sidebar-closed"}  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={sidebarReference}>
            <div className={"app-sidebar-content"}>
                {
                    sidebarItems.map(
                        item => (
                            <a href={item.url} target={"_blank"} className={"app-sidebar-content-item text-decoration-none " + item.additionalClass}>
                                <div className={"app-sidebar-content-item-icon"}>
                                    <img src={item.src} alt={item.name}/>
                                </div>

                                <div className={"app-sidebar-content-item-caption"}>
                                    <span className={"app-sidebar-content-item-caption-text"}>{item.name}</span>
                                </div>
                            </a>
                        )
                    )
                }
            </div>
        </div>
    )
}

function fetchSidebarItems() {
    return [
        {
            name: 'Twitter',
            src: socialIconTwitter,
            url: 'https://twitter.com/sajeer_zeji',
            additionalClass: 'app-sidebar-content-item-twitter'
        }, {
            name: 'LinkedIn',
            src: socialIconLinkedIn,
            url: 'https://www.linkedin.com/in/sajeerzeji/',
            additionalClass: 'app-sidebar-content-item-linkedin'
        }, {
            name: 'Github',
            src: socialIconGithub,
            url: 'https://github.com/sajeerzeji',
            additionalClass: 'app-sidebar-content-item-github'
        }, {
            name: 'Discord',
            src: socialIconDiscord,
            url: 'https://discord.com/channels/885959689731465271/885959689731465274',
            additionalClass: 'app-sidebar-content-item-discord'
        }, {
            name: 'Medium',
            src: socialIconMedium,
            url: 'https://medium.com/@sajeerzeji44',
            additionalClass: 'app-sidebar-content-item-medium'
        }, {
            name: 'Devfolio',
            src: socialIconDevFolio,
            url: 'https://devfolio.co/@Sajeer',
            additionalClass: 'app-sidebar-content-item-dev-folio'
        }, {
            name: 'Coffee',
            src: socialIconBuyMeACoffee,
            url: 'https://www.buymeacoffee.com/0AgzLvl',
            additionalClass: 'app-sidebar-content-item-buy-me-a-coffee'
        }, {
            name: 'Telegram',
            src: socialIconTelegram,
            url: 'https://t.me/sajeerzeji',
            additionalClass: 'app-sidebar-content-item-telegram'
        }, {
            name: 'Meetup',
            src: socialIconMeetup,
            url: 'https://www.meetup.com/members/266344199/',
            additionalClass: 'app-sidebar-content-item-meetup'
        }, {
            name: 'Instagram',
            src: socialIconInstagram,
            url: 'https://www.instagram.com/sajeerzeji/',
            additionalClass: 'app-sidebar-content-item-instagram'
        }, {
            name: 'Facebook',
            src: socialIconFacebook,
            url: 'https://www.facebook.com/zeji44',
            additionalClass: 'app-sidebar-content-item-facebook'
        }
    ];
}

function onMouseEnter() {
    sidebarReference.current.className = 'app-sidebar app-sidebar-opened';
}

function onMouseLeave() {
    sidebarReference.current.className = 'app-sidebar app-sidebar-closed';
}
