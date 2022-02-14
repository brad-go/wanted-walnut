import { useState, useEffect, useCallback } from 'react';

const useHeader = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [backgroundTransparency, setBackgroundTransparency] =
    useState<number>(0);
  const [boxShadow, setBoxShadow] = useState<number>(0);
  const [filter, setFilter] = useState<number>(0);

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

  return { backgroundTransparency, boxShadow, filter };
};

export default useHeader;
