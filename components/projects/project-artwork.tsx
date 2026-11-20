type ProjectArtworkProps = {
  variant: "get-it-done" | "forge" | "data-structures" | "learnable";
};

export function HomepageGetItDoneArtwork() {
  return (
    <div className="featured-project__diagram" aria-hidden="true">
      <svg
        className="featured-project__diagram-svg"
        viewBox="0 0 620 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M112 112H508M112 112V358M508 112V358M112 358H508" stroke="currentColor" strokeOpacity="0.45" />
        <path d="M112 112L310 235L508 112M112 358L310 235L508 358" stroke="#FF784F" strokeOpacity="0.75" strokeWidth="2" />
        <path d="M310 235V112M310 235V358" stroke="currentColor" strokeOpacity="0.35" />

        <rect x="48" y="48" width="128" height="64" fill="#202020" stroke="currentColor" />
        <rect x="246" y="203" width="128" height="64" fill="#202020" stroke="#FF784F" />
        <rect x="444" y="48" width="128" height="64" fill="#202020" stroke="currentColor" />
        <rect x="48" y="358" width="128" height="64" fill="#202020" stroke="currentColor" />
        <rect x="444" y="358" width="128" height="64" fill="#202020" stroke="currentColor" />

        <circle cx="112" cy="112" r="5" fill="#FF784F" />
        <circle cx="310" cy="235" r="7" fill="#FF784F" />
        <circle cx="508" cy="112" r="5" fill="#FF784F" />
        <circle cx="112" cy="358" r="5" fill="#F1EFEA" />
        <circle cx="508" cy="358" r="5" fill="#F1EFEA" />

        <path d="M72 78H152M270 233H350M468 78H548M72 388H152M468 388H548" stroke="currentColor" strokeOpacity="0.65" />
        <path d="M80 92H128M278 247H342M476 92H524M80 402H128M476 402H524" stroke="#FF784F" strokeOpacity="0.55" />
      </svg>
      <div className="featured-project__diagram-label featured-project__diagram-label--people">PEOPLE</div>
      <div className="featured-project__diagram-label featured-project__diagram-label--skills">SKILLS</div>
      <div className="featured-project__diagram-label featured-project__diagram-label--posts">POSTS</div>
      <div className="featured-project__diagram-label featured-project__diagram-label--tasks">TASKS</div>
      <div className="featured-project__diagram-label featured-project__diagram-label--core">CORE</div>
    </div>
  );
}

export function HomepageForgeArtwork() {
  return (
    <svg className="selected-project__visual" viewBox="0 0 520 300" role="img" aria-label="Modular automation toolkit diagram">
      <path className="selected-project__line" d="M70 150h380M260 58v184" />
      <circle className="selected-project__node selected-project__node--accent" cx="260" cy="150" r="14" />
      <g className="selected-project__module">
        <rect x="42" y="28" width="118" height="58" />
        <text x="61" y="63">ENV</text>
        <rect x="360" y="28" width="118" height="58" />
        <text x="382" y="63">FILES</text>
        <rect x="42" y="214" width="118" height="58" />
        <text x="64" y="249">APPS</text>
        <rect x="360" y="214" width="118" height="58" />
        <text x="378" y="249">HISTORY</text>
      </g>
    </svg>
  );
}

export function HomepageDataStructuresArtwork() {
  return (
    <svg className="selected-project__visual selected-project__visual--structures" viewBox="0 0 520 180" role="img" aria-label="Connected nodes representing data structures">
      <path className="selected-project__line" d="M54 90h104l52-48h104l52 48h100M158 90l52 48h104l52-48" />
      {[54, 158, 262, 366, 466].map((x) => (
        <circle className="selected-project__node" cx={x} cy="90" r="13" key={`main-${x}`} />
      ))}
      {[210, 314].map((x) => (
        <circle className="selected-project__node selected-project__node--accent" cx={x} cy="42" r="10" key={`top-${x}`} />
      ))}
      {[210, 314].map((x) => (
        <circle className="selected-project__node" cx={x} cy="138" r="10" key={`bottom-${x}`} />
      ))}
    </svg>
  );
}

export function HomepageLearnableArtwork() {
  return (
    <div className="learnable-visual" aria-label="Four accessibility experiences">
      {["VOICE-ASSISTED", "VISUAL", "SIMPLIFIED", "STANDARD"].map((mode, index) => (
        <span className={`learnable-visual__mode learnable-visual__mode--${index + 1}`} key={mode}>
          {mode}
        </span>
      ))}
    </div>
  );
}

export function ProjectIndexArtwork({ variant }: ProjectArtworkProps) {
  return (
    <div className={`project-row__artwork project-row__artwork--${variant}`}>
      {variant === "get-it-done" ? <HomepageGetItDoneArtwork /> : null}
      {variant === "forge" ? <HomepageForgeArtwork /> : null}
      {variant === "data-structures" ? <HomepageDataStructuresArtwork /> : null}
      {variant === "learnable" ? <HomepageLearnableArtwork /> : null}
    </div>
  );
}

function GetItDoneArtwork() {
  return (
    <svg viewBox="0 0 620 470" aria-label="Connected project concepts for people, skills, posts, and tasks" role="img">
      <path d="M112 112H508M112 112V358M508 112V358M112 358H508M112 112L310 235L508 112M112 358L310 235L508 358M310 235V112M310 235V358" />
      <rect x="48" y="48" width="128" height="64" /><rect x="246" y="203" width="128" height="64" className="project-artwork__accent-box" /><rect x="444" y="48" width="128" height="64" /><rect x="48" y="358" width="128" height="64" /><rect x="444" y="358" width="128" height="64" />
      <circle cx="112" cy="112" r="5" /><circle cx="310" cy="235" r="7" className="project-artwork__accent" /><circle cx="508" cy="112" r="5" /><circle cx="112" cy="358" r="5" /><circle cx="508" cy="358" r="5" />
    </svg>
  );
}

function ForgeArtwork() {
  return (
    <svg viewBox="0 0 520 300" aria-label="Forge modules connected through a central toolkit" role="img">
      <path d="M70 150h380M260 58v184" />
      <circle cx="260" cy="150" r="16" className="project-artwork__accent" />
      <rect x="42" y="28" width="118" height="58" /><rect x="360" y="28" width="118" height="58" /><rect x="42" y="214" width="118" height="58" /><rect x="360" y="214" width="118" height="58" />
      <text x="61" y="63">ENV</text><text x="382" y="63">FILES</text><text x="64" y="249">APPS</text><text x="378" y="249">HISTORY</text>
    </svg>
  );
}

function DataStructuresArtwork() {
  return (
    <svg viewBox="0 0 520 240" aria-label="Branching nodes representing data structures" role="img">
      <path d="M54 120h104l52-60h104l52 60h100M158 120l52 60h104l52-60" />
      {[54, 158, 262, 366, 466].map((x) => <circle cx={x} cy="120" r="14" key={`main-${x}`} />)}
      {[210, 314].map((x) => <circle cx={x} cy="60" r="11" className="project-artwork__accent" key={`top-${x}`} />)}
      {[210, 314].map((x) => <circle cx={x} cy="180" r="11" key={`bottom-${x}`} />)}
    </svg>
  );
}

function LearnableArtwork() {
  return (
    <svg viewBox="0 0 420 300" aria-label="Four layered accessibility modes" role="img">
      <path d="M40 62h340M40 122h340M40 182h340M40 242h340" />
      <rect x="40" y="32" width="270" height="30" className="project-artwork__accent-box" /><rect x="40" y="92" width="220" height="30" /><rect x="40" y="152" width="310" height="30" /><rect x="40" y="212" width="250" height="30" className="project-artwork__accent-box" />
      <text x="54" y="52">VOICE-ASSISTED</text><text x="54" y="112">VISUAL</text><text x="54" y="172">SIMPLIFIED</text><text x="54" y="232">STANDARD</text>
    </svg>
  );
}

export function ProjectArtwork({ variant }: ProjectArtworkProps) {
  return (
    <div className={`project-artwork project-artwork--${variant}`}>
      {variant === "get-it-done" ? <GetItDoneArtwork /> : null}
      {variant === "forge" ? <ForgeArtwork /> : null}
      {variant === "data-structures" ? <DataStructuresArtwork /> : null}
      {variant === "learnable" ? <LearnableArtwork /> : null}
    </div>
  );
}
