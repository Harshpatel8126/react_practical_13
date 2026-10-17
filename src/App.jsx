
import { useState } from "react";
import {
  HashRouter,
  MemoryRouter,
  StaticRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Reusable demo page
function DemoPage({ type }) {
  const location = useLocation();

  return (
    <div className="mt-4 rounded-xl bg-slate-50 border p-4">
      <p className="text-sm text-slate-500">Current route</p>
      <h3 className="text-xl font-bold text-violet-700 mt-1">
        {location.pathname}
      </h3>

      <div className="flex flex-wrap gap-2 mt-4">
        <Link
          to="/"
          className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="rounded-lg bg-violet-600 text-white px-4 py-2 text-sm font-semibold"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold"
        >
          Contact
        </Link>
      </div>

      <p className="text-sm text-slate-500 mt-4">
        {type}
      </p>
    </div>
  );
}

// HashRouter demonstration
function HashDemo() {
  return (
    <HashRouter>
      <DemoPage type="Check the browser URL: it uses #." />
    </HashRouter>
  );
}

// MemoryRouter demonstration
function MemoryDemo() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <DemoPage type="Navigation is stored in memory, not in the URL." />
    </MemoryRouter>
  );
}

// StaticRouter demonstration
function StaticDemo() {
  return (
    <StaticRouter location="/about">
      <DemoPage type="Fixed route for server rendering; links do not navigate." />
    </StaticRouter>
  );
}

const routerData = [
  {
    name: "HashRouter",
    icon: "🔗",
    color: "border-violet-400",
    description: "Uses the URL hash (#) to identify the current page.",
    use: "Static websites, GitHub Pages, simple hosting.",
  },
  {
    name: "MemoryRouter",
    icon: "🧠",
    color: "border-sky-400",
    description: "Stores navigation history in JavaScript memory.",
    use: "Unit tests, React Native, embedded workflows.",
  },
  {
    name: "StaticRouter",
    icon: "🖥️",
    color: "border-emerald-400",
    description: "Renders a route at a specified location without browser navigation.",
    use: "Server-side rendering (SSR) and server-generated HTML.",
  },
];

export default function App() {
  const [selected, setSelected] = useState("HashRouter");

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-slate-950 text-white px-6 py-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-violet-300 uppercase tracking-widest text-sm font-bold">
            React Practical 03
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-3">
            Router<span className="text-violet-400">Lab.</span>
          </h1>
          <p className="text-slate-300 mt-3">
            Explore three React Router types in one interactive lab.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-5 md:p-10">
        {/* Router overview */}
        <section className="grid md:grid-cols-3 gap-5">
          {routerData.map((router) => (
            <button
              key={router.name}
              onClick={() => setSelected(router.name)}
              className={`text-left bg-white border-t-4 ${router.color}
                rounded-2xl p-5 shadow-sm hover:shadow-lg transition
                ${selected === router.name ? "ring-2 ring-violet-300" : ""}`}
            >
              <span className="text-3xl">{router.icon}</span>
              <h2 className="text-xl font-extrabold mt-3">
                {router.name}
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                {router.description}
              </p>
              <p className="text-sm font-semibold text-violet-700 mt-4">
                Explore router →
              </p>
            </button>
          ))}
        </section>

        {/* Selected router details */}
        <section className="bg-white rounded-2xl shadow-sm p-5 md:p-8 mt-8">
          <p className="text-sm font-bold text-violet-700">
            INTERACTIVE DEMONSTRATION
          </p>
          <h2 className="text-2xl font-extrabold mt-2">
            {selected}
          </h2>

          <p className="text-slate-600 mt-2">
            Where it is useful:{" "}
            {routerData.find((r) => r.name === selected).use}
          </p>

          {selected === "HashRouter" && <HashDemo />}
          {selected === "MemoryRouter" && <MemoryDemo />}
          {selected === "StaticRouter" && <StaticDemo />}
        </section>

        {/* Comparison table */}
        <section className="mt-8 bg-white rounded-2xl shadow-sm p-5 md:p-8">
          <h2 className="text-2xl font-extrabold mb-4">
            ⚡ Quick Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3">Router</th>
                  <th className="p-3">URL changes?</th>
                  <th className="p-3">Best use</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-bold">HashRouter</td>
                  <td className="p-3">Yes, hash changes</td>
                  <td className="p-3">Static hosting</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-bold">MemoryRouter</td>
                  <td className="p-3">No</td>
                  <td className="p-3">Tests and memory-based navigation</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">StaticRouter</td>
                  <td className="p-3">No browser navigation</td>
                  <td className="p-3">Server rendering</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer className="text-center text-slate-500 text-sm py-8">
          RouterLab • Learn React Router by exploring
        </footer>
      </main>
    </div>
  );
}
