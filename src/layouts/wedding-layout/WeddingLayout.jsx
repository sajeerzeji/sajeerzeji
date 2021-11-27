import './WeddingLayout.scss';
import {ThemeUtils} from "../../utils/theme/ThemeUtils";
import WeddingGalleryComponent from "../../components/wedding/gallery/WeddingGalleryComponent";
import WeddingInvitationComponent from "../../components/wedding/invitation/WeddingInvitationComponent";

export default function WeddingLayoutComponent() {
    document.documentElement.className = ThemeUtils.THEME_NAME_LIGHT;
    return(
        <div className={"wedding-container"}>
            <WeddingInvitationComponent></WeddingInvitationComponent>
            <WeddingGalleryComponent></WeddingGalleryComponent>
        </div>
    );
}
