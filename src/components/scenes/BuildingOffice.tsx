import { motion } from "framer-motion";

// Solid building view
export const BuildingSolid = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full">
    {/* Sky gradient */}
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(220, 25%, 12%)" />
        <stop offset="100%" stopColor="hsl(220, 25%, 8%)" />
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#sky)" />
    
    {/* Building */}
    <rect x="80" y="40" width="140" height="130" rx="4" fill="hsl(220, 20%, 18%)" stroke="hsl(220, 15%, 28%)" strokeWidth="1" />
    
    {/* Windows */}
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={100 + col * 35}
          y={55 + row * 28}
          width="20"
          height="16"
          rx="2"
          fill="hsl(190, 80%, 50%)"
          opacity={0.3 + Math.random() * 0.4}
        />
      ))
    )}
    
    {/* Door */}
    <rect x="138" y="145" width="24" height="25" rx="2" fill="hsl(190, 80%, 50%)" opacity="0.5" />
    
    {/* Ground */}
    <rect x="0" y="170" width="300" height="30" fill="hsl(220, 20%, 12%)" />
  </svg>
);

// X-ray network view
export const BuildingNetworkXray = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full">
    <defs>
      <linearGradient id="netSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(220, 25%, 8%)" />
        <stop offset="100%" stopColor="hsl(220, 30%, 5%)" />
      </linearGradient>
    </defs>
    <rect width="300" height="200" fill="url(#netSky)" />
    
    {/* Building wireframe */}
    <rect x="80" y="40" width="140" height="130" rx="4" fill="none" stroke="hsl(190, 80%, 50%)" strokeWidth="0.5" opacity="0.3" />
    
    {/* Floor lines */}
    {[0, 1, 2, 3].map((i) => (
      <line key={i} x1="80" y1={70 + i * 28} x2="220" y2={70 + i * 28} stroke="hsl(190, 80%, 50%)" strokeWidth="0.3" opacity="0.2" />
    ))}
    
    {/* Router / AP center */}
    <motion.circle
      cx="150" cy="90" r="5"
      fill="hsl(190, 80%, 50%)"
      animate={{ r: [5, 6, 5], opacity: [1, 0.8, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    
    {/* WiFi waves */}
    {[20, 35, 50].map((r, i) => (
      <motion.circle
        key={i}
        cx="150" cy="90" r={r}
        fill="none"
        stroke="hsl(190, 80%, 50%)"
        strokeWidth="0.8"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 0.1, 0.4], r: [r, r + 5, r] }}
        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
      />
    ))}
    
    {/* Devices - desks with connections */}
    {[
      { x: 110, y: 120 },
      { x: 150, y: 130 },
      { x: 190, y: 115 },
      { x: 120, y: 150 },
      { x: 175, y: 148 },
    ].map((pos, i) => (
      <g key={i}>
        <motion.line
          x1="150" y1="90" x2={pos.x} y2={pos.y}
          stroke="hsl(190, 80%, 50%)"
          strokeWidth="0.5"
          strokeDasharray="3,3"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
        />
        <motion.rect
          x={pos.x - 4} y={pos.y - 3} width="8" height="6" rx="1"
          fill="hsl(190, 80%, 50%)"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      </g>
    ))}
    
    {/* Cable lines */}
    <line x1="150" y1="95" x2="150" y2="170" stroke="hsl(260, 60%, 60%)" strokeWidth="1" opacity="0.4" />
    <line x1="150" y1="170" x2="80" y2="170" stroke="hsl(260, 60%, 60%)" strokeWidth="1" opacity="0.4" />
    
    <rect x="0" y="180" width="300" height="20" fill="hsl(220, 25%, 6%)" />
  </svg>
);

// X-ray monitoring view
export const BuildingMonitoringXray = () => (
  <svg viewBox="0 0 300 200" className="w-full h-full">
    <rect width="300" height="200" fill="hsl(220, 30%, 5%)" />
    
    {/* Building wireframe */}
    <rect x="80" y="40" width="140" height="130" rx="4" fill="none" stroke="hsl(190, 80%, 50%)" strokeWidth="0.5" opacity="0.3" />
    
    {/* Cameras */}
    {[
      { x: 90, y: 50, angle: 45 },
      { x: 210, y: 50, angle: 135 },
      { x: 90, y: 100, angle: 30 },
      { x: 210, y: 100, angle: 150 },
    ].map((cam, i) => {
      const rad = (cam.angle * Math.PI) / 180;
      const len = 60;
      const spread = 25;
      const endX = cam.x + Math.cos(rad) * len;
      const endY = cam.y + Math.sin(rad) * len;
      const spreadX1 = cam.x + Math.cos(rad - 0.4) * len;
      const spreadY1 = cam.y + Math.sin(rad - 0.4) * len;
      const spreadX2 = cam.x + Math.cos(rad + 0.4) * len;
      const spreadY2 = cam.y + Math.sin(rad + 0.4) * len;

      return (
        <g key={i}>
          {/* Camera cone */}
          <motion.polygon
            points={`${cam.x},${cam.y} ${spreadX1},${spreadY1} ${spreadX2},${spreadY2}`}
            fill="hsl(0, 80%, 55%)"
            opacity={0.15}
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          />
          {/* Camera body */}
          <circle cx={cam.x} cy={cam.y} r="4" fill="hsl(0, 80%, 55%)" />
          <motion.circle
            cx={cam.x} cy={cam.y} r="2"
            fill="hsl(0, 90%, 70%)"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </g>
      );
    })}
    
    {/* Recording indicator */}
    <motion.circle
      cx="150" cy="175" r="3"
      fill="hsl(0, 80%, 55%)"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ duration: 1, repeat: Infinity }}
    />
    <text x="160" y="178" fill="hsl(0, 80%, 55%)" fontSize="8" fontFamily="monospace">REC</text>
    
    <rect x="0" y="185" width="300" height="15" fill="hsl(220, 25%, 6%)" />
  </svg>
);

// Office with computer - Excel to app
export const OfficeComputerMicro = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 300 200" className="w-full h-full">
    <rect width="300" height="200" fill="hsl(220, 30%, 6%)" />
    
    {/* Desk */}
    <rect x="60" y="130" width="180" height="6" rx="2" fill="hsl(220, 15%, 22%)" />
    <rect x="70" y="136" width="4" height="40" fill="hsl(220, 15%, 18%)" />
    <rect x="226" y="136" width="4" height="40" fill="hsl(220, 15%, 18%)" />
    
    {/* Monitor */}
    <rect x="100" y="55" width="100" height="70" rx="4" fill="hsl(220, 20%, 14%)" stroke="hsl(220, 15%, 28%)" strokeWidth="1" />
    <rect x="140" y="125" width="20" height="8" fill="hsl(220, 15%, 20%)" />
    
    {/* Screen content */}
    {!active ? (
      <g>
        <rect x="108" y="62" width="84" height="56" fill="hsl(140, 60%, 25%)" rx="1" />
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={110 + col * 27}
              y={65 + row * 13}
              width="25"
              height="11"
              fill="hsl(140, 50%, 30%)"
              stroke="hsl(140, 40%, 35%)"
              strokeWidth="0.5"
            />
          ))
        )}
      </g>
    ) : (
      /* App UI on phone */
      <g>
        {/* Arrow showing transformation */}
        <motion.path
          d="M 145 90 L 155 90"
          stroke="hsl(190, 80%, 50%)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Phone on screen */}
        <rect x="125" y="64" width="50" height="52" rx="6" fill="hsl(220, 25%, 12%)" stroke="hsl(190, 80%, 50%)" strokeWidth="1" />
        {/* App UI elements */}
        <rect x="130" y="70" width="40" height="4" rx="1" fill="hsl(190, 80%, 50%)" opacity="0.7" />
        <rect x="130" y="78" width="30" height="3" rx="1" fill="hsl(190, 80%, 50%)" opacity="0.4" />
        <rect x="130" y="84" width="40" height="8" rx="2" fill="hsl(260, 60%, 60%)" opacity="0.5" />
        <rect x="130" y="95" width="40" height="8" rx="2" fill="hsl(260, 60%, 60%)" opacity="0.3" />
        <rect x="130" y="106" width="25" height="6" rx="3" fill="hsl(190, 80%, 50%)" opacity="0.8" />
      </g>
    )}
    
    {/* Keyboard */}
    <rect x="115" y="134" width="70" height="8" rx="2" fill="hsl(220, 15%, 18%)" />
  </svg>
);

// Office with computer - Website to code
export const OfficeComputerWeb = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 300 200" className="w-full h-full">
    <rect width="300" height="200" fill="hsl(220, 30%, 6%)" />
    
    {/* Desk */}
    <rect x="60" y="130" width="180" height="6" rx="2" fill="hsl(220, 15%, 22%)" />
    <rect x="70" y="136" width="4" height="40" fill="hsl(220, 15%, 18%)" />
    <rect x="226" y="136" width="4" height="40" fill="hsl(220, 15%, 18%)" />
    
    {/* Monitor */}
    <rect x="100" y="55" width="100" height="70" rx="4" fill="hsl(220, 20%, 14%)" stroke="hsl(220, 15%, 28%)" strokeWidth="1" />
    <rect x="140" y="125" width="20" height="8" fill="hsl(220, 15%, 20%)" />
    
    {/* Screen content */}
    {!active ? (
      <g>
        <rect x="108" y="62" width="84" height="56" fill="hsl(220, 20%, 16%)" rx="1" />
        {/* Header */}
        <rect x="108" y="62" width="84" height="10" fill="hsl(190, 80%, 50%)" opacity="0.3" rx="1" />
        {/* Hero */}
        <rect x="112" y="76" width="50" height="4" rx="1" fill="hsl(210, 40%, 70%)" opacity="0.6" />
        <rect x="112" y="82" width="35" height="3" rx="1" fill="hsl(210, 40%, 70%)" opacity="0.3" />
        <rect x="112" y="88" width="20" height="6" rx="2" fill="hsl(190, 80%, 50%)" opacity="0.5" />
        {/* Cards */}
        <rect x="112" y="98" width="24" height="16" rx="2" fill="hsl(220, 15%, 22%)" />
        <rect x="140" y="98" width="24" height="16" rx="2" fill="hsl(220, 15%, 22%)" />
        <rect x="168" y="98" width="20" height="16" rx="2" fill="hsl(220, 15%, 22%)" />
      </g>
    ) : (
      /* Code view */
      <g>
        <rect x="108" y="62" width="84" height="56" fill="hsl(220, 30%, 10%)" rx="1" />
        {[
          { x: 112, w: 15, color: "hsl(260, 60%, 60%)" },
          { x: 129, w: 25, color: "hsl(190, 80%, 50%)" },
          { x: 116, w: 30, color: "hsl(40, 80%, 60%)" },
          { x: 116, w: 20, color: "hsl(190, 80%, 50%)" },
          { x: 120, w: 35, color: "hsl(210, 40%, 70%)" },
          { x: 120, w: 25, color: "hsl(140, 60%, 50%)" },
          { x: 116, w: 15, color: "hsl(260, 60%, 60%)" },
          { x: 112, w: 10, color: "hsl(260, 60%, 60%)" },
        ].map((line, i) => (
          <motion.rect
            key={i}
            x={line.x}
            y={65 + i * 6}
            width={line.w}
            height="3"
            rx="1"
            fill={line.color}
            opacity={0.7}
            initial={{ width: 0 }}
            animate={{ width: line.w }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          />
        ))}
      </g>
    )}
    
    {/* Keyboard */}
    <rect x="115" y="134" width="70" height="8" rx="2" fill="hsl(220, 15%, 18%)" />
  </svg>
);