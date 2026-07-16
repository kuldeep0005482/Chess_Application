import { useLayoutEffect, useRef, useState } from "react";

const BOARD_VERTICAL_GAP = 24;

export default function useResponsiveBoardSize({ centerRef, topStripRef, bottomStripRef }) {
  const [boardSize, setBoardSize] = useState(0);
  const rafIdRef = useRef(null);

  useLayoutEffect(() => {
    const measure = () => {
      const centerElement = centerRef.current;

      if (!centerElement) return;

      const availableWidth = centerElement.clientWidth;
      const topStripHeight = topStripRef.current?.offsetHeight ?? 0;
      const bottomStripHeight = bottomStripRef.current?.offsetHeight ?? 0;
      const availableHeight = window.innerHeight - topStripHeight - bottomStripHeight - BOARD_VERTICAL_GAP;

      const nextSize = Math.max(0, Math.floor(Math.min(availableWidth, availableHeight)));

      setBoardSize((currentSize) => (currentSize === nextSize ? currentSize : nextSize));
    };

    const scheduleMeasure = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      rafIdRef.current = requestAnimationFrame(measure);
    };

    scheduleMeasure();

    const resizeObserver = new ResizeObserver(scheduleMeasure);

    if (centerRef.current) {
      resizeObserver.observe(centerRef.current);
    }

    if (topStripRef.current) {
      resizeObserver.observe(topStripRef.current);
    }

    if (bottomStripRef.current) {
      resizeObserver.observe(bottomStripRef.current);
    }

    window.addEventListener("resize", scheduleMeasure);

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }

      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleMeasure);
    };
  }, [centerRef, topStripRef, bottomStripRef]);

  return boardSize;
}