import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './style.module.scss';

export const SectionLocation = () => {
  useEffect(() => {
    const mapContainer = document.getElementById('map');

    if (mapContainer && !mapContainer._leaflet_id) {
      const latitude = -18.622337475946424; 
      const longitude = -46.506702613269496; 
      const zoomLevel = 15; 

      const map = L.map('map').setView([latitude, longitude], zoomLevel);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([latitude, longitude]).addTo(map);
    }
  }, []);

  return (
    <section className={styles.sectionLocation}>
      <div className={styles.divLocation}>
        <h2>Localização</h2>
        <div id="map" className={styles.map}></div>
      </div>
    </section>
  );
};









