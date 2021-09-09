import './BaseLayout.scss';
import SidebarComponent from "../../components/sidebar/sidebar/SidebarComponent";

export default function BaseLayoutComponent() {
    return(
        <div className={"col-12 m-0"}>
            <SidebarComponent></SidebarComponent>
        </div>
    )
}
