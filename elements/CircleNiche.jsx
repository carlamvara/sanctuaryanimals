import { useGLTF } from "@react-three/drei"
import { useMemo } from "react"

// 📌 Pre-carga del modelo (no es un hook, se puede llamar fuera)
useGLTF.preload("/models/nichos/CIRCLES NICHES.glb")

export default function CircleNiche({ 
  position=[0,0,0], 
  rotation=[0,0,0], 
  scale=1 
}) {

  // 📌 Ahora sí usamos el hook dentro del componente
  const { scene } = useGLTF("/models/nichos/CIRCLES NICHES.glb")

  // Evitamos recrear la instancia cada render
  const model = useMemo(() => scene.clone(), [scene])
  console.log(model)

  return (
    <primitive
    raycast={() => null}
      object={model}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}
