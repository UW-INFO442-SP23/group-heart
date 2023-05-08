import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export function MapIntro(props) {

    return (
        <section>
            <h1 className="intro">Click on the Map and Explore Nearby Supporting Groups</h1>
        </section>
    )
}

export function Map(props) {
    const navigateTo = useNavigate();
    const [clickedGroup, setClickedGroup] = useState(null);

    return (
        <div id="map" className="col-12 col-md-8 d-flex">
            <MapContainer center={[47.5629436425564, -122.3865424746779]} zoom={9.5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {props.locationData.map(group => (
                    <Marker
                        key={group.id}
                        position={group.location}
                        eventHandlers={{
                            click: () => {
                                setClickedGroup(group);
                                navigateTo('/map/'+group.id);
                            },
                        }}
                    >
                    </Marker>
                ))}

                {clickedGroup && (
                    <Popup
                        position={clickedGroup.location}
                    >
                        {clickedGroup.name}
                    </Popup>
                )}
            </MapContainer>
        </div>
    )
}
