import { useState, useEffect } from 'react';

interface MicrotoolsSceneProps {
  active: boolean;
}

const excelRows = [
  ['Projekt', 'Status', 'Termin', 'Priorytet'],
  ['Sieć biuro', 'W toku', '15.04', 'Wysoki'],
  ['Monitoring', 'Gotowe', '08.04', 'Wysoki'],
  ['Strona WWW', 'Planowe', '22.04', 'Średni'],
  ['Panel CRM', 'W toku', '30.04', 'Niski'],
];

const appItems = [
  { icon: '✅', label: 'Sieć biuro', status: 'W toku', statusColor: 'hsl(var(--accent))' },
  { icon: '✅', label: 'Monitoring', status: 'Gotowe', statusColor: 'hsl(160, 70%, 50%)' },
  { icon: '⏳', label: 'Strona WWW', status: 'Planowe', statusColor: 'hsl(var(--primary))' },
];

export const MicrotoolsScene = ({ active }: MicrotoolsSceneProps) => {
  const [phase, setPhase] = useState<'excel' | 'transition' | 'app'>('excel');

  useEffect(() => {
    if (!active) {
      setPhase('excel');
      return;
    }
    setPhase('excel');
    const t1 = setTimeout(() => setPhase('transition'), 1500);
    const t2 = setTimeout(() => setPhase('app'), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setPhase('excel');
      setTimeout(() => setPhase('transition'), 1500);
      setTimeout(() => setPhase('app'), 2000);
    }, 6000);
    return () => clearInterval(interval);
  }, [active]);

  const color = 'hsl(var(--primary))';

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div
        className="relative rounded-lg overflow-hidden w-full h-full"
        style={{
          background: 'hsl(var(--card))',
          border: `1px solid hsl(var(--border))`,
        }}
      >
        {/* Top bar */}
        <div
          className="flex items-center gap-1 px-2 py-1.5"
          style={{ background: 'hsl(var(--muted))', borderBottom: `1px solid hsl(var(--border))` }}
        >
          <div className="w-2 h-2 rounded-full bg-destructive opacity-70" />
          <div className="w-2 h-2 rounded-full opacity-70" style={{ background: '#F59E0B' }} />
          <div className="w-2 h-2 rounded-full opacity-70" style={{ background: '#10D9A0' }} />
          <span className="ml-1.5 text-muted-foreground" style={{ fontSize: 8 }}>
            {phase === 'app' ? 'MicroApp — Panel' : 'arkusz.xlsx'}
          </span>
        </div>

        {/* Content */}
        <div
          className="overflow-hidden"
          style={{
            height: 'calc(100% - 28px)',
            transition: 'opacity 0.4s ease',
            opacity: phase === 'transition' ? 0 : 1,
          }}
        >
          {phase !== 'app' && (
            <div className="p-2">
              <table className="w-full text-left" style={{ fontSize: 7 }}>
                <thead>
                  <tr style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                    {excelRows[0].map((h) => (
                      <th key={h} className="px-1 py-0.5 font-bold text-primary" style={{ borderBottom: `1px solid hsl(var(--border))` }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {excelRows.slice(1).map((row, ri) => (
                    <tr key={ri} style={{ borderBottom: `1px solid hsl(var(--border) / 0.3)` }}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-1 py-0.5 text-muted-foreground" style={{ fontSize: 7 }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {phase === 'app' && (
            <div className="p-2 flex flex-col gap-1.5">
              <div className="flex items-center justify-between pb-1" style={{ borderBottom: `1px solid hsl(var(--border))` }}>
                <span className="font-bold text-primary" style={{ fontSize: 8 }}>Panel zadań</span>
                <span className="text-muted-foreground" style={{ fontSize: 7 }}>3 aktywne</span>
              </div>
              {appItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 p-1.5 rounded-md"
                  style={{ background: 'hsl(var(--muted) / 0.5)', border: `1px solid hsl(var(--border) / 0.5)` }}
                >
                  <span style={{ fontSize: 10 }}>{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-foreground font-medium" style={{ fontSize: 8 }}>{item.label}</div>
                    <div style={{ fontSize: 7, color: item.statusColor }}>{item.status}</div>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.statusColor }} />
                </div>
              ))}
              <div className="text-center text-muted-foreground mt-1" style={{ fontSize: 7 }}>
                ✨ Excel → MicroApp
              </div>
            </div>
          )}
        </div>
      </div>

      {phase === 'transition' && (
        <div className="absolute inset-0 flex items-center justify-center text-primary" style={{ fontSize: 24, opacity: 0.8 }}>
          ⟶
        </div>
      )}
    </div>
  );
};

// --- Website Scene ---

interface WebsiteSceneProps {
  active: boolean;
}

const websiteLines = [
  { w: '70%', opacity: 0.8, h: 6 },
  { w: '50%', opacity: 0.3, h: 4 },
  { w: '90%', opacity: 0.15, h: 3 },
  { w: '80%', opacity: 0.15, h: 3 },
  { w: '60%', opacity: 0.1, h: 3 },
];

const codeLines = [
  { text: '<html lang="pl">', color: '#F59E0B' },
  { text: '  <head>', color: '#6366F1' },
  { text: '    <title>NetSolution</title>', color: '#10D9A0' },
  { text: '  </head>', color: '#6366F1' },
  { text: '  <body>', color: '#6366F1' },
  { text: '    <nav class="glass">', color: '#0EA5E9' },
  { text: '      <Logo />', color: '#F59E0B' },
  { text: '    </nav>', color: '#0EA5E9' },
  { text: '    <main>', color: '#6366F1' },
  { text: '      <h1>NetSolution</h1>', color: '#10D9A0' },
  { text: '    </main>', color: '#6366F1' },
  { text: '  </body>', color: '#6366F1' },
  { text: '</html>', color: '#F59E0B' },
];

export const WebsiteScene = ({ active }: WebsiteSceneProps) => {
  const [phase, setPhase] = useState<'website' | 'transition' | 'code'>('website');

  useEffect(() => {
    if (!active) {
      setPhase('website');
      return;
    }
    setPhase('website');
    const t1 = setTimeout(() => setPhase('transition'), 1500);
    const t2 = setTimeout(() => setPhase('code'), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      setPhase('website');
      setTimeout(() => setPhase('transition'), 1500);
      setTimeout(() => setPhase('code'), 1800);
    }, 6000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div
        className="relative rounded-lg overflow-hidden w-full h-full"
        style={{
          background: 'hsl(var(--card))',
          border: `1px solid hsl(var(--border))`,
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-1 px-2 py-1.5"
          style={{ background: 'hsl(var(--muted))', borderBottom: `1px solid hsl(var(--border))` }}
        >
          <div className="w-2 h-2 rounded-full bg-destructive opacity-70" />
          <div className="w-2 h-2 rounded-full opacity-70" style={{ background: '#F59E0B' }} />
          <div className="w-2 h-2 rounded-full opacity-70" style={{ background: '#10D9A0' }} />
          <div className="ml-1.5 flex-1 rounded px-1.5 py-0.5 text-muted-foreground" style={{ background: 'hsl(var(--muted))', fontSize: 7 }}>
            {phase === 'code' ? 'index.html — VS Code' : 'netsolution.pl'}
          </div>
        </div>

        {/* Content */}
        <div
          className="relative overflow-hidden"
          style={{
            height: 'calc(100% - 28px)',
            transition: 'opacity 0.4s ease',
            opacity: phase === 'transition' ? 0 : 1,
          }}
        >
          {phase !== 'code' && (
            <div className="p-2">
              <div className="flex items-center justify-between mb-2 pb-1" style={{ borderBottom: `1px solid hsl(var(--border))` }}>
                <div className="w-12 h-2 rounded bg-primary opacity-70" />
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-1.5 rounded bg-muted-foreground/20" />
                  ))}
                </div>
              </div>
              <div className="rounded-md p-2" style={{ background: 'hsl(var(--primary) / 0.05)', border: `1px solid hsl(var(--primary) / 0.15)` }}>
                {websiteLines.map((line, i) => (
                  <div
                    key={i}
                    className="rounded mb-1"
                    style={{
                      width: line.w,
                      height: line.h,
                      background: i === 0 ? 'hsl(var(--primary))' : 'hsl(var(--foreground))',
                      opacity: line.opacity,
                    }}
                  />
                ))}
                <div className="mt-1.5 rounded px-2 py-0.5 inline-block bg-primary opacity-80">
                  <div className="w-8 h-1.5 rounded" style={{ background: 'hsl(var(--primary-foreground))' }} />
                </div>
              </div>
            </div>
          )}

          {phase === 'code' && (
            <div className="p-2 font-mono overflow-hidden" style={{ height: '100%' }}>
              <div style={{ animation: 'codeScroll 6s linear infinite' }}>
                {[...codeLines, ...codeLines].map((line, i) => (
                  <div key={i} className="flex items-center gap-1 mb-px" style={{ fontSize: 7 }}>
                    <span className="text-muted-foreground/30" style={{ minWidth: 12, fontSize: 6 }}>
                      {(i % codeLines.length) + 1}
                    </span>
                    <span style={{ color: line.color }}>{line.text}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};