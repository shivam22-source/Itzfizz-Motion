import Hero from "./components/Hero";

export default function App() {
  return (
    <main>
      <Hero />

      <section className="closing-section" aria-labelledby="closing-title">
        <div className="page-shell closing-content">
          <p className="eyebrow">A small motion study</p>
          <h2 id="closing-title">
            Good motion should explain the page, not distract from it.
          </h2>
          <p>
            This demo keeps the interaction focused on one scroll-linked idea:
            a visual that moves with the reader.
          </p>
        </div>
      </section>
    </main>
  );
}
