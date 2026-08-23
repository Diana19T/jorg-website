import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

/**
 * Placeholder page for this phase: Header + Footer + shared primitives only.
 * Page body sections (Home, Category, New Arrivals, Collection, PDP) are
 * intentionally not built yet, per the project brief.
 */
export default function Page() {
  return (
    <main style={{ width: 1710, margin: "0 auto" }}>
      <Header />
      <div
        style={{
          minHeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#9a9a9a",
          fontFamily: "var(--font-arial)",
          fontSize: 14,
        }}
      >
        Page sections not built yet — Header + Footer only, per current scope.
      </div>
      <Footer />
    </main>
  );
}
