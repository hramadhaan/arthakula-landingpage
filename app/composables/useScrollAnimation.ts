export function useScrollAnimation(options: { threshold?: number } = {}) {
  const el = ref<HTMLElement | null>(null)
  const isVisible = ref(false)

  onMounted(() => {
    if (!el.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold: options.threshold ?? 0.1 }
    )
    observer.observe(el.value)
  })

  return { el, isVisible }
}
