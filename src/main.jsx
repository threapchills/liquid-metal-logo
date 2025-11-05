import React from 'react'
import ReactDOM from 'react-dom/client'
import { LiquidMetal } from '@paper-design/shaders-react'

function App() {
    return <LiquidMetal1 image="https://workers.paper.design/file-assets/01K9ATDMCCTA1A410R58A1S132/01K9ATTGSASWYRYRM2VQKCB6YQ.png" speed={1} colorBack="#00000000" colorTint="#FFFFFF" softness={0.05} repetition={1.5} shiftRed={0.3} shiftBlue={0.3} distortion={0.1} contour={0.4} scale={0.79} rotation={0} shape="none" angle={109} frame={66455.10000023847} style={{ backgroundColor: '#AAAAAC', borderColor: '#352927', borderRadius: '110px', borderStyle: 'solid', borderWidth: '0px', flexShrink: '0', height: '516px', outline: '0px solid #000000', width: '516px' }} />;
}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

