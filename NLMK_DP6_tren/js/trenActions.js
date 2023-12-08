
/*                 TODO
----------------------------------------------------
Научить сначала выдавать сценариоТекст, а потом обычный текст
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
    windowIntersec: []
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
      { positionCoordinates: [0.75, 1.12, 0.01], lookAt: [-0.02523549683692173, 0.3476621849510065, 0], position: 5, name: 'Монитор #1' },
      { positionCoordinates: [0.1, 1.22, 0.03], lookAt: [1.077429069342384, -0.3353050130723554, 0], position: 6, name: 'Телефон' },
      { positionCoordinates: [0.99, 1.2, -0.08], lookAt: [1.133525791597969, 1.572786718290341, 0], position: 7, name: 'Рация' },
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
      { name: 'PhoneButton001', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Газовый цех"', position: 6, },
      { name: 'PhoneButton006', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Насосный цех"', position: 6, },
      { name: 'PhoneButton012', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "ЭВС"', position: 6, },
      { name: 'PhoneButton017', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Кислородный цех"', position: 6, },
      { name: 'PhoneButton020', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', realName: 'Кнопка "Дипс. комб..."', position: 6, },
      { name: 'PhoneButton', startY: 0.015, endY: 0.0144, duration: 0.15, audio: 'Zvuk_knopok_na_telefone', },
      { name: 'kl022', id: '25408591-8ddd-4b64-a7ad-499aaa995ae6', audio: 'Zvuk_klapana_022_na_BVNK' },
      { name: 'kl021', id: '8d7497bf-6a8b-4906-8a35-1dc986e6e655', audio: 'Zvuk_klapana_022_na_BVNK' },
      { name: 'Rectangle', startY: 0, endY: -0.003, duration: 0.15, audio: 'Zvuk_nazhatiya_knopok_na_BZU', parentName: 'Lighting' },
      { name: '45232239-cfcf-4de6-ab80-663e0c750915', audio: 'Zvuk_tumblera', changeMeshmaterial: { meshName: '01834b40-8c3e-4255-a91f-2b003c55050d', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: 'bdf3b4dc-bdda-4ea7-a09f-6e7be5bcaaf7', audio: 'Zvuk_tumblera', changeMeshmaterial: { meshName: 'efc63ae6-10c1-45f4-a1a1-b5499b4d29b3', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: '1be1d999-92ac-4d4d-8896-f78a1c5cd350', audio: 'Zvuk_tumblera', changeMeshmaterial: { meshName: '43bc2cd8-96bd-4063-b5c2-a4873277d1e9', material: 'Unic_Lamp_Green_On', material2: 'Unic_Lamp_Green_Off', times: 9, condition: { rotation: { y: -0.785 } } } },
      { name: 'b6cc151c-004a-4e3f-bb7b-921c4300993c', audio: 'Zvuk_tumblera', realName: 'Тумблер клапана 721', position: 9, },
      { name: '96378261-ad8d-4410-ad46-36a776a8b7b2', audio: 'Zvuk_tumblera', realName: 'Тумблер клапана 722', position: 9, },
      { name: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44 ', audio: 'Zvuk_tumblera', realName: 'Тумблер клапана 723', position: 9, },
      { name: 'Handle_', parentName: 'DP-6', audio: 'Zvuk_tumblera' },
      { name: 'ButtonHightlight_046', changeMeshmaterial: { meshName: 'Lamp_034', material: 'DonorLamp_on' } },
      { name: 'ButtonHightlight_006', changeMeshmaterial: { meshName: 'Lamp_006', material: 'DonorLamp_on' } },
      { name: 'ButtonHightlight_' },
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
        { x: 10.1, y: 8.5, w: 7, h: 3, forAction: true, id: 'perekidta_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 }, realName: 'Перекидка' },
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
        { x: 81, y: 15, w: 1.5, h: 3.4, forAction: true, id: 'kl1', },
        { x: 76.6, y: 15, w: 1.5, h: 3.4, forAction: true, id: 'kl2', },
        { x: 74.3, y: 15, w: 1.5, h: 3.4, forAction: true, id: 'kl3', },
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
    enable: false,
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
    maxTimeArr: [],
    previousEndVals: undefined,
    restarts: 0,
  }
};

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
const timeDiff = 0;
let tempActions = [
  // [ // test scenario 1
  //   ////--------------------------------2---------------------------------------- 
  //   // {
  //   //   scenarioText: 'Тест непоследовательных действий',
  //   //   sender: 'Газовщик',
  //   //   multi: [
  //   //     {
  //   //       text: '1. .',
  //   //       sender: 'Газовщик',
  //   //       action: {
  //   //         target3D: 'PhoneButton001',
  //   //       },
  //   //       audio: 'tts-vo1',
  //   //     },
  //   //     {
  //   //       text: '2. ',
  //   //       sender: 'Газовщик',
  //   //       action: {
  //   //         target3D: 'PhoneButton006',
  //   //       },
  //   //       audio: 'tts-vo1',
  //   //     },
  //   //     {
  //   //       text: '3. ',
  //   //       sender: 'Газовщик',
  //   //       action: {
  //   //         target3D: 'PhoneButton017',
  //   //       },
  //   //       audio: 'tts-vo1',
  //   //     },
  //   //     {
  //   //       text: '4. ',
  //   //       sender: 'Газовщик',
  //   //       action: {
  //   //         target3D: 'PhoneButton020',
  //   //       },
  //   //       audio: 'tts-vo1',
  //   //     }
  //   //   ],
  //   //   startTime: timeDiff + 0.5,
  //   //   human: true,
  //   // },
  //   // {
  //   //   action: {
  //   //     // target2D: 'kl029',
  //   //     target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     rotation: { y: 1.571 },
  //   //   },
  //   //   duration: 0.3,
  //   //   startTime: timeDiff + 1,
  //   //   human: true,
  //   //   // concentration: [
  //   //   //   { text: 'Клапан 029', x: 41, y: 48, w: 3, h: 6.5, position: [1], scheme: 'vnk_main' },
  //   //   // ]
  //   // },
  //   // {
  //   //   action: {
  //   //     target2D: 'close_w1',
  //   //   },
  //   //   startTime: timeDiff + 1.1,
  //   //   human: true,
  //   // },
  //   // {
  //   //   action: {
  //   //     target2D: 'kl038',
  //   //     // target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     // rotation: { y: 1.571 },
  //   //   },
  //   //   // duration: 0.3,
  //   //   startTime: timeDiff + 1,
  //   //   human: true,
  //   //   // concentration: [
  //   //   //   { text: 'Клапан 029', x: 41, y: 48, w: 3, h: 6.5, position: [1], scheme: 'vnk_main' },
  //   //   // ]
  //   // },
  //   // {
  //   //   action: {
  //   //     // target2D: 'kl038',
  //   //     target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     rotation: { y: 1.571 },
  //   //   },
  //   //   duration: 0.3,
  //   //   startTime: timeDiff + 2,
  //   //   human: true,
  //   //   // concentration: [
  //   //   //   { text: 'Клапан 029', x: 41, y: 48, w: 3, h: 6.5, position: [1], scheme: 'vnk_main' },
  //   //   // ]
  //   // },
  //   // {
  //   //   action: {
  //   //     target3D: 'fPrirodGazReg',
  //   //     number: '024.5',
  //   //     color: 'red',
  //   //   },
  //   //   startTime: timeDiff + 2,
  //   // },
  //   // {
  //   //   scenarioText: 'Текст 1',
  //   //   sender: 'Система',
  //   //   action: {
  //   //     target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     rotation: { y: 1.571 },
  //   //   },
  //   //   duration: 0.3,
  //   //   startTime: timeDiff + 1,
  //   //   human: true,
  //   // },
  //   // {
  //   //   scenarioText: 'Текст 2',
  //   //   sender: 'Система',
  //   //   action: {
  //   //     target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     rotation: { y: 1.571 },
  //   //   },
  //   //   duration: 0.3,
  //   //   startTime: timeDiff + 2,
  //   //   human: true,
  //   // },
  //   // {
  //   //   scenarioText: 'Текст 3',
  //   //   sender: 'Система',
  //   //   action: {
  //   //     target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     rotation: { y: 1.571 },
  //   //   },
  //   //   duration: 0.3,
  //   //   startTime: timeDiff + 3,
  //   //   human: true,
  //   // },
  //   // {
  //   //   scenarioText: 'Текст 4',
  //   //   sender: 'Система',
  //   //   action: {
  //   //     target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     rotation: { y: 1.571 },
  //   //   },
  //   //   duration: 0.3,
  //   //   startTime: timeDiff + 4,
  //   //   human: true,
  //   // },
  //   // {
  //   //   scenarioText: 'Текст 5',
  //   //   sender: 'Система',
  //   //   action: {
  //   //     target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     rotation: { y: 1.571 },
  //   //   },
  //   //   duration: 0.3,
  //   //   startTime: timeDiff + 5,
  //   //   human: true,
  //   // },
  //   // {
  //   //   scenarioText: 'Текст 6',
  //   //   sender: 'Система',
  //   //   action: {
  //   //     target3D: '96378261-ad8d-4410-ad46-36a776a8b7b2',
  //   //     rotation: { y: 1.571 },
  //   //   },
  //   //   duration: 0.3,
  //   //   startTime: timeDiff + 6,
  //   //   human: true,
  //   // },
  //   // {
  //   //   startTime: timeDiff + 7,
  //   // },
  // ],
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
      startTime: timeDiff + 6.1,
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



            { name: 'circle_kl029', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' }
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
            { name: 'circle_kl029', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
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
            { name: 'circle_kl029', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
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

            { name: 'circle_kl029', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
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

            { name: 'btn_open_text', color: '#000' },
            { name: 'btn_open_2', color: '#e6e6e6', stroke: '#b3b3b3' },


            { name: 'left_vn', color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },

            { name: 'circle_kl029', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },

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
      startTime: timeDiff + 13,
      human: true,
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
      startTime: timeDiff + 13.1,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'open_vn',
        realName: 'Закрыть',
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
      startTime: timeDiff + 13.2,
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
      startTime: timeDiff + 13.3,
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
      startTime: timeDiff + 14,
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
      startTime: timeDiff + 15,
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
      startTime: timeDiff + 16,
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
      startTime: timeDiff + 17,
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
      startTime: timeDiff + 18,
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
      startTime: timeDiff + 19,
    },

    // закрыть окно ВН
    {
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 20,
      human: true,
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
      startTime: timeDiff + 20.1,
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
      startTime: timeDiff + 20.2,
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
      startTime: timeDiff + 20.3,
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
      startTime: timeDiff + 21,
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
      startTime: timeDiff + 22,
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
      startTime: timeDiff + 23,
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
      startTime: timeDiff + 24,
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
      startTime: timeDiff + 25,
    },

    // ЧАТ
    {
      text: 'Клапан 037 на подогреватель газа закрыт.',
      scenarioText: 'Закрыть клапан 007 на подогреватель воздуха.',
      sender: 'Система',
      audio: 'tts-4',
      startTime: timeDiff + 26,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 27,
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
      startTime: timeDiff + 28,
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
      startTime: timeDiff + 28.1,
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
      startTime: timeDiff + 28.2,
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
      startTime: timeDiff + 29,
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
      startTime: timeDiff + 30,
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
      startTime: timeDiff + 31,
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
      startTime: timeDiff + 32,
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
            { name: 'status_window_text', text: 'Открыт' },

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
      startTime: timeDiff + 33,
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
      startTime: timeDiff + 34,
    },
    ////--------------------------------5----------------------------------------
    // закрыть окно ВН
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 35,
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
      startTime: timeDiff + 35.1,
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
      startTime: timeDiff + 35.2,
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
      startTime: timeDiff + 35.3,
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
      startTime: timeDiff + 36,
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
      startTime: timeDiff + 37,
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
      startTime: timeDiff + 38,
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
      startTime: timeDiff + 39,
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
      startTime: timeDiff + 40,
    },
    // ЧАТ
    {
      text: 'Клапан 028 на подогреватель газа закрыт.',
      sender: 'Система',
      startTime: timeDiff + 41,
    },
    {
      text: 'Подогреватели воздуха и газа отделены.',
      audio: 'tts-6',
      sender: 'Система',
      startTime: timeDiff + 42,
    },



    ////--------------------------------0----------------------------------------
    // закрыть окно ВН
    {
      startTime: timeDiff + 45,
      action: {
        target2D: 'close_w1',
      },
      human: true,
    },
    {
      scenarioText: 'В случае запланированной остановки доменной печи газовщик сообщает об этом.',
      audio: 'tts-7',
      sender: 'Система',
      lifeTime: '07:45:00',
      startTime: timeDiff + 45.1,
    },
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
      startTime: timeDiff + 48,
      human: true,
    },
    // 1.2    // DP
    ////--------------------------------1---------------------------------------- 
    {
      text: 'Остановка вдувания пылеугольного топлива ПУТ.',
      sender: 'Система',
      audio: 'tts-8',
      lifeTime: '08:00:00',
      startTime: timeDiff + 56,
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
      startTime: timeDiff + 58,
    },
    ////--------------------------------2----------------------------------------
    {
      scenarioText: ' Расход природного газа увеличиваем для поддержания ТТГ. Установить на 37000.',
      sender: 'Система',
      audio: 'tts-10',
      startTime: timeDiff + 63,
    },
    {
      action: {
        target2D: 't_r_4',
      },
      startTime: timeDiff + 68,
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
      startTime: timeDiff + 68.1,
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
      startTime: timeDiff + 68.2,
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
      startTime: timeDiff + 68.3,
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
      startTime: timeDiff + 68.4,
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
      startTime: timeDiff + 68.5,
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
      startTime: timeDiff + 68.6,
      human: true,
    },
    ////--------------------------------3----------------------------------------
    {
      scenarioText: 'Настройка значения теоретической температуры горения.',
      sender: 'Система',
      audio: 'tts-11',
      startTime: timeDiff + 69,
    },
    { // TODO не нашёл имя и схему в помощи
      text: 'Выбрать 302',
      sender: 'Система',
      action: {
        target2D: 't_b_302_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
          ]
        },
      },
      startTime: timeDiff + 73,
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
      startTime: timeDiff + 73.1,
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
      startTime: timeDiff + 73.2,
      human: true,
    },
    {
      action: {
        target2D: 'pzs_close_btn',
      },
      startTime: timeDiff + 73.3,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 73.4,
      human: true,
    },

    ////--------------------------------3.1
    {
      text: 'Выбрать ТТГ и установить значение 2200.',
      sender: 'Система',
      action: {
        target2D: 't_r_5',
        window2D: {
          elements: [
            { name: 'vz_number', text: '0' },
          ]
        },
      },
      startTime: timeDiff + 73.5,
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
      startTime: timeDiff + 73.6,
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
      startTime: timeDiff + 73.7,
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
      startTime: timeDiff + 73.8,
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
      startTime: timeDiff + 73.9,
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
      startTime: timeDiff + 74,
      human: true,
    },
    ////--------------------------------3.2
    {
      text: 'Выбрать 302',
      sender: 'Система',
      action: { // TODO клик по 302!?
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
      startTime: timeDiff + 74.1,
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
      startTime: timeDiff + 74.2,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 74.3,
      human: true,
    },
    ////--------------------------------4       
    {
      text: 'Выпуск чугуна из лёток, продвука, понижения давления температуры.',
      sender: 'Система',
      audio: 'tts-12',
      lifeTime: '08:15:00',
      startTime: timeDiff + 75,
    },
    {
      action: {
        window2D: {
          elements: [ // fix
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
      startTime: timeDiff + 80,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'L2sqr', color: '#fff' },
          ]
        }
      },
      startTime: timeDiff + 81,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'L2sqr', color: '#F7F700' },
          ]
        }
      },
      startTime: timeDiff + 82,
    }, {
      action: {
        window2D: {
          elements: [
            // не хватает элементов на схеме
          ]
        }
      },
      startTime: timeDiff + 83,
    },
    // 1.3 
    ////--------------------------------1---------------------------------------- 
    {
      text: 'По команде мастера печи, до окончания выпуска чугуна, закрыть кислород на обогащение дутья.',
      sender: 'Система',
      audio: 'tts-13',
      lifeTime: '08:30:00',
      startTime: timeDiff + 84,
    },
    {
      text: 'По рации мастер печи сообщил команду газовщикам.',
      sender: 'Система',
      startTime: timeDiff + 91,
    },
    {
      text: 'Закрыть кислород на обогащения дутья и оставить 20000.',
      sender: 'Мастер печи',
      audio: 'tts-vo2',
      startTime: timeDiff + 92,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 96,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046'
      },
      startTime: timeDiff + 97,
      human: true,
    },
    {
      text: 'Хорошо. Выполняю.',
      sender: 'Газовщик',
      audio: 'tts-vo3',
      startTime: timeDiff + 98,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 100,
    },
    ////--------------------------------2
    {
      scenarioText: 'Перекидка клапанов в автоматическом режиме.',
      sender: 'Система',
      audio: 'tts-14',
      startTime: timeDiff + 101,
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
      startTime: timeDiff + 104,
      human: true,
    },
    {
      text: 'Выбрать "Нагрев-Отделение 2.',
      sender: 'Система',
      action: {
        target2D: 'nagrev_otd2_btn',
      },
      startTime: timeDiff + 104.1,
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
      startTime: timeDiff + 104.2,
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

      startTime: timeDiff + 104.3,
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
      startTime: timeDiff + 105,
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
      startTime: timeDiff + 106,
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
      startTime: timeDiff + 107,
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
      startTime: timeDiff + 108,
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
      startTime: timeDiff + 109,
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
      startTime: timeDiff + 110,
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
      startTime: timeDiff + 111,
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
      startTime: timeDiff + 112,
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
      startTime: timeDiff + 113,
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
      startTime: timeDiff + 114,
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
      startTime: timeDiff + 115,
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
      startTime: timeDiff + 116,
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
      startTime: timeDiff + 117,
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
      startTime: timeDiff + 118,
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
      startTime: timeDiff + 119,
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
      startTime: timeDiff + 120,
    },
    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 120.1,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK close   
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 120.2,
      human: true,
    },

    ////--------------------------------3-------------------------------------
    {
      scenarioText: 'Отделить воздухонагреватель ВНК №1.',
      sender: 'Система',
      audio: 'tts-15',
      startTime: timeDiff + 121,
    },

    {
      action: {
        target2D: 'perekidta_btn',
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

            { name: 'otd2_otd_rect', color: '#fff' },

            { name: 'nagrev_otd_2_rect', color: '#fff' },

            { name: 'vb_otkr_klap2_rect', color: '#e3d4ce' },
            { name: 'kl_11_rect', color: '#00FF00' },

            { name: 'avarin_otd_rect', color: '#e6e6e6', stroke: '#808080' },
            { name: 'otdel_nagrev', color: '#fff', stroke: '#000' },
            { name: 'nagrev_otd_2_rect', color: '#e6e6e6', stroke: '#808080' },

            { name: 'otdel_dute', color: '#fff', stroke: '#000' },            // color: '#e6e6e6', stroke: '#808080'
            { name: 'dute_otdel', color: '#e6e6e6', stroke: '#808080' },
            { name: 'otdel_otdel2', color: '#e6e6e6', stroke: '#808080' },
            { name: 'otd2_otd_rect', color: '#fff', stroke: '#000' },
          ]
        }
      },
      startTime: timeDiff + 125,
      human: true,
    },
    { // win_otdel2_na_vnk OPEN
      action: {
        target2D: 'otdel2_otdel_btn',
      },
      startTime: timeDiff + 125.1,
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
      startTime: timeDiff + 125.2,
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

      startTime: timeDiff + 125.3,
      human: true,
    },
    {  // win_otdel2_na_vnk CLOSE
      action: {
        target2D: 'otdel2_close_btn',
      },
      startTime: timeDiff + 125.4,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK CLOSE
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 125.5,
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
      startTime: timeDiff + 126,
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
      startTime: timeDiff + 127,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_111', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 128,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_111', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 129,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_111', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 130,
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
      startTime: timeDiff + 131,
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
      startTime: timeDiff + 132,
    },

    ////--------------------------------4-------------------------------------
    {
      scenarioText: 'Отделить воздухонагреватель ВНК №2.',
      sender: 'Система',
      audio: 'tts-16',
      startTime: timeDiff + 133,
    },
    {
      action: {
        target2D: 'perekidta_btn', // perekidta_btn
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
      startTime: timeDiff + 137,
      human: true,
    },
    { // O_p_n_na_k_na-o_2_na_VNK OPEN
      action: {
        target2D: 'nagrev_otd2_btn',
        window2D: {
          elements: [
            { name: 'Title_window_peric_nagrevotd', text: 'ВН2 Перекидка из Нагрева в Отделение' },


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
      startTime: timeDiff + 137.1,
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
      startTime: timeDiff + 137.2,
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
      startTime: timeDiff + 137.3,
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
      startTime: timeDiff + 138,
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
      startTime: timeDiff + 139,
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
      startTime: timeDiff + 140,
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
      startTime: timeDiff + 141,
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
      startTime: timeDiff + 142,
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
      startTime: timeDiff + 143,
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
      startTime: timeDiff + 144,
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
      startTime: timeDiff + 145,
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
      startTime: timeDiff + 146,
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
      startTime: timeDiff + 147,
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
      startTime: timeDiff + 148,
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
      startTime: timeDiff + 149,
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
      startTime: timeDiff + 150,
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
      startTime: timeDiff + 151,
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
      startTime: timeDiff + 152,
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
      startTime: timeDiff + 153,
    },
    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 153.1,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK CLOSE
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 153.2,
      human: true,
    },

    {
      action: {
        target2D: 'perekidta_btn',
        window2D: {
          elements: [
            { name: 'avarin_otd_rect', color: '#e6e6e6', stroke: '#808080' },
            { name: 'otdel_nagrev', color: '#fff', stroke: '#000' },
            { name: 'nagrev_otd_2_rect', color: '#e6e6e6', stroke: '#808080' },

            { name: 'otdel_dute', color: '#fff', stroke: '#000' },            // color: '#e6e6e6', stroke: '#808080'
            { name: 'dute_otdel', color: '#e6e6e6', stroke: '#808080' },
            { name: 'otdel_otdel2', color: '#e6e6e6', stroke: '#808080' },
            { name: 'otd2_otd_rect', color: '#fff', stroke: '#000' },
          ]
        }
      },
      startTime: timeDiff + 153.3,
      human: true,
    },
    {
      action: {
        target2D: 'otdel2_otdel_btn',
        window2D: {
          elements: [
            { name: 'text_ish_c4', y: 237.5 },
            { name: 'text_ish_c5', y: 237.5 },
            { name: 'text_ish_c6', y: 237.5 },
            { name: 'rect_ish_c4', position: { y: 0 } },
            { name: 'rect_ish_c5', position: { y: 0 } },
            { name: 'rect_ish_c6', position: { y: 0 } },
          ]
        }
      },
      startTime: timeDiff + 153.4,
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
      startTime: timeDiff + 153.5,
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
      startTime: timeDiff + 153.6,
      human: true,
    },
    {
      action: {
        target2D: 'otdel2_close_btn',
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 153.7,
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
      startTime: timeDiff + 154,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'nagrev_otd_2_rect', color: '#e6e6e6' },

          ]
        }
      },
      startTime: timeDiff + 155,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'avarin_otd_rect', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 156,
    },
    {
      action: {
        target2D: 'perekidta_exit_btn',
        window2D: {
          elements: [
            { name: 'kl_211', color: '#7b828c' },
            { name: '2QI_01', text: '15,41' },
          ]
        }
      },
      startTime: timeDiff + 156.1,
      human: true,
    },
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
      startTime: timeDiff + 154,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#7b828c' },
            { name: '2QI_01', text: '15,39' },
          ]
        }
      },
      startTime: timeDiff + 155,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 156,
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
      startTime: timeDiff + 157,
    },

    ///5. Вернуться на общую схему ВНК. Нажать на вкладку «Общая схема». Показать измененные значения, как на видео.
    {
      text: 'ВНК №1, ВНК №2 отделены, а ВНК №3 на дутье.',
      sender: 'Система',
      audio: 'tts-17',
      startTime: timeDiff + 158,
    },
    {
      lifeTime: '08:45:00',
      startTime: timeDiff + 161,
    },
    // 1.4 сценарий
    {
      scenarioText: 'Дать команду дежурному водопроводчику на закрытие природного газа на печь задвижками на подводе газа к фурмам.',
      sender: 'Система',
      audio: 'tts-18',
      // lifeTime: '08:45:00',
      startTime: timeDiff + 165,
    },
    ////--------------------------------1---------------------------------------- РАЦИЯ 
    {
      scenarioText: 'Сообщить по рации дежурному водопроводчику.',
      sender: 'Система',
      audio: 'radio_say',
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 173,
      human: true,
    },
    {
      text: 'Закрыть природный газ на фурмах.',
      sender: 'Газовщик',
      audio: 'tts-vo4',
      startTime: timeDiff + 174,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 176,
    },
    {
      text: 'Понял, приступаю.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo5',
      startTime: timeDiff + 177.5,
    },
    ////--------------------------------2---------------------------------------- 
    {
      scenarioText: 'Перевести клапан 721 в режим управления «Дист.»',
      sender: 'Система',
      audio: 'tts-19',
      startTime: timeDiff + 181,
    },
    {
      action: {
        target3D: 'Handle_018',
        rotation: { y: 1.571 },
      },
      duration: 0.15,
      startTime: timeDiff + 182,
      human: true,
    },

    ////--------------------------------3---------------------------------------- 
    {
      audio: 'tts-20',
      scenarioText: 'Перевести тумблер из положения «Авт.4» в положение «Дист.3» на маркировке «Атмосферные клапана» «Клапан 1», «Клапан 2» и «Клапан 3» поочерёдно.',
      sender: 'Система',
      startTime: timeDiff + 183,
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
      startTime: timeDiff + 191,
      human: true,
    },

    ////--------------------------------4---------------------------------------- 

    {
      text: 'Уменьшить значение параметра на регуляторе природного газа.',
      audio: 'tts-21',
      startTime: timeDiff + 192,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 195.1,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '024.5'
      },
      startTime: timeDiff + 195.11,
    },
    {
      action: {
        target3D: 'Clone_4_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 195.12,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 195.5,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '020.0'
      },
      startTime: timeDiff + 195.51,
    },
    {
      action: {
        target3D: 'Clone_3_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 195.52,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 196,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '017.0'
      },
      startTime: timeDiff + 196.1,
    },
    {
      action: {
        target3D: 'Clone_2_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 196.2,
    },

    ////--------------------------------5---------------------------------------- 
    {
      text: 'Водопроводчик по рации сообщает о выполненных своих операциях.',
      sender: 'Система',
      startTime: timeDiff + 197,
    },
    {
      audio: 'tts-vo6',
      text: 'Газ по фурмам закрыт',
      sender: 'Дежурный водопроводчик',
      startTime: timeDiff + 197.1,
    },

    ////--------------------------------6---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 199.5,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 202,
      human: true,
    },
    {
      text: 'Природный газ закрыт. На фурмах 3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo7',
      startTime: timeDiff + 203,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 206,
    },
    {
      audio: 'tts-vo8',
      text: 'Понял, принял.',
      sender: 'Дежурный водопроводчик',
      startTime: timeDiff + 207,
    },
    ////--------------------------------7---------------------------------------- 
    {
      scenarioText: 'Закрыть задвижку 721.',
      sender: 'Система',
      audio: 'tts-22',
      startTime: timeDiff + 210,
    },
    {
      action: { // TODO изменить имена 3Д на индексы
        target3D: 'b6cc151c-004a-4e3f-bb7b-921c4300993c',
        rotation: { y: 0.7854 }, // 45
      },
      duration: 0.3,
      startTime: timeDiff + 211,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Unic_Lamp_Red_On'
      },
      startTime: timeDiff + 211.1,
    },
    {
      action: {
        target3D: 'b6cc151c-004a-4e3f-bb7b-921c4300993c',
        rotation: { y: 0 },
      },
      duration: 0.3,
      startTime: timeDiff + 213,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 213.1,
    },
    // 1.5 сценарий ------------------------------------------------------------------------------------------------------------------------------
    {
      text: 'По команде мастера печи - газовщик должен открыть клапан «СНОРТ» полностью для сброса в атмосферу излишки.',
      sender: 'Система',
      audio: 'tts-23',
      lifeTime: '09:00:00',
      startTime: timeDiff + 215,
    },
    ////--------------------------------1---------------------------------------- 
    {
      text: 'Делаем 2,5 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo9',
      startTime: timeDiff + 222,
    },
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 225.5,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 227.5,
      human: true,
    },
    {
      text: 'Делаю 2,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo10',
      startTime: timeDiff + 228,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 231,
    },
    ////--------------------------------2----------------------------------------     /// 4 раза как на видео
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 2,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 233,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 234,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_020',
        material: 'Unic_Lamp_Red_Off',
      },
      startTime: timeDiff + 234.1,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 235,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 236,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 237,
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
            { name: 'H_progres_7', opacity: 1 },

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
            { name: 'VNK3_status_1', color: '#43A3EF' },
            { name: 'VNK2_status_1', color: '#ada3b0' },
            { name: 'VNK1_status_1', color: '#ada3b0' },

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
      startTime: timeDiff + 237.1,
    },
    ////--------------------------------3----------------------------------------     ////    2   /////
    ////--------------------------------4---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 238,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 239,
      human: true,
    },
    {
      text: 'На фурмах 2,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo11',
      startTime: timeDiff + 240,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 244,
    },
    {
      text: 'Делаем 2 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo12',
      startTime: timeDiff + 245,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 245.1,
      human: true,
    },
    {
      text: 'Делаю 2 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo13',
      startTime: timeDiff + 246,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 248.9,
    },
    ////--------------------------------5---------------------------------------- /////   2   ////      4 раза из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 2кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 249,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 250,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 251,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 252,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 253,
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
      startTime: timeDiff + 254,
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
      startTime: timeDiff + 255,
    },
    ////--------------------------------6---------------------------------------- ////   4   ////
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 255.5,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 256,
      human: true,
    },
    {
      text: 'На фурмах 2 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo14',
      startTime: timeDiff + 257,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 260,
    },
    {
      text: 'Делаем 1,5 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo15',
      startTime: timeDiff + 261,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 261.1,
      human: true,
    },
    {
      text: 'Выполняю.',
      sender: 'Газовщик',
      audio: 'tts-vo16',
      startTime: timeDiff + 262,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 265,
    },

    ////--------------------------------7----------------------------------------
    {
      scenarioText: 'Сообщить по телефону в «ЭВС».',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 267,
    },
    {
      action: {
        target3D: 'PhoneButton020',
      },
      startTime: timeDiff + 269,
      human: true,
    },
    {
      text: 'Разгрузка на 20000.',
      sender: 'Газовщик',
      startTime: timeDiff + 271,
      audio: 'tts-vo17',
    },
    {
      text: 'Принял',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo18',
      startTime: timeDiff + 275.5,
    },

    ////--------------------------------8---------------------------------------- //////  2   //////    6-7 раз. БУДЕТ 6  . Из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 1,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 277,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 278,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 279,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 280,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 281,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '33' },
            { name: 'H_progres_33', opacity: 1 },
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
      startTime: timeDiff + 282,
    },
    ////--------------------------------9---------------------------------------- /////   4   /////
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 282,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      duration: 0.15,
      startTime: timeDiff + 285,
      human: true,
    },
    {
      text: 'На фурмах 1,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo19',
      startTime: timeDiff + 286,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 288,
    },
    {
      text: 'Делаем 1 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo20',
      startTime: timeDiff + 291,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      duration: 0.15,
      startTime: timeDiff + 291.1,
      human: true,
    },
    {
      text: 'Делаю 1.',
      sender: 'Газовщик',
      audio: 'tts-vo21',
      startTime: timeDiff + 292,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 295,
    },
    ////--------------------------------10----------------------------------------  ///////   2   //////  7 раз из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 1кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 298,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 299,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 300,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 301,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 302,
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
      startTime: timeDiff + 303,
    },
    ////--------------------------------11----------------------------------------    ////////////////    4   ///////////////   
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 305,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 306,
      human: true,
    },
    {
      text: 'На фурмах 1 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo22',
      startTime: timeDiff + 307,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 312,
    },
    {
      text: 'Делаем 0,8 кг. Открываем свечу.',
      sender: 'Мастер печи',
      audio: 'tts-vo23',
      startTime: timeDiff + 313,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 316,
      human: true,
    },
    {
      text: 'Приступаю к выполнению.',
      sender: 'Газовщик',
      audio: 'tts-vo24',
      startTime: timeDiff + 317,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 320,
    },

    ////--------------------------------12---------------------------------------- /////////    2   //////////// 2 РАЗА КРУТИТ  из сценария
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ»',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 323,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 324,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 325,
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
      startTime: timeDiff + 325.1,
    },
    ////--------------------------------13---------------------------------------- 
    {
      scenarioText: 'Открыть нижний шихтовый затвор.',
      text: 'Нажать на пульте управления БЗУ кнопку «Открыт» маркировки «Нижний шихтовый затвор».',
      sender: 'Система',
      audio: 'tts-25',
      startTime: timeDiff + 326,
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
      startTime: timeDiff + 327.5,
    },
    {
      action: {
        target3D: 'Rectangle076',
      },
      startTime: timeDiff + 329,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 330,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 330.5,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 331,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 331.5,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 332,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 332.5,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 333,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 333.5,
    },
    {
      text: 'Нажать на кнопку "Сброс сигнала тревоги" на ПУ БЗУ. ',
      sender: 'Система',
      startTime: timeDiff + 333.9,
    },
    {
      action: {
        target3D: 'Rectangle053',
      },
      startTime: timeDiff + 334,
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
      startTime: timeDiff + 334.5,
    },
    ////--------------------------------14----------------------------------------  /// 2 raza is scenario s intervalom
    {
      scenarioText: 'Продолжить приоткрывать клапан «СНОРТ».',
      sender: 'Система',
      startTime: timeDiff + 338,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 339,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 340,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '60' },
            { name: 'H_progres_60', opacity: 1 },
            { name: 'P_2', text: '0.88' },
          ]
        }
      },
      startTime: timeDiff + 340.5,
    },
    ////--------------------------------15---------------------------------------- 
    {
      scenarioText: 'Выгрузить кокс и остановить загрузку.',
      sender: 'Система',
      audio: 'tts-27',
      startTime: timeDiff + 341,
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
      startTime: timeDiff + 344,
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
      startTime: timeDiff + 344.3,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '20' },
          ]
        }
      },
      startTime: timeDiff + 344.6,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '15' },
          ]
        }
      },
      startTime: timeDiff + 345,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '10' },
          ]
        }
      },
      startTime: timeDiff + 345.3,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '5' },
          ]
        }
      },
      startTime: timeDiff + 345.6,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '0' },
          ]
        }
      },
      startTime: timeDiff + 346,
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
      startTime: timeDiff + 346.1,
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
      startTime: timeDiff + 347,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl.Oh.NGUK2_1', color: '#00FF00' },
          ]
        }
      },
      startTime: timeDiff + 347.5,
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
      startTime: timeDiff + 347.6,
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
      startTime: timeDiff + 348,
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
      startTime: timeDiff + 349,
    },
    { //3D
      text: 'На ПУ БЗУ нажать "Приостановить подачу материала".',
      sender: 'Система',
      startTime: timeDiff + 349.1,
    },
    { //3D
      action: {
        target3D: 'Rectangle056',
      },
      startTime: timeDiff + 349.2,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle056',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 349.3,
    },
    ////--------------------------------16----------------------------------------  //  Газовщик провернул клапан 1 раз.
    {
      text: 'Продолжить приоткрывать клапан «СНОРТ».',
      sender: 'Система',
      startTime: timeDiff + 350,
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
      startTime: timeDiff + 351.1,
    },


    ////--------------------------------17---------------------------------------- 
    {
      // scenarioText: 'Схема БЗУ и нажать на клавишу «Пауза» кнопка.',
      text: 'Загрузка приостановлена.',
      scenarioText: 'На схеме БЗУ нажать на кнопка «Пауза».',
      sender: 'Система',
      audio: 'tts-28',
      startTime: timeDiff + 354,
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
      startTime: timeDiff + 354.1,
      human: true
    },
    ////--------------------------------18---------------------------------------- 
    {
      scenarioText: 'Открыть атмосферные клапаны.',
      text: 'На ПУ ДП-6 перевести тумблеры клапанов 1, 2, 3 до щелчка в положение «2».',
      sender: 'Система',
      audio: 'tts-29',
      startTime: timeDiff + 355,
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
      startTime: timeDiff + 357,
      human: true,
    },
    ////--------------------------------19---------------------------------------- 
    {
      text: 'На ПУ ДП-6 перевести тумблеры клапанов 1, 2, 3 до щелчка в положение «0».',
      sender: 'Система',
      startTime: timeDiff + 363,
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
      startTime: timeDiff + 363.1,
      human: true,
    },
    {
      text: 'Атмосферные клапаны открыты.',
      sender: 'Система',
      audio: 'tts-30',
      startTime: timeDiff + 363.2,
    },

    ////--------------------------------20---------------------------------------- 
    { // 3D
      scenarioText: 'По рации сообщить мастеру печи о выполненной операции.',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 367,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 368,
      human: true,
    },
    {
      text: 'Атмосферные клапана открыты. На фурмах 0,75 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo25',
      startTime: timeDiff + 369,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 375,
    },
    ////--------------------------------21---------------------------------------- 
    { // 3D
      scenarioText: 'Мастер печи по рации сообщает действия.',
      sender: 'Система',
      startTime: timeDiff + 377,
    },
    {
      text: 'Закрывайте кислород и делайте 0,5 кг на фурмах.',
      sender: 'Мастер печи',
      audio: 'tts-vo26',
      startTime: timeDiff + 378,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 383.5,
      human: true,
    },
    {
      text: 'Закрываю кислород полностью и делаю 0,5.',
      sender: 'Газовщик',
      audio: 'tts-vo27',
      startTime: timeDiff + 384.5,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 389.15,
    },
    ////--------------------------------22---------------------------------------- 
    {
      scenarioText: 'Сообщить по телефону в "Кислородный цех".',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 390,
    },
    {
      action: {
        target3D: 'PhoneButton017',
      },
      startTime: timeDiff + 391,
      human: true,
    },
    {
      text: 'Закрывайте кислород на выходе.',
      sender: 'Газовщик',
      audio: 'tts-vo28',
      startTime: timeDiff + 392,
    },
    {
      text: 'Выполняю',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo29',
      startTime: timeDiff + 396,
    },
    ////--------------------------------23----------------------------------------   // Газовщик проворачивал клапан 6 раз с интервалом.
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 398,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 400.1,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 400.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 401,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 401.5,
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
      startTime: timeDiff + 401.6,
    },
    ////--------------------------------24---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 402,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 402.1,
      human: true,
    },
    {
      text: 'На фурмах 0,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo30',
      startTime: timeDiff + 403,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 406,
    },

    ////--------------------------------25---------------------------------------- 
    { // 3D
      scenarioText: 'БЗУ снять с автоматического режима.',
      audio: 'tts-31',
      sender: 'Система',
      startTime: timeDiff + 408,
    },
    {
      text: 'На ПУ БЗУ нажать на кнопку «Автоматич. СТОП»',
      sender: 'Система',
      action: {
        target3D: 'Rectangle071',
      },
      startTime: timeDiff + 409,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 410,
    },
    {
      text: 'На ПУ БЗУ нажать на кнопку «ЗАКРЫТ» «Клапан вторичного выравнивания» слева',
      sender: 'Система',
      action: {
        target3D: 'Rectangle065',
      },
      startTime: timeDiff + 410.1,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 410.3,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 410.4,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 411,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 411.5,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 412,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 412.5,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 413,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 413.5,
    },
    {
      sender: 'Система',
      text: 'На ПУ БЗУ нажать на кнопку «ЗАКРЫТ» «Клапан вторичного выравнивания» справа',
      action: {
        target3D: 'Rectangle046',
      },
      startTime: timeDiff + 413.6,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 413.7,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 414,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 414.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 415,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 415.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 416,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 416.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 417,
    },
    {
      sender: 'Система',
      text: 'На ПУ БЗУ нажать на кнопку «ОТКРЫТ» «Клапан сброса» слева',
      action: {
        target3D: 'Rectangle070',
      },
      startTime: timeDiff + 417.1,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 417.2,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 417.4,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 418,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 418.5,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 419,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 419.5,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 420,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 420.5,
    },
    {
      sender: 'Система',
      text: 'На ПУ БЗУ нажать на кнопку «ОТКРЫТ» «Клапан сброса» справа',
      action: {
        target3D: 'Rectangle115',
      },
      startTime: timeDiff + 420.6,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle114',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 420.7,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 421,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 421.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 422,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 422.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 423,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 423.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 424,
    },



    ////--------------------------------26---------------------------------------- 
    {
      scenarioText: 'Мастер печи по рации сообщает о следующих операциях',
      startTime: timeDiff + 425,
    },
    {
      text: 'Делаем 0,3кг',
      sender: 'Мастер печи',
      audio: 'tts-vo31',
      startTime: timeDiff + 425.1,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 428,
      human: true,
    },
    {
      text: 'Принимаю, делаю 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo32',
      startTime: timeDiff + 429,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 433,
    },
    //--------------------------------27----------------------------------------  // Газовщик проворачивал клапан 6 раз с интервалом.
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,3кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 433.1,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 435.2,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 436,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 437,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 438,
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
            { name: 'VNK3_status_1', color: '#43A3EF' },
            { name: 'VNK2_status_1', color: '#ada3b0' },
            { name: 'VNK1_status_1', color: '#ada3b0' },

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
      startTime: timeDiff + 438.1,
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
      startTime: timeDiff + 439,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 440,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 441,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 440,
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
      startTime: timeDiff + 443,
    },
    ////--------------------------------28---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 444,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 444.1,
      human: true,
    },
    {
      text: 'На фурмах 0,3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo33',
      startTime: timeDiff + 445,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 449,
    },
    {
      text: 'Закрывайте отсечной.',
      sender: 'Мастер печи',
      audio: 'tts-vo34',
      startTime: timeDiff + 451,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 451.1,
      human: true,
    },
    {
      text: 'Понятно, Артём Викторович – закрывай отсечной.',
      sender: 'Газовщик',
      audio: 'tts-vo35',
      startTime: timeDiff + 452.5,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 457,
    },
    {
      text: 'Понял, закрываю отсечной клапан.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo36',
      startTime: timeDiff + 458,
    },
    ////--------------------------------29---------------------------------------- 
    {
      text: 'Отсечной клапан закрывыается.',
      sender: 'Система',
      startTime: timeDiff + 469,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 471.5,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#06DA06' },
          ]
        }
      },
      startTime: timeDiff + 472,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 472.5,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#06DA06' },
          ]
        }
      },
      startTime: timeDiff + 473,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#BD0606' },
          ]
        }
      },
      startTime: timeDiff + 473.5,
    },

    {
      text: 'Отсечной клапан закрыт.',
      sender: 'Система',
      audio: 'tts-33',
      startTime: timeDiff + 474,
    },
    ////--------------------------------30---------------------------------------- \
    {
      scenarioText: 'Открыть сбросной клапан 723',
      sender: 'Система',
      audio: 'tts-34',
      startTime: timeDiff + 477,
    },
    {
      action: {
        target3D: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44',
        rotation: { y: -0.785 },
      },
      duration: 0.3,
      startTime: timeDiff + 480,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_017',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 480.5,
    },
    {
      action: {
        target3D: 'Lamp_Green_021',
        material: 'Unic_Lamp_Green_On'
      },
      startTime: timeDiff + 481,
    },
    {
      action: {
        target3D: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44',
        rotation: { y: 0 },
      },
      duration: 0.3,
      startTime: timeDiff + 481.5,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_723_t', color: '#00DA01' }, // TODO сделать верхнюю часть клапана зелёной, перерисовать клапан
          ]
        }
      },
      startTime: timeDiff + 481.6,
    },


    ////--------------------------------31---------------------------------------- 
    {
      text: 'Третью закрыли 1.1 по второму толкателю.',
      sender: 'Мастер печи',
      audio: 'tts-vo37',
      startTime: timeDiff + 483,
    },
    {
      scenarioText: 'Сообщить по рации в «Лётки №3».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 488,
    },
    {
      action: {
        target3D: 'ButtonHightlight_006',
      },
      startTime: timeDiff + 490.5,
      human: true,
    },
    {
      text: '1.1 второй толкатель.',
      sender: 'Газовщик',
      audio: 'tts-vo38',
      startTime: timeDiff + 491.5,
    },
    {
      action: {
        target3D: 'Lamp_006',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 495,
    },


    ////--------------------------------32---------------------------------------- 
    {
      scenarioText: 'Сообщить по телефону в "Дисп.комб".',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 496,
    },
    {
      action: {
        target3D: 'PhoneButton012',
      },
      startTime: timeDiff + 497,
      human: true,
    },
    {
      text: 'Слева 1.1 по второму от толкателя.',
      sender: 'Газовщик',
      audio: 'tts-vo39',
      startTime: timeDiff + 498,
    },
    {
      text: 'Хорошо, принял.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo40',
      startTime: timeDiff + 503,
    },
    {
      text: 'Справа пока не сдавай.',
      sender: 'Газовщик',
      audio: 'tts-vo41',
      startTime: timeDiff + 506,
    },
    ////--------------------------------33---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Лётки №3».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 510,
    },
    {
      action: {
        target3D: 'ButtonHightlight_006',
      },
      startTime: timeDiff + 510.5,
      human: true,
    },
    {
      text: 'Третья лётка, отдавайте ковши.',
      sender: 'Газовщик',
      audio: 'tts-vo42',
      startTime: timeDiff + 511.5,
    },
    {
      action: {
        target3D: 'Lamp_006',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 516,
    },

    ////--------------------------------34---------------------------------------- 
    {
      text: 'Отсечной закрыт.',
      sender: 'Мастер печи',
      audio: 'tts-vo43',
      startTime: timeDiff + 518,
    },
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 520,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 522.1,
      human: true,
    },
    {
      text: 'Отсечной закрыт, на фурмах 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo44',
      startTime: timeDiff + 523,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 530, // TODO Слишком большой перерыв
    },
    {
      text: 'Делаем 0,2 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo45',
      startTime: timeDiff + 531,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 531.1,
      human: true,
    },
    {
      text: 'Принял, делаю 0,2.',
      sender: 'Газовщик',
      audio: 'tts-vo46',
      startTime: timeDiff + 532,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 536,
    },

    ////--------------------------------35---------------------------------------- 
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,2кг.',
      audio: 'tts-24',
      sender: 'Система',
      startTime: timeDiff + 537,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 539.2,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 540,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 540.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 541,
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
      startTime: timeDiff + 541.1,
    },
    ////--------------------------------36---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 542,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 542.1,
      human: true,
    },
    {
      text: 'На фурмах 0,2.',
      sender: 'Газовщик',
      audio: 'tts-vo47',
      startTime: timeDiff + 543,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 547,
    },
    {
      text: 'Делаем 0.',
      sender: 'Мастер печи',
      audio: 'tts-vo48',
      startTime: timeDiff + 549,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 549.1,
      human: true,
    },
    {
      text: 'Понял, делаю 0.',
      sender: 'Газовщик',
      audio: 'tts-vo49',
      startTime: timeDiff + 550,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 554,
    },

    ////--------------------------------37---------------------------------------- 
    {
      scenarioText: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0кг.',
      audio: 'tts-24',
      sender: 'Система',
      startTime: timeDiff + 554.1,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 554.2,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 555,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 555.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 556,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_020',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 555.6,
    },
    {
      action: {
        target3D: 'Lamp_Green_024',
        material: 'Unic_Lamp_Green_On'
      },
      startTime: timeDiff + 555.7,
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
      startTime: timeDiff + 556.2,
    },
    {
      text: 'Прекращение циркуляции кокса.',
      sender: 'Система',
      startTime: timeDiff + 557,
    },
    {
      action: {
        target3D: 'Display_TV002',
        material: 'media/images/monitors/Kamera-nablyudeniya.jpg' //todo 
      },
      startTime: timeDiff + 557.1,
    },
    {
      action: {
        target3D: 'Display_flat006',
        material: 'media/images/monitors/Kamera-nablyudeniya.jpg' //todo 
      },
      startTime: timeDiff + 557.2,
    },

    {
      text: 'Клапан «СНОРТ» полностью открыт.',
      sender: 'Система',
      startTime: timeDiff + 558,
    },
    {
      text: 'Прекращение дутья.',
      sender: 'Система',
      startTime: timeDiff + 559,
    },
    ////--------------------------------38---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 560,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 560.1,
      human: true,
    },
    {
      text: '«СНОРТ» раскручен полностью. На фурмах 0.',
      sender: 'Газовщик',
      audio: 'tts-vo50',
      startTime: timeDiff + 561,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 565,
    },
    {
      text: 'Закрывайте шибера.',
      sender: 'Мастер печи',
      audio: 'tts-vo51',
      startTime: timeDiff + 566,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 566.1,
      human: true,
    },
    {
      text: 'Закрываю шибера.',
      sender: 'Газовщик',
      audio: 'tts-vo52',
      startTime: timeDiff + 567,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 570,
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
      startTime: timeDiff + 570.1,
    },
    {
      scenarioText: 'Перевести ВНК №3 на ручной режим.',
      audio: 'tts-38',
      sender: 'Система',
      startTime: timeDiff + 571,
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
      startTime: timeDiff + 574,
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
      startTime: timeDiff + 574.2,
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
      startTime: timeDiff + 574.4,
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
      startTime: timeDiff + 574.6,
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
      startTime: timeDiff + 574.8,
      human: true,
    },
    {
      text: 'Перевести клапан 318 на ручной режим.',
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 575,
      human: true,
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
      startTime: timeDiff + 575.1,
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
      startTime: timeDiff + 575.2,
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
      startTime: timeDiff + 575.4,
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
      startTime: timeDiff + 575.6,
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
      startTime: timeDiff + 575.8,
      human: true,
    },
    {
      text: 'Перевести клапан 319 на ручной режим.',
      sender: 'Система',
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 576,
      human: true,
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
      startTime: timeDiff + 576.1,
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
      startTime: timeDiff + 576.2,
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
      startTime: timeDiff + 576.4,
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
      startTime: timeDiff + 576.6,
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
      startTime: timeDiff + 576.8,
      human: true,
    },
    ////--------------------------------40---------------------------------------- 
    {
      scenarioText: 'Открыть клапан 310 для сброса давления.',
      sender: 'Система',
      audio: 'tts-39',
      startTime: timeDiff + 577,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 577.1,
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


          ]
        },
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  «Открыть»
        ]
      },
      startTime: timeDiff + 580,
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
      startTime: timeDiff + 581,
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
      startTime: timeDiff + 581.2,
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
      startTime: timeDiff + 582,
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
      startTime: timeDiff + 583,
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
      startTime: timeDiff + 584,
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
      startTime: timeDiff + 585,
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
      startTime: timeDiff + 586,
    },


    ////--------------------------------41---------------------------------------- 318
    {
      scenarioText: 'Закрыть клапан 318.',
      sender: 'Система',
      audio: 'tts-40',
      startTime: timeDiff + 586.2,
    },
    {
      action: {
        target2D: 'close_w1',
        helper2D: [
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 83.80, y: 89.4, w: 8.6, h: 2.6, id: 'open_vn' },   //  win 1
        ]
      },
      startTime: timeDiff + 586.3,
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
      startTime: timeDiff + 589.4,
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
      startTime: timeDiff + 589.6,
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
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 589.8,
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
      startTime: timeDiff + 590.3,
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
      startTime: timeDiff + 591,
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
      startTime: timeDiff + 592,
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
      startTime: timeDiff + 593,
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
      startTime: timeDiff + 593.2,
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
      startTime: timeDiff + 593.4,
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
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 593.6,
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
      startTime: timeDiff + 594.3,
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
      startTime: timeDiff + 595,
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
      startTime: timeDiff + 596,
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
      startTime: timeDiff + 597,
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
      startTime: timeDiff + 597.2,
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
      startTime: timeDiff + 597.4,
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
          { x: 83.80, y: 78.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' }, //  win 1 //  СТОП
          { x: 91.30, y: 63.9, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 88.2, y: 75.8, w: 4.0, h: 2.6, id: 'open_vn' },   //  win 1  Закрыть
        ]
      },
      startTime: timeDiff + 597.6,
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
      startTime: timeDiff + 598.3,
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
      startTime: timeDiff + 599,
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
      startTime: timeDiff + 600,
    },
    ////--------------------------------клапан 318----------------------------------------Закрыт. Закрыт в закрыт-------------------------------    //  2

    ////--------------------------------42---------------------------------------- 319
    {
      scenarioText: 'Закрыть клапан 319.',
      sender: 'Система',
      audio: 'tts-41',
      startTime: timeDiff + 601,
    },

    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 601.1,
      human: true,
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
          { x: 82.90, y: 45.2, w: 0, h: 0, id: 'win_posle_1_stop_btn' },
          { x: 82.90, y: 45.2, w: 1.5, h: 2.0, id: 'close_w1' },
          { x: 79.80, y: 57.2, w: 4.0, h: 2.6, id: 'open_vn' },   //  клапан 319 //  win 1  //  "Закрыть"
        ]
      },
      startTime: timeDiff + 604.4,
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
      startTime: timeDiff + 604.6,
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
      startTime: timeDiff + 604.8,
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
      startTime: timeDiff + 605.8,
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
      startTime: timeDiff + 606.8,
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
      startTime: timeDiff + 607.8,
    },
    ////--------------------------------43---------------------------------------- 310
    {
      scenarioText: 'Закрыть клапан 310.',
      sender: 'Система',
      audio: 'tts-42',
      startTime: timeDiff + 608,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 608.1,
      human: true,
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
      startTime: timeDiff + 609.5,
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
      startTime: timeDiff + 609.6,
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
      startTime: timeDiff + 609.8,
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
      startTime: timeDiff + 610.8,
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
      startTime: timeDiff + 611.8,
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
      startTime: timeDiff + 612.8,
    },

    ////--------------------------------44---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 613,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 613.1,
      human: true,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 615,
      human: true,
    },
    {
      text: 'Шибера закрыты.',
      sender: 'Газовщик',
      audio: 'tts-vo53',
      startTime: timeDiff + 616,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 619,
    },
    {
      text: 'Берём печь на тягу.',
      sender: 'Мастер печи',
      audio: 'tts-vo54',
      startTime: timeDiff + 621,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 621.1,
      human: true,
    },
    {
      text: 'Выполняю, берём печь на тягу.',
      sender: 'Газовщик',
      audio: 'tts-vo55',
      startTime: timeDiff + 622,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 624,
    },

    ////--------------------------------45---------------------------------------- 
    {
      scenarioText: 'Перевести на дистанцию клапан тяги 022.',
      sender: 'Система',
      audio: 'tts-43',
      startTime: timeDiff + 625,
    },
    {
      action: {
        target3D: 'kl022',
        rotation: { y: 6.283185307179586 },
      },
      duration: 0.3,
      startTime: timeDiff + 626,
      human: true,
    },
    ////--------------------------------46---------------------------------------- 
    {
      scenarioText: 'Открыть клапан тяги 022 на «Общей схеме ВНК».',
      sender: 'Система',
      startTime: timeDiff + 627,
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
      startTime: timeDiff + 627.1,
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
      startTime: timeDiff + 627.2,
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
          { x: 87.2, y: 40.8, w: 8.6, h: 2.6, id: 'win_posle_1_stop_btn' },
        ]
      },
      startTime: timeDiff + 627.3,
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
      startTime: timeDiff + 628,
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
      startTime: timeDiff + 629,
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
      startTime: timeDiff + 630,
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
      startTime: timeDiff + 631,
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
      startTime: timeDiff + 631.1,
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
      startTime: timeDiff + 631.2,
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
      startTime: timeDiff + 631.3,
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
      startTime: timeDiff + 632,
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
      startTime: timeDiff + 633,
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
      startTime: timeDiff + 634,
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
      startTime: timeDiff + 635,
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
      startTime: timeDiff + 635.1,
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
      startTime: timeDiff + 635.2,
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
      startTime: timeDiff + 635.3,
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
      startTime: timeDiff + 636,
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
      startTime: timeDiff + 637,
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
      startTime: timeDiff + 638,
    },
    {
      text: 'Клапан тяги открыт',
      sender: 'Система',
      audio: 'tts-44',
      startTime: timeDiff + 639,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 639.1,
      human: true,
    },

    ////--------------------------------47---------------------------------------- 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 641.4,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 643,
      human: true,
    },
    {
      text: 'Печь на тяге.',
      sender: 'Газовщик',
      audio: 'tts-vo56',
      startTime: timeDiff + 644,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 647,
    },
    {
      text: 'Хорошо.',
      sender: 'Мастер печи',
      audio: 'tts-vo57',
      startTime: timeDiff + 648,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 648.1,
      human: true,
    },
    {
      text: 'Доменная печь №6 остановлена.',
      sender: 'Газовщик',
      audio: 'tts-vo58',
      startTime: timeDiff + 649,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 652,
    },
    {
      text: 'Доменная печь №6 остановлена.',
      sender: 'Система',
      startTime: timeDiff + 653,
    },


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
      scenarioText: 'Взять в руку трубку и нажать на кнопки с надписью: «Газовый цех», «Насосный цех», «Кислородный цех», «ЭВС».',
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
    { name: 'vnk_3', color: '#0033FF' },
    { name: 'vnk_1', color: '#B50000' },
    { name: 'kl_0332', color: '#00FF00' },
    { name: 'kl_0331', color: '#FF1E00' },
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
    { name: 'VNK3_status_1_fon', color: '#43A3EF' },
    { name: 'VNK1_status_1_fon', color: '#BD0102' },
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