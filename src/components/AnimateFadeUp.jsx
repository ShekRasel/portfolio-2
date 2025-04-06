import {useRef} from 'react'
import useInView from '../hooks/useInView'

function AnimateFadeUp({children}) {
    const ref = useRef(null);
    const isInview =  useInView(ref);
  return (
    <div
    ref={ref}
      className={`transition-opacity duration-500 ${isInview ? 'animate-fadeUp' : 'opacity-0'}`}
    >
        {children}
    </div>
  )
}

export default AnimateFadeUp