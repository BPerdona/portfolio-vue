import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faWind, faLeaf, faDownload, faBatteryEmpty } from '@fortawesome/free-solid-svg-icons'

import { faJava, faJs, faPython, faVuejs, faReact, faAngular, faAndroid  } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faJava, faJs, faPython, faVuejs, faReact, faAngular, faWind, faAndroid, faLeaf, faDownload, faBatteryEmpty)

const app = createApp(App)

app.use(router)

app.mount('#app')

app.component('font-awesome-icon', FontAwesomeIcon)
