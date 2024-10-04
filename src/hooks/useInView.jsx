import React, { useEffect, useState } from 'react'

const useInView = (ref)=>{
  const [isInView , setInView] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>{
      if(ref.current){
        const top = ref.current.getBoundingClientRect().top;
        if(top <= window.innerHeight && top>=0){
          setInView(true);
        }else{
          setInView(false);
        }
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
  },[ref]);

  return isInView;
};

export default useInView;