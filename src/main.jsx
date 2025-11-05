import React from 'react'
import ReactDOM from 'react-dom/client'
import { LiquidMetal } from '@paper-design/shaders-react'

function App() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent'
    }}>
      <LiquidMetal 
        image="https://raw.githubusercontent.com/threapchills/portfolio/main/images/mw-logo-big.png"
        speed={1}
        colorBack="#00000000"
        colorTint="#FFFFFF"
        softness={0.05}
        repetition={1.5}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.1}
        contour={0.4}
        scale={1}
        rotation={0}
        shape="none"
        angle={90}
        style={{
          backgroundColor: '#AAAAAC',
          borderRadius: '50%',
          flexShrink: '0',
          height: '200px',
          width: '200px'
        }}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
