interface Props {
  className?: string;
}

/**
 * Hand-built SVG: a small orchestration graph. Nodes pulse, signal travels the edges.
 * No raster assets, no generated imagery.
 */
const OrchestrationGraphic = ({ className = "" }: Props) => {
  const nodes = [
    { x: 200, y: 40, label: "" },
    { x: 60, y: 130, label: "" },
    { x: 340, y: 130, label: "" },
    { x: 200, y: 160, label: "" },
    { x: 120, y: 250, label: "" },
    { x: 280, y: 250, label: "" },
  ];
  const edges = [
    [0, 3],
    [3, 1],
    [3, 2],
    [1, 4],
    [2, 5],
    [4, 5],
  ];

  return (
    <svg viewBox="0 0 400 300" className={className} role="presentation" aria-hidden="true">
      <defs>
        <radialGradient id="og-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.12" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="400" height="300" fill="url(#og-glow)" />

      {edges.map(([a, b], i) => (
        <g key={i}>
          <line
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="hsl(var(--platinum))"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <line
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="hsl(var(--primary))"
            strokeWidth="1.2"
            strokeDasharray="6 234"
            style={{
              animation: `dash-flow ${7 + i}s linear infinite`,
              animationDelay: `${i * 0.9}s`,
            }}
          />
        </g>
      ))}

      {nodes.map((n, i) => (
        <g key={i}>
          <circle
            cx={n.x}
            cy={n.y}
            r="14"
            fill="hsl(var(--primary))"
            fillOpacity="0.05"
            stroke="hsl(var(--platinum))"
            strokeOpacity="0.14"
          />
          <circle
            cx={n.x}
            cy={n.y}
            r="3"
            fill="hsl(var(--primary))"
            style={{
              animation: `pulse-node ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        </g>
      ))}
    </svg>
  );
};

export default OrchestrationGraphic;
