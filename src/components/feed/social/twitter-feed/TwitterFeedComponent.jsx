import './TwitterFeedComponent.scss';
import {useEffect} from "react";
import {Scrollbars} from "react-custom-scrollbars";

export default function TwitterFeedComponent() {
    useEffect(() => {
        const anchor = document.createElement("a");
        anchor.setAttribute("class", "twitter-timeline");
        anchor.setAttribute("data-theme", "dark");
        anchor.setAttribute("data-tweet-limit", "100");
        // anchor.setAttribute("data-width", "400");
        // anchor.setAttribute("data-height", "800");
        anchor.setAttribute("data-chrome", "noheader nofooter noborders");
        anchor.setAttribute("href", "https://twitter.com/sajeer_zeji");
        document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

        const script = document.createElement("script");
        script.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);

    return(
        <div className={"twitter-feed-card"}>
            <Scrollbars class={"w-100 h-100"}>
                <section className="twitterContainer">
                    <div className="twitter-embed"></div>
                </section>
            </Scrollbars>
        </div>
    );
}
