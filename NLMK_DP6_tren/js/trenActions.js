
/*                 TODO
----------------------------------------------------
Обозначить начальные состояния 3Д и 2Д объектов
----------------------------------------------------
*/
const devHelper = {
  trenVals: {
    waitingInput: true,
    currentAction: 0,
    currentActionTime: 0,
    scenarioTimer: 0,
    realTimer: 0,
    type: undefined,
    trenEnded: false,
    lifeTime: '08:00:00',
    scenarioArr: [],
    scenario: undefined,
    messages: [],
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
    engine: undefined,
    svgDisplays: {
      meshs: [],
      textures: [],
      tagImgs: [],
      svgs: [],
      materials: [],
    },
  },
  svgVals: [],
  //---------------------------
  // Сергей
  testVals: {
    questionsArray: [],
    answersArray: [], // Массив с ответами
    containerArray: [], // Массив с контейнерами вопросов
    previousContainer: undefined, // Предыдущий контейнер вопроса
  },
  //---------------------------
  dev: {
    enable: true,
    perfomance: undefined,
  },
};

/* TODO --------------------------------------------------------------------------------------------------------------
Добавить в 3Д действия атрибут 3Д target3D
----------------------------------------------------------------------------------------------
Сделать действие для 2Д target2D
----------------------------------------------------------------------------------------------
Время в тренажёра(devHelper.trenVals.realTimer) идёт всегда.
----------------------------------------------------------------------------------------------
Время в сценарии(devHelper.trenVals.scenarioTimer) идёт только тогда, когда devHelper.trenVals.waitingInput === false
----------------------------------------------------------------------------------------------
devHelper.trenVals.waitingInput меняется только тогда, когда:
  devHelper.trenVals.scenarioTimer будет равняться времение startTime действия
  в действии нужен человек human === true
----------------------------------------------------------------------------------------------
Конец сценария будет засчитан после того, как:
будут выполнены все дейтсвия
таймер сценария будет больше чем максимальное время какого-то действия + 1 сек
----------------------------------------------------------------------------------------------
duration передавать в анимации  
--------------------------------------------------------------------------------------------------------------*/

let tempActions = [
  [ // Первый сценарий
    {
      text: 'Заменить1',
      action: {
        target3D: 'kl022', // target2D target3D
        position: {}, // 3d 2d
        rotation: { y: 90 }, // 3d 2d
        color: {}, // 2d
        text: {}, // 3D 2D
        alpha: {}, // 2D
        window2D: { name: '', x: 0, y: 0 }, // 2D - имя окна и позиция, окно появится на текстуре, которая сейчас на активном мониторе
      },
      duration: 1, // seconds
      startTime: 0, // seconds - абсолютное время сценария
      human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    },
    {
      text: 'Заменить1',
      action: {
        target3D: 'kl021',
        position: { x: 0.2 },
        rotation: {},
      },
      duration: 1,
      startTime: 4,
    },
  ],
  [ // Второй сценарий
    {
      text: 'Заменить1',
      action: {
        target: 'kl021',
        position: { x: 0.2 },
        rotation: {},
      },
      duration: 3
    },
    {
      text: 'Заменить1',
      action: {
        target: 'kl019',
        position: {},
        rotation: { y: 90 },
      },
      duration: 3
    },
  ],
]
