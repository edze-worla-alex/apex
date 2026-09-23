const cards = [
  {
    title: "Vite + React",
    body: "Hot module reload dev server, running inside the Alloy Docker Compose stack.",
  },
  {
    title: "TypeScript",
    body: "Strict type checking is wired up through tsconfig.json and the build script.",
  },
  {
    title: "Alloy ready",
    body: "docker-compose.alloy.yaml and .alloy/environment.json are checked into the repo.",
  },
];

export default function App() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "64px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      <header style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span
          style={{
            alignSelf: "flex-start",
            padding: "4px 12px",
            borderRadius: 999,
            background: "#e3ecfb",
            color: "#1d4ed8",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 0.3,
          }}
        >
          Apex
        </span>
        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.15 }}>
          Your development environment is running
        </h1>
        <p style={{ margin: 0, fontSize: 18, color: "#4a5a70", maxWidth: 620 }}>
          This starter app confirms the sandbox can install dependencies, serve
          the frontend, and render a page end to end.
        </p>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            style={{
              background: "#ffffff",
              border: "1px solid #e1e7f0",
              borderRadius: 12,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 17 }}>{card.title}</h2>
            <p style={{ margin: 0, fontSize: 15, color: "#54637a" }}>
              {card.body}
            </p>
          </article>
        ))}
      </section>

      <footer style={{ fontSize: 14, color: "#6b7a90" }}>
        Edit <code>src/App.tsx</code> and the page reloads automatically.
      </footer>
    </main>
  );
}
