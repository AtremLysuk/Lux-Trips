import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

export function useScrollTriggerRefresh() {
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  },[location])
}

export default useScrollTriggerRefresh;
