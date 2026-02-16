export default function Home() {
  return (
    <main style={{ padding: "60px", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "40px" }}>TrueBuild Connect</h1>
      <p style={{ marginTop: "20px" }}>
        Connecting homeowners with trusted carpenters.
      </p>

      <div style={{ marginTop: "40px" }}>
        <button style={{ padding: "14px 24px", marginRight: "12px" }}>
          Post a Job
        </button>
        <button style={{ padding: "14px 24px" }}>
          Join as Carpenter
        </button>
      </div>
    </main>
  );
}
