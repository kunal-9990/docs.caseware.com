import React, { useState }  from 'react'
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons'
import VideoLightbox from './pages/secondary/VideoLightbox'
Modal.setAppElement('#main');

const GridPattern = [
  { colspan: 1, rowspan: 2, float: 'left' },
  { colspan: 2, rowspan: 1, float: 'left' },
  { colspan: 2, rowspan: 1, float: 'left' }, 
  { colspan: 1, rowspan: 2, float: 'right' },
  { colspan: 2, rowspan: 1, float: 'right' },
  { colspan: 2, rowspan: 1, float: 'right' },
]

const lightboxOptions = {
  overlayColor: 'rgba(255, 255, 255, 0.85)',
  buttonsBackgroundColor: 'rgba(255, 255, 255, 0.85)',
  buttonsIconColor: "#323232",
  showThumbnails: false,
  clickOutsideToClose: true,
  animationDisabled: true
}



const VideoItem2 = ({ item }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={() => openModal()}>Open {item.title}</button>
      <Modal
        closeTimeoutMS={300}
        isOpen={modalOpen}
        onRequestClose={() => closeModal()}
      >
        <button onClick={() => closeModal()}>Close</button>
        <h2>{item.title}</h2>
      </Modal>
    </React.Fragment>
  );
}


// const VideoItem = ({ item, openModal, showModal, closeModal }) => {
//   // console.log(item) 
//   return(
//   <Fade bottom>
//     <div className="grid-item" onClick={openModal} >
//       <div 
//         style={{ background: item.acf.thumbnail_image ? `url(` + item.acf.thumbnail_image.url + `) center center / cover` : "#CCC"}}
//         className="grid-item__bg"
//       ></div>
//       <div className="grid-item__wrapper">
//         <h2>{item.title}</h2>
//         {/* <div className="grid-item__hover-content">
//           <div>
//             { item.excerpt && (<div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}} className="grid-item__excerpt" />)} 
//             <div className="grid-item__filter">
//               { item.postFilters.length > 0 && (<FontAwesomeIcon icon={ item.postFilters.length > 1 ? faTags : faTag } />) }
//               { item.postFilters.join(', ')} 
//             </div>
//           </div>
//         </div> */}
//         <div className="arrow-cta"><div>Read More</div></div>
//       </div>

//       <Modal 
//                 isOpen={showModal} 
//                 contentLabel="VideoLightbox"
//                 onRequestClose={closeModal}
//                 // className="video-modal"
//                 // overlayClassName="video-modal-overlay"
//               >
//                 <VideoLightbox item={item} closeModal={closeModal} />
//               </Modal>

//     </div>

//   </Fade>
// )}


const BlogItem = ({ item })=> (
  <Fade bottom>
    <div className="grid-item">
        <div 
          style={{ background: item.image ? `url(` + item.image.url + `) center center / cover` : "#CCC"}}
          className="grid-item__bg"
        ></div>
        <div className="grid-item__wrapper">
          <h2>{item.title}</h2>
          <div className="grid-item__hover-content">
            <div>
              { item.excerpt && (<div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}} className="grid-item__excerpt" />)} 
              <div className="grid-item__filter">
                { item.postFilters.length > 0 && (<FontAwesomeIcon icon={ item.postFilters.length > 1 ? faTags : faTag } />) }
                { item.postFilters.join(', ')} 
              </div>
            </div>
          </div>
          <div className="arrow-cta"><div>Read More</div></div>
        </div>
    </div>
  </Fade>
)

const Grid = ({ type, items, showModal, openModal, closeModal }) => (
  <div className="grid">
    {items.map((item, i) => (
      <div className={'grid__wrapper colspan-' + GridPattern[i % 6]['colspan'] + ' rowspan-' + GridPattern[i % 6]['rowspan'] + ' float-' + GridPattern[i % 6]['float'] } key={i}>
        { type === 'videos' ? (
              <VideoItem2
                item={item} 
                // openModal={openModal} 
                // showModal={showModal}
                // closeModal={closeModal}
              /> 

          ) : (
            <a href={'/blog/' + item.slug} >
              <BlogItem item={item} />
            </a>
          )
        }
      </div>
    ))}
  </div>
)

Grid.propTypes = {
  type: PropTypes.oneOf(['blog', 'videos']).isRequired,
  items: PropTypes.array.isRequired
}

export default Grid