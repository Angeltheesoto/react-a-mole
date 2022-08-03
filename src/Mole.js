import { useEffect } from 'react'
import moleImg from './mole.png'

function Mole(props){

 useEffect(() => {

  let randSeconds = Math.ceil(Math.random() * 10000)
  let timer = setTimeout(() => {
   props.toggle(false)
  }, randSeconds)
 })

 return (
  <div>
   <img style={{'width': '30vw', 'cursor': 'pointer'}} src={moleImg} onClick={props.handleClick} />
  </div>
 )
 
}

export default Mole