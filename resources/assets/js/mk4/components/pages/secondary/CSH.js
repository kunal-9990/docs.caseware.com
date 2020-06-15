import React from 'react'

const SubAccordion = ({ subgroup }) => (
  <div className="tab tab--subgroup">
    <input type="checkbox" id={subgroup.title.replace(/ /g, '-')}/>
    <label className="tab__label" htmlFor={subgroup.title.replace(/ /g, '-')}>
      <h3>{ subgroup.title }</h3>
    </label>
    <div className="tab__content">
      { subgroup.description && (<p>{ subgroup.description }</p>) }
      { subgroup.links.map((link, i) => (
        <div className="link" key={i}>
          <a href={link.link}>{ link.label }</a>
        </div>
      )) }
    </div>
  </div>
)

const Accordion = ({ id, title, description, contents }) => (
  <div className="tab tab--group" key={id}>
    <input type="checkbox" id={id}/>
    <label className="tab__label" htmlFor={id}>
      <h2>{ title }</h2>
    </label>
    <div className="tab__content">
      { description && (<p>{ description }</p>) }
      { contents.map(content => {
        if (content.acf_fc_layout == 'sub_group') {
          return <SubAccordion subgroup={content.sub_group} />
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

const CSH = props => (
  <div className="accordion">
    {Object.keys(props).map(key => ( 
      props[key].title && (
        <Accordion 
          id={props[key].title.replace(/ /g, '-')}
          title={props[key].title}
          description={props[key].description}
          contents={props[key].content}
        />
      ))
    )}
  </div>
)

export default CSH