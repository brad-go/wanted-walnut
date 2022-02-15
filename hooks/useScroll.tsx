import { useState, useEffect, useCallback } from 'react';

const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const [backgroundTransparency, setBackgroundTransparency] =
    useState<number>(0);
  const [boxShadow, setBoxShadow] = useState<number>(0);
  const [filter, setFilter] = useState<number>(0);

  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const [checkAnimation, setCheckAnimation] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setScrollY(window.pageYOffset);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const transparency = scrollY / 800;
    const filter = Number((transparency * 150).toFixed());
    if (transparency < 1) {
      setBackgroundTransparency(scrollY / 800);
      setBoxShadow(transparency * 0.1);
      setFilter(filter);
    }
  }, [scrollY]);

  useEffect(() => {
    if (scrollY > 756) {
      setAutoPlay(true);
    }
    if (scrollY > 1680) {
      setCheckAnimation(true);
    } else {
      setCheckAnimation(false);
    }
  }, [scrollY]);

  return {
    backgroundTransparency,
    boxShadow,
    filter,
    autoPlay,
    checkAnimation,
  };
};

export default useScroll;
