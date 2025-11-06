import React from 'react'
import ReactDOM from 'react-dom/client'
import { LiquidMetal } from '@paper-design/shaders-react';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <LiquidMetal 
        image="https://workers.paper.design/file-assets/01K9ATDMCCTA1A410R58A1S132/01K9CN4GV0K5BNYZQDNPV976YM.png" 
        speed={1} 
        colorBack="#00000000" 
        colorTint="#FFFFFF" 
        softness={0.05} 
        repetition={1.5} 
        shiftRed={0.3} 
        shiftBlue={0.3} 
        distortion={0.1} 
        contour={0.4} 
        scale={0.87} 
        rotation={0} 
        shape="none" 
        angle={109} 
        frame={66455.10000023847} 
        style={{ 
          backgroundColor: '#AAAAAC', 
          borderColor: '#261512', 
          borderRadius: '116px', 
          borderStyle: 'solid', 
          borderWidth: '0px', 
          flexShrink: '0', 
          height: '275px', 
          outline: '0px solid #000000', 
          width: '621px' 
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
