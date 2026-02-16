export default function Home() {
  return (
    <div className="container">
      {/* Animated Background */}
      <div className="background" />

      {/* Header with Auth Buttons */}
      <header className="header">
        <div className="auth-buttons">
          <button className="btn btn-login">Login</button>
          <button className="btn btn-signup">Sign Up</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <h1 className="heading">Browse Carpenters</h1>
        <a href="#" className="join-link">
          Join as Carpenter
        </a>
      </main>

      <style jsx>{`
        .container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .background {
          position: absolute;
          top: -5%;
          left: -5%;
          width: 110%;
          height: 110%;
          background-image: url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070');
          background-size: cover;
          background-position: center;
          animation: slowZoom 20s ease-in-out infinite alternate;
          z-index: -1;
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
        }

        .header {
          position: relative;
          z-index: 10;
          padding: 2rem;
          display: flex;
          justify-content: flex-end;
        }

        .auth-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-login {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-login:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .btn-signup {
          background: white;
          color: #1a1a1a;
        }

        .btn-signup:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }

        .main {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem;
        }

        .heading {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          color: white;
          margin: 0 0 2rem 0;
          letter-spacing: -0.02em;
          text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
        }

        .join-link {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .join-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: white;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .join-link:hover {
          color: white;
        }

        .join-link:hover::after {
          transform: scaleX(1);
        }

        @media (max-width: 768px) {
          .header {
            padding: 1.5rem;
          }

          .auth-buttons {
            gap: 0.75rem;
          }

          .btn {
            padding: 0.6rem 1.5rem;
            font-size: 0.9rem;
          }

          .heading {
            font-size: clamp(2rem, 10vw, 3.5rem);
            margin-bottom: 1.5rem;
          }

          .join-link {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .auth-buttons {
            flex-direction: column;
            gap: 0.5rem;
          }

          .btn {
            width: 100%;
            min-width: 120px;
          }
        }
      `}</style>
    </div>
  );
}
