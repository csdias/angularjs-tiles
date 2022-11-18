// Create the module where our functionality can attach to
let tilesModule = angular.module('tiles', []);

// Include our UI-Router config settings
import TilesConfig from './tiles.config';
tilesModule.config(TilesConfig);

// Controllers
import TilesCtrl from './tiles.controller';
tilesModule.controller('TilesCtrl', TilesCtrl);

export default tilesModule;
