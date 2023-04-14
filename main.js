import './style.css';
import {Map, View} from 'ol';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import Draw from "ol/interaction/Draw.js"

const raster = new TileLayer({
  source: new OSM()
})


const vector = new VectorLayer({
  source: new VectorSource({
    wrapX: false
  })
})

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 5
  })
});

// const typeSelect = document.getElementById('type');


// let draw;
// const addInteraction = () => {
//   const value = typeSelect.value;
//   if(value == 'None') {
//     draw = new Draw({
//       source: new VectorSource({
//         wrapX: false
//       }),
//       type: typeSelect.value 
//     }) 
//     map.addInteraction(draw);
//   }
// }
// typeSelect.onchange = function () {
//   map.removeInteraction(draw);
//   addInteraction();
// };

// document.getElementById('undo').addEventListener('click', function () {
//   draw.removeLastPoint();
// });

// addInteraction() ;