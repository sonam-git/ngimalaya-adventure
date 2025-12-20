import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Ngimalaya Adventure - Expert Nepal Trekking & Expeditions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #064e3b 0%, #10b981 50%, #059669 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          padding: '80px',
        }}
      >
        {/* Mountain silhouette effect */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '40%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
            display: 'flex',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              marginBottom: 20,
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              letterSpacing: '-2px',
            }}
          >
            Ngimalaya Adventure
          </div>
          <div
            style={{
              fontSize: 40,
              opacity: 0.95,
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              marginBottom: 30,
            }}
          >
            Expert Nepal Trekking & Himalayan Expeditions
          </div>
          <div
            style={{
              display: 'flex',
              gap: 40,
              fontSize: 28,
              opacity: 0.9,
            }}
          >
            <div>🏔️ Treks</div>
            <div>⛰️ Peak Climbing</div>
            <div>🦏 Wildlife Safari</div>
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 24,
              opacity: 0.8,
              fontWeight: '300',
            }}
          >
            Sherpa-led adventures since 2000
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
