"use client";

import { useEffect, useRef } from "react";

export function FluidCanvas({ className = "" }) {
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

    const particleCount = 160;
    const particles = [];

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
      const a = Math.sin((nx * 6.4 + t * 0.0006) + ny * 4.2);
      const b = Math.cos((ny * 8.1 - t * 0.0004) - nx * 3.8);
      const swirl = Math.sin((nx + ny) * 7.0 + t * 0.0007);
      return (a + b + swirl) * 0.7;
    };

    const resetParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.3 + Math.random() * 0.9,
      life: 80 + Math.random() * 240,
      age: Math.random() * 120,
      radius: 0.5 + Math.random() * 1.1
    });

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i += 1) {
        particles.push(resetParticle());
      }
    };

    const drawStreamlines = (time) => {
      ctx.save();
      ctx.strokeStyle = "rgba(74, 167, 200, 0.14)";
      ctx.lineWidth = 1;

      const gapY = Math.max(28, height / 12);
      for (let startY = gapY * 0.5; startY <= height; startY += gapY) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 10) {
          const angle = flowField(x, startY, time);
          const y = startY + Math.sin(angle) * 14;
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
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(247, 252, 255, 0.4)";
      ctx.fillRect(0, 0, width, height);

      drawStreamlines(time);

      particles.forEach((p, index) => {
        const angle = flowField(p.x, p.y, time) * Math.PI;
        const vx = Math.cos(angle) * p.speed;
        const vy = Math.sin(angle * 1.25) * p.speed * 0.7;

        p.x += vx;
        p.y += vy;
        p.age += 1;

        if (p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20 || p.age > p.life) {
          particles[index] = resetParticle();
          return;
        }

        const alpha = 1 - p.age / p.life;
        ctx.fillStyle = `rgba(47, 143, 174, ${Math.max(alpha * 0.42, 0.06)})`;
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
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
