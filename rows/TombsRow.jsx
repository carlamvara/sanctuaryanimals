
import Tomb from "../elements/Tomb.jsx";
import DistanceLimiter from "../../utils/DistanceLimiter.jsx";

export default function TombsRow({
  x,
  z,
  quantity = 5,
  skip = [],
  type = "circle",
  range = 80 // podés tunear esto
}) {
  return (
    <>
      {Array.from({ length: quantity }).map((_, index) => {
        if (skip.includes(index)) return null

        const position = [
          x,
          0,
          z - ((index + 1) * 9)
        ]

        return (
          <DistanceLimiter
            key={index}
            targetPos={position}
            range={range}
          >
            <Tomb
              number={index + 1}
              position={position}
            />
          </DistanceLimiter>
        )
      })}
    </>
  )
}