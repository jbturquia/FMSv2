mapboxgl.accessToken = 'pk.eyJ1IjoidmFsbGVudGVtYXJ0aW4iLCJhIjoiY2xuYmlmMTZtMDZwYTJtbnpoaWk3bGlodyJ9.QCHl60dk3a2aypwVWh6RUA';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: [125.646108, 7.135650], // starting position
    zoom: 14 // starting zoom
});

map.on('load', () => {
    // Add a data source containing GeoJSON data.
    map.addSource('maine', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline Maine.
                'coordinates': [
                    [

                        ['125.64277172741987,7.176266503113922'],
                        ['125.63281650734143,7.16298312966353'],
                        ['125.6570179906343,7.14833691035038'],
                        ['125.66800306106529,7.1755853139017205'],

                        ['125.65804784266368,7.191422702520754'],

                        ['125.64277172741987,7.176266503113922']
                    ]
                ]
            }
        }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0.5
        }
    });
    // Add a black outline around the polygon.
    map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'maine',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 3
        }
    });

    map.addSource('QUIBS', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline QUIBS.
                'coordinates': [
                    [

                    ]
                ]
            }
        }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'QUIBS',
        'type': 'fill',
        'source': 'QUIBS', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#ffffff', // blue color fill
            'fill-opacity': 0.5
        }
    });
    // Add a black outline around the polygon.
    map.addLayer({
        'id': 'QUIBSoutline',
        'type': 'line',
        'source': 'QUIBS',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 3
        }
    });

    map.addSource('LFC', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'geometry': {
                'type': 'Polygon',
                // These coordinates outline LFC.
                'coordinates': [
                    [

                    ]
                ]
            }
        }
    });

    // Add a new layer to visualize the polygon.
    map.addLayer({
        'id': 'LFC',
        'type': 'fill',
        'source': 'LFC', // reference the data source
        'layout': {},
        'paint': {
            'fill-color': '#0080ff', // blue color fill
            'fill-opacity': 0.5
        }
    });
    // Add a black outline around the polygon.
    map.addLayer({
        'id': 'LFCoutline',
        'type': 'line',
        'source': 'LFC',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 3
        }
    });
});