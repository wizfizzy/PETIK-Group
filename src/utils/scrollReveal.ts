export function getCardRevealDelayMs(index: number, stepMs: number = 90, maxDelayMs: number = 360): number {
  if (index <= 0) return 0;
  return Math.min(index * stepMs, maxDelayMs);
}

export function getRevealClassName(isVisible: boolean): string {
  return isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-6';
}
