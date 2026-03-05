import CircleNiche from "../elements/CircleNiche"
import DistanceLimiter from "../../utils/DistanceLimiter"

export default function Niches({range}) {
  return (
    <>
      <DistanceLimiter targetPos={[143, 0.05, -129]} range={range}>
        <CircleNiche position={[143, 0.05, -129]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[94, 0.05, -131]} range={range}>
        <CircleNiche position={[94, 0.05, -131]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[51, 0.05, -138]} range={range}>
        <CircleNiche position={[51, 0.05, -138]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[189, 0.05, -140]} range={range}>
        <CircleNiche position={[189, 0.05, -140]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[52, 0.05, -250]} range={range}>
        <CircleNiche position={[52, 0.05, -250]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[187, 0.05, -203]} range={range}>
        <CircleNiche position={[187, 0.05, -203]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[53, 0.05, -192]} range={range}>
        <CircleNiche position={[53, 0.05, -192]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[190, 0.05, -249]} range={range}>
        <CircleNiche position={[190, 0.05, -249]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[146, 0.05, -256]} range={range}>
        <CircleNiche position={[146, 0.05, -256]} />
      </DistanceLimiter>

      <DistanceLimiter targetPos={[98, 0.05, -260]} range={range}>
        <CircleNiche position={[98, 0.05, -260]} />
      </DistanceLimiter>
    </>
  )
}
