import { FC }                            from 'react';
import Image                              from 'next/image';

const GlobalLogo: FC = () => (
  <div className = "fixed top-4 left-4 z-[60]">
    <Image
      src       = "/kovalty_logo.png"
      alt       = "Kovalty Logo"
      width     = {100}
      height    = {100}
      className = "w-24 h-24"
    />
  </div>
);

export default GlobalLogo;
