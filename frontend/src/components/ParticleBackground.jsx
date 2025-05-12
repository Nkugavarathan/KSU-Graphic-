import { useEffect, useMemo, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

const ParticleBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const particlesLoaded = (container) => {
    console.log("Particles Loaded", container)
  }

  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, // ✅ Make sure full screen is disabled
      background: { color: { value: "#0d47a1" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          enable: true,
          color: "#ffffff",
          distance: 150,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: { default: "bounce" },
        },
        number: { value: 50, density: { enable: true } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: 0.5 },
      },
      detectRetina: true,
    }),
    []
  )

  return init ? (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        options={options}
        particlesLoaded={particlesLoaded}
      />
    </div>
  ) : null
}

export default ParticleBackground
