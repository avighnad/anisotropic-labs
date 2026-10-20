"use client";

import { useEffect, useRef, useState } from "react";
import { createIntroScene } from "./scene";
import { BOOT_LOG } from "./timeline";
import { INTRO_PENDING_CLASS, markIntroMounted, releaseIntroDocument } from "./introSession";
import "./intro.css";

const LOG_BY_ID = new Map(BOOT_LOG.map((entry) => [entry.id, entry]));

// Deferred so React StrictMode's mount → unmount → mount doesn't release the page mid-intro.
let teardownTimer = 0;

export function IntroOverlay() {
  const [active, setActive] = useState(true);
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const skipRef = useRef(null);
  const enterRef = useRef(null);
  const stateRef = useRef(null);
  const progressRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    window.clearTimeout(teardownTimer);
    const root = rootRef.current;
    if (!root || !document.documentElement.classList.contains(INTRO_PENDING_CLASS)) {
      setActive(false);
      return undefined;
    }

    markIntroMounted();
    root.classList.add("is-running");

    const scene = createIntroScene({
      canvas: canvasRef.current,
      reduced: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      cues: BOOT_LOG,
      getTarget: () => document.querySelector(".sim-viewport")?.getBoundingClientRect() ?? null,
      onCue: (id) => {
        root.querySelector(`[data-log="${id}"]`)?.classList.add("is-on");
        const entry = LOG_BY_ID.get(id);
        if (entry?.state && stateRef.current) stateRef.current.textContent = entry.state;
        if (id === "flow") root.querySelector(".intro-readout")?.classList.add("is-on");
      },
      onProgress: (p) => {
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
      },
      onBackdrop: (alpha) => {
        root.style.backgroundColor = `rgba(12, 12, 12, ${alpha})`;
      },
      onHold: () => {
        root.classList.add("is-holding");
        enterRef.current?.focus({ preventScroll: true });
      },
      onRelease: () => {
        root.classList.add("is-releasing");
        releaseIntroDocument();
      },
      onDone: () => {
        releaseIntroDocument();
        setActive(false);
      }
    });
    sceneRef.current = scene;
    skipRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === "Escape") scene.skip();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      scene.destroy();
      sceneRef.current = null;
      teardownTimer = window.setTimeout(releaseIntroDocument, 0);
    };
  }, []);

  if (!active) return null;

  return (
    <div ref={rootRef} className="intro-overlay">
      <canvas ref={canvasRef} className="intro-canvas" aria-hidden="true" />

      <div className="intro-hud" aria-hidden="true">
        <div className="intro-head">
          <span className="intro-brand">Anisotropic Labs</span>
          <span className="intro-title">
            Aerodynamic model <span className="intro-sep">/</span> <span ref={stateRef}>initialising</span>
          </span>
        </div>

        <ol className="intro-log">
          {BOOT_LOG.map((entry) => (
            <li
              key={entry.id}
              data-log={entry.id}
              data-minor={entry.minor ? "" : undefined}
              data-cursor={entry.cursor ? "" : undefined}
            >
              <span className="intro-log-label">{entry.label}</span>
              <span className="intro-log-leader" />
              <span className="intro-log-value" data-tone={entry.tone}>
                {entry.value}
              </span>
            </li>
          ))}
        </ol>

        <div className="intro-readout">
          <span className="intro-readout-label">frame / body axis</span>
          <span>
            α 4.0° <span className="intro-sep">·</span> β 0.0° <span className="intro-sep">·</span> M 0.78
          </span>
        </div>

        <div className="intro-rule">
          <span ref={progressRef} className="intro-rule-fill" />
        </div>
      </div>

      <button ref={skipRef} type="button" className="intro-skip" onClick={() => sceneRef.current?.skip()}>
        Skip intro <kbd>esc</kbd>
      </button>

      <button ref={enterRef} type="button" className="intro-enter" onClick={() => sceneRef.current?.enter()}>
        Enter site <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
