
const DUMMY_PROJECTS = [
  {name: 'AngularJs'},
  {name: 'Closure'}
]

class TilesCtrl {
  constructor() {
    this.projects = DUMMY_PROJECTS;
    this.projectSearchText = "";
  }
}

export default TilesCtrl;