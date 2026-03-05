import { Html } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
import { useState } from "react"

export default function CoordinatesHUD() {
  const { camera } = useThree()
  const [coords, setCoords] = useState({x:0,y:0,z:0})

  useFrame(()=>{
    setCoords({
      x:camera.position.x.toFixed(2),
      y:camera.position.y.toFixed(2),
      z:camera.position.z.toFixed(2),
    })
  })

  return (
    <Html fullscreen>
      <div style={{
        position:"fixed",
        top:"10px",
        left:"10px",
        background:"rgba(0,0,0,0.6)",
        padding:"10px 14px",
        color:"#fff",
        fontFamily:"monospace",
        borderRadius:"8px",
        fontSize:"14px",
        userSelect:"none",
        pointerEvents:"none"
      }}>
        <b>POS</b><br/>
        X:{coords.x} <br/>
        Y:{coords.y} <br/>
        Z:{coords.z}
      </div>
    </Html>
  )
}
