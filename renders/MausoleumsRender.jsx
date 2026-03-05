import React from 'react'
import DistanceLimiter from "../../utils/DistanceLimiter.jsx"
import AerealMausoleumRow from "../rows/AerealMausoleumRow.jsx"

export default function MausoleumsRender({ isMobile }) {
  return (
    <>
        {/* ≡==================≡  
           MAUSOLEOS AÉREOS  
        ≡==================≡ */}

        <DistanceLimiter targetPos={[60, 0, 0]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={60} initialZ={0} quantity={5} types={[2, 1, 3, 1, 2]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[70, 0, 0]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={70} initialZ={0} quantity={5} types={[1, 2, 2, 1, 1]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[85, 0, 0]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={85} initialZ={0} quantity={5} types={[2, 3, 1, 2, 3]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[97, 0, 0]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={97} initialZ={0} quantity={4} types={[3, 2, 1, 1]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[109, 0, 0]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={109} initialZ={0} quantity={6} types={[1, 1, 3, 2, 2, 3]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[118, 0, 0]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={118} initialZ={0} quantity={6} types={[2, 1, 1, 3, 1, 1]} />
        </DistanceLimiter>

        {/* SEGUNDO GRUPO */}

        <DistanceLimiter targetPos={[188, 0, -338]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={188} initialZ={-338} quantity={5} types={[2, 1, 3, 1, 2]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[176, 0, -338]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={176} initialZ={-338} quantity={5} types={[1, 2, 2, 1, 1]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[164, 0, -338]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={164} initialZ={-338} quantity={5} types={[2, 3, 1, 2, 3]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[152, 0, -338]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={152} initialZ={-338} quantity={5} types={[3, 2, 1, 1, 2]} />
        </DistanceLimiter>

        <DistanceLimiter targetPos={[139, 0, -328]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={139} initialZ={-328} quantity={6} types={[1, 1, 3, 2, 2, 3]} />
        </DistanceLimiter>

        {/* <DistanceLimiter targetPos={[128, 0, -328]} range={isMobile ? 20 : 120}>
          <EarthMausoleumRow x={128} initialZ={-328} quantity={6} />
        </DistanceLimiter> */}

        <DistanceLimiter targetPos={[128, 0, -328]} range={isMobile ? 20 : 120}>
          <AerealMausoleumRow x={128} initialZ={-328} quantity={6} types={[2, 1, 1, 3, 1, 1]} />
        </DistanceLimiter>
    </>
  )
}
