import Link from "next/link";
import { MapString } from "./Map";
import DottedMap from "dotted-map/without-countries";

export default function Region() {

  const map = new DottedMap({ map: JSON.parse(MapString) });

  const regions = [
    '1.3143379,103.6790961', // singapore
    '37.9781325,-82.0662711', // virginia
  ]

  const animateRegions: [number, number, string, string][] = [
    [175, 277, 'Virginia', 'https://namviek-vir.vercel.app/'],
    [290, 820, 'Singapore', 'https://namviek-sing.vercel.app/'],
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
    <>
      <div className="sm:hidden space-y-3">
        {animateRegions.map((region, key) => {
          const title = region[2]

          return <div key={key} className="relative rounded-full px-5 py-2 bg-green-500/20 group-hover:border-green-700 border border-green-700/60 text-sm text-white/70 group-hover:text-white transition-all">

            <span className="absolute top-3 left-3 w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            <span className="absolute top-3 left-3 w-3 h-3 rounded-full bg-green-500 animate-ping inline-block"></span>
            <span className="pl-3">
              {title}
            </span>
          </div>
        })}
      </div>
      <div className="hidden sm:block relative" style={{ height: 500 }}>
        <img className="h-full" src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`} />

        {animateRegions.map((region, k) => {
          const [top, left, title, serverLink] = region
          return <Link key={k}
            style={{ top, left }}
            href={serverLink}
            target="_blank"
            title="Click me to open demo page"
            className="absolute top-[211px] left-[329px] cursor-pointer group">
            <div className="relative">
              <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="absolute top-0 left-0 w-3 h-3 rounded-full bg-green-500 animate-ping inline-block"></span>

              <div className="absolute -top-1.5 left-7 rounded-full px-3 py-1 bg-green-500/20 group-hover:border-green-700 border border-green-700/60 text-xs text-white/70 group-hover:text-white transition-all">{title}</div>
            </div>

          </Link>
        })}



      </div>
    </>
  );

}
