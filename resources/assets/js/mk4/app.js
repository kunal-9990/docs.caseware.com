import ReactHabitat from 'react-habitat'

import Banner from './components/Banner'
import HomeBanner from './components/HomeBanner'
import Announcement from './components/Announcement'
import Feature from './components/Feature'
import Survey from './components/Survey'
import SocialShare from './components/SocialShare'
import QuickLinks from './components/QuickLinks'
import EmbeddedVideo from './components/EmbeddedVideo'
import Carousel from './components/Carousel'
import VideoGallery from './components/VideoGallery'
import Downloads from './components/Downloads'

import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'


const containers = [
  {
    id: 'banner',
    component: Banner
  },
  {
    id: 'home-banner',
    component: HomeBanner
  },
  {
    id: 'announcement',
    component: Announcement
  },
  {
    id: 'feature',
    component: Feature
  },
  {
    id: 'survey',
    component: Survey
  },
  {
    id: 'social-share',
    component: SocialShare
  },
  {
    id: 'quick-links',
    component: QuickLinks
  },
  {
    id: 'embedded-video',
    component: EmbeddedVideo
  },
  {
    id: 'carousel',
    component: Carousel
  },
  {
    id: 'video-gallery',
    component: VideoGallery
  },
  {
    id: 'downloads',
    component: Downloads
  }
];

class Mk4 extends ReactHabitat.Bootstrapper {
    constructor() {
        super();

        const builder = new ReactHabitat.ContainerBuilder();
        for (let container of containers) {
            builder.register(container.component).as(container.id);
        }
        this.setContainer(builder.build());
    }
}

export default new Mk4();