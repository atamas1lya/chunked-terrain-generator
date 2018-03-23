
import TerrainGenerator from '../index';
import * as utils from '../utils';
import * as visualization from './visualization';

const generateSeed = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const seed = generateSeed(1, 65536);

console.log(`
  === UPDATE ===
  SEED: ${seed}
`);

const generator = new TerrainGenerator({
  seed: seed,
  size: 100,
  caves: {
    redistribution: 0.3,
    elevation: 100,
  },
  surface: {
    redistribution: 5.5,
    elevation: 120,
    minHeight: 50,
    maxHeight: 150,
  }
});

generator.generateMap();


const mapObjectBinary = utils.mapObjectToBinaries(generator.map);

visualization.init(mapObjectBinary);