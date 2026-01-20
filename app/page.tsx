import { Hero } from "./components/Hero";
import { MortgageCta } from "./components/MortgageCta";
import { ExploreEmirates } from "./components/ExploreEmirates";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero />

      <ExploreEmirates />

      <MortgageCta />
    </div>
  );
}
