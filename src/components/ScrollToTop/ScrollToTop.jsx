import { useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return

    // 1. Сброс скролла
    lenis.scrollTo(0, { immediate: true })

    // 2. Обновляем ScrollTrigger ПОСЛЕ рендера новой страницы
    requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })

  }, [pathname, lenis])

  return null
}
