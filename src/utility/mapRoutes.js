import axios from "axios";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// var routeData = {

//   features: [
//     {
//       type: "Feature",
//       properties: {
//         mode: "drive",
//         waypoints: [
//           { location: [77.402201, 28.49639], original_index: 0 },
//           { location: [77.372504, 28.62954], original_index: 1 },
//         ],
//         units: "metric",
//         distance: 18142,
//         distance_units: "meters",
//         time: 1512.444,
//         legs: [
//           {
//             distance: 18142,
//             time: 1512.444,
//             steps: [
//               {
//                 from_index: 0,
//                 to_index: 7,
//                 distance: 169,
//                 time: 54.473,
//                 instruction: { text: "Drive north." },
//               },
//               {
//                 from_index: 7,
//                 to_index: 16,
//                 distance: 456,
//                 time: 49.862,
//                 instruction: { text: "Turn right." },
//               },
//               {
//                 from_index: 16,
//                 to_index: 50,
//                 distance: 2855,
//                 time: 207.939,
//                 instruction: { text: "Turn left." },
//               },
//               {
//                 from_index: 50,
//                 to_index: 61,
//                 distance: 70,
//                 time: 12.104,
//                 instruction: {
//                   text: "Enter the roundabout and take the 3rd exit.",
//                 },
//               },
//               {
//                 from_index: 61,
//                 to_index: 66,
//                 distance: 50,
//                 time: 3.7,
//                 instruction: { text: "Exit the roundabout." },
//               },
//               {
//                 from_index: 66,
//                 to_index: 100,
//                 distance: 2377,
//                 time: 172.183,
//                 instruction: { text: "Turn left." },
//               },
//               {
//                 from_index: 100,
//                 to_index: 108,
//                 distance: 65,
//                 time: 11.153,
//                 instruction: {
//                   text: "Enter the roundabout and take the 2nd exit.",
//                 },
//               },
//               {
//                 from_index: 108,
//                 to_index: 170,
//                 distance: 3684,
//                 time: 265.758,
//                 instruction: { text: "Exit the roundabout." },
//               },
//               {
//                 from_index: 170,
//                 to_index: 260,
//                 distance: 4749,
//                 time: 363.249,
//                 instruction: {
//                   text: "Keep left to take Shaheed Hawaldar Padam Singh Dharma Marg.",
//                 },
//               },
//               {
//                 from_index: 260,
//                 to_index: 320,
//                 distance: 3391,
//                 time: 296.475,
//                 instruction: {
//                   text: "Keep right to take Vishwakarma Road Underpass.",
//                 },
//               },
//               {
//                 from_index: 320,
//                 to_index: 321,
//                 distance: 34,
//                 time: 2.476,
//                 instruction: {
//                   text: "Bear left onto Shaheed Hawaldar Padam Singh Dhama Marg.",
//                 },
//               },
//               {
//                 from_index: 321,
//                 to_index: 325,
//                 distance: 114,
//                 time: 47.223,
//                 instruction: { text: "Turn left." },
//               },
//               {
//                 from_index: 325,
//                 to_index: 326,
//                 distance: 63,
//                 time: 14.347,
//                 instruction: { text: "Turn right." },
//               },
//               {
//                 from_index: 326,
//                 to_index: 327,
//                 distance: 63,
//                 time: 11.495,
//                 instruction: { text: "Turn left." },
//               },
//               {
//                 from_index: 327,
//                 to_index: 327,
//                 distance: 0,
//                 time: 0,
//                 instruction: { text: "You have arrived at your destination." },
//               },
//             ],
//           },
//         ],
//       },
//       geometry: {
//         type: "MultiLineString",
//         coordinates: [
//           [
//             [77.402464, 28.496334],
//             [77.402559, 28.496675],
//             [77.402561, 28.496713],
//             [77.402552, 28.496738],
//             [77.402533, 28.496761],
//             [77.402498, 28.496779],
//             [77.401502, 28.497028],
//             [77.401367, 28.497062],
//             [77.401345, 28.497418],
//             [77.401348, 28.497559],
//             [77.401388, 28.497672],
//             [77.401678, 28.498225],
//             [77.401942, 28.49873],
//             [77.402247, 28.499314],
//             [77.402366, 28.499546],
//             [77.402573, 28.499952],
//             [77.403035, 28.500854],
//             [77.401883, 28.501309],
//             [77.401411, 28.501495],
//             [77.401115, 28.50158],
//             [77.400859, 28.501716],
//             [77.400765, 28.501754],
//             [77.3988, 28.502541],
//             [77.397193, 28.503184],
//             [77.396296, 28.503545],
//             [77.395728, 28.503773],
//             [77.395582, 28.503831],
//             [77.393668, 28.5046],
//             [77.392846, 28.504967],
//             [77.391099, 28.50574],
//             [77.390535, 28.506028],
//             [77.389647, 28.506599],
//             [77.389305, 28.506841],
//             [77.389025, 28.50705],
//             [77.388195, 28.507753],
//             [77.388079, 28.507856],
//             [77.387838, 28.508124],
//             [77.38734, 28.508708],
//             [77.387167, 28.508916],
//             [77.386252, 28.510017],
//             [77.385738, 28.51061],
//             [77.385229, 28.51116],
//             [77.384852, 28.511537],
//             [77.384523, 28.511852],
//             [77.384226, 28.512117],
//             [77.384138, 28.512204],
//             [77.384096, 28.512248],
//             [77.3831, 28.5132],
//             [77.382312, 28.513926],
//             [77.381044, 28.51511],
//             [77.380169, 28.515926],
//             [77.380129, 28.515921],
//             [77.380088, 28.515924],
//             [77.380011, 28.51595],
//             [77.379956, 28.516004],
//             [77.379936, 28.516042],
//             [77.379928, 28.516081],
//             [77.379931, 28.516121],
//             [77.379969, 28.516193],
//             [77.38004, 28.516243],
//             [77.380106, 28.516257],
//             [77.380173, 28.516251],
//             [77.380303, 28.516324],
//             [77.380378, 28.516374],
//             [77.38044, 28.516431],
//             [77.380474, 28.516485],
//             [77.380511, 28.516566],
//             [77.380037, 28.517007],
//             [77.379541, 28.517462],
//             [77.378143, 28.518784],
//             [77.377128, 28.519755],
//             [77.376391, 28.520437],
//             [77.375785, 28.520868],
//             [77.375188, 28.521239],
//             [77.375043, 28.521329],
//             [77.373464, 28.522082],
//             [77.372775, 28.522458],
//             [77.371846, 28.522966],
//             [77.37133, 28.523271],
//             [77.370629, 28.523741],
//             [77.369302, 28.524742],
//             [77.369027, 28.524901],
//             [77.368976, 28.524928],
//             [77.36892, 28.524944],
//             [77.368484, 28.525052],
//             [77.368416, 28.525083],
//             [77.368202, 28.525193],
//             [77.367976, 28.525352],
//             [77.367405, 28.525814],
//             [77.367242, 28.525945],
//             [77.367099, 28.526088],
//             [77.366789, 28.526462],
//             [77.366714, 28.52661],
//             [77.366483, 28.526715],
//             [77.365213, 28.527362],
//             [77.363256, 28.528353],
//             [77.362194, 28.528906],
//             [77.361719, 28.529173],
//             [77.36154, 28.529205],
//             [77.361419, 28.529217],
//             [77.361289, 28.529236],
//             [77.361202, 28.529244],
//             [77.361127, 28.529281],
//             [77.361074, 28.529342],
//             [77.361055, 28.529417],
//             [77.361069, 28.529488],
//             [77.361114, 28.529549],
//             [77.361182, 28.52959],
//             [77.361263, 28.529606],
//             [77.361343, 28.529639],
//             [77.361428, 28.529688],
//             [77.361642, 28.529959],
//             [77.361828, 28.530218],
//             [77.36217, 28.530687],
//             [77.362241, 28.530772],
//             [77.363241, 28.531979],
//             [77.363603, 28.532463],
//             [77.363707, 28.532645],
//             [77.36377, 28.532814],
//             [77.363803, 28.533113],
//             [77.363841, 28.533728],
//             [77.363854, 28.533927],
//             [77.363915, 28.534912],
//             [77.36407, 28.537438],
//             [77.364121, 28.538258],
//             [77.364125, 28.538305],
//             [77.36415, 28.538549],
//             [77.364159, 28.538576],
//             [77.364197, 28.538697],
//             [77.364204, 28.538708],
//             [77.364263, 28.538811],
//             [77.36439, 28.538939],
//             [77.364713, 28.539139],
//             [77.364945, 28.539284],
//             [77.367747, 28.541024],
//             [77.367916, 28.541114],
//             [77.36929, 28.542039],
//             [77.369798, 28.542341],
//             [77.370172, 28.542565],
//             [77.370276, 28.542634],
//             [77.371518, 28.543379],
//             [77.371669, 28.543476],
//             [77.373722, 28.544798],
//             [77.374028, 28.54511],
//             [77.374118, 28.54523],
//             [77.374148, 28.545292],
//             [77.374223, 28.545453],
//             [77.374295, 28.545601],
//             [77.374374, 28.545865],
//             [77.37438, 28.545886],
//             [77.374392, 28.545918],
//             [77.374439, 28.546056],
//             [77.374454, 28.546124],
//             [77.374876, 28.547533],
//             [77.375264, 28.549039],
//             [77.375588, 28.550203],
//             [77.376184, 28.55226],
//             [77.376231, 28.552423],
//             [77.376331, 28.55267],
//             [77.376373, 28.552858],
//             [77.376409, 28.553003],
//             [77.376578, 28.553683],
//             [77.376735, 28.554218],
//             [77.376941, 28.55469],
//             [77.377474, 28.555682],
//             [77.377751, 28.556129],
//             [77.37787, 28.556268],
//             [77.378155, 28.556603],
//             [77.378295, 28.556771],
//             [77.378309, 28.556784],
//             [77.378397, 28.556908],
//             [77.378818, 28.557498],
//             [77.378989, 28.557691],
//             [77.379043, 28.557753],
//             [77.37911, 28.557832],
//             [77.379307, 28.558055],
//             [77.379374, 28.558142],
//             [77.379637, 28.558479],
//             [77.379739, 28.558726],
//             [77.379941, 28.559209],
//             [77.380091, 28.559753],
//             [77.380184, 28.560342],
//             [77.380187, 28.560814],
//             [77.380126, 28.561277],
//             [77.380061, 28.561795],
//             [77.380012, 28.562152],
//             [77.379935, 28.562713],
//             [77.379817, 28.563608],
//             [77.379781, 28.563938],
//             [77.379765, 28.564056],
//             [77.379671, 28.564746],
//             [77.379558, 28.565472],
//             [77.379459, 28.56619],
//             [77.379428, 28.566404],
//             [77.379106, 28.568595],
//             [77.379091, 28.568697],
//             [77.379085, 28.56874],
//             [77.379072, 28.568822],
//             [77.378935, 28.569695],
//             [77.378857, 28.570192],
//             [77.378831, 28.570359],
//             [77.378704, 28.571172],
//             [77.37869, 28.571262],
//             [77.378681, 28.571309],
//             [77.378584, 28.571828],
//             [77.378423, 28.572753],
//             [77.378387, 28.572957],
//             [77.378369, 28.573075],
//             [77.378322, 28.573386],
//             [77.378052, 28.575182],
//             [77.378039, 28.575268],
//             [77.377938, 28.575942],
//             [77.377803, 28.576841],
//             [77.37777, 28.57706],
//             [77.377511, 28.578783],
//             [77.377404, 28.579302],
//             [77.37735, 28.579531],
//             [77.377332, 28.579605],
//             [77.377299, 28.579742],
//             [77.377044, 28.580731],
//             [77.376964, 28.581039],
//             [77.376574, 28.582436],
//             [77.376487, 28.582752],
//             [77.376375, 28.583056],
//             [77.376093, 28.583827],
//             [77.376019, 28.584168],
//             [77.375884, 28.584621],
//             [77.375852, 28.584729],
//             [77.375677, 28.585304],
//             [77.375411, 28.586184],
//             [77.375263, 28.58667],
//             [77.374881, 28.587725],
//             [77.374647, 28.5884],
//             [77.374628, 28.588455],
//             [77.374524, 28.588686],
//             [77.374494, 28.588751],
//             [77.374173, 28.589704],
//             [77.374161, 28.58973],
//             [77.373932, 28.590187],
//             [77.373812, 28.590427],
//             [77.373702, 28.590838],
//             [77.373658, 28.591285],
//             [77.37354, 28.591636],
//             [77.373048, 28.593103],
//             [77.372993, 28.593265],
//             [77.372919, 28.593481],
//             [77.372888, 28.593572],
//             [77.372749, 28.594009],
//             [77.372684, 28.59418],
//             [77.372543, 28.594603],
//             [77.372297, 28.59528],
//             [77.372133, 28.595649],
//             [77.372124, 28.595669],
//             [77.372082, 28.596032],
//             [77.372082, 28.596156],
//             [77.372107, 28.596489],
//             [77.372114, 28.596717],
//             [77.372124, 28.597077],
//             [77.372162, 28.597702],
//             [77.372182, 28.598194],
//             [77.372188, 28.598326],
//             [77.372299, 28.59862],
//             [77.37232, 28.600194],
//             [77.372343, 28.6008],
//             [77.372359, 28.601248],
//             [77.372419, 28.602345],
//             [77.372482, 28.604115],
//             [77.372509, 28.604704],
//             [77.372532, 28.605694],
//             [77.372536, 28.605783],
//             [77.372608, 28.60692],
//             [77.372641, 28.607433],
//             [77.372663, 28.607771],
//             [77.372666, 28.607822],
//             [77.372674, 28.607975],
//             [77.372676, 28.608005],
//             [77.372687, 28.608223],
//             [77.37274, 28.60921],
//             [77.372778, 28.609915],
//             [77.37281, 28.610006],
//             [77.372817, 28.610073],
//             [77.373051, 28.612506],
//             [77.373058, 28.612584],
//             [77.373064, 28.612643],
//             [77.373123, 28.613216],
//             [77.373315, 28.615083],
//             [77.373327, 28.615199],
//             [77.373334, 28.615279],
//             [77.373366, 28.615648],
//             [77.373374, 28.615736],
//             [77.373428, 28.616367],
//             [77.373445, 28.616812],
//             [77.373542, 28.617676],
//             [77.373547, 28.617731],
//             [77.373549, 28.617783],
//             [77.373549, 28.617834],
//             [77.37355, 28.617927],
//             [77.373566, 28.618091],
//             [77.37364, 28.618712],
//             [77.373654, 28.618904],
//             [77.373715, 28.619396],
//             [77.37378, 28.62002],
//             [77.373786, 28.620079],
//             [77.373803, 28.620245],
//             [77.373965, 28.621804],
//             [77.374075, 28.62293],
//             [77.374163, 28.623836],
//             [77.374165, 28.623895],
//             [77.374177, 28.623945],
//             [77.3742, 28.624199],
//             [77.37425, 28.624749],
//             [77.374255, 28.624811],
//             [77.374282, 28.625498],
//             [77.374302, 28.625994],
//             [77.374312, 28.62623],
//             [77.374326, 28.626885],
//             [77.374336, 28.62711],
//             [77.374367, 28.627806],
//             [77.374366, 28.627852],
//             [77.374368, 28.627918],
//             [77.374416, 28.628704],
//             [77.374311, 28.628993],
//             [77.374157, 28.628994],
//             [77.374092, 28.628995],
//             [77.373588, 28.628996],
//             [77.373142, 28.629001],
//             [77.373156, 28.629571],
//             [77.372505, 28.629574],
//           ],
//         ],
//       },
//     },
//   ],
//   properties: {
//     mode: "drive",
//     waypoints: [
//       { lat: 28.4963905, lon: 77.40220113183938 },
//       { lat: 28.6295406, lon: 77.37250483714578 },
//     ],
//     units: "metric",
//   },
//   type: "FeatureCollection",
// };

function drawRoute(map, instructionsData, routeData) {
  if (!routeData) {
    return;
  }

  if (map.getLayer("route-layer")) {
    map.removeLayer("route-layer");
  }

  if (map.getLayer("points-layer")) {
    map.removeLayer("points-layer");
  }

  if (document.getElementById("showDetails").checked) {
    map.getSource("route").setData(routeStepsData);
    map.addLayer({
      id: "route-layer",
      type: "line",
      source: "route",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": [
          "match",
          ["get", "road_class"],
          "motorway",
          "#009933",
          "trunk",
          "#00cc99",
          "primary",
          "#009999",
          "secondary",
          "#00ccff",
          "tertiary",
          "#9999ff",
          "residential",
          "#9933ff",
          "service_other",
          "#ffcc66",
          "unclassified",
          "#666699",
          /* other */
          "#666699",
        ],
        "line-width": 8,
      },
    });

    map.getSource("points").setData(stepPointsData);
    map.addLayer({
      id: "points-layer",
      type: "circle",
      source: "points",
      paint: {
        "circle-radius": 4,
        "circle-color": "#ddd",
        "circle-stroke-color": "#aaa",
        "circle-stroke-width": 1,
      },
    });
  } else {
    map.getSource("route").setData(routeData);
    map.addLayer({
      id: "route-layer",
      type: "line",
      source: "route",
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": "#6084eb",
        "line-width": 8,
      },
      filter: ["==", "$type", "LineString"],
    });

    map.getSource("points").setData(instructionsData);
    map.addLayer({
      id: "points-layer",
      type: "circle",
      source: "points",
      paint: {
        "circle-radius": 4,
        "circle-color": "#fff",
        "circle-stroke-color": "#aaa",
        "circle-stroke-width": 1,
      },
    });
  }
}

const mapRoutes = (cord, startingPointCord, endingPointCord, routeData) => {
  const map = new maplibregl.Map({
    center: [startingPointCord.lon, startingPointCord.lat],
    zoom: 13,
    container: "map",
  });

  var style =
    "https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=440b5a17c9744781ac1d712090b0dcdf";
  console.log(style);
  map.setStyle(style);

  map.addControl(new maplibregl.NavigationControl());

  var userLocationMarker = document.createElement("div");
  userLocationMarker.className = "currentLocation";
  userLocationMarker.style.backgroundImage = `url(../../public/current.png)`;

  var userLocation = new maplibregl.Marker({ element: userLocationMarker })
    .setLngLat([cord.lon, cord.lat])
    .addTo(map);

  var startingPointIcon = document.createElement("div");
  startingPointIcon.classList.add("airport");

  var startingPointPopup = new maplibregl.Popup({
    anchor: "bottom",
    offset: [0, -64], // height - shadow
  }).setText("Starting Point");

  var startingPoint = new maplibregl.Marker(startingPointIcon, {
    anchor: "bottom",
    offset: [0, 0],
  })
    .setLngLat([startingPointCord.lon, startingPointCord.lat])
    .setPopup(startingPointPopup)
    .addTo(map);

  var endingPointIcon = document.createElement("div");
  startingPointIcon.classList.add("airport");

  var endingPointPopup = new maplibregl.Popup({
    anchor: "bottom",
    offset: [0, -64], // height - shadow
  }).setText("Ending Point");

  var endingPoint = new maplibregl.Marker(endingPointIcon, {
    anchor: "bottom",
    offset: [0, 0],
  })
    .setLngLat([endingPointCord.lon, endingPointCord.lat])
    .setPopup(endingPointPopup)
    .addTo(map);

  let routeStepsData;
  let instructionsData;
  let stepPointsData;
  const steps = [];
  const instructions = [];
  const stepPoints = [];

  routeData.features[0].properties.legs.forEach((leg, legIndex) => {
    const legGeometry = routeData.features[0].geometry.coordinates[legIndex];
    leg.steps.forEach((step, index) => {
      if (step.instruction) {
        instructions.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: legGeometry[step.from_index],
          },
          properties: {
            text: step.instruction.text,
          },
        });
      }

      if (index !== 0) {
        stepPoints.push({
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: legGeometry[step.from_index],
          },
          properties: step,
        });
      }

      if (step.from_index === step.to_index) {
        // destination point
        return;
      }

      const stepGeometry = legGeometry.slice(
        step.from_index,
        step.to_index + 1
      );
      steps.push({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: stepGeometry,
        },
        properties: step,
      });
    });
  });

  routeStepsData = {
    type: "FeatureCollection",
    features: steps,
  };

  instructionsData = {
    type: "FeatureCollection",
    features: instructions,
  };

  stepPointsData = {
    type: "FeatureCollection",
    features: stepPoints,
  };

  map.on("load", function () {
    map.addSource("route", {
      type: "geojson",
      data: routeData,
    });
    map.addSource("points", {
      type: "geojson",
      data: instructionsData,
    });
    drawRoute(map, instructionsData, routeData);
  });
};

export default mapRoutes;
