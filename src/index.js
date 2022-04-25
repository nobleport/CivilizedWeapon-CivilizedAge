import Welcome from "./pages/welcome-page";
import Workbench from "./pages/workbench-page";
import ExtraInfo from "./pages/extra-info"

window.addEventListener('DOMContentLoaded', () => {
    console.log('Dom Fully loaded and parsed');
    // let element = document.getElementById('welcome');
    new Workbench();
})



