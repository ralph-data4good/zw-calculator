/**
 * Hash-based step navigation utilities
 */

export function getCurrentStep(): number {
  const hash = window.location.hash.slice(1)
  const step = parseInt(hash, 10)
  return isNaN(step) || step < 0 || step > 5 ? 0 : step
}

export function setStep(step: number): void {
  if (step < 0 || step > 5) return
  window.location.hash = step.toString()
}

export function listenToHashChange(callback: (step: number) => void): () => void {
  const handler = () => {
    callback(getCurrentStep())
  }

  window.addEventListener('hashchange', handler)

  return () => {
    window.removeEventListener('hashchange', handler)
  }
}

