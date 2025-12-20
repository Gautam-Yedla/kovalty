'use client';
import { useRouter } from "next/navigation";
import "../styles/404Error.css";

const Error404 = () => {
  const router = useRouter();
  return (
    <div className="error404-wrapper">
      <div className="error404-content">
        <div className="error404-icon">🚫</div>
        <h1 className="error404-title">404 - Page Not Found</h1>
        <p className="error404-message">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button className="error404-home-btn" onClick={() => router.push("/")}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Error404;
