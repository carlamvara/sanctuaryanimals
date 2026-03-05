import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { useRef, useEffect, useState } from "react"
import * as THREE from "three"
import ControlsHUD from "./ControlsHUD.jsx"
import CoordinatesHUD from "./CoordinatesHUD.jsx"
import Niches from "./components/renders/Niches.jsx"
import DistanceLimiter from "./utils/DistanceLimiter.jsx"
import MausoleumsRender from "./components/renders/MausoleumsRender.jsx"
import TombsRow from "./components/rows/TombsRow.jsx"

const tombTypes = ["square", "circle", "house"]

const tombsRows = [
  { x: 286, z: -8, skip: [17, 24, 25, 26, 32, 33, 34] },
  { x: 276, z: -8, skip: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 31, 36, 37] },
  { x: 266, z: -8, skip: [5, 6, 20, 21, 22, 23, 26, 31, 38] },
  { x: 256, z: -8, skip: [5, 8, 9, 10, 11, 19, 18, 16, 24, 26, 31, 38] },
  { x: 246, z: -8, skip: [6, 7, 12, 16, 17, 24, 26, 32, 38] },
  { x: 236, z: -8, skip: [13, 15, 16, 26, 31, 38, 39] },
  { x: 226, z: -8, skip: [3, 4, 5, 6, 13, 14, 15, 25, 30, 31, 39] },
  { x: 216, z: -8, skip: [2, 3, 7, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 40, 41, 42] },
  { x: 206, z: -8, skip: [2, 7, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 37, 42] },
  { x: 196, z: -8, skip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42] },
  { x: 186, z: -8, skip: [0, 1, 2, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 37, 38, 39, 40, 41, 42] },
  { x: 176, z: -8, skip: [2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 37, 38, 39, 40, 41, 42] },
  { x: 166, z: -8, skip: [2, 3, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 36, 37, 38, 39, 40, 41, 42] },
  { x: 156, z: -8, skip: [3, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 36, 37, 38, 39, 40, 41, 42] },
  { x: 146, z: -8, skip: [4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 41, 42] },
  { x: 136, z: -8, skip: [7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 35, 36, 37, 38, 39, 40, 41, 42] },
  { x: 116, z: -8, skip: [0, 1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 34] },
  { x: 106, z: -8, skip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 34] },
  { x: 96, z: -8, skip: [0, 1, 2, 3, 4, 5, 6, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33] },
  { x: 86, z: -8, skip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32] },
  { x: 76, z: -8, skip: [0, 1, 2, 3, 4, 5, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32] },
  { x: 66, z: -8, skip: [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33] },
  { x: 56, z: -8, skip: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 40, 41, 42] },
  { x: 46, z: -8, skip: [7, 17, 18, 19, 20, 21, 22, 23, 24, 25, 29, 30] },
  { x: 36, z: -8, skip: [7, 10, 11, 12, 28] },
  { x: 26, z: -8, skip: [7, 8, 9, 10, 12, 16, 26, 27] },
  { x: 16, z: -8, skip: [26, 27, 25, 16, 12, 4] },
  { x: 6, z: -8, skip: [4, 10, 11, 16, 24, 25, 26] },
  { x: -6, z: -8, skip: [26, 23, 22, 16, 9, 8, 4] },
  { x: -16, z: -8, skip: [4, 5, 6, 7, 8, 20, 21] },
  { x: -26, z: -8, skip: [20, 19, 18, 17, 5, 4, 3, 2, 1, 0] },
].map((row, index) => ({
  ...row,
  type: tombTypes[index % tombTypes.length],
}))

/* =================== CARGA MAPA =================== */
function MapModel() {
  const { scene } = useGLTF("/GENERAL MAP.glb")
  scene.traverse(obj => {
    if (obj.isMesh) obj.raycast = () => null
  })

  return <primitive object={scene} raycast={() => null} />
}

function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLandscape, setIsLandscape] = useState(true)

  useEffect(() => {
    const check = () => {
      const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      setIsMobile(mobile)
      setIsLandscape(window.innerWidth > window.innerHeight)
    }

    check()
    window.addEventListener("resize", check)
    window.addEventListener("orientationchange", check)

    return () => {
      window.removeEventListener("resize", check)
      window.removeEventListener("orientationchange", check)
    }
  }, [])

  return { isMobile, isLandscape }
}


function RotatePhoneOverlay() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#000",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      fontSize: 18,
      textAlign: "center",
      padding: 20
    }}>
      📱 Girá el teléfono<br />
      para usar el mapa
    </div>
  )
}


function MobileControls({ input }) {
  function bind(onMove) {
    let start = null

    return {
      onTouchStart: e => {
        const t = e.touches[0]
        start = { x: t.clientX, y: t.clientY }
      },
      onTouchMove: e => {
        if (!start) return
        const t = e.touches[0]
        onMove(
          (t.clientX - start.x) / 60,
          (t.clientY - start.y) / 60
        )
      },
      onTouchEnd: () => {
        start = null
        onMove(0, 0)
      }
    }
  }

  return (
    <>
      {/* Movimiento */}
      <div style={joyLeft} {...bind((x, y) => {
        input.forward = y
        input.side = -x
      })} />

      {/* Cámara */}
      <div style={joyRight} {...bind((x, y) => {
        input.yaw = -x
        input.pitch = -y
      })} />

      {/* Altura */}
      <button style={btnUp}
        onTouchStart={() => input.up = true}
        onTouchEnd={() => input.up = false}>
        ↑
      </button>

      <button style={btnDown}
        onTouchStart={() => input.down = true}
        onTouchEnd={() => input.down = false}>
        ↓
      </button>
    </>
  )
}


/* =================== CAMARA HIBRIDA =================== */
function HybridCameraControls({ onClickPosition, inputRef, isMobile }) {
  const { camera, gl, scene } = useThree()

  const yaw = useRef(0)
  const pitch = useRef(0)

  const pos = useRef(new THREE.Vector3(130, 1.06, -200))
  const vel = useRef(new THREE.Vector3())
  const onGround = useRef(false)

  const keys = useRef({
    w: false, a: false, s: false, d: false,
    shift: false, space: false, q: false, e: false
  })

  /* Desktop mouse */
  useEffect(() => {
    if (isMobile) return
    const canvas = gl.domElement
    canvas.onclick = () => canvas.requestPointerLock()

    const move = e => {
      if (document.pointerLockElement === canvas) {
        yaw.current -= e.movementX * 0.002
        pitch.current -= e.movementY * 0.002
        pitch.current = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch.current))
      }
    }

    document.addEventListener("mousemove", move)
    return () => document.removeEventListener("mousemove", move)
  }, [gl, isMobile])

  /* Teclado */
  useEffect(() => {
    if (isMobile) return

    const down = e => keys.current[e.key.toLowerCase()] = true
    const up = e => keys.current[e.key.toLowerCase()] = false

    document.addEventListener("keydown", down)
    document.addEventListener("keyup", up)

    return () => {
      document.removeEventListener("keydown", down)
      document.removeEventListener("keyup", up)
    }
  }, [isMobile])

  useFrame((_, delta) => {
    const input = inputRef.current
    const speed = (keys.current.shift ? 30 : 15) * delta

    yaw.current -= (input.yaw || 0) * 0.04
    pitch.current -= (input.pitch || 0) * 0.04

    const forward = new THREE.Vector3(
      -Math.sin(yaw.current),
      0,
      -Math.cos(yaw.current)
    ).normalize()

    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).negate()

    const move = new THREE.Vector3()

    if (keys.current.w || input.forward > 0) move.add(forward)
    if (keys.current.s || input.forward < 0) move.sub(forward)
    if (keys.current.a || input.side < 0) move.sub(right)
    if (keys.current.d || input.side > 0) move.add(right)

    if (move.length()) pos.current.add(move.normalize().multiplyScalar(speed))

    if (keys.current.e || input.up) pos.current.y += speed
    if (keys.current.q || input.down) pos.current.y -= speed

    camera.position.copy(pos.current)
    camera.rotation.set(pitch.current, yaw.current, 0)
  })

  return null
}


/* =================== MAIN SCENE =================== */

export default function MapScene() {
  const { isMobile, isLandscape } = useMobile()
  const [clickedPos, setClickedPos] = useState(null)
  const inputRef = useRef({})


  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    const prevent = e => e.preventDefault()
    document.addEventListener("touchmove", prevent, { passive: false })

    return () => {
      document.removeEventListener("touchmove", prevent)
    }
  }, [])

  function enterFullscreen() {
    const el = document.documentElement

    if (el.requestFullscreen) el.requestFullscreen()
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
  }



  if (isMobile && !isLandscape) return <RotatePhoneOverlay />
  
  return (
    <>
      <Canvas
        camera={{ position: [130, .5, -200], fov: isMobile ? 80 : 70 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <MapModel />

        <HybridCameraControls
          onClickPosition={setClickedPos}
          inputRef={inputRef}
          isMobile={isMobile}
        />

        <Niches range={isMobile ? 30 : 150} />

        <MausoleumsRender isMobile={isMobile} />

        {tombsRows.map((row, i) => (
          <TombsRow key={i} {...row} quantity={43} range={
            isMobile ? 30 : 70
          } />
        ))}

        {/* <CoordinatesHUD /> */}
      </Canvas>

      <button
        onClick={enterFullscreen}
        style={{
          position: "fixed",
          userSelect: "none",
          background: "rgba(255,255,255,.15)",
          border: "none",
          color: "#fff",
          top: 10,
          right: 10,
          zIndex: 9999
        }}
      >
        ⛶
      </button>

      {!isMobile && <ControlsHUD />}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 9999
          }}
        >
          <MobileControls input={inputRef.current} />
        </div>
      )}
    </>
  )
}

const joyLeft = {
  pointerEvents: "auto",
  touchAction: "none",
  position: "absolute",
  bottom: 20,
  left: 20,
  width: 100,
  height: 100,
  borderRadius: "50%",
  background: "rgba(255,255,255,.15)"
}

const joyRight = {
  pointerEvents: "auto",
  touchAction: "none",
  position: "absolute",
  bottom: 20,
  right: 20,
  width: 100,
  height: 100,
  borderRadius: "50%",
  background: "rgba(255,255,255,.15)"
}

const btnUp = {
  pointerEvents: "auto",
  touchAction: "none",
  position: "absolute",
  userSelect: "none",
  background: "rgba(255,255,255,.15)",
  border: "none",
  color: "#fff",
  right: 140,
  bottom: 80
}

const btnDown = {
  pointerEvents: "auto",
  touchAction: "none",
  position: "absolute",
  userSelect: "none",
  background: "rgba(255,255,255,.15)",
  border: "none",
  color: "#fff",
  right: 140,
  bottom: 20
}
