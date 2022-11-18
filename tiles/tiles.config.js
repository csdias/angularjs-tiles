function TilesConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('tiles', {
    url: '',
    controller: 'TilesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'tiles/tiles.html',
  });
}

export default TilesConfig;
