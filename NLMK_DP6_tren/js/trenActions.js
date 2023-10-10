
/*                 TODO
----------------------------------------------------
----------------------------------------------------
*/
const devHelper = {
  trenVals: {
    currentAction: 0,
    currentActionTime: 0,
    actionTimer: 0,
    realTimer: 0,
    type: undefined,
    trenEnded: false,
    lifeTime: '08:00',
    actionArr: [],
    scenario: undefined,
    messages: {
      normal: [],
      error: []
    }
  },
  model3DVals: {
    activeControlCamera: true,
    unicMeshArr: [],
    mouseoverMesh: undefined,
    cameras: [],
    scenes: [],
    renderers: [],
    controls: [],
    mainModel: undefined
  },
  svgSchemes: [],
  dev: {
    enable: true,
    perfomance: undefined,
  },
  waitingInput: true,
};
/*                 action
----------------------------------------------------
открыть
закрыть
контролировать
----------------------------------------------------
*/
let tempActions = [
  [
    {
      text: 'Заменить1',
      action: 'открыть',
      target: 'TV1',
      duration: 3
    }, {
      text: 'Заменить2',
      action: 'контролировать',
      target: 'TV2',
      duration: 3
    }, {
      text: 'Заменить3',
      action: 'закрыть',
      target: 'TV3',
      duration: 3
    },
  ]
];
