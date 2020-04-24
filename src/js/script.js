// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// UIkit.use(Icons);

import { Variable } from "./libs/Variable"; 
const vars = new Variable();

document.addEventListener('DOMContentLoaded',()=>{
  vars.logo.classList.add('logo-class');
})