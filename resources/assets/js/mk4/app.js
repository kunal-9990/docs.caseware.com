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
import BlogOverview from './components/pages/blog/BlogOverview'
import BlogMetaData from './components/pages/blog/BlogMetaData'
import RelatedArticles from './components/pages/blog/RelatedArticles'
import BlogLightbox from './components/pages/blog/BlogLightbox'
import CSH from './components/pages/secondary/CSH'
import FAQ from './components/pages/secondary/FAQ'
import Videos from './components/pages/secondary/Videos'
import PlaylistGrid from './components/pages/secondary/PlaylistGrid'
import RegionLightbox from './components/RegionLightbox'
import VideoControl from './components/VideoControl'

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
    id: 'playlist',
    component: PlaylistGrid
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
  },
  {
    id: 'blog-lightbox',
    component: BlogLightbox
  },
  {
    id: 'blog-metadata',
    component: BlogMetaData
  },
  {
    id: 'related-articles',
    component: RelatedArticles
  },
  {
    id: 'csh',
    component: CSH
  },
  {
    id: 'faq',
    component: FAQ
  },
  {
    id: 'videos',
    component: Videos
  },
  {
    id: 'region-lightbox',
    component: RegionLightbox
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
        VideoControl();
    }
}

export default new Mk4();

// javascript for anchor based redirects:
if (window.location.pathname == "/2020/webapps/31/en/Engagements/Template-and-Authoring/Manage-the-firm-template.htm" && window.location.hash == "#Updatethefirmtemplate") {
  window.location.replace('https://docs.caseware.com/latest/webapps/en/Engagements/Template-and-Authoring/Update-the-firm-template.htm')
}
if (window.location.pathname == "/2020/webapps/31/en/Explore/Whats-New/whats-new-audit-winter-2020.htm" && window.location.hash == "#Simple-Electronic-Signature") {
  window.location.replace('https://docs.caseware.com/latest/webapps/en/Explore/Whats-New/Release-history-Audit-Winter-2020.htm#Simple-Electronic-Signature')
}
if (window.location.pathname == "/2020/webapps/31/en/Engagements/Template-and-Authoring/Manage-the-firm-template.htm" && window.location.hash == "#Update") {
  window.location.replace('https://docs.caseware.com/2020/webapps/31/en/Engagements/Template-and-Authoring/Update-the-firm-template.htm')
}