import { useGLTF } from "@react-three/drei"

export default function MausoleumEarth({ position=[0,0,0], rotation=[0,0,0], scale=1 }) {
  const model = useGLTF("/models/mausoleos/earth.glb")
  
  return (
    <primitive
      object={model.scene} // permite múltiples instancias sin conflicto
      position={position}
      rotation={rotation}
      scale={scale}
      raycast={() => null}
    />
  )
}
  