
/*                 TODO
---------------------------------------------------------------
делаю режим контроль
---------------------------------------------------------------
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
      deadTimerHelper: 0,
      deadTimer: 120000,
      deadTimerBool: true,
    },
    scenarioArr: [],
    scenario: undefined,
    messages: [],
    ended: false,
    multiAction: [],
    windowIntersec: [],
    maximumErrors: 50,
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
      { positionCoordinates: [0.35, 2.15, -3.4], lookAt: [0.1913, -0.0046, 0], position: undefined, name: 'Главный вид' },
      { positionCoordinates: [-6.58, 1.12, -0.78], lookAt: [-0.0165, -0.7836, 0], position: 1, name: 'Монитор #6 Воздухонагрев' },
      { positionCoordinates: [-6.15, 1.12, -0.33], lookAt: [-0.0165, -0.7836, 0], position: 2, name: 'Монитор #5 Воздухонагрев' },
      { positionCoordinates: [-3.56, 1.73, -1], lookAt: [0.5216195764415446, 0.007373100235868478, 0], position: 3, name: 'ПУ №1 – Пульт управления клапанами блока воздухонагревателей конструкции Калугина (БВНК)' },
      { positionCoordinates: [0.06, 1.12, 0.11], lookAt: [-0.017735496836921723, -0.00104686817450884, 0], position: 4, name: 'Монитор #2' },
      { positionCoordinates: [0.751, 1.125, 0.011], lookAt: [-0.01473549683692172, 0.34573371483788623, 0], position: 5, name: 'Монитор #1' },
      { positionCoordinates: [0.1, 1.22, 0.03], lookAt: [1.077429069342384, -0.3353050130723554, 0], position: 6, name: 'Телефон' },
      { positionCoordinates: [0.99, 1.2, -0.08], lookAt: [1.133525791597969, 1.572786718290341, 0], position: 7, name: 'Рация' },
      { positionCoordinates: [1.77, 1.59, -0.48], lookAt: [1.111833144037235, -0.0018067781465321568, 0], position: 8, name: 'ПУ №2 – Пуль управления бесконусное загрузочное устройство (БЗУ)' },
      { positionCoordinates: [2.96, 1.95, -1.0], lookAt: [0.6879109600288498, 0.001624744992681849, 0], position: 9, name: 'ПУ №3 – Пульт управления основных механизмов доменной печи №6 (ДП-6)' },
      { positionCoordinates: [-3.54, 1.32, -0.22], lookAt: [-0.0002711024344136115, 0.0013731002358684753, 0], position: 101, fromPos: 3, name: 'ПУ БВНК экраны' },
      { positionCoordinates: [-3.54, 1.87, -0.14], lookAt: [1.570796, -0.0006268997641315248, 0], position: 102, fromPos: 3, name: 'ПУ БВНК тумблеры' },
      { positionCoordinates: [2.95, 1.35, -0.26], lookAt: [0.003495955134860483, -0.01690013500731815, 0], position: 103, fromPos: 9, name: 'ПУ ДП-6 экраны' },
      { positionCoordinates: [2.96, 1.9, -0.48], lookAt: [1.2263924993164481, 0.005624744992681851, 0], position: 104, fromPos: 9, name: 'ПУ ДП-6 тумблеры' },
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
      { name: 'PhoneButton001', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Газовый цех"', position: 6, },
      { name: 'PhoneButton006', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Насосный цех"', position: 6, },
      { name: 'PhoneButton012', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Дипс. комб..."', position: 6, },
      { name: 'PhoneButton016', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Угольная"', position: 6, },
      { name: 'PhoneButton017', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Кислородный цех"', position: 6, },
      { name: 'PhoneButton020', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "ЭВС"', position: 6, },
      { name: 'PhoneButton', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', position: 6, },
      { name: 'kl022', id: '25408591-8ddd-4b64-a7ad-499aaa995ae6', audio: 'Zvuk_klapana_022_na_BVNK', position: 3, },
      { name: 'kl021', id: '8d7497bf-6a8b-4906-8a35-1dc986e6e655', audio: 'Zvuk_klapana_022_na_BVNK', position: 3, },
      { name: 'Rectangle', startY: 0, endY: -0.003, duration: 0.15, audio: 'Zvuk_nazhatiya_knopok_na_BZU', parentName: 'Lighting', position: 8, },
      { name: '45232239-cfcf-4de6-ab80-663e0c750915', audio: 'Zvuk_tumblera', position: 9, changeMeshmaterial: { meshName: '01834b40-8c3e-4255-a91f-2b003c55050d', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: 'bdf3b4dc-bdda-4ea7-a09f-6e7be5bcaaf7', audio: 'Zvuk_tumblera', position: 9, changeMeshmaterial: { meshName: 'efc63ae6-10c1-45f4-a1a1-b5499b4d29b3', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: '1be1d999-92ac-4d4d-8896-f78a1c5cd350', audio: 'Zvuk_tumblera', position: 9, changeMeshmaterial: { meshName: '43bc2cd8-96bd-4063-b5c2-a4873277d1e9', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: 'b6cc151c-004a-4e3f-bb7b-921c4300993c', audio: 'Zvuk_tumblera', realName: 'Тумблер клапана 721', position: 9, },
      { name: '96378261-ad8d-4410-ad46-36a776a8b7b2', audio: 'Zvuk_tumblera', realName: 'Тумблер клапана 722', position: 9, },
      { name: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44 ', audio: 'Zvuk_tumblera', realName: 'Тумблер клапана 723', position: 9, },
      { name: 'Handle_', parentName: 'DP-6', audio: 'Zvuk_tumblera', position: 9, },
      { name: 'ButtonHightlight_046', changeMeshmaterial: { meshName: 'Lamp_034', material: 'DonorLamp_on' }, position: 7, },
      { name: 'ButtonHightlight_006', changeMeshmaterial: { meshName: 'Lamp_006', material: 'DonorLamp_on' }, position: 7, },
      { name: 'ButtonHightlight_', position: 7, },
      { name: 'Telephone_highlight2', realName: 'Телефонная трубка', position: 6 },
    ],
    movePointMeshToArr: [
      { name: 'Display_flat002', point: 1, },
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
      { name: 'Display_flat002', svgName: 'vnk_main', possibleSchemes: ['BVNK_VNK1', 'BVNK_VNK2', 'BVNK_VNK3', 'vnk_main', 'vnk_spvg'] },
      { name: 'Display_flat003', svgName: 'BVNK_VNK1', possibleSchemes: ['BVNK_VNK1', 'BVNK_VNK2', 'BVNK_VNK3', 'vnk_main', 'vnk_spvg'] },
      { name: 'Display_flat010', svgName: 'Osnovnye_parametry_DP' },
      { name: 'Display_flat012', svgName: 'vnk_spvg' },
      { name: 'Display_flat014', svgName: 'dp', possibleSchemes: ['dp', 'bzu',] },
      { name: 'Display_flat015', svgName: 'bzu', possibleSchemes: ['dp', 'bzu',] },
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
      '48cd6e49-fd52-49b4-b02b-1c164a18f2c1',
    ],
    receiveShadowMeshes: [
      'a618e236-5f05-4c16-a5f4-806a8575cd48',
      'c4938c6e-adb9-4618-8fe0-76497fa5e0a7',
      '37fef3e1-5618-4f2b-b5cb-3d578cd09d03',
      '73a85a47-56c4-417e-a598-bfe24e209022',
      'Rectangle001',
      'd77660f1-f36a-489c-b0a4-e0cbb5d74f0a',
      'ba053138-9c06-4271-90be-d8be4f72543e',
      '48cd6e49-fd52-49b4-b02b-1c164a18f2c1',
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
        { x: 41.5, y: 50, w: 2.7, h: 3.5, forAction: true, id: 'kl029', value: { window: 'O_n_k_na_VNK_posle_1', x: 900, y: 473, }, realName: 'Клапан 029' },    // win 29
        { x: 35.9, y: 43.5, w: 2.7, h: 3.5, forAction: true, id: 'kl_038', value: { window: 'O_n_k_na_VNK_posle_1', x: 770, y: 440, }, realName: 'Клапан 038' },    // win 38
        { x: 48.8, y: 43.5, w: 2.7, h: 3.5, forAction: true, id: 'kl_037', value: { window: 'O_n_k_na_VNK_posle_1', x: 1030, y: 440, }, realName: 'Клапан 037' },    // win 37
        { x: 48.8, y: 55, w: 2.7, h: 3.5, forAction: true, id: 'kl007', value: { window: 'O_n_k_na_VNK_posle_1', x: 1082, y: 555, }, realName: 'Клапан 007' },    // win 07
        { x: 36.2, y: 55, w: 2.7, h: 3.5, forAction: true, id: 'kl028', value: { window: 'O_n_k_na_VNK_posle_1', x: 1082, y: 480, }, realName: 'Клапан 028' },    // win 28
        { x: 86.2, y: 20.6, w: 2.5, h: 3.2, forAction: true, id: 'kl022', value: { window: 'O_n_k_na_VNK_posle_1', x: 1582, y: 260, }, realName: 'Клапан 022' },    // win 22
        { x: 35.9, y: 37.5, w: 2.7, h: 3.5, forAction: true, id: 'kl039', },
        { x: 48.9, y: 37.5, w: 2.7, h: 3.5, forAction: true, id: 'kl030', },
        { x: 41.9, y: 31.5, w: 2.7, h: 3.5, forAction: true, id: 'kl048', },
        { x: 24.9, y: 54.5, w: 2.7, h: 3.5, forAction: true, id: 'kl0501', },
        { x: 36.5, y: 61.5, w: 2.7, h: 3.5, forAction: true, id: 'kl020', },
        { x: 48.5, y: 61.5, w: 2.7, h: 3.5, forAction: true, id: 'kl025', },
        { x: 42.5, y: 68.5, w: 2.7, h: 3.5, forAction: true, id: 'kl004', },
        { x: 35.5, y: 79.5, w: 2.7, h: 3.5, forAction: true, id: 'kl036b', },
        { x: 11, y: 54.5, w: 2.7, h: 3.5, forAction: true, id: 'kl0502', },
        { x: 16.5, y: 54.5, w: 1.7, h: 3.5, forAction: true, id: 'kl052', },
        { x: 16.5, y: 46.5, w: 1.7, h: 3.5, forAction: true, id: 'kl051', },
        { x: 19.3, y: 37.3, w: 1.7, h: 3.5, forAction: true, id: 'kl053', },
        { x: 16.3, y: 62.3, w: 1.7, h: 3.5, forAction: true, id: 'kl0333', },
        { x: 23.0, y: 62.3, w: 1, h: 3.5, forAction: true, id: 'kl0332', },
        { x: 29.1, y: 62.3, w: 1, h: 3.5, forAction: true, id: 'kl0331', },
        { x: 33.1, y: 71.3, w: 1, h: 3.5, forAction: true, id: 'kl036v', },
        { x: 26.6, y: 84, w: 1, h: 3.5, forAction: true, id: 'kl0311', },
        { x: 20.7, y: 83.9, w: 1, h: 3.5, forAction: true, id: 'kl0312', },
        { x: 14.5, y: 83.6, w: 1, h: 3.5, forAction: true, id: 'kl0313', },
        { x: 14.0, y: 74.6, w: 2, h: 3.5, forAction: true, id: 'klOF3', },
        { x: 20.5, y: 74, w: 2, h: 3.5, forAction: true, id: 'klOF2', },
        { x: 26.0, y: 74, w: 2, h: 3.5, forAction: true, id: 'klOF1', },
        // { x: 35.5, y: 0, w:2, h: 3.5, forAction: true, id: 'kl036b', },
        // { x: 64.5, y: 9, w:1, h: 4.5, forAction: true, id: 'kl047', },
        // { x: 70.3, y: 8, w:2, h: 4.5, forAction: true, id: 'kl001a', },
        // { x: 70.3, y: 9, w:2, h: 4.5, forAction: true, id: 'kl001', },
        { x: 86.3, y: 1, w: 2, h: 2.5, forAction: true, id: 'kl022', },
        { x: 22.5, y: 46.8, w: 1.7, h: 3.5, forAction: true, id: 'kl054', },
        { x: 76.3, y: 24.5, w: 2, h: 2.5, forAction: true, id: 'kl002', },
        { x: 21.3, y: 10.5, w: 7, h: 3.5, forAction: true, id: 'trendy', },
        { x: 12.3, y: 10.5, w: 9, h: 3.5, forAction: true, id: 'rejimy BVNK', },
        { x: 3.3, y: 10.5, w: 9, h: 3.5, forAction: true, id: 'Sostoynie BVNK', },
        { x: 11, y: 59, w: 2, h: 3.5, forAction: true, id: 'kl035', },
        { x: 35.3, y: 13.5, w: 4, h: 2.5, forAction: true, id: 'Avto', },
        { x: 35.3, y: 17, w: 4, h: 2.5, forAction: true, id: 'Ruhnoy', },
        { x: 35.3, y: 20, w: 4, h: 3, forAction: true, id: 'sbros ohibki', },
        { x: 39.3, y: 17, w: 4, h: 2.5, forAction: true, id: 'rabote', },
        { x: 39.3, y: 13.6, w: 4, h: 2.5, forAction: true, id: 'baypase', },
        { x: 44.9, y: 13.6, w: 1.5, h: 2.5, forAction: true, id: 'O_S', },
        { x: 46.5, y: 13.6, w: 1.5, h: 2.5, forAction: true, id: 'O_R', },
        { x: 46.5, y: 16.7, w: 1.5, h: 2.5, forAction: true, id: '5_R', },
        { x: 44.9, y: 16.7, w: 1.5, h: 2.5, forAction: true, id: '5_s', },
      ]
    },
    {
      name: 'vnk_spvg', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 69, y: 30, w: 2, h: 3, forAction: true, id: 'kl048', },
        { x: 62.5, y: 34.9, w: 2, h: 2, forAction: true, id: 'kl039', },
        { x: 77, y: 34.9, w: 2, h: 2, forAction: true, id: 'kl030', },
        { x: 77, y: 40.9, w: 2, h: 2, forAction: true, id: 'kl037', },
        { x: 63, y: 40.9, w: 2, h: 2, forAction: true, id: 'kl038', },
        { x: 63, y: 53.9, w: 2, h: 2, forAction: true, id: 'kl028', },
        { x: 77.5, y: 53.9, w: 2, h: 2, forAction: true, id: 'kl007', },
        { x: 77.5, y: 59.9, w: 2, h: 2, forAction: true, id: 'kl025', },
        { x: 63.5, y: 59.9, w: 2, h: 2, forAction: true, id: 'kl020', },
        { x: 71.5, y: 66.9, w: 2, h: 2, forAction: true, id: 'kl004', },
        { x: 60, y: 70.9, w: 1, h: 3.5, forAction: true, id: 'kl036v', },
        { x: 56.5, y: 78.9, w: 2, h: 2.5, forAction: true, id: 'kl036b', },
        { x: 50.8, y: 82, w: 1, h: 3.5, forAction: true, id: 'kl0311', },
        { x: 43.7, y: 82, w: 1, h: 3.5, forAction: true, id: 'kl0312', },
        { x: 36.3, y: 82, w: 1, h: 3.5, forAction: true, id: 'kl0313', },
        { x: 39, y: 63, w: 1, h: 3.5, forAction: true, id: 'kl0333', },
        { x: 46.5, y: 63, w: 1, h: 3.5, forAction: true, id: 'kl0332', },
        { x: 53.7, y: 63, w: 1, h: 3.5, forAction: true, id: 'kl0331', },
        { x: 50, y: 75, w: 2, h: 3.5, forAction: true, id: 'klOF1', },
        { x: 43, y: 75, w: 2, h: 3.5, forAction: true, id: 'klOF2', },
        { x: 35.7, y: 74, w: 2, h: 3.5, forAction: true, id: 'klOF3', },
        { x: 29.3, y: 59, w: 2, h: 3.5, forAction: true, id: 'kl035', },
        { x: 27.3, y: 8, w: 7, h: 3.5, forAction: true, id: 'Maslostanci', },
        { x: 3.3, y: 8, w: 7, h: 3.5, forAction: true, id: 'Rejim', },
        { x: 10.3, y: 8, w: 7, h: 3.5, forAction: true, id: 'Prekidka', },
        { x: 17.3, y: 8, w: 10, h: 3.5, forAction: true, id: 'Temperatura Kojuxa', },
        { x: 34.3, y: 8, w: 7, h: 3.5, forAction: true, id: 'Trendy', },
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
        { x: 19, y: 26, w: 2, h: 3, forAction: true, id: 'kl132', },
        { x: 13.6, y: 37.5, w: 2, h: 3, forAction: true, id: 'kl124', },
        { x: 27, y: 26, w: 2, h: 3, forAction: true, id: 'kl116', },
        { x: 33, y: 26, w: 1.5, h: 3, forAction: true, id: 'kl115', },
        { x: 46, y: 26, w: 2, h: 3, forAction: true, id: 'kl113', },
        { x: 44, y: 55, w: 2, h: 3, forAction: true, id: 'kl117', },
        { x: 27.5, y: 55, w: 1.5, h: 3, forAction: true, id: 'kl123', },
        { x: 11.4, y: 55, w: 1.9, h: 3, forAction: true, id: 'kl134', },
        { x: 31.4, y: 72.5, w: 1.9, h: 3, forAction: true, id: 'kl111', },
        { x: 31.4, y: 77, w: 1.9, h: 3, forAction: true, id: 'kl112', },
        { x: 73.3, y: 77, w: 2, h: 3, forAction: true, id: 'kl118', },
        { x: 73.5, y: 83, w: 2, h: 3, forAction: true, id: 'kl110', },
        { x: 73.3, y: 70.5, w: 2, h: 3, forAction: true, id: 'kl118a', },
        { x: 72.5, y: 62.5, w: 2, h: 3, forAction: true, id: 'kl136a', },
        { x: 65.5, y: 43, w: 2, h: 3, forAction: true, id: 'kl119', },
        { x: 40, y: 18, w: 1.2, h: 3.5, forAction: true, id: 'kl121', },
        { x: 23.3, y: 17.5, w: 1, h: 4, forAction: true, id: 'kl127', },
        { x: 78, y: 49.5, w: 4, h: 2.5, forAction: true, id: 'Avto', },
        { x: 78, y: 52.9, w: 4, h: 2.5, forAction: true, id: 'rucnou', },
        { x: 78, y: 55.9, w: 4, h: 3.5, forAction: true, id: 'sbros ohibki', },
        { x: 34.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'trendy', },
        { x: 27.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'meteostanci', },
        { x: 17.7, y: 8.9, w: 10, h: 2.5, forAction: true, id: 'temperatura kojuxa', },
        { x: 3.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'rejim', },
        { x: 38.5, y: 43.5, w: 1.4, h: 3.5, forAction: true, id: 'kl140', },
      ]
    },
    {
      name: 'BVNK_VNK2', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1.0, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1.0, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1.0, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1.0, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 10.1, y: 8.5, w: 7, h: 3, forAction: true, id: 'perekidta2_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 }, realName: 'Перекидка' },
        { x: 19.0, y: 26, w: 2, h: 3, forAction: true, id: 'kl232', },
        { x: 13.6, y: 37.5, w: 2, h: 3, forAction: true, id: 'kl224', },
        { x: 27.0, y: 26, w: 2, h: 3, forAction: true, id: 'kl216', },
        { x: 33.0, y: 26, w: 1.5, h: 3, forAction: true, id: 'kl215', },
        { x: 46.0, y: 26, w: 2, h: 3, forAction: true, id: 'kl213', },
        { x: 44.0, y: 55, w: 2, h: 3, forAction: true, id: 'kl217', },
        { x: 27.5, y: 55, w: 1.5, h: 3, forAction: true, id: 'kl223', },
        { x: 11.4, y: 55, w: 1.9, h: 3, forAction: true, id: 'kl234', },
        { x: 31.4, y: 72.5, w: 1.9, h: 3, forAction: true, id: 'kl211', },
        { x: 31.4, y: 77, w: 1.9, h: 3, forAction: true, id: 'kl212', },
        { x: 73.3, y: 77, w: 2, h: 3, forAction: true, id: 'kl218', },
        { x: 73.5, y: 83, w: 2, h: 3, forAction: true, id: 'kl210', },
        { x: 73.3, y: 70.5, w: 2, h: 3, forAction: true, id: 'kl218a', },
        { x: 72.5, y: 62.5, w: 2, h: 3, forAction: true, id: 'kl236a', },
        { x: 65.5, y: 43, w: 2, h: 3, forAction: true, id: 'kl219', },
        { x: 40.0, y: 18, w: 1.2, h: 3.5, forAction: true, id: 'kl221', },
        { x: 23.3, y: 17.5, w: 1, h: 4, forAction: true, id: 'kl227', },
        { x: 78.0, y: 49.5, w: 4, h: 2.5, forAction: true, id: 'Avto', },
        { x: 78.0, y: 52.9, w: 4, h: 2.5, forAction: true, id: 'rucnou', },
        { x: 78.0, y: 55.9, w: 4, h: 3.5, forAction: true, id: 'sbros ohibki', },
        { x: 34.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'trendy', },
        { x: 27.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'meteostanci', },
        { x: 17.7, y: 8.9, w: 10, h: 2.5, forAction: true, id: 'temperatura kojuxa', },
        { x: 3.20, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'rejim', },
        { x: 38.5, y: 43.5, w: 1.4, h: 3.5, forAction: true, id: 'kl240', },
      ]
    },
    {
      name: 'BVNK_VNK3', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 73.5, y: 83.0, w: 2, h: 3, forAction: true, id: 'vn_310_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1510, y: 635 }, realName: 'Клапан 310' },  // win 310
        { x: 73.5, y: 76.7, w: 2, h: 3, forAction: true, id: 'vn_318_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1510, y: 635 }, realName: 'Клапан 318' },  // win 318
        { x: 65.35, y: 42.9, w: 2, h: 3, forAction: true, id: 'vn_319_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1343, y: 450 }, realName: 'Клапан 319' },  // win 319
        { x: 19, y: 26, w: 2, h: 3, forAction: true, id: 'kl332', },
        { x: 13.6, y: 37.5, w: 2, h: 3, forAction: true, id: 'kl324', },
        { x: 27, y: 26, w: 2, h: 3, forAction: true, id: 'kl316', },
        { x: 33, y: 26, w: 1.5, h: 3, forAction: true, id: 'kl315', },
        { x: 46, y: 26, w: 2, h: 3, forAction: true, id: 'kl313', },
        { x: 44, y: 55, w: 2, h: 3, forAction: true, id: 'kl317', },
        { x: 27.5, y: 55, w: 1.5, h: 3, forAction: true, id: 'kl323', },
        { x: 11.4, y: 55, w: 1.9, h: 3, forAction: true, id: 'kl334', },
        { x: 31.4, y: 72.5, w: 1.9, h: 3, forAction: true, id: 'kl311', },
        { x: 31.4, y: 77, w: 1.9, h: 3, forAction: true, id: 'kl312', },
        { x: 73.3, y: 70.5, w: 2, h: 3, forAction: true, id: 'kl318a', },
        { x: 72.5, y: 62.5, w: 2, h: 3, forAction: true, id: 'kl336a', },
        { x: 40, y: 18, w: 1.2, h: 3.5, forAction: true, id: 'kl321', },
        { x: 23.3, y: 17.5, w: 1, h: 4, forAction: true, id: 'kl327', },
        { x: 78, y: 49.5, w: 4, h: 2.5, forAction: true, id: 'Avto', },
        { x: 78, y: 52.9, w: 4, h: 2.5, forAction: true, id: 'rucnou', },
        { x: 78, y: 55.9, w: 4, h: 3.5, forAction: true, id: 'sbros ohibki', },
        { x: 34.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'trendy', },
        { x: 27.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'meteostanci', },
        { x: 17.7, y: 8.9, w: 10, h: 2.5, forAction: true, id: 'temperatura kojuxa', },
        { x: 3.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'rejim', },
        { x: 38.5, y: 43.5, w: 1.4, h: 3.5, forAction: true, id: 'kl340', },
      ]
    },
    {
      name: 'O_n_k_na_VNK_posle_1', helpers: [
        { x: 61.00, y: 47.2, w: 1.5, h: 2.4, forAction: true, id: 'close_w1', removeWindow: 'O_n_k_na_VNK_posle_1', realName: 'Закрыть' },
        { x: 53.40, y: 59.1, w: 4.0, h: 2.6, forAction: true, id: 'open_vn', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, }, realName: 'Открыть' },// open
        { x: 83.80, y: 78.8, w: 8.6, h: 2.6, forAction: true, id: 'win_posle_1_stop_btn', x: 1124, y: 546, realName: 'Стоп' },  // stop  //  freeBTN
      ]
    },
    {
      name: 'O_n_k_na_VNK_posle_2', helpers: [
        { x: 60.2, y: 57, w: 3.2, h: 2.4, removeWindow: 'O_n_k_na_VNK_posle_2', forAction: true, id: 'close_vn', realName: 'Нет' }, // close
        { x: 56.5, y: 57, w: 3.2, h: 2.4, removeWindow: 'O_n_k_na_VNK_posle_2', forAction: true, id: 'open_vn1', realName: 'Да' }, // open
      ]
    },
    {
      name: 'dp', helpers: [
        { x: 94.4, y: 26, w: 4, h: 3, forAction: true, id: 't_r_4', value: { window: 'vvod_znachenij', x: 900, y: 300, }, realName: 'F природного газа' },
        { x: 69.4, y: 90, w: 2.5, h: 4, forAction: true, id: 't_b_302_btn', value: { window: 'win_sym_302', x: 56, y: 48, realName: 'Дроссель регулятор природного газа на печь, 302' } },
        { x: 94.4, y: 29.6, w: 4, h: 3, forAction: true, id: 't_r_5', value: { window: 'vvod_znachenij', x: 900, y: 300, }, realName: 'ТТГ' },
        { x: 94.4, y: 22.7, w: 4, h: 3, forAction: true, id: 'T.Gor dutiy', },
        { x: 94.4, y: 18.7, w: 4, h: 3, forAction: true, id: 'DP obh', },
        { x: 94.4, y: 14.9, w: 4, h: 3.4, forAction: true, id: 'P cop gaza', },
        { x: 94.4, y: 36, w: 4, h: 3.4, forAction: true, id: 'Vlajnosti', },
        { x: 81, y: 15, w: 1.5, h: 3.4, forAction: true, id: 'kl1', realName: 'Клапан 1' },
        { x: 76.6, y: 15, w: 1.5, h: 3.4, forAction: true, id: 'kl2', realName: 'Клапан 2' },
        { x: 74.3, y: 15, w: 1.5, h: 3.4, forAction: true, id: 'kl3', realName: 'Клапан 3' },
        { x: 76.5, y: 19.6, w: 1.5, h: 3.4, forAction: true, id: 'Drosel zel.', },
        { x: 48.5, y: 29.6, w: 1.5, h: 4.4, forAction: true, id: 'kl83', },
        { x: 37.5, y: 29.6, w: 1.5, h: 4.4, forAction: true, id: 'kl84', },
        { x: 45.5, y: 35, w: 2.5, h: 3.4, forAction: true, id: 'kl81', },
        { x: 15, y: 51, w: 2.5, h: 3.4, forAction: true, id: 'klSBV06', },
        { x: 15, y: 55, w: 2.5, h: 3, forAction: true, id: 'klMBV06', },
        { x: 15.5, y: 60, w: 2.5, h: 3, forAction: true, id: 'klTEV06', },
        { x: 20.5, y: 58.4, w: 3, h: 3, forAction: true, id: 'klOGV06', },
        { x: 13.6, y: 58.4, w: 2, h: 5, forAction: true, id: 'klIGV06', },
        { x: 9.3, y: 53.4, w: 1.7, h: 5, forAction: true, id: 'klZel.chistiy gsz', },
        { x: 11, y: 54.4, w: 1.7, h: 3, forAction: true, id: 'klchistiy gaz', },
        { x: 6.7, y: 45, w: 1.7, h: 3.5, forAction: true, id: 'klVixod', },
        { x: 20.7, y: 75.5, w: 2.7, h: 3.5, forAction: true, id: 'kl726', },
        { x: 25.3, y: 81.5, w: 1.7, h: 3.5, forAction: true, id: 'kl315', },
        { x: 29.3, y: 90.5, w: 2.5, h: 4, forAction: true, id: 'klXolodnoe dytiy', },
        { x: 63.4, y: 90, w: 2.5, h: 4, forAction: true, id: 'kl721', },
        { x: 70.9, y: 95, w: 2.5, h: 4, forAction: true, id: 'kl722', },
        { x: 72.9, y: 87, w: 2, h: 4, forAction: true, id: 'kl723', },
        { x: 71.5, y: 67, w: 1.5, h: 4, forAction: true, id: 'kl022', },
        { x: 56.3, y: 77.5, w: 1.5, h: 4, forAction: true, id: 'kl002', },
        { x: 56.3, y: 86.5, w: 1.5, h: 4, forAction: true, id: 'klH001', },
        { x: 58.3, y: 83.5, w: 1.5, h: 4, forAction: true, id: 'klH001a', },
        { x: 3.3, y: 94.5, w: 3.5, h: 4, forAction: true, id: 'Quantum', },
        { x: 6.7, y: 94.5, w: 3.5, h: 4, forAction: true, id: 'M340', },
        { x: 94.4, y: 32.8, w: 4, h: 3, forAction: true, id: 'F par uvl', },
        { x: 18.4, y: 40.6, w: 3, h: 3, forAction: true, id: 'po min urovny', },
        { x: 26.6, y: 40.6, w: 3, h: 3, forAction: true, id: 'po max urovny', },
        { x: 38.6, y: 22.9, w: 5, h: 3.7, forAction: true, id: 'vypusk L3', },
        { x: 45, y: 22.9, w: 5, h: 3.7, forAction: true, id: 'vypusk L4', },
        { x: 45, y: 18.9, w: 5, h: 3.7, forAction: true, id: 'vypusk L2', },
        { x: 38.5, y: 18.9, w: 5, h: 3.7, forAction: true, id: 'vypusk L1', },
        { x: 37.5, y: 14.9, w: 6.7, h: 3.7, forAction: true, id: 'Mahinist', },
        { x: 44, y: 14.9, w: 6.7, h: 3.7, forAction: true, id: 'Vyzov prinit', },
        { x: 1, y: 16.8, w: 3, h: 2.9, forAction: true, id: 'Iskl_Radar1', },
        { x: 4.6, y: 16.8, w: 3, h: 2.9, forAction: true, id: 'Iskl_Radar2', },
        { x: 8.5, y: 16.8, w: 3, h: 2.9, forAction: true, id: 'Vkl_Radar3', },
        { x: 13.7, y: 0, w: 3.4, h: 3.3, name: 'dp', },
        { x: 18, y: 0, w: 4.5, h: 3.3, id: 'Protechki', },
        { x: 45.5, y: 0, w: 3.5, h: 3.3, name: 'bzu', },
        { x: 75.85, y: 51.5, w: 3.3, h: 3, id: 'F-Obsh', forAction: true, realName: 'F общ', },
        { x: 75.85, y: 56.5, w: 3.3, h: 3, id: 'F-Tek', forAction: true, realName: 'F тек', },
        { x: 29.20, y: 77.7, w: 2.6, h: 2.6, id: 'R_Snort', forAction: true, realName: 'Клапан "Снорт"', },
        { x: 56.20, y: 68.5, w: 3.3, h: 3.3, id: 'R_Furm', forAction: true, realName: 'Фурма P', },
      ]
    },
    {
      name: 'win_sym_302', helpers: [
        { x: 45.8, y: 5, w: 1.6, h: 3.3, removeWindow: 'win_sym_302', forAction: true, id: 'ws3_close_btn', realName: 'Закрыть' }, // close            
        { x: 18.65, y: 73, w: 8, h: 5.5, forAction: true, id: 'ws3_ttg_text_btn', realName: 'Расход ПГ' },
        { x: 18.65, y: 73, w: 0, h: 0, forAction: true, id: 'ws3_ttg2_text_btn', value: { window: 'priczvuksinal', x: 956, y: 112, }, realName: 'ТТГ' },
      ]
    },
    {
      name: 'vvod_znachenij', helpers: [
        { x: 58.4, y: 30.3, w: 1.5, h: 2, removeWindow: 'vvod_znachenij', forAction: true, id: 'vz_close', realName: 'Закрыть' },
        { x: 47.6, y: 78.3, w: 4.0, h: 4, removeWindow: 'vvod_znachenij', forAction: true, id: 'vz_ok', realName: 'Ок' },
        { x: 47.7, y: 64.5, w: 3.0, h: 4, forAction: true, id: 'vz_0', realName: 'Цифра 0' },
        { x: 47.7, y: 60, w: 3.0, h: 4, forAction: true, id: 'vz_1', realName: 'Цифра 1' },
        { x: 51.1, y: 60, w: 3.0, h: 4, forAction: true, id: 'vz_2', realName: 'Цифра 2' },
        { x: 54.4, y: 60, w: 3.0, h: 4, forAction: true, id: 'vz_3', realName: 'Цифра 3' },
        { x: 47.7, y: 55, w: 3.0, h: 4, forAction: true, id: 'vz_4', realName: 'Цифра 4' },
        { x: 51.1, y: 55, w: 3.0, h: 4, forAction: true, id: 'vz_5', realName: 'Цифра 5' },
        { x: 54.4, y: 55, w: 3.0, h: 4, forAction: true, id: 'vz_6', realName: 'Цифра 6' },
        { x: 47.7, y: 50.3, w: 3.0, h: 4, forAction: true, id: 'vz_7', realName: 'Цифра 7' },
        { x: 51.1, y: 50.3, w: 3.0, h: 4, forAction: true, id: 'vz_8', realName: 'Цифра 8' },
        { x: 54.4, y: 50.3, w: 3.0, h: 4, forAction: true, id: 'vz_9', realName: 'Цифра 9' }
      ]
    },
    {
      name: 'O_p_n_na_k_p_na_VNK', helpers: [
        { x: 27.2, y: 11.8, w: 2.25, h: 2.6, forAction: true, id: 'perekidta_exit_btn', realName: 'Закрыть', removeWindow: 'O_p_n_na_k_p_na_VNK', },
        { x: 15.6, y: 21.0, w: 11.9, h: 3.6, forAction: true, id: 'avaric_otdel_btn', realName: 'Аварийное отделение', },
        { x: 15.6, y: 25.0, w: 11.9, h: 3.6, forAction: true, id: 'otdel_nagrev_btn', realName: 'Отделение-Нагрев', },
        { x: 15.6, y: 28.8, w: 11.9, h: 3.6, forAction: true, id: 'nagrev_otd2_btn', realName: 'Нагрев-Отделение 2', value: { window: 'O_p_n_na_k_na-o_2_na_VNK', x: 379, y: 32, } },
        { x: 15.6, y: 33.1, w: 11.9, h: 3.6, forAction: true, id: 'otdel_dutia_btn', realName: 'Отделение-Дутье', },
        { x: 15.6, y: 37.1, w: 11.9, h: 3.6, forAction: true, id: 'dutia_otdel_btn', realName: 'Дутье-отделение', },
        { x: 15.6, y: 41.4, w: 11.9, h: 3.6, forAction: true, id: 'otdel_otdel2_btn', realName: 'Отделение-Отделение 2', },
        { x: 15.6, y: 45.6, w: 11.9, h: 3.6, forAction: true, id: 'otdel2_otdel_btn', realName: 'Отделение 2 - Отделение', value: { window: 'win_otdel2_na_vnk', x: 402, y: 468, }, realName: 'Отделение 2 - Отделение', },
        { x: 15.6, y: 56.6, w: 11.9, h: 3.6, forAction: true, id: '10_klapan', realName: '10 клапан', },
        { x: 15.6, y: 60.6, w: 11.9, h: 3.6, forAction: true, id: '11_klapan', realName: '11 клапан', },
        { x: 15.6, y: 64.5, w: 11.9, h: 3.6, forAction: true, id: '12_klapan', realName: '12 клапан', },
      ]
    },
    {
      name: 'priczvuksinal', helpers: [
        { x: 83.1, y: 17.7, w: 5, h: 3, removeWindow: 'priczvuksinal', forAction: true, id: 'pzs_close_btn', realName: 'Закрыть' },
      ]
    },
    {
      name: 'O_p_n_na_k_na-o_2_na_VNK', helpers: [
        { x: 63.7, y: 3.4, w: 2.4, h: 2.4, removeWindow: 'O_p_n_na_k_na-o_2_na_VNK', forAction: true, id: 'pericNagrev_close_btn', realName: 'Закрыть' },
        { x: 31.8, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_pusk_btn', value: { window: 'O_n_k_na_VNK_posle_2', x: 678, y: 917 }, realName: 'Пуск' },
        { x: 35, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_stop_btn' },
        { x: 38.2, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_reset_btn' },
      ]
    },
    {
      name: 'win_otdel2_na_vnk', helpers: [
        { x: 45, y: 48, w: 2.2, h: 2.4, removeWindow: 'win_otdel2_na_vnk', realName: 'Закрыть', forAction: true, id: 'otdel2_close_btn' },
        { x: 34.5, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_pusk_btn', realName: 'Пуск', value: { window: 'O_n_k_na_VNK_posle_2', x: 707, y: 908 } },
        { x: 38.3, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_stop_btn', realName: 'Стоп', },
        { x: 42.1, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_reset_btn', realName: 'Cброс', },
      ]
    },
    {
      name: 'bzu', helpers: [
        { x: 71.7, y: 67.7, w: 4.5, h: 3.3, forAction: true, id: 'bzu_gruzit_btn', realName: 'Грузить' },
        { x: 58.3, y: 35.0, w: 9.8, h: 3.3, forAction: true, id: 'bzu_ZapretSledPorci_btn', realName: 'Запрет след.порции' },
        { x: 32.1, y: 45.3, w: 4.5, h: 6.1, forAction: true, id: 'bzu_raketaNGUK2_btn', },
        { x: 29.7, y: 53.1, w: 3.9, h: 3.5, forAction: true, id: 'bzu_pause_btn', realName: 'Пауза' },
        { x: 58.3, y: 39, w: 9.8, h: 3.3, forAction: true, id: 'sleduyhai pociy', },
        { x: 72, y: 15, w: 4, h: 3.8, forAction: true, id: 'Pusk', },
        { x: 76.4, y: 15, w: 4, h: 3.8, forAction: true, id: 'stop', },
        { x: 69.5, y: 82.5, w: 5.5, h: 3.3, forAction: true, id: 'Izmerit', },
        { x: 2, y: 84, w: 5.5, h: 3.3, forAction: true, id: 'Datcik_1', },
        { x: 2, y: 87.8, w: 5.5, h: 3.3, forAction: true, id: 'Datcik_2', },
        { x: 2, y: 91, w: 5.5, h: 3.3, forAction: true, id: 'Datcik_3', },
        { x: 2, y: 94.7, w: 5.5, h: 3.3, forAction: true, id: 'Datcik_4', },
        { x: 26.5, y: 45, w: 5, h: 6.3, forAction: true, id: 'raketaNGUK1', },
        { x: 24, y: 46.8, w: 2.4, h: 2.3, forAction: true, id: 'klNGUK1', },
        { x: 37, y: 46.4, w: 2, h: 2.3, forAction: true, id: 'klNGUK2', },
        { x: 33.5, y: 41.9, w: 3, h: 3.3, forAction: true, id: 'Vygr_NGUK2', },
        { x: 26.4, y: 41.6, w: 3, h: 3, forAction: true, id: 'Vygr_NGUK1', },
        { x: 23.3, y: 21.5, w: 3, h: 3.5, forAction: true, id: 'Zagr1', },
        { x: 37, y: 21.6, w: 3, h: 3.5, forAction: true, id: 'Zagr2', },
        { x: 25, y: 13.5, w: 3.4, h: 3.3, forAction: true, id: 'Jelob', },
        { x: 27, y: 16.8, w: 2, h: 2.3, forAction: true, id: 'klVGUK1', },
        { x: 35, y: 16.8, w: 2, h: 2.3, forAction: true, id: 'klVGUK2', },
        { x: 41, y: 26.6, w: 1.5, h: 4.3, forAction: true, id: 'klBK-2', },
        { x: 21, y: 26.5, w: 1.5, h: 4.3, forAction: true, id: 'klBK-1', },
        { x: 21, y: 35.9, w: 1.5, h: 4.3, forAction: true, id: 'klNKV-1', },
        { x: 17, y: 35.9, w: 1.5, h: 4.3, forAction: true, id: 'klNKP-1', },
        { x: 41, y: 35.9, w: 1.5, h: 4.3, forAction: true, id: 'klNKV-2', },
        { x: 45, y: 35.9, w: 1.5, h: 4.3, forAction: true, id: 'klNKP-2', },
        { x: 40.8, y: 32.6, w: 1.5, h: 3.3, forAction: true, id: 'Droseli2', },
        { x: 20.8, y: 32.6, w: 1.5, h: 3.3, forAction: true, id: 'Droseli1', },
        { x: 12.9, y: 27.9, w: 6.5, h: 3, forAction: true, id: 'hagi upravleniy1', },
        { x: 43.7, y: 28.6, w: 6.4, h: 2.3, forAction: true, id: 'hagi upravleniy2', },
        { x: 60.4, y: 42, w: 7, h: 3.3, forAction: true, id: 'ekstraporcii', },
        { x: 73, y: 42, w: 3.5, h: 3, forAction: true, id: 'vidati', },
        { x: 33.5, y: 38.9, w: 4, h: 3.3, forAction: true, id: 'vibraciy', },
        { x: 33.5, y: 35.9, w: 3.9, h: 3.3, forAction: true, id: 'pusto', },
        { x: 78, y: 37, w: 2.8, h: 3, forAction: true, id: 'sbros', },
        { x: 87, y: 46.3, w: 4.8, h: 3, forAction: true, id: 'Na konveer', },
        { x: 92, y: 46.3, w: 1.8, h: 3, forAction: true, id: 'B1', },
        { x: 94, y: 46.3, w: 1.8, h: 3, forAction: true, id: 'B2', },
        { x: 96, y: 46.3, w: 2.9, h: 3, forAction: true, id: 'Ekstra', },
        { x: 97, y: 50.6, w: 2.5, h: 3, forAction: true, id: 'NomerStr', },
        { x: 92, y: 50.6, w: 2.2, h: 3, forAction: true, id: 'NomerMatr', },
        { x: 85.8, y: 50.6, w: 2.2, h: 3, forAction: true, id: 'B2_2', },
        { x: 83.8, y: 50.6, w: 2.2, h: 3, forAction: true, id: 'B1_2', },
        { x: 91.5, y: 14.3, w: 6.8, h: 3.3, forAction: true, id: 'sbros ohibki', },
        { x: 85.8, y: 70.6, w: 5.2, h: 3, forAction: true, id: 'Na konveer', },
        { x: 85.8, y: 79, w: 5.4, h: 3, forAction: true, id: 'V peh', },
        { x: 13.7, y: 0, w: 3.4, h: 3.3, name: 'dp', },
        { x: 18, y: 0, w: 4.5, h: 3.3, name: 'Protechki', },
        { x: 45.5, y: 0, w: 3.5, h: 3.3, name: 'bzu', },
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
        questionText: 'При кратковременной остановке доменной печи №6 при давлении горячего дутья:',
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
    maxCountSvgElems: 0,
  },
  endVals: {
    passPerc: 100, // TODO изменить в режиме контроля
    errors: [0],
    averageTime: [],
    humanTime: [],
    charts: [],
    actionChapter: [],
    currentActionCount: 0,
    currentChapter: 0,
    maxTimeArr: [],
    previousEndVals: undefined,
    restarts: 0,
  }
};
const timeDiff = -99;
let tempActions = [
  [
    ////--------------------------------//15//-new
    {
      scenarioText: 'Нажать на кнопку с надписью: «Угольная».',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 0,
    },
    {
      action: {
        target3D: 'PhoneButton016',
      },
      startTime: timeDiff + 1,
      human: true,
    },
    {
      text: 'Остановить вдувания пылеугольного топлива.',
      sender: 'Газовщик',
      audio: 'vo_new_15_1',
      startTime: timeDiff + 1.5,
    },
    {
      text: 'Понял. Выполняю.',
      sender: 'Оператор',
      audio: 'vo_new_15_2',
      startTime: timeDiff + 6,
    },
    // {
    //   scenarioText: 'Тест мульти2Д',
    //   sender: 'Система',
    //   audio: 'telephone_say',
    //   multi: [
    //     {
    //       text: '3',
    //       sender: 'Газовщик',
    //       action: {
    //         target2D: 'kl3',
    //       },
    //       audio: 'Zvuk_knopok_na_telefone',
    //     },
    //     {
    //       text: '2',
    //       sender: 'Газовщик',
    //       action: {
    //         target2D: 'kl2',
    //       },
    //       audio: 'Zvuk_knopok_na_telefone',
    //     },
    //     {
    //       text: '1',
    //       sender: 'Газовщик',
    //       action: {
    //         target2D: 'kl1',
    //       },
    //       audio: 'Zvuk_knopok_na_telefone',
    //     },
    //   ],
    //   startTime: timeDiff + 1,
    //   human: true,
    // },
    // {
    //   action: {
    //     target2D: 'kl029',
    //     window2D: {
    //       elements: [
    //         { name: 'title_work_vn', text: 'Управление клапаном 029' },
    //         { name: 'circle_n_winVN', stroke: '#8F8F8F' },
    //         { name: 'circle_kl029', stroke: '#8F8F8F' },
    //         { name: 'left_vn', color: '#8F8F8F' },
    //         { name: 'right_vn', color: '#8F8F8F' },
    //         { name: 'status_control_vnk_text', text: 'Ручной' },
    //         { name: 'status_window_text', text: 'Нет данных' },
    //         // { name: 'skhema_sobrana', color: '#00FF00' },
    //         // { name: 'block_open',     color: '#00FF00' },
    //         // { name: 'block_close',    color: '#00FF00' },
    //         { name: 'btn_auto_text', color: '#000' },
    //         { name: 'btn_auto_2', color: '#fff' },
    //         { name: 'btn_ruchnoy_text', color: '#666' },                        // afk
    //         { name: 'btn_ruchnoy_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
    //         { name: 'btn_open_text', color: '#000' },
    //         { name: 'btn_open_2', color: '#fff', stroke: '#000' },
    //         { name: 'polozenie_text', text: '51' },
    //         { name: 'polozenie_button_text', color: '#000000' },
    //       ],
    //     },
    //   },
    //   startTime: timeDiff + 2,
    //   human: true,
    // },
    // {
    //   scenarioText: 'Нажать на кнопки с надписью: «Газовый цех», «Насосный цех», «Кислородный цех», «ЭВС».',
    //   sender: 'Система',
    //   audio: 'telephone_say',
    //   multi: [
    //     {
    //       text: 'Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
    //       sender: 'Газовщик',
    //       action: {
    //         target3D: 'PhoneButton001',
    //       },
    //     },
    //     {
    //       text: 'Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
    //       sender: 'Газовщик',
    //       action: {
    //         target3D: 'PhoneButton006',
    //       },
    //     },
    //   ],
    //   startTime: timeDiff + 3,
    //   human: true,
    // },
    // {
    //   scenarioText: 'Сообщить по рации дежурному водопроводчику.',
    //   sender: 'Система',
    //   audio: 'radio_say',
    //   action: {
    //     target3D: 'ButtonHightlight_046',
    //   },
    //   startTime: timeDiff + 0,
    //   human: true,
    // },
  ],
  // Первый сценарий  
  [
    /*
    {
      lifeTime: '07:30:00',
      scenarioText: 'Отделение подогревателей воздуха и газа.',
      sender: 'Система',
      startTime: timeDiff + 0,
    },
    {
      text: 'За час-полтора до кратковременной остановки доменной печи номер 6 отделить подогреватели воздуха и газа.',
      sender: 'Система',
      audio: 'system_1',
      startTime: timeDiff + 3,
    },
    {
      text: 'Открыть клапан 029 на дымовую трубу.',
      sender: 'Система',
      audio: 'tts-1',
      startTime: timeDiff + 10,
    },
    ////--------------------------------1----------------------------------------
    {
      action: {
        target2D: 'kl029',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 029' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_kl029', stroke: '#8F8F8F' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Нет данных' },
            // { name: 'skhema_sobrana', color: '#00FF00' },
            // { name: 'block_open',     color: '#00FF00' },
            // { name: 'block_close',    color: '#00FF00' },
            { name: 'btn_auto_text', color: '#000' },
            { name: 'btn_auto_2', color: '#fff' },
            { name: 'btn_ruchnoy_text', color: '#666' },                        // afk
            { name: 'btn_ruchnoy_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_open_text', color: '#000' },
            { name: 'btn_open_2', color: '#fff', stroke: '#000' },
            { name: 'polozenie_text', text: '51' },
            { name: 'polozenie_button_text', color: '#000000' },
          ],
        },
      },
      startTime: timeDiff + 10.1,
      human: true,
      // concentration: [
      //   { text: 'Клапан 029', x: 41, y: 48, w: 3, h: 6.5, position: [1], scheme: 'vnk_main' },
      // ]
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
      startTime: timeDiff + 10.2,
      human: true,
    },
    // да
    {
      action: {
        target2D: 'open_vn1',
      },
      startTime: timeDiff + 10.4,
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
            { name: 'circle_kl029', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' }
          ],
        },
      },
      startTime: timeDiff + 11,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#8F8F8F' },
            { name: 'kl029_proc', text: '65' },
            { name: 'polozenie_text', text: '65' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl029', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
          ],
        },
      },
      startTime: timeDiff + 12,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#00FF00' },
            { name: 'kl029_proc', text: '75' },
            { name: 'polozenie_text', text: '75' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_kl029', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
          ],
        },
      },
      startTime: timeDiff + 13,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl029', color: '#8F8F8F' },
            { name: 'kl029_proc', text: '85' },
            { name: 'polozenie_text', text: '85' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl029', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
          ],
        },
      },
      startTime: timeDiff + 14,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'kl029', color: '#00FF00' },
            { name: 'kl029_proc', text: '100' },
            { name: 'polozenie_text', text: '100' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },        //  #6E6E6E //  #000;
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_2', color: '#e6e6e6', stroke: '#b3b3b3' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_kl029', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
          ],
        },
      },
      startTime: timeDiff + 15,
    },
    ////--------------------------------2----------------------------------------
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 15.1,
      human: true,
    },
    {
      text: 'Клапан 029 на дымовую трубу открыт.',
      sender: 'Система',
      startTime: timeDiff + 15.2,
    },
    {
      text: 'Закрыть клапан 038 на подогревателе газа',
      sender: 'Система',
      audio: 'tts-2',
      startTime: timeDiff + 16,
    },
    // Sergey (vnk_main После закрытия 029) 
    {
      action: {
        window2D: {
          elements: [
            { name: '7TI_41', text: '28' },
            { name: '7PI_12', text: '17,89' },
            { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '176253' },
            { name: '7TI_40', text: '11' },
            { name: '7PI_11', text: '0,00' },
            { name: '7FI_04', text: '0' },
            { name: '5QI_01_01', text: '9' },
            { name: '5QI_01_02', text: '79' },
            { name: 'PV2', text: '9,18' },
            { name: 'SP2', text: '9,00' },
            { name: 'PV2_1', text: '34,63' },
            { name: 'M_t1_4', text: 'Работа', color: '#00FF00' },
            { name: 'PV3', text: '0,00' },
            { name: 'SP3', text: '0,00' },
            { name: 'PV3_1', text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            { name: 'PV4', text: '9,78' },
            { name: 'SP4', text: '10,00' },
            { name: 'PV4_1', text: '52,16' },
            { name: 'M_t3_4', text: 'Работа', color: '#00FF00' },
            { name: 'kl053_proc', text: '35' },
            { name: 'kl051_proc', text: '0' },
            { name: 'kl052_proc', text: '0' },
            { name: 'kl035_proc', text: '0' },
            { name: 'klOF3_proc', text: '52' },
            { name: 'klOF2_proc', text: '52' },
            { name: 'klOF1_proc', text: '0' },
            { name: 'kl0333_proc', text: '100' },
            { name: 'kl0313_proc', text: '100' },
            { name: 'kl0332_proc', text: '100' },
            { name: 'kl0312_proc', text: '100' },
            { name: 'kl0331_proc', text: '0' },
            { name: 'kl0311_proc', text: '100' },
            { name: '7QI_01', text: '-999,00' },
            // { name: 'kl038_proc',   text: '0' },
            { name: 'kl028_proc', text: '100' },
            // { name: 'kl020_proc',   text: '100' },
            // { name: 'kl036v_proc',  text: '0' },
            // { name: 'kl036b_proc',  text: '0' },
            // { name: 'kl048_proc', text: '0' },
            { name: 'kl029_proc', text: '100' },
            // { name: 'kl004_proc', text: '100' },
            { name: 'PI_16_proc', text: '9,53' },
            { name: '9TI_44_proc', text: '28' },
            // { name: 'kl037_proc', text: '0' },
            { name: 'kl007_proc', text: '100' },
            // { name: 'kl025_proc', text: '100' },
            { name: '8QI_05_01', text: '7,53' },
            { name: '8QI_05_02', text: '78,06' },
            { name: '8QI_05_04', text: '0,00' },
            { name: '7PI_13', text: '8,98' },
            { name: '7PI_42', text: '91' },
            { name: 'PV1', text: '1209,70' },
            { name: 'SP1', text: '1210,00' },
            { name: 'PV1_1', text: '31,12' },
            { name: 'M_t4_4', text: 'Работа', color: '#00FF00' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk_3', color: '#0033FF' }, // задник стрелки
            { name: 'Tkyp_3', text: '1296' },
            { name: 'VNK3_status_1', text: 'Автоматический' },
            { name: 'VNK3_status_2', text: 'Дутье' },
            { name: 'vnk3_stripes', color: '#0033FF' },
            { name: 'VNK3_Fr', text: '0' },
            { name: 'VNK3_Fb', text: '0' },
            { name: 'Tdym_3', text: '180' },
            { name: 'kl001_proc', text: '0' },
            { name: 'kl001a_proc', text: '31' },
            { name: 'vnk2_fire', opacity: '1' }, // стрелка
            { name: 'vnk_2', color: '#ff0000' }, // задник стрелки
            { name: 'Tkyp_2', text: '1329' },
            { name: 'VNK2_status_1', text: 'Автоматический' },
            { name: 'VNK2_status_2', text: 'Нагрев' },
            { name: 'vnk2_stripes', color: '#ff0000' },
            { name: 'VNK2_Fr', text: '81782' },
            { name: 'VNK2_Fb', text: '104004' },
            { name: 'Tdym_2', text: '140' },
            { name: '5PI_08', text: '406' },
            { name: 'TI_36', text: '15' },
            { name: 'FI_03', text: '947' },
            { name: 'vnk1_fire', opacity: '1' }, // стрелка
            { name: 'vnk_1', color: '#ff0000' }, // задник стрелки
            { name: 'Tkyp_1', text: '1333' },
            { name: 'VNK1_status_1', text: 'Автоматический' },
            { name: 'VNK1_status_2', text: 'Нагрев' },
            { name: 'vnk1_stripes', color: '#ff0000' },
            { name: 'VNK1_Fr', text: '88754' },
            { name: 'VNK1_Fb', text: '110435' },
            { name: 'Tdym_1', text: '300' },
            { name: 'vybor_signala', text: '1210' },
            { name: '5TI_21', text: '1200' },
            { name: '5TI_22', text: '1210' },
            { name: 'PI_09', text: '546,64' },
          ],
        },
      },
      startTime: timeDiff + 17.01,
    },
    {
      action: {
        target3D: 'vozNagr1_1', // Tkyp_1
        color: 'green',
        number: '1333',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'vozNagr1_2', // Tdym_1
        color: 'green',
        number: '300.0',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'vozNagr2_1', // Tkyp_2
        color: 'green',
        number: '1329',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'vozNagr2_2', // Tdym_2
        color: 'green',
        number: '140.0',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'vozNagr3_1', // Tkyp_3
        color: 'green',
        number: '1296',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'vozNagr3_2', // Tdym_3
        color: 'green',
        number: '180.0',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_1', // VNK1_Fr /10^4
        color: 'green',
        number: '008.8',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_2', // VNK2_Fr /10^4
        color: 'green',
        number: '008.1',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_3', // VNK3_Fr /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_1', // VNK1_Fb /10^4
        color: 'green',
        number: '011.0',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_2', // VNK2_Fb /10^4
        color: 'green',
        number: '010.4',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_3', // VNK3_Fb /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 17.02,
    },
    {
      action: {
        target3D: 'davVozGorBVN', // PI_16_proc
        color: 'green',
        number: '09.53',
      },
      startTime: timeDiff + 17.02,
    },
    //// клик по ВН38 на схеме  ОТКРЫТ
    {
      action: {
        target2D: 'kl_038',
        window2D: {
          elements: [
            { name: 'circle_kl038', stroke: '#00FF00' },
            { name: 'kl_038', color: '#00FF00' },
            { name: 'title_work_vn', text: 'Управление клапаном 038' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Открыт' },
            // { name: 'skhema_sobrana', color: '#00FF00' },
            // { name: 'block_open',     color: '#00FF00' },
            // { name: 'block_close',    color: '#00FF00' },
            { name: 'btn_auto_text', color: '#000' },
            { name: 'btn_auto_2', color: '#fff' },
            { name: 'btn_ruchnoy_text', color: '#666' },                        // afk
            { name: 'btn_ruchnoy_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_open_text', color: '#666' },                        // afk
            { name: 'btn_open_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_close_text', color: '#000' },
            { name: 'btn_close_2', color: '#fff', stroke: '#000' },
            { name: 'polozenie_text', text: '51' },
            { name: 'polozenie_button_text', color: '#000000' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 17.1,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        realName: 'Закрыть',
        window2D: {
          newPositionWindow: { x: 942, y: 580 },
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 51.18, y: 60.6, w: 3.2, h: 2.5, id: 'close_vn' },   //  wind 2
          { x: 47.50, y: 60.6, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 17.2,
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
      startTime: timeDiff + 17.3,
      human: true,
    },
    // мигание 
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'btn_open_2', color: '', stroke: '' },
            { name: 'polozenie_text', text: '45' },
            { name: 'kl038_proc', text: '45' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'kl_038', color: '#ff1e00' },
            { name: 'circle_kl038', stroke: '#ff1e00' },
            { name: 'circle_kl038', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
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
            { name: 'kl038_proc', text: '35' },
            { name: 'polozenie_text', text: '35' },
            { name: 'kl_038', color: '#8F8F8F' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl038', stroke: '#8F8F8F' },
            { name: 'circle_kl038', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
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
            { name: 'kl_038', color: '#ff1e00' },
            { name: 'kl038_proc', text: '25' },
            { name: 'polozenie_text', text: '25' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_kl038', stroke: '#ff1e00' },
            { name: 'circle_kl038', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 20,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_038', color: '#8F8F8F' },
            { name: 'kl038_proc', text: '15' },
            { name: 'polozenie_text', text: '15' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl038', stroke: '#8F8F8F' },
            { name: 'circle_kl038', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 51.3, y: 56.1, w: 4, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 21,
    },
    // конечное состояние
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_038', color: '#ff1e00' },
            { name: 'kl038_proc', text: '0' },
            { name: 'polozenie_text', text: '0' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000' },        //  #6E6E6E //  #000;
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_kl038', stroke: '#ff1e00' },
            { name: 'circle_kl038', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'btn_open_text', color: '#000' },
            { name: 'btn_open_2', color: '#fff', stroke: '#000' },
            { name: 'btn_close_text', color: '#666' },                        // afk
            { name: 'btn_close_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
          ],
        },
        helper2D: [
          { x: 54.5, y: 44.0, w: 1.7, h: 2.5, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 22,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 22.1,
      human: true,
    },
    {
      text: 'Клапан 038 на подогревателe газа закрыт.',
      sender: 'Система',
      startTime: timeDiff + 22.2,
    },
    ////--------------------------------3----------------------------------------
    {
      text: 'Закрыть клапан 037 на подогревателе газа.',
      sender: 'Система',
      audio: 'tts-3',
      startTime: timeDiff + 23,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_12', text: '18,26' },
            { name: '7FI_05', text: '179015' },
            { name: '7PI_13', text: '9,19' },
            { name: 'FI_03', text: '940' },
            { name: 'PI_09', text: '546,48' },
            { name: 'Tdym_3', text: '179' },
            { name: 'Tdym_1', text: '302' },
            { name: 'PI_16_proc', text: '8,94' },
            { name: 'klOF3_proc', text: '53' },
            { name: 'klOF2_proc', text: '53' },
            { name: 'Tkyp_2', text: '1330' },
            { name: 'Tkyp_1', text: '1336' },
            { name: '5PI_08', text: '405' },
            { name: 'VNK2_Fr', text: '82405' },
          ],
        },
      },
      startTime: timeDiff + 24.01,
    },
    {
      action: {
        target3D: 'vozNagr1_1', // Tkyp_1
        color: 'green',
        number: '1336',
      },
      startTime: timeDiff + 24.02,
    },
    {
      action: {
        target3D: 'vozNagr1_2', // Tdym_1
        color: 'green',
        number: '302.0',
      },
      startTime: timeDiff + 24.02,
    },
    {
      action: {
        target3D: 'vozNagr2_1', // Tkyp_2
        color: 'green',
        number: '1330',
      },
      startTime: timeDiff + 24.02,
    },
    {
      action: {
        target3D: 'vozNagr3_2', // Tdym_3
        color: 'green',
        number: '179.0',
      },
      startTime: timeDiff + 24.02,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_2', // VNK2_Fr /10^4
        color: 'green',
        number: '008.2',
      },
      startTime: timeDiff + 24.02,
    },
    {
      action: {
        target3D: 'davVozGorBVN', // PI_16_proc
        color: 'green',
        number: '08.94',
      },
      startTime: timeDiff + 24.02,
    },
    //// клик по ВН37 на схеме  НЕТ ДАННЫХ
    {
      action: {
        target2D: 'kl_037',
        window2D: {
          elements: [
            { name: 'circle_kl037', stroke: '#8F8F8F' },
            { name: 'kl_037', color: '#8F8F8F' },
            { name: 'title_work_vn', text: 'Управление клапаном 037' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Нет данных' },
            { name: 'btn_auto_text', color: '#000' },
            { name: 'btn_auto_2', color: '#fff' },
            { name: 'btn_ruchnoy_text', color: '#666' },                        // afk
            { name: 'btn_ruchnoy_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_open_text', color: '#000' },
            { name: 'btn_open_2', color: '#fff', stroke: '#000' },
            { name: 'btn_close_text', color: '#000' },
            { name: 'btn_close_2', color: '#fff', stroke: '#000' },
            { name: 'polozenie_text', text: '45' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 64.4, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      // lifeTime: '10:00:00',
      startTime: timeDiff + 24.1,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        realName: 'Закрыть',
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
      startTime: timeDiff + 24.2,
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
      startTime: timeDiff + 24.3,
      human: true,
    },
    // мигание 
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'polozenie_text', text: '45' },
            { name: 'kl037_proc', text: '45' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'kl_037', color: '#ff1e00' },
            { name: 'circle_kl037', stroke: '#ff1e00' },
            { name: 'circle_kl037', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
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
            { name: 'kl037_proc', text: '35' },
            { name: 'polozenie_text', text: '35' },
            { name: 'kl_037', color: '#8F8F8F' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl037', stroke: '#8F8F8F' },
            { name: 'circle_kl037', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
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
            { name: 'kl037_proc', text: '25' },
            { name: 'polozenie_text', text: '25' },
            { name: 'kl_037', color: '#ff1e00' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_kl037', stroke: '#ff1e00' },
            { name: 'circle_kl037', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 27,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_037', color: '#8F8F8F' },
            { name: 'kl037_proc', text: '15' },
            { name: 'polozenie_text', text: '15' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl037', stroke: '#8F8F8F' },
            { name: 'circle_kl037', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 28,
    },
    // конечное состояние
    {
      action: {
        window2D: {
          elements: [
            { name: 'circle_kl037', stroke: '#ff1e00' },
            { name: 'kl_037', color: '#ff1e00' },
            { name: 'title_work_vn', text: 'Управление клапаном 037' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'btn_auto_text', color: '#000' },
            { name: 'btn_auto_2', color: '#fff' },
            { name: 'btn_ruchnoy_text', color: '#666' },                        // afk
            { name: 'btn_ruchnoy_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_open_text', color: '#000' },
            { name: 'btn_open_2', color: '#fff', stroke: '#000' },
            { name: 'btn_close_text', color: '#666' },                        // afk
            { name: 'btn_close_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'kl037_proc', text: '0' },
            { name: 'polozenie_text', text: '0' },
          ],
        },
        helper2D: [
          { x: 67.4, y: 44.2, w: 1.7, h: 2.5, id: 'close_w1' },
          { x: 59.9, y: 56.1, w: 4.0, h: 2.5, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 29,
    },
    // ЧАТ
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 29.1,
      human: true,
    },
    {
      text: 'Клапан 037 на подогревателe газа закрыт.',
      sender: 'Система',
      startTime: timeDiff + 29.2,
    },
    {
      text: 'Закрыть клапан 007 на подогревателe воздуха.',
      sender: 'Система',
      audio: 'tts-4',
      startTime: timeDiff + 30,
    },
    // Sergey (vnk_main После закрытия 037) 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_12', text: '18,05' },
            { name: '7FI_05', text: '178287' },
            { name: '7PI_13', text: '9,08' },
            { name: 'FI_03', text: '919' },
            { name: 'PI_09', text: '541,80' },
            { name: 'Tdym_1', text: '304' },
            { name: 'PI_16_proc', text: '9,42' },
            { name: 'klOF3_proc', text: '55' },
            { name: 'klOF2_proc', text: '55' },
            { name: 'Tkyp_3', text: '1297' },
            { name: 'Tkyp_2', text: '1330' },
            { name: 'Tkyp_1', text: '1334' },
            { name: '8QI_05_01', text: '24,83' },
            { name: 'ramka_8QI_05_1', color: '#FFFD06' },
            { name: '8QI_05_02', text: '88,06' },
          ],
        },
      },
      startTime: timeDiff + 31.01,
    },
    {
      action: {
        target3D: 'vozNagr1_1', // Tkyp_1
        color: 'green',
        number: '1334',
      },
      startTime: timeDiff + 31.02,
    },
    {
      action: {
        target3D: 'vozNagr1_2', // Tdym_1
        color: 'green',
        number: '304.0',
      },
      startTime: timeDiff + 31.02,
    },
    {
      action: {
        target3D: 'vozNagr2_1', // Tkyp_2
        color: 'green',
        number: '1330',
      },
      startTime: timeDiff + 31.02,
    },
    {
      action: {
        target3D: 'vozNagr3_1', // Tkyp_3
        color: 'green',
        number: '1297',
      },
      startTime: timeDiff + 31.02,
    },
    {
      action: {
        target3D: 'davVozGorBVN', // PI_16_proc
        color: 'green',
        number: '09.42',
      },
      startTime: timeDiff + 31.02,
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
            { name: 'circle_kl007', stroke: '#00FF00' },
            { name: 'kl007', color: '#00FF00' },
            { name: 'title_work_vn', text: 'Управление клапаном 007' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'btn_auto_text', color: '#000' },
            { name: 'btn_auto_2', color: '#fff' },
            { name: 'btn_ruchnoy_text', color: '#666' },                        // afk
            { name: 'btn_ruchnoy_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_open_text', color: '#666' },                        // afk
            { name: 'btn_open_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_close_text', color: '#000' },
            { name: 'btn_close_2', color: '#fff', stroke: '#000' },
            { name: 'kl007_proc', text: '100' },
            { name: 'polozenie_text', text: '100' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 32,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        realName: 'Закрыть',
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
      startTime: timeDiff + 32.1,
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
      startTime: timeDiff + 32.2,
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
            { name: 'circle_kl007', stroke: '#ff1e00' },
            { name: 'circle_kl007', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
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
            { name: 'kl007_proc', text: '35' },
            { name: 'kl007', color: '#8F8F8F' },
            { name: 'polozenie_text', text: '35' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl007', stroke: '#8F8F8F' },
            { name: 'circle_kl007', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
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
            { name: 'kl007', color: '#ff1e00' },
            { name: 'kl007_proc', text: '25' },
            // { name: 'polozenie_text', text: '25' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_kl007', stroke: '#ff1e00' },
            { name: 'circle_kl007', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 35,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl007', color: '#8F8F8F' },
            { name: 'kl007_proc', text: '15' },
            { name: 'polozenie_text', text: '15' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl007', stroke: '#8F8F8F' },
            { name: 'circle_kl007', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 36,
    },
    // конечное состояние
    {
      action: {
        window2D: {
          elements: [
            { name: 'circle_kl007', stroke: '#ff1e00' },
            { name: 'kl007', color: '#ff1e00' },
            { name: 'title_work_vn', text: 'Управление клапаном 007' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'btn_auto_text', color: '#000' },
            { name: 'btn_auto_2', color: '#fff' },
            { name: 'btn_ruchnoy_text', color: '#666' },                        // afk
            { name: 'btn_ruchnoy_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_open_text', color: '#000' },
            { name: 'btn_open_2', color: '#fff', stroke: '#000' },
            { name: 'btn_close_text', color: '#666' },                        // afk
            { name: 'btn_close_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'kl007_proc', text: '0' },
            { name: 'polozenie_text', text: '0' },
          ],
        },
        helper2D: [
          { x: 67.5, y: 56, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 64.3, y: 67.8, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1   // ХЗ почему не двигается // Бывает проскакивает по времени МБ 
        ]
      },
      startTime: timeDiff + 37,
    },
    // закрыть окно ВН
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 37.1,
      human: true,
    },
    // ЧАТ
    {
      text: 'Клапан 007 на подогревателe газа закрыт.',
      sender: 'Система',
      startTime: timeDiff + 37.2,
    },
    {
      text: 'Закрыть клапан 028 на подогревателe воздуха.',
      sender: 'Система',
      audio: 'tts-5',
      startTime: timeDiff + 38,
    },
    ////--------------------------------5----------------------------------------
    // Sergey (vnk_main После закрытия 007) 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_12', text: '17,60' },
            { name: '7FI_05', text: '175309' },
            { name: '7PI_13', text: '8,85' },
            { name: '7PI_42', text: '88' },
            { name: 'PI_16_proc', text: '10,04' },
            { name: 'klOF3_proc', text: '56' },
            { name: 'klOF2_proc', text: '56' },
            { name: '8QI_05_01', text: '7,40' },
            { name: 'ramka_8QI_05_1', color: '#BEBEBE' },
            { name: '8QI_05_02', text: '86,92' },
            { name: 'FI_03', text: '912' },
            { name: 'PI_09', text: '536,98' },
            { name: 'Tkyp_1', text: '1327' },
            { name: 'Tdym_1', text: '307' },
          ],
        },
      },
      startTime: timeDiff + 39,
    },
    {
      action: {
        target3D: 'vozNagr1_1', // Tkyp_1
        color: 'green',
        number: '1327',
      },
      startTime: timeDiff + 39.02,
    },
    {
      action: {
        target3D: 'vozNagr1_2', // Tdym_1
        color: 'green',
        number: '307.0',
      },
      startTime: timeDiff + 39.02,
    },
    {
      action: {
        target3D: 'davVozGorBVN', // PI_16_proc
        color: 'green',
        number: '10.04',
      },
      startTime: timeDiff + 39.02,
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
            { name: 'circle_kl028', stroke: '#00FF00' },
            { name: 'circle_kl028', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'polozenie_text', text: '100' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'btn_open_text', color: '#666' },                        // afk
            { name: 'btn_open_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_close_text', color: '#000' },
            { name: 'btn_close_2', color: '#fff', stroke: '#000' },
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 39.1,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        realName: 'Закрыть',
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
      startTime: timeDiff + 39.2,
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
      startTime: timeDiff + 39.3,
      human: true,
    },
    // мигание 
    {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'btn_open_2', color: '', stroke: '' },
            { name: 'polozenie_text', text: '45' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'kl028_proc', text: '45' },
            { name: 'kl028', color: '#ff1e00' },
            { name: 'circle_kl028', stroke: '#ff1e00' },
            { name: 'circle_kl028', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
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
            { name: 'polozenie_text', text: '35' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'kl028_proc', text: '35' },
            { name: 'kl028', color: '#8F8F8F' },
            { name: 'circle_kl028', stroke: '#8F8F8F' },
            { name: 'circle_kl028', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
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
            { name: 'kl028', color: '#ff1e00' },
            { name: 'kl028_proc', text: '25' },
            { name: 'polozenie_text', text: '25' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_kl028', stroke: '#ff1e00' },
            { name: 'circle_kl028', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 42,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl028', color: '#8F8F8F' },
            { name: 'kl028_proc', text: '15' },
            { name: 'polozenie_text', text: '15' },
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_kl028', stroke: '#8F8F8F' },
            { name: 'circle_kl028', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 43,
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
            { name: 'circle_kl028', stroke: '#ff1e00' },
            { name: 'circle_kl028', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'btn_open_text', color: '#000' },
            { name: 'btn_open_2', color: '#fff', stroke: '#000' },
            { name: 'btn_close_text', color: '#666' },                        // afk
            { name: 'btn_close_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
          ],
        },
        helper2D: [
          { x: 54.80, y: 54.5, w: 1.5, h: 2.6, id: 'close_w1' },
          { x: 51.65, y: 66.5, w: 4.0, h: 2.6, id: 'open_vn' },     //  win 1
        ]
      },
      startTime: timeDiff + 44,
    },
    // закрыть окно ВН
    {
      startTime: timeDiff + 44.1,
      action: {
        target2D: 'close_w1',
      },
      human: true,
    },
    // ЧАТ
    {
      text: 'Клапан 028 на подогревателe газа закрыт.',
      sender: 'Система',
      startTime: timeDiff + 44.2,
    },
    {
      text: 'Подогреватели воздуха и газа отделены.',
      audio: 'tts-6',
      sender: 'Система',
      startTime: timeDiff + 45,
    },
    ////--------------------------------0----------------------------------------
    // Sergey (vnk_main После закрытия 028) 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_12', text: '17,14' },
            { name: '7FI_05', text: '181317' },
            { name: 'klOF3_proc', text: '54' },
            { name: 'klOF2_proc', text: '55' },
            { name: '7PI_13', text: '9,17' },
            { name: '7PI_42', text: '86' },
            { name: 'PI_16_proc', text: '10,64' },
            { name: '8QI_05_01', text: '6,93' },
            { name: 'ramka_8QI_05_1', color: '#BEBEBE' },
            { name: '8QI_05_02', text: '82,30' },
            { name: 'FI_03', text: '925' },
            { name: 'PI_09', text: '543,36' },
            { name: 'Tkyp_1', text: '1324' },
            { name: 'Tdym_1', text: '308' },
          ],
        },
      },
      startTime: timeDiff + 49.01,
    },
    {
      action: {
        target3D: 'vozNagr1_1', // Tkyp_1
        color: 'green',
        number: '1324',
      },
      startTime: timeDiff + 49.02,
    },
    {
      action: {
        target3D: 'vozNagr1_2', // Tdym_1
        color: 'green',
        number: '308.0',
      },
      startTime: timeDiff + 49.02,
    },
    {
      action: {
        target3D: 'davVozGorBVN', // PI_16_proc
        color: 'green',
        number: '10.64',
      },
      startTime: timeDiff + 49.02,
    },
    {
      scenarioText: 'В случае запланированной остановки доменной печи газовщик сообщает об этом по телефону.',
      audio: 'tts-7',
      sender: 'Система',
      lifeTime: '07:45:00',
      startTime: timeDiff + 49.1,
    },
    ////--------------------------------1----------------------------------------//8-12//-new
    {
      text: 'Нажать на кнопки с надписью: «Газовый цех», «Насосный цех», «Кислородный цех», «ЭВС», «Угольная» на телефоне.',
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
        },
        {
          text: 'Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton016',
          },
          audio: 'tts-vo1',
        },
      ],
      startTime: timeDiff + 52,
      human: true,
    },
    //Прекращение подачи ПУТ в ДП
    //Остановка вдувания пылеугольного топлива ПУТ
    // 1.2    // DP
    ////--------------------------------0----------------------------------------//13//-new
    {
      scenarioText: 'Остановка вдувания пылеугольного топлива ПУТ',
      sender: 'Система',
      lifeTime: '08:00:00',
      startTime: timeDiff + 57,
    },
    {
      text: 'По указанию сменного мастера печи газовщик прекращает подачу ПУТ в доменную печь',
      sender: 'Система',
      audio: 'tts-8 (1)',
      startTime: timeDiff + 56,
    },
    ////--------------------------------1----------------------------------------//14//-new
    {
      text: 'Принять телефонный звонок, подняв трубку телефона.',
      sender: 'Система',
      audio: 'Zvuk_gudka_telefona',
      startTime: timeDiff + 64,
    },
    {
      action: {
        target3D: 'Telephone_highlight2',
      },
      startTime: timeDiff + 64.1,
      human: true,
    },
    {
      text: 'Прекратить подачу ПУТ в доменную печь.',
      sender: 'Сменный мастер печи',
      audio: 'vo_new_14_1',
      startTime: timeDiff + 65,
    },
    {
      text: 'Приступаю к выполнению.',
      sender: 'Газовщик',
      audio: 'vo_new_14_2',
      startTime: timeDiff + 68,
    },

    ////--------------------------------//15//-new
    {
      text: 'Нажать на кнопку с надписью: «Угольная».',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 70,
    },
    {
      action: {
        target3D: 'PhoneButton016',
      },
      startTime: timeDiff + 72.5,
      human: true,
    },
    {
      text: 'Остановить вдувания пылеугольного топлива.',
      sender: 'Газовщик',
      audio: 'vo_new_15_1',
      startTime: timeDiff + 74,
    },
    {
      text: 'Понял. Выполняю.',
      sender: 'Оператор',
      audio: 'vo_new_15_2',
      startTime: timeDiff + 78,
    },
    ////--------------------------------//16//-new
    {
      text: 'В 08:00 остановили вдувания пылеугольного топлива.',
      sender: 'Система',
      audio: 'tts-9-1',
      startTime: timeDiff + 81,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0.0' },
          ]
        }
      },
      startTime: timeDiff + 81.1,
    },
    {
      text: 'Проверить давление Fобщ и Fтек.',
      sender: 'Система',
      multi: [
        {
          action: {
            target2D: 'F-Obsh',
          },
        },
        {
          action: {
            target2D: 'F-Tek',
          },
        },
      ],
      startTime: timeDiff + 85.1,
      human: true,
    },
    ////--------------------------------//17//-new
    {
      scenarioText: 'Подготовительные работы перед остановкой ДП №6.',
      sender: 'Система',
      startTime: timeDiff + 85.9,
    },
    {
      text: 'Проверка значений ПГ, ТТГ и температуры чугуна в лётках. В случае необходимости, внести корректировки.',
      sender: 'Система',
      audio: 'tts_new_17',
      startTime: timeDiff + 86,
    },
    ////--------------------------------2----------------------------------------//18//-new
    {
      text: 'Увеличить расход природного газа для поддержания ТТГ. Установить на 37000.',
      sender: 'Система',
      audio: 'tts_new_18',
      startTime: timeDiff + 94,
    },
    {
      action: {
        target2D: 't_r_4',
      },
      startTime: timeDiff + 98.5,
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
      startTime: timeDiff + 98.6,
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
      startTime: timeDiff + 98.7,
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
      startTime: timeDiff + 98.8,
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
      startTime: timeDiff + 98.9,
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
      startTime: timeDiff + 99,
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
      startTime: timeDiff + 99.1,
      human: true,
    },
    // Sergey (Изменение Dp)
    {
      action: {
        window2D: {
          elements: [
            { name: 'radar1_text', text: '1,24' },
            { name: 'radar2_text', text: '1,69' },
            { name: 'radar3_text', text: '-1,69' },
            { name: 'EKZ_H1', text: '16' },
            { name: 'EKZ_H2', text: '16' },
            { name: 'EKZ_H3', text: '16' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 0 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '52964' },
            { name: 'EVD1_O', text: '40687' },
            { name: 'EVS_DP7_F', text: '7251' },
            { name: 'EVD1_F', text: '342749' },
            { name: 'EVD_F', text: '263334' },
            { name: 'P_1', text: '4,10' },
            { name: 'F_evd', text: '6052' },
            { name: 'F_hol_dyt', text: '5841' },
            { name: 'T_hol_dyt', text: '78' },
            { name: 'O_hol_dyt', text: '29,5' },
            { name: 'par_yvlaz', text: '0,00' },
            { name: 'W_sinij_hol_dyt', text: '7,3' },
            { name: 'FO2_hol_dyt', text: '1758' },
            { name: 'N2', text: '42,8' },
            { name: 'CO', text: '26,5' },
            { name: 'CO2', text: '21,5' },
            { name: 'H2_tryb', text: '8,8' },
            { name: 'Nco_tryb', text: '44,8' },
            { name: 'Q_domG_tryb', text: '1051' },
            { name: 'P_vozd_tryb', text: '11' },
            { name: 'P_gaza_tryb', text: '10' },
            { name: 'CO_bor_tryb', text: '0,34' },
            { name: 'H_step_isp', text: '35,4' },
            { name: 'HCO_step_isp', text: '42,7' },
            { name: 'Tkyp_3', text: '1295' },
            { name: 'Tkyp_2', text: '1329' },
            { name: 'Tkyp_1', text: '1328' },
            { name: 'Fvozdyh_2', text: '94775' },
            { name: 'Fgaz_2', text: '81539' },
            { name: 'VNK1_Fb', text: '96320' },
            { name: 'VNK1_Fr', text: '98349' },
            { name: 'Tdym_3', text: '164' },
            { name: 'Tdym_2', text: '154' },
            { name: 'Tdym_1', text: '329' },
            { name: 'P_Os_szat_voz', text: '8,38' },
            { name: 'T_Os_szat_voz', text: '30' },
            { name: 'Temp_peref_1', text: '84' },
            { name: 'Temp_peref_2', text: '79' },
            { name: 'Temp_peref_3', text: '79' },
            { name: 'Temp_peref_4', text: '85' },
            { name: 'Temp_peref_5', text: '81' },
            { name: 'Temp_peref_6', text: '81' },
            { name: 'Temp_peref_7', text: '85' },
            { name: 'Temp_peref_8', text: '64' },
            { name: 'Temp_peref_9', text: '73' },
            { name: 'Temp_peref_10', text: '78' },
            { name: 'Temp_peref_11', text: '136' },
            { name: 'Temp_peref_12', text: '94' },
            { name: 'Temp_peref_13', text: '118' },
            { name: 'Temp_peref_14', text: '82' },
            { name: 'Temp_peref_15', text: '89' },
            { name: 'Temp_peref_16', text: '78' },
            { name: 'T1', text: '156' },
            { name: 'T2', text: '155' },
            { name: 'T3', text: '155' },
            { name: 'T4', text: '146' },
            { name: 'P_2', text: '3.99' },
            { name: 't_gor_dut', text: '1211' },
            { name: 'P_pg_prir_gaz', text: '8,44' },
            { name: 'F_prir_gaz_table', text: '37000' },
            { name: 'F_pg_sym_prir_gaz', text: '37000' },
            { name: 'H_Os_szat_voz', text: '29' },
            { name: 't_prirodn_gaz', text: '8' },
            { name: 'H_prir_gaz', text: '8' },
            { name: 'F_tryba', text: '631747' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0,0' },
            { name: 'P_vbls', text: '2,29' },
            { name: 'dP_verh', text: '0,23' },
            { name: 'dP_obsh_tryba', text: '1,68' },
            { name: 'dP_nish_tryba', text: '1,45' },
            { name: 'TTG_zadanie', text: '2100' },
            { name: 'TTG_raschet', text: '2239' },
            { name: 'F_pg_prir_gaz', text: '34670' },
            { name: 'dF_pg_prir_gaz', text: '-57' },
            { name: 'L2', text: '1474' },
            { name: 'Dp_obsh', text: '1,60' },
            { name: 'F_prir_gaz_table', text: '37000' },
            { name: 'TTG_zadanie', text: '2100' },
            { name: 'P_tryba_3_590', text: '2,48' },
            { name: 'P_tryba_3_591', text: '2,48' },
            { name: 'P_tryba_4_1', text: '2,95' },
            { name: 'P_tryba_4_2', text: '2,60' },
            { name: 'P_tryba_4_3', text: '3,02' },
            { name: 'P_tryba_4_4', text: '2,20' },
            { name: 'P_tryba_5_1', text: '2,82' },
            { name: 'P_tryba_5_2', text: '2,71' },
            { name: 'P_tryba_5_3', text: '2,89' },
            { name: 'P_tryba_5_4', text: '3,20' },
            { name: 'ydel_tep_18', text: '28,2' },
            { name: 'ydel_tep_17', text: '51,2' },
            { name: 'ydel_tep_16', text: '37,4' },
            { name: 'ydel_tep_15', text: '49,6' },
            { name: 'ydel_tep_12_14', text: '83,6' },
            { name: 'ydel_tep_10_11', text: '50,2' },
            { name: 'ydel_tep_9', text: '47,4' },
            { name: 'ydel_tep_8', text: '47,3' },
            { name: 'ydel_tep_7', text: '38,2' },
            { name: 'fyrm_v_rab', text: '1' },
          ],
        },
      },
      startTime: timeDiff + 99.61,
    },
    {
      action: {
        target3D: 'dpVerh', // dP_verh
        color: 'green',
        number: '00.23',
      },
      startTime: timeDiff + 99.62,
    },
    {
      action: {
        target3D: 'dpObsh', // dP_obsh_tryba
        color: 'green',
        number: '01.68',
      },
      startTime: timeDiff + 99.62,
    },
    {
      action: {
        target3D: 'dpNiz', // dP_nish_tryba
        color: 'green',
        number: '01.45',
      },
      startTime: timeDiff + 99.62,
    },
    {
      action: {
        target3D: 'pGorDut', // P_2
        color: 'green',
        number: '03.99',
      },
      startTime: timeDiff + 99.62,
    },
    {
      action: {
        target3D: 'tGorDut', // t_gor_dut
        color: 'green',
        number: '1211',
      },
      startTime: timeDiff + 99.62,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd', // P_Os_szat_voz
        color: 'green',
        number: '1211',
      },
      startTime: timeDiff + 99.62,
    },
    {
      action: {
        target3D: 'fParaUvlajDutReg', // par_yvlaz
        color: 'green',
        number: '00.00',
      },
      startTime: timeDiff + 99.62,
    },
    */
    ////--------------------------------3----------------------------------------//19//-new
    {
      text: 'Настройка значения теоретической температуры горения.',
      sender: 'Система',
      audio: 'tts-11',
      startTime: timeDiff + 100,
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
      startTime: timeDiff + 104,
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
      startTime: timeDiff + 104.1,
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
        helper2D: [
          { x: 18.65, y: 73, w: 8, h: 5.5, id: 'ws3_ttg_text_btn' },
          { x: 18.65, y: 73, w: 0, h: 0, id: 'ws3_ttg2_text_btn' },
        ]
      },
      startTime: timeDiff + 104.2,
      human: true,
    },
    {
      action: {
        target2D: 'pzs_close_btn',
      },
      startTime: timeDiff + 104.3,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 104.4,
      human: true,
    },
    // Sergey (DP после закрытия онка символа 302)
    {
      action: {
        window2D: {
          elements: [
            { name: 'EKZ_H1', text: '15' },
            { name: 'EKZ_H2', text: '15' },
            { name: 'EKZ_H3', text: '15' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 0 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '52964' },
            { name: 'EVD1_O', text: '40687' },
            { name: 'EVS_DP7_F', text: '7251' },
            { name: 'EVD1_F', text: '342749' },
            { name: 'EVD_F', text: '263334' },
            { name: 'P_1', text: '4,17' },
            { name: 'F_evd', text: '5964' },
            { name: 'F_hol_dyt', text: '5824' },
            { name: 'T_hol_dyt', text: '78' },
            { name: 'O_hol_dyt', text: '29,5' },
            { name: 'par_yvlaz', text: '0,00' },
            { name: 'W_sinij_hol_dyt', text: '7,3' },
            { name: 'FO2_hol_dyt', text: '1754' },
            { name: 'N2', text: '42,8' },
            { name: 'CO', text: '26,5' },
            { name: 'CO2', text: '21,4' },
            { name: 'H2_tryb', text: '8,7' },
            { name: 'Nco_tryb', text: '44,8' },
            { name: 'Q_domG_tryb', text: '1051' },
            { name: 'P_vozd_tryb', text: '11' },
            { name: 'P_gaza_tryb', text: '9' },
            { name: 'CO_bor_tryb', text: '0,34' },
            { name: 'H_step_isp', text: '33,1' },
            { name: 'HCO_step_isp', text: '42,2' },
            { name: 'Tkyp_3', text: '1295' },
            { name: 'Tkyp_2', text: '1321' },
            { name: 'Tkyp_1', text: '1321' },
            { name: 'Fvozdyh_2', text: '94775' },
            { name: 'Fgaz_2', text: '81539' },
            { name: 'VNK1_Fb', text: '96320' },
            { name: 'VNK1_Fr', text: '98349' },
            { name: 'Tdym_3', text: '161' },
            { name: 'Tdym_2', text: '158' },
            { name: 'Tdym_1', text: '324' },
            { name: 'P_Os_szat_voz', text: '8,42' },
            { name: 'T_Os_szat_voz', text: '30' },
            { name: 'Temp_peref_1', text: '84' },
            { name: 'Temp_peref_2', text: '79' },
            { name: 'Temp_peref_3', text: '79' },
            { name: 'Temp_peref_4', text: '84' },
            { name: 'Temp_peref_5', text: '81' },
            { name: 'Temp_peref_6', text: '85' },
            { name: 'Temp_peref_7', text: '85' },
            { name: 'Temp_peref_8', text: '64' },
            { name: 'Temp_peref_9', text: '73' },
            { name: 'Temp_peref_10', text: '78' },
            { name: 'Temp_peref_11', text: '136' },
            { name: 'Temp_peref_12', text: '94' },
            { name: 'Temp_peref_13', text: '118' },
            { name: 'Temp_peref_14', text: '82' },
            { name: 'Temp_peref_15', text: '89' },
            { name: 'Temp_peref_16', text: '78' },
            { name: 'T1', text: '160' },
            { name: 'T2', text: '143' },
            { name: 'T3', text: '154' },
            { name: 'T4', text: '148' },
            { name: 'P_2', text: '4.07' },
            { name: 't_gor_dut', text: '1209' },
            { name: 'P_pg_prir_gaz', text: '8,38' },
            { name: 'F_prir_gaz_table', text: '37000' },
            { name: 'F_pg_sym_prir_gaz', text: '33547' },
            { name: 'H_Os_szat_voz', text: '36' },
            { name: 't_prirodn_gaz', text: '8' },
            { name: 'H_prir_gaz', text: '41' },
            { name: 'F_tryba', text: '422273' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0,0' },
            { name: 'P_vbls', text: '2,30' },
            { name: 'dP_verh', text: '0,22' },
            { name: 'dP_obsh_tryba', text: '1,74' },
            { name: 'dP_nish_tryba', text: '1,53' },
            { name: 'TTG_zadanie', text: '2100' },
            { name: 'TTG_raschet', text: '2237' },
            { name: 'F_pg_prir_gaz', text: '33456' },
            { name: 'dF_pg_prir_gaz', text: '-57' },
            { name: 'L2', text: '1474' },
            { name: 'Dp_obsh', text: '1,60' },
            { name: 'F_prir_gaz_table', text: '37000' },
            { name: 'TTG_zadanie', text: '2100' },
            { name: 'P_tryba_3_590', text: '2,48' },
            { name: 'P_tryba_3_591', text: '2,48' },
            { name: 'P_tryba_4_1', text: '4,18' },
            { name: 'P_tryba_4_2', text: '3,41' },
            { name: 'P_tryba_4_3', text: '4,29' },
            { name: 'P_tryba_4_4', text: '3,29' },
            { name: 'P_tryba_5_1', text: '3,13' },
            { name: 'P_tryba_5_2', text: '2,71' },
            { name: 'P_tryba_5_3', text: '2,87' },
            { name: 'P_tryba_5_4', text: '2,81' },
            { name: 'ydel_tep_18', text: '29,2' },
            { name: 'ydel_tep_17', text: '51,2' },
            { name: 'ydel_tep_16', text: '34,4' },
            { name: 'ydel_tep_15', text: '49,6' },
            { name: 'ydel_tep_12_14', text: '83,6' },
            { name: 'ydel_tep_10_11', text: '48,2' },
            { name: 'ydel_tep_9', text: '47,4' },
            { name: 'ydel_tep_8', text: '47,3' },
            { name: 'ydel_tep_7', text: '38,2' },
            { name: 'fyrm_v_rab', text: '29' },
          ],
        },
      },
      startTime: timeDiff + 104.41,
    },
    {
      action: {
        target3D: 'dpVerh', // dP_verh
        color: 'green',
        number: '00.22',
      },
      startTime: timeDiff + 104.42,
    },
    {
      action: {
        target3D: 'dpObsh', // dP_obsh_tryba
        color: 'green',
        number: '01.74',
      },
      startTime: timeDiff + 104.42,
    },
    {
      action: {
        target3D: 'dpNiz', // dP_nish_tryba
        color: 'green',
        number: '01.53',
      },
      startTime: timeDiff + 104.42,
    },
    {
      action: {
        target3D: 'pGorDut', // dP_nish_tryba
        color: 'green',
        number: '04.07',
      },
      startTime: timeDiff + 104.42,
    },
    {
      action: {
        target3D: 'tGorDut', // t_gor_dut
        color: 'green',
        number: '1209',
      },
      startTime: timeDiff + 104.42,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd', // P_Os_szat_voz
        color: 'green',
        number: '08.42',
      },
      startTime: timeDiff + 104.42,
    },
    {
      action: {
        target3D: 'fParaUvlajDutReg', // par_yvlaz
        color: 'green',
        number: '00.00',
      },
      startTime: timeDiff + 104.42,
    },
    ////--------------------------------3.1
    {
      text: 'Установить значение ТТГ 2200.',
      sender: 'Система',
      action: {
        target2D: 't_r_5',
        window2D: {
          elements: [
            { name: 'vz_number', text: '0' },
          ]
        },
      },
      startTime: timeDiff + 104.5,
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
      startTime: timeDiff + 104.6,
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
      startTime: timeDiff + 104.7,
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
      startTime: timeDiff + 104.8,
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
      startTime: timeDiff + 104.9,
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
      startTime: timeDiff + 105,
      human: true,
    },
    // Sergey (DP ТТГ 2200)
    {
      action: {
        window2D: {
          elements: [
            { name: 'radar1_text', text: '1,24' },
            { name: 'radar2_text', text: '1,67' },
            { name: 'radar3_text', text: '-1,67' },
            { name: 'EKZ_H1', text: '15' },
            { name: 'EKZ_H2', text: '15' },
            { name: 'EKZ_H3', text: '15' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 0 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '52964' },
            { name: 'EVD1_O', text: '48175' },
            { name: 'EVS_DP7_F', text: '7154' },
            { name: 'EVD1_F', text: '342749' },
            { name: 'EVD_F', text: '263334' },
            { name: 'P_1', text: '4,17' },
            { name: 'F_evd', text: '6653' },
            { name: 'F_hol_dyt', text: '5841' },
            { name: 'T_hol_dyt', text: '78' },
            { name: 'O_hol_dyt', text: '29,5' },
            { name: 'par_yvlaz', text: '0,34' },
            { name: 'W_sinij_hol_dyt', text: '7,3' },
            { name: 'FO2_hol_dyt', text: '1755' },
            { name: 'N2', text: '42,8' },
            { name: 'CO', text: '26,5' },
            { name: 'CO2', text: '21,4' },
            { name: 'H2_tryb', text: '8,7' },
            { name: 'Nco_tryb', text: '44,8' },
            { name: 'Q_domG_tryb', text: '1051' },
            { name: 'P_vozd_tryb', text: '11' },
            { name: 'P_gaza_tryb', text: '9' },
            { name: 'CO_bor_tryb', text: '0,34' },
            { name: 'H_step_isp', text: '35,8' },
            { name: 'HCO_step_isp', text: '42,8' },
            { name: 'Tkyp_3', text: '1295' },
            { name: 'Tkyp_2', text: '1321' },
            { name: 'Tkyp_1', text: '1322' },
            { name: 'Fvozdyh_2', text: '94775' },
            { name: 'Fgaz_2', text: '81539' },
            { name: 'VNK1_Fb', text: '96320' },
            { name: 'VNK1_Fr', text: '98349' },
            { name: 'Tdym_3', text: '161' },
            { name: 'Tdym_2', text: '158' },
            { name: 'Tdym_1', text: '326' },
            { name: 'P_Os_szat_voz', text: '8,43' },
            { name: 'T_Os_szat_voz', text: '30' },
            { name: 'Temp_peref_1', text: '84' },
            { name: 'Temp_peref_2', text: '79' },
            { name: 'Temp_peref_3', text: '79' },
            { name: 'Temp_peref_4', text: '84' },
            { name: 'Temp_peref_5', text: '81' },
            { name: 'Temp_peref_6', text: '85' },
            { name: 'Temp_peref_7', text: '85' },
            { name: 'Temp_peref_8', text: '64' },
            { name: 'Temp_peref_9', text: '73' },
            { name: 'Temp_peref_10', text: '78' },
            { name: 'Temp_peref_11', text: '136' },
            { name: 'Temp_peref_12', text: '94' },
            { name: 'Temp_peref_13', text: '118' },
            { name: 'Temp_peref_14', text: '82' },
            { name: 'Temp_peref_15', text: '89' },
            { name: 'Temp_peref_16', text: '78' },
            { name: 'T1', text: '160' },
            { name: 'T2', text: '143' },
            { name: 'T3', text: '158' },
            { name: 'T4', text: '148' },
            { name: 'P_2', text: '4.07' },
            { name: 't_gor_dut', text: '1209' },
            { name: 'P_pg_prir_gaz', text: '8,38' },
            { name: 'F_prir_gaz_table', text: '37000' },
            { name: 'F_pg_sym_prir_gaz', text: '34290' },
            { name: 'H_Os_szat_voz', text: '36' },
            { name: 't_prirodn_gaz', text: '8' },
            { name: 'H_prir_gaz', text: '45' },
            { name: 'F_tryba', text: '629229' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0,0' },
            { name: 'P_vbls', text: '2,30' },
            { name: 'dP_verh', text: '0,22' },
            { name: 'dP_obsh_tryba', text: '1,74' },
            { name: 'dP_nish_tryba', text: '1,53' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2230' },
            { name: 'F_pg_prir_gaz', text: '34225' },
            { name: 'dF_pg_prir_gaz', text: '65' },
            { name: 'V_dyt', text: '220' },
            { name: 'L2', text: '1472' },
            { name: 'Dp_obsh', text: '1,60' },
            { name: 'F_prir_gaz_table', text: '37000' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'P_tryba_3_590', text: '2,48' },
            { name: 'P_tryba_3_591', text: '2,48' },
            { name: 'P_tryba_4_1', text: '4,11' },
            { name: 'P_tryba_4_2', text: '3,42' },
            { name: 'P_tryba_4_3', text: '4,36' },
            { name: 'P_tryba_4_4', text: '3,29' },
            { name: 'P_tryba_5_1', text: '2,75' },
            { name: 'P_tryba_5_2', text: '3,60' },
            { name: 'P_tryba_5_3', text: '2,85' },
            { name: 'P_tryba_5_4', text: '3,81' },
            { name: 'ydel_tep_18', text: '29,2' },
            { name: 'ydel_tep_17', text: '51,2' },
            { name: 'ydel_tep_16', text: '34,4' },
            { name: 'ydel_tep_15', text: '49,6' },
            { name: 'ydel_tep_12_14', text: '83,6' },
            { name: 'ydel_tep_10_11', text: '48,2' },
            { name: 'ydel_tep_9', text: '47,4' },
            { name: 'ydel_tep_8', text: '47,3' },
            { name: 'ydel_tep_7', text: '38,2' },
            { name: 'fyrm_v_rab', text: '29' },
          ],
        },
      },
      startTime: timeDiff + 105.01,
    },
    {
      action: {
        target3D: 'dpVerh', // dP_verh
        color: 'green',
        number: '00.22',
      },
      startTime: timeDiff + 105.02,
    },
    {
      action: {
        target3D: 'dpObsh', // dP_obsh_tryba
        color: 'green',
        number: '01.74',
      },
      startTime: timeDiff + 105.02,
    },
    {
      action: {
        target3D: 'dpNiz', // dP_nish_tryba
        color: 'green',
        number: '01.53',
      },
      startTime: timeDiff + 105.02,
    },
    {
      action: {
        target3D: 'pGorDut', // P_2
        color: 'green',
        number: '04.07',
      },
      startTime: timeDiff + 105.02,
    },
    {
      action: {
        target3D: 'tGorDut', // t_gor_dut
        color: 'green',
        number: '1209',
      },
      startTime: timeDiff + 105.02,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd', // P_Os_szat_voz
        color: 'green',
        number: '08.43',
      },
      startTime: timeDiff + 105.02,
    },
    {
      action: {
        target3D: 'fParaUvlajDutReg', // par_yvlaz
        color: 'green',
        number: '00.34',
      },
      startTime: timeDiff + 105.02,
    },
    ////--------------------------------3.2
    {
      text: 'Выбрать 302',
      sender: 'Система',
      action: {
        target2D: 't_b_302_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
          ]
        },
        helper2D: [
          { x: 18.65, y: 73, w: 8, h: 5.5, id: 'ws3_ttg_text_btn' },
          { x: 18.65, y: 73, w: 0, h: 0, id: 'ws3_ttg2_text_btn' },
        ]
      },
      startTime: timeDiff + 105.1,
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
        },
      },
      startTime: timeDiff + 105.2,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 105.3,
      human: true,
    },
    // Sergey (DP Повторно 302)
    {
      action: {
        window2D: {
          elements: [
            { name: 'radar1_text', text: '1,40' },
            { name: 'radar2_text', text: '1,67' },
            { name: 'radar3_text', text: '-1,67' },
            { name: 'EKZ_H1', text: '19' },
            { name: 'EKZ_H2', text: '19' },
            { name: 'EKZ_H3', text: '19' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 0 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '52964' },
            { name: 'EVD1_O', text: '48284' },
            { name: 'EVS_DP7_F', text: '7154' },
            { name: 'EVD1_F', text: '342749' },
            { name: 'EVD_F', text: '263334' },
            { name: 'P_1', text: '4,17' },
            { name: 'F_evd', text: '6014' },
            { name: 'F_hol_dyt', text: '5718' },
            { name: 'T_hol_dyt', text: '78' },
            { name: 'O_hol_dyt', text: '29,5' },
            { name: 'par_yvlaz', text: '0,34' },
            { name: 'W_sinij_hol_dyt', text: '7,3' },
            { name: 'FO2_hol_dyt', text: '1755' },
            { name: 'N2', text: '42,8' },
            { name: 'CO', text: '26,5' },
            { name: 'CO2', text: '21,4' },
            { name: 'H2_tryb', text: '8,7' },
            { name: 'Nco_tryb', text: '44,8' },
            { name: 'Q_domG_tryb', text: '1051' },
            { name: 'P_vozd_tryb', text: '11' },
            { name: 'P_gaza_tryb', text: '9' },
            { name: 'CO_bor_tryb', text: '0,34' },
            { name: 'H_step_isp', text: '35,8' },
            { name: 'HCO_step_isp', text: '42,8' },
            { name: 'Tkyp_3', text: '1295' },
            { name: 'Tkyp_2', text: '1331' },
            { name: 'Tkyp_1', text: '1329' },
            { name: 'Fvozdyh_2', text: '94775' },
            { name: 'Fgaz_2', text: '81539' },
            { name: 'VNK1_Fb', text: '96320' },
            { name: 'VNK1_Fr', text: '98349' },
            { name: 'Tdym_3', text: '161' },
            { name: 'Tdym_2', text: '158' },
            { name: 'Tdym_1', text: '326' },
            { name: 'P_Os_szat_voz', text: '8,38' },
            { name: 'T_Os_szat_voz', text: '30' },
            { name: 'Temp_peref_1', text: '84' },
            { name: 'Temp_peref_2', text: '79' },
            { name: 'Temp_peref_3', text: '79' },
            { name: 'Temp_peref_4', text: '84' },
            { name: 'Temp_peref_5', text: '81' },
            { name: 'Temp_peref_6', text: '85' },
            { name: 'Temp_peref_7', text: '85' },
            { name: 'Temp_peref_8', text: '64' },
            { name: 'Temp_peref_9', text: '73' },
            { name: 'Temp_peref_10', text: '78' },
            { name: 'Temp_peref_11', text: '136' },
            { name: 'Temp_peref_12', text: '94' },
            { name: 'Temp_peref_13', text: '118' },
            { name: 'Temp_peref_14', text: '82' },
            { name: 'Temp_peref_15', text: '89' },
            { name: 'Temp_peref_16', text: '78' },
            { name: 'T1', text: '161' },
            { name: 'T2', text: '143' },
            { name: 'T3', text: '157' },
            { name: 'T4', text: '147' },
            { name: 'P_2', text: '4.11' },
            { name: 't_gor_dut', text: '1209' },
            { name: 'P_pg_prir_gaz', text: '8,39' },
            { name: 'F_prir_gaz_table', text: '37000' },
            { name: 'F_pg_sym_prir_gaz', text: '34223' },
            { name: 'H_Os_szat_voz', text: '36' },
            { name: 't_prirodn_gaz', text: '8' },
            { name: 'H_prir_gaz', text: '45' },
            { name: 'F_tryba', text: '558642' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0,0' },
            { name: 'P_vbls', text: '2,30' },
            { name: 'dP_verh', text: '0,22' },
            { name: 'dP_obsh_tryba', text: '1,74' },
            { name: 'dP_nish_tryba', text: '1,53' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2221' },
            { name: 'F_pg_prir_gaz', text: '34193' },
            { name: 'dF_pg_prir_gaz', text: '40' },
            { name: 'V_dyt', text: '215,2' },
            { name: 'L2', text: '1472' },
            { name: 'Dp_obsh', text: '1,60' },
            { name: 'F_prir_gaz_table', text: '37000' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'P_tryba_3_590', text: '2,48' },
            { name: 'P_tryba_3_591', text: '2,48' },
            { name: 'P_tryba_4_1', text: '4,11' },
            { name: 'P_tryba_4_2', text: '3,42' },
            { name: 'P_tryba_4_3', text: '4,36' },
            { name: 'P_tryba_4_4', text: '3,29' },
            { name: 'P_tryba_5_1', text: '2,75' },
            { name: 'P_tryba_5_2', text: '3,60' },
            { name: 'P_tryba_5_3', text: '2,85' },
            { name: 'P_tryba_5_4', text: '3,81' },
            { name: 'ydel_tep_18', text: '29,2' },
            { name: 'ydel_tep_17', text: '51,2' },
            { name: 'ydel_tep_16', text: '34,4' },
            { name: 'ydel_tep_15', text: '49,6' },
            { name: 'ydel_tep_12_14', text: '83,6' },
            { name: 'ydel_tep_10_11', text: '48,2' },
            { name: 'ydel_tep_9', text: '47,4' },
            { name: 'ydel_tep_8', text: '47,3' },
            { name: 'ydel_tep_7', text: '38,2' },
            { name: 'fyrm_v_rab', text: '29' },
          ],
        },
      },
      startTime: timeDiff + 105.31,
    },
    {
      action: {
        target3D: 'dpVerh', // dP_verh
        color: 'green',
        number: '00.22',
      },
      startTime: timeDiff + 105.32,
    },
    {
      action: {
        target3D: 'dpObsh', // dP_obsh_tryba
        color: 'green',
        number: '01.74',
      },
      startTime: timeDiff + 105.32,
    },
    {
      action: {
        target3D: 'dpNiz', // dP_nish_tryba
        color: 'green',
        number: '01.53',
      },
      startTime: timeDiff + 105.32,
    },
    {
      action: {
        target3D: 'pGorDut', // P_2
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 105.32,
    },
    {
      action: {
        target3D: 'tGorDut', // t_gor_dut
        color: 'green',
        number: '1209',
      },
      startTime: timeDiff + 105.32,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd', // P_Os_szat_voz
        color: 'green',
        number: '08.38',
      },
      startTime: timeDiff + 105.32,
    },
    {
      action: {
        target3D: 'fParaUvlajDutReg', // par_yvlaz
        color: 'green',
        number: '00.34',
      },
      startTime: timeDiff + 105.32,
    },
    ////--------------------------------4       //20//-new
    {
      text: 'Выпуск чугуна из лёток, продвука, понижения давления температуры.',
      sender: 'Система',
      audio: 'tts-12',
      lifeTime: '08:15:00',
      startTime: timeDiff + 106,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'L4', color: '#fff' },
            { name: 'L4', stroke: '#fff' },
            { name: 'L3sqr', color: '#F7F700' },
            { name: 'L2sqr', color: '#F7F700' },
            { name: 'fyrm_v_rab', text: '9' },
            { name: 'kol_furm', text: '36' },
            { name: 'dP_nish_tryba', text: '1,49' },
            { name: 'dP_obsh_tryba', text: '1,72' },
            { name: 'dP_verh', text: '1,23' },
            { name: 'P_vbls', text: '2,26' },
            { name: 'r_r_niz', text: '-18,3' },
            { name: 'F_obsh_pyt', text: '9' },
            { name: 'F_tek_pyt', text: '8,8' },
            { name: 'F_pg_prir_gaz', text: '18487' },
            { name: 'dF_pg_prir_gaz', text: '63' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fvozdyh_1', text: '18531' },
            { name: 'Fgaz_1', text: '11354' },
          ]
        }
      },
      startTime: timeDiff + 111,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'L2sqr', color: '#fff' },
          ]
        }
      },
      startTime: timeDiff + 112,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'L2sqr', color: '#F7F700' },
          ]
        }
      },
      startTime: timeDiff + 113,
    }, {
      action: {
        window2D: {
          elements: [
            // не хватает элементов на схеме
          ]
        }
      },
      startTime: timeDiff + 114,
    },
    // 1.3 
    ////--------------------------------1----------------------------------------//21//-new
    {
      text: 'По команде мастера печи, до окончания выпуска чугуна, закрыть кислород на обогащение дутья.',
      sender: 'Система',
      audio: 'tts-13',
      lifeTime: '08:30:00',
      startTime: timeDiff + 115,
    },
    ////--------------------------------//22//-new
    {
      text: 'По рации мастер печи сообщил команду газовщикам.',
      sender: 'Система',
      startTime: timeDiff + 122,
    },
    {
      text: 'Закрыть кислород на обогащения дутья и оставить 20000.',
      sender: 'Мастер печи',
      audio: 'tts-vo2',
      startTime: timeDiff + 123,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 127,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046'
      },
      startTime: timeDiff + 128,
      human: true,
    },
    // Ilay F main + vnk_spvg
    {
      action: {
        window2D: {
          elements: [
            { name: '7TI_41', text: '40' },
            { name: '7PI_12', text: '17,76' },
            { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '208926' },
            { name: '7TI_40', text: '11' },
            { name: '7PI_11', text: '0,00' },
            { name: '7FI_04', text: '0' },
            { name: '5QI_01_01', text: '10' },
            { name: '5QI_01_02', text: '78' },
            //{ name: 'PV2', text: '' },
            { name: 'SP2', text: '9,00' },
            { name: 'PV2_1', text: '23,00' },
            { name: 'M_t1_4', text: 'Работа', color: '#00FF00' },
            { name: 'PV3', text: '0,00' },
            { name: 'SP3', text: '0,00' },
            { name: 'PV3_1', text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            { name: 'PV4', text: '11,07' },
            { name: 'SP4', text: '10,00' },
            { name: 'PV4_1', text: '11,64' },
            { name: 'M_t3_4', text: 'Работа', color: '#00FF00' },
            { name: 'kl053_proc', text: '40' },
            { name: 'kl051_proc', text: '0' },
            { name: 'kl052_proc', text: '0' },
            { name: 'kl035_proc', text: '0' },
            // { name: 'klOF3_proc', text: '56' },
            { name: 'klOF2_proc', text: '56' },
            { name: 'klOF1_proc', text: '0' },
            { name: 'klOF1_proc', text: '0' },
            { name: 'kl0333_proc', text: '100' },
            { name: 'kl0313_proc', text: '100' },
            { name: 'kl0332_proc', text: '100' },
            { name: 'kl0312_proc', text: '100' },
            { name: 'kl0331_proc', text: '0' },
            { name: 'kl0311_proc', text: '100' },
            { name: '7QI_01', text: '-999,00' },
            // { name: 'kl038_proc',   text: '0' },
            // { name: 'kl028_proc',   text: '0' },
            // { name: 'kl020_proc',   text: '100' },
            // { name: 'kl036v_proc',  text: '0' },
            // { name: 'kl036b_proc',  text: '0' },
            // { name: 'kl048_proc', text: '0' },
            // { name: 'kl029_proc', text: '100' },
            // { name: 'kl004_proc', text: '100' },
            { name: 'PI_16_proc', text: '11,12' },
            { name: '9TI_44_proc', text: '28' },
            // { name: 'kl037_proc', text: '0' },
            // { name: 'kl007_proc', text: '0' },
            // { name: 'kl025_proc', text: '100' },
            { name: '8QI_05_01', text: '6,92' },
            { name: '8QI_05_02', text: '85,08' },
            { name: '8QI_05_04', text: '0,00' },
            { name: '7PI_13', text: '8,98' },
            { name: '7PI_42', text: '44' },
            { name: 'PV1', text: '1200,00' },
            { name: 'SP1', text: '1230,00' },
            { name: 'PV1_1', text: '23,33' },
            { name: 'M_t4_4', text: 'Работа', color: '#00FF00' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk_3', color: '#0033FF' }, // задник стрелки
            { name: 'Tkyp_3', text: '1277' },
            { name: 'VNK3_status_1', text: 'Циклический' },
            { name: 'VNK3_status_2', text: 'Дутье' },
            { name: 'vnk3_stripes', color: '#0033FF' },
            { name: 'VNK3_Fr', text: '0' },
            { name: 'VNK3_Fb', text: '0' },
            { name: 'Tdym_3', text: '139' },
            { name: 'kl001_proc', text: '0' },
            { name: 'kl001a_proc', text: '22' },
            { name: 'vnk2_fire', opacity: '1' }, // стрелка
            { name: 'vnk_2', color: '#ff0000' }, // задник стрелки
            { name: 'Tkyp_2', text: '1326' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_2', text: 'Нагрев' },
            { name: 'vnk2_stripes', color: '#ff0000' },
            { name: 'VNK2_Fr', text: '111915' },
            { name: 'VNK2_Fb', text: '104399' },
            { name: 'Tdym_2', text: '233' },
            { name: '5PI_08', text: '386' },
            { name: '5PI_08', text: '16' },
            { name: 'FI_03', text: '934' },
            { name: 'vnk1_fire', opacity: '1' }, // стрелка
            { name: 'vnk_1', color: '#ff0000' }, // задник стрелки
            { name: 'Tkyp_1', text: '1322' },
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Нагрев' },
            { name: 'vnk1_stripes', color: '#ff0000' },
            { name: 'VNK1_Fr', text: '110014' },
            { name: 'VNK1_Fb', text: '100130' },
            { name: 'Tdym_1', text: '423' },
            { name: 'vybor_signala', text: '1210' },
            { name: '5TI_21', text: '1201' },
            { name: '5TI_22', text: '1210' },
            { name: 'PI_09', text: '536б65' },
            // vnk_spvg
            { name: '6TI_39_1', text: '40' },
            { name: '6TI_39_2', text: '32' },
            { name: '6TI_39_3', text: '59' },
            { name: '6TI_39_4', text: '58' },
            { name: '6TI_39_5', text: '58' },
            { name: '6TI_39_6', text: '56' },
            { name: '6TI_39_7', text: '62' },
            { name: '6TI_39_8', text: '55' },
            { name: '6TI_39_9', text: '31' },
            { name: '6TI_39_10', text: '36' },
            { name: '6TI_38_1', text: '37' },
            { name: '6TI_38_2', text: '42' },
            { name: '6TI_38_3', text: '67' },
            { name: '6TI_38_4', text: '66' },
            { name: '6TI_38_5', text: '69' },
            { name: '6TI_38_6', text: '67' },
            { name: '6TI_38_7', text: '69' },
            { name: '6TI_38_8', text: '67' },
            { name: '6TI_38_9', text: '33' },
            { name: '6TI_38_10', text: '41' },
            { name: '6TI_37_1', text: '12' },
            { name: '6TI_37_2', text: '13' },
            { name: '6TI_37_3', text: '14' },
            { name: '6TI_37_4', text: '15' },
            { name: '6TI_37_5', text: '15' },
            { name: '6TI_37_6', text: '15' },
            { name: '6TI_37_7', text: '14' },
            { name: '6TI_37_8', text: '15' },
            { name: '6TI_37_9', text: '13' },
            { name: '6TI_37_10', text: '14' },
            { name: 'klO35_proc', text: '0' },
            //table1
            //table1
            //table1
            { name: 'spvg_t1_4', text: 'Работа', color: '#00FF00' },
            { name: 'vnk_spvg_B3_1', color: '#00FF00' },
            { name: 'vnk_spvg_B2_1', color: '#00FF00' },
            { name: 'vnk_spvg_B1_1', color: '#808080' },
            { name: '6VI_3_1', text: '0,81' },
            { name: '6VI_3_2', text: '1,96' },
            { name: '6VI_3_3', text: '1,43' },
            { name: '6VI_3_4', text: '1,73' },
            { name: '6VI_2_1', text: '0,94' },
            { name: '6VI_2_2', text: '1,32' },
            { name: '6VI_2_3', text: '1,31' },
            { name: '6VI_2_4', text: '2,06' },
            { name: 'klOF3_proc', text: '38' },
            { name: '6TI_31_3', text: '12' },
            // { name: '8QI_05_1', text: '' },
            { name: '8QI_05_2', text: '85,57' },
            { name: '8QI_05_4', text: '0,00' },
            { name: '6VI_1_1', text: '0,04' },
            { name: '6VI_1_2', text: '0,15' },
            { name: '6VI_1_3', text: '0,22' },
            { name: '6VI_1_4', text: '0,16' },
            { name: 'klOF2_proc', text: '0' },
            { name: '6TI_31_2', text: '12' },
            { name: 'klOF1_proc', text: '0' },
            { name: '6TI_31_1', text: '12' },
            { name: '9TI_41', text: '40' },
            { name: '9TI_34', text: '127' },
            { name: '9TI_35', text: '65' },
            { name: '9TI_30', text: '28' },
            { name: '9TI_44', text: '28' },
            { name: '9TI_42', text: '41' },
            { name: '9TI_32', text: '138' },
            { name: '9TI_42', text: '44' },
            // { name: '9TI_33', text: '' },
            // { name: '9TI_16', text: '' },
          ]
        }
      },
      startTime: timeDiff + 128.1,
    },
    {
      text: 'Хорошо. Выполняю.',
      sender: 'Газовщик',
      audio: 'tts-vo3',
      startTime: timeDiff + 129,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 131,
    },
    ////--------------------------------2//23//-new
    {
      scenarioText: 'Перекидка клапанов в автоматическом режиме.',
      sender: 'Система',
      audio: 'tts-14',
      startTime: timeDiff + 132,
    },
    // Ilay vnk1 + main
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '8,96' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '110037' },
            { name: '115_SPW', text: '433,0' },
            { name: '115_SPT', text: '108,0' },
            { name: '115_KP_2', text: '500,0' },
            { name: '115_GAZ', text: '112221' },
            { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            { name: '123_PV_2', text: '1221,1' },
            { name: '123_SP_2', text: '1200,0' },
            { name: '123_KP_2', text: '28,54' },
            { name: '123_GAZ', text: '0,00' },
            { name: 'V1_t2_4', text: 'Работа', color: '#00FF00' },
            { name: '1FI_02', text: '99784' },
            { name: '115_PV', text: '109961' },
            { name: '115_SP', text: '113391' },
            { name: '115_KP_1', text: '41,34' },
            { name: 'V1_t3_4', text: 'Соглас', color: '#000' },
            { name: '123_PV_1', text: '1,000' },
            { name: '123_SP_1', text: '1,000' },
            { name: '123_KP_1', text: '16,83' },
            { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '1PI_02', text: '8,53' },
            { name: '1PS_03', color: '#00FF00' },
            { name: 'Kl115_proc', text: '41' },
            { name: '1PI_04', text: '3,21' },
            { name: 'Kl123_proc', text: '36' },
            { name: '1QI_01', text: '2,19' },
            { name: '1TI_43', text: '46' },
            { name: '1TI_29', text: '26' },
            { name: 'dym_vybor_signala', text: '424' },
            { name: '1TI_28_1', text: '421' },
            { name: '1TI_28_2', text: '425' },
            { name: 'vnk1_fire', opacity: '1' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '1' }, // обводка стрелка
            { name: 'vnk_1', color: '#ff0000' }, // задник стрелки
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Нагрев' },
            { name: 'vnk1_stripes', color: '#ff0000' },
            { name: 'Vremya_nagreva', text: '108' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1321' },
            { name: '1TI_03', text: '1305' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1209' },
            { name: 'vybor_signala', text: '1221' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#00FF00' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            //main
            { name: '7PI_12', text: '17,60' },
            { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '103147' },
            { name: '7TI_40', text: '11' },
            { name: '5QI_01_01', text: '10' },
            { name: '5QI_01_02', text: '77' },
            { name: 'M_t1_4', text: 'Работа', color: '#00FF00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            { name: 'M_t3_4', text: 'Работа', color: '#00FF00' },
            { name: 'kl053_proc', text: '27' },
            { name: 'kl051_proc', text: '0' },
            { name: 'kl052_proc', text: '0' },
            { name: 'kl035_proc', text: '0' },
            { name: 'klOF3_proc', text: '33' },
            { name: 'klOF2_proc', text: '22' },
            { name: 'klOF1_proc', text: '0' },
            { name: 'vnk_main_klOF3_proc', text: '0' },
            { name: 'kl0333_proc', text: '100' },
            { name: 'kl0313_proc', text: '100' },
            { name: 'kl0332_proc', text: '100' },
            { name: 'kl0312_proc', text: '100' },
            { name: 'kl0331_proc', text: '0' },
            { name: 'kl0311_proc', text: '100' },
            { name: '7QI_01', text: '-999,00' },
            // { name: 'kl038_proc',   text: '0' },
            // { name: 'kl028_proc',   text: '0' },
            // { name: 'kl020_proc',   text: '100' },
            // { name: 'kl036v_proc',  text: '0' },
            // { name: 'kl036b_proc',  text: '0' },
            // { name: 'kl048_proc', text: '0' },
            // { name: 'kl029_proc', text: '100' },
            // { name: 'kl004_proc', text: '100' },
            { name: 'PI_16_proc', text: '11,12' },
            { name: '9TI_44_proc', text: '28' },
            // { name: 'kl037_proc', text: '0' },
            // { name: 'kl007_proc', text: '0' },
            // { name: 'kl025_proc', text: '100' },
            { name: '8QI_05_01', text: '6,92' },
            { name: '8QI_05_02', text: '85,08' },
            { name: '8QI_05_04', text: '0,00' },
            { name: '7PI_13', text: '8,98' },
            { name: '7PI_42', text: '44' },
            { name: 'PV1', text: '1200,00' },
            { name: 'SP1', text: '1230,00' },
            { name: 'PV1_1', text: '23,33' },
            { name: 'M_t4_4', text: 'Работа', color: '#00FF00' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk_3', color: '#0033FF' }, // задник стрелки
            { name: 'Tkyp_3', text: '1277' },
            { name: 'VNK3_status_1', text: 'Циклический' },
            { name: 'VNK3_status_2', text: 'Дутье' },
            { name: 'vnk3_stripes', color: '#0033FF' },
            { name: 'VNK3_Fr', text: '0' },
            { name: 'VNK3_Fb', text: '0' },
            { name: 'Tdym_3', text: '139' },
            { name: 'kl001_proc', text: '0' },
            { name: 'kl001a_proc', text: '22' },
            { name: 'vnk2_fire', opacity: '1' }, // стрелка
            { name: 'vnk_2', color: '#ff0000' }, // задник стрелки
            { name: 'Tkyp_2', text: '1326' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_2', text: 'Нагрев' },
            { name: 'vnk2_stripes', color: '#ff0000' },
            { name: 'VNK2_Fr', text: '111915' },
            { name: 'VNK2_Fb', text: '104399' },
            { name: 'Tdym_2', text: '233' },
            { name: '5PI_08', text: '386' },
            { name: '5PI_08', text: '16' },
            { name: 'FI_03', text: '934' },
            { name: 'vnk1_fire', opacity: '1' }, // стрелка
            { name: 'vnk_1', color: '#ff0000' }, // задник стрелки
            { name: 'Tkyp_1', text: '1322' },
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Нагрев' },
            { name: 'vnk1_stripes', color: '#ff0000' },
            { name: 'VNK1_Fr', text: '110014' },
            { name: 'VNK1_Fb', text: '100130' },
            { name: 'Tdym_1', text: '423' },
            { name: 'vybor_signala', text: '1210' },
            { name: '5TI_21', text: '1201' },
            { name: '5TI_22', text: '1210' },
            { name: 'PI_09', text: '536б65' },
          ]
        }
      },
      startTime: timeDiff + 132.01,
    },
    {
      action: {
        target2D: 'perekidta_btn',
        window2D: {
          elements: [
            { name: 'vb_otkr_klap2_rect', color: '#e3d4ce' },
            { name: 'kl_11_rect', color: '#00FF00' },
            { name: 'avarin_otd_rect', color: '#fff', stroke: '#000' },     // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_nagrev', color: '#e6e6e6', stroke: '#808080' },
            { name: 'nagrev_otd_2_rect', color: '#fff', stroke: '#000' },     // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_dute', color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'dute_otdel', color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_otdel2', color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'otd2_otd_rect', color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
          ]
        }
      },
      startTime: timeDiff + 135,
      human: true,
    },
    {
      text: 'Выбрать "Нагрев-Отделение 2.',
      sender: 'Система',
      action: {
        target2D: 'nagrev_otd2_btn',
      },
      startTime: timeDiff + 135.1,
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
      startTime: timeDiff + 135.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'text_132', y: 520 },
            { name: 'text_116', y: 520 },
            { name: 'text_124', y: 520 },
            { name: 'text_113', y: 520 },
            { name: 'text_134', y: 520 },
            { name: 'text_117', y: 520 },
            { name: 'text_111', y: 520 },
            { name: 'text_112', y: 520 },
            { name: 'rect_132', position: { y: 40 } },
            { name: 'rect_116', position: { y: 40 } },
            { name: 'rect_124', position: { y: 40 } },
            { name: 'rect_113', position: { y: 40 } },
            { name: 'rect_134', position: { y: 40 } },
            { name: 'rect_117', position: { y: 40 } },
            { name: 'rect_111', position: { y: 40 } },
            { name: 'rect_112', position: { y: 40 } },
            { name: 'nagrev_otd_2_rect', color: '#00FF00' },
          ]
        },
      },
      startTime: timeDiff + 135.3,
      human: true,
    },
    //1
    {
      action: {
        window2D: {
          elements: [
            { name: '1PS_03_square', color: '#ff0000' },
            { name: '7PI_13', text: '10,94' },
            { name: '1FI_01', text: '56311' },
            { name: '1PI_02', text: '0,47' },
            { name: '1TI_43', text: '46' },
            { name: '1PI_04', text: '0,60' },
            { name: '1TI_29', text: '26' },
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Нагрев-Отдел.' },
            // Table
            { name: 'text_132', y: 520 },
            { name: 'text_116', y: 520 },
            { name: 'text_124', y: 520 },
            { name: 'text_113', y: 520 },
            { name: 'text_134', y: 520 },
            { name: 'text_117', y: 520 },
            { name: 'text_111', y: 520 },
            { name: 'text_112', y: 520 },
            { name: 'rect_132', position: { y: 40 } },
            { name: 'rect_116', position: { y: 40 } },
            { name: 'rect_124', position: { y: 40 } },
            { name: 'rect_113', position: { y: 40 } },
            { name: 'rect_134', position: { y: 40 } },
            { name: 'rect_117', position: { y: 40 } },
            { name: 'rect_111', position: { y: 40 } },
            { name: 'rect_112', position: { y: 40 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 136,
    },
    //2
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '10,90' },
            { name: '1FI_01', text: '45074' },
            { name: '1PI_02', text: '0,33' },
            { name: '1PI_04', text: '0,44' },
            { name: 'kl_132', color: '#ff0000' },
            { name: 'rect_132_2', color: '#000' },
            { name: 'rect_132_2', position: { x: -3 } },
            // Table
            { name: 'text_132', y: 565 },
            { name: 'text_116', y: 565 },
            { name: 'text_124', y: 565 },
            { name: 'text_113', y: 565 },
            { name: 'text_134', y: 565 },
            { name: 'text_117', y: 565 },
            { name: 'text_111', y: 565 },
            { name: 'text_112', y: 565 },
            { name: 'rect_132', position: { y: 81 } },
            { name: 'rect_116', position: { y: 81 } },
            { name: 'rect_124', position: { y: 81 } },
            { name: 'rect_113', position: { y: 81 } },
            { name: 'rect_134', position: { y: 81 } },
            { name: 'rect_117', position: { y: 81 } },
            { name: 'rect_111', position: { y: 81 } },
            { name: 'rect_112', position: { y: 81 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 137,
    },
    //3
    {
      action: {
        window2D: {
          elements: [
            { name: 'vnk1_red_Arrow', opacity: '0' },
            { name: 'vnk1_red_Arrow_border', opacity: '0' },
            { name: 'kl_132', color: '#ff0000' },
            { name: 'kl_132_l', color: '#ff0000' },
            { name: 'kl_127', color: '#b5b3b6' },
            { name: '7PI_13', text: '9,80' },
            // Table
            { name: 'text_132', y: 605 },
            { name: 'text_116', y: 605 },
            { name: 'text_124', y: 605 },
            { name: 'text_113', y: 605 },
            { name: 'text_134', y: 605 },
            { name: 'text_117', y: 605 },
            { name: 'text_111', y: 605 },
            { name: 'text_112', y: 605 },
            { name: 'rect_132', position: { y: 123 } },
            { name: 'rect_116', position: { y: 123 } },
            { name: 'rect_124', position: { y: 123 } },
            { name: 'rect_113', position: { y: 123 } },
            { name: 'rect_134', position: { y: 123 } },
            { name: 'rect_117', position: { y: 123 } },
            { name: 'rect_111', position: { y: 123 } },
            { name: 'rect_112', position: { y: 123 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 138,
    },
    //4
    {
      action: {
        window2D: {
          elements: [
            { name: 'vnk1_red_Arrow', opacity: 1 },
            { name: 'vnk1_red_Arrow_border', opacity: 1 },
            { name: 'vnk1_red_Arrow', color: '#ffffff' },
            { name: '1PS_05_square', color: '#ff0000' },
            { name: '7PI_13', text: '11,20' },
            // Table
            { name: 'text_132', y: 645 },
            { name: 'text_116', y: 645 },
            { name: 'text_124', y: 645 },
            { name: 'text_113', y: 645 },
            { name: 'text_134', y: 645 },
            { name: 'text_117', y: 645 },
            { name: 'text_111', y: 645 },
            { name: 'text_112', y: 645 },
            { name: 'rect_132', position: { y: 164 } },
            { name: 'rect_116', position: { y: 164 } },
            { name: 'rect_124', position: { y: 164 } },
            { name: 'rect_113', position: { y: 164 } },
            { name: 'rect_134', position: { y: 164 } },
            { name: 'rect_117', position: { y: 164 } },
            { name: 'rect_111', position: { y: 164 } },
            { name: 'rect_112', position: { y: 164 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 139,
    },
    //5
    {
      action: {
        window2D: {
          elements: [
            { name: '1PI_02', text: '0,17' },
            { name: 'vnk1_red_Arrow', opacity: '0' },
            { name: 'vnk1_red_Arrow_border', opacity: '0' },
            { name: 'vn_116', color: '#ff0000' },
            { name: 'vn_116_l', color: '#ff0000' },
            { name: 'vnk_1', color: '#ffffff' },
            { name: '7PI_13', text: '10,78' },
            // Table
            { name: 'text_132', y: 685 },
            { name: 'text_116', y: 685 },
            { name: 'text_124', y: 685 },
            { name: 'text_113', y: 685 },
            { name: 'text_134', y: 685 },
            { name: 'text_117', y: 685 },
            { name: 'text_111', y: 685 },
            { name: 'text_112', y: 685 },
            { name: 'rect_132', position: { y: 205 } },
            { name: 'rect_116', position: { y: 205 } },
            { name: 'rect_124', position: { y: 205 } },
            { name: 'rect_113', position: { y: 205 } },
            { name: 'rect_134', position: { y: 205 } },
            { name: 'rect_117', position: { y: 205 } },
            { name: 'rect_111', position: { y: 205 } },
            { name: 'rect_112', position: { y: 205 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 140,
    },
    //6
    {
      action: {
        window2D: {
          elements: [
            { name: '1FI_03', text: '0' },
            { name: 'vnk1_red_Arrow', opacity: 1 },
            { name: '7PI_13', text: '10,70' },
            // Table
            { name: 'text_132', y: 725 },
            { name: 'text_116', y: 725 },
            { name: 'text_124', y: 725 },
            { name: 'text_113', y: 725 },
            { name: 'text_134', y: 725 },
            { name: 'text_117', y: 725 },
            { name: 'text_111', y: 725 },
            { name: 'text_112', y: 725 },
            { name: 'rect_132', position: { y: 245 } },
            { name: 'rect_116', position: { y: 245 } },
            { name: 'rect_124', position: { y: 245 } },
            { name: 'rect_113', position: { y: 245 } },
            { name: 'rect_134', position: { y: 245 } },
            { name: 'rect_117', position: { y: 245 } },
            { name: 'rect_111', position: { y: 245 } },
            { name: 'rect_112', position: { y: 245 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 141,
    },
    //7
    {
      action: {
        window2D: {
          elements: [
            { name: 'vnk1_red_Arrow', opacity: '0' },
            { name: '7PI_13', text: '10,56' },
            // Table
            { name: 'text_132', y: 765 },
            { name: 'text_116', y: 765 },
            { name: 'text_124', y: 765 },
            { name: 'text_113', y: 765 },
            { name: 'text_134', y: 765 },
            { name: 'text_117', y: 765 },
            { name: 'text_111', y: 765 },
            { name: 'text_112', y: 765 },
            { name: 'rect_132', position: { y: 286 } },
            { name: 'rect_116', position: { y: 286 } },
            { name: 'rect_124', position: { y: 286 } },
            { name: 'rect_113', position: { y: 286 } },
            { name: 'rect_134', position: { y: 286 } },
            { name: 'rect_117', position: { y: 286 } },
            { name: 'rect_111', position: { y: 286 } },
            { name: 'rect_112', position: { y: 286 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 142,
    },
    //8
    {
      action: {
        window2D: {
          elements: [
            { name: '1PI_02', text: '0' },
            { name: 'vn_134', color: '#ff0000' },
            { name: '7PI_13', text: '10,41' },
            // Table
            { name: 'text_132', y: 805 },
            { name: 'text_116', y: 805 },
            { name: 'text_124', y: 805 },
            { name: 'text_113', y: 805 },
            { name: 'text_134', y: 805 },
            { name: 'text_117', y: 805 },
            { name: 'text_111', y: 805 },
            { name: 'text_112', y: 805 },
            { name: 'rect_132', position: { y: 327 } },
            { name: 'rect_116', position: { y: 327 } },
            { name: 'rect_124', position: { y: 327 } },
            { name: 'rect_113', position: { y: 327 } },
            { name: 'rect_134', position: { y: 327 } },
            { name: 'rect_117', position: { y: 327 } },
            { name: 'rect_111', position: { y: 327 } },
            { name: 'rect_112', position: { y: 327 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 143,
    },
    //9
    {
      action: {
        window2D: {
          elements: [
            { name: 'vn_117', color: '#b5b3b6' },
            { name: '1FI_02', text: '0' },
            { name: '7PI_13', text: '10,08' },
            // Table
            { name: 'text_132', y: 845 },
            { name: 'text_116', y: 845 },
            { name: 'text_124', y: 845 },
            { name: 'text_113', y: 845 },
            { name: 'text_134', y: 845 },
            { name: 'text_117', y: 845 },
            { name: 'text_111', y: 845 },
            { name: 'text_112', y: 845 },
            { name: 'rect_132', position: { y: 368 } },
            { name: 'rect_116', position: { y: 368 } },
            { name: 'rect_124', position: { y: 368 } },
            { name: 'rect_113', position: { y: 368 } },
            { name: 'rect_134', position: { y: 368 } },
            { name: 'rect_117', position: { y: 368 } },
            { name: 'rect_111', position: { y: 368 } },
            { name: 'rect_112', position: { y: 368 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 144,
    },
    //10
    {
      action: {
        window2D: {
          elements: [
            { name: 'vn_117', color: '#ff0000' },
            { name: '1FI_02', text: '0' },
            { name: '7PI_13', text: '9,81' },
            // Table
            { name: 'text_132', y: 885 },
            { name: 'text_116', y: 885 },
            { name: 'text_124', y: 885 },
            { name: 'text_113', y: 885 },
            { name: 'text_134', y: 885 },
            { name: 'text_117', y: 885 },
            { name: 'text_111', y: 885 },
            { name: 'text_112', y: 885 },
            { name: 'rect_132', position: { y: 409 } },
            { name: 'rect_116', position: { y: 409 } },
            { name: 'rect_124', position: { y: 409 } },
            { name: 'rect_113', position: { y: 409 } },
            { name: 'rect_134', position: { y: 409 } },
            { name: 'rect_117', position: { y: 409 } },
            { name: 'rect_111', position: { y: 409 } },
            { name: 'rect_112', position: { y: 409 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 145,
    },
    //11
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_112', color: '#ff0000' },
            // Table
            { name: 'text_132', y: 925 },
            { name: 'text_116', y: 925 },
            { name: 'text_124', y: 925 },
            { name: 'text_113', y: 925 },
            { name: 'text_134', y: 925 },
            { name: 'text_117', y: 925 },
            { name: 'text_111', y: 925 },
            { name: 'text_112', y: 925 },
            { name: 'rect_132', position: { y: 450 } },
            { name: 'rect_116', position: { y: 450 } },
            { name: 'rect_124', position: { y: 450 } },
            { name: 'rect_113', position: { y: 450 } },
            { name: 'rect_134', position: { y: 450 } },
            { name: 'rect_117', position: { y: 450 } },
            { name: 'rect_111', position: { y: 450 } },
            { name: 'rect_112', position: { y: 450 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 146,
    },
    //12
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_234', color: '#7b828c' },
            { name: '2QI_01', text: '15,36' },
            // Table
            { name: 'text_132', y: 965 },
            { name: 'text_116', y: 965 },
            { name: 'text_124', y: 965 },
            { name: 'text_113', y: 965 },
            { name: 'text_134', y: 965 },
            { name: 'text_117', y: 965 },
            { name: 'text_111', y: 965 },
            { name: 'text_112', y: 965 },
            { name: 'rect_132', position: { y: 491 } },
            { name: 'rect_116', position: { y: 491 } },
            { name: 'rect_124', position: { y: 491 } },
            { name: 'rect_113', position: { y: 491 } },
            { name: 'rect_134', position: { y: 491 } },
            { name: 'rect_117', position: { y: 491 } },
            { name: 'rect_111', position: { y: 491 } },
            { name: 'rect_112', position: { y: 491 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 147,
    },
    //13
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_134', color: '#ff0000' },
            { name: 'kl_140', color: '#7b828c' },
            { name: '7PI_13', text: '19,65' },
            { name: '1TI_02', text: '1264' },
            { name: '1TI_03', text: '1214' },
            { name: '1TI_05', text: '1052' },
            { name: '1TI_28_1', text: '231' },
            { name: '1TI_28_2', text: '233' },
            { name: '1QI_01', text: '15,58' },
            // Table
            { name: 'text_132', y: 1008 },
            { name: 'text_116', y: 1008 },
            { name: 'text_124', y: 1008 },
            { name: 'text_113', y: 1008 },
            { name: 'text_134', y: 1008 },
            { name: 'text_117', y: 1008 },
            { name: 'text_111', y: 1008 },
            { name: 'text_112', y: 1008 },
            { name: 'rect_132', position: { y: 531 } },
            { name: 'rect_116', position: { y: 531 } },
            { name: 'rect_124', position: { y: 531 } },
            { name: 'rect_113', position: { y: 531 } },
            { name: 'rect_134', position: { y: 531 } },
            { name: 'rect_117', position: { y: 531 } },
            { name: 'rect_111', position: { y: 531 } },
            { name: 'rect_112', position: { y: 531 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 148,
    },
    //14
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_140', color: '#00FF00' },
            { name: 'kl_112', color: '#7b828c' },
            { name: '1QI_01', text: '15,61' },
            // Table
            { name: 'text_132', y: 1048 },
            { name: 'text_116', y: 1048 },
            { name: 'text_124', y: 1048 },
            { name: 'text_113', y: 1048 },
            { name: 'text_134', y: 1048 },
            { name: 'text_117', y: 1048 },
            { name: 'text_111', y: 1048 },
            { name: 'text_112', y: 1048 },
            { name: 'rect_132', position: { y: 572 } },
            { name: 'rect_116', position: { y: 572 } },
            { name: 'rect_124', position: { y: 572 } },
            { name: 'rect_113', position: { y: 572 } },
            { name: 'rect_134', position: { y: 572 } },
            { name: 'rect_117', position: { y: 572 } },
            { name: 'rect_111', position: { y: 572 } },
            { name: 'rect_112', position: { y: 572 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 149,
    },
    //15          
    {
      action: {
        window2D: {
          elements: [
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Отделение 2' },
            { name: 'kl_132', color: '#ff0000' },
            { name: 'kl_127', color: '#00FF00' },
            { name: 'kl_116', color: '#ff0000' },
            { name: 'kl_121', color: '#00FF00' },
            { name: 'kl_113', color: '#ff0000' },
            { name: 'kl_124', color: '#ff0000' },
            { name: 'kl_134', color: '#ff0000' },
            { name: 'kl_140', color: '#00FF00' },
            { name: 'kl_117', color: '#ff0000' },
            { name: 'kl_111', color: '#00FF00' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#00FF00' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: '7PI_13', text: '8,62' },
            { name: '1FI_01', text: '0' },
            { name: '1PI_02', text: '0,00' },
            { name: '1TI_43', text: '47' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_02', text: '0' },
            { name: '1QI_01', text: '13,57' },
            { name: '1TI_28_1', text: '384' },
            { name: '1TI_28_2', text: '388' },
            { name: '1TI_02', text: '1204' },
            { name: '1TI_03', text: '1193' },
            { name: '1TI_05', text: '1069' },
            { name: 'Kl115_proc', text: '23' },
            { name: 'Kl123_proc', text: '22' },
            { name: 'text_132', y: 1090 },
            { name: 'text_116', y: 1090 },
            { name: 'text_124', y: 1090 },
            { name: 'text_113', y: 1090 },
            { name: 'text_134', y: 1090 },
            { name: 'text_117', y: 1090 },
            { name: 'text_111', y: 1090 },
            { name: 'text_112', y: 1090 },
            { name: 'rect_132', position: { y: 613 } },
            { name: 'rect_116', position: { y: 613 } },
            { name: 'rect_124', position: { y: 613 } },
            { name: 'rect_113', position: { y: 613 } },
            { name: 'rect_134', position: { y: 613 } },
            { name: 'rect_117', position: { y: 613 } },
            { name: 'rect_111', position: { y: 613 } },
            { name: 'rect_112', position: { y: 613 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 150,
    },
    //16
    {
      action: {
        window2D: {
          elements: [
            { name: 'nagrev_otd_2_rect', color: '#fff' },
            // Table
            { name: 'text_132', y: 475 },
            { name: 'text_116', y: 475 },
            { name: 'text_124', y: 475 },
            { name: 'text_113', y: 475 },
            { name: 'text_134', y: 475 },
            { name: 'text_117', y: 475 },
            { name: 'text_111', y: 475 },
            { name: 'text_112', y: 475 },
            { name: 'rect_132', position: { y: 0 } },
            { name: 'rect_116', position: { y: 0 } },
            { name: 'rect_124', position: { y: 0 } },
            { name: 'rect_113', position: { y: 0 } },
            { name: 'rect_134', position: { y: 0 } },
            { name: 'rect_117', position: { y: 0 } },
            { name: 'rect_111', position: { y: 0 } },
            { name: 'rect_112', position: { y: 0 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 151,
    },
    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 151.1,
      human: true,
    },
    // Ilay F vnk1 + main
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '8,75' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' },
            { name: '115_SPW', text: '433,0' },
            { name: '115_SPT', text: '108,0' },
            { name: '115_KP_2', text: '283,3' },
            { name: '115_GAZ', text: '600000' },
            { name: 'V1_t1_5', text: 'Соглас', color: '#000' },
            { name: '123_PV_2', text: '1221,7' },
            { name: '123_SP_2', text: '1200,0' },
            { name: '123_KP_2', text: '22,54' },
            { name: '123_GAZ', text: '0,00' },
            { name: 'V1_t2_4', text: 'Соглас', color: '#000' },
            { name: '1FI_02', text: '0' },
            { name: '115_PV', text: '0' },
            { name: '115_SP', text: '99966' },
            { name: '115_KP_1', text: '22,71' },
            { name: 'V1_t3_4', text: 'Соглас', color: '#000' },
            { name: '123_PV_1', text: '1,000' },
            { name: '123_SP_1', text: '1,000' },
            { name: '123_KP_1', text: '16,00' },
            { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '1PI_02', text: '0,00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0,00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '12,34' },
            { name: '1TI_43', text: '47' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '385' },
            { name: '1TI_28_1', text: '383' },
            { name: '1TI_28_2', text: '387' },
            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_1', color: '#808080' }, // задник стрелки
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Отделение 2' },
            { name: 'vnk1_stripes', color: '#ff0000' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: '1PI_01', text: '0' },
            { name: '1TI_02', text: '1203' },
            { name: '1TI_03', text: '1195' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1089' },
            { name: 'vybor_signala', text: '1222' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#00FF00' },
            //VN
            { name: 'rect_132_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_132', color: '#ff0000' },
            { name: 'kl_127', color: '#00FF00' },
            { name: 'rect_116_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_116', color: '#ff0000' },
            { name: '1PS_03', color: '#00FF00' },
            { name: 'kl_121', color: '#ff0000' },
            { name: 'kl_113', color: '#ff0000' },
            { name: 'PS_10', color: '#00FF00' },
            { name: 'kl_124', color: '#ff0000' },
            { name: 'kl_134', color: '#ff0000' },
            { name: '1PS_05', color: '#ff0000' },
            { name: 'kl_140', color: '#00FF00' },
            { name: 'kl_117', color: '#ff0000' },
            { name: 'kl_119', color: '#ff0000' },
            { name: 'kl_111', color: '#ff0000' },
            { name: 'kl_112', color: '#00FF00' },
            { name: 'kl_112', color: '#ff0000' },
            { name: 'kl_136a', color: '#ff0000' },
            { name: 'kl_118a', color: '#ff0000' },
            { name: 'kl_118', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 151.11,
    },
    // {  // O_p_n_na_k_p_na_VNK close   
    //   action: {
    //     target2D: 'perekidta_exit_btn',
    //   },
    // startTime: timeDiff + 151.2,
    //   human: true,
    // },
    ////--------------------------------3-------------------------------------//24//-new
    {
      scenarioText: 'Отделить воздухонагреватель ВНК №1.',
      sender: 'Система',
      audio: 'tts-15',
      startTime: timeDiff + 152,
    },
    // {
    //   action: {
    //     target2D: 'perekidta_btn',
    //     window2D: {
    //       elements: [
    //         { name: 'text_132', y: 475 },
    //         { name: 'text_116', y: 475 },
    //         { name: 'text_124', y: 475 },
    //         { name: 'text_113', y: 475 },
    //         { name: 'text_134', y: 475 },
    //         { name: 'text_117', y: 475 },
    //         { name: 'text_111', y: 475 },
    //         { name: 'text_112', y: 475 },
    //         { name: 'rect_132', position: { y: 0 } },
    //         { name: 'rect_116', position: { y: 0 } },
    //         { name: 'rect_124', position: { y: 0 } },
    //         { name: 'rect_113', position: { y: 0 } },
    //         { name: 'rect_134', position: { y: 0 } },
    //         { name: 'rect_117', position: { y: 0 } },
    //         { name: 'rect_111', position: { y: 0 } },
    //         { name: 'rect_112', position: { y: 0 } },
    //         { name: 'otd2_otd_rect', color: '#fff' },
    //         { name: 'nagrev_otd_2_rect', color: '#fff' },
    //         { name: 'vb_otkr_klap2_rect', color: '#e3d4ce' },
    //         { name: 'kl_11_rect', color: '#00FF00' },
    //         { name: 'avarin_otd_rect', color: '#e6e6e6', stroke: '#808080' },
    //         { name: 'otdel_nagrev', color: '#fff', stroke: '#000' },
    //         { name: 'nagrev_otd_2_rect', color: '#e6e6e6', stroke: '#808080' },
    //         { name: 'otdel_dute', color: '#fff', stroke: '#000' },            // color: '#e6e6e6', stroke: '#808080'
    //         { name: 'dute_otdel', color: '#e6e6e6', stroke: '#808080' },
    //         { name: 'otdel_otdel2', color: '#e6e6e6', stroke: '#808080' },
    //         { name: 'otd2_otd_rect', color: '#fff', stroke: '#000' },
    //       ]
    //     }
    //   },
    // startTime: timeDiff + 156,
    //   human: true,
    // },
    { // win_otdel2_na_vnk OPEN
      action: {
        target2D: 'otdel2_otdel_btn',
      },
      startTime: timeDiff + 156.1,
      human: true,
    },
    // Ilay vnk1 + main
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '9,18' },
            { name: '1TI_43', text: '47' },
            { name: '1QI_01', text: '10,25' },
            { name: '1TI_02', text: '1201' },
            { name: '1TI_03', text: '1191' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1091' },
            { name: 'vybor_signala', text: '1221' },
            // main
            { name: '7TI_41', text: '40' },
            { name: '7PI_12', text: '18,10' },
            { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '105200' },
            { name: '7TI_40', text: '11' },
            { name: '7PI_11', text: '0,00' },
            { name: '7FI_04', text: '0' },
            { name: '5QI_01_01', text: '10' },
            { name: '5QI_01_02', text: '77' },
          ]
        }
      },
      startTime: timeDiff + 156.11,
    },
    {
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
      startTime: timeDiff + 156.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'otd2_otd_rect', color: '#00FF00' },
            { name: 'text_ish_c4', y: 297.5 },   // start 237.5
            { name: 'text_ish_c5', y: 297.5 },   // start 237.5
            { name: 'text_ish_c6', y: 297.5 },   // start 237.5
            { name: 'rect_ish_c4', position: { y: 60 } },
            { name: 'rect_ish_c5', position: { y: 60 } },
            { name: 'rect_ish_c6', position: { y: 60 } },
          ]
        }
      },
      startTime: timeDiff + 156.3,
      human: true,
    },
    {  // win_otdel2_na_vnk CLOSE
      action: {
        target2D: 'otdel2_close_btn',
      },
      startTime: timeDiff + 156.4,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK CLOSE
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 156.5,
      human: true,
    },
    // O_p_n_na_k_na-BVNK_VNK1 схема обновляется
    {
      action: {
        window2D: {
          elements: [
            { name: 'vnk1_red_Arrow', opacity: '0' },
            { name: 'kl_111', color: '#e6e6e6' },
            { name: 'vnk_1', color: '#e6e6e6' },
            { name: 'status_1', text: 'Циклический' },
            { name: 'status_1', text: 'Отдел.2-Отдел.' },
            { name: '7PI_13', text: '9,54' },
            { name: '1FI_01', text: '0' },
            { name: '1PI_02', text: '0,00' },
            { name: '1TI_43', text: '47' },
            { name: '1FI_02', text: '0' },
            { name: '1TI_28_1', text: '381' },
            { name: '1TI_28_2', text: '385' },
            { name: '1QI_01', text: '7,31' },
            { name: '1TI_02', text: '1198' },
            { name: '1TI_03', text: '1190' },
            { name: '1TI_05', text: '1096' },
            { name: 'text_ish_c4', y: 237.5 },
            { name: 'text_ish_c5', y: 237.5 },
            { name: 'text_ish_c6', y: 237.5 },
            { name: 'rect_ish_c4', position: { y: 20 } },
            { name: 'rect_ish_c5', position: { y: 20 } },
            { name: 'rect_ish_c6', position: { y: 20 } },
          ]
        }
      },
      startTime: timeDiff + 157,
    }, {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '9,88' },
            { name: '1FI_01', text: '0' },
            { name: '1PI_02', text: '0,00' },
            { name: '1TI_43', text: '47' },
            { name: 'kl_111', color: '#ff0000' },
            { name: '1TI_28_1', text: '380' },
            { name: '1TI_28_2', text: '384' },
          ]
        }
      },
      startTime: timeDiff + 158,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_111', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 159,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_111', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 160,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_111', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 161,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_111', color: '#ff0000' },
            { name: 'vnk_1', color: '#A0AAB9' },
            { name: 'vnk1_red_Arrow', opacity: '0' },
          ]
        }
      },
      startTime: timeDiff + 162,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'rect_132', position: { y: 40 } },
            { name: 'rect_116', position: { y: 40 } },
            { name: 'rect_124', position: { y: 40 } },
            { name: 'rect_113', position: { y: 40 } },
            { name: 'rect_134', position: { y: 40 } },
            { name: 'rect_117', position: { y: 40 } },
            { name: 'rect_111', position: { y: 40 } },
            { name: 'rect_112', position: { y: 40 } },
          ]
        }
      },
      startTime: timeDiff + 163,
    },
    // Ilay vnk1 + main
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '9,19' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' },
            // { name: '115_SPW',  text: '420,0' },
            // { name: '115_SPT',  text: '108,0' },
            // { name: '115_KP_2', text: '377,3' },
            // { name: '115_GAZ',  text: '800000' },
            { name: 'V1_t1_5', text: 'Соглас', color: '#000' },
            // { name: '123_PV_2', text: '1182,6' },
            // { name: '123_SP_2', text: '1200,0' },
            // { name: '123_KP_2', text: '23,00' },
            // { name: '123_GAZ',  text: '0,00' },
            { name: 'V1_t2_4', text: 'Соглас', color: '#000' },
            { name: '1FI_02', text: '0' },
            // { name: '115_PV',   text: '0' },
            // { name: '115_SP',   text: '99966' },
            // { name: '115_KP_1', text: '23,71' },
            { name: 'V1_t3_4', text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1,000' },
            // { name: '123_SP_1', text: '1,000' },
            // { name: '123_KP_1', text: '16,00' },
            { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '1PI_02', text: '0,00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0,00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '3,09' },
            { name: '1TI_43', text: '47' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '377' },
            { name: '1TI_28_1', text: '375' },
            { name: '1TI_28_2', text: '380' },
            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_1', color: '#808080' }, // задник стрелки
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Отделение' },
            { name: 'vnk1_stripes', color: '#808080' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1194' },
            { name: '1TI_03', text: '1189' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1104' },
            { name: 'vybor_signala', text: '1134' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#00FF00' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            //VN
            { name: 'rect_132_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_132', color: '#ff0000' },
            { name: 'kl_127', color: '#00FF00' },
            { name: 'rect_116_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_116', color: '#ff0000' },
            { name: '1PS_03', color: '#ff0000' },
            { name: 'kl_121', color: '#00FF00' },
            { name: 'kl_113', color: '#ff0000' },
            { name: 'PS_10', color: '#00FF00' },
            { name: 'kl_124', color: '#ff0000' },
            { name: 'kl_134', color: '#ff0000' },
            { name: '1PS_05', color: '#ff0000' },
            { name: 'kl_140', color: '#00FF00' },
            { name: 'kl_117', color: '#ff0000' },
            { name: 'kl_119', color: '#ff0000' },
            { name: 'kl_111', color: '#ff0000' },
            { name: 'kl_112', color: '#ff0000' },
            { name: 'kl_112', color: '#ff0000' },
            { name: 'kl_136a', color: '#ff0000' },
            { name: 'kl_118a', color: '#ff0000' },
            { name: 'kl_118', color: '#ff0000' },
            // main
            { name: '7TI_41', text: '40' },
            { name: '7PI_12', text: '19,05' },
            { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '208926' },
            { name: '7TI_40', text: '11' },
            { name: '7PI_11', text: '0,00' },
            { name: '7FI_04', text: '0' },
            { name: '5QI_01_01', text: '10' },
            { name: '5QI_01_02', text: '78' },
          ]
        }
      },
      startTime: timeDiff + 163.1,
    },
    ////--------------------------------4-------------------------------------//25//-new //
    {
      scenarioText: 'Отделить воздухонагреватель ВНК №2.',
      sender: 'Система',
      audio: 'tts-16',
      startTime: timeDiff + 164,
    },
    {
      action: {
        target2D: 'perekidta2_btn', // perekidta_btn
        window2D: {
          elements: [
            { name: 'text_132', y: 475 },
            { name: 'text_116', y: 475 },
            { name: 'text_124', y: 475 },
            { name: 'text_113', y: 475 },
            { name: 'text_134', y: 475 },
            { name: 'text_117', y: 475 },
            { name: 'text_111', y: 475 },
            { name: 'text_112', y: 475 },
            { name: 'rect_132', position: { y: 0 } },
            { name: 'rect_116', position: { y: 0 } },
            { name: 'rect_124', position: { y: 0 } },
            { name: 'rect_113', position: { y: 0 } },
            { name: 'rect_134', position: { y: 0 } },
            { name: 'rect_117', position: { y: 0 } },
            { name: 'rect_111', position: { y: 0 } },
            { name: 'rect_112', position: { y: 0 } },
            { name: 'avarin_otd_rect', color: '#fff', stroke: '#000' },     // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_nagrev', color: '#e6e6e6', stroke: '#808080' },
            { name: 'nagrev_otd_2_rect', color: '#fff', stroke: '#000' },     // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_dute', color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'dute_otdel', color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_otdel2', color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'otd2_otd_rect', color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
          ]
        }
      },
      startTime: timeDiff + 168,
      human: true,
    },
    { // O_p_n_na_k_na-o_2_na_VNK OPEN
      action: {
        target2D: 'nagrev_otd2_btn',
        window2D: {
          elements: [
            { name: 'Title_window_peric_nagrevotd', text: 'ВН2 Перекидка из Нагрева в Отделение' },
            { name: 'text_Nagrev_111', text: '211' },
            { name: 'text_Nagrev_112', text: '212' },
            { name: 'text_Nagrev_113', text: '213' },
            { name: 'text_Nagrev_121', text: '221' },
            { name: 'text_Nagrev_117', text: '217' },
            { name: 'text_Nagrev_143', text: '243' },
            { name: 'text_Nagrev_110', text: '210' },
            { name: 'text_Nagrev_124_1', text: '224' },
            { name: 'text_Nagrev_124_2', text: '224' },
            { name: 'text_Nagrev_123', text: '223' },
            { name: 'text_Nagrev_114', text: '214' },
            { name: 'text_Nagrev_127', text: '227' },
            { name: 'text_Nagrev_132_down', text: '232' },
            { name: 'text_Nagrev_116_down', text: '216' },
            { name: 'text_Nagrev_124_down', text: '224' },
            { name: 'text_Nagrev_113_down', text: '213' },
            { name: 'text_Nagrev_134_down', text: '234' },
            { name: 'text_Nagrev_117_down', text: '217' },
            { name: 'text_Nagrev_111_down', text: '211' },
            { name: 'text_Nagrev_112_down', text: '212' },
            { name: 'rect_132', position: { y: 0 } },
            { name: 'rect_116', position: { y: 0 } },
            { name: 'rect_124', position: { y: 0 } },
            { name: 'rect_113', position: { y: 0 } },
            { name: 'rect_134', position: { y: 0 } },
            { name: 'rect_117', position: { y: 0 } },
            { name: 'rect_111', position: { y: 0 } },
            { name: 'rect_112', position: { y: 0 } },
          ]
        },
      },
      startTime: timeDiff + 168.1,
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
      startTime: timeDiff + 168.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'text_132', y: 520 },
            { name: 'text_116', y: 520 },
            { name: 'text_124', y: 520 },
            { name: 'text_113', y: 520 },
            { name: 'text_134', y: 520 },
            { name: 'text_117', y: 520 },
            { name: 'text_111', y: 520 },
            { name: 'text_112', y: 520 },
            { name: 'rect_132', position: { y: 40 } },
            { name: 'rect_116', position: { y: 40 } },
            { name: 'rect_124', position: { y: 40 } },
            { name: 'rect_113', position: { y: 40 } },
            { name: 'rect_134', position: { y: 40 } },
            { name: 'rect_117', position: { y: 40 } },
            { name: 'rect_111', position: { y: 40 } },
            { name: 'rect_112', position: { y: 40 } },
            { name: 'nagrev_otd_2_rect', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 168.3,
      human: true,
    },
    //1
    {
      action: {
        window2D: {
          elements: [
            { name: '2PS_03', color: '#ff0000' },
            { name: '2PS_05', color: '#ff0000' },
            { name: 'kl215_proc', text: '28' },
            { name: '7PI_13', text: '10,52' },
            { name: '2FI_01', text: '81142' },
            { name: '2PI_02', text: '2,05' },
            { name: '1TI_43', text: '47' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'dym_vybor_signala', text: '245' },
            { name: '2TI_28_1', text: '239' },
            { name: '2TI_28_2', text: '241' },
            { name: '2QI_01', text: '1,48' },
            { name: '2TI_02', text: '1319' },
            { name: '2TI_03', text: '1304' },
            { name: '2TI_04', text: '1203' },
            { name: '2TI_05', text: '-999' },
            { name: '215_SPW', text: '430,0' },
            { name: '215_SPT', text: '108,0' },
            { name: '215_KP_2', text: '500,0' },
            { name: '215_GAZ', text: '101285' },
            { name: '215_PV', text: '70708' },
            { name: '215_SP', text: '101289' },
            { name: '215_KP_1', text: '27,35' },
            { name: 'VNK2_t2_r', text: 'Работа' },
            { name: 'VNK2_t2_r', color: '#00FF00' },
            { name: 'VNK2_t3_r', text: 'Работа' },
            { name: 'VNK2_t3_r', color: '#00FF00' },
            { name: 'VNK2_t4_r', text: 'Работа' },
            { name: 'VNK2_t4_r', color: '#00FF00' },
            { name: 'Vremya_nagreva', text: '52' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'VNK2_status_2', text: 'Нагрев-Отдел.' },
            { name: '2FI_02', text: '40634' },
            { name: 'kl223_proc', text: '24' },
            { name: '2PI_04', text: '0,66' },
            { name: '2TI_29', text: '35' },
            { name: '223_PV_2', text: '1319,0' },
            { name: '223_KP_2', text: '23,03' },
            { name: '223_PV_1', text: '0,645' },
            { name: '223_KP_1', text: '23,03' },
            // Table
            { name: 'text_132', y: 520 },
            { name: 'text_116', y: 520 },
            { name: 'text_124', y: 520 },
            { name: 'text_113', y: 520 },
            { name: 'text_134', y: 520 },
            { name: 'text_117', y: 520 },
            { name: 'text_111', y: 520 },
            { name: 'text_112', y: 520 },
            { name: 'rect_132', position: { y: 40 } },
            { name: 'rect_116', position: { y: 40 } },
            { name: 'rect_124', position: { y: 40 } },
            { name: 'rect_113', position: { y: 40 } },
            { name: 'rect_134', position: { y: 40 } },
            { name: 'rect_117', position: { y: 40 } },
            { name: 'rect_111', position: { y: 40 } },
            { name: 'rect_112', position: { y: 40 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 169,
    },
    //2
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_232', color: '#7b828c' },
            { name: '2FI_01', text: '54912' },
            { name: '2PI_02', text: '0,16' },
            { name: '2TI_43', text: '47' },
            { name: 'red_back_underArrow', color: '#fff' },
            // 
            { name: 'circle_nagrev', color: '#000' },
            // Table
            { name: 'text_132', y: 565 },
            { name: 'text_116', y: 565 },
            { name: 'text_124', y: 565 },
            { name: 'text_113', y: 565 },
            { name: 'text_134', y: 565 },
            { name: 'text_117', y: 565 },
            { name: 'text_111', y: 565 },
            { name: 'text_112', y: 565 },
            { name: 'rect_132', position: { y: 81 } },
            { name: 'rect_116', position: { y: 81 } },
            { name: 'rect_124', position: { y: 81 } },
            { name: 'rect_113', position: { y: 81 } },
            { name: 'rect_134', position: { y: 81 } },
            { name: 'rect_117', position: { y: 81 } },
            { name: 'rect_111', position: { y: 81 } },
            { name: 'rect_112', position: { y: 81 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 170,
    },
    //3
    {
      action: {
        window2D: {
          elements: [
            // Table
            { name: 'text_132', y: 605 },
            { name: 'text_116', y: 605 },
            { name: 'text_124', y: 605 },
            { name: 'text_113', y: 605 },
            { name: 'text_134', y: 605 },
            { name: 'text_117', y: 605 },
            { name: 'text_111', y: 605 },
            { name: 'text_112', y: 605 },
            { name: 'rect_132', position: { y: 123 } },
            { name: 'rect_116', position: { y: 123 } },
            { name: 'rect_124', position: { y: 123 } },
            { name: 'rect_113', position: { y: 123 } },
            { name: 'rect_134', position: { y: 123 } },
            { name: 'rect_117', position: { y: 123 } },
            { name: 'rect_111', position: { y: 123 } },
            { name: 'rect_112', position: { y: 123 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 171,
    },
    //4
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_216', color: '#ff0000' },
            { name: 'kl_227', color: '#7b828c' },
            // Table
            { name: 'text_132', y: 645 },
            { name: 'text_116', y: 645 },
            { name: 'text_124', y: 645 },
            { name: 'text_113', y: 645 },
            { name: 'text_134', y: 645 },
            { name: 'text_117', y: 645 },
            { name: 'text_111', y: 645 },
            { name: 'text_112', y: 645 },
            { name: 'rect_132', position: { y: 164 } },
            { name: 'rect_116', position: { y: 164 } },
            { name: 'rect_124', position: { y: 164 } },
            { name: 'rect_113', position: { y: 164 } },
            { name: 'rect_134', position: { y: 164 } },
            { name: 'rect_117', position: { y: 164 } },
            { name: 'rect_111', position: { y: 164 } },
            { name: 'rect_112', position: { y: 164 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 172,
    },
    //5
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19,70' },
            { name: '2FI_01', text: '0' },
            { name: '2PI_02', text: '0,06' },
            { name: '2TI_43', text: '47' },
            { name: 'kl215_proc', text: '21' },
            { name: '2PI_04', text: '0,00' },
            { name: '2TI_02', text: '1315' },
            { name: '2TI_03', text: '1301' },
            { name: '2TI_04', text: '1153' },
            // Table
            { name: 'text_132', y: 685 },
            { name: 'text_116', y: 685 },
            { name: 'text_124', y: 685 },
            { name: 'text_113', y: 685 },
            { name: 'text_134', y: 685 },
            { name: 'text_117', y: 685 },
            { name: 'text_111', y: 685 },
            { name: 'text_112', y: 685 },
            { name: 'rect_132', position: { y: 205 } },
            { name: 'rect_116', position: { y: 205 } },
            { name: 'rect_124', position: { y: 205 } },
            { name: 'rect_113', position: { y: 205 } },
            { name: 'rect_134', position: { y: 205 } },
            { name: 'rect_117', position: { y: 205 } },
            { name: 'rect_111', position: { y: 205 } },
            { name: 'rect_112', position: { y: 205 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 173,
    },
    //6
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_227', color: '#00FF00' },
            { name: 'rect_216_2', color: '#000' },
            { name: 'rect_216_2', position: { x: -3 } },
            { name: 'b_rect_216', position: { x: -3 } },
            { name: '7PI_13', text: '19,60' },
            { name: '2PI_02', text: '0,04' },
            { name: '2TI_43', text: '17' },
            { name: '2TI_02', text: '1312' },
            { name: '2TI_03', text: '1297' },
            { name: '2TI_04', text: '1133' },
            // Table
            { name: 'text_132', y: 725 },
            { name: 'text_116', y: 725 },
            { name: 'text_124', y: 725 },
            { name: 'text_113', y: 725 },
            { name: 'text_134', y: 725 },
            { name: 'text_117', y: 725 },
            { name: 'text_111', y: 725 },
            { name: 'text_112', y: 725 },
            { name: 'rect_132', position: { y: 245 } },
            { name: 'rect_116', position: { y: 245 } },
            { name: 'rect_124', position: { y: 245 } },
            { name: 'rect_113', position: { y: 245 } },
            { name: 'rect_134', position: { y: 245 } },
            { name: 'rect_117', position: { y: 245 } },
            { name: 'rect_111', position: { y: 245 } },
            { name: 'rect_112', position: { y: 245 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 174,
    },
    //7
    {
      action: {
        window2D: {
          elements: [
            { name: '2FI_03', text: '1339' },
            { name: 'kl_224', color: '#7b828c' },
            // Table
            { name: 'text_132', y: 765 },
            { name: 'text_116', y: 765 },
            { name: 'text_124', y: 765 },
            { name: 'text_113', y: 765 },
            { name: 'text_134', y: 765 },
            { name: 'text_117', y: 765 },
            { name: 'text_111', y: 765 },
            { name: 'text_112', y: 765 },
            { name: 'rect_132', position: { y: 286 } },
            { name: 'rect_116', position: { y: 286 } },
            { name: 'rect_124', position: { y: 286 } },
            { name: 'rect_113', position: { y: 286 } },
            { name: 'rect_134', position: { y: 286 } },
            { name: 'rect_117', position: { y: 286 } },
            { name: 'rect_111', position: { y: 286 } },
            { name: 'rect_112', position: { y: 286 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 175,
    },
    //8
    {
      action: {
        window2D: {
          elements: [
            { name: '2FI_03', text: '1468' },
            { name: 'kl_224', color: '#00FF00' },
            { name: '7PI_13', text: '19,48' },
            { name: '2TI_29', text: '27' },
            { name: '2PI_04', text: '0,00' },
            { name: '2TI_28_1', text: '238' },
            { name: '2TI_28_2', text: '240' },
            // Table
            { name: 'text_132', y: 805 },
            { name: 'text_116', y: 805 },
            { name: 'text_124', y: 805 },
            { name: 'text_113', y: 805 },
            { name: 'text_134', y: 805 },
            { name: 'text_117', y: 805 },
            { name: 'text_111', y: 805 },
            { name: 'text_112', y: 805 },
            { name: 'rect_132', position: { y: 327 } },
            { name: 'rect_116', position: { y: 327 } },
            { name: 'rect_124', position: { y: 327 } },
            { name: 'rect_113', position: { y: 327 } },
            { name: 'rect_134', position: { y: 327 } },
            { name: 'rect_117', position: { y: 327 } },
            { name: 'rect_111', position: { y: 327 } },
            { name: 'rect_112', position: { y: 327 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 176,
    },
    //9
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_224', color: '#7b828c' },
            { name: '2QI_01', text: '19,85' },
            // Table
            { name: 'text_132', y: 845 },
            { name: 'text_116', y: 845 },
            { name: 'text_124', y: 845 },
            { name: 'text_113', y: 845 },
            { name: 'text_134', y: 845 },
            { name: 'text_117', y: 845 },
            { name: 'text_111', y: 845 },
            { name: 'text_112', y: 845 },
            { name: 'rect_132', position: { y: 368 } },
            { name: 'rect_116', position: { y: 368 } },
            { name: 'rect_124', position: { y: 368 } },
            { name: 'rect_113', position: { y: 368 } },
            { name: 'rect_134', position: { y: 368 } },
            { name: 'rect_117', position: { y: 368 } },
            { name: 'rect_111', position: { y: 368 } },
            { name: 'rect_112', position: { y: 368 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 177,
    },
    //10
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_224', color: '#ff0000' },
            { name: '2FI_03', text: '0' },
            { name: '2PI_02', text: '0,10' },
            { name: '2TI_43', text: '47' },
            { name: 'kl_213', color: '#7b828c' },
            { name: 'kl_221', color: '#7b828c' },
            { name: '2QI_01', text: '19,43' },
            // Table
            { name: 'text_132', y: 885 },
            { name: 'text_116', y: 885 },
            { name: 'text_124', y: 885 },
            { name: 'text_113', y: 885 },
            { name: 'text_134', y: 885 },
            { name: 'text_117', y: 885 },
            { name: 'text_111', y: 885 },
            { name: 'text_112', y: 885 },
            { name: 'rect_132', position: { y: 409 } },
            { name: 'rect_116', position: { y: 409 } },
            { name: 'rect_124', position: { y: 409 } },
            { name: 'rect_113', position: { y: 409 } },
            { name: 'rect_134', position: { y: 409 } },
            { name: 'rect_117', position: { y: 409 } },
            { name: 'rect_111', position: { y: 409 } },
            { name: 'rect_112', position: { y: 409 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 178,
    },
    //11
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_213', color: '#00FF00' },
            { name: 'kl_221', color: '#00FF00' },
            { name: '7PI_13', text: '16,69' },
            { name: '2QI_01', text: '19,47' },
            // Table
            { name: 'text_132', y: 925 },
            { name: 'text_116', y: 925 },
            { name: 'text_124', y: 925 },
            { name: 'text_113', y: 925 },
            { name: 'text_134', y: 925 },
            { name: 'text_117', y: 925 },
            { name: 'text_111', y: 925 },
            { name: 'text_112', y: 925 },
            { name: 'rect_132', position: { y: 450 } },
            { name: 'rect_116', position: { y: 450 } },
            { name: 'rect_124', position: { y: 450 } },
            { name: 'rect_113', position: { y: 450 } },
            { name: 'rect_134', position: { y: 450 } },
            { name: 'rect_117', position: { y: 450 } },
            { name: 'rect_111', position: { y: 450 } },
            { name: 'rect_112', position: { y: 450 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 179,
    },
    //12
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_234', color: '#7b828c' },
            { name: '2QI_01', text: '15,36' },
            // Table
            { name: 'text_132', y: 965 },
            { name: 'text_116', y: 965 },
            { name: 'text_124', y: 965 },
            { name: 'text_113', y: 965 },
            { name: 'text_134', y: 965 },
            { name: 'text_117', y: 965 },
            { name: 'text_111', y: 965 },
            { name: 'text_112', y: 965 },
            { name: 'rect_132', position: { y: 491 } },
            { name: 'rect_116', position: { y: 491 } },
            { name: 'rect_124', position: { y: 491 } },
            { name: 'rect_113', position: { y: 491 } },
            { name: 'rect_134', position: { y: 491 } },
            { name: 'rect_117', position: { y: 491 } },
            { name: 'rect_111', position: { y: 491 } },
            { name: 'rect_112', position: { y: 491 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 180,
    },
    //13
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_234', color: '#ff0000' },
            { name: 'kl_240', color: '#7b828c' },
            { name: '7PI_13', text: '19,65' },
            { name: '7PI_13', text: '19,65' },
            { name: '2TI_02', text: '1264' },
            { name: '2TI_03', text: '1214' },
            { name: '2TI_04', text: '1052' },
            { name: '2TI_28_1', text: '231' },
            { name: '2TI_28_2', text: '233' },
            { name: '2QI_01', text: '15,58' },
            // Table
            { name: 'text_132', y: 1008 },
            { name: 'text_116', y: 1008 },
            { name: 'text_124', y: 1008 },
            { name: 'text_113', y: 1008 },
            { name: 'text_134', y: 1008 },
            { name: 'text_117', y: 1008 },
            { name: 'text_111', y: 1008 },
            { name: 'text_112', y: 1008 },
            { name: 'rect_132', position: { y: 531 } },
            { name: 'rect_116', position: { y: 531 } },
            { name: 'rect_124', position: { y: 531 } },
            { name: 'rect_113', position: { y: 531 } },
            { name: 'rect_134', position: { y: 531 } },
            { name: 'rect_117', position: { y: 531 } },
            { name: 'rect_111', position: { y: 531 } },
            { name: 'rect_112', position: { y: 531 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 181,
    },
    //14
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_240', color: '#00FF00' },
            { name: 'kl_212', color: '#7b828c' },
            { name: '2QI_01', text: '15,61' },
            // Table
            { name: 'text_132', y: 1048 },
            { name: 'text_116', y: 1048 },
            { name: 'text_124', y: 1048 },
            { name: 'text_113', y: 1048 },
            { name: 'text_134', y: 1048 },
            { name: 'text_117', y: 1048 },
            { name: 'text_111', y: 1048 },
            { name: 'text_112', y: 1048 },
            { name: 'rect_132', position: { y: 572 } },
            { name: 'rect_116', position: { y: 572 } },
            { name: 'rect_124', position: { y: 572 } },
            { name: 'rect_113', position: { y: 572 } },
            { name: 'rect_134', position: { y: 572 } },
            { name: 'rect_117', position: { y: 572 } },
            { name: 'rect_111', position: { y: 572 } },
            { name: 'rect_112', position: { y: 572 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 182,
    },
    //15          
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_212', color: '#ff0000' },
            { name: '2QI_01', text: '15,65' },
            { name: '115_SPW', text: '430,0' },
            { name: '115_SPT', text: '108,0' },
            { name: '115_KP_2', text: '230,1' },
            { name: '115_GAZ', text: '80000' },
            { name: '115_PV', text: '0' },
            { name: '115_SP', text: '80000' },
            { name: '115_KP_1', text: '21,66' },
            { name: '123_PV_2', text: '1244,8' },
            { name: '123_SP_2', text: '1200,0' },
            { name: '123_KP_2', text: '22,00' },
            { name: '123_GAZ', text: '0,00' },
            { name: '123_PV_1', text: '1,0000' },
            { name: '123_SP_1', text: '1,000' },
            { name: '123_KP_1', text: '22,00' },
            { name: '1FI_02', text: '0' },
            { name: '1QI_01', text: '15,65' },
            { name: '1TI_28_1', text: '228' },
            { name: '1TI_28_2', text: '231' },
            { name: '1PI_04', text: '0,00' },
            { name: '1TI_29', text: '28' },
            { name: 'text_132', y: 1090 },
            { name: 'text_116', y: 1090 },
            { name: 'text_124', y: 1090 },
            { name: 'text_113', y: 1090 },
            { name: 'text_134', y: 1090 },
            { name: 'text_117', y: 1090 },
            { name: 'text_111', y: 1090 },
            { name: 'text_112', y: 1090 },
            { name: 'rect_132', position: { y: 613 } },
            { name: 'rect_116', position: { y: 613 } },
            { name: 'rect_124', position: { y: 613 } },
            { name: 'rect_113', position: { y: 613 } },
            { name: 'rect_134', position: { y: 613 } },
            { name: 'rect_117', position: { y: 613 } },
            { name: 'rect_111', position: { y: 613 } },
            { name: 'rect_112', position: { y: 613 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 183,
    },
    //16
    {
      action: {
        window2D: {
          elements: [
            { name: 'nagrev_otd_2_rect', color: '#fff' },
            // Table
            { name: 'text_132', y: 475 },
            { name: 'text_116', y: 475 },
            { name: 'text_124', y: 475 },
            { name: 'text_113', y: 475 },
            { name: 'text_134', y: 475 },
            { name: 'text_117', y: 475 },
            { name: 'text_111', y: 475 },
            { name: 'text_112', y: 475 },
            { name: 'rect_132', position: { y: 0 } },
            { name: 'rect_116', position: { y: 0 } },
            { name: 'rect_124', position: { y: 0 } },
            { name: 'rect_113', position: { y: 0 } },
            { name: 'rect_134', position: { y: 0 } },
            { name: 'rect_117', position: { y: 0 } },
            { name: 'rect_111', position: { y: 0 } },
            { name: 'rect_112', position: { y: 0 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 184,
    },
    // Ilay F vnk2 + main
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '8,75' },
            { name: 'ramka_7PI_13', color: '#ffff0f' },
            { name: '2FI_03', text: '0' },
            { name: '2FI_01', text: '0' },
            { name: '215_SPW', text: '433,0' },
            { name: '215_SPT', text: '108,0' },
            { name: '215_KP_2', text: '229,9' },
            { name: '215_GAZ', text: '800000' },
            { name: 'V2_t1_5', text: 'Соглас', color: '#000' },
            { name: '223_PV_2', text: '1242,7' },
            { name: '223_SP_2', text: '1200,0' },
            { name: '223_KP_2', text: '22,00' },
            { name: '223_GAZ', text: '0,00' },
            { name: 'V2_t2_4', text: 'Соглас', color: '#000' },
            { name: '2FI_02', text: '0' },
            { name: '215_PV', text: '0' },
            { name: '215_SP', text: '90000' },
            { name: '215_KP_1', text: '22,87' },
            { name: 'V2_t3_4', text: 'Соглас', color: '#000' },
            // { name: '223_PV_1', text: '1,000' },
            // { name: '223_SP_1', text: '1,000' },
            { name: '223_KP_1', text: '22,00' },
            { name: 'V2_t4_4', text: 'Соглас', color: '#000' },
            { name: '2PI_02', text: '0,00' },
            { name: 'Kl215_proc', text: '21' },
            { name: '2PI_04', text: '0,00' },
            { name: 'Kl223_proc', text: '21' },
            { name: '2QI_01', text: '15,65' },
            { name: '2TI_43', text: '48' },
            { name: '2TI_29', text: '28' },
            { name: 'dym_vybor_signala_2', text: '230' },
            { name: '2TI_28_1', text: '229' },
            { name: '2TI_28_2', text: '231' },
            { name: 'vnk2_fire', opacity: '0' }, // стрелка
            { name: 'vnk2_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_2', color: '#fff' }, // задник стрелки
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_2', text: 'Нагрев-Отдел.' },
            { name: 'vnk2_stripes', color: '#fff' },
            { name: 'Vremya_nagreva', text: '52' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: '2PI_01', text: '0' },
            { name: '2TI_02', text: '1343' },
            { name: '2TI_03', text: '1188' },
            { name: '2TI_04', text: '1080' },
            { name: '2TI_05', text: '-999' },
            { name: 'vybor_signala', text: '1343' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            //VN
            { name: 'rect_232_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_232', color: '#ff0000' },
            { name: 'kl_227', color: '#00FF00' },
            { name: 'rect_216_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_216', color: '#ff0000' },
            { name: '2PS_03', color: '#ff0000' },
            { name: 'kl_221', color: '#ff0000' },
            { name: 'kl_213', color: '#ff0000' },
            { name: 'PS_10', color: '#00FF00' },
            { name: 'kl_224', color: '#ff0000' },
            { name: 'kl_234', color: '#ff0000' },
            { name: '2PS_05', color: '#ff0000' },
            { name: 'kl_240', color: '#00FF00' },
            { name: 'kl_217', color: '#ff0000' },
            { name: 'kl_219', color: '#ff0000' },
            { name: 'kl_211', color: '#ff0000' },
            { name: 'kl_212', color: '#00FF00' },
            { name: 'kl_212', color: '#ff0000' },
            { name: 'kl_236a', color: '#ff0000' },
            { name: 'kl_218a', color: '#ff0000' },
            { name: 'kl_218', color: '#ff0000' },
            // main
            { name: '7TI_41', text: '39' },
            { name: '7PI_12', text: '20,06' },
            { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '0' },
            { name: '7TI_40', text: '12' },
            { name: '7PI_11', text: '0,00' },
            { name: '7FI_04', text: '0' },
            { name: '5QI_01_01', text: '10' },
            { name: '5QI_01_02', text: '77' },
            //{ name: 'PV2', text: '' },
            // { name: 'SP2',    text: '9,00' },
            // { name: 'PV2_1',  text: '23,00' },
            { name: 'M_t1_4', text: 'Работа', color: '#00FF00' },
            // { name: 'PV3',    text: '0,00' },
            // { name: 'SP3',    text: '0,00' },
            // { name: 'PV3_1',  text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            // { name: 'PV4',    text: '11,07' },
            // { name: 'SP4',    text: '10,00' },
            // { name: 'PV4_1',  text: '11,64' },
            { name: 'M_t3_4', text: 'Работа', color: '#00FF00' },
            { name: 'kl053_proc', text: '16' },
            { name: 'kl051_proc', text: '0' },
            { name: 'kl052_proc', text: '0' },
            { name: 'kl035_proc', text: '0' },
            { name: 'klOF3_proc', text: '11' },
            { name: 'klOF2_proc', text: '10' },
            { name: 'klOF1_proc', text: '0' },
            // { name: 'kl0333_proc', text: '100' },
            // { name: 'kl0313_proc', text: '100' },
            // { name: 'kl0332_proc', text: '100' },
            // { name: 'kl0312_proc', text: '100' },
            // { name: 'kl0331_proc', text: '0' },
            // { name: 'kl0311_proc', text: '100' },
            { name: '7QI_01', text: '-999,00' },
            // { name: 'kl038_proc',   text: '0' },
            // { name: 'kl028_proc',   text: '0' },
            // { name: 'kl020_proc',   text: '100' },
            // { name: 'kl036v_proc',  text: '0' },
            // { name: 'kl036b_proc',  text: '0' },
            // { name: 'kl048_proc', text: '0' },
            // { name: 'kl029_proc', text: '100' },
            // { name: 'kl004_proc', text: '100' },
            { name: 'PI_16_proc', text: '6,12' },
            { name: '9TI_44_proc', text: '28' },
            // { name: 'kl037_proc', text: '0' },
            // { name: 'kl007_proc', text: '0' },
            // { name: 'kl025_proc', text: '100' },
            // { name: '8QI_05_01',  text: '6,92' },
            { name: '8QI_05_02', text: '36,08' },
            { name: '8QI_05_04', text: '0,00' },
            { name: '7PI_13', text: '22,03' },
            { name: 'ramka_7PI_13', color: '#ffff0f' },
            { name: '7PI_42', text: '48' },
            // { name: 'PV1',    text: '1200,00' },
            // { name: 'SP1',    text: '1230,00' },
            // { name: 'PV1_1',  text: '23,33' },
            { name: 'M_t4_4', text: 'Работа', color: '#00FF00' },
            // { name: 'vybor_signala',  text: '1210' },
            // { name: '5TI_21',         text: '1201' },
            // { name: '5TI_22',         text: '1210' },
            // { name: 'PI_09',          text: '536б65' },
          ]
        }
      },
      startTime: timeDiff + 184.01,
    },
    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 184.1,
      human: true,
    },
    // {  // O_p_n_na_k_p_na_VNK CLOSE
    //   action: {
    //     target2D: 'perekidta_exit_btn',
    //   },
    // startTime: timeDiff + 184.2,
    //   human: true,
    // },
    // {
    //   action: {
    //     target2D: 'perekidta2_btn',
    //     window2D: {
    //       elements: [
    //         { name: 'avarin_otd_rect', color: '#e6e6e6', stroke: '#808080' },
    //         { name: 'otdel_nagrev', color: '#fff', stroke: '#000' },
    //         { name: 'nagrev_otd_2_rect', color: '#e6e6e6', stroke: '#808080' },
    //         { name: 'otdel_dute', color: '#fff', stroke: '#000' },            // color: '#e6e6e6', stroke: '#808080'
    //         { name: 'dute_otdel', color: '#e6e6e6', stroke: '#808080' },
    //         { name: 'otdel_otdel2', color: '#e6e6e6', stroke: '#808080' },
    //         { name: 'otd2_otd_rect', color: '#fff', stroke: '#000' },
    //       ]
    //     }
    //   },
    // startTime: timeDiff + 184.3,
    //   human: true,
    // },
    {
      action: {
        target2D: 'otdel2_otdel_btn',
        window2D: {
          elements: [
            { name: 'Title_window_otdel2_otdel', text: 'ВН2 Перекидка из Отделения2 в Отделение' },
            { name: 'text_otdel2_110', text: '210' },
            { name: 'text_otdel2_111', text: '211' },
            { name: 'text_otdel2_112', text: '212' },
            { name: 'text_ish_c4', y: 237.5 },
            { name: 'text_ish_c5', y: 237.5 },
            { name: 'text_ish_c6', y: 237.5 },
            { name: 'rect_ish_c4', position: { y: 0 } },
            { name: 'rect_ish_c5', position: { y: 0 } },
            { name: 'rect_ish_c6', position: { y: 0 } },
          ]
        }
      },
      startTime: timeDiff + 184.4,
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
      startTime: timeDiff + 184.5,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'otd2_otd_rect', color: '#00FF00' },
            { name: 'text_ish_c4', y: 297.5 },   // start 237.5
            { name: 'text_ish_c5', y: 297.5 },   // start 237.5
            { name: 'text_ish_c6', y: 297.5 },   // start 237.5
            { name: 'rect_ish_c4', position: { y: 60 } },
            { name: 'rect_ish_c5', position: { y: 60 } },
            { name: 'rect_ish_c6', position: { y: 60 } },
          ]
        }
      },
      startTime: timeDiff + 184.6,
      human: true,
    },
    {
      action: {
        target2D: 'otdel2_close_btn',
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 184.7,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'red_Arrow', opacity: '0' },
            { name: 'red_back_underArrow', color: '#fff' },
          ]
        }
      },
      startTime: timeDiff + 185,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'nagrev_otd_2_rect', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 186,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'avarin_otd_rect', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 187,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#7b828c' },
            { name: '2QI_01', text: '15,41' },
          ]
        },
      },
      startTime: timeDiff + 187.1,
    },
    // TODO time esli cho
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#ff0000' },
            { name: '2QI_01', text: '15,40' },
            { name: '7PI_13', text: '20,19' },
            { name: '2TI_43', text: '48' },
            { name: '2TI_02', text: '1226' },
            { name: '2TI_03', text: '1185' },
            { name: '2TI_04', text: '1102' },
          ]
        }
      },
      startTime: timeDiff + 187.2,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#7b828c' },
            { name: '2QI_01', text: '15,39' },
          ]
        }
      },
      startTime: timeDiff + 187.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 187.4,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#00FF00' },
            { name: 'red_back_underArrow', color: '#99A0AA' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_1', text: 'Отделение' },
            { name: '2QI_01', text: '15,36' },
          ]
        }
      },
      startTime: timeDiff + 187.6,
    },
    // Ilay F vnk2 + main + svpg
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '8,75' },
            { name: 'ramka_7PI_13', color: '#ffff0f' },
            { name: '2FI_03', text: '0' },
            { name: '2FI_01', text: '0' },
            { name: '215_SPW', text: '433,0' },
            { name: '215_SPT', text: '108,0' },
            { name: '215_KP_2', text: '229,9' },
            { name: '215_GAZ', text: '800000' },
            { name: 'V2_t1_5', text: 'Соглас', color: '#000' },
            { name: '223_PV_2', text: '1242,7' },
            { name: '223_SP_2', text: '1200,0' },
            { name: '223_KP_2', text: '22,00' },
            { name: '223_GAZ', text: '0,00' },
            { name: 'V2_t2_4', text: 'Соглас', color: '#000' },
            { name: '2FI_02', text: '0' },
            { name: '215_PV', text: '0' },
            { name: '215_SP', text: '90000' },
            { name: '215_KP_1', text: '22,87' },
            { name: 'V2_t3_4', text: 'Соглас', color: '#000' },
            // { name: '223_PV_1', text: '1,000' },
            // { name: '223_SP_1', text: '1,000' },
            { name: '223_KP_1', text: '22,00' },
            { name: 'V2_t4_4', text: 'Соглас', color: '#000' },
            { name: '2PI_02', text: '0,00' },
            { name: 'Kl215_proc', text: '21' },
            { name: '2PI_04', text: '0,00' },
            { name: 'Kl223_proc', text: '21' },
            { name: '2QI_01', text: '15,65' },
            { name: '2TI_43', text: '48' },
            { name: '2TI_29', text: '28' },
            { name: 'dym_vybor_signala_2', text: '230' },
            { name: '2TI_28_1', text: '229' },
            { name: '2TI_28_2', text: '231' },
            { name: 'vnk2_fire', opacity: '0' }, // стрелка
            { name: 'vnk2_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_2', color: '#fff' }, // задник стрелки
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_2', text: 'Нагрев-Отдел.' },
            { name: 'vnk2_stripes', color: '#fff' },
            { name: 'Vremya_nagreva', text: '52' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: '2PI_01', text: '0' },
            { name: '2TI_02', text: '1343' },
            { name: '2TI_03', text: '1188' },
            { name: '2TI_04', text: '1080' },
            { name: '2TI_05', text: '-999' },
            { name: 'vybor_signala', text: '1343' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            //VN
            { name: 'rect_232_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_232', color: '#ff0000' },
            { name: 'kl_227', color: '#00FF00' },
            { name: 'rect_216_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_216', color: '#ff0000' },
            { name: '2PS_03', color: '#ff0000' },
            { name: 'kl_221', color: '#ff0000' },
            { name: 'kl_213', color: '#ff0000' },
            { name: 'PS_10', color: '#00FF00' },
            { name: 'kl_224', color: '#ff0000' },
            { name: 'kl_234', color: '#ff0000' },
            { name: '2PS_05', color: '#ff0000' },
            { name: 'kl_240', color: '#00FF00' },
            { name: 'kl_217', color: '#ff0000' },
            { name: 'kl_219', color: '#ff0000' },
            { name: 'kl_211', color: '#ff0000' },
            { name: 'kl_212', color: '#00FF00' },
            { name: 'kl_212', color: '#ff0000' },
            { name: 'kl_236a', color: '#ff0000' },
            { name: 'kl_218a', color: '#ff0000' },
            { name: 'kl_218', color: '#ff0000' },
            // main
            { name: '7TI_41', text: '39' },
            { name: '7PI_12', text: '20,06' },
            { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '0' },
            { name: '7TI_40', text: '12' },
            { name: '7PI_11', text: '0,00' },
            { name: '7FI_04', text: '0' },
            { name: '5QI_01_01', text: '10' },
            { name: '5QI_01_02', text: '77' },
            //{ name: 'PV2', text: '' },
            // { name: 'SP2',    text: '9,00' },
            // { name: 'PV2_1',  text: '23,00' },
            { name: 'M_t1_4', text: 'Работа', color: '#00FF00' },
            // { name: 'PV3',    text: '0,00' },
            // { name: 'SP3',    text: '0,00' },
            // { name: 'PV3_1',  text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            // { name: 'PV4',    text: '11,07' },
            // { name: 'SP4',    text: '10,00' },
            // { name: 'PV4_1',  text: '11,64' },
            { name: 'M_t3_4', text: 'Работа', color: '#00FF00' },
            { name: 'kl053_proc', text: '16' },
            { name: 'kl051_proc', text: '0' },
            { name: 'kl052_proc', text: '0' },
            { name: 'kl035_proc', text: '0' },
            { name: 'klOF3_proc', text: '11' },
            { name: 'klOF2_proc', text: '10' },
            { name: 'klOF1_proc', text: '0' },
            // { name: 'kl0333_proc', text: '100' },
            // { name: 'kl0313_proc', text: '100' },
            // { name: 'kl0332_proc', text: '100' },
            // { name: 'kl0312_proc', text: '100' },
            // { name: 'kl0331_proc', text: '0' },
            // { name: 'kl0311_proc', text: '100' },
            { name: '7QI_01', text: '-999,00' },
            // { name: 'kl038_proc',   text: '0' },
            // { name: 'kl028_proc',   text: '0' },
            // { name: 'kl020_proc',   text: '100' },
            // { name: 'kl036v_proc',  text: '0' },
            // { name: 'kl036b_proc',  text: '0' },
            // { name: 'kl048_proc', text: '0' },
            // { name: 'kl029_proc', text: '100' },
            // { name: 'kl004_proc', text: '100' },
            { name: 'PI_16_proc', text: '6,12' },
            { name: '9TI_44_proc', text: '28' },
            // { name: 'kl037_proc', text: '0' },
            // { name: 'kl007_proc', text: '0' },
            // { name: 'kl025_proc', text: '100' },
            // { name: '8QI_05_01',  text: '6,92' },
            { name: '8QI_05_02', text: '36,08' },
            { name: '8QI_05_04', text: '0,00' },
            { name: '7PI_13', text: '22,03' },
            { name: 'ramka_7PI_13', color: '#ffff0f' },
            { name: '7PI_42', text: '48' },
            // { name: 'PV1',    text: '1200,00' },
            // { name: 'SP1',    text: '1230,00' },
            // { name: 'PV1_1',  text: '23,33' },
            { name: 'M_t4_4', text: 'Работа', color: '#00FF00' },
            // { name: 'vybor_signala',  text: '1210' },
            // { name: '5TI_21',         text: '1201' },
            // { name: '5TI_22',         text: '1210' },
            // { name: 'PI_09',          text: '536б65' },
            // vnk_spvg 
            { name: '6TI_39_1', text: '40' },
            { name: '6TI_39_2', text: '32' },
            { name: '6TI_39_3', text: '58' },
            { name: '6TI_39_4', text: '57' },
            { name: '6TI_39_5', text: '58' },
            { name: '6TI_39_6', text: '55' },
            { name: '6TI_39_7', text: '62' },
            { name: '6TI_39_8', text: '54' },
            { name: '6TI_39_9', text: '32' },
            { name: '6TI_39_10', text: '36' },
            { name: '6TI_38_1', text: '37' },
            { name: '6TI_38_2', text: '43' },
            { name: '6TI_38_3', text: '66' },
            { name: '6TI_38_4', text: '63' },
            { name: '6TI_38_5', text: '68' },
            { name: '6TI_38_6', text: '66' },
            { name: '6TI_38_7', text: '68' },
            { name: '6TI_38_8', text: '64' },
            { name: '6TI_38_9', text: '33' },
            { name: '6TI_38_10', text: '41' },
            { name: '6TI_37_1', text: '12' },
            { name: '6TI_37_2', text: '13' },
            { name: '6TI_37_3', text: '14' },
            { name: '6TI_37_4', text: '15' },
            { name: '6TI_37_5', text: '15' },
            { name: '6TI_37_6', text: '13' },
            { name: '6TI_37_7', text: '14' },
            { name: '6TI_37_8', text: '15' },
            { name: '6TI_37_9', text: '13' },
            { name: '6TI_37_10', text: '14' },
            { name: 'klO35_proc', text: '0' },
            //table1
            //table1
            //table1
            { name: 'spvg_t1_4', text: 'Работа', color: '#00FF00' },
            { name: 'vnk_spvg_B3_1', color: '#00FF00' },
            { name: 'vnk_spvg_B2_1', color: '#00FF00' },
            { name: 'vnk_spvg_B1_1', color: '#808080' },
            { name: '6VI_3_1', text: '1,12' },
            { name: '6VI_3_2', text: '2,33' },
            { name: '6VI_3_3', text: '1,43' },
            { name: '6VI_3_4', text: '1,78' },
            { name: '6VI_2_1', text: '1,80' },
            { name: '6VI_2_2', text: '2,14' },
            { name: '6VI_2_3', text: '1,33' },
            { name: '6VI_2_4', text: '2,63' },
            { name: 'klOF3_proc', text: '38' },
            { name: '6TI_31_3', text: '12' },
            // { name: '8QI_05_1', text: '' },
            { name: '8QI_05_2', text: '85,57' },
            { name: '8QI_05_4', text: '0,00' },
            { name: '6VI_1_1', text: '0,04' },
            { name: '6VI_1_2', text: '0,15' },
            { name: '6VI_1_3', text: '0,22' },
            { name: '6VI_1_4', text: '0,16' },
            { name: 'klOF2_proc', text: '0' },
            { name: '6TI_31_2', text: '12' },
            { name: 'klOF1_proc', text: '0' },
            { name: '6TI_31_1', text: '12' },
            { name: '9TI_41', text: '40' },
            { name: '9TI_34', text: '127' },
            { name: '9TI_35', text: '65' },
            { name: '9TI_30', text: '28' },
            { name: '9TI_44', text: '28' },
            { name: '9TI_42', text: '41' },
            { name: '9TI_32', text: '138' },
            { name: '9TI_42', text: '44' },
            // { name: '9TI_33', text: '' },
            // { name: '9TI_16', text: '' },
          ]
        },
      },
      startTime: timeDiff + 188.5,
    },
    ///--------------------------------//26//-new//todo?
    ///5. Вернуться на общую схему ВНК. Нажать на вкладку «Общая схема». Показать измененные значения, как на видео.
    {
      text: 'ВНК №1, ВНК №2 отделены, а ВНК №3 на дутье.',
      sender: 'Система',
      audio: 'tts-17',
      startTime: timeDiff + 189,
    },
    {
      lifeTime: '08:45:00',
      startTime: timeDiff + 192,
    },
    ///--------------------------------//27//-new
    // 1.4 сценарий
    {
      scenarioText: 'Дать команду дежурному водопроводчику на закрытие природного газа на печь задвижками на подводе газа к фурмам.',
      sender: 'Система',
      audio: 'tts-18',
      startTime: timeDiff + 196,
    },
    ////--------------------------------1---------------------------------------- РАЦИЯ //28//-new
    {
      scenarioText: 'Сообщить по рации дежурному водопроводчику.',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 204,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 204.1,
      human: true,
    },
    {
      text: 'Закрыть природный газ на фурмах.',
      sender: 'Газовщик',
      audio: 'tts-vo4',
      startTime: timeDiff + 205,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 208.1,
    },
    {
      text: 'Понял, приступаю.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo5',
      startTime: timeDiff + 209,
    },
    // ilay 3d - s
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    },
    {
      action: {
        target3D: 'Rectangle113',
        material: 'off',
      },
      startTime: timeDiff + 211.53,
    },
    {
      action: {
        target3D: 'Rectangle112',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 211.53,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle060',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    },
    // {
    //   action: {
    //     target3D: 'Rectangle080', 
    //     material: 'ButtonLightOn',
    //   },
    // startTime: timeDiff + 211.53,
    // },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle084',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle055',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle063',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle114',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle044',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    },
    {
      action: {
        target3D: 'Rectangle039',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle041',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle029',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle031',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle049',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle051',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle034',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle036',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    }, {
      action: {
        target3D: 'Rectangle096',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.53,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '01.94'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '002.5'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '037.8'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0080'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '009.9'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '023.1'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '015.0'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0104'
      },
      startTime: timeDiff + 211.54,
    }, {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.05'
      },
      startTime: timeDiff + 211.54,
    },
    {
      action: {
        target3D: 'Handle_013',
        rotation: { y: 0.785398 }
      },
      startTime: timeDiff + 211.55,
    }, {
      action: {
        target3D: 'Handle_014',
        rotation: { y: 0.785398 }
      },
      startTime: timeDiff + 211.55,
    },
    ///------ ep2
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.904'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.182'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.541'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.200'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5711.'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.516'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.10'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.10'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 211.56,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0154.'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0168.'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0163.'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '07.94'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1109.'
      },
      startTime: timeDiff + 211.56,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.13'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.60'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.281'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.3'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.17'
      },
      startTime: timeDiff + 211.56,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.303'
      },
      startTime: timeDiff + 211.56,
    },
    {
      action: {
        target3D: 'fPrirodGazReg', // l
        color: 'red',
        number: '028.5'
      },
      startTime: timeDiff + 211.57,
    }, {
      action: {
        target3D: 'fParaUvlajDutReg', // r
        color: 'red',
        number: '000.8'
      },
      startTime: timeDiff + 211.57,
    },
    ///----
    {
      action: {
        target3D: 'Lamp_Red_007',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 211.58,
    }, {
      action: {
        target3D: 'Lamp_Red_006',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 211.58,
    }, {
      action: {
        target3D: 'Lamp_Red_005',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 211.58,
    }, {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Red_Lamp_Off',
      },
      startTime: timeDiff + 211.58,
    }, {
      action: {
        target3D: 'Lamp_Green_023',
        material: 'Green_Lamp_On',
      },
      startTime: timeDiff + 211.58,
    },
    {
      action: {
        target3D: 'Lamp_Red_008',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 211.58,
    }, {
      action: {
        target3D: 'Lamp_Red_003',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 211.58,
    }, {
      action: {
        target3D: 'Lamp_Red_002',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 211.58,
    }, {
      action: {
        target3D: 'Lamp_Red_009',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 211.58,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle045',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle044',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle082',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle081',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle080',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 211.59,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 211.59,
    },
    ////--------------------------------2----------------------------------------//29//-new
    {
      scenarioText: 'Перевести клапан 721 в режим управления «Дист.»',
      sender: 'Система',
      audio: 'tts-19',
      startTime: timeDiff + 215,
    },
    {
      action: {
        target3D: 'Handle_018',
        rotation: { y: 1.571 },
      },
      duration: 0.15,
      startTime: timeDiff + 216,
      human: true,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.805'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.202'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.601'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.243'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5748.'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.451'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.17'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.27'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 216.1,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0155.'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0163.'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0164.'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.90'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1209.'
      },
      startTime: timeDiff + 216.1,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.60'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.293'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.2'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.17'
      },
      startTime: timeDiff + 216.1,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.285'
      },
      startTime: timeDiff + 216.1,
    },
    ////--------------------------------3----------------------------------------//30//-new
    {
      audio: 'tts-20',
      scenarioText: 'Перевести тумблер из положения «Авт.4» в положение «Дист.3» на маркировке «Атмосферные клапана» «Клапан 1», «Клапан 2» и «Клапан 3» поочерёдно.',
      sender: 'Система',
      startTime: timeDiff + 217,
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
      startTime: timeDiff + 225,
      human: true,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.823'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.203'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.565'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.209'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5677.'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.432'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.20'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.29'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 225.1,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0156.'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0163.'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0165.'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.94'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1210.'
      },
      startTime: timeDiff + 225.1,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.60'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.294'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.2'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.16'
      },
      startTime: timeDiff + 225.1,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.280'
      },
      startTime: timeDiff + 225.1,
    },
    ////--------------------------------4----------------------------------------//31//-new
    {
      text: 'Уменьшить значение параметра на регуляторе природного газа.',
      audio: 'tts-21',
      startTime: timeDiff + 226,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 229.1,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '024.5'
      },
      startTime: timeDiff + 229.11,
    },
    {
      action: {
        target3D: 'Clone_4_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 229.12,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 229.5,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '020.0'
      },
      startTime: timeDiff + 229.51,
    },
    {
      action: {
        target3D: 'Clone_3_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 229.52,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.788'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.192'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.570'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.226'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5715.'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.425'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.20'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.29'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 229.53,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0156.'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0162.'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0165.'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '07.91'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1209.'
      },
      startTime: timeDiff + 229.53,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.15'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.15'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.68'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.293'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.2'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.16'
      },
      startTime: timeDiff + 229.53,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.278'
      },
      startTime: timeDiff + 229.53,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 230,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '017.0'
      },
      startTime: timeDiff + 230.1,
    },
    {
      action: {
        target3D: 'Clone_2_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 230.2,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.727'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.193'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.1614'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.262'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '2800.'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.404'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.20'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.31'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 230.21,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0157.'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0161.'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0165.'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.83'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1210.'
      },
      startTime: timeDiff + 230.21,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.13'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.13'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.68'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.301'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.2'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.16'
      },
      startTime: timeDiff + 230.21,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '1.170'
      },
      startTime: timeDiff + 230.21,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '157.8',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '09.12',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '014.4',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '01.04',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.16',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle045',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle044',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle082',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle081',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle080',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 230.22,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 230.22,
    },
    ////--------------------------------5----------------------------------------//32//-new
    {
      text: 'Водопроводчик по рации сообщает о выполненных своих операциях.',
      sender: 'Система',
      startTime: timeDiff + 231,
    },
    {
      audio: 'tts-vo6',
      text: 'Газ по фурмам закрыт',
      sender: 'Дежурный водопроводчик',
      startTime: timeDiff + 231.1,
    },
    ////--------------------------------6----------------------------------------//33//-new
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 233.5,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 236,
      human: true,
    },
    {
      text: 'Природный газ закрыт. На фурмах 3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo7',
      startTime: timeDiff + 237,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 240,
    },
    {
      audio: 'tts-vo8',
      text: 'Понял, принял.',
      sender: 'Дежурный водопроводчик',
      startTime: timeDiff + 241,
    },
    // ilay dp 
    {
      action: {
        window2D: {
          elements: [
            // { name: 'radar1_text', text: '1,24' },
            // { name: 'radar2_text', text: '1,69' },
            // { name: 'radar3_text', text: '-1,69' },
            // { name: 'EKZ_H1', text: '16' },
            // { name: 'EKZ_H2', text: '16' },
            // { name: 'EKZ_H3', text: '16' },
            // { name: 'AKZ_100', opacity: 0 },
            // { name: 'AKZ_45-100', opacity: 0 },
            // { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            // { name: 'EVS_DP7_O', text: '52964' },
            // { name: 'EVD1_O', text: '40687' },
            { name: 'EVS_DP7_F', text: '7214' },
            { name: 'EVD1_F', text: '322952' },
            { name: 'EVD_F', text: '333978' },
            { name: 'P_1', text: '3,18' },
            { name: 'F_evd', text: '5349' },
            { name: 'F_hol_dyt', text: '5500' },
            { name: 'T_hol_dyt', text: '74' },
            { name: 'O_hol_dyt', text: '23,9' },
            { name: 'par_yvlaz', text: '0,00' },
            { name: 'W_sinij_hol_dyt', text: '8,1' },
            { name: 'FO2_hol_dyt', text: '1758' },
            { name: 'N2', text: '50,1' },
            { name: 'CO', text: '23,3' },
            { name: 'CO2', text: '20,4' },
            { name: 'H2_tryb', text: '5,7' },
            { name: 'Nco_tryb', text: '46,7' },
            { name: 'Q_domG_tryb', text: '879' },
            { name: 'P_vozd_tryb', text: '10' },
            { name: 'P_gaza_tryb', text: '10' },
            { name: 'CO_bor_tryb', text: '0,34' },
            { name: 'H_step_isp', text: '35,4', opacity: '0' },
            { name: 'HCO_step_isp', text: '34,4' },
            { name: 'Tkyp_3', text: '1291' },
            { name: 'Tkyp_2', text: '1218' },
            { name: 'Tkyp_1', text: '1218' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '131' },
            { name: 'Tdym_2', text: '188' },
            { name: 'Tdym_1', text: '299' },
            { name: 'P_Os_szat_voz', text: '8,43' },
            { name: 'T_Os_szat_voz', text: '29' },
            // { name: 'Temp_peref_1', text: '84' },
            // { name: 'Temp_peref_2', text: '79' },
            // { name: 'Temp_peref_3', text: '79' },
            // { name: 'Temp_peref_4', text: '85' },
            // { name: 'Temp_peref_5', text: '81' },
            // { name: 'Temp_peref_6', text: '81' },
            // { name: 'Temp_peref_7', text: '85' },
            // { name: 'Temp_peref_8', text: '64' },
            // { name: 'Temp_peref_9', text: '73' },
            // { name: 'Temp_peref_10', text: '78' },
            // { name: 'Temp_peref_11', text: '136' },
            // { name: 'Temp_peref_12', text: '94' },
            // { name: 'Temp_peref_13', text: '118' },
            // { name: 'Temp_peref_14', text: '82' },
            // { name: 'Temp_peref_15', text: '89' },
            // { name: 'Temp_peref_16', text: '78' },
            //// { name: 'T1', text: '156' },
            //// { name: 'T2', text: '155' },
            //// { name: 'T3', text: '155' },
            //// { name: 'T4', text: '146' },
            //// { name: 'P_2', text: '3.99' },
            //// { name: 't_gor_dut', text: '1211' },
            //// { name: 'P_pg_prir_gaz', text: '8,44' },
            //// { name: 'F_prir_gaz_table', text: '37000' },
            //// { name: 'F_pg_sym_prir_gaz', text: '37000' },
            //// { name: 'H_Os_szat_voz', text: '29' },
            //// { name: 't_prirodn_gaz', text: '8' },
            //// { name: 'H_prir_gaz', text: '8' },
            { name: 'F_tryba', text: '631327' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0,0' },
            { name: 'P_vbls', text: '1,45' },
            { name: 'dP_verh', text: '0,23' },
            { name: 'dP_obsh_tryba', text: '1,57' },
            { name: 'dP_nish_tryba', text: '1,34' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2234' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '-0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1440', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1498', opacity: '1' },
            { name: 'L3_elem', color: '#ffffff' },
            // { name: 'Dp_obsh', text: '1,60' },
            // { name: 'F_prir_gaz_table', text: '37000' },
            // { name: 'TTG_zadanie', text: '2200' },
            // { name: 'P_tryba_3_590', text: '2,48' },
            // { name: 'P_tryba_3_591', text: '2,48' },
            // { name: 'P_tryba_4_1', text: '2,95' },
            // { name: 'P_tryba_4_2', text: '2,60' },
            // { name: 'P_tryba_4_3', text: '3,02' },
            // { name: 'P_tryba_4_4', text: '2,20' },
            // { name: 'P_tryba_5_1', text: '2,82' },
            // { name: 'P_tryba_5_2', text: '2,71' },
            // { name: 'P_tryba_5_3', text: '2,89' },
            // { name: 'P_tryba_5_4', text: '3,20' },
            // { name: 'ydel_tep_18', text: '28,2' },
            // { name: 'ydel_tep_17', text: '51,2' },
            // { name: 'ydel_tep_16', text: '37,4' },
            // { name: 'ydel_tep_15', text: '49,6' },
            // { name: 'ydel_tep_12_14', text: '83,6' },
            // { name: 'ydel_tep_10_11', text: '50,2' },
            // { name: 'ydel_tep_9', text: '47,4' },
            // { name: 'ydel_tep_8', text: '47,3' },
            // { name: 'ydel_tep_7', text: '38,2' },
            { name: 'fyrm_v_rab', text: '0' },
          ]
        }
      },
      startTime: timeDiff + 241.01,
    },
    ////--------------------------------7----------------------------------------//34//-new 
    {
      scenarioText: 'Закрыть задвижку 721.',
      sender: 'Система',
      audio: 'tts-22',
      startTime: timeDiff + 244,
    },
    {
      action: { // TODO изменить имена 3Д на индексы
        target3D: 'b6cc151c-004a-4e3f-bb7b-921c4300993c',
        rotation: { y: 0.7854 }, // 45
      },
      duration: 0.3,
      startTime: timeDiff + 245,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Red_Lamp_On'
      },
      startTime: timeDiff + 245.1,
    },
    {
      action: {
        target3D: 'Lamp_Green_023',
        material: 'Green_Lamp_Off'
      },
      startTime: timeDiff + 245.2,
    },
    {
      action: {
        target3D: 'b6cc151c-004a-4e3f-bb7b-921c4300993c',
        rotation: { y: 0 },
      },
      duration: 0.3,
      startTime: timeDiff + 247,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 247.1,
    },
    // ilay
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '01.94',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '016.4',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '200.2',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '09.12',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.5',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0101',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 247.11,
    },
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.350'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.0240'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.525'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.233'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5000.'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.325'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '00.75'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.95'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 247.12,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0157.'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0161.'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0162.'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0141.'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.50'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.60'
      },
      startTime: timeDiff + 247.12,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1210.'
      },
      startTime: timeDiff + 247.12,
    },
    // ilay dp F 
    {
      action: {
        window2D: {
          elements: [
            { name: 'radar1_text', text: '0.75' },
            { name: 'radar2_text', text: '0.97' },
            { name: 'radar3_text', text: '0.61' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '28' },
            { name: 'EKZ_H2', text: '29' },
            { name: 'EKZ_H3', text: '29' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '53379' },
            { name: 'EVD1_O', text: '8333' },
            { name: 'EVS_DP7_F', text: '7231' },
            { name: 'EVD1_F', text: '331490' },
            { name: 'EVD_F', text: '330995' },
            { name: 'P_1', text: '3.16' },
            { name: 'F_evd', text: '5292' },
            { name: 'F_hol_dyt', text: '5498' },
            { name: 'T_hol_dyt', text: '74' },
            { name: 'O_hol_dyt', text: '23.9' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.1' },
            { name: 'FO2_hol_dyt', text: '1280' },
            { name: 'N2', text: '50.1' },
            { name: 'CO', text: '23.3' },
            { name: 'CO2', text: '20.4' },
            { name: 'H2_tryb', text: '5.6' },
            { name: 'Nco_tryb', text: '46.7' },
            { name: 'Q_domG_tryb', text: '871' },
            { name: 'P_vozd_tryb', text: '10' },
            { name: 'P_gaza_tryb', text: '19' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_step_isp', text: '35,4', opacity: '0' },
            { name: 'HCO_step_isp', text: '34,6' },
            { name: 'Tkyp_3', text: '1261' },
            { name: 'Tkyp_2', text: '1220' },
            { name: 'Tkyp_1', text: '1214' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK2_Fb', text: '0' },
            { name: 'VNK2_Fr', text: '0' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '131' },
            { name: 'Tdym_2', text: '196' },
            { name: 'Tdym_1', text: '299' },
            { name: 'P_Os_szat_voz', text: '8.42' },
            { name: 'T_Os_szat_voz', text: '29' },
            { name: 'Temp_peref_1', text: '83' },
            { name: 'Temp_peref_2', text: '75' },
            { name: 'Temp_peref_3', text: '80' },
            { name: 'Temp_peref_4', text: '75' },
            { name: 'Temp_peref_5', text: '76' },
            { name: 'Temp_peref_6', text: '78' },
            { name: 'Temp_peref_7', text: '76' },
            { name: 'Temp_peref_8', text: '74' },
            { name: 'Temp_peref_9', text: '78' },
            { name: 'Temp_peref_10', text: '62' },
            { name: 'Temp_peref_11', text: '67' },
            { name: 'Temp_peref_12', text: '73' },
            { name: 'Temp_peref_13', text: '102' },
            { name: 'Temp_peref_14', text: '84' },
            { name: 'Temp_peref_15', text: '98' },
            { name: 'Temp_peref_16', text: '85' },
            //// { name: 'T1', text: '156' },
            //// { name: 'T2', text: '155' },
            //// { name: 'T3', text: '155' },
            //// { name: 'T4', text: '146' },
            { name: 'P_2', text: '3.04' },
            { name: 't_gor_dut', text: '1209' },
            { name: 'H_Os_szat_voz', text: '9' },
            { name: 't_prirodn_gaz', text: '9' },
            { name: 'P_pg_prir_gaz', text: '8,75' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '470842' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0,0' },
            { name: 'P_vbls', text: '1,45' },
            { name: 'dP_verh', text: '0,24' },
            { name: 'dP_obsh_tryba', text: '1,58' },
            { name: 'dP_nish_tryba', text: '1,34' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2524' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '-0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1410', opacity: '1' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L3', text: '1502', opacity: '1' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '1.50' },
            { name: 'P_tryba_1_591', text: '1.50' },
            { name: 'P_tryba_1_592', text: '1.50' },
            { name: 'P_tryba_1_593', text: '1.50' },
            { name: 'P_tryba_2_1', text: '1.59' },
            { name: 'P_tryba_2_2', text: '1.59' },
            { name: 'P_tryba_2_3', text: '1.59' },
            { name: 'P_tryba_2_4', text: '1.59' },
            { name: 'P_tryba_3_590', text: '1.69' },
            { name: 'P_tryba_3_591', text: '1.66' },
            { name: 'P_tryba_4_1', text: '5.58' },
            { name: 'P_tryba_4_2', text: '3.86' },
            { name: 'P_tryba_4_3', text: '2.58' },
            { name: 'P_tryba_4_4', text: '5.58' },
            { name: 'P_tryba_5_1', text: '1.96' },
            { name: 'P_tryba_5_2', text: '1.95' },
            { name: 'P_tryba_5_3', text: '2.20' },
            { name: 'P_tryba_5_4', text: '2.70' },
            { name: 'V_dyt', text: '235.4' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '25.4' },
            { name: 'ydel_tep_17', text: '40.3' },
            { name: 'ydel_tep_16', text: '32.4' },
            { name: 'ydel_tep_15', text: '47.8' },
            { name: 'ydel_tep_12_14', text: '80.3' },
            { name: 'ydel_tep_10_11', text: '41.4' },
            { name: 'ydel_tep_9', text: '40.1' },
            { name: 'ydel_tep_8', text: '39.2' },
            { name: 'ydel_tep_7', text: '34.6' },
          ]
        }
      },
      startTime: timeDiff + 247.13,
    },
    // 1.5 сценарий ------------------------------------------------------------------//35//-new 
    {
      text: 'По команде мастера печи - газовщик должен открыть клапан «СНОРТ» полностью для сброса в атмосферу излишки.',
      sender: 'Система',
      audio: 'tts-23',
      lifeTime: '09:00:00',
      startTime: timeDiff + 249,
    },
    ////--------------------------------1----------------------------------------//36//-new 
    {
      text: 'Делаем 2,5 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo9',
      startTime: timeDiff + 256,
    },
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 259.5,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 261.5,
      human: true,
    },
    {
      text: 'Делаю 2,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo10',
      startTime: timeDiff + 262,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 265,
    },
    // ilay dp 
    {
      action: {
        window2D: {
          elements: [
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
          ]
        }
      },
      startTime: timeDiff + 265.01,
    },
    ////--------------------------------2----------------------------------------//37//-new 
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 2,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 267,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 268,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_020',
        material: 'Unic_Lamp_Red_Off',
      },
      startTime: timeDiff + 268.1,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 269,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 270,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 271,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'EKZ_H1', text: '16' },
            { name: 'EKZ_H2', text: '17' },
            { name: 'EKZ_H3', text: '17' },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '53808' },
            { name: 'EVD1_O', text: '8996' },
            // луавый эвд 2 - pass
            { name: 'EVS_DP7_F', text: '7178' },
            { name: 'EVS_DP7_F', text: '333934' },
            { name: 'EVD_F', text: '331113' },
            { name: 'P_1', text: '3.10' },
            { name: 'F_evd', text: '5565' },
            { name: 'F_hol_dyt', text: '5544' },
            { name: 'T_hol_dyt', text: '73' },
            { name: 'O_hol_dyt', text: '23.9' },
            { name: 'F_par_yvl', text: '1.00' },
            { name: 'par_yvlaz', text: '0.00' },
            // pass
            { name: 'Vlaznost', text: '5.0' },
            { name: 'W_sinij_hol_dyt', text: '8.2' },
            { name: 'FO2_hol_dyt', text: '1300' },
            { name: 'H_snotr', text: '7' },
            { name: 'dp_kl_red', color: '#75788E' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '0' },
            { name: 'H_progres_22', opacity: '0' },
            { name: 'H_progres_33', opacity: '0' },
            { name: 'H_progres_49', opacity: '0' },
            { name: 'H_progres_56', opacity: '0' },
            { name: 'H_progres_60', opacity: '0' },
            { name: 'H_progres_89', opacity: '0' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'P_2', text: '2.97' },
            { name: '02_trub', text: '0' },
            { name: 'N2', text: '51.7' },
            { name: 'CO', text: '24.8' },
            { name: 'CO2', text: '21.1' },
            { name: 'H2_tryb', text: '1.9' },
            { name: 'Nco_tryb', text: '46.0' },
            { name: 'Q_domG_tryb', text: '821' },
            { name: 'P_vozd_tryb', text: '10' },
            { name: 'P_gaza_tryb', text: '20' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'Tkyp_3', text: '1259' },
            { name: 'Tkyp_2', text: '1219' },
            { name: 'Tkyp_1', text: '1212' },
            { name: 'Tkyp_3_rect', color: '#fff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_1', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_1', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_1', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#ada3b0' },
            { name: 'VNK3_status_2', text: 'Цикл' },
            { name: 'VNK2_status_2', text: 'Цикл' },
            { name: 'VNK1_status_2', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fvozdyh_1', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'Fgaz_1', text: '0' },
            { name: 'Tdym_3', text: '131' },
            { name: 'Tdym_2', text: '194' },
            { name: 'Tdym_1', text: '296' },
            //pass
            { name: 'P_Os_szat_voz', text: '8,42' },
            //pass
            { name: 'T_Os_szat_voz', text: '29' },
          ]
        }
      },
      startTime: timeDiff + 271.1,
    },
    // ilay bzu F
    {
      action: {
        window2D: {
          elements: [
            // bzu
            { name: 'ochistka sedel_P', text: '6.01' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '3.96' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '29' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '4455' },
            { name: 'B1_dp Bunker', text: '0.00' },
            { name: 'B1_P compes', text: '0.99' },
            { name: 'B1_vremy vygruski', text: '96' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '97' },
            { name: 'B1_vremy sbrosa P ', text: '10' },
            { name: 'B1_vremy nabora P ', text: '7' },
            { name: 'B1_ves s SHP', text: '16.4' },
            { name: 'B1_vibratciya', text: '2' },
            { name: 'V linii P_B1', text: '202' }, // Б1
            { name: 'V linii dP_B1', text: '231' },
            { name: 'V sisteme vzveh_B1', text: '191' },
            { name: 'V linii P_B2', text: '152' }, // Б2
            { name: 'V linii dP_B2', text: '276' },
            { name: 'V sisteme vzveh_B2', text: '167' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '1.00' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '1.02' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '1.01' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '1.01' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '1' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '132' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '1' },
            { name: 'ugol naklona_tekushiy', text: '14.2' },
            { name: 'ugol naklona_zadanyi', text: '14.3' },
            { name: 'prochent1', text: '35' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', opacity: '0' },
            { name: 'left_ellipse', opacity: '0' }, // K
            { name: 'left_matrix_text', text: '12' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.99' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '-0.7' }, // T
            { name: 'matrix 1 str 1_M', text: '-1.6' }, // M3
            // не хватает схемы ПУСТ
            { name: 'beliy primoygolinik_smehivateli', opacity: '0' }, // зеленая палочка
            { name: 'zelyniy primoygolinik_smehivateli', opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '37.3' }, // ШЗ
            { name: 'left_rect_yellow_arrow', opacity: '1' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '0' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'verx', text: '-0' }, // цифры сверху
            { name: 'tr_3_str_1_', text: '13' }, // 
            { name: 'tr_2_str_2_', text: '13' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' }, // 
            { name: 'dlina_porcii', text: '113' }, // длина порции
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '13' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '1.06' }, // 
            { name: 'matrix 1 str 14_T', text: '93.0' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'matrix 1 str 14_M', text: '47.7' }, // 
            { name: 'HZ2', text: '1.4' }, // 
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '3.96' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '29' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '-0.10' }, // 
            { name: 'B2_P compens', text: '1.11' }, // 
            { name: 'B2_time vygruski', text: '101' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '106' }, // 
            { name: 'B2_time sbrosa P', text: '9' }, // 
            { name: 'B2_time nabora P', text: '6' }, // 
            { name: 'B2_ves s HP', text: '93.0' }, // 
            { name: 'B2_vibratciya', text: '51' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '6' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '1' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '0.90' }, // 
            { name: 'radar 1', text: '0.84' }, // 
            { name: 'radar 2', text: '1.07' }, // 
            { name: 'mexan', text: '-1.67' }, // 
            { name: 'do zapuska mexan min', text: '1' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#EADCC2' }, // в работе
            { name: 'B1_nomerstr', text: '12' }, // 
            { name: 'B2_nomerstr', text: '13' }, // 
            { name: 'T3_nomerstr', text: '13' }, // 
            { name: 'T2_nomerstr', text: '13' }, // 
            { name: 'T1_nomerstr', text: '14' }, // 
            { name: 'B1_Tip_text', text: 'К' }, // 
            { name: 'B2_Tip_text', text: 'Р' }, // 
            { name: 'T3_Tip_text', text: 'Р' }, // 
            { name: 'T2_Tip_text', text: 'Р' }, // 
            { name: 'T1_Tip_text', text: 'См' }, // 
            { name: 'B1_Tip', color: '#008600' }, // 
            { name: 'B2_Tip', color: '#860004' }, // 
            { name: 'T2_Tip', color: '#860004' }, // 
            { name: 'T2_color', color: '#860004' }, // 
            { name: 'T1_Tip', color: '#D0D1D3' }, // 
            { name: 'B1_ves', text: '16.4' }, // 
            { name: 'B2_ves', text: '93.0' }, // 
            { name: 'T3_ves', text: '93.0' }, // 
            { name: 'T2_ves', text: '93.0' }, // 
            { name: 'T1_ves', text: '19.9' }, // 
            { name: 'v_pech_str3_str', text: '12' }, // 
            { name: 'bzu_str51_SM_7', text: '0  0' }, // 
            { name: '', text: '' }, // 
          ]
        }
      },
      startTime: timeDiff + 271.101,
    },
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.928'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.211'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.601'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.225'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5464.'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '2.561'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '00.89'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.04'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 271.11,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0167.'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0171.'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0171.'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0156.'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.85'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.39'
      },
      startTime: timeDiff + 271.11,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1208.'
      },
      startTime: timeDiff + 271.11,
    },
    {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.12'
      },
      startTime: timeDiff + 271.11,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.64',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '009.5',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '160.1',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '01.06',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '018.3',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0101',
      },
      startTime: timeDiff + 271.12,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.87',
      },
      startTime: timeDiff + 271.12,
    },
    ////--------------------------------3----------------------------------------//38//-new      ////    2   //
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 272,
    },
    {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 273,
      human: true,
    },
    ////--------------------------------4----------------------------------------//39//-new
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 277,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 279,
      human: true,
    },
    {
      text: 'На фурмах 2,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo11',
      startTime: timeDiff + 280,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 284,
    },
    {
      text: 'Делаем 2 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo12',
      startTime: timeDiff + 285,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 285.1,
      human: true,
    },
    {
      text: 'Делаю 2 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo13',
      startTime: timeDiff + 286,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 288.9,
    },
    // ilay bzu
    {
      action: {
        window2D: {
          elements: [
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '30' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '-0.16' }, // 
            { name: 'B2_P compens', text: '1.10' }, // 
            { name: 'B2_time vygruski', text: '101' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '106' }, // 
            { name: 'B2_time sbrosa P', text: '9' }, // 
            { name: 'B2_time nabora P', text: '6' }, // 
            { name: 'B2_ves s HP', text: '93.0' }, // 
            { name: 'B2_vibratciya', text: '52' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '6' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '1' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '0.75' }, // 
            { name: 'radar 1', text: '0.88' }, // 
            { name: 'radar 2', text: '1.07' }, // 
            { name: 'mexan', text: '0.75' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#0f0' }, // в работе
            { name: 'B1_nomerstr', text: '12' }, // 
            { name: 'B2_nomerstr', text: '13' }, // 
            { name: 'T3_nomerstr', text: '13' }, // 
            { name: 'T2_nomerstr', text: '13' }, // 
            { name: 'T1_nomerstr', text: '14' }, // 
            { name: 'B1_Tip_text', text: 'К' }, // 
            { name: 'B2_Tip_text', text: 'Р' }, // 
            { name: 'T3_Tip_text', text: 'Р' }, // 
            { name: 'T2_Tip_text', text: 'Р' }, // 
            { name: 'T1_Tip_text', text: 'См' }, // 
            { name: 'B1_Tip', color: '#008600' }, // 
            { name: 'B2_Tip', color: '#860004' }, // 
            { name: 'T2_Tip', color: '#860004' }, // 
            { name: 'T2_color', color: '#860004' }, // 
            { name: 'T1_Tip', color: '#D0D1D3' }, // 
            { name: 'B1_ves', text: '16.4' }, // 
            { name: 'B2_ves', text: '93.0' }, // 
            { name: 'T3_ves', text: '93.0' }, // 
            { name: 'T2_ves', text: '93.0' }, // 
            { name: 'T1_ves', text: '19.9' }, // 
            { name: 'v_pech_str3_str', text: '13' }, // 
            { name: 'bzu_str51_SM_7', text: '0  0' }, // 
            { name: '', text: '' }, // 
          ]
        }
      },
      startTime: timeDiff + 288.90999999999997,
    },
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '0.071'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.226'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.599'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.220'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5405.'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '2.495'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '00.92'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.14'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 288.91999999999996,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0158.'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0167.'
      },
      startTime: timeDiff + 288.91999999999996,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0158.'
      },
      startTime: timeDiff + 288.91999999999996,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '052.8',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '01.04',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0101',
      },
      startTime: timeDiff + 288.93,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.89',
      },
      startTime: timeDiff + 288.93,
    },
    ////--------------------------------5----------------------------------------//40//-new /////   2   ////      4 раза из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 2кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 289,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 290,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 291,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 292,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 293,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '19' },
            { name: 'H_progres_19', opacity: 1 },
            { name: 'P_2', text: '2.36' },
            { name: 'EKZ_H1', text: '45' },
            { name: 'EKZ_H2', text: '45' },
            { name: 'EKZ_H3', text: '45' },
            { name: 'AKZ_45', opacity: 1 },
          ]
        }
      },
      startTime: timeDiff + 294,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '22' },
            { name: 'H_progres_22', opacity: 1 },
          ]
        }
      },
      startTime: timeDiff + 295,
    },
    // ilay
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '018.2',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '261.4',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.66',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '094.2',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '012.1',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.2',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0002',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.10',
      },
      startTime: timeDiff + 295.01,
    },
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '0.476'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.232'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.507'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.203'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5008.'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '2.086'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.27'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.53'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 295.02,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0166.'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0160.'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0170.'
      },
      startTime: timeDiff + 295.02,
    },
    {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0147.'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '00.26'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.39'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1205.'
      },
      startTime: timeDiff + 295.02,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.15'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.15'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.74'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.70'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.330'
      },
      startTime: timeDiff + 295.02,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '047.4'
      },
      startTime: timeDiff + 295.02,
    },
    {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '24.19'
      },
      startTime: timeDiff + 295.02,
    },
    {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.285'
      },
      startTime: timeDiff + 295.02,
    },
    // bzu F
    {
      action: {
        window2D: {
          elements: [
            // bzu
            { name: 'ochistka sedel_P', text: '5.96' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.72' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '96' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '23' },
            { name: 'B1_vremy sbrosa P ', text: '8' },
            { name: 'B1_vremy nabora P ', text: '7' },
            { name: 'B1_ves s SHP', text: '16.4' },
            { name: 'B1_vibratciya', text: '49' },
            { name: 'V linii P_B1', text: '203' }, // Б1
            { name: 'V linii dP_B1', text: '230' },
            { name: 'V sisteme vzveh_B1', text: '192' },
            { name: 'V linii P_B2', text: '151' }, // Б2
            { name: 'V linii dP_B2', text: '276' },
            { name: 'V sisteme vzveh_B2', text: '167' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.73' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.74' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.74' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.74' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '1' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '131' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '8' },
            { name: 'ugol naklona_tekushiy', text: '46.7' },
            { name: 'ugol naklona_zadanyi', text: '46.7' },
            { name: 'prochent1', text: '0' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', opacity: '0' },
            { name: 'left_ellipse', opacity: '0' }, // K
            { name: 'left_matrix_text', text: '14' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.00' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '0.2' }, // T
            { name: 'matrix 1 str 1_M', text: '0.1' }, // M3
            // не хватает схемы ПУСТ
            { name: 'beliy primoygolinik_smehivateli', opacity: '0' }, // зеленая палочка
            { name: 'zelyniy primoygolinik_smehivateli', opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.4' }, // ШЗ
            // { name: 'left_vugr_rect', color: '#00FF00' }, //
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'verx', text: '-91' }, // цифры сверху
            { name: 'tr_3_str_1_', text: '14' }, // 
            { name: 'tr_2_str_2_', text: '14' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' }, //
            { name: 'dlina_porcii', text: '113' }, // длина порции
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '13' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '1.05' }, // 
            { name: 'matrix 1 str 14_T', text: '93.0' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'matrix 1 str 14_M', text: '47.7' }, // 
            { name: 'HZ2', text: '1.4' }, // 
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '30' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '-0.35' }, // 
            { name: 'B2_P compens', text: '1.09' }, // 
            { name: 'B2_time vygruski', text: '101' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '106' }, // 
            { name: 'B2_time sbrosa P', text: '9' }, // 
            { name: 'B2_time nabora P', text: '6' }, // 
            { name: 'B2_ves s HP', text: '93.0' }, // 
            { name: 'B2_vibratciya', text: '51' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '6' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '1' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '0.88' }, // 
            { name: 'radar 1', text: '0.99' }, // 
            { name: 'radar 2', text: '1.26' }, // 
            { name: 'mexan', text: '0.88' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#EADCC2' }, // в работе
            { name: 'B1_nomerstr', text: '14' }, // 
            { name: 'B2_nomerstr', text: '13' }, // 
            { name: 'T3_nomerstr', text: '14' }, // 
            { name: 'T2_nomerstr', text: '14' }, // 
            { name: 'T1_nomerstr', text: '14' }, // 
            { name: 'B1_Tip_text', text: 'См' }, // 
            { name: 'B2_Tip_text', text: 'Р' }, // 
            { name: 'T3_Tip_text', text: 'См' }, // 
            { name: 'T2_Tip_text', text: 'См' }, // 
            { name: 'T1_Tip_text', text: 'См' }, // 
            { name: 'B1_Tip', color: '#D0D1D3' }, // 
            { name: 'B2_Tip', color: '#860004' }, // 
            { name: 'T2_Tip', color: '#D0D1D3' }, // 
            { name: 'T2_color', color: '#D0D1D3' }, // 
            { name: 'T1_Tip', color: '#D0D1D3' }, // 
            { name: 'B1_ves', text: '19.8' }, // 
            { name: 'B2_ves', text: '92.9' }, // 
            { name: 'T3_ves', text: '93.9' }, // 
            { name: 'T2_ves', text: '93.9' }, // 
            { name: 'T1_ves', text: '19.9' }, // 
            { name: 'v_pech_str3_str', text: '13' }, // 
            { name: 'bzu_str51_SM_7', text: '0  0' }, // 
            { name: 'bzu_P_str2', color: '#2B2A29' }, // 
            { name: 'na_conveer_s1_bukca', text: 'см' }, // 
            { name: '', text: '' }, // 
          ]
        }
      },
      startTime: timeDiff + 295.03,
    },//  dp F 
    {
      action: {
        window2D: {
          elements: [
            { name: 'radar1_text', text: '0.99' },
            { name: 'radar2_text', text: '1.27' },
            { name: 'radar3_text', text: '0.89' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '45' },
            { name: 'EKZ_H2', text: '45' },
            { name: 'EKZ_H3', text: '45' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 1 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '53177' },
            { name: 'EVD1_O', text: '9432' },
            { name: 'EVS_DP7_F', text: '7185' },
            { name: 'EVD1_F', text: '332009' },
            { name: 'EVD_F', text: '331225' },
            { name: 'P_1', text: '2.45' },
            { name: 'F_evd', text: '5550' },
            { name: 'F_hol_dyt', text: '4498' },
            { name: 'T_hol_dyt', text: '70' },
            { name: 'O_hol_dyt', text: '23.9' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.1' },
            { name: 'FO2_hol_dyt', text: '1296' },
            { name: 'N2', text: '52.0' },
            { name: 'CO', text: '25.1' },
            { name: 'CO2', text: '21.5' },
            { name: 'H2_tryb', text: '0.9' },
            { name: 'Nco_tryb', text: '46.1' },
            { name: 'Q_domG_tryb', text: '806' },
            { name: 'P_vozd_tryb', text: '10' },
            { name: 'P_gaza_tryb', text: '20' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_step_isp', text: '54,4', opacity: '1' },
            { name: 'HCO_step_isp', text: '46,4' },
            { name: 'Tkyp_3', text: '1254' },
            { name: 'Tkyp_2', text: '1216' },
            { name: 'Tkyp_1', text: '1207' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '129' },
            { name: 'Tdym_2', text: '191' },
            { name: 'Tdym_1', text: '290' },
            { name: 'P_Os_szat_voz', text: '8.39' },
            { name: 'T_Os_szat_voz', text: '30' },
            { name: 'Temp_peref_1', text: '82' },
            { name: 'Temp_peref_2', text: '74' },
            { name: 'Temp_peref_3', text: '80' },
            { name: 'Temp_peref_4', text: '75' },
            { name: 'Temp_peref_5', text: '75' },
            { name: 'Temp_peref_6', text: '78' },
            { name: 'Temp_peref_7', text: '75' },
            { name: 'Temp_peref_8', text: '73' },
            { name: 'Temp_peref_9', text: '76' },
            { name: 'Temp_peref_10', text: '62' },
            { name: 'Temp_peref_11', text: '65' },
            { name: 'Temp_peref_12', text: '72' },
            { name: 'Temp_peref_13', text: '102' },
            { name: 'Temp_peref_14', text: '83' },
            { name: 'Temp_peref_15', text: '95' },
            { name: 'Temp_peref_16', text: '84' },
            //// { name: 'T1', text: '156' },
            //// { name: 'T2', text: '155' },
            //// { name: 'T3', text: '155' },
            //// { name: 'T4', text: '146' },
            { name: 'P_2', text: '2.34' },
            { name: 't_gor_dut', text: '1206' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '9' },
            { name: 'P_pg_prir_gaz', text: '8,58' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '557309' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0.00' },
            { name: 'P_vbls', text: '0.70' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.23' },
            { name: 'dP_obsh_tryba', text: '1.59' },
            { name: 'dP_nish_tryba', text: '1.36' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2519' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1416', opacity: '1' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L3', text: '1502', opacity: '1' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '0.85' },
            { name: 'P_tryba_1_591', text: '0.85' },
            { name: 'P_tryba_1_592', text: '0.76' },
            { name: 'P_tryba_1_593', text: '0.85' },
            { name: 'P_tryba_2_1', text: '0.88' },
            { name: 'P_tryba_2_2', text: '0.87' },
            { name: 'P_tryba_2_3', text: '0.87' },
            { name: 'P_tryba_2_4', text: '0.87' },
            { name: 'P_tryba_3_590', text: '1.00' },
            { name: 'P_tryba_3_591', text: '0.95' },
            { name: 'P_tryba_4_1', text: '2.21' },
            { name: 'P_tryba_4_2', text: '1.97' },
            { name: 'P_tryba_4_3', text: '2.34' },
            { name: 'P_tryba_4_4', text: '1.60' },
            { name: 'P_tryba_5_1', text: '1.40' },
            { name: 'P_tryba_5_2', text: '1.50' },
            { name: 'P_tryba_5_3', text: '1.77' },
            { name: 'P_tryba_5_4', text: '2.40' },
            { name: 'V_dyt', text: '230.8' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '29.2' },
            { name: 'ydel_tep_17', text: '45.3' },
            { name: 'ydel_tep_16', text: '32.2' },
            { name: 'ydel_tep_15', text: '46.2' },
            { name: 'ydel_tep_12_14', text: '79.0' },
            { name: 'ydel_tep_10_11', text: '39.4' },
            { name: 'ydel_tep_9', text: '37.1' },
            { name: 'ydel_tep_8', text: '36.6' },
            { name: 'ydel_tep_7', text: '38.2' },
          ]
        }
      },
      startTime: timeDiff + 295.04,
    },
    ////-----------------------------------41//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 296,
    },
    {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 300.1,
      human: true,
    },
    ////--------------------------------6----------------------------------------//42//-new ////   4   ////
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 301,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 303,
      human: true,
    },
    {
      text: 'На фурмах 2 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo14',
      startTime: timeDiff + 304,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 307,
    },
    {
      text: 'Делаем 1,5 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo15',
      startTime: timeDiff + 308,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 308.1,
      human: true,
    },
    {
      text: 'Выполняю.',
      sender: 'Газовщик',
      audio: 'tts-vo16',
      startTime: timeDiff + 309,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 312,
    },
    ////--------------------------------7----------------------------------------//43//-new
    {
      scenarioText: 'Сообщить по телефону в «ЭВС».',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 314,
    },
    {
      action: {
        target3D: 'PhoneButton020',
      },
      startTime: timeDiff + 316,
      human: true,
    },
    {
      text: 'Разгрузка на 20000.',
      sender: 'Газовщик',
      startTime: timeDiff + 318,
      audio: 'tts-vo17',
    },
    {
      text: 'Принял',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo18',
      startTime: timeDiff + 322.5,
    },
    // ilay dp  bzu F old
    {
      action: {
        window2D: {
          elements: [
            // bzu
            { name: 'ochistka sedel_P', text: '5.94' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '20' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '-0.11' },
            { name: 'B1_P compes', text: '0.68' },
            { name: 'B1_vremy vygruski', text: '16' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '23' },
            { name: 'B1_vremy sbrosa P ', text: '1' },
            { name: 'B1_vremy nabora P ', text: '4' },
            { name: 'B1_ves s SHP', text: '18.6' },
            { name: 'B1_vibratciya', text: '2' },
            { name: 'V linii P_B1', text: '202' }, // Б1
            { name: 'V linii dP_B1', text: '209' },
            { name: 'V sisteme vzveh_B1', text: '192' },
            { name: 'V linii P_B2', text: '180' }, // Б2
            { name: 'V linii dP_B2', text: '276' },
            { name: 'V sisteme vzveh_B2', text: '167' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.37' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.34' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.30' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.38' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '158' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '131' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '3' },
            { name: 'ugol naklona_tekushiy', text: '32.4' },
            { name: 'ugol naklona_zadanyi', text: '33.3' },
            // { name: 'prochent1', text: '35' }, // %
            // { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            // { name: 'zagr_ramka_l',  color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', opacity: '0' },
            // { name: 'left_ellipse',  opacity: '0' }, // K
            // { name: 'left_matrix_text',  text: '12' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.48' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '18.9' }, // T
            { name: 'matrix 1 str 1_M', text: '18.3' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'HZ1', text: '37.3' }, // ШЗ
            // { name: 'left_vugr_rect', color: '#00FF00' }, // 
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'verx', text: '-0' }, // цифры сверху
            { name: 'tr_3_str_1_', text: '14' }, // 
            { name: 'tr_2_str_2_', text: '14' }, // 
            { name: 'cir_t_2', color: '#5E5E5E ' }, //  
            { name: 'dlina_porcii', text: '185' }, // длина порции
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            // { name: 'right_matrix_text', text: '13' }, // матр 1 загр 51
            // { name: 'matrix 1 str 14_kgc', text: '1.06' }, // 
            // { name: 'matrix 1 str 14_T', text: '93.0' }, // 
            { name: 'pust_ramka_r', opacity: '1' }, // 
            { name: 'r_pust', opacity: '1' }, // 
            { name: 'matrix 1 str 14_M', text: '47.7' }, // 
            // { name: 'HZ2', text: '1.4' }, // 
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '30' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '664' }, // 
            { name: 'B2_Dp bunker', text: '-0.00' }, // 
            { name: 'B2_P compens', text: '0.41' }, // 
            { name: 'B2_time vygruski', text: '333' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '106' }, // 
            { name: 'B2_time sbrosa P', text: '9' }, // 
            { name: 'B2_time nabora P', text: '6' }, // 
            { name: 'B2_ves s HP', text: '93.0' }, // 
            { name: 'B2_vibratciya', text: '50' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '7' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '2' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '0.91' }, // 
            // { name: 'radar 1', text: '0.84' }, // 
            // { name: 'radar 2', text: '1.07' }, // 
            // { name: 'mexan', text: '-1.67' }, // 
            { name: 'do zapuska mexan min', text: '1' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#EADCC2' }, // в работе
            { name: 'ismetir_ramki', color: '#EADCC2' }, // в работе
            { name: 'B1_nomerstr', text: '18' }, // 
            { name: 'B2_nomerstr', text: '13' }, // 
            { name: 'T3_nomerstr', text: '13' }, // 
            { name: 'T2_nomerstr', text: '14' }, // 
            { name: 'T1_nomerstr', text: '0' }, // 
            { name: 'B1_Tip_text', text: 'См' }, // 
            { name: 'B2_Tip_text', text: 'Р' }, // 
            { name: 'T3_Tip_text', text: 'См' }, // 
            { name: 'T2_Tip_text', text: 'См' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#D0D1D3' }, // 
            { name: 'B2_Tip', color: '#860004' }, // 
            { name: 'T2_Tip', color: '#D0D1D3' }, // 
            { name: 'T2_color', color: '#D0D1D3' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            // { name: 'B1_ves', text: '16.4' }, // 
            // { name: 'B2_ves', text: '93.0' }, // 
            // { name: 'T3_ves', text: '93.0' }, // 
            // { name: 'T2_ves', text: '93.0' }, // 
            // { name: 'T1_ves', text: '19.9' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#860004' }, // str 2 color
            { name: 'K_str1', color: '#008600' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            // { name: 'str51_down', text: 'К' }, // str 51 color
            // dp
            { name: 'radar1_text', text: '0.86' },
            { name: 'radar2_text', text: '1.19' },
            { name: 'radar3_text', text: '-1.67' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100', opacity: 1 },
            { name: 'AKZ_45-100', opacity: 1 },
            { name: 'AKZ_45', opacity: 1 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '52699' },
            { name: 'EVD1_O', text: '9438' },
            { name: 'EVS_DP7_F', text: '7198' },
            { name: 'EVD1_F', text: '333477' },
            { name: 'EVD_F', text: '331991' },
            { name: 'P_1', text: '2.07' },
            { name: 'F_evd', text: '5525' },
            { name: 'F_hol_dyt', text: '4075' },
            { name: 'T_hol_dyt', text: '69' },
            { name: 'O_hol_dyt', text: '23.9' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.1' },
            { name: 'FO2_hol_dyt', text: '1280' },
            { name: 'N2', text: '52.0' },
            { name: 'CO', text: '25.1' },
            { name: 'CO2', text: '21.5' },
            { name: 'H2_tryb', text: '0.9' },
            { name: 'Nco_tryb', text: '46.1' },
            { name: 'Q_domG_tryb', text: '806' },
            { name: 'P_vozd_tryb', text: '10' },
            { name: 'P_gaza_tryb', text: '19' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_step_isp', text: '54,5', opacity: '1' },
            { name: 'HCO_step_isp', text: '46,5' },
            { name: 'Tkyp_3', text: '1252' },
            { name: 'Tkyp_2', text: '1214' },
            { name: 'Tkyp_1', text: '1204' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '129' },
            { name: 'Tdym_2', text: '189' },
            { name: 'Tdym_1', text: '288' },
            { name: 'P_Os_szat_voz', text: '8.36' },
            { name: 'T_Os_szat_voz', text: '30' },
            { name: 'Temp_peref_1', text: '81' },
            { name: 'Temp_peref_2', text: '74' },
            { name: 'Temp_peref_3', text: '79' },
            { name: 'Temp_peref_4', text: '74' },
            { name: 'Temp_peref_5', text: '78' },
            { name: 'Temp_peref_6', text: '78' },
            { name: 'Temp_peref_7', text: '79' },
            { name: 'Temp_peref_8', text: '73' },
            { name: 'Temp_peref_9', text: '78' },
            { name: 'Temp_peref_10', text: '62' },
            { name: 'Temp_peref_11', text: '65' },
            { name: 'Temp_peref_12', text: '72' },
            { name: 'Temp_peref_13', text: '102' },
            { name: 'Temp_peref_14', text: '83' },
            { name: 'Temp_peref_15', text: '94' },
            { name: 'Temp_peref_16', text: '84' },
            //// { name: 'T1', text: '156' },
            //// { name: 'T2', text: '155' },
            //// { name: 'T3', text: '155' },
            //// { name: 'T4', text: '146' },
            { name: 'P_2', text: '1.97' },
            { name: 't_gor_dut', text: '1204' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '9' },
            { name: 'P_pg_prir_gaz', text: '8,58' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '468748' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0,0' },
            { name: 'P_vbls', text: '0,24' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0,24' },
            { name: 'dP_obsh_tryba', text: '1,58' },
            { name: 'dP_nish_tryba', text: '1,33' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2517' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '-0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1435', opacity: '1' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L3', text: '1488', opacity: '1' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '0.44' },
            { name: 'P_tryba_1_591', text: '0.44' },
            { name: 'P_tryba_1_592', text: '0.44' },
            { name: 'P_tryba_1_593', text: '0.44' },
            { name: 'P_tryba_2_1', text: '0.54' },
            { name: 'P_tryba_2_2', text: '0.54' },
            { name: 'P_tryba_2_3', text: '0.54' },
            { name: 'P_tryba_2_4', text: '0.54' },
            { name: 'P_tryba_3_590', text: '0.62' },
            { name: 'P_tryba_3_591', text: '0.62' },
            // { name: 'P_tryba_4_1', text: '5.58' },
            // { name: 'P_tryba_4_2', text: '3.86' },
            // { name: 'P_tryba_4_3', text: '2.58' },
            // { name: 'P_tryba_4_4', text: '5.58' },
            // { name: 'P_tryba_5_1', text: '1.96' },
            // { name: 'P_tryba_5_2', text: '1.95' },
            // { name: 'P_tryba_5_3', text: '2.20' },
            // { name: 'P_tryba_5_4', text: '2.70' },
            { name: 'V_dyt', text: '234.8' },
            { name: 'fyrm_v_rab', text: '0' },
            // { name: 'ydel_tep_18',    text: '25.4' },
            // { name: 'ydel_tep_17',    text: '40.3' },
            // { name: 'ydel_tep_16',    text: '32.4' },
            // { name: 'ydel_tep_15',    text: '47.8' },
            // { name: 'ydel_tep_12_14', text: '80.3' },
            // { name: 'ydel_tep_10_11', text: '41.4' },
            // { name: 'ydel_tep_9',     text: '40.1' },
            // { name: 'ydel_tep_8',     text: '39.2' },
            // { name: 'ydel_tep_7',     text: '34.6' },
          ]
        }
      },
      startTime: timeDiff + 322.51,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle113',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle112',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle068',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle086',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle087',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle088',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle089',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle090',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle091',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle098',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle099',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle100',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle101',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle102',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle103',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle105',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle106',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle107',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle092',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle093',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle094',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle095',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle096',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle085',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle058',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle059',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle060',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    // {
    //   action: {
    //     target3D: 'Rectangle080', 
    //     material: 'ButtonLightOn',
    //   },
    // startTime: timeDiff + 322.52,
    // },
    {
      action: {
        target3D: 'Rectangle064',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle114',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle041',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle039',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle029',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle031',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle034',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle036',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle048',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    }, {
      action: {
        target3D: 'Rectangle050',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '0.00',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '085.7',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '015.5',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '00.13',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '044.4',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0104',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.75',
      },
      startTime: timeDiff + 322.52,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0314',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0181',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '1278',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0967',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '4248',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1591',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '0074',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0124',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0165',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0177',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0171',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0156',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0738',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1282',
      },
      startTime: timeDiff + 322.53,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '1710',
      },
      startTime: timeDiff + 322.53,
    },
    ////--------------------------------8----------------------------------------//44//-new
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 1,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 324,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 325,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 326,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 327,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 328,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '33' },
            { name: 'H_progres_7', opacity: 1 },
            { name: 'H_progres_19', opacity: 1 },
            { name: 'H_progres_22', opacity: 1 },
            { name: 'H_progres_33', opacity: 1 },
            { name: 'H_progres_49', opacity: 0 },
            { name: 'H_progres_56', opacity: 0 },
            { name: 'H_progres_60', opacity: 0 },
            { name: 'H_progres_89', opacity: 0 },
            { name: 'H_progres_100', opacity: 0 },
            { name: 'P_2', text: '1.97' },
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_17', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_100', opacity: 1 },
            //100 
          ]
        }
      },
      startTime: timeDiff + 328.5,
    },
    // ilay
    {
      action: {
        window2D: {
          elements: [
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100', opacity: 1 },
          ]
        }
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '189.1',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.4',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '044.4',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0104',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 328.51,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0312',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0178',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '1244',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0946',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '4257',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1590',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '0075',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0129',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0161',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0179',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0171',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0156',
      },
      startTime: timeDiff + 328.52,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1282',
      },
      startTime: timeDiff + 328.52,
    },
    ////-----------------------------------45//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 329,
    }, {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 333.1,
      human: true,
    },
    ////--------------------------------9----------------------------------------//46//-new
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 334,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      duration: 0.15,
      startTime: timeDiff + 336,
      human: true,
    },
    {
      text: 'На фурмах 1,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo19',
      startTime: timeDiff + 337,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 339,
    },
    {
      text: 'Делаем 1 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo20',
      startTime: timeDiff + 342,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      duration: 0.15,
      startTime: timeDiff + 342.1,
      human: true,
    },
    {
      text: 'Делаю 1.',
      sender: 'Газовщик',
      audio: 'tts-vo21',
      startTime: timeDiff + 343,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 346,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0302',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0153',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '1106',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0846',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '3989',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1411',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '0095',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0144',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0172',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0174',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0152',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0704',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0239',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1281',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '1469',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '0461',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '2438',
      },
      startTime: timeDiff + 346.01,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 346.02,
    }, {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.4',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '303.3',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.4',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.4',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0104',
      },
      startTime: timeDiff + 346.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.93',
      },
      startTime: timeDiff + 346.02,
    },
    ////--------------------------------10----------------------------------------//47//-new
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 1кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 349,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 350,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 351,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 352,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 353,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '49' },
            { name: 'H_progres_49', opacity: 1 },
            { name: 'P_2', text: '1.80' },
          ]
        }
      },
      startTime: timeDiff + 354,
    },
    // ilay dp f new
    {
      action: {
        window2D: {
          elements: [
            // dp
            { name: 'radar1_text', text: '1.21' },
            { name: 'radar2_text', text: '1.60' },
            { name: 'radar3_text', text: '-1.66' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100', opacity: 1 },
            { name: 'AKZ_45-100', opacity: 1 },
            { name: 'AKZ_45', opacity: 1 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '54335' },
            { name: 'EVD1_O', text: '11713' },
            { name: 'EVS_DP7_F', text: '7200' },
            { name: 'EVD1_F', text: '308078' },
            { name: 'EVD_F', text: '309442' },
            { name: 'P_1', text: '1.09' },
            { name: 'F_evd', text: '5230' },
            { name: 'F_hol_dyt', text: '2232' },
            { name: 'T_hol_dyt', text: '64' },
            { name: 'O_hol_dyt', text: '24.1' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.3' },
            { name: 'FO2_hol_dyt', text: '1251' },
            { name: 'N2', text: '60.0' },
            { name: 'CO', text: '20.4' },
            { name: 'CO2', text: '18.4' },
            { name: 'H2_tryb', text: '0.7' },
            { name: 'Nco_tryb', text: '47.4' },
            { name: 'Q_domG_tryb', text: '654' },
            { name: 'P_vozd_tryb', text: '10' },
            { name: 'P_gaza_tryb', text: '19' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_step_isp', text: '68,6', opacity: '1' },
            { name: 'HCO_step_isp', text: '48,6' },
            { name: 'Tkyp_3', text: '1244' },
            { name: 'Tkyp_2', text: '1206' },
            { name: 'Tkyp_1', text: '1197' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '130' },
            { name: 'Tdym_2', text: '187' },
            { name: 'Tdym_1', text: '282' },
            { name: 'P_Os_szat_voz', text: '8.38' },
            { name: 'T_Os_szat_voz', text: '30' },
            { name: 'Temp_peref_1', text: '80' },
            { name: 'Temp_peref_2', text: '72' },
            { name: 'Temp_peref_3', text: '78' },
            { name: 'Temp_peref_4', text: '73' },
            { name: 'Temp_peref_5', text: '74' },
            { name: 'Temp_peref_6', text: '76' },
            { name: 'Temp_peref_7', text: '74' },
            { name: 'Temp_peref_8', text: '71' },
            { name: 'Temp_peref_9', text: '74' },
            { name: 'Temp_peref_10', text: '61' },
            { name: 'Temp_peref_11', text: '64' },
            { name: 'Temp_peref_12', text: '70' },
            { name: 'Temp_peref_13', text: '101' },
            { name: 'Temp_peref_14', text: '80' },
            { name: 'Temp_peref_15', text: '90' },
            { name: 'Temp_peref_16', text: '82' },
            //// { name: 'T1', text: '156' },
            //// { name: 'T2', text: '155' },
            //// { name: 'T3', text: '155' },
            //// { name: 'T4', text: '146' },
            { name: 'P_2', text: '1.05' },
            { name: 't_gor_dut', text: '1197' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,59' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '256648' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0.0' },
            { name: 'P_vbls', text: '0.25' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.10' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.79' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.69' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2521' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1437', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1436', opacity: '1' },
            { name: 'L3_elem', color: '#ffff0f' },
            { name: 'P_tryba_1_590', text: '0.27' },
            { name: 'P_tryba_1_591', text: '0.27' },
            { name: 'P_tryba_1_592', text: '0.27' },
            { name: 'P_tryba_1_593', text: '0.27' },
            { name: 'P_tryba_2_1', text: '0.31' },
            { name: 'P_tryba_2_2', text: '0.32' },
            { name: 'P_tryba_2_3', text: '0.31' },
            { name: 'P_tryba_2_4', text: '0.31' },
            { name: 'P_tryba_3_590', text: '0.35' },
            { name: 'P_tryba_3_591', text: '0.35' },
            { name: 'P_tryba_4_1', text: '2.70' },
            { name: 'P_tryba_4_2', text: '2.05' },
            { name: 'P_tryba_4_3', text: '2.82' },
            { name: 'P_tryba_4_4', text: '2.00' },
            { name: 'P_tryba_5_1', text: '0.85' },
            { name: 'P_tryba_5_2', text: '1.45' },
            { name: 'P_tryba_5_3', text: '1.81' },
            { name: 'P_tryba_5_4', text: '2.70' },
            { name: 'V_dyt', text: '187.4' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '28.6' },
            { name: 'ydel_tep_17', text: '46.7' },
            { name: 'ydel_tep_16', text: '31.6' },
            { name: 'ydel_tep_15', text: '43.3' },
            { name: 'ydel_tep_12_14', text: '77.2' },
            { name: 'ydel_tep_10_11', text: '33.9' },
            { name: 'ydel_tep_9', text: '33.3' },
            { name: 'ydel_tep_8', text: '32.0' },
            { name: 'ydel_tep_7', text: '35.4' },
          ]
        }
      },
      startTime: timeDiff + 354.01,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0259',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0107',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0836',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0647',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '3328',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1.094',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.13',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0144',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0181',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0098',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0182',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0166',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0782',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1198',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '1112',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '1113',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '1467',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '0112',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2344',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '2473',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.5',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '124.3',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '015.2',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 354.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.93',
      },
      startTime: timeDiff + 354.02,
    },
    ////-----------------------------------48//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 355,
    }, {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 359.1,
      human: true,
    },
    ////--------------------------------11----------------------------------------//49//-new   
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 360,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 362,
      human: true,
    },
    {
      text: 'На фурмах 1 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo22',
      startTime: timeDiff + 363,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 368,
    },
    {
      text: 'Делаем 0,8 кг. Открываем свечу.',
      sender: 'Мастер печи',
      audio: 'tts-vo23',
      startTime: timeDiff + 369,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 372,
      human: true,
    },
    {
      text: 'Приступаю к выполнению.',
      sender: 'Газовщик',
      audio: 'tts-vo24',
      startTime: timeDiff + 373,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 376,
    },
    // ilay ne vido
    {
      action: {
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 376.1,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.26',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.8',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '023.5',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0003',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '112.0',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.4',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 376.12,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.21',
      },
      startTime: timeDiff + 376.12,
    },
    ////--------------------------------12----------------------------------------//50//-new
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ»',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 379,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 380,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 381,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '56' },
            { name: 'H_progres_56', opacity: 1 },
            { name: 'P_2', text: '1.05' },
          ]
        }
      },
      startTime: timeDiff + 381.1,
    },
    // ilay   tables-NO
    {
      action: {
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 381.11,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0252',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0096',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0756',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0592',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '3211',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1012',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.28',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0166',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0189',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0192',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0154',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0154',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0650',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1159',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '1463',
      },
      startTime: timeDiff + 381.12,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.25',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '084.0',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '037.5',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0016',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '313.4 ',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.4',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.21',
      },
      startTime: timeDiff + 381.13,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 381.14,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 381.14,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 381.14,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 381.14,
    },
    ////-----------------------------------51//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 382,
    }, {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 386.1,
      human: true,
    },
    ////--------------------------------13----------------------------------------//52
    {
      scenarioText: 'Открыть нижний шихтовый затвор.',
      text: 'Нажать на пульте управления БЗУ кнопку «Открыт» маркировки «Нижний шихтовый затвор».',
      sender: 'Система',
      audio: 'tts-25',
      startTime: timeDiff + 387,
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
      startTime: timeDiff + 388.5,
    },
    {
      action: {
        target3D: 'Rectangle076',
      },
      startTime: timeDiff + 390,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 391,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 391.5,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 392,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 392.5,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 393,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 393.5,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 394,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 394.5,
    },
    // ilay
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.28',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '067.3',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '042.6',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '094.1',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '044.2',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 394.51,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.16',
      },
      startTime: timeDiff + 394.51,
    },
    {
      text: 'Нажать на кнопку "Сброс сигнала тревоги" на ПУ БЗУ. ',
      sender: 'Система',
      startTime: timeDiff + 394.9,
    },
    {
      action: {
        target3D: 'Rectangle053',
      },
      startTime: timeDiff + 395,
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
      startTime: timeDiff + 395.5,
    },
    // ilay
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.28',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '070.9',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '042.6',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0026',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '058.4',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '044.5',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.16',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0732',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '3233',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0986',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.18',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0170',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0154',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0180',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0164',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0678',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 395.51,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1157',
      },
      startTime: timeDiff + 395.51,
    },
    ////--------------------------------14----------------------------------------//53//-new
    {
      scenarioText: 'Продолжить приоткрывать клапан «СНОРТ».',
      sender: 'Система',
      startTime: timeDiff + 399,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 400,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 401,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '60' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_67', opacity: '0' },
            { name: 'H_progres_89', opacity: '0' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'P_2', text: '0.88' },
          ]
        }
      },
      startTime: timeDiff + 401.5,
    },
    // ilay bzu dp-ne-vidno
    {
      action: {
        window2D: {
          elements: [
            { name: 'B1_nomerstr', text: '3' }, // 
            { name: 'B2_nomerstr', text: '2' }, // 
            { name: 'T3_nomerstr', text: '3' }, // 
            { name: 'T2_nomerstr', text: '4' }, // 
            { name: 'T1_nomerstr', text: '4' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'К' }, // 
            { name: 'T2_Tip_text', text: 'Р' }, // 
            { name: 'T1_Tip_text', text: 'Р' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#008600' }, // 
            { name: 'T2_color', color: '#860004' }, // 
            { name: 'T1_Tip', color: '#D0D1D3' }, // #D0D1D3  #860004   #008600
            { name: 'B1_ves', text: '19.7' }, // 
            { name: 'B2_ves', text: '18.3' }, // 
            { name: 'T3_ves', text: '18.3' }, // 
            { name: 'T2_ves', text: '-1.9' }, // 
            { name: 'T1_ves', text: '-1.6' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#860004' }, // str 2 color
            { name: 'K_str1', color: '#008600' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'str51_down', text: 'К' }, // str 51 color
          ]
        }
      },
      startTime: timeDiff + 401.51,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.0',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '314.8',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.21',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.2',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.5',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 401.52,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.70',
      },
      startTime: timeDiff + 401.52,
    },
    ////-----------------------------------54//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 402,
    }, {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 406.1,
      human: true,
    },
    ////--------------------------------15----------------------------------------//55//-new
    {
      scenarioText: 'Выгрузить кокс и остановить загрузку.',
      sender: 'Система',
      audio: 'tts-27',
      startTime: timeDiff + 407,
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
      startTime: timeDiff + 410,
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
      startTime: timeDiff + 410.3,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '20' },
          ]
        }
      },
      startTime: timeDiff + 410.6,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '15' },
          ]
        }
      },
      startTime: timeDiff + 411,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '10' },
          ]
        }
      },
      startTime: timeDiff + 411.3,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '5' },
          ]
        }
      },
      startTime: timeDiff + 411.6,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '0' },
          ]
        }
      },
      startTime: timeDiff + 412,
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
      startTime: timeDiff + 412.1,
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
      startTime: timeDiff + 413,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl.Oh.NGUK2_1', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 413.5,
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
      startTime: timeDiff + 413.6,
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
      startTime: timeDiff + 414,
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
      startTime: timeDiff + 415,
    },
    { //3D
      text: 'На ПУ БЗУ нажать "Приостановить подачу материала".',
      sender: 'Система',
      startTime: timeDiff + 415.1,
    },
    { //3D
      action: {
        target3D: 'Rectangle056',
      },
      startTime: timeDiff + 415.2,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle056',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 415.3,
    },
    // ilay dp 
    {
      action: {
        window2D: {
          elements: [
            // dp
            // { name: 'radar1_text', text: '1.21' },
            { name: 'radar2_text', text: '1.23' },
            // { name: 'radar3_text', text: '-1.66' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100', opacity: 1 },
            { name: 'AKZ_45-100', opacity: 1 },
            { name: 'AKZ_45', opacity: 1 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            // { name: 'EVS_DP7_O', text: '54335' },
            { name: 'EVD1_O', text: '11418' },
            { name: 'EVS_DP7_F', text: '7166' },
            { name: 'EVD1_F', text: '311876' },
            { name: 'EVD_F', text: '212344' },
            { name: 'P_1', text: '0.88' },
            { name: 'F_evd', text: '5188' },
            { name: 'F_hol_dyt', text: '1879' },
            { name: 'T_hol_dyt', text: '63' },
            { name: 'O_hol_dyt', text: '24.5' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.3' },
            { name: 'FO2_hol_dyt', text: '1244' },
            { name: 'N2', text: '63.1' },
            { name: 'CO', text: '20.3' },
            { name: 'CO2', text: '18.3' },
            { name: 'H2_tryb', text: '0.7' },
            { name: 'Nco_tryb', text: '47.4' },
            { name: 'Q_domG_tryb', text: '653' },
            { name: 'P_vozd_tryb', text: '7' },
            { name: 'P_gaza_tryb', text: '19' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_step_isp', text: '68,2', opacity: '1' },
            { name: 'HCO_step_isp', text: '48,6' },
            { name: 'Tkyp_3', text: '1241' },
            { name: 'Tkyp_2', text: '1233' },
            { name: 'Tkyp_1', text: '1184' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '132' },
            { name: 'Tdym_2', text: '188' },
            { name: 'Tdym_1', text: '279' },
            { name: 'P_Os_szat_voz', text: '8.36' },
            { name: 'T_Os_szat_voz', text: '31' },
            { name: 'Temp_peref_1', text: '79' },
            { name: 'Temp_peref_2', text: '79' },
            { name: 'Temp_peref_3', text: '77' },
            { name: 'Temp_peref_4', text: '73' },
            { name: 'Temp_peref_5', text: '79' },
            { name: 'Temp_peref_6', text: '73' },
            { name: 'Temp_peref_7', text: '73' },
            { name: 'Temp_peref_8', text: '76' },
            { name: 'Temp_peref_9', text: '78' },
            { name: 'Temp_peref_10', text: '68' },
            { name: 'Temp_peref_11', text: '64' },
            { name: 'Temp_peref_12', text: '78' },
            { name: 'Temp_peref_13', text: '101' },
            { name: 'Temp_peref_14', text: '79' },
            { name: 'Temp_peref_15', text: '90' },
            { name: 'Temp_peref_16', text: '89' },
            //// { name: 'T1', text: '156' },
            //// { name: 'T2', text: '155' },
            //// { name: 'T3', text: '155' },
            //// { name: 'T4', text: '146' },
            { name: 'P_2', text: '0.83' },
            { name: 't_gor_dut', text: '1195' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,61' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '29287' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0.0' },
            { name: 'P_vbls', text: '0.23' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.07' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.59' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.52' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2537' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1482', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1396', opacity: '1' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '1.29' },
            { name: 'P_tryba_1_591', text: '1.29' },
            { name: 'P_tryba_1_592', text: '1.29' },
            { name: 'P_tryba_1_593', text: '1.29' },
            // { name: 'P_tryba_2_1', text: '0.31' },
            // { name: 'P_tryba_2_2', text: '0.32' },
            // { name: 'P_tryba_2_3', text: '0.31' },
            // { name: 'P_tryba_2_4', text: '0.31' },
            // { name: 'P_tryba_3_590', text: '0.35' },
            // { name: 'P_tryba_3_591', text: '0.35' },
            // { name: 'P_tryba_4_1', text: '2.70' },
            // { name: 'P_tryba_4_2', text: '2.05' },
            // { name: 'P_tryba_4_3', text: '2.82' },
            // { name: 'P_tryba_4_4', text: '2.00' },
            // { name: 'P_tryba_5_1', text: '0.85' },
            // { name: 'P_tryba_5_2', text: '1.45' },
            // { name: 'P_tryba_5_3', text: '1.81' },
            // { name: 'P_tryba_5_4', text: '2.70' },
            // { name: 'V_dyt', text: '187.4' },
            // { name: 'fyrm_v_rab', text: '0' },
            // { name: 'ydel_tep_18',    text: '28.6' },
            // { name: 'ydel_tep_17',    text: '46.7' },
            // { name: 'ydel_tep_16',    text: '31.6' },
            // { name: 'ydel_tep_15',    text: '43.3' },
            // { name: 'ydel_tep_12_14', text: '77.2' },
            // { name: 'ydel_tep_10_11', text: '33.9' },
            // { name: 'ydel_tep_9',     text: '33.3' },
            // { name: 'ydel_tep_8',     text: '32.0' },
            // { name: 'ydel_tep_7',     text: '35.4' },
          ]
        }
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0236',
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0072',
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0536',
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0165',
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '2538',
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0032',
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '0007',
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '2128',
      },
      startTime: timeDiff + 415.31,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle113',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle112',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle068',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle086',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle087',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle088',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle089',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle090',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle091',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle098',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle099',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle100',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle101',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle102',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle103',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle105',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle106',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle107',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle092',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle093',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle094',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle095',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle096',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle085',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle058',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle059',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle060',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '152.5',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.20',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '011.4',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '038.3',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '042.6',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 415.32,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 415.32,
    },
    ////--------------------------------16----------------------------------------//56//-new
    {
      text: 'Продолжить приоткрывать клапан «СНОРТ».',
      sender: 'Система',
      startTime: timeDiff + 416,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 416,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 417,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '60' },
            { name: 'H_progres_60', opacity: 1 },
            { name: 'P_2', text: '0.83' },
            { name: 'btn_ZapSledPorc_border', color: '#00FF00' },
            { name: 'btn_SledPorc_border', color: 'start' },
            { name: 'arrow_right', opacity: '0' },
            { name: 'right_rect_yellow_arrow', opacity: '1', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 417.1,
    },
    // ilay dp - bzu f NEW
    {
      action: {
        window2D: {
          elements: [
            { name: 'EVS_DP7_F', text: '7187' },
            { name: 'P_1', text: '0.89' },
            { name: 'F_evd', text: '5238' },
            { name: 'F_hol_dyt', text: '1787' },
            { name: 'T_hol_dyt', text: '62' },
            { name: 'O_hol_dyt', text: '24.5' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.4' },
            { name: 'FO2_hol_dyt', text: '1296' },
            { name: 'N2', text: '60.1' },
            { name: 'CO', text: '70.3' },
            { name: 'CO2', text: '18.3' },
            { name: 'H2_tryb', text: '0.7' },
            { name: 'Nco_tryb', text: '47.4' },
            // { name: 'Q_domG_tryb',  text: '654' },
            { name: 'P_vozd_tryb', text: '2' },
            // { name: 'P_gaza_tryb',  text: '19' },
            { name: 'CO_bor_tryb', text: '0.00' },
            // { name: 'H_step_isp',   text: '68,6', opacity: '1' },
            // { name: 'HCO_step_isp', text: '48,6' },
            { name: 'Tdym_3', text: '132' },
            { name: 'Tdym_2', text: '184' },
            { name: 'Tdym_1', text: '176' },
            { name: 'P_Os_szat_voz', text: '8.41' },
            { name: 'T_Os_szat_voz', text: '31' },
            //// { name: 'T1', text: '156' },
            //// { name: 'T2', text: '155' },
            //// { name: 'T3', text: '155' },
            //// { name: 'T4', text: '146' },
            { name: 'P_2', text: '0.78' },
            { name: 't_gor_dut', text: '1195' },
            // { name: 'H_Os_szat_voz', text: '0' },
            // { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,61' },
            { name: 'F_prir_gaz_table', text: '30000' },
            // { name: 'F_pg_sym_prir_gaz', text: '0' },
            // { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '172887' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0.0' },
            { name: 'P_vbls', text: '0.22' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.06' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.55' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.48' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2533' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1142', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1434', opacity: '1' },
            { name: 'L3_elem', color: '#ffff0f' },
            // bzu
            { name: 'ochistka sedel_P', text: '6.12' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.22' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.5' },
            { name: 'B1_vibratciya', text: '11' },
            { name: 'V linii P_B1', text: '213' }, // Б1
            { name: 'V linii dP_B1', text: '209' },
            { name: 'V sisteme vzveh_B1', text: '192' },
            { name: 'V linii P_B2', text: '180' }, // Б2
            { name: 'V linii dP_B2', text: '276' },
            { name: 'V sisteme vzveh_B2', text: '167' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.22' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.23' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.23' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.23' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '139' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '1' },
            { name: 'ugol naklona_tekushiy', text: '14.2' },
            { name: 'ugol naklona_zadanyi', text: '14.3' },
            // { name: 'gradusow ugol', text: '281.3' },
            // { name: 'prochent1', text: '35' }, // %
            // { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            // { name: 'zagr_ramka_l',  color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', opacity: '0' },
            // { name: 'left_ellipse',  opacity: '0' }, // K
            // { name: 'left_matrix_text',  text: '12' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.83' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '21.9' }, // T
            { name: 'matrix 1 str 1_M', text: '15.7' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'HZ1', text: '37.3' }, // ШЗ
            // { name: 'left_vugr_rect', color: '#00FF00' }, // 
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'verx', text: '-0' }, // цифры сверху
            { name: 'tr_3_str_1_', text: '4' }, // 
            { name: 'tr_2_str_2_', text: '4' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '121' }, // длина порции
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '3' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.13' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '0.1' }, // t
            { name: 'pust_ramka_r', opacity: '1' }, // 
            { name: 'r_pust', opacity: '1' }, // 
            // { name: 'matrix 1 str 14_M', text: '47.7' }, // 
            { name: 'HZ2', text: '38.0' }, // 
            { name: 'prochent2', text: '14' }, // 
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '0' }, // красная палка справа
            { name: 'arrow_right', opacity: '1' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '30' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '1453' }, // 
            { name: 'B2_Dp bunker', text: '0.00' }, // 
            { name: 'B2_P compens', text: '0.27' }, // 
            { name: 'B2_time vygruski', text: '90' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '99' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '14.3' }, // 
            { name: 'B2_vibratciya', text: '47' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '7' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '0.78' }, // 
            { name: 'radar 1', text: '0.61' }, // 
            { name: 'radar 2', text: '1.83' }, // 
            { name: 'mexan', text: '1.97' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '6' }, // 
            { name: 'bg_vRabote', color: '#EADCC2' }, // в работе
            { name: 'ismetir_ramki', color: '#EADCC2' }, // в работе
            { name: 'B1_nomerstr', text: '4' }, // 
            { name: 'B2_nomerstr', text: '3' }, // 
            { name: 'T3_nomerstr', text: '4' }, // 
            { name: 'T2_nomerstr', text: '3' }, // 
            { name: 'T1_nomerstr', text: '5' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'Р' }, // 
            { name: 'T2_Tip_text', text: 'Р' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#860004' }, // 
            { name: 'T2_color', color: '#860004' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            // { name: 'B1_ves', text: '16.4' }, // 
            // { name: 'B2_ves', text: '93.0' }, // 
            // { name: 'T3_ves', text: '93.0' }, // 
            // { name: 'T2_ves', text: '93.0' }, // 
            // { name: 'T1_ves', text: '19.9' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#860004' }, // str 2 color
            { name: 'K_str1', color: '#008600' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'str51_down', text: 'К' }, // str 51 color
          ]
        }
      },
      startTime: timeDiff + 417.11,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '013.8',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '192.4',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.20',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.0',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '038.1',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '032.2',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0082',
      },
      startTime: timeDiff + 417.12,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.59',
      },
      startTime: timeDiff + 417.12,
    },
    ////-----------------------------------57//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 418,
    }, {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 422.1,
      human: true,
    },
    ////--------------------------------17----------------------------------------//58//-new
    {
      // scenarioText: 'Схема БЗУ и нажать на клавишу «Пауза» кнопка.',
      text: 'Загрузка приостановлена.',
      scenarioText: 'На схеме БЗУ нажать на кнопка «Пауза».',
      sender: 'Система',
      audio: 'tts-28',
      startTime: timeDiff + 423,
    },
    {
      action: {
        target2D: 'bzu_pause_btn',
        window2D: {
          elements: [
            { name: 'right_rect_yellow_arrow', color: 'start' },
            { name: 'btn_Pause_border', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 423.1,
      human: true
    },
    // ilay bzu f
    {
      action: {
        window2D: {
          elements: [
            // bzu
            { name: 'ochistka sedel_P', text: '6.13' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.22' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.3' },
            { name: 'B1_vibratciya', text: '7' },
            { name: 'V linii P_B1', text: '202' }, // Б1
            { name: 'V linii dP_B1', text: '226' },
            { name: 'V sisteme vzveh_B1', text: '134' },
            { name: 'V linii P_B2', text: '149' }, // Б2
            { name: 'V linii dP_B2', text: '275' },
            { name: 'V sisteme vzveh_B2', text: '169' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.22' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.23' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.23' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.23' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '150' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '142' },
            { name: 'stanciia', text: '1' },
            { name: 'ugol naklona_tekushiy', text: '14.2' },
            { name: 'ugol naklona_zadanyi', text: '14.3' },
            { name: 'gradusow ugol', text: '281.3' },
            // { name: 'prochent1', text: '35' }, // %
            // { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            // { name: 'zagr_ramka_l',  color: '#00FF00' }, // загр слева
            // не хватает схемы 
            // { name: 'left_ellipse',  opacity: '0' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.00' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '52.8' }, // T
            { name: 'matrix 1 str 1_M', text: '27.3' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'HZ1', text: '37.3' }, // ШЗ
            { name: 'left_vugr_rect', color: '#00FF00' },
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'verx', text: '-01' }, // цифры сверху
            { name: 'tr_3_str_1_', text: '4' }, // 
            { name: 'tr_2_str_2_', text: '4' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '121' }, // длина порции
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '3' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.19' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '-0.0' }, // t
            { name: 'pust_ramka_r', opacity: '1' }, // 
            { name: 'r_pust', opacity: '1' }, // 
            { name: 'matrix 1 str 14_M', text: '0.5' }, //  меленькое окошко после 14_T
            { name: 'HZ2', text: '25.1' }, // 
            { name: 'prochent2', text: '12' }, // 
            { name: 'right_rect_yellow_arrow', opacity: '1' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '0' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '30' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '1453' }, // 
            { name: 'B2_Dp bunker', text: '-0.00' }, // 
            { name: 'B2_P compens', text: '0.27' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '99' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.3' }, // 
            { name: 'B2_vibratciya', text: '47' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '0.75' }, // 
            { name: 'radar 1', text: '0.61' }, // 
            { name: 'radar 2', text: '1.05' }, // 
            { name: 'mexan', text: '-1.67' }, // 
            { name: 'do zapuska mexan min', text: '1' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#EADCC2' }, // в работе
            { name: 'ismetir_ramki', color: '#EADCC2' }, // в работе
            { name: 'B1_nomerstr', text: '4' }, // 
            { name: 'B2_nomerstr', text: '3' }, // 
            { name: 'T3_nomerstr', text: '4' }, // 
            { name: 'T2_nomerstr', text: '4' }, // 
            { name: 'T1_nomerstr', text: '5' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'Р' }, // 
            { name: 'T2_Tip_text', text: 'Р' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#860004' }, // 
            { name: 'T2_color', color: '#860004' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            // { name: 'B1_ves', text: '16.4' }, // 
            // { name: 'B2_ves', text: '93.0' }, // 
            // { name: 'T3_ves', text: '93.0' }, // 
            // { name: 'T2_ves', text: '93.0' }, // 
            // { name: 'T1_ves', text: '19.9' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#860004' }, // str 2 color
            { name: 'K_str1', color: '#008600' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'str51_down', text: 'К' }, // str 51 color
          ]
        }
      },
      startTime: timeDiff + 423.11,
    },
    ////--------------------------------18----------------------------------------//59//-new 
    {
      scenarioText: 'Открыть атмосферные клапаны.',
      text: 'На ПУ ДП-6 перевести тумблеры клапанов 1, 2, 3 до щелчка в положение «2».',
      sender: 'Система',
      audio: 'tts-29',
      startTime: timeDiff + 424,
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
      startTime: timeDiff + 426,
      human: true,
    },
    // ilay
    {
      action: {
        target3D: 'Lamp_Red_007',
        material: 'Red_Lamp_Off',
      },
      startTime: timeDiff + 426.01,
    }, {
      action: {
        target3D: 'Lamp_Red_006',
        material: 'Red_Lamp_Off',
      },
      startTime: timeDiff + 426.01,
    }, {
      action: {
        target3D: 'Lamp_Red_005',
        material: 'Red_Lamp_Off',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'Lamp_Green_007',
        material: 'Green_Lamp_On',
      },
      startTime: timeDiff + 426.01,
    }, {
      action: {
        target3D: 'Lamp_Green_006',
        material: 'Green_Lamp_On',
      },
      startTime: timeDiff + 426.01,
    }, {
      action: {
        target3D: 'Lamp_Green_005',
        material: 'Green_Lamp_On',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.133',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.037',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.564',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.468',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '2779.',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.738',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '00.67',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.14',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0114.',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0156.',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0174.',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0148.',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0696',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1194',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '1020',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '1020',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '0484',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '0409',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2310',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '0455',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '2435',
      },
      startTime: timeDiff + 426.01,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 426.01,
    },
    ////--------------------------------19----------------------------------------//60//-new 
    {
      text: 'На ПУ ДП-6 перевести тумблеры клапанов 1, 2, 3 до щелчка в положение «0».',
      sender: 'Система',
      startTime: timeDiff + 432,
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
      startTime: timeDiff + 432.1,
      human: true,
    },
    {
      text: 'Атмосферные клапаны открыты.',
      sender: 'Система',
      audio: 'tts-30',
      startTime: timeDiff + 432.2,
    },
    // ilay  
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '0481',
      },
      startTime: timeDiff + 432.21,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'Rectangle102',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '083.2',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '168.7',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '00.13',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '014.4',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0096',
      },
      startTime: timeDiff + 432.22,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.69',
      },
      startTime: timeDiff + 432.22,
    },
    ////--------------------------------20----------------------------------------//61//-new 
    { // 3D
      scenarioText: 'По рации сообщить мастеру печи о выполненной операции.',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 436,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 437,
      human: true,
    },
    {
      text: 'Атмосферные клапана открыты. На фурмах 0,75 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo25',
      startTime: timeDiff + 438,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 444,
    },
    // ilay
    {
      action: {
        window2D: {
          elements: [
            // dp
            // { name: 'radar1_text', text: '1.21' },
            { name: 'radar2_text', text: '1.11' },
            { name: 'radar3_text', text: '0.66' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100', opacity: 1 },
            { name: 'AKZ_45-100', opacity: 1 },
            { name: 'AKZ_45', opacity: 1 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '54481' },
            { name: 'EVD1_O', text: '11198' },
            { name: 'EVS_DP7_F', text: '7193' },
            { name: 'EVD1_F', text: '314218' },
            { name: 'EVD_F', text: '313401' },
            { name: 'P_1', text: '0.76' },
            { name: 'F_evd', text: '5174' },
            { name: 'F_hol_dyt', text: '1817' },
            { name: 'T_hol_dyt', text: '62' },
            { name: 'O_hol_dyt', text: '24.6' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.3' },
            { name: 'FO2_hol_dyt', text: '1235' },
            { name: 'N2', text: '59.3' },
            { name: 'CO', text: '19.5' },
            { name: 'CO2', text: '19.9' },
            { name: 'H2_tryb', text: '0.8' },
            { name: 'Nco_tryb', text: '50.6' },
            { name: 'Q_domG_tryb', text: '626' },
            { name: 'P_vozd_tryb', text: '0' },
            { name: 'P_gaza_tryb', text: '16' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_step_isp', text: '67.1', opacity: '1' },
            { name: 'HCO_step_isp', text: '51.5' },
            { name: 'Tkyp_3', text: '1239' },
            { name: 'Tkyp_2', text: '1201' },
            { name: 'Tkyp_1', text: '1192' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '132' },
            { name: 'Tdym_2', text: '186' },
            { name: 'Tdym_1', text: '278' },
            { name: 'P_Os_szat_voz', text: '8.36' },
            { name: 'T_Os_szat_voz', text: '31' },
            { name: 'Temp_peref_1', text: '78' },
            { name: 'Temp_peref_2', text: '71' },
            { name: 'Temp_peref_3', text: '76' },
            { name: 'Temp_peref_4', text: '72' },
            { name: 'Temp_peref_5', text: '72' },
            { name: 'Temp_peref_6', text: '74' },
            { name: 'Temp_peref_7', text: '73' },
            { name: 'Temp_peref_8', text: '70' },
            { name: 'Temp_peref_9', text: '73' },
            { name: 'Temp_peref_10', text: '60' },
            { name: 'Temp_peref_11', text: '63' },
            { name: 'Temp_peref_12', text: '69' },
            { name: 'Temp_peref_13', text: '101' },
            { name: 'Temp_peref_14', text: '78' },
            { name: 'Temp_peref_15', text: '87' },
            { name: 'Temp_peref_16', text: '80' },
            { name: 'T1', text: '143' },
            { name: 'T2', text: '126' },
            { name: 'T3', text: '143' },
            { name: 'T4', text: '121' },
            { name: 'P_2', text: '0.72' },
            { name: 't_gor_dut', text: '1194' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,61' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '0' },
            { name: 'F_obsh_pyt', text: '0' },
            { name: 'F_tek_pyt', text: '0.0' },
            { name: 'P_vbls', text: '0.08' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.06' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.62' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.56' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2528' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1449', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1436', opacity: '1' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '0.10' },
            { name: 'P_tryba_1_591', text: '0.10' },
            { name: 'P_tryba_1_592', text: '0.10' },
            { name: 'P_tryba_1_593', text: '0.10' },
            { name: 'P_tryba_2_1', text: '0.13' },
            { name: 'P_tryba_2_2', text: '0.13' },
            { name: 'P_tryba_2_3', text: '0.13' },
            { name: 'P_tryba_2_4', text: '0.13' },
            { name: 'P_tryba_3_590', text: '0.16' },
            { name: 'P_tryba_3_591', text: '0.16' },
            { name: 'P_tryba_4_1', text: '2.79' },
            { name: 'P_tryba_4_2', text: '2.08' },
            { name: 'P_tryba_4_3', text: '2.90' },
            { name: 'P_tryba_4_4', text: '2.10' },
            { name: 'P_tryba_5_1', text: '0.80' },
            { name: 'P_tryba_5_2', text: '1.50' },
            { name: 'P_tryba_5_3', text: '1.86' },
            { name: 'P_tryba_5_4', text: '2.70' },
            { name: 'V_dyt', text: '181.4' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '28.2' },
            { name: 'ydel_tep_17', text: '45.0' },
            { name: 'ydel_tep_16', text: '30.7' },
            { name: 'ydel_tep_15', text: '40.9' },
            { name: 'ydel_tep_12_14', text: '75.4' },
            { name: 'ydel_tep_10_11', text: '29.3' },
            { name: 'ydel_tep_9', text: '29.7' },
            { name: 'ydel_tep_8', text: '29.5' },
            { name: 'ydel_tep_7', text: '35.4' },
            // bzu++
            { name: 'ochistka sedel_P', text: '6.15' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.09' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.3' },
            { name: 'B1_vibratciya', text: '3' },
            { name: 'V linii P_B1', text: '204' }, // Б1
            { name: 'V linii dP_B1', text: '229' },
            { name: 'V sisteme vzveh_B1', text: '193' },
            { name: 'V linii P_B2', text: '151' }, // Б2
            { name: 'V linii dP_B2', text: '276' },
            { name: 'V sisteme vzveh_B2', text: '167' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.08' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.09' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.09' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.09' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '150' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '1' },
            { name: 'ugol naklona_tekushiy', text: '14.3' },
            { name: 'ugol naklona_zadanyi', text: '14.3' },
            { name: 'gradusow ugol', text: '122.3' },
            { name: 'prochent1', text: '0' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', opacity: '1' },
            { name: 'left_ellipse', opacity: '1', color: "#ff1e00" }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.00' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '91.6' }, // T
            { name: 'matrix 1 str 1_M', text: '46.8' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.4' }, // ШЗ
            { name: 'left_vugr_rect', color: '#00FF00' },
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
          ]
        }
      },
      startTime: timeDiff + 444.01,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 444.02,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 444.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '092.2',
      },
      startTime: timeDiff + 444.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '325.7',
      },
      startTime: timeDiff + 444.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 444.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.71',
      },
      startTime: timeDiff + 444.02,
    },
    ////--------------------------------21----------------------------------------//62//-new 
    { // 3D
      scenarioText: 'Мастер печи по рации сообщает действия.',
      sender: 'Система',
      startTime: timeDiff + 446,
    },
    {
      text: 'Закрывайте кислород и делайте 0,5 кг на фурмах.',
      sender: 'Мастер печи',
      audio: 'tts-vo26',
      startTime: timeDiff + 447,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 452.5,
      human: true,
    },
    {
      text: 'Закрываю кислород полностью и делаю 0,5.',
      sender: 'Газовщик',
      audio: 'tts-vo27',
      startTime: timeDiff + 453.5,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 458.15,
    },
    // ilay bzu f new
    {
      action: {
        window2D: {
          elements: [
            // bzu++
            { name: 'ochistka sedel_P', text: '6.16' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.10' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '104' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.0' },
            { name: 'B1_vibratciya', text: '2' },
            { name: 'V linii P_B1', text: '204' }, // Б1
            { name: 'V linii dP_B1', text: '229' },
            { name: 'V sisteme vzveh_B1', text: '193' },
            { name: 'V linii P_B2', text: '149' }, // Б2
            { name: 'V linii dP_B2', text: '274' },
            { name: 'V sisteme vzveh_B2', text: '167' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.09' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.10' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.10' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.10' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '1' },
            { name: 'ugol naklona_tekushiy', text: '14.2' },
            { name: 'ugol naklona_zadanyi', text: '14.3' },
            { name: 'gradusow ugol', text: '251.2' },
            { name: 'prochent1', text: '0' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#E6E6E6' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', opacity: '1' },
            { name: 'left_ellipse', opacity: '1', color: "#ff1e00" }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.00' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '91.1' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.3' }, // ШЗ
            { name: 'left_vugr_rect', color: '#00FF00' },
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'verx', text: '72' }, // цифры сверху
            { name: 'tr_3_str_1_', text: '4' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' }, //  
            { name: 'dlina_porcii', text: '125' }, // длина порции
            { name: 'zagr_ramka_r', color: '#00FF00' }, // загр справа
            { name: 'right_matrix_text', text: '3' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.00' }, // 
            { name: 'matrix 1 str 14_T', text: '0.1' }, // 
            { name: 'pust_ramka_r', opacity: '1' }, // 
            { name: 'r_pust', opacity: '1' }, // 
            { name: 'matrix 1 str 14_M', text: '47.7' }, // 
            { name: 'HZ2', text: '1.4' }, // 
            { name: 'prochent2', text: '0.3' }, //%  справа выше хз2
            // { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '3.96' }, // 
            // { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '29' }, // 
            // { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '0.10' }, // 
            { name: 'B2_P compens', text: '1.11' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '99' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.3' }, // 
            { name: 'B2_vibratciya', text: '56' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            // { name: 'zaprosi_shp_stroka', text: '1' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '0.62' }, // 
            { name: 'radar 1', text: '0.72' }, // 
            { name: 'radar 2', text: '1.11' }, // 
            { name: 'mexan', text: '0.63' }, // 
            { name: 'do zapuska mexan min', text: '1' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#008600' }, // в работе
            { name: 'B1_nomerstr', text: '4' }, // 
            { name: 'B2_nomerstr', text: '3' }, // 
            { name: 'T3_nomerstr', text: '4' }, // 
            { name: 'T2_nomerstr', text: '5' }, // 
            { name: 'T1_nomerstr', text: '5' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'Р' }, // 
            { name: 'T2_Tip_text', text: 'К' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#860004' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            { name: 'B1_ves', text: '82.8' }, // 
            { name: 'B2_ves', text: '18.3' }, // 
            { name: 'T3_ves', text: '83.0' }, // 
            { name: 'T2_ves', text: '18.4' }, // 
            { name: 'T1_ves', text: '18.4' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#008600' }, // str 2 color
            { name: 'K_str1', color: '#008600' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'str51_down', text: 'К' }, // str 51 color
          ]
        }
      },
      startTime: timeDiff + 458.16,
    },
    {
      action: {
        target3D: 'Rectangle085',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 458.17,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 458.17,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '045.8',
      },
      startTime: timeDiff + 458.17,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 458.17,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 458.17,
    },
    ////--------------------------------22----------------------------------------//63//-new 
    {
      scenarioText: 'Сообщить по телефону в "Кислородный цех".',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 459,
    },
    {
      action: {
        target3D: 'PhoneButton017',
      },
      startTime: timeDiff + 460,
      human: true,
    },
    {
      text: 'Закрывайте кислород на выходе.',
      sender: 'Газовщик',
      audio: 'tts-vo28',
      startTime: timeDiff + 461,
    },
    {
      text: 'Выполняю',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo29',
      startTime: timeDiff + 465,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.090',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.072',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.604',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.472',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '2877.',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.697',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '00.70',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.12',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0170.',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0147.',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0169.',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0143.',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0684',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1194',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '1022',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '1022',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '0481',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '0410',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2373',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '0453',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 465.01,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle113',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle112',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle068',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle086',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle087',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle088',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle089',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle090',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle091',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle098',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle099',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle100',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle101',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle102',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle103',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle105',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle106',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle107',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle092',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle093',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle094',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle095',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle096',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle085',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle058',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle059',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle060',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'Rectangle049',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    }, {
      action: {
        target3D: 'Rectangle051',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 465.02,
    }, {
      action: {
        target3D: 'Rectangle048',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    }, {
      action: {
        target3D: 'Rectangle050',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.11',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '276.4',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '00.13',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '037.0',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0096',
      },
      startTime: timeDiff + 465.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 465.02,
    },
    ////--------------------------------23----------------------------------------//64//-new
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 467,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 469.1,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 469.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 470,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 470.5,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '67' },
            { name: 'H_progres_67', opacity: 1 },
            { name: 'P_2', text: '0.66' },
          ]
        }
      },
      startTime: timeDiff + 470.6,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.071',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.052',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.460',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.362',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1736.',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.526',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '00.95',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.40',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0160.',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0136.',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0159.',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0134.',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '07.11',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.39',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1191.',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.12',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.12',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.83',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.380',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '045.1',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.73',
      },
      startTime: timeDiff + 470.61,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 470.62,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 470.62,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.08',
      },
      startTime: timeDiff + 470.62,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '238.9',
      },
      startTime: timeDiff + 470.62,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.07',
      },
      startTime: timeDiff + 470.62,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.2',
      },
      startTime: timeDiff + 470.62,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 470.62,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.93',
      },
      startTime: timeDiff + 470.62,
    },
    {
      action: {
        window2D: {
          elements: [
            // bzu short
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'К' }, // 
            { name: 'T2_Tip_text', text: 'К' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            { name: 'P_str2', color: '#008600' }, // str 2 color
            { name: 'K_str1', color: '#860004' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
          ]
        }
      },
      startTime: timeDiff + 470.63,
    },
    ////-----------------------------------65//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 471,
    },
    {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 475.1,
      human: true,
    },
    ////--------------------------------24----------------------------------------//66//-new 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 476,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 476.1,
      human: true,
    },
    {
      text: 'На фурмах 0,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo30',
      startTime: timeDiff + 477,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 480,
    },
    // ilay
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '068.5',
      },
      startTime: timeDiff + 480.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.08',
      },
      startTime: timeDiff + 480.02,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.070',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.049',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.445',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.350',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1800.',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.510',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0159.',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0135.',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0158.',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.38',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.13',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.383',
      },
      startTime: timeDiff + 480.03,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle068',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle045',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle044',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle082',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle081',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle080',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 480.04,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 480.04,
    },
    ////--------------------------------25----------------------------------------//67//-new 
    { // 3D
      scenarioText: 'БЗУ снять с автоматического режима.',
      audio: 'tts-31',
      sender: 'Система',
      startTime: timeDiff + 482,
    },
    {
      text: 'На ПУ БЗУ нажать на кнопку «Автоматич. СТОП»',
      sender: 'Система',
      action: {
        target3D: 'Rectangle072',
      },
      startTime: timeDiff + 483,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 484,
    },
    // ilay
    {
      action: {
        target3D: 'Rectangle071',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 484.01,
    },
    {
      text: 'На ПУ БЗУ нажать на кнопку «ЗАКРЫТ» «Клапан вторичного выравнивания» слева',
      sender: 'Система',
      action: {
        target3D: 'Rectangle065',
      },
      startTime: timeDiff + 484.1,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 484.3,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 484.4,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 485,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 485.5,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 486,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 486.5,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 487,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 487.5,
    },
    {
      sender: 'Система',
      text: 'На ПУ БЗУ нажать на кнопку «ЗАКРЫТ» «Клапан вторичного выравнивания» справа',
      action: {
        target3D: 'Rectangle046',
      },
      startTime: timeDiff + 487.6,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 487.7,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 488,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 488.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 489,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 489.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 490,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 490.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 491,
    },
    {
      sender: 'Система',
      text: 'На ПУ БЗУ нажать на кнопку «ОТКРЫТ» «Клапан сброса» слева',
      action: {
        target3D: 'Rectangle070',
      },
      startTime: timeDiff + 491.1,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 491.2,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 491.4,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 492,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 492.5,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 493,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 493.5,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 494,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 494.5,
    },
    {
      sender: 'Система',
      text: 'На ПУ БЗУ нажать на кнопку «ОТКРЫТ» «Клапан сброса» справа',
      action: {
        target3D: 'Rectangle115',
      },
      startTime: timeDiff + 494.6,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle114',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 494.7,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 495,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 495.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 496,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 496.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 497,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 497.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 498,
    },// ilay
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.03',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.1',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '170.4',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.16',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.6',
      },
      startTime: timeDiff + 498.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.98',
      },
      startTime: timeDiff + 498.02,
    },
    ////--------------------------------26----------------------------------------//68//-new 
    {
      scenarioText: 'Мастер печи по рации сообщает о следующих операциях',
      startTime: timeDiff + 499,
    },
    {
      text: 'Делаем 0,3кг',
      sender: 'Мастер печи',
      audio: 'tts-vo31',
      startTime: timeDiff + 499.1,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 502,
      human: true,
    },
    {
      text: 'Принимаю, делаю 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo32',
      startTime: timeDiff + 503,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 507,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.068',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.046',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.419',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.331',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1893.',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.482',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.00',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.42',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0156.',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0133.',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0156.',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0132.',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.92',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.39',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1191.',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.12',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.12',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.83',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.387',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '045.1',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 507.02,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 507.02,
    },
    //--------------------------------27----------------------------------------//69//-new  // Газовщик проворачивал клапан 6 раз с интервалом.
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,3кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 507.1,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 509.2,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 510,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 511,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 512,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100', opacity: 1 },
            { name: 'EVS_DP7_O', text: '54213' },
            { name: 'EVD1_O', text: '4504' },
            // луавый эвд 2 - pass
            { name: 'EVS_DP7_F', text: '7208' },
            { name: 'EVS_DP7_F', text: '312898' },
            { name: 'EVD_F', text: '311390' },
            { name: 'P_1', text: '0.32' },
            { name: 'F_evd', text: '5183' },
            { name: 'F_hol_dyt', text: '641' },
            { name: 'T_hol_dyt', text: '58' },
            { name: 'O_hol_dyt', text: '22.9' },
            { name: 'F_par_yvl', text: '1.00' },
            { name: 'par_yvlaz', text: '0.00' },
            // pass
            { name: 'Vlaznost', text: '5.0' },
            { name: 'W_sinij_hol_dyt', text: '8.6' },
            { name: 'FO2_hol_dyt', text: '1139' },
            //////
            { name: 'H_snotr', text: '89' },
            { name: 'H_progres_89', opacity: 1 },
            { name: 'P_2', text: '0.34' },
            { name: 'P_2_rect', color: '#ffff0f' },
            ///////
            { name: '02_trub', text: '0' },
            { name: 'N2', text: '53.7' },
            { name: 'CO', text: '22.3' },
            { name: 'CO2', text: '22.8' },
            { name: 'H2_tryb', text: '0.8' },
            { name: 'Nco_tryb', text: '50.6' },
            { name: 'Q_domG_tryb', text: '715' },
            { name: 'P_vozd_tryb', text: '0' },
            { name: 'P_gaza_tryb', text: '12' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'Tkyp_3', text: '1234' },
            { name: 'Tkyp_2', text: '1195' },
            { name: 'Tkyp_1', text: '1187' },
            { name: 'Tkyp_3_rect', color: '#fff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_1', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_1', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_1', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#ada3b0' },
            { name: 'VNK3_status_2', text: 'Цикл' },
            { name: 'VNK2_status_2', text: 'Цикл' },
            { name: 'VNK1_status_2', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fvozdyh_1', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'Fgaz_1', text: '0' },
            { name: 'Tdym_3', text: '133' },
            { name: 'Tdym_2', text: '185' },
            { name: 'Tdym_1', text: '275' },
            //pass
            { name: 'P_Os_szat_voz', text: '8,31' },
            //pass
            { name: 'T_Os_szat_voz', text: '31' },
          ]
        }
      },
      startTime: timeDiff + 512.1,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.058',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.028',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.287',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.229',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '0857.',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.339',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.17',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.47',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0146.',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0126.',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0146.',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0125.',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.89',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.38',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1190.',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.11',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.11',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.83',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.410',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '045.0',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 512.12,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 512.12,
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
      startTime: timeDiff + 513,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 514,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 515,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 516,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff0000' },
            { name: 'circle_kl002', stroke: '#ff0000' },
            { name: 'circle_kl002', stroke: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 517,
    },// ilay bzu FF
    {
      action: {
        window2D: {
          elements: [
            // bzu
            { name: 'ochistka sedel_P', text: '6.23' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.06' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.0' },
            { name: 'B1_vibratciya', text: '2' },
            { name: 'V linii P_B1', text: '202' }, // Б1
            { name: 'V linii dP_B1', text: '229' },
            { name: 'V sisteme vzveh_B1', text: '193' },
            { name: 'V linii P_B2', text: '150' }, // Б2
            { name: 'V linii dP_B2', text: '276' },
            { name: 'V sisteme vzveh_B2', text: '168' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.05' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.07' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.06' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.07' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '8' },
            { name: 'ugol naklona_tekushiy', text: '46.7' },
            { name: 'ugol naklona_zadanyi', text: '46.7' },
            { name: 'gradusow ugol', text: '145.1' },
            { name: 'prochent1', text: '0' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р', opacity: '1' },
            { name: 'left_ellipse', opacity: '1' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.00' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '93.0' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.4' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#00FF00' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#00FF00' }, // пауза по центру
            // { name: 'leviy', color: '#860004' }, // палка от цифр слева
            { name: 'verx', text: '-0' }, // цифры сверху
            // { name: 'praviy', color: '#860004' }, // палка от цифр справа
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции
            { name: 'tekushiy rezym_A', color: '#CEC7B5' }, // текущий режим А задник
            { name: 'tek rejim_A', color: '#B7B2AE' }, // текущий режим А задник
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.00' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '13.3' }, // t
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            // { name: 'matrix 1 str 14_M', text: '47.7' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '2' }, // % справа
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '31' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '0.06' }, // 
            { name: 'B2_P compens', text: '0.05' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '81' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '47' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '1.07' }, // 
            { name: 'radar 1', text: '1.18' }, // 
            { name: 'radar 2', text: '1.46' }, // 
            { name: 'mexan', text: '1.04' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#2B2A29' }, // в работе
            { name: 'ismetir_ramki', color: '#00FF00' }, // в работе
            { name: 'B1_nomerstr', text: '4' }, // 
            { name: 'B2_nomerstr', text: '5' }, // 
            { name: 'T3_nomerstr', text: '5' }, // 
            { name: 'T2_nomerstr', text: '5' }, // 
            { name: 'T1_nomerstr', text: '5' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'К' }, // 
            { name: 'T2_Tip_text', text: 'К' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            { name: 'B1_ves', text: '93.0' }, // 
            { name: 'B2_ves', text: '13.3' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            { name: 'K_str1', color: '#860004' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'na_conveer_s1_bukca', text: 'Р', opacity: '0' }, // str 2 
            { name: 'str1_down', text: 'Р' }, // str 2 
            { name: 'str51_down', text: 'К' }, // str 51 
            { name: 'str2_P_1', text: '0' }, // str 2-11 t
            { name: 'str2_P_2', text: '0' }, // str 2-10 t
            { name: 'str2_P_3', text: '0' }, // str 2-9 t
            { name: 'str2_P_4', text: '13' }, // str 2-8 t
            { name: 'str2_P_5', text: '13' }, // str 2-7 t
            { name: 'str2_P_6', text: '13' }, // str 2-6 t
            { name: 'str2_P_7', text: '11' }, // str 2-5 t
            { name: 'str2_P_8', text: '10' }, // str 2-4 t
            { name: 'str2_P_9', text: '10' }, // str 2-3 t
            { name: 'str2_P_10', text: '9' }, // str 2-2 t
            { name: 'str2_P_11', text: '21' }, // str 2-1 t
            { name: 'str2_P_12', text: '16.2' }, // str 2-ves t
            { name: 'Str1_8', color: '#008600' }, // str 1-8 r
            { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r
            { name: 'str1_K_1', text: '0' }, // str 1-11 t
            { name: 'str1_K_2', text: '0' }, // str 1-10 t
            { name: 'str1_K_3', text: '0' }, // str 1-9 t
            { name: 'str1_K_4', text: '22' }, // str 1-8 t
            { name: 'str1_K_5', text: '21' }, // str 1-7 t
            { name: 'str1_K_6', text: '19' }, // str 1-6 t
            { name: 'str1_K_7', text: '15' }, // str 1-5 t
            { name: 'str1_K_8', text: '13' }, // str 1-4 t
            { name: 'str1_K_9', text: '10' }, // str 1-3 t
            { name: 'str1_K_10', text: '0' }, // str 1-2 t
            { name: 'str1_K_11', text: '0' }, // str 1-1 t
            { name: 'str1_K_12', text: '93.0' }, // str 1-ves t
            { name: 'str51_SM_1', text: '0' }, // str 51-11 t
            { name: 'str51_SM_2', text: '0' }, // str 51-10 t
            { name: 'str51_SM_3', text: '0' }, // str 51-9 t
            { name: 'str51_SM_4', text: '0' }, // str 51-8 t
            { name: 'str51_SM_5', text: '0' }, // str 51-7 t
            { name: 'str51_SM_6', text: '0' }, // str 51-6 t
            { name: 'str51_SM_7', text: '0  0' }, // str 51-5-4 t
            { name: 'str51_SM_8', text: '0' }, // str 51-3 t
            { name: 'str51_SM_9', text: '0' }, // str 51-2 t
            { name: 'str51_SM_10', text: '100' }, // str 51-1 t
            { name: 'str51_SM_11', text: '15.0' }, // str 51-ves t
          ]
        }
      },
      startTime: timeDiff + 517.01,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.058',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.028',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.287',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.229',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '0848.',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.339',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.17',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.47',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0146.',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0126.',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0146.',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0125.',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.88',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.38',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1190.',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.11',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.11',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.83',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.410',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '045.0',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '008.7',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '013.3',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '046.9',
      },
      startTime: timeDiff + 517.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.16',
      },
      startTime: timeDiff + 517.02,
    },
    ////-----------------------------------70//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 518,
    }, {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 522.1,
      human: true,
    },
    ////--------------------------------28----------------------------------------//71//-new
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 523,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 523.1,
      human: true,
    },
    {
      text: 'На фурмах 0,3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo33',
      startTime: timeDiff + 524,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 528,
    },
    {
      text: 'Закрывайте отсечной.',
      sender: 'Мастер печи',
      audio: 'tts-vo34',
      startTime: timeDiff + 530,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 530.1,
      human: true,
    },
    {
      text: 'Понятно, Артём Викторович – закрывай отсечной.',
      sender: 'Газовщик',
      audio: 'tts-vo35',
      startTime: timeDiff + 531.5,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 536,
    },
    {
      text: 'Понял, закрываю отсечной клапан.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo36',
      startTime: timeDiff + 537,
    },
    // ilay ничего 
    ////--------------------------------29----------------------------------------//72//-new 
    {
      text: 'Отсечной клапан закрывыается.',
      sender: 'Система',
      startTime: timeDiff + 548,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 550.5,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#06DA06' },
          ]
        }
      },
      startTime: timeDiff + 551,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 551.5,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#06DA06' },
          ]
        }
      },
      startTime: timeDiff + 552,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 552.5,
    },
    {
      text: 'Отсечной клапан закрыт.',
      sender: 'Система',
      audio: 'tts-33',
      startTime: timeDiff + 553,
    },
    // ilay dp fF
    {
      action: {
        window2D: {
          elements: [
            // dp
            { name: 'radar1_text', text: '1.21' },
            { name: 'radar2_text', text: '1.48' },
            { name: 'radar3_text', text: '1.11' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100', opacity: 1 },
            { name: 'AKZ_45-100', opacity: 1 },
            { name: 'AKZ_45', opacity: 1 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '52861' },
            { name: 'EVD1_O', text: '4504' },
            { name: 'EVS_DP7_F', text: '7192' },
            { name: 'EVD1_F', text: '311954' },
            { name: 'EVD_F', text: '313904' },
            { name: 'P_1', text: '0.34' },
            { name: 'F_evd', text: '5222' },
            { name: 'F_hol_dyt', text: '606' },
            { name: 'T_hol_dyt', text: '57' },
            { name: 'O_hol_dyt', text: '22.5' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.6' },
            { name: 'FO2_hol_dyt', text: '1146' },
            { name: 'N2', text: '53.7' },
            { name: 'CO', text: '22.3' },
            { name: 'CO2', text: '22.8' },
            { name: 'H2_tryb', text: '0.8' },
            { name: 'Nco_tryb', text: '50.6' },
            { name: 'Q_domG_tryb', text: '715' },
            { name: 'P_vozd_tryb', text: '0' },
            { name: 'P_gaza_tryb', text: '12' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_snotr', text: '89' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_67', opacity: '1' },
            { name: 'H_progres_89', opacity: '1' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'H_step_isp', text: '57.8', opacity: '1' },
            { name: 'HCO_step_isp', text: '50.9' },
            { name: 'Tkyp_3', text: '1234' },
            { name: 'Tkyp_2', text: '1195' },
            { name: 'Tkyp_1', text: '1187' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '133' },
            { name: 'Tdym_2', text: '185' },
            { name: 'Tdym_1', text: '275' },
            { name: 'P_Os_szat_voz', text: '8.36' },
            { name: 'T_Os_szat_voz', text: '31' },
            { name: 'Temp_peref_1', text: '75' },
            { name: 'Temp_peref_2', text: '69' },
            { name: 'Temp_peref_3', text: '74' },
            { name: 'Temp_peref_4', text: '70' },
            { name: 'Temp_peref_5', text: '71' },
            { name: 'Temp_peref_6', text: '72' },
            { name: 'Temp_peref_7', text: '71' },
            { name: 'Temp_peref_8', text: '68' },
            { name: 'Temp_peref_9', text: '72' },
            { name: 'Temp_peref_10', text: '59' },
            { name: 'Temp_peref_11', text: '63' },
            { name: 'Temp_peref_12', text: '68' },
            { name: 'Temp_peref_13', text: '101' },
            { name: 'Temp_peref_14', text: '76' },
            { name: 'Temp_peref_15', text: '85' },
            { name: 'Temp_peref_16', text: '78' },
            { name: 'T1', text: '118' },
            { name: 'T2', text: '101' },
            { name: 'T3', text: '119' },
            { name: 'T4', text: '101' },
            { name: 'P_2', text: '0.33' },
            { name: 't_gor_dut', text: '1189' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,60' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '0' },
            { name: 'F_tryba', text: '0' },
            { name: 'F_obsh_pyt', text: '0.00' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.05' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.03' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.27' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.24' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2443' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1441', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1483', opacity: '1' },
            { name: 'L3_elem', color: '#ffff0f' },
            { name: 'P_tryba_1_590', text: '0.06' },
            { name: 'P_tryba_1_591', text: '0.06' },
            { name: 'P_tryba_1_592', text: '0.06' },
            { name: 'P_tryba_1_593', text: '0.06' },
            { name: 'P_tryba_2_1', text: '0.07' },
            { name: 'P_tryba_2_2', text: '0.07' },
            { name: 'P_tryba_2_3', text: '0.07' },
            { name: 'P_tryba_2_4', text: '0.07' },
            { name: 'P_tryba_3_590', text: '0.08' },
            { name: 'P_tryba_3_591', text: '0.09' },
            { name: 'P_tryba_4_1', text: '2.20' },
            { name: 'P_tryba_4_2', text: '1.58' },
            { name: 'P_tryba_4_3', text: '2.29' },
            { name: 'P_tryba_4_4', text: '1.50' },
            { name: 'P_tryba_5_1', text: '0.39' },
            { name: 'P_tryba_5_2', text: '0.96' },
            { name: 'P_tryba_5_3', text: '1.27' },
            { name: 'P_tryba_5_4', text: '2.20' },
            { name: 'V_dyt', text: '77.1' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '27.2' },
            { name: 'ydel_tep_17', text: '43.5' },
            { name: 'ydel_tep_16', text: '45.0' },
            { name: 'ydel_tep_15', text: '35.5' },
            { name: 'ydel_tep_12_14', text: '73.8' },
            { name: 'ydel_tep_10_11', text: '24.3' },
            { name: 'ydel_tep_9', text: '26.2' },
            { name: 'ydel_tep_8', text: '26.3' },
            { name: 'ydel_tep_7', text: '35.2' },
          ]
        }
      },
      startTime: timeDiff + 553.1,
    },
    ////--------------------------------30----------------------------------------//73//-new \
    {
      scenarioText: 'Открыть сбросной клапан 723',
      sender: 'Система',
      audio: 'tts-34',
      startTime: timeDiff + 556,
    },
    {
      action: {
        target3D: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44',
        rotation: { y: -0.785 },
      },
      duration: 0.3,
      startTime: timeDiff + 559,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_017',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 559.5,
    },
    {
      action: {
        target3D: 'Lamp_Green_021',
        material: 'Unic_Lamp_Green_On'
      },
      startTime: timeDiff + 560,
    },
    {
      action: {
        target3D: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44',
        rotation: { y: 0 },
      },
      duration: 0.3,
      startTime: timeDiff + 560.5,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_723_t', color: '#00DA01' },
          ]
        }
      },
      startTime: timeDiff + 560.6,
    },
    // ilay dp ff
    {
      action: {
        window2D: {
          elements: [
            // dp
            // { name: 'radar1_text', text: '1.21' },
            // { name: 'radar2_text', text: '1.48' },
            // { name: 'radar3_text', text: '1.11' },
            // { name: 'zadan_yrov_sin', text: '0.90' },
            // { name: 'EKZ_H1', text: '100' },
            // { name: 'EKZ_H2', text: '100' },
            // { name: 'EKZ_H3', text: '100' },
            // { name: 'AKZ_100', opacity: 1 },
            // { name: 'AKZ_45-100', opacity: 1 },
            // { name: 'AKZ_45', opacity: 1 },
            // { name: 'AKZ_30', opacity: 1 },
            // { name: 'AKZ_17', opacity: 1 },
            // { name: 'EVS_DP7_O', text: '52861' },
            // { name: 'EVD1_O', text: '4504' },
            { name: 'EVS_DP7_F', text: '7202' },
            { name: 'EVD1_F', text: '312002' },
            { name: 'EVD_F', text: '309551' },
            { name: 'P_1', text: '0.33' },
            { name: 'F_evd', text: '5191' },
            { name: 'F_hol_dyt', text: '605' },
            { name: 'T_hol_dyt', text: '57' },
            { name: 'O_hol_dyt', text: '21.8' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.6' },
            { name: 'FO2_hol_dyt', text: '1146' },
            { name: 'N2', text: '53.7' },
            { name: 'CO', text: '22.3' },
            { name: 'CO2', text: '22.8' },
            { name: 'H2_tryb', text: '0.8' },
            { name: 'Nco_tryb', text: '50.6' },
            { name: 'Q_domG_tryb', text: '715' },
            { name: 'P_vozd_tryb', text: '0' },
            { name: 'P_gaza_tryb', text: '12' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_snotr', text: '89' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_89', opacity: '1' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'H_step_isp', text: '56.9', opacity: '1' },
            { name: 'HCO_step_isp', text: '50.8' },
            { name: 'Tkyp_3', text: '1233' },
            { name: 'Tkyp_2', text: '1194' },
            { name: 'Tkyp_1', text: '1186' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '133' },
            { name: 'Tdym_2', text: '185' },
            { name: 'Tdym_1', text: '274' },
            { name: 'P_Os_szat_voz', text: '8.34' },
            { name: 'T_Os_szat_voz', text: '32' },
            { name: 'Temp_peref_1', text: '75' },
            { name: 'Temp_peref_2', text: '69' },
            { name: 'Temp_peref_3', text: '74' },
            { name: 'Temp_peref_4', text: '70' },
            { name: 'Temp_peref_5', text: '71' },
            { name: 'Temp_peref_6', text: '72' },
            { name: 'Temp_peref_7', text: '71' },
            { name: 'Temp_peref_8', text: '68' },
            { name: 'Temp_peref_9', text: '72' },
            { name: 'Temp_peref_10', text: '59' },
            { name: 'Temp_peref_11', text: '63' },
            { name: 'Temp_peref_12', text: '68' },
            { name: 'Temp_peref_13', text: '101' },
            { name: 'Temp_peref_14', text: '76' },
            { name: 'Temp_peref_15', text: '85' },
            { name: 'Temp_peref_16', text: '78' },
            { name: 'T1', text: '116' },
            { name: 'T2', text: '100' },
            { name: 'T3', text: '117' },
            { name: 'T4', text: '100' },
            { name: 'P_2', text: '0.32' },
            { name: 't_gor_dut', text: '1189' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,59' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '0' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.05' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.03' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.27' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.24' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2409' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1450', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1472', opacity: '1' },
            { name: 'L3_elem', color: '#ffff0f' },
            { name: 'P_tryba_1_590', text: '0.06' },
            { name: 'P_tryba_1_591', text: '0.06' },
            { name: 'P_tryba_1_592', text: '0.06' },
            { name: 'P_tryba_1_593', text: '0.06' },
            { name: 'P_tryba_2_1', text: '0.07' },
            { name: 'P_tryba_2_2', text: '0.07' },
            { name: 'P_tryba_2_3', text: '0.07' },
            { name: 'P_tryba_2_4', text: '0.07' },
            { name: 'P_tryba_3_590', text: '0.08' },
            { name: 'P_tryba_3_591', text: '0.09' },
            { name: 'P_tryba_4_1', text: '1.89' },
            { name: 'P_tryba_4_2', text: '1.48' },
            { name: 'P_tryba_4_3', text: '1.96' },
            { name: 'P_tryba_4_4', text: '1.20' },
            { name: 'P_tryba_5_1', text: '0.27' },
            { name: 'P_tryba_5_2', text: '0.72' },
            { name: 'P_tryba_5_3', text: '1.99' },
            { name: 'P_tryba_5_4', text: '1.90' },
            { name: 'V_dyt', text: '81.7' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '27.8' },
            { name: 'ydel_tep_17', text: '43.8' },
            { name: 'ydel_tep_16', text: '44.9' },
            { name: 'ydel_tep_15', text: '35.5' },
            { name: 'ydel_tep_12_14', text: '73.8' },
            { name: 'ydel_tep_10_11', text: '24.3' },
            { name: 'ydel_tep_9', text: '26.2' },
            { name: 'ydel_tep_8', text: '26.3' },
            { name: 'ydel_tep_7', text: '35.2' },
          ]
        }
      },
      startTime: timeDiff + 560.61,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.057',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.025',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.268',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.215',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '0967.',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.318',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.28',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.46',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0141.',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0123.',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0142.',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0123.',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.89',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0038',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1190.',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.22',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.22',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.85',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.407',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '044.9',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 560.62,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 560.62,
    },
    ////--------------------------------31----------------------------------------//74//-new 
    {
      text: 'Третью закрыли 1.1 по второму толкателю.',
      sender: 'Мастер печи',
      audio: 'tts-vo37',
      startTime: timeDiff + 562,
    },
    {
      scenarioText: 'Сообщить по рации в «Лётки №3».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 567,
    },
    {
      action: {
        target3D: 'ButtonHightlight_006',
      },
      startTime: timeDiff + 569.5,
      human: true,
    },
    {
      text: '1.1 второй толкатель.',
      sender: 'Газовщик',
      audio: 'tts-vo38',
      startTime: timeDiff + 570.5,
    },
    {
      action: {
        target3D: 'Lamp_006',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 574,
    },
    ////--------------------------------32----------------------------------------//75//-new 
    {
      scenarioText: 'Сообщить по телефону в "Дисп.комб".',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 575,
    },
    {
      action: {
        target3D: 'PhoneButton012',
      },
      startTime: timeDiff + 576,
      human: true,
    },
    {
      text: 'Слева 1.1 по второму от толкателя.',
      sender: 'Газовщик',
      audio: 'tts-vo39',
      startTime: timeDiff + 577,
    },
    {
      text: 'Хорошо, принял.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo40',
      startTime: timeDiff + 582,
    },
    {
      text: 'Справа пока не сдавай.',
      sender: 'Газовщик',
      audio: 'tts-vo41',
      startTime: timeDiff + 585,
    },
    ////--------------------------------33----------------------------------------//76//-new 
    {
      scenarioText: 'Сообщить по рации в «Лётки №3».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 589,
    },
    {
      action: {
        target3D: 'ButtonHightlight_006',
      },
      startTime: timeDiff + 589.5,
      human: true,
    },
    {
      text: 'Третья лётка, отдавайте ковши.',
      sender: 'Газовщик',
      audio: 'tts-vo42',
      startTime: timeDiff + 590.5,
    },
    {
      action: {
        target3D: 'Lamp_006',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 595,
    },
    // ilay     
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '259.3',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '013.5',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0096',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.36',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.055',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.024',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.264',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.212',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '0950.',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.312',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.37',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.74',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0136.',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0120.',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0138.',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0120.',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.85',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0038',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1189.',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.25',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.25',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.87',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.419',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '044.7',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.75',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 595.03,
    },
    ////--------------------------------34----------------------------------------//77//-new 
    {
      text: 'Отсечной закрыт.',
      sender: 'Мастер печи',
      audio: 'tts-vo43',
      startTime: timeDiff + 597,
    },
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 599,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 601.1,
      human: true,
    },
    {
      text: 'Отсечной закрыт, на фурмах 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo44',
      startTime: timeDiff + 602,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 607,
    },
    {
      text: 'Делаем 0,2 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo45',
      startTime: timeDiff + 608,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 608.1,
      human: true,
    },
    {
      text: 'Принял, делаю 0,2.',
      sender: 'Газовщик',
      audio: 'tts-vo46',
      startTime: timeDiff + 609,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 613,
    },
    // ilay dp ff bzu FF
    {
      action: {
        window2D: {
          elements: [
            // dp
            // { name: 'radar1_text', text: '1.21' },
            // { name: 'radar2_text', text: '1.48' },
            // { name: 'radar3_text', text: '1.11' },
            // { name: 'zadan_yrov_sin', text: '0.90' },
            // { name: 'EKZ_H1', text: '100' },
            // { name: 'EKZ_H2', text: '100' },
            // { name: 'EKZ_H3', text: '100' },
            // { name: 'AKZ_100', opacity: 1 },
            // { name: 'AKZ_45-100', opacity: 1 },
            // { name: 'AKZ_45', opacity: 1 },
            // { name: 'AKZ_30', opacity: 1 },
            // { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '53829' },
            { name: 'EVD1_O', text: '4504' },
            { name: 'EVS_DP7_F', text: '7223' },
            { name: 'EVD1_F', text: '313429' },
            { name: 'EVD_F', text: '311575' },
            { name: 'P_1', text: '0.31' },
            { name: 'F_evd', text: '5152' },
            { name: 'F_hol_dyt', text: '752' },
            { name: 'T_hol_dyt', text: '54' },
            { name: 'O_hol_dyt', text: '21.2' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.6' },
            { name: 'FO2_hol_dyt', text: '1158' },
            { name: 'N2', text: '94.4' },
            { name: 'CO', text: '2.2' },
            { name: 'CO2', text: '2.4' },
            { name: 'H2_tryb', text: '0.7' },
            { name: 'Nco_tryb', text: '51.9' },
            { name: 'Q_domG_tryb', text: '715', opacity: '0' },
            { name: 'P_vozd_tryb', text: '0' },
            { name: 'P_gaza_tryb', text: '13' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_snotr', text: '89' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_89', opacity: '1' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'H_step_isp', text: '78.5', opacity: '1' },
            { name: 'HCO_step_isp', text: '62.8' },
            { name: 'Tkyp_3', text: '1132' },
            { name: 'Tkyp_2', text: '1192' },
            { name: 'Tkyp_1', text: '1183' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '132' },
            { name: 'Tdym_2', text: '149' },
            { name: 'Tdym_1', text: '273' },
            { name: 'P_Os_szat_voz', text: '8.34' },
            { name: 'T_Os_szat_voz', text: '32' },
            // { name: 'Temp_peref_1',   text: '75' },
            // { name: 'Temp_peref_2',   text: '69' },
            // { name: 'Temp_peref_3',   text: '74' },
            // { name: 'Temp_peref_4',   text: '70' },
            // { name: 'Temp_peref_5',   text: '71' },
            // { name: 'Temp_peref_6',   text: '72' },
            // { name: 'Temp_peref_7',   text: '71' },
            // { name: 'Temp_peref_8',   text: '68' },
            // { name: 'Temp_peref_9',   text: '72' },
            // { name: 'Temp_peref_10',  text: '59' },
            // { name: 'Temp_peref_11',  text: '63' },
            // { name: 'Temp_peref_12',  text: '68' },
            // { name: 'Temp_peref_13',  text: '101' },
            // { name: 'Temp_peref_14',  text: '76' },
            // { name: 'Temp_peref_15',  text: '85' },
            // { name: 'Temp_peref_16',  text: '78' },
            { name: 'T1', text: '116' },
            { name: 'T2', text: '97' },
            { name: 'T3', text: '112' },
            { name: 'T4', text: '99' },
            { name: 'P_2', text: '0.30' },
            { name: 'P_2_rect', color: "#ffff0f" },
            { name: 't_gor_dut', text: '1188' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,60' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '0' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.01' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.03' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.29' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.26' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2380' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1445', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1326', opacity: '1' },
            { name: 'L3_elem', color: '#ffffff' },
            // { name: 'P_tryba_1_590', text: '0.06' },
            // { name: 'P_tryba_1_591', text: '0.06' },
            // { name: 'P_tryba_1_592', text: '0.06' },
            // { name: 'P_tryba_1_593', text: '0.06' },
            // { name: 'P_tryba_2_1', text: '0.07' },
            // { name: 'P_tryba_2_2', text: '0.07' },
            // { name: 'P_tryba_2_3', text: '0.07' },
            // { name: 'P_tryba_2_4', text: '0.07' },
            // { name: 'P_tryba_3_590', text: '0.08' },
            // { name: 'P_tryba_3_591', text: '0.09' },
            // { name: 'P_tryba_4_1', text: '1.89' },
            // { name: 'P_tryba_4_2', text: '1.48' },
            // { name: 'P_tryba_4_3', text: '1.96' },
            // { name: 'P_tryba_4_4', text: '1.20' },
            // { name: 'P_tryba_5_1', text: '0.27' },
            // { name: 'P_tryba_5_2', text: '0.72' },
            // { name: 'P_tryba_5_3', text: '1.99' },
            // { name: 'P_tryba_5_4', text: '1.90' },
            { name: 'V_dyt', text: '99.5' },
            { name: 'fyrm_v_rab', text: '0' },
            // { name: 'ydel_tep_18',    text: '27.8' },
            // { name: 'ydel_tep_17',    text: '43.8' },
            // { name: 'ydel_tep_16',    text: '44.9' },
            // { name: 'ydel_tep_15',    text: '35.5' },
            // { name: 'ydel_tep_12_14', text: '73.8' },
            // { name: 'ydel_tep_10_11', text: '24.3' },
            // { name: 'ydel_tep_9',     text: '26.2' },
            // { name: 'ydel_tep_8',     text: '26.3' },
            // { name: 'ydel_tep_7',     text: '35.2' },
            // bzu
            { name: 'ochistka sedel_P', text: '6.23' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.02' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.0' },
            { name: 'B1_vibratciya', text: '2' },
            { name: 'V linii P_B1', text: '202' }, // Б1
            { name: 'V linii dP_B1', text: '230' },
            { name: 'V sisteme vzveh_B1', text: '193' },
            { name: 'V linii P_B2', text: '150' }, // Б2
            { name: 'V linii dP_B2', text: '134' },
            { name: 'V sisteme vzveh_B2', text: '141' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.01' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.02' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.02' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.02' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '150' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '8' },
            { name: 'ugol naklona_tekushiy', text: '46.7' },
            { name: 'ugol naklona_zadanyi', text: '46.7' },
            { name: 'gradusow ugol', text: '43.1' },
            { name: 'prochent1', text: '0' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р', opacity: '1' },
            { name: 'left_ellipse', opacity: '1' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.09' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '93.1' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.3' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#E6E6E6' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#E6E6E6' }, // пауза по центру
            // { name: 'leviy', color: '#860004' }, // палка от цифр слева
            { name: 'verx', text: '-0' }, // цифры сверху
            // { name: 'praviy', color: '#860004' }, // палка от цифр справа
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции
            { name: 'tekushiy rezym_A', color: '#CEC7B5' }, // текущий режим А задник
            { name: 'tek rejim_A', color: '#B7B2AE' }, // текущий режим А задник
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.00' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '13.3' }, // t
            { name: 'matrix 1 str 14_M', text: '28.7' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '1' }, // % справа
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '31' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '0.02' }, // 
            { name: 'B2_P compens', text: '0.05' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '82' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '47' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '1.28' }, // 
            { name: 'radar 1', text: '1.41' }, // 
            { name: 'radar 2', text: '1.74' }, // 
            { name: 'mexan', text: '1.36' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#2B2A29' }, // в работе
            { name: 'ismetir_ramki', color: '#00FF00' }, // в работе
            { name: 'B1_nomerstr', text: '4' }, // 
            { name: 'B2_nomerstr', text: '5' }, // 
            { name: 'T3_nomerstr', text: '5' }, // 
            { name: 'T2_nomerstr', text: '5' }, // 
            { name: 'T1_nomerstr', text: '5' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'К' }, // 
            { name: 'T2_Tip_text', text: 'К' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            { name: 'B1_ves', text: '93.0' }, // 
            { name: 'B2_ves', text: '13.5' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            { name: 'K_str1', color: '#860004' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'na_conveer_s1_bukca', text: 'Р', opacity: '0' }, // str 2 
            { name: 'str1_down', text: 'Р' }, // str 2 
            { name: 'str51_down', text: 'К' }, // str 51 
            { name: 'str2_P_1', text: '0' }, // str 2-11 t
            { name: 'str2_P_2', text: '0' }, // str 2-10 t
            { name: 'str2_P_3', text: '0' }, // str 2-9 t
            { name: 'str2_P_4', text: '13' }, // str 2-8 t
            { name: 'str2_P_5', text: '13' }, // str 2-7 t
            { name: 'str2_P_6', text: '13' }, // str 2-6 t
            { name: 'str2_P_7', text: '11' }, // str 2-5 t
            { name: 'str2_P_8', text: '10' }, // str 2-4 t
            { name: 'str2_P_9', text: '10' }, // str 2-3 t
            { name: 'str2_P_10', text: '9' }, // str 2-2 t
            { name: 'str2_P_11', text: '21' }, // str 2-1 t
            { name: 'str2_P_12', text: '16.2' }, // str 2-ves t
            { name: 'Str1_8', color: '#C7B295' }, // str 1-8 r  // #008600
            { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            { name: 'str1_K_1', text: '0' }, // str 1-11 t
            { name: 'str1_K_2', text: '0' }, // str 1-10 t
            { name: 'str1_K_3', text: '0' }, // str 1-9 t
            { name: 'str1_K_4', text: '22' }, // str 1-8 t
            { name: 'str1_K_5', text: '21' }, // str 1-7 t
            { name: 'str1_K_6', text: '19' }, // str 1-6 t
            { name: 'str1_K_7', text: '15' }, // str 1-5 t
            { name: 'str1_K_8', text: '13' }, // str 1-4 t
            { name: 'str1_K_9', text: '10' }, // str 1-3 t
            { name: 'str1_K_10', text: '0' }, // str 1-2 t
            { name: 'str1_K_11', text: '0' }, // str 1-1 t
            { name: 'str1_K_12', text: '93.0' }, // str 1-ves t
            { name: 'str51_SM_1', text: '0' }, // str 51-11 t
            { name: 'str51_SM_2', text: '0' }, // str 51-10 t
            { name: 'str51_SM_3', text: '0' }, // str 51-9 t
            { name: 'str51_SM_4', text: '0' }, // str 51-8 t
            { name: 'str51_SM_5', text: '0' }, // str 51-7 t
            { name: 'str51_SM_6', text: '0' }, // str 51-6 t
            { name: 'str51_SM_7', text: '0  0' }, // str 51-5-4 t
            { name: 'str51_SM_8', text: '0' }, // str 51-3 t
            { name: 'str51_SM_9', text: '0' }, // str 51-2 t
            { name: 'str51_SM_10', text: '100' }, // str 51-1 t
            { name: 'str51_SM_11', text: '15.0' }, // str 51-ves t
          ]
        }
      },
      startTime: timeDiff + 613.01,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '255.3',
      },
      startTime: timeDiff + 613.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.42',
      },
      startTime: timeDiff + 613.02,
    },
    ////--------------------------------35----------------------------------------//78//-new 
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,2кг.',
      audio: 'tts-24',
      sender: 'Система',
      startTime: timeDiff + 614,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 616.2,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 617,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 617.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 618,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '93' },
            { name: 'P_2', text: '0.22' },
          ]
        }
      },
      startTime: timeDiff + 618.1,
    },
    // ilay dp ff bzu FF
    {
      action: {
        window2D: {
          elements: [
            // dp
            // { name: 'radar1_text', text: '1.21' },
            // { name: 'radar2_text', text: '1.48' },
            // { name: 'radar3_text', text: '1.11' },
            // { name: 'zadan_yrov_sin', text: '0.90' },
            // { name: 'EKZ_H1', text: '100' },
            // { name: 'EKZ_H2', text: '100' },
            // { name: 'EKZ_H3', text: '100' },
            // { name: 'AKZ_100', opacity: 1 },
            // { name: 'AKZ_45-100', opacity: 1 },
            // { name: 'AKZ_45', opacity: 1 },
            // { name: 'AKZ_30', opacity: 1 },
            // { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '53829' },
            { name: 'EVD1_O', text: '4504' },
            { name: 'EVS_DP7_F', text: '7223' },
            { name: 'EVD1_F', text: '313429' },
            { name: 'EVD_F', text: '311575' },
            { name: 'P_1', text: '0.31' },
            { name: 'F_evd', text: '5216' },
            { name: 'F_hol_dyt', text: '627' },
            { name: 'T_hol_dyt', text: '35' },
            { name: 'O_hol_dyt', text: '21.2' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.6' },
            // { name: 'FO2_hol_dyt', text: '1158' },
            { name: 'N2', text: '54.5' },
            { name: 'CO', text: '2.2' },
            { name: 'CO2', text: '2.4' },
            { name: 'H2_tryb', text: '0.7' },
            { name: 'Nco_tryb', text: '51.9' },
            { name: 'Q_domG_tryb', text: '715', opacity: '0' },
            { name: 'P_vozd_tryb', text: '0' },
            { name: 'P_gaza_tryb', text: '14' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_snotr', text: '94' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_89', opacity: '1' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'H_step_isp', text: '78.5', opacity: '1' },
            { name: 'HCO_step_isp', text: '62.8' },
            { name: 'Tkyp_3', text: '1132' },
            { name: 'Tkyp_2', text: '1192' },
            { name: 'Tkyp_1', text: '1183' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '123' },
            { name: 'Tdym_2', text: '185' },
            { name: 'Tdym_1', text: '272' },
            // { name: 'P_Os_szat_voz', text: '8.34' },
            // { name: 'T_Os_szat_voz', text: '32' },
            // { name: 'Temp_peref_1',   text: '75' },
            // { name: 'Temp_peref_2',   text: '69' },
            // { name: 'Temp_peref_3',   text: '74' },
            // { name: 'Temp_peref_4',   text: '70' },
            // { name: 'Temp_peref_5',   text: '71' },
            // { name: 'Temp_peref_6',   text: '72' },
            // { name: 'Temp_peref_7',   text: '71' },
            // { name: 'Temp_peref_8',   text: '68' },
            // { name: 'Temp_peref_9',   text: '72' },
            // { name: 'Temp_peref_10',  text: '59' },
            // { name: 'Temp_peref_11',  text: '63' },
            // { name: 'Temp_peref_12',  text: '68' },
            // { name: 'Temp_peref_13',  text: '101' },
            // { name: 'Temp_peref_14',  text: '76' },
            // { name: 'Temp_peref_15',  text: '85' },
            // { name: 'Temp_peref_16',  text: '78' },
            { name: 'T1', text: '106' },
            { name: 'T2', text: '96' },
            { name: 'T3', text: '117' },
            { name: 'T4', text: '97' },
            { name: 'P_2', text: '0.22' },
            { name: 'P_2_rect', color: "#ffff0f" },
            { name: 't_gor_dut', text: '1182' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,60' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '0' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.01' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.03' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.21' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.19' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'TTG_raschet', text: '2385' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1438', opacity: '1' },
            { name: 'L2_elem', color: '#ffff0f' },
            { name: 'L3', text: '1119', opacity: '1' },
            { name: 'L3_elem', color: '#ffffff' },
            // { name: 'P_tryba_1_590', text: '0.06' },
            // { name: 'P_tryba_1_591', text: '0.06' },
            // { name: 'P_tryba_1_592', text: '0.06' },
            // { name: 'P_tryba_1_593', text: '0.06' },
            // { name: 'P_tryba_2_1', text: '0.07' },
            // { name: 'P_tryba_2_2', text: '0.07' },
            // { name: 'P_tryba_2_3', text: '0.07' },
            // { name: 'P_tryba_2_4', text: '0.07' },
            // { name: 'P_tryba_3_590', text: '0.08' },
            // { name: 'P_tryba_3_591', text: '0.09' },
            // { name: 'P_tryba_4_1', text: '1.89' },
            // { name: 'P_tryba_4_2', text: '1.48' },
            // { name: 'P_tryba_4_3', text: '1.96' },
            // { name: 'P_tryba_4_4', text: '1.20' },
            // { name: 'P_tryba_5_1', text: '0.27' },
            // { name: 'P_tryba_5_2', text: '0.72' },
            // { name: 'P_tryba_5_3', text: '1.99' },
            // { name: 'P_tryba_5_4', text: '1.90' },
            // { name: 'V_dyt', text: '99.5' },
            // { name: 'fyrm_v_rab', text: '0' },
            // { name: 'ydel_tep_18',    text: '27.8' },
            // { name: 'ydel_tep_17',    text: '43.8' },
            // { name: 'ydel_tep_16',    text: '44.9' },
            // { name: 'ydel_tep_15',    text: '35.5' },
            // { name: 'ydel_tep_12_14', text: '73.8' },
            // { name: 'ydel_tep_10_11', text: '24.3' },
            // { name: 'ydel_tep_9',     text: '26.2' },
            // { name: 'ydel_tep_8',     text: '26.3' },
            // { name: 'ydel_tep_7',     text: '35.2' },
            // bzu
            { name: 'ochistka sedel_P', text: '6.27' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '33' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.01' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.0' },
            { name: 'B1_vibratciya', text: '2' },
            { name: 'V linii P_B1', text: '202' }, // Б1
            { name: 'V linii dP_B1', text: '227' },
            { name: 'V sisteme vzveh_B1', text: '192' },
            { name: 'V linii P_B2', text: '148' }, // Б2
            { name: 'V linii dP_B2', text: '279' },
            { name: 'V sisteme vzveh_B2', text: '147' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.01' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.02' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.01' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.03' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '150' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '8' },
            { name: 'ugol naklona_tekushiy', text: '46.7' },
            { name: 'ugol naklona_zadanyi', text: '46.7' },
            { name: 'gradusow ugol', text: '148.8' },
            { name: 'prochent1', text: '0' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р', opacity: '1' },
            { name: 'left_ellipse', opacity: '1' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.00' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '93.0' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.3' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#E6E6E6' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#E6E6E6' }, // пауза по центру
            // { name: 'leviy', color: '' }, // палка от цифр слева
            { name: 'verx', text: '-0' }, // цифры сверху
            // { name: 'praviy', color: '' }, // палка от цифр справа
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции
            { name: 'tekushiy rezym_A', color: '#CEC7B5' }, // текущий режим А задник
            { name: 'tek rejim_A', color: '#B7B2AE' }, // текущий режим А задник
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '1.33' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '13.3' }, // t
            { name: 'matrix 1 str 14_M', text: '28.7' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '1' }, // % справа
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '31' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '0.01' }, // 
            { name: 'B2_P compens', text: '0.05' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '82' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '47' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '1.24' }, // 
            { name: 'radar 1', text: '1.48' }, // 
            { name: 'radar 2', text: '1.74' }, // 
            { name: 'mexan', text: '1.38' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#2B2A29' }, // в работе
            { name: 'ismetir_ramki', color: '#00FF00' }, // в работе
            { name: 'B1_nomerstr', text: '4' }, // 
            { name: 'B2_nomerstr', text: '5' }, // 
            { name: 'T3_nomerstr', text: '5' }, // 
            { name: 'T2_nomerstr', text: '5' }, // 
            { name: 'T1_nomerstr', text: '5' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'К' }, // 
            { name: 'T2_Tip_text', text: 'К' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            { name: 'B1_ves', text: '93.0' }, // 
            { name: 'B2_ves', text: '13.5' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            { name: 'K_str1', color: '#860004' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'na_conveer_s1_bukca', text: 'Р', opacity: '0' }, // str 2 
            { name: 'str1_down', text: 'Р' }, // str 2 
            { name: 'str51_down', text: 'К' }, // str 51 
            // { name: 'str2_P_1',   text: '0' }, // str 2-11 t
            // { name: 'str2_P_2',   text: '0' }, // str 2-10 t
            // { name: 'str2_P_3',   text: '0' }, // str 2-9 t
            // { name: 'str2_P_4',   text: '13' }, // str 2-8 t
            // { name: 'str2_P_5',   text: '13' }, // str 2-7 t
            // { name: 'str2_P_6',   text: '13' }, // str 2-6 t
            // { name: 'str2_P_7',   text: '11' }, // str 2-5 t
            // { name: 'str2_P_8',   text: '10' }, // str 2-4 t
            // { name: 'str2_P_9',   text: '10' }, // str 2-3 t
            // { name: 'str2_P_10',  text: '9' }, // str 2-2 t
            // { name: 'str2_P_11',  text: '21' }, // str 2-1 t
            // { name: 'str2_P_12',  text: '16.2' }, // str 2-ves t
            { name: 'Str1_8', color: '#008600' }, // str 1-8 r  // #008600
            // { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'str1_K_1',   text: '0' }, // str 1-11 t
            // { name: 'str1_K_2',   text: '0' }, // str 1-10 t
            // { name: 'str1_K_3',   text: '0' }, // str 1-9 t
            // { name: 'str1_K_4',   text: '22' }, // str 1-8 t
            // { name: 'str1_K_5',   text: '21' }, // str 1-7 t
            // { name: 'str1_K_6',   text: '19' }, // str 1-6 t
            // { name: 'str1_K_7',   text: '15' }, // str 1-5 t
            // { name: 'str1_K_8',   text: '13' }, // str 1-4 t
            // { name: 'str1_K_9',   text: '10' }, // str 1-3 t
            // { name: 'str1_K_10',  text: '0' }, // str 1-2 t
            // { name: 'str1_K_11',  text: '0' }, // str 1-1 t
            // { name: 'str1_K_12',  text: '93.0' }, // str 1-ves t
            // { name: 'str51_SM_1',   text: '0' }, // str 51-11 t
            // { name: 'str51_SM_2',   text: '0' }, // str 51-10 t
            // { name: 'str51_SM_3',   text: '0' }, // str 51-9 t
            // { name: 'str51_SM_4',   text: '0' }, // str 51-8 t
            // { name: 'str51_SM_5',   text: '0' }, // str 51-7 t
            // { name: 'str51_SM_6',   text: '0' }, // str 51-6 t
            // { name: 'str51_SM_7',   text: '0  0' }, // str 51-5-4 t
            // { name: 'str51_SM_8',   text: '0' }, // str 51-3 t
            // { name: 'str51_SM_9',   text: '0' }, // str 51-2 t
            // { name: 'str51_SM_10',  text: '100' }, // str 51-1 t
            // { name: 'str51_SM_11',  text: '15.0' }, // str 51-ves t
          ]
        }
      },
      startTime: timeDiff + 618.11,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.020',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.229',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.184',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1179.',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.232',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.47',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.72',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0117.',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0134.',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0118.',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.76',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1187.',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.422',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '044.4',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.73',
      },
      startTime: timeDiff + 618.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '146.8',
      },
      startTime: timeDiff + 618.13,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '008.5',
      },
      startTime: timeDiff + 618.13,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '046.9',
      },
      startTime: timeDiff + 618.13,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.46',
      },
      startTime: timeDiff + 618.13,
    },
    ////-----------------------------------79//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 619,
    }, {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 623.1,
      human: true,
    },
    ////--------------------------------36----------------------------------------//80//-new
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 624,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 624.1,
      human: true,
    },
    {
      text: 'На фурмах 0,2.',
      sender: 'Газовщик',
      audio: 'tts-vo47',
      startTime: timeDiff + 625,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 629,
    },
    {
      text: 'Делаем 0.',
      sender: 'Мастер печи',
      audio: 'tts-vo48',
      startTime: timeDiff + 631,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 631.1,
      human: true,
    },
    {
      text: 'Понял, делаю 0.',
      sender: 'Газовщик',
      audio: 'tts-vo49',
      startTime: timeDiff + 632,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 636,
    },
    // ilay
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '133.6',
      },
      startTime: timeDiff + 636.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '013.5',
      },
      startTime: timeDiff + 636.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 636.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.50',
      },
      startTime: timeDiff + 636.02,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.135',
      },
      startTime: timeDiff + 636.03,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.157',
      },
      startTime: timeDiff + 636.03,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1329.',
      },
      startTime: timeDiff + 636.03,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.196',
      },
      startTime: timeDiff + 636.03,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.50',
      },
      startTime: timeDiff + 636.03,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.76',
      },
      startTime: timeDiff + 636.03,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0133.',
      },
      startTime: timeDiff + 636.03,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.94',
      },
      startTime: timeDiff + 636.03,
    },
    ////--------------------------------37----------------------------------------//81//-new 
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0кг.',
      audio: 'tts-24',
      sender: 'Система',
      startTime: timeDiff + 636.1,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 636.2,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 637,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 637.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 638,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_020',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 638.6,
    },
    {
      action: {
        target3D: 'Lamp_Green_024',
        material: 'Unic_Lamp_Green_On'
      },
      startTime: timeDiff + 638.7,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '100' },
            { name: 'H_progres_100', opacity: 1 },
            { name: 'P_2', text: '0' },
            { name: 'P_2_rect', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 638.8,
    },
    {
      text: 'Прекращение циркуляции кокса.',
      sender: 'Система',
      startTime: timeDiff + 639,
    },
    {
      action: {
        target3D: 'Display_TV002',
        material: 'media/images/monitors/Kamera-nablyudeniya.jpg'
      },
      startTime: timeDiff + 639.1,
    },
    {
      action: {
        target3D: 'Display_flat006',
        material: 'media/images/monitors/Kamera-nablyudeniya.jpg'
      },
      startTime: timeDiff + 639.2,
    },
    {
      text: 'Клапан «СНОРТ» полностью открыт.',
      sender: 'Система',
      startTime: timeDiff + 640,
    },
    {
      text: 'Прекращение дутья.',
      sender: 'Система',
      startTime: timeDiff + 641,
    },
    ////-----------------------------------82//-new//
    {
      scenarioText: 'Подойти к монитору №2 «Схема ДП» и проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 642,
    }, {
      multi: [
        {
          action: {
            target2D: 'R_Snort',
          },
        },
        {
          action: {
            target2D: 'R_Furm',
          },
        },
      ],
      startTime: timeDiff + 646.1,
      human: true,
    },
    ////--------------------------------38----------------------------------------//83//-new 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 647,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 647.1,
      human: true,
    },
    {
      text: '«СНОРТ» раскручен полностью. На фурмах 0.',
      sender: 'Газовщик',
      audio: 'tts-vo50',
      startTime: timeDiff + 648,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 652,
    },
    {
      text: 'Закрывайте шибера.',
      sender: 'Мастер печи',
      audio: 'tts-vo51',
      startTime: timeDiff + 653,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 653.1,
      human: true,
    },
    {
      text: 'Закрываю шибера.',
      sender: 'Газовщик',
      audio: 'tts-vo52',
      startTime: timeDiff + 654,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 657,
    },
    // ilay dp ff bzu ff
    {
      action: {
        window2D: {
          elements: [
            // dp
            // { name: 'radar1_text', text: '1.21' },
            // { name: 'radar2_text', text: '1.48' },
            // { name: 'radar3_text', text: '1.11' },
            // { name: 'zadan_yrov_sin', text: '0.90' },
            // { name: 'EKZ_H1', text: '100' },
            // { name: 'EKZ_H2', text: '100' },
            // { name: 'EKZ_H3', text: '100' },
            // { name: 'AKZ_100', opacity: 1 },
            // { name: 'AKZ_45-100', opacity: 1 },
            // { name: 'AKZ_45', opacity: 1 },
            // { name: 'AKZ_30', opacity: 1 },
            // { name: 'AKZ_17', opacity: 1 },
            // { name: 'EVS_DP7_O', text: '53829' },
            // { name: 'EVD1_O', text: '4504' },
            { name: 'EVS_DP7_F', text: '7189' },
            // { name: 'EVD1_F', text: '313429' },
            { name: 'EVD_F', text: '311575' },
            { name: 'P_1', text: '0.31' },
            // { name: 'F_evd', text: '5216' },
            { name: 'F_hol_dyt', text: '6' },
            { name: 'T_hol_dyt', text: '13' },
            { name: 'O_hol_dyt', text: '22.2' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.8' },
            // { name: 'FO2_hol_dyt', text: '1158' },
            { name: 'N2', text: '94.5' },
            { name: 'CO', text: '2.2' },
            { name: 'CO2', text: '2.4' },
            { name: 'H2_tryb', text: '0.7' },
            { name: 'Nco_tryb', text: '51.8' },
            { name: 'Q_domG_tryb', text: '715', opacity: '0' },
            { name: 'P_vozd_tryb', text: '0' },
            { name: 'P_gaza_tryb', text: '14' },
            { name: 'CO_bor_tryb', text: '0.00' },
            { name: 'H_snotr', text: '100' },
            { name: 'dp_kl_red', color: '#00DA01' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_89', opacity: '1' },
            { name: 'H_progres_100', opacity: '1' },
            { name: 'H_step_isp', text: '-1.$', opacity: '1' },
            { name: 'HCO_step_isp', text: '-1.$' },
            { name: 'Tkyp_3', text: '1132' },
            { name: 'Tkyp_2', text: '1192' },
            { name: 'Tkyp_1', text: '1183' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#43A3EF' },
            { name: 'VNK2_status_1_fon', color: '#BD0102' },
            { name: 'VNK1_status_1_fon', color: '#BD0102' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3', text: '0' },
            { name: 'Fgaz_2', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'Tdym_3', text: '132' },
            { name: 'Tdym_2', text: '185' },
            { name: 'Tdym_1', text: '272' },
            { name: 'P_Os_szat_voz', text: '8.35' },
            { name: 'T_Os_szat_voz', text: '32' },
            { name: 'Temp_peref_1', text: '74' },
            { name: 'Temp_peref_2', text: '68' },
            { name: 'Temp_peref_3', text: '73' },
            { name: 'Temp_peref_4', text: '69' },
            { name: 'Temp_peref_5', text: '70' },
            { name: 'Temp_peref_6', text: '71' },
            { name: 'Temp_peref_7', text: '70' },
            { name: 'Temp_peref_8', text: '67' },
            { name: 'Temp_peref_9', text: '71' },
            { name: 'Temp_peref_10', text: '59' },
            { name: 'Temp_peref_11', text: '62' },
            { name: 'Temp_peref_12', text: '68' },
            { name: 'Temp_peref_13', text: '101' },
            { name: 'Temp_peref_14', text: '74' },
            { name: 'Temp_peref_15', text: '83' },
            { name: 'Temp_peref_16', text: '76' },
            { name: 'T1', text: '107' },
            { name: 'T2', text: '95' },
            { name: 'T3', text: '109' },
            { name: 'T4', text: '96' },
            { name: 'P_2', text: '0.14' },
            { name: 'P_2_rect', color: "#d22b24" },
            { name: 't_gor_dut', text: '1185' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '10' },
            { name: 'P_pg_prir_gaz', text: '8,60' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '0' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.00' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.01' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '0.14' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.12' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffff0f' },
            { name: 'TTG_raschet', text: '2385', opacity: '0' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', opacity: '0' },
            { name: 'L4', opacity: '0' },
            { name: 'L2', text: '1428', opacity: '1' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L3', text: '978', opacity: '0' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '0.01' },
            { name: 'P_tryba_1_591', text: '0.01' },
            { name: 'P_tryba_1_592', text: '0.01' },
            { name: 'P_tryba_1_593', text: '0.01' },
            { name: 'P_tryba_2_1', text: '0.01' },
            { name: 'P_tryba_2_2', text: '0.01' },
            { name: 'P_tryba_2_3', text: '0.02' },
            { name: 'P_tryba_2_4', text: '0.02' },
            { name: 'P_tryba_3_590', text: '0.02' },
            { name: 'P_tryba_3_591', text: '0.02' },
            { name: 'P_tryba_4_1', text: '2.45' },
            { name: 'P_tryba_4_2', text: '1.82' },
            { name: 'P_tryba_4_3', text: '2.55' },
            { name: 'P_tryba_4_4', text: '1.82' },
            { name: 'P_tryba_5_1', text: '0.45' },
            { name: 'P_tryba_5_2', text: '1.14' },
            { name: 'P_tryba_5_3', text: '1.47' },
            { name: 'P_tryba_5_4', text: '2.40' },
            { name: 'V_dyt', text: '0.0' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '27.5' },
            { name: 'ydel_tep_17', text: '46.7' },
            { name: 'ydel_tep_16', text: '42.8' },
            { name: 'ydel_tep_15', text: '37.1' },
            { name: 'ydel_tep_12_14', text: '73.4' },
            { name: 'ydel_tep_10_11', text: '21.9' },
            { name: 'ydel_tep_9', text: '23.2' },
            { name: 'ydel_tep_8', text: '24.1' },
            { name: 'ydel_tep_7', text: '31.1' },
            // bzu
            { name: 'ochistka sedel_P', text: '6.24' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.01' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.0' },
            { name: 'B1_vibratciya', text: '2' },
            { name: 'V linii P_B1', text: '202' }, // Б1
            { name: 'V linii dP_B1', text: '228' },
            { name: 'V sisteme vzveh_B1', text: '193' },
            { name: 'V linii P_B2', text: '149' }, // Б2
            { name: 'V linii dP_B2', text: '276' },
            { name: 'V sisteme vzveh_B2', text: '167' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.00' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.01' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.01' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.01' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia', text: '8' },
            { name: 'ugol naklona_tekushiy', text: '46.7' },
            { name: 'ugol naklona_zadanyi', text: '46.7' },
            { name: 'gradusow ugol', text: '212.0' },
            { name: 'prochent1', text: '0' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#00FF00' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р', opacity: '1' },
            { name: 'left_ellipse', opacity: '1' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.00' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '93.0' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.4' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#00FF00' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#00FF00' }, // пауза по центру
            { name: 'leviy', color: '#860004' }, // палка от цифр слева
            { name: 'verx', text: '-0' }, // цифры сверху
            { name: 'praviy', color: '#860004' }, // палка от цифр справа
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции
            { name: 'tekushiy rezym_A', color: '#CEC7B5' }, // текущий режим А задник
            { name: 'tek rejim_A', color: '#B7B2AE' }, // текущий режим А задник
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.00' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '13.6' }, // t
            { name: 'matrix 1 str 14_M', text: '28.8' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '1' }, // % справа
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '30' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '0.01' }, // 
            { name: 'B2_P compens', text: '0.05' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '83' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '47' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '1.39' }, // 
            { name: 'radar 1', text: '1.51' }, // 
            { name: 'radar 2', text: '1.79' }, // 
            { name: 'mexan', text: '1.40' }, // 
            { name: 'bzu_mex.zond na huxte', color: '#00FF00' }, //  зеленый квадрат Мех.зонд на шихт
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#2B2A29' }, // в работе
            { name: 'ismetir_ramki', color: '#00FF00' }, // в работе
            { name: 'B1_nomerstr', text: '4' }, // 
            { name: 'B2_nomerstr', text: '5' }, // 
            { name: 'T3_nomerstr', text: '5' }, // 
            { name: 'T2_nomerstr', text: '5' }, // 
            { name: 'T1_nomerstr', text: '5' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'К' }, // 
            { name: 'T2_Tip_text', text: 'К' }, // 
            { name: 'T1_Tip_text', text: 'К' }, // 
            { name: 'B1_Tip', color: '#860004' }, // 
            { name: 'B2_Tip', color: '#008600' }, // 
            { name: 'T2_Tip', color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            { name: 'B1_ves', text: '93.0' }, // 
            { name: 'B2_ves', text: '13.6' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            { name: 'K_str1', color: '#860004' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'na_conveer_s1_bukca', text: 'Р', opacity: '0' }, // str 2 
            { name: 'str1_down', text: 'Р' }, // str 2 
            { name: 'str51_down', text: 'К' }, // str 51 
            // { name: 'str2_P_1',   text: '0' }, // str 2-11 t
            // { name: 'str2_P_2',   text: '0' }, // str 2-10 t
            // { name: 'str2_P_3',   text: '0' }, // str 2-9 t
            // { name: 'str2_P_4',   text: '13' }, // str 2-8 t
            // { name: 'str2_P_5',   text: '13' }, // str 2-7 t
            // { name: 'str2_P_6',   text: '13' }, // str 2-6 t
            // { name: 'str2_P_7',   text: '11' }, // str 2-5 t
            // { name: 'str2_P_8',   text: '10' }, // str 2-4 t
            // { name: 'str2_P_9',   text: '10' }, // str 2-3 t
            // { name: 'str2_P_10',  text: '9' }, // str 2-2 t
            // { name: 'str2_P_11',  text: '21' }, // str 2-1 t
            // { name: 'str2_P_12',  text: '16.2' }, // str 2-ves t
            { name: 'Str1_8', color: '#00FF00' }, // str 1-8 r  // #008600
            { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            { name: 'Str1_1', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'str1_K_1',   text: '0' }, // str 1-11 t
            // { name: 'str1_K_2',   text: '0' }, // str 1-10 t
            // { name: 'str1_K_3',   text: '0' }, // str 1-9 t
            // { name: 'str1_K_4',   text: '22' }, // str 1-8 t
            // { name: 'str1_K_5',   text: '21' }, // str 1-7 t
            // { name: 'str1_K_6',   text: '19' }, // str 1-6 t
            // { name: 'str1_K_7',   text: '15' }, // str 1-5 t
            // { name: 'str1_K_8',   text: '13' }, // str 1-4 t
            // { name: 'str1_K_9',   text: '10' }, // str 1-3 t
            // { name: 'str1_K_10',  text: '0' }, // str 1-2 t
            // { name: 'str1_K_11',  text: '0' }, // str 1-1 t
            // { name: 'str1_K_12',  text: '93.0' }, // str 1-ves t
            // { name: 'str51_SM_1',   text: '0' }, // str 51-11 t
            // { name: 'str51_SM_2',   text: '0' }, // str 51-10 t
            // { name: 'str51_SM_3',   text: '0' }, // str 51-9 t
            // { name: 'str51_SM_4',   text: '0' }, // str 51-8 t
            // { name: 'str51_SM_5',   text: '0' }, // str 51-7 t
            // { name: 'str51_SM_6',   text: '0' }, // str 51-6 t
            // { name: 'str51_SM_7',   text: '0  0' }, // str 51-5-4 t
            // { name: 'str51_SM_8',   text: '0' }, // str 51-3 t
            // { name: 'str51_SM_9',   text: '0' }, // str 51-2 t
            // { name: 'str51_SM_10',  text: '100' }, // str 51-1 t
            // { name: 'str51_SM_11',  text: '15.0' }, // str 51-ves t
          ]
        }
      },
      startTime: timeDiff + 657.01,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '332.9',
      },
      startTime: timeDiff + 657.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '013.6',
      },
      startTime: timeDiff + 657.02,
    },
    ////--------------------------------39----------------------------------------//84//-new 
    // scenarioText: 'Делаем 310 318 и 319 поочерёдно.',
    ////--------------------------------клапан 310----------------------------------------Закрыт. Автоматический в ручной-------------------------------
    // ilay vnk3 vnk3 ff 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.35' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41.34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1.000' },
            // { name: '123_SP_1', text: '1.000' },
            // { name: '123_KP_1', text: '16.83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0.00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0.03' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18.71' },
            { name: '3TI_43', text: '76' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '128' },
            { name: '3TI_28_1', text: '126' },
            { name: '3TI_28_2', text: '133' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#050FE5' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Дутье' },
            { name: 'vnk3_stripes', color: '#050FE5' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '2' },
            { name: '3TI_02', text: '1226' },
            { name: '3TI_03', text: '1220' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1065' },
            { name: 'vybor_signala', text: '1225' },
            { name: 'kl_319', color: '#00FF00' },
            { name: 'circle_dutyo', color: '#00FF00' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#00ff00' },
            { name: 'kl_310', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 657.03,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_318', color: '#07FF05' },
            { name: 'kl_319', color: '#07FF05' },
          ]
        }
      },
      startTime: timeDiff + 657.1,
    },
    {
      scenarioText: 'Перевести ВНК №3 на ручной режим.',
      audio: 'tts-38',
      sender: 'Система',
      startTime: timeDiff + 658,
    },
    {
      text: 'Перевести клапан 310 на ручной режим.',
      sender: 'Система',
      action: {
        target2D: 'vn_310_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 310' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
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
      startTime: timeDiff + 661,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        realName: 'Ручной',
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
      startTime: timeDiff + 661.2,
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
      startTime: timeDiff + 661.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'open_vn',
        realName: 'Байпас всех блокировок',
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
      startTime: timeDiff + 661.6,
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
      startTime: timeDiff + 661.8,
      human: true,
    },
    {
      text: 'Перевести клапан 318 на ручной режим.',
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 662,
      human: true,
    },
    // ilay vnk3
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.30' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41.34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1.000' },
            // { name: '123_SP_1', text: '1.000' },
            // { name: '123_KP_1', text: '16.83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0.00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0.02' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18.59' },
            { name: '3TI_43', text: '76' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '129' },
            { name: '3TI_28_1', text: '128' },
            { name: '3TI_28_2', text: '133' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#050FE5' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Дутье' },
            { name: 'vnk3_stripes', color: '#050FE5' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '2' },
            { name: '3TI_02', text: '1225' },
            { name: '3TI_03', text: '1220' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1073' },
            { name: 'vybor_signala', text: '1225' },
            { name: 'kl_319', color: '#00FF00' },
            { name: 'circle_dutyo', color: '#00FF00' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
          ]
        }
      },
      startTime: timeDiff + 662.02,
    },
    ////
    ////--------------------------------клапан 318----------------------------------------Открыт. Автоматический в ручной-------------------------------
    {
      // text: 'Перевести клапан 318 на ручной режим.',
      // sender: 'Система',
      action: {
        target2D: 'vn_318_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 318' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
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
      startTime: timeDiff + 662.1,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        realName: 'Ручной',
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
      startTime: timeDiff + 662.2,
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
      startTime: timeDiff + 662.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'open_vn',
        realName: 'Байпас всех блокировок',
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
      startTime: timeDiff + 662.6,
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
      startTime: timeDiff + 662.8,
      human: true,
    },
    {
      text: 'Перевести клапан 319 на ручной режим.',
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 663,
      human: true,
    },
    // ilay vnk3
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.28' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41.34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1.000' },
            // { name: '123_SP_1', text: '1.000' },
            // { name: '123_KP_1', text: '16.83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0.00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0.03' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18.72' },
            { name: '3TI_43', text: '76' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '128' },
            { name: '3TI_28_1', text: '126' },
            { name: '3TI_28_2', text: '133' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#050FE5' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Дутье' },
            { name: 'vnk3_stripes', color: '#050FE5' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '2' },
            { name: '3TI_02', text: '1225' },
            { name: '3TI_03', text: '1220' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1076' },
          ]
        }
      },
      startTime: timeDiff + 663.03,
    },
    ////--------------------------------клапан 319----------------------------------------Открыт. Автоматический в ручной-------------------------------
    {
      // text: 'Перевести клапан 319 на ручной режим.',
      // sender: 'Система',
      action: {
        target2D: 'vn_319_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 319' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
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
      startTime: timeDiff + 663.1,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        realName: 'Ручной',
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
      startTime: timeDiff + 663.2,
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
      startTime: timeDiff + 663.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'open_vn',
        realName: 'Байпас всех блокировок',
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
      startTime: timeDiff + 663.6,
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
      startTime: timeDiff + 663.8,
      human: true,
    },
    // ilay vnk3 vnk3 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.26' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41.34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1.000' },
            // { name: '123_SP_1', text: '1.000' },
            // { name: '123_KP_1', text: '16.83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0.00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0.03' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18.70' },
            { name: '3TI_43', text: '76' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '129' },
            { name: '3TI_28_1', text: '125' },
            { name: '3TI_28_2', text: '133' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#050FE5' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Дутье' },
            { name: 'vnk3_stripes', color: '#050FE5' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '2' },
            { name: '3TI_02', text: '1225' },
            { name: '3TI_03', text: '1220' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1068' },
          ]
        }
      },
      startTime: timeDiff + 663.82,
    },
    ////--------------------------------40----------------------------------------//85//-new 
    {
      scenarioText: 'Открыть клапан 310 для сброса давления.',
      sender: 'Система',
      audio: 'tts-39',
      startTime: timeDiff + 664,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 664.1,
      human: true,
    },
    {
      action: {
        target2D: 'vn_310_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 310' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
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
            { name: 'VNK3_vnk_3', color: '#ffffff' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  «Открыть»
        ]
      },
      startTime: timeDiff + 667,
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
      startTime: timeDiff + 668,
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
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_310_1', color: '#8F8F8F' },
            { name: 'kl_310_2', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 668.2,
      human: true,
    },
    //  мигание
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_310_1', color: '#00FF00' },
            { name: 'kl_310_2', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 669,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_310_1', color: '#8F8F8F' },
            { name: 'kl_310_2', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 670,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_310_1', color: '#00FF00' },
            { name: 'kl_310_2', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 671,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_310_1', color: '#8F8F8F' },
            { name: 'kl_310_2', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 672,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_310_1', color: '#00FF00' },
            { name: 'kl_310_2', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 673,
    },
    // ilay vnk3 vnk3 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.24' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41.34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1.000' },
            // { name: '123_SP_1', text: '1.000' },
            // { name: '123_KP_1', text: '16.83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0.00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0.02' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18.68' },
            { name: '3TI_43', text: '75' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '129' },
            { name: '3TI_28_1', text: '126' },
            { name: '3TI_28_2', text: '133' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#ffffff' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Индивидуал.' },
            { name: 'VNK3_status_2', text: '' },
            { name: 'vnk3_stripes', color: '#ffffff' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '1' },
            { name: '3TI_02', text: '1224' },
            { name: '3TI_03', text: '1219' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1068' },
            { name: 'vybor_signala', text: '1224' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
          ]
        }
      },
      startTime: timeDiff + 673.02,
    },
    ////--------------------------------41----------------------------------------//86//-new 318
    {
      scenarioText: 'Закрыть клапан 318.',
      sender: 'Система',
      audio: 'tts-40',
      startTime: timeDiff + 673.2,
    },
    {
      action: {
        target2D: 'close_w1',
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 676.3,
      human: true,
    },
    {
      action: {
        target2D: 'vn_318_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 318' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
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
      startTime: timeDiff + 676.4,
      human: true,
    },
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'open_vn',
        realName: 'Закрыть',
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
      startTime: timeDiff + 676.6,
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
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'stop' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 676.8,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 677.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 678,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 679,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 680,
    },
    // ОКНО ВН  // КЛИК СТОП
    {
      action: {
        target2D: 'stop',
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
      startTime: timeDiff + 680.2,
      human: true
    },
    ////--------------------------------клапан 318----------------------------------------Закрыт. Закрыт в закрыт-------------------------------    //  1
    // повторить 2-3 раза. Будет 2
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'open_vn',
        realName: 'Закрыть',
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
      startTime: timeDiff + 680.4,
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
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'stop' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 680.6,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 681.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 682,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 683,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 684,
    },
    // ОКНО ВН  // КЛИК СТОП
    {
      action: {
        target2D: 'stop',
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
      startTime: timeDiff + 684.2,
      human: true
    },
    ///////
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'open_vn',
        realName: 'Закрыть',
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
      startTime: timeDiff + 684.4,
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
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'stop' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 684.6,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 685.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_318', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 686,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
            { name: 'status_window_text', text: 'Закрыт' },
          ]
        },
      },
      startTime: timeDiff + 687,
    },
    // ilay
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.24' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41.34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1.000' },
            // { name: '123_SP_1', text: '1.000' },
            // { name: '123_KP_1', text: '16.83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0.00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0.03' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18.71' },
            { name: '3TI_43', text: '76' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '128' },
            { name: '3TI_28_1', text: '126' },
            { name: '3TI_28_2', text: '133' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#050FE5' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Дутье' },
            { name: 'vnk3_stripes', color: '#050FE5' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '2' },
            { name: '3TI_02', text: '1226' },
            { name: '3TI_03', text: '1218' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1063' },
            // { name: 'vybor_signala',   text: '1225' },
            // { name: 'kl_319',   color: '#00FF00' },
            // { name: 'circle_dutyo',           color: '#00FF00' },
            // { name: 'circle_nagrev',          color: '#000' },
            // { name: 'circle_otdeleniye_1',    color: '#000' },
            // { name: 'circle_otdeleniye_2',    color: '#000' },
            // { name: 'kl_336a',   color: '#ff0000' },
            // { name: 'kl_318a',   color: '#ff0000' },
            // { name: 'kl_318',   color: '#00ff00' },
            // { name: 'kl_310',   color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 687.02,
    },
    ////--------------------------------клапан 318----------------------------------------Закрыт. Закрыт в закрыт-------------------------------    //  2
    ////--------------------------------42----------------------------------------//87//-new 319
    {
      scenarioText: 'Закрыть клапан 319.',
      sender: 'Система',
      audio: 'tts-41',
      startTime: timeDiff + 688,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 688.1,
      human: true,
    },
    // Sergey (VNK3 после закрытия клапана 318)
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '12,64' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433,0' },
            // { name: '115_SPT',  text: '108,0' },
            // { name: '115_KP_2', text: '500,0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221,1' },
            // { name: '123_SP_2', text: '1200,0' },
            // { name: '123_KP_2', text: '28,54' },
            // { name: '123_GAZ',  text: '0,00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41,34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1,000' },
            // { name: '123_SP_1', text: '1,000' },
            // { name: '123_KP_1', text: '16,83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0,00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0,31' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18,96' },
            { name: '3TI_43', text: '75' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '127' },
            { name: '3TI_28_1', text: '127' },
            { name: '3TI_28_2', text: '133' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#F6EDE8' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Индивидуал.' },
            { name: 'VNK3_status_2', text: '' },
            { name: 'vnk3_stripes', color: '#F6EDE8' },
            { name: 'Vremya_nagreva', text: '105' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '0' },
            { name: '3TI_02', text: '1222' },
            { name: '3TI_03', text: '1218' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1073' },
            { name: 'vybor_signala', text: '1222' },
            { name: 'kl_319', color: '#00FF00' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#ff0000' },
            { name: 'kl_310_1', color: '#00FF00' },
            { name: 'kl_310_2', color: '#00FF00' },
          ],
        },
      },
      startTime: timeDiff + 688.11,
    },
    {
      action: {
        target2D: 'vn_319_btn',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 319' },
            { name: 'left_vn', color: '#07FF05' },
            { name: 'right_vn', color: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
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
          { x: 82.90, y: 45.2, w: 0, h: 0, id: 'stop' },
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 79.80, y: 57.2, w: 4.0, h: 2.6, id: 'open_vn' },   //  клапан 319 //  win 1  //  "Закрыть"
        ]
      },
      startTime: timeDiff + 691.4,
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
      startTime: timeDiff + 691.6,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        realName: 'Закрыть',
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
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_319', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 691.8,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_318', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 692.8,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_319', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 693.8,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_319', color: '#FF0000' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000000' },
          ]
        },
      },
      startTime: timeDiff + 694.8,
    },
    ////--------------------------------43----------------------------------------//88//-new 310
    {
      scenarioText: 'Закрыть клапан 310.',
      sender: 'Система',
      audio: 'tts-42',
      startTime: timeDiff + 695,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 695.1,
      human: true,
    },
    // Sergey (VNK3 после закрытия клапана 319)
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '12,62' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433,0' },
            // { name: '115_SPT',  text: '108,0' },
            // { name: '115_KP_2', text: '500,0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221,1' },
            // { name: '123_SP_2', text: '1200,0' },
            // { name: '123_KP_2', text: '28,54' },
            // { name: '123_GAZ',  text: '0,00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41,34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1,000' },
            // { name: '123_SP_1', text: '1,000' },
            // { name: '123_KP_1', text: '16,83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0,00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0,01' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '14,85' },
            { name: '3TI_43', text: '75' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '127' },
            { name: '3TI_28_1', text: '127' },
            { name: '3TI_28_2', text: '133' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#F6EDE8' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Индивидуал.' },
            { name: 'VNK3_status_2', text: '' },
            { name: 'vnk3_stripes', color: '#F6EDE8' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '0' },
            { name: '3TI_02', text: '1221' },
            { name: '3TI_03', text: '1218' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1057' },
            { name: 'vybor_signala', text: '1221' },
            { name: 'kl_319', color: '#ff0000' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#ff0000' },
            { name: 'kl_310_1', color: '#00FF00' },
            { name: 'kl_310_2', color: '#00FF00' },
          ],
        },
      },
      startTime: timeDiff + 695.11,
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
            { name: 'circle_n_winVN', stroke: '#07FF05' },
            { name: 'circle_n_winVN', stroke: '#07FF05' },
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
      startTime: timeDiff + 696.5,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn',  // окно ВН  "Закрыть"
        realName: 'Закрыть',
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
      startTime: timeDiff + 696.6,
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
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_319', color: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 696.8,
      human: true,
    },
    //мигание пару секунд
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_310', color: '#FF0000' },
          ]
        },
      },
      startTime: timeDiff + 697.8,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_310', color: '#8F8F8F' },
          ]
        },
      },
      startTime: timeDiff + 698.8,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#FF0000' },
            { name: 'right_vn', color: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'circle_n_winVN', stroke: '#FF0000' },
            { name: 'kl_310', color: '#FF0000' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'polozenie_button_text', color: '#000000' },
          ]
        },
      },
      startTime: timeDiff + 699.8,
    },
    // ilay
    {
      action: {
        window2D: {
          elements: [
            { name: 'VNK3_vnk_3', color: '#6E6E6E' },
            { name: 'VNK3_VNK3_status_1', text: 'Индивидуал.' },
            { name: 'VNK3_VNK3_status_2', text: 'Отделение' },
            { name: 'BVNK_VNK3_circle_nagrev', color: '#000000' },
            { name: 'BVNK_VNK3_circle_otdeleniye_1', color: '#04ff00' },
          ]
        },
      },
      startTime: timeDiff + 699.9,
    },
    ////--------------------------------44----------------------------------------//89//-new 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 700,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 700.1,
      human: true,
    },
    // Sergey (VNK3 после закрытия клапана 310)
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '12,32' },
            { name: 'PS_10', color: '#00FF00' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#00FF00' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            // { name: '115_SPW',  text: '433,0' },
            // { name: '115_SPT',  text: '108,0' },
            // { name: '115_KP_2', text: '500,0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#00FF00' },
            // { name: '123_PV_2', text: '1221,1' },
            // { name: '123_SP_2', text: '1200,0' },
            // { name: '123_KP_2', text: '28,54' },
            // { name: '123_GAZ',  text: '0,00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#00FF00' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },
            // { name: '115_PV',   text: '109961' },
            // { name: '115_SP',   text: '113391' },
            // { name: '115_KP_1', text: '41,34' },
            // { name: 'V1_t3_4',  text: 'Соглас', color: '#000' },
            // { name: '123_PV_1', text: '1,000' },
            // { name: '123_SP_1', text: '1,000' },
            // { name: '123_KP_1', text: '16,83' },
            // { name: 'V1_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0,00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#00FF00' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0,01' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18,64' },
            { name: '3TI_43', text: '75' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '24' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '127' },
            { name: '3TI_28_1', text: '127' },
            { name: '3TI_28_2', text: '134' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Индивидуал.' },
            { name: 'VNK3_status_2', text: 'ОТДЕЛЕНИЕ' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '0' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '0' },
            { name: '3TI_02', text: '1221' },
            { name: '3TI_03', text: '1217' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '1058' },
            { name: 'vybor_signala', text: '1221' },
            { name: 'kl_319', color: '#ff0000' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#00FF00' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
          ],
        },
      },
      startTime: timeDiff + 700.11,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 702,
      human: true,
    },
    {
      text: 'Шибера закрыты.',
      sender: 'Газовщик',
      audio: 'tts-vo53',
      startTime: timeDiff + 703,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 706,
    },
    {
      text: 'Берём печь на тягу.',
      sender: 'Мастер печи',
      audio: 'tts-vo54',
      startTime: timeDiff + 708,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 708.1,
      human: true,
    },
    {
      text: 'Выполняю, берём печь на тягу.',
      sender: 'Газовщик',
      audio: 'tts-vo55',
      startTime: timeDiff + 709,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 711,
    },
    ////----------------------------------//90-pass//-new
    ////--------------------------------45----------------------------------------//91//-new 
    {
      scenarioText: 'Перевести на дистанцию клапан тяги 022.',
      sender: 'Система',
      audio: 'tts-43',
      startTime: timeDiff + 712,
    },
    {
      action: {
        target3D: 'kl022',
        rotation: { y: 0.785398 },
      },
      duration: 0.3,
      startTime: timeDiff + 713,
      human: true,
    },
    ////--------------------------------46----------------------------------------//92//-new 
    {
      scenarioText: 'Открыть клапан тяги 022 на «Общей схеме ВНК».',
      sender: 'Система',
      startTime: timeDiff + 714,
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
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
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
      startTime: timeDiff + 714.1,
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
      startTime: timeDiff + 714.2,
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
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
          ]
        },
        helper2D: [
          { x: 94.7, y: 26, w: 1.7, h: 2.2, id: 'close_w1' },
          { x: 87.4, y: 37.8, w: 4, h: 2.5, id: 'open_vn' },
          { x: 87.2, y: 40.8, w: 8.6, h: 2.6, id: 'stop' },
        ]
      },
      startTime: timeDiff + 714.3,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 715,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 716,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 717,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 718,
    },
    ////--------------------------------46-2---------------------------------------- 
    {
      action: {
        target2D: 'stop',
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
      startTime: timeDiff + 718.1,
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
      startTime: timeDiff + 718.2,
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
      startTime: timeDiff + 718.3,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 719,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 720,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 721,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 722,
    },
    ////--------------------------------46-3---------------------------------------- 
    {
      action: {
        target2D: 'stop',
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
      startTime: timeDiff + 722.1,
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
      startTime: timeDiff + 722.2,
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
      startTime: timeDiff + 722.3,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 723,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_022', color: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
            { name: 'circle_kl022', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 724,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'kl_022', color: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
            { name: 'circle_kl022', stroke: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 725,
    },
    {
      text: 'Клапан тяги открыт',
      sender: 'Система',
      audio: 'tts-44',
      startTime: timeDiff + 726,
    },
    /// 47 sound
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 729,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 729.1,
      human: true,
    },
    // Sergey (vnk_main После закрытия 022) 
    {
      action: {
        window2D: {
          elements: [
            { name: '7TI_41', text: '28' },
            { name: '7PI_12', text: '17,89' },
            { name: 'ramka_7PI_12', color: '#BEBEBE' },
            { name: '7FI_05', text: '0' },
            { name: '7TI_40', text: '11' },
            { name: '7PI_11', text: '0,00' },
            { name: '7FI_04', text: '0' },
            { name: '5QI_01_01', text: '7' },
            { name: '5QI_01_02', text: '63' },
            { name: 'PV2', text: '11,84' },
            { name: 'SP2', text: '9,00' },
            { name: 'PV2_1', text: '15,97' },
            { name: 'M_t1_4', text: 'Работа', color: '#00FF00' },
            { name: 'PV3', text: '5,00' },
            { name: 'SP3', text: '0,00' },
            { name: 'PV3_1', text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            { name: 'PV4', text: '0,00' },
            { name: 'SP4', text: '10,00' },
            { name: 'PV4_1', text: '5,00' },
            { name: 'M_t3_4', text: 'Работа', color: '#000' },
            { name: 'kl053_proc', text: '35' },
            { name: 'kl051_proc', text: '0' },
            { name: 'kl052_proc', text: '0' },
            { name: 'kl035_proc', text: '62' },
            { name: 'circle_035', stroke: '#BEBEBE' },
            { name: '035_stripe_1', opacity: '1' },
            { name: '035_stripe_2', opacity: '0' },
            { name: '035_stripe_3', opacity: '0' },
            { name: 'kl0333_proc', text: '0' },
            { name: 'kl_0333', color: '#ff0000' },
            { name: 'circle_kl0333', stroke: '#ff0000' },
            { name: 'B3_3', color: '#BFBFBF', stroke: '#6B6B6B' }, // Насос
            { name: 'B3_2', color: '#BFBFBF', stroke: '#6B6B6B' },
            { name: 'B3_1', color: '#9E9E9E', stroke: '#6B6B6B' },
            { name: 'klOF3_proc', text: '0' },
            { name: '0F3_stripe_1', opacity: '1' },
            { name: '0F3_stripe_2', opacity: '0' },
            { name: '0F3_stripe_3', opacity: '0' },
            { name: 'circle_0F3', opacity: '0' },
            { name: 'kl0313_proc', text: '100' },
            { name: 'kl0332_proc', text: '0' },
            { name: 'kl_0332', color: '#ff0000' },
            { name: 'circle_kl0332', stroke: '#ff0000' },
            { name: 'B2_3', color: '#BFBFBF', stroke: '#6B6B6B' }, // Насос
            { name: 'B2_2', color: '#BFBFBF', stroke: '#6B6B6B' },
            { name: 'B2_1', color: '#9E9E9E', stroke: '#6B6B6B' },
            { name: 'klOF2_proc', text: '0' },
            { name: '0F2_stripe_0', opacity: '0' },
            { name: '0F2_stripe_1', opacity: '0' },
            { name: '0F2_stripe_2', opacity: '0' },
            { name: '0F2_stripe_3', opacity: '1' },
            { name: 'circle_0F2', opacity: '0' },
            { name: 'kl0312_proc', text: '100' },
            { name: 'kl0331_proc', text: '0' },
            { name: 'kl_0331', color: '#ff0000' },
            { name: 'circle_kl0331', stroke: '#ff0000' },
            { name: 'B1_3', color: '#BFBFBF', stroke: '#6B6B6B' },
            { name: 'B1_2', color: '#BFBFBF', stroke: '#6B6B6B' },
            { name: 'B1_1', color: '#9E9E9E', stroke: '#6B6B6B' },
            { name: 'klOF1_proc', text: '0' },
            { name: '0F1_stripe_1', opacity: '0' },
            { name: '0F1_stripe_2', opacity: '1' },
            { name: '0F1_stripe', opacity: '0' },
            { name: 'circle_0F1', opacity: '0' },
            { name: 'kl0311_proc', text: '100' },
            { name: '7QI_01', text: '-999,00' },
            { name: 'kl_038', color: '#ff0000' },
            { name: 'circle_kl038', stroke: '#ff0000' },
            { name: 'kl038_proc', text: '0' },
            { name: 'kl028', color: '#ff0000' },
            { name: 'circle_kl028', stroke: '#ff0000' },
            { name: 'kl028_proc', text: '0' },
            // { name: 'kl020_proc',   text: '100' },
            // { name: 'kl036v_proc',  text: '0' },
            // { name: 'kl036b_proc',  text: '0' },
            // { name: 'kl048_proc', text: '0' },
            { name: 'kl029_proc', text: '100' },
            // { name: 'kl004_proc', text: '100' },
            { name: 'PI_16_proc', text: '0,00' },
            { name: '9TI_44_proc', text: '27' },
            { name: 'kl_037', color: '#ff0000' },
            { name: 'circle_kl037', stroke: '#ff0000' },
            { name: 'kl037_proc', text: '0' },
            { name: 'kl007_proc', text: '100' },
            // { name: 'kl025_proc', text: '100' },
            { name: '8QI_05_01', text: '0,00' },
            { name: '8QI_05_02', text: '0,00' },
            { name: '8QI_05_04', text: '-999,00' },
            { name: '7PI_13', text: '11,93' },
            { name: '7PI_42', text: '53' },
            { name: 'PV1', text: '1209,70' },
            { name: 'SP1', text: '1210,00' },
            { name: 'PV1_1', text: '31,12' },
            { name: 'M_t4_4', text: 'Работа', color: '#00FF00' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'Tkyp_3', text: '1216' },
            { name: 'VNK3_status_1', text: 'Индивидуальн.' },
            { name: 'VNK3_status_2', text: 'Отделение' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'VNK3_Fr', text: '0' },
            { name: 'VNK3_Fb', text: '0' },
            { name: 'Tdym_3', text: '134' },
            { name: 'kl001_proc', text: '0' },
            { name: 'kl001a_proc', text: '0' },
            { name: 'circle_001a', stroke: '#BEBEBE' },
            { name: '001a_stripe_2', opacity: '1' },
            { name: '001a_stripe_1', opacity: '0' },
            { name: '001a_stripe_3', opacity: '0' },
            { name: 'vnk2_fire', opacity: '0' }, // стрелка
            { name: 'vnk_2', color: '#9CA4AD' }, // задник стрелки
            { name: 'Tkyp_2', text: '1153' },
            { name: 'VNK2_status_1', text: 'цикличекий' },
            { name: 'VNK2_status_2', text: 'Отделение' },
            { name: 'vnk2_stripes', color: '#9CA4AD' },
            { name: 'VNK2_Fr', text: '0' },
            { name: 'VNK2_Fb', text: '0' },
            { name: 'Tdym_2', text: '154' },
            { name: '5PI_08', text: '0' },
            { name: 'TI_36', text: '16' },
            { name: 'FI_03', text: '1154' },
            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk_1', color: '#9CA4AD' }, // задник стрелки
            { name: 'Tkyp_1', text: '1333' },
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Отделение' },
            { name: 'vnk1_stripes', color: '#9CA4AD' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'Tdym_1', text: '270' },
            { name: 'vybor_signala', text: '1182' },
            { name: '5TI_21', text: '1178' },
            { name: '5TI_22', text: '1182' },
            { name: 'PI_09', text: '572,54' },
          ],
        },
      },
      startTime: timeDiff + 729.11,
    },
    {
      action: {
        target3D: 'vozNagr1_1', // Tkyp_1
        color: 'green',
        number: '1333',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'vozNagr1_2', // Tdym_1
        color: 'green',
        number: '270.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'vozNagr2_1', // Tkyp_2
        color: 'green',
        number: '1153',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'vozNagr2_2', // Tdym_2
        color: 'green',
        number: '154.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'vozNagr3_1', // Tkyp_3
        color: 'green',
        number: '1216',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'vozNagr3_2', // Tdym_3
        color: 'green',
        number: '134.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_1', // VNK1_Fr /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_2', // VNK2_Fr /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_3', // VNK3_Fr /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_1', // VNK1_Fb /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_2', // VNK2_Fb /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_3', // VNK3_Fb /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 729.12,
    },
    {
      action: {
        target3D: 'davVozGorBVN', // PI_16_proc
        color: 'green',
        number: '00.00',
      },
      startTime: timeDiff + 729.12,
    },
    ////--------------------------------47 orig----------------------------------------//93//-new 
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 730,
      human: true,
    },
    {
      text: 'Печь на тяге.',
      sender: 'Газовщик',
      audio: 'tts-vo56',
      startTime: timeDiff + 731,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 734,
    },
    {
      text: 'Хорошо.',
      sender: 'Мастер печи',
      audio: 'tts-vo57',
      startTime: timeDiff + 735,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 735.1,
      human: true,
    },
    {
      text: 'Доменная печь №6 остановлена.',
      sender: 'Газовщик',
      audio: 'tts-vo58',
      startTime: timeDiff + 736,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 739,
    },
    {
      text: 'Доменная печь №6 остановлена.',
      sender: 'Система',
      startTime: timeDiff + 740,
    },
    /**/
  ],
  // 2 scenario
  [
    /*
    {
      text: 'Сообщить о намеченном пуске доменной печи.',
      sender: 'Система',
      audio: 'tts-45',
      lifeTime: '11:50:00',
          startTime: timeDiff + 2,
    },
    ////--------------------------------0----------------------------------------
    {
      scenarioText: 'Нажать на кнопки с надписью: «Газовый цех», «Насосный цех», «Кислородный цех», «ЭВС».',
      sender: 'Система',
      multi: [  //  activeMeshsToArr
        {
          text: 'Сейчас будем раздувать доменную печь №6.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton001',
          },
          audio: 'tts-vo59',
        },
        {
          text: 'Сейчас будем раздувать доменную печь №6.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton006',
          },
          audio: 'tts-vo59',
        },
        {
          text: 'Сейчас будем раздувать доменную печь №6.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton017',
          },
          audio: 'tts-vo59',
        },
        {
          text: 'Сейчас будем раздувать доменную печь №6.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton020',
          },
          audio: 'tts-vo59',
        }
      ],
          startTime: timeDiff + 6,
      human: true,
    },
    ////--------------------------------1----------------------------------------
    {
      text: 'Снять печь с тяги.',
      sender: 'Система',
      audio: 'tts-46',
      lifeTime: '12:00:00',
          startTime: timeDiff + 10,
    },
    ////--------------------------------1.1----------------------------------------
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      action: {
        target3D: 'ButtonHightlight_046', // Литейный фурменный поддоменник
      },
          startTime: timeDiff + 13,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_on',
      },
          startTime: timeDiff + 14,
    },
    {
      text: 'Печь с тяги снята.',
      sender: 'Газовщик',
      audio: 'tts-vo60',
          startTime: timeDiff + 15,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
          startTime: timeDiff + 17,
    },
    ////--------------------------------1.2----------------------------------------
    {
      text: 'Открывайте шибера и делайте 0,3.',
      audio: 'tts-vo61',
      sender: 'Мастер печи',
          startTime: timeDiff + 18,
    },
    {
      scenarioText: 'Ответить мастеру по рации.',
      sender: 'Система',
      action: {
        target3D: 'ButtonHightlight_046', // Литейный фурменный поддоменник
      },
          startTime: timeDiff + 23,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_on',
      },
          startTime: timeDiff + 24,
    },
    {
      text: 'Открываю шибера и делаю 0,3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo62',
          startTime: timeDiff + 25,
    },
    ////--------------------------------1.3----------------------------------------
    {
      text: 'Установить ВНК №1 в положение «Индивидуальное дутье».',
      sender: 'Система',
      audio: 'tts-vo60',
          startTime: timeDiff + 30,
    },
    {
      scenarioText: 'Перевести клапан 110 в ручной режим.',
      sender: 'Система',
          startTime: timeDiff + 35,
    },
    //  Клапан 110
    {
      action: {
        target2D: 'kl110',  
        window2D: {
          elements: [ 
            { name: 'title_work_vn', text: 'Управление клапаном 110' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Закрыт' },
            // ДОДЕЛАТЬ // СТРАННО МЕНЯЕТСЯ 
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'open_vn' },   // клапан 110 -> окно ВН ( ручной )
        ]
      },
          startTime: timeDiff + 36,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1756,
            y: 770
          },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 91.70, y: 79.8, w: 3.2, h: 2.5, id: 'close_vn' },   // нет
          { x: 88.00, y: 79.8, w: 3.3, h: 2.5, id: 'open_vn1' },   // да
        ]
      },
          startTime: timeDiff + 36.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            // ДОДЕЛАТЬ // СТРАННО МЕНЯЕТСЯ 
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 82.70, y: 93.80, w: 8.6, h: 2.6, id: 'open_vn' },   // клапан 110 -> окно ВН ( Байпас всех блокировок )
        ]
      },
          startTime: timeDiff + 36.4,
      human: true,
    },
    ////////  -------
    {
      scenarioText: 'Нажать на «Байпас всех блокировок»',
      sender: 'Система',
          startTime: timeDiff + 36.8,
    },
    // окно ВН // Байпас всех блокировок
    {
      action: {
        target2D: 'open_vn', 
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1728,
            y: 930
          },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех БЛОК' },
          ]
        }, 
        helper2D: [
          { x: 90.3, y: 96, w: 3.2, h: 2.5, id: 'close_vn' },  // нет
          { x: 86.7, y: 96, w: 3.3, h: 2.5, id: 'open_vn1' },   // да
        ]
      },
          startTime: timeDiff + 37,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1741,
            y: 930
          },
          elements: [],
        },
        helper2D: [ //// NE RABATOET TUT.
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' }, // КРЕСТИК
          { x: 82.8, y: 80.2, w: 4, h: 2.6, id: 'open_vn' },      // клапан 110 -> окно ВН ( ОТКРЫТЬ )
        ]
      },
          startTime: timeDiff + 37.2,
      human: true,
    },
    ////////  -------
    {
      scenarioText: 'Перевести клапан 110 в открытый режим.',
      sender: 'Система',
      action:{
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' }, // КРЕСТИК
          { x: 82.8, y: 80.2, w: 4, h: 2.6, id: 'open_vn' },      // клапан 110 -> окно ВН ( ОТКРЫТЬ )
        ]
      },
          startTime: timeDiff + 37.3,
    },
    // окно ВН  // Открыть
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1692,
            y: 810
          },
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 88.5, y: 83.9, w: 3.2, h: 2.6, id: 'close_vn' },   // net
          { x: 84.9, y: 83.9, w: 3.2, h: 2.6, id: 'open_vn1' },       // da
        ]
      },
          startTime: timeDiff + 37.4,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' }, // КРЕСТИК
          { x: 82.8, y: 80.2, w: 4, h: 2.6, id: 'open_vn' },      // клапан 110 -> окно ВН ( ОТКРЫТЬ )
        ]
      },
          startTime: timeDiff + 37.6,
      human: true,
    },
    {
          startTime: timeDiff + 39, //  1
    },{ 
          startTime: timeDiff + 40, //  2
    },{
          startTime: timeDiff + 41, //  3
    },{
          startTime: timeDiff + 42, //  4
    },{
          startTime: timeDiff + 43, //  5
    },{
          startTime: timeDiff + 44, //  6
    },{
          startTime: timeDiff + 45, //  7
    },{
          startTime: timeDiff + 46, //  8
    },{
          startTime: timeDiff + 47, //  9
    },{
          startTime: timeDiff + 48, //  10  // Клапан мигает приблизительно 10 раз и после фиксируется.
    },
    ////////  -------
    ////--------------------------------1.4----------------------------------------
    {
      scenarioText: 'Нажать на «Байпас всех блокировок» на клапане 118а.',
      sender: 'Система',
          startTime: timeDiff + 50,
    },
    {
      action: {
        target2D: 'close_w1',
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' }, // КРЕСТИК
          { x: 82.8, y: 80.2, w: 4, h: 2.6, id: 'open_vn' },      // ОТКРЫТЬ
        ]
      },
          startTime: timeDiff + 50.2,
      human: true,
    },
    //  Клапан 118a
    {
      action: {
        target2D: 'kl118a',  
        window2D: {
          elements: [ 
            { name: 'title_work_vn', text: 'Управление клапаном 118а' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Закрыт' },
            // ДОДЕЛАТЬ // СТРАННО МЕНЯЕТСЯ 
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 82.70, y: 93.80, w: 8.6, h: 2.6, id: 'open_vn' },   // клапан 118а -> окно ВН ( Байпас всех блокировок )
        ]
      },
          startTime: timeDiff + 51,
      human: true,
    },
    // окно ВН // Байпас всех блокировок
    {
      action: {
        target2D: 'open_vn', 
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1728,
            y: 930
          },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех БЛОК' },
          ]
        }, 
        helper2D: [
          { x: 90.3, y: 96, w: 3.2, h: 2.5, id: 'close_vn' },  // нет
          { x: 86.7, y: 96, w: 3.3, h: 2.5, id: 'open_vn1' },   // да
        ]
      },
          startTime: timeDiff + 51.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1741,
            y: 930
          },
          elements: [],
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'open_vn' },   // клапан 118а -> окно ВН ( ручной )
        ]
      },
          startTime: timeDiff + 51.4,
      human: true,
    },
    ////////  -------
    {
      scenarioText: 'Перевести клапан 118а в ручной режим.',
      sender: 'Система',
      action:{
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'open_vn' },   // клапан 118а -> окно ВН ( ручной )
        ]
      },
          startTime: timeDiff + 52,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1756,
            y: 770
          },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 91.70, y: 79.8, w: 3.2, h: 2.5, id: 'close_vn' },   // нет
          { x: 88.00, y: 79.8, w: 3.3, h: 2.5, id: 'open_vn1' },   // да
        ]
      },
          startTime: timeDiff + 52.2,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            // ДОДЕЛАТЬ // СТРАННО МЕНЯЕТСЯ 
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 82.70, y: 93.80, w: 8.6, h: 2.6, id: 'open_vn' },   // клапан 118а -> окно ВН ( Байпас всех блокировок )
        ]
      },
          startTime: timeDiff + 54.4,
      human: true,
    },
    ////--------------------------------1.5---------------------------------------- 118
    {
      scenarioText: 'Аналогично п.4, только клапан 118',
      sender: 'Система',
      action:{
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 82.70, y: 93.80, w: 8.6, h: 2.6, id: 'open_vn' },   // клапан 118а -> окно ВН ( Байпас всех блокировок )
        ]
      },
          startTime: timeDiff + 55,
    },
    {
      action: {
        target2D: 'close_w1',
      },
          startTime: timeDiff + 55.2,
      human: true,
    },
    ////////  -------
    //  Клапан 118  //kl118
    {
      action: {
        target2D: 'kl118',  
        window2D: {
          elements: [ 
            { name: 'title_work_vn', text: 'Управление клапаном 118' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Закрыт' },
            // ДОДЕЛАТЬ // СТРАННО МЕНЯЕТСЯ 
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'open_vn' },   // клапан 118 -> окно ВН ( ручной )
        ]
      },
          startTime: timeDiff + 55.4,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1756,
            y: 770
          },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 91.70, y: 79.8, w: 3.2, h: 2.5, id: 'close_vn' },   // нет
          { x: 88.00, y: 79.8, w: 3.3, h: 2.5, id: 'open_vn1' },   // да
        ]
      },
          startTime: timeDiff + 55.6,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            // ДОДЕЛАТЬ // СТРАННО МЕНЯЕТСЯ 
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
          { x: 82.70, y: 93.80, w: 8.6, h: 2.6, id: 'open_vn' },   // клапан 118 -> окно ВН ( Байпас всех блокировок )
        ]
      },
          startTime: timeDiff + 55.8,
      human: true,
    },
    ////////  -------
    // окно ВН // Байпас всех блокировок
    {
      action: {
        target2D: 'open_vn', 
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1728,
            y: 930
          },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех БЛОК' },
          ]
        }, 
        helper2D: [
          { x: 90.3, y: 96, w: 3.2, h: 2.5, id: 'close_vn' },  // нет
          { x: 86.7, y: 96, w: 3.3, h: 2.5, id: 'open_vn1' },   // да
        ]
      },
          startTime: timeDiff + 56.0,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1741,
            y: 930
          },
          elements: [],
        },
        helper2D: [ 
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' }, // КРЕСТИК
          { x: 82.8, y: 80.2, w: 4, h: 2.6, id: 'open_vn' },      // клапан 118 -> окно ВН ( ОТКРЫТЬ )
        ]
      },
          startTime: timeDiff + 56.2,
      human: true,
    },
    ////////  -------
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1692,
            y: 810
          },
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 88.5, y: 83.9, w: 3.2, h: 2.6, id: 'close_vn' },   // net
          { x: 84.9, y: 83.9, w: 3.2, h: 2.6, id: 'open_vn1' },   // da
        ]
      },
          startTime: timeDiff + 56.6,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' }, // КРЕСТИК
          { x: 82.8, y: 80.2, w: 4, h: 2.6, id: 'open_vn' },      // клапан 110 -> окно ВН ( ОТКРЫТЬ )
        ]
      },
          startTime: timeDiff + 56.8,
      human: true,
    },
    ////////  -------
    ////--------------------------------1.6---------------------------------------- 119
    {
      scenarioText: 'Аналогично п.4, только клапан 119',
      sender: 'Система',
      action:{
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' }, // КРЕСТИК
          { x: 82.8, y: 80.2, w: 4, h: 2.6, id: 'open_vn' },      // клапан 110 -> окно ВН ( ОТКРЫТЬ )
        ]
      },
          startTime: timeDiff + 57,
    },
    {
      action: {
        target2D: 'close_w1',
      },
          startTime: timeDiff + 57.2,
      human: true,
    },
    ////////  -------
*/
    /*
         // клапан 119
         {
           action: {
             target2D: 'kl119',  
             window2D: {
               elements: [ 
                 { name: 'title_work_vn', text: 'Управление клапаном 119' },
                 { name: 'left_vn', color: '#ff1e00' },
                 { name: 'right_vn', color: '#ff1e00' },
                 { name: 'circle_n_winVN', stroke: '#ff1e00' },
                 { name: 'circle_n_winVN', stroke: '#ff1e00' },
                 { name: 'status_control_vnk_text', text: 'Автоматический' },
                 { name: 'status_window_text', text: 'Закрыт' },
                 // ДОДЕЛАТЬ // СТРАННО МЕНЯЕТСЯ 
               ]
             },
             helper2D: [
               { x: 83.10, y: 44.15, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
               { x: 80.10, y: 52.00, w: 4.0, h: 2.6, id: 'open_vn' },   // клапан 119 -> окно ВН ( ручной )
             ]
           },
           startTime: timeDiff + 57.4,
           human: true,
         },
         // окно ВН  // клик ручной
         {
           action: {
             target2D: 'open_vn',
             window2D: {
               newPositionWindow: {  //  wind 2
                 x: 1756,
                 y: 770
               },
               elements: [
                 { name: 'title_open_vn', text: 'Ручной' },
               ],
             },
             helper2D: [
               { x: 91.70, y: 79.8, w: 3.2, h: 2.5, id: 'close_vn' },   // нет
               { x: 88.00, y: 79.8, w: 3.3, h: 2.5, id: 'open_vn1' },   // да
             ]
           },
           startTime: timeDiff + 57.6,
           human: true,
         },
         // маленькое окошко ОК
         {
           action: {
             target2D: 'open_vn1',
             window2D: {
               elements: [
                 { name: 'status_control_vnk_text', text: 'Ручной' },
                 // ДОДЕЛАТЬ // СТРАННО МЕНЯЕТСЯ 
               ]
             },
             helper2D: [
               { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1' },  // КРЕСТИК
               { x: 82.70, y: 93.80, w: 8.6, h: 2.6, id: 'open_vn' },   // клапан 118 -> окно ВН ( Байпас всех блокировок )
             ]
           },
           startTime: timeDiff + 57.8,
           human: true,
         },
         ////////  -------
     */
  ]
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
    // ----------------------------------------------
    //Sergey
    // vnk_main
    { name: 'lifetime', text: '07:54:20' },
    { name: '7TI_41', text: '28' },
    { name: '7PI_12', text: '17,98' },
    { name: '7FI_05', text: '176266' },
    { name: '7TI_40', text: '11' },
    { name: '5QI_01_01', text: '9' },
    { name: '5QI_01_02', text: '79' },
    { name: 'PI_16_proc', text: '10,45' },
    { name: '9TI_44_proc', text: '27' },
    { name: '8QI_05_01', text: '7,58' },
    { name: '8QI_05_02', text: '76,92' },
    { name: '7PI_13', text: '9,16' },
    { name: '5PI_08', text: '407' },
    { name: 'TI_36', text: '15' },
    { name: 'FI_03', text: '943' },
    { name: 'PI_09', text: '545,35' },
    { name: '5TI_21', text: '1201' },
    { name: 'kl001a_proc', text: '31' },
    { name: 'Tkyp_3', text: '1296' },
    { name: 'VNK3_status_2', text: 'Дутье' },
    { name: 'VNK3_Fr', text: '0' },
    { name: 'VNK3_Fb', text: '0' },
    { name: 'Tdym_3', text: '181' },
    { name: 'Tkyp_2', text: '1328' },
    { name: 'VNK2_Fr', text: '81273' },
    { name: 'VNK2_Fb', text: '115641' },
    { name: 'Tdym_2', text: '139' },
    { name: 'Tkyp_1', text: '1329' },
    { name: 'VNK1_Fr', text: '96089' },
    { name: 'VNK1_Fb', text: '126220' },
    { name: 'klOF2_proc', text: '63' },
    { name: 'klOF1_proc', text: '0' },
    { name: 'Tdym_1', text: '299' },
    { name: 'VNK3_status_1_fon', color: '#0033FF' },
    { name: 'VNK2_status_1_fon', color: '#0033FF' },
    { name: 'VNK1_status_1_fon', color: '#0033FF' },
    { name: 'vnk_3', color: '#0033FF' },
    { name: 'vnk_1', color: '#B50000' },
    { name: 'kl_0332', color: '#00FF00' },
    { name: 'kl0332_proc', text: '100' },
    { name: 'kl_0331', color: '#FF1E00' },
    { name: 'kl0331_proc', text: '0' },
    { name: 'vnk1_stripes', color: '#B50000' },
    { name: 'vnk3_stripes', color: '#0033FF' },
    { name: 'circle_kl0332', stroke: '#00FF00' },
    { name: 'circle_kl0331', stroke: '#FF1E00' },
    { name: 'vnk3_fire', opacity: 0 },
    // { name: '0F2_stripe', stroke: '#000000'},
    // { name: '0F1_stripe', stroke: '#FF0000'},
    { name: 'B3_3', color: '#55FF33', stroke: '#4BB83B' },
    { name: 'B3_2', color: '#55FF33', stroke: '#4BB83B' },
    { name: 'B3_1', color: '#50DC38', stroke: '#4BB83B' },
    { name: 'B2_3', color: '#55FF33', stroke: '#4BB83B' },
    { name: 'B2_2', color: '#55FF33', stroke: '#4BB83B' },
    { name: 'B2_1', color: '#50DC38', stroke: '#4BB83B' },
    { name: 'B1_3', color: '#BFBFBF', stroke: '#6B6B6B' },
    { name: 'B1_2', color: '#BFBFBF', stroke: '#6B6B6B' },
    { name: 'B1_1', color: '#9E9E9E', stroke: '#6B6B6B' },
    { name: '053_stripe_1', opacity: 0 },
    { name: '053_stripe_2', opacity: 0 },
    { name: '051_stripe_1', opacity: 0 },
    { name: '051_stripe_2', opacity: 0 },
    { name: '052_stripe_1', opacity: 0 },
    { name: '052_stripe_2', opacity: 0 },
    { name: '035_stripe_1', opacity: 0 },
    { name: '035_stripe_2', opacity: 0 },
    { name: '0F3_stripe_1', opacity: 0 },
    { name: '0F3_stripe_2', opacity: 0 },
    { name: '0F2_stripe_1', opacity: 0 },
    { name: '0F2_stripe_2', opacity: 0 },
    { name: '0F2_stripe', opacity: 0 },
    { name: '0F1_stripe', opacity: 0 },
    { name: '0F1_stripe_1', opacity: 0 },
    { name: 'circle_0F3', opacity: 0 },
    { name: 'circle_0F2', opacity: 0 },
    { name: 'circle_0F1', opacity: 0 },
    { name: '001_stripe_1', opacity: 0 },
    { name: '001a_stripe_1', opacity: 0 },
    { name: '001a_stripe_2', opacity: 0 },
    { name: 'circle_001a', stroke: '#B0B0B0' },
    { name: 'circle_kl007', stroke: '#00FF00' },
    { name: 'circle_kl028', stroke: '#00FF00' },
    { name: 'circle_053', stroke: '#B0B0B0' },
    // BVNK_VNK1
    { name: 'VNK1_status_2', text: 'Нагрев-Отдел.' },
    { name: '1FI_01', text: '109505' },
    { name: '1PI_02', text: '8,49' },
    { name: '1TI_43', text: '46' },
    { name: '1PI_01', text: '1' },
    { name: '1TI_02', text: '1321' },
    { name: '1TI_03', text: '1305' },
    { name: '1TI_05', text: '1209' },
    { name: '1TI_28_2', text: '426' },
    { name: '1TI_28_1', text: '422' },
    { name: '1QI_01', text: '1,86' },
    { name: '1TI_29', text: '26' },
    { name: '1PI_04', text: '2,99' },
    { name: 'dym_vybor_signala', text: '424' },
    { name: '1FI_02', text: '98603' },
    { name: 'Kl115_proc', text: '40' },
    { name: 'Kl123_proc', text: '34' },
    { name: '115_SPW', text: '430.0' },
    { name: '115_SPT', text: '900.0' },
    { name: '115_KP_2', text: '500.0' },
    { name: '115_GAZ', text: '109874' },
    { name: '115_PV', text: '109903' },
    { name: '115_SP', text: '109874' },
    { name: '115_KP_1', text: '48,43' },
    { name: '123_PV_2', text: '1221,1' },
    { name: '123_SP_2', text: '1226,0' },
    { name: '123_KP_2', text: '500,0' },
    { name: '123_PV_1', text: '0,900' },
    { name: '123_SP_1', text: '1,200' },
    { name: '123_KP_1', text: '34,55' },
    { name: 'Vremya_nagreva', text: '108' },
    { name: 'kl_134', color: '#00FF00' },
    { name: 'kl_117', color: '#00FF00' },
    { name: 'kl_132', color: '#00FF00' },
    { name: 'rect_132_2', color: '#00FF00' },
    { name: 'kl_116', color: '#00FF00' },
    { name: 'rect_116_2', color: '#00FF00' },
    { name: 'kl_111', color: '#00FF00' },
    { name: 'kl_112', color: '#00FF00' },
    { name: '1PS_05', color: '#00FF00' },
    { name: 'kl_118', color: '#FF1E00' },
    { name: 'kl_119', color: '#FF1E00' },
    { name: 'circle_dutyo', color: '#000000' },
    { name: 'circle_nagrev', color: '#00FF00' },
    { name: '115_stripe', color: '#000000' },
    { name: '123_stripe', color: '#000000' },
    // BVNK_VNK2
    { name: '2FI_01', text: '99711' },
    { name: '2PI_02', text: '8,84' },
    { name: '2FI_02', text: '89861' },
    { name: '2PI_04', text: '1,52' },
    { name: '2TI_29', text: '27' },
    { name: '2TI_43', text: '47' },
    { name: '2QI_01', text: '2,24' },
    { name: '2TI_28_1', text: '238' },
    { name: '2TI_28_2', text: '241' },
    { name: 'dym_vybor_signala_2', text: '246' },
    { name: '2TI_02', text: '1320' },
    { name: '2TI_03', text: '1306' },
    { name: '2TI_04', text: '1196' },
    // { name: 'VNK2_status_1', text: 'Циклический' },
    { name: 'VNK2_status_2', text: 'Нагрев' },
    // O_n_k_na_VNK_posle_1
    { name: 'title_work_vn', text: 'Управление клапаном 29' },
    { name: 'Vremya_polnogo_dvizheniya_klapana', text: '55' },
    { name: 'polozenie_text', text: '51' },
    { name: 'left_vn', color: '#8F8F8F' },
    { name: 'right_vn', color: '#8F8F8F' },
    { name: 'circle_1_kl029', stroke: '#8F8F8F' },
    { name: 'circle_2_kl029', stroke: '#8F8F8F' },
    // bzu
    { name: 'ochistka sedel_P', text: '8,84' },
    { name: 'Vtorichnye vyskazyvaniia_P_B1', text: '4,00' },
    { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '30' },
    { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '30' },
    { name: 'B1_dp Bunker', text: '2,25' },
    { name: 'B1_P compes', text: '0,00' },
    { name: 'B1_vremy vygruski', text: '98' },
    { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
    { name: 'B1_vremy sbrosa P ', text: '11' },
    { name: 'B1_vremy nabora P ', text: '8' },
    { name: 'B1_ves s SHP', text: '18,5' },
    { name: 'B1_vibratciya', text: '11' },
    { name: 'V linii P_B1', text: '201' },
    { name: 'V linii dP_B1', text: '231' },
    { name: 'V sisteme vzveh_B1', text: '192' },
    { name: 'V linii P_B2', text: '150' },
    { name: 'V linii dP_B2', text: '274' },
    { name: 'V sisteme vzveh_B2', text: '164' },
    { name: 'rashody u davlenia v gazoprovode_P1', text: '2,29' },
    { name: 'rashody u davlenia v gazoprovode_P2', text: '2,31' },
    { name: 'rashody u davlenia v gazoprovode_P3', text: '2,30' },
    { name: 'rashody u davlenia v gazoprovode_P4', text: '2,30' },
    { name: 'rashody u davlenia v gazoprovode_F1', text: '1' },
    { name: 'rashody u davlenia v gazoprovode_F2', text: '148' },
    { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
    { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
    { name: 'stanciia', text: '1' },
    { name: 'ugol naklona_tekushiy', text: '14.2' },
    { name: 'ugol naklona_zadanyi', text: '14.3' },
    { name: 'gradusow ugol', text: '302.9' },
    { name: 'prochent1', text: '0' },
    { name: 'matrix 1 str 1_kgc', text: '0.00' },
    { name: 'matrix 1 str 1_T', text: '22.0' },
    { name: 'matrix 1 str 1_M', text: '15.3' },
    { name: 'HZ1', text: '1.4' },
    { name: 'HZ2', text: '1.2' },
    { name: 'prochent2', text: '1' },
    { name: 'matrix 1 str 14_M', text: '4,2' },
    { name: 'matrix 1 str 14_T', text: '0,1' },
    { name: 'verx', text: '-81' },
    { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4,00' },
    { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '30' },
    { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' },
    { name: 'B2_Dp bunker', text: '2,25' },
    { name: 'B2_P compens', text: '0,05' },
    { name: 'B2_time vygruski', text: '34' },
    { name: 'B2_time vygruski raschyotnoe', text: '30' },
    { name: 'B2_time sbrosa P', text: '10' },
    { name: 'B2_time nabora P', text: '9' },
    { name: 'B2_ves s HP', text: '5.0' },
    { name: 'B2_vibratciya', text: '51' },
    { name: 'counder podachi_za tekuschuyu smenu', text: '77' },
    { name: 'counder podachi_za past smenu', text: '76' },
    { name: 'zaprosi_shp_stroka', text: '13' },
    { name: 'given_level', text: '0,90' },
    { name: 'tekushy_level', text: '1,27' },
    { name: 'radar 1', text: '1,21' },
    { name: 'radar 2', text: '1,92' },
    { name: 'mexan', text: '-1,67' },
    { name: 'dlina_porcii', text: '113' },
    { name: 'B1_nomerstr', text: '11' },
    { name: 'B2_nomerstr', text: '51' },
    { name: 'T3_nomerstr', text: '11' },
    { name: 'T2_nomerstr', text: '11' },
    { name: 'T1_nomerstr', text: '12' },
    { name: 'B1_Tip', color: '#860004' },
    { name: 'B2_Tip', color: '#008600' },
    { name: 'T3_Tip', color: '#860004' },
    { name: 'T2_Tip', color: '#860004' },
    { name: 'T1_Tip', color: '#008600' },
    { name: 'B1_Tip_text', text: 'Р' },
    { name: 'B2_Tip_text', text: 'К' },
    { name: 'T3_Tip_text', text: 'Р' },
    { name: 'T2_Tip_text', text: 'Р' },
    { name: 'T1_Tip_text', text: 'К' },
    { name: 'B1_ves', text: '91,8' },
    { name: 'B2_ves', text: '9,9' },
    { name: 'T3_ves', text: '91,8' },
    { name: 'T2_ves', text: '91,8' },
    { name: 'T1_ves', text: '-1,0' },
    { name: 'zelyniy primoygolinik_Radar2', color: '#008600' },
    { name: 'str51_down', text: 'К' },
    { name: 'Str1_1', color: '#00FF00' },
    { name: 'Str1_4', color: '#C7B295' },
    { name: 'pech_left_down_zaglushka', color: '#D90001' },
    { name: 'leviy', color: '#00FF00' },
    { name: 'left_ellipse', color: '#644121' },
    { name: 'left_ellipse_text', text: 'Р' },
    { name: 'left_matrix_text', text: '11' },
    { name: 'right_matrix_text', text: '51' },
    //DP
    { name: 'kol_furm', text: '22' },
    { name: 'radar1_text', text: '1,21' },
    { name: 'radar2_text', text: '1,92' },
    { name: 'radar3_text', text: '-1,67' },
    { name: 'T_hol_dyt', text: '79' },
    { name: 'VNK1_status_2', text: 'Нагрев' },
    { name: 'VNK3_status_1_fon', color: '#0033FF' },
    { name: 'VNK2_status_1_fon', color: '#0033FF' },
    { name: 'VNK1_status_1_fon', color: '#0033FF' },
    { name: 'Fvozdyh_3', text: '0' },
    { name: 'Fgaz_3', text: '0' },
    { name: 'Fvozdyh_2', text: '115641' },
    { name: 'Fgaz_2', text: '81273' },
    { name: 'Fvozdyh_1', text: '126220' },
    { name: 'Fgaz_1', text: '96089' },
    { name: 'F_obsh_pyt', text: '44' },
    { name: 'F_tek_pyt', text: '44,6' },
    { name: 'P_vbls', text: '2,29' },
    { name: 'dP_verh', text: '0,22' },
    { name: 'dP_obsh_tryba', text: '1,77' },
    { name: 'dP_nish_tryba', text: '1,51' },
    { name: 'TTG_zadanie', text: '2100' },
    { name: 'TTG_raschet', text: '2122' },
    { name: 'F_pg_prir_gaz', text: '28869' },
    { name: 'dF_pg_prir_gaz', text: '-191' },
    { name: 'EKZ_H1', text: '17' },
    { name: 'EKZ_H2', text: '17' },
    { name: 'EKZ_H3', text: '17' },
    { name: 'AKZ_100', opacity: 0 },
    { name: 'AKZ_45-100', opacity: 0 },
    { name: 'AKZ_45', opacity: 0 },
    { name: 'AKZ_30', opacity: 0 },
    { name: 'AKZ_17', opacity: 1 },
    { name: 'H_snotr', text: '-0' },
    { name: 'H_progres_7', opacity: '0' },
    { name: 'H_progres_19', opacity: '0' },
    { name: 'H_progres_22', opacity: '0' },
    { name: 'H_progres_33', opacity: '0' },
    { name: 'H_progres_49', opacity: '0' },
    { name: 'H_progres_56', opacity: '0' },
    { name: 'H_progres_60', opacity: '0' },
    { name: 'H_progres_67', opacity: '0' },
    { name: 'H_progres_89', opacity: '0' },
    { name: 'H_progres_100', opacity: '0' },
    { name: 'dp_kl_red', color: '#ff1e00' },
    // { name: 'kol_furm', text: '30' },
    { name: 'fyrm_v_rab', text: '29' },
    { name: 'F_tryba', text: '657115' },
    { name: 'P_tryba_1_503', text: '2,30' },
    { name: 'Dp_obsh', text: '1,60' },
    { name: 't_gor_dut', text: '1210' },
    { name: 'F_prir_gaz_table', text: '28829' },
    { name: 'T1', text: '172' },
    { name: 'T2', text: '153' },
    { name: 'T3', text: '170' },
    { name: 'T4', text: '153' },
    { name: 'P_2', text: '4,10' },
    { name: 'P_pg_prir_gaz', text: '8,51' },
    { name: 'F_pg_sym_prir_gaz', text: '28677' },
    { name: 't_prirodn_gaz', text: '8' },
    { name: 'Temp_peref_16', text: '75' },
    { name: 'Temp_peref_15', text: '56' },
    { name: 'Temp_peref_13', text: '112' },
    { name: 'vipusk_L3', stroke: '#191919' },
    { name: 'L1', opacity: 0 },
    { name: 'L2', text: '1474' },
    { name: 'L3', opacity: 0 },
    { name: 'L4', opacity: 0 },
    { name: 'L2_elem', color: '#CCD056' },
    { name: 'N2', text: '42,3' },
    { name: 'H2_tryb', text: '9,0' },
    { name: 'W_sinij_hol_dyt', text: '7,2' },
    { name: 'O_hol_dyt', text: '29,9' },
    // vnk_spvg
    { name: '6TI_39_1', text: '41' },
    { name: '6TI_38_1', text: '37' },
    { name: '6TI_37_1', text: '12' },
    { name: '6TI_39_2', text: '22' },
    { name: '6TI_38_2', text: '42' },
    { name: '6TI_37_2', text: '13' },
    { name: '6TI_39_3', text: '58' },
    { name: '6TI_38_3', text: '64' },
    { name: '6TI_37_3', text: '15' },
    { name: '6TI_39_4', text: '57' },
    { name: '6TI_38_4', text: '65' },
    { name: '6TI_37_4', text: '15' },
    { name: '6TI_39_5', text: '58' },
    { name: '6TI_38_5', text: '68' },
    { name: '6TI_37_5', text: '15' },
    { name: '6TI_39_6', text: '56' },
    { name: '6TI_38_6', text: '65' },
    { name: '6TI_37_6', text: '15' },
    { name: '6TI_39_7', text: '62' },
    { name: '6TI_38_7', text: '68' },
    { name: '6TI_37_7', text: '14' },
    { name: '6TI_39_8', text: '54' },
    { name: '6TI_38_8', text: '66' },
    { name: '6TI_37_8', text: '15' },
    { name: '6TI_39_9', text: '31' },
    { name: '6TI_38_9', text: '32' },
    { name: '6TI_37_9', text: '13' },
    { name: '6TI_39_10', text: '36' },
    { name: '6TI_38_10', text: '40' },
    { name: '6TI_37_10', text: '14' },
    { name: '6VI_3_1', text: '0,82' },
    { name: '6VI_2_1', text: '0,95' },
    { name: '6VI_1_1', text: '0,24' },
    { name: '6VI_3_2', text: '1,94' },
    { name: '6VI_2_2', text: '1,29' },
    { name: '6VI_1_2', text: '0,75' },
    { name: '6VI_3_3', text: '1,44' },
    { name: '6VI_2_3', text: '1,24' },
    { name: '6VI_1_3', text: '0,17' },
    { name: '6VI_3_4', text: '1,78' },
    { name: '6VI_2_4', text: '1,82' },
    { name: '6VI_1_4', text: '0,12' },
    { name: '6TI_31_3', text: '12' },
    { name: '6TI_31_2', text: '10' },
    { name: '6TI_31_1', text: '10' },
    { name: '8QI_05_1', text: '7,50' },
    { name: '8QI_05_2', text: '29,53' },
    { name: '8QI_05_4', text: '0,00' },
    { name: '9TI_41', text: '29' },
    { name: '9TI_42', text: '86' },
    { name: '7TI_42', text: '102' },
    { name: '9TI_34', text: '126' },
    { name: '9TI_32', text: '260' },
    { name: '9TI_35', text: '26' },
    { name: '9TI_33', text: '71' },
    { name: '9TI_30', text: '22' },
    { name: '9TI_44', text: '27' },
    { name: 'PI_16', text: '10,25' },
    // { name: 'kl_028', color: '#00FF00' },
  ]
]
// Лучше всего искать по id а не имени.
let startState3D = [
  [// Первый сценарий
    // ЩИТ БВНК 1
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
    // Первый щит
    // { name: 'kl022', rotation: { y: 5.5850536063818545, } },
    { name: '25408591-8ddd-4b64-a7ad-499aaa995ae6', rotation: { y: 5.5850536063818545, } },
    { id: 'ba8bad48-50eb-4074-bead-95ba0273eb82', rotation: { y: (145 * Math.PI) / 180 } }, // #025 Местн.-0-Дист.
    { id: 'bb05c72d-78ed-4e3f-8e40-aa055bf38e35', rotation: { y: (145 * Math.PI) / 180 } }, // #020 Местн.-0-Дист.
    { id: '7822fd13-7df1-4d3e-aef4-eb11da234c6f', rotation: { y: (145 * Math.PI) / 180 } }, // #030 Местн.-0-Дист.
    { id: '88305f3d-4c33-4bdf-9908-4720d85328c5', rotation: { y: (145 * Math.PI) / 180 } }, // #039 Местн.-0-Дист.
    { id: 'd840530d-2406-4f3a-92ce-f8192d35de17', rotation: { y: (145 * Math.PI) / 180 } }, // #049 Местн.-0-Дист.
    { id: 'b91ddd1f-3e2d-4f3a-bebb-edf4fcf58838', rotation: { y: (145 * Math.PI) / 180 } }, // #336a Местн.-0-Дист.
    { id: '72728118-c240-495a-bd37-607f6eeec390', rotation: { y: (145 * Math.PI) / 180 } }, // #236a Местн.-0-Дист.
    { id: '9085a856-b82c-45cf-a865-bff87e112ddb', rotation: { y: (145 * Math.PI) / 180 } }, // #136a Местн.-0-Дист.
    { id: '0d0230f9-12fc-4b6b-b237-efb065b3b3c1', rotation: { y: (145 * Math.PI) / 180 } }, // #036b Местн.-0-Дист.
    { id: 'ea0081c0-c200-44ca-b7b7-1f38dc60681e', rotation: { y: (145 * Math.PI) / 180 } }, // #036v Местн.-0-Дист.
    { id: 'a971f049-55f8-48cc-aafa-d56ce1a158b9', rotation: { y: (145 * Math.PI) / 180 } }, // #047v Местн.-0-Дист.
    // d46ce2bf-329c-4b0b-932f-04e9aa6686bb зелёная точка квадрат
    // d731d161-f41e-465a-9fb0-b1ac09cb8062 жёлтая точка квадрат
    // 9ae5a167-2f72-43c2-8b6b-96a029f7ea76 красная точка квадрат
    // a17521df-7b0a-4251-816e-b2aa231b4358 красная точка круглая
    { id: '8b1850b5-9c32-4d19-a4dc-70eab7778b97', position: { x: 0.024 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 1_1 yellow
    { id: '7cd2a16b-0f5e-4691-9f5b-bd8e7dc3c3c7', position: { x: 0.052 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 1_1 green
    { id: 'c75cf9a0-f0a8-4da1-98c1-1c3bf408486a', position: { x: 0.031 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 1_2 green
    { id: 'f8b83dd9-b727-49d2-94af-55adc4485119', position: { x: 0.044 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 1_2 yellow
    { id: 'b98fded5-298c-4e32-8ddf-4e60c9579d12', position: { x: 0.024 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 2_1 yellow
    { id: 'ad8e5eff-0434-43dc-bb71-cfe86f9b6a1d', position: { x: 0.052 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 2_1 green
    { id: '657b8416-3136-4c7a-bd63-959a88a6443e', position: { x: 0.044 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 2_2 yellow
    { id: 'c86be730-99e7-4451-a46a-ba4392e814c4', position: { x: 0.016 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 2_2 green
    { id: 'b7d7ebb3-02fa-46fa-9d39-74c98e03ac8c', position: { x: 0.024 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 3_1 yellow
    { id: '1227d1f2-7c92-45b9-9c4c-af914c8a6358', position: { x: 0.049 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 3_1 green
    { id: '90855da7-95c5-4df4-a738-cea6ecf001f9', position: { x: 0.041 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 3_2 yellow
    { id: 'f8457e88-9191-413e-8010-69a7a32aa75b', position: { x: 0.018 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 3_2 green
    { id: '3d972852-386c-4d15-ae63-a2d476340bef', position: { x: 0.006 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход смешанного газа 1 yellow
    { id: 'b5c1cace-f4fe-4aad-9657-791859b07c87', position: { x: 0.030 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Расход смешанного газа 1 green
    { id: 'ebe5d7e4-fe4e-48bf-953a-735f0452253b', position: { x: 0.005 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход смешанного газа 2 yellow
    { id: '76fd240b-e19c-4aca-9111-c4064b34c315', position: { x: 0.025 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Расход смешанного газа 2 green
    { id: 'bf9808ed-4845-4c63-acf1-a25e6d883c81', position: { x: 0.003 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход смешанного газа 3 yellow
    { id: 'b553b434-42b3-4afd-9688-4e6a164b86e8', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // Расход смешанного газа 3 red
    { id: 'ab51df96-6c30-4c3e-b3b5-5236c321bbb6', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // Расход смешанного газа 3 y1 red
    { id: 'f5b76bd7-cdea-4868-a2d8-4315bb33f231', position: { x: 0.004 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход воздуха горения 1 yellow
    { id: 'c804594c-63a4-4c6f-8c8a-394e75ab619f', position: { x: 0.025 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Расход воздуха горения 1 green
    { id: '09b1601c-13e6-4fd8-a8c3-df0ad0e8ecdc', position: { x: 0.006 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход воздуха горения 2 yellow
    { id: '3aa58ddd-e519-4189-b546-fec9ecc7f144', position: { x: 0.027 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Расход воздуха горения 2 green
    { id: 'c4fa1c34-5899-4a86-8071-438dde6a707d', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // Расход воздуха горения 3 red
    { id: '3c7b02d7-261c-44f4-a06a-d9480e51a444', position: { x: 0.002 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход воздуха горения 3 yellow
    { id: 'a9e95fd1-454f-4c87-941c-30d34b9f6374', position: { x: 0.043 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Давление воздуха горения yellow
    { id: 'd40c262b-83f0-4dc7-8374-6afee60222d9', position: { x: 0.036 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Давление воздуха горения green
    { name: 'vozNagr1_1', number: '1329' },
    { name: 'vozNagr1_2', number: '299.0' },
    { name: 'vozNagr2_1', number: '1328' },
    { name: 'vozNagr2_2', number: '139.0' },
    { name: 'vozNagr3_1', number: '1296' },
    { name: 'vozNagr3_2', number: '181.0' },
    { name: 'rashodSmeshGaza_1', number: '060.4' },
    { name: 'rashodSmeshGaza_2', number: '053.2' },
    { name: 'rashodSmeshGaza_3', number: '000.0' },
    { name: 'rashodVozdyhGor_1', number: '050.6' },
    { name: 'rashodVozdyhGor_2', number: '057.7' },
    { name: 'rashodVozdyhGor_3', number: '000.1' },
    { name: 'davVozGorBVN', number: '10.45' },
    { name: 'rashodSmeshGaza_1_r', number: '039.2', color: 'red' },
    { name: 'rashodSmeshGaza_2_r', number: '034.2', color: 'red' },
    { name: 'rashodSmeshGaza_3_r', number: '022.5', color: 'red' },
    { name: 'rashodVozdyhGor_1_r', number: '035.2', color: 'red' },
    { name: 'rashodVozdyhGor_2_r', number: '036.5', color: 'red' },
    { name: 'rashodVozdyhGor_3_r', number: '021.4', color: 'red' },
    { name: 'klapPrirGazaBRU_1_r', number: '003.0', color: 'red' },
    { name: 'klapPrirGazaBRU_2_r', number: '000.9', color: 'red' },
    { name: 'klapPrirGazaBRU_3_r', number: '035.6', color: 'red' },
    { name: 'smesKlapBRU_1_r', number: '000.8', color: 'red' },
    { name: 'smesKlapBRU_2_r', number: '031.5', color: 'red' },
    { name: 'obshKlapVozGorBRU_r', number: '001.8', color: 'red' },
    //---------------------------------------------
    // Sergey 
    // Третий щит
    { id: 'eaa4b36d-fa7d-4ea6-b928-fd91ee72d79d', rotation: { y: (90 * Math.PI) / 180 } }, // Местн. цпу
    { name: 'Handle_06', rotation: { y: (326 * Math.PI) / 180 } }, // Выбор режима управления КГ
    // { id: '46dd9fce-1386-4ad0-94c9-de4cda5d1503', rotation: { y: (90 * Math.PI) / 180 } }, // Местн Дистн Авт_1
    // { id: '31f7b14d-862e-4e43-993a-60b6539a2771', rotation: { y: (90 * Math.PI) / 180 } }, // Местн Дистн Авт_2
    // { name: 'Handle_08', rotation: { y: (90 * Math.PI) / 180 } }, // Клапан 721 выбо режима управления
    // { id: '07ed087c-0c84-47ef-a9c9-e7b170b65c60', rotation: { y: (90 * Math.PI) / 180 } }, // Местн Дистн Авт_2
    { id: 'f6d934e8-12af-4fc1-b553-7b3eccaef38a', rotation: { y: (320 * Math.PI) / 180 } }, // Предупредительная сигнализация
    { id: 'aad627dd-1ef6-4417-b4f9-3c8821f7bab4', rotation: { y: (90 * Math.PI) / 180 } }, // Дроссельный клапан THROTTLE
    { id: 'fc3caa09-a4c4-42e0-a0b7-aec41de8d029', rotation: { y: (45 * Math.PI) / 180 } }, // М81
    { id: 'f8990119-f62d-47da-944e-4a95b95c702f', rotation: { y: (90 * Math.PI) / 180 } }, // М83
    { name: 'Handle_09', rotation: { y: (90 * Math.PI) / 180 } }, // М84
    { name: 'Handle_05', rotation: { y: (90 * Math.PI) / 180 } }, // Пар на увлажнение дутья
    { id: 'e1b732e7-f99e-47b3-9c8c-6ffc1913109c', rotation: { y: (320 * Math.PI) / 180 } }, // М38
    // d46ce2bf-329c-4b0b-932f-04e9aa6686bb зелёная точка квадрат
    // d731d161-f41e-465a-9fb0-b1ac09cb8062 жёлтая точка квадрат
    // 9ae5a167-2f72-43c2-8b6b-96a029f7ea76 красная точка квадрат
    // a17521df-7b0a-4251-816e-b2aa231b4358 красная точка круглая
    { id: '7a2c174a-c280-4b79-913a-585656d091f1', position: { x: 0.018 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Р колошникового газа yellow
    { id: 'd35a945e-6098-413c-85fc-ec03675b2b5c', position: { x: 0.030 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 Р колошникового газа green
    { id: '.d35a945e-6098-413c-85fc-ec03675b2b5c', position: { x: 0.068 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Р колошникового газа yellow
    { id: '7a2fdce1-d243-453d-a1f4-ea4ab59b5bf6', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // dp верхний y1
    { id: 'dc76f3f3-8650-4795-824b-b401ea25189d', position: { x: 0.010 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 dp верхний red
    { id: '54aef8ff-43e1-46a9-811e-d82e2b22471d', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp верхний yellow
    { id: '.54aef8ff-43e1-46a9-811e-d82e2b22471d', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp верхний yellow
    { id: '584426b6-391e-491a-b6cc-641cbd20b002', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp общий yellow
    { id: '7561228f-cbe4-4094-b7cf-4dc9c7670544', position: { x: 0.048 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 dp общий green
    { id: '.7561228f-cbe4-4094-b7cf-4dc9c7670544', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp общий yellow
    { id: '92878d8c-d3c3-4d92-8a3a-2aa45b1b8de3', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp нижний yellow
    { id: '8fcdf048-da99-4a7b-b10a-4e1a9f79abab', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp нижний yellow
    { id: '.8fcdf048-da99-4a7b-b10a-4e1a9f79abab', position: { x: 0.06 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 dp нижний red
    { id: 'a45b1224-c9a9-4e53-b8be-f2524cf79e63', position: { x: 0.016 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F холодного дутья yellow
    { id: '0ade6fb4-862a-48a1-b10d-cfbdd38e773b', position: { x: 0.052 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 F холодного дутья green
    { id: '.0ade6fb4-862a-48a1-b10d-cfbdd38e773b', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F холодного дутья yellow
    { id: '55085feb-00cb-46e5-94d4-3074d509094a', position: { x: 0.016 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F горячего дутья yellow
    { id: 'bf4940b2-342f-4124-aa54-c64b51e9eef5', position: { x: 0.048 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 F горячего дутья green
    { id: '.bf4940b2-342f-4124-aa54-c64b51e9eef5', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F горячего дутья yellow
    { id: 'af6703c1-4b5a-416a-8389-3072297bd777', position: { x: 0.008 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи датчик 1 yellow
    { id: '5a23380c-a320-4d63-8b0d-2da82755a220', position: { x: 0.008 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Уровень засыпи датчик 1 red
    { id: '.5a23380c-a320-4d63-8b0d-2da82755a220', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи датчик 1 yellow
    { id: '99491d93-949c-4aa5-ab11-f70fdde6aaf7', position: { x: 0.008 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи датчик 2 yellow
    { id: 'd0acec57-fa5c-4995-b3ab-16ecf8829ee7', position: { x: 0.008 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 Уровень засыпи датчик 2 green
    { id: '.d0acec57-fa5c-4995-b3ab-16ecf8829ee7', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи датчик 2 yellow
    { id: 'f9534176-d207-4906-8191-ce0c47200b3c', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Уровень засыпи механический y1
    { id: 'd5cd0ea5-90d3-4db2-9d26-36fb10709d1a', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Уровень засыпи механический y2
    { id: 'd86979f8-150c-4b01-bb02-5f2af5abe0e7', position: { x: 0.000 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи механический yellow
    { id: '7ccf0961-7311-4c27-bbaa-12b2dec45ec9', position: { x: 0.013 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи механический yellow
    { id: '.7ccf0961-7311-4c27-bbaa-12b2dec45ec9', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи механический yellow
    { id: '69e54be8-f44e-442c-a5d4-dfba00e7ba23', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Т в газоотводе Т.1 y1
    { id: 'ce57afd4-204f-4c3b-bc9f-0ecb4d37eea0', position: { x: 0.012 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Т в газоотводе Т.1 red
    { id: '9071a277-fcb6-405b-8af1-f65ccc2bb6e7', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.1 yellow
    { id: '.9071a277-fcb6-405b-8af1-f65ccc2bb6e7', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.1 yellow
    { id: '040546fe-5b88-4ae4-b017-8d853dea3053', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Т в газоотводе Т.2 y1
    { id: '4bba5e52-68b2-497c-8085-b887a8cbf29a', position: { x: 0.010 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Т в газоотводе Т.2 red
    { id: '2a199899-7a38-4f54-987d-8c88e3aaef67', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.2 yellow
    { id: '.2a199899-7a38-4f54-987d-8c88e3aaef67', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.2 yellow
    { id: 'bfd31283-da5b-49e3-98c5-5a2e4a5018e9', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Т в газоотводе Т.3 y1
    { id: '52b2bfef-fc48-42df-b2c0-201157e7baa0', position: { x: 0.012 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Т в газоотводе Т.3 red
    { id: 'cf1b0be1-d720-4be2-b1af-d459c16e3a62', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.3 yellow
    { id: '.cf1b0be1-d720-4be2-b1af-d459c16e3a62', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.3 yellow  
    { id: 'ef846d8f-8121-40c8-91aa-aee2ae947ea6', position: { x: 0.012 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Т в газоотводе Т.4 red
    { id: 'd7f093e4-3fad-4764-bcad-cfc4e8848bcc', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.4 yellow
    { id: '.d7f093e4-3fad-4764-bcad-cfc4e8848bcc', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.4 yellow
    { id: '829fcf64-55eb-4d4b-bf08-77855a11353f', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F азота общего yellow
    { id: 'e5b790a4-1bdf-43c1-9e62-f4fc12304623', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F азота общего yellow
    { id: '.e5b790a4-1bdf-43c1-9e62-f4fc12304623', position: { x: 0.055 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 F азота общего red      
    { id: '1930091e-7664-403d-adfc-804d8d5c3bee', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Содержание кислорода в азоте y1
    { id: '91f8c2d9-058f-49a1-be33-632f860484f0', position: { x: 0.002 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Содержание кислорода в азоте red
    { id: '7944e7da-dce6-4a38-b735-6cedc4e531c1', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Содержание кислорода в азоте yellow
    { id: '.7944e7da-dce6-4a38-b735-6cedc4e531c1', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Содержание кислорода в азоте yellow        
    { id: '27576245-1e99-4565-af10-2f8dd7ee7a43', position: { x: 0.051 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 Т горячего дутья green
    { id: '2a471a82-ab01-42bf-91e5-6ceee0477d76', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т горячего дутья yellow
    { id: '.2a471a82-ab01-42bf-91e5-6ceee0477d76', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т горячего дутья yellow
    { id: '8ce6a093-f609-4b99-9517-cad1b4c1cbe9', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P технической воды Т.1 yellow
    { id: '039d8c28-77d1-4fe9-9d3d-e3bb57bad86f', position: { x: 0.057 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P технической воды Т.1 yellow
    { id: '.039d8c28-77d1-4fe9-9d3d-e3bb57bad86f', position: { x: 0.062 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 P технической воды Т.1 red 
    { id: '7106bb71-595c-4ac7-96f4-b5233c00341b', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P технической воды Т.2 yellow
    { id: 'b9339fcf-a848-430c-a6c8-3aa0f115b494', position: { x: 0.057 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P технической воды Т.2 yellow
    { id: '.b9339fcf-a848-430c-a6c8-3aa0f115b494', position: { x: 0.062 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 P технической воды Т.2 red  
    { id: 'e762b64f-213a-4035-aa22-1ed4a88d4199', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P сжатого воздуха yellow
    { id: '98ce2502-03bb-4d18-b164-75a45ee543da', position: { x: 0.029 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 P сжатого воздуха green
    { id: '.98ce2502-03bb-4d18-b164-75a45ee543da', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P сжатого воздуха yellow
    { id: 'f7fd7e6f-9d0e-46ce-94d1-f5eed14b825a', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P осушенного сжатого воздуха yellow
    { id: '34c66f86-b540-4f7d-bd78-9c4be2dca03a', position: { x: 0.029 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 P осушенного сжатого воздуха green
    { id: '.34c66f86-b540-4f7d-bd78-9c4be2dca03a', position: { x: 0.050 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P осушенного сжатого воздуха yellow
    { id: 'b5e7d9c8-2f96-420e-aa51-728375f7d496', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P азота к затворам yellow
    { id: 'f2cfaacd-ad85-400b-bbe6-12b47f3c56d5', position: { x: 0.038 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 P азота к затворам green
    { id: '.f2cfaacd-ad85-400b-bbe6-12b47f3c56d5', position: { x: 0.054 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P азота к затворам yellow       
    { id: '627a5c0a-f2c6-4cc1-98d9-915633629886', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 T редуктора yellow
    { id: 'd0164997-c397-410f-a6c9-7380c9d73944', position: { x: 0.029 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 T редуктора green
    { id: '.d0164997-c397-410f-a6c9-7380c9d73944', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 T редуктора yellow
    { id: '.f2cfaacd-ad85-400b-bbe6-12b47f3c56d5', position: { x: 0.054 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P азота к затворам yellow     
    { id: 'a040d9c7-c376-4179-aa17-71a39507616c', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F воды на редуктор yellow
    { id: '5e0f2c52-4c56-4fb6-b194-e8923c4a9d05', position: { x: 0.033 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 F воды на редуктор green
    { id: '.5e0f2c52-4c56-4fb6-b194-e8923c4a9d05', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F воды на редуктор yellow
    { id: '.f2cfaacd-ad85-400b-bbe6-12b47f3c56d5', position: { x: 0.054 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P азота к затворам yellow     
    { id: '629952a1-8aab-4889-8d46-e4af4789ccbb', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F природного газа yellow
    { id: 'de15bb4a-f57f-498b-a392-1052df17fc1d', position: { x: 0.063 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 F природного газа red
    { id: '.de15bb4a-f57f-498b-a392-1052df17fc1d', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F природного газа yellow
    { name: 'pKolGaz', number: '02.30', }, // P_tryba_1_503
    { name: 'dpVerh', number: '00.22', }, // dP_verh
    { name: 'dpObsh', number: '01.77', }, // dP_obsh_tryba
    { name: 'dpNiz', number: '01.51', }, // dP_nish_tryba
    { name: 'fHolodDut', number: '5759.', },
    { name: 'pGorDut', number: '04.10', }, // P_2
    { name: 'urZasDat1', number: '01.11', },
    { name: 'urZasDat2', number: '01.20', },
    { name: 'urZasMeh', number: '0000', },
    { name: 'tVGazT1', number: '0154.', },
    { name: 'tVGazT2', number: '0167.', },
    { name: 'tVGazT3', number: '0163.', },
    { name: 'tVGazT4', number: '0150.', },
    { name: 'fAzotObsh', number: '08.11', },
    { name: 'sodKislVAzot', number: '00.40', },
    { name: 'tGorDut', number: '1210.', }, // t_gor_dut
    { name: 'pTechVodT1', number: '10.14', },
    { name: 'pTechVodT2', number: '10.14', },
    { name: 'pSjatVozd', number: '04.69', },
    { name: 'pOsyshSjatVozd', number: '08.14', }, // P_Os_szat_voz
    { name: 'pAzotkZatv', number: '2.281', },
    { name: 'tReduct', number: '052.3', },
    { name: 'fVodNaReduct', number: '25.17', },
    { name: 'fPrirodGaz', number: '4.453', },
    { name: 'fPrirodGazReg', number: '028.5', color: 'red' },
    { name: 'fParaUvlajDutReg', number: '00.27', color: 'red' }, // par_yvlaz
    // Второй щит
    { id: '6ddce191-0d83-43c2-af7e-ebdaddf5ab37', rotation: { y: (45 * Math.PI) / 180 } }, // Выбор бункера
    { id: '53ce370c-847a-41d5-ad4b-8acfa136f7fd', rotation: { y: (90 * Math.PI) / 180 } }, // Выбор режима
    { id: '9c84c3c4-e56b-4c5d-ab4d-dd1e3dd93833', rotation: { y: (45 * Math.PI) / 180 } }, // Выбор уровнемера
    { name: 'bzuDavlenie_l', number: '00.00', color: 'red' },
    { name: 'bzuVesNetto_l', number: '020.7', color: 'red' },
    { name: 'bzuDavlenie_r', number: '02.26', color: 'red' },
    { name: 'bzuVesNetto_r', number: '004.2', color: 'red' },
    { name: 'bzuPolShihZat_l', number: '001.3', color: 'red' },
    { name: 'bzuVremVigruz_l', number: '0106', color: 'red' },
    { name: 'bzuFactUgol_l', number: '299.2', color: 'red' },
    { name: 'bzuPolShihZat_r', number: '038.0', color: 'red' },
    { name: 'bzuVremVigruz_r', number: '0078', color: 'red' },
    { name: 'bzuFactUgol_r', number: '022.6', color: 'red' },
    { name: 'bzuUrovZasip', number: '01.15', color: 'red' },
  ],
  [// Второй сценарий
    // Первый щит
    { id: 'ba8bad48-50eb-4074-bead-95ba0273eb82', rotation: { y: (145 * Math.PI) / 180 } }, // #025 Местн.-0-Дист.
    { id: 'bb05c72d-78ed-4e3f-8e40-aa055bf38e35', rotation: { y: (145 * Math.PI) / 180 } }, // #020 Местн.-0-Дист.
    { id: '7822fd13-7df1-4d3e-aef4-eb11da234c6f', rotation: { y: (145 * Math.PI) / 180 } }, // #030 Местн.-0-Дист.
    { id: '88305f3d-4c33-4bdf-9908-4720d85328c5', rotation: { y: (145 * Math.PI) / 180 } }, // #039 Местн.-0-Дист.
    { id: 'd840530d-2406-4f3a-92ce-f8192d35de17', rotation: { y: (145 * Math.PI) / 180 } }, // #049 Местн.-0-Дист.
    { id: 'b91ddd1f-3e2d-4f3a-bebb-edf4fcf58838', rotation: { y: (145 * Math.PI) / 180 } }, // #336a Местн.-0-Дист.
    { id: '72728118-c240-495a-bd37-607f6eeec390', rotation: { y: (145 * Math.PI) / 180 } }, // #236a Местн.-0-Дист.
    { id: '9085a856-b82c-45cf-a865-bff87e112ddb', rotation: { y: (145 * Math.PI) / 180 } }, // #136a Местн.-0-Дист.
    { id: '0d0230f9-12fc-4b6b-b237-efb065b3b3c1', rotation: { y: (145 * Math.PI) / 180 } }, // #036b Местн.-0-Дист.
    { id: 'ea0081c0-c200-44ca-b7b7-1f38dc60681e', rotation: { y: (145 * Math.PI) / 180 } }, // #036v Местн.-0-Дист.
    { id: 'a971f049-55f8-48cc-aafa-d56ce1a158b9', rotation: { y: (145 * Math.PI) / 180 } }, // #047v Местн.-0-Дист.
    // d46ce2bf-329c-4b0b-932f-04e9aa6686bb зелёная точка квадрат
    // d731d161-f41e-465a-9fb0-b1ac09cb8062 жёлтая точка квадрат
    // 9ae5a167-2f72-43c2-8b6b-96a029f7ea76 красная точка квадрат
    // a17521df-7b0a-4251-816e-b2aa231b4358 красная точка круглая
    { id: '8b1850b5-9c32-4d19-a4dc-70eab7778b97', position: { x: 0.024 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 1_1 yellow
    { id: '7cd2a16b-0f5e-4691-9f5b-bd8e7dc3c3c7', position: { x: 0.036 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 1_1 green
    { id: 'c75cf9a0-f0a8-4da1-98c1-1c3bf408486a', position: { x: 0.023 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 1_2 green
    { id: 'f8b83dd9-b727-49d2-94af-55adc4485119', position: { x: 0.044 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 1_2 yellow
    { id: 'b98fded5-298c-4e32-8ddf-4e60c9579d12', position: { x: 0.024 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 2_1 yellow
    { id: 'ad8e5eff-0434-43dc-bb71-cfe86f9b6a1d', position: { x: 0.036 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 2_1 green
    { id: '657b8416-3136-4c7a-bd63-959a88a6443e', position: { x: 0.044 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 2_2 yellow
    { id: 'c86be730-99e7-4451-a46a-ba4392e814c4', position: { x: 0.016 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 2_2 green
    { id: 'b7d7ebb3-02fa-46fa-9d39-74c98e03ac8c', position: { x: 0.024 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 3_1 yellow
    { id: '1227d1f2-7c92-45b9-9c4c-af914c8a6358', position: { x: 0.036 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 3_1 green
    { id: '90855da7-95c5-4df4-a738-cea6ecf001f9', position: { x: 0.041 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Воздухо-нагреватель 3_2 yellow
    { id: 'f8457e88-9191-413e-8010-69a7a32aa75b', position: { x: 0.018 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Воздухо-нагреватель 3_2 green
    { id: '3d972852-386c-4d15-ae63-a2d476340bef', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // Расход смешанного газа 1 red
    { id: 'b5c1cace-f4fe-4aad-9657-791859b07c87', position: { x: 0.001 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход смешанного газа 1 yellow
    { id: 'ebe5d7e4-fe4e-48bf-953a-735f0452253b', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // Расход смешанного газа 2 red
    { id: '76fd240b-e19c-4aca-9111-c4064b34c315', position: { x: 0.001 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход смешанного газа 2 yellow
    { id: '40a6cecd-a909-4410-b814-b78b9db9bba8', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // Расход смешанного газа 2 y1 red
    { id: 'bf9808ed-4845-4c63-acf1-a25e6d883c81', position: { x: 0.001 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход смешанного газа 3 yellow
    { id: 'b553b434-42b3-4afd-9688-4e6a164b86e8', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // Расход смешанного газа 3 red
    { id: 'ab51df96-6c30-4c3e-b3b5-5236c321bbb6', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // Расход смешанного газа 3 y1 red
    { id: 'f5b76bd7-cdea-4868-a2d8-4315bb33f231', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // Расход воздуха горения 1 red
    { id: 'c804594c-63a4-4c6f-8c8a-394e75ab619f', position: { x: 0.001 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход воздуха горения 1 yellow
    { id: '09b1601c-13e6-4fd8-a8c3-df0ad0e8ecdc', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // Расход воздуха горения 2 red
    { id: '3aa58ddd-e519-4189-b546-fec9ecc7f144', position: { x: 0.001 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход воздуха горения 2 yellow
    { id: 'c4fa1c34-5899-4a86-8071-438dde6a707d', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // Расход воздуха горения 3 red
    { id: '3c7b02d7-261c-44f4-a06a-d9480e51a444', position: { x: 0.001 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Расход воздуха горения 3 yellow
    { id: 'a9e95fd1-454f-4c87-941c-30d34b9f6374', position: { x: 0.043 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // Давление воздуха горения yellow
    { id: 'd40c262b-83f0-4dc7-8374-6afee60222d9', position: { x: 0.000 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // Давление воздуха горения green
    { name: 'vozNagr1_1', number: '1106' },
    { name: 'vozNagr1_2', number: '245.3' },
    { name: 'vozNagr2_1', number: '1117' },
    { name: 'vozNagr2_2', number: '172.0' },
    { name: 'vozNagr3_1', number: '1124' },
    { name: 'vozNagr3_2', number: '132.6' },
    { name: 'rashodSmeshGaza_1', number: '000.0' },
    { name: 'rashodSmeshGaza_2', number: '000.1' },
    { name: 'rashodSmeshGaza_3', number: '000.0' },
    { name: 'rashodVozdyhGor_1', number: '000.1' },
    { name: 'rashodVozdyhGor_2', number: '000.1' },
    { name: 'rashodVozdyhGor_3', number: '000.2' },
    { name: 'davVozGorBVN', number: '00.77' },
    { name: 'rashodSmeshGaza_1_r', number: '023.4', color: 'red' },
    { name: 'rashodSmeshGaza_2_r', number: '021.1', color: 'red' },
    { name: 'rashodSmeshGaza_3_r', number: '022.5', color: 'red' },
    { name: 'rashodVozdyhGor_1_r', number: '023.4', color: 'red' },
    { name: 'rashodVozdyhGor_2_r', number: '021.5', color: 'red' },
    { name: 'rashodVozdyhGor_3_r', number: '021.4', color: 'red' },
    { name: 'klapPrirGazaBRU_1_r', number: '002.9', color: 'red' },
    { name: 'klapPrirGazaBRU_2_r', number: '000.9', color: 'red' },
    { name: 'klapPrirGazaBRU_3_r', number: '035.6', color: 'red' },
    { name: 'smesKlapBRU_1_r', number: '000.8', color: 'red' },
    { name: 'smesKlapBRU_2_r', number: '002.1', color: 'red' },
    { name: 'obshKlapVozGorBRU_r', number: '079.0', color: 'red' },
    // Второй щит
    { id: '6ddce191-0d83-43c2-af7e-ebdaddf5ab37', rotation: { y: (45 * Math.PI) / 180 } }, // Выбор бункера
    { id: '53ce370c-847a-41d5-ad4b-8acfa136f7fd', rotation: { y: (90 * Math.PI) / 180 } }, // Выбор режима
    { id: '9c84c3c4-e56b-4c5d-ab4d-dd1e3dd93833', rotation: { y: (45 * Math.PI) / 180 } }, // Выбор уровнемера
    { name: 'bzuDavlenie_l', number: '00.00', color: 'red' },
    { name: 'bzuVesNetto_l', number: '093.7', color: 'red' },
    { name: 'bzuDavlenie_r', number: '00.00', color: 'red' },
    { name: 'bzuVesNetto_r', number: '014.7', color: 'red' },
    { name: 'bzuPolShihZat_l', number: '001.3', color: 'red' },
    { name: 'bzuVremVigruz_l', number: '0085', color: 'red' },
    { name: 'bzuFactUgol_l', number: '340.2', color: 'red' },
    { name: 'bzuPolShihZat_r', number: '001.3', color: 'red' },
    { name: 'bzuVremVigruz_r', number: '0096', color: 'red' },
    { name: 'bzuFactUgol_r', number: '047.0', color: 'red' },
    { name: 'bzuUrovZasip', number: '02.81', color: 'red' },
    // Третий щит
    { id: 'eaa4b36d-fa7d-4ea6-b928-fd91ee72d79d', rotation: { y: (90 * Math.PI) / 180 } }, // Местн. цпу
    { name: 'Handle_06', rotation: { y: (326 * Math.PI) / 180 } }, // Выбор режима управления КГ
    // { id: '46dd9fce-1386-4ad0-94c9-de4cda5d1503', rotation: { y: (90 * Math.PI) / 180 } }, // Местн Дистн Авт_1
    // { id: '31f7b14d-862e-4e43-993a-60b6539a2771', rotation: { y: (90 * Math.PI) / 180 } }, // Местн Дистн Авт_2
    // { name: 'Handle_08', rotation: { y: (90 * Math.PI) / 180 } }, // Клапан 721 выбо режима управления
    // { id: '07ed087c-0c84-47ef-a9c9-e7b170b65c60', rotation: { y: (90 * Math.PI) / 180 } }, // Местн Дистн Авт_2
    { id: 'f6d934e8-12af-4fc1-b553-7b3eccaef38a', rotation: { y: (320 * Math.PI) / 180 } }, // Предупредительная сигнализация
    { id: 'aad627dd-1ef6-4417-b4f9-3c8821f7bab4', rotation: { y: (90 * Math.PI) / 180 } }, // Дроссельный клапан THROTTLE
    { id: 'fc3caa09-a4c4-42e0-a0b7-aec41de8d029', rotation: { y: (45 * Math.PI) / 180 } }, // М81
    { id: 'f8990119-f62d-47da-944e-4a95b95c702f', rotation: { y: (90 * Math.PI) / 180 } }, // М83
    { name: 'Handle_09', rotation: { y: (90 * Math.PI) / 180 } }, // М84
    { name: 'Handle_05', rotation: { y: (90 * Math.PI) / 180 } }, // Пар на увлажнение дутья
    { id: 'e1b732e7-f99e-47b3-9c8c-6ffc1913109c', rotation: { y: (320 * Math.PI) / 180 } }, // М38
    // d46ce2bf-329c-4b0b-932f-04e9aa6686bb зелёная точка квадрат
    // d731d161-f41e-465a-9fb0-b1ac09cb8062 жёлтая точка квадрат
    // 9ae5a167-2f72-43c2-8b6b-96a029f7ea76 красная точка квадрат
    // a17521df-7b0a-4251-816e-b2aa231b4358 красная точка круглая
    { id: '7a2c174a-c280-4b79-913a-585656d091f1', position: { x: 0.018 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Р колошникового газа yellow
    { id: 'd35a945e-6098-413c-85fc-ec03675b2b5c', position: { x: -0.003 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 Р колошникового газа green
    { id: '.d35a945e-6098-413c-85fc-ec03675b2b5c', position: { x: 0.068 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Р колошникового газа yellow
    { id: '7a2fdce1-d243-453d-a1f4-ea4ab59b5bf6', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // dp верхний y1
    { id: 'dc76f3f3-8650-4795-824b-b401ea25189d', position: { x: 0.000 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 dp верхний red
    { id: '54aef8ff-43e1-46a9-811e-d82e2b22471d', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp верхний yellow
    { id: '.54aef8ff-43e1-46a9-811e-d82e2b22471d', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp верхний yellow
    { id: '584426b6-391e-491a-b6cc-641cbd20b002', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp общий yellow
    { id: '7561228f-cbe4-4094-b7cf-4dc9c7670544', position: { x: -0.003 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 dp общий red
    { id: '.7561228f-cbe4-4094-b7cf-4dc9c7670544', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp общий yellow
    { id: '985bd5bc-1ad1-4162-b920-fbc4827202a1', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 dp нижний y1
    { id: '92878d8c-d3c3-4d92-8a3a-2aa45b1b8de3', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp нижний yellow
    { id: '8fcdf048-da99-4a7b-b10a-4e1a9f79abab', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 dp нижний yellow
    { id: '.8fcdf048-da99-4a7b-b10a-4e1a9f79abab', position: { x: -0.003 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 dp нижний red
    { id: 'a45b1224-c9a9-4e53-b8be-f2524cf79e63', position: { x: 0.016 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F холодного дутья yellow
    { id: '0ade6fb4-862a-48a1-b10d-cfbdd38e773b', position: { x: -0.003 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 F холодного дутья red
    { id: '.0ade6fb4-862a-48a1-b10d-cfbdd38e773b', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F холодного дутья yellow
    { id: '55085feb-00cb-46e5-94d4-3074d509094a', position: { x: 0.016 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P горячего дутья yellow
    { id: 'bf4940b2-342f-4124-aa54-c64b51e9eef5', position: { x: -0.003 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 P горячего дутья red
    { id: '.bf4940b2-342f-4124-aa54-c64b51e9eef5', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P горячего дутья yellow
    { id: '25ae07ec-db4d-40c9-a244-c3c87960e95f', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Уровень засыпи датчик 1 y1
    { id: 'af6703c1-4b5a-416a-8389-3072297bd777', position: { x: 0.008 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи датчик 1 yellow
    { id: '5a23380c-a320-4d63-8b0d-2da82755a220', position: { x: 0.008 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Уровень засыпи датчик 1 red
    { id: '.5a23380c-a320-4d63-8b0d-2da82755a220', position: { x: 0.011 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи датчик 1 yellow
    { id: '99491d93-949c-4aa5-ab11-f70fdde6aaf7', position: { x: 0.008 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи датчик 2 yellow
    { id: 'd0acec57-fa5c-4995-b3ab-16ecf8829ee7', position: { x: 0.008 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 Уровень засыпи датчик 2 green
    { id: '.d0acec57-fa5c-4995-b3ab-16ecf8829ee7', position: { x: 0.011 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи датчик 2 yellow
    { id: 'f9534176-d207-4906-8191-ce0c47200b3c', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Уровень засыпи механический y1
    { id: 'd5cd0ea5-90d3-4db2-9d26-36fb10709d1a', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Уровень засыпи механический y2
    { id: 'd86979f8-150c-4b01-bb02-5f2af5abe0e7', position: { x: 0.000 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи механический yellow
    { id: '7ccf0961-7311-4c27-bbaa-12b2dec45ec9', position: { x: 0.013 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи механический yellow
    { id: '.7ccf0961-7311-4c27-bbaa-12b2dec45ec9', position: { x: 0.056 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Уровень засыпи механический yellow
    { id: 'ce57afd4-204f-4c3b-bc9f-0ecb4d37eea0', position: { x: 0.010 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Т в газоотводе Т.1 red
    { id: '9071a277-fcb6-405b-8af1-f65ccc2bb6e7', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.1 yellow
    { id: '.9071a277-fcb6-405b-8af1-f65ccc2bb6e7', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.1 yellow
    { id: '4bba5e52-68b2-497c-8085-b887a8cbf29a', position: { x: 0.012 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Т в газоотводе Т.2 red
    { id: '2a199899-7a38-4f54-987d-8c88e3aaef67', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.2 yellow
    { id: '.2a199899-7a38-4f54-987d-8c88e3aaef67', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.2 yellow
    { id: 'bfd31283-da5b-49e3-98c5-5a2e4a5018e9', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Т в газоотводе Т.3 y1
    { id: '52b2bfef-fc48-42df-b2c0-201157e7baa0', position: { x: 0.010 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Т в газоотводе Т.3 red
    { id: 'cf1b0be1-d720-4be2-b1af-d459c16e3a62', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.3 yellow
    { id: '.cf1b0be1-d720-4be2-b1af-d459c16e3a62', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.3 yellow 
    { id: '890cfeb2-b59b-4e9f-a2a2-0b61e62d2932', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Т в газоотводе Т.4 y1
    { id: 'ef846d8f-8121-40c8-91aa-aee2ae947ea6', position: { x: 0.010 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Т в газоотводе Т.4 red
    { id: 'd7f093e4-3fad-4764-bcad-cfc4e8848bcc', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.4 yellow
    { id: '.d7f093e4-3fad-4764-bcad-cfc4e8848bcc', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т в газоотводе Т.4 yellow
    { id: '829fcf64-55eb-4d4b-bf08-77855a11353f', position: { x: 0.047 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F азота общего yellow
    { id: 'e5b790a4-1bdf-43c1-9e62-f4fc12304623', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F азота общего yellow
    { id: '.e5b790a4-1bdf-43c1-9e62-f4fc12304623', position: { x: 0.055 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 F азота общего red  
    { id: '1930091e-7664-403d-adfc-804d8d5c3bee', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 Содержание кислорода в азоте y1
    { id: '91f8c2d9-058f-49a1-be33-632f860484f0', position: { x: 0.002 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 Содержание кислорода в азоте red
    { id: '7944e7da-dce6-4a38-b735-6cedc4e531c1', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Содержание кислорода в азоте yellow
    { id: '.7944e7da-dce6-4a38-b735-6cedc4e531c1', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Содержание кислорода в азоте yellow 
    { id: '27576245-1e99-4565-af10-2f8dd7ee7a43', position: { x: 0.051 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 Т горячего дутья green
    { id: '2a471a82-ab01-42bf-91e5-6ceee0477d76', position: { x: 0.012 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т горячего дутья yellow
    { id: '.2a471a82-ab01-42bf-91e5-6ceee0477d76', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 Т горячего дутья yellow
    { id: '769e34f1-8103-4d00-9d58-047c68f27c80', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 P технической воды Т.1 y1
    { id: '8ce6a093-f609-4b99-9517-cad1b4c1cbe9', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P технической воды Т.1 yellow
    { id: '039d8c28-77d1-4fe9-9d3d-e3bb57bad86f', position: { x: 0.057 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P технической воды Т.1 yellow
    { id: '.039d8c28-77d1-4fe9-9d3d-e3bb57bad86f', position: { x: 0.062 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 P технической воды Т.1 red 
    { id: 'a5eb6594-a571-41d3-85de-317be75540f8', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 P технической воды Т.2 y1
    { id: '7106bb71-595c-4ac7-96f4-b5233c00341b', position: { x: 0.015 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P технической воды Т.2 yellow
    { id: 'b9339fcf-a848-430c-a6c8-3aa0f115b494', position: { x: 0.057 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P технической воды Т.2 yellow
    { id: '.b9339fcf-a848-430c-a6c8-3aa0f115b494', position: { x: 0.062 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 P технической воды Т.2 red  
    { id: 'e762b64f-213a-4035-aa22-1ed4a88d4199', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P сжатого воздуха yellow
    { id: '98ce2502-03bb-4d18-b164-75a45ee543da', position: { x: 0.035 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 P сжатого воздуха green
    { id: '.98ce2502-03bb-4d18-b164-75a45ee543da', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P сжатого воздуха yellow
    { id: 'f7fd7e6f-9d0e-46ce-94d1-f5eed14b825a', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P осушенного сжатого воздуха yellow
    { id: '34c66f86-b540-4f7d-bd78-9c4be2dca03a', position: { x: 0.029 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 P осушенного сжатого воздуха green
    { id: '.34c66f86-b540-4f7d-bd78-9c4be2dca03a', position: { x: 0.050 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P осушенного сжатого воздуха yellow
    { id: 'b5e7d9c8-2f96-420e-aa51-728375f7d496', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P азота к затворам yellow
    { id: 'f2cfaacd-ad85-400b-bbe6-12b47f3c56d5', position: { x: 0.038 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 P азота к затворам green
    { id: '.f2cfaacd-ad85-400b-bbe6-12b47f3c56d5', position: { x: 0.054 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 P азота к затворам yellow   
    { id: '627a5c0a-f2c6-4cc1-98d9-915633629886', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 T редуктора yellow
    { id: 'd0164997-c397-410f-a6c9-7380c9d73944', position: { x: 0.016 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 T редуктора green
    { id: '.d0164997-c397-410f-a6c9-7380c9d73944', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 T редуктора yellow
    { id: 'a040d9c7-c376-4179-aa17-71a39507616c', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F воды на редуктор yellow
    { id: '5e0f2c52-4c56-4fb6-b194-e8923c4a9d05', position: { x: 0.033 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // DP6 F воды на редуктор green
    { id: '.5e0f2c52-4c56-4fb6-b194-e8923c4a9d05', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F воды на редуктор yellow
    { id: 'a9d6cf94-6bd3-484f-b207-92b96570b77c', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 F природного газа y1
    { id: '700e7fad-91e3-4c50-9722-31be7a5c0141', material: 'a17521df-7b0a-4251-816e-b2aa231b4358' }, // DP6 F природного газа y1
    { id: '629952a1-8aab-4889-8d46-e4af4789ccbb', position: { x: 0.014 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F природного газа yellow
    { id: 'de15bb4a-f57f-498b-a392-1052df17fc1d', position: { x: -0.003 }, material: '9ae5a167-2f72-43c2-8b6b-96a029f7ea76' }, // DP6 F природного газа red
    { id: '.de15bb4a-f57f-498b-a392-1052df17fc1d', position: { x: 0.055 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // DP6 F природного газа yellow
    { name: 'pKolGaz', number: '0.001', },
    { name: 'dpVerh', number: '0.000', },
    { name: 'dpObsh', number: '0.002', },
    { name: 'dpNiz', number: '0.002', },
    { name: 'fHolodDut', number: '0000.', },
    { name: 'pGorDut', number: '0.007', },
    { name: 'urZasDat1', number: '02.82', },
    { name: 'urZasDat2', number: '02.84', },
    { name: 'urZasMeh', number: '0000', },
    { name: 'tVGazT1', number: '0114.', },
    { name: 'tVGazT2', number: '0143.', },
    { name: 'tVGazT3', number: '0124.', },
    { name: 'tVGazT4', number: '0110.', },
    { name: 'fAzotObsh', number: '06.66', },
    { name: 'sodKislVAzot', number: '00.39', },
    { name: 'tGorDut', number: '1185.', },
    { name: 'pTechVodT1', number: '10.27', },
    { name: 'pTechVodT2', number: '10.26', },
    { name: 'pSjatVozd', number: '05.14', },
    { name: 'pOsyshSjatVozd', number: '04.43', },
    { name: 'pAzotkZatv', number: '2.390', },
    { name: 'tReduct', number: '035.6', },
    { name: 'fVodNaReduct', number: '24.81', },
    { name: 'fPrirodGaz', number: '0.000', },
    { name: 'fPrirodGazReg', number: '002.0', color: 'red' },
    { name: 'fParaUvlajDutReg', number: '000.8', color: 'red' },
  ]
]