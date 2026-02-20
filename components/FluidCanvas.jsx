"use client";

import { useEffect, useRef } from "react";

export function FluidCanvas({ className = "", tone = "dark" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    let animationId;
    let width = 0;
    let height = 0;

    const darkMode = tone === "dark";
    const particles = [];
    const particleCount = darkMode ? 180 : 140;

    const palette = darkMode
      ? {
          stream: "rgba(103, 214, 255, 0.34)",
          particle: "103, 214, 255",
          fade: "rgba(8, 11, 16, 0.14)",
          vector: "rgba(120, 170, 255, 0.28)"
        }
      : {
          stream: "rgba(56, 137, 168, 0.22)",
          particle: "47, 143, 174",
          fade: "rgba(247, 252, 255, 0.35)",
          vector: "rgba(82, 144, 188, 0.2)"
        };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const flowField = (x, y, t) => {
      const nx = x / Math.max(width, 1);
      const ny = y / Math.max(height, 1);
      const a = Math.sin(nx * 6.8 + t * 0.00055 + ny * 2.1);
      const b = Math.cos(ny * 7.6 - t * 0.00048 - nx * 3.4);
      const swirl = Math.sin((nx + ny) * 6.2 + t * 0.00068);
      return (a + b + swirl) * 0.62;
    };

    const resetParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.34 + Math.random() * 0.88,
      life: 90 + Math.random() * 260,
      age: Math.random() * 120,
      radius: darkMode ? 0.6 + Math.random() * 1.2 : 0.5 + Math.random() * 1
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i += 1) {
        particles.push(resetParticle());
      }
    };

    const drawDashedVectors = (time) => {
      ctx.save();
      ctx.setLineDash([7, 9]);
      ctx.lineWidth = 1;
      ctx.strokeStyle = palette.vector;

      const step = Math.max(64, width / 10);
      for (let x = 0; x <= width; x += step) {
        const angle = flowField(x, height * 0.45, time) * Math.PI;
        const yStart = 26;
        const yEnd = height - 26;
        const dx = Math.cos(angle) * 14;
        ctx.beginPath();
        ctx.moveTo(x - dx, yStart);
        ctx.lineTo(x + dx, yEnd);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawStreamlines = (time) => {
      ctx.save();
      ctx.strokeStyle = palette.stream;
      ctx.lineWidth = 1;

      const gapY = Math.max(24, height / 12);
      for (let startY = gapY * 0.4; startY <= height; startY += gapY) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 8) {
          const angle = flowField(x, startY, time);
          const y = startY + Math.sin(angle * 1.2) * 13;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      ctx.restore();
    };

    const render = (time) => {
      ctx.fillStyle = palette.fade;
      ctx.fillRect(0, 0, width, height);

      drawStreamlines(time);
      drawDashedVectors(time);

      particles.forEach((p, index) => {
        const angle = flowField(p.x, p.y, time) * Math.PI;
        const vx = Math.cos(angle) * p.speed;
        const vy = Math.sin(angle * 1.3) * p.speed * 0.68;

        p.x += vx;
        p.y += vy;
        p.age += 1;

        if (p.x < -22 || p.x > width + 22 || p.y < -22 || p.y > height + 22 || p.age > p.life) {
          particles[index] = resetParticle();
          return;
        }

        const alpha = 1 - p.age / p.life;
        ctx.fillStyle = `rgba(${palette.particle}, ${Math.max(alpha * (darkMode ? 0.56 : 0.4), 0.06)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    resize();
    initParticles();
    animationId = requestAnimationFrame(render);

    const handleResize = () => {
      resize();
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [tone]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
