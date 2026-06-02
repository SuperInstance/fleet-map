// SuperInstance Fork Fleet — Conservation-Aware Stars
const fleet = [
  { name: "ollama", stars: 172000, status: "enhanced", feature: "Model Conservation Guardian", metric: "67GB VRAM saved on idle models", lang: "Go", color: "#00d4aa" },
  { name: "dify", stars: 143000, status: "enhanced", feature: "Workflow Conservation Engine", metric: "$47→$12/day same quality", lang: "Python", color: "#00d4aa" },
  { name: "tauri", stars: 107000, status: "enhanced", feature: "App Size Guardian", metric: "12.3MB → 8.1MB binary", lang: "Rust", color: "#00d4aa" },
  { name: "deno", stars: 103000, status: "enhanced", feature: "Resource Guardian", metric: "3 routes = 62% of build time", lang: "Rust/TS", color: "#00d4aa" },
  { name: "open-webui", stars: 100000, status: "enhanced", feature: "Bug fixes + conservation", metric: "Fixed _parse_ts() production bug", lang: "Python", color: "#00d4aa" },
  { name: "codex", stars: 87000, status: "enhanced", feature: "Budget Guard", metric: "Token budget per session", lang: "Rust", color: "#00d4aa" },
  { name: "uv", stars: 85000, status: "enhanced", feature: "Cache Guardian", metric: "34%→78% cache hits", lang: "Rust", color: "#00d4aa" },
  { name: "foundry", stars: 85000, status: "enhanced", feature: "Gas Guardian", metric: "Budget enforcement + regression detection", lang: "Rust", color: "#00d4aa" },
  { name: "aider", stars: 45000, status: "enhanced", feature: "Token Conservation", metric: "$89→$31, couldn't tell the difference", lang: "Python", color: "#00d4aa" },
  { name: "lapce", stars: 35000, status: "enhanced", feature: "Coverage Gap Finder", metric: "Finds what your tests miss", lang: "Rust", color: "#00d4aa" },
  { name: "surrealdb", stars: 32000, status: "enhanced", feature: "Record Graph Spectral Analysis", metric: "Fiedler sharding + bridge records", lang: "Rust", color: "#00d4aa" },
  { name: "tokio", stars: 29000, status: "enhanced", feature: "Task Intelligence (crackle)", metric: "Spectral task graph analysis", lang: "Rust", color: "#00d4aa" },
  { name: "ratatui", stars: 27000, status: "enhanced", feature: "Render Budget Guardian", metric: "12ms frame → which widget's fault?", lang: "Rust", color: "#00d4aa" },
  { name: "zed", stars: 57000, status: "enhanced", feature: "Editor Intelligence", metric: "Spectral codebase analysis", lang: "Rust", color: "#00d4aa" },
  { name: "typst", stars: 38000, status: "enhanced", feature: "Document Intelligence", metric: "Layout conservation", lang: "Rust", color: "#00d4aa" },
  { name: "weaviate", stars: 14000, status: "enhanced", feature: "Vector Spectral Intelligence", metric: "HNSW → Fiedler → clusters", lang: "Go", color: "#00d4aa" },
  { name: "chroma", stars: 18000, status: "enhanced", feature: "Collection Spectral Analysis", metric: "Cheeger constant + embedding drift", lang: "Python", color: "#00d4aa" },
  { name: "qdrant", stars: 22000, status: "enhanced", feature: "HNSW Spectral Analysis", metric: "23 clusters in 1M vectors, labeled 8", lang: "Rust", color: "#00d4aa" },
  { name: "meilisearch", stars: 50000, status: "enhanced", feature: "Search Spectral Intelligence", metric: "Fiedler + drift detection", lang: "Rust", color: "#00d4aa" },
];

// Pattern connections — repos sharing guardian patterns
const connections = [
  // Budget Guardian pattern
  ["ollama", "codex", "dify", "uv", "aider"],
  // Spectral Analysis pattern
  ["qdrant", "chroma", "weaviate", "meilisearch", "surrealdb"],
  // Render/Size pattern
  ["tauri", "ratatui", "typst"],
  // Rust ecosystem
  ["tokio", "foundry", "deno", "zed"],
];

const totalStars = fleet.reduce((s, f) => s + f.stars, 0);
const enhancedStars = fleet.filter(f => f.status === "enhanced").reduce((s, f) => s + f.stars, 0);
