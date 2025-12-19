'use client';

import { FC }                            from 'react';
import { useRouter }                     from 'next/navigation';

const Error404: FC = () => {
  const router = useRouter();
  return (
    <div className = "min-h-screen flex items-center justify-center px-4">
      <div className = "text-center">
        <div className = "text-6xl mb-4">🚫</div>
        <h1 className = "text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className = "text-lg text-muted-foreground mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button
          className  = "px-6 py-3 bg-accent text-accent-foreground font-semibold transition-all duration-200 hover:brightness-110 hover:shadow-lg active:scale-95"
          onClick     = {() => router.push('/')}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Error404;
