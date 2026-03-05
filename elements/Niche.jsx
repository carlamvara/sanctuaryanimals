import { useGLTF } from "@react-three/drei"

export default function Niche({ position=[0,0,0], rotation=[0,0,0], scale=1, state="clean" }) {

  const clean = useGLTF("/models/nichos/clean_niche.glb")
  const dirty = useGLTF("/models/nichos/dirty_niche.glb")

  const model = state === "dirty" ? dirty.scene : clean.scene

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
