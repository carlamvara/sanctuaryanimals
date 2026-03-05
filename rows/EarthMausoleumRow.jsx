
import MausoleumEarth from "../elements/MausoleumEarth.jsx"

export default function EarthMausoleumRow({ x, initialZ, quantity = 5 }) {  
  return (
    <>
      {Array.from({ length: quantity }).map((num, index) => <MausoleumEarth
        position={[
          x, 
          1,  
          initialZ - ((index + 1) * 10)
        ]}
        type={4}
      />)}
    </>
  )
}