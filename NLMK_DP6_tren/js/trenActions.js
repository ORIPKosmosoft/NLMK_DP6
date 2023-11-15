
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
      startLifeTime: '08:00:00',
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
      { positionCoordinates: [0.35, 2.15, -3.4], lookAt: [0.1913, -0.0046, 0], position: undefined, name: 'главный вид' }, 
      { positionCoordinates: [-6.58, 1.12, -0.78], lookAt: [-0.0165, -0.7836, 0], position: 1, name: 'монитор #6 Воздухонагрев' },
      { positionCoordinates: [-6.15, 1.12, -0.33], lookAt: [-0.0165, -0.7836, 0], position: 2, name: 'монитор #5 Воздухонагрев' },
      { positionCoordinates: [-3.56, 1.73, -1], lookAt: [0.5216195764415446, 0.007373100235868478, 0], position: 3, name: 'ПУ №1 – Пульт управления клапанами блока воздухонагревателей конструкции Калугина (БВНК)' }, 
      { positionCoordinates: [0.06, 1.12, 0.11], lookAt: [-0.017735496836921723, -0.00104686817450884, 0], position: 4, name: 'монитор #2' }, 
      { positionCoordinates: [0.75, 1.12, 0.01], lookAt: [-0.02523549683692173, 0.3476621849510065, 0], position: 5, name: 'монитор #1' },
      { positionCoordinates: [0.1, 1.22, 0.03], lookAt: [1.077429069342384, -0.3353050130723554, 0], position: 6, name: 'телефон' }, 
      { positionCoordinates: [0.92, 1.31, -0.05], lookAt: [0.9778930701860019, 1.5707867182903412, 0], position: 7, name: 'рация' },
      { positionCoordinates: [1.77, 1.59, -0.48], lookAt: [1.111833144037235, -0.0018067781465321568, 0], position: 8, name: 'ПУ №2 – Пуль управления бесконусное загрузочное устройство (БЗУ)' }, 
      { positionCoordinates: [2.96, 1.95, -1.0], lookAt: [0.6879109600288498, 0.001624744992681849, 0], position: 9, name: 'ПУ №3 – Пульт управления основных механизмов доменной печи №6 (ДП-6)' }, 
    ],
    loadModels: [
      'All',
      'Highlight',
      'Console_BVNK',
      'Console_BZU',
      'Console_DP6',
      'Console_PSODP6',
      'Console_UGKS',
    ],
  },
  svgVals: [],
  startPos: {
    IF2D: [],
    IF3D: [],
  },
  audio: [],
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
    enable: false,
    perfomance: undefined,
  },
};

/* TODO --------------------------------------------------------------------------------------------------------------
Конец сценария будет засчитан после того, как:
будут выполнены все дейтсвия
таймер сценария будет больше чем максимальное время какого-то действия + 1 сек
--------------------------------------------------------------------------------------------------------------*/
const timeDiff = 0;
let tempActions = [
  // Первый сценарий  // MAIN ALL
  [
    // {
    //   action: {
    //     target3D: 'PhoneButton001',
    //     material: 'PhoneButton000',
    //   },
    //   startTime: 0,
    // },
    {
      lifeTime: '07:30:00',
      audio: 'tts-1',
      startTime: timeDiff + 0,
    },
    ////--------------------------------1----------------------------------------
    //// Клик 29  НЕТ ДАННЫХ
    {
      scenarioText: 'Открыть клапан 029 на дымовую трубу.',
      sender: 'Система',
      action: {
        target2D: 'kl029',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 029' },
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'btn_open', color: '#FFFFFF', stroke: '#000000' },
            { name: 'polozenie_text', text: '51' },
            { name: 'polozenie_button_text', color: '#000000' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl029', stroke: '#8F8F8F' },
            { name: 'circle_2_kl029', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
      },
      audio: 'tts-2',
      startTime: timeDiff + 0.1,
      human: true, 
      concentration: [
        { text: 'Клапан 029', x: 41, y: 48, w: 3, h: 6.5, position: [1], scheme: 'vnk_main'},
      ]
    },
    // открыть
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
      },
      startTime: timeDiff + 0.2,
      human: true,
    },
    // да
    {
      action: {
        target2D: 'open_vn1',
      },
      startTime: timeDiff + 0.4,
      human: true,
    },


    // мигание
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'polozenie_text', text: '55' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'kl029', color: '#00FF00' },
            { name: 'kl029_proc', text: '55' },
            { name: 'circle_1_kl029', stroke: '#00FF00' },
            { name: 'circle_2_kl029', stroke: '#00FF00' },

            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
          ],
        },
      },
      startTime: timeDiff + 1,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#8F8F8F' },
            { name: 'kl029_proc', text: '65' },
            { name: 'polozenie_text', text: '65' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl029', stroke: '#8F8F8F' },
            { name: 'circle_2_kl029', stroke: '#8F8F8F' },

            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
      },
      startTime: timeDiff + 2,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#00FF00' },
            { name: 'kl029_proc', text: '75' },
            { name: 'polozenie_text', text: '75' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_kl029', stroke: '#00FF00' },
            { name: 'circle_2_kl029', stroke: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
          ],
        },
      },
      startTime: timeDiff + 3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#8F8F8F' },
            { name: 'kl029_proc', text: '85' },
            { name: 'polozenie_text', text: '85' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl029', stroke: '#8F8F8F' },
            { name: 'circle_2_kl029', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
      },
      startTime: timeDiff + 4,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'kl029', color: '#00FF00' },
            { name: 'kl029_proc', text: '100' },
            { name: 'polozenie_text', text: '100' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },        //  #6E6E6E //  #000;
            { name: 'btn_open', color: '#E6E6E6', stroke: '#C4C4C4' },  //  #C4C4C4 //  #fff
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_kl029', stroke: '#00FF00' },
            { name: 'circle_2_kl029', stroke: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
          ],
        },
      },
      startTime: timeDiff + 5,
    },
    {
      text: 'Клапан 029 на дымовую трубу открыт.',
      sender: 'Система',
      startTime: timeDiff + 5.2,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 5.4,
      human: true,
    },
    ////--------------------------------2----------------------------------------
    //// клик по ВН38 на схеме  ОТКРЫТ
    {
      scenarioText: 'Закрыть клапан 038 на подогреватель газа.',
      sender: 'Система',
      audio: 'tts-3',
      action: {
        target2D: 'kl038',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 038' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'btn_open', color: '#FFFFFF', stroke: '#000000' },
            { name: 'polozenie_text', text: '100' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },        //  #6E6E6E //  #000;
            { name: 'btn_open', color: '#E6E6E6', stroke: '#C4C4C4' },  //  #C4C4C4 //  #fff
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_kl038', stroke: '#00FF00' },
            { name: 'circle_2_kl038', stroke: '#00FF00' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      // lifeTime: '10:00:00',
      // startTime: timeDiff + 0,
      startTime: timeDiff + 5.6,
      human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 942,
            y: 580
          },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 51.18, y: 60.6, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 47.50, y: 60.6, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 5.8,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 6,
      human: true,
    },
    // мигание 
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'btn_open', color: '', stroke: '' },
            { name: 'polozenie_text', text: '45' },
            { name: 'kl038_proc', text: '45' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'kl038', color: '#ff1e00' },
            { name: 'circle_1_kl038', stroke: '#ff1e00' },
            { name: 'circle_2_kl038', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 7,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl038_proc', text: '35' },
            { name: 'polozenie_text', text: '35' },
            { name: 'kl038', color: '#8F8F8F' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl038', stroke: '#8F8F8F' },
            { name: 'circle_2_kl038', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 8,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl038', color: '#ff1e00' },
            { name: 'kl038_proc', text: '25' },
            { name: 'polozenie_text', text: '25' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl038', stroke: '#ff1e00' },
            { name: 'circle_2_kl038', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 9,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl038', color: '#8F8F8F' },
            { name: 'kl038_proc', text: '15' },
            { name: 'polozenie_text', text: '15' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl038', stroke: '#8F8F8F' },
            { name: 'circle_2_kl038', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 10,
    },
    // конечное состояние
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl038', color: '#ff1e00' },
            { name: 'kl038_proc', text: '0' },
            { name: 'polozenie_text', text: '0' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000' },        //  #6E6E6E //  #000;
            { name: 'btn_open', color: '#fff', stroke: '#000' },  //  #C4C4C4 //  #fff       //  #000
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl038', stroke: '#ff1e00' },
            { name: 'circle_2_kl038', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 11,
    },
    // ЧАТ
    {
      text: 'Клапан 038 на подогреватель газа закрыт.',
      sender: 'Система',
      audio: 'tts-3',
      action: {
        window2D: {
          elements: []
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 11.2,
    },
    // закрыть окно ВН
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 11.4,
      human: true,
    },
    ////--------------------------------3----------------------------------------
    //// клик по ВН37 на схеме  НЕТ ДАННЫХ
    {
      scenarioText: 'Закрыть клапан 037 на подогреватель газа.',
      sender: 'Система',
      audio: 'tts-4',
      action: {
        target2D: 'kl037',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 037' },
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'polozenie_text', text: '65' },
            { name: 'polozenie_button_text', color: '#000000' },
            { name: 'btn_open', color: '#FFFFFF', stroke: '#000000' },

            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl037', stroke: '#8F8F8F' },
            { name: 'circle_2_kl037', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 64.4, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      // lifeTime: '10:00:00',
      startTime: timeDiff + 11.6,
      human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1200,
            y: 580
          },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 64, y: 60.6, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 60.3, y: 60.6, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 11.8,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 12,
      human: true,
    },
    // мигание 
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'btn_open', color: '', stroke: '' },
            { name: 'polozenie_text', text: '45' },
            { name: 'kl037_proc', text: '45' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'kl037', color: '#ff1e00' },
            { name: 'circle_1_kl037', stroke: '#ff1e00' },
            { name: 'circle_2_kl037', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 13,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl037_proc', text: '35' },
            { name: 'polozenie_text', text: '35' },
            { name: 'kl037', color: '#8F8F8F' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl037', stroke: '#8F8F8F' },
            { name: 'circle_2_kl037', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 14,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl037', color: '#ff1e00' },
            { name: 'kl037_proc', text: '25' },
            { name: 'polozenie_text', text: '25' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl037', stroke: '#ff1e00' },
            { name: 'circle_2_kl037', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 15,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl037', color: '#8F8F8F' },
            { name: 'kl037_proc', text: '15' },
            { name: 'polozenie_text', text: '15' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl037', stroke: '#8F8F8F' },
            { name: 'circle_2_kl037', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 16,
    },
    // конечное состояние
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl037', color: '#ff1e00' },
            { name: 'kl037_proc', text: '0' },
            { name: 'polozenie_text', text: '0' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000' },        //  #6E6E6E //  #000;
            { name: 'btn_open', color: '#fff', stroke: '#000' },  //  #C4C4C4 //  #fff       //  #000
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl037', stroke: '#ff1e00' },
            { name: 'circle_2_kl037', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 17,
    },
    // ЧАТ
    {
      text: 'Клапан 037 на подогреватель газа закрыт.',
      sender: 'Система',
      startTime: timeDiff + 17.2,
    },
    // закрыть окно ВН
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 17.4,
      human: true,
    },

    ////--------------------------------4----------------------------------------
    //// клик по ВН07 на схеме  ОТКРЫТ
    {
      scenarioText: 'Закрыть клапан 007 на подогреватель воздуха.',
      sender: 'Система',
      audio: 'tts-5',
      action: {
        target2D: 'kl007',
        window2D: {
          newPositionWindow: {
            x: 1030,
            y: 557
          },
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 007' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'polozenie_text', text: '100' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_open', color: '#E6E6E6', stroke: '#C4C4C4' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_kl007', stroke: '#8F8F8F' },
            { name: 'circle_2_kl007', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 17.6,
      human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {
            x: 1208,
            y: 995 - 292
          },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 64.4, y: 73, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 60.8, y: 73, w: 3.3, h: 2.5, id: 'open_vn1' },  //  wind 2
        ]
      },
      startTime: timeDiff + 17.8,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 18,
      human: true,
    },
    // мигание 
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'polozenie_text', text: '45' },
            { name: 'kl007_proc', text: '45' },
            { name: 'kl007', color: '#ff1e00' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl007', stroke: '#ff1e00' },
            { name: 'circle_2_kl007', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 19,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl007_proc', text: '35' },
            { name: 'kl007', color: '#8F8F8F' },
            { name: 'polozenie_text', text: '35' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl007', stroke: '#8F8F8F' },
            { name: 'circle_2_kl007', stroke: '#8F8F8F' },

            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 20,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl007', color: '#ff1e00' },
            { name: 'kl007_proc', text: '25' },
            // { name: 'polozenie_text', text: '25' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl007', stroke: '#ff1e00' },
            { name: 'circle_2_kl007', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 21,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl007', color: '#8F8F8F' },
            { name: 'kl007_proc', text: '15' },
            { name: 'polozenie_text', text: '15' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl007', stroke: '#8F8F8F' },
            { name: 'circle_2_kl007', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 22,
    },
    // конечное состояние
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl007', color: '#ff1e00' },
            { name: 'kl007_proc', text: '0' },
            { name: 'polozenie_text', text: '0' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000' },        //  #6E6E6E //  #000;
            { name: 'btn_open', color: '#fff', stroke: '#000' },  //  #C4C4C4 //  #fff       //  #000
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl007', stroke: '#ff1e00' },
            { name: 'circle_2_kl007', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 23,
    },
    // ЧАТ
    {
      text: 'Клапан 007 на подогреватель газа закрыт.',
      sender: 'Система',
      action: {
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 23.2,
    },
    // закрыть окно ВН
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 23.4,
      human: true,
    },


    ////--------------------------------5----------------------------------------
    //// клик по ВН28 на схеме  ОТКРЫТ
    {
      scenarioText: 'Закрыть клапан 028 на подогреватель воздуха.',
      sender: 'Система',
      audio: 'tts-6',
      action: {
        target2D: 'kl028',
        window2D: {
          newPositionWindow: {
            x: 776,
            y: 544
          },
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 028' },
            { name: 'circle_1_kl028', stroke: '#FFFFFF' },
            { name: 'circle_2_kl028', stroke: '#FFFFFF' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'polozenie_text', text: '100' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_open', color: '#E6E6E6', stroke: '#C4C4C4' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
          ],

        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 24.00,
      human: true, // true - нужен клик от человека, false - не нужен; если не писать этот атрибут, то засчитывается false
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {
            x: 957,
            y: 693
          },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 51.8, y: 72, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 48.2, y: 72, w: 3.3, h: 2.5, id: 'open_vn1' },  //  wind 2
        ]
      },
      startTime: timeDiff + 24.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 24.4,
      human: true,
    },
    // мигание 
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'btn_open', color: '', stroke: '' },
            { name: 'polozenie_text', text: '45' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'kl028_proc', text: '45' },
            { name: 'kl028', color: '#ff1e00' },
            { name: 'circle_1_kl028', stroke: '#ff1e00' },
            { name: 'circle_2_kl028', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 25,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'polozenie_text', text: '35' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'kl028_proc', text: '35' },
            { name: 'kl028', color: '#8F8F8F' },
            { name: 'circle_1_kl028', stroke: '#8F8F8F' },
            { name: 'circle_2_kl028', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 26,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl028', color: '#ff1e00' },
            { name: 'kl028_proc', text: '25' },
            { name: 'polozenie_text', text: '25' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl028', stroke: '#ff1e00' },
            { name: 'circle_2_kl028', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 27,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl028', color: '#8F8F8F' },
            { name: 'kl028_proc', text: '15' },
            { name: 'polozenie_text', text: '15' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_kl028', stroke: '#8F8F8F' },
            { name: 'circle_2_kl028', stroke: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 28,
    },
    // конечное состояние
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl028', color: '#ff1e00' },
            { name: 'kl028_proc', text: '0' },
            { name: 'polozenie_text', text: '0' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000' },        //  #6E6E6E //  #000;
            { name: 'btn_open', color: '#fff', stroke: '#000' },     //  #C4C4C4 //  #fff       //  #000
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_kl028', stroke: '#ff1e00' },
            { name: 'circle_2_kl028', stroke: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 29,
    },
    // ЧАТ
    {
      text: 'Клапан 028 на подогреватель газа закрыт.',
      sender: 'Система',
      startTime: timeDiff + 29.2,
    },
    {
      text: 'Подогреватели воздуха и газа отделены.',
      audio: 'tts-7',
      sender: 'Система',
      startTime: timeDiff + 29.4,
    },
    // закрыть окно ВН
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 29.6,
      human: true,
    },

    ////--------------------------------0----------------------------------------
    {
      scenarioText: 'Газовщик сообщает остановку доменной печи.',
      sender: 'Система',
      audio: 'tts-8',
      startTime: timeDiff + 31,
    },
    ////--------------------------------1----------------------------------------
    {
      scenarioText: '1. Взять в руку трубку и нажать на кнопку с надписью: «Газовый цех». После разговора положить трубку.',
      sender: 'Газовщик',
      action: {
        target3D: 'PhoneButton001',
        position: { y: 0.0144 },
      },
      duration: 0.15,
      lifeTime: '07:45:00',
      startTime: timeDiff + 33,
      human: true,
    },
    {
      audio: 'tts-9',
      action: {
        target3D: 'PhoneButton001',
        position: { y: 0.015 },
      },
      duration: 0.15,
      startTime: timeDiff + 33.15,
    },
    ////--------------------------------2---------------------------------------- 
    {
      scenarioText: '2. Взять в руку трубку и нажать на кнопку с надписью: «Насосный цех». После разговора положить трубку.',
      sender: 'Газовщик',
      action: {
        target3D: 'PhoneButton006',
        position: { y: 0.0144 },
      },
      duration: 0.15,
      startTime: timeDiff + 34,
      human: true,
    },
    {
      audio: 'tts-9',
      action: {
        target3D: 'PhoneButton006',
        position: { y: 0.015 },
      },
      duration: 0.15,
      startTime: timeDiff + 34.15,
    },
    ////--------------------------------3---------------------------------------- 
    {
      scenarioText: '3. Взять в руку трубку и нажать на кнопку с надписью: «Кислородный цех». После разговора положить трубку.',
      sender: 'Газовщик',
      action: {
        target3D: 'PhoneButton017',
        position: { y: 0.0144 },
      },
      duration: 0.15,
      startTime: timeDiff + 35,
      human: true,
    },
    {
      audio: 'tts-9',
      action: {
        target3D: 'PhoneButton017',
        position: { y: 0.015 },
      },
      duration: 0.15,
      startTime: timeDiff + 35.15,
    },
    ////--------------------------------4---------------------------------------- 
    {
      scenarioText: '4. Взять в руку трубку и нажать на кнопку с надписью: «ЭВС». После разговора положить трубку.',
      sender: 'Газовщик',
      action: {
        target3D: 'PhoneButton020',
        position: { y: 0.0144 },
      },
      duration: 0.15,
      startTime: timeDiff + 36,
      human: true,
    },
    {
      action: {
        target3D: 'PhoneButton020',
        position: { y: 0.015 },
      },
      duration: 0.15,
      startTime: timeDiff + 36.15,
    },
    // 1.2    // DP
    ////--------------------------------1---------------------------------------- 
    {
      audio: 'tts-10',
      scenarioText: 'произошла остановка вдувания ПУТ. На общей схеме ДП показать, что отсутствует давление в разделе ПУТ в ячейках Fобщ, т/ч – «0» и Fтек, т/ч «0.0»',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0.0' },
          ]
        }
      },

      startTime: timeDiff + 37,
    },
    {
      audio: 'tts-11',
      lifeTime: '08:00:00',
    },
    ////--------------------------------2----------------------------------------
    {
      scenarioText: 'Поднять природный газ до 37000',
      sender: 'Система',
      action: {
        target2D: 't_r_4',
      },
      lifeTime: '10:00:00',
      startTime: timeDiff + 38,
      human: true,
    }, {
      action: {
        target2D: 'vz_3',
        window2D: {
          elements: [
            { name: 'vz_number', text: '3' },
          ]
        }
      },
      startTime: timeDiff + 38.2,
      human: true,
    }, {
      action: {
        target2D: 'vz_7',
        window2D: {
          elements: [
            { name: 'vz_number', text: '37' },
          ]
        }
      },
      startTime: timeDiff + 38.4,
      human: true,
    }, {
      action: {
        target2D: 'vz_0',
        window2D: {
          elements: [
            { name: 'vz_number', text: '370' },
          ]
        }
      },
      startTime: timeDiff + 38.6,
      human: true,
    }, {
      action: {
        target2D: 'vz_0',
        window2D: {
          elements: [
            { name: 'vz_number', text: '3700' },
          ]
        }
      },
      startTime: timeDiff + 38.8,
      human: true,
    }, {
      action: {
        target2D: 'vz_0',
        window2D: {
          elements: [
            { name: 'vz_number', text: '37000' },
          ]
        }
      },
      startTime: timeDiff + 39,
      human: true,
    }, {
      action: {
        target2D: 'vz_ok',
        window2D: {
          elements: [
            { name: 'F_prir_gaz_table', text: '37000' },
          ]
        }
      },
      startTime: timeDiff + 39.2,
      human: true,
    },
    ////--------------------------------3----------------------------------------

    {
      scenarioText: 'На общей схеме ДП нажать на символ «302» над клапаном 722.',
      sender: 'Система',
      action: {
        target2D: 't_b_302_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
          ]
        }
      },
      startTime: timeDiff + 39.4,
      human: true,
    },
    {
      scenarioText: 'нажать на клавишу «расход ПГ», ',
      sender: 'Система',
      action: {
        target2D: 'ws3_ttg_text_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'ТТГ' },
            { name: 'F_prirGaz', stroke: '#c4bdb3' }, //  #000  //  #c4bdb3
            { name: 'f_prirgaz', stroke: '#c4bdb3' },
            { name: 't_r_ttg', stroke: '#000' },
          ]
        }
      },
      startTime: timeDiff + 39.6,
      human: true,
    },
    { // priczvuksinal visible
      scenarioText: 'Повторить действие до возвращения клавиши «расход ПГ».',
      sender: 'Система',
      action: {
        target2D: 'ws3_ttg2_text_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
            { name: 'F_prirGaz', stroke: '#000' }, //  #000  //  #c4bdb3
            { name: 'f_prirgaz', stroke: '#000' },
            { name: 't_r_ttg', stroke: '#c4bdb3' },
          ]
        },

      },
      startTime: timeDiff + 39.8,
      human: true,
    },
    {
      scenarioText: 'Затем появится окно с предупреждением – нажать на клавишу «Закрыть».',
      sender: 'Система',
      action: {
        target2D: 'pzs_close_btn',
      },
      startTime: timeDiff + 40,
      human: true,
    },
    {
      scenarioText: 'Доп. окно закрываем через крестик ',
      sender: 'Система',
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 40.2,
      human: true,
    },
    ////--------------------------------3.1
    {
      scenarioText: 'нажимаем на значение у ТТГ 22000 на общей схеме. Появляется окошко и вводим значение 2200 вручную. ',
      sender: 'Система',
      action: {
        target2D: 't_r_5',
        window2D: {
          elements: [
            { name: 'vz_number', text: '0' },
          ]
        },
      },
      startTime: timeDiff + 40.4,
      human: true,
    },

    {
      action: {
        target2D: 'vz_2',
        window2D: {
          elements: [
            { name: 'vz_number', text: '2' },
          ]
        }
      },
      startTime: timeDiff + 40.6,
      human: true,
    }, {
      action: {
        target2D: 'vz_2',
        window2D: {
          elements: [
            { name: 'vz_number', text: '22' },
          ]
        }
      },
      startTime: timeDiff + 40.8,
      human: true,
    }, {
      action: {
        target2D: 'vz_0',
        window2D: {
          elements: [
            { name: 'vz_number', text: '220' },
          ]
        }
      },
      startTime: timeDiff + 41,
      human: true,
    }, {
      action: {
        target2D: 'vz_0',
        window2D: {
          elements: [
            { name: 'vz_number', text: '2200' },
          ]
        }
      },
      startTime: timeDiff + 41.2,
      human: true,
    },
    {
      action: {
        target2D: 'vz_ok',
        window2D: {
          elements: [
            { name: 'TTG_zadanie', text: '2200' },
          ]
        }
      },
      startTime: timeDiff + 41.4,
      human: true,
    },
    ////--------------------------------3.2
    {
      scenarioText: 'На общей схеме ДП нажать на символ «302» над клапаном 722.',
      sender: 'Система',
      action: {
        target2D: 't_b_302_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
          ]
        }
      },
      startTime: timeDiff + 41.6,
      human: true,
    },
    {
      scenarioText: 'нажать на клавишу «расход ПГ», ',
      sender: 'Система',
      action: {
        target2D: 'ws3_ttg_text_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'ТТГ' },
            { name: 'F_prirGaz', stroke: '#c4bdb3' }, //  #000  //  #c4bdb3
            { name: 'f_prirgaz', stroke: '#c4bdb3' },
            { name: 't_r_ttg', stroke: '#000' },
          ]
        }
      },
      startTime: timeDiff + 41.8,
      human: true,
    },
    {
      scenarioText: 'Доп. окно закрываем через крестик ',
      sender: 'Система',
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 42,
      human: true,
    },
    ////--------------------------------4       time 7
    {
      scenarioText: 'падает температура на лётке Л.2 и Л.3 до пустого значения',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
            { name: 'field_L2', color: '#F7F700' },
            { name: 'field_L3', color: '#F7F700' },
            { name: 'L2', text: '1000' },
            { name: 'L3', text: '1000' },
          ]
        }
      },
      startTime: timeDiff + 43,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'field_L2', color: '#FF0000' },
            { name: 'field_L3', color: '#FF0000' },
            { name: 'L2', text: '800' },
            { name: 'L3', text: '800' },
          ]
        }
      },
      startTime: timeDiff + 44,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'L2', text: '400' },
            { name: 'L3', text: '400' },
          ]
        }
      },
      startTime: timeDiff + 45,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'field_L2', color: '#FFFFFF' },
            { name: 'field_L3', color: '#FFFFFF' },
            { name: 'L2', text: '0' },
            { name: 'L3', text: '0' },
          ]
        }
      },
      startTime: timeDiff + 46,
    },


    // 1.3 
    ////--------------------------------1---------------------------------------- 
    {
      scenarioText: 'По рации мастер печи сообщил команду газовщикам.',
      sender: 'Работник',
      action: {
        window2D: {
          elements: []
        }
      },
      lifeTime: '08:30:00',
      startTime: timeDiff + 47,
    },
    ////--------------------------------2
    {
      scenarioText: 'Подойти к монитору 1 «общая схема ВНК» перейти на вкладку «ВНК №1», нажать на клавишу «Перекидка» всплывёт доп. окно',
      sender: 'Система',
      action: {
        target2D: 'perekidta_btn',
        window2D: {
          elements: [
            // many gray
          ]
        }
      },
      startTime: timeDiff + 48,
      human: true,
    },
    {
      scenarioText: 'нажать на кнопку «Нагрев-Отделение 2»',
      sender: 'Система',
      action: {
        target2D: 'nagrev_otd2_btn',
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 48.2,
      human: true,
    }, {
      scenarioText: 'нажать на кнопку «Пуск»',
      sender: 'Система',
      action: {
        target2D: 'pericNagrev_pusk_btn',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Пуск' },
          ]
        },
        helper2D: [
          { x: 37.9, y: 94.9, w: 3.2, h: 2.4, id: 'close_vn' },
          { x: 34.3, y: 94.9, w: 3.2, h: 2.4, id: 'open_vn1' },  //  wind 2
        ]
      },
      startTime: timeDiff + 48.4,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
      },

      startTime: timeDiff + 48.6,
      human: true,
    },
    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 48.8,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK close
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 49,
      human: true,
    },
    // O_p_n_na_k_na-BVNK_VNK1 схема обновляется
    {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 50,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 51,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 52,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 53,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 54,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 55,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 56,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 57,
    },

    ////--------------------------------3-------------------------------------
    {
      scenarioText: 'На схеме «ВНК №1» нажать на вкладку «Перекидка»',
      sender: 'Система',
      action: {
        target2D: 'perekidta_btn',
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 57.2,
      human: true,
    },
    { // win_otdel2_na_vnk OPEN
      scenarioText: 'затем на «Отделение 2 – Отделение», ',
      sender: 'Система',
      action: {
        target2D: 'otdel_otdel2_btn',
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 57.4,
      human: true,
    }, {
      scenarioText: 'нажать на кнопку «Пуск»',
      sender: 'Система',
      action: {
        target2D: 'otdel2_pusk_btn',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Пуск' },
          ]
        },
        helper2D: [
          { x: 39.4, y: 94, w: 3.2, h: 2.4, id: 'close_vn' },
          { x: 35.8, y: 94, w: 3.2, h: 2.4, id: 'open_vn1' },  //  wind 2
        ]
      },
      startTime: timeDiff + 57.4,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {

        },
      },

      startTime: timeDiff + 57.6,
      human: true,
    },
    {  // win_otdel2_na_vnk CLOSE
      action: {
        target2D: 'otdel2_close_btn',
      },
      startTime: timeDiff + 57.8,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK CLOSE
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 58,
      human: true,
    },
    // O_p_n_na_k_na-BVNK_VNK1 схема обновляется
    {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 59,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 60,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 61,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 62,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 63,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 64,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 65,
    },

    ////--------------------------------4-------------------------------------

    {
      scenarioText: 'На схеме «ВНК №2» нажать на вкладку «Перекидка»',
      sender: 'Система',
      action: {
        target2D: 'perekidta_btn',
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 65.2,
      human: true,
    },
    { // O_p_n_na_k_na-o_2_na_VNK OPEN
      scenarioText: 'нажать на кнопку «Нагрев-Отделение 2»',
      sender: 'Система',
      action: {
        target2D: 'nagrev_otd2_btn',
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 65.4,
      human: true,
    }, {
      scenarioText: 'нажать на кнопку «Пуск»',
      sender: 'Система',
      action: {
        target2D: 'pericNagrev_pusk_btn',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Пуск' },
          ]
        },
        helper2D: [
          { x: 37.9, y: 94.9, w: 3.2, h: 2.4, id: 'close_vn' },
          { x: 34.3, y: 94.9, w: 3.2, h: 2.4, id: 'open_vn1' },  //  wind 2
        ]
      },
      startTime: timeDiff + 65.6,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
      },

      startTime: timeDiff + 65.8,
      human: true,
    },
    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 66,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK CLOSE
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 66.2,
      human: true,
    },
    // O_p_n_na_k_na-BVNK_VNK2 схема обновляется
    {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 67.7,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 69,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 70,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 71,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 72,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 73,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 74,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 75,
    },


    // 1.4 сценарий
    ////--------------------------------1---------------------------------------- РАЦИЯ
    {
      scenarioText: '1. Подойти к рации и прожать кнопку «Литейный фурменный поддоменник», когда загорится красный индикатор, то сообщить голосом действия. После выполнения отпустить прожатие кнопки.',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },
      lifeTime: '08:45:00',
      startTime: timeDiff + 76,
      human: true,
    },
    ////--------------------------------2---------------------------------------- 
    {
      scenarioText: '2. . На пульте управления основных механизмах ДП-6 перевести тумблер из положения «Авт.3» в положение «Дист.2» на маркировке «Природный газ» «Клапан 721, выбор режима управления».',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },

      startTime: timeDiff + 77,
      human: true,
    },
    ////--------------------------------3---------------------------------------- 
    {
      scenarioText: '3. Перевести тумблер из положения «Авт.4» в положение «Дист.3» на маркировке «Атмосферные клапана» «Клапан 1», «Клапан 2» и «Клапан 3» поочерёдно.',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },

      startTime: timeDiff + 78,
      human: true,
    },
    ////--------------------------------4---------------------------------------- 
    {
      scenarioText: '4. На БРУ маркировке «F природного газа. Регулятор» понизить давление на дисплее от 028.5 до 017.0 путем прожатия кнопки управления «» и соответственно линейный индикатор (ползунок сверху зелёный) снизится до нужной отметки.',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },

      startTime: timeDiff + 79,
      human: true,
    },
    ////--------------------------------5---------------------------------------- 
    {
      scenarioText: '5. Водопроводчик по рации сообщает о выполненных своих операциях.',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },

      startTime: timeDiff + 80,
    },
    ////--------------------------------6---------------------------------------- 
    {
      scenarioText: '6. Подойти к рации и прожать кнопку «Литейный фурменный поддоменник», когда загорится красный индикатор, то сообщить голосом действия. После выполнения отпустить прожатие кнопки.',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },

      startTime: timeDiff + 81,
      human: true,
    },
    ////--------------------------------7---------------------------------------- 
    {
      scenarioText: '7. На ПУ №3 «Клапан 721, дистанционное управление» провернуть тумблер в положение «1», т.е. «Закр» и через пару секунд вернуть в положение «0», зелёный индикатор «Открыт» погаснет и загорится красный индикатор «Закрыт».',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },

      startTime: timeDiff + 82,
      human: true,
    },


    // 1.5 сценарий
    ////--------------------------------1---------------------------------------- 
    {
      scenarioText: '1. Мастер печи по рации сообщает о необходимых действиях. Подойти к рации и прожать кнопку «Литейный фурменный поддоменник», когда загорится красный индикатор, то сообщить голосом действия. После выполнения отпустить прожатие кнопки.',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },
      lifeTime: '09:00:00',
      startTime: timeDiff + 83,
      human: true,
    },
    ////--------------------------------2---------------------------------------- 
    {
      scenarioText: '2. На ПУ №3 маркировка «СНОРТ» провернуть тумблер из нейтрального положения «0» в сторону «Откр», затем вернуть в положение «0» и через какое-то время повторить действие с открытием и, после опять зафиксировать в положение «0». На схеме ДП идет поднятие давления ~ Н7, а на фурмах понижается чуть.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      // lifeTime: '10:00:00',
      startTime: timeDiff + 84,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '7' },
          ]
        }
      },
      startTime: timeDiff + 85,
    },
    ////--------------------------------3---------------------------------------- 
    {
      scenarioText: '3. Повторить операцию п.2.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      // lifeTime: '10:00:00',
      startTime: timeDiff + 86,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '15' },
          ]
        }
      },
      startTime: timeDiff + 87,
    },
    ////--------------------------------4---------------------------------------- 
    {
      scenarioText: '4. Подойти к рации и прожать кнопку «Литейный фурменный поддоменник», когда загорится красный индикатор, то сообщить голосом действия. ',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      // lifeTime: '10:00:00',
      startTime: timeDiff + 88,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '14' },
          ]
        }
      },
      startTime: timeDiff + 89,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '12' },
          ]
        }
      },
      startTime: timeDiff + 90,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '10' },
          ]
        }
      },
      startTime: timeDiff + 91,
    },
    ////--------------------------------5---------------------------------------- 
    {
      scenarioText: '5. Повторить операцию п.2.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      // lifeTime: '10:00:00',
      startTime: timeDiff + 92,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '15' },
          ]
        }
      },
      startTime: timeDiff + 93,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '22' },
          ]
        }
      },
      startTime: timeDiff + 94,
    },
    ////--------------------------------6---------------------------------------- 
    {
      scenarioText: '6. Аналогично п.4. ',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 95,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '20' },
          ]
        }
      },
      startTime: timeDiff + 96,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '18' },
          ]
        }
      },
      startTime: timeDiff + 97,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '17' },
          ]
        }
      },
      startTime: timeDiff + 98,
    },
    ////--------------------------------7---------------------------------------- 
    {
      scenarioText: '7. Взять в руку трубку и нажать на кнопку с надписью: «ЭВС».',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 99,
    },
    ////--------------------------------8---------------------------------------- 
    {
      scenarioText: '8. Аналогично п.2. На схеме ДП давление поднимется до Н33.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 100,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '25' },
          ]
        }
      },
      startTime: timeDiff + 101,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '33' },
          ]
        }
      },
      startTime: timeDiff + 102,
    },
    ////--------------------------------9---------------------------------------- 
    {
      scenarioText: '9. Аналогично п.4.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 103,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '31' },
          ]
        }
      },
      startTime: timeDiff + 104,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '29' },
          ]
        }
      },
      startTime: timeDiff + 105,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '28' },
          ]
        }
      },
      startTime: timeDiff + 106,
    },
    ////--------------------------------10---------------------------------------- 
    {
      scenarioText: '10. Аналогично п.2. На схеме ДП давление поднимется до Н49.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 107,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '35' },
          ]
        }
      },
      startTime: timeDiff + 108,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '49' },
          ]
        }
      },
      startTime: timeDiff + 109,
    },
    ////--------------------------------11---------------------------------------- 
    {
      scenarioText: '11. Аналогично п.4.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 110,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '47' },
          ]
        }
      },
      startTime: timeDiff + 111,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '45' },
          ]
        }
      },
      startTime: timeDiff + 112,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '44' },
          ]
        }
      },
      startTime: timeDiff + 113,
    },
    ////--------------------------------12---------------------------------------- 
    {
      scenarioText: '12. Аналогично п.2. На схеме ДП давление поднимется до Н56.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 114,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '49' },
          ]
        }
      },
      startTime: timeDiff + 115,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '56' },
          ]
        }
      },
      startTime: timeDiff + 116,
    },
    ////--------------------------------13---------------------------------------- 
    {
      scenarioText: '13. Монитор 11 и 12. На схеме ДП и БЗУ появилась окно с текстом: «БЗУ. Причина звуковой сигнализации. Возможная неготовность БЗУ». Нажать на пульте управления БЗУ верхнюю кнопку «Открыт» маркировки «Нижний шихтовый ',
      sender: 'Система',
      action: {
        target2D: 't_r_000',
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 117,
    },
    {
      action: {
        window2D: {
          elements: [
            // мигание текста
          ]
        }
      },
      startTime: timeDiff + 118,
    }, {
      action: {
        window2D: {
          elements: [
            // мигание текста
          ]
        }
      },
      startTime: timeDiff + 119,
    }, {
      action: {
        window2D: {
          elements: [
            // мигание текста
          ]
        }
      },
      startTime: timeDiff + 120,
    }, {
      action: {
        window2D: {
          elements: [
            // мигание текста
          ]
        }
      },
      startTime: timeDiff + 121,
    },
    // 3д закрывает таблички
    {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 122,
    },

    ////--------------------------------14---------------------------------------- 
    {
      scenarioText: '14. Вернуться на ПУ упр.осн.мех.ДП-6 и продолжить приоткрывать клапан «СНОРТ». На схеме ДП давление поднимется до Н60.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 123,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '55' },
          ]
        }
      },
      startTime: timeDiff + 124,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '60' },
          ]
        }
      },
      startTime: timeDiff + 125,
    },
    ////--------------------------------15---------------------------------------- 
    {
      scenarioText: '15. Подойти к монитору, на котором открыта схема БЗУ. Нажать на клавишу «Грузить» загорится зелёным цветом клавиша «Достигнут заданный уровень».',
      sender: 'Система',
      action: {
        target2D: 'bzu_gruzit_btn',
        window2D: {
          elements: [
            // green
          ]
        }
      },
      startTime: timeDiff + 126,
      human: true
    },
    {
      scenarioText: 'Затем нажать на клавишу «Запрет след.порции» подсветится зелёным цветом.',
      sender: 'Система',
      action: {
        target2D: 'bzu_ZapretSledPorci_btn',
        window2D: {
          elements: [
            // green
          ]
        }
      },
      startTime: timeDiff + 126.2,
      human: true
    },
    // { // БЫЛО НА ВИДЕО, в тексте нет
    //   action: {
    //     target2D: 'bzu_raketaNGUK2_btn',
    //     window2D: {
    //       elements: [
    //         // green
    //       ]
    //     }
    //   },
    //   startTime: timeDiff + 126.4,
    //   human: true
    // },

    { // 3D
      scenarioText: 'После подойти к ПУ №2 и нажать на кнопку «Приостанов. подачу материала» загорится красным цветом.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
            // red
          ]
        }
      },
      startTime: timeDiff + 126.6,
    },
    // { // ХЗ КОГДА ОПУСТИЛАСЬ
    //   action: {
    //     window2D: {
    //       elements: [ 
    //         { name: 'H_snotr', text: '50' },
    //       ]
    //     }
    //   },
    //   startTime: timeDiff + 126.8,
    // },

    ////--------------------------------16---------------------------------------- 
    {
      scenarioText: '16. Вернуться на ПУ упр.осн.мех.ДП-6 и продолжить приоткрывать клапан «СНОРТ». На схеме ДП давление поднимется до Н60.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 127,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '50' },
          ]
        }
      },
      startTime: timeDiff + 128,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '60' },
          ]
        }
      },
      startTime: timeDiff + 129,
    },
    ////--------------------------------17---------------------------------------- 
    {
      scenarioText: '17. Подойти к монитору, на котором открыта схема БЗУ и нажать на клавишу «Пауза» кнопка загорится зелёным цветом.',
      sender: 'Система',
      action: {
        target2D: 'bzu_pause_btn',
        window2D: {
          elements: [
            // green
          ]
        }
      },
      startTime: timeDiff + 130,
      human: true
    },
    ////--------------------------------18---------------------------------------- 
    { // 3D
      scenarioText: '18. На ПУ №3 переводим тумблер клапана 1 до щелчка в положение «2», т.е. «Откр», начинает мигать индикатор «Открыт» 3 раза и на 4-й раз фиксируется. Делаем аналогично с клапаном 3 и 2.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 131,
    },
    ////--------------------------------19---------------------------------------- 
    { // 3D
      scenarioText: '19. Перевести тумблеры в положение «0», т.е. в нейтральное положение как на видео.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 132,
    },
    ////--------------------------------20---------------------------------------- 
    { // 3D
      scenarioText: '20. По рации сообщить мастеру печи о выполненной операции.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 133,
    },
    ////--------------------------------21---------------------------------------- 
    { // 3D
      scenarioText: '21. Мастер печи по рации сообщает действия, а газовщик отвечает.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 134,
    },
    ////--------------------------------22---------------------------------------- 
    {
      scenarioText: '22. Нажать на кнопку с надписью: «Кислородный цех» и взять в руку трубку. После разговора положить трубку.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 135,
    },
    ////--------------------------------23---------------------------------------- 
    {
      scenarioText: '23. Аналогично п.2. На схеме ДП давление поднимется до Н67.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 136,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '63' },
          ]
        }
      },
      startTime: timeDiff + 137,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '67' },
          ]
        }
      },
      startTime: timeDiff + 138,
    },
    ////--------------------------------24---------------------------------------- 
    {
      scenarioText: '24. Аналогично п.4.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 139,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '65' },
          ]
        }
      },
      startTime: timeDiff + 140,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '63' },
          ]
        }
      },
      startTime: timeDiff + 141,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '62' },
          ]
        }
      },
      startTime: timeDiff + 142,
    },
    ////--------------------------------25---------------------------------------- 
    { // 3D
      scenarioText: '25. На ПУ №2 нажать на кнопку «Автоматич. СТОП» загорится красным цветом.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 143,
    },
    { // 3D
      scenarioText: 'После нажать на кнопку «ЗАКРЫТ» у «клапана вторичного выравнивания» с двух сторон.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 144,
    },
    { // 3D
      scenarioText: 'Затем нажать на кнопку «Открыт» у «клапан сброса» с двух сторон.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 145,
    },
    ////--------------------------------26---------------------------------------- 
    {
      scenarioText: '26. Мастер печи по рации сообщает действия, а газовщик отвечает.',
      sender: 'Газовщик',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 146,
    },
    ////--------------------------------27---------------------------------------- 
    {
      scenarioText: '27. Аналогично п.2. На схеме ДП давление поднимется до Н89.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 147,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '80' },
          ]
        }
      },
      startTime: timeDiff + 148,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '89' },
          ]
        }
      },
      startTime: timeDiff + 149,
    },
    {
      scenarioText: 'Клапан 002 автоматически начинает закрываться с подмигиванием красного цвета на схеме ДП.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff1e00' },

          ]
        }
      },
      startTime: timeDiff + 150,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 151,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 152,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 153,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 154,
    },
    ////--------------------------------28---------------------------------------- 
    {
      scenarioText: '28. Аналогично п.4.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 155,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '87' },
          ]
        }
      },
      startTime: timeDiff + 156,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '85' },
          ]
        }
      },
      startTime: timeDiff + 157,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '84' },
          ]
        }
      },
      startTime: timeDiff + 158,
    },
    ////--------------------------------29---------------------------------------- 
    {
      scenarioText: '29. На схеме ДП клапан 81 будет мигать красным цветом, сначала одна сторона, затем вторая и после зафиксирует положение.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 159,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_81', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 160,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_81', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 161,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_81', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 162,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_81', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 163,
    },
    ////--------------------------------30---------------------------------------- 
    { // 3d
      scenarioText: '30. На ПУ №3 «Клапан 723, дистанционное управление» провернуть тумблер в положение «2», т.е. «Откр» и через пару секунд вернуть в положение «0», красный индикатор «Закрыт» погаснет и загорится зелёный индикатор «Открыт».',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 164,
    },
    {
      scenarioText: 'На схеме ДП верхняя часть клапана загорится зелёным.',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
            { name: 'vn_723', color: '#ff1e00' },
            { name: 'vn_723', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 165,
    },
    ////--------------------------------31---------------------------------------- 
    {
      scenarioText: '31. Мастер печи по рации сообщает действия. Газовщик на рации прожимает кнопку «Лётка №3», загорается кнопка и сообщает команду.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 166,
    },
    ////--------------------------------32---------------------------------------- 
    {
      scenarioText: '32. Позвонить по телефону, нажав на кнопку «Дисп.комб» и сообщить действия через громкоговоритель. ',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 167,
    },
    ////--------------------------------33---------------------------------------- 
    {
      scenarioText: '33. Газовщик на рации прожимает кнопку «Лётка №3», загорается кнопка и сообщает команду. ',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 168,
    },
    ////--------------------------------34---------------------------------------- 
    {
      scenarioText: '34. Мастер печи по рации сообщает действия, а газовщик отвечает.   ',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 169,
    },
    ////--------------------------------35---------------------------------------- 
    {
      scenarioText: '35. Аналогично п.2. На схеме ДП давление поднимется до Н93.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 170,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '88' },
          ]
        }
      },
      startTime: timeDiff + 171,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '93' },
          ]
        }
      },
      startTime: timeDiff + 172,
    },
    ////--------------------------------36---------------------------------------- 
    {
      scenarioText: '36. Аналогично п.4.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 173,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '91' },
          ]
        }
      },
      startTime: timeDiff + 174,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '88' },
          ]
        }
      },
      startTime: timeDiff + 175,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '87' },
          ]
        }
      },
      startTime: timeDiff + 176,
    },
    ////--------------------------------37---------------------------------------- 
    {
      scenarioText: '37. Аналогично п.2. На схеме ДП давление поднимется до Н100, а также падает давление на фурмах до 0.00. На ПУ загорается индикатор «Открыт».',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 177,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '95' },
          ]
        }
      },
      startTime: timeDiff + 178,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '100' },
          ]
        }
      },
      startTime: timeDiff + 179,
    },
    ////--------------------------------38---------------------------------------- 
    {
      scenarioText: '38. Аналогично п.4.',
      sender: 'Система',
      action: {
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 180,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '98' },
          ]
        }
      },
      startTime: timeDiff + 181,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '96' },
          ]
        }
      },
      startTime: timeDiff + 182,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '95' },
          ]
        }
      },
      startTime: timeDiff + 183,
    },


    ////--------------------------------39---------------------------------------- 
    // scenarioText: 'Делаем также с 318 и 319 поочерёдно.',
    ////--------------------------------клапан 310----------------------------------------Закрыт. Автоматический в ручной-------------------------------
    {
      scenarioText: '39. На мониторе 1 с «Общая схема» перейти на вкладку «ВНК №3». Нажать на клапан 310, после нажать на клавишу «Ручной», затем «Да»,',
      sender: 'Система',
      action: {
        target2D: 'vn_310_btn',
        window2D: {
          elements: [ // ИСПРАВИТЬ ЦВЕТА !!!  //  FIX // ПЕРЕНЕСТИ ЦВЕТА С ВИДЕО. НЕ только ТУТ
            { name: 'title_work_vn', text: 'Управление клапаном 310' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },

            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },

            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Закрыт' },

            { name: 'blocks_open', color: '#00FF00' },
            { name: 'blocks_close', color: '#00FF00' },

            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_stop_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_reset_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;


            { name: 'uprav_auto_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#000000' },                     //  #6E6E6E //  #000000;


            { name: 'btn_auto', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_open', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_stop', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_reset', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000

            { name: 'block_scheme_sobr', color: '#00FF00' },
            { name: 'bypas_block', color: '#ffffff' },

            { name: 'time_full_vnk_text', text: '22' },
            { name: 'polozenie_text', text: '0' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.15, y: 71.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  //  «Ручной»
        ]
      },
      startTime: timeDiff + 184,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1765,
            y: 732
          },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 184.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1  // байпас
        ]
      },
      startTime: timeDiff + 184.4,
      human: true,
    },

    // окно ВН  //  клик байпас
    {
      scenarioText: 'после «Байпас всех блокировок», затем «Да» ',
      sender: 'Система',
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1760,
            y: 900
          },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех блокировок' },
          ],
        },
        helper2D: [
          { x: 91.90, y: 93, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 88.20, y: 93, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 184.6,
      human: true,
    },

    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'bypas_block', color: '#00FF00' },

            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.15, y: 71.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 184.8,
      human: true,
    },

    {
      scenarioText: 'и после закрываем доп. окно, через крестик.',
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 185,
      human: true,
    },
    ////
    ////--------------------------------клапан 318----------------------------------------Открыт. Автоматический в ручной-------------------------------
    {
      scenarioText: 'Нажать на клапан 318, после нажать на клавишу «Ручной», затем «Да»,',
      sender: 'Система',
      action: {
        target2D: 'vn_318_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 318' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },

            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },

            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Открыт' },

            { name: 'blocks_open', color: '#00FF00' },
            { name: 'blocks_close', color: '#00FF00' },

            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_stop_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_reset_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;


            { name: 'uprav_auto_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#000000' },                     //  #6E6E6E //  #000000;


            { name: 'btn_auto', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_open', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_stop', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_reset', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000

            { name: 'block_scheme_sobr', color: '#00FF00' },
            { name: 'bypas_block', color: '#ffffff' },

            { name: 'time_full_vnk_text', text: '22' },
            { name: 'polozenie_text', text: '0' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.15, y: 71.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  //  «Ручной»
        ]
      },
      startTime: timeDiff + 185.2,
      // startTime: timeDiff + 100,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1765,
            y: 732
          },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 185.4,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1  // байпас
        ]
      },
      startTime: timeDiff + 185.6,
      human: true,
    },
    // окно ВН -> блокировка открытие // NE RABOTAET  //  FIX
    {
      window2D: {
        elements: [
          { name: 'blocks_open', color: '#FF0000' },
          { name: 'blocks_close', color: '#FF0000' },
        ]
      },
      startTime: timeDiff + 186,
    },
    // окно ВН
    {
      scenarioText: 'после «Байпас всех блокировок», затем «Да» ',
      sender: 'Система',
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1760,
            y: 900
          },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех блокировок' },
          ],
        },
        helper2D: [
          { x: 91.90, y: 93, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 88.20, y: 93, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 186.2,
      human: true,
    },

    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'bypas_block', color: '#00FF00' },

            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.15, y: 71.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 186.4,
      human: true,
    },
    {
      scenarioText: 'и после закрываем доп. окно, через крестик.',
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 186.6,
      human: true,
    },

    ////--------------------------------клапан 319----------------------------------------Открыт. Автоматический в ручной-------------------------------
    {
      scenarioText: 'Нажать на клапан 319, после нажать на клавишу «Ручной», затем «Да»,',
      sender: 'Система',
      action: {
        target2D: 'vn_319_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 319' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },

            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },

            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Открыт' },

            { name: 'blocks_open', color: '#00FF00' },
            { name: 'blocks_close', color: '#00FF00' },

            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_stop_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_reset_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;


            { name: 'uprav_auto_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#000000' },                     //  #6E6E6E //  #000000;


            { name: 'btn_auto', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_open', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_stop', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_reset', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000

            { name: 'block_scheme_sobr', color: '#00FF00' },
            { name: 'bypas_block', color: '#ffffff' },

            { name: 'time_full_vnk_text', text: '22' },
            { name: 'polozenie_text', text: '0' },
          ]
        },
        helper2D: [
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 79.80, y: 53.2, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  //  «Ручной»
        ]
      },
      startTime: timeDiff + 186.8,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1663,
            y: 536
          },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 86.85, y: 56, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 83.20, y: 56, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 187,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
          ]
        },
        helper2D: [
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 75.40, y: 70.6, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1  // байпас
        ]
      },
      startTime: timeDiff + 187.2,
      human: true,
    },
    // окно ВН -> блокировка открытие
    {
      window2D: {
        elements: [
          { name: 'blocks_open', color: '#FF0000' },
          { name: 'blocks_close', color: '#FF0000' },
        ]
      },
      startTime: timeDiff + 188,
    },
    // окно ВН
    {
      scenarioText: 'после «Байпас всех блокировок», затем «Да» ',
      sender: 'Система',
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1600,
            y: 717
          },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех блокировок' },
          ],
        },
        helper2D: [
          { x: 83.80, y: 74.4, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 80.20, y: 74.4, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 188.2,
      human: true,
    },

    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'bypas_block', color: '#00FF00' },

            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
          ]
        },
        helper2D: [
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 75.40, y: 70.6, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1  
        ]
      },
      startTime: timeDiff + 188.4,
      human: true,
    },
    {
      scenarioText: 'и после закрываем доп. окно, через крестик.',
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 188.6,
      human: true,
    },



    ////--------------------------------40---------------------------------------- 
    {
      scenarioText: '40. Нажать на клапан 310, после нажать на клавишу «Открыть», затем «Да» и после закрываем доп. окно через крестик.',
      sender: 'Система',
      action: {
        target2D: 'vn_310_btn',
        window2D: {
          elements: [
            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'polozenie_button_text', color: '#000000' },                     //  #6E6E6E //  #000000;

            { name: 'title_work_vn', text: 'Управление клапаном 310' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },

            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },

            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Закрыт' },

            { name: 'blocks_open', color: '#FF0000' },
            { name: 'blocks_close', color: '#00FF00' },

            { name: 'polozenie_button_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_stop_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_reset_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;


            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;


            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_open', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_stop', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_reset', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000

            { name: 'block_scheme_sobr', color: '#00FF00' },
            { name: 'bypas_block', color: '#00FF00' },

            { name: 'time_full_vnk_text', text: '22' },
            { name: 'polozenie_text', text: '0' },

          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  «Открыть»
        ]
      },
      startTime: timeDiff + 188.8,
      human: true,
    },

    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1765,
            y: 732
          },
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 189,
      human: true,
    },
    //  маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_close', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_open', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk

            { name: 'status_window_text', text: 'Открывается' },

            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 189.2,
      human: true,
    },
    //  мигание
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },

            { name: 'vnk3_310_l', color: '#00FF00' },
            { name: 'vnk3_310_r', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 190,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 191,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },

            { name: 'vnk3_310_l', color: '#00FF00' },
            { name: 'vnk3_310_r', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 192,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 193,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открыт' },

            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },

            { name: 'vnk3_310_l', color: '#00FF00' },
            { name: 'vnk3_310_r', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 194,
    },
    {
      action: {
        target2D: 'close_w1',
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 194.2,
      human: true,
    },


    // окно ВН
    ////--------------------------------41---------------------------------------- 
    ////--------------------------------клапан 318----------------------------------------Открыт. Открыт в закрыт-------------------------------
    {
      scenarioText: '41. Аналогично п.40, только происходит закрытие. Как только начнёт клапан мигать красным цветом на доп. окне, стоит нажать через пару секунд на клавишу «Стоп» и после повторить операцию 2-3 раза с нажатием на «Закрыть» и «Стоп».',
      sender: 'Система',
      action: {
        target2D: 'vn_318_btn',
        window2D: {
          elements: [
            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'polozenie_button_text', color: '#000000' },                     //  #6E6E6E //  #000000;

            { name: 'title_work_vn', text: 'Управление клапаном 318' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },

            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },

            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Открыт' },

            { name: 'blocks_open', color: '#FF0000' },
            { name: 'blocks_close', color: '#FF0000' },

            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_stop_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_reset_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;


            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_open', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_stop', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_reset', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000

            { name: 'block_scheme_sobr', color: '#00FF00' },
            { name: 'bypas_block', color: '#00FF00' },

            { name: 'time_full_vnk_text', text: '22' },
            { name: 'polozenie_text', text: '0' },

          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 194.4,
      human: true,
    },
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1765,
            y: 732
          },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 194.6,
      human: true,
    },
    //  маленькое окошко ОК //  ВН Закрывается
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_close', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk

            { name: 'status_window_text', text: 'Закрывается' },

            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 194.8,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },

            { name: 'vnk3_310_l', color: '#FF0000' },
            { name: 'vnk3_310_r', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 195.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 196,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },

            { name: 'vnk3_310_l', color: '#FF0000' },
            { name: 'vnk3_310_r', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 197,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },

      },
      startTime: timeDiff + 198,
    },

    // ОКНО ВН  // КЛИК СТОП
    {
      action: {
        target2D: 'win_posle_1_stop_btn',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'polozenie_button_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;

            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
          ]
        },
      },
      startTime: timeDiff + 198.2,
      human: true
    },
    ////--------------------------------клапан 318----------------------------------------Закрыт. Закрыт в закрыт-------------------------------    //  1
    // повторить 2-3 раза. Будет 2
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1765,
            y: 732
          },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 198.4,
      human: true,
    },
    //  маленькое окошко ОК //  ВН Закрывается
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_close', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk

            { name: 'status_window_text', text: 'Закрывается' },

            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 198.6,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },

            { name: 'vnk3_310_l', color: '#FF0000' },
            { name: 'vnk3_310_r', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 199.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 200,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },

            { name: 'vnk3_310_l', color: '#FF0000' },
            { name: 'vnk3_310_r', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 201,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },

      },
      startTime: timeDiff + 202,
    },
    // ОКНО ВН  // КЛИК СТОП
    {
      action: {
        target2D: 'win_posle_1_stop_btn',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'polozenie_button_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;

            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 202.2,
      human: true
    },
    ///////
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1765,
            y: 732
          },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 202.4,
      human: true,
    },
    //  маленькое окошко ОК //  ВН Закрывается
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_close', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk

            { name: 'status_window_text', text: 'Закрывается' },

            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 202.6,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },

            { name: 'vnk3_310_l', color: '#FF0000' },
            { name: 'vnk3_310_r', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 203.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 204,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },

            { name: 'vnk3_310_l', color: '#FF0000' },
            { name: 'vnk3_310_r', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 205,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_310_l', color: '#8F8F8F' },
            { name: 'vnk3_310_r', color: '#8F8F8F' },
          ]
        },

      },
      startTime: timeDiff + 206,
    },
    ////--------------------------------клапан 318----------------------------------------Закрыт. Закрыт в закрыт-------------------------------    //  2
    // ОКНО ВН  // КЛИК СТОП
    {
      action: {
        target2D: 'win_posle_1_stop_btn',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'polozenie_button_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;

            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
        ],
      },
      startTime: timeDiff + 206.2,
      human: true
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 206.3,
      human: true,
    },




    ////--------------------------------42---------------------------------------- 
    ////--------------------------------клапан 319----------------------------------------Открыт. Открыт в закрыт-------------------------------
    {
      scenarioText: '42. Аналогично п.40 только закрываем клапан 319.',
      sender: 'Система',
      action: {
        target2D: 'vn_319_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 319' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },

            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },

            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Открыт' },

            { name: 'blocks_open', color: '#ff1e00' },
            { name: 'blocks_close', color: '#00FF00' },

            { name: 'polozenie_button_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_zakr_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_stop_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'polozenie_button_reset_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;


            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;


            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_open', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_close', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_stop', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
            { name: 'btn_reset', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000

            { name: 'block_scheme_sobr', color: '#00FF00' },
            { name: 'bypas_block', color: '#ffffff' },

            { name: 'time_full_vnk_text', text: '22' },
            { name: 'polozenie_text', text: '0' },
          ]
        },
        helper2D: [
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 79.80, y: 57.2, w: 4.0, h: 2.6, id: 'open_vn' },   //  клапан 319 //  win 1  //  "Закрыть"
        ]
      },
      startTime: timeDiff + 206.4,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn',  // окно ВН  "Закрыть"
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1640,
            y: 583
          },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 85.75, y: 60.8, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 82.15, y: 60.8, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 206.6,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1', // маленькое окошко ДА/НЕТ
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Закрывается' },
            { name: 'uprav_auto_text', color: '#000000' },                     //  #6E6E6E //  #000000;
            { name: 'uprav_rucnoy_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;

            { name: 'btn_auto', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000 
            { name: 'btn_rucnoy', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000 // afk

            { name: 'polozenie_button_zakr_text', color: '#6E6E6E' },                     //  #6E6E6E //  #000000;
            { name: 'btn_close', color: '#ffffff', stroke: '#6E6E6E' },  //  #C4C4C4 //  #ffffff       //  #000000
          ]
        },
        helper2D: [
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 206.8,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },

            { name: 'vnk3_319_l', color: '#FF0000' },
            { name: 'vnk3_319_r', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 207.8,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'vnk3_319_l', color: '#8F8F8F' },
            { name: 'vnk3_319_r', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 208.8,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },

            { name: 'vnk3_319_l', color: '#FF0000' },
            { name: 'vnk3_319_r', color: '#FF0000' },

            { name: 'status_control_vnk_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_open', color: '#ffffff', stroke: '#000000' },  //  #C4C4C4 //  #ffffff       //  #000000
          ]
        },
      },
      startTime: timeDiff + 209.8,
    },

    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 210,
      human: true,
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
