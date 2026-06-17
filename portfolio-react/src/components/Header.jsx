import { useState, useEffect } from "react";

function Header() {
  const words = [
    "Web Developer",
    "Problem Solver",
    "Freelancer",
    "Backend Developer",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const word = words[wordIndex];

        if (!isDeleting) {
          setCurrentWord(word.substring(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          if (charIndex + 1 === word.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentWord(word.substring(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? 80 : 120,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <header className="hero">
      <h1>Lazarus Kipchumba Sumbatt</h1>
      <p>
        <span className="typing">{currentWord}</span>
      </p>
      <a href="#contact" className="btn">
        Get In Touch
      </a>
    </header>
  );
}

export default Header;
