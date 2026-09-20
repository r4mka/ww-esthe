import type { PointerEvent } from "react";
import { useRef } from "react";

export type SwipeDirection = "next" | "previous";

type UseSwipeNavigationOptions = {
  onSwipe: (direction: SwipeDirection) => void;
  threshold?: number;
  capturePointer?: boolean;
  ignoreInteractiveElements?: boolean;
  onSwipeStart?: () => void;
  onSwipeEnd?: () => void;
};

export function useSwipeGesture({
  onSwipe,
  threshold = 50,
  capturePointer = false,
  ignoreInteractiveElements = false,
  onSwipeStart,
  onSwipeEnd,
}: UseSwipeNavigationOptions) {
  const swipeStartX = useRef<number | null>(null);
  const didSwipe = useRef(false);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary) {
      return;
    }

    if (
      ignoreInteractiveElements &&
      event.target instanceof Element &&
      event.target.closest("button, a")
    ) {
      return;
    }

    didSwipe.current = false;
    swipeStartX.current = event.clientX;

    if (capturePointer) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    onSwipeStart?.();
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || swipeStartX.current === null) {
      return;
    }

    const swipeDistance = event.clientX - swipeStartX.current;
    swipeStartX.current = null;

    if (
      capturePointer &&
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (Math.abs(swipeDistance) >= threshold) {
      didSwipe.current = true;
      onSwipe(swipeDistance < 0 ? "next" : "previous");
    }

    onSwipeEnd?.();
  };

  const onPointerCancel = (event: PointerEvent<HTMLDivElement>) => {
    swipeStartX.current = null;

    if (
      capturePointer &&
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    onSwipeEnd?.();
  };

  return { didSwipe, onPointerDown, onPointerUp, onPointerCancel };
}
