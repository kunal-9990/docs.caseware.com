import React from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

const lightboxOptions = {
  overlayColor: 'rgba(255, 255, 255, 0.85)',
  buttonsBackgroundColor: 'rgba(255, 255, 255, 0.85)',
  buttonsIconColor: "#323232",
  showThumbnails: false,
  clickOutsideToClose: true,
  animationDisabled: true
}

const Lightbox = props => (
  <div className="lightbox">
    { Object.keys(props).map(key => (
      <SimpleReactLightbox>
        <SRLWrapper options={lightboxOptions}>
          <img key={key} src={props[key].url} alt={props[key].alt} />
        </SRLWrapper>
      </SimpleReactLightbox>
    ))}
  </div>
)

export default Lightbox