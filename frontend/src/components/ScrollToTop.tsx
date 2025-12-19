'use client';

import { FC, useEffect }                      from 'react';
import { usePathname }                        from 'next/navigation';

const ScrollToTop: FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
