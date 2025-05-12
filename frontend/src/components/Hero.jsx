import React, { useState, useEffect } from "react"
import "./Hero.css"

const words = [
  { text: "Digital Printing", color: "#ff004f" },
  { text: "Offset Printing", color: "#00bfff" },
]

function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [typing, setTyping] = useState(true)

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

  return (
    <div className="hero-typewriter">
      <h1 style={{ color: words[wordIndex].color }}>
        {displayedText}
        <span className="cursor">|</span>
      </h1>
    </div>
  )
}

export default Hero
