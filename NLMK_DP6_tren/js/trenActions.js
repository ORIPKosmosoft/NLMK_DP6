
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
реализовать проверку на правильную текстуру на мониторе
----------------------------------------------------------------------------------------------
duration передавать в анимации  
--------------------------------------------------------------------------------------------------------------*/

let tempActions = [
  [ // Первый сценарий
    {
      text: 'Открыть клапан 029 на дымовую трубу.',
      sender: 'Система',
      action: {
        target2D: 'kl029',
        lifetime: '10:00:00',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 029' },
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'btn_open', color: '#FFFFFF', stroke: '#000000' },
            { name: 'polozenie_text', text: '51' },
            { name: 'polozenie_button_text', color: '#000000' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1', stroke: '#8F8F8F' },
            { name: 'circle_2', stroke: '#8F8F8F' },
          ],
        },
      },
      startTime: 0,
      human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    }, {
      action: {
        target2D: 'open_vn',
        lifetime: '11:00:00',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
      },
      startTime: 0.5,
      human: true,
    }, {
      action: {
        target2D: 'open_vn1',
      },
      startTime: 1,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#6DE90B' },
          ],
        },
      },
      startTime: 1.01,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'btn_open', color: '', stroke: '' },
            { name: 'polozenie_text', text: '55' },
            { name: 'polozenie_button_text', color: '' },
            { name: 'left_vn', color: '#6DE90B' },
            { name: 'right_vn', color: '#6DE90B' },
            { name: 'circle_1', stroke: '#6DE90B' },
            { name: 'circle_2', stroke: '#6DE90B' },
          ],
        },
      },
      startTime: 1.02,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#8F8F8F' },
          ],
        },
      },
      startTime: 2.01,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'polozenie_text', text: '65' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1', stroke: '#8F8F8F' },
            { name: 'circle_2', stroke: '#8F8F8F' },
          ],
        },
      },
      startTime: 2.02,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#6DE90B' },
          ],
        },
      },
      startTime: 3.01,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'polozenie_text', text: '75' },
            { name: 'left_vn', color: '#6DE90B' },
            { name: 'right_vn', color: '#6DE90B' },
            { name: 'circle_1', stroke: '#6DE90B' },
            { name: 'circle_2', stroke: '#6DE90B' },
          ],
        },
      },
      startTime: 3.02,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#8F8F8F' },
          ],
        },
      },
      startTime: 4.01,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'polozenie_text', text: '85' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1', stroke: '#8F8F8F' },
            { name: 'circle_2', stroke: '#8F8F8F' },
          ],
        },
      },
      startTime: 4.02,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#6DE90B' },
          ],
        },
      },
      startTime: 5.01,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'polozenie_text', text: '100' },
            { name: 'left_vn', color: '#6DE90B' },
            { name: 'right_vn', color: '#6DE90B' },
            { name: 'circle_1', stroke: '#6DE90B' },
            { name: 'circle_2', stroke: '#6DE90B' },
          ],
        },
      },
      startTime: 5.02,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: 6,
      human: true,
    },
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
