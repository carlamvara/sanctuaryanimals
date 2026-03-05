export default function ControlsHUD() {
  return (
    <div style={{
      position: "fixed",
      top: "10px",
      right: "10px",
      background: "rgba(0,0,0,0.55)",
      padding: "12px 16px",
      borderRadius: "8px",
      color: "white",
      fontFamily: "monospace",
      fontSize: "14px",
      zIndex: 9999,
      userSelect: "none",
      pointerEvents: "none"
    }}>
      <div><b>W / ↑</b> avanzar</div>
      <div><b>S / ↓</b> retroceder</div>
      <div><b>A / ←</b> izquierda</div>
      <div><b>D / →</b> derecha</div>
      <div><b>Click</b> capturar mouse</div>
      <div><b>Mover Mouse</b> mirar</div>
      <div><b>SHIFT</b> correr</div>
      <div><b>SPACE</b> saltar</div>
      <div><b>ESC</b> liberar cursor</div>
    </div>
  )
}