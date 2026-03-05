import { useGLTF } from "@react-three/drei"

export default function Mausoleum({ position=[0,0,0], rotation=[0,0,0], scale=1, type=1 }) {

  const type1 = useGLTF("/models/mausoleos/aereo1.glb")
  const type2 = useGLTF("/models/mausoleos/aereo2.glb")
  const type3 = useGLTF("/models/mausoleos/aereo3.glb")
  const type4 = useGLTF("/models/mausoleos/earth.glb")

  const model = type === 1 ? type1.scene : type === 2 ? type2.scene : type3.scene

  return (
    <primitive
      object={model.clone()} // permite múltiples instancias sin conflicto
      position={position}
      rotation={rotation}
      scale={scale}
      raycast={() => null}
    />
  )
}
  