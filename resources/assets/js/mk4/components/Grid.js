import React from 'react'
import Fade from 'react-reveal/Fade'

const GridItem = ({ item })=> {
  return (
    <div key={item.key}> {item.title.rendered}</div>
  )
}

const Grid = ({ items }) => {
console.log(items)

console.log("hello")


  return (
    <Fade bottom>
      <div>
        <h1>Grid!</h1>

        {items.map(item => (
          <div key={item.id} style={{'border':'1px solid red'}}>
           hi: {item.slug} 
            <GridItem item={item} />

          </div>
        ))}

 
    

      </div>
    </Fade>
  )
}

export default Grid