import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { addDataLayer } from "../map/addDataLayer";
import styles from "../styles/Home.module.css";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

async function fetcher(params) {
  try {
    const response = await fetch(params);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.error("Fetcher error: " + error);
    return {};
  }
}

export default function Home() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const { data, error } = useSWR("/api/liveMusic", fetcher);

  if (error) {
    console.error(error);
  }

  mapboxgl.accessToken =
    "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA";

  useEffect(() => {
    setPageIsMounted(true);
  }, []);

  useEffect(() => {
    if (pageIsMounted && data) {
      const Map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-77.02, 38.887],
        zoom: 12.5,
        pitch: 45,
        maxBounds: [
          [-77.875588, 38.50705], // Southwest coordinates
          [-76.15381, 39.548764], // Northeast coordinates
        ],
      });

      setMap(Map);

      Map.on("idle", function () {
        setMapLoaded(true);
      });

      Map.on("load", function () {
        // inspect a cluster on click
        Map.on("click", "data", function (e) {
          var features = Map.queryRenderedFeatures(e.point, {
            layers: ["data"],
          });
          var clusterId = features[0].properties.cluster_id;
          Map.getSource("dcmusic.live").getClusterExpansionZoom(
            clusterId,
            function (err, zoom) {
              if (err) return;

              Map.easeTo({
                center: features[0].geometry.coordinates,
                zoom: zoom,
              });
            }
          );
        });

        // When a click event occurs on a feature in
        // the unclustered-point layer, open a popup at
        // the location of the feature, with
        // description HTML from its properties.
        Map.on("click", "unclustered-point", function (e) {
          var coordinates = e.features[0].geometry.coordinates.slice();
          var mag = e.features[0].properties.mag;
          var tsunami;

          if (e.features[0].properties.tsunami === 1) {
            tsunami = "yes";
          } else {
            tsunami = "no";
          }

          // Ensure that if the map is zoomed out such that
          // multiple copies of the feature are visible, the
          // popup appears over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(
              "magnitude: " + mag + "<br>Was there a tsunami?: " + tsunami
            )
            .addTo(Map);
        });

        Map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          })
        );

        addDataLayer(Map, data);
      });

      Map.on("mouseenter", "data", function () {
        Map.getCanvas().style.cursor = "pointer";
      });
      Map.on("mouseleave", "data", function () {
        Map.getCanvas().style.cursor = "";
      });
    }
  }, [pageIsMounted, setMap, data]);

  useEffect(() => {
    if (Map && mapLoaded && data && Map.getSource("dcmusic.live")) {
      Map.getSource("dcmusic.live").setData(data);
    }
  }, [mapLoaded, data, Map]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div id="my-map" style={{ height: 500, width: 500 }} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
