import ReactHabitat from 'react-habitat'

import WNBanner from './components/pages/whats-new/WNBanner'
import Feature from './components/pages/whats-new/Feature'
import EmbeddedVideo from './components/pages/whats-new/EmbeddedVideo'
import Banner from './components/Banner'
import ProductNavigation from './components/pages/landing/ProductNavigation'
import Downloads from './components/pages/landing/Downloads'
import Announcement from './components/Announcement'
import Survey from './components/Survey'
import SocialShare from './components/SocialShare'
import QuickLinks from './components/QuickLinks'
import Carousel from './components/Carousel'
import VideoGallery from './components/VideoGallery'
import BlogOverview from './components/pages/BlogOverview'

import 'react-app-polyfill/ie9'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'


const containers = [
  {
    id: 'whats-new-banner',
    component: WNBanner
  },
  {
    id: 'banner',
    component: Banner
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
  },
  {
    id: 'blog-overview',
    component: BlogOverview
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