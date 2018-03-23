import TerrainGenerator from '../index';
import { mapObjectToBinaries } from '../utils';
// import { init as initVisualization } from './visualization';

const generateSeed = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const seed = generateSeed(1, 65536);

console.log(`
  === UPDATE ===
  SEED: ${seed}
`);

const generator = new TerrainGenerator({
  seed,
  height: 20,
  chunkSize: 2,
  caves: {
    // redistribution: 0.4,
    // elevation: 50,
    redistribution: 0,
    elevation: 0,
  },
  surface: {
    redistribution: 5,
    elevation: 120,
    minHeight: 5,
    maxHeight: 25,
  },
});

for (let i = 0; i < 10; i++) {
  const { chunks } = generator.updateMap({
    position: [i, i],
    renderDistance: 1,
    unrenderOffset: 1,
  });

  console.log(chunks);
}


// initVisualization(generator);
