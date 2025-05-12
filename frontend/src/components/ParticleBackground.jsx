// src/components/ParticleBackground.jsx
import React, { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#001c30",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1, // 👈 This makes sure it stays in the background
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
        },
        detectRetina: true,
      }}
    />
  )
}

export default ParticleBackground
