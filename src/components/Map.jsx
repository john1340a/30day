import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Legend from './Legend';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // Éviter de réinitialiser la carte si elle existe déjà
    if (map.current) return;

    // Initialisation de la carte MapLibre
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [-0.5792, 44.8378], // Coordonnées de Bordeaux
      zoom: 12
    });

    // Ajouter les contrôles de navigation
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    // Attendre que la carte soit chargée avant d'ajouter les données
    map.current.on('load', () => {
      // Ajouter la source de données GeoJSON
      map.current.addSource('lights', {
        type: 'geojson',
        data: '/data/lights.geojson'
      });

      // Layer 1: Halo extérieur (glow le plus large)
      map.current.addLayer({
        id: 'lights-halo-outer',
        type: 'circle',
        source: 'lights',
        paint: {
          'circle-radius': 20,
          'circle-color': '#ffd700',
          'circle-opacity': 0.15,
          'circle-blur': 1
        }
      });

      // Layer 2: Halo moyen
      map.current.addLayer({
        id: 'lights-halo-middle',
        type: 'circle',
        source: 'lights',
        paint: {
          'circle-radius': 12,
          'circle-color': '#ffd700',
          'circle-opacity': 0.3,
          'circle-blur': 0.8
        }
      });

      // Layer 3: Glow intérieur
      map.current.addLayer({
        id: 'lights-glow',
        type: 'circle',
        source: 'lights',
        paint: {
          'circle-radius': 6,
          'circle-color': '#ffd700',
          'circle-opacity': 0.6,
          'circle-blur': 0.6
        }
      });

      // Layer 4: Core (centre lumineux)
      map.current.addLayer({
        id: 'lights-core',
        type: 'circle',
        source: 'lights',
        paint: {
          'circle-radius': 3,
          'circle-color': '#ffffff',
          'circle-opacity': 0.95,
          'circle-blur': 0.2
        }
      });

      // Animation de pulsation réaliste
      let phase = 0;
      const animateLights = () => {
        phase += 0.005;

        // Chaque lampe pulse à une vitesse légèrement différente pour plus de réalisme
        const baseOpacity1 = 0.15 + Math.sin(phase) * 0.05;
        const baseOpacity2 = 0.3 + Math.sin(phase * 1.2) * 0.08;
        const baseOpacity3 = 0.6 + Math.sin(phase * 0.9) * 0.1;
        const baseOpacity4 = 0.95 + Math.sin(phase * 1.5) * 0.05;

        const baseRadius1 = 20 + Math.sin(phase * 0.8) * 2;
        const baseRadius2 = 12 + Math.sin(phase * 1.1) * 1.5;
        const baseRadius3 = 6 + Math.sin(phase * 1.3) * 0.8;

        map.current.setPaintProperty('lights-halo-outer', 'circle-opacity', baseOpacity1);
        map.current.setPaintProperty('lights-halo-outer', 'circle-radius', baseRadius1);

        map.current.setPaintProperty('lights-halo-middle', 'circle-opacity', baseOpacity2);
        map.current.setPaintProperty('lights-halo-middle', 'circle-radius', baseRadius2);

        map.current.setPaintProperty('lights-glow', 'circle-opacity', baseOpacity3);
        map.current.setPaintProperty('lights-glow', 'circle-radius', baseRadius3);

        map.current.setPaintProperty('lights-core', 'circle-opacity', baseOpacity4);

        requestAnimationFrame(animateLights);
      };

      animateLights();

      // Créer un popup
      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      // Afficher le popup au survol (utiliser le layer core pour l'interaction)
      map.current.on('mouseenter', 'lights-core', (e) => {
        map.current.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();
        const props = e.features[0].properties;

        // Construire le contenu du popup avec les vraies propriétés
        const codePl = props.code_pl || 'N/A';
        const categorie = props.categorie || 'N/A';
        const domaine = props.domaine || 'N/A';

        // S'assurer que si la carte est zoomée, le popup apparaît au bon endroit
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup
          .setLngLat(coordinates)
          .setHTML(`
            <div style="font-family: sans-serif; font-size: 13px;">
              <strong>Point lumineux #${codePl}</strong><br/>
              <span style="color: #666;">Catégorie:</span> ${categorie}<br/>
              <span style="color: #666;">Domaine:</span> ${domaine}
            </div>
          `)
          .addTo(map.current);
      });

      // Masquer le popup quand on quitte le point
      map.current.on('mouseleave', 'lights-core', () => {
        map.current.getCanvas().style.cursor = '';
        popup.remove();
      });

      // Popup au clic (optionnel)
      map.current.on('click', 'lights-core', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const props = e.features[0].properties;

        const codePl = props.code_pl || 'N/A';
        const categorie = props.categorie || 'N/A';
        const domaine = props.domaine || 'N/A';

        new maplibregl.Popup()
          .setLngLat(coordinates)
          .setHTML(`
            <div style="font-family: sans-serif; font-size: 13px;">
              <strong>Point lumineux #${codePl}</strong><br/>
              <span style="color: #666;">Catégorie:</span> ${categorie}<br/>
              <span style="color: #666;">Domaine:</span> ${domaine}
            </div>
          `)
          .addTo(map.current);
      });
    });

    // Nettoyage lors du démontage du composant
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div
        ref={mapContainer}
        style={{
          width: '100%',
          height: '100vh'
        }}
      />
      <Legend />
    </div>
  );
}
