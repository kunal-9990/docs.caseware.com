import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags } from '@fortawesome/free-solid-svg-icons'

const SubAccordion = ({ subgroup }) => (
  <div className="tab tab--subgroup">
    <input type="checkbox" id={subgroup.title.replace(/ /g, '-')}/>
    <label className="tab__label" htmlFor={subgroup.title.replace(/ /g, '-')}>
      <h3>{ subgroup.title }</h3>
    </label>
    <div className="tab__content">
      { subgroup.innerDetails && (<p>{ subgroup.innerDetails }</p>) }
      { subgroup.links.map((link, i) => (
        <div className="link" key={i}>
          <a href={link.link}>{ link.label }</a>
        </div>
      )) }
    </div>
  </div>
)

const Accordion = ({ id, title, outerDetails, innerDetails, content, contents }) => {
  let checked = (window.location.hash.length > 0 && (window.location.hash.replace('#', '').toLowerCase() === id.toLowerCase())) ? true : false;
  return(
    <div className="tab tab--group" key={id}>
      <input 
        type="checkbox" 
        id={id} 
        defaultChecked={checked}
      />
      <label htmlFor={id} className="tab__label" >
        <h2 className="light">{ title }</h2>
      </label>
      { outerDetails && (
        <div className="tab__outer-details">
          <FontAwesomeIcon icon={ outerDetails.length > 1 ? faTags : faTag } />
          { outerDetails.join(', ') }
        </div>
      )}
      <div className="tab__content">
        { innerDetails && <p>{ innerDetails }</p> }
        { content && <div dangerouslySetInnerHTML={{__html: content}} />}
        { contents && contents.map((content, i) => {
          if (content.acf_fc_layout == 'sub_group') {
            return <SubAccordion subgroup={content.sub_group} key={i} />
          } else {
            return content.links.map((link, i) => (
              <div className="link" key={i}>
                <a href={link.link}>{ link.label }</a>
              </div>
            ))
          }
        })}
      </div>
    </div>
  )
}

export default Accordion