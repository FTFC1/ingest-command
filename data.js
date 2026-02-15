// Ingest Dashboard Data Layer
// Reads from store.json, presents to HTML
// Pattern: same as HUD (update data.js, never regen HTML)
// Last updated: 2026-02-15T19:45Z

const ingestData = {
  meta: {
    totalItems: 15,
    lastUpdated: '2026-02-15T19:45Z',
    streams: [
      { id: 'S1-capture', label: 'Capture Pipeline', color: '#4ecdc4', count: 4 },
      { id: 'S2-dashboard', label: 'Context Dashboard', color: '#45b7d1', count: 2 },
      { id: 'S3-financial', label: 'Financial Clarity', color: '#f7dc6f', count: 2 },
      { id: 'S4-mikano', label: 'Mikano Enable', color: '#e74c3c', count: 1 },
      { id: 'S5-superwall', label: 'Superwall Patterns', color: '#9b59b6', count: 2 },
      { id: 'S6-packaging', label: 'Content Packaging', color: '#e67e22', count: 3 },
      { id: 'S7-puma-ux', label: 'PUMA/UX Refs', color: '#1abc9c', count: 1 },
      { id: 'S8-twin', label: 'Digital Twin', color: '#3498db', count: 3 },
      { id: 'S9-tools', label: 'Tools Ecosystem', color: '#95a5a6', count: 5 },
      { id: 'S10-content', label: 'Content Engine', color: '#f39c12', count: 2 },
      { id: 'S11-birthday', label: 'Birthday Project', color: '#e91e63', count: 0 },
      { id: 'S12-mining', label: 'Laptop Mining', color: '#00bcd4', count: 4 },
    ]
  },

  // TRIAGE LENS: items needing attention
  triage: [
    { id: '2026-02-15-015', title: '12 streams identified — INGEST LAYER = first build', urgency: 'now', type: 'decision' },
    { id: 'spike-001', title: 'SPIKE: Check HBS Helper bot on Railway — can we update?', urgency: 'now', type: 'spike' },
    { id: 'spike-002', title: 'WhatsApp Business vs API — research + GH issue', urgency: 'soon', type: 'spike' },
    { id: '2026-02-15-008', title: 'Uxcel subscription decision — ₦82,500/yr', urgency: 'soon', type: 'decision' },
    { id: '2026-02-15-003', title: 'Financial picture — needs visualization', urgency: 'week', type: 'blocked' },
  ],

  // INVENTORY LENS: what we have, by type
  inventory: {
    'screen-recording': { count: 1, label: 'Screen Recordings', items: ['2026-02-15-001'] },
    'voice-note': { count: 2, label: 'Voice Notes', items: ['2026-02-15-002', '2026-02-15-012'] },
    'brain-dump': { count: 1, label: 'Brain Dumps', items: ['2026-02-15-003'] },
    'frame-capture': { count: 8, label: 'Frame Captures', items: ['2026-02-15-004','2026-02-15-005','2026-02-15-006','2026-02-15-007','2026-02-15-008','2026-02-15-009','2026-02-15-010','2026-02-15-011'] },
    'extraction': { count: 2, label: 'Extractions', items: ['2026-02-15-013', '2026-02-15-015'] },
    'reference': { count: 1, label: 'References', items: ['2026-02-15-014'] },
  },

  // TIMELINE LENS: items by date
  timeline: [
    { date: '2026-02-15', count: 15, highlights: [
      '62-min screen recording processed',
      '17 guided frames extracted',
      '12 streams identified',
      'Ingest layer designed + build started',
      '5 principles extracted',
    ]},
  ],

  // STREAMS LENS: health check
  streamHealth: [
    { id: 'S1-capture', lastTouched: '2026-02-15', itemCount: 4, status: 'building', note: 'Ingest layer v1 in progress' },
    { id: 'S2-dashboard', lastTouched: '2026-02-15', itemCount: 2, status: 'building', note: 'This dashboard IS the build' },
    { id: 'S3-financial', lastTouched: '2026-02-15', itemCount: 2, status: 'blocked', note: 'Needs visualization, friction to address' },
    { id: 'S4-mikano', lastTouched: '2026-02-15', itemCount: 1, status: 'parked', note: 'Tomorrow: non-sales builds, rev ops angle' },
    { id: 'S5-superwall', lastTouched: '2026-02-15', itemCount: 2, status: 'reference', note: 'Funnel patterns captured, apply later' },
    { id: 'S6-packaging', lastTouched: '2026-02-15', itemCount: 3, status: 'reference', note: 'Gumroad + unbundle model documented' },
    { id: 'S7-puma-ux', lastTouched: '2026-02-15', itemCount: 1, status: 'reference', note: 'Uxcel = design ref for PUMA + dashboard' },
    { id: 'S8-twin', lastTouched: '2026-02-15', itemCount: 3, status: 'accumulating', note: '15 items in store = twin training data' },
    { id: 'S9-tools', lastTouched: '2026-02-15', itemCount: 5, status: 'documented', note: 'Full toolkit captured: extensions, apps, platforms' },
    { id: 'S10-content', lastTouched: '2026-02-15', itemCount: 2, status: 'parked', note: 'Substack + Tumblr exist, underused' },
    { id: 'S11-birthday', lastTouched: '2026-02-15', itemCount: 0, status: 'idea', note: 'Feb 19 grandma project, WhatsApp-based' },
    { id: 'S12-mining', lastTouched: '2026-02-15', itemCount: 4, status: 'ready', note: '2835 bookmarks + 1328 Eagle items + 66 tabs = minable' },
  ],

  // EDGE EFFECTS: where streams cross
  edges: [
    { streams: ['S1-capture','S2-dashboard','S8-twin','S9-tools','S10-content','S12-mining'], label: 'INGEST LAYER', note: '6 streams, one slice. Build this = both shapes emerge.' },
    { streams: ['S4-mikano','S3-financial'], label: 'FUNDING TRANSITION', note: 'Mikano funds the exit. Financial clarity enables planning.' },
    { streams: ['S5-superwall','S6-packaging','S10-content'], label: 'PRODUCT ENGINE', note: 'Patterns → packaging → distribution.' },
  ],

  // QUICK WINS
  quickWins: [
    { label: 'Drop pinned msg = pipeline spec', done: true },
    { label: 'Uxcel name recovered', done: true },
    { label: 'Raindrop 2835 bookmarks documented', done: true },
    { label: 'Chrome extensions listed', done: true },
    { label: 'HBS Helper = partial pipeline', done: true },
    { label: 'Ingest store seeded (15 items)', done: true },
    { label: 'Dashboard built', done: false },
    { label: 'HBS Helper Railway spike', done: false },
  ],
};
