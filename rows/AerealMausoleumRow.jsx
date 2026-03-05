
import Mausoleum from "../elements/Mausoleum.jsx"

export default function AerealMausoleumRow({ x, initialZ, quantity = 5, types = [1, 1, 1, 1, 1] }) {
  const yByType = {
    1: 0.01,
    2: 4,
    3: 8,
    4: 1
  }
  
  return (
    <>
      {Array.from({ length: quantity }).map((num, index) => <Mausoleum
        position={[
          x, 
          yByType[types[index + 1]] || 0.01,  
          initialZ - ((index + 1) * 10)
        ]}
        type={types[index + 1]}
      />)}
    </>
  )
}