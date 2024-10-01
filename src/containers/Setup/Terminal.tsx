import LineCopy from './LineCopy';
import './terminal.css'

export default function Terminal() {
  const lines = [
    'cp .env.example .env',
    'yarn compose build',
    'yarn compose up'
  ]

  return <div className="terminal w-full">
    <div className="terminal-bar">
      <div className="terminal-btn"></div>
      <div className="terminal-btn"></div>
      <div className="terminal-btn"></div>
    </div>
    <div className="terminal-content">
      {lines.map((command, lineIndex) => {
        const splitted = command.split(/\s+/g)
        if (!splitted.length) return

        const head = splitted[0]
        const tail = splitted.slice(1, splitted.length)

        return <div key={lineIndex} className='line'>
          <span className='hidden sm:block'>user@user-mac</span>
          <span style={{ color: '#30FFFF' }}>~</span>
          <span>$ <span style={{ color: '#A4DB82' }}>{head}</span> {tail.join(' ')}</span>
          <LineCopy command={command} />
        </div>
      })}
    </div>
  </div>
}
