import './Legend.css';

export default function Legend() {
  return (
    <div className="legend">
      <div className="legend-item">
        <div className="legend-light">
          <div className="light-halo-outer"></div>
          <div className="light-halo-middle"></div>
          <div className="light-glow"></div>
          <div className="light-core"></div>
        </div>
        <span className="legend-text">Éclairage public</span>
      </div>
      <div className="legend-info">
        Carte nocturne de Bordeaux
      </div>
    </div>
  );
}
