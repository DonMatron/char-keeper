import { ref, onMounted, onUnmounted } from 'vue';

export function useBreakpoint(breakpoint: number) {
  const isGreaterThanTreshold = ref(window.innerWidth > breakpoint);

  const updateSize = () => {
    isGreaterThanTreshold.value = window.innerWidth > breakpoint;
  };

  onMounted(() => {
    window.addEventListener('resize', updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateSize);
  });

  return isGreaterThanTreshold;
}
