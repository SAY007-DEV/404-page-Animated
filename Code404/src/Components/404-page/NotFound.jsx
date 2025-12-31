import React, { useEffect, useRef } from "react";
import "./NotFound.css";

export default function NotFound() {
  const linesRef = useRef([]);

  useEffect(() => {
    let delay = 0;

    linesRef.current.forEach((line, index) => {
      if (!line) return;

      const count = line.textContent.length;
      const duration = count / 12;

      line.style.animation = `
        typing ${duration}s steps(${count}, end) forwards,
        blink 1s step-end ${duration}s infinite
      `;
      line.style.animationDelay = `${delay}s`;

      setTimeout(() => {
        line.style.opacity = "1";
      }, delay * 1000);

      delay += duration;

      // Remove cursor from previous line
      if (index !== linesRef.current.length - 1) {
        setTimeout(() => {
          line.style.borderRight = "0";
        }, delay * 1000);
      }
    });
  }, []);

 const codeLines = [
  "function findPage(url) {",
  "    // Searching the entire internet...",
  "    const page = internet.find(url);",
  "",
  "    if (!page) {",
  "        console.log('Nope. Still nothing.');",
  "        throw new Error(404);",
  "    }",
  "",
  "    return page;",
  "}",
  "",
  "/**",
  " * @todo Fix this page",
  " * @note Developer went for coffee ☕",
  " * @warning This route does not exist in this universe",
  " */",
  "",
  "try {",
  "    findPage('/this-page');",
  "} catch (error) {",
  "    console.error('404: Page Not Found 😅');",
  "}"
];


  return (
    <div className="page">
      <pre className="code">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className="highLight"
            ref={(el) => (linesRef.current[index] = el)}
          >
            {line || "\u00A0"}
          </div>
        ))}
      </pre>
    </div>
  );
}
