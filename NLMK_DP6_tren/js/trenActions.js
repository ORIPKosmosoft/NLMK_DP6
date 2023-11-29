
/*                 TODO
----------------------------------------------------
Научить сначала выдавать сценариоТекст, а потом обычный текст
----------------------------------------------------
нужно обновлить пару звуков
----------------------------------------------------
исправить пару звуков
----------------------------------------------------
Вообще обновлять схемы в течении работы
----------------------------------------------------
Обновлять время в течнеии работы
----------------------------------------------------
Выдать правильную инфу в конце работы
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
    multiAction: [],
  },
  model3DVals: {
    activeControlCamera: true,
    camera: undefined,
    scene: undefined,
    activeMeshs: [],
    tempactiveMeshs: [],
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
      { positionCoordinates: [-3.54, 1.32, -0.22], lookAt: [-0.0002711024344136115, 0.0013731002358684753, 0], position: 101, name: 'ПУ БВНК экраны' },
      { positionCoordinates: [-3.54, 1.87, -0.14], lookAt: [1.570796, -0.0006268997641315248, 0], position: 102, name: 'ПУ БВНК тумблеры' },
      { positionCoordinates: [2.95, 1.35, -0.26], lookAt: [0.003495955134860483, -0.01690013500731815, 0], position: 103, name: 'ПУ ДП-6 экраны' },
      { positionCoordinates: [2.96, 1.9, -0.48], lookAt: [1.2263924993164481, 0.005624744992681851, 0], position: 104, name: 'ПУ ДП-6 тумблеры' },
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
    activeMeshsToArr: [
      { name: 'PhoneButton', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', },
      { name: 'kl022', id: '25408591-8ddd-4b64-a7ad-499aaa995ae6', audio: 'Zvuk_klapana_022_na_BVNK' },
      { name: 'kl021', id: '8d7497bf-6a8b-4906-8a35-1dc986e6e655', audio: 'Zvuk_klapana_022_na_BVNK' },
      { name: 'Rectangle', startY: 0, endY: -0.003, duration: 0.15, audio: 'Zvuk_nazhatiya_knopok_na_BZU', parentName: 'Lighting' },
      { name: 'Handle_034', audio: 'Zvuk_tumblera', changeMeshmaterial: { meshName: '01834b40-8c3e-4255-a91f-2b003c55050d', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: 'Handle_033', audio: 'Zvuk_tumblera', changeMeshmaterial: { meshName: 'efc63ae6-10c1-45f4-a1a1-b5499b4d29b3', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: 'Handle_032', audio: 'Zvuk_tumblera', changeMeshmaterial: { meshName: '43bc2cd8-96bd-4063-b5c2-a4873277d1e9', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: 'Handle_', parentName: 'DP-6', audio: 'Zvuk_tumblera' },
      { name: 'ButtonHightlight_046', changeMeshmaterial: { meshName: 'Lamp_034', material: 'DonorLamp_on' } },
      { name: 'ButtonHightlight_006', changeMeshmaterial: { meshName: 'Lamp_006', material: 'DonorLamp_on' } },
      { name: 'ButtonHightlight_' },
    ],
    movePointMeshToArr: [
      { name: 'Display_flat002', point: 1 },
      { name: 'Display_flat003', point: 2 },
      { name: 'Console_BVNK_highlight', point: 3 },
      { name: 'Display_flat014', point: 4 },
      { name: 'Display_flat015', point: 5 },
      { name: 'Console_BZU_highlight', point: 8 },
      { name: 'Console_DP6_highlight', point: 9 },
      { name: 'BVNK_monitors', point: 101 },
      { name: 'BVNK_tumblers', point: 102 },
      { name: 'DP6_monitors', point: 103 },
      { name: 'DP6_tumblers', point: 104 },
    ],
    svgDisplaysArr: [
      { name: 'Display_flat002', svgName: 'BVNK_VNK1' },
      { name: 'Display_flat003', svgName: 'vnk_main' },
      { name: 'Display_flat010', svgName: 'Osnovnye_parametry_DP' },
      { name: 'Display_flat012', svgName: 'vnk_spvg' },
      { name: 'Display_flat014', svgName: 'dp' },
      { name: 'Display_flat015', svgName: 'bzu' },
      { name: 'Display_TV', svgName: 'bzu' },
      { name: 'Display_TV001', svgName: 'dp' },
    ],
    shadowGenMeshes: [
      'Monitor_flat',
      'c4938c6e-adb9-4618-8fe0-76497fa5e0a7',
      '37fef3e1-5618-4f2b-b5cb-3d578cd09d03',
      '73a85a47-56c4-417e-a598-bfe24e209022',
      'Rectangle001',
      'd77660f1-f36a-489c-b0a4-e0cbb5d74f0a',
      'ba053138-9c06-4271-90be-d8be4f72543e',
    ],
    receiveShadowMeshes: [
      'a618e236-5f05-4c16-a5f4-806a8575cd48',
      'c4938c6e-adb9-4618-8fe0-76497fa5e0a7',
      '37fef3e1-5618-4f2b-b5cb-3d578cd09d03',
      '73a85a47-56c4-417e-a598-bfe24e209022',
      'Rectangle001',
      'd77660f1-f36a-489c-b0a4-e0cbb5d74f0a',
      'ba053138-9c06-4271-90be-d8be4f72543e',
    ],
  },
  svgVals: [],
  svgHelpers: [
    {
      name: 'vnk_main', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 41.5, y: 50, w: 2.7, h: 3.5, forAction: true, id: 'kl029', value: { window: 'O_n_k_na_VNK_posle_1', x: 900, y: 473, } },    // win 29
        { x: 35.9, y: 43.5, w: 2.7, h: 3.5, forAction: true, id: 'kl038', value: { window: 'O_n_k_na_VNK_posle_1', x: 770, y: 440, } },    // win 38
        { x: 48.8, y: 43.5, w: 2.7, h: 3.5, forAction: true, id: 'kl037', value: { window: 'O_n_k_na_VNK_posle_1', x: 1030, y: 440, } },    // win 37
        { x: 48.8, y: 55, w: 2.7, h: 3.5, forAction: true, id: 'kl007', value: { window: 'O_n_k_na_VNK_posle_1', x: 1082, y: 555, } },    // win 07
        { x: 36.2, y: 55, w: 2.7, h: 3.5, forAction: true, id: 'kl028', value: { window: 'O_n_k_na_VNK_posle_1', x: 1082, y: 480, } },    // win 28
        { x: 86.2, y: 20.6, w: 2.5, h: 3.2, forAction: true, id: 'kl022', value: { window: 'O_n_k_na_VNK_posle_1', x: 1582, y: 260, } },    // win 28
      ]
    },
    {
      name: 'vnk_spvg', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
      ]
    },
    {
      name: 'BVNK_VNK1', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 10.1, y: 8.5, w: 7, h: 3, forAction: true, id: 'perekidta_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 } },
      ]
    },
    {
      name: 'BVNK_VNK2', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 10.1, y: 8.5, w: 7, h: 3, forAction: true, id: 'perekidta_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 } },
      ]
    },
    {
      name: 'BVNK_VNK3', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 73.5, y: 83.0, w: 2, h: 3, forAction: true, id: 'vn_310_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1510, y: 635 }, },  // win 310
        { x: 73.5, y: 76.7, w: 2, h: 3, forAction: true, id: 'vn_318_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1510, y: 635 }, },  // win 318
        { x: 65.35, y: 42.9, w: 2, h: 3, forAction: true, id: 'vn_319_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1343, y: 450 }, },  // win 319
      ]
    },
    {
      name: 'O_n_k_na_VNK_posle_1', helpers: [
        { x: 61.00, y: 47.2, w: 1.5, h: 2.4, forAction: true, id: 'close_w1', removeWindow: 'O_n_k_na_VNK_posle_1', },
        { x: 53.40, y: 59.1, w: 4.0, h: 2.6, forAction: true, id: 'open_vn', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, }, realName: 'Открыть', },// open
        { x: 83.80, y: 78.8, w: 8.6, h: 2.6, forAction: true, id: 'win_posle_1_stop_btn', x: 1124, y: 546, },  // stop  //  freeBTN
      ]
    },
    {
      name: 'O_n_k_na_VNK_posle_2', helpers: [
        { x: 60.2, y: 57, w: 3.2, h: 2.4, removeWindow: 'O_n_k_na_VNK_posle_2', forAction: true, id: 'close_vn', }, // close
        { x: 56.5, y: 57, w: 3.2, h: 2.4, removeWindow: 'O_n_k_na_VNK_posle_2', forAction: true, id: 'open_vn1', }, // open
      ]
    },
    {
      name: 'dp', helpers: [
        { x: 94.4, y: 26, w: 4, h: 3, forAction: true, id: 't_r_4', value: { window: 'vvod_znachenij', x: 900, y: 300, } },
        { x: 69.4, y: 90, w: 2.5, h: 4, forAction: true, id: 't_b_302_btn', value: { window: 'win_sym_302', x: 56, y: 48, } },
        { x: 94.4, y: 29.6, w: 4, h: 3, forAction: true, id: 't_r_5', value: { window: 'vvod_znachenij', x: 900, y: 300, } },
      ]
    },
    {
      name: 'win_sym_302', helpers: [
        { x: 45.8, y: 5, w: 1.6, h: 3.3, removeWindow: 'win_sym_302', forAction: true, id: 'ws3_close_btn', }, // close
        { x: 18.65, y: 73, w: 8, h: 5.5, forAction: true, id: 'ws3_ttg_text_btn', },
        { x: 18.65, y: 73, w: 0, h: 0, forAction: true, id: 'ws3_ttg2_text_btn', value: { window: 'priczvuksinal', x: 956, y: 112, } },
      ]
    },
    {
      name: 'vvod_znachenij', helpers: [
        { x: 58.4, y: 30.3, w: 1.5, h: 2, removeWindow: 'vvod_znachenij', forAction: true, id: 'vz_close' },
        { x: 47.6, y: 78.3, w: 4.0, h: 4, removeWindow: 'vvod_znachenij', forAction: true, id: 'vz_ok' },
        { x: 47.7, y: 64.5, w: 3.0, h: 4, forAction: true, id: 'vz_0' },
        { x: 47.7, y: 60, w: 3.0, h: 4, forAction: true, id: 'vz_1' },
        { x: 51.1, y: 60, w: 3.0, h: 4, forAction: true, id: 'vz_2' },
        { x: 54.4, y: 60, w: 3.0, h: 4, forAction: true, id: 'vz_3' },
        { x: 47.7, y: 55, w: 3.0, h: 4, forAction: true, id: 'vz_4' },
        { x: 51.1, y: 55, w: 3.0, h: 4, forAction: true, id: 'vz_5' },
        { x: 54.4, y: 55, w: 3.0, h: 4, forAction: true, id: 'vz_6' },
        { x: 47.7, y: 50.3, w: 3.0, h: 4, forAction: true, id: 'vz_7' },
        { x: 51.1, y: 50.3, w: 3.0, h: 4, forAction: true, id: 'vz_8' },
        { x: 54.4, y: 50.3, w: 3.0, h: 4, forAction: true, id: 'vz_9' }
      ]
    },
    {
      name: 'O_p_n_na_k_p_na_VNK', helpers: [
        { x: 27.2, y: 11.8, w: 2.25, h: 2.6, forAction: true, id: 'perekidta_exit_btn', removeWindow: 'O_p_n_na_k_p_na_VNK', },
        { x: 15.6, y: 29, w: 11.9, h: 3.6, forAction: true, id: 'nagrev_otd2_btn', value: { window: 'O_p_n_na_k_na-o_2_na_VNK', x: 379, y: 32, } },
        { x: 15.6, y: 41.4, w: 11.9, h: 3.6, forAction: true, id: 'otdel_otdel2_btn', value: { window: 'win_otdel2_na_vnk', x: 402, y: 468, } },
      ]
    },
    {
      name: 'priczvuksinal', helpers: [
        { x: 83.1, y: 17.7, w: 5, h: 3, removeWindow: 'priczvuksinal', forAction: true, id: 'pzs_close_btn' },
      ]
    },
    {
      name: 'O_p_n_na_k_na-o_2_na_VNK', helpers: [
        { x: 63.7, y: 3.4, w: 2.4, h: 2.4, removeWindow: 'O_p_n_na_k_na-o_2_na_VNK', forAction: true, id: 'pericNagrev_close_btn' },
        { x: 31.8, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_pusk_btn', value: { window: 'O_n_k_na_VNK_posle_2', x: 678, y: 917 } },
        { x: 35, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_stop_btn' },
        { x: 38.2, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_reset_btn' },
      ]
    },
    {
      name: 'win_otdel2_na_vnk', helpers: [
        { x: 45, y: 48, w: 2.2, h: 2.4, removeWindow: 'win_otdel2_na_vnk', forAction: true, id: 'otdel2_close_btn' },
        { x: 34.5, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_pusk_btn', value: { window: 'O_n_k_na_VNK_posle_2', x: 707, y: 908 } },
        { x: 38.3, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_stop_btn' },
        { x: 42.1, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_reset_btn' },
      ]
    },
    {
      name: 'bzu', helpers: [
        { x: 71.7, y: 67.7, w: 4.5, h: 3.3, forAction: true, id: 'bzu_gruzit_btn' },
        { x: 58.3, y: 35.0, w: 9.8, h: 3.3, forAction: true, id: 'bzu_ZapretSledPorci_btn' },
        { x: 32.1, y: 45.3, w: 4.5, h: 6.1, forAction: true, id: 'bzu_raketaNGUK2_btn' },
        { x: 29.7, y: 53.1, w: 3.9, h: 3.5, forAction: true, id: 'bzu_pause_btn' },
      ]
    },
  ],
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
    radioSelfcheckHelperText: 'Выберите один вариант и нажмите подтвердить', // Текст хелпера вопросов с радиокнопками
    radioSelfcheckHelperTextMany: 'Выберите несколько вариантов и нажмите подтвердить', // Текст хелпера вопросов с радиокнопками
    dragDropHelperText: 'Переместите каждый ответ в нужную строчку и нажмите подтвердить.', // Текст хелпера вопросов с dragDrop
    dropDownHelperText: 'В выпадающих списках выберите нужный вариант и нажмите подтвердить.', // Текст хелпера вопросов с выпадающими списками
    consecutiveHelperText: 'Переставьте ответы в нужной последовательности и нажмите подтвердить.', // Текст хелпера вопросов с последовательностью
    arrayForCreateTests: [
      { // 1
        questionType: 'radio',
        questionTopic: 'Состав ДП-6',
        questionText: 'В состав доменной печи №6 входит:',
        answers: [
          'Оборудование циклона',
          'Оборудование пылеуловителя',
          'Оборудование газопровода получистогодоменного газа'
        ],
        rightAnswers: ['Оборудование пылеуловителя']
      },
      { // 2
        questionType: 'dragDrop',
        questionTopic: 'Кратковременная остановка ДП-6',
        questionText: 'В состав доменной печи №6 входит:',
        answers:
        {
          0: ['0,6-0,8 кгс/см²', 'открыть атмосферные клапаны'],
          1: ['0,5 кгс/см²', 'закрыть смесительно-предохранительный клапан'],
          2: ['0,3 кгс/см²', 'закрыть отсечной клапан пылеуловителя'],
        },
        rightAnswers:
        {
          0: ['0,6-0,8 кгс/см²', 'открыть атмосферные клапаны'],
          1: ['0,5 кгс/см²', 'закрыть смесительно-предохранительный клапан'],
          2: ['0,3 кгс/см²', 'закрыть отсечной клапан пылеуловителя'],
        },
      },
      { // 3
        questionType: 'radio',
        questionTopic: 'Кратковременная остановка ДП-6',
        questionText: 'В случае подвисания шихты осадку до остановки печи необходимо произвести:',
        answers: [
          'Клапаном «СНОРТ»',
          'Сбросным клапаном №10 на воздухонагревателе в режиме «дутье»',
          'Одновременно двумя способами'
        ],
        rightAnswers: ['Клапаном «СНОРТ»']
      },
      { // 4
        questionType: 'radio',
        questionTopic: 'Кратковременная остановка ДП-6',
        questionText: 'Во время кратковременной остановки печи:',
        answers: [
          'Разрешается прекращать подачу воздуха в воздуховод холодного дуться',
          'Запрещается прекращать подачу воздуха в воздуховод холодного дутья',
          'Уравнительные клапаны и клапаны пылеподавления БЗУ должны быть закрыты',
          'Уравнительные клапаны и клапаны пылеподавления БЗУ должны быть открыты',
          'Выхлопные клапаны БЗУ должны быть закрыты',
          'Выхлопные клапаны БЗУ должны быть открыты',
        ],
        rightAnswers: [
          'Запрещается прекращать подачу воздуха в воздуховод холодного дутья',
          'Уравнительные клапаны и клапаны пылеподавления БЗУ должны быть закрыты',
          'Выхлопные клапаны БЗУ должны быть открыты',
        ]
      },
      { // 5
        questionType: 'dragDrop',
        questionTopic: 'Кратковременная остановка ДП-6',
        questionText: 'При пуске доменной печи №6 после кратковременной остановки для каждого указанного уровня давления горячего дутья необходимо последовательно совершать следующие действия',
        answers:
        {
          0: ['0,2-0,3 кгс/см²', 'закрыть атмосферные клапаны'],
          1: ['0,2-0,3 кгс/см²', 'приоткрывая клапан «СНОРТ» и кольцевые зазоры установить давление'],
          2: ['0,6-0,8 кгс/см²', 'при необходимости открыть смесительно-предохранительный клапан'],
          3: ['0,6-0,8 кгс/см²', 'приоткрывая клапан «СНОРТ» установить давление'],
          4: ['заданное давление и общий перепад в печи', 'закрыть отсечной клапан пылеуловителя'],
        },
        rightAnswers:
        {
          0: ['0,2-0,3 кгс/см²', 'приоткрывая клапан «СНОРТ» установить давление', 'закрыть отсечной клапан пылеуловителя'],
          1: ['0,6-0,8 кгс/см²', 'закрыть атмосферные клапаны', 'при необходимости открыть смесительно-предохранительный клапан'],
          2: ['заданное давление и общий перепад в печи', 'приоткрывая клапан «СНОРТ» и кольцевые зазоры установить давление'],
        },
      },
      { // 6
        questionType: 'dropDownMenu',
        questionTopic: 'Кратковременная остановка ДП-6',
        questionText: 'Для случая длительной остановки доменной печи №6 с зажиганием газа на калошнике выберите верные утверждения:',
        answers:
          [
            'Перед началом остановки газовщик сообщает об этом за insertOptionElem.',
            'Остановка печи производится insertOptionElem выпуска чугуна.',
            'Газовщик проводит остановку доменной печи под руководством insertOptionElem печи.',
            'Перед началом остановки необходимо провести труску колошниковой пыли из insertOptionElem.',
            'При переводе печи на «нормальное давление» газовщик контролирует insertOptionElem снижение давления и расхода дутья.',
            'Нормальное давление – это давление горячего дутья, сохраняющее заданную величину общего перепада при полностью insertOptionElem кольцевых зазорах.',
          ],
        optionContent: [
          ['20-30 минут', '15-20 минут'],
          ['во время', 'в конце'],
          ['мастера печи', 'сменного мастера'],
          ['пылеуловителя', 'циклона'],
          ['одинаковое', 'пропорциональное'],
          ['открытых', 'закрытых'],
        ],
        rightAnswers:
          [
            '20-30 минут', 'в конце', 'сменного мастера',
            'пылеуловителя', 'пропорциональное', 'открытых',
          ],
      },
      { // 7
        questionType: 'dragDrop',
        questionTopic: 'Кратковременная остановка ДП-6',
        questionText: 'При длительной остановке доменной печи №6 при давлении горячего дутья',
        answers:
        {
          0: ['0,6-0,8 кгс/см²', 'закрыть смесительно-предохранительный клапан'],
          1: ['0,5 кгс/см²', 'остановить загрузку печи'],
          2: ['0,2-0,3 кгс/см²', 'установить листовую заглушку в трубопровод азота'],
          3: ['0,2 кгс/см²', 'открыть атмосферные клапаны'],
          4: ['0,1-0,15 кгс/см²', 'закрыть отсечной клапан пылеуловителя'],
        },
        rightAnswers:
        {
          0: ['0,6-0,8 кгс/см²', 'открыть атмосферные клапаны'],
          1: ['0,5 кгс/см²', 'закрыть смесительно-предохранительный клапан'],
          2: ['0,2-0,3 кгс/см²', 'закрыть отсечной клапан пылеуловителя'],
          3: ['0,2 кгс/см²', 'остановить загрузку печи'],
          4: ['0,1-0,15 кгс/см²', 'установить листовую заглушку в трубопровод азота'],
        },
      },
      { // 8 (1)
        questionType: 'radio',
        questionTopic: 'Подготовка к работе',
        questionText: 'Для защиты от вредных веществ в качестве индивидуальных мер защиты используются:',
        answers: [
          'Спецодежда, перчатки и очки',
          'Гигиенический паспорт – полагается для лакокрасочных материалов. В нем указываются наличие вредных веществ, пожароопасность, условия хранения и прочее. Не относится к индивидуальным средствам защиты.',
          'Газозащитная аппаратура',
          'Переносной газоанализатор',
        ],
        rightAnswers: [
          'Спецодежда, перчатки и очки',
          'Газозащитная аппаратура',
          'Переносной газоанализатор',
        ]
      },
      { // 9 (2)
        questionType: 'consecutive',
        questionTopic: 'Подготовка к работе',
        questionText: 'Перед началом работы газовщик должен осуществить следующие действия. ',
        answers: [
          'Проверить исправность оборудования, приспособлений, инструментов, ограждений, блокировочных средств, защитного заземления и пр.',
          'Принять смену',
          'Зарегистрировать данные обхода и об обнаруженных дефектах в соответствующие журналы, доложить мастеру участка обо всех отклонениях в работе.',
          'Провести визуальную проверку технических устройств и средств защиты.',
          'Провести динамическую оценку рисков по методике «5 шагов».',
          'Переодеться в спецодежду',
          'Провести проверку соответствия нормам: концентрации горючих газов в рабочей зоне, предел воспламеняемости, наряды, правильность отключения газопроводов и воздухопроводов, агрегатов и механизмов.',
          'Пройти медицинский осмотр',
          'Провести инструментальную проверку (контроль) параметров оборудования, влияющих на безопасность процесса (с помощью газоанализатора).',
          'Подготовить рабочее место',
        ],
        rightAnswers: [
          'Пройти медицинский осмотр',
          'Переодеться в спецодежду',
          'Принять смену',
          'Подготовить рабочее место',
          'Проверить исправность оборудования, приспособлений, инструментов, ограждений, блокировочных средств, защитного заземления и пр.',
          'Провести инструментальную проверку (контроль) параметров оборудования, влияющих на безопасность процесса (с помощью газоанализатора).',
          'Провести проверку соответствия нормам: концентрации горючих газов в рабочей зоне, предел воспламеняемости, наряды, правильность отключения газопроводов и воздухопроводов, агрегатов и механизмов.',
          'Провести визуальную проверку технических устройств и средств защиты.',
          'Зарегистрировать данные обхода и об обнаруженных дефектах в соответствующие журналы, доложить мастеру участка обо всех отклонениях в работе.',
          'Провести динамическую оценку рисков по методике «5 шагов».',
        ]
      },
      { // 10 (3)
        questionType: 'radio',
        questionTopic: 'Проведение работ',
        questionText: 'При проведении работ газовщик имеет право',
        answers: [
          'Проводить осмотр агрегатов и оборудования в газоопасных местах I и II групп без оформления наряда-пропуска на проведение газоопасных работ с применением газозащитной аппаратуры',
          'Проводить контроль кислорода, оксида углерода или метана без разрешения производственного мастера ДП',
          'Ставить воздухонагреватель на нагрев при неисправности газо-отсекающих клапанов',
          'Проверять утечку газов факелом',
          'Проводить работы по ликвидации аварий до устранения прямой угрозы людям и разрушения оборудования без оформления наряда-пропуска',
          'Проводить работы по ликвидации аварий при сбоях оборудования без разрешения сменного мастера ДП',
        ],
        rightAnswers: [
          'Проводить осмотр агрегатов и оборудования в газоопасных местах I и II групп без оформления наряда-пропуска на проведение газоопасных работ с применением газозащитной аппаратуры',
          'Проводить работы по ликвидации аварий до устранения прямой угрозы людям и разрушения оборудования без оформления наряда-пропуска',
        ]
      },
      { // 11 (4)
        questionType: 'dropDownMenu',
        questionTopic: 'Проведение работ',
        questionText: '',
        answers:
          [
            'Во время выдувки печи температура колошника должна быть не выше insertOptionElem.',
            'Во время выдувки ДП взятие ее на «тягу» insertOptionElem.',
            'При содержании кислорода более 1% во время выдувки печи отсечной клапан пылеуловителя должен быть insertOptionElem.',
            'После полной остановки печи и зажигания газа на колошнике свечи на пылеуловителе insertOptionElem.',
            'До пуска печи все люки на газопроводах должны быть insertOptionElem.',
            'Установка сопел разрешается insertOptionElem приемки воздуха на ДП.',
            'Установка сопел разрешается после создания подпора в воздухопроводе холодного дутья давлением insertOptionElem.',
            'insertOptionElem подается пар или азот в пылеуловитель и уравнительный газопровод.',
          ],
        optionContent: [
          ['400 градусов', '500 градусов'],
          ['допускается', 'не допускается'],
          ['открыт', 'закрыт'],
          ['открываются', 'закрываются'],
          ['открыты', 'закрыты'],
          ['до', 'после'],
          ['0.2-0.3 кгс/м²', '0.1-0.2 кгс/м²'],
          ['Перед пуском', 'После пуска'],
        ],
        rightAnswers:
          [
            '400 градусов', 'не допускается', 'закрыт',
            'открываются', 'закрыты', 'после',
            '0.2-0.3 кгс/м²', 'Перед пуском',
          ],
      },
      { // 12 (1)
        questionType: 'consecutive',
        questionTopic: 'Порядок пуска трубопроводов',
        questionText: 'При пуске холодного дутья ДП №6 последовательность пусковых операций следующая:',
        answers: [
          'Открыть клапан «СНОРТ»',
          'Подача холодного дутья на СНОРТ',
          'Мастер газового хозяйства осматривает трубопровод на предмет отсутствия в нем посторонних предметов.',
          'Закрыть клапана холодного дутья 118, 118а, 218, 218а, 318, 318а.',
          'Контроль окончания работ и команда машинисту ТЭЦ ЭВС или УТЭЦ ЭВС на запуск воздуходувной машины.',
          'Закрыть смесительно-предохранительный клапан №2.',
        ],
        rightAnswers: [
          'Мастер газового хозяйства осматривает трубопровод на предмет отсутствия в нем посторонних предметов.',
          'Закрыть смесительно-предохранительный клапан №2.',
          'Закрыть клапана холодного дутья 118, 118а, 218, 218а, 318, 318а.',
          'Открыть клапан «СНОРТ»',
          'Контроль окончания работ и команда машинисту ТЭЦ ЭВС или УТЭЦ ЭВС на запуск воздуходувной машины.',
          'Подача холодного дутья на СНОРТ',
        ]
      },
      { // 13 (2)
        questionType: 'consecutive',
        questionTopic: 'Порядок пуска трубопроводов',
        questionText: 'При пуске горения ДП №6 последовательность пусковых операций следующая:',
        answers: [
          'Перед пуском транспортнях линий ПУТ осмотреть трубопровод на предмет отсутствия в нем посторонних предметов.',
          'Мастер газового хозяйства осматривает трубопровод на предмет отсутствия в нем посторонних предметов.',
          'Запустить вентиляторы подачи воздуха горения.',
          'Запустить двигатель вентилятора для подачи воздуха к воздухонагревателям.',
          'На вентиляторе открыть клапан на всасе  № OF1, OF2, OF3 руководствуясь нагрузкой на эл. двигателя.',
          'Избиратель управления на ЦПУ ставит клапан №035 в положение «автоматически» для регулирования давления воздуха горения.',
          'На вентиляторе открыть клапан на нагнетение № 0331, 0332, 0333.',
          'Собрать электросхему на воздухонагреватели и перевести их в режим отделение.',
        ],
        rightAnswers: [
          'Мастер газового хозяйства осматривает трубопровод на предмет отсутствия в нем посторонних предметов.',
          'Собрать электросхему на воздухонагреватели и перевести их в режим отделение.',
          'Запустить вентиляторы подачи воздуха горения.',
          'Избиратель управления на ЦПУ ставит клапан №035 в положение «автоматически» для регулирования давления воздуха горения.',
          'Запустить двигатель вентилятора для подачи воздуха к воздухонагревателям.',
          'На вентиляторе открыть клапан на нагнетение № 0331, 0332, 0333.',
          'На вентиляторе открыть клапан на всасе  № OF1, OF2, OF3 руководствуясь нагрузкой на эл. двигателя.',
          'Перед пуском транспортнях линий ПУТ осмотреть трубопровод на предмет отсутствия в нем посторонних предметов.',
        ]
      },
      { // 14 (3)
        questionType: 'consecutive',
        questionTopic: 'Порядок остановки трубопроводов',
        questionText: 'При остановке трубопровода холодного дутья в ремонт последовательность операций следующая:',
        answers: [
          'Дать команду машинисту ТЭЦ ЭВС или УТЭЦ ЭВС на остановку ЭВД',
          'Взять доменную печь на тягу',
          'Через воздухоразгрузочный клапан СНОРТ снизить давление до атмосферного',
        ],
        rightAnswers: [
          'Взять доменную печь на тягу',
          'Дать команду машинисту ТЭЦ ЭВС или УТЭЦ ЭВС на остановку ЭВД',
          'Через воздухоразгрузочный клапан СНОРТ снизить давление до атмосферного',
        ]
      },
      { // 15 (4)
        questionType: 'consecutive',
        questionTopic: 'Порядок остановки трубопроводов',
        questionText: 'При остановке трубопровода горения в ремонт последовательность операций следующая:',
        answers: [
          'Взять ДП на тягу',
          'Через свечу ВГ-1 снизить давление до атмосферного',
          'Остановить вентиляторы подачи воздуха горения',
          'Разобрать электросхему на вентиляторы подачи воздуха горения',
          'Снять воздухонагреватели с нагрева',
        ],
        rightAnswers: [
          'Снять воздухонагреватели с нагрева',
          'Взять ДП на тягу',
          'Остановить вентиляторы подачи воздуха горения',
          'Через свечу ВГ-1 снизить давление до атмосферного',
          'Разобрать электросхему на вентиляторы подачи воздуха горения',
        ]
      },
      { // 16 (5)
        questionType: 'consecutive',
        questionTopic: 'Порядок остановки трубопроводов',
        questionText: 'При аварийной остановке оборудования последовательность операций следующая:',
        answers: [
          'Снять воздухонагреватели с нагрева',
          'Остановить ДП. В случае несрабатывания клапана аварийного поддува, при необходимости открыть клапан СНОРТ, руководствуясь состоянием фурменных приборов.',
          'Клапан СНОРТ не открывать, т.к. в печь должен поступать воздух от сетей комбината 1200-1500 м³/ч, который создаст давление на фурмах 0,3-0,4 кгс/см²',
          'Остановить УГКС',
          'Открыть выпуск чугуна',
          'Закрыть природный газ на вдувание в ДП на фурмах вентилями ПВ 1/3 – ПВ 32/3 и на коллекторе задвижкой ПВ 721, открыть ПВ 723',
        ],
        rightAnswers: [
          'Открыть выпуск чугуна',
          'Клапан СНОРТ не открывать, т.к. в печь должен поступать воздух от сетей комбината 1200-1500 м³/ч, который создаст давление на фурмах 0,3-0,4 кгс/см²',
          'Остановить УГКС',
          'Закрыть природный газ на вдувание в ДП на фурмах вентилями ПВ 1/3 – ПВ 32/3 и на коллекторе задвижкой ПВ 721, открыть ПВ 723',
          'Снять воздухонагреватели с нагрева',
          'Остановить ДП. В случае несрабатывания клапана аварийного поддува, при необходимости открыть клапан СНОРТ, руководствуясь состоянием фурменных приборов.',
        ]
      },

    ],
  },
  //---------------------------
  dev: {
    enable: true,
    perfomance: undefined,
    intervalFon: undefined,
  },
  endVals: {
    passPerc: 100,
    errors: [0],
    averageTime: [],
    humanTime: [],
    charts: [],
    actionChapter: [],
    currentActionCount: 0,
    currentChapter: 0,
  }
};

/* TODO --------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------*/

/*
Пример мультидействия с 3Д
{ 
  scenarioText: 'Тест непоследовательных действий',
  sender: 'Газовщик',
  multi: [
    {
      text: '1. .',
      sender: 'Газовщик',    
      action: {
        target3D: 'PhoneButton001',
      },
      audio: 'tts-vo1',
    },
    {
      text: '2. ',
      sender: 'Газовщик',
      action: {
        target3D: 'PhoneButton006',
      },
      audio: 'tts-vo1',
    },
    {
      text: '3. ',
      sender: 'Газовщик',
      action: {
        target3D: 'PhoneButton017',
      },
      audio: 'tts-vo1',
    },
    {
      text: '4. ',
      sender: 'Газовщик',
      action: {
        target3D: 'PhoneButton020',
      },
      audio: 'tts-vo1',
    }
  ],
  startTime: timeDiff + 1,
  human: true,
},
*/
const timeDiff = -0;
let tempActions = [
  [ // test scenario 1
    ////--------------------------------2---------------------------------------- 

    {
      action: {
        target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
        rotation: { y: 1.571 },
      },
      duration: 0.3,
      startTime: timeDiff + 2,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        number: '024.5',
        color: 'red',
      },
      startTime: timeDiff + 3,
    },
    {
      startTime: timeDiff + 5,
    },
  ],
  // Первый сценарий  
  [
    {
      lifeTime: '07:30:00',
      startTime: timeDiff + 0,
    },
    {
      text: 'Отделить подогреватель воздуха и газа.',
      sender: 'Система',
      startTime: timeDiff + 2.1,
    },
    {
      scenarioText: 'Открыть клапан 029 на дымовую трубу.',
      sender: 'Система',
      audio: 'tts-1',
      startTime: timeDiff + 6,
    },
    ////--------------------------------1----------------------------------------
    {
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
      startTime: timeDiff + 6.1,
      human: true,
      concentration: [
        { text: 'Клапан 029', x: 41, y: 48, w: 3, h: 6.5, position: [1], scheme: 'vnk_main' },
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
      startTime: timeDiff + 6.2,
      human: true,
    },
    // да
    {

      action: {
        target2D: 'open_vn1',
      },
      startTime: timeDiff + 6.4,
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
      startTime: timeDiff + 7,
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
      startTime: timeDiff + 8,
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
      startTime: timeDiff + 9,
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
      startTime: timeDiff + 10,
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
      startTime: timeDiff + 11,
    },
    ////--------------------------------2----------------------------------------
    {
      text: 'Клапан 029 на дымовую трубу открыт.',
      scenarioText: 'Закрыть клапан 038 на подогреватель газа.',
      sender: 'Система',
      audio: 'tts-2',
      startTime: timeDiff + 12,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 16,
      human: true,
    },

    //// клик по ВН38 на схеме  ОТКРЫТ
    {
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
      startTime: timeDiff + 16.1,
      human: true,
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
      startTime: timeDiff + 16.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 0, h: 2.5, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 16.3,
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
      startTime: timeDiff + 17,
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
      startTime: timeDiff + 18,
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
      startTime: timeDiff + 19,
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
      startTime: timeDiff + 20,
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
      startTime: timeDiff + 21,
    },

    ////--------------------------------3----------------------------------------
    // ЧАТ
    {
      text: 'Клапан 038 на подогреватель газа закрыт.',
      scenarioText: 'Закрыть клапан 037 на подогреватель газа.',
      sender: 'Система',
      audio: 'tts-3',
      action: {
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 22,
    },

    // закрыть окно ВН
    {
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 23,
      human: true,
    },
    //// клик по ВН37 на схеме  НЕТ ДАННЫХ
    {
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
      startTime: timeDiff + 23.1,
      human: true,
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
      startTime: timeDiff + 23.2,
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
      startTime: timeDiff + 23.3,
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
      startTime: timeDiff + 24,
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
      startTime: timeDiff + 25,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl037_proc', text: '25' },
            { name: 'polozenie_text', text: '25' },
            { name: 'kl037', color: '#ff1e00' },
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
      startTime: timeDiff + 26,
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
      startTime: timeDiff + 27,
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
      startTime: timeDiff + 28,
    },

    // ЧАТ
    {
      text: 'Клапан 037 на подогреватель газа закрыт.',
      scenarioText: 'Закрыть клапан 007 на подогреватель воздуха.',
      sender: 'Система',
      audio: 'tts-4',
      startTime: timeDiff + 29,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 30,
      human: true,
    },

    //// клик по ВН07 на схеме  ОТКРЫТ
    {
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
            { name: 'circle_1_kl007', stroke: '#00FF00' },
            { name: 'circle_2_kl007', stroke: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 31,
      human: true,
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
      startTime: timeDiff + 31.1,
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
      startTime: timeDiff + 31.2,
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
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 32,
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
      startTime: timeDiff + 33,
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
      startTime: timeDiff + 34,
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
      startTime: timeDiff + 35,
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
      startTime: timeDiff + 36,
    },
    // ЧАТ
    {
      text: 'Клапан 007 на подогреватель газа закрыт.',
      scenarioText: 'Закрыть клапан 028 на подогреватель воздуха.',
      sender: 'Система',
      audio: 'tts-5',
      action: {
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 37,
    },
    ////--------------------------------5----------------------------------------
    // закрыть окно ВН
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 38,
      human: true,
    },
    //// клик по ВН28 на схеме  ОТКРЫТ
    {
      action: {
        target2D: 'kl028',
        window2D: {
          newPositionWindow: {
            x: 776,
            y: 544
          },
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 028' },
            { name: 'circle_1_kl028', stroke: '#00FF00' },
            { name: 'circle_2_kl028', stroke: '#00FF00' },
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
      startTime: timeDiff + 38.1,
      human: true,
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
      startTime: timeDiff + 38.2,
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
      startTime: timeDiff + 38.3,
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
      startTime: timeDiff + 39,
    }, {
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
      startTime: timeDiff + 40,
    }, {
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
      startTime: timeDiff + 41,
    }, {
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
      startTime: timeDiff + 42,
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
      startTime: timeDiff + 43,
    },
    // ЧАТ
    {
      text: 'Клапан 028 на подогреватель газа закрыт.',
      sender: 'Система',
      startTime: timeDiff + 44,
    },
    {
      text: 'Подогреватели воздуха и газа отделены.',
      audio: 'tts-6',
      sender: 'Система',
      startTime: timeDiff + 45,
    },



    ////--------------------------------0----------------------------------------
    // закрыть окно ВН
    {
      scenarioText: 'В случае запланированной остановки доменной печи газовщик сообщает об этом.',
      audio: 'tts-7',
      sender: 'Система',
      lifeTime: '07:45:00',
      startTime: timeDiff + 48,
      action: {
        target2D: 'close_w1',
      },
      human: true,
    },
    // {
    //   action: {
    //     target2D: 'close_w1',
    //   },
    //   startTime: timeDiff + 49.1,
    //   human: true,
    // },
    // {
    //   scenarioText: 'Газовщик сообщает остановку доменной печи.',
    //   lifeTime: '07:45:00',
    //   startTime: timeDiff + 33,
    // },

    ////--------------------------------1----------------------------------------
    {
      scenarioText: 'Взять в руку трубку и нажать на кнопки с надписью: «Газовый цех», «Насосный цех», «Кислородный цех», «ЭВС».',
      sender: 'Система',
      audio: 'telephone_say',
      multi: [
        {
          text: 'Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton001',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton006',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton017',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton020',
          },
          audio: 'tts-vo1',
        }
      ],
      startTime: timeDiff + 51,
      human: true,
    },
    /*
    // 1.2    // DP
    ////--------------------------------1---------------------------------------- 
    {
      text: 'Остановка вдувания пылеугольного топлива ПУТ.',
      sender: 'Система',
      audio: 'tts-8',
      lifeTime: '08:00:00',
      startTime: timeDiff + 59,
    },

    {
      text: 'В 08:00 остановили вдувания пылеугольного топлива.',
      sender: 'Система',
      audio: 'tts-9-1',
      action: {
        window2D: {
          elements: [
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0.0' },
          ]
        }
      },
      startTime: timeDiff + 61,
    },

    ////--------------------------------2----------------------------------------
    {
      scenarioText: ' Расход природного газа увеличиваем для поддержания ТТГ.',
      sender: 'Система',
      audio: 'tts-10',
      startTime: timeDiff + 66,
    },
    {
      action: {
        target2D: 't_r_4',
      },
      startTime: timeDiff + 71,
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
      startTime: timeDiff + 71.1,
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
      startTime: timeDiff + 71.2,
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
      startTime: timeDiff + 71.3,
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
      startTime: timeDiff + 71.4,
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
      startTime: timeDiff + 71.5,
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
      startTime: timeDiff + 71.6,
      human: true,
    },
    ////--------------------------------3----------------------------------------
    {
      scenarioText: 'Настройка значения теоретической температуры горения.',
      sender: 'Система',
      audio: 'tts-11',
      startTime: timeDiff + 72,
    },
    {
      action: {
        target2D: 't_b_302_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
          ]
        },
      },
      startTime: timeDiff + 76,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_ttg_text_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'ТТГ' },
            { name: 'F_prirGaz', stroke: '#c4bdb3' },
            { name: 'f_prirgaz', stroke: '#c4bdb3' },
            { name: 't_r_ttg', stroke: '#000' },
          ]
        },
        helper2D: [
          { x: 18.65, y: 73, w: 0, h: 0, id: 'ws3_ttg_text_btn' },
          { x: 18.65, y: 73, w: 8, h: 5.5, id: 'ws3_ttg2_text_btn' },
        ]
      },
      startTime: timeDiff + 76.1,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_ttg2_text_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
            { name: 'F_prirGaz', stroke: '#000' },
            { name: 'f_prirgaz', stroke: '#000' },
            { name: 't_r_ttg', stroke: '#c4bdb3' },
          ]
        },

      },
      startTime: timeDiff + 76.2,
      human: true,
    },
    {
      action: {
        target2D: 'pzs_close_btn',
      },
      startTime: timeDiff + 76.3,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 76.4,
      human: true,
    },
    ////--------------------------------3.1
    {
      // scenarioText: 'Нажимаем на значение у ТТГ 22000 на общей схеме. Появляется окошко и вводим значение 2200 вручную',
      // sender: 'Система',
      action: {
        target2D: 't_r_5',
        window2D: {
          elements: [
            { name: 'vz_number', text: '0' },
          ]
        },
      },
      startTime: timeDiff + 76.5,
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
      startTime: timeDiff + 76.6,
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
      startTime: timeDiff + 76.7,
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
      startTime: timeDiff + 76.8,
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
      startTime: timeDiff + 76.9,
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
      startTime: timeDiff + 77,
      human: true,
    },
    ////--------------------------------3.2
    {
      // scenarioText: 'Повторить операцию с символом 302, только оставляем клавишу «ТТГ» и после закрываем доп. окно.',
      // sender: 'Система',
      action: {
        target2D: 't_b_302_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
          ]
        }
      },
      startTime: timeDiff + 77.1,
      human: true,
    },

    {
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
      startTime: timeDiff + 77.2,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 77.3,
      human: true,
    },
    ////--------------------------------4       
    {
      text: 'Выпуск чугуна из лёток, продвука, понижения давления температуры.',
      sender: 'Система',
      audio: 'tts-12',
      lifeTime: '08:15:00',
      startTime: timeDiff + 78,
    },
    {
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
      startTime: timeDiff + 83,
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
      startTime: timeDiff + 84,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'L2', text: '400' },
            { name: 'L3', text: '400' },
          ]
        }
      },
      startTime: timeDiff + 85,
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
      startTime: timeDiff + 86,
    },
    // 1.3 
    ////--------------------------------1---------------------------------------- 
    {
      text: 'По команде мастера печи, до окончания выпуска чугуна, закрыть кислород на обогащение дутья.',
      sender: 'Система',
      audio: 'tts-13',
      lifeTime: '08:30:00',
      startTime: timeDiff + 87,
    },
    {
      text: 'По рации мастер печи сообщил команду газовщикам.',
      sender: 'Система',
      startTime: timeDiff + 94,
    },
    {
      text: 'Закрыть кислород на обогащения дутья и оставить 20000.',
      sender: 'Мастер печи',
      audio: 'tts-vo2',
      startTime: timeDiff + 95,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 99,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046'
      },
      startTime: timeDiff + 100,
      human: true,
    },
    {
      text: 'Хорошо. Выполняю.',
      sender: 'Газовщик',
      audio: 'tts-vo3',
      startTime: timeDiff + 101,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 103,
    },
    ////--------------------------------2
    {
      scenarioText: 'Перекидка клапанов в автоматическом режиме.',
      sender: 'Система',
      audio: 'tts-14',
      startTime: timeDiff + 104,
    },
    {
      action: {
        target2D: 'perekidta_btn',
        window2D: {
          elements: [
            // many gray ??????? не та цветовая палитра
          ]
        }
      },
      startTime: timeDiff + 107,      ////    ЭТО    140 
      human: true,
    },
    {
      action: {
        target2D: 'nagrev_otd2_btn',
      },
      startTime: timeDiff + 107.1,      //// 140.1
      human: true,
    }, {
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
      startTime: timeDiff + 107.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
      },

      startTime: timeDiff + 107.3,
      human: true,
    },

    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 107.4,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK close
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 107.5,
      human: true,
    },
    // O_p_n_na_k_na-BVNK_VNK1 схема обновляется
    {
      action: {
        window2D: {
          elements: [
            { name: '1PS_03_square', color: '#ff0000' },

            //// ТУТ
            { name: 'VNK1_7PI_13', text: '10,94' },
            { name: 'VNK1_1FI_01', text: '56311' },
            { name: 'VNK1_1PI_02', text: '0,47' },
            { name: 'VNK1_1TI_43', text: '46' },
            { name: 'VNK1_1PI_04', text: '0,60' },
            { name: 'VNK1_1TI_29', text: '26' },
          ]
        }
      },
      startTime: timeDiff + 108,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'VNK1_7PI_13', text: '10,90' },
            { name: 'VNK1_1FI_01', text: '45074' },
            { name: 'VNK1_1PI_02', text: '0,33' },
            { name: 'VNK1_1PI_04', text: '0,44' },
            { name: 'vn_132', color: '#ff0000' },
            { name: 'vn_132_l', color: '#ff0000' },

          ]
        }
      },
      startTime: timeDiff + 109,
    },
    { // FIX DISPLAY NONE
      action: {
        window2D: {
          elements: [
            { name: 'big_arrow_up', display: 'none' },
            { name: 'big_arrow_up_border', display: 'none' },
            { name: 'vn_132', color: '#ff0000' },
            { name: 'vn_132_l', color: '#ff0000' },
            { name: 'vn_127', color: '#b5b3b6' },

          ]
        }
      },
      startTime: timeDiff + 110,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'big_arrow_up', display: 'block' },
            { name: 'big_arrow_up_border', display: 'block' },
            { name: 'big_arrow_up', display: '#ffffff' },
            { name: '1PS_05_square', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 111,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'VNK1_1PI_02', text: '0,17' },
            { name: 'big_arrow_up', display: 'none' },
            { name: 'big_arrow_up_border', display: 'none' },
            { name: 'vn_116', color: '#ff0000' },
            { name: 'vn_116_l', color: '#ff0000' },
            { name: 'vnk_1', color: '#ffffff' },

          ]
        }
      },
      startTime: timeDiff + 112,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'VNK1_1FI_03', text: '0' },
            { name: 'big_arrow_up', display: 'block' },
          ]
        }
      },
      startTime: timeDiff + 113,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'big_arrow_up', display: 'none' },
          ]
        }
      },
      startTime: timeDiff + 114,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'VNK1_1PI_02', text: '0' },
            { name: 'vn_134', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 115,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_117', color: '#ff0000' },
            { name: 'VNK1_1FI_02', text: '0' },
          ]
        }
      },
      startTime: timeDiff + 116,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_117', color: '#ff0000' },
            { name: 'VNK1_1FI_02', text: '0' },
          ]
        }
      },
      startTime: timeDiff + 117,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'vn_112', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 118,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vnk_1', color: '#b5b3b6' },
            { name: 'vn_127', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 119,
    },

    ////--------------------------------3-------------------------------------
    {
      scenarioText: 'Отделить воздухонагреватель ВНК №1.',
      sender: 'Система',
      audio: 'tts-15',
      startTime: timeDiff + 120,
    },
    {
      action: {
        target2D: 'perekidta_btn',
      },
      startTime: timeDiff + 124,
      human: true,
    },
    { // win_otdel2_na_vnk OPEN
      action: {
        target2D: 'otdel_otdel2_btn',
      },
      startTime: timeDiff + 124.1,
      human: true,
    }, {
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
      startTime: timeDiff + 124.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
      },

      startTime: timeDiff + 124.3,
      human: true,
    },
    {  // win_otdel2_na_vnk CLOSE
      action: {
        target2D: 'otdel2_close_btn',
      },
      startTime: timeDiff + 124.4,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK CLOSE
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 124.5,
      human: true,
    },

    // todo O_p_n_na_k_na-BVNK_VNK1 схема обновляется
    {
      action: {
        window2D: {
          elements: [
            /////////////////////////////////////////////////////// ЕУЕ ТУТ
          ]
        }
      },
      startTime: timeDiff + 125,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 126,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 127,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 128,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 129,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 130,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 131,
    },

    ////--------------------------------4-------------------------------------

    {
      scenarioText: 'Отделить воздухонагреватель ВНК №2.',
      sender: 'Система',
      audio: 'tts-16',
      startTime: timeDiff + 132,
    },
    {
      action: {
        target2D: 'perekidta_btn',
      },
      startTime: timeDiff + 136,
      human: true,
    },
    { // O_p_n_na_k_na-o_2_na_VNK OPEN
      action: {
        target2D: 'nagrev_otd2_btn',
      },
      startTime: timeDiff + 136.1,
      human: true,
    }, {
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
      startTime: timeDiff + 136.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
      },
      startTime: timeDiff + 136.3,
      human: true,
    },
    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 136.4,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK CLOSE
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 136.5,
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
      startTime: timeDiff + 137,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 138,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 139,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 140,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 141,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 142,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 143,
    }, {
      action: {
        window2D: {
          elements: [

          ]
        }
      },
      startTime: timeDiff + 144,
    },
    ///5. Вернуться на общую схему ВНК. Нажать на вкладку «Общая схема». Показать измененные значения, как на видео.
    {
      text: 'ВНК №1, ВНК №2 отделены, а ВНК №3 на дутье.',
      sender: 'Система',
      audio: 'tts-17',
      startTime: timeDiff + 145,
    },
    // 1.4 сценарий
    {
      scenarioText: 'Дать команду дежурному водопроводчику на закрытие природного газа на печь задвижками на подводе газа к фурмам.',
      sender: 'Система',
      audio: 'tts-18',
      lifeTime: '08:45:00',
      startTime: timeDiff + 152,
    },
    ////--------------------------------1---------------------------------------- РАЦИЯ 
    {
      scenarioText: 'Сообщить по рации дежурному водопроводчику.',
      sender: 'Система',
      audio: 'radio_say',
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 153,
      human: true,
    },
    {
      text: 'Закрыть природный газ на фурмах.',
      sender: 'Газовщик',
      audio: 'tts-vo4',
      startTime: timeDiff + 154,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 156,
    },
    {
      text: 'Понял, приступаю.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo5',
      startTime: timeDiff + 157.5,
    },
    ////--------------------------------2---------------------------------------- 
    {
      scenarioText: 'Перевести клапан 721 в режим управления «Дист.»',
      sender: 'Система',
      audio: 'tts-19',
      startTime: timeDiff + 161,
    },
    {
      action: {
        target3D: 'Handle_018',
        rotation: { y: 1.571 },
      },
      duration: 0.15,
      startTime: timeDiff + 162,
      human: true,
    },

    ////--------------------------------3---------------------------------------- 
    {
      audio: 'tts-20',
      scenarioText: 'Перевести тумблер из положения «Авт.4» в положение «Дист.3» на маркировке «Атмосферные клапана» «Клапан 1», «Клапан 2» и «Клапан 3» поочерёдно.',
      sender: 'Система',
      startTime: timeDiff + 163,
    },
    {
      multi: [
        {
          action: {
            target3D: 'Handle_036',
            rotation: { y: 1.571 },
          },
        },
        {
          action: {
            target3D: 'Handle_035',
            rotation: { y: 1.571 },
          },
        }, {
          action: {
            target3D: 'Handle_08',
            rotation: { y: 1.571 },
          },
        },
      ],
      startTime: timeDiff + 171,
      human: true,
    },

    ////--------------------------------4----------------------------------------  fix FIX fix
    {
      text: 'Уменьшить значение параметра на регуляторе природного газа.',
      audio: 'tts-21',
      startTime: timeDiff + 172,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 175.1,
      human: true,
    },



    {
      action: {
        target3D: 'vozNagr1_1', // TODO заменить на красный циферблат
        number: '024.5'
      },
      startTime: timeDiff + 175.11,
    },
    {
      action: {
        target3D: 'Clone_4_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 175.12,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 175.5,
      human: true,
    },
    {
      action: {
        target3D: 'vozNagr1_1', // TODO заменить на красный циферблат
        number: '020.0'
      },
      startTime: timeDiff + 175.51,
    },
    {
      action: {
        target3D: 'Clone_3_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 175.52,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 176,
      human: true,
    },
    {
      action: {
        target3D: 'vozNagr1_1', // TODO заменить на красный циферблат
        number: '017.0'
      },
      startTime: timeDiff + 176.1,
    },
    {
      action: {
        target3D: 'Clone_2_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 176.2,
    },

    ////--------------------------------5---------------------------------------- 
    {
      text: 'Водопроводчик по рации сообщает о выполненных своих операциях.',
      sender: 'Система',
      startTime: timeDiff + 177,
    },
    {
      audio: 'tts-vo6',
      text: 'Газ по фурмам закрыт',
      sender: 'Дежурный водопроводчик',
      startTime: timeDiff + 177.1,
    },
    ////--------------------------------6---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 179,
      human: true,
    },
    {
      text: 'Природный газ закрыт. На фурмах 3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo7',
      startTime: timeDiff + 180,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 183,
    },
    {
      audio: 'tts-vo8',
      text: 'Понял, принял.',
      sender: 'Дежурный водопроводчик',
      startTime: timeDiff + 184,
    },
    ////--------------------------------7---------------------------------------- 
    {
      scenarioText: 'Закрыть задвижку 721.',
      sender: 'Система',
      audio: 'tts-22',
      startTime: timeDiff + 187,
    },
    {
      action: {
        target3D: 'Handle_014',
        rotation: { y: 0.7854 }, // 45
      },
      duration: 0.3,
      startTime: timeDiff + 188,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Unic_Lamp_Red_On'
      },
      startTime: timeDiff + 188.1,
    },
    {
      action: {
        target3D: 'Handle_014',
        rotation: { y: 0 },
      },
      duration: 0.3,
      startTime: timeDiff + 190,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 190.1,
    },
    // 1.5 сценарий ------------------------------------------------------------------------------------------------------------------------------
    {
      text: 'По команде мастера печи - газовщик должен открыть клапан «СНОРТ» полностью для сброса в атмосферу излишки.',
      sender: 'Система',
      audio: 'tts-23',
      lifeTime: '09:00:00',
      startTime: timeDiff + 192,
    },
    ////--------------------------------1---------------------------------------- 
    {
      text: 'Делаем 2,5 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo9',
      startTime: timeDiff + 199,
    },
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 202.5,
      human: true,
    },
    {
      text: 'Делаю 2,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo10',
      startTime: timeDiff + 203,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 206,
    },
    ////--------------------------------2----------------------------------------     /// 4 раза как на видео
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 2,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 208,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 209,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_020',
        material: 'Unic_Lamp_Red_Off',
      },
      startTime: timeDiff + 209.1,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 210,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 211,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 212,
      human: true,
    },
    // TODO Добавить подадение давление на фурмах
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '15' },
          ]
        }
      },
      startTime: timeDiff + 212.1,
    },
    ////--------------------------------3----------------------------------------     ////    2   /////
    ////--------------------------------4---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 213,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 214,
      human: true,
    },
    {
      text: 'На фурмах 2,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo11',
      startTime: timeDiff + 215,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 219,
    },
    {
      text: 'Делаем 2 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo12',
      startTime: timeDiff + 220,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 220.1,
      human: true,
    },
    {
      text: 'Делаю 2 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo13',
      startTime: timeDiff + 221,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 223.9,
    },
    ////--------------------------------5---------------------------------------- /////   2   ////      4 раза из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 2кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 224,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 225,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 226,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 227,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 228,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '19' },
          ]
        }
      },
      startTime: timeDiff + 229,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '22' },
          ]
        }
      },
      startTime: timeDiff + 230,
    },
    ////--------------------------------6---------------------------------------- ////   4   ////
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 230.5,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 231,
      human: true,
    },
    {
      text: 'На фурмах 2 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo14',
      startTime: timeDiff + 232,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 235,
    },
    {
      text: 'Делаем 1,5 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo15',
      startTime: timeDiff + 236,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 236.1,
      human: true,
    },
    {
      text: 'Выполняю.',
      sender: 'Газовщик',
      audio: 'tts-vo16',
      startTime: timeDiff + 237,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 240,
    },
    ////--------------------------------7---------------------------------------- 
    {
      scenarioText: 'Сообщить по телефону в «ЭВС».',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 242,
      action: {
        target3D: 'PhoneButton020',
      },
      human: true,
    },
    {
      text: 'Разгрузка на 20000.',
      sender: 'Газовщик',
      startTime: timeDiff + 244,
      audio: 'tts-vo17',
    },
    {
      text: 'Принял',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo18',
      startTime: timeDiff + 248.5,
    },
    ////--------------------------------8---------------------------------------- //////  2   //////    6-7 раз. БУДЕТ 6  . Из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 1,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 250,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 251,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 252,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 253,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 254,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '33' },
          ]
        }
      },
      startTime: timeDiff + 255,
    },
    ////--------------------------------9---------------------------------------- /////   4   /////
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 255,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      duration: 0.15,
      startTime: timeDiff + 258,
      human: true,
    },
    {
      text: 'На фурмах 1,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo19',
      startTime: timeDiff + 259,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 261,
    },
    {
      text: 'Делаем 1 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo20',
      startTime: timeDiff + 264,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      duration: 0.15,
      startTime: timeDiff + 264.1,
      human: true,
    },
    {
      text: 'Делаю один.',
      sender: 'Газовщик',
      audio: 'tts-vo21',
      startTime: timeDiff + 265,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 268,
    },
    ////--------------------------------10----------------------------------------  ///////   2   //////  7 раз из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 1кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 271,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 272,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 273,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 274,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 275,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '49' },
          ]
        }
      },
      startTime: timeDiff + 276,
    },
    ////--------------------------------11----------------------------------------    ////////////////    4   ///////////////   
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 278,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 279,
      human: true,
    },
    {
      text: 'На фурмах 1 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo22',
      startTime: timeDiff + 280,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 285,
    },
    {
      text: 'Делаем 0,8 кг. Открываем свечу.',
      sender: 'Мастер печи',
      audio: 'tts-vo23',
      startTime: timeDiff + 286,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 289,
      human: true,
    },
    {
      text: 'Приступаю к выполнению.',
      sender: 'Газовщик',
      audio: 'tts-vo24',
      startTime: timeDiff + 290,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 293,
    },
    ////--------------------------------12---------------------------------------- /////////    2   //////////// 2 РАЗА КРУТИТ  из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ»',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 296,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 297,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 298,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '56' },
          ]
        }
      },
      startTime: timeDiff + 298.1,
    },

    ////--------------------------------13---------------------------------------- 
    {
      scenarioText: 'Открыть нижний шихтовый затвор.',
      text: 'Нажать на пульте управления БЗУ кнопку «Открыт» маркировки «Нижний шихтовый затвор».',
      sender: 'Система',
      audio: 'tts-25',
      startTime: timeDiff + 299,
    },
    {
      action: {
        window2D: {
          newWindow: [
            {
              display: 'Display_flat014', svg: 'priczvuksinal', x: 956, y: 112,
              elements: [{ name: 'prixZvykSig_text', text: '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Возможная неготовность БЗУ.' }],
            },
            { display: 'Display_flat015', svg: 'priczvuksinal', x: 956, y: 112, },
          ]
        }
      },
      startTime: timeDiff + 300.5,
    },
    {
      action: {
        target3D: 'Rectangle076',
      },
      startTime: timeDiff + 302,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 303,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 303.5,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 304,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 304.5,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 305,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 305.5,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 306,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 306.5,
    },
    {
      action: {
        target3D: 'Rectangle053',
      },
      startTime: timeDiff + 307,
      human: true,
    },
    {
      text: 'Сброс сигнала тревоги. ',
      sender: 'Система',
      audio: 'tts-26',
      action: {
        window2D: {
          removeWindow: [
            { display: 'Display_flat014', svg: 'priczvuksinal' },
            { display: 'Display_flat015', svg: 'priczvuksinal' },
          ]
        }
      },
      startTime: timeDiff + 307.5,
    },
    ////--------------------------------14----------------------------------------  /// 2 raza is scenario s intervalom
    {
      scenarioText: 'Продолжить приоткрывать клапан «СНОРТ».',
      sender: 'Система',
      startTime: timeDiff + 311,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 312,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 313,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '60' },
          ]
        }
      },
      startTime: timeDiff + 313.5,
    },
    ////--------------------------------15---------------------------------------- 
    {
      scenarioText: 'Выгрузить кокс и остановить загрузку.',
      sender: 'Система',
      audio: 'tts-27',
      startTime: timeDiff + 314,
    },
    {
      action: {
        target2D: 'bzu_gruzit_btn',
        window2D: {
          elements: [
            { name: 'text_dosZadYrov1', color: '#2B2A29' },
            { name: 'text_dosZadYrov2', color: '#2B2A29' },
            { name: 'bg_dosZadYrov', color: '#00FF00' },
            { name: 'time do vydochi porchii', text: '30' },
          ]
        }
      },
      startTime: timeDiff + 317,
      human: true
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '25' },
          ]
        }
      },
      startTime: timeDiff + 317.3,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '20' },
          ]
        }
      },
      startTime: timeDiff + 317.6,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '15' },
          ]
        }
      },
      startTime: timeDiff + 318,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '10' },
          ]
        }
      },
      startTime: timeDiff + 318.3,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '5' },
          ]
        }
      },
      startTime: timeDiff + 318.6,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '0' },
          ]
        }
      },
      startTime: timeDiff + 319,
    },
    {
      action: {
        target2D: 'bzu_ZapretSledPorci_btn',
        window2D: {
          elements: [
            { name: 'btn_Gryzit_1', color: '#00FF00' },
            { name: 'btn_Gryzit_2', color: '#00FF00' },
            { name: 'v rabote', color: 'start' },
            { name: 'bg_vRabote', color: 'start' },
            { name: 'btn_ZapSledPorc_border', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 319.1,
      human: true
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'Krasniy nijniy Poloska', color: '#858585' },
            { name: 'kl.Oh.NGUK2_2', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 320,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl.Oh.NGUK2_1', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 320.5,
    },
    {
      action: {
        target2D: 'bzu_ZapretSledPorci_btn',
        window2D: {
          elements: [
            { name: 'btn_ZapSledPorc_border', color: 'start' },
          ]
        }
      },
      startTime: timeDiff + 320.6,
      human: true
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl.Oh.NGUK2_1', color: 'start' },
            { name: 'Krasniy nijniy Poloska', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 321,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl.Oh.NGUK2_2', color: 'start' },
            { name: 'right_rect_under_arrow', opacity: '0' },
            { name: 'arrow_right', opacity: '1' },
            { name: 'btn_SledPorc_border', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 322,
    },
    { //3D
      text: 'На ПУ БЗУ нажать "Приостановить подачу материала".',
      sender: 'Система',
      action: {
        target3D: 'Rectangle056',
      },
      startTime: timeDiff + 322.2,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle056',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 322.3,
    },
    ////--------------------------------16----------------------------------------  //  Газовщик провернул клапан 1 раз.
    {
      text: 'Продолжить приоткрывать клапан «СНОРТ».',
      sender: 'Система',
      startTime: timeDiff + 323,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 323,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 324,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '60' },
            { name: 'btn_ZapSledPorc_border', color: '#00FF00' },
            { name: 'btn_SledPorc_border', color: 'start' },
            { name: 'arrow_right', opacity: '0' },
            { name: 'right_rect_yellow_arrow', opacity: '1', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 324.1,
    },
    ////--------------------------------17---------------------------------------- 
    {
      // scenarioText: 'Схема БЗУ и нажать на клавишу «Пауза» кнопка.',
      scenarioText: 'Загрузка приостановлена.',
      sender: 'Система',
      audio: 'tts-28',
      startTime: timeDiff + 327,
    },
    {
      text: 'На схеме БЗУ нажать на кнопка «Пауза».',
      sender: 'Система',
      action: {
        target2D: 'bzu_pause_btn',
        window2D: {
          elements: [
            { name: 'right_rect_yellow_arrow', color: 'start' },
            { name: 'btn_Pause_border', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 327.1,
      human: true
    },
    ////--------------------------------18---------------------------------------- 
    {
      scenarioText: 'Открыть атмосферные клапаны.',
      text: 'На ПУ ДП-6 перевести тумблеры клапанов 1, 2, 3 до щелчка в положение «2».',
      sender: 'Система',
      audio: 'tts-29',
      startTime: timeDiff + 328,
    },
    {
      multi: [
        {
          action: {
            target3D: 'Handle_034',
            rotation: { y: -0.785 },
          },
          duration: 0.3,
        },
        {
          action: {
            target3D: 'Handle_033',
            rotation: { y: -0.785 },
          },
          duration: 0.3,
        },
        {
          action: {
            target3D: 'Handle_032',
            rotation: { y: -0.785 },
          },
          duration: 0.3,
        },
      ],
      startTime: timeDiff + 330,
      human: true,
    },
    ////--------------------------------19---------------------------------------- 
    {
      text: 'На ПУ ДП-6 перевести тумблеры клапанов 1, 2, 3 до щелчка в положение «0».',
      sender: 'Система',
      startTime: timeDiff + 336,
    },
    {
      multi: [
        {
          action: {
            target3D: 'Handle_034',
            rotation: { y: 0 },
          },
          duration: 0.3,
        },
        {
          action: {
            target3D: 'Handle_033',
            rotation: { y: 0 },
          },
          duration: 0.3,
        },
        {
          action: {
            target3D: 'Handle_032',
            rotation: { y: 0 },
          },
          duration: 0.3,
        },
      ],
      startTime: timeDiff + 336.1,
      human: true,
    },
    {
      scenarioText: 'Атмосферные клапаны открыты.',
      sender: 'Система',
      audio: 'tts-30',
      startTime: timeDiff + 336.2,
    },

    ////--------------------------------20---------------------------------------- 
    { // 3D
      text: 'По рации сообщить мастеру печи о выполненной операции.',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 340,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 341,
      human: true,
    },
    {
      text: 'Атмосферные клапана открыты. На фурмах 0,75 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo25',
      startTime: timeDiff + 342,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 348,
    },
    ////--------------------------------21---------------------------------------- 
    { // 3D
      scenarioText: 'Мастер печи по рации сообщает действия.',
      sender: 'Система',
      startTime: timeDiff + 350,
    },
    {
      text: 'Закрывайте кислород и делайте 0,5 кг на фурмах.',
      sender: 'Мастер печи',
      audio: 'tts-vo26',
      startTime: timeDiff + 351,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 356.5,
      human: true,
    },
    {
      text: 'Закрываю кислород полностью и делаю 0,5.',
      sender: 'Газовщик',
      audio: 'tts-vo27',
      startTime: timeDiff + 357.5,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 362.15,
    },
    ////--------------------------------22---------------------------------------- 
    {
      scenarioText: 'Сообщить по телефону в "Кислородный цех".',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 363,
    },
    {
      action: {
        target3D: 'PhoneButton017',
      },
      startTime: timeDiff + 364,
      human: true,
    },
    {
      text: 'Закрывайте кислород на выходе.',
      sender: 'Газовщик',
      audio: 'tts-vo28',
      startTime: timeDiff + 365,
    },
    {
      text: 'Выполняю',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo29',
      startTime: timeDiff + 369,
    },
    ////--------------------------------23----------------------------------------   // Газовщик проворачивал клапан 6 раз с интервалом.
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,5кг.',
      sender: 'Система',
      startTime: timeDiff + 371,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 371.1,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 371.5,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 372,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 372.5,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '67' },
          ]
        }
      },
      startTime: timeDiff + 372.6,
    },
    ////--------------------------------24---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 373,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 373.1,
      human: true,
    },
    {
      text: 'На фурмах 0,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo30',
      startTime: timeDiff + 374,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 377,
    },
    ////--------------------------------25---------------------------------------- 
    { // 3D
      scenarioText: 'БЗУ снять с автоматического режима.',
      audio: 'tts-31',
      sender: 'Система',
      startTime: timeDiff + 379,
    },
    {
      sender: 'Система',
      text: 'На ПУ №2 нажать на кнопку «Автоматич. СТОП»', // TODO Заменить ПУ2 на норм ПУ
      action: {
        target3D: 'Rectangle071',
      },
      startTime: timeDiff + 380,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 381,
    },
    {
      sender: 'Система',
      text: 'На ПУ №2 нажать на кнопку «ЗАКРЫТ» «Клапан вторичного выравнивания» слева', // TODO Заменить ПУ2 на норм ПУ
      action: {
        target3D: 'Rectangle065',
      },
      startTime: timeDiff + 381.1,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 381.3,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 381.4,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 382,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 382.5,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 383,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 383.5,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 384,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 384.5,
    },
    {
      sender: 'Система',
      text: 'На ПУ №2 нажать на кнопку «ЗАКРЫТ» «Клапан вторичного выравнивания» слева', // TODO Заменить ПУ2 на норм ПУ
      action: {
        target3D: 'Rectangle046',
      },
      startTime: timeDiff + 384.6,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 384.7,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 385,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 385.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 386,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 386.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 387,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 387.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 388,
    },
    {
      sender: 'Система',
      text: 'На ПУ №2 нажать на кнопку «ОТКРЫТ» «Клапан сброса» слева', // TODO Заменить ПУ2 на норм ПУ
      action: {
        target3D: 'Rectangle070',
      },
      startTime: timeDiff + 388.1,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 388.2,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 388.4,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 389,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 389.5,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 390,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 390.5,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 391,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 391.5,
    },
    {
      sender: 'Система',
      text: 'На ПУ №2 нажать на кнопку «ОТКРЫТ» «Клапан сброса» справа', // TODO Заменить ПУ2 на норм ПУ
      action: {
        target3D: 'Rectangle115',
      },
      startTime: timeDiff + 391.6,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle114',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 391.7,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 392,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 392.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 393,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 393.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 394,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 394.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 395,
    },
    ////--------------------------------26---------------------------------------- 
    {
      scenarioText: 'Мастер печи по рации сообщает о следующих операциях',
      text: 'Делаем 0,3кг',
      sender: 'Мастер печи',
      audio: 'tts-vo31',
      startTime: timeDiff + 396,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 395,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 399,
      human: true,
    },
    {
      text: 'Принимаю, делаю 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo32',
      startTime: timeDiff + 400,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 404,
    },
    //--------------------------------27----------------------------------------  // Газовщик проворачивал клапан 6 раз с интервалом.
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,3кг.',
      sender: 'Система',
      startTime: timeDiff + 404.1,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 404.2,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 405,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 406,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 407,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '89' },
          ]
        }
      },
      startTime: timeDiff + 407.1,
    },
    {
      text: 'Смесительный клапан 002 закрывается.',
      audio: 'tts-32',
      sender: 'Система',
      action: {
        window2D: {
          elements: [
            { name: 'kl_002', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 408,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 409,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 410,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 409,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff0000' },
            { name: 'circle_1_kl002', stroke: '#ff0000' },
            { name: 'circle_2_kl002', stroke: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 412,
    },
    ////--------------------------------28---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 413,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 413.1,
      human: true,
    },
    {
      text: 'На фурмах 0,3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo33',
      startTime: timeDiff + 414,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 418,
    },
    {
      text: 'Закрывайте отсечной.',
      sender: 'Мастер печи',
      audio: 'tts-vo34',
      startTime: timeDiff + 420,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 420.1,
      human: true,
    },
    {
      text: 'Понятно, Артём Викторович – закрывай отсечной.',
      sender: 'Газовщик',
      audio: 'tts-vo35',
      startTime: timeDiff + 421.5,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 426,
    },
    {
      text: 'Понял, закрываю отсечной клапан.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo36',
      startTime: timeDiff + 427,
    },
    ////--------------------------------29---------------------------------------- 
    {
      text: 'Отсечной клапан закрывыается.',
      sender: 'Система',
      startTime: timeDiff + 438,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 440.5,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#06DA06' },
          ]
        }
      },
      startTime: timeDiff + 441,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 441.5,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#06DA06' },
          ]
        }
      },
      startTime: timeDiff + 442,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 442.5,
    },
    {
      text: 'Отсечной клапан закрыт.',
      sender: 'Система',
      audio: 'tts-33',
      startTime: timeDiff + 443,
    },
    ////--------------------------------30---------------------------------------- 
    {
      scenarioText: 'Открыть сбросной клапан 723',
      sender: 'Система',
      action: {
        target3D: 'Handle_012',
        rotation: { y: -0.785 },
      },
      duration: 0.3,
      startTime: timeDiff + 446,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_017',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 446.5,
    },
    {
      action: {
        target3D: 'Lamp_Green_021',
        material: 'Unic_Lamp_Green_On'
      },
      startTime: timeDiff + 447,
    },
    {
      action: {
        target3D: 'Handle_012',
        rotation: { y: 0 },
      },
      duration: 0.3,
      startTime: timeDiff + 447.5,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_723', color: '#00DA01' }, // TODO сделать верхнюю часть клана зелёнок, перерисовать клапан
          ]
        }
      },
      startTime: timeDiff + 447.6,
    },


    ////--------------------------------31---------------------------------------- 
    {
      text: 'Третью закрыли 1.1 по второму толкателю.',
      sender: 'Мастер печи',
      audio: 'tts-vo37',
      startTime: timeDiff + 449,
    },
    {
      scenarioText: 'Сообщить по рации в «Лётки №3».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 451,
    },
    {
      action: {
        target3D: 'ButtonHightlight_006',
      },
      startTime: timeDiff + 451.5,
      human: true,
    },
    {
      text: '1.1 второй толкатель.',
      sender: 'Газовщик',
      audio: 'tts-vo38',
      startTime: timeDiff + 452.5,
    },
    {
      action: {
        target3D: 'Lamp_006',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 456,
    },


    ////--------------------------------32---------------------------------------- 
    {
      scenarioText: 'Сообщить по телефону в "Дисп.комб".',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 457,
    },
    {
      action: {
        target3D: 'PhoneButton012',
      },
      startTime: timeDiff + 458,
      human: true,
    },
    {
      text: 'Слева 1.1 по второму от толкателя.',
      sender: 'Газовщик',
      audio: 'tts-vo39',
      startTime: timeDiff + 459,
    },
    {
      text: 'Хорошо, принял.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo40',
      startTime: timeDiff + 464,
    },
    {
      text: 'Справа пока не сдавай.',
      sender: 'Газовщик',
      audio: 'tts-vo41',
      startTime: timeDiff + 467,
    },
    ////--------------------------------33---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Лётки №3».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 471,
    },
    {
      action: {
        target3D: 'ButtonHightlight_006',
      },
      startTime: timeDiff + 471.5,
      human: true,
    },
    {
      text: 'Третья лётка, отдавайте ковши.',
      sender: 'Газовщик',
      audio: 'tts-vo42',
      startTime: timeDiff + 472.5,
    },
    {
      action: {
        target3D: 'Lamp_006',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 477,
    },

    ////--------------------------------34---------------------------------------- 
    {
      text: 'Отсечной закрыт.',
      sender: 'Мастер печи',
      audio: 'tts-vo43',
      startTime: timeDiff + 479,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 479.1,
      human: true,
    },
    {
      text: 'Отсечной закрыт, на фурмах 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo44',
      startTime: timeDiff + 480,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 487,
    },
    {
      text: 'Делаем 0,2 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo45',
      startTime: timeDiff + 488,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 488.1,
      human: true,
    },
    {
      text: 'Принял, делаю 0,2.',
      sender: 'Газовщик',
      audio: 'tts-vo46',
      startTime: timeDiff + 489,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 493,
    },
    ////--------------------------------35---------------------------------------- 
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,2кг.',
      sender: 'Система',
      startTime: timeDiff + 494,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 494.2,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 495,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 495.5,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 496,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '93' },
          ]
        }
      },
      startTime: timeDiff + 496.1,
    },
    ////--------------------------------36---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 497,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 497.1,
      human: true,
    },
    {
      text: 'На фурмах 0,2.',
      sender: 'Газовщик',
      audio: 'tts-vo47',
      startTime: timeDiff + 498,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 502,
    },
    {
      text: 'Делаем 0.',
      sender: 'Мастер печи',
      audio: 'tts-vo48',
      startTime: timeDiff + 504,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 504.1,
      human: true,
    },
    {
      text: 'Понял, делаю 0.',
      sender: 'Газовщик',
      audio: 'tts-vo49',
      startTime: timeDiff + 505,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 509,
    },
    ////--------------------------------37---------------------------------------- 
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0кг.',
      sender: 'Система',
      startTime: timeDiff + 509.1,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 509.2,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 510,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 510.5,
      human: true,
    },
    {
      action: {
        target3D: 'Handle_015',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 511,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_020',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 510.6,
    },
    {
      action: {
        target3D: 'Lamp_Green_024',
        material: 'Unic_Lamp_Green_On'
      },
      startTime: timeDiff + 510.7,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '100' }, // TODO Где давление на фурмах до 0.00 упадёт!?
          ]
        }
      },
      startTime: timeDiff + 511.2,
    },
    {
      text: 'Прекращение церкуляции кокса.',
      sender: 'Система',
      startTime: timeDiff + 512,
    },
    {
      text: 'Клапан «СНОРТ» полностью открыт.',
      sender: 'Система',
      startTime: timeDiff + 513,
    },
    {
      text: 'Прекращение дутья.',
      sender: 'Система',
      startTime: timeDiff + 514,
    },
    ////--------------------------------38---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 515,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 515.1,
      human: true,
    },
    {
      text: '«СНОРТ» раскручен полностью. На фурмах 0.',
      sender: 'Газовщик',
      audio: 'tts-vo50',
      startTime: timeDiff + 516,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 520,
    },
    {
      text: 'Закрывайте шибера.',
      sender: 'Мастер печи',
      audio: 'tts-vo51',
      startTime: timeDiff + 521,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 521.1,
      human: true,
    },
    {
      text: 'Закрываю шибера.',
      sender: 'Газовщик',
      audio: 'tts-vo52',
      startTime: timeDiff + 522,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 525,
    },
    ////--------------------------------39---------------------------------------- 
    // scenarioText: 'Делаем 310 318 и 319 поочерёдно.',
    ////--------------------------------клапан 310----------------------------------------Закрыт. Автоматический в ручной-------------------------------
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_318', color: '#07FF05' },
            { name: 'kl_319', color: '#07FF05' },
          ]
        }
      },
      startTime: timeDiff + 525.1,
    },
    {
      scenarioText: 'Перевести ВНК №3 на ручной режим.',
      text: 'Перевести клапан 310 на ручной режим.',
      sender: 'Система',
      action: {
        target2D: 'vn_310_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 310' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'btn_auto_text', color: '#6E6E6E' },
            { name: 'btn_ruchnoy_text', color: '#000000' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_stop_text', color: '#6E6E6E' },
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_auto_1', color: '#E6E6E6' },
            { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_ruchnoy_1', color: '#ffffff', },
            { name: 'btn_ruchnoy_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_1', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'time_full_vnk_text', text: '22' },
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#ffffff' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#ffffff' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'block_open', color: '#07FF05' },
            { name: 'block_close', color: '#07FF05' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.15, y: 71.8, w: 4.0, h: 2.6, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 526,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1765, y: 732 },
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 526.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_open_text', color: '#000000' },
            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 526.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1760, y: 900 },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех блокировок' },
          ],
        },
        helper2D: [
          { x: 91.90, y: 93, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.20, y: 93, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 526.6,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#6DE90C' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 526.8,
      human: true,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 527,
      human: true,
    },
    ////
    ////--------------------------------клапан 318----------------------------------------Открыт. Автоматический в ручной-------------------------------
    {
      text: 'Перевести клапан 318 на ручной режим.',
      sender: 'Система',
      action: {
        target2D: 'vn_318_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 318' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_1_win1', stroke: '#07FF05' },
            { name: 'circle_2_win1', stroke: '#07FF05' },
            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'btn_auto_text', color: '#6E6E6E' },
            { name: 'btn_ruchnoy_text', color: '#000000' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_stop_text', color: '#6E6E6E' },
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_auto_1', color: '#E6E6E6' },
            { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_ruchnoy_1', color: '#ffffff', },
            { name: 'btn_ruchnoy_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_1', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'time_full_vnk_text', text: '22' },
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#ffffff' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#ffffff' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_open_text', color: '#6E6E6E' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.15, y: 71.8, w: 4.0, h: 2.6, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 527.1,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1765, y: 732 },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 527.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },
            { name: 'block_open', color: '#ff1e00' },
            { name: 'block_close', color: '#ff1e00' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 527.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1760, y: 900 },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех блокировок' },
          ],
        },
        helper2D: [
          { x: 91.90, y: 93, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.20, y: 93, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 527.6,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#6DE90C' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 527.8,
      human: true,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 528,
      human: true,
    },

    ////--------------------------------клапан 319----------------------------------------Открыт. Автоматический в ручной-------------------------------
    {
      text: 'Перевести клапан 319 на ручной режим.',
      sender: 'Система',
      action: {
        target2D: 'vn_319_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 319' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_1_win1', stroke: '#07FF05' },
            { name: 'circle_2_win1', stroke: '#07FF05' },
            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'btn_auto_text', color: '#6E6E6E' },
            { name: 'btn_ruchnoy_text', color: '#000000' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_stop_text', color: '#6E6E6E' },
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_auto_1', color: '#E6E6E6' },
            { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_ruchnoy_1', color: '#ffffff', },
            { name: 'btn_ruchnoy_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_1', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'time_full_vnk_text', text: '22' },
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#ffffff' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#ffffff' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_open_text', color: '#6E6E6E' },
          ]
        },
        helper2D: [
          { x: 83, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 79.8, y: 53.2, w: 4.0, h: 2.6, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 528.1,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1610, y: 580 },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 80.7, y: 60.5, w: 3.3, h: 2.5, id: 'open_vn1' },
          { x: 84.4, y: 60.5, w: 3.2, h: 2.5, id: 'close_vn' },
        ]
      },
      startTime: timeDiff + 528.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },
          ]
        },
        helper2D: [
          { x: 83, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 75.4, y: 70.4, w: 8.6, h: 2.6, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 528.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1610, y: 680 },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех блокировок' },
          ],
        },
        helper2D: [
          { x: 84.3, y: 70.7, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 80.7, y: 70.7, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 528.6,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#6DE90C' },
          ]
        },
        helper2D: [
          { x: 83, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 79.8, y: 53.2, w: 4.0, h: 2.6, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 528.8,
      human: true,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 529,
      human: true,
    },
    ////--------------------------------40---------------------------------------- 
    {
      scenarioText: 'Открыть клапан 310 для сброса давления.',
      sender: 'Система',
      audio: 'tts-39',
      startTime: timeDiff + 529.1,
    },
    {
      action: {
        target2D: 'vn_310_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 310' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'time_full_vnk_text', text: '22' },
            { name: 'block_open', color: '#07FF05' },
            { name: 'block_close', color: '#07FF05' },
            { name: 'btn_open_text', color: '#000000' },
            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#6DE90C' },
            { name: 'block_open', color: '#ff1e00' },
            { name: 'block_close', color: '#07FF05' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  «Открыть»
        ]
      },
      startTime: timeDiff + 529.8,
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
      startTime: timeDiff + 530,
      human: true,
    },
    //  маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'polozenie_button_zakr_text', color: '#000000' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_310_1', color: '#8F8F8F' },
            { name: 'kl_310_2', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 530.2,
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

            { name: 'kl_310_1', color: '#00FF00' },
            { name: 'kl_310_2', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 531,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'kl_310_1', color: '#8F8F8F' },
            { name: 'kl_310_2', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 532,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },

            { name: 'kl_310_1', color: '#00FF00' },
            { name: 'kl_310_2', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 533,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },

            { name: 'kl_310_1', color: '#8F8F8F' },
            { name: 'kl_310_2', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 534,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
            { name: 'kl_310_1', color: '#00FF00' },
            { name: 'kl_310_2', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 535,
    },
    {
      action: {
        target2D: 'close_w1',
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 535.2,
      human: true,
    },
    ////--------------------------------41---------------------------------------- 318
    {
      scenarioText: 'Закрыть клапан 318.',
      sender: 'Система',
      audio: 'tts-40',
      startTime: timeDiff + 535.3,
    },
    {
      action: {
        target2D: 'vn_318_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 318' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_1_win1', stroke: '#07FF05' },
            { name: 'circle_2_win1', stroke: '#07FF05' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'time_full_vnk_text', text: '22' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },
            { name: 'block_open', color: '#ff1e00' },
            { name: 'block_close', color: '#ff1e00' },
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#6DE90C' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 535.4,
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
      startTime: timeDiff + 535.6,
      human: true,
    },
    //  маленькое окошко ОК //  ВН Закрывается
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'polozenie_button_zakr_text', color: '#000000' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 535.8,
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
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 536.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 537,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 538,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },

      },
      startTime: timeDiff + 539,
    },
    // ОКНО ВН  // КЛИК СТОП
    {
      action: {
        target2D: 'win_posle_1_stop_btn',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'polozenie_button_text', color: '#000000' },
            { name: 'polozenie_button_zakr_text', color: '#000000' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
          ]
        },
      },
      startTime: timeDiff + 539.2,
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
      startTime: timeDiff + 539.4,
      human: true,
    },
    //  маленькое окошко ОК //  ВН Закрывается
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'polozenie_button_zakr_text', color: '#000000' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 539.6,
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
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 540.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 541,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 542,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },

      },
      startTime: timeDiff + 543,
    },
    // ОКНО ВН  // КЛИК СТОП
    {
      action: {
        target2D: 'win_posle_1_stop_btn',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'polozenie_button_text', color: '#000000' },
            { name: 'polozenie_button_zakr_text', color: '#000000' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 543.2,
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
      startTime: timeDiff + 543.4,
      human: true,
    },
    //  маленькое окошко ОК //  ВН Закрывается
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'polozenie_button_zakr_text', color: '#000000' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 543.6,
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
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 544.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 545,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
            { name: 'status_window_text', text: 'Закрыт' },
          ]
        },
      },
      startTime: timeDiff + 546,
    },
    ////--------------------------------клапан 318----------------------------------------Закрыт. Закрыт в закрыт-------------------------------    //  2
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 546.3,
      human: true,
    },

    ////--------------------------------42---------------------------------------- 319
    {
      scenarioText: 'Закрыть клапан 319.',
      sender: 'Система',
      audio: 'tts-41',
      startTime: timeDiff + 547,
    },
    {
      action: {
        target2D: 'vn_319_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 319' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_1_win1', stroke: '#07FF05' },
            { name: 'circle_2_win1', stroke: '#07FF05' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'time_full_vnk_text', text: '22' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },
            { name: 'block_open', color: '#ff1e00' },
            { name: 'block_close', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#6DE90C' },
          ]
        },
        helper2D: [
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 79.80, y: 57.2, w: 4.0, h: 2.6, id: 'open_vn' },   //  клапан 319 //  win 1  //  "Закрыть"
        ]
      },
      startTime: timeDiff + 547.4,
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
      startTime: timeDiff + 547.6,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'polozenie_button_zakr_text', color: '#000000' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_319', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 547.8,
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
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 548.8,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_319', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 549.8,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },
            { name: 'kl_319', color: '#FF0000' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000000' },
          ]
        },
      },
      startTime: timeDiff + 550.8,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 551,
      human: true,
    },
    ////--------------------------------43---------------------------------------- 319
    {
      scenarioText: 'Закрыть клапан 310.',
      sender: 'Система',
      audio: 'tts-42',
      startTime: timeDiff + 552,
    },
    {
      action: {
        target2D: 'vn_310_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 310' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_1_win1', stroke: '#07FF05' },
            { name: 'circle_2_win1', stroke: '#07FF05' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'time_full_vnk_text', text: '22' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },
            { name: 'block_open', color: '#6DE90C' },
            { name: 'block_close', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#6DE90C' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#6DE90C' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.15, y: 75.7, w: 4.0, h: 2.6, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 552.4,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn',  // окно ВН  "Закрыть"
        window2D: {
          newPositionWindow: { x: 1765, y: 732 },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 92.10, y: 76, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.40, y: 76, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 552.6,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'polozenie_button_zakr_text', color: '#000000' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_319', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 552.8,
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
            { name: 'kl_310', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 553.8,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_310', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 554.8,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_1_win1', stroke: '#FF0000' },
            { name: 'circle_2_win1', stroke: '#FF0000' },
            { name: 'kl_310', color: '#FF0000' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000000' },
          ]
        },
      },
      startTime: timeDiff + 555.8,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 556,
      human: true,
    },
    ////--------------------------------44---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 557,
      human: true,
    },
    {
      text: 'Шибера закрыты.',
      sender: 'Газовщик',
      audio: 'tts-vo53',
      startTime: timeDiff + 558,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 561,
    },
    {
      text: 'Берём печь на тягу.',
      sender: 'Мастер печи',
      audio: 'tts-vo54',
      startTime: timeDiff + 563,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 563.1,
      human: true,
    },
    {
      text: 'Выполняю, берём печь на тягу.',
      sender: 'Газовщик',
      audio: 'tts-vo55',
      startTime: timeDiff + 564,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 566,
    },
    ////--------------------------------45---------------------------------------- 
    {
      scenarioText: 'Перевести на дистанцию клапан тяги 022.',
      sender: 'Система',
      audio: 'tts-43',
      startTime: timeDiff + 567,
    },
    {
      action: {
        target3D: 'kl022',
        rotation: { y: 6.283185307179586 },
      },
      duration: 0.3,
      startTime: timeDiff + 568,
      human: true,
    },
    ////--------------------------------46---------------------------------------- 
    {
      scenarioText: 'Открыть клапан тяги 022 на «Общей схеме ВНК».',
      sender: 'Система',
      startTime: timeDiff + 569,
    },
    {
      action: {
        target2D: 'kl022',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 022' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'skhema_sobrana', color: '#6DE90B' },
            { name: 'block_open', color: '#6DE90B' },
            { name: 'block_close', color: '#6DE90B' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_1_win1', stroke: '#ff1e00' },
            { name: 'circle_2_win1', stroke: '#ff1e00' },
            { name: 'btn_auto_text', color: '#6E6E6E' },
            { name: 'btn_auto_1', color: '#E6E6E6' },
            { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_ruchnoy_text', color: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#ffffff', },
            { name: 'btn_ruchnoy_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#ffffff' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#ffffff' },
            { name: 'time_full_vnk_text', text: '20' },
          ]
        },
        helper2D: [
          { x: 94.7, y: 26, w: 1.7, h: 2.2, id: 'close_w1' },
          { x: 87.4, y: 37.8, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 569.1,
      human: true
    },
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1765, y: 350 },
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 92, y: 37.3, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.3, y: 37.3, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 569.2,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_1_kl022', stroke: '#8F8F8F' },
            { name: 'circle_2_kl022', stroke: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 94.7, y: 26, w: 1.7, h: 2.2, id: 'close_w1' },
          { x: 87.4, y: 37.8, w: 4, h: 2.5, id: 'open_vn' },
          { x: 87.2, y: 40.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' },
        ]
      },
      startTime: timeDiff + 569.3,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_1_kl022', stroke: '#00FF00' },
            { name: 'circle_2_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 570,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_1_kl022', stroke: '#8F8F8F' },
            { name: 'circle_2_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 571,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_1_kl022', stroke: '#00FF00' },
            { name: 'circle_2_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 572,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_1_kl022', stroke: '#8F8F8F' },
            { name: 'circle_2_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 573,
    },
    ////--------------------------------46-2---------------------------------------- 
    {
      action: {
        target2D: 'win_posle_1_stop_btn',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
          ]
        },
      },
      startTime: timeDiff + 573.1,
      human: true
    },
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1765, y: 350 },
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 92, y: 37.3, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.3, y: 37.3, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 573.2,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
          ]
        },
        helper2D: [
          { x: 94.7, y: 26, w: 1.7, h: 2.2, id: 'close_w1' },
          { x: 87.4, y: 37.8, w: 4, h: 2.5, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 573.3,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_1_kl022', stroke: '#00FF00' },
            { name: 'circle_2_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 574,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_1_kl022', stroke: '#8F8F8F' },
            { name: 'circle_2_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 575,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_1_kl022', stroke: '#00FF00' },
            { name: 'circle_2_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 576,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_1_kl022', stroke: '#8F8F8F' },
            { name: 'circle_2_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 577,
    },
    ////--------------------------------46-3---------------------------------------- 
    {
      action: {
        target2D: 'win_posle_1_stop_btn',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'btn_open_1', color: '#ffffff' },
            { name: 'btn_open_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_open_text', color: '#000000' },
          ]
        },
      },
      startTime: timeDiff + 577.1,
      human: true
    },
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: { x: 1765, y: 350 },
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 92, y: 37.3, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.3, y: 37.3, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 577.2,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
          ]
        },
        helper2D: [
          { x: 94.7, y: 26, w: 1.7, h: 2.2, id: 'close_w1' },
          { x: 87.4, y: 37.8, w: 4, h: 2.5, id: 'open_vn' },
        ]
      },
      startTime: timeDiff + 577.3,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_1_kl022', stroke: '#00FF00' },
            { name: 'circle_2_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 578,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_1_win1', stroke: '#8F8F8F' },
            { name: 'circle_2_win1', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_1_kl022', stroke: '#8F8F8F' },
            { name: 'circle_2_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 579,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_1_win1', stroke: '#00FF00' },
            { name: 'circle_2_win1', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_1_kl022', stroke: '#00FF00' },
            { name: 'circle_2_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 580,
    },
    {
      scenarioText: 'Клапан тяги открыт',
      sender: 'Система',
      audio: 'tts-44',
      startTime: timeDiff + 581,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 581.1,
      human: true,
    },
    ////--------------------------------47---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 582,
      human: true,
    },
    {
      text: 'Печь на тяге.',
      sender: 'Газовщик',
      audio: 'tts-vo56',
      startTime: timeDiff + 583,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 586,
    },
    {
      text: 'Хорошо.',
      sender: 'Мастер печи',
      audio: 'tts-vo57',
      startTime: timeDiff + 587,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 587.1,
      human: true,
    },
    {
      text: 'Доменная печь №6 остановлена.',
      sender: 'Газовщик',
      audio: 'tts-vo58',
      startTime: timeDiff + 588,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 591,
    },
    {
      scenarioText: 'Доменная печь №6 остановлена.',
      sender: 'Система',
      startTime: timeDiff + 592,
    },
    {
      startTime: timeDiff + 594,
    },
    */
  ],
  [ // Второй сценарий
    {
      scenarioText: 'Заменить1',
      sender: 'Система',
      action: {
        target: 'kl021',
        position: { x: 0.2 },
        rotation: {},
      },
      startTime: timeDiff + 1,
      human: true,
    },
    {
      text: 'Заменить1',
      action: {
        target: 'kl019',
        position: {},
        rotation: { y: 90 },
      },
      startTime: timeDiff + 4,
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
    ///// КУЧА старых 2д исчезла. НАЙТИ!!!!
    // { name: 'vnk_1', color: '#ff0000' },
    // { name: 'vn_132', color: '#00FF00' },
    // { name: 'vn_117', color: '#00FF00' },
    // { name: 'vn_132_l', color: '#00FF00' },
    // { name: 'vn_116', color: '#00FF00' },
    // { name: 'vn_116_l', color: '#00FF00' },
    // { name: '1PS_03_square', color: '#00FF00' },
    // { name: '1PS_05_square', color: '#00FF00' },
    // { name: 'Avto', text: 'Циклический' },
    // { name: 'Dutyo', text: 'Нагрев-Отдел.' },
    // { name: 'Vremya_nagreva', text: '109' },
    // { name: 'Vremya_dutya', text: '60' },
    // { name: 'Vremya_otdelen', text: '0' },
    // BZU
    { name: 'v rabote', color: '#2B2A29' },
    { name: 'bg_vRabote', color: '#00FF00' },
    { name: 'arrow_right', opacity: '0' },
    { name: 'arrow_left', opacity: '0' },
    { name: 'left_rect_down_arrow', color: '#D90001' },
    { name: 'right_rect_yellow_arrow', opacity: '0' },
    { name: 'left_rect_yellow_arrow', opacity: '0' },

  ]
]
// Лучше всего искать по id а не имени.
let startState3D = [
  [// Первый сценарий
    // ЩИТ БВНК 1
    { name: 'kl022', rotation: { y: 5.5850536063818545, } },
    // { id: '96378261-ad8d-4410-ad46-36a776a8b7b2', rotation: { y: 5, } },
    { id: '6c116935-27e8-4508-bbbd-e16306343c49', material: 'Unic_ScaleDot_donor_green' },
    { id: '0376bd70-dc53-46d7-a9b6-9f2a0fbe9a44', material: 'Unic_progress bar_on' },
    { name: 'Clone_0_progress bar142', material: 'Unic_progress bar_on' },
    { name: 'Clone_1_progress bar142', material: 'Unic_progress bar_on' },
    { name: 'Clone_2_progress bar142', material: 'Unic_progress bar_on' },
    { name: 'Clone_3_progress bar142', material: 'Unic_progress bar_on' },
    { name: 'Clone_4_progress bar142', material: 'Unic_progress bar_on' },
    // { name: 'Lamp_Green_023', material: 'Unic_Lamp_Green_On' },
    { name: 'Lamp_Red_020', material: 'Unic_Lamp_Red_On' },
    { name: 'Lamp_Red_019', material: 'Unic_Lamp_Red_On' },
    { name: 'Lamp_Red_017', material: 'Unic_Lamp_Red_On' },
    { name: 'Lamp_Red_015', material: 'Unic_Lamp_Red_On' },
    { id: '8b1850b5-9c32-4d19-a4dc-70eab7778b97', position: { x: 0.024 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // точка жёл экран1
    { id: '7cd2a16b-0f5e-4691-9f5b-bd8e7dc3c3c7', position: { x: 0.042 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // точка зел экран1

    { name: 'vozNagr1_1', number: '1207' },
    { name: 'vozNagr1_2', number: '289.5' },
    { name: 'vozNagr2_1', number: '1217' },
    { name: 'vozNagr2_2', number: '190.8' },
    { name: 'vozNagr3_1', number: '1255' },
    { name: 'vozNagr3_2', number: '125.9' },
    { name: 'rashodSmeshGaza_1', number: '000.0' },
    { name: 'rashodSmeshGaza_2', number: '000.1' },
    { name: 'rashodSmeshGaza_3', number: '000.0' },
    { name: 'rashodVozdyhGor_1', number: '000.1' },
    { name: 'rashodVozdyhGor_2', number: '000.1' },
    { name: 'rashodVozdyhGor_3', number: '000.2' },
    { name: 'davVozGorBVN', number: '09.90' },
    { name: 'rashodSmeshGaza_1_r', number: '023.4', color: 'red' },
    { name: 'rashodSmeshGaza_2_r', number: '021.1', color: 'red' },
    { name: 'rashodSmeshGaza_3_r', number: '022.5', color: 'red' },
    { name: 'rashodVozdyhGor_1_r', number: '023.4', color: 'red' },
    { name: 'rashodVozdyhGor_2_r', number: '021.5', color: 'red' },
    { name: 'rashodVozdyhGor_3_r', number: '021.4', color: 'red' },
    { name: 'klapPrirGazaBRU_1_r', number: '003.0', color: 'red' },
    { name: 'klapPrirGazaBRU_2_r', number: '000.9', color: 'red' },
    { name: 'klapPrirGazaBRU_3_r', number: '015.9', color: 'red' },
    { name: 'smesKlapBRU_1_r', number: '000.8', color: 'red' },
    { name: 'smesKlapBRU_2_r', number: '002.1', color: 'red' },
    { name: 'obshKlapVozGorBRU_r', number: '001.8', color: 'red' },
    //---------------------------------------------
    // Sergey 
    // Третий щит
    { name: 'pKolGaz', number: '0000', },
    { name: 'dpVerh', number: '0000', },
    { name: 'dpObsh', number: '0000', },
    { name: 'dpNiz', number: '0000', },
    { name: 'fHolodDut', number: '0000', },
    { name: 'pGorDut', number: '0000', },
    { name: 'urZasDat1', number: '0000', },
    { name: 'urZasDat2', number: '0000', },
    { name: 'urZasMeh', number: '0000', },
    { name: 'tVGazT1', number: '0000', },
    { name: 'tVGazT2', number: '0000', },
    { name: 'tVGazT3', number: '0000', },
    { name: 'tVGazT4', number: '0000', },
    { name: 'fAzotObsh', number: '0000', },
    { name: 'sodKislVAzot', number: '0000', },
    { name: 'tGorDut', number: '0000', },
    { name: 'pTechVodT1', number: '0000', },
    { name: 'pTechVodT2', number: '00.00', },
    { name: 'pSjatVozd', number: '0000', },
    { name: 'pOsyshSjatVozd', number: '0000', },
    { name: 'pAzotkZatv', number: '0000', },
    { name: 'tReduct', number: '0000', },
    { name: 'fVodNaReduct', number: '0000', },
    { name: 'fPrirodGaz', number: '0000', },
    { name: 'fPrirodGazReg', number: '00.00', color: 'red' },
    { name: 'fParaUvlajDutReg', number: '0.000', color: 'red' },
    // Второй щит
    { name: 'bzuDavlenie_l', number: '0.000', color: 'red' },
    { name: 'bzuVesNetto_l', number: '0.000', color: 'red' },
    { name: 'bzuDavlenie_r', number: '0.000', color: 'red' },
    { name: 'bzuVesNetto_r', number: '0.000', color: 'red' },
    { name: 'bzuPolShihZat_l', number: '0.000', color: 'red' },
    { name: 'bzuVremVigruz_l', number: '0.000', color: 'red' },
    { name: 'bzuFactUgol_l', number: '0.000', color: 'red' },
    { name: 'bzuPolShihZat_r', number: '0.000', color: 'red' },
    { name: 'bzuVremVigruz_r', number: '0.000', color: 'red' },
    { name: 'bzuFactUgol_r', number: '0.000', color: 'red' },
    { name: 'bzuUrovZasip', number: '0.000', color: 'red' },

  ]
]
