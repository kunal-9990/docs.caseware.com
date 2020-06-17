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

const Accordion = ({ id, title, description, content, contents }) => (
  <div className="tab tab--group" key={id}>
    <input type="checkbox" id={id}/>
    <label className="tab__label" htmlFor={id}>
      <h2 className="light">{ title }</h2>
    </label>
    <div className="tab__content">
      { description && <p>{ description }</p> }
      { content && <div dangerouslySetInnerHTML={{__html: content}} />}
      { contents && contents.map(content => {
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

export default Accordion