import { useEffect } from 'react'
import Mole from './Mole'
import MoleHill from './molehill.png'


function EmptySlot(props){
 
 useEffect(() => {
  let randSeconds = Math.ceil(Math.random() * 5000)
  let timer = setTimeout(() => {
   props.toggle(true)
  }, randSeconds)
  return () => clearTimeout(timer)
 })

 return (
  <div>
   <img style={{'width': '30vw'}} src={MoleHill} onClick={props.handleClick}/>
  </div>
 )
}

export default EmptySlot