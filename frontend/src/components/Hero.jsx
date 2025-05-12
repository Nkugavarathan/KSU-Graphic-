import React, { useState, useEffect, useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import "./Hero.css"

function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [typing, setTyping] = useState(true)

  const words = [
    { text: "Digital Printing", color: "#00FFFF" }, // Cyan
    { text: "Offset Printing", color: "#FF6B6B" }, // Soft Red
  ]

  useEffect(() => {
    const currentWord = words[wordIndex].text

    let timeout
    if (typing) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        }, 100)
      } else {
        timeout = setTimeout(() => setTyping(false), 1500)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
        }, 50)
      } else {
        setTyping(true)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [charIndex, typing, wordIndex])

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <div className="hero-typewriter">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          background: {
            color: {
              value: "#001c30", // Your dark background
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: {
              value: 60,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 1 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
          },
          detectRetina: true,
        }}
      />

      <h1 style={{ color: words[wordIndex].color }}>
        {displayedText}
        <span className="cursor">|</span>
      </h1>
    </div>
  )
}

export default Hero
