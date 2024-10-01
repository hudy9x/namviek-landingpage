'use client'
import { useEffect } from "react"

export default function TechSatellite() {
  const size = 450;
  const itemSize = 20;

  const items = new Array(10).fill(1)

  useEffect(() => {
    const w = size;
    const h = size;
    const centerX = w / 2
    const centerY = h / 2

    const radius = Math.max(w, h) / 2;

    const haftSize = itemSize / 2
    const numberOfItems = items.length

    for (let i = 0; i < numberOfItems; i++) {
      const angle = i / numberOfItems * 2 * Math.PI
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      const item = document.getElementById(`sat-item-${i}`)
      if (!item) continue

      item.style.top = `${y - haftSize}px`
      item.style.left = `${x - haftSize}px`
    }

  }, [])

  return <div className="absolute">
    <div className="tech-brand rotate-3" style={{ width: size, height: size }}>
      {items.map((brand, itemIndex) => {
        return <div key={itemIndex}
          id={`sat-item-${itemIndex}`}
          className="tech-brand-item"
          style={{ width: itemSize, height: itemSize }}>
          <div className="tech-item-container"
            style={{
              width: itemSize - 6,
              height: itemSize - 6
            }}>
          </div>
        </div>
      })}
    </div>
  </div>
}
