import './BaseLayout.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import SideBarComponent from "../../components/side-bar/side-bar/SideBarComponent";
import TopBarComponent from "../../components/top-bar/top-bar/TopBarComponent";
import StoryBoardComponent from "../../components/dash-boards/story-board/StoryBoardComponent";
import {ThemeUtils} from "../../utils/theme/ThemeUtils";

export default function BaseLayoutComponent() {
    document.documentElement.className = ThemeUtils.THEME_NAME_DARK;
    return(
        <div className={"col-12 m-0"}>
            <SideBarComponent></SideBarComponent>
            <TopBarComponent></TopBarComponent>

            <div className={"base-layout-content-container card"}>
                <div className={"card-body"}>
                    <StoryBoardComponent></StoryBoardComponent>
                </div>
            </div>
        </div>
    )
}
