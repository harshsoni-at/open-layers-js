import './style.css';
import {Map, View} from 'ol';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import Draw from "ol/interaction/Draw"

const raster = new TileLayer({
  source: new OSM()
})


const vector = new VectorLayer({
  source: new VectorSource({
    wrapX: false
  }),
})


const map = new Map({
  target: 'map',
  layers: [
    raster, vector
  ],
  view: new View({
    center: [0, 0],
    zoom: 5
  })
});

const typeSelect = document.getElementById('type');


let draw;
const initInteraction = () => {
  const value = typeSelect.value;
  // if not none then intialise draw
  if(value !== 'None') {
    draw = new Draw({
      source: new VectorSource({
        wrapX: false
      }),
      type: typeSelect.value 
    }) 
    // call addinter.. of map object
    map.addInteraction(draw);
  }
}
typeSelect.onchange = function () {
  map.removeInteraction(draw);
  initInteraction();
};

document.getElementById('undo').addEventListener('click', function () {
  draw.removeLastPoint();
});

initInteraction() ;