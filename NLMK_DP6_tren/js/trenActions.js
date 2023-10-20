
/*                 TODO
----------------------------------------------------
----------------------------------------------------
*/
const devHelper = {
  trenVals: {
    waitingInput: true,
    currentAction: 0,
    currentActionTime: 0,
    actionTimer: 0,
    realTimer: 0,
    type: undefined,
    trenEnded: false,
    lifeTime: '08:00:00',
    actionArr: [],
    scenario: undefined,
    messages: {
      normal: [],
      error: []
    },
    ended: false,
    activeMeshs: [],
  },
  model3DVals: {
    activeControlCamera: true,
    camera: undefined,
    scene: undefined,
    activeMeshs: [],
    currentPosition: undefined,
    movePointMesh: [],
    meshUnderPointer: undefined,
    svgDisplays: {
      meshs: [],
      textures: [],
      tagImgs: [],
      svgs: []
    },
  },
  svgVals: [],
  dev: {
    enable: true,
    perfomance: undefined,
  },
};
/*                 action
----------------------------------------------------
rotateMesh(devHelper.model3DVals.activeMeshs[0], 90, 'y');
----------------------------------------------------
*/
let tempActions = [
  [
    {
      text: 'Заменить1',
      action: {
        target: 'kl022',
        position: {},
        rotation: { y: 90 },
      },
      duration: 3
    },
  ]
];
