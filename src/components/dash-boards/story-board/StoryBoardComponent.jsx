import './StoryBoardComponent.scss';
import {ThemeUtils} from "../../../utils/theme/ThemeUtils";
import {Scrollbars} from "react-custom-scrollbars";
import TwitterFeedComponent from "../../feed/social/twitter-feed/TwitterFeedComponent";
import MediumFeedComponent from "../../feed/social/medium-feed/MeediumFeedComponent";

export default function StoryBoardComponent() {
    return(
        <Scrollbars class={"w-100 h-100"}>
            <div className={"row"}>
                <div className={"card col-md-6 col-lg-3"}>
                    <TwitterFeedComponent></TwitterFeedComponent>
                </div>
                <div className={"card col-md-6 col-md-9"}>
                    <MediumFeedComponent></MediumFeedComponent>
                </div>
            </div>
        </Scrollbars>
    )
}
