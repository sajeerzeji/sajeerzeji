import './GithubProfileComponent.scss';
import {useEffect} from "react";
import {Scrollbars} from "react-custom-scrollbars";
import GitHubCalendar from 'react-github-calendar';


export default function GithubProfileComponent() {
    /*useEffect(() => {
        const anchor = document.createElement("div");
        anchor.setAttribute("class", "github-card");
        anchor.setAttribute("data-github", "sajeerzeji");
        anchor.setAttribute("data-width", "400");
        anchor.setAttribute("data-height", "400");
        anchor.setAttribute("data-theme", "medium");
        document.getElementsByClassName("github-embed")[0].appendChild(anchor);

        const script = document.createElement("script");
        script.setAttribute("src", "https://cdn.jsdelivr.net/gh/lepture/github-cards@latest/jsdelivr/widget.js");
        document.getElementsByClassName("github-embed")[0].appendChild(script);
    }, []);*/

    return(
        <div className={"card"}>
            <div className={"card-header"}>
                Github Contributions
            </div>
            <div className={"card-body"}>
                <GitHubCalendar username="sajeerzeji" />
            </div>
        </div>
    );
}
