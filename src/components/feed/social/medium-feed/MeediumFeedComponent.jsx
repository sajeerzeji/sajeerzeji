import './MeediumFeedComponent.scss';
import {useEffect} from "react";
import {Scrollbars} from "react-custom-scrollbars";

export default function MediumFeedComponent() {
    useEffect(() => {
        const anchor = document.createElement("div");
        anchor.setAttribute("id", "retainable-rss-embed");
        anchor.setAttribute("data-rss", "https://medium.com/feed/@sajeerzeji44");
        anchor.setAttribute("data-maxcols", "");
        anchor.setAttribute("data-layout", "grid");
        anchor.setAttribute("data-poststyle", "inline");
        anchor.setAttribute("data-readmore", "Read the rest");
        anchor.setAttribute("data-buttonclass", "btn btn-primary");
        anchor.setAttribute("data-offset", "-100");
        document.getElementsByClassName("medium-embed")[0].appendChild(anchor);

        const script = document.createElement("script");
        script.setAttribute("src", "https://www.twilik.com/assets/retainable/rss-embed/retainable-rss-embed.js");
        document.getElementsByClassName("medium-embed")[0].appendChild(script);
    }, []);

    return(
        <div className={"medium-feed-card"}>
            <Scrollbars class={"w-100 h-100"}>
                <section className="mediumContainer">
                    <div className="medium-embed"></div>
                </section>
            </Scrollbars>
        </div>
    );
}
