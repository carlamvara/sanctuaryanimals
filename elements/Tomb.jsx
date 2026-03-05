import { useGLTF, Text } from "@react-three/drei"
import { useMemo } from "react"

const TRIBUTES = [
  "3aros-de-goma.glb",
  "ardilla.glb",
  "CAMITA1.glb",
  "CAMITA2.glb",
  "Candelabro-tridente-con-3-velas.glb",
  "conjunto-de-piedras-grises.glb",
  "conjunto-de-piedras-marrones.glb",
  "conjunto-de-piedras-simil-pared.glb",
  "CORAZON.glb",
  "correa.glb",
  "cuenco-agua.glb",
  "cuenco-comida1.glb",
  "cuenco-comida-perro.glb",
  "CUERDA-NUDOS.glb",
  "ESTRELLA.glb",
  "florcitas-rosas-en-jarron-gris.glb",
  "flores-amarillas-con-jarron-de-vidrio.glb",
  "flores-blancas.glb",
  "flores-blancas-en-jarron.glb",
  "flores-rosas-jarron-oscuro.glb",
  "flores-rositas-en-canasta-de-mimbre.glb",
  "flores-salmon.glb",
  "galleta-de-hueso.glb",
  "INCENSARIO-DOBLE.glb",
  "incensario-estilo-lampara-de-aladin.glb",
  "INCENSARIO-IGLESIA.glb",
  "INCENSARIO-PEQUEÑO.glb",
  "INCENSARIO-PEQUEÑO2.glb",
  "lampara-de-luna-de-apoyar.glb",
  "lavanda-en-jarron-de-vidrio.glb",
  "monton-de-galletas-de-hueso.glb",
  "pelota-football.glb",
  "pelota-tenis.glb",
  "PELUCHE-1.glb",
  "PELUCHE-2.glb",
  "PELUCHE-3.glb",
  "PELUCHE-5.glb",
  "PELUCHE-oso.glb",
  "piedra.glb",
  "piedra2.glb",
  "piedra3.glb",
  "piedra4.glb",
  "planta-en-maceta-1.glb",
  "planta-en-maceta-2.glb",
  "planta-en-maceta-3.glb",
  "planta-en-maceta-4.glb",
  "planta-en-maceta-5.glb",
  "planta-en-maceta-6.glb",
  "planta-en-maceta-7.glb",
  "ramillete-de-trigo-heno.glb",
  "raton-divertido.glb",
  "salchicha-sola.glb",
  "torta-1.glb",
  "torta-2.glb",
  "torta-3.glb",
  "torta-4.glb",
  "torta-5.glb",
  "vela-alargada-en-candelabro-individual.glb",
  "velas-clasicas-distintos-tamanos.glb",
  "velas-en-candelabro-individual.glb",
  "zanahoria.glb",
]

function getRandomTributes(list, count = 3) {
  return [...list]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}

export default function Tomb({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  petName = "Firulais",
  owner = "Juan Pérez",
  life = "2010 - 2024",
  type = "circle",
}) {
  const circle = useGLTF("/models/tombs/REDONDEADA.glb")
  const square = useGLTF("/models/tombs/CUADRADA.glb")
  const house = useGLTF("/models/tombs/CASA.glb")

  const tributePaths = useMemo(
    () =>
      TRIBUTES.map(name =>
        `/models/tributes/${encodeURIComponent(name)}`
      ),
    []
  )

  const tributes = useGLTF(tributePaths)

  const selectedIndex = useMemo(() => {
    return Math.floor(Math.random() * TRIBUTES.length)
  }, [])

  const model =
    type === "square"
      ? square.scene
      : type === "house"
        ? house.scene
        : circle.scene

  return (
    <group position={position} rotation={rotation}>
      <primitive object={model.clone()} scale={0.1} raycast={() => null} />

      {/* placa */}
      <group position={[1.35, 0.7, 4.2]} rotation={[-1.05, 0, 0]}>
        <mesh>
          <planeGeometry args={[2.5, 2.3]} />
          <meshStandardMaterial color="#cfcfcf" />
        </mesh>

        <Text position={[0, 0.6, 0.01]} fontSize={0.35} color={"black"}>
          {petName}
        </Text>
        <Text position={[0, 0, 0.01]} fontSize={0.25} color={"black"}>
          Dueño: {owner}
        </Text>
        <Text position={[0, -0.5, 0.01]} fontSize={0.22} color={"black"}>
          {life}
        </Text>
      </group>

      {/* tributos */}
      {/* <primitive
        key={TRIBUTES[selectedIndex]}
        object={tributes[selectedIndex].scene.clone()}
        position={[-3 + 0 * 1.5, 0.3, 3]}
        scale={1}
      /> */}
    </group>
  )
}