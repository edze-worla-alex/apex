import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "./icons";

/** Draggable before / after image wipe. */
export function Compare({
  before,
  after,
  labels = ["Before", "After"],
  variant = "tall",
  start = 50,
  className = "",
}: {
  before: string;
  after: string;
  labels?: [string, string] | string[];
  variant?: "tall" | "card";
  start?: number;
  className?: string;
}) {
  const [pos, setPos] = useState(start);
  const box = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (dragging.current) move(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [move]);

  return (
    <div
      ref={box}
      className={`compare compare--${variant} ${className}`}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      tabIndex={0}
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      <img
        src={after}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <span className="compare__tag compare__tag--after">{labels[1]}</span>

      <div
        className="compare__layer"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img src={before} alt="" />
        <span className="compare__tag compare__tag--before">{labels[0]}</span>
      </div>

      <div className="compare__handle" style={{ left: `${pos}%` }}>
        <span className="compare__knob">
          <ChevronLeft width={12} height={12} />
          <ChevronRight width={12} height={12} />
        </span>
      </div>
    </div>
  );
}
