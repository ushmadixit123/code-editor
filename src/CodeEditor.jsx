//src/CodeEditor.jsx
import React, { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-javascript";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const codeInputRef = useRef(null);
  const codeHighlightRef = useRef(null);
  const handleInput = (event) => {
    const value = event.target.value;
    setCode(value);
};

  useEffect(() => {
    if (codeHighlightRef.current) {
      codeHighlightRef.current.innerHTML = Prism.highlight(
        code,
        Prism.languages.javascript,
        "javascript"
      );
    }
  }, [code]);

  return (
    <div className="code-editor-container">
      <textarea
        ref={codeInputRef}
        className="code-input"
        value={code}
        onChange={handleInput}
        spellCheck="false"
      />
      <pre className="code-output" ref={codeHighlightRef} />
    </div>
  );
};

export default CodeEditor;
