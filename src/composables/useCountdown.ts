import { computed, onScopeDispose, ref } from "vue";

export function useCountdown(durationSeconds: number, onExpire: () => void) {
  const timeRemaining = ref(durationSeconds);
  let timerId: ReturnType<typeof setInterval> | null = null;
  let deadline = 0;

  function stop() {
    if (timerId !== null) clearInterval(timerId);
    timerId = null;
  }

  function reset() {
    stop();
    timeRemaining.value = durationSeconds;
  }

  function start() {
    reset();
    deadline = Date.now() + durationSeconds * 1000;
    timerId = setInterval(() => {
      timeRemaining.value = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      if (timeRemaining.value === 0) {
        stop();
        onExpire();
      }
    }, 1000);
  }

  const formattedTimeRemaining = computed(() => {
    const minutes = Math.floor(timeRemaining.value / 60);
    const seconds = timeRemaining.value % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  });

  onScopeDispose(stop);
  return { timeRemaining, formattedTimeRemaining, start, stop, reset };
}
