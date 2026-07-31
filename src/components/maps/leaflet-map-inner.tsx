"use client";

import React, { useEffect } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MapCountryData, worldMapCountries, getScoreColor } from "./map-data";

export interface LeafletMapInnerProps {
  onSelectCountry: (country: MapCountryData) => void;
  selectedCountryId?: string | null;
  targetCoords?: [number, number] | null;
  zoomLevel?: number;
}

// Controller component to programmatically fly/pan map view
function MapController({
  coords,
  zoom,
}: {
  coords?: [number, number] | null;
  zoom?: number;
}) {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.flyTo(coords, zoom || 5, { duration: 1.5 });
    }
  }, [coords, zoom, map]);

  return null;
}

export function LeafletMapInner({
  onSelectCountry,
  selectedCountryId,
  targetCoords,
  zoomLevel = 2,
}: LeafletMapInnerProps) {
  const defaultCenter: [number, number] = [20, 10];

  return (
    <MapContainer
      center={defaultCenter}
      zoom={zoomLevel}
      minZoom={2}
      maxZoom={8}
      scrollWheelZoom={true}
      className="w-full h-full rounded-2xl z-0 overflow-hidden"
    >
      {/* Dark/Light carto tile layer */}
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      <MapController coords={targetCoords} zoom={targetCoords ? 5 : 2} />

      {/* Render Circle Markers for countries */}
      {worldMapCountries.map((country) => {
        const isIndia = country.isIndia;
        const color = getScoreColor(country.overallScore, isIndia);
        const radius = isIndia ? 16 : country.overallScore > 85 ? 12 : 9;

        return (
          <CircleMarker
            key={country.id}
            center={country.coords}
            radius={radius}
            pathOptions={{
              color: isIndia ? "#F97316" : color,
              fillColor: color,
              fillOpacity: isIndia ? 0.85 : 0.65,
              weight: isIndia ? 3 : 2,
            }}
            eventHandlers={{
              click: () => onSelectCountry(country),
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={0.95}>
              <div className="p-2 min-w-[170px] space-y-1 text-slate-900 dark:text-white font-sans text-xs">
                <div className="flex items-center justify-between border-b pb-1 gap-2">
                  <span className="font-extrabold text-sm flex items-center gap-1">
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                  </span>
                  {isIndia && (
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-orange-500 text-white">
                      HOST
                    </span>
                  )}
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-500 font-semibold">Overall Score:</span>
                  <span className="font-bold text-emerald-600">{country.overallScore} / 100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Global Rank:</span>
                  <span className="font-bold">{country.globalRank}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Population:</span>
                  <span className="font-bold">{country.population}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">GDP Rank:</span>
                  <span className="font-bold">{country.gdpRank}</span>
                </div>
              </div>
            </Tooltip>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
