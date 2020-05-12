import ReactHabitat from 'react-habitat'

import WNBanner from './components/whats-new/WNBanner'
import Feature from './components/whats-new/Feature'
import EmbeddedVideo from './components/whats-new/EmbeddedVideo'
import LandingBanner from './components/landing/LandingBanner'
import ProductNavigation from './components/landing/ProductNavigation'
import Downloads from './components/landing/Downloads'
import Announcement from './components/Announcement'
import Survey from './components/Survey'
import SocialShare from './components/SocialShare'
import QuickLinks from './components/QuickLinks'
import Carousel from './components/Carousel'
import VideoGallery from './components/VideoGallery'

import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'


const containers = [
  {
    id: 'whats-new-banner',
    component: WNBanner
  },
  {
    id: 'landing-banner',
    component: LandingBanner
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
  },
  {
    id: 'product-navigation',
    component: ProductNavigation
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