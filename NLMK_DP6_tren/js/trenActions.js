
/*                 TODO
----------------------------------------------------
----------------------------------------------------
*/
const devHelper = {
  trenVals: {
    waitingInput: true,
    currentAction: 0,
    type: undefined,
    trenEnded: false,
    timers: {
      lifeTime: '08:00:00',
      allTime: 0,
      allTimeHelper: 0,
      actionTime: 0,
      actionTimeHelper: 0,
      scenarioTime: 0,
      scenarioTimeHelper: 0,
    },
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
      svgNames: [],
    },
    cameraPositions: [
      { positionCoordinates: [0.35, 2.15, -3.4], lookAt: [0.1913, -0.0046, 0], position: undefined }, //начальное положение
      { positionCoordinates: [-6.58, 1.12, -0.78], lookAt: [-0.0165, -0.7836, 0], position: 1 }, // монитор 1
      { positionCoordinates: [-6.13, 1.12, -0.33], lookAt: [-0.0165, -0.7836, 0], position: 2 }, // монитор 2
      { positionCoordinates: [-3.56, 1.73, -1], lookAt: [0.5216195764415446, 0.007373100235868478, 0], position: 3 }, // пульт 1 БВНК
      { positionCoordinates: [0.06, 1.12, 0.11], lookAt: [-0.017735496836921723, -0.00104686817450884, 0], position: 4 }, // монитор 11
      { positionCoordinates: [0.75, 1.12, 0.01], lookAt: [-0.02523549683692173, 0.3476621849510065, 0], position: 5 }, // монитор 12
      { positionCoordinates: [0.1, 1.22, 0.03], lookAt: [1.077429069342384, -0.3353050130723554, 0], position: 6 }, // телефон
      { positionCoordinates: [0.92, 1.31, -0.05], lookAt: [0.9778930701860019, 1.5707867182903412, 0], position: 7 }, // рация
      { positionCoordinates: [1.77, 1.59, -0.48], lookAt: [1.111833144037235, -0.0018067781465321568, 0], position: 8 }, // пульт БЗУ
      { positionCoordinates: [2.96, 1.95, -1.0], lookAt: [0.6879109600288498, 0.001624744992681849, 0], position: 9 }, // пульт ДП6
    ],
    loadModels: [
      'All',
      'Highlight',
      // 'Console_BVNK', 
      // 'Console_BZU', 
      // 'Console_DP6', 
      // 'Console_PSODP6', 
      // 'Console_UGKS',
    ],

  },
  svgVals: [],
  //---------------------------
  // Сергей
  testVals: {
    questionsArray: [],
    answersArray: [], // Массив с ответами
    containerArray: [], // Массив с контейнерами вопросов
    previousContainer: undefined, // Предыдущий контейнер вопроса
    dragElement: undefined, // Элемент, который перетаскиваем
    dragElementText: '', // Текст элемента, который перетаскиваем
    dragoverElement: undefined, // Элемент, на который навелись
    dragoverElementText: '', // Текст элемента, на который навелись
    radioSelfcheckHelperText: 'Выберите один или несколько вариантов и нажмите подтвердить', // Текст хелпера вопросов с радиокнопками
    dragDropHelperText: 'Переместите каждый ответ в нужную строчку и нажмите подтвердить.', // Текст хелпера вопросов с dragDrop
  },
  //---------------------------
  dev: {
    enable: true,
    perfomance: undefined,
  },
};

/* TODO --------------------------------------------------------------------------------------------------------------
Конец сценария будет засчитан после того, как:
будут выполнены все дейтсвия
таймер сценария будет больше чем максимальное время какого-то действия + 1 сек
--------------------------------------------------------------------------------------------------------------*/

let tempActions = [
  [ // Первый сценарий
    //--------------------------------1----------------------------------------
    {
      sender: 'Система',
      text: 'ЗАМЕНИТЬ_нажать на первую кнопку на телефоне',
      action: {
        target3D: 'PhoneButton002',
        position: { y: 0.0144 }, // 3d 2d 0.0144
        rotation: {}, // 3d 2d
        text: {}, // 3D 2D
      },
      duration: 0.15,
      startTime: 0, // seconds - абсолютное время сценария
      human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    },
    {
      action: {
        target3D: 'PhoneButton002',
        position: { y: 0.015 }, // 3d 2d
        rotation: {}, // 3d 2d
        text: {}, // 3D 2D
      },
      duration: 0.15,
      startTime: 0.15,
    },
    // {
    //   scenarioText: 'Открыть клапан 029 на дымовую трубу.',
    //   sender: 'Система',
    //   action: {
    //     target2D: 'kl029',
    //     window2D: {
    //       // newPositionWindow: {
    //       //   x: 500,
    //       // },
    //       elements: [
    //         { name: 'title_work_vn', text: 'Управление клапаном 029' },
    //         { name: 'status_window_text', text: 'Нет данных' },
    //         { name: 'btn_open', color: '#FFFFFF', stroke: '#000000' },
    //         { name: 'polozenie_text', text: '51' },
    //         { name: 'polozenie_button_text', color: '#000000' },
    //         { name: 'left_vn', color: '#8F8F8F' },
    //         { name: 'right_vn', color: '#8F8F8F' },
    //         { name: 'circle_1_kl029', stroke: '#8F8F8F' },
    //         { name: 'circle_2_kl029', stroke: '#8F8F8F' },
    //       ],
    //     },
    //     // helper2D : [
    //     //   { x: 60, y: 59.1, w: 4, h: 2.6, id: 'open_vn'},
    //     // ]
    //   },
    //   // lifeTime: '10:00:00',
    //   startTime: 0.2,
    //   human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    // },
    // {
    //   action: {
    //     target2D: 'open_vn',
    //     window2D: {
    //       elements: [
    //         { name: 'title_open_vn', text: 'Открыть' },
    //       ],
    //     },
    //   },
    //   startTime: 0.5,
    //   human: true,
    // },
    // {
    //   action: {
    //     target2D: 'open_vn1',
    //   },
    //   startTime: 1,
    //   human: true,
    // },
    // {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'status_window_text', text: 'Открывается' },
    //         { name: 'btn_open', color: '', stroke: '' },
    //         { name: 'polozenie_text', text: '55' },
    //         { name: 'polozenie_button_text', color: '' },
    //         { name: 'left_vn', color: '#00FF00' },
    //         { name: 'right_vn', color: '#00FF00' },
    //         { name: 'kl029', color: '#00FF00' },
    //         { name: 'kl029_proc', text: '55' },
    //         { name: 'circle_1_kl029', stroke: '#00FF00' },
    //         { name: 'circle_2_kl029', stroke: '#00FF00' },
    //       ],
    //     },
    //   },
    //   startTime: 1.02,
    // },
    // {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'kl029', color: '#8F8F8F' },
    //         { name: 'kl029_proc', text: '65' },
    //         { name: 'polozenie_text', text: '65' },
    //         { name: 'left_vn', color: '#8F8F8F' },
    //         { name: 'right_vn', color: '#8F8F8F' },
    //         { name: 'circle_1_kl029', stroke: '#8F8F8F' },
    //         { name: 'circle_2_kl029', stroke: '#8F8F8F' },
    //       ],
    //     },
    //   },
    //   startTime: 2.02,
    // },
    // {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'kl029', color: '#00FF00' },
    //         { name: 'kl029_proc', text: '75' },
    //         { name: 'polozenie_text', text: '75' },
    //         { name: 'left_vn', color: '#00FF00' },
    //         { name: 'right_vn', color: '#00FF00' },
    //         { name: 'circle_1_kl029', stroke: '#00FF00' },
    //         { name: 'circle_2_kl029', stroke: '#00FF00' },
    //       ],
    //     },
    //   },
    //   startTime: 3.02,
    // },
    // {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'kl029', color: '#8F8F8F' },
    //         { name: 'kl029_proc', text: '85' },
    //         { name: 'polozenie_text', text: '85' },
    //         { name: 'left_vn', color: '#8F8F8F' },
    //         { name: 'right_vn', color: '#8F8F8F' },
    //         { name: 'circle_1_kl029', stroke: '#8F8F8F' },
    //         { name: 'circle_2_kl029', stroke: '#8F8F8F' },
    //       ],
    //     },
    //   },
    //   startTime: 4.02,
    // },
    // {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'kl029', color: '#00FF00' },
    //         { name: 'kl029_proc', text: '100' },
    //         { name: 'polozenie_text', text: '100' },
    //         { name: 'status_window_text', text: 'Открыт' },
    //         { name: 'polozenie_button_text', color: '#6E6E6E' },
    //         { name: 'btn_open', color: '#E6E6E6', stroke: '#C4C4C4' },
    //         { name: 'left_vn', color: '#00FF00' },
    //         { name: 'right_vn', color: '#00FF00' },
    //         { name: 'circle_1_kl029', stroke: '#00FF00' },
    //         { name: 'circle_2_kl029', stroke: '#00FF00' },
    //       ],
    //     },
    //   },
    //   startTime: 5.02,
    // },
    // {
    //   text: 'Клапан 029 на дымовую трубу открыт.',
    //   sender: 'Система',
    //   startTime: 5.03,
    // },
    // {
    //   action: {
    //     target2D: 'close_w1',
    //   },
    //   startTime: 6,
    //   human: true,
    // },
    //--------------------------------2----------------------------------------

    // {
    //   text: 'Открыть клапан 029 на дымовую трубу.',
    //   sender: 'Система',
    //   action: {
    //     target2D: 'kl029',
    //     window2D: {
    //       elements: [
    //         { name: 'title_work_vn', text: 'Управление клапаном 029' },
    //         { name: 'status_window_text', text: 'Нет данных' },
    //         { name: 'btn_open', color: '#FFFFFF', stroke: '#000000' },
    //         { name: 'polozenie_text', text: '51' },
    //         { name: 'polozenie_button_text', color: '#000000' },
    //         { name: 'left_vn', color: '#8F8F8F' },
    //         { name: 'right_vn', color: '#8F8F8F' },
    //         { name: 'circle_1', stroke: '#8F8F8F' },
    //         { name: 'circle_2', stroke: '#8F8F8F' },
    //       ],
    //     },
    //   },
    //   startTime: 10,
    //   human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    // }
    // {
    //   text: 'Заменить1',
    //   action: {
    //     target3D: 'kl022', // target2D target3D
    //     position: {}, // 3d 2d
    //     rotation: { y: 90 }, // 3d 2d
    //     color: {}, // 2d
    //     text: {}, // 3D 2D
    //     alpha: {}, // 2D
    //     window2D: { name: '', x: 0, y: 0 }, // 2D - имя окна и позиция, окно появится на текстуре, которая сейчас на активном мониторе
    //   },
    //   duration: 1, // seconds
    //   startTime: 0, // seconds - абсолютное время сценария
    //   human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    // },
    // {
    //   text: 'Заменить2',
    //   action: {
    //     target3D: 'kl021',
    //     position: { x: 0.2 },
    //     rotation: {},
    //   },
    //   duration: 1,
    //   startTime: 4,
    // },
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

// Массив исходных состояний
let startState2D = [
  [// Первый сценарий
    { name: 'kl028', color: '#00FF00' },
    { name: 'circle_1_kl028', stroke: '#00FF00' },
    { name: 'circle_2_kl028', stroke: '#00FF00' },
    { name: 'kl028_proc', text: '100' },
    { name: 'kl007', color: '#00FF00' },
    { name: 'circle_1_kl007', stroke: '#00FF00' },
    { name: 'circle_2_kl007', stroke: '#00FF00' },
    { name: 'kl007_proc', text: '100' },
    { name: 'circle_1_kl025', stroke: '#00FF00' },
  ]
]
let startState3D = [
  [// Первый сценарий
    // { name: 'PhoneButton000', position: { x: 0.2 } },
    // { name: 'PhoneButton002', rotation: { y: 90 } },
  ]
]
