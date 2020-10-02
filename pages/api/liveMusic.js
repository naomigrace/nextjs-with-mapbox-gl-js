export default (req, res) => {
  res.statusCode = 200;
  res.json({
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0317, 38.9146] },
        properties: {
          title: "Black Cat",
          cluster: false,
          venue: "blackcat",
          event_count: 10,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.023982, 38.878824] },
        properties: {
          title: "Pearl Street Warehouse",
          cluster: false,
          venue: "pearlstreet",
          event_count: 2,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0423, 38.9224] },
        properties: {
          title: "Songbyrd Cafe",
          cluster: false,
          venue: "songbyrd",
          event_count: 10,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0317, 38.9028] },
        properties: {
          title: "The Hamilton",
          cluster: false,
          venue: "thehamilton",
          event_count: 9,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-76.9859, 38.9144] },
        properties: {
          title: "City Winery",
          cluster: false,
          venue: "citywinery",
          event_count: 9,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0241, 38.8787] },
        properties: {
          title: "Union Stage",
          cluster: false,
          venue: "unionstage",
          event_count: 24,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0292, 38.8965] },
        properties: {
          title: "Warner Theatre",
          cluster: false,
          venue: "warnertheatre",
          event_count: 19,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0242, 38.9168] },
        properties: {
          title: "DC9 Nightclub",
          cluster: false,
          venue: "dc9",
          event_count: 2,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-76.9869, 38.9] },
        properties: {
          title: "Pie Shop",
          cluster: false,
          venue: "pieshop",
          event_count: 8,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0237, 38.9179] },
        properties: {
          title: "9:30 Club",
          cluster: false,
          venue: "_930",
          event_count: 25,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0211, 38.9154] },
        properties: {
          title: "The Howard Theatre",
          cluster: false,
          venue: "thehowardtheatre",
          event_count: 8,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0277, 38.9172] },
        properties: {
          title: "U Street Music Hall",
          cluster: false,
          venue: "ustreet",
          event_count: 11,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-76.9726, 38.9198] },
        properties: {
          title: "Echo Stage",
          cluster: false,
          venue: "echostage",
          event_count: 2,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0291, 38.9171] },
        properties: {
          title: "Lincoln Theatre",
          cluster: false,
          venue: "lincolntheatre",
          event_count: 17,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0255, 38.8804] },
        properties: {
          title: "The Anthem",
          cluster: false,
          venue: "theanthem",
          event_count: 26,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0557, 38.8958] },
        properties: {
          title: "The Kennedy Center",
          cluster: false,
          venue: "kennedycenter",
          event_count: 230,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-76.995134, 38.881679] },
        properties: {
          title: "Miracle Theatre",
          cluster: false,
          venue: "miracletheatre",
          event_count: 1,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.0221, 38.8951] },
        properties: {
          title: "Hill Country",
          cluster: false,
          venue: "hillcountry",
          event_count: 2,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.007433, 38.87301] },
        properties: {
          title: "Nationals Park",
          cluster: false,
          venue: "nationalspark",
          event_count: 4,
        },
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [-77.02088, 38.898125] },
        properties: {
          title: "Capital One Arena",
          cluster: false,
          venue: "capitaloneconcerts",
          event_count: 7,
        },
      },
    ],
  });
};
