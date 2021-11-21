import React from 'react'
import Particles from 'react-particles-js'
import config from './particles-config'

export default function ParticlesBackground() {
    return (
        <Particles params={config}>          
        </Particles>
    )
}

{/* <div style={{ position: 'absolute' }}>
<ParticlesBackground />
</div> */}
