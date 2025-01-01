import { MapString } from "./Map";
import DottedMap from "dotted-map/without-countries";

export default function Region() {

  const map = new DottedMap({ map: JSON.parse(MapString) });

  const regions = [
    '1.3143379,103.6790961', // singapore
    '37.9781325,-82.0662711', // virginia
  ]

  const animateRegions = [
    [211, 329, 'Virginia'],
    [348, 971, 'Singapore'],
  ]


  regions.forEach(region => {
    const [lat, lng] = region.split(',').map(r => parseFloat(r))
    map.addPin({
      lat,
      lng,
      svgOptions: { color: '#d6ff79', radius: 0.4 },
    });
  })

  const svgMap = map.getSVG({
    radius: 0.22,
    color: '#2f2931',
    // color: '#423B38',
    shape: 'circle',
    backgroundColor: 'transparent',
  });

  return (
    <div className="relative" style={{ height: 600 }}>
      <img className="h-full" src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} />

      {animateRegions.map((region, k) => {
        const [top, left, title] = region
        return <div key={k}
          style={{ top, left }}
          className="absolute top-[211px] left-[329px] cursor-pointer">
          <div className="relative">
            <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-green-500 animate-ping inline-block"></span>

            <div className="absolute -top-1.5 left-7 rounded-full px-3 py-1 bg-green-500/20 border border-green-700 text-xs text-white">{title}</div>
          </div>

        </div>
      })}

    </div>
  );

}
