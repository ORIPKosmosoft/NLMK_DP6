/*                 TODO
---------------------------------------------------------------
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
      { name: 'ButtonHightlight_046', changeMeshmaterial: { meshName: 'Lamp_034', material: 'DonorLamp_on' }, position: 7, realName: 'Кнопка ответа Лит. Фур. Под.' },
      { name: 'ButtonHightlight_006', changeMeshmaterial: { meshName: 'Lamp_006', material: 'DonorLamp_on' }, position: 7, realName: 'Кнопка ответа Лётка №3' },
      { name: 'ButtonHightlight_', position: 7, realName: 'Кнопка ответа' },
      { name: 'Telephone_highlight2', realName: 'Телефонная трубка', position: 6 },
      // Sergey
      // BZU
      { name: '45000ed8-14e2-4c39-a909-6d07050dac94', realName: 'Кнопка Контрольная точка P1', position: 8, },
      { name: '737355fd-9bf2-4c03-8f0f-b838585143d2', realName: 'Кнопка Контрольная точка P2', position: 8, },
      { name: 'c148f4e6-c6e9-4ecc-b6a8-ab22ac6bea77', realName: 'Кнопка Положение на колошнике', position: 8, },
      { name: 'd682e192-5c28-41a3-bc3b-e16b17d03989', realName: 'Кнопка обойти остановку конвейера', position: 8, },
      { name: '19bf47ba-61cd-46e0-b36d-cdefd2e0e146', realName: 'Кнопка следующая порция', position: 8, },
      { name: '53ce370c-847a-41d5-ad4b-8acfa136f7fd', realName: 'Переключатель Выбор режима', position: 8, },
      { name: '3d6bbe77-1dea-4e8a-8dd8-238707bd6611', realName: 'Кнопка Автоматический пуск', position: 8, },
      { name: 'ca347a9f-4ba3-427f-a670-87edac8c1b6f', realName: 'Кнопка Автоматический стоп', position: 8, },
      { name: '5d02a80d-8e26-48e2-ac5b-fdb478c3df2d', realName: 'Переключатель Спиральная загрузка', position: 8, },
      { name: '4c0b40f6-578a-4afd-a11c-03b53e51a09b', realName: 'Переключатель Тип загрузки', position: 8, },
      { name: '6ddce191-0d83-43c2-af7e-ebdaddf5ab37', realName: 'Переключатель Выбор бункера', position: 8, },
      { name: '3566ab2b-db01-4331-a864-ec6e62b19671', realName: 'Переключатель Вторичное наполнение 1', position: 8, },
      { name: 'dc614da4-a3ff-42d0-8699-7b1ecfa6429a', realName: 'Переключатель Вторичное наполнение 2', position: 8, },
      { name: 'e1811a26-22eb-4aa4-b105-82eebe3d1f50', realName: 'Кнопка Клапан сброса Открыт (левый)', position: 8, },
      { name: '4ef3ebb3-38b4-417b-b53c-29728435c435', realName: 'Кнопка Клапан сброса Закрыт (левый)', position: 8, },
      { name: 'a462d7c9-9f96-4879-b73d-571c7e9a497b', realName: 'Кнопка Клапан сброса Открыт (правый)', position: 8, },
      { name: 'f75b7231-1294-491d-ad84-ba29d2876708', realName: 'Кнопка Клапан сброса Закрыт (правый)', position: 8, },
      { name: '5563223f-5e55-4b19-b6cf-b322c9d378fe', realName: 'Кнопка Клапан первичного выравнивания Открыт (левый)', position: 8, },
      { name: 'ed264d39-16f2-4c05-bb44-1eaca334f770', realName: 'Кнопка Клапан первичного выравнивания Закрыт (левый)', position: 8, },
      { name: 'f8232b0b-58f5-4c5e-958d-17a8fc2e7c58', realName: 'Кнопка Клапан первичного выравнивания Открыт (правый)', position: 8, },
      { name: 'ac36637f-ce86-4d3a-bc27-969e9d7b0be9', realName: 'Кнопка Клапан первичного выравнивания Закрыт (правый)', position: 8, },
      { name: 'e43f8294-cd34-476b-af02-3522a451d978', realName: 'Кнопка Клапан вторичного выравнивания Открыт (левый)', position: 8, },
      { name: '339f23fd-8402-4158-9370-cf5ff8547aba', realName: 'Кнопка Клапан вторичного выравнивания Закрыт (левый)', position: 8, },
      { name: 'ee652b8c-bb08-49a6-b6c9-23865c084520', realName: 'Кнопка Клапан вторичного выравнивания Открыт (правый)', position: 8, },
      { name: '2cda85aa-dac2-42ca-9881-cf907eac7fe7', realName: 'Кнопка Клапан вторичного выравнивания Закрыт (правый)', position: 8, },
      { name: 'f5aab9db-f681-4523-acf0-9ed088b3f5f4', realName: 'Кнопка Нижний шихтовый затвор Открыт (левый)', position: 8, },
      { name: '1ce1d776-154a-4831-98f9-a3a028aae415', realName: 'Кнопка Нижний шихтовый затвор Закрыт (левый)', position: 8, },
      { name: '5aa30e1b-0ce0-433e-a450-a55f8f35ec21', realName: 'Кнопка Нижний шихтовый затвор Открыт (правый)', position: 8, },
      { name: '6ec942f8-f3be-417c-9887-0d7a128ef755', realName: 'Кнопка Нижний шихтовый затвор Закрыт (правый)', position: 8, },
      { name: '28c3b610-7ef6-4bef-97a4-45aecfddf41d', realName: 'Кнопка Нижний газоуплотнительный клапан Открыт (левый)', position: 8, },
      { name: '6795a23a-d2f7-4e56-a2a4-9e6c7d723013', realName: 'Кнопка Нижний газоуплотнительный клапан Закрыт (левый)', position: 8, },
      { name: '0f9728b6-3aae-4637-a4ba-d1a9d6fe2d50', realName: 'Кнопка Нижний газоуплотнительный клапан Открыт (правый)', position: 8, },
      { name: '3ab702cb-b75b-4239-a546-8fbd27a38d20', realName: 'Кнопка Нижний газоуплотнительный клапан Закрыт (правый)', position: 8, },
      { name: '19152be3-71fb-49f3-b81d-9bc82b13bc60', realName: 'Кнопка Приостановить выгрузку бункера 1 и 2', position: 8, },
      { name: '76185945-6ea9-4065-b3f7-43b5bf193f56', realName: 'Кнопка БЗУ не готов', position: 8, },
      { name: '4f97aa5f-e54f-4d8f-ad02-1486440c12c3', realName: 'Кнопка Остановить конвейер', position: 8, },
      { name: '39eae169-9777-45dd-ad48-17af39e3f1f7', realName: 'Кнопка Желоб распределитель Бункер 1', position: 8, },
      { name: 'baf28dd2-a5eb-4a65-a926-d6be2cba5b87', realName: 'Кнопка Желоб распределитель среднее', position: 8, },
      { name: '56ee3c7e-2a19-40cb-9583-234429e9974e', realName: 'Кнопка Желоб распределитель Бункер 2', position: 8, },
      { name: 'b4cf458a-2734-40d5-ae10-c1ae99e9bdf5', realName: 'Кнопка Приостановить подачу материала', position: 8, },
      { name: '150106eb-69af-4b04-9027-f7830b1689af', realName: 'Кнопка Верхний газоуплотнительный клапан Открыт (левый)', position: 8, },
      { name: '12da4e03-0b8d-4b99-bab3-894030abe51a', realName: 'Кнопка Верхний газоуплотнительный клапан Закрыт (левый)', position: 8, },
      { name: '79785066-2885-4b81-8cae-7d8fdbe0b965', realName: 'Кнопка Верхний газоуплотнительный клапан Открыт (правый)', position: 8, },
      { name: '16ec5920-4a18-48b6-860d-89fd70c039b7', realName: 'Кнопка Верхний газоуплотнительный клапан Закрыт (правый)', position: 8, },
      { name: '5900ed59-3931-437d-aa6b-3859e136ce4f', realName: 'Кнопка Бункер 1 переполнен', position: 8, },
      { name: 'ccb3a86a-37b3-433a-a0a3-6edd016a5b01', realName: 'Кнопка Кокс 1', position: 8, },
      { name: '4d1de7e7-1f2c-4b05-876b-3c8c07363a9e', realName: 'Кнопка Агломерат 1', position: 8, },
      { name: '10e77d15-f413-4cd9-91ff-b9feabef3fca', realName: 'Кнопка Бункер 2 переполнен', position: 8, },
      { name: 'dc86f414-037f-43f1-a455-dd04d8312ba3', realName: 'Кнопка Кокс 2', position: 8, },
      { name: '54116a57-7c08-4cc6-9ab4-4d55636e5354', realName: 'Кнопка Агломерат 2', position: 8, },
      { name: '14c69ea4-d15b-4210-bbc7-ff994858eb46', realName: 'Кнопка Гидравлика Сброс тревоги', position: 8, },
      { name: 'b968ba96-4d8f-44f4-acef-4bfef8978670', realName: 'Кнопка Гидравлика Дистанц', position: 8, },
      { name: 'c0653e32-651d-4fcb-ac66-1a4e70a8d871', realName: 'Кнопка Гидравлика Местный', position: 8, },
      { name: 'ba315587-572c-4914-839c-06588dfb55aa', realName: 'Кнопка Гидравлика Автомат вкл', position: 8, },
      { name: 'eb16f204-87a3-440a-b0a5-d24444950e69', realName: 'Кнопка Гидравлика Автомат выкл', position: 8, },
      { name: '9c96f917-0238-4293-9e19-4c3d696d632a', realName: 'Кнопка Охлаждение Сброс тревоги', position: 8, },
      { name: 'f3ed9e35-90f2-4a34-9555-6a472ae68707', realName: 'Кнопка Охлаждение Дистанц', position: 8, },
      { name: '2472738e-77b9-4d01-ac1c-1b8dd38dcac9', realName: 'Кнопка Охлаждение Местный', position: 8, },
      { name: '2ebe0893-f4da-4241-bf7f-3b42120e9906', realName: 'Кнопка Охлаждение Автомат вкл', position: 8, },
      { name: '7027cead-363f-4967-807d-7991d37895c6', realName: 'Кнопка Охлаждение Автомат выкл', position: 8, },
      { name: '6d0590bd-c88a-4a64-97a9-6e953a94c12b', realName: 'Кнопка Смазка Сброс тревоги', position: 8, },
      { name: '8e28a17e-9949-4f01-9dc5-0ccd47533059', realName: 'Кнопка Смазка Дистанц', position: 8, },
      { name: 'ea8c0ff1-2e20-43f4-b387-d31a39091b12', realName: 'Кнопка Смазка Местный', position: 8, },
      { name: '23b03ff6-10fd-45f7-8301-7c418754e860', realName: 'Кнопка Смазка Автомат вкл', position: 8, },
      { name: 'e0df91cc-c741-44dc-b791-f09928cc72e5', realName: 'Кнопка Смазка Автомат выкл', position: 8, },
      { name: '75bf4393-8c70-4953-8187-36c0c785c233', realName: 'Кнопка Клапан авариного охлаждения Открыт', position: 8, },
      { name: '8a6a2ebf-034c-467d-aa75-93fb829a25f6', realName: 'Кнопка Клапан авариного охлаждения Закрыт', position: 8, },
      { name: '359a37d2-d184-4fc1-b32a-692831980d88', realName: 'Кнопка Сброс сигнала тревоги', position: 8, },
      { name: '31b6499f-69f9-4709-abd1-c69f79b56307', realName: 'Кнопка Проверка ламп', position: 8, },
      { name: '30ad115a-f46c-4c47-80eb-d73e87e27326', realName: 'Кнопка Механич. Уровнемер Ожидание', position: 8, },
      { name: '10dee587-2039-4288-b05f-213dc1bef870', realName: 'Кнопка Механич. Уровнемер Работа', position: 8, },
      { name: '9c84c3c4-e56b-4c5d-ab4d-dd1e3dd93833', realName: 'Переключатель Выбор уровнемера', position: 8, },
      { name: '806c2f1e-e089-49a0-92b2-a43f6290cc4b', realName: 'Кнопка Вращение Влево быстро', position: 8, },
      { name: '79ef01c3-4c94-4013-9e4e-ce329c6f08a4', realName: 'Кнопка Вращение Влево медленно', position: 8, },
      { name: '0258569d-2974-4da7-8c7e-b98bcd9a969a', realName: 'Кнопка Вращение Стоп', position: 8, },
      { name: '1890a3ba-d194-4a46-8ff2-8078f2b98a24', realName: 'Кнопка Вращение Вправо медленно', position: 8, },
      { name: 'b2dc1bc7-37a6-4c87-8a61-bd2636863890', realName: 'Кнопка Вращение Вправо быстро', position: 8, },
      { name: '4ac0e629-fa29-40f2-b69e-32eb7ac36f26', realName: 'Кнопка Выбор угла поворота 0⁰', position: 8, },
      { name: '2ae11829-a8c0-4d4f-acea-5f3e47490efc', realName: 'Кнопка Выбор угла поворота 60⁰', position: 8, },
      { name: '5baa9689-d188-41fa-af7d-de38828166a0', realName: 'Кнопка Выбор угла поворота 120⁰', position: 8, },
      { name: 'e4f3cc56-aeb3-4f07-b3b0-6166955cb343', realName: 'Кнопка Выбор угла поворота 180⁰', position: 8, },
      { name: '059ddd43-53ba-49fe-9d44-738dd28c9c85', realName: 'Кнопка Выбор угла поворота 240⁰', position: 8, },
      { name: '62d4b386-2d48-41c3-94b8-2234affeb385', realName: 'Кнопка Выбор угла поворота 300⁰', position: 8, },
      { name: '5007bde1-510e-43ab-9451-aa80ea873560', realName: 'Кнопка Выбор угла поворота <1', position: 8, },
      { name: 'cd9233ab-aeb3-4855-a444-5eb5ff1f58c4', realName: 'Кнопка Выбор угла поворота <2', position: 8, },
      { name: 'c1e4b6a8-1c9b-4866-9b93-ee439dd2ee6c', realName: 'Кнопка Выбор угла поворота <3', position: 8, },
      { name: 'c667755d-47d0-46aa-9cd6-8dbd623555b3', realName: 'Кнопка Выбор угла поворота <4', position: 8, },
      { name: '9e4d2662-b069-4119-9ed1-c0e84905eee5', realName: 'Кнопка Выбор угла поворота <5', position: 8, },
      { name: '65268e91-6a39-4411-88b6-67afe9f795d4', realName: 'Кнопка Выбор угла поворота <6', position: 8, },
      { name: '1564436c-c43d-49d8-82c4-8ab41a6747f3', realName: 'Кнопка Выбор угла поворота <7', position: 8, },
      { name: '0db3fee6-f875-48a3-ac29-6f3cb24f987d', realName: 'Кнопка Выбор угла поворота <8', position: 8, },
      { name: 'a196aaf8-bdef-4f49-88be-3f5f336ef82e', realName: 'Кнопка Выбор угла поворота <9', position: 8, },
      { name: 'a17754ac-a4f5-4314-9e0b-864d0eeb1a15', realName: 'Кнопка Выбор угла поворота <10', position: 8, },
      { name: '8584489c-e8d8-4e46-a24e-b0cc1f32a7c0', realName: 'Кнопка Выбор угла поворота <11', position: 8, },

      // DP
      { name: '4fd99b46-00a5-477a-a673-b0c50394f90b', realName: 'Атмосферный клапан 1 защитная крышка на Открытие', position: 9, },
      { name: '799d06de-acfd-4ce2-b855-87c6938c6857', realName: 'Атмосферный клапан 1 защитная крышка на Закрытие', position: 9, },
      { name: '5fa4d159-9a94-429d-a3cd-09cf37d556a8', realName: 'Атмосферный клапан 2 защитная крышка на Открытие', position: 9, },
      { name: '2ed58de5-5012-48c2-957e-5322d5bc05f5', realName: 'Атмосферный клапан 2 защитная крышка на Закрытие', position: 9, },
      { name: '9557f45a-c75e-425d-9561-bab37775c57a', realName: 'Атмосферный клапан 3 защитная крышка на Открытие', position: 9, },
      { name: 'd2ff5420-d6b9-4778-8971-9f66d654bd73', realName: 'Атмосферный клапан 3 защитная крышка на Закрытие', position: 9, },
      { name: '46dd9fce-1386-4ad0-94c9-de4cda5d1503', realName: 'Переключатель режима работы атмосферного клапана 1', position: 9, },
      { name: '31f7b14d-862e-4e43-993a-60b6539a2771', realName: 'Переключатель режима работы атмосферного клапана 2', position: 9, },
      { name: '6f63b513-516b-4dac-b482-9b8828e0a8b0', realName: 'Переключатель режима работы атмосферного клапана 3', position: 9, },
      { name: '45232239-cfcf-4de6-ab80-663e0c750915', realName: 'Переключатель открытия-закрытия атмосферного клапана 1', position: 9, },
      { name: 'bdf3b4dc-bdda-4ea7-a09f-6e7be5bcaaf7', realName: 'Переключатель открытия-закрытия атмосферного клапана 2', position: 9, },
      { name: '1be1d999-92ac-4d4c-8896-f78a1c5cd350', realName: 'Переключатель открытия-закрытия атмосферного клапана 3', position: 9, },
      { name: '21f2238a-776b-434a-9380-c96e564464a2', realName: 'Переключатель выбора режима управления КГ', position: 9, },
      { name: 'eaa4b36d-fa7d-4ea6-b928-fd91ee72d79d', realName: 'Переключатель режима управления клапана СНОРТ', position: 9, },
      { name: '128f49df-9d0a-4b03-b177-dfa710831d6f', realName: 'Переключатель открытия-закрытия клапана СНОРТ', position: 9, },
      { name: '07ed087c-0c84-47ef-a9c9-e7b170b65c60', realName: 'Переключатель Природный газ Клапан 721 выбор режима управления', position: 9, },
      { name: 'fbbff942-28f0-4bc3-bf37-cd580e31c437', realName: 'Переключатель Природный газ Разрешение подачи газа', position: 9, },
      { name: 'b6cc151c-004a-4e3f-bb7b-921c4300993c', realName: 'Переключатель Клапан 721, дистанционное управления', position: 9, },
      { name: '96378261-ad8d-4410-ad46-36a776a8b7b2', realName: 'Переключатель Клапан 722, дистанционное управления', position: 9, },
      { name: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44', realName: 'Переключатель Клапан 723, дистанционное управления', position: 9, },
      { name: 'a0b0407b-8791-495a-a4c2-45b7d0e840e7', realName: 'Переключатель Клапан 725, дистанционное управления', position: 9, },
      { name: '70a2bac8-9eac-41b8-b240-920864407738', realName: 'Переключатель Клапан 726, дистанционное управления', position: 9, },
      { name: '2a9b0311-8586-4069-9e83-c6eb2e942723', realName: 'Кнопка ГУБТ, аварийной остановки', position: 9, },
      { name: '5cbe76b7-8436-49e4-a824-8ebea2ccd253', realName: 'Кнопка ПУТ, аварийной остановки', position: 9, },
      { name: 'aad627dd-1ef6-4417-b4f9-3c8821f7bab4', realName: 'Переключатель режима управления Дроссельного клапана', position: 9, },
      { name: 'be3dc7a2-4656-473b-ab0c-66c27fe56b34', realName: 'Переключатель открытия-закрытия Дроссельного клапана', position: 9, },
      { name: 'f6d934e8-12af-4fc1-b553-7b3eccaef38a', realName: 'Переключатель Предупредительная сигнализация', position: 9, },
      { name: 'fc3caa09-a4c4-42e0-a0b7-aec41de8d029', realName: 'Переключатель режима управления отсекающего Клапана М81', position: 9, },
      { name: 'e49a61a9-c96d-4647-af7a-00a8084d4317', realName: 'Переключатель режима управления отсекающего Клапана М85а', position: 9, },
      { name: 'a29653e9-dd41-42ce-b696-c9594072b2d7', realName: 'Переключатель режима управления отсекающего Клапана М85б', position: 9, },
      { name: '5feb9235-fe44-4b7a-a10f-e6fddaeee499', realName: 'Переключатель режима управления отсекающего Клапана М86а', position: 9, },
      { name: '385d0cb4-0ea4-4f57-885f-0104e27f870b', realName: 'Переключатель режима управления отсекающего Клапана М86б', position: 9, },
      { name: '39f72b02-3bf1-4671-ad6f-bfcabc1268cf', realName: 'Переключатель открытия-закрытия отсекающего Клапана М85а', position: 9, },
      { name: '71f99298-99cf-4f4a-8b07-be2a20fc3797', realName: 'Переключатель открытия-закрытия отсекающего Клапана М86а', position: 9, },
      { name: '2e3e60f2-fae8-4b91-baab-46175615e332', realName: 'Кнопка Стоп', position: 9, },
      { name: 'b47897cc-0844-40bd-aff0-74e584ddc00c', realName: 'Кнопка Стоп', position: 9, },
      { name: '920c009d-2058-4285-b46a-7a4da8c582ae', realName: 'Кнопка Закрыть', position: 9, },
      { name: '34691d5e-e3fd-4c5e-b00c-2c31a2538c75', realName: 'Кнопка Закрыть', position: 9, },
      { name: 'f8990119-f62d-47da-944e-4a95b95c702f', realName: 'Переключатель атмосферного клапана M83', position: 9, },
      { name: '4d6a2ac2-1a67-4439-a3c1-a1483b623cf7', realName: 'Переключатель атмосферного клапана M84', position: 9, },
      { name: '7d3c46bb-5c38-4aa5-82ad-769e01ae6268', realName: 'Переключатель транспортера винтового M38', position: 9, },
      { name: 'c8ce64bc-1c74-4241-9c72-36b07221de09', realName: 'Переключатель транспортера винтового M39', position: 9, },
      { name: 'c000e672-7d71-49b3-aab7-4921ee62b9fc', realName: 'Кнопка Пуск транспортера винтового М38', position: 9, },
      { name: '6459557a-10fc-4a71-ac7b-cb735a5a78e7', realName: 'Кнопка Стоп транспортера винтового М38', position: 9, },
      { name: '900b63ad-5d5d-4162-b826-8f69d121a0d9', realName: 'Кнопка Пуск транспортера винтового М39', position: 9, },
      { name: '1365f4c0-e875-48f4-a130-092862d56815', realName: 'Кнопка Стоп транспортера винтового М39', position: 9, },
      { name: 'a0b0407b-8791-495a-a4c2-45b7d0e840e7', realName: 'Переключатель Клапана 725, избиратель управления', position: 9, },
      { name: '70a2bac8-9eac-41b8-b240-920864407738', realName: 'Переключатель Клапана 726, избиратель управления', position: 9, },
      { name: 'e1b732e7-f99e-47b3-9c8c-6ffc1913109c', realName: 'Переключатель ГУБТ, работа разрешена', position: 9, },
      { name: 'downBtnFPrirGaza_highlight', realName: 'Кнопка F прир. газа регулятор, Меньше (вниз)', position: 9, },
      // BVNK
      { name: 'f5e8feab-47b0-4b76-b13b-9cc68810541e', realName: 'Регулятор Клапан 002', position: 3, },
      { name: '36f0e056-5b9c-43df-87aa-cd096c2de3f2', realName: 'Регулятор Клапан 001', position: 3, },
      { name: 'f9d3120f-62bb-4f94-a202-cc08824fb936', realName: 'Регулятор Клапан 001а', position: 3, },
      { name: '785c239f-f4d8-48a0-b458-cfa24cd07a4d', realName: 'Регулятор Клапан 310', position: 3, },
      { name: '26594e87-c127-4c89-a510-a2d63295ff9b', realName: 'Регулятор Клапан 311', position: 3, },
      { name: '1cffb758-ca41-4418-a99e-5ddcc19067a3', realName: 'Регулятор Клапан 312', position: 3, },
      { name: '93e3713f-b3fb-4500-8e64-934948235154', realName: 'Регулятор Клапан 313', position: 3, },
      { name: '5a853d84-b322-4b96-9797-d46b2d66de6a', realName: 'Регулятор Клапан 210', position: 3, },
      { name: 'c557fa15-8256-4bb2-9810-bf1b520b864b', realName: 'Регулятор Клапан 211', position: 3, },
      { name: '508bbb95-3bb5-471d-9fe2-b2b8cb453b19', realName: 'Регулятор Клапан 212', position: 3, },
      { name: 'b7f90004-97cc-4b38-9853-7507b76fa61f', realName: 'Регулятор Клапан 213', position: 3, },
      { name: '81a3fe6b-11fb-465b-846e-ebb04e7babd8', realName: 'Регулятор Клапан 110', position: 3, },
      { name: 'a3654a22-7d04-4b84-bc91-f996c67fca77', realName: 'Регулятор Клапан 111', position: 3, },
      { name: 'df9d4b44-59e6-4a11-9fba-4d664098d210', realName: 'Регулятор Клапан 112', position: 3, },
      { name: '7060f60f-849d-43cc-9904-dbf0588b79bf', realName: 'Регулятор Клапан 113', position: 3, },
      { name: 'ba8bad48-50eb-4074-bead-95ba0273eb82', realName: 'Регулятор Клапан 025', position: 3, },
      { name: 'bb05c72d-78ed-4e3f-8e40-aa055bf38e35', realName: 'Регулятор Клапан 020', position: 3, },
      { name: '2b8f222a-f580-4b2b-b9f2-c1bfadf9f115', realName: 'Регулятор Клапан 004', position: 3, },
      { name: 'd22a41e8-5eba-4d9d-a43c-b6b613c10cbf', realName: 'Регулятор Клапан 007', position: 3, },
      { name: '381e08c9-21d0-4819-9d0a-8a3631f2b8b0', realName: 'Регулятор Клапан 315', position: 3, },
      { name: 'd3f31b89-1e4b-4375-b9fb-9a045306d3b3', realName: 'Регулятор Клапан 316', position: 3, },
      { name: '62361a61-a279-4cb3-a29b-7bc25198c45c', realName: 'Регулятор Клапан 317', position: 3, },
      { name: 'e4c5a63c-022c-4261-b534-5b1b9655e258', realName: 'Регулятор Клапан 318', position: 3, },
      { name: 'c2f387b0-f008-40f6-a09a-01dbf490d72a', realName: 'Регулятор Клапан 215', position: 3, },
      { name: '0ca60018-84ff-4b6a-813e-8ba6339d03d9', realName: 'Регулятор Клапан 216', position: 3, },
      { name: '7a40bee0-c289-45cc-a0cb-33a1c23a33fb', realName: 'Регулятор Клапан 217', position: 3, },
      { name: 'dc13b7b2-bf89-4f59-89e0-8d52cc531f96', realName: 'Регулятор Клапан 218', position: 3, },
      { name: 'c3bc369e-0508-46e4-b833-adf5ee5876f7', realName: 'Регулятор Клапан 115', position: 3, },
      { name: '2ddd04b0-285c-42ee-a62a-084eb74d3d3a', realName: 'Регулятор Клапан 116', position: 3, },
      { name: '0e52b66a-7477-4370-a768-d63a4502eca9', realName: 'Регулятор Клапан 117', position: 3, },
      { name: 'a3472d88-de79-47be-a5bb-97b14b7205e3', realName: 'Регулятор Клапан 118', position: 3, },
      { name: '2b9bb91c-a562-4c74-b1bd-e40e950dbb41', realName: 'Регулятор Клапан 037', position: 3, },
      { name: '1ec28b66-a4f4-4753-94b4-fb798d258b8c', realName: 'Регулятор Клапан 038', position: 3, },
      { name: '03e8d64c-bfcd-43f4-827b-ee6900a13f3b', realName: 'Регулятор Клапан 029', position: 3, },
      { name: 'a050db92-712c-46a6-bb65-507f925caf43', realName: 'Регулятор Клапан 028', position: 3, },
      { name: '5123b95a-5b3b-4e39-a930-36a21f3b51c7', realName: 'Регулятор Клапан 318а', position: 3, },
      { name: 'ae292474-b786-4cc3-9209-6aff90ed248e', realName: 'Регулятор Клапан 319', position: 3, },
      { name: 'bafb22ea-5e7f-4a94-99d3-e5ce50175f83', realName: 'Регулятор Клапан 323', position: 3, },
      { name: 'c4d8ff33-1465-40da-8011-658ca23e6ea4', realName: 'Регулятор Клапан 324', position: 3, },
      { name: 'caad07f3-96df-43f7-bda4-12a7ed4bfb39', realName: 'Регулятор Клапан 218а', position: 3, },
      { name: '6a2e68a4-c4eb-4755-921e-672c63cea405', realName: 'Регулятор Клапан 219', position: 3, },
      { name: '57d4c44a-8ba4-43ec-a411-50c4231f7c0b', realName: 'Регулятор Клапан 223', position: 3, },
      { name: '73edee24-85a8-4a80-8370-7a96f8d697db', realName: 'Регулятор Клапан 224', position: 3, },
      { name: '54175684-7ffe-4764-abb1-587cb1014006', realName: 'Регулятор Клапан 118а', position: 3, },
      { name: '59aa1a7d-df47-415f-85fd-28e5d05ecc2b', realName: 'Регулятор Клапан 119', position: 3, },
      { name: 'd19fcab7-a388-439e-90d6-4c79d05eac87', realName: 'Регулятор Клапан 123', position: 3, },
      { name: '628f449b-2920-43ee-9a17-4a9e4d9439ef', realName: 'Регулятор Клапан 124', position: 3, },
      { name: '7822fd13-7df1-4d3e-aef4-eb11da234c6f', realName: 'Регулятор Клапан 030', position: 3, },
      { name: '88305f3d-4c33-4bdf-9908-4720d85328c5', realName: 'Регулятор Клапан 039', position: 3, },
      { name: 'd840530d-2406-4f3a-92ce-f8192d35de17', realName: 'Регулятор Клапан 048', position: 3, },
      { name: 'db4cb8c4-3623-418b-b377-5f37ed94c43f', realName: 'Регулятор Клапан 332', position: 3, },
      { name: 'd946acc7-7c81-4800-821e-3849487994a7', realName: 'Регулятор Клапан 334', position: 3, },
      { name: 'b91ddd1f-3e2d-4f3a-bebb-edf4fcf58838', realName: 'Регулятор Клапан 336а', position: 3, },
      { name: '66af0232-46df-4263-b4a4-d37fe48bb4f4', realName: 'Регулятор Клапан 232', position: 3, },
      { name: 'a971f049-55f8-48cc-aafa-d56ce1a158b9', realName: 'Регулятор Клапан 234', position: 3, },
      { name: '72728118-c240-495a-bd37-607f6eeec390', realName: 'Регулятор Клапан 236а', position: 3, },
      { name: '664fd0ea-f371-442c-a57e-5f0c08eac682', realName: 'Регулятор Клапан 132', position: 3, },
      { name: '0ef4bdc9-9c70-469f-86b6-469da0f831ea', realName: 'Регулятор Клапан 134', position: 3, },
      { name: '9085a856-b82c-45cf-a865-bff87e112ddb', realName: 'Регулятор Клапан 136а', position: 3, },
      { name: 'cb8f8612-56b8-4f3a-966c-526f52fa9497', realName: 'Регулятор Клапан 0501', position: 3, },
      { name: 'e1d1fa82-6c9c-4d6c-8368-b89f59c910ba', realName: 'Регулятор Клапан 0502', position: 3, },
      { name: 'e1216522-ac2f-48e4-83e5-d33a6bce6d72', realName: 'Регулятор Клапан 0311', position: 3, },
      { name: '04436889-0b23-4769-85c5-34b567bb3247', realName: 'Регулятор Клапан 0312', position: 3, },
      { name: '57b25528-88d5-4da5-bc53-758a6fbeb41f', realName: 'Регулятор Клапан 0313', position: 3, },
      { name: '0d0230f9-12fc-4b6b-b237-efb065b3b3c1', realName: 'Регулятор Клапан 036b', position: 3, },
      { name: 'ea0081c0-c200-44ca-b7b7-1f38dc60681e', realName: 'Регулятор Клапан 036v', position: 3, },
      { name: '25408591-8ddd-4b64-a7ad-499aaa995ae6', realName: 'Регулятор Клапан 022', position: 3, },
      { name: '8d7497bf-6a8b-4906-8a35-1dc986e6e655', realName: 'Регулятор Клапан 047', position: 3, },
      { name: '97bceffb-2eda-4bd0-9157-fd2cc2963bf2', realName: 'Регулятор Клапан 051', position: 3, },
      { name: 'eea67110-8514-4c07-856d-180ee0a13fae', realName: 'Регулятор Клапан 052', position: 3, },
      { name: '5a3b6f64-c86b-4968-aeb5-25a6e2258a55', realName: 'Регулятор Клапан 053', position: 3, },
      { name: '37b7f706-7baf-447d-b98c-c78f7b1795e3', realName: 'Регулятор Клапан 054', position: 3, },
      { name: '71a22b2c-406c-449b-a051-ecef435278cd', realName: 'Регулятор Клапан 0331', position: 3, },
      { name: '08ff9432-49c2-4580-9af1-bdbec4d78752', realName: 'Регулятор Клапан 0332', position: 3, },
      { name: '271ee47d-40aa-4cba-a404-db47e9ada479', realName: 'Регулятор Клапан 0333', position: 3, },
      { name: '7645f77e-e49c-43b2-9894-bcc4d01aea12', realName: 'Регулятор Клапан 035', position: 3, },
      { name: 'b4238a1f-af83-424b-bf75-de1c2a224e9a', realName: 'Регулятор Клапан OF1', position: 3, },
      { name: '3b914a3f-134d-4321-b608-4e34e5e57f69', realName: 'Регулятор Клапан OF2', position: 3, },
      { name: 'e5f7947c-df62-4c45-b133-8d0ca0517163', realName: 'Регулятор Клапан OF3', position: 3, },
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
        { x: 41.9, y: 50.4, w: 2.2, h: 3.1, forAction: true, id: 'kl029', value: { window: 'O_n_k_na_VNK_posle_1', x: 900, y: 473, }, realName: 'Клапан 029 на дымовую трубу' },    // win 29
        { x: 36.3, y: 43.8, w: 2.1, h: 3.1, forAction: true, id: 'kl_038', value: { window: 'O_n_k_na_VNK_posle_1', x: 770, y: 440, }, realName: 'Клапан 038 на дымовую трубу' },    // win 38
        { x: 49.1, y: 43.7, w: 2.2, h: 3.1, forAction: true, id: 'kl_037', value: { window: 'O_n_k_na_VNK_posle_1', x: 1030, y: 440, }, realName: 'Клапан 037 на дымовую трубу' },    // win 37
        { x: 49.1, y: 55.4, w: 2.1, h: 3.1, forAction: true, id: 'kl007', value: { window: 'O_n_k_na_VNK_posle_1', x: 1082, y: 555, }, realName: 'Клапан 007 на дымовую трубу' },    // win 07
        { x: 36.5, y: 55.4, w: 2.3, h: 3.1, forAction: true, id: 'kl028', value: { window: 'O_n_k_na_VNK_posle_1', x: 1082, y: 480, }, realName: 'Клапан 028 на дымовую трубу' },    // win 28
        { x: 86.4, y: 20.9, w: 2.0, h: 3.0, forAction: true, id: 'kl022', value: { window: 'O_n_k_na_VNK_posle_1', x: 1582, y: 260, }, realName: 'Клапан на тягу 022' },    // win 22
        { x: 36.2, y: 37.8, w: 2.1, h: 3.1, forAction: true, id: 'kl039', realName: 'Клапан доменного газа 039' },
        { x: 39.9, y: 38.0, w: 7.6, h: 8.4, forAction: true, id: 'podogrev_vozduh', realName: 'Подогреватель воздуха' },
        { x: 39.9, y: 55.9, w: 7.6, h: 8.4, forAction: true, id: 'podogrev_gaza', realName: 'Подогреватель газа' },
        { x: 25.7, y: 67.5, w: 2.9, h: 6.0, forAction: true, id: 'fan_V1', realName: 'Вентилятор В1' },
        { x: 19.8, y: 66.9, w: 2.9, h: 6.0, forAction: true, id: 'fan_V2', realName: 'Вентилятор В2' },
        { x: 13.5, y: 66.9, w: 2.9, h: 6.0, forAction: true, id: 'fan_V3', realName: 'Вентилятор В3' },
        { x: 49.0, y: 37.8, w: 2.1, h: 3.1, forAction: true, id: 'kl030', realName: 'Клапан доменного газа 030' },
        { x: 42.2, y: 31.5, w: 2.3, h: 3.0, forAction: true, id: 'kl048', realName: 'Клапан доменного газа 048' },
        { x: 25.1, y: 54.5, w: 2.2, h: 3.0, forAction: true, id: 'kl0501', realName: 'Клапан природного газа 0501' },
        { x: 36.7, y: 61.6, w: 2.1, h: 3.1, forAction: true, id: 'kl020', realName: 'Клапан воздуха горения 020' },
        { x: 49.1, y: 61.7, w: 2.0, h: 3.0, forAction: true, id: 'kl025', realName: 'Клапан воздуха горения 025' },
        { x: 43.0, y: 68.9, w: 2.1, h: 3.0, forAction: true, id: 'kl004', realName: 'Клапан воздуха горения 004' },
        { x: 35.6, y: 79.9, w: 2.3, h: 3.1, forAction: true, id: 'kl036b', realName: 'Клапан воздуха горения 036b' },
        { x: 11.0, y: 54.5, w: 2.2, h: 3, forAction: true, id: 'kl0502', realName: 'Клапан природного газа 0502' },
        { x: 16.4, y: 53.5, w: 2.2, h: 4.8, forAction: true, id: 'kl052', realName: 'Дроссель 052' },
        { x: 16.5, y: 46.2, w: 2.0, h: 4.7, forAction: true, id: 'kl051', realName: 'Дроссель 051' },
        { x: 19.2, y: 36.5, w: 2.0, h: 4.7, forAction: true, id: 'kl053', realName: 'Дроссель 053' },
        { x: 16.6, y: 62.3, w: 1.5, h: 4, forAction: true, id: 'kl0333', realName: 'Клапан воздуха горения 0333' },
        { x: 22.9, y: 62.0, w: 1.4, h: 4.2, forAction: true, id: 'kl0332', realName: 'Клапан воздуха горения 0332' },
        { x: 28.9, y: 62.3, w: 1.5, h: 4.2, forAction: true, id: 'kl0331', realName: 'Клапан воздуха горения 0331' },
        { x: 33.0, y: 71.0, w: 1.4, h: 4.2, forAction: true, id: 'kl036v', realName: 'Клапан воздуха горения 036v' },
        { x: 26.4, y: 83.5, w: 1.4, h: 4.2, forAction: true, id: 'kl0311', realName: 'Клапан воздуха горения 0311' },
        { x: 20.6, y: 83.3, w: 1.4, h: 4.2, forAction: true, id: 'kl0312', realName: 'Клапан воздуха горения 0312' },
        { x: 14.3, y: 83.2, w: 1.4, h: 4.3, forAction: true, id: 'kl0313', realName: 'Клапан воздуха горения 0313' },
        { x: 13.9, y: 73.6, w: 2.2, h: 4.9, forAction: true, id: 'klOF3', realName: 'Дроссель OF3' },
        { x: 20.2, y: 73.3, w: 2.2, h: 4.9, forAction: true, id: 'klOF2', realName: 'Дроссель OF2' },
        { x: 26.1, y: 73.5, w: 2.2, h: 4.9, forAction: true, id: 'klOF1', realName: 'Дроссель OF1' },
        // { x: 35.5, y: 0, w:2, h: 3.5, forAction: true, id: 'kl036b', },
        { x: 64.1, y: 28.8, w: 2.0, h: 5.0, forAction: true, id: 'kl047', realName: 'Клапан азота 047' },
        { x: 70.1, y: 27.4, w: 2.2, h: 5.1, forAction: true, id: 'kl001a', realName: 'Дроссель 001а' },
        { x: 69.9, y: 19, w: 2.2, h: 4.8, forAction: true, id: 'kl001', realName: 'Дроссель 001' },
        // { x: 86.3, y: 1, w: 2, h: 2.5, forAction: true, id: 'kl022', },
        { x: 22.5, y: 46.5, w: 1.4, h: 4.2, forAction: true, id: 'kl054', realName: 'Клапан природного газа 054' },
        { x: 76.3, y: 24.5, w: 2, h: 2.9, forAction: true, id: 'kl002_vnk_main', realName: 'Клапан холодного дутья 002', value: { window: 'O_n_k_na_VNK_posle_1', x: 1582, y: 260, } },
        { x: 21.3, y: 10.5, w: 7, h: 3.5, forAction: true, id: 'trendy', realName: 'Кнопка Тренды' },
        { x: 12.5, y: 10.5, w: 8.8, h: 3.5, forAction: true, id: 'rejimy BVNK', realName: 'Кнопка Режимы БВНК' },
        { x: 3.7, y: 10.5, w: 8.8, h: 3.5, forAction: true, id: 'Sostoynie BVNK', realName: 'Кнопка Состояние БВНК' },
        { x: 11, y: 58.5, w: 2.2, h: 4.7, forAction: true, id: 'kl035', realName: 'Дроссель воздуха горения 035' },
        { x: 35.5, y: 13.5, w: 4, h: 2.8, forAction: true, id: 'Avto', realName: 'Кнопка Авто' },
        { x: 35.5, y: 16.7, w: 4, h: 2.9, forAction: true, id: 'Ruhnoy', realName: 'Кнопка Ручной' },
        { x: 35.6, y: 20, w: 4, h: 3.5, forAction: true, id: 'sbros ohibki', realName: 'Кнопка Сброс ошибки' },
        { x: 39.5, y: 16.7, w: 3.9, h: 2.9, forAction: true, id: 'rabote', realName: 'Кнопка В работу' },
        { x: 39.5, y: 13.5, w: 3.9, h: 2.8, forAction: true, id: 'baypase', realName: 'Кнопка Байпас' },
        { x: 45.0, y: 13.6, w: 1.5, h: 2.8, forAction: true, id: 'O_S', realName: 'Кнопка O_S' },
        { x: 46.5, y: 13.6, w: 1.6, h: 2.8, forAction: true, id: 'O_R', realName: 'Кнопка O_R' },
        { x: 46.6, y: 16.7, w: 1.6, h: 2.8, forAction: true, id: '5_R', realName: 'Кнопка 5_R' },
        { x: 45.0, y: 16.7, w: 1.6, h: 2.8, forAction: true, id: '5_s', realName: 'Кнопка 5_S' },
        { x: 84.1, y: 50.8, w: 4.0, h: 10.5, forAction: true, id: 'VNK1_main', realName: 'ВНК №1' },
        { x: 73.8, y: 50.8, w: 4.0, h: 10.5, forAction: true, id: 'VNK2_main', realName: 'ВНК №2' },
        { x: 63.7, y: 50.8, w: 4.0, h: 10.5, forAction: true, id: 'VNK3_main', realName: 'ВНК №3' },
        { x: 86.4, y: 20.9, w: 0.0, h: 0.0,  forAction: true, id: 'kl022_falsh', realName: 'Клапан на тягу 022' },  // ilay  
      ]
    },
    {
      name: 'vnk_spvg', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 68.8, y: 24.2, w: 2.0, h: 3.0, forAction: true, id: 'kl029', realName: 'Клапан дыма от ВНК 029' },
        { x: 69.1, y: 30.4, w: 2.0, h: 3.0, forAction: true, id: 'kl048', realName: 'Клапан смешанного газа 048' },
        { x: 62.7, y: 34.9, w: 2.0, h: 2.6, forAction: true, id: 'kl039', realName: 'Клапан смешанного газа 039' },
        { x: 76.95, y: 34.9, w: 2.0, h: 2.6, forAction: true, id: 'kl030', realName: 'Клапан смешанного газа 030' },
        { x: 77.05, y: 40.9, w: 2.0, h: 2.4, forAction: true, id: 'kl037', realName: 'Клапан дыма от ВНК 037' },
        { x: 62.8, y: 40.9, w: 2.0, h: 2.5, forAction: true, id: 'kl038', realName: 'Клапан дыма от ВНК 038' },
        { x: 63.0, y: 53.9, w: 2.0, h: 2.0, forAction: true, id: 'kl028', realName: 'Клапан дыма от ВНК 028' },
        { x: 77.5, y: 53.9, w: 2.0, h: 2.0, forAction: true, id: 'kl007', realName: 'Клапан дыма от ВНК 007' },
        { x: 77.5, y: 59.9, w: 2.0, h: 2.0, forAction: true, id: 'kl025', realName: 'Клапан воздуха горения к ВНК 025' },
        { x: 63.35, y: 59.9, w: 2.0, h: 2.0, forAction: true, id: 'kl020', realName: 'Клапан воздуха горения к ВНК 020' },
        { x: 71.25, y: 66.9, w: 2.0, h: 2.4, forAction: true, id: 'kl004', realName: 'Клапан воздуха горения к ВНК 004' },
        { x: 60.0, y: 70.9, w: 1.15, h: 3.95, forAction: true, id: 'kl036v', realName: 'Клапан воздуха горения 036v' },
        { x: 56.5, y: 78.7, w: 2.0, h: 2.5, forAction: true, id: 'kl036b', realName: 'Клапан воздуха горения 036b' },
        { x: 50.8, y: 82.0, w: 1.0, h: 3.5, forAction: true, id: 'kl0311', realName: 'Клапан воздуха горения 0311' },
        { x: 43.7, y: 82.0, w: 1.0, h: 3.5, forAction: true, id: 'kl0312', realName: 'Клапан воздуха горения 0312' },
        { x: 36.3, y: 82.0, w: 1.0, h: 3.5, forAction: true, id: 'kl0313', realName: 'Клапан воздуха горения 0313' },
        { x: 39.0, y: 63.0, w: 1.1, h: 3.9, forAction: true, id: 'kl0333', realName: 'Клапан воздуха горения к ВНК 0333' },
        { x: 46.35, y: 63.0, w: 1.15, h: 3.8, forAction: true, id: 'kl0332', realName: 'Клапан воздуха горения к ВНК 0332' },
        { x: 53.7, y: 63.0, w: 1.1, h: 3.8, forAction: true, id: 'kl0331', realName: 'Клапан воздуха горения к ВНК 0331' },
        { x: 50.1, y: 74.1, w: 2.1, h: 4.7, forAction: true, id: 'klOF1', realName: 'Дроссель OF1' },
        { x: 43.0, y: 74, w: 2.1, h: 4.6, forAction: true, id: 'klOF2', realName: 'Дроссель OF2' },
        { x: 35.7, y: 74.0, w: 2.0, h: 4.3, forAction: true, id: 'klOF3', realName: 'Дроссель OF3' },
        { x: 29.3, y: 58.5, w: 2.1, h: 4.7, forAction: true, id: 'kl035', realName: 'Дроссель регулятор 035' },
        { x: 27.3, y: 8.0, w: 7.0, h: 3.5, forAction: true, id: 'Maslostanci', realName: 'Кнопка Маслостанции' },
        { x: 3.3, y: 8.0, w: 7.0, h: 3.5, forAction: true, id: 'Rejim', realName: 'Кнопка Режим' },
        { x: 10.3, y: 8.0, w: 7.0, h: 3.5, forAction: true, id: 'Prekidka', realName: 'Кнопка Перекидка' },
        { x: 17.3, y: 8.0, w: 10.0, h: 3.5, forAction: true, id: 'Temperatura Kojuxa', realName: 'Кнопка Температура кожуха' },
        { x: 34.3, y: 8.0, w: 7.0, h: 3.5, forAction: true, id: 'Trendy', realName: 'Кнопка Тренды' },
        { x: 66.9, y: 35.0, w: 7.4, h: 8.4, forAction: true, id: 'spvg_podogrev_vozduh', realName: 'Подогреватель воздуха' },
        { x: 67.2, y: 53.7, w: 7.4, h: 8.4, forAction: true, id: 'spvg_podogrev_gaza', realName: 'Подогреватель газа' },
        { x: 49.8, y: 67.5, w: 2.9, h: 6.0, forAction: true, id: 'spvg_fan_V1', realName: 'Вентилятор В1' },
        { x: 42.7, y: 67.5, w: 2.9, h: 6.0, forAction: true, id: 'spvg_fan_V2', realName: 'Вентилятор В2' },
        { x: 35.4, y: 67.2, w: 2.9, h: 6.0, forAction: true, id: 'spvg_fan_V3', realName: 'Вентилятор В3' },
        { x: 74.9, y: 84.7, w: 1.7, h: 2.5, forAction: true, id: 'trend_V3_vibro', realName: 'Тренд В3 по виброскорости' },
        { x: 78.1, y: 84.7, w: 1.7, h: 2.5, forAction: true, id: 'trend_V2_vibro', realName: 'Тренд В2 по виброскорости' },
        { x: 81.55, y: 84.7, w: 1.7, h: 2.5, forAction: true, id: 'trend_V1_vibro', realName: 'Тренд В1 по виброскорости' },
        { x: 74.9, y: 88.6, w: 1.7, h: 2.5, forAction: true, id: 'trend_V3_t_podshib', realName: 'Тренд В3 по температуре подшипников пром. вала и двигателя' },
        { x: 78.15, y: 88.6, w: 1.7, h: 2.5, forAction: true, id: 'trend_V2_t_podshib', realName: 'Тренд В2 по температуре подшипников пром. вала и двигателя' },
        { x: 81.6, y: 88.6, w: 1.7, h: 2.5, forAction: true, id: 'trend_V1_t_podshib', realName: 'Тренд В1 по температуре подшипников пром. вала и двигателя' },
        { x: 74.9, y: 92.4, w: 1.7, h: 2.5, forAction: true, id: 'trend_V3_t_serdech', realName: 'Тренд В3 по температуре сердечника и обмоток стратора двигателя' },
        { x: 78.1, y: 92.4, w: 1.7, h: 2.5, forAction: true, id: 'trend_V2_t_serdech', realName: 'Тренд В2 по температуре сердечника и обмоток стратора двигателя' },
        { x: 81.6, y: 92.4, w: 1.7, h: 2.5, forAction: true, id: 'trend_V1_t_serdech', realName: 'Тренд В1 по температуре сердечника и обмоток стратора двигателя' },
        { x: 10.1, y: 8.5, w: 7.0, h: 3.0, forAction: true, id: 'perekidta3_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 }, realName: 'Вкладка Перекидка' },  // ilay
      ]
    },
    {
      name: 'BVNK_VNK1', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1.0, w: 10.4, h: 3.0, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1.0, w: 10.4, h: 3.0, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1.0, w: 10.4, h: 3.0, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1.0, w: 10.3, h: 3.0, name: 'vnk_spvg', },
        { x: 10.1, y: 8.5, w: 7.0, h: 3.0, forAction: true, id: 'perekidta_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 }, realName: 'Вкладка Перекидка' },
        { x: 19.0, y: 26.3, w: 2.0, h: 2.8, forAction: true, id: 'kl132', realName: 'Клапан смешанного газа 132' },
        { x: 13.6, y: 37.7, w: 2.1, h: 3.0, forAction: true, id: 'kl124', realName: 'Клапан азота 124' },
        { x: 27.0, y: 26.3, w: 2.0, h: 2.8, forAction: true, id: 'kl116', realName: 'Клапан смешанного газа 116' },
        { x: 32.9, y: 25.1, w: 2.1, h: 4.8, forAction: true, id: 'kl115', realName: 'Дроссель 115' },
        { x: 45.9, y: 26.3, w: 2.1, h: 2.9, forAction: true, id: 'kl113', realName: 'Клапан смешанного газа 116' },
        { x: 44.0, y: 55.2, w: 2.0, h: 3.0, forAction: true, id: 'kl117', realName: 'Клапан воздуха горения 117' },
        { x: 27.1, y: 53.9, w: 2.2, h: 4.7, forAction: true, id: 'kl123', realName: 'Дроссель 123' },
        { x: 11.4, y: 55.2, w: 2.0, h: 3.0, forAction: true, id: 'kl134', realName: 'Клапан воздуха горения 134' },
        { x: 31.3, y: 72.5, w: 2.1, h: 2.8, forAction: true, id: 'kl111', realName: 'Клапан дыма 111' },
        { x: 31.3, y: 77.3, w: 2.1, h: 3.0, forAction: true, id: 'kl112', realName: 'Клапан дыма 112' },
        { x: 52.7, y: 23.8, w: 8.4, h: 21.3, forAction: true, id: 'VNK_1_BVNK', realName: 'ВНК №1' },
        { x: 73.5, y: 77.0, w: 2.1, h: 2.7, forAction: true, id: 'kl118', value: { window: 'O_n_k_na_VNK_posle_1', x: 1488, y: 678, }, realName: 'Клапан холодного дутья 118' },
        { x: 73.5, y: 83.0, w: 2.0, h: 2.9, forAction: true, id: 'kl110', value: { window: 'O_n_k_na_VNK_posle_1', x: 1488, y: 678, }, realName: 'Клапан сброса 110' },
        { x: 73.2, y: 70.3, w: 2.5, h: 3.0, forAction: true, id: 'kl118a', value: { window: 'okno_klap_vid3', x: 1507, y: 490, }, realName: 'Клапан холодного дутья 118а' },    // win 118a ILAY
        { x: 72.6, y: 62.6, w: 2.2, h: 3.0, forAction: true, id: 'kl136a', realName: 'Клапан разрежения 136а' },
        { x: 65.3, y: 43.0, w: 2.2, h: 3.0, forAction: true, id: 'kl119', value: { window: 'O_n_k_na_VNK_posle_1', x: 1348, y: 439, }, realName: 'Клапан горячего дутья 119' },
        { x: 39.8, y: 17.6, w: 1.3, h: 4.2, forAction: true, id: 'kl121', realName: 'Клапан 121' },
        { x: 23.1, y: 17.5, w: 1.3, h: 4.2, forAction: true, id: 'kl127', realName: 'Клапан 127' },
        { x: 77.9, y: 49.5, w: 4.0, h: 2.7, forAction: true, id: 'Avto', realName: 'Кнопка АВТО' },
        { x: 77.9, y: 52.9, w: 4.0, h: 2.7, forAction: true, id: 'rucnou', realName: 'Кнопка Ручной' },
        { x: 78.0, y: 56.1, w: 4.0, h: 3.5, forAction: true, id: 'sbros ohibki', realName: 'Кнопка Сброс ошибки' },
        { x: 34.2, y: 8.9, w: 7.0, h: 2.5, forAction: true, id: 'trendy', realName: 'Вкладка Тренды' },
        { x: 27.2, y: 8.9, w: 7.0, h: 2.5, forAction: true, id: 'meteostanci', realName: 'Вкладка Маслостанции' },
        { x: 17.5, y: 8.9, w: 9.5, h: 2.5, forAction: true, id: 'temperatura kojuxa', realName: 'Вкладка Температура кожуха' },
        { x: 3.2, y: 8.9, w: 7.0, h: 2.5, forAction: true, id: 'rejim', realName: 'Вкладка Режим' },
        { x: 38.5, y: 43.0, w: 1.4, h: 4.1, forAction: true, id: 'kl140', realName: 'Клапан воздуха горения 140' },
      ]
    },
    {
      name: 'BVNK_VNK2', helpers: [
        { x: 1.0, y: 1.0, w: 10.5, h: 3.0, name: 'vnk_main', },
        { x: 11.6, y: 1.0, w: 10.4, h: 3.0, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1.0, w: 10.4, h: 3.0, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1.0, w: 10.4, h: 3.0, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1.0, w: 10.3, h: 3.0, name: 'vnk_spvg', },
        { x: 10.1, y: 8.5, w: 7.0, h: 3.0, forAction: true, id: 'perekidta2_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 }, realName: 'Вкладка Перекидка' },
        { x: 18.9, y: 26.3, w: 2.1, h: 3.0, forAction: true, id: 'kl232', realName: 'Клапан смешанного газа 232' },
        { x: 13.6, y: 37.8, w: 2.1, h: 2.8, forAction: true, id: 'kl224', realName: 'Клапан азота 224' },
        { x: 27.0, y: 26.3, w: 2.0, h: 2.8, forAction: true, id: 'kl216', realName: 'Клапан смешанного газа 216' },
        { x: 32.8, y: 25.1, w: 2.2, h: 4.8, forAction: true, id: 'kl215', realName: 'Дроссель 215' },
        { x: 45.9, y: 26.2, w: 2.1, h: 3.0, forAction: true, id: 'kl213', realName: 'Клапан смешанного газа 213' },
        { x: 44.0, y: 55.2, w: 2.1, h: 3.0, forAction: true, id: 'kl217', realName: 'Клапан воздуха горения 217' },
        { x: 27.1, y: 53.9, w: 2.2, h: 4.8, forAction: true, id: 'kl223', realName: 'Дроссель 223' },
        { x: 11.4, y: 55.2, w: 2.0, h: 3.0, forAction: true, id: 'kl234', realName: 'Клапан воздуха горения 234' },
        { x: 31.2, y: 72.5, w: 2.2, h: 3.0, forAction: true, id: 'kl211', realName: 'Клапан дыма 211' },
        { x: 31.2, y: 77.3, w: 2.2, h: 3.0, forAction: true, id: 'kl212', realName: 'Клапан дыма 212' },
        { x: 73.4, y: 77.0, w: 2.3, h: 3.0, forAction: true, id: 'kl218', realName: 'Клапан холодного дутья 218' },
        { x: 73.5, y: 82.9, w: 2.1, h: 3.0, forAction: true, id: 'kl210', realName: 'Клапан сброса 210' },
        { x: 73.3, y: 70.3, w: 2.2, h: 3.0, forAction: true, id: 'kl218a', realName: 'Клапан холодного дутья 218а' },
        { x: 72.5, y: 62.6, w: 2.3, h: 3.0, forAction: true, id: 'kl236a', realName: 'Клапан разрежения 236а' },
        { x: 65.3, y: 43.0, w: 2.2, h: 3.0, forAction: true, id: 'kl219', realName: 'Клапан горячего дутья 219' },
        { x: 39.8, y: 17.6, w: 1.4, h: 4.1, forAction: true, id: 'kl221', realName: 'Клапан 221' },
        { x: 23.1, y: 17.5, w: 1.3, h: 4.2, forAction: true, id: 'kl227', realName: 'Клапан 227' },
        { x: 77.9, y: 49.5, w: 4.0, h: 2.9, forAction: true, id: 'Avto', realName: 'Кнопка АВТО' },
        { x: 77.9, y: 52.9, w: 4.0, h: 2.9, forAction: true, id: 'rucnou', realName: 'Кнопка Ручной' },
        { x: 78.0, y: 56.1, w: 4.0, h: 3.5, forAction: true, id: 'sbros ohibki', realName: 'Кнопка Сброс ошибки' },
        { x: 34.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'trendy', realName: 'Вкладка Тренды' },
        { x: 27.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'meteostanci', realName: 'Вкладка Маслостанции' },
        { x: 17.3, y: 8.9, w: 9.7, h: 2.5, forAction: true, id: 'temperatura kojuxa', realName: 'Вкладка Температура кожуха' },
        { x: 3.20, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'rejim', realName: 'Вкладка Режим' },
        { x: 38.5, y: 43.0, w: 1.4, h: 4.1, forAction: true, id: 'kl240', realName: 'Клапан воздуха горения 240' },
        { x: 52.7, y: 23.8, w: 8.4, h: 21.3, forAction: true, id: 'VNK_2_BVNK', realName: 'ВНК №2' },
      ]
    },
    {
      name: 'BVNK_VNK3', helpers: [
        { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
        { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
        { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
        { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
        { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
        { x: 73.5, y: 83.0, w: 2, h: 3, forAction: true, id: 'vn_310_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1510, y: 635 }, realName: 'Клапан сброса 310' },  // win 310
        { x: 73.5, y: 76.7, w: 2, h: 3, forAction: true, id: 'vn_318_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1510, y: 635 }, realName: 'Клапан холодного дутья 318' },  // win 318
        { x: 65.35, y: 42.9, w: 2, h: 3, forAction: true, id: 'vn_319_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1343, y: 450 }, realName: 'Клапан горячего дутья 319' },  // win 319
        { x: 19, y: 26.2, w: 2, h: 3, forAction: true, id: 'kl332', realName: 'Клапан смешанного газа 332' },
        { x: 13.6, y: 37.7, w: 2.1, h: 3, forAction: true, id: 'kl324', realName: 'Клапан азота 324' },
        { x: 27, y: 26.2, w: 2, h: 3, forAction: true, id: 'kl316', realName: 'Клапан смешанного газа 316' },
        { x: 32.9, y: 25.1, w: 2.2, h: 4.8, forAction: true, id: 'kl315', realName: 'Дроссель 315' },
        { x: 45.9, y: 26.2, w: 2.1, h: 3, forAction: true, id: 'kl313', realName: 'Клапан смешанного газа 313' },
        { x: 44, y: 55, w: 2, h: 3, forAction: true, id: 'kl317', realName: 'Клапан воздуха горения 317' },
        { x: 27.1, y: 53.8, w: 2.2, h: 4.9, forAction: true, id: 'kl323', realName: 'Дроссель 323' },
        { x: 11.4, y: 55.2, w: 2.0, h: 3, forAction: true, id: 'kl334', realName: 'Клапан воздуха горения 334' },
        { x: 31.4, y: 72.5, w: 1.9, h: 3, forAction: true, id: 'kl311', realName: 'Клапан дыма 311' },
        { x: 31.4, y: 77.3, w: 1.9, h: 3, forAction: true, id: 'kl312', realName: 'Клапан дыма 312' },
        { x: 73.3, y: 70.5, w: 2, h: 3, forAction: true, id: 'kl318a', realName: 'Клапан холодного дутья 318а' },
        { x: 72.7, y: 62.5, w: 2, h: 3, forAction: true, id: 'kl336a', realName: 'Клапан разрежения 336а' },
        { x: 39.8, y: 17.6, w: 1.4, h: 4.1, forAction: true, id: 'kl321', realName: 'Клапан 321' },
        { x: 23.1, y: 17.5, w: 1.3, h: 4.2, forAction: true, id: 'kl327', realName: 'Клапан 327' },
        { x: 77.9, y: 49.5, w: 4, h: 2.5, forAction: true, id: 'Avto', realName: 'Кнопка АВТО' },
        { x: 77.9, y: 52.9, w: 4, h: 2.5, forAction: true, id: 'rucnou', realName: 'Кнопка Ручной' },
        { x: 78, y: 56.1, w: 4, h: 3.5, forAction: true, id: 'sbros ohibki', realName: 'Кнопка Сброс ошибки' },
        { x: 34.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'trendy', realName: 'Вкладка Тренды' },
        { x: 27.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'meteostanci', realName: 'Вкладка Маслостанции' },
        { x: 17.5, y: 8.9, w: 9.5, h: 2.5, forAction: true, id: 'temperatura kojuxa', realName: 'Вкладка Температура кожуха' },
        { x: 10.1, y: 8.5, w: 7.0, h: 3.0, forAction: true, id: 'perekidta2_btn', realName: 'Вкладка Перекидка' },
        { x: 3.2, y: 8.9, w: 7, h: 2.5, forAction: true, id: 'rejim', realName: 'Вкладка Режим' },
        { x: 38.5, y: 43.0, w: 1.4, h: 4.1, forAction: true, id: 'kl340', realName: 'Клапан воздуха горения 340' },
        { x: 52.7, y: 23.8, w: 8.4, h: 21.3, forAction: true, id: 'VNK_3_BVNK', realName: 'ВНК №3' },
      ]
    },
    {
      name: 'O_n_k_na_VNK_posle_1', helpers: [
        { x: 61.00, y: 47.20, w: 1.5, h: 2.4, forAction: true, id: 'close_w1', realName: 'Закрыть', removeWindow: 'O_n_k_na_VNK_posle_1' }, // КРЕСТИК
        { x: 53.40, y: 55.40, w: 4.0, h: 2.6, forAction: true, id: 'auto', realName: 'Авто', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, } },
        { x: 57.80, y: 55.40, w: 4.0, h: 2.6, forAction: true, id: 'ruchnoi', realName: 'Ручной', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, } },
        { x: 53.50, y: 59.30, w: 4.0, h: 2.6, forAction: true, id: 'open_vn', realName: 'Открыть', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, } },
        { x: 57.80, y: 59.30, w: 4.0, h: 2.6, forAction: true, id: 'close_ventil', realName: 'Закрыть', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, } },
        { x: 53.40, y: 62.10, w: 8.5, h: 2.9, forAction: true, id: 'stop', realName: 'СТОП' },
        { x: 53.40, y: 67.50, w: 8.5, h: 2.6, forAction: true, id: 'sbros_oshibki', realName: 'Сброс ошибки' },
        { x: 53.40, y: 72.85, w: 8.5, h: 2.6, forAction: true, id: 'baypas_blokirovok', realName: 'Байпас всех блокировок', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, } },
      ]
    },
    {
      name: 'okno_klap_vid3', helpers: [
        { x: 91.1, y: 49.6, w: 1.4,  h: 1.5, forAction: true, id: 'close_w1A', realName: 'Закрыть', removeWindow: 'okno_klap_vid3' }, // КРЕСТИК
        { x: 83.6, y: 57.2, w: 4.0,  h: 2.4, forAction: true, id: 'autoA', realName: 'Авто',             value: { window: 'O_n_k_na_VNK_posle_2', x: 1729, y: 583, } },
        { x: 87.9, y: 57.2, w: 4.0,  h: 2.4, forAction: true, id: 'ruchnoiA', realName: 'Ручной',        value: { window: 'O_n_k_na_VNK_posle_2', x: 1805, y: 583, } },  
        { x: 83.6, y: 61.1, w: 4.0,  h: 2.4, forAction: true, id: 'open_vnA', realName: 'Открыть',       value: { window: 'O_n_k_na_VNK_posle_2', x: 1729, y: 619, } },
        { x: 88.0, y: 61.1, w: 4.0,  h: 2.4, forAction: true, id: 'close_ventilA', realName: 'Закрыть',  value: { window: 'O_n_k_na_VNK_posle_2', x: 1805, y: 619, } },
        { x: 83.6, y: 64.0, w: 8.5,  h: 2.7, forAction: true, id: 'stopA', realName: 'СТОП' },
        { x: 83.6, y: 69.3, w: 8.5,  h: 2.3, forAction: true, id: 'sbros_oshibkiA', realName: 'Сброс ошибки' },
        { x: 83.6, y: 74.7, w: 8.5,  h: 2.3, forAction: true, id: 'baypas_blokirovokA', realName: 'Байпас всех блокировок', value: { window: 'O_n_k_na_VNK_posle_2', x: 1770, y: 755, } },
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
        { x: 94.4, y: 26, w: 4, h: 3, forAction: true, id: 't_r_4', value: { window: 'vvod_znachenij', x: 900, y: 300, }, realName: 'Значение F прир. газа' },
        { x: 69.4, y: 90, w: 2.5, h: 4, forAction: true, id: 't_b_302_btn', value: { window: 'win_sym_302', x: 56, y: 48 }, realName: 'Дроссель 302' },
        { x: 94.4, y: 29.6, w: 4.0, h: 3.0, forAction: true, id: 't_r_5', value: { window: 'vvod_znachenij', x: 900, y: 300, }, realName: 'Значение ТТГ' },
        { x: 94.4, y: 22.7, w: 4.0, h: 3.0, forAction: true, id: 'T.Gor dutiy', realName: 'Значение Т гор. дутья' },
        { x: 94.35, y: 18.9, w: 4.0, h: 3.0, forAction: true, id: 'DP obh', realName: 'Значение dP общ' },
        { x: 94.3, y: 15.4, w: 4.0, h: 3.1, forAction: true, id: 'P cop gaza', realName: 'Значение P кол. газа' },
        { x: 94.4, y: 36.5, w: 4.0, h: 3.1, forAction: true, id: 'Vlajnosti', realName: 'Значение Влажность' },
        { x: 81.0, y: 15.0, w: 1.5, h: 3.4, forAction: true, id: 'kl1', realName: 'Клапан атмосферный 1' },
        { x: 76.6, y: 15.0, w: 1.5, h: 3.4, forAction: true, id: 'kl2', realName: 'Клапан атмосферный 2' },
        { x: 74.3, y: 15.0, w: 1.5, h: 3.4, forAction: true, id: 'kl3', realName: 'Клапан атмосферный 3' },
        { x: 76.57, y: 19.2, w: 1.5, h: 3.7, forAction: true, id: 'Drosel zel.', realName: 'Дроссель-регулятор клапана атмосферного №2' },
        { x: 17.2, y: 64.5, w: 11.3, h: 4.5, forAction: true, id: 'generator_TSB06', realName: 'Генератор TSB06' },
        { x: 40.6, y: 61.4, w: 3.0, h: 7.3, forAction: true, id: 'VNK3_DP', realName: 'ВНК №3' },
        { x: 45.2, y: 61.4, w: 3.0, h: 7.3, forAction: true, id: 'VNK2_DP', realName: 'ВНК №2' },
        { x: 49.8, y: 61.4, w: 3.0, h: 7.3, forAction: true, id: 'VNK1_DP', realName: 'ВНК №1' },
        { x: 48.5, y: 29.8, w: 1.65, h: 4.4, forAction: true, id: 'kl83', realName: 'Продувочная свеча 83' },
        { x: 51.8, y: 32.8, w: 10.0, h: 2.8, forAction: true, id: 'rashod_GD_po_furmam', realName: 'Кнопка Расход ГД по фурмам' },
        { x: 59.0, y: 37.9, w: 10.8, h: 2.9, forAction: true, id: 't_peref', realName: 'Кнопка Температура периферии' },
        { x: 82.7, y: 17.55, w: 5.2, h: 4.6, forAction: true, id: 'zad_primemetals', realName: 'Кнопка Ввод заданий с Прайметалс' },
        { x: 88.4, y: 79.1, w: 6.0, h: 5.1, forAction: true, id: 'P_T_v_coltso', realName: 'Кнопка Р и Т в кольц. трубопроводе' },
        { x: 95.6, y: 70.0, w: 4, h: 3.1, forAction: true, id: 'udel_teplosuom', realName: 'Кнопка Удельный теплосъём' },
        { x: 37.5, y: 29.85, w: 1.6, h: 4.4, forAction: true, id: 'kl84', realName: 'Продувочная свеча 84' },
        { x: 45.75, y: 35.2, w: 2.5, h: 3.4, forAction: true, id: 'kl81', realName: 'Отсечной клапан 81' },
        { x: 15.2, y: 51.4, w: 1.9, h: 2.5, forAction: true, id: 'klSBV06', realName: 'Клапан SBV06' },
        { x: 15.15, y: 54.95, w: 1.9, h: 2.8, forAction: true, id: 'klMBV06', realName: 'Клапан MBV06' },
        { x: 15.6, y: 60.0, w: 2.2, h: 2.9, forAction: true, id: 'klTEV06', realName: 'Клапан TEV06' },
        { x: 20.7, y: 58.4, w: 2.9, h: 2.8, forAction: true, id: 'klOGV06', realName: 'Клапан OGV06' },
        { x: 14.1, y: 58.4, w: 1.35, h: 5.7, forAction: true, id: 'klIGV06', realName: 'Клапан IGV06' },
        { x: 9.4, y: 53.0, w: 1.55, h: 6.2, forAction: true, id: 'klZel.chistiy gsz', realName: 'Клапан скруббера' },
        { x: 10.98, y: 54.45, w: 1.9, h: 3.0, forAction: true, id: 'klchistiy gaz', realName: 'Клапан скруббера' },
        { x: 6.7, y: 45, w: 1.7, h: 3.5, forAction: true, id: 'klVixod', realName: 'Клапан скруббера' },
        { x: 20.9, y: 75.6, w: 2.4, h: 3.5, forAction: true, id: 'kl726', realName: 'Клапан пара на увлажнение 726' },
        { x: 25.3, y: 81.8, w: 1.7, h: 3.6, forAction: true, id: 'kl315', realName: 'Дроссель 315' },
        { x: 29.2, y: 90.8, w: 2.4, h: 4.0, forAction: true, id: 'klXolodnoe dytiy', realName: 'Клапан СНОРТ' },
        { x: 63.15, y: 90.5, w: 2.5, h: 3.3, forAction: true, id: 'kl721', realName: 'Клапан прир. газа 721' },
        { x: 70.85, y: 95.2, w: 2.5, h: 3.4, forAction: true, id: 'kl722', realName: 'Клапан азота 722' },
        { x: 73.2, y: 86.7, w: 1.7, h: 4.5, forAction: true, id: 'kl723', realName: 'Клапан прир. газа 723' },
        { x: 71.3, y: 66.8, w: 1.7, h: 4.6, forAction: true, id: 'kl022', realName: 'Клапан на тягу 022' },
        { x: 56.2, y: 77.5, w: 1.5, h: 4.3, forAction: true, id: 'kl002', realName: 'Клапан холодного дутья 002' },
        { x: 56.0, y: 86.5, w: 2.1, h: 4.6, forAction: true, id: 'klH001', realName: 'Дроссель 001' },
        { x: 58.0, y: 83.5, w: 1.9, h: 4.3, forAction: true, id: 'klH001a', realName: 'Дроссель 001а' },
        { x: 3.3, y: 94.9, w: 3.4, h: 3.1, forAction: true, id: 'Quantum', realName: 'Кнопка Quantum' },
        { x: 6.8, y: 94.9, w: 3.4, h: 3.1, forAction: true, id: 'M340', realName: 'Кнопка M340' },
        { x: 94.4, y: 33, w: 4.0, h: 3.0, forAction: true, id: 'F par uvl', realName: 'Значение F пар. увл.' },
        { x: 18.5, y: 40.4, w: 3.0, h: 3.0, forAction: true, id: 'po min urovny', realName: 'Кнопка Режим работы по min ур' },
        { x: 26.65, y: 40.4, w: 3.0, h: 3.0, forAction: true, id: 'po max urovny', realName: 'Кнопка Режим работы по max ур' },
        { x: 38.6, y: 22.9, w: 4.9, h: 3.5, forAction: true, id: 'vypusk L3', realName: 'Кнопка Выпуск Л3' },
        { x: 45.0, y: 22.9, w: 4.95, h: 3.5, forAction: true, id: 'vypusk L4', realName: 'Кнопка Выпуск Л4' },
        { x: 45.0, y: 19.16, w: 4.95, h: 3.7, forAction: true, id: 'vypusk L2', realName: 'Кнопка Выпуск Л2' },
        { x: 38.6, y: 19.16, w: 4.9, h: 3.7, forAction: true, id: 'vypusk L1', realName: 'Кнопка Выпуск Л1' },
        { x: 37.9, y: 14.9, w: 6.2, h: 3.7, forAction: true, id: 'Mahinist', realName: 'Кнопка Машинист' },
        { x: 44.2, y: 14.9, w: 6.5, h: 3.7, forAction: true, id: 'Vyzov prinit', realName: 'Кнопка Вызов принят' },
        { x: 1.0, y: 16.8, w: 3.0, h: 2.9, forAction: true, id: 'Iskl_Radar1', realName: 'Кнопка искл/вкл радара 1' },
        { x: 4.6, y: 16.8, w: 3.0, h: 2.9, forAction: true, id: 'Iskl_Radar2', realName: 'Кнопка искл/вкл радара 2' },
        { x: 8.5, y: 16.8, w: 3.0, h: 2.9, forAction: true, id: 'Vkl_Radar3', realName: 'Кнопка искл/вкл радара 3' },
        { x: 13.7, y: 0.0, w: 3.4, h: 3.3, name: 'dp', },
        { x: 18.0, y: 0.0, w: 4.5, h: 3.3, name: 'Kontrol_progara', },
        { x: 45.5, y: 0.0, w: 3.5, h: 3.3, name: 'bzu', },
        { x: 60, y: 0.0, w: 5.5, h: 2.5, name: 'gazoochistka', },
        // ilay
        { x: 75.85, y: 51.5, w: 3.3, h: 3.0, forAction: true, id: 'F_Obsh', realName: 'F общ.' },
        { x: 75.85, y: 56.5, w: 3.3, h: 3.0, forAction: true, id: 'F_Tek', realName: 'F тек.' },
        { x: 29.20, y: 77.7, w: 2.6, h: 2.6, forAction: true, id: 'R_Snort', realName: 'H «СНОРТ»' },
        { x: 56.20, y: 68.5, w: 3.3, h: 3.3, forAction: true, id: 'R_Furm', realName: 'Pкгс/см² на фурмах' },
        { x: 84.70, y: 91.6, w: 3.7, h: 3.1, forAction: true, id: 'F_L2', realName: 'Л.2' },
        { x: 84.70, y: 94.7, w: 3.7, h: 3.1, forAction: true, id: 'F_L3', realName: 'Л.3' },
      ]
    },
    {
      name: 'win_sym_302', helpers: [
        { x: 45.80, y: 5, w: 1.6, h: 3.3, removeWindow: 'win_sym_302', forAction: true, id: 'ws3_close_btn', realName: 'Закрыть' },
        { x: 18.40, y: 73, w: 8.0, h: 5.5, forAction: true, id: 'ws3_ttg_text_btn', realName: 'Расход ПГ' },
        { x: 18.40, y: 73, w: 0.0, h: 0.0, forAction: true, id: 'ws3_ttg2_text_btn', value: { window: 'priczvuksinal', x: 956, y: 112, }, realName: 'ТТГ' },

      ]
    },
    {
      name: 'vvod_znachenij', helpers: [
        { x: 58.4, y: 30.3, w: 1.5, h: 2, removeWindow: 'vvod_znachenij', forAction: true, id: 'vz_close', realName: 'Закрыть' },
        { x: 47.6, y: 78.3, w: 4.0, h: 4, removeWindow: 'vvod_znachenij', forAction: true, id: 'vz_ok', realName: 'Ок' },
        { x: 52.8, y: 78.3, w: 5.3, h: 4, forAction: true, id: 'vz_otmena', realName: 'Отмена' },
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
        { x: 15.6, y: 20.8, w: 11.9, h: 3.6, forAction: true, id: 'avaric_otdel_btn', realName: 'Аварийное отделение', },
        { x: 15.6, y: 25.0, w: 11.9, h: 3.6, forAction: true, id: 'otdel_nagrev_btn', realName: 'Отделение-Нагрев', value: { window: 'VN3_Perekidka_iz_Otdeleniya_v_Nagrev', x: 379, y: 32, } },
        { x: 15.6, y: 29.0, w: 11.9, h: 3.6, forAction: true, id: 'nagrev_otd2_btn', realName: 'Нагрев-Отделение 2', value: { window: 'O_p_n_na_k_na-o_2_na_VNK', x: 379, y: 32, } },
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
        { x: 63.7, y: 3.5, w: 2.4, h: 3, removeWindow: 'O_p_n_na_k_na-o_2_na_VNK', forAction: true, id: 'pericNagrev_close_btn', realName: 'Закрыть' },
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
        { x: 71.7, y: 67.7, w: 4.3, h: 3.1, forAction: true, id: 'bzu_gruzit_btn', realName: 'Кнопка Грузить' },
        { x: 58.3, y: 35.0, w: 9.5, h: 3.3, forAction: true, id: 'bzu_ZapretSledPorci_btn', realName: 'Кнопка Запрет след. порции' },
        { x: 32.5, y: 45.4, w: 2.85, h: 4.15, forAction: true, id: 'bzu_raketaNGUK2_btn', }, // TODO realName
        { x: 29.7, y: 53.3, w: 3.65, h: 3.2, forAction: true, id: 'bzu_pause_btn', realName: 'Кнопка Пауза' },
        { x: 58.3, y: 38.7, w: 9.5, h: 3.5, forAction: true, id: 'sleduyhai pociy', realName: 'Кнопка Следующая порция' },
        { x: 72.1, y: 15.2, w: 4, h: 3.8, forAction: true, id: 'Pusk', realName: 'Кнопка Автомат Пуск' },
        { x: 76.5, y: 15.2, w: 4, h: 3.8, forAction: true, id: 'stop', realName: 'Кнопка Автомат Стоп' },
        { x: 69.5, y: 82.5, w: 5.2, h: 3.3, forAction: true, id: 'Izmerit', realName: 'Кнопка Измерить' },
        { x: 2.0, y: 84.4, w: 5.1, h: 3.4, forAction: true, id: 'Datcik_1', realName: 'Кнопка Датчик давления 1' },
        { x: 2.0, y: 87.8, w: 5.1, h: 3.1, forAction: true, id: 'Datcik_2', realName: 'Кнопка Датчик давления 2' },
        { x: 2.0, y: 91.2, w: 5.1, h: 3.1, forAction: true, id: 'Datcik_3', realName: 'Кнопка Датчик давления 3' },
        { x: 2.0, y: 94.7, w: 5.1, h: 3.1, forAction: true, id: 'Datcik_4', realName: 'Кнопка Датчик давления 4' },
        { x: 27.45, y: 45.3, w: 2.95, h: 4.4, forAction: true, id: 'raketaNGUK1', }, // TODO realName
        { x: 24.1, y: 46.3, w: 2.4, h: 3.5, forAction: true, id: 'klNGUK1', realName: 'Клапан НГУК1' },
        { x: 36.55, y: 46.2, w: 2.4, h: 3.4, forAction: true, id: 'klNGUK2', realName: 'Клапан НГУК2' },
        { x: 33.4, y: 42.1, w: 3.0, h: 3.0, forAction: true, id: 'Vygr_NGUK2', realName: 'Кнопка Выгрузка' },
        { x: 26.3, y: 42.1, w: 3.0, h: 3.0, forAction: true, id: 'Vygr_NGUK1', realName: 'Кнопка Выгрузка' },
        { x: 23.1, y: 22.0, w: 3.0, h: 3.0, forAction: true, id: 'Zagr1', realName: 'Кнопка Загрузка' },
        { x: 36.8, y: 21.9, w: 3.0, h: 3.0, forAction: true, id: 'Zagr2', realName: 'Кнопка Загрузка' },
        { x: 25.0, y: 13.6, w: 3.2, h: 3.1, forAction: true, id: 'Jelob', realName: 'Кнопка Желоб' },
        { x: 26.35, y: 16.8, w: 2.3, h: 2.8, forAction: true, id: 'klVGUK1', realName: 'Клапан ВГУК1' },
        { x: 34.85, y: 16.4, w: 2.4, h: 3.5, forAction: true, id: 'klVGUK2', realName: 'Клапан ВГУК2' },
        { x: 40.7, y: 26.5, w: 1.5, h: 4.5, forAction: true, id: 'klBK-2', realName: 'Клапан ВК-2' },
        { x: 20.82, y: 26.6, w: 1.5, h: 4.3, forAction: true, id: 'klBK-1', realName: 'Клапан ВК-1' },
        { x: 20.72, y: 36.1, w: 1.5, h: 4.5, forAction: true, id: 'klNKV-1', realName: 'Кнопка НКВ-1' },
        { x: 16.6, y: 36.1, w: 1.5, h: 4.5, forAction: true, id: 'klNKP-1', realName: 'Кнопка НКП-1' },
        { x: 40.75, y: 36.1, w: 1.5, h: 4.5, forAction: true, id: 'klNKV-2', realName: 'Кнопка НКВ-2' },
        { x: 44.9, y: 36.1, w: 1.5, h: 4.5, forAction: true, id: 'klNKP-2', realName: 'Кнопка НКП-2' },
        { x: 40.5, y: 32.8, w: 1.9, h: 3.3, forAction: true, id: 'Droseli2', realName: 'Дроссель регулятор НКВ-2' },
        { x: 20.75, y: 32.9, w: 1.5, h: 3.2, forAction: true, id: 'Droseli1', realName: 'Дроссель регулятор НКВ-1' },
        { x: 12.6, y: 28.8, w: 6.45, h: 2.4, forAction: true, id: 'hagi upravleniy1', realName: 'Кнопка Шаги управления', value: { window: 'Shagi_upraleniya', x: 68, y: 274 } },
        { x: 43.6, y: 28.85, w: 6.4, h: 2.4, forAction: true, id: 'hagi upravleniy2', realName: 'Кнопка Шаги управления', value: { window: 'Shagi_upraleniya', x: 941, y: 274 } },
        { x: 60.9, y: 42.3, w: 6.3, h: 2.4, forAction: true, id: 'ekstraporcii', realName: 'Кнопка Экстрапорция' },
        { x: 73.3, y: 42.6, w: 3.2, h: 2.1, forAction: true, id: 'vidati', realName: 'Кнопка Выдать' },
        { x: 33.4, y: 39.4, w: 4.1, h: 2.6, forAction: true, id: 'vibraciy', realName: 'Кнопка Вибрация' },
        { x: 33.5, y: 36.5, w: 3.5, h: 3.0, forAction: true, id: 'pusto', realName: 'Кнопка Пуст' },
        { x: 78.2, y: 37.8, w: 2.5, h: 2.0, forAction: true, id: 'sbros', realName: 'Кнопка Сброс' },
        { x: 87.0, y: 46.6, w: 4.8, h: 2.8, forAction: true, id: 'Na konveer', realName: 'Кнопка Редактирование порций на конвейер' },
        { x: 92.05, y: 46.6, w: 1.8, h: 2.9, forAction: true, id: 'B1', realName: 'Кнопка Редактирование порций Б1' },
        { x: 94.1, y: 46.6, w: 1.8, h: 2.9, forAction: true, id: 'B2', realName: 'Кнопка Редактирование порций Б2' },
        { x: 96.15, y: 46.6, w: 2.95, h: 3.0, forAction: true, id: 'Ekstra', realName: 'Кнопка Редактирование порций Экстра' },
        { x: 97.5, y: 51.0, w: 2.0, h: 2.6, forAction: true, id: 'NomerStr', realName: 'N строки' },
        { x: 92.4, y: 50.9, w: 1.5, h: 2.8, forAction: true, id: 'NomerMatr', realName: 'N матрицы' },
        { x: 86.2, y: 51.0, w: 1.75, h: 2.9, forAction: true, id: 'B2_2', realName: 'Кнопка Запись порции в Б2' },
        { x: 84.1, y: 51.0, w: 1.8, h: 2.9, forAction: true, id: 'B1_2', realName: 'Кнопка Запись порции в Б1' },

        { x: 85.4, y: 10.1, w: 6.5, h: 4.1, forAction: true, id: 'avaria_ostanov', realName: 'Кнопка Аварийная остановка' },
        { x: 92.2, y: 10.1, w: 6.5, h: 4.1, forAction: true, id: 'oshibka_BZU', realName: 'Кнопка Ошибка БЗУ' },

        { x: 92.2, y: 14.4, w: 6.5, h: 3.0, forAction: true, id: 'sbros ohibki', realName: 'Кнопка Сброс ошибки' },
        { x: 85.85, y: 71.5, w: 5.2, h: 2.2, forAction: true, id: 'Na konveer', realName: 'Кнопка На конвейер' },
        { x: 85.8, y: 79.8, w: 5.4, h: 2.2, forAction: true, id: 'V peh', realName: 'Кнопка В печь' },
        { x: 13.7, y: 0.0, w: 3.4, h: 3.3, name: 'dp', },
        { x: 18.0, y: 0.0, w: 4.5, h: 3.3, name: 'Kontrol_progara', },
        { x: 45.5, y: 0.0, w: 3.5, h: 3.3, name: 'bzu', },
        { x: 60, y: 0.0, w: 5.5, h: 2.5, name: 'gazoochistka', },
      ]
    },
    {
      name: 'Kontrol_progara', helpers: [
        { x: 13.7, y: 0.0, w: 3.4, h: 3.3, name: 'dp', },
        { x: 18.0, y: 0.0, w: 4.5, h: 3.3, name: 'Kontrol_progara', },
        { x: 45.5, y: 0.0, w: 3.5, h: 3.3, name: 'bzu', },
        { x: 60, y: 0.0, w: 5.5, h: 2.5, name: 'gazoochistka', },
        // #region Kontrol_progara Table 1
        { x: 20.10, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_1',    realName: 'Контоль прогара холодильников фурм 1', },
        { x: 24.00, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_2',    realName: 'Контоль прогара холодильников фурм 2', },
        { x: 27.95, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_3',    realName: 'Контоль прогара холодильников фурм 3', },
        { x: 31.80, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_4',    realName: 'Контоль прогара холодильников фурм 4', },
        { x: 35.60, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_5',    realName: 'Контоль прогара холодильников фурм 5', },
        { x: 39.65, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_6',    realName: 'Контоль прогара холодильников фурм 6', },
        { x: 43.60, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_7',    realName: 'Контоль прогара холодильников фурм 7', },
        { x: 47.30, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_8',    realName: 'Контоль прогара холодильников фурм 8', },
        { x: 51.25, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_9',    realName: 'Контоль прогара холодильников фурм 9', },
        { x: 55.10, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_10',   realName: 'Контоль прогара холодильников фурм 10', },
        { x: 58.95, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_11',   realName: 'Контоль прогара холодильников фурм 11', },
        { x: 62.80, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_12',   realName: 'Контоль прогара холодильников фурм 12', },
        { x: 66.65, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_13',   realName: 'Контоль прогара холодильников фурм 13', },
        { x: 70.70, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_14',   realName: 'Контоль прогара холодильников фурм 14', },
        { x: 74.50, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_15',   realName: 'Контоль прогара холодильников фурм 15', },
        { x: 78.30, y: 17.75, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_16',   realName: 'Контоль прогара холодильников фурм 16', },

        { x: 20.05, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_17',   realName: 'Контоль прогара холодильников фурм 17', },
        { x: 23.90, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_18',   realName: 'Контоль прогара холодильников фурм 18', },
        { x: 27.90, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_19',   realName: 'Контоль прогара холодильников фурм 19', },
        { x: 31.80, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_20',   realName: 'Контоль прогара холодильников фурм 20', },
        { x: 35.55, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_21',   realName: 'Контоль прогара холодильников фурм 21', },
        { x: 39.65, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_22',   realName: 'Контоль прогара холодильников фурм 22', },
        { x: 43.60, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_23',   realName: 'Контоль прогара холодильников фурм 23', },
        { x: 47.30, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_24',   realName: 'Контоль прогара холодильников фурм 24', },
        { x: 51.25, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_25',   realName: 'Контоль прогара холодильников фурм 25', },
        { x: 55.10, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_26',   realName: 'Контоль прогара холодильников фурм 26', },
        { x: 58.95, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_27',   realName: 'Контоль прогара холодильников фурм 27', },
        { x: 62.80, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_28',   realName: 'Контоль прогара холодильников фурм 28', },
        { x: 66.65, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_29',   realName: 'Контоль прогара холодильников фурм 29', },
        { x: 70.65, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_30',   realName: 'Контоль прогара холодильников фурм 30', },
        { x: 74.60, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_31',   realName: 'Контоль прогара холодильников фурм 31', },
        { x: 78.40, y: 30.10, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T1_32',   realName: 'Контоль прогара холодильников фурм 32', },
// #endregion

        // #region Kontrol_progara Table 2
        { x: 20.00, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_1',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 1', },
        { x: 23.80, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_2',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 2', },
        { x: 27.80, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_3',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 3', },
        { x: 31.65, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_4',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 4', },
        { x: 35.50, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_5',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 5', },
        { x: 39.50, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_6',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 6', },
        { x: 43.50, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_7',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 7', },
        { x: 47.20, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_8',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 8', },
        { x: 51.25, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_9',    realName: 'Контроль прогара фурм по охлаждению носка фурмы 9', },
        { x: 55.10, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_10',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 10', },
        { x: 58.95, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_11',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 11', },
        { x: 62.80, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_12',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 12', },
        { x: 66.65, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_13',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 13', },
        { x: 70.70, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_14',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 14', },
        { x: 74.60, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_15',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 15', },
        { x: 78.45, y: 46.1, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_16',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 16', },

        { x: 19.90, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_17',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 17', },
        { x: 23.80, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_18',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 18', },
        { x: 27.80, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_19',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 19', },
        { x: 31.60, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_20',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 20', },
        { x: 35.50, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_21',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 21', },
        { x: 39.50, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_22',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 22', },
        { x: 43.50, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_23',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 23', },
        { x: 47.20, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_24',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 24', },
        { x: 51.25, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_25',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 25', },
        { x: 55.10, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_26',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 26', },
        { x: 58.95, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_27',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 27', },
        { x: 62.80, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_28',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 28', },
        { x: 66.65, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_29',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 29', },
        { x: 70.65, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_30',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 30', },
        { x: 74.60, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_31',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 31', },
        { x: 78.50, y: 58.5, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T2_32',   realName: 'Контроль прогара фурм по охлаждению носка фурмы 32', },
// #endregion 

        // #region Kontrol_progara Table 3
        { x: 19.85, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_1',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 1', },
        { x: 23.70, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_2',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 2', },
        { x: 27.70, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_3',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 3', },
        { x: 31.60, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_4',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 4', },
        { x: 35.50, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_5',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 5', },
        { x: 39.50, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_6',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 6', },
        { x: 43.50, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_7',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 7', },
        { x: 47.20, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_8',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 8', },
        { x: 51.25, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_9',    realName: 'Контроль прогара фурм по охлаждению тела фурмы 9', },
        { x: 55.10, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_10',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 10', },
        { x: 58.95, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_11',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 11', },
        { x: 62.80, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_12',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 12', },
        { x: 70.75, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_13',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 13', },
        { x: 70.80, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_14',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 14', },
        { x: 74.70, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_15',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 15', },
        { x: 78.50, y: 74.8, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_16',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 16', },
        
        { x: 19.80, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_17',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 17', },
        { x: 23.70, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_18',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 18', },
        { x: 27.70, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_19',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 19', },
        { x: 31.60, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_20',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 20', },
        { x: 35.50, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_21',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 21', },
        { x: 39.50, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_22',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 22', },
        { x: 43.50, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_23',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 23', },
        { x: 47.20, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_24',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 24', },
        { x: 51.25, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_25',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 25', },
        { x: 55.10, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_26',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 26', },
        { x: 58.95, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_27',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 27', },
        { x: 62.80, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_28',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 28', },
        { x: 70.75, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_29',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 29', },
        { x: 70.80, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_30',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 30', },
        { x: 74.70, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_31',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 31', },
        { x: 78.50, y: 87.3, w: 2.6, h: 3.0, forAction: true, id: 'Progar_T3_32',   realName: 'Контроль прогара фурм по охлаждению тела фурмы 32', },
// #endregion
      ]
    },
    {
      name: 'gazoochistka', helpers: [
        { x: 13.7, y: 0.0, w: 3.4, h: 3.3, name: 'dp', },
        { x: 18.0, y: 0.0, w: 4.5, h: 3.3, name: 'Kontrol_progara', },
        { x: 45.5, y: 0.0, w: 3.5, h: 3.3, name: 'bzu', },
        { x: 60, y: 0.0, w: 5.5, h: 2.5, name: 'gazoochistka', },
        { x: 8.500, y: 21.10, w: 5.0, h: 5.3, id: 'gaz_sbrosOshibok',  realName: 'Сброс ошибки', forAction: true,},
        { x: 16.60, y: 19.85, w: 4.3, h: 4.5, id: 'gaz_AKZ',           realName: 'ЭКЗ',          forAction: true,},
        { x: 21.30, y: 19.85, w: 4.4, h: 4.5, id: 'gaz_GUBT',          realName: 'ГУБТ',         forAction: true,},
        { x: 37.00, y: 18.20, w: 3.8, h: 3.9, id: 'gaz_Mectn',         realName: 'Местн',        forAction: true,},
        { x: 41.95, y: 18.20, w: 3.8, h: 3.9, id: 'gaz_Dist',          realName: 'Дист',         forAction: true,},
        { x: 37.00, y: 23.20, w: 4.6, h: 4.2, id: 'gaz_AVSTOP',        realName: 'АВ.СТОП',      forAction: true,},
        { x: 41.95, y: 22.70, w: 3.7, h: 5.0, id: 'gaz_sbrosAvarii',   realName: 'Сброс аварии', forAction: true,},

        { x: 57.30, y: 23.30, w: 6.5, h: 4.6, id: 'gaz_PkolGaza',      realName: 'Р.кол.газа',   forAction: true,},
        { x: 57.30, y: 28.80, w: 6.5, h: 4.6, id: 'gaz_dPpechiObsh',   realName: 'dP печи общ',  forAction: true,},

        { x: 72.00, y: 19.2, w: 6.9, h: 3.6, id: 'gaz_AKZ1_avtomat',   realName: 'ЭКЗ-1  Автомат.',  forAction: true,}, 
        { x: 72.00, y: 23.3, w: 6.9, h: 3.6, id: 'gaz_AKZ1_ruchnoy',   realName: 'ЭКЗ-1  Ручной',    forAction: true,},   
        { x: 72.05, y: 27.5, w: 6.9, h: 3.6, id: 'gaz_AKZ1_mestnuy',   realName: 'ЭКЗ-1  Местный',   forAction: true,},  
        { x: 72.05, y: 31.7, w: 6.9, h: 3.6, id: 'gaz_AKZ1_distanc',   realName: 'ЭКЗ-1  Дистанц.',  forAction: true,}, 
        { x: 72.05, y: 35.9, w: 6.9, h: 3.6, id: 'gaz_AKZ1_razblok',   realName: 'ЭКЗ-1  Разблок.',  forAction: true,}, 

        { x: 72.90, y: 44.4, w: 5.35, h: 2.7, id: 'gaz_AKZ1_open',     realName: 'ЭКЗ-1 Открыть',       forAction: true,}, 
        { x: 72.90, y: 47.2, w: 5.35, h: 2.7, id: 'gaz_AKZ1_close',    realName: 'ЭКЗ-1 Закрыть',       forAction: true,}, 
        { x: 71.50, y: 51.10, w: 4.0, h: 4.5, id: 'gaz_AKZ1_error',    realName: 'ЭКЗ-1 Ошибка',        forAction: true,}, 
        { x: 75.80, y: 51.10, w: 4.0, h: 4.5, id: 'gaz_AKZ1_reset',    realName: 'ЭКЗ-1 Сброс ошибки',  forAction: true,}, 

        { x: 81.10, y: 19.2, w: 6.9, h: 3.6, id: 'gaz_AKZ2_avtomat',   realName: 'ЭКЗ-2  Автомат.',  forAction: true,}, 
        { x: 81.10, y: 23.3, w: 6.9, h: 3.6, id: 'gaz_AKZ2_ruchnoy',   realName: 'ЭКЗ-2  Ручной',    forAction: true,},   
        { x: 81.15, y: 27.5, w: 6.9, h: 3.6, id: 'gaz_AKZ2_mestnuy',   realName: 'ЭКЗ-2  Местный',   forAction: true,},  
        { x: 81.15, y: 31.7, w: 6.9, h: 3.6, id: 'gaz_AKZ2_distanc',   realName: 'ЭКЗ-2  Дистанц.',  forAction: true,}, 
        { x: 81.15, y: 35.9, w: 6.9, h: 3.6, id: 'gaz_AKZ2_razblok',   realName: 'ЭКЗ-2  Разблок.',  forAction: true,},

        { x: 82.00, y: 44.4, w: 5.35, h: 2.7, id: 'gaz_AKZ2_open',     realName: 'ЭКЗ-2 Открыть',       forAction: true,}, 
        { x: 82.00, y: 47.2, w: 5.35, h: 2.7, id: 'gaz_AKZ2_close',    realName: 'ЭКЗ-2 Закрыть',       forAction: true,}, 
        { x: 80.70, y: 51.10, w: 4.0, h: 4.5, id: 'gaz_AKZ2_error',    realName: 'ЭКЗ-2 Ошибка',        forAction: true,}, 
        { x: 84.90, y: 51.10, w: 4.0, h: 4.5, id: 'gaz_AKZ2_reset',    realName: 'ЭКЗ-2 Сброс ошибки',  forAction: true,}, 

        { x: 90.15, y: 19.2, w: 6.9, h: 3.6, id: 'gaz_AKZ3_avtomat',   realName: 'ЭКЗ-3  Автомат.',  forAction: true,}, 
        { x: 90.15, y: 23.3, w: 6.9, h: 3.6, id: 'gaz_AKZ3_ruchnoy',   realName: 'ЭКЗ-3  Ручной',    forAction: true,},   
        { x: 90.15, y: 27.5, w: 6.9, h: 3.6, id: 'gaz_AKZ3_mestnuy',   realName: 'ЭКЗ-3  Местный',   forAction: true,},  
        { x: 90.20, y: 31.7, w: 6.9, h: 3.6, id: 'gaz_AKZ3_distanc',   realName: 'ЭКЗ-3  Дистанц.',  forAction: true,}, 
        { x: 90.20, y: 35.9, w: 6.9, h: 3.6, id: 'gaz_AKZ3_razblok',   realName: 'ЭКЗ-3  Разблок.',  forAction: true,},
        { x: 90.20, y: 35.9, w: 6.9, h: 3.6, id: 'gaz_AKZ3_razblok',   realName: 'ЭКЗ-3  Разблок.',  forAction: true,},

        { x: 91.05, y: 44.4, w: 5.35, h: 2.7, id: 'gaz_AKZ3_open',     realName: 'ЭКЗ-3 Открыть',       forAction: true,}, 
        { x: 91.05, y: 47.2, w: 5.35, h: 2.7, id: 'gaz_AKZ3_close',    realName: 'ЭКЗ-3 Закрыть',       forAction: true,}, 
        { x: 89.70, y: 51.10, w: 4.0, h: 4.5, id: 'gaz_AKZ3_error',    realName: 'ЭКЗ-3 Ошибка',        forAction: true,}, 
        { x: 94.00, y: 51.10, w: 4.0, h: 4.5, id: 'gaz_AKZ3_reset',    realName: 'ЭКЗ-3 Сброс ошибки',  forAction: true,}, 
      ]
    },
    {
      name: 'Shagi_upraleniya', helpers: [
        { x: 14.7, y: 27.4, w: 1.7, h: 3.1, removeWindow: 'Shagi_upraleniya', forAction: true, id: 'shagi_uprav_close_btn', realName: 'Закрыть' },
        { x: 10.1, y: 92.4, w: 4.9, h: 2.2, forAction: true, id: 'shagi_uprav_zakryt', realName: 'Закрыть', },
      ]
    },
    {
      name: 'VN3_Perekidka_iz_Otdeleniya_v_Nagrev', helpers: [
        { x: 63.7, y: 3.50, w: 2.4, h: 3.0, forAction: true, id: 'pericNagrev_close_btn', realName: 'Закрыть',  removeWindow: 'VN3_Perekidka_iz_Otdeleniya_v_Nagrev',},
        { x: 31.8, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_pusk_btn',  realName: 'Пуск',     value: { window: 'O_n_k_na_VNK_posle_2', x: 678, y: 917 },},
        { x: 35.0, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_stop_btn',  realName: 'Стоп', },
        { x: 38.2, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_reset_btn', realName: 'Сброс', },
      ]
    }
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
    maxCountSvgElems: 0,
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
const timeDiff = -0;
let tempActions = [
  // Первый сценарий  
  [],
  // 2 scenario
  [
    {
      lifeTime: '11:50:00',
      startTime: timeDiff + 0,
    },
    ////-----------------------------------1
    {
      chapterText: 'Сообщение о намеченном пуске ДП',
      scenarioText: 'Сообщить о намеченном пуске доменной печи',
      text: 'Сообщить о намеченном пуске доменной печи.',
      sender: 'Система',
      audio: 'tts-45',  //3
      startTime: timeDiff + 3,
    },
    ////--------------------------------2-6---------------------------------------
    {
      text: 'Нажать на кнопки с надписью: «Газовый цех», «Насосный цех», «Кислородный цех», «ЭВС», «Угольная» на телефоне.',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 7,
    },
    {
      multi: [  
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
        },
        {
          text: 'Сейчас будем раздувать доменную печь №6.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton016',
          },
          audio: 'tts-vo59',
        },
      ],
      startTime: timeDiff + 7.5,
      human: true,
    },
    ////--------------------------------7----------------------------------------
    {      lifeTime: '12:00:00',      startTime: timeDiff + 8,    },
    {
      chapterText: 'Снятие печи с «тяги»',
      scenarioText: 'По команде сменного мастера, снять печь с «тяги»',
      text: 'Снять печь с тяги.',
      sender: 'Мастер печи',
      audio: 'tts-46',  //  1.6
      startTime: timeDiff + 9,
    },
    ////--------------------------------8----------------------------------------
    {
      action:{
        helper2D: [
          { x: 86.4, y: 20.9, w: 0.0, h: 0.0, id: 'kl022'},
          { x: 86.4, y: 20.9, w: 2.0, h: 3.0, id: 'kl022_falsh'},
        ]
      },
      text: 'Убедиться, что клапан тяги 022 закрыт.',
      sender: 'Система',
      audio: 'tts-46--8', // 5.9
      startTime: timeDiff + 11.5,
    },
    {
      action: {
        target2D: 'kl022_falsh',
        helper2D: [
          { x: 86.4, y: 20.9, w: 2.0, h: 3.0, id: 'kl022'},
          { x: 86.4, y: 20.9, w: 0.0, h: 0.0, id: 'kl022_falsh'},
        ]
      },
      startTime: timeDiff + 12,
      human: true,
    },
    {      lifeTime: '12:03:00',      startTime: timeDiff + 13,    },
    ////--------------------------------9----------------------------------------
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 14,
    },
    { action: { target3D: 'ButtonHightlight_046', /* Литейный фурменный поддоменник*/ },  startTime: timeDiff + 15, human: true, }, 
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_on', },                        startTime: timeDiff + 16, },
    {
      text: 'Печь с тяги снята.',
      sender: 'Газовщик',
      audio: 'tts-vo60',
      startTime: timeDiff + 17,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', },                       startTime: timeDiff + 18, },
    ////--------------------------------10----------------------------------------
    {
      chapterText: 'Повышение давления ГД до 0,3 кгс/см²',
      scenarioText: 'Открыть шибера',
      text: 'Открывайте шибера и делайте 0,3.',
      audio: 'tts-vo61', //  4
      sender: 'Мастер печи',
      startTime: timeDiff + 19,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 20,  human: true, },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_on', },  startTime: timeDiff + 21, },
    {
      text: 'Открываю шибера и делаю 0,3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo62',  // 4.2
      startTime: timeDiff + 22,
    },
    ////--------------------------------11----------------------------------------
    {      lifeTime: '12:04:00',      startTime: timeDiff + 26.3,    },
    {
      text: 'Установить ВНК №1 в положение «Индивидуальное дутье».',
      sender: 'Система',
      audio: 'tts-47', // 4.5
      startTime: timeDiff + 27.3,
    },
    ////------------------------------12---------------------
    {
      text: 'Открыть клапан сброса 110.',
      sender: 'Система',
      audio: 'tts-47New_11', // 2.6
      startTime: timeDiff + 32.5,
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

            { name: 'btn_auto_text',          color: '#6E6E6E' },
            { name: 'btn_auto_2',                       color: '#e6e6e6',  stroke: '#b3b3b3' },
            
            { name: 'btn_ruchnoy_text',       color: '#000000' }, 
            { name: 'btn_ruchnoy_2',                    color: '#ffffff',  stroke: '#000000' },
             
            { name: 'btn_open_text',          color: '#6E6E6E' }, 
            { name: 'btn_open_2',                       color: '#e6e6e6',  stroke: '#b3b3b3' },
            
            { name: 'btn_close_text',         color: '#6E6E6E' },
            { name: 'btn_close_2',                      color: '#e6e6e6',  stroke: '#b3b3b3' },

            { name: 'btn_stop_text',          color: '#6E6E6E' },
            { name: 'btn_stop_2',                       color: '#e6e6e6',  stroke: '#b3b3b3' },

            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_2',                       color: '#e6e6e6', stroke: '#b3b3b3' },
            
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',     color: '#ffffff', stroke: '#000000' },
            
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#00FF00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#00FF00'}, // Блокировки-Закрытие
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1',           },//
          { x: 82.80, y: 76.20, w: 4.0, h: 2.6, id: 'auto',               },
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'ruchnoi',            },//
          { x: 82.80, y: 80.20, w: 4.0, h: 2.6, id: 'open_vn',            },//
          { x: 87.10, y: 80.20, w: 4.0, h: 2.6, id: 'close_ventil',       },
          { x: 82.80, y: 83.10, w: 8.5, h: 2.9, id: 'stop',               },
          { x: 82.80, y: 88.40, w: 8.5, h: 2.6, id: 'sbros_oshibki',      },
          { x: 82.80, y: 93.80, w: 8.5, h: 2.6, id: 'baypas_blokirovok',  }//
        ]
      },
      startTime: timeDiff + 33.0,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'ruchnoi',
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
      startTime: timeDiff + 33.1,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 110' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_window_text', text: 'Закрыт' },

            { name: 'btn_auto_text',          color: '#000000' },
            { name: 'btn_auto_2',                       color: '#ffffff', stroke: '#000000' },

            { name: 'btn_ruchnoy_text',       color: '#6E6E6E' },
            { name: 'btn_ruchnoy_2',                    color: '#e6e6e6', stroke: '#b3b3b3' },
            
            { name: 'btn_open_text',          color: '#000000' },
            { name: 'btn_open_2',                       color: '#ffffff', stroke: '#000000' },
            
            { name: 'btn_close_text',         color: '#6E6E6E' },
            { name: 'btn_close_2',                      color: '#e6e6e6', stroke: '#b3b3b3' },

            { name: 'btn_stop_text',          color: '#000000' },
            { name: 'btn_stop_2',                       color: '#ffffff', stroke: '#000000' },

            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_2',                       color: '#e6e6e6', stroke: '#b3b3b3' },
            
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',              color: '#ffffff', stroke: '#000000' },
            
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#00FF00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#00FF00'}, // Блокировки-Закрытие
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1',           },//
          { x: 82.80, y: 76.20, w: 4.0, h: 2.6, id: 'auto',               },
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'ruchnoi',            },//
          { x: 82.80, y: 80.20, w: 4.0, h: 2.6, id: 'open_vn',            },//
          { x: 87.10, y: 80.20, w: 4.0, h: 2.6, id: 'close_ventil',       },
          { x: 82.80, y: 83.10, w: 8.5, h: 2.9, id: 'stop',               },
          { x: 82.80, y: 88.40, w: 8.5, h: 2.6, id: 'sbros_oshibki',      },
          { x: 82.80, y: 93.80, w: 8.5, h: 2.6, id: 'baypas_blokirovok',  }//
        ]
      },
      startTime: timeDiff + 33.2,
      human: true,
    },

    // окно ВН // Байпас всех блокировок
    {
      action: {
        target2D: 'baypas_blokirovok', 
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
      startTime: timeDiff + 33.3,
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
          elements: [
            { name: 'btn_baypas_vsekh_blokirovok_2',      color: '#00FF00', stroke: '#000000' },
          ],
        },
      },
      startTime: timeDiff + 33.4,
      human: true,
    },
    ////////  ------- //       old text: 'Перевести клапан 110 в открытый режим.',
    { 
      action:{
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1',           },//
          { x: 82.80, y: 76.20, w: 4.0, h: 2.6, id: 'auto',               },
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'ruchnoi',            },//
          { x: 82.80, y: 80.20, w: 4.0, h: 2.6, id: 'open_vn',            },//
          { x: 87.10, y: 80.20, w: 4.0, h: 2.6, id: 'close_ventil',       },
          { x: 82.80, y: 83.10, w: 8.5, h: 2.9, id: 'stop',               },
          { x: 82.80, y: 88.40, w: 8.5, h: 2.6, id: 'sbros_oshibki',      },
          { x: 82.80, y: 93.80, w: 8.5, h: 2.6, id: 'baypas_blokirovok',  }//
        ]
      },
      startTime: timeDiff + 33.5,
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
      startTime: timeDiff + 33.6,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            // по действиям раскидано
          ],
        },
      },
      startTime: timeDiff + 33.7,
      human: true,
    },
    { //1
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            
            
            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'VNK1_status_1', text: 'Индивидуал.' },
            { name: 'VNK1_status_2', text: 'Отделение' },

          ]
        }
      },
      startTime: timeDiff + 34,
    },
    { //2
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
           

            { name: 'vnk1_fire', opacity: '1' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '1' }, // обводка стрелка
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'VNK1_status_2', text: '' },
            { name: 'vnk1_stripes', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 35,
    },
    { //3
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
           
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'vnk1_stripes', color: '#e6e6e6' },

            { name: 'circle_dutyo',         color: '#000' },
            { name: 'circle_nagrev',        color: '#000' },
            { name: 'circle_otdeleniye_1',  color: '#000' },
            { name: 'circle_otdeleniye_2',  color: '#000' },
          ]
        }
      },
      startTime: timeDiff + 36,
    },
    { //4
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
           
            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка

            /// vnk1-sm
            { name: '7PI_13', text: '12.46' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },

          ]
        }
      },
      startTime: timeDiff + 37,
    },
    { //5
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
          

            /// vnk1-sm
            { name: '7PI_13', text: '12.47' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 38,
    },
    { //6
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
          
            /// vnk1-sm
            { name: '7PI_13', text: '12.52' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 39,
    },
    { //7
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
        
            /// vnk1-sm
            { name: '7PI_13', text: '12.47' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },

            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 40,
    },
    { //8
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
         

            /// vnk1-sm
            { name: '7PI_13', text: '12.49' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 41,
    },
    { //9
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
   
            /// vnk1-sm
            { name: '7PI_13', text: '12.52' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 42,
    },
    { //10
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открыт' },
     
            { name: 'btn_open_text',          color: '#6E6E6E' },  
            { name: 'btn_open_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_close_text',         color: '#000000' },  
            { name: 'btn_close_2',                      color: '#ffffff',   stroke: '#000000' },

            /// vnk1-sm
            { name: '7PI_13', text: '12.54' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 43,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 44,
      human: true,
    },
    ////////  -------
    {
      lifeTime: '12:04:00',
      startTime: timeDiff + 44.1,
  },
    ////--------------------------------13---------------------------------------- 118а
    {
      text: 'Открыть клапан холодного дутья 118а.',
      sender: 'Система',
      audio: 'tts-48 (1)', // 3.7
      startTime: timeDiff + 45,
    },
    //  Клапан 118a
    {
      action: {
        target2D: 'kl118a',  
        window2D: {
          elements: [ 
            { name: 'title_work_vn', text: 'Управление клапаном 118а' },
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
 
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
 
            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Закрыт' },
    
            { name: 'btn_auto_text',          color: '#6E6E6E' },  
            { name: 'btn_auto_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_ruchnoy_text',       color: '#000000' },  
            { name: 'btn_ruchnoy_2',                    color: '#ffffff',   stroke: '#000000' },
              
            { name: 'btn_open_text',          color: '#6E6E6E' },  
            { name: 'btn_open_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_close_text',         color: '#6E6E6E' },  
            { name: 'btn_close_2',                      color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_stop_text',          color: '#6E6E6E' },  
            { name: 'btn_stop_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
    
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_2',                        color: '#e6e6e6', stroke: '#b3b3b3' },
    
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',      color: '#ffffff', stroke: '#000000' },
    
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#00FF00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#ff1e00'}, // Блокировки-Закрытие
          ]
        },
      },
      startTime: timeDiff + 46,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'ruchnoiA',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 94.00, y: 60.6, w: 3.2, h: 2.6, id: 'close_vn' },   // нет
          { x: 90.40, y: 60.6, w: 3.2, h: 2.6, id: 'open_vn1' },   // да     
        ]
      },
      startTime: timeDiff + 46.1,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_window_text', text: 'Закрыт' },

            { name: 'btn_auto_text',          color: '#000000' },
            { name: 'btn_auto_2',                       color: '#ffffff', stroke: '#000000' },

            { name: 'btn_ruchnoy_text',       color: '#6E6E6E' },
            { name: 'btn_ruchnoy_2',                    color: '#e6e6e6', stroke: '#b3b3b3' },
            
            { name: 'btn_open_text',          color: '#000000' },
            { name: 'btn_open_2',                       color: '#ffffff', stroke: '#000000' },
            
            { name: 'btn_close_text',         color: '#6E6E6E' },
            { name: 'btn_close_2',                      color: '#e6e6e6', stroke: '#b3b3b3' },

            { name: 'btn_stop_text',          color: '#000000' },
            { name: 'btn_stop_2',                       color: '#ffffff', stroke: '#000000' },

            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_2',                       color: '#e6e6e6', stroke: '#b3b3b3' },
            
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',              color: '#ffffff', stroke: '#000000' },
            
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#ff1e00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#ff1e00'}, // Блокировки-Закрытие
          ]
        },
      },
      startTime: timeDiff + 46.2,
      human: true,
    },
    // окно ВН // Байпас всех блокировок
    {
      action: {
        target2D: 'baypas_blokirovokA', 
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех БЛОК' },
          ]
        }, 
        helper2D: [
          { x: 92.35, y: 78.20, w: 3.2, h: 2.6, id: 'close_vn' },   // нет
          { x: 88.75, y: 78.20, w: 3.2, h: 2.6, id: 'open_vn1' },   // да   
        ]
      },
      startTime: timeDiff + 46.3,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'btn_baypas_vsekh_blokirovok_2',      color: '#00FF00', stroke: '#000000' },
          ],
        },
      },
      startTime: timeDiff + 46.4,
      human: true,
    },
      // окно ВН  // Открыть
    {
      action: {
        target2D: 'open_vnA',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 90.2, y: 64.4, w: 3.2, h: 2.6, id: 'close_vn' },   // net
          { x: 86.6, y: 64.4, w: 3.2, h: 2.6, id: 'open_vn1' },   // da
        ]
      },
      startTime: timeDiff + 46.5,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'kl_118a_proc', text: '50' },
          ],
        },
      },
      startTime: timeDiff + 46.6,
      human: true,
    },
    { //1
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '55' },
            
            
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'VNK1_status_1', text: 'Индивидуал.' },
            { name: 'VNK1_status_2', text: '' },

          ]
        }
      },
      startTime: timeDiff + 47,
    },
    { //2
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '60' },

            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'VNK1_status_2', text: '' },
            { name: 'vnk1_stripes', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 48,
    },
    { //3
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '65' },

            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'vnk1_stripes', color: '#e6e6e6' },

            { name: 'circle_dutyo',         color: '#000' },
            { name: 'circle_nagrev',        color: '#000' },
            { name: 'circle_otdeleniye_1',  color: '#000' },
            { name: 'circle_otdeleniye_2',  color: '#000' },
          ]
        }
      },
      startTime: timeDiff + 49,
    },
    { //4
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '70' },

            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка

            /// vnk1-sm
            { name: '7PI_13', text: '12.87' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.37' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1017' },
            { name: 'vybor_signala', text: '1224' },

          ]
        }
      },
      startTime: timeDiff + 50,
    },
    { //5
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '75' },

            /// vnk1-sm
            { name: '7PI_13', text: '12.92' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.37' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 51,
    },
    { //6
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '80' },
            /// vnk1-sm
            { name: '7PI_13', text: '12.96' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.37' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 52,
    },
    { //7
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '85' },
            /// vnk1-sm
            { name: '7PI_13', text: '13.03' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },

            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 53,
    },
    { //8
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '90' },

            /// vnk1-sm
            { name: '7PI_13', text: '13.07' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 54,
    },
    { //9
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'kl_118a_proc', text: '95' },
            /// vnk1-sm
            { name: '7PI_13', text: '13.09' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 55,
    },
    { //10
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'kl_118a_proc', text: '100' },
            { name: 'btn_open_text',          color: '#6E6E6E' },  
            { name: 'btn_open_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_close_text',         color: '#000000' },  
            { name: 'btn_close_2',                      color: '#ffffff',   stroke: '#000000' },

            /// vnk1-sm
            { name: '7PI_13', text: '13.08' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.36' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 56,
    },
    {
      action: {
        target2D: 'close_w1A',
      },
      startTime: timeDiff + 56.1,
      human: true,
    },
    ////--------------------------------14---------------------------------------- 118
    {
      text: 'Открыть клапан холодного дутья 118.',
      audio: 'tts-48_118', // 3.6
      sender: 'Система',
      startTime: timeDiff + 57,
    },
    ////////  -------
    //  Клапан 118  //kl118
    {
      action: {
        target2D: 'kl118',  
        window2D: {
          elements: [ 
            { name: 'title_work_vn', text: 'Управление клапаном 118' },
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
 
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
 
            { name: 'status_control_vnk_text', text: 'Автоматический' },
            { name: 'status_window_text', text: 'Закрыт' },
    
            { name: 'btn_auto_text',          color: '#6E6E6E' },  
            { name: 'btn_auto_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_ruchnoy_text',       color: '#000000' },  
            { name: 'btn_ruchnoy_2',                    color: '#ffffff',   stroke: '#000000' },
              
            { name: 'btn_open_text',          color: '#6E6E6E' },  
            { name: 'btn_open_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_close_text',         color: '#6E6E6E' },  
            { name: 'btn_close_2',                      color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_stop_text',          color: '#6E6E6E' },  
            { name: 'btn_stop_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
    
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_2',                        color: '#e6e6e6', stroke: '#b3b3b3' },
    
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',      color: '#ffffff', stroke: '#000000' },
    
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#00FF00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#ff1e00'}, // Блокировки-Закрытие
          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1',           },//
          { x: 82.80, y: 76.20, w: 4.0, h: 2.6, id: 'auto',               },
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'ruchnoi',            },//
          { x: 82.80, y: 80.20, w: 4.0, h: 2.6, id: 'open_vn',            },//
          { x: 87.10, y: 80.20, w: 4.0, h: 2.6, id: 'close_ventil',       },
          { x: 82.80, y: 83.10, w: 8.5, h: 2.9, id: 'stop',               },
          { x: 82.80, y: 88.40, w: 8.5, h: 2.6, id: 'sbros_oshibki',      },
          { x: 82.80, y: 93.80, w: 8.5, h: 2.6, id: 'baypas_blokirovok',  }//
        ]
      },
      startTime: timeDiff + 58.0,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'ruchnoi',
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
      startTime: timeDiff + 58.1,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'left_vn', color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_window_text', text: 'Закрыт' },

            { name: 'btn_auto_text',          color: '#000000' },
            { name: 'btn_auto_2',                       color: '#ffffff', stroke: '#000000' },

            { name: 'btn_ruchnoy_text',       color: '#6E6E6E' },
            { name: 'btn_ruchnoy_2',                    color: '#e6e6e6', stroke: '#b3b3b3' },
            
            { name: 'btn_open_text',          color: '#000000' },
            { name: 'btn_open_2',                       color: '#ffffff', stroke: '#000000' },
            
            { name: 'btn_close_text',         color: '#6E6E6E' },
            { name: 'btn_close_2',                      color: '#e6e6e6', stroke: '#b3b3b3' },

            { name: 'btn_stop_text',          color: '#000000' },
            { name: 'btn_stop_2',                       color: '#ffffff', stroke: '#000000' },

            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_2',                       color: '#e6e6e6', stroke: '#b3b3b3' },
            
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',              color: '#ffffff', stroke: '#000000' },
          ]
        },
        
      },
      startTime: timeDiff + 58.2,
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
      startTime: timeDiff + 58.3,
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
          elements: [
            { name: 'btn_baypas_vsekh_blokirovok_2',      color: '#00FF00', stroke: '#000000' },
          ],
        },
      },
      startTime: timeDiff + 58.4,
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
      startTime: timeDiff + 58.5,
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
      },
      startTime: timeDiff + 58.6,
      human: true,
    },
    { //1
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            
            

          ]
        }
      },
      startTime: timeDiff + 59,
    },
    { //2
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
           
          ]
        }
      },
      startTime: timeDiff + 60,
    },
    { //3
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
          

            { name: 'circle_dutyo',         color: '#000' },
            { name: 'circle_nagrev',        color: '#000' },
            { name: 'circle_otdeleniye_1',  color: '#000' },
            { name: 'circle_otdeleniye_2',  color: '#000' },
          ]
        }
      },
      startTime: timeDiff + 61,
    },
    { //4
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
           
            

            /// vnk1-sm
            { name: '7PI_13', text: '13.09' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },

          ]
        }
      },
      startTime: timeDiff + 62,
    },
    { //5
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
          

            /// vnk1-sm
            { name: '7PI_13', text: '13.10' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 63,
    },
    { //6
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
          
            /// vnk1-sm
            { name: '7PI_13', text: '13.11' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 64,
    },
    { //7
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
        
            /// vnk1-sm
            { name: '7PI_13', text: '13.12' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },

            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 65,
    },
    { //8
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
         

            /// vnk1-sm
            { name: '7PI_13', text: '13.13' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 66,
    },
    { //9
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
   
            /// vnk1-sm
            { name: '7PI_13', text: '13.13' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 67,
    },
    { //10
      action:{
        window2D:{
          elements:[
            { name: 'kl_118',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открыт' },
     
            { name: 'btn_open_text',          color: '#6E6E6E' },  
            { name: 'btn_open_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_close_text',         color: '#000000' },  
            { name: 'btn_close_2',                      color: '#ffffff',   stroke: '#000000' },

            /// vnk1-sm
            { name: '7PI_13', text: '13.15' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.38' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 68,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 68.1,
      human: true,
    },
    
    ////--------------------------------15---------------------------------------- 119
    {
      text: 'Открыть клапан 119 горячего дутья.',
      sender: 'Система',
      audio: 'tts-49_new_15', // 3.7
      startTime: timeDiff + 69,
    },
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
            
            { name: 'btn_auto_text',          color: '#6E6E6E' },  
            { name: 'btn_auto_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_ruchnoy_text',       color: '#000000' },  
            { name: 'btn_ruchnoy_2',                    color: '#ffffff',   stroke: '#000000' },
              
            { name: 'btn_open_text',          color: '#6E6E6E' },  
            { name: 'btn_open_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_close_text',         color: '#6E6E6E' },  
            { name: 'btn_close_2',                      color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_stop_text',          color: '#6E6E6E' },  
            { name: 'btn_stop_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
    
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_2',                        color: '#e6e6e6', stroke: '#b3b3b3' },
    
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',      color: '#ffffff', stroke: '#000000' },
    
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#00FF00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#00FF00'}, // Блокировки-Закрытие
          ]
        },
        helper2D: [
          { x: 83.15, y: 44.12, w: 1.50, h: 2.0, id: 'close_w1',           },//
          { x: 75.70, y: 52.02, w: 4.05, h: 2.6, id: 'auto',               },
          { x: 80.01, y: 52.02, w: 4.05, h: 2.6, id: 'ruchnoi',            },//

          { x: 75.70, y: 55.85, w: 4.05, h: 2.6, id: 'open_vn',            },
          { x: 80.01, y: 55.85, w: 4.05, h: 2.6, id: 'close_ventil',       },

          { x: 75.70, y: 58.85, w: 8.50, h: 2.9, id: 'stop',               },
          { x: 75.70, y: 64.10, w: 8.50, h: 2.6, id: 'sbros_oshibki',      },
          { x: 75.70, y: 69.40, w: 8.50, h: 2.6, id: 'baypas_blokirovok',  },//
        ]
      },
      startTime: timeDiff + 70,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'ruchnoi',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1636,
            y: 523
          },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 85.55, y: 54.7, w: 3.2, h: 2.6, id: 'close_vn' },   // нет
          { x: 82.10, y: 54.7, w: 3.2, h: 2.6, id: 'open_vn1' },   // да
        ]
      },
      startTime: timeDiff + 70.1,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_control_vnk_text', text: 'Ручной' },

            { name: 'btn_auto_text',          color: '#000000' },  
            { name: 'btn_auto_2',                       color: '#ffffff',   stroke: '#000000' },
              
            { name: 'btn_ruchnoy_text',       color: '#6E6E6E' },  
            { name: 'btn_ruchnoy_2',                    color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_open_text',          color: '#000000' },  
            { name: 'btn_open_2',                       color: '#ffffff',   stroke: '#000000' },
              
            { name: 'btn_close_text',         color: '#6E6E6E' },  
            { name: 'btn_close_2',                      color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_stop_text',          color: '#000000' },  
            { name: 'btn_stop_2',                       color: '#ffffff',   stroke: '#000000' },
    
            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_2',                        color: '#e6e6e6', stroke: '#b3b3b3' },
    
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },  
            { name: 'btn_baypas_vsekh_blokirovok_2',              color: '#ffffff',   stroke: '#000000' },

          ]
        },
      },
      startTime: timeDiff + 70.2,
      human: true,
    },

    // окно ВН // Байпас всех блокировок
    {
      action: {
        target2D: 'baypas_blokirovok', 
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1636,
            y: 693
          },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех БЛОК' },
          ]
        }, 
        helper2D: [
          { x: 85.55, y: 71.90, w: 3.2, h: 2.6, id: 'close_vn' },   // нет
          { x: 82.10, y: 71.90, w: 3.2, h: 2.6, id: 'open_vn1' },   // да
        ]
      },
      startTime: timeDiff + 70.3,
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
          elements: [
            { name: 'btn_baypas_vsekh_blokirovok_2',      color: '#00FF00', stroke: '#000000' },
          ],
        },
      },
      startTime: timeDiff + 70.4,
      human: true,
    },
    // окно ВН  // Открыть
    {
      action: {
        target2D: 'open_vn',
        window2D: {
          newPositionWindow: {  //  wind 2 
            x: 1552,
            y: 562
          },
          elements: [
            { name: 'title_open_vn', text: 'Открыть' },
          ],
        },
        helper2D: [
          { x: 81.40, y: 58.60, w: 3.2, h: 2.6, id: 'close_vn' },   // нет
          { x: 77.80, y: 58.60, w: 3.2, h: 2.6, id: 'open_vn1' },   // да
        ]
      },
      startTime: timeDiff + 70.5,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
  
          ],
        },
      },
      startTime: timeDiff + 70.6,
      human: true,
    },
    { //1
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            
            
            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'VNK1_status_1', text: 'Индивидуал.' },
            { name: 'VNK1_status_2', text: '' },

            /// vnk1-sm
            { name: '7PI_13', text: '12.93' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.75' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '241' },
            { name: '1TI_28_1', text: '243' },
            { name: '1TI_28_2', text: '239' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },

          ]
        }
      },
      startTime: timeDiff + 71,
    },
    { //2
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
            /// vnk1-sm
            { name: '7PI_13', text: '12.90' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.75' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '241' },
            { name: '1TI_28_1', text: '243' },
            { name: '1TI_28_2', text: '239' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 72,
    },
    { //3
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
           
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'vnk1_stripes', color: '#e6e6e6' },

            { name: 'circle_dutyo',         color: '#000' },
            { name: 'circle_nagrev',        color: '#000' },
            { name: 'circle_otdeleniye_1',  color: '#000' },
            { name: 'circle_otdeleniye_2',  color: '#000' },
            /// vnk1-sm
            { name: '7PI_13', text: '12.88' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.75' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '241' },
            { name: '1TI_28_1', text: '243' },
            { name: '1TI_28_2', text: '239' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 73,
    },
    { //4
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
           
            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            /// vnk1-sm
            { name: '7PI_13', text: '12.83' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.75' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '241' },
            { name: '1TI_28_1', text: '243' },
            { name: '1TI_28_2', text: '239' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1019' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 74,
    },
    { //5
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
          

            /// vnk1-sm
            { name: '7PI_13', text: '12.60' },

            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 

            { name: '1FI_02', text: '0' },


            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.90' },

            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '244' },
            { name: '1TI_28_1', text: '245' },
            { name: '1TI_28_2', text: '242' },

            
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },

            { name: '1PI_01', text: '1' },

            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 75,
    },
    { //6
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
            /// vnk1-sm
            { name: '7PI_13', text: '12.56' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.90' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '243' },
            { name: '1TI_28_1', text: '242' },
            { name: '1TI_28_2', text: '238' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 76,
    },
    { //7
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            /// vnk1-sm
            { name: '7PI_13', text: '12.54' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.91' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '243' },
            { name: '1TI_28_1', text: '242' },
            { name: '1TI_28_2', text: '238' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 77,
    },
    { //8
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открывается' },
            /// vnk1-sm
            { name: '7PI_13', text: '12.51' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.92' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '243' },
            { name: '1TI_28_1', text: '242' },
            { name: '1TI_28_2', text: '238' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 78,
    },
    { //9
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Открывается' },
            /// vnk1-sm
            { name: '7PI_13', text: '12.48' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.93' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '240' },
            { name: '1TI_28_1', text: '242' },
            { name: '1TI_28_2', text: '238' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 79,
    },
    { //10
      action:{
        window2D:{
          elements:[
            { name: 'kl_119',   color: '#00FF00' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_window_text', text: 'Открыт' },
     
            { name: 'btn_open_text',          color: '#6E6E6E' },  
            { name: 'btn_open_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_close_text',         color: '#000000' },  
            { name: 'btn_close_2',                      color: '#ffffff',   stroke: '#000000' },

            /// vnk1-sm
            { name: '7PI_13', text: '12.47' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '17.95' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '241' },
            { name: '1TI_28_1', text: '242' },
            { name: '1TI_28_2', text: '238' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 80,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 80.1,
      human: true,
    },
    
    ////--------------------------------16--------------------------//// ЗАКРЫТЬ 118а
    {
      text: 'Закрыть клапан холодного дутья 118а.',
      sender: 'Система',
      audio: 'tts--16', // 3.7
      startTime: timeDiff + 95,
    },
    //  Клапан 118a
    {
      action: {
        target2D: 'kl118a',  
        window2D: {
          elements: [ 
            { name: 'title_work_vn', text: 'Управление клапаном 118а' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
 
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
 
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Открыт' },
    
            { name: 'btn_auto_text',          color: '#000000' },  
            { name: 'btn_auto_2',                       color: '#ffffff',   stroke: '#000000' },
              
            { name: 'btn_ruchnoy_text',       color: '#6E6E6E' },  
            { name: 'btn_ruchnoy_2',                    color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_open_text',          color: '#6E6E6E' },  
            { name: 'btn_open_2',                       color: '#e6e6e6',   stroke: '#b3b3b3' },
              
            { name: 'btn_close_text',         color: '#000000' },  
            { name: 'btn_close_2',                      color: '#ffffff',   stroke: '#000000' },
              
            { name: 'btn_stop_text',          color: '#000000' },  
            { name: 'btn_stop_2',                       color: '#ffffff',   stroke: '#000000' },
    
            { name: 'btn_sbros_oshibki_text', color: '#000000' },  
            { name: 'btn_reset_2',                      color: '#ffffff',   stroke: '#000000' },
    
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',      color: '#00FF00', stroke: '#000000' },
    
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#ff1e00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#00FF00'}, // Блокировки-Закрытие
          ]
        },
      },
      startTime: timeDiff + 96,
      human: true,
    },
    // окно ВН  // Закрыть
    {
      action: {
        target2D: 'close_ventilA',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Закрыть' },
          ],
        },
        helper2D: [
          { x: 94.00, y: 64.4, w: 3.2, h: 2.6, id: 'close_vn' },   // net
          { x: 90.45, y: 64.4, w: 3.2, h: 2.6, id: 'open_vn1' },   // da
        ]
      },
      startTime: timeDiff + 96.1,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'kl_118a_proc', text: '50' },
            { name: 'btn_auto_text',          color: '#000000' }, 
            { name: 'btn_auto_2',                       color: '#ffffff',  stroke: '#000000' },
            
            { name: 'btn_ruchnoy_text',       color: '#6E6E6E' }, 
            { name: 'btn_ruchnoy_2',                    color: '#e6e6e6',  stroke: '#b3b3b3' },
             
            { name: 'btn_open_text',          color: '#000000' }, 
            { name: 'btn_open_2',                       color: '#ffffff',  stroke: '#000000' },
            
            { name: 'btn_close_text',         color: '#6E6E6E' }, 
            { name: 'btn_close_2',                      color: '#e6e6e6',  stroke: '#b3b3b3' },

            { name: 'btn_stop_text',          color: '#000000' }, 
            { name: 'btn_stop_2',                       color: '#ffffff',  stroke: '#000000' },

            { name: 'btn_sbros_oshibki_text', color: '#000000' }, 
            { name: 'btn_reset_2',                      color: '#ffffff',  stroke: '#000000' },
            
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',     color: '#00FF00', stroke: '#000000' },
            
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#ff1e00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#00FF00'}, // Блокировки-Закрытие
          ],
        },
      },
      startTime: timeDiff + 96.2,
      human: true,
    },
    { //1
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',  color: '#ff1e00' },
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'kl_118a_proc', text: '40' },
            
            
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'VNK1_status_1', text: 'Индивидуал.' },
            { name: 'VNK1_status_2', text: '' },

            /// vnk1-sm
            { name: '7PI_13', text: '12.03' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.05' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '241' },
            { name: '1TI_28_1', text: '241' },
            { name: '1TI_28_2', text: '237' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1103' },
            { name: '1TI_03', text: '1104' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1017' },
            { name: 'vybor_signala', text: '1224' },

          ]
        }
      },
      startTime: timeDiff + 97,
    },
    { //2
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',  color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'kl_118a_proc', text: '30' },

            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'VNK1_status_2', text: '' },
            { name: 'vnk1_stripes', color: '#e6e6e6' },

            /// vnk1-sm
            { name: '7PI_13', text: '12.01' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.05' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '233' },
            { name: '1TI_28_1', text: '241' },
            { name: '1TI_28_2', text: '237' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1104' },
            { name: '1TI_03', text: '103' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 98,
    },
    { //3
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',  color: '#ff1e00' },            
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'kl_118a_proc', text: '20' },

            { name: 'vnk_1', color: '#e6e6e6' }, // задник стрелки
            { name: 'vnk1_stripes', color: '#e6e6e6' },

            { name: 'circle_dutyo',         color: '#000' },
            { name: 'circle_nagrev',        color: '#000' },
            { name: 'circle_otdeleniye_1',  color: '#000' },
            { name: 'circle_otdeleniye_2',  color: '#000' },
            
            /// vnk1-sm
            { name: '7PI_13', text: '12.00' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.05' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '238' },
            { name: '1TI_28_1', text: '241' },
            { name: '1TI_28_2', text: '237' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1103' },
            { name: '1TI_03', text: '1103' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1017' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 99,
    },
    { //4
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',  color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'status_window_text', text: 'Закрывается' },
            { name: 'kl_118a_proc', text: '10' },

            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка

            /// vnk1-sm
            { name: '7PI_13', text: '11.98' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.04' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '238' },
            { name: '1TI_28_1', text: '240' },
            { name: '1TI_28_2', text: '237' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1103' },
            { name: '1TI_03', text: '1103' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1016' },
            { name: 'vybor_signala', text: '1224' },

          ]
        }
      },
      startTime: timeDiff + 100,
    },
    { //5
      action:{
        window2D:{
          elements:[
            { name: 'kl_118a',  color: '#ff1e00' },
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_window_text', text: 'Закрыт' },
            { name: 'kl_118a_proc', text: '0' },

            /// vnk1-sm
            { name: '7PI_13', text: '11.90' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '0' }, 
            { name: '1FI_02', text: '0' },
            { name: '1PI_02', text: '0.00' },
            { name: 'Kl115_proc', text: '23' },
            { name: '1PI_04', text: '0.00' },
            { name: 'Kl123_proc', text: '22' },
            { name: '1QI_01', text: '18.04' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '238' },
            { name: '1TI_28_1', text: '240' },
            { name: '1TI_28_2', text: '237' },
            { name: 'Vremya_nagreva', text: '109' },
            { name: 'Vremya_dutya', text: '60' },
            { name: 'Vremya_otdelen', text: '208' },
            { name: '1PI_01', text: '1' },
            { name: '1TI_02', text: '1103' },
            { name: '1TI_03', text: '1103' },
            { name: '1TI_04', text: '-999' },
            { name: '1TI_05', text: '1017' },
            { name: 'vybor_signala', text: '1224' },
          ]
        }
      },
      startTime: timeDiff + 101,
    },
    {
      action: {
        target2D: 'close_w1A',
      },
      startTime: timeDiff + 101.1,
      human: true,
    },


    ////--------------------------------17--------------------------//// ЗАКРЫТЬ 110
    {
      text: 'Закрыть клапан сброса 110.',
      sender: 'Система',
      audio: 'tts--17', // 2.79
      startTime: timeDiff + 102,
    },
    //  F Клапан 110
    {
      action: {
        target2D: 'kl110',  
        window2D: {
          elements: [ 
            { name: 'title_work_vn', text: 'Управление клапаном 110' },
            { name: 'left_vn',  color: '#00FF00' },
            { name: 'right_vn', color: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'circle_n_winVN', stroke: '#00FF00' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Открыт' },

            { name: 'btn_auto_text',          color: '#000000' }, 
            { name: 'btn_auto_2',                       color: '#ffffff',  stroke: '#000000' },
            
            { name: 'btn_ruchnoy_text',       color: '#6E6E6E' }, 
            { name: 'btn_ruchnoy_2',                    color: '#e6e6e6',  stroke: '#b3b3b3' },
             
            { name: 'btn_open_text',          color: '#6E6E6E' }, 
            { name: 'btn_open_2',                       color: '#e6e6e6',  stroke: '#b3b3b3' },
            
            { name: 'btn_close_text',         color: '#000000' }, 
            { name: 'btn_close_2',                      color: '#ffffff',  stroke: '#000000' },

            { name: 'btn_stop_text',          color: '#000000' }, 
            { name: 'btn_stop_2',                       color: '#ffffff',  stroke: '#000000' },

            { name: 'btn_sbros_oshibki_text', color: '#000000' }, 
            { name: 'btn_reset_2',                      color: '#ffffff',  stroke: '#000000' },
            
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',     color: '#00FF00', stroke: '#000000' },
            
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#ff1e00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#00FF00'}, // Блокировки-Закрытие

          ]
        },
        helper2D: [
          { x: 90.30, y: 68.30, w: 1.5, h: 2.0, id: 'close_w1',           },//
          { x: 82.80, y: 76.20, w: 4.0, h: 2.6, id: 'auto',               },
          { x: 87.10, y: 76.20, w: 4.0, h: 2.6, id: 'ruchnoi',            },//
          { x: 82.80, y: 80.20, w: 4.0, h: 2.6, id: 'open_vn',            },//
          { x: 87.10, y: 80.20, w: 4.0, h: 2.6, id: 'close_ventil',       },
          { x: 82.80, y: 83.10, w: 8.5, h: 2.9, id: 'stop',               },
          { x: 82.80, y: 88.40, w: 8.5, h: 2.6, id: 'sbros_oshibki',      },
          { x: 82.80, y: 93.80, w: 8.5, h: 2.6, id: 'baypas_blokirovok',  }//
        ]
      },
      startTime: timeDiff + 103,
      human: true,
    },
    // окно ВН  // клик закрыть
    {
      action: {
        target2D: 'close_ventil',
        window2D: {
          newPositionWindow: {  //  wind 2
            x: 1756,
            y: 770
          },
          elements:[
            { name: 'title_open_vn', text: 'Закрыть' },
          ]
        },
        helper2D: [
          { x: 91.70, y: 79.8, w: 3.2, h: 2.5, id: 'close_vn' },   // нет
          { x: 88.00, y: 79.8, w: 3.3, h: 2.5, id: 'open_vn1' },   // да
        ]
      },
      startTime: timeDiff + 103.1,
      human: true,
    },
    // маленькое окошко ОК
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 110' },
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Закрывается' },

            { name: 'btn_auto_text',          color: '#000000' }, 
            { name: 'btn_auto_2',                       color: '#ffffff',  stroke: '#000000' },
            
            { name: 'btn_ruchnoy_text',       color: '#6E6E6E' }, 
            { name: 'btn_ruchnoy_2',                    color: '#e6e6e6',  stroke: '#b3b3b3' },
             
            { name: 'btn_open_text',          color: '#000000' }, 
            { name: 'btn_open_2',                       color: '#ffffff',  stroke: '#000000' },
            
            { name: 'btn_close_text',         color: '#6E6E6E' }, 
            { name: 'btn_close_2',                      color: '#e6e6e6',  stroke: '#b3b3b3' },

            { name: 'btn_stop_text',          color: '#000000' }, 
            { name: 'btn_stop_2',                       color: '#ffffff',  stroke: '#000000' },

            { name: 'btn_sbros_oshibki_text', color: '#000000' }, 
            { name: 'btn_reset_2',                      color: '#ffffff',  stroke: '#000000' },
            
            { name: 'btn_baypas_vsekh_blokirovok_text', color: '#000000' },
            { name: 'btn_baypas_vsekh_blokirovok_2',     color: '#00FF00', stroke: '#000000' },
            
            { name: 'skhema_sobrana',     color: '#00FF00'}, // Схема собрана
            { name: 'block_open',         color: '#ff1e00'}, // Блокировки-Открытие
            { name: 'block_close',        color: '#00FF00'}, // Блокировки-Закрытие
          ],
        },
      },
      startTime: timeDiff + 103.2,
      human: true,
    },
    { //1
      action:{
        window2D:{
          elements:[   
            { name: 'kl_110',   color: '#ff1e00' },
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_window_text', text: 'Закрывается' },

            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'VNK1_status_1', text: 'Индивидуал.' },
            { name: 'VNK1_status_2', text: '' },

            { name: 'circle_dutyo',         color: '#000' },
            { name: 'circle_nagrev',        color: '#000' },
            { name: 'circle_otdeleniye_1',  color: '#000' },
            { name: 'circle_otdeleniye_2',  color: '#000' },

            /// vnk1-sm
            { name: '7PI_13', text: '11.86' },
            { name: '1QI_01', text: '18.03' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '238' },
            { name: '1TI_28_1', text: '241' },
            { name: '1TI_28_2', text: '237' },
            { name: '1TI_02', text: '1103' },
            { name: '1TI_03', text: '1103' },
            { name: '1TI_05', text: '1016' },
          ]
        }
      },
      startTime: timeDiff + 104,
    },
    { //2
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },

            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'VNK1_status_1', text: 'Индивидуал.' },
            { name: 'VNK1_status_2', text: '' },

            { name: 'circle_dutyo',         color: '#000' },
            { name: 'circle_nagrev',        color: '#000' },
            { name: 'circle_otdeleniye_1',  color: '#000' },
            { name: 'circle_otdeleniye_2',  color: '#000' },

            /// vnk1-sm
            { name: '7PI_13', text: '11.85' },
            { name: '1QI_01', text: '18.02' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '238' },
            { name: '1TI_28_1', text: '241' },
            { name: '1TI_28_2', text: '237' },
            { name: '1TI_02', text: '1103' },
            { name: '1TI_03', text: '1103' },
            { name: '1TI_05', text: '1016' },
          ]
        }
      },
      startTime: timeDiff + 104,
    },
    { //3
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#ff1e00' },
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },

            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_1',        color: '#0033FF' }, // задник стрелки
            { name: 'vnk1_stripes', color: '#0033FF' },
            { name: 'VNK1_status_1', text: 'Индивидуал.' },
            { name: 'VNK1_status_2', text: 'Дутье' },

            { name: 'circle_dutyo',         color: '#00ff00' },
            { name: 'circle_nagrev',        color: '#000000' },
            { name: 'circle_otdeleniye_1',  color: '#000000' },
            { name: 'circle_otdeleniye_2',  color: '#000000' },

            /// vnk1-sm
            { name: '7PI_13', text: '11.81' },
            { name: '1QI_01', text: '18.03' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '238' },
            { name: '1TI_28_1', text: '240' },
            { name: '1TI_28_2', text: '236' },
            { name: '1TI_02', text: '1103' },
            { name: '1TI_03', text: '1103' },
            { name: '1TI_05', text: '1017' },
          ]
        }
      },
      startTime: timeDiff + 104,
    },
    { //4
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#8F8F8F' },
            { name: 'left_vn',  color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },

            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk1_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_1',        color: '#0033FF' }, // задник стрелки
            { name: 'vnk1_stripes', color: '#0033FF' },
            { name: 'VNK1_status_1', text: 'Индивидуал.' },
            { name: 'VNK1_status_2', text: 'Дутье' },

            { name: 'circle_dutyo',         color: '#00ff00' },
            { name: 'circle_nagrev',        color: '#000000' },
            { name: 'circle_otdeleniye_1',  color: '#000000' },
            { name: 'circle_otdeleniye_2',  color: '#000000' },

            /// vnk1-sm
            { name: '7PI_13', text: '11.81' },
            { name: '1QI_01', text: '18.03' },
            { name: '1TI_43', text: '41' },
            { name: '1TI_29', text: '25' },
            { name: 'dym_vybor_signala', text: '238' },
            { name: '1TI_28_1', text: '240' },
            { name: '1TI_28_2', text: '236' },
            { name: '1TI_02', text: '1103' },
            { name: '1TI_03', text: '1103' },
            { name: '1TI_05', text: '1017' },

          ]
        }
      },
      startTime: timeDiff + 105,
    },
    { //5
      action:{
        window2D:{
          elements:[
            { name: 'kl_110',   color: '#ff1e00' },
            { name: 'left_vn',  color: '#ff1e00' },
            { name: 'right_vn', color: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'circle_n_winVN', stroke: '#ff1e00' },
            { name: 'status_window_text', text: 'Закрыт' },
          ]
        }
      },
      startTime: timeDiff + 106,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 106.1,
      human: true,
    },
    { action: { target3D: 'Rectangle072', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle070', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle067', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle064', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle046', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle044', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle104', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle096', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle057', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle075', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle073', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle081', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle079', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle056', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle061', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle077', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle084', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle055', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle115', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle029', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle031', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle034', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle036', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle039', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle041', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle048', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'Rectangle050', material: 'ButtonLightOn', },         startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.00', },    startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.0', },    startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', },  startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085', },   startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '048.4', },    startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.00', },    startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '014.7', },    startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '04.70', },    startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 106.2, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.81', },     startTime: timeDiff + 106.2, },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0000', },         startTime: timeDiff + 106.3, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0000', },          startTime: timeDiff + 106.3, },
    { action: { target3D: 'dpObsh', color: 'green', number: '0005', },          startTime: timeDiff + 106.3, },
    { action: { target3D: 'dpNiz', color: 'green', number: '0005', },           startTime: timeDiff + 106.3, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '0000', },       startTime: timeDiff + 106.3, },
    { action: { target3D: 'pGorDut', color: 'green', number: '0003', },         startTime: timeDiff + 106.3, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '0285', },       startTime: timeDiff + 106.3, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '0287', },       startTime: timeDiff + 106.3, },
    

    ////--------------------------------18--------------------------//// ЗАКРЫТЬ 110
    {
      lifeTime: '12:07:00',
      startTime: timeDiff + 106.4,
    },
    {
      scenarioText: 'Повысить давление',
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 0,3 кгс/см².',
      sender: 'Система',
      audio: 'tts--51',
      startTime: timeDiff + 107,
    },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 },  }, duration: 0.15,  startTime: timeDiff + 108, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },  },     duration: 0.15,  startTime: timeDiff + 109, human: true, },
    { action: { target3D: 'Lamp_Green_024', material: 'Green_Lamp_Off', },                                     startTime: timeDiff + 110, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 },  }, duration: 0.15,  startTime: timeDiff + 111, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },      }, duration: 0.15,  startTime: timeDiff + 112, human: true, },    
    {
      action: {
        window2D:{
          elements:[
            // dp
            { name: 'radar1_text', text: '2.83' },
            { name: 'radar2_text', text: '2.83' },
            { name: 'radar3_text', text: '2.91' },
            { name: 'zadan_yrov_sin', text: '0.90' },

            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100', opacity: 1 },
            { name: 'AKZ_45-100', opacity: 1 },
            { name: 'AKZ_45', opacity: 1 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },

            { name: 'EVS_DP7_O', text: '53185' },
            { name: 'EVD1_O', text: '0' },
            { name: 'EVS_DP7_F', text: '7207' },
            { name: 'EVD1_F', text: '305768' },
            { name: 'EVD_F', text: '305529' },
            { name: 'P_1', text: '0.30' },
            { name: 'F_evd', text: '5143' },
            { name: 'F_hol_dyt', text: '478' },
            { name: 'T_hol_dyt', text: '29' },
            { name: 'O_hol_dyt', text: '22.0' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.2' },
            { name: 'FO2_hol_dyt', text: '1134' },

            { name: 'N2', text: '55.5' },
            { name: 'CO', text: '20.3' },
            { name: 'CO2', text: '16.7' },
            { name: 'H2_tryb', text: '6.9' },
            { name: 'Nco_tryb', text: '45.1' },
            { name: 'Q_domG_tryb', text: '813', opacity: '0' },
            { name: 'P_vozd_tryb', text: '1' },
            { name: 'P_gaza_tryb', text: '12' },
            { name: 'CO_bor_tryb', text: '0.00' },

            { name: 'H_snotr', text: '94' },
            { name: 'dp_kl_red', color: '#6E6E6E' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_89', opacity: '1' },
            { name: 'H_progres_100', opacity: '0' },

            { name: 'H_step_isp', text: '', opacity: '1' },
            { name: 'HCO_step_isp', text: '27.6' },
            { name: 'Tkyp_3', text: '1120' },
            { name: 'Tkyp_2', text: '1111' },
            { name: 'Tkyp_1', text: '1104' },
            { name: 'Tkyp_3_rect', color: '#ffff0f' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },

            { name: 'VNK3_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK3_status_1_fon', color: '#ada3b0' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#43A3EF' },

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
            { name: 'Tdym_2', text: '170' },
            { name: 'Tdym_1', text: '232' },
            { name: 'P_Os_szat_voz', text: '8.35' },
            { name: 'T_Os_szat_voz', text: '27' },

            { name: 'Temp_peref_1', text: '53' },
            { name: 'Temp_peref_2', text: '47' },
            { name: 'Temp_peref_3', text: '52' },
            { name: 'Temp_peref_4', text: '48' },
            { name: 'Temp_peref_5', text: '59' },
            { name: 'Temp_peref_6', text: '52' },
            { name: 'Temp_peref_7', text: '57' },
            { name: 'Temp_peref_8', text: '55' },
            { name: 'Temp_peref_9', text: '71' },
            { name: 'Temp_peref_10', text: '50' },
            { name: 'Temp_peref_11', text: '50' },
            { name: 'Temp_peref_12', text: '56' },
            { name: 'Temp_peref_13', text: '90' },
            { name: 'Temp_peref_14', text: '49' },
            { name: 'Temp_peref_15', text: '56' },
            { name: 'Temp_peref_16', text: '49' },
            { name: 'T1', text: '93' },
            { name: 'T2', text: '117' },
            { name: 'T3', text: '102' },
            { name: 'T4', text: '89' },
            { name: 'P_2', text: '0.30' },
            { name: 'P_2_rect', color: "#d22b24" },
            { name: 't_gor_dut', text: '1178' },
            { name: 'H_Os_szat_voz', text: '0' },
            { name: 't_prirodn_gaz', text: '15' },
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
            { name: 'dP_obsh_tryba', text: '0.30' },
            { name: 'dP_obsh_trybarect', color: '#ffff0f' },
            { name: 'dP_nish_tryba', text: '0.29' },
            { name: 'dP_nish_rect', color: '#ffff0f' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffffff', opacity: '1' },
            { name: 'TTG_raschet', text: '2211', opacity: '1' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', text: '' },
            { name: 'L2', text: '' },
            { name: 'L3', text: '' },
            { name: 'L4', text: '' },
            { name: 'L1_elem', color: '#ffffff' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'L4_elem', color: '#ffffff' },

            { name: 'P_tryba_1_590', text: '0.00' },
            { name: 'P_tryba_1_591', text: '0.00' },
            { name: 'P_tryba_1_592', text: '0.01' },
            { name: 'P_tryba_1_593', text: '0.01' },
            { name: 'P_tryba_2_1', text: '0.00' },
            { name: 'P_tryba_2_2', text: '0.00' },
            { name: 'P_tryba_2_3', text: '0.01' },
            { name: 'P_tryba_2_4', text: '0.01' },
            { name: 'P_tryba_3_590', text: '0.00' },
            { name: 'P_tryba_3_591', text: '0.00' },
            { name: 'P_tryba_4_1', text: '0.00' },
            { name: 'P_tryba_4_2', text: '0.00' },
            { name: 'P_tryba_4_3', text: '0.00' },
            { name: 'P_tryba_4_4', text: '0.00' },

            { name: 'P_tryba_5_1', text: '0.01' },
            { name: 'P_tryba_5_2', text: '0.01' },
            { name: 'P_tryba_5_3', text: '0.01' },
            { name: 'P_tryba_5_4', text: '0.01' },
            { name: 'V_dyt', text: '66.9' },
            { name: 'fyrm_v_rab', text: '0' },

            { name: 'ydel_tep_18', text: '27.8' },
            { name: 'ydel_tep_17', text: '29.4' },
            { name: 'ydel_tep_16', text: '29.6' },
            { name: 'ydel_tep_15', text: '25.5' },
            { name: 'ydel_tep_12_14', text: '51.9' },
            { name: 'ydel_tep_10_11', text: '8.5' },
            { name: 'ydel_tep_9', text: '8.2' },
            { name: 'ydel_tep_8', text: '14.5' },
            { name: 'ydel_tep_7', text: '26.1' },
          ]
        }
      },
      startTime: timeDiff + 112.3,
    },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.00', },    startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.0', },    startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', },  startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085', },   startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '356.3', },    startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.00', },    startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '014.7', },    startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '047.0', },    startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 112.31, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.81', },     startTime: timeDiff + 112.31, },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.002', },        startTime: timeDiff + 112.32, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.004', },         startTime: timeDiff + 112.32, },
    { action: { target3D: 'dpObsh', color: 'green', number: '0.274', },         startTime: timeDiff + 112.32, },
    { action: { target3D: 'dpNiz', color: 'green', number: '0.239', },          startTime: timeDiff + 112.32, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '0829.', },      startTime: timeDiff + 112.32, },
    { action: { target3D: 'pGorDut', color: 'green', number: '0.267', },        startTime: timeDiff + 112.32, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '0285', },       startTime: timeDiff + 112.32, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '0284', },       startTime: timeDiff + 112.32, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000', },        startTime: timeDiff + 112.32, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0113.', },        startTime: timeDiff + 112.32, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0143.', },        startTime: timeDiff + 112.32, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0123', },         startTime: timeDiff + 112.32, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0101', },         startTime: timeDiff + 112.32, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '0671', },         startTime: timeDiff + 112.32, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '0035', },         startTime: timeDiff + 112.32, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1180', },         startTime: timeDiff + 112.32, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '1012', },      startTime: timeDiff + 112.32, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '1012', },      startTime: timeDiff + 112.32, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '1510', },       startTime: timeDiff + 112.32, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '0442', },  startTime: timeDiff + 112.32, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2395', },      startTime: timeDiff + 112.32, },
    ////--------------------------------19--------------------------//// 
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 113,
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
      startTime: timeDiff + 114,
      human: true,
    },
    ////--------------------------------20--------------------------//// 
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 115,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 116, human: true,     },
    {
      text: 'На фурмах 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo63', // 2.6
      startTime: timeDiff + 117,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 120, },
    ////--------------------------------21--------------------------//// 
    {
      scenarioText: 'Открыть отсечной клапан.',
      text: 'Открывайте отсечной',
      sender: 'Мастер печи',
      audio: 'tts-vo64', // 1.65
      startTime: timeDiff + 121,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 122, human: true, },    
    {
      text: 'Артём Викторович, открываем отсечной.',
      sender: 'Газовщик',
      audio: 'tts-vo65', // 2.76
      startTime: timeDiff + 123,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 126, },
    {
      text: 'Понятно, открываю отсечной.',
      sender: 'Аппаратчик газоочистки',
      audio: 'tts-vo66', // 2.25
      startTime: timeDiff + 127,
    },
    ////--------------------------------22--------------------------//// 
    {
      scenarioText: 'Повысить давление',
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 0,3 кгс/см².',
      sender: 'Система',
      audio: 'tts--51',
      startTime: timeDiff + 130,
    },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 }, }, duration: 0.15,  startTime: timeDiff + 131,  human: true,},
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },     }, duration: 0.15,  startTime: timeDiff + 132,  human: true,},
    { action: { target3D: 'Lamp_Green_024', material: 'Green_Lamp_Off', },                                    startTime: timeDiff + 133, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 }, }, duration: 0.15,  startTime: timeDiff + 134,  human: true,},
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },     }, duration: 0.15,  startTime: timeDiff + 135,  human: true,},
    {
      action: {
        window2D:{
          elements:[
            { name: 'H_snotr', text: '87' },
            { name: 'dp_kl_red', color: '#6E6E6E' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_89', opacity: '1' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'P_2', text: '0.30' },
            { name: 'P_2_rect', color: "#d22b24" }
            
          ]
        }
      },
      startTime: timeDiff + 136,
    },
    
    ////--------------------------------23--------------------------//// 
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 137,
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
      startTime: timeDiff + 138,
      human: true,
    },
    ////--------------------------------24--------------------------//// 
    {      lifeTime: '12:10:00',      startTime: timeDiff + 139,    },
    {
      scenarioText: 'Перевести в нейтральное положение клапан тяги 022',
      text: 'Перевести в нейтральное положение клапан тяги 022.',
      sender: 'Система',
      audio: 'tts-51', // 4.3
      startTime: timeDiff + 140,
    },
    {
      action: {
        target3D: 'kl022',
        rotation: { y: -0.85 },
      },
      duration: 0.3,
      startTime: timeDiff + 141,
      human: true,
    },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.00', },    startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.0', },    startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', },  startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085', },   startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '193.4', },    startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.00', },    startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '014.7', },    startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '047.0', },    startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 141.01, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.81', },     startTime: timeDiff + 141.01, },

    ////--------------------------------25--------------------------//// 
    {
      text: 'Закрыть свечу 723 на природном газе.',
      sender: 'Система',
      audio: 'tts--25',
      startTime: timeDiff + 142,
    },
    { action: { target3D: 'Handle_012', rotation: { y: 0.785398 }, },      duration: 0.3, startTime: timeDiff + 143, human: true, },
    { action: { window2D:{ elements:[ { name: 'kl_723_b', color: "#ff1e00" } ] } },       startTime: timeDiff + 144,},
    { action: { target3D: 'Handle_012', rotation: { y: 0 }, },             duration: 0.3, startTime: timeDiff + 145, human: true, },
    { action: { window2D: { elements: [ { name: 'kl_723_t', color: "#ff1e00" } ] } },     startTime: timeDiff + 146, },
    { action: { target3D: 'Lamp_Green_021', material: 'Green_Lamp_Off', }, duration: 0.3, startTime: timeDiff + 147, },
    { action: { target3D: 'Lamp_Red_017',   material: 'Green_Lamp_Off', }, duration: 0.3, startTime: timeDiff + 148, },
    ////--------------------------------26--------------------------//// 
    {      lifeTime: '12:12:00',      startTime: timeDiff + 149,    },
    {
      text: 'Отсечной открыт.',
      sender: 'Аппаратчик газоочистки',
      audio: 'tts_vo67', // 1.3
      startTime: timeDiff + 150,
    }, 
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 152,
    },
    {      action: {        target3D: 'ButtonHightlight_046', },    startTime: timeDiff + 153,      human: true,    },
    {
      text: 'Отсечной открыт. На фурмах 0,3.',
      sender: 'Газовщик',
      audio: 'tts_vo68', // 3.76
      startTime: timeDiff + 154,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 158.3, },

    ////-----------------------------------27
    {
      chapterText: 'Повышение давления ГД до 0,6-0,8 кгс/см²',
      text: 'Делаем 0,7.',
      sender: 'Мастер печи',
      audio: 'tts-vo69', // 2.4
      startTime: timeDiff + 159,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 160, human: true, },
    {
      text: 'Делаю 0,7.',
      sender: 'Газовщик',
      audio: 'tts-vo70', // 2.56
      startTime: timeDiff + 161,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 164.1, },
    ////-----------------------------------28
    {
      scenarioText: 'Повысить давление.', 
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 0,4 кгс/см².',
      sender: 'Система',
      audio: 'tts--51',
      startTime: timeDiff + 165,
    },     
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',        rotation: { y: 0.785 }, }, duration: 0.15, startTime: timeDiff + 166, human: true, },
    { action: { target3D: 'Lamp_Red_020', material: 'Unic_Lamp_Red_Off',                         },                 startTime: timeDiff + 167, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',        rotation: { y: 0 },     }, duration: 0.15, startTime: timeDiff + 168, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',        rotation: { y: 0.785 }, }, duration: 0.15, startTime: timeDiff + 169, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',        rotation: { y: 0 },     }, duration: 0.15, startTime: timeDiff + 170, human: true, },
    // DP
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '70' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '1' },
            { name: 'H_progres_67', opacity: '1' },
            { name: 'H_progres_89', opacity: '0' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'P_2', text: '0.40' },
          ]
        }
      },
      startTime: timeDiff + 170.1,
    },
    { action: { target3D: 'tGorDut', color: 'green', number: '1165.' }, startTime: timeDiff + 170.2, },
    ////-----------------------------------29
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 171,
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
      startTime: timeDiff + 172,
      human: true,
    },
    ////-----------------------------------30
    {
      scenarioText: 'Установить БЗУ на автоматический режим.', 
      text: 'Установить БЗУ на автоматический режим.',
      sender: 'Система',
      audio: 'tts--30',
      startTime: timeDiff + 173,
    },
    { action: { target3D: 'Rectangle071' },                                 startTime: timeDiff + 174, human: true, },
    { action: { target3D: 'Rectangle071', material: 'ButtonLightOn' },      startTime: timeDiff + 175,},
    { action: { target3D: 'Rectangle072', material: 'ButtonLightOff' },     startTime: timeDiff + 175,},
    { action: { target3D: 'Rectangle070', material: 'ButtonLightOff' },     startTime: timeDiff + 175,},
    { action: { target3D: 'Rectangle084', material: 'ButtonLightOff' },     startTime: timeDiff + 175,},

    { action: { target3D: 'Rectangle069', material: 'ButtonLightOn' },      startTime: timeDiff + 176,},
    { action: { target3D: 'Rectangle114', material: 'ButtonLightOn' },      startTime: timeDiff + 176,},
    { action: { target3D: 'Rectangle083', material: 'ButtonLightOn' },      startTime: timeDiff + 176,},
    { action: { target3D: 'Rectangle104', material: 'ButtonLightOn' },      startTime: timeDiff + 176,},
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '242.5' }, startTime: timeDiff + 176,},
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '047.0' }, startTime: timeDiff + 176,},

    { action: { target3D: 'Rectangle069', material: 'ButtonLightOff' },     startTime: timeDiff + 177,},
    { action: { target3D: 'Rectangle114', material: 'ButtonLightOff' },     startTime: timeDiff + 177,},
    { action: { target3D: 'Rectangle083', material: 'ButtonLightOff' },     startTime: timeDiff + 177,},
    { action: { target3D: 'Rectangle104', material: 'ButtonLightOff' },     startTime: timeDiff + 177,},

    { action: { target3D: 'Rectangle069', material: 'ButtonLightOn' },      startTime: timeDiff + 178,},
    { action: { target3D: 'Rectangle114', material: 'ButtonLightOn' },      startTime: timeDiff + 178,},
    { action: { target3D: 'Rectangle083', material: 'ButtonLightOn' },      startTime: timeDiff + 178,},
    { action: { target3D: 'Rectangle104', material: 'ButtonLightOn' },      startTime: timeDiff + 178,},

    { action: { target3D: 'Rectangle069', material: 'ButtonLightOff' },     startTime: timeDiff + 179,},
    { action: { target3D: 'Rectangle114', material: 'ButtonLightOff' },     startTime: timeDiff + 179,},
    { action: { target3D: 'Rectangle083', material: 'ButtonLightOff' },     startTime: timeDiff + 179,},
    { action: { target3D: 'Rectangle104', material: 'ButtonLightOff' },     startTime: timeDiff + 179,},
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '277.5' }, startTime: timeDiff + 179,},
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '046.6' }, startTime: timeDiff + 179,},

    { action: { target3D: 'Rectangle069', material: 'ButtonLightOn' },      startTime: timeDiff + 180,},
    { action: { target3D: 'Rectangle114', material: 'ButtonLightOn' },      startTime: timeDiff + 180,},
    { action: { target3D: 'Rectangle083', material: 'ButtonLightOn' },      startTime: timeDiff + 180,},
    { action: { target3D: 'Rectangle104', material: 'ButtonLightOn' },      startTime: timeDiff + 180,},

    {
      text: 'Сбросить сигнал тревоги.',
      sender: 'Система',
      audio: 'tts--30(1)', // 2
      startTime: timeDiff + 181,
    },
    { action: { target3D: 'Rectangle053' },                                 startTime: timeDiff + 182,  human: true,},
    { action: { target3D: 'Rectangle053', material: 'ButtonLightOn' },      startTime: timeDiff + 183, },

    { action: { target3D: 'Rectangle055', material: 'ButtonLightOff' },     startTime: timeDiff + 184, },
    { action: { target3D: 'Rectangle066', material: 'ButtonLightOn' },      startTime: timeDiff + 185,},
    { action: { target3D: 'Rectangle054', material: 'ButtonLightOn' },      startTime: timeDiff + 185,},
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '178.6' }, startTime: timeDiff + 185,},
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '046.6' }, startTime: timeDiff + 185,},

    { action: { target3D: 'Rectangle066', material: 'ButtonLightOff' },     startTime: timeDiff + 186,},
    { action: { target3D: 'Rectangle054', material: 'ButtonLightOff' },     startTime: timeDiff + 186,},

    { action: { target3D: 'Rectangle066', material: 'ButtonLightOn' },      startTime: timeDiff + 187,},
    { action: { target3D: 'Rectangle054', material: 'ButtonLightOn' },      startTime: timeDiff + 187,},

    { action: { target3D: 'Rectangle066', material: 'ButtonLightOff' },     startTime: timeDiff + 188,},
    { action: { target3D: 'Rectangle054', material: 'ButtonLightOff' },     startTime: timeDiff + 188,},

    { action: { target3D: 'Rectangle066', material: 'ButtonLightOn' },      startTime: timeDiff + 189,},
    { action: { target3D: 'Rectangle054', material: 'ButtonLightOn' },      startTime: timeDiff + 189,},
    {
      action: {
        window2D: {
          elements: [
            // bzu
            { name: 'ochistka sedel_P', text: '4.93' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '31' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },

            { name: 'B1_dp Bunker', text: '0.05' },
            { name: 'B1_P compes', text: '0.00' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '105' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP', text: '93.0' },
            { name: 'B1_vibratciya', text: '2' },

            { name: 'V linii P_B1', text: '202' }, // Б1
            { name: 'V linii dP_B1', text: '225' },
            { name: 'V sisteme vzveh_B1', text: '153' },
            { name: 'V linii P_B2', text: '150' }, // Б2
            { name: 'V linii dP_B2', text: '276' },
            { name: 'V sisteme vzveh_B2', text: '165' },

            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.04' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.05' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.05' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.05' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },

            { name: 'stanciia', text: '8' },

            { name: 'ugol naklona_tekushiy', text: '34.5' },
            { name: 'ugol naklona_zadanyi', text: '33.4' },

            { name: 'gradusow ugol', text: '251.5' },

            { name: 'prochent1', text: '4' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l',  color: '#06FF06' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse', color: '#644121' }, // K
            { name: 'left_ellipse_text', text: 'Р' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.01' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '53.0' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            // не хватает схемы ПУСТ
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.4' }, // ШЗ
            { name: 'left_vugr_rect', color: '#06FF06' },
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'verx', text: '-0' }, // цифры сверху
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции
            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.00' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '14.5' }, // t
            { name: 'matrix 1 str 14_M', text: '30.9' }, // м3
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // 
            { name: 'prochent2', text: '0' }, // 
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'leviy', color: '#FF1E00' }, 
            { name: 'praviy', color: '#FF1E00' }, 
            { name: 'pech_left_down_zaglushka', color: '#FF1E00' }, 
            { name: 'Krasniy nijniy Poloska', color: '#FF1E00' }, 

            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '31' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 

            { name: 'B2_Dp bunker', text: '0.04' }, // 
            { name: 'B2_P compens', text: '0.06' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '88' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '53' }, // 

            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 

            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка

            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '2.84' }, // 

            { name: 'radar 1', text: '2.83' }, // 
            { name: 'radar 2', text: '2.86' }, // 
            { name: 'mexan', text: '2.86' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 

            { name: 'bg_vRabote', color: '#00FF00' }, // в работе
            { name: 'v rabote', color: '#000' }, // в работе
            { name: 'ismetir_ramki', color: '#EADCC2' }, // измерить

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
            { name: 'bzu_T2_color', color: '#008600' }, // 
            { name: 'T1_Tip', color: '#008600' }, // 
            { name: 'B1_ves', text: '93.0' }, // 
            { name: 'B2_ves', text: '14.5' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 

            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', opacity: '0' }, //
            { name: 'na_conveer_s1_bukca', opacity: '0' }, //
            { name: 'K_str1', color: '#860004' }, // 
            { name: 'str1_down', text: 'Р' }, // 
            { name: 'Str1_4', color: '#C7B295' }, // 
            { name: 'Str1_8', color: '#00FF00' }, // 
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color
            { name: 'str51_down', text: 'К' }, // str 51 color
          ]
        }
      },
      startTime: timeDiff + 190,
    },
    ////-----------------------------------31
    {
      text: 'Проверка шагов управления.',
      sender: 'Система',
      audio: 'tts--31', // 2.1
      startTime: timeDiff + 191,
    },
    { action: { target2D: 'hagi upravleniy1', window2D: { elements: [ { name: 'shagUprav_bunkerNum', text: 'Бункер 1' },]},}, startTime: timeDiff + 192,   human: true,},
    { action: { target2D: 'shagi_uprav_close_btn',},                                                                          startTime: timeDiff + 192.1, human: true,},
    {
      action: {
        target2D: 'hagi upravleniy2',
        window2D: {
          elements: [ { name: 'shagUprav_bunkerNum', text: 'Бункер 2' }, ]
        }, 
        helper2D: [
          { x: 57.9, y: 27.4, w: 1.7, h: 3.1, id: 'shagi_uprav_close_btn', },
          { x: 53.65, y: 92.5, w: 4.9, h: 2.2, id: 'shagi_uprav_zakryt', },
        ]
      },
      startTime: timeDiff + 192.2,
      human: true,
    },
    { action: { target2D: 'shagi_uprav_close_btn',}, startTime: timeDiff + 192.3, human: true,},
    { lifeTime: '12:14:00',                          startTime: timeDiff + 192.4, },
    ////-----------------------------------32
    {
      scenarioText: 'Повысить давление.',
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 0,55 кгс/см².',
      sender: 'Система',
      audio: 'tts--51',
      startTime: timeDiff + 193.4,
    },
    {action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 },}, duration: 0.15, startTime: timeDiff + 194, human: true, },
    {action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },    }, duration: 0.15, startTime: timeDiff + 195, human: true, },
    {action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 },}, duration: 0.15, startTime: timeDiff + 196, human: true, },
    {action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },    }, duration: 0.15, startTime: timeDiff + 197, human: true, },
    // DP
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '56' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '1' },
            { name: 'H_progres_60', opacity: '0' },
            { name: 'H_progres_67', opacity: '0' },
            { name: 'H_progres_89', opacity: '0' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'P_2', text: '0.55' },
          ]
        }
      },
      startTime: timeDiff + 198,
    },
    ////-----------------------------------33
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 199,
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
      startTime: timeDiff + 200,
      human: true,
    },
    ////-----------------------------------34
    {
      scenarioText: 'При необходимости открыть смесительно-предохранительный клапан (для поддержания заданной температуры горячего дутья).', 
      text: 'Отрегулировать температуру дутья.',
      sender: 'Система',
      audio: 'tts-53', // 2.35
      startTime: timeDiff + 201,
    },
    
    ////-----------------------------------35
    { 
      text: 'Открыть смесительно-предохранительный клапан 002.',
      sender: 'Система',
      audio: 'tts--35',
      startTime: timeDiff + 204,
    },
    {
      action: {
        target2D: 'kl002_vnk_main',
        window2D: {
          elements: [
            { name: 'title_work_vn', text: 'Управление клапаном 002' },
            { name: 'status_control_vnk_text', text: 'Автоматический' },
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

            // { name: 'btn_auto_text', color: '#6E6E6E' },
            // { name: 'btn_auto_1', color: '#E6E6E6' },
            // { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_ruchnoy_text', color: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#ffffff', },
            { name: 'btn_ruchnoy_2', color: '#ffffff', stroke: '#000000' },

            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_close_text', color: '#6E6E6E' },
            { name: 'btn_close_1', color: '#E6E6E6' },
            { name: 'btn_close_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_stop_text', color: '#6E6E6E' },
            { name: 'btn_stop_1', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
            
            { name: 'btn_baypas_vsekh_blokirovok_1', color: '#ffffff' },
            { name: 'btn_baypas_vsekh_blokirovok_2', color: '#ffffff' },
            { name: 'time_full_vnk_text', text: '25' },
          ]
        },
        helper2D: [
          { x: 94.6, y: 26.0, w: 1.5, h: 2.4, id: 'close_w1', },
          { x: 87.2, y: 34.0, w: 4.0, h: 2.6, id: 'auto', },
          { x: 91.5, y: 34.0, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 87.2, y: 38.0, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 91.5, y: 38.0, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 87.2, y: 41.0, w: 8.5, h: 2.9, id: 'stop', },
          { x: 87.2, y: 46.2, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 87.2, y: 51.45, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 205,
      human: true,
    },
    {
      action: {
        target2D: 'ruchnoi',
        window2D: {
          newPositionWindow: { x: 1765, y: 350 },
          elements: [
            { name: 'title_open_vn', text: 'Ручной' },
          ],
        },
        helper2D: [
          { x: 92, y: 37.3, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.3, y: 37.3, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 205.1,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            // { name: 'status_window_text', text: 'Открывается' },
            { name: 'status_control_vnk_text', text: 'Ручной' },

            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },

            // { name: 'btn_auto_text', color: '#6E6E6E' },
            // { name: 'btn_auto_1', color: '#E6E6E6' },
            // { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },

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
          ]
        },
      },
      startTime: timeDiff + 205.2,
      human: true,
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
      startTime: timeDiff + 205.3,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открывается' },
            { name: 'status_control_vnk_text', text: 'Ручной' },

            { name: 'btn_auto_text', color: '#000000' },
            { name: 'btn_auto_1', color: '#ffffff' },
            { name: 'btn_auto_2', color: '#ffffff', stroke: '#000000' },

            // { name: 'btn_auto_text', color: '#6E6E6E' },
            // { name: 'btn_auto_1', color: '#E6E6E6' },
            // { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_ruchnoy_text', color: '#6E6E6E' },
            { name: 'btn_ruchnoy_1', color: '#E6E6E6', },
            { name: 'btn_ruchnoy_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },

            { name: 'btn_stop_text', color: '#000000' },
            { name: 'btn_stop_1', color: '#ffffff', stroke: '#000000' },
            { name: 'btn_stop_2', color: '#ffffff', stroke: '#000000' },

            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },
          ]
        },
      },
      startTime: timeDiff + 205.4,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_002', color: '#06FF06' },
            { name: 'circle_kl002', stroke: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 206,
    }, 
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_002', color: '#8F8F8F' },
            { name: 'circle_kl002', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 207,
    }, 
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_002', color: '#06FF06' },
            { name: 'circle_kl002', stroke: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 208,
    }, 
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#8F8F8F' },
            { name: 'right_vn', color: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'circle_n_winVN', stroke: '#8F8F8F' },
            { name: 'kl_002', color: '#8F8F8F' },
            { name: 'circle_kl002', stroke: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 209,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_002', color: '#06FF06' },
            { name: 'circle_kl002', stroke: '#06FF06' },
            { name: 'status_window_text', text: 'Открыт' },
          ]
        }
      },
      startTime: timeDiff + 210,
    },
    {
      action: {
        target2D: 'auto',
        window2D: {
          newPositionWindow: { x: 1765, y: 350 },
          elements: [
            { name: 'title_open_vn', text: 'Авто' },
          ],
        },
        helper2D: [
          { x: 92, y: 37.3, w: 3.2, h: 2.5, id: 'close_vn' },
          { x: 88.3, y: 37.3, w: 3.3, h: 2.5, id: 'open_vn1' },
        ]
      },
      startTime: timeDiff + 210.1,
      human: true,
    },
    {
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            // { name: 'status_window_text', text: 'Открывается' },
            { name: 'status_control_vnk_text', text: 'Автоматический' },

            { name: 'btn_auto_text', color: '#6E6E6E' },
            { name: 'btn_auto_1', color: '#E6E6E6' },
            { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            // { name: 'btn_auto_text', color: '#6E6E6E' },
            // { name: 'btn_auto_1', color: '#E6E6E6' },
            // { name: 'btn_auto_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_ruchnoy_text', color: '#000000' },
            { name: 'btn_ruchnoy_1', color: '#ffffff', },
            { name: 'btn_ruchnoy_2', color: '#ffffff', stroke: '#000000' },

            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_1', color: '#E6E6E6' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_close_text', color: '#000000' },
            { name: 'btn_close_1', color: '#ffffff' },
            { name: 'btn_close_2', color: '#ffffff', stroke: '#000000' },

            { name: 'btn_stop_text', color: '#6E6E6E' },
            { name: 'btn_stop_1', color: '#E6E6E6', stroke: '#6E6E6E' },
            { name: 'btn_stop_2', color: '#E6E6E6', stroke: '#6E6E6E' },

            { name: 'btn_sbros_oshibki_text', color: '#6E6E6E' },
            { name: 'btn_reset_1', color: '#E6E6E6' },
            { name: 'btn_reset_2', color: '#E6E6E6', stroke: '#6E6E6E' },


          ]
        },
      },
      startTime: timeDiff + 210.2,
      human: true,
    },
    {
      action: { target2D: 'close_w1', },
      startTime: timeDiff + 210.3,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: '7TI_41', text: '17' },
            { name: '7PI_12', text: '10,86' },
            // { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '0' },
            { name: '7TI_40', text: '16' },
            { name: '7PI_11', text: '0,00' },
            { name: '7FI_04', text: '0' },
            { name: '5QI_01_01', text: '21' },
            { name: '5QI_01_02', text: '42' },
            { name: 'PV2', text: '10,85' },
            { name: 'SP2', text: '9,00' },
            { name: 'PV2_1', text: '15,93' },
            { name: 'M_t1_4', text: 'Работа', color: '#06FF06' },
            { name: 'PV3', text: '5,00' },
            { name: 'SP3', text: '0,00' },
            { name: 'PV3_1', text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            { name: 'PV4', text: '0,76' },
            { name: 'SP4', text: '0,00' },
            { name: 'PV4_1', text: '0,00' },
            { name: 'M_t3_4', text: 'Работа', color: '#06FF06' },
            { name: 'kl053_proc', text: '16' },
            { name: 'kl051_proc', text: '0' },
            { name: 'kl052_proc', text: '0' },
            { name: 'kl035_proc', text: '86' },
            { name: 'klOF3_proc', text: '0' },
            { name: 'klOF2_proc', text: '0' },
            { name: 'klOF1_proc', text: '15' },
            { name: 'kl0333_proc', text: '0' },
            { name: 'kl0313_proc', text: '100' },
            { name: 'kl0332_proc', text: '0' },
            { name: 'kl0312_proc', text: '100' },
            { name: 'kl0331_proc', text: '100' },
            { name: 'kl0311_proc', text: '100' },
            { name: '7QI_01', text: '-999,00' },
            { name: 'kl038_proc',   text: '0' },
            { name: 'kl028_proc', text: '0' },
            { name: 'kl020_proc',   text: '100' },
            { name: 'kl036v_proc',  text: '0' },
            { name: 'kl036b_proc',  text: '0' },
            { name: 'kl048_proc', text: '0' },
            { name: 'kl029_proc', text: '100' },
            { name: 'kl004_proc', text: '100' },
            { name: 'PI_16_proc', text: '0,40' },
            { name: 'ramka_PI_16', color: '#FF1E00' },
            { name: '9TI_44_proc', text: '25' },
            { name: 'kl037_proc', text: '0' },
            { name: 'kl007_proc', text: '0' },
            { name: 'kl025_proc', text: '100' },
            { name: '8QI_05_01', text: '0,03' },
            { name: '8QI_05_02', text: '1,92' },
            { name: '8QI_05_04', text: '2,76' },
            { name: '7PI_13', text: '10,86' },
            { name: '7PI_42', text: '47' },
            // { name: 'PV1', text: '1209,70' },
            // { name: 'SP1', text: '1210,00' },
            // { name: 'PV1_1', text: '31,12' },
            // { name: 'M_t4_4', text: 'Работа', color: '#06FF06' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk_3', color: '#878881' }, // задник стрелки
            { name: 'Tkyp_3', text: '1118' },
            { name: 'VNK3_status_1', text: 'Циклический' },
            { name: 'VNK3_status_2', text: 'Отделение' },
            { name: 'vnk3_stripes', color: '#878881' },
            { name: 'VNK3_Fr', text: '0' },
            { name: 'VNK3_Fb', text: '0' },
            { name: 'Tdym_3', text: '132' },
            { name: 'kl001_proc', text: '0' },
            { name: 'kl001a_proc', text: '0' },
            { name: 'vnk2_fire', opacity: '1' }, // стрелка
            { name: 'vnk_2', color: '#878881' }, // задник стрелки
            { name: 'Tkyp_2', text: '1108' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_2', text: 'Отделение' },
            { name: 'vnk2_stripes', color: '#878881' },
            { name: 'VNK2_Fr', text: '0' },
            { name: 'VNK2_Fb', text: '0' },
            { name: 'Tdym_2', text: '170' },
            { name: '5PI_08', text: '53' },
            { name: 'TI_36', text: '18' },
            { name: 'FI_03', text: '1130' },
            { name: 'vnk1_fire', opacity: '0' }, // стрелка
            { name: 'vnk_1', color: '#000BF6' }, // задник стрелки
            { name: 'Tkyp_1', text: '1140' },
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Дутье' },
            { name: 'vnk1_stripes', color: '#000BF6' },
            { name: 'VNK1_Fr', text: '0' },
            { name: 'VNK1_Fb', text: '0' },
            { name: 'Tdym_1', text: '187' },
            // { name: 'vybor_signala', text: '1210' },
            // { name: '5TI_21', text: '1200' },
            // { name: '5TI_22', text: '1210' },
            // { name: 'PI_09', text: '546,64' },
          ],
        },
      },
      startTime: timeDiff + 210.4,
    },
    {
      lifeTime: '12:16:00',
      startTime: timeDiff + 210.5,
    },
    ////-----------------------------------36
    {
      scenarioText: 'Повысить давление.',
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 0,7 кгс/см².',
      sender: 'Система',
      audio: 'tts--51',
      startTime: timeDiff + 211.5,
    },
    { action: {target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 },}, duration: 0.15, startTime: timeDiff + 212, human: true, },
    { action: {target3D: '128f49df-9d0a-4b03-b177-dfa71831d6f',  rotation: { y: 0 },    }, duration: 0.15, startTime: timeDiff + 213, human: true, },
    { action: {target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 },}, duration: 0.15, startTime: timeDiff + 214, human: true, },
    { action: {target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },    }, duration: 0.15, startTime: timeDiff + 215, human: true, },
    // DP
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '48' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '1' },
            { name: 'H_progres_22', opacity: '1' },
            { name: 'H_progres_33', opacity: '1' },
            { name: 'H_progres_49', opacity: '1' },
            { name: 'H_progres_56', opacity: '0' },
            { name: 'H_progres_60', opacity: '0' },
            { name: 'H_progres_67', opacity: '0' },
            { name: 'H_progres_89', opacity: '0' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'P_2', text: '0.70' },
          ]
        }
      },
      startTime: timeDiff + 216,
    },
    ////-----------------------------------37
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 217,
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
      startTime: timeDiff + 218,
      human: true,
    },
   // #endregion 
    
    ////-----------------------------------38--------------------------//// 
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 219,
    },
    { action: { target3D: 'ButtonHightlight_046', },                  startTime: timeDiff + 220, human: true, },
    {
      text: 'На фурмах 0,7.',
      sender: 'Газовщик',
      audio: 'tts--vo71', // 4.49
      startTime: timeDiff + 221,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', },   startTime: timeDiff + 226,},
    ////-----------------------------------39--------------------------//// 
    {
      chapterText: 'Повышение давления ГД 1-2 кгс/см²',
      text: 'Единицу делаем.',
      sender: 'Мастер печи',
      audio: 'tts--vo72', // 1.46 
      startTime: timeDiff + 227,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 228, human: true, },
    {
      text: 'Делаю единицу.',
      sender: 'Газовщик',
      audio: 'tts--vo73', // 1.7
      startTime: timeDiff + 229,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 231, },

    ////-----------------------------------40--------------------------//// 
    {
      scenarioText: 'Повысить давление.',
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 1,00 кгс/см².',
      audio: 'tts--51', // 4.7
      sender: 'Система',
      startTime: timeDiff + 232,
    },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 }, }, duration: 0.15, startTime: timeDiff + 233, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0     }, }, duration: 0.15, startTime: timeDiff + 234, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 }, }, duration: 0.15, startTime: timeDiff + 235, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0     }, }, duration: 0.15, startTime: timeDiff + 236, human: true, },
    { 
      action: {
        windows2D:{
          elements:[
            { name: 'H_snotr', text: '36' },
            { name: 'dp_kl_red', color: '#6E6E6E' },
            { name: 'H_progres_7',    opacity: '1' },
            { name: 'H_progres_19',   opacity: '1' },
            { name: 'H_progres_22',   opacity: '1' },
            { name: 'H_progres_33',   opacity: '1' },
            { name: 'H_progres_49',   opacity: '0' },
            { name: 'H_progres_56',   opacity: '0' },
            { name: 'H_progres_60',   opacity: '0' },
            { name: 'H_progres_89',   opacity: '0' },
            { name: 'H_progres_100',  opacity: '0' },
            { name: 'P_2', text: '1.00' },
            { name: 'P_2_rect', color: "#ffffff" }
          ]
        }
      },
      startTime: timeDiff + 237,
    },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.056', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.058', },         startTime: timeDiff + 237.01, },
    { action: { target3D: 'dpObsh', color: 'green', number: '0.926', },         startTime: timeDiff + 237.01, },
    { action: { target3D: 'dpNiz', color: 'green', number: '0.771', },          startTime: timeDiff + 237.01, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '3720.', },      startTime: timeDiff + 237.01, },
    { action: { target3D: 'pGorDut', color: 'green', number: '0.976', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.85', },      startTime: timeDiff + 237.01, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.79', },      startTime: timeDiff + 237.01, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0129.', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0153.', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0133.', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0117.', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '06.81', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.39', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1119.', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.12', },     startTime: timeDiff + 237.01, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.12', },     startTime: timeDiff + 237.01, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.15', },      startTime: timeDiff + 237.01, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.41', }, startTime: timeDiff + 237.01, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.384', },     startTime: timeDiff + 237.01, },
    { action: { target3D: 'tReduct', color: 'green', number: '034.9', },        startTime: timeDiff + 237.01, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '24.83', },   startTime: timeDiff + 237.01, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0000', },      startTime: timeDiff + 237.01, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.08', },    startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.1', },    startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', },  startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085', },   startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '169.6', },    startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.03', },    startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.2', },    startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '033.5', },    startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 237.02, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.81', },     startTime: timeDiff + 237.02, },

    ////-----------------------------------41--------------------------//// 
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma', // 3.5
      startTime: timeDiff + 238,
    }, 
    {multi: [{action: {target2D: 'R_Snort',},},{action: {target2D: 'R_Furm',},},],startTime: timeDiff + 239,human: true,},


    ////-----------------------------------42--------------------------//// 
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 240,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 241, human: true, },
    {
      text: 'На фурмах единица.',
      sender: 'Газовщик',
      audio: 'tts-vo74', //  1.77 
      startTime: timeDiff + 242,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 244.5, },
    {
      text: '1,5 делаем.',
      sender: 'Мастер печи',
      audio: 'tts--vo42-1', // 2.3
      startTime: timeDiff + 245,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 246, human: true,},
    {
      text: 'Делаю полтора.',
      sender: 'Газовщик',
      audio: 'tts--vo76', // 1.4
      startTime: timeDiff + 247,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 249, },
    {
      lifeTime: '12:19:00',
      startTime: timeDiff + 250,
    },
    ////-----------------------------------43--------------------------//// 
    {
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 1,5 кгс/см².',
      audio: 'tts--51', // 4.7
      sender: 'Система',
      startTime: timeDiff + 251,
    },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 }, }, duration: 0.15, startTime: timeDiff + 252, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0     }, }, duration: 0.15, startTime: timeDiff + 253, human: true, },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.083', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.082', },         startTime: timeDiff + 253.01, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.200', },         startTime: timeDiff + 253.01, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.114', },          startTime: timeDiff + 253.01, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4204.', },      startTime: timeDiff + 253.01, },
    { action: { target3D: 'pGorDut', color: 'green', number: '1.423', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.83', },      startTime: timeDiff + 253.01, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.81', },      startTime: timeDiff + 253.01, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0137.', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0161.', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0144.', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0127.', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '06.67', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1095.', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.16', },     startTime: timeDiff + 253.01, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.17', },     startTime: timeDiff + 253.01, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.11', },      startTime: timeDiff + 253.01, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.39', }, startTime: timeDiff + 253.01, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.367', },     startTime: timeDiff + 253.01, },
    { action: { target3D: 'tReduct', color: 'green', number: '034.8', },        startTime: timeDiff + 253.01, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '24.82', },   startTime: timeDiff + 253.01, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.10', },    startTime: timeDiff + 253.02, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '251.1', },    startTime: timeDiff + 253.02, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.07', },    startTime: timeDiff + 253.02, },
    {
      action: {
        window2D: {
          elements:[
            // dp f
            { name: 'radar1_text', text: '2.86' },
            { name: 'radar2_text', text: '2.82' },
            { name: 'radar3_text', text: '2.78' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '100' },
            { name: 'EKZ_H2', text: '100' },
            { name: 'EKZ_H3', text: '100' },
            { name: 'AKZ_100',    opacity: 1 },
            { name: 'AKZ_45-100', opacity: 1 },
            { name: 'AKZ_45',     opacity: 1 },
            { name: 'AKZ_30',     opacity: 1 },
            { name: 'AKZ_17',     opacity: 1 },
            { name: 'EVS_DP7_O', text: '53776' },
            { name: 'EVD1_O',    text: '0' },
            { name: 'EVS_DP7_F', text: '7182' },
            { name: 'EVD1_F',    text: '305077' },
            { name: 'EVD_F',     text: '303236' },
            { name: 'P_1',       text: '1.51' },
            { name: 'F_evd',     text: '5085' },
            { name: 'F_hol_dyt', text: '3225' },
            { name: 'T_hol_dyt', text: '45' },
            { name: 'O_hol_dyt', text: '21.0' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.5' },
            { name: 'FO2_hol_dyt', text: '1115' },
            { name: 'N2',       text: '57.7' },
            { name: 'CO',       text: '18.3' },
            { name: 'CO2',      text: '16.8' },
            { name: 'H2_tryb',  text: '6.6' },
            { name: 'Nco_tryb', text: '47.8' },
            { name: 'Q_domG_tryb', text: '742', opacity: '1' },
            { name: 'P_vozd_tryb', text: '1' },
            { name: 'P_gaza_tryb', text: '13' },
            { name: 'CO_bor_tryb', text: '0.16' },
            // { name: 'H_snotr', text: '15' },
            // { name: 'kl_red', color: '#00DA01' },
            // { name: 'H_progres_7', opacity: '1' },
            // { name: 'H_progres_19', opacity: '1' },
            // { name: 'H_progres_22', opacity: '1' },
            // { name: 'H_progres_33', opacity: '1' },
            // { name: 'H_progres_49', opacity: '1' },
            // { name: 'H_progres_56', opacity: '1' },
            // { name: 'H_progres_60', opacity: '1' },
            // { name: 'H_progres_89', opacity: '1' },
            // { name: 'H_progres_100', opacity: '1' },
            { name: 'H_step_isp',   text: '52.9', opacity: '0' },
            { name: 'HCO_step_isp', text: '30.2' },
            { name: 'Tkyp_3', text: '1117' },
            { name: 'Tkyp_2', text: '1105' },
            { name: 'Tkyp_1', text: '1182' },
            { name: 'Tkyp_3_rect', color: '#ffff0f' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK3_status_1_fon', color: '#ada3b0' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#43A3EF' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3',  text: '0' },
            { name: 'Fvozdyh_2',  text: '0' },
            { name: 'Fgaz_3',     text: '0' },
            { name: 'Fgaz_2',     text: '0' },
            { name: 'VNK1_Fb',   text: '0' },
            { name: 'VNK1_Fr',   text: '0' },
            { name: 'Tdym_3', text: '132' },
            { name: 'Tdym_2', text: '169' },
            { name: 'Tdym_1', text: '155' },
            { name: 'P_Os_szat_voz', text: '8.31' },
            { name: 'T_Os_szat_voz', text: '26' },
            { name: 'Temp_peref_1',   text: '55' },
            { name: 'Temp_peref_2',   text: '47' },
            { name: 'Temp_peref_3',   text: '52' },
            { name: 'Temp_peref_4',   text: '48' },
            { name: 'Temp_peref_5',   text: '58' },
            { name: 'Temp_peref_6',   text: '51' },
            { name: 'Temp_peref_7',   text: '55' },
            { name: 'Temp_peref_8',   text: '54' },
            { name: 'Temp_peref_9',   text: '68' },
            { name: 'Temp_peref_10',  text: '49' },
            { name: 'Temp_peref_11',  text: '51' },
            { name: 'Temp_peref_12',  text: '56' },
            { name: 'Temp_peref_13',  text: '89' },
            { name: 'Temp_peref_14',  text: '50' },
            { name: 'Temp_peref_15',  text: '57' },
            { name: 'Temp_peref_16',  text: '48' },
            { name: 'T1', text: '114' },
            { name: 'T2', text: '134' },
            { name: 'T3', text: '104' },
            { name: 'T4', text: '119' },
            { name: 'P_2', text: '1.45' },
            { name: 'P_2_rect', color: "#ffffff" },
            { name: 't_gor_dut', text: '1094' },
            { name: 't_gor_dut_spravaRydom', text: '1100' },
            { name: 'H_Os_szat_voz', text: '78' },
            { name: 't_prirodn_gaz', text: '15' },
            { name: 'P_pg_prir_gaz', text: '8,61' },
            { name: 'F_prir_gaz_table',   text: '30000' },
            { name: 'F_pg_sym_prir_gaz',  text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba',    text: '0' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt',  text: '0' },
            { name: 'P_vbls',     text: '0.09' },
            { name: 'P_vus_rect',   color: '#ffff0f' },
            { name: 'dP_verh', text: '0.09' },
            { name: 'dP_verh_rect', color: '#ffff0f' },
            { name: 'dP_obsh_tryba', text: '1.36' },
            { name: 'dP_obsh_trybarect', color: '#ffffff' },
            { name: 'dP_nish_tryba', text: '1.27' },
            { name: 'dP_nish_rect', color: '#ffffff' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffffff' },
            { name: 'TTG_raschet', text: '2296', opacity: '1' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', text: '1428', opacity: '0' },
            { name: 'L2', text: '1428', opacity: '0' },
            { name: 'L4', text: '1428', opacity: '0' },
            { name: 'L3', text: '1428', opacity: '0' },
            { name: 'L1_elem', color: '#ffffff' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L4_elem', color: '#ffffff' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '0.09' },
            { name: 'P_tryba_1_591', text: '0.09' },
            { name: 'P_tryba_1_592', text: '0.09' },
            { name: 'P_tryba_1_593', text: '0.09' },
            { name: 'P_tryba_2_1', text: '0.13' },
            { name: 'P_tryba_2_2', text: '0.14' },
            { name: 'P_tryba_2_3', text: '0.14' },
            { name: 'P_tryba_2_4', text: '0.14' },
            { name: 'P_tryba_3_590', text: '0.18' },
            { name: 'P_tryba_3_591', text: '0.18' },
            { name: 'P_tryba_4_1', text: '2.76' },
            { name: 'P_tryba_4_2', text: '1.87' },
            { name: 'P_tryba_4_3', text: '2.88' },
            { name: 'P_tryba_4_4', text: '1.20' },
            { name: 'P_tryba_5_1', text: '0.84' },
            { name: 'P_tryba_5_2', text: '1.55' },
            { name: 'P_tryba_5_3', text: '1.97' },
            { name: 'P_tryba_5_4', text: '2.80' },
            { name: 'V_dyt',      text: '211.8' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18',    text: '27.5' },
            { name: 'ydel_tep_17',    text: '33.2' },
            { name: 'ydel_tep_16',    text: '32.2' },
            { name: 'ydel_tep_15',    text: '27.5' },
            { name: 'ydel_tep_12_14', text: '52.2' },
            { name: 'ydel_tep_10_11', text: '14.2' },
            { name: 'ydel_tep_9',     text: '12.2' },
            { name: 'ydel_tep_8',     text: '14.1' },
            { name: 'ydel_tep_7',     text: '30.1' },

            // bzu full+
            { name: 'ochistka sedel_P', text: '6.10' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '31' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '12' },
            { name: 'B1_dp Bunker', text: '-0.01' },
            { name: 'B1_P compes', text: '0.10' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP',       text: '93.0' },
            { name: 'B1_vibratciya',      text: '2' },
            { name: 'V linii P_B1',       text: '202' }, // Б1
            { name: 'V linii dP_B1',      text: '226' },
            { name: 'V sisteme vzveh_B1', text: '193' },
            { name: 'V linii P_B2',       text: '148' }, // Б2
            { name: 'V linii dP_B2',      text: '276' },
            { name: 'V sisteme vzveh_B2', text: '165' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.09' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.10' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.09' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.09' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia',             text: '8' },
            { name: 'ugol naklona_tekushiy',  text: '33.3' },
            { name: 'ugol naklona_zadanyi',   text: '33.4' },
            { name: 'gradusow ugol',          text: '103.1' },
            { name: 'prochent1', text: '2' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р',         opacity: '1' },
            { name: 'left_ellipse',      color: '#860004',  opacity: '1' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.10' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '93.1' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            { name: 'primoygolinik_smehivateli', color: '#860004' }, // горизонтальная палочка слева
            // не хватает схемы ПУСТ, зеленая/красная палочка рядом
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.3' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#06FF06' }, //  Выгр зеленые зеленые рамки  #06FF06       #E6E6E6
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#e6e6e6' }, // пауза по центру
            { name: 'leviy', color: '#860004' }, // палка от цифр слева

            { name: 'verx', text: '0' }, // цифры сверху
            // не хватает палочки горизонтальной под цифрами
            { name: 'black_arrow_under_verx', opacity: '0' }, // стрелка под цифрами

            { name: 'praviy', color: '#860004' }, // палка от цифр справа
            // не хватает элемента [К - в зеленом кружке]
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции

            { name: 'rezym_A', color: '#06FF06' }, // текущий режим А задник
            { name: 'rezym_D', color: '#06FF06' }, // текущий режим Д задник
            { name: 'K_16_strelka', opacity: '0' }, // к16 сброс ошибки стрелка

            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '1.06' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '15.4' }, // t
            // { name: 'matrix 1 str 14_M', text: '34.9' }, //  HZ ne vidno
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '1' }, // % справа
            
            { name: 'klNKB-2_2',      color: '#860004' }, // НКВ-2 verh  // ilay
            { name: 'klNKB-2_1',      color: '#860004' }, // НКВ-2 niz   // ilay
            { name: 'vigruzca pravo', color: '#E6E6E6' }, // Выгр спарва   // ilay
            

            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '31' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '-0.01' }, // 
            { name: 'B2_P compens', text: '0.14' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '100' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '53' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            // { name: 'btn_ZapSledPorc_border', text: '6' }, //  Запрет след.порции задник

            { name: 'given_level',   text: '0.90' }, // 
            { name: 'tekushy_level', text: '2.84' }, // 
            { name: 'radar 1',  text: '2.83' },   // 
            { name: 'radar 2',  text: '2.82' },   // 
            { name: 'mexan',    text: '2.81' },  // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'v rabote',   color: '#D0D1D3' }, // в работе текст // afk  #c8c8d2 #D0D1D3
            { name: 'bg_vRabote', color: '#06FF06' }, // в работе       // afk  #f6fbff #06FF06
            { name: 'ismetir_ramki',      color: '#06FF06' }, // Измерить задник
            { name: 'mex.zond na huxte',  color: '#D0D1D3' }, //  зеленый квадрат Мех.зонд на шихт
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
            { name: 'B1_Tip',   color: '#860004' }, // 
            { name: 'B2_Tip',   color: '#008600' }, // 
            { name: 'T2_Tip',   color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip',   color: '#008600' }, // 
            { name: 'B1_ves', text: '93.1' }, // 
            { name: 'B2_ves', text: '16.4' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 
            // { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            // { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            // { name: 'K_str1', color: '#008600' }, // str 1 color
            // { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color

            // { name: 'na_conveer_s1_bukca', text: 'См', opacity: '0' }, // str 2 
            // { name: 'str1_down',           text: 'К' }, // str 2 
            // { name: 'str51_down',          text: 'К' }, // str 51 
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
            // { name: 'Str1_8', color: '#008600' }, // str 1-8 r  // #008600
            // { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'Str1_1', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'str1_K_1',   text: '0' }, // str 1-11 t
            // { name: 'str1_K_2',   text: '0' }, // str 1-10 t
            // { name: 'str1_K_3',   text: '0' }, // str 1-9 t
            // { name: 'str1_K_4',   text: '22' }, // str 1-8 t
            // { name: 'str1_K_5',   text: '21' }, // str 1-7 t
            // { name: 'str1_K_6',   text: '19' }, // str 1-6 t
            // { name: 'str1_K_7',   text: '15' }, // str 1-5 t
            // { name: 'str1_K_8',   text: '13' }, // str 1-4 t
            // { name: 'str1_K_9',   text: '10' }, // str 1-3 t
            // { name: 'str1_K_10',  text: '0' },  // str 1-2 t
            // { name: 'str1_K_11',  text: '0' },  // str 1-1 t
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
      starttime: timeDiff + 253.03,
    },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 }, }, duration: 0.15, startTime: timeDiff + 254, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0     }, }, duration: 0.15, startTime: timeDiff + 255, human: true, },
    { 
      action: {
        windows2D:{
          elements:[
            { name: 'H_snotr', text: '24' },
            { name: 'dp_kl_red', color: '#6E6E6E' },
            { name: 'H_progres_7',    opacity: '1' },
            { name: 'H_progres_19',   opacity: '1' },
            { name: 'H_progres_22',   opacity: '1' },
            { name: 'H_progres_33',   opacity: '0' },
            { name: 'H_progres_49',   opacity: '0' },
            { name: 'H_progres_56',   opacity: '0' },
            { name: 'H_progres_60',   opacity: '0' },
            { name: 'H_progres_89',   opacity: '0' },
            { name: 'H_progres_100',  opacity: '0' },
            { name: 'P_2', text: '1.50' },
            { name: 'P_2_rect', color: "#ffffff" }
          ]
        }
      },
      startTime: timeDiff + 256,
    },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.091', },        startTime: timeDiff + 256.01, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.090', },         startTime: timeDiff + 256.01, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.401', },         startTime: timeDiff + 256.01, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.165', },          startTime: timeDiff + 256.01, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4213.', },      startTime: timeDiff + 256.01, },
    { action: { target3D: 'pGorDut', color: 'green', number: '1.489', },        startTime: timeDiff + 256.01, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.85', },      startTime: timeDiff + 256.01, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.07', },      startTime: timeDiff + 256.01, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0141.', },        startTime: timeDiff + 256.01, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0166.', },        startTime: timeDiff + 256.01, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0146.', },        startTime: timeDiff + 256.01, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0129.', },        startTime: timeDiff + 256.01, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '06.71', },        startTime: timeDiff + 256.01, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.13', },     startTime: timeDiff + 256.01, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.13', },     startTime: timeDiff + 256.01, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.14', },      startTime: timeDiff + 256.01, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.38', }, startTime: timeDiff + 256.01, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.355', },     startTime: timeDiff + 256.01, },
    { action: { target3D: 'tReduct', color: 'green', number: '034.0', },        startTime: timeDiff + 256.01, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '24.00', },   startTime: timeDiff + 256.01, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.11', },    startTime: timeDiff + 256.02, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '056.3', },    startTime: timeDiff + 256.02, },
    ////-----------------------------------44--------------------------//// 
    {      lifeTime: '12:23:00',      startTime: timeDiff + 257,    },
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma', // 3.5
      startTime: timeDiff + 258,
    }, 
    {multi: [{action: {target2D: 'R_Snort',},},{action: {target2D: 'R_Furm',},},],startTime: timeDiff + 259,human: true,},

    ////-----------------------------------45--------------------------//// 
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 260,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 261, human: true, },
    {
      text: 'На фурмах 1,5.',
      sender: 'Газовщик',
      audio: 'tts-vo77', //  2.7
      startTime: timeDiff + 262,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 265, },
    {
      text: 'Закрывайте свечи.',
      sender: 'Мастер печи',
      audio: 'tts-vo77', // 1.6
      startTime: timeDiff + 265.5,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 267, human: true,},
    {
      text: 'Закрываем атмосферные клапана.',
      sender: 'Газовщик',
      audio: 'tts--vo45', // 2.5
      startTime: timeDiff + 268,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 271, },
    ////--------------------------------46--------------------------//// 
    {
      scenarioText: 'Закрыть атмосферные клапаны',
      text: 'Закрыть атмосферные клапаны доменной печи. Проверить плотность закрытия атмосферных клапанов.',
      sender: 'Система',
      audio: 'tts--46', // 6
      startTime: timeDiff + 272,
    },
    ////--------------------------------47--------------------------//// 
    {
      text: 'Закрыть атмосферные клапаны 1, 2 (с дросселем-регулятором), 3 (с гидравлическим приводом)',
      sender: 'Система',
      audio: 'tts--47', // 6.6
      startTime: timeDiff + 279,
    },
    { action: { target3D: 'Handle_033', rotation: { y: 0.785398 },  }, duration: 0.3,  startTime: timeDiff + 280, human: true, },
    { action: { target3D: 'Lamp_Green_006', material: 'Green_Lamp_Off',  },            startTime: timeDiff + 271,              },
    { action: { target3D: 'Lamp_Red_006', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 272,              },
    { action: { target3D: 'Lamp_Red_006', material: 'Red_Lamp_Off', },                 startTime: timeDiff + 273,              },
    { action: { target3D: 'Lamp_Red_006', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 274,              },
    { action: { target3D: 'Lamp_Red_006', material: 'Red_Lamp_Off', },                 startTime: timeDiff + 275,              },
    { action: { target3D: 'Lamp_Red_006', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 276,              },

    { action: { target3D: 'Handle_034', rotation: { y: 0.785398 },  }, duration: 0.3,  startTime: timeDiff + 276, human: true, },
    { action: { target3D: 'Lamp_Green_007', material: 'Green_Lamp_Off',  },            startTime: timeDiff + 277,              },
    { action: { target3D: 'Lamp_Red_007', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 278,              },
    { action: { target3D: 'Lamp_Red_007', material: 'Red_Lamp_Off', },                 startTime: timeDiff + 279,              },
    { action: { target3D: 'Lamp_Red_007', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 280,              },
    { action: { target3D: 'Lamp_Red_007', material: 'Red_Lamp_Off', },                 startTime: timeDiff + 281,              },
    { action: { target3D: 'Lamp_Red_007', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 282,              },

    { action: { target3D: 'Handle_032', rotation: { y: 0.785398 },  }, duration: 0.3,  startTime: timeDiff + 283, human: true, },
    { action: { target3D: 'Lamp_Green_005', material: 'Green_Lamp_Off',  },            startTime: timeDiff + 284,              },
    { action: { target3D: 'Lamp_Red_005', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 285,              },
    { action: { target3D: 'Lamp_Red_005', material: 'Red_Lamp_Off', },                 startTime: timeDiff + 286,              },
    { action: { target3D: 'Lamp_Red_005', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 287,              },
    { action: { target3D: 'Lamp_Red_005', material: 'Red_Lamp_Off', },                 startTime: timeDiff + 288,              },
    { action: { target3D: 'Lamp_Red_005', material: 'Red_Lamp_On',  },                 startTime: timeDiff + 289,              },

    ////--------------------------------48--------------------------//// 
    { action: { target3D: 'Handle_034', rotation: { y: 0 },  }, duration: 0.3,  startTime: timeDiff + 290, human: true, },
    { action: { target3D: 'Handle_033', rotation: { y: 0 },  }, duration: 0.3,  startTime: timeDiff + 291, human: true, },
    { action: { target3D: 'Handle_032', rotation: { y: 0 },  }, duration: 0.3,  startTime: timeDiff + 292, human: true, },
    // multi { multi: [ { action: { target3D: 'Handle_033', rotation: { y: 0 }, } }, { action: { target3D: 'Handle_034', rotation: { y: 0 }, } }, { action: { target3D: 'Handle_032', rotation: { y: 0 }, } }],startTime: timeDiff + 514,human: true,},
    {
      text: 'Атмосферные клапана закрыты и находятся в нейтральном положении.',
      sender: 'Система',
      audio: 'tts--48', // 5
      startTime: timeDiff + 293,
    },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.219', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.120', },         startTime: timeDiff + 299.01, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.385', },         startTime: timeDiff + 299.01, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.123', },          startTime: timeDiff + 299.01, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4188.', },      startTime: timeDiff + 299.01, },
    { action: { target3D: 'pGorDut', color: 'green', number: '1.561', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.82', },      startTime: timeDiff + 299.01, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.87', },      startTime: timeDiff + 299.01, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0145.', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0171.', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0149.', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0132.', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '09.06', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.40', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1098.', },        startTime: timeDiff + 299.01, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.13', },     startTime: timeDiff + 299.01, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.14', },     startTime: timeDiff + 299.01, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.14', },      startTime: timeDiff + 299.01, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.38', }, startTime: timeDiff + 299.01, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2332', },      startTime: timeDiff + 299.01, },
    { action: { target3D: 'tReduct', color: 'green', number: '0349', },         startTime: timeDiff + 299.01, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '2482', },    startTime: timeDiff + 299.01, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0000', },      startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.03', },    startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.0', },    startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', },  startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085', },   startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '074.4', },    startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.20', },    startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.2', },    startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '033.5', },    startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 299.01, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.81', },     startTime: timeDiff + 299.01, },

    ////--------------------------------49--------------------------//// 
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say', // 1.567
      startTime: timeDiff + 300,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 301,    human: true, },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_on', },  startTime: timeDiff + 302,                 },
    {
      text: 'Атмосферные клапана закрыты. На фурмах 1 и 5.',
      sender: 'Газовщик',
      audio: 'tts-vo80', // 4.1
      startTime: timeDiff + 303,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 308,                 },
    {
      text: 'Николай Владимирович, выходи на режим.',
      sender: 'Мастер печи',
      audio: 'tts-vo81', // 2.8
      startTime: timeDiff + 309,
    },
    { action: { target3D: 'ButtonHightlight_046', },                startTime: timeDiff + 310,    human: true, },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_on', },  startTime: timeDiff + 311,                 },
    {
      text: 'Понятно, полный ход.',
      sender: 'Газовщик',
      audio: 'tts-vo82', // 1.9
      startTime: timeDiff + 312,
    },
    { action: { target3D: 'bzuDavlenie_l',   color: 'red', number: '00.31', }, startTime: timeDiff + 314.1, },
    { action: { target3D: 'bzuVesNetto_l',   color: 'red', number: '093.1', }, startTime: timeDiff + 314.1, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', }, startTime: timeDiff + 314.1, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085',  }, startTime: timeDiff + 314.1, },
    { action: { target3D: 'bzuFactUgol_l',   color: 'red', number: '209.7', }, startTime: timeDiff + 314.1, },
    { action: { target3D: 'bzuDavlenie_r',   color: 'red', number: '00.28', }, startTime: timeDiff + 314.1, },
    { action: { target3D: 'bzuVesNetto_r',   color: 'red', number: '016.2', }, startTime: timeDiff + 314.1, },
    {      lifeTime: '12:25:00',      startTime: timeDiff + 314.2,    },

    ////--------------------------------50--------------------------//// 
    {
      scenarioText: 'Дать команду открыть кислород.',
      sender: 'Система',
      audio: 'telephone_say', // 1.7
      startTime: timeDiff + 315,
    },
    { action: { target3D: 'PhoneButton017', }, startTime: timeDiff + 316, human: true, },
    {
      text: 'Открывайте 10000 кислорода.',
      sender: 'Газовщик',
      audio: 'tts-vo83', // 2.37
      startTime: timeDiff + 317,
    },
    {
      text: 'Понял, выполняю.',
      sender: 'Инженер-энергетик',
      audio: 'tts-vo84', // 1.76
      startTime: timeDiff + 320,
    }, 
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '100'}    ] } }, startTime : timeDiff + 322.0, },
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '400'}    ] } }, startTime : timeDiff + 322.1, },
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '900'}    ] } }, startTime : timeDiff + 322.2, },
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '1500'}   ] } }, startTime : timeDiff + 322.3, },
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '2500'}   ] } }, startTime : timeDiff + 322.4, },
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '5000'}   ] } }, startTime : timeDiff + 322.5, },
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '7500'}   ] } }, startTime : timeDiff + 322.6, },
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '9999'}   ] } }, startTime : timeDiff + 322.7, },
    { action: { windows2D: { elements: [ {name: 'EVD1_O', text: '10100'}  ] } }, startTime : timeDiff + 322.7, },
    ////--------------------------------51--------------------------////
    {
      scenarioText: 'Повысить давление.',
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 1,7 кгс/см².',
      audio: 'tts--51', // 4.7
      sender: 'Система',
      startTime: timeDiff + 323,
    },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785  }, }, duration: 0.15, startTime: timeDiff + 324, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0      }, }, duration: 0.15, startTime: timeDiff + 325, human: true, },
    { // На схеме ДП будет падать давление с Н24 до Н20, а на фурмах с 1.50 поднимется до 1.70.
      action: {
        windows2D:{
          elements:[
            { name: 'H_snotr', text: '20' },
            { name: 'dp_kl_red', color: '#6E6E6E' },
            { name: 'H_progres_7',    opacity: '1' },
            { name: 'H_progres_19',   opacity: '1' },
            { name: 'H_progres_22',   opacity: '1' },
            { name: 'H_progres_33',   opacity: '0' },
            { name: 'H_progres_49',   opacity: '0' },
            { name: 'H_progres_56',   opacity: '0' },
            { name: 'H_progres_60',   opacity: '0' },
            { name: 'H_progres_89',   opacity: '0' },
            { name: 'H_progres_100',  opacity: '0' },
            { name: 'P_2', text: '1.70' },
            { name: 'P_2_rect', color: "#ffffff" }
          ]
        }
      },
      startTime: timeDiff + 326,
    },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4175.',     }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'pGorDut', color: 'green', number: '1.654',       }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.82',     }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.87',     }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000',       }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0137.',       }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '06.54',       }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.40',       }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1100.',       }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.13',     }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.37',}, startTime: timeDiff + 326.01, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.342',    }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'tReduct', color: 'green', number: '035.1',       }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '24.84',  }, startTime: timeDiff + 326.01, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0000',     }, startTime: timeDiff + 326.01, },

    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.29',   }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.1',   }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085',  }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '217.0',   }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.28',   }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.2',   }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '33.5',    }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096',  }, startTime: timeDiff + 326.02, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.81',    }, startTime: timeDiff + 326.02, },
    {      lifeTime: '12:26:00',      startTime: timeDiff + 326.03,    },
    ////--------------------------------52--------------------------//// 
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma', // 3.5
      startTime: timeDiff + 327,
    }, 
    {multi: [{action: {target2D: 'R_Snort',},},{action: {target2D: 'R_Furm',},},],startTime: timeDiff + 328, human: true,},
    {
      action: {
        window2D: {
          elements: [
            // bzu full+
            // { name: 'ochistka sedel_P', text: '5.36' },
            // { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            // { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '31' },
            // { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            // { name: 'B1_dp Bunker', text: '-0.00' },
            // { name: 'B1_P compes', text: '1.29' },
            // { name: 'B1_vremy vygruski', text: '104' },
            // { name: 'B1_vremy vygruski raschoytnoe ', text: '105' },
            // { name: 'B1_vremy sbrosa P ', text: '0' },
            // { name: 'B1_vremy nabora P ', text: '2' },
            // { name: 'B1_ves s SHP',       text: '93.0' },
            // { name: 'B1_vibratciya',      text: '2' },
            // { name: 'V linii P_B1',       text: '201' }, // Б1
            // { name: 'V linii dP_B1',      text: '228' },
            // { name: 'V sisteme vzveh_B1', text: '191' },
            // { name: 'V linii P_B2',       text: '148' }, // Б2
            // { name: 'V linii dP_B2',      text: '275' },
            // { name: 'V sisteme vzveh_B2', text: '165' },
            // { name: 'rashody u davlenia v gazoprovode_P1', text: '1.32' },
            // { name: 'rashody u davlenia v gazoprovode_P2', text: '1.32' },
            // { name: 'rashody u davlenia v gazoprovode_P3', text: '1.32' },
            // { name: 'rashody u davlenia v gazoprovode_P4', text: '1.32' },
            // { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            // { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            // { name: 'rashody u davlenia v gazoprovode_F3', text: '129' },
            // { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            // { name: 'stanciia',             text: '8' },
            // { name: 'ugol naklona_tekushiy',  text: '20.5' },
            // { name: 'ugol naklona_zadanyi',   text: '33.4' },
            // { name: 'gradusow ugol',          text: '20.1' },
            // { name: 'prochent1', text: '1' }, // %
            // { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            // { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
            // // не хватает схемы 
            // { name: 'left_ellipse_text', text: 'Р',         opacity: '0' },
            // { name: 'left_ellipse',      color: '#860004',  opacity: '0' }, // K
            // { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            // { name: 'matrix 1 str 1_kgc', text: '1.30' }, // кгс/см
            // { name: 'matrix 1 str 1_T', text: '-0.2' }, // T
            // { name: 'matrix 1 str 1_M', text: '-0.1' }, // M3
            // { name: 'primoygolinik_smehivateli', color: '#860004' }, // горизонтальная палочка слева
            // // не хватает схемы ПУСТ, зеленая/красная палочка рядом
            // // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'HZ1', text: '1.3' }, // ШЗ слева
            // { name: 'left_vugr_rect', color: '#E6E6E6' }, //  Выгр зеленые зеленые рамки
            // { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            // { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            // { name: 'arrow_left', opacity: '0' }, // стрелка слева
            // { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            // { name: 'btn_Pause_border', color: '#e6e6e6' }, // пауза по центру
            // { name: 'leviy', color: '#860004' }, // палка от цифр слева

            // { name: 'verx', text: '0' }, // цифры сверху
            // // не хватает палочки горизонтальной под цифрами
            // { name: 'black_arrow_under_verx', opacity: '0' }, // стрелка под цифрами

            // { name: 'praviy', color: '#860004' }, // палка от цифр справа
            // // не хватает элемента [К - в зеленом кружке]
            // { name: 'tr_3_str_1_', text: '5' }, // 
            // { name: 'tr_2_str_2_', text: '5' }, // 
            // { name: 'cir_t_2', color: '#5E5E5E' },
            // { name: 'dlina_porcii', text: '125' }, // длина порции

            // { name: 'rezym_A', color: '#06FF06' }, // текущий режим А задник
            // { name: 'rezym_D', color: '#06FF06' }, // текущий режим Д задник
            // { name: 'K_16_strelka', opacity: '0' }, // к16 сброс ошибки стрелка

            // { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            // { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            // { name: 'matrix 1 str 14_kgc', text: '1.28' }, // kгс/см
            // { name: 'matrix 1 str 14_T', text: '16.4' }, // t
            // { name: 'matrix 1 str 14_M', text: '34.9' }, // 
            // { name: 'pust_ramka_r', opacity: '0' }, // 
            // { name: 'r_pust', opacity: '0' }, // 
            // { name: 'HZ2', text: '1.4' }, // Ш3 справа
            // { name: 'prochent2', text: '1' }, // % справа
            
            // { name: 'klNKB-2_2',      color: '#06FF06' }, // НКВ-2 verh  // ilay
            // { name: 'klNKB-2_1',      color: '#06FF06' }, // НКВ-2 niz   // ilay
            // { name: 'vigruzca pravo', color: '#06FF06' }, // Выгр спарва   // ilay
            

            // { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            // { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            // { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '32' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '-0.01' }, // 
            { name: 'B2_P compens', text: '0.34' }, // 
            { name: 'B2_time vygruski', text: '94' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '100' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '15.4' }, // 
            { name: 'B2_vibratciya', text: '53' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            { name: 'btn_ZapSledPorc_border', color: '#06FF06' }, //  Запрет след.порции задник

            { name: 'given_level',   text: '0.90' }, // 
            { name: 'tekushy_level', text: '2.82' }, // 
            { name: 'radar 1',  text: '2.80' },   // 
            { name: 'radar 2',  text: '2.89' },   // 
            { name: 'mexan',    text: '2.82' },  // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'v rabote',   color: '#06FF06' }, // в работе текст // afk
            { name: 'bg_vRabote', color: '#D0D1D3' }, // в работе       // afk
            { name: 'ismetir_ramki',      color: '#06FF06' }, // Измерить задник
            { name: 'mex.zond na huxte',  color: '#D0D1D3' }, //  зеленый квадрат Мех.зонд на шихт
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
            { name: 'B1_Tip',   color: '#860004' }, // 
            { name: 'B2_Tip',   color: '#008600' }, // 
            { name: 'T2_Tip',   color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip',   color: '#008600' }, // 
            { name: 'B1_ves', text: '93.1' }, // 
            { name: 'B2_ves', text: '16.4' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 
            // { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            // { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            // { name: 'K_str1', color: '#008600' }, // str 1 color
            // { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color

            // { name: 'na_conveer_s1_bukca', text: 'См', opacity: '0' }, // str 2 
            // { name: 'str1_down',           text: 'К' }, // str 2 
            // { name: 'str51_down',          text: 'К' }, // str 51 
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
            // { name: 'Str1_8', color: '#008600' }, // str 1-8 r  // #008600
            // { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'Str1_1', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'str1_K_1',   text: '0' }, // str 1-11 t
            // { name: 'str1_K_2',   text: '0' }, // str 1-10 t
            // { name: 'str1_K_3',   text: '0' }, // str 1-9 t
            // { name: 'str1_K_4',   text: '22' }, // str 1-8 t
            // { name: 'str1_K_5',   text: '21' }, // str 1-7 t
            // { name: 'str1_K_6',   text: '19' }, // str 1-6 t
            // { name: 'str1_K_7',   text: '15' }, // str 1-5 t
            // { name: 'str1_K_8',   text: '13' }, // str 1-4 t
            // { name: 'str1_K_9',   text: '10' }, // str 1-3 t
            // { name: 'str1_K_10',  text: '0' },  // str 1-2 t
            // { name: 'str1_K_11',  text: '0' },  // str 1-1 t
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
      starttime: timeDiff + 328.5,
    },
    ////--------------------------------53--------------------------////
    {
      scenarioText: 'Сбросить контроль прогара фурм.',
      text: 'Сбросить контроль прогара фурм.',
      audio: 'tts--53', // 2.5
      sender: 'Система',
      startTime: timeDiff + 329,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'KP_c_1_17',    stroke: '#009933' },
            { name: 'KP_c_2_17',    stroke: '#4d4d4d' },
            { name: 'KP_c_3_17',    stroke: '#009933' },
            { name: 'KP_c_4_17',    stroke: '#009933' },
            { name: 'KP_c_5_17',    stroke: '#009933' },
            { name: 'KP_c_6_17',    stroke: '#009933' },
            { name: 'KP_c_7_17',    stroke: '#009933' },
            { name: 'KP_c_8_17',    stroke: '#009933' },
            { name: 'KP_c_9_17',    stroke: '#009933' },
            { name: 'KP_c_10_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_11_17',   stroke: '#009933' },
            { name: 'KP_c_12_17',   stroke: '#009933' },
            { name: 'KP_c_13_17',   stroke: '#009933' },
            { name: 'KP_c_14_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_15_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_16_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_17_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_18_17',   stroke: '#009933' },
            { name: 'KP_c_19_17',   stroke: '#009933' },
            { name: 'KP_c_20_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_21_17',   stroke: '#009933' },
            { name: 'KP_c_22_17',   stroke: '#009933' },
            { name: 'KP_c_23_17',   stroke: '#009933' },
            { name: 'KP_c_24_17',   stroke: '#009933' },
            { name: 'KP_c_25_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_26_17',   stroke: '#009933' },
            { name: 'KP_c_27_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_28_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_29_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_30_17',   stroke: '#4d4d4d' },
            { name: 'KP_c_31_17',   stroke: '#009933' },
            { name: 'KP_c_32_17',   stroke: '#4d4d4d' },
          ]
        }
      },
      startTime: timeDiff + 332,
    },

    { 
      multi: [
        { action: { target2D: 'Progar_T2_1',  window2D: { elements: [ {name: 'KP_c_5_1',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_3',  window2D: { elements: [ {name: 'KP_c_5_3',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_4',  window2D: { elements: [ {name: 'KP_c_5_4',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_5',  window2D: { elements: [ {name: 'KP_c_5_5',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_6',  window2D: { elements: [ {name: 'KP_c_5_6',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_7',  window2D: { elements: [ {name: 'KP_c_5_7',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_9',  window2D: { elements: [ {name: 'KP_c_5_9',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_11', window2D: { elements: [ {name: 'KP_c_5_11',   stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_12', window2D: { elements: [ {name: 'KP_c_5_12',   stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_13', window2D: { elements: [ {name: 'KP_c_5_13',   stroke: '#808080'} ] } }, },

        { action: { target2D: 'Progar_T2_18', window2D: { elements: [ {name: 'KP_c_7_2',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_19', window2D: { elements: [ {name: 'KP_c_7_3',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_21', window2D: { elements: [ {name: 'KP_c_7_5',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_22', window2D: { elements: [ {name: 'KP_c_7_6',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_23', window2D: { elements: [ {name: 'KP_c_7_7',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_25', window2D: { elements: [ {name: 'KP_c_7_9',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_26', window2D: { elements: [ {name: 'KP_c_7_10',   stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_30', window2D: { elements: [ {name: 'KP_c_7_14',   stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T2_31', window2D: { elements: [ {name: 'KP_c_7_15',   stroke: '#808080'} ] } }, },

        { action: { target2D: 'Progar_T3_9',  window2D: { elements: [ {name: 'KP_c_9_9',    stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T3_25', window2D: { elements: [ {name: 'KP_c_10_9',   stroke: '#808080'} ] } }, },
        { action: { target2D: 'Progar_T3_31', window2D: { elements: [ {name: 'KP_c_10_15',  stroke: '#808080'} ] } }, },
        
      ],
      startTime: timeDiff + 333,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            // bzu full+
            { name: 'ochistka sedel_P', text: '6.06' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '31' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '-0.02' },
            { name: 'B1_P compes', text: '0.29' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP',       text: '93.0' },
            { name: 'B1_vibratciya',      text: '2' },
            { name: 'V linii P_B1',       text: '231' }, // Б1
            { name: 'V linii dP_B1',      text: '225' },
            { name: 'V sisteme vzveh_B1', text: '193' },
            { name: 'V linii P_B2',       text: '148' }, // Б2
            { name: 'V linii dP_B2',      text: '245' },
            { name: 'V sisteme vzveh_B2', text: '1655' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.27' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.28' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.27' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.28' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '130' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia',             text: '8' },
            { name: 'ugol naklona_tekushiy',  text: '33.3' },
            { name: 'ugol naklona_zadanyi',   text: '33.4' },
            { name: 'gradusow ugol',          text: '256.4' },
            { name: 'prochent1', text: '0' }, // %
            { name: 'jelob_ramka',  color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р',         opacity: '1' },
            { name: 'left_ellipse',      color: '#860004',  opacity: '1' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.29' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '93.0' }, // T
            { name: 'matrix 1 str 1_M', text: '67.7' }, // M3
            { name: 'primoygolinik_smehivateli', color: '#860004' }, // горизонтальная палочка слева
            // не хватает схемы ПУСТ, зеленая/красная палочка рядом
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.4' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#06FF06' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#e6e6e6' }, // пауза по центру
            { name: 'leviy', color: '#860004' }, // палка от цифр слева

            { name: 'verx', text: '0' }, // цифры сверху
            // не хватает палочки горизонтальной под цифрами
            { name: 'black_arrow_under_verx', opacity: '0' }, // стрелка под цифрами

            { name: 'praviy', color: '#860004' }, // палка от цифр справа
            // не хватает элемента [К - в зеленом кружке]
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции

            { name: 'rezym_A', color: '#06FF06' }, // текущий режим А задник
            { name: 'rezym_D', color: '#06FF06' }, // текущий режим Д задник
            { name: 'K_16_strelka', opacity: '0' }, // к16 сброс ошибки стрелка

            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.25' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '16.4' }, // t
            { name: 'matrix 1 str 14_M', text: '34.9' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '0' }, // % справа
            
            { name: 'klNKB-2_2',      color: '#06FF06' }, // НКВ-2 verh  // ilay
            { name: 'klNKB-2_1',      color: '#06FF06' }, // НКВ-2 niz   // ilay
            { name: 'vigruzca pravo', color: '#06FF06' }, // Выгр спарва   // ilay
            

            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '31' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '-0.02' }, // 
            { name: 'B2_P compens', text: '0.33' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '100' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP',      text: '16.4' }, // 
            { name: 'B2_vibratciya',    text: '53' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            { name: 'btn_ZapSledPorc_border', color: '#06FF06' }, //  Запрет след.порции задник

            { name: 'given_level',   text: '0.90' }, // 
            { name: 'tekushy_level', text: '2.84' }, // 
            { name: 'radar 1',  text: '2.81' },   // 
            { name: 'radar 2',  text: '2.88' },   // 
            { name: 'mexan',    text: '2.84' },  // 

            { name: 'bzu_bg_dosZadYrov',    color: '#06FF06' },  // Достигнут заданный уровень ЗАДНИК

            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'v rabote',   color: '#06FF06' }, // в работе текст // afk
            { name: 'bg_vRabote', color: '#D0D1D3' }, // в работе       // afk
            { name: 'ismetir_ramki',      color: '#06FF06' }, // Измерить задник
            { name: 'mex.zond na huxte',  color: '#06FF06' }, //  зеленый квадрат Мех.зонд на шихт
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
            { name: 'B1_Tip',   color: '#860004' }, // 
            { name: 'B2_Tip',   color: '#008600' }, // 
            { name: 'T2_Tip',   color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip',   color: '#008600' }, // 
            { name: 'B1_ves', text: '93.0' }, // 
            { name: 'B2_ves', text: '16.3' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            { name: 'K_str1', color: '#860004' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color

            { name: 'na_conveer_s1_bukca', text: 'См', opacity: '0' }, // str 2 
            { name: 'str1_down',           text: 'Р' }, // str 2 
            { name: 'str51_down',          text: 'К' }, // str 51 
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
            // { name: 'Str1_8', color: '#008600' }, // str 1-8 r  // #008600
            // { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'Str1_1', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'str1_K_1',   text: '0' }, // str 1-11 t
            // { name: 'str1_K_2',   text: '0' }, // str 1-10 t
            // { name: 'str1_K_3',   text: '0' }, // str 1-9 t
            // { name: 'str1_K_4',   text: '22' }, // str 1-8 t
            // { name: 'str1_K_5',   text: '21' }, // str 1-7 t
            // { name: 'str1_K_6',   text: '19' }, // str 1-6 t
            // { name: 'str1_K_7',   text: '15' }, // str 1-5 t
            // { name: 'str1_K_8',   text: '13' }, // str 1-4 t
            // { name: 'str1_K_9',   text: '10' }, // str 1-3 t
            // { name: 'str1_K_10',  text: '0' },  // str 1-2 t
            // { name: 'str1_K_11',  text: '0' },  // str 1-1 t
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
      starttime: timeDiff + 334,
    },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.267',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.091',      },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.484',      },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1238',        },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4294.',   },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'pGorDut', color: 'green', number: '1.753',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.83',   },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.90',   },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0155.',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0182.',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0157.',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0140.',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '06.52',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.39',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1100.',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.13',  },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.14',  },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.12',   },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.36', }, startTime: timeDiff + 334.01, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.339',  },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'tReduct', color: 'green', number: '035.1',     },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '24.82', },   startTime: timeDiff + 334.01, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0000',   },    startTime: timeDiff + 334.01, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.24',   },  startTime: timeDiff + 334.02, },

    ////--------------------------------54--------------------------////
    {
      text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 2,00 кгс/см².',
      audio: 'tts--51', // 4.7
      sender: 'Система',
      startTime: timeDiff + 335,
    },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785  }, }, duration: 0.15, startTime: timeDiff + 336, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0      }, }, duration: 0.15, startTime: timeDiff + 337, human: true, },
    { 
      action: {
        windows2D:{
          elements:[
            { name: 'H_snotr', text: '15' },
            { name: 'dp_kl_red', color: '#6E6E6E' },
            { name: 'H_progres_7',    opacity: '1' },
            { name: 'H_progres_19',   opacity: '1' },
            { name: 'H_progres_22',   opacity: '1' },
            { name: 'H_progres_33',   opacity: '0' },
            { name: 'H_progres_49',   opacity: '0' },
            { name: 'H_progres_56',   opacity: '0' },
            { name: 'H_progres_60',   opacity: '0' },
            { name: 'H_progres_89',   opacity: '0' },
            { name: 'H_progres_100',  opacity: '0' },
            { name: 'P_2', text: '2.00' },
            { name: 'P_2_rect', color: "#ffffff" }
          ]
        }
      },
      startTime: timeDiff + 338,
    },
    { 
      action: {
        windows2D:{
          elements:[
            // #region dp full 
            { name: 'radar1_text', text: '2.80' },
            { name: 'radar2_text', text: '2.88' },
            { name: 'radar3_text', text: '2.84' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '51' },
            { name: 'EKZ_H2', text: '51' },
            { name: 'EKZ_H3', text: '51' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 1 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '55096' },
            { name: 'EVD1_O', text: '0' },
            { name: 'EVS_DP7_F', text: '7195' },
             { name: 'EVD1_F', text: '302169' },
            { name: 'EVD_F', text: '300281' },
            { name: 'P_1', text: '2.02' },
            { name: 'F_evd', text: '5036' },
            { name: 'F_hol_dyt', text: '3891' },
            { name: 'T_hol_dyt', text: '49' },
            { name: 'O_hol_dyt', text: '21.0' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.6' },
            { name: 'FO2_hol_dyt', text: '1110' },
            { name: 'N2', text: '68.3' },
            { name: 'CO', text: '16.8' },
            { name: 'CO2', text: '13.2' },
            { name: 'H2_tryb', text: '1.1' },
            { name: 'Nco_tryb', text: '44.0' },
            { name: 'Q_domG_tryb', text: '552', opacity: '1' },
            { name: 'P_vozd_tryb', text: '2' },
            { name: 'P_gaza_tryb', text: '19' },
            { name: 'CO_bor_tryb', text: '0.00' },
            // { name: 'H_snotr', text: '15' },
            // { name: 'kl_red', color: '#00DA01' },
            // { name: 'H_progres_7', opacity: '1' },
            // { name: 'H_progres_19', opacity: '1' },
            // { name: 'H_progres_22', opacity: '1' },
            // { name: 'H_progres_33', opacity: '1' },
            // { name: 'H_progres_49', opacity: '1' },
            // { name: 'H_progres_56', opacity: '1' },
            // { name: 'H_progres_60', opacity: '1' },
            // { name: 'H_progres_89', opacity: '1' },
            // { name: 'H_progres_100', opacity: '1' },
            { name: 'H_step_isp',   text: '52.9', opacity: '1' },
            { name: 'HCO_step_isp', text: '44.6' },
            { name: 'Tkyp_3', text: '1115' },
            { name: 'Tkyp_2', text: '1103' },
            { name: 'Tkyp_1', text: '1208' },
            { name: 'Tkyp_3_rect', color: '#ffff0f' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK3_status_1_fon', color: '#ada3b0' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#ada3b0' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3',     text: '0' },
            { name: 'Fgaz_2',     text: '0' },
            { name: 'VNK1_Fb',   text: '0' },
            { name: 'VNK1_Fr',   text: '0' },
            { name: 'Tdym_3', text: '132' },
            { name: 'Tdym_2', text: '169' },
            { name: 'Tdym_1', text: '155' },
            { name: 'P_Os_szat_voz', text: '8.31' },
            { name: 'T_Os_szat_voz', text: '26' },
            { name: 'Temp_peref_1',   text: '57' },
            { name: 'Temp_peref_2',   text: '47' },
            { name: 'Temp_peref_3',   text: '52' },
            { name: 'Temp_peref_4',   text: '48' },
            { name: 'Temp_peref_5',   text: '58' },
            { name: 'Temp_peref_6',   text: '51' },
            { name: 'Temp_peref_7',   text: '54' },
            { name: 'Temp_peref_8',   text: '54' },
            { name: 'Temp_peref_9',   text: '67' },
            { name: 'Temp_peref_10',  text: '49' },
            { name: 'Temp_peref_11',  text: '51' },
            { name: 'Temp_peref_12',  text: '56' },
            { name: 'Temp_peref_13',  text: '89' },
            { name: 'Temp_peref_14',  text: '51' },
            { name: 'Temp_peref_15',  text: '58' },
            { name: 'Temp_peref_16',  text: '48' },
            { name: 'T1', text: '134' },
            { name: 'T2', text: '157' },
            { name: 'T3', text: '134' },
            { name: 'T4', text: '120' },
            { name: 'P_2', text: '1.96' },
            { name: 'P_2_rect', color: "#ffffff" },
            { name: 't_gor_dut', text: '1100' },
            { name: 't_gor_dut_spravaRydom', text: '1100' },
            { name: 'H_Os_szat_voz', text: '68' },
            { name: 't_prirodn_gaz', text: '15' },
            { name: 'P_pg_prir_gaz', text: '8,64' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '0' },
            { name: 'H_prir_gaz', text: '2' },
            { name: 'F_tryba', text: '318693' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.33' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.11' },
            { name: 'dP_verh_rect', color: '#ffffff' },
            { name: 'dP_obsh_tryba', text: '1.64' },
            { name: 'dP_obsh_trybarect', color: '#ffffff' },
            { name: 'dP_nish_tryba', text: '1.52' },
            { name: 'dP_nish_rect', color: '#ffffff' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffffff' },
            { name: 'TTG_raschet', text: '2300', opacity: '1' },
            { name: 'F_pg_prir_gaz', text: '0' },
            { name: 'dF_pg_prir_gaz', text: '0' },
            { name: 'L1', text: '1428', opacity: '0' },
            { name: 'L2', text: '1428', opacity: '0' },
            { name: 'L4', text: '1428', opacity: '0' },
            { name: 'L3', text: '1428', opacity: '0' },
            { name: 'L1_elem', color: '#ffffff' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L4_elem', color: '#ffffff' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '0.33' },
            { name: 'P_tryba_1_591', text: '0.33' },
            { name: 'P_tryba_1_592', text: '0.33' },
            { name: 'P_tryba_1_593', text: '0.33' },
            { name: 'P_tryba_2_1', text: '0.38' },
            { name: 'P_tryba_2_2', text: '0.38' },
            { name: 'P_tryba_2_3', text: '0.38' },
            { name: 'P_tryba_2_4', text: '0.38' },
            { name: 'P_tryba_3_590', text: '0.43' },
            { name: 'P_tryba_3_591', text: '0.43' },
            { name: 'P_tryba_4_1', text: '2.45' },
            { name: 'P_tryba_4_2', text: '1.74' },
            { name: 'P_tryba_4_3', text: '2.56' },
            { name: 'P_tryba_4_4', text: '1.90' },
            { name: 'P_tryba_5_1', text: '0.91' },
            { name: 'P_tryba_5_2', text: '1.39' },
            { name: 'P_tryba_5_3', text: '1.78' },
            { name: 'P_tryba_5_4', text: '2.50' },
            { name: 'V_dyt', text: '211.8' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '27.5' },
            { name: 'ydel_tep_17', text: '33.3' },
            { name: 'ydel_tep_16', text: '32.1' },
            { name: 'ydel_tep_15', text: '27.7' },
            { name: 'ydel_tep_12_14', text: '52.7' },
            { name: 'ydel_tep_10_11', text: '14.4' },
            { name: 'ydel_tep_9', text: '15.5' },
            { name: 'ydel_tep_8', text: '14.2' },
            { name: 'ydel_tep_7', text: '29.7' },
            // #endregion
            // #region bzu full
            { name: 'ochistka sedel_P', text: '6.07' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '31' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '-0.00' },
            { name: 'B1_P compes', text: '0.34' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP',       text: '93.0' },
            { name: 'B1_vibratciya',      text: '2' },
            { name: 'V linii P_B1',       text: '201' }, // Б1
            { name: 'V linii dP_B1',      text: '225' },
            { name: 'V sisteme vzveh_B1', text: '192' },
            { name: 'V linii P_B2',       text: '149' }, // Б2
            { name: 'V linii dP_B2',      text: '276' },
            { name: 'V sisteme vzveh_B2', text: '165' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.34' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.35' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.34' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.35' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '129' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia',             text: '8' },
            { name: 'ugol naklona_tekushiy',  text: '33.3' },
            { name: 'ugol naklona_zadanyi',   text: '33.4' },
            { name: 'gradusow ugol',          text: '98.1' },
            { name: 'prochent1', text: '5' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р',         opacity: '1' },
            { name: 'left_ellipse',      color: '#860004',  opacity: '1' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.34' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '93.0' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            { name: 'primoygolinik_smehivateli', color: '#860004' }, // горизонтальная палочка слева
            // не хватает схемы ПУСТ, зеленая/красная палочка рядом
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.3' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#06FF06' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#e6e6e6' }, // пауза по центру
            { name: 'leviy', color: '#860004' }, // палка от цифр слева

            { name: 'verx', text: '-0' }, // цифры сверху
            // не хватает палочки горизонтальной под цифрами
            { name: 'black_arrow_under_verx', opacity: '0' }, // стрелка под цифрами

            { name: 'praviy', color: '#860004' }, // палка от цифр справа
            // не хватает элемента [К - в зеленом кружке]
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции

            { name: 'rezym_A', color: '#06FF06' }, // текущий режим А задник
            { name: 'rezym_D', color: '#06FF06' }, // текущий режим Д задник
            { name: 'K_16_strelka', opacity: '0' }, // к16 сброс ошибки стрелка

            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.30' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '16.4' }, // t
            { name: 'matrix 1 str 14_M', text: '34.4' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '2' }, // % справа
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '31' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '0.00' }, // 
            { name: 'B2_P compens', text: '0.37' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '100' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '53' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            // { name: 'btn_ZapSledPorc_border', text: '6' }, //  Запрет след.порции задник

            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '2.84' }, // 
            { name: 'radar 1',  text: '2.80' }, // 
            { name: 'radar 2',  text: '2.88' }, // 
            { name: 'mexan',    text: '2.84' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'v rabote',   color: '#2b2a29' }, // в работе текст
            { name: 'bg_vRabote', color: '#06FF06' }, // в работе
            { name: 'ismetir_ramki', color: '#06FF06' }, // Измерить задник
            { name: 'mex.zond na huxte', color: '#06FF06' }, //  зеленый квадрат Мех.зонд на шихт
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
            { name: 'B1_Tip',   color: '#860004' }, // 
            { name: 'B2_Tip',   color: '#008600' }, // 
            { name: 'T2_Tip',   color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip',   color: '#008600' }, // 
            { name: 'B1_ves', text: '93.0' }, // 
            { name: 'B2_ves', text: '16.4' }, // 
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
            { name: 'str2_P_1',   text: '0' }, // str 2-11 t
            { name: 'str2_P_2',   text: '0' }, // str 2-10 t
            { name: 'str2_P_3',   text: '0' }, // str 2-9 t
            { name: 'str2_P_4',   text: '13' }, // str 2-8 t
            { name: 'str2_P_5',   text: '13' }, // str 2-7 t
            { name: 'str2_P_6',   text: '13' }, // str 2-6 t
            { name: 'str2_P_7',   text: '11' }, // str 2-5 t
            { name: 'str2_P_8',   text: '10' }, // str 2-4 t
            { name: 'str2_P_9',   text: '10' }, // str 2-3 t
            { name: 'str2_P_10',  text: '9' }, // str 2-2 t
            { name: 'str2_P_11',  text: '21' }, // str 2-1 t
            { name: 'str2_P_12',  text: '16.2' }, // str 2-ves t
            { name: 'Str1_8', color: '#008600' }, // str 1-8 r  // #008600
            // { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'Str1_1', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'str1_K_1',   text: '0' }, // str 1-11 t
            // { name: 'str1_K_2',   text: '0' }, // str 1-10 t
            // { name: 'str1_K_3',   text: '0' }, // str 1-9 t
            // { name: 'str1_K_4',   text: '22' }, // str 1-8 t
            // { name: 'str1_K_5',   text: '21' }, // str 1-7 t
            // { name: 'str1_K_6',   text: '19' }, // str 1-6 t
            // { name: 'str1_K_7',   text: '15' }, // str 1-5 t
            // { name: 'str1_K_8',   text: '13' }, // str 1-4 t
            // { name: 'str1_K_9',   text: '10' }, // str 1-3 t
            // { name: 'str1_K_10',  text: '0' },  // str 1-2 t
            // { name: 'str1_K_11',  text: '0' },  // str 1-1 t
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

            // #endregion

          ]
        }
      },
      startTime: timeDiff + 338.01,
    },
    { action: { target3D: 'pKolGaz',    color: 'green', number: '0.306', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'dpVerh',     color: 'green', number: '0.109', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'dpObsh',     color: 'green', number: '1.631', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'dpNiz',      color: 'green', number: '1352', },      startTime: timeDiff + 338.01, },
    { action: { target3D: 'fHolodDut',  color: 'green', number: '4656.', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'pGorDut',    color: 'green', number: '1.931', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'urZasDat1',  color: 'green', number: '02.82', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'urZasDat2',  color: 'green', number: '02.93', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'urZasMeh',   color: 'green', number: '0000', },      startTime: timeDiff + 338.01, },
    { action: { target3D: 'tVGazT1',    color: 'green', number: '0162.', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'tVGazT2',    color: 'green', number: '0190.', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'tVGazT3',    color: 'green', number: '0163.', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'tVGazT4',    color: 'green', number: '0146.', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'tVGazT5',    color: 'green', number: '06.78', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'tVGazT6',    color: 'green', number: '00.40', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'tVGazT7',    color: 'green', number: '1101.', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.16', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.16', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'pSjatVozd',  color: 'green', number: '05.11', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.36', }, startTime: timeDiff + 338.01, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.340', },     startTime: timeDiff + 338.01, },
    { action: { target3D: 'tReduct', color: 'green', number: '035.2', },        startTime: timeDiff + 338.01, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '24.82', },   startTime: timeDiff + 338.01, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0000', },      startTime: timeDiff + 338.01, },
    { action: { target3D: 'fPrirodGazReg', color: 'red', number: '001.9', },    startTime: timeDiff + 338.01, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.35', },    startTime: timeDiff + 338.02, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '105.2', },    startTime: timeDiff + 338.02, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.30', },    startTime: timeDiff + 338.02, },
    
    ////--------------------------------55--------------------------////
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      audio: 'SoundSnortFurma', // 3.5
      sender: 'Система',
      startTime: timeDiff + 339,
    },
    {multi: [{action: {target2D: 'R_Snort',},},{action: {target2D: 'R_Furm',},},],startTime: timeDiff + 340, human: true, },
    ////--------------------------------56--------------------------////
    {
      chapterText: 'Подача природного газа на фурмы',
      scenarioText: 'Принять природный газ в коллектор, предупредив мастера печи о приемки природного газа.',
      text: 'Открыть природный газ в коллектор.',
      audio: 'tts--56', // 2.3
      sender: 'Система',
      startTime: timeDiff + 341,
    },
    ////--------------------------------57--------------------------////
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say', // 1.567
      startTime: timeDiff + 344,
    },
    { action: { target3D: 'ButtonHightlight_046', }, startTime: timeDiff + 345, human: true, },
    {
      text: 'Принимайте ПГ в коллектор.',
      sender: 'Газовщик',
      audio: 'tts--vo57-1', // 1.9
      startTime: timeDiff + 346,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 348, },
    {
      text: 'Хорошо',
      sender: 'Мастер печи',
      audio: 'tts--vo57-2', // 1
      startTime: timeDiff + 349,
    },
    ////--------------------------------58--------------------------////
    {
      text: 'Открыть природный газ на коллекторе электрифицированной задвижкой 721.',
      sender: 'Система',
      audio: 'tts--58', // 5.95
      startTime: timeDiff + 351,
    },
    { action: { target3D: 'Handle_014', rotation: { y: -0.785  }, },    duration: 0.15, startTime: timeDiff + 352, human: true, },
    { action: { target3D: 'Lamp_Red_019',   material: 'Red_Lamp_Off', },                startTime: timeDiff + 353 },
    { action: { target3D: 'Handle_014', rotation: { y: 0      },  },    duration: 0.15, startTime: timeDiff + 354, human: true, },
    { action: { target3D: 'Lamp_Green_023', material: 'Green_Lamp_On', },       startTime: timeDiff + 355 },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.514', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.102', },         startTime: timeDiff + 355.01, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.611', },         startTime: timeDiff + 355.01, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.341', },          startTime: timeDiff + 355.01, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4544.', },      startTime: timeDiff + 355.01, },
    { action: { target3D: 'pGorDut', color: 'green', number: '2.125', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.76', },      startTime: timeDiff + 355.01, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.96', },      startTime: timeDiff + 355.01, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0169.', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0201.', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0169.', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0152.', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '07.21', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.39', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1102.', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.17', },     startTime: timeDiff + 355.01, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.18', },     startTime: timeDiff + 355.01, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.15', },      startTime: timeDiff + 355.01, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.35', }, startTime: timeDiff + 355.01, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.353', },     startTime: timeDiff + 355.01, },
    { action: { target3D: 'tReduct', color: 'green', number: '035.3', },        startTime: timeDiff + 355.01, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '24.84', },   startTime: timeDiff + 355.01, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0.578', },     startTime: timeDiff + 355.01, },
    { action: { target3D: 'fPrirodGazReg', color: 'red', number: '001.9', },    startTime: timeDiff + 355.01, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.52', },    startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.0', },    startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', },  startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085', },   startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '027.2', },    startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.49', },    startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.2', },    startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '33.5', },     startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 355.02, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.75', },     startTime: timeDiff + 355.02, },

    ////--------------------------------59--------------------------////
    {
      scenarioText: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say', // 1.567
      startTime: timeDiff + 356,
    },
    { action: { target3D: 'ButtonHightlight_046', }, startTime: timeDiff + 357, human: true, },
    {
      text: 'Принимайте ПГ в коллектор.',
      sender: 'Газовщик',
      audio: 'tts—vo85', // 3.2
      startTime: timeDiff + 358,
    },
    { action: { target3D: 'Lamp_034', material: 'DonorLamp_off', }, startTime: timeDiff + 361.7, },
    {
      text: 'Понятно',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo86', // 0.98
      startTime: timeDiff + 362,
    },
     
    ////--------------------------------60--------------------------////
    
    {
      scenarioText: 'Отрегулировать расход природного газа на печь и отдельно на каждую фурму.',
      text: 'Увеличить значение параметра на регуляторе природного газа.',
      sender: 'Система',
      audio: 'tts-57', // 3.8
      startTime: timeDiff + 363.6,
    },
    { action: { target3D: 'upBtnFPrirGaza_highlight', },                                  startTime: timeDiff + 364, human: true, },
    { action: { target3D: 'fPrirodGazReg', color: 'red', number: '006.3' },               startTime: timeDiff + 364.01, },
    { action: { target3D: 'progress bar142',          material: 'Unic_progress bar_on' }, startTime: timeDiff + 364.02, },
    { action: { target3D: 'Clone_0_progress bar142',  material: 'Unic_progress bar_on' }, startTime: timeDiff + 364.02, },
    { 
      action: {
        windows2D:{
          elements:[
            // #region dp full 
            { name: 'radar1_text', text: '2.83' },
            { name: 'radar2_text', text: '2.89' },
            { name: 'radar3_text', text: '2.87' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '19' },
            { name: 'EKZ_H2', text: '19' },
            { name: 'EKZ_H3', text: '19' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 0 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '53719' },
            { name: 'EVD1_O', text: '10683' },
            { name: 'EVS_DP7_F', text: '7203' },
             { name: 'EVD1_F', text: '303528' },
            { name: 'EVD_F', text: '301517' },
            { name: 'P_1', text: '2.44' },
            { name: 'F_evd', text: '5026' },
            { name: 'F_hol_dyt', text: '4022' },
            { name: 'T_hol_dyt', text: '53' },
            { name: 'O_hol_dyt', text: '23.9' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.4' },
            { name: 'FO2_hol_dyt', text: '1209' },
            { name: 'N2', text: '60.5' },
            { name: 'CO', text: '21.4' },
            { name: 'CO2', text: '16.7' },
            { name: 'H2_tryb', text: '0.7' },
            { name: 'Nco_tryb', text: '43.8' },
            { name: 'Q_domG_tryb', text: '685', opacity: '1' },
            { name: 'P_vozd_tryb', text: '8' },
            { name: 'P_gaza_tryb', text: '19' },
            { name: 'CO_bor_tryb', text: '0.20' },
            // { name: 'H_snotr', text: '15' },
            // { name: 'kl_red', color: '#00DA01' },
            // { name: 'H_progres_7', opacity: '1' },
            // { name: 'H_progres_19', opacity: '1' },
            // { name: 'H_progres_22', opacity: '1' },
            // { name: 'H_progres_33', opacity: '1' },
            // { name: 'H_progres_49', opacity: '1' },
            // { name: 'H_progres_56', opacity: '1' },
            // { name: 'H_progres_60', opacity: '1' },
            // { name: 'H_progres_89', opacity: '1' },
            // { name: 'H_progres_100', opacity: '1' },
            { name: 'H_step_isp',   text: '89.0', opacity: '1' },
            { name: 'HCO_step_isp', text: '49.9' },
            { name: 'Tkyp_3', text: '1114' },
            { name: 'Tkyp_2', text: '1100' },
            { name: 'Tkyp_1', text: '1226' },
            { name: 'Tkyp_3_rect', color: '#ffff0f' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffffff' },
            { name: 'VNK3_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK3_status_1_fon', color: '#ada3b0' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#43A3EF' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3',     text: '0' },
            { name: 'Fgaz_2',     text: '0' },
            { name: 'VNK1_Fb',   text: '0' },
            { name: 'VNK1_Fr',   text: '0' },
            { name: 'Tdym_3', text: '131' },
            { name: 'Tdym_2', text: '169' },
            { name: 'Tdym_1', text: '145' },
            { name: 'P_Os_szat_voz', text: '8.33' },
            { name: 'T_Os_szat_voz', text: '26' },
            { name: 'Temp_peref_1',   text: '58' },
            { name: 'Temp_peref_2',   text: '48' },
            { name: 'Temp_peref_3',   text: '53' },
            { name: 'Temp_peref_4',   text: '59' },
            { name: 'Temp_peref_5',   text: '58' },
            { name: 'Temp_peref_6',   text: '52' },
            { name: 'Temp_peref_7',   text: '54' },
            { name: 'Temp_peref_8',   text: '54' },
            { name: 'Temp_peref_9',   text: '68' },
            { name: 'Temp_peref_10',  text: '49' },
            { name: 'Temp_peref_11',  text: '52' },
            { name: 'Temp_peref_12',  text: '57' },
            { name: 'Temp_peref_13',  text: '88' },
            { name: 'Temp_peref_14',  text: '52' },
            { name: 'Temp_peref_15',  text: '58' },
            { name: 'Temp_peref_16',  text: '48' },
            { name: 'T1', text: '149' },
            { name: 'T2', text: '177' },
            { name: 'T3', text: '149' },
            { name: 'T4', text: '131' },
            { name: 'P_2', text: '2.38' },
            { name: 'P_2_rect', color: "#ffffff" },
            { name: 't_gor_dut', text: '1100' },
            { name: 't_gor_dut_spravaRydom', text: '1100' },
            { name: 'H_Os_szat_voz', text: '70' },
            { name: 't_prirodn_gaz', text: '15' },
            { name: 'P_pg_prir_gaz', text: '8.59' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '7254' },
            { name: 'H_prir_gaz', text: '13' },
            { name: 'F_tryba', text: '341321' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.77' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.11' },
            { name: 'dP_verh_rect', color: '#ffffff' },
            { name: 'dP_obsh_tryba', text: '1.62' },
            { name: 'dP_obsh_trybarect', color: '#ffffff' },
            { name: 'dP_nish_tryba', text: '1.51' },
            { name: 'dP_nish_rect', color: '#ffffff' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffffff' },
            { name: 'TTG_raschet', text: '2303', opacity: '1' },
            { name: 'F_pg_prir_gaz', text: '5595' },
            { name: 'dF_pg_prir_gaz', text: '1659' },
            // { name: 'L1', text: '1428', opacity: '0' },
            // { name: 'L2', text: '1428', opacity: '0' },
            // { name: 'L4', text: '1428', opacity: '0' },
            // { name: 'L3', text: '1428', opacity: '0' },
            // { name: 'L1_elem', color: '#ffffff' },
            // { name: 'L2_elem', color: '#ffffff' },
            // { name: 'L4_elem', color: '#ffffff' },
            // { name: 'L3_elem', color: '#ffffff' },
            // { name: 'P_tryba_1_590', text: '0.33' },
            // { name: 'P_tryba_1_591', text: '0.33' },
            // { name: 'P_tryba_1_592', text: '0.33' },
            // { name: 'P_tryba_1_593', text: '0.33' },
            // { name: 'P_tryba_2_1', text: '0.38' },
            // { name: 'P_tryba_2_2', text: '0.38' },
            // { name: 'P_tryba_2_3', text: '0.38' },
            // { name: 'P_tryba_2_4', text: '0.38' },
            // { name: 'P_tryba_3_590', text: '0.43' },
            // { name: 'P_tryba_3_591', text: '0.43' },
            // { name: 'P_tryba_4_1', text: '2.45' },
            // { name: 'P_tryba_4_2', text: '1.74' },
            // { name: 'P_tryba_4_3', text: '2.56' },
            // { name: 'P_tryba_4_4', text: '1.90' },
            // { name: 'P_tryba_5_1', text: '0.91' },
            // { name: 'P_tryba_5_2', text: '1.39' },
            // { name: 'P_tryba_5_3', text: '1.78' },
            // { name: 'P_tryba_5_4', text: '2.50' },
            { name: 'V_dyt', text: '157.3' },
            // { name: 'fyrm_v_rab', text: '0' },
            // { name: 'ydel_tep_18', text: '27.5' },
            // { name: 'ydel_tep_17', text: '33.3' },
            // { name: 'ydel_tep_16', text: '32.1' },
            // { name: 'ydel_tep_15', text: '27.7' },
            // { name: 'ydel_tep_12_14', text: '52.7' },
            // { name: 'ydel_tep_10_11', text: '14.4' },
            // { name: 'ydel_tep_9', text: '15.5' },
            // { name: 'ydel_tep_8', text: '14.2' },
            // { name: 'ydel_tep_7', text: '29.7' },
            // #endregion
          ]
        }
      },
      startTime: timeDiff + 365.03,
    },
    { action: { target3D: 'upBtnFPrirGaza_highlight', },                                 startTime: timeDiff + 366, human: true, },
    { action: { target3D: 'fPrirodGazReg', color: 'red', number: '011.3' },              startTime: timeDiff + 366.5, },
    { action: { target3D: 'Clone_1_progress bar142', material: 'Unic_progress bar_on' }, startTime: timeDiff + 366.5, },
        
    { action: { target3D: 'pKolGaz',      color: 'green', number: '0.551', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'dpVerh',       color: 'green', number: '0.100', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'dpObsh',       color: 'green', number: '1.607', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'dpNiz',        color: 'green', number: '1.339', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'fHolodDut',    color: 'green', number: '4615.', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'pGorDut',      color: 'green', number: '2.161', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'urZasDat1',    color: 'green', number: '02.78', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'tVGazT1',      color: 'green', number: '0171.', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'tVGazT2',      color: 'green', number: '0203.', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'tVGazT3',      color: 'green', number: '0170.', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'tVGazT4',      color: 'green', number: '0153.', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'tVGazT5',      color: 'green', number: '06.58', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'tVGazT7',      color: 'green', number: '1101.', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'pTechVodT1',   color: 'green', number: '10.18', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'pTechVodT2',   color: 'green', number: '10.19', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'pSjatVozd',    color: 'green', number: '05.13', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'pAzotkZatv',   color: 'green', number: '2.361', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '24.85', }, startTime: timeDiff + 366.52, },
    { action: { target3D: 'fPrirodGaz',   color: 'green', number: '0.570', }, startTime: timeDiff + 366.52, },
    {      lifeTime: '12:31:00',      startTime: timeDiff + 367,    },
    
    ////--------------------------------61--------------------------////
    {
      text: 'Понизить давление газа.',
      sender: 'Система',
      audio: 'tts-58', // 1.8
      startTime: timeDiff + 368,
    },
    { action: { target2D: 'P cop gaza', window2D: { elements: [ { name: 'vz_number',    text: '2.00' }, ] }, }, startTime: timeDiff + 368.01, human: true, },
    { action: { target2D: 'vz_1',       window2D: { elements: [ { name: 'vz_number',    text: '1' }, ] } },     startTime: timeDiff + 368.02, human: true, }, 
    { action: { target2D: 'vz_ok',      window2D: { elements: [ { name: 'TTG_zadanie',  text: '1.90' }, ] } },  startTime: timeDiff + 368.03, human: true, },

    {
      action: {
        window2D: {
          elements: [
            // #region dp full 
            { name: 'radar1_text', text: '2.79' },
            { name: 'radar2_text', text: '2.95' },
            { name: 'radar3_text', text: '2.86' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '25' },
            { name: 'EKZ_H2', text: '25' },
            { name: 'EKZ_H3', text: '25' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 1 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O', text: '53646' },
            { name: 'EVD1_O', text: '10167' },
            { name: 'EVS_DP7_F', text: '7202' },
             { name: 'EVD1_F', text: '333588' },
            { name: 'EVD_F', text: '303407' },
            { name: 'P_1', text: '2.24' },
            { name: 'F_evd', text: '5068' },
            { name: 'F_hol_dyt', text: '3939' },
            { name: 'T_hol_dyt', text: '51' },
            { name: 'O_hol_dyt', text: '22.1' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.4' },
            { name: 'FO2_hol_dyt', text: '1192' },
            { name: 'N2', text: '68.3' },
            { name: 'CO', text: '16.8' },
            { name: 'CO2', text: '13.2' },
            { name: 'H2_tryb', text: '1.1' },
            { name: 'Nco_tryb', text: '44.0' },
            { name: 'Q_domG_tryb', text: '552', opacity: '1' },
            { name: 'P_vozd_tryb', text: '2' },
            { name: 'P_gaza_tryb', text: '19' },
            { name: 'CO_bor_tryb', text: '0.00' },
            // { name: 'H_snotr', text: '15' },
            // { name: 'kl_red', color: '#00DA01' },
            // { name: 'H_progres_7', opacity: '1' },
            // { name: 'H_progres_19', opacity: '1' },
            // { name: 'H_progres_22', opacity: '1' },
            // { name: 'H_progres_33', opacity: '1' },
            // { name: 'H_progres_49', opacity: '1' },
            // { name: 'H_progres_56', opacity: '1' },
            // { name: 'H_progres_60', opacity: '1' },
            // { name: 'H_progres_89', opacity: '1' },
            // { name: 'H_progres_100', opacity: '1' },
            { name: 'H_step_isp',   text: '81.6', opacity: '1' },
            { name: 'HCO_step_isp', text: '50.3' },
            { name: 'Tkyp_3', text: '1114' },
            { name: 'Tkyp_2', text: '1102' },
            { name: 'Tkyp_1', text: '1218' },
            { name: 'Tkyp_3_rect', color: '#ffff0f' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffff0f' },
            { name: 'VNK3_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK3_status_1_fon', color: '#ada3b0' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#43A3EF' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3',     text: '0' },
            { name: 'Fgaz_2',     text: '0' },
            { name: 'VNK1_Fb',   text: '0' },
            { name: 'VNK1_Fr',   text: '0' },
            { name: 'Tdym_3', text: '131' },
            { name: 'Tdym_2', text: '169' },
            { name: 'Tdym_1', text: '150' },
            { name: 'P_Os_szat_voz', text: '8.29' },
            { name: 'T_Os_szat_voz', text: '26' },
            { name: 'Temp_peref_1',   text: '58' },
            { name: 'Temp_peref_2',   text: '47' },
            { name: 'Temp_peref_3',   text: '53' },
            { name: 'Temp_peref_4',   text: '49' },
            { name: 'Temp_peref_5',   text: '58' },
            { name: 'Temp_peref_6',   text: '51' },
            { name: 'Temp_peref_7',   text: '54' },
            { name: 'Temp_peref_8',   text: '54' },
            { name: 'Temp_peref_9',   text: '87' },
            { name: 'Temp_peref_10',  text: '49' },
            { name: 'Temp_peref_11',  text: '52' },
            { name: 'Temp_peref_12',  text: '56' },
            { name: 'Temp_peref_13',  text: '59' },
            { name: 'Temp_peref_14',  text: '52' },
            { name: 'Temp_peref_15',  text: '58' },
            { name: 'Temp_peref_16',  text: '48' },
            { name: 'T1', text: '141' },
            { name: 'T2', text: '166' },
            { name: 'T3', text: '141' },
            { name: 'T4', text: '126' },
            { name: 'P_2', text: '1.18' },
            { name: 'P_2_rect', color: "#ffffff" },
            { name: 't_gor_dut', text: '1100' },
            { name: 't_gor_dut_spravaRydom', text: '1100' },
            { name: 'H_Os_szat_voz', text: '70' },
            { name: 't_prirodn_gaz', text: '15' },
            { name: 'P_pg_prir_gaz', text: '8,59' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '362' },
            { name: 'H_prir_gaz', text: '12' },
            { name: 'F_tryba', text: '340828' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.57' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.10' },
            { name: 'dP_verh_rect', color: '#ffffff' },
            { name: 'dP_obsh_tryba', text: '1.61' },
            { name: 'dP_obsh_trybarect', color: '#ffffff' },
            { name: 'dP_nish_tryba', text: '1.51' },
            { name: 'dP_nish_rect', color: '#ffffff' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffffff' },
            { name: 'TTG_raschet', text: '2237', opacity: '1' },
            { name: 'F_pg_prir_gaz', text: '4894' },
            { name: 'dF_pg_prir_gaz', text: '-4531' },
            { name: 'L1', text: '1428', opacity: '0' },
            { name: 'L2', text: '1428', opacity: '0' },
            { name: 'L4', text: '1428', opacity: '0' },
            { name: 'L3', text: '1428', opacity: '0' },
            { name: 'L1_elem', color: '#ffffff' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L4_elem', color: '#ffffff' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '0.57' },
            { name: 'P_tryba_1_591', text: '0.57' },
            { name: 'P_tryba_1_592', text: '0.57' },
            { name: 'P_tryba_1_593', text: '0.57' },
            { name: 'P_tryba_2_1', text: '0.62' },
            { name: 'P_tryba_2_2', text: '0.62' },
            { name: 'P_tryba_2_3', text: '0.62' },
            { name: 'P_tryba_2_4', text: '0.62' },
            { name: 'P_tryba_3_590', text: '0.59' },
            { name: 'P_tryba_3_591', text: '0.59' },
            { name: 'P_tryba_4_1', text: '4.91' },
            { name: 'P_tryba_4_2', text: '3.02' },
            { name: 'P_tryba_4_3', text: '4.95' },
            { name: 'P_tryba_4_4', text: '4.70' },
            { name: 'P_tryba_5_1', text: '3.57' },
            { name: 'P_tryba_5_2', text: '1.07' },
            { name: 'P_tryba_5_3', text: '1.32' },
            { name: 'P_tryba_5_4', text: '2.18' },
            { name: 'V_dyt', text: '203.6' },
            { name: 'fyrm_v_rab', text: '0' },
            { name: 'ydel_tep_18', text: '27.5' },
            { name: 'ydel_tep_17', text: '34.5' },
            { name: 'ydel_tep_16', text: '33.5' },
            { name: 'ydel_tep_15', text: '28.9' },
            { name: 'ydel_tep_12_14', text: '51.8' },
            { name: 'ydel_tep_10_11', text: '18.9' },
            { name: 'ydel_tep_9', text: '17.9' },
            { name: 'ydel_tep_8', text: '14.4' },
            { name: 'ydel_tep_7', text: '29.9' },
            // #endregion
            
          ]
        }
      },
      startTime: timeDiff + 368.5
    },
    { action: { target3D: 'bzuDavlenie_l',  color: 'red', number: '00.59', }, startTime: timeDiff + 368.61, },
    { action: { target3D: 'bzuDavlenie_r',  color: 'red', number: '00.56', }, startTime: timeDiff + 368.61, },
    { action: { target3D: 'bzuUrovZasip',   color: 'red', number: '02.81', }, startTime: timeDiff + 368.61, },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.585', },      startTime: timeDiff + 368.62, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.101', },       startTime: timeDiff + 368.62, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.608', },       startTime: timeDiff + 368.62, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.338', },        startTime: timeDiff + 368.62, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4548.', },    startTime: timeDiff + 368.62, },
    { action: { target3D: 'pGorDut', color: 'green', number: '2.194', },      startTime: timeDiff + 368.62, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.81', },    startTime: timeDiff + 368.62, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.95', },    startTime: timeDiff + 368.62, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0172.', },      startTime: timeDiff + 368.62, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0205.', },      startTime: timeDiff + 368.62, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0172.', },      startTime: timeDiff + 368.62, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0155.', },      startTime: timeDiff + 368.62, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1100.', },      startTime: timeDiff + 368.62, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.17', },   startTime: timeDiff + 368.62, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.360', },   startTime: timeDiff + 368.62, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0.500', },   startTime: timeDiff + 368.62, },
    ////--------------------------------62--------------------------////
    {
      text: 'Уменьшить значение параметра на регуляторе природного газа.',
      sender: 'Система',
      audio: 'tts-59', // 3.86
      startTime: timeDiff + 367,
    },
    { action: { target3D: 'upBtnFPrirGaza_highlight', },                                    startTime: timeDiff + 368.00, human: true, },
    { action: { target3D: 'fPrirodGazReg', color: 'red', number: '010.4' },                 startTime: timeDiff + 368.01, },
    { action: { target3D: 'Clone_1_progress bar142', material: 'Unic_progress bar_off' },   startTime: timeDiff + 368.02, },

    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.80', },    startTime: timeDiff + 368.11, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '078.4', },    startTime: timeDiff + 368.11, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.70', },    startTime: timeDiff + 368.11, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.0', },    startTime: timeDiff + 368.11, },
    { action: { target3D: 'pKolGaz', color: 'green', number: '0.761', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.095', },         startTime: timeDiff + 368.12, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.607', },         startTime: timeDiff + 368.12, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.344', },          startTime: timeDiff + 368.12, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4508.', },      startTime: timeDiff + 368.12, },
    { action: { target3D: 'pGorDut', color: 'green', number: '2.382', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.84', },      startTime: timeDiff + 368.12, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.92', },      startTime: timeDiff + 368.12, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0182.', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0218.', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0180.', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0161.', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '07.09', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.39', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1100.', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.05', },     startTime: timeDiff + 368.12, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.16', },     startTime: timeDiff + 368.12, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.15', },      startTime: timeDiff + 368.12, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.28', }, startTime: timeDiff + 368.12, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.369', },     startTime: timeDiff + 368.12, },
    { action: { target3D: 'tReduct', color: 'green', number: '035.8', },        startTime: timeDiff + 368.12, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '25.08', },   startTime: timeDiff + 368.12, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0.707', },     startTime: timeDiff + 368.12, },

    ////--------------------------------63--------------------------////
    {      lifeTime: '12:35:00',      startTime: timeDiff + 369,    },
    {
      scenarioText: 'Дать команду добавить кислород.',
      sender: 'Система',
      audio: 'telephone_say', // 1.7
      startTime: timeDiff + 370,
    },
    { action: { target3D: 'PhoneButton017', }, startTime: timeDiff + 371, human: true, },
    {
      text: 'Открывайте 10000 кислорода.',
      sender: 'Газовщик',
      audio: 'tts-vo87', // 2.28
      startTime: timeDiff + 372,
    },
    {
      text: 'Понял.',
      sender: 'Инженер-энергетик',
      audio: 'tts-vo88', // 0.94
      startTime: timeDiff + 373,
    },

    { 
      action: {
        windows2D:{
          elements:[
            // #region dp full 
            { name: 'radar1_text', text: '2.83' },
            { name: 'radar2_text', text: '2.88' },
            { name: 'radar3_text', text: '2.74' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '16' },
            { name: 'EKZ_H2', text: '16' },
            { name: 'EKZ_H3', text: '16' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 0 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O',  text: '14059' },
            { name: 'EVD1_O',     text: '10028' },
            { name: 'EVS_DP7_F',  text: '7135' },
             { name: 'EVD1_F',    text: '381084' },
            { name: 'EVD_F',      text: '322111' },
            { name: 'P_1',       text: '2.43' },
            { name: 'F_evd',     text: '5018' },
            { name: 'F_hol_dyt', text: '3347' },
            { name: 'T_hol_dyt', text: '54' },
            { name: 'O_hol_dyt', text: '24.1' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.4' },
            { name: 'FO2_hol_dyt', text: '1183' },
            { name: 'N2', text: '60.5' },
            { name: 'CO', text: '21.4' },
            { name: 'CO2', text: '16.7' },
            { name: 'H2_tryb', text: '0.7' },
            { name: 'Nco_tryb', text: '43.8' },
            // { name: 'Q_domG_tryb', text: '552', opacity: '1' },
            { name: 'P_vozd_tryb', text: '8' },
            { name: 'P_gaza_tryb', text: '19' },
            { name: 'CO_bor_tryb', text: '0.00' },
            // { name: 'H_snotr', text: '15' },
            // { name: 'kl_red', color: '#00DA01' },
            // { name: 'H_progres_7', opacity: '1' },
            // { name: 'H_progres_19', opacity: '1' },
            // { name: 'H_progres_22', opacity: '1' },
            // { name: 'H_progres_33', opacity: '1' },
            // { name: 'H_progres_49', opacity: '1' },
            // { name: 'H_progres_56', opacity: '1' },
            // { name: 'H_progres_60', opacity: '1' },
            // { name: 'H_progres_89', opacity: '1' },
            // { name: 'H_progres_100', opacity: '1' },
            { name: 'H_step_isp',   text: '83.6', opacity: '1' },
            { name: 'HCO_step_isp', text: '51.1' },
            { name: 'Tkyp_3', text: '1114' },
            { name: 'Tkyp_2', text: '1102' },
            { name: 'Tkyp_1', text: '1218' },
            { name: 'Tkyp_3_rect', color: '#ffff0f' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffffff' },
            { name: 'VNK3_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK3_status_1_fon', color: '#ada3b0' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#43A3EF' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3',     text: '0' },
            { name: 'Fgaz_2',     text: '0' },
            { name: 'VNK1_Fb',   text: '0' },
            { name: 'VNK1_Fr',   text: '0' },
            { name: 'Tdym_3', text: '131' },
            { name: 'Tdym_2', text: '169' },
            { name: 'Tdym_1', text: '143' },
            { name: 'P_Os_szat_voz', text: '8.27' },
            { name: 'T_Os_szat_voz', text: '26' },
            // { name: 'Temp_peref_1',   text: '58' },
            // { name: 'Temp_peref_2',   text: '47' },
            // { name: 'Temp_peref_3',   text: '53' },
            // { name: 'Temp_peref_4',   text: '49' },
            // { name: 'Temp_peref_5',   text: '58' },
            // { name: 'Temp_peref_6',   text: '51' },
            // { name: 'Temp_peref_7',   text: '54' },
            // { name: 'Temp_peref_8',   text: '54' },
            // { name: 'Temp_peref_9',   text: '87' },
            // { name: 'Temp_peref_10',  text: '49' },
            // { name: 'Temp_peref_11',  text: '52' },
            // { name: 'Temp_peref_12',  text: '56' },
            // { name: 'Temp_peref_13',  text: '59' },
            // { name: 'Temp_peref_14',  text: '52' },
            // { name: 'Temp_peref_15',  text: '58' },
            // { name: 'Temp_peref_16',  text: '48' },
            { name: 'T1', text: '151' },
            { name: 'T2', text: '182' },
            { name: 'T3', text: '149' },
            { name: 'T4', text: '133' },
            { name: 'P_2', text: '2.43' },
            { name: 'P_2_rect', color: "#ffffff" },
            { name: 't_gor_dut', text: '1100' },
            { name: 't_gor_dut_spravaRydom', text: '1100' },
            // { name: 'H_Os_szat_voz', text: '70' },
            // { name: 't_prirodn_gaz', text: '15' },
            { name: 'P_pg_prir_gaz', text: '8.58' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '7091' },
            { name: 'H_prir_gaz', text: '15' },
            { name: 'F_tryba', text: '318961' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.84' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.11' },
            { name: 'dP_verh_rect', color: '#ffffff' },
            { name: 'dP_obsh_tryba', text: '1.16' },
            { name: 'dP_obsh_trybarect', color: '#ffffff' },
            { name: 'dP_nish_tryba', text: '1.14' },
            { name: 'dP_nish_rect', color: '#ffffff' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffffff' },
            { name: 'TTG_raschet', text: '2275', opacity: '1' },
            { name: 'F_pg_prir_gaz', text: '7059' },
            { name: 'dF_pg_prir_gaz', text: '33' },
            { name: 'L1', text: '1428', opacity: '0' },
            { name: 'L2', text: '1428', opacity: '0' },
            { name: 'L4', text: '1428', opacity: '0' },
            { name: 'L3', text: '1428', opacity: '0' },
            { name: 'L1_elem', color: '#ffffff' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L4_elem', color: '#ffffff' },
            { name: 'L3_elem', color: '#ffffff' },
            // { name: 'P_tryba_1_590', text: '0.57' },
            // { name: 'P_tryba_1_591', text: '0.57' },
            // { name: 'P_tryba_1_592', text: '0.57' },
            // { name: 'P_tryba_1_593', text: '0.57' },
            // { name: 'P_tryba_2_1', text: '0.62' },
            // { name: 'P_tryba_2_2', text: '0.62' },
            // { name: 'P_tryba_2_3', text: '0.62' },
            // { name: 'P_tryba_2_4', text: '0.62' },
            // { name: 'P_tryba_3_590', text: '0.59' },
            // { name: 'P_tryba_3_591', text: '0.59' },
            // { name: 'P_tryba_4_1', text: '4.91' },
            // { name: 'P_tryba_4_2', text: '3.02' },
            // { name: 'P_tryba_4_3', text: '4.95' },
            // { name: 'P_tryba_4_4', text: '4.70' },
            // { name: 'P_tryba_5_1', text: '3.57' },
            // { name: 'P_tryba_5_2', text: '1.07' },
            // { name: 'P_tryba_5_3', text: '1.32' },
            // { name: 'P_tryba_5_4', text: '2.18' },
            { name: 'V_dyt', text: '193.0' },
            // { name: 'fyrm_v_rab', text: '0' },
            // { name: 'ydel_tep_18', text: '27.5' },
            // { name: 'ydel_tep_17', text: '34.5' },
            // { name: 'ydel_tep_16', text: '33.5' },
            // { name: 'ydel_tep_15', text: '28.9' },
            // { name: 'ydel_tep_12_14', text: '51.8' },
            // { name: 'ydel_tep_10_11', text: '18.9' },
            // { name: 'ydel_tep_9', text: '17.9' },
            // { name: 'ydel_tep_8', text: '14.4' },
            // { name: 'ydel_tep_7', text: '29.9' },
            // #endregion

            // #region bzu full
            { name: 'ochistka sedel_P', text: '6.12' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '3.88' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '31' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '0.01' },
            { name: 'B1_P compes', text: '0.82' },
            { name: 'B1_vremy vygruski', text: '83' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '106' },
            { name: 'B1_vremy sbrosa P ', text: '4' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP',       text: '93.0' },
            { name: 'B1_vibratciya',      text: '2' },
            { name: 'V linii P_B1',       text: '201' }, // Б1
            { name: 'V linii dP_B1',      text: '226' },
            { name: 'V sisteme vzveh_B1', text: '193' },
            { name: 'V linii P_B2',       text: '148' }, // Б2
            { name: 'V linii dP_B2',      text: '276' },
            { name: 'V sisteme vzveh_B2', text: '165' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '0.84' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '0.85' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '0.84' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '0.85' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '129' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia',             text: '8' },
            { name: 'ugol naklona_tekushiy',  text: '33.3' },
            { name: 'ugol naklona_zadanyi',   text: '33.4' },
            { name: 'gradusow ugol',          text: '8.3' },
            { name: 'prochent1', text: '5' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р',         opacity: '1' },
            { name: 'left_ellipse',      color: '#860004',  opacity: '1' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.83' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '93.0' }, // T
            { name: 'matrix 1 str 1_M', text: '47.7' }, // M3
            { name: 'primoygolinik_smehivateli', color: '#860004' }, // горизонтальная палочка слева
            // не хватает схемы ПУСТ, зеленая/красная палочка рядом
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.3' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#06FF06' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#e6e6e6' }, // пауза по центру
            { name: 'leviy', color: '#860004' }, // палка от цифр слева

            { name: 'verx', text: '0' }, // цифры сверху
            // не хватает палочки горизонтальной под цифрами
            { name: 'black_arrow_under_verx', opacity: '0' }, // стрелка под цифрами

            { name: 'praviy', color: '#860004' }, // палка от цифр справа
            // не хватает элемента [К - в зеленом кружке]
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции

            { name: 'rezym_A', color: '#06FF06' }, // текущий режим А задник
            { name: 'rezym_D', color: '#06FF06' }, // текущий режим Д задник
            { name: 'K_16_strelka', opacity: '0' }, // к16 сброс ошибки стрелка

            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '0.78' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '16.1' }, // t
            { name: 'matrix 1 str 14_M', text: '34.3' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '12' }, // % справа
            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '3.88' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '31' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '0.02' }, // 
            { name: 'B2_P compens', text: '0.84' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '96' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '54' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '8' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            // { name: 'btn_ZapSledPorc_border', text: '6' }, //  Запрет след.порции задник

            { name: 'given_level', text: '0.90' }, // 
            { name: 'tekushy_level', text: '2.76' }, // 
            { name: 'radar 1',  text: '2.93' }, // 
            { name: 'radar 2',  text: '2.96' }, // 
            { name: 'mexan',    text: '2.74' }, // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'v rabote',   color: '#2b2a29' }, // в работе текст
            { name: 'bg_vRabote', color: '#06FF06' }, // в работе
            { name: 'ismetir_ramki', color: '#06FF06' }, // Измерить задник
            { name: 'mex.zond na huxte', color: '#06FF06' }, //  зеленый квадрат Мех.зонд на шихт
            // { name: 'B1_nomerstr', text: '4' }, // 
            // { name: 'B2_nomerstr', text: '5' }, // 
            // { name: 'T3_nomerstr', text: '5' }, // 
            // { name: 'T2_nomerstr', text: '5' }, // 
            // { name: 'T1_nomerstr', text: '5' }, // 
            // { name: 'B1_Tip_text', text: 'Р' }, // 
            // { name: 'B2_Tip_text', text: 'К' }, // 
            // { name: 'T3_Tip_text', text: 'К' }, // 
            // { name: 'T2_Tip_text', text: 'К' }, // 
            // { name: 'T1_Tip_text', text: 'К' }, // 
            // { name: 'B1_Tip',   color: '#860004' }, // 
            // { name: 'B2_Tip',   color: '#008600' }, // 
            // { name: 'T2_Tip',   color: '#008600' }, // 
            // { name: 'T2_color', color: '#008600' }, // 
            // { name: 'T1_Tip',   color: '#008600' }, // 
            // { name: 'B1_ves', text: '93.0' }, // 
            // { name: 'B2_ves', text: '16.4' }, // 
            // { name: 'T3_ves', text: '16.4' }, // 
            // { name: 'T2_ves', text: '16.4' }, // 
            // { name: 'T1_ves', text: '16.4' }, // 
            // { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            // { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            // { name: 'K_str1', color: '#860004' }, // str 1 color
            // { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color

            // { name: 'na_conveer_s1_bukca', text: 'Р', opacity: '0' }, // str 2 
            // { name: 'str1_down', text: 'Р' }, // str 2 
            // { name: 'str51_down', text: 'К' }, // str 51 
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
            // { name: 'Str1_8', color: '#008600' }, // str 1-8 r  // #008600
            // { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'Str1_1', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'str1_K_1',   text: '0' }, // str 1-11 t
            // { name: 'str1_K_2',   text: '0' }, // str 1-10 t
            // { name: 'str1_K_3',   text: '0' }, // str 1-9 t
            // { name: 'str1_K_4',   text: '22' }, // str 1-8 t
            // { name: 'str1_K_5',   text: '21' }, // str 1-7 t
            // { name: 'str1_K_6',   text: '19' }, // str 1-6 t
            // { name: 'str1_K_7',   text: '15' }, // str 1-5 t
            // { name: 'str1_K_8',   text: '13' }, // str 1-4 t
            // { name: 'str1_K_9',   text: '10' }, // str 1-3 t
            // { name: 'str1_K_10',  text: '0' },  // str 1-2 t
            // { name: 'str1_K_11',  text: '0' },  // str 1-1 t
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

            // #endregion

          ]
        }
      },
      startTime: timeDiff + 373.01,
    },
    ////--------------------------------64--------------------------////
    {
      scenarioText: 'Включить загрузку печи.',
      text: 'Дроссель-регулятор природного газа установить на автоматический режим.',
      sender: 'Система',
      audio: 'tts--64', // 4.8
      startTime: timeDiff + 374,
    },
    { action: { target3D: 'upLeftBtnFPrirGaza_highlight', }, startTime: timeDiff + 375, human: true, },

    { action: { target3D: 'pKolGaz', color: 'green', number: '0.873', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.110', },         startTime: timeDiff + 375.13, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.604', },         startTime: timeDiff + 375.13, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.327', },          startTime: timeDiff + 375.13, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4745.', },      startTime: timeDiff + 375.13, },
    { action: { target3D: 'pGorDut', color: 'green', number: '2.470', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.84', },      startTime: timeDiff + 375.13, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.91', },      startTime: timeDiff + 375.13, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0186.', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0224.', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0183.', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0162.', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '06.66', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.39', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1101.', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.13', },     startTime: timeDiff + 375.13, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.14', },     startTime: timeDiff + 375.13, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.13', },      startTime: timeDiff + 375.13, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.28', }, startTime: timeDiff + 375.13, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.362', },     startTime: timeDiff + 375.13, },
    { action: { target3D: 'tReduct', color: 'green', number: '036.1', },        startTime: timeDiff + 375.13, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '25.12', },   startTime: timeDiff + 375.13, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '0.727', },     startTime: timeDiff + 375.13, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '00.90', },    startTime: timeDiff + 375.13, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '010.2', },    startTime: timeDiff + 375.13, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.80', },    startTime: timeDiff + 375.13, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.2', },    startTime: timeDiff + 375.13, },

    ////--------------------------------65--------------------------////
    { 
      action: { 
        windows2D: {
          elements: [
            { name: 'Left_GBF_VA01_M01', color: '#FF1E06' }
          ]
        }
      }, 
      startTime: timeDiff + 376, 
      human: true,
    },
    {
      text: 'Перевести управление общего перепада от колошника.',
      sender: 'Система',
      audio: 'tts-61', // 3.5
      startTime: timeDiff + 377,
    },
    { 
      action: { 
        target2D: 'gaz_sbrosOshibok', 
        windows2D: {
          elements: [
            // Shema_gazoochistka full
            {name: 'PT1',               text: '0.93'},
            {name: 'PT2',               text: '0.93'},
            {name: 'Pkol',              text: '0.90'},
            {name: 'dPvAKZ',            text: '0.35'},
            {name: 'dPvobsh',           text: '1.60'},
            {name: 'dPobsh',            text: '1.58'},
            {name: 'dPverhniy',         text: '0.11'},
            {name: 'dPnijniy',          text: '1.47'},
            {name: 'SDE_SCV_TE01',      text: '109'},
            {name: 'SDE_SCV_PT01',      text: '0.73'},
            {name: 'dP_aboveSkrubber',  text: '0.51'},
            {name: 'SDE_PT01',          text: '0.21'},
            {name: 'Fakt_H1',           text: '17.60'},
            {name: 'Fakt_H2',           text: '18.40'},
            {name: 'Fakt_H3',           text: '18.60'},
            {name: 'Zadaniy_H1',        text: '19.30'},
            {name: 'Zadaniy_H2',        text: '20.24'},
            {name: 'Zadaniy_H3',        text: '20.24'},
            {name: 'vodUst_H1',         text: '100'},
            {name: 'vodUst_H2',         text: '100'},
            {name: 'vodUst_H3',         text: '100'},
            {name: 'GBF_TE01',          text: '34'},
            {name: 'GBF_PT01',          text: '0.19'},
            {name: 'GBF_FM01',          text: '371569'},
            {name: 'ZT90224',           text: '99'},
            {name: 'ZT90224_zadaniy',   text: '100'},
            {name: 'ZT90223',           text: '100'},
            {name: 'ZT90223_zadaniy',   text: '100'},
            {name: 'ZT90276',           text: '3'},
            {name: 'ZT90276_zadaniy',   text: '2'},
          ]
        }
      }, 
      startTime: timeDiff + 378.0, 
      human: true,
    },
    { 
      action: { 
        target2D: 'gaz_PkolGaza', 
        windows2D:{
          elements: [
            {name: 'background Pkolgaza',     color: '#06FF06'},
            {name: 'background dPpechiObsh',  color: '#ffffff'},

            // Shema_gazoochistka full
            {name: 'PT1',               text: '0.92'},
            {name: 'PT2',               text: '0.93'},
            {name: 'Pkol',              text: '0.90'},
            {name: 'dPvAKZ',            text: '0.35'},
            {name: 'dPvobsh',           text: '1.60'},
            {name: 'dPobsh',            text: '1.58'},
            {name: 'dPverhniy',         text: '0.10'},
            {name: 'dPnijniy',          text: '1.48'},
            {name: 'SDE_SCV_TE01',      text: '109'},
            {name: 'SDE_SCV_PT01',      text: '0.73'},
            {name: 'dP_aboveSkrubber',  text: '0.51'},
            {name: 'SDE_PT01',          text: '0.22'},
            {name: 'Fakt_H1',           text: '18.55'},
            {name: 'Fakt_H2',           text: '18.42'},
            {name: 'Fakt_H3',           text: '18.75'},
            {name: 'Zadaniy_H1',        text: '19.69'},
            {name: 'Zadaniy_H2',        text: '19.69'},
            {name: 'Zadaniy_H3',        text: '19.69'},
            {name: 'vodUst_H1',         text: '100'},
            {name: 'vodUst_H2',         text: '100'},
            {name: 'vodUst_H3',         text: '100'},
            {name: 'GBF_TE01',          text: '33'},
            {name: 'GBF_PT01',          text: '0.19'},
            {name: 'GBF_FM01',          text: '380155'},
            {name: 'ZT90224',           text: '99'},
            {name: 'ZT90224_zadaniy',   text: '100'},
            {name: 'ZT90223',           text: '100'},
            {name: 'ZT90223_zadaniy',   text: '100'},
            {name: 'ZT90276',           text: '3'},
            {name: 'ZT90276_zadaniy',   text: '2'},

            // #region dp full 
            { name: 'radar1_text', text: '2.83' },
            { name: 'radar2_text', text: '2.91' },
            { name: 'radar3_text', text: '2.87' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '17' },
            { name: 'EKZ_H2', text: '17' },
            { name: 'EKZ_H3', text: '17' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 0 },
            { name: 'AKZ_17', opacity: 1 },
            { name: 'EVS_DP7_O',  text: '52249' },
            { name: 'EVD1_O',     text: '14001' },
            { name: 'EVS_DP7_F',  text: '7201' },
             { name: 'EVD1_F',    text: '304103' },
            { name: 'EVD_F',      text: '303090' },
            { name: 'P_1',       text: '2.68' },
            { name: 'F_evd',     text: '5067' },
            { name: 'F_hol_dyt', text: '4322' },
            { name: 'T_hol_dyt', text: '55' },
            { name: 'O_hol_dyt', text: '24.2' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.3' },
            { name: 'FO2_hol_dyt', text: '1233' },
            { name: 'N2',           text: '55.2' },
            { name: 'CO',           text: '22.5' },
            { name: 'CO2',          text: '18.6' },
            { name: 'H2_tryb',      text: '3.1' },
            { name: 'Nco_tryb',     text: '45.2' },
            { name: 'Q_domG_tryb', text: '781', opacity: '1' },
            { name: 'P_vozd_tryb',  text: '8' },
            { name: 'P_gaza_tryb',  text: '19' },
            { name: 'CO_bor_tryb',  text: '0.00' },
            { name: 'H_snotr', text: '11' },
            // { name: 'kl_red', color: '#00DA01' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '0' },
            // { name: 'H_progres_22', opacity: '1' },
            // { name: 'H_progres_33', opacity: '1' },
            // { name: 'H_progres_49', opacity: '1' },
            // { name: 'H_progres_56', opacity: '1' },
            // { name: 'H_progres_60', opacity: '1' },
            // { name: 'H_progres_89', opacity: '1' },
            // { name: 'H_progres_100', opacity: '1' },
            { name: 'H_step_isp',   text: '64.2', opacity: '1' },
            { name: 'HCO_step_isp', text: '48.5' },
            { name: 'Tkyp_3', text: '1113' },
            { name: 'Tkyp_2', text: '1100' },
            { name: 'Tkyp_1', text: '1232' },
            { name: 'Tkyp_3_rect', color: '#ffff0f' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffffff' },
            { name: 'VNK3_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK3_status_1_fon', color: '#ada3b0' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#43A3EF' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '0' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3',     text: '0' },
            { name: 'Fgaz_2',     text: '0' },
            { name: 'VNK1_Fb',   text: '0' },
            { name: 'VNK1_Fr',   text: '0' },
            { name: 'Tdym_3', text: '131' },
            { name: 'Tdym_2', text: '168' },
            { name: 'Tdym_1', text: '141' },
            { name: 'P_Os_szat_voz', text: '8.28' },
            { name: 'T_Os_szat_voz', text: '26' },
            { name: 'Temp_peref_1',   text: '60' },
            { name: 'Temp_peref_2',   text: '48' },
            { name: 'Temp_peref_3',   text: '54' },
            { name: 'Temp_peref_4',   text: '49' },
            { name: 'Temp_peref_5',   text: '59' },
            { name: 'Temp_peref_6',   text: '52' },
            { name: 'Temp_peref_7',   text: '54' },
            { name: 'Temp_peref_8',   text: '54' },
            { name: 'Temp_peref_9',   text: '67' },
            { name: 'Temp_peref_10',  text: '49' },
            { name: 'Temp_peref_11',  text: '53' },
            { name: 'Temp_peref_12',  text: '57' },
            { name: 'Temp_peref_13',  text: '88' },
            { name: 'Temp_peref_14',  text: '52' },
            { name: 'Temp_peref_15',  text: '61' },
            { name: 'Temp_peref_16',  text: '48' },
            { name: 'T1', text: '158' },
            { name: 'T2', text: '186' },
            { name: 'T3', text: '154' },
            { name: 'T4', text: '134' },
            { name: 'P_2', text: '2.62' },
            { name: 'P_2_rect', color: "#ffffff" },
            { name: 't_gor_dut', text: '1101' },
            { name: 't_gor_dut_spravaRydom', text: '1100' },
            // { name: 'H_Os_szat_voz', text: '68' },
            // { name: 't_prirodn_gaz', text: '15' },
            { name: 'P_pg_prir_gaz', text: '8.56' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '11492' },
            { name: 'H_prir_gaz', text: '25' },
            { name: 'F_tryba', text: '399054' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '0.94' },
            { name: 'P_vus_rect', color: '#ffff0f' },
            { name: 'dP_verh', text: '0.10' },
            { name: 'dP_verh_rect', color: '#ffffff' },
            { name: 'dP_obsh_tryba', text: '1.67' },
            { name: 'dP_obsh_trybarect', color: '#ffffff' },
            { name: 'dP_nish_tryba', text: '1.56' },
            { name: 'dP_nish_rect', color: '#ffffff' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffffff' },
            { name: 'TTG_raschet', text: '2198', opacity: '1' },
            { name: 'F_pg_prir_gaz', text: '11678' },
            { name: 'dF_pg_prir_gaz', text: '-187' },
            { name: 'L1', text: '1428', opacity: '0' },
            { name: 'L2', text: '1428', opacity: '0' },
            { name: 'L4', text: '1428', opacity: '0' },
            { name: 'L3', text: '1428', opacity: '0' },
            { name: 'L1_elem', color: '#ffffff' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L4_elem', color: '#ffffff' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '0.93' },
            { name: 'P_tryba_1_591', text: '0.93' },
            { name: 'P_tryba_1_592', text: '0.93' },
            { name: 'P_tryba_1_593', text: '0.93' },
            { name: 'P_tryba_2_1', text: '0.98' },
            { name: 'P_tryba_2_2', text: '0.98' },
            { name: 'P_tryba_2_3', text: '0.98' },
            { name: 'P_tryba_2_4', text: '0.98' },
            { name: 'P_tryba_3_590', text: '1.03' },
            { name: 'P_tryba_3_591', text: '1.03' },
            { name: 'P_tryba_4_1', text: '4.66' },
            { name: 'P_tryba_4_2', text: '3.00' },
            { name: 'P_tryba_4_3', text: '4.70' },
            { name: 'P_tryba_4_4', text: '4.30' },
            { name: 'P_tryba_5_1', text: '3.19' },
            { name: 'P_tryba_5_2', text: '1.44' },
            { name: 'P_tryba_5_3', text: '1.45' },
            { name: 'P_tryba_5_4', text: '2.10' },
            { name: 'V_dyt', text: '202.6' },
            // { name: 'fyrm_v_rab', text: '0' },
            // { name: 'ydel_tep_18', text: '27.5' },
            // { name: 'ydel_tep_17', text: '34.5' },
            // { name: 'ydel_tep_16', text: '33.5' },
            // { name: 'ydel_tep_15', text: '28.9' },
            // { name: 'ydel_tep_12_14', text: '51.8' },
            // { name: 'ydel_tep_10_11', text: '18.9' },
            // { name: 'ydel_tep_9', text: '17.9' },
            // { name: 'ydel_tep_8', text: '14.4' },
            // { name: 'ydel_tep_7', text: '29.9' },
            // #endregion
          ]
        }
      }, 
      startTime: timeDiff + 378.1, 
      human: true,
    },
    ////--------------------------------66--------------------------
    
    {
      chapterText: 'Подача ПУТ в ДП',
      scenarioText: 'Установка копий для подачи ПУТ в доменную печь.',
      sender: 'Система',
      audio: 'telephone_say', // 1.7
      startTime: timeDiff + 379,
    },
    { action: { target3D: 'PhoneButton023', }, startTime: timeDiff + 380, human: true, },
    {
      text: 'Сейчас будем выставлять копья.',
      sender: 'Газовщик',
      audio: 'tts-vo89', // 2.14
      startTime: timeDiff + 381,
    },
    {
      text: 'Понял.',
      sender: 'Оператор установки вдувания',
      audio: 'tts-vo88', // 0.94
      startTime: timeDiff + 383.7,
    },
    {
      lifeTime: '12:38:00',
      startTime: timeDiff + 384,
    },
    
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '01.06', },    startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.1', },    startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', },  startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085', },   startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '150.1', },    startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '00.99', },    startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.2', },    startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '033.5', },    startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 384.01, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.81', },     startTime: timeDiff + 384.01, },
    { action: { target3D: 'pKolGaz', color: 'green', number: '1.019', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.104', },         startTime: timeDiff + 384.02, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.642', },         startTime: timeDiff + 384.02, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.367', },          startTime: timeDiff + 384.02, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4677.', },      startTime: timeDiff + 384.02, },
    { action: { target3D: 'pGorDut', color: 'green', number: '2.677', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.84', },      startTime: timeDiff + 384.02, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '02.92', },      startTime: timeDiff + 384.02, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0196.', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0229.', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0190.', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0166.', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '06.65', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.39', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1100.', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.11', },     startTime: timeDiff + 384.02, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.11', },     startTime: timeDiff + 384.02, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.14', },      startTime: timeDiff + 384.02, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.29', }, startTime: timeDiff + 384.02, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.377', },     startTime: timeDiff + 384.02, },
    { action: { target3D: 'tReduct', color: 'green', number: '035.8', },        startTime: timeDiff + 384.02, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '25.11', },   startTime: timeDiff + 384.02, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '1.326', },     startTime: timeDiff + 384.02, },
    {
      action: {
        windows2D:{
          elements: [
            // vnk3 full
            { name: '7PI_13', text: '19.04' },
            // { name: 'ramka_7PI_13', text: '19.04' }, // черный зданий. его нет. todo
            { name: 'PS_10', color: '#06FF06' },
            { name: '3FI_03', text: '0' },
            { name: '3FI_01', text: '0' },
            { name: 'kl_327', color: '#06FF06' },
            { name: 'kl_332', color: '#ff0000' },
            { name: 'rect_332_1', color: '#000' },
            { name: 'rect_332_2', color: '#000' },
            { name: 'kl_316', color: '#ff0000' },
            { name: 'rect_316_1', color: '#000' },
            { name: 'rect_316_2', color: '#000' },
            { name: '315_SPW',  text: '430,0' },
            { name: '315_SPT',  text: '108,0' },
            { name: '315_KP_2', text: '130,6' },
            { name: '315_GAZ',  text: '80000' },
            { name: 'V3_t1_5', text: 'Соглас', color: '#000000' },
            { name: '323_PV_2', text: '1111,3' },
            { name: '323_SP_2', text: '1330,0' },
            { name: '323_KP_2', text: '22,00' },
            { name: '323_GAZ',  text: '0,00' },
            { name: 'V3_t3_5',  text: 'Соглас', color: '#000000' },
            { name: 'kl_334', color: '#ff0000' },
            { name: '3FI_02', text: '0' },

            { name: '315_PV',   text: '0' },
            { name: '315_SP',   text: '80000' },
            { name: '315_KP_1', text: '22,42' },
            { name: 'V3_t3_4',  text: 'Соглас', color: '#000' },
            { name: '123_PV_1', text: '5,000' },
            { name: '123_SP_1', text: '1,300' },
            { name: '123_KP_1', text: '22,00' },
            { name: 'V3_t4_4', text: 'Соглас', color: '#000' },
            { name: '3PI_02', text: '0,00' },
            { name: '3PS_03', color: '#ff0000' },
            { name: 'kl_321', color: '#06FF06' },
            { name: 'kl315_proc', text: '22' },
            { name: '3PI_04', text: '0,02' },
            { name: '3PS_05', color: '#ff0000' },
            { name: 'kl323_proc', text: '21' },
            { name: 'kl_311', color: '#ff0000' },
            { name: 'kl_312', color: '#ff0000' },
            { name: '3QI_01', text: '18,87' },
            { name: '3TI_43', text: '51' },
            { name: 'kl_313', color: '#ff0000' },
            { name: '3TI_29', text: '26' },
            { name: 'kl_317', color: '#ff0000' },
            { name: 'dym_vybor_signala', text: '131' },
            { name: '3TI_28_1', text: '129' },
            { name: '3TI_28_2', text: '132' },
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отделение' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'Vremya_nagreva', text: '106' },
            { name: 'Vremya_dutya', text: '105' },
            { name: 'Vremya_otdelen', text: '197' },
            { name: 'rect_R_VN-GD', color: '#04FF00' },
            { name: '3PI_01', text: '2' },
            { name: '3TI_02', text: '1111' },
            { name: '3TI_03', text: '1113' },
            { name: '3TI_04', text: '-999' },
            { name: '3TI_05', text: '963' },
            { name: 'vybor_signala', text: '1111' },
            { name: 'kl_319', color: '#ff0000' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#06FF06' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 384.3,
    },

    ////--------------------------------67--------------------------////
    {
      scenarioText: 'Установить воздухонагреватели в режим «нагрев».',
      text: 'Установить воздухонагреватель ВНК №3 в режим «нагрев».',
      sender: 'Система',
      audio: 'tts-62', // 4.6
      startTime: timeDiff + 385,
    },

    { // perekidta3_btn
      action: {
        target2D: 'perekidta3_btn', 
        window2D: {
          elements: [
            { name: 'avarin_otd_rect',    color: '#e6e6e6', stroke: '#808080' },     // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_nagrev',       color: '#ffffff', stroke: '#808080' },
            { name: 'nagrev_otd_2_rect',  color: '#e6e6e6', stroke: '#808080' },     // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_dute',         color: '#ffffff', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'dute_otdel',         color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'otdel_otdel2',       color: '#ffffff', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
            { name: 'otd2_otd_rect',      color: '#e6e6e6', stroke: '#808080' },      // color: '#e6e6e6', stroke: '#808080'
          ]
        }
      },
      startTime: timeDiff + 386,
      human: true,
    },
    { // otdel_nagrev_btn
      action: {
        target2D: 'otdel_nagrev_btn',
        window2D: {
          elements: [
            // { name: 'OvN_Title',        text: '',},

            { name: 'OvN_usl_7',        text: 'Открыть отделительный',},
            { name: 'OvN_usl_7_down',   text: 'клапан на газе 13',},
            { name: 'OvN_usl_8',        text: 'Открыть клапан',},
            { name: 'OvN_usl_8_down',   text: 'продувки на газе 24',},
            { name: 'OvN_usl_9',        text: 'Ожидания разрешения',},
            { name: 'OvN_usl_9_down',   text: 'пуска газа:',},
            { name: 'OvN_usl_10',       text: 'Открыть отделительный',},
            { name: 'OvN_usl_10_down',  text: 'клапан на воздух. гор. 17',},
            { name: 'OvN_usl_11',       text: 'Открыть отсечной',},
            { name: 'OvN_usl_11_down',  text: 'клапан на воздух. гор. 34',},
            { name: 'OvN_usl_12',       text: 'Открыть отсечной',},
            { name: 'OvN_usl_12_down',  text: 'клапан на смеш. газе 34',},
            { name: 'OvN_usl_13',       text: 'Открыть отсечной',},
            { name: 'OvN_usl_13_down',  text: 'клапан на смеш. газе 34',},
            { name: 'OvN_usl_14',       text: 'Ожидание появления',},
            { name: 'OvN_usl_14_down',  text: 'факела',},
            { name: 'OvN_usl_15',       text: 'Закрыть клапан',},
            { name: 'OvN_usl_15_down',  text: 'продувки азотом 24',},

            { name: 'OvN_Time_1',       text: '27',},
            { name: 'OvN_Time_2',       text: '300',},
            { name: 'OvN_Time_3',       text: '27',},
            { name: 'OvN_Time_4',       text: '27',},
            { name: 'OvN_Time_5',       text: '27',},
            { name: 'OvN_Time_6',       text: '10',},
            { name: 'OvN_Time_7',       text: '27',},
            { name: 'OvN_Time_8',       text: '27',},
            { name: 'OvN_Time_9',       text: '2',},
            { name: 'OvN_Time_10',      text: '27',},
            { name: 'OvN_Time_11',      text: '30',},
            { name: 'OvN_Time_12',      text: '125',},
            { name: 'OvN_Time_13',      text: '125',},
            { name: 'OvN_Time_14',      text: '10',},
            { name: 'OvN_Time_15',      text: '27',},

            { name: 'OvN_number_310',   text: 'Закрыт', position: { y: 0 } },
            { name: 'OvN_number_311',   text: 'Закрыт', position: { y: 0 } },
            { name: 'OvN_number_312',   text: 'Закрыт', position: { y: 0 } },
            { name: 'OvN_number_313',   text: 'Закрыт', position: { y: 0 } },
            { name: 'OvN_number_324',   text: 'Закрыт', position: { y: 0 } },
            { name: 'OvN_number_317',   text: 'Закрыт', position: { y: 0 } },
            { name: 'OvN_number_334',   text: 'Закрыт', position: { y: 0 } },
            { name: 'OvN_number_316',   text: 'Закрыт', position: { y: 0 } },
            { name: 'OvN_number_332',   text: 'Закрыт', position: { y: 0 } },
            
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_311',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_312',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 0 } },
          ]
        },
      },
      startTime: timeDiff + 386.1,
      human: true,
    },
    {
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
      startTime: timeDiff + 386.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
    
          ]
        },
      },
      startTime: timeDiff + 386.3,
      human: true,
    },
    //1   // todo уточнить
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '18.77' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#ff0000' },
            { name: 'kl_310_1', color: '#06FF06' },
            { name: 'kl_310_2', color: '#06FF06' },

            { name: 'circle_dutyo',         color: '#000000' },
            { name: 'circle_nagrev',        color: '#000000' },
            { name: 'circle_otdeleniye_1',  color: '#000000' },
            { name: 'circle_otdeleniye_2',  color: '#000000' },
            // Table

            { name: 'OvN_number_310',   text: 'Открыт', y: 520},
            { name: 'OvN_number_311',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_312',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 520},
            { name: 'OvN_path_310',     color: '#06FF06', position: { y: 40 } },
            { name: 'OvN_path_311',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_312',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 40 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 387,
    },
    //2
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.00' },       
            // Table
            { name: 'OvN_number_310',   text: 'Открыт', y: 560},
            { name: 'OvN_number_311',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_312',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 560},
            { name: 'OvN_path_310',     color: '#06FF06', position: { y: 81 } },
            { name: 'OvN_path_311',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_312',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 81 } },


            // End Table
          ]
        }
      },
      startTime: timeDiff + 388,
    },
    //3
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.15' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#06FF06' },
            { name: 'kl_310_2', color: '#06FF06' },
            // Table
            { name: 'OvN_number_310',   text: 'Открыт', y: 600},
            { name: 'OvN_number_311',   text: 'Открыт', y: 600},
            { name: 'OvN_number_312',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 600},
            { name: 'OvN_path_310',     color: '#06FF06', position: { y: 122 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 122 } },
            { name: 'OvN_path_312',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 122 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 389,
    },
    //4
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.28' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#06FF06' },
            { name: 'kl_310_2', color: '#06FF06' },
            // Table
            { name: 'OvN_number_310',   text: 'Открыт', y: 640},
            { name: 'OvN_number_311',   text: 'Открыт', y: 640},
            { name: 'OvN_number_312',   text: 'Открыт', y: 640},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 640},
            { name: 'OvN_path_310',     color: '#06FF06', position: { y: 162 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 162 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 162 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 162 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 390,
    },
    //5
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.27' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_311',   text: 'Открыт', y: 680},
            { name: 'OvN_number_312',   text: 'Открыт', y: 680},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 680},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 204 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 204 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 204 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 391,
    },
    //6
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.18' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_311',   text: 'Открыт', y: 720},
            { name: 'OvN_number_312',   text: 'Открыт', y: 720},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 720},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 245 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 245 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 245 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 392,
    },
    //7
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.10' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_311',   text: 'Открыт', y: 762},
            { name: 'OvN_number_312',   text: 'Открыт', y: 762},
            { name: 'OvN_number_313',   text: 'Открыт', y: 762},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 762},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 286 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 286 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 286 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 286 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 393,
    },
    //8
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.11' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_324',   color: '#06FF06' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 805},
            { name: 'OvN_number_311',   text: 'Открыт', y: 805},
            { name: 'OvN_number_312',   text: 'Открыт', y: 805},
            { name: 'OvN_number_313',   text: 'Открыт', y: 805},
            { name: 'OvN_number_324',   text: 'Открыт', y: 805},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 805},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 805},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 805},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 805},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 327 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 327 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 327 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 327 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 327 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 327 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 327 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 327 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 327 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 394,
    },
    //9
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.09' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_324',   color: '#06FF06' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },

            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 846},
            { name: 'OvN_number_311',   text: 'Открыт', y: 846},
            { name: 'OvN_number_312',   text: 'Открыт', y: 846},
            { name: 'OvN_number_313',   text: 'Открыт', y: 846},
            { name: 'OvN_number_324',   text: 'Открыт', y: 846},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 846},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 846},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 846},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 846},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 367 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 367 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 367 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 367 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 367 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 367 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 367 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 367 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 367 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 395,
    },
    //10
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.08' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_317',   color: '#06FF06' },
            { name: 'kl_324',   color: '#06FF06' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 886},
            { name: 'OvN_number_311',   text: 'Открыт', y: 886},
            { name: 'OvN_number_312',   text: 'Открыт', y: 886},
            { name: 'OvN_number_313',   text: 'Открыт', y: 886},
            { name: 'OvN_number_324',   text: 'Открыт', y: 886},
            { name: 'OvN_number_317',   text: 'Открыт', y: 886},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 886},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 886},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 886},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 408 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 408 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 408 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 408 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 396,
    },
    //11
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.07' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_334',   color: '#06FF06' },
            { name: 'kl_317',   color: '#06FF06' },
            { name: 'kl_324',   color: '#06FF06' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 926},
            { name: 'OvN_number_311',   text: 'Открыт', y: 926},
            { name: 'OvN_number_312',   text: 'Открыт', y: 926},
            { name: 'OvN_number_313',   text: 'Открыт', y: 926},
            { name: 'OvN_number_324',   text: 'Открыт', y: 926},
            { name: 'OvN_number_317',   text: 'Открыт', y: 926},
            { name: 'OvN_number_334',   text: 'Открыт', y: 926},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 926},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 926},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 449 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 449 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 449 } },
          
            // End Table
          ]
        }
      },
      startTime: timeDiff + 397,
    },
    //12
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '19.03' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_316',   color: '#06FF06' },
            { name: 'kl_334',   color: '#06FF06' },
            { name: 'kl_317',   color: '#06FF06' },
            { name: 'kl_324',   color: '#06FF06' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 968},
            { name: 'OvN_number_311',   text: 'Открыт', y: 968},
            { name: 'OvN_number_312',   text: 'Открыт', y: 968},
            { name: 'OvN_number_313',   text: 'Открыт', y: 968},
            { name: 'OvN_number_324',   text: 'Открыт', y: 968},
            { name: 'OvN_number_317',   text: 'Открыт', y: 968},
            { name: 'OvN_number_334',   text: 'Открыт', y: 968},
            { name: 'OvN_number_316',   text: 'Открыт', y: 968},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 968},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 490 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 490 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 398,
    },
    //13
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '17.17' },       
            { name: 'vnk3_fire', opacity: '0' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '0' }, // обводка стрелка
            { name: 'vnk_3', color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_332',   color: '#06FF06' },
            { name: 'kl_316',   color: '#06FF06' },
            { name: 'kl_334',   color: '#06FF06' },
            { name: 'kl_317',   color: '#06FF06' },
            { name: 'kl_324',   color: '#06FF06' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 1008},
            { name: 'OvN_number_311',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_312',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_313',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_324',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_317',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_334',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_316',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_332',   text: 'Открыт', y: 1008},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 531 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_332',     color: '#06FF06', position: { y: 531 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 399,
    },
    //14
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '15.70' },       
            { name: 'vnk3_fire',        opacity: '1' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '1' }, // обводка стрелка
            { name: 'vnk_3',            color: '#9CA4AD' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes', color: '#9CA4AD' },
            { name: 'kl_332',   color: '#06FF06' },
            { name: 'kl_316',   color: '#06FF06' },
            { name: 'kl_334',   color: '#06FF06' },
            { name: 'kl_317',   color: '#06FF06' },
            { name: 'kl_324',   color: '#06FF06' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 1050},
            { name: 'OvN_number_311',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_312',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_313',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_324',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_317',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_334',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_316',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_332',   text: 'Открыт', y: 1050},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 572 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_332',     color: '#06FF06', position: { y: 572 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 400,
    },
    { // где-то в середине 
      action: {
        window2D:{
          elements:[
            // vnk_spvg 
            { name: '6TI_39_1',   text: '28' },
            { name: '6TI_39_2',   text: '27' },
            { name: '6TI_39_3',   text: '53' },
            { name: '6TI_39_4',   text: '54' },
            { name: '6TI_39_5',   text: '53' },
            { name: '6TI_39_6',   text: '53' },
            { name: '6TI_39_7',   text: '55' },
            { name: '6TI_39_8',   text: '51' },
            { name: '6TI_39_9',   text: '29' },
            { name: '6TI_39_10',  text: '31' },
            { name: '6TI_38_1',   text: '22' },
            { name: '6TI_38_2',   text: '23' },
            { name: '6TI_38_3',   text: '53' },
            { name: '6TI_38_4',   text: '56' },
            { name: '6TI_38_5',   text: '52' },
            { name: '6TI_38_6',   text: '53' },
            { name: '6TI_38_7',   text: '51' },
            { name: '6TI_38_8',   text: '54' },
            { name: '6TI_38_9',   text: '29' },
            { name: '6TI_38_10',  text: '30' },
            { name: '6TI_37_1',   text: '40' },
            { name: '6TI_37_2',   text: '44' },
            { name: '6TI_37_3',   text: '57' },
            { name: '6TI_37_4',   text: '55' },
            { name: '6TI_37_5',   text: '60' },
            { name: '6TI_37_6',   text: '54' },
            { name: '6TI_37_7',   text: '57' },
            { name: '6TI_37_8',   text: '52' },
            { name: '6TI_37_9',   text: '33' },
            { name: '6TI_37_10',  text: '36' },
            { name: 'klO35_proc', text: '12' },
            //table1
            //table1
            //table1
            { name: 'spvg_t1_4', text: 'Работа', color: '#06FF06' },
            { name: 'vnk_spvg_B3_1', color: '#06FF06' },
            { name: 'vnk_spvg_B2_1', color: '#06FF06' },
            { name: 'vnk_spvg_B1_1', color: '#808080' },
            { name: '6VI_3_1', text: '1,02' },
            { name: '6VI_3_2', text: '2,19' },
            { name: '6VI_3_3', text: '1,56' },
            { name: '6VI_3_4', text: '1,45' },
            { name: '6VI_2_1', text: '1,11' },
            { name: '6VI_2_2', text: '2,67' },
            { name: '6VI_2_3', text: '1,40' },
            { name: '6VI_2_4', text: '2,177' },
            { name: 'klOF3_proc', text: '100' },
            { name: '6TI_31_3', text: '17' },
            { name: '8QI_05_1', text: '0,00' },
            { name: '8QI_05_2', text: '2,31' },
            { name: '8QI_05_4', text: '2,64' },
            { name: '6VI_1_1', text: '0,04' },
            { name: '6VI_1_2', text: '0,20' },
            { name: '6VI_1_3', text: '0,38' },
            { name: '6VI_1_4', text: '0,22' },
            { name: 'klOF2_proc', text: '100' },
            { name: '6TI_31_2', text: '17' },
            { name: 'klOF1_proc', text: '0' },
            { name: '6TI_31_1', text: '20' },
            { name: '9TI_41', text: '24' },
            { name: '9TI_34', text: '54' },
            { name: '9TI_35', text: '34' },
            { name: '9TI_30', text: '29' },
            { name: '9TI_42', text: '45' },
            { name: '9TI_42', text: '30' },
            { name: '9TI_32', text: '56' },
            { name: '9TI_33', text: '30' },
            { name: '9TI_16', text: '9,82' },
            { name: '9TI_44', text: '29' },
          ]
        }
      },
      startTime: timeDiff + 401
    },
    //15          
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '15.70' },       
            { name: 'vnk3_fire',        opacity: '1' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '1' }, // обводка стрелка
            // { name: 'vnk_3',            color: '#ff0000' }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            // { name: 'vnk3_stripes',     color: '#ff0000' },
            { name: 'kl_332',   color: '#06FF06' },
            { name: 'kl_316',   color: '#06FF06' },
            { name: 'kl_334',   color: '#06FF06' },
            { name: 'kl_317',   color: '#06FF06' },
            { name: 'kl_324',   color: '#ff0000' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },

            { name: 'OvN_number_310',   text: 'Закрыт', y: 1090},
            { name: 'OvN_number_311',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_312',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_313',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 1090},
            { name: 'OvN_number_317',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_334',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_316',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_332',   text: 'Открыт', y: 1090},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 610 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 610 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_332',     color: '#06FF06', position: { y: 610 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 402,
    },
    //16
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '15.70' },       
            { name: 'vnk3_fire',        opacity: '1' }, // стрелка
            { name: 'vnk3_fire_border', opacity: '1' }, // обводка стрелка
            { name: 'vnk_3',            color: '#ff0000'  }, // задник стрелки
            { name: 'VNK3_status_1', text: 'Циклический.' },
            { name: 'VNK3_status_2', text: 'Отдел.-Нагрев' },
            { name: 'vnk3_stripes',     color: '#ff0000' },
            { name: 'kl_332',   color: '#06FF06' },
            { name: 'kl_316',   color: '#06FF06' },
            { name: 'kl_334',   color: '#06FF06' },
            { name: 'kl_317',   color: '#06FF06' },
            { name: 'kl_324',   color: '#ff0000' },
            { name: 'kl_313',   color: '#06FF06' },
            { name: 'kl_312',   color: '#06FF06' },
            { name: 'kl_311',   color: '#06FF06' },
            { name: 'kl_336a',  color: '#ff0000' },
            { name: 'kl_318a',  color: '#ff0000' },
            { name: 'kl_318',   color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },

            { name: '7PI_13', text: '11.40' },     
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 475},
            { name: 'OvN_number_311',   text: 'Открыт', y: 475},
            { name: 'OvN_number_312',   text: 'Открыт', y: 475},
            { name: 'OvN_number_313',   text: 'Открыт', y: 475},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 475},
            { name: 'OvN_number_317',   text: 'Открыт', y: 475},
            { name: 'OvN_number_334',   text: 'Открыт', y: 475},
            { name: 'OvN_number_316',   text: 'Открыт', y: 475},
            { name: 'OvN_number_332',   text: 'Открыт', y: 475},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_332',     color: '#06FF06', position: { y: 0 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 403,
    },
    
    // в конце
    { action: { target3D: 'Rectangle083', material: 'ButtonLightOn', },         startTime: timeDiff + 403.02, },
    { action: { target3D: 'Rectangle056', material: 'ButtonLightOn', },         startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '01.25', },    startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '093.1', },    startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '001.3', },  startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0085', },   startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '237.1', },    startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '01.22', },    startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.2', },    startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '033.5', },    startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 403.02, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '02.70', },     startTime: timeDiff + 403.02, },
    { action: { target3D: 'pKolGaz', color: 'green', number: '1.187', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.119', },         startTime: timeDiff + 403.03, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.674', },         startTime: timeDiff + 403.03, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.381', },          startTime: timeDiff + 403.03, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '4881.', },      startTime: timeDiff + 403.03, },
    { action: { target3D: 'pGorDut', color: 'green', number: '2.000', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '02.71', },      startTime: timeDiff + 403.03, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '03.20', },      startTime: timeDiff + 403.03, },
    { action: { target3D: 'urZasMeh', color: 'green', number: '0000', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0216.', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0246.', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0215.', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0188.', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '06.60', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'tVGazT6', color: 'green', number: '00.39', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1100.', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.15', },     startTime: timeDiff + 403.03, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.16', },     startTime: timeDiff + 403.03, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.12', },      startTime: timeDiff + 403.03, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.15', }, startTime: timeDiff + 403.03, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.402', },     startTime: timeDiff + 403.03, },
    { action: { target3D: 'tReduct', color: 'green', number: '036,6', },        startTime: timeDiff + 403.03, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '25.13', },   startTime: timeDiff + 403.03, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '1.707', },     startTime: timeDiff + 403.03, },

    {  
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 403.1,
      human: true,
    },
    { 
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 403.2,
      human: true,
    },

    ////--------------------------------68--------------------------////
    {
      scenarioText: 'Повысить давление.',
      text: 'Прикрыть клапан «СНОРТ» до давления на фурмах 2,90-3,00 кг.',
      audio: 'tts--68', // 3.7
      sender: 'Система',
      startTime: timeDiff + 404,
    },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 }, }, duration: 0.15, startTime: timeDiff + 405, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },     }, duration: 0.15, startTime: timeDiff + 406, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0.785 }, }, duration: 0.15, startTime: timeDiff + 407, human: true, },
    { action: { target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f', rotation: { y: 0 },     }, duration: 0.15, startTime: timeDiff + 408, human: true, },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '0' },
            { name: 'H_progres_7',   opacity: 0 },
            { name: 'H_progres_19',  opacity: 0 },
            { name: 'H_progres_22',  opacity: 0 },
            { name: 'H_progres_33',  opacity: 1 },
            { name: 'H_progres_49',  opacity: 0 },
            { name: 'H_progres_56',  opacity: 0 },
            { name: 'H_progres_60',  opacity: 0 },
            { name: 'H_progres_89',  opacity: 0 },
            { name: 'H_progres_100', opacity: 0 },
            { name: 'P_2', text: '2.92' },
            //100 
          ]
        }
      },
      startTime: timeDiff + 408.5,
    },

    { action: { target3D: 'Lamp_Red_020', material: 'Red_Lamp_On', },           startTime: timeDiff + 408.51, },
    { action: { target3D: 'pKolGaz', color: 'green', number: '1.268', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'dpVerh', color: 'green', number: '0.131', },         startTime: timeDiff + 408.52, },
    { action: { target3D: 'dpObsh', color: 'green', number: '1.613', },         startTime: timeDiff + 408.52, },
    { action: { target3D: 'dpNiz', color: 'green', number: '1.316', },          startTime: timeDiff + 408.52, },
    { action: { target3D: 'fHolodDut', color: 'green', number: '5292.', },      startTime: timeDiff + 408.52, },
    { action: { target3D: 'pGorDut', color: 'green', number: '2.907', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'urZasDat1', color: 'green', number: '03.05', },      startTime: timeDiff + 408.52, },
    { action: { target3D: 'urZasDat2', color: 'green', number: '03.19', },      startTime: timeDiff + 408.52, },
    { action: { target3D: 'tVGazT1', color: 'green', number: '0220.', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'tVGazT2', color: 'green', number: '0252.', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'tVGazT3', color: 'green', number: '0223.', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'tVGazT4', color: 'green', number: '0199.', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'tVGazT5', color: 'green', number: '08.35', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'tVGazT7', color: 'green', number: '1102.', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'pTechVodT1', color: 'green', number: '10.14', },     startTime: timeDiff + 408.52, },
    { action: { target3D: 'pTechVodT2', color: 'green', number: '10.15', },     startTime: timeDiff + 408.52, },
    { action: { target3D: 'pSjatVozd', color: 'green', number: '05.14', },      startTime: timeDiff + 408.52, },
    { action: { target3D: 'pOsyshSjatVozd', color: 'green', number: '04.12', }, startTime: timeDiff + 408.52, },
    { action: { target3D: 'pAzotkZatv', color: 'green', number: '2.347', },     startTime: timeDiff + 408.52, },
    { action: { target3D: 'tReduct', color: 'green', number: '037,7', },        startTime: timeDiff + 408.52, },
    { action: { target3D: 'fVodNaReduct', color: 'green', number: '25.14', },   startTime: timeDiff + 408.52, },
    { action: { target3D: 'fPrirodGaz', color: 'green', number: '1.893', },     startTime: timeDiff + 408.52, },
    { action: { target3D: 'bzuDavlenie_l', color: 'red', number: '01.27', },    startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuVesNetto_l', color: 'red', number: '012.2', },    startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuPolShihZat_l', color: 'red', number: '037.5', },  startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuVremVigruz_l', color: 'red', number: '0080', },   startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '019.1', },    startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuDavlenie_r', color: 'red', number: '01.27', },    startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuVesNetto_r', color: 'red', number: '016.2', },    startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuPolShihZat_r', color: 'red', number: '001.3', },  startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '023.2', },    startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuVremVigruz_r', color: 'red', number: '0096', },   startTime: timeDiff + 408.53, },
    { action: { target3D: 'bzuUrovZasip', color: 'red', number: '03.04', },     startTime: timeDiff + 408.53, },

    { action: { target3D: 'Rectangle097', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle098', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle099', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle100', material: 'ButtonLightOn',  }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle101', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle102', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle103', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle104', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle105', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle106', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    { action: { target3D: 'Rectangle107', material: 'ButtonLightOff', }, startTime: timeDiff + 408.53, },
    {
      action: {
        window2D: {
          elements: [
            // dp full 
            // { name: 'radar1_text', text: '2.83' },
            // { name: 'radar2_text', text: '2.91' },
            // { name: 'radar3_text', text: '2.87' },
            { name: 'zadan_yrov_sin', text: '0.90' },
            { name: 'EKZ_H1', text: '16' },
            { name: 'EKZ_H2', text: '16' },
            { name: 'EKZ_H3', text: '16' },
            { name: 'AKZ_100', opacity: 0 },
            { name: 'AKZ_45-100', opacity: 0 },
            { name: 'AKZ_45', opacity: 0 },
            { name: 'AKZ_30', opacity: 0 },
            { name: 'AKZ_17', opacity: 1 },
            // { name: 'EVS_DP7_O',  text: '52249' },
            // { name: 'EVD1_O',     text: '14001' },
            { name: 'EVS_DP7_F',  text: '7219' },
            //  { name: 'EVD1_F',    text: '304103' },
            // { name: 'EVD_F',      text: '303090' },
            { name: 'P_1',       text: '3.00' },
            { name: 'F_evd',     text: '50001' },
            { name: 'F_hol_dyt', text: '4321' },
            { name: 'T_hol_dyt', text: '64' },
            { name: 'O_hol_dyt', text: '22.6' },
            { name: 'par_yvlaz', text: '0.00' },
            { name: 'W_sinij_hol_dyt', text: '8.2' },
            { name: 'FO2_hol_dyt', text: '1364' },
            { name: 'N2',           text: '50.7' },
            { name: 'CO',           text: '24.1' },
            { name: 'CO2',          text: '19.7' },
            { name: 'H2_tryb',      text: '4.9' },
            { name: 'Nco_tryb',     text: '45.0' },
            { name: 'Q_domG_tryb', text: '878', opacity: '1' },
            { name: 'P_vozd_tryb',  text: '10' },
            { name: 'P_gaza_tryb',  text: '9' },
            { name: 'CO_bor_tryb',  text: '6.40' },
            // { name: 'H_snotr', text: '11' },
            { name: 'kl_red', color: '#BD0102' },
            // { name: 'H_progres_7', opacity: '1' },
            // { name: 'H_progres_19', opacity: '0' },
            // { name: 'H_progres_22', opacity: '1' },
            // { name: 'H_progres_33', opacity: '1' },
            // { name: 'H_progres_49', opacity: '1' },
            // { name: 'H_progres_56', opacity: '1' },
            // { name: 'H_progres_60', opacity: '1' },
            // { name: 'H_progres_89', opacity: '1' },
            // { name: 'H_progres_100', opacity: '1' },
            { name: 'H_step_isp',   text: '48.8', opacity: '1' },
            { name: 'HCO_step_isp', text: '45.7' },
            { name: 'Tkyp_3', text: '1125' },
            { name: 'Tkyp_2', text: '1094' },
            { name: 'Tkyp_1', text: '1255' },
            { name: 'Tkyp_3_rect', color: '#ffffff' },
            { name: 'Tkyp_2_rect', color: '#ffff0f' },
            { name: 'Tkyp_1_rect', color: '#ffffff' },
            { name: 'VNK3_status_2', text: 'НАГРЕВ' },
            { name: 'VNK2_status_2', text: 'ОТДЕЛЕН' },
            { name: 'VNK1_status_2', text: 'ДУТЬЕ' },
            { name: 'VNK3_status_1_fon', color: '#BD0102' },
            { name: 'VNK2_status_1_fon', color: '#ada3b0' },
            { name: 'VNK1_status_1_fon', color: '#43A3EF' },
            { name: 'VNK3_status_1_3', text: 'Цикл' },
            { name: 'VNK2_status_1_2', text: 'Цикл' },
            { name: 'VNK1_status_1_1', text: 'Цикл' },
            { name: 'Fvozdyh_3', text: '65151' },
            { name: 'Fvozdyh_2', text: '0' },
            { name: 'Fgaz_3',     text: '0' },
            { name: 'Fgaz_2',     text: '75128' },
            { name: 'VNK1_Fb',   text: '0' },
            { name: 'VNK1_Fr',   text: '0' },
            { name: 'Tdym_3', text: '106' },
            { name: 'Tdym_2', text: '167' },
            { name: 'Tdym_1', text: '128' },
            { name: 'P_Os_szat_voz', text: '8.24' },
            { name: 'T_Os_szat_voz', text: '26' },
            { name: 'Temp_peref_1',   text: '67' },
            { name: 'Temp_peref_2',   text: '56' },
            { name: 'Temp_peref_3',   text: '56' },
            { name: 'Temp_peref_4',   text: '52' },
            { name: 'Temp_peref_5',   text: '62' },
            { name: 'Temp_peref_6',   text: '52' },
            { name: 'Temp_peref_7',   text: '56' },
            { name: 'Temp_peref_8',   text: '54' },
            { name: 'Temp_peref_9',   text: '60' },
            { name: 'Temp_peref_10',  text: '11' },
            { name: 'Temp_peref_11',  text: '57' },
            { name: 'Temp_peref_12',  text: '56' },
            { name: 'Temp_peref_13',  text: '87' },
            { name: 'Temp_peref_14',  text: '58' },
            { name: 'Temp_peref_15',  text: '68' },
            { name: 'Temp_peref_16',  text: '49' },
            { name: 'T1', text: '181' },
            { name: 'T2', text: '204' },
            { name: 'T3', text: '184' },
            { name: 'T4', text: '163' },
            { name: 'P_2', text: '2.92' },
            { name: 'P_2_rect', color: "#ffffff" },
            { name: 't_gor_dut', text: '1101' },
            { name: 't_gor_dut_spravaRydom', text: '1100' },
            { name: 'H_Os_szat_voz', text: '68' },
            { name: 't_prirodn_gaz', text: '15' },
            { name: 'P_pg_prir_gaz', text: '8.56' },
            { name: 'F_prir_gaz_table', text: '30000' },
            { name: 'F_pg_sym_prir_gaz', text: '16557' },
            { name: 'H_prir_gaz', text: '29' },
            { name: 'F_tryba', text: '465918' },
            { name: 'F_obsh_pyt', text: '0.0' },
            { name: 'F_tek_pyt', text: '0' },
            { name: 'P_vbls', text: '1.28' },
            { name: 'P_vus_rect', color: '#ffffff' },
            { name: 'dP_verh', text: '0.13' },
            { name: 'dP_verh_rect', color: '#ffffff' },
            { name: 'dP_obsh_tryba', text: '1.61' },
            { name: 'dP_obsh_trybarect', color: '#ffffff' },
            { name: 'dP_nish_tryba', text: '1.48' },
            { name: 'dP_nish_rect', color: '#ffffff' },
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'zadanie_rect', color: '#ffffff' },
            { name: 'TTG_raschet', text: '2201', opacity: '1' },
            { name: 'F_pg_prir_gaz', text: '16735' },
            { name: 'dF_pg_prir_gaz', text: '-178' },
            { name: 'L1', text: '1428', opacity: '0' },
            { name: 'L2', text: '1428', opacity: '0' },
            { name: 'L4', text: '1428', opacity: '0' },
            { name: 'L3', text: '1428', opacity: '0' },
            { name: 'L1_elem', color: '#ffffff' },
            { name: 'L2_elem', color: '#ffffff' },
            { name: 'L4_elem', color: '#ffffff' },
            { name: 'L3_elem', color: '#ffffff' },
            { name: 'P_tryba_1_590', text: '1.27' },
            { name: 'P_tryba_1_591', text: '1.27' },
            { name: 'P_tryba_1_592', text: '1.28' },
            { name: 'P_tryba_1_593', text: '1.28' },
            { name: 'P_tryba_2_1', text: '1.34' },
            { name: 'P_tryba_2_2', text: '1.34' },
            { name: 'P_tryba_2_3', text: '1.34' },
            { name: 'P_tryba_2_4', text: '1.34' },
            { name: 'P_tryba_3_590', text: '1.51' },
            { name: 'P_tryba_3_591', text: '1.51' },
            { name: 'P_tryba_4_1', text: '4.56' },
            { name: 'P_tryba_4_2', text: '4.35' },
            { name: 'P_tryba_4_3', text: '4.58' },
            { name: 'P_tryba_4_4', text: '4.20' },

            { name: 'P_tryba_5_1', text: '3.08' },
            { name: 'P_tryba_5_2', text: '1.93' },
            { name: 'P_tryba_5_3', text: '2.17' },
            { name: 'P_tryba_5_4', text: '2.50' },
            { name: 'V_dyt', text: '214.7' },
            // { name: 'fyrm_v_rab', text: '0' },
            // { name: 'ydel_tep_18', text: '27.5' },
            // { name: 'ydel_tep_17', text: '34.5' },
            // { name: 'ydel_tep_16', text: '33.5' },
            // { name: 'ydel_tep_15', text: '28.9' },
            // { name: 'ydel_tep_12_14', text: '51.8' },
            // { name: 'ydel_tep_10_11', text: '18.9' },
            // { name: 'ydel_tep_9', text: '17.9' },
            // { name: 'ydel_tep_8', text: '14.4' },
            // { name: 'ydel_tep_7', text: '29.9' },
          ]
        }
      },
      startTime: timeDiff + 408.54,
    },

    ////--------------------------------69--------------------------////
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      audio: 'SoundSnortFurma', // 3.5
      sender: 'Система',
      startTime: timeDiff + 409,
    },
    {multi: [{action: {target2D: 'R_Snort',},},{action: {target2D: 'R_Furm',},},],startTime: timeDiff + 410, human: true,},
    {
      action: {
        window2D: {
          elements: [
            // bzu full+
            { name: 'ochistka sedel_P', text: '5.36' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '31' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '-0.00' },
            { name: 'B1_P compes', text: '1.29' },
            { name: 'B1_vremy vygruski', text: '104' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '105' },
            { name: 'B1_vremy sbrosa P ', text: '0' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP',       text: '93.0' },
            { name: 'B1_vibratciya',      text: '2' },
            { name: 'V linii P_B1',       text: '201' }, // Б1
            { name: 'V linii dP_B1',      text: '228' },
            { name: 'V sisteme vzveh_B1', text: '191' },
            { name: 'V linii P_B2',       text: '148' }, // Б2
            { name: 'V linii dP_B2',      text: '275' },
            { name: 'V sisteme vzveh_B2', text: '165' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '1.32' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '1.32' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '1.32' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '1.32' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '129' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '141' },
            { name: 'stanciia',             text: '8' },
            { name: 'ugol naklona_tekushiy',  text: '20.5' },
            { name: 'ugol naklona_zadanyi',   text: '33.4' },
            { name: 'gradusow ugol',          text: '20.1' },
            { name: 'prochent1', text: '1' }, // %
            { name: 'jelob_ramka', color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р',         opacity: '0' },
            { name: 'left_ellipse',      color: '#860004',  opacity: '0' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '1.30' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '-0.2' }, // T
            { name: 'matrix 1 str 1_M', text: '-0.1' }, // M3
            { name: 'primoygolinik_smehivateli', color: '#860004' }, // горизонтальная палочка слева
            // не хватает схемы ПУСТ, зеленая/красная палочка рядом
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.3' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#E6E6E6' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#e6e6e6' }, // пауза по центру
            { name: 'leviy', color: '#860004' }, // палка от цифр слева

            { name: 'verx', text: '0' }, // цифры сверху
            // не хватает палочки горизонтальной под цифрами
            { name: 'black_arrow_under_verx', opacity: '0' }, // стрелка под цифрами

            { name: 'praviy', color: '#860004' }, // палка от цифр справа
            // не хватает элемента [К - в зеленом кружке]
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции

            { name: 'rezym_A', color: '#06FF06' }, // текущий режим А задник
            { name: 'rezym_D', color: '#06FF06' }, // текущий режим Д задник
            { name: 'K_16_strelka', opacity: '0' }, // к16 сброс ошибки стрелка

            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '1.28' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '16.4' }, // t
            { name: 'matrix 1 str 14_M', text: '34.9' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '1' }, // % справа
            
            { name: 'klNKB-2_2',      color: '#06FF06' }, // НКВ-2 verh  // ilay
            { name: 'klNKB-2_1',      color: '#06FF06' }, // НКВ-2 niz   // ilay
            { name: 'vigruzca pravo', color: '#06FF06' }, // Выгр спарва   // ilay
            

            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '32' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '-0.01' }, // 
            { name: 'B2_P compens', text: '1.32' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '100' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '36' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '9' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '6' }, //  Запросы на ШП // строка
            // { name: 'btn_ZapSledPorc_border', text: '6' }, //  Запрет след.порции задник

            { name: 'given_level',   text: '0.90' }, // 
            { name: 'tekushy_level', text: '3.14' }, // 
            { name: 'radar 1',  text: '3.06' },   // 
            { name: 'radar 2',  text: '3.27' },   // 
            { name: 'mexan',    text: '-1.67' },  // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'v rabote',   color: '#c8c8d2' }, // в работе текст // afk
            { name: 'bg_vRabote', color: '#f6fbff' }, // в работе       // afk
            { name: 'ismetir_ramki',      color: '#06FF06' }, // Измерить задник
            { name: 'mex.zond na huxte',  color: '#D0D1D3' }, //  зеленый квадрат Мех.зонд на шихт
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
            { name: 'B1_Tip',   color: '#860004' }, // 
            { name: 'B2_Tip',   color: '#008600' }, // 
            { name: 'T2_Tip',   color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip',   color: '#008600' }, // 
            { name: 'B1_ves', text: '93.1' }, // 
            { name: 'B2_ves', text: '16.4' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '16.4' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#CEC7B5' }, // str 2 color
            { name: 'K_str1', color: '#008600' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color

            { name: 'na_conveer_s1_bukca', text: 'См', opacity: '0' }, // str 2 
            { name: 'str1_down',           text: 'К' }, // str 2 
            { name: 'str51_down',          text: 'К' }, // str 51 
            { name: 'str2_P_1',   text: '0' }, // str 2-11 t
            { name: 'str2_P_2',   text: '0' }, // str 2-10 t
            { name: 'str2_P_3',   text: '0' }, // str 2-9 t
            { name: 'str2_P_4',   text: '13' }, // str 2-8 t
            { name: 'str2_P_5',   text: '13' }, // str 2-7 t
            { name: 'str2_P_6',   text: '13' }, // str 2-6 t
            { name: 'str2_P_7',   text: '11' }, // str 2-5 t
            { name: 'str2_P_8',   text: '10' }, // str 2-4 t
            { name: 'str2_P_9',   text: '10' }, // str 2-3 t
            { name: 'str2_P_10',  text: '9' }, // str 2-2 t
            { name: 'str2_P_11',  text: '21' }, // str 2-1 t
            { name: 'str2_P_12',  text: '16.2' }, // str 2-ves t
            { name: 'Str1_8', color: '#008600' }, // str 1-8 r  // #008600
            // { name: 'Str1_4', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'Str1_1', color: '#C7B295' }, // str 1-4 r  // #C7B295
            // { name: 'str1_K_1',   text: '0' }, // str 1-11 t
            // { name: 'str1_K_2',   text: '0' }, // str 1-10 t
            // { name: 'str1_K_3',   text: '0' }, // str 1-9 t
            // { name: 'str1_K_4',   text: '22' }, // str 1-8 t
            // { name: 'str1_K_5',   text: '21' }, // str 1-7 t
            // { name: 'str1_K_6',   text: '19' }, // str 1-6 t
            // { name: 'str1_K_7',   text: '15' }, // str 1-5 t
            // { name: 'str1_K_8',   text: '13' }, // str 1-4 t
            // { name: 'str1_K_9',   text: '10' }, // str 1-3 t
            // { name: 'str1_K_10',  text: '0' },  // str 1-2 t
            // { name: 'str1_K_11',  text: '0' },  // str 1-1 t
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
      starttime: timeDiff + 411,
    },

    ////--------------------------------70--------------------------////
    {
      scenarioText: 'Дать команду добавить кислород.',
      audio: 'telephone_say',// 1.7
      sender: 'Система',
      startTime: timeDiff + 412,
    },
    { action: { target3D: 'PhoneButton017', }, startTime: timeDiff + 413, human: true, },
    {
      text: 'Добавляйте 5000 дутья и 5000 кислорода.',
      sender: 'Газовщик',
      audio: 'tts-vo91', // 3.78
      startTime: timeDiff + 414,
    },
    {
      text: 'Выполняю.',
      sender: 'Инженер-энергетик',
      audio: 'tts-vo92', // 1.25
      startTime: timeDiff + 418.4,
    },

    ////--------------------------------71--------------------------////
    {
      text: 'Возобновить загрузку.',
      audio: 'tts--70', // 1.77
      sender: 'Система',
      startTime: timeDiff + 420.5,
    },
    //bzu_pause_btn
    {
      action: {
        target2D: 'bzu_pause_btn',
        window2D: {
          elements: [
            // { name: 'right_rect_yellow_arrow', color: 'start' },
            // { name: 'btn_Pause_border', color: '#06FF06' },
            // bzu custom
            { name: 'ochistka sedel_P', text: '6.08' },
            { name: 'Vtorichnye vyskazyvaniia_P_B1 sedel_P', text: '4.00' },
            { name: 'Vtorichnye vyskazyvaniia_T_B1', text: '32' },
            { name: 'Vtorichnye vyskazyvaniia_F_B1', text: '0' },
            { name: 'B1_dp Bunker', text: '1.24' },
            { name: 'B1_P compes', text: '0.07' },
            { name: 'B1_vremy vygruski', text: '104' },
            { name: 'B1_vremy vygruski raschoytnoe ', text: '105' },
            { name: 'B1_vremy sbrosa P ', text: '9' },
            { name: 'B1_vremy nabora P ', text: '2' },
            { name: 'B1_ves s SHP',       text: '93.0' },
            { name: 'B1_vibratciya',      text: '3' },
            { name: 'V linii P_B1',       text: '200' }, // Б1
            { name: 'V linii dP_B1',      text: '225' },
            { name: 'V sisteme vzveh_B1', text: '192' },
            { name: 'V linii P_B2',       text: '149' }, // Б2
            { name: 'V linii dP_B2',      text: '276' },
            { name: 'V sisteme vzveh_B2', text: '165' },
            { name: 'rashody u davlenia v gazoprovode_P1', text: '1.31' },
            { name: 'rashody u davlenia v gazoprovode_P2', text: '1.32' },
            { name: 'rashody u davlenia v gazoprovode_P3', text: '1.32' },
            { name: 'rashody u davlenia v gazoprovode_P4', text: '1.31' },
            { name: 'rashody u davlenia v gazoprovode_F1', text: '0' },
            { name: 'rashody u davlenia v gazoprovode_F2', text: '149' },
            { name: 'rashody u davlenia v gazoprovode_F3', text: '276' },
            { name: 'rashody u davlenia v gazoprovode_F4', text: '165' },
            { name: 'stanciia',             text: '8' },
            { name: 'ugol naklona_tekushiy',  text: '32.3' },
            { name: 'ugol naklona_zadanyi',   text: '32.4' },
            { name: 'gradusow ugol',          text: '56.2' },
            { name: 'prochent1', text: '0' }, // %
            
            { name: 'kl.Oh.VGYK1_2',  color: '#06FF06' }, // Клап.оч. ВГУК1 LEFT
            { name: 'jelob_ramka',    color: '#E6E6E6' }, // желоб
            { name: 'zagr_ramka_l',   color: '#06FF06' }, // загр слева
            { name: 'leviy', color: '#000' }, // палка справа под Клап.оч. ВГУК1 LEFT
            // не хватает схемы 
            { name: 'left_ellipse_text', text: 'Р',         opacity: '0' },
            { name: 'left_ellipse',      color: '#860004',  opacity: '0' }, // K
            { name: 'left_matrix_text', text: '4' }, // Матр. 1 стр. _
            { name: 'matrix 1 str 1_kgc', text: '0.05' }, // кгс/см
            { name: 'matrix 1 str 1_T', text: '1.5' }, // T
            { name: 'matrix 1 str 1_M', text: '0.6' }, // M3
            { name: 'primoygolinik_smehivateli', color: '#860004' }, // горизонтальная палочка слева
            // не хватает схемы ПУСТ, зеленая/красная палочка рядом
            // { name: 'beliy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            // { name: 'zelyniy primoygolinik_smehivateli',  opacity: '0' }, // зеленая палочка
            { name: 'HZ1', text: '1.4' }, // ШЗ слева
            { name: 'left_vugr_rect', color: '#E6E6E6' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#e6e6e6' }, // пауза по центру
            
            { name: 'verx', text: '0' }, // цифры сверху
            // не хватает палочки горизонтальной под цифрами
            { name: 'black_arrow_under_verx', opacity: '0' }, // стрелка под цифрами

            { name: 'praviy', color: '#860004' }, // палка от цифр справа
            // не хватает элемента [К - в зеленом кружке]
            { name: 'tr_3_str_1_', text: '5' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' },
            { name: 'dlina_porcii', text: '125' }, // длина порции

            { name: 'rezym_A', color: '#06FF06' }, // текущий режим А задник
            { name: 'rezym_D', color: '#06FF06' }, // текущий режим Д задник
            { name: 'K_16_strelka', opacity: '0' }, // к16 сброс ошибки стрелка

            { name: 'zagr_ramka_r', color: '#E6E6E6' }, // загр справа
            { name: 'right_matrix_text', text: '5' }, // матр 1 загр 51
            { name: 'matrix 1 str 14_kgc', text: '1.28' }, // kгс/см
            { name: 'matrix 1 str 14_T', text: '16.4' }, // t
            { name: 'matrix 1 str 14_M', text: '34.9' }, // 
            { name: 'pust_ramka_r', opacity: '0' }, // 
            { name: 'r_pust', opacity: '0' }, // 
            { name: 'HZ2', text: '1.4' }, // Ш3 справа
            { name: 'prochent2', text: '3' }, // % справа
            
            { name: 'klNKB-2_2',      color: '#06FF06' }, // НКВ-2 verh  // ilay
            { name: 'klNKB-2_1',      color: '#06FF06' }, // НКВ-2 niz   // ilay
            { name: 'vigruzca pravo', color: '#06FF06' }, // Выгр спарва   // ilay
            

            { name: 'right_rect_yellow_arrow', opacity: '0' }, // желтая палка справа
            { name: 'right_rect_under_arrow', opacity: '1' }, // красная палка справа
            { name: 'arrow_right', opacity: '0' }, // зеленая стрелка справа
            { name: 'Vtorichnye vyskazyvaniia_P_B2', text: '4.00' }, // 
            { name: 'Vtorichnye vyskazyvaniia_T_B2', text: '32' }, // 
            { name: 'Vtorichnye vyskazyvaniia_F_B2', text: '0' }, // 
            { name: 'B2_Dp bunker', text: '-0.01' }, // 
            { name: 'B2_P compens', text: '1.32' }, // 
            { name: 'B2_time vygruski', text: '96' }, // 
            { name: 'B2_time vygruski raschyotnoe', text: '100' }, // 
            { name: 'B2_time sbrosa P', text: '4' }, // 
            { name: 'B2_time nabora P', text: '2' }, // 
            { name: 'B2_ves s HP', text: '16.4' }, // 
            { name: 'B2_vibratciya', text: '36' }, // 
            { name: 'counder podachi_za tekuschuyu smenu', text: '9' }, // 
            { name: 'counder podachi_za past smenu', text: '78' }, // 
            // { name: 'counder podachi_za tekuschuyu smenu', text: '' }, // 
            // { name: 'counder podachi_za past smenu', text: '' }, // 
            { name: 'zaprosi_shp_stroka', text: '7' }, //  Запросы на ШП // строка
            // { name: 'btn_ZapSledPorc_border', color: '' }, //  Запрет след.порции задник

            { name: 'given_level',   text: '0.90' }, // 
            { name: 'tekushy_level', text: '3.14' }, // 
            { name: 'radar 1',  text: '3.02' },   // 
            { name: 'radar 2',  text: '3.30' },   // 
            { name: 'mexan',    text: '0.53' },  // 
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'v rabote',   color: '#D0D1D3' }, // в работе текст // afk
            { name: 'bg_vRabote', color: '#06FF06' }, // в работе       // afk
            { name: 'ismetir_ramki',      color: '#06FF06' }, // Измерить задник
            { name: 'mex.zond na huxte',  color: '#D0D1D3' }, //  зеленый квадрат Мех.зонд на шихт
            { name: 'B1_nomerstr', text: '4' }, // 
            { name: 'B2_nomerstr', text: '5' }, // 
            { name: 'T3_nomerstr', text: '5' }, // 
            { name: 'T2_nomerstr', text: '5' }, // 
            { name: 'T1_nomerstr', text: '5' }, // 
            { name: 'B1_Tip_text', text: 'Р' }, // 
            { name: 'B2_Tip_text', text: 'К' }, // 
            { name: 'T3_Tip_text', text: 'К' }, // 
            { name: 'T2_Tip_text', text: 'К' }, // 
            { name: 'T1_Tip_text', text: 'Р' }, // 
            { name: 'B1_Tip',   color: '#860004' }, // 
            { name: 'B2_Tip',   color: '#008600' }, // 
            { name: 'T2_Tip',   color: '#008600' }, // 
            { name: 'T2_color', color: '#008600' }, // 
            { name: 'T1_Tip',   color: '#860004' }, // 
            { name: 'B1_ves', text: '93.1' }, // 
            { name: 'B2_ves', text: '16.4' }, // 
            { name: 'T3_ves', text: '16.4' }, // 
            { name: 'T2_ves', text: '16.4' }, // 
            { name: 'T1_ves', text: '-1.0' }, // 
            { name: 'str51_SM_7', text: '0  0' }, // цифры справа снизу // была ерунда написанна  
            { name: 'P_str2', color: '#860004' }, // str 2 color
            { name: 'K_str1', color: '#008600' }, // str 1 color
            { name: 'zelyniy primoygolinik_Radar2', color: '#008600' }, // str 51 color

            { name: 'na_conveer_s1_bukca', text: 'Р', opacity: '0' }, // str 2 
            { name: 'str1_down',           text: 'К' }, // str 2 
            { name: 'str51_down',          text: 'К' }, // str 51 
           
           

          ]
        }
      },
      startTime: timeDiff + 421,
      human: true
    },  
    ////--------------------------------72--------------------------////
    {
      audio: 'telephone_say',// 1.7
      sender: 'Система',
      startTime: timeDiff + 422,
    },
    { action: { target3D: 'PhoneButton017', }, startTime: timeDiff + 423, human: true, },
    {
      text: 'Добавляйте 5000 кислорода и 5000 дутья.',
      sender: 'Газовщик',
      audio: 'tts-vo93', // 3.7
      startTime: timeDiff + 424,
    },
    {
      text: 'Выполняю.',
      sender: 'Инженер-энергетик',
      audio: 'tts-vo92', // 1.25
      startTime: timeDiff + 428.5,
    },
    ////--------------------------------73--------------------------////
    {
      scenarioText: 'Дать команду подать ПУТ в ДП',
      audio: 'telephone_say',// 1.7
      sender: 'Система',
      startTime: timeDiff + 430.5,
    },
    { action: { target3D: 'PhoneButton023', }, startTime: timeDiff + 431, human: true, }, 
    {
      text: 'Приступить подачу ПУТ в ДП-6.',
      sender: 'Газовщик',
      audio: 'tts-vo95', // 2.79
      startTime: timeDiff + 432,
    },
    {
      text: 'Выполняю.',
      sender: 'Оператор установки вдувания',
      audio: 'tts-vo92', // 1.25
      startTime: timeDiff + 435.5,
    },
    ////--------------------------------74--------------------------////
    {
      text: 'Установить воздухонагреватель ВНК №2 в режим «нагрев».',
      sender: 'Система',
      audio: 'tts-65',
      startTime: timeDiff + 437.5,
    },
    {
      action: {
        target2D: 'perekidta2_btn',
        window2D: {
          elements: [
            { name: 'text_132', y: 475, text: 'Открыт' },
            { name: 'text_116', y: 475, text: 'Открыт' },
            { name: 'text_124', y: 475, text: 'Закрыт' },
            { name: 'text_113', y: 475, text: 'Открыт' },
            { name: 'text_134', y: 475, text: 'Открыт' },
            { name: 'text_117', y: 475, text: 'Открыт' },
            { name: 'text_111', y: 475, text: 'Открыт' },
            { name: 'text_112', y: 475, text: 'Открыт' },
            { name: 'rect_132', position: { y: 0 }, color: '#06f322' },
            { name: 'rect_116', position: { y: 0 }, color: '#06f322' },
            { name: 'rect_124', position: { y: 0 }, color: '#FF1E06' },
            { name: 'rect_113', position: { y: 0 }, color: '#06f322' },
            { name: 'rect_134', position: { y: 0 }, color: '#06f322' },
            { name: 'rect_117', position: { y: 0 }, color: '#06f322' },
            { name: 'rect_111', position: { y: 0 }, color: '#06f322' },
            { name: 'rect_112', position: { y: 0 }, color: '#06f322' },
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
      startTime: timeDiff + 438.0,
      human: true,
    },
    { // otdel_nagrev_btn
      action: {
        target2D: 'otdel_nagrev_btn',
        window2D: {
          elements: [
            { name: 'OvN_Title',        text: 'ВН2 Перекидка из Отделения в Нагрев',},

            { name: 'time_shaga_310',   text: '210',},
            { name: 'time_shaga_311',   text: '211',},
            { name: 'time_shaga_312',   text: '212',},
            { name: 'time_shaga_313',   text: '213',},
            { name: 'time_shaga_324',   text: '224',},
            { name: 'time_shaga_321',   text: '221',},
            { name: 'time_shaga_317',   text: '217',},
            { name: 'time_shaga_342',   text: '242',},
            { name: 'time_shaga_316',   text: '216',},
            { name: 'time_shaga_334',   text: '234',},
            { name: 'time_shaga_327',   text: '227',},
            { name: 'time_shaga_332',   text: '232',},
            { name: 'time_shaga_332_1', text: '232',},
            { name: 'time_shaga_327_1', text: '227',},
            { name: 'time_shaga_334_1', text: '234',},
            { name: 'time_shaga_335',   text: '235',},
            { name: 'time_shaga_315',   text: '215',},
            { name: 'time_shaga_321_1', text: '221',},
            { name: 'grey_number_310',  text: '210',},
            { name: 'grey_number_311',  text: '211',},
            { name: 'grey_number_312',  text: '212',},
            { name: 'grey_number_313',  text: '213',},
            { name: 'grey_number_324',  text: '224',},
            { name: 'grey_number_317',  text: '217',},
            { name: 'grey_number_334',  text: '234',},
            { name: 'grey_number_316',  text: '216',},
            { name: 'grey_number_332',  text: '232',},

            { name: 'OvN_usl_7',        text: 'Открыть отделительный',},
            { name: 'OvN_usl_7_down',   text: 'клапан на газе 13',},
            { name: 'OvN_usl_8',        text: 'Открыть клапан',},
            { name: 'OvN_usl_8_down',   text: 'продувки на газе 24',},
            { name: 'OvN_usl_9',        text: 'Ожидания разрешения',},
            { name: 'OvN_usl_9_down',   text: 'пуска газа:',},
            { name: 'OvN_usl_10',       text: 'Открыть отделительный',},
            { name: 'OvN_usl_10_down',  text: 'клапан на воздух. гор. 17',},
            { name: 'OvN_usl_11',       text: 'Открыть отсечной',},
            { name: 'OvN_usl_11_down',  text: 'клапан на воздух. гор. 34',},
            { name: 'OvN_usl_12',       text: 'Открыть отсечной',},
            { name: 'OvN_usl_12_down',  text: 'клапан на смеш. газе 34',},
            { name: 'OvN_usl_13',       text: 'Открыть отсечной',},
            { name: 'OvN_usl_13_down',  text: 'клапан на смеш. газе 34',},
            { name: 'OvN_usl_14',       text: 'Ожидание появления',},
            { name: 'OvN_usl_14_down',  text: 'факела',},
            { name: 'OvN_usl_15',       text: 'Закрыть клапан',},
            { name: 'OvN_usl_15_down',  text: 'продувки азотом 24',},

            { name: 'OvN_Time_1',       text: '27',},
            { name: 'OvN_Time_2',       text: '300',},
            { name: 'OvN_Time_3',       text: '27',},
            { name: 'OvN_Time_4',       text: '27',},
            { name: 'OvN_Time_5',       text: '27',},
            { name: 'OvN_Time_6',       text: '10',},
            { name: 'OvN_Time_7',       text: '27',},
            { name: 'OvN_Time_8',       text: '27',},
            { name: 'OvN_Time_9',       text: '2',},
            { name: 'OvN_Time_10',      text: '27',},
            { name: 'OvN_Time_11',      text: '30',},
            { name: 'OvN_Time_12',      text: '125',},
            { name: 'OvN_Time_13',      text: '125',},
            { name: 'OvN_Time_14',      text: '10',},
            { name: 'OvN_Time_15',      text: '27',},

            { name: 'OvN_number_310',   text: 'Закрыт',  },
            { name: 'OvN_number_311',   text: 'Закрыт',  },
            { name: 'OvN_number_312',   text: 'Закрыт',  },
            { name: 'OvN_number_313',   text: 'Закрыт',  },
            { name: 'OvN_number_324',   text: 'Закрыт',  },
            { name: 'OvN_number_317',   text: 'Закрыт',  },
            { name: 'OvN_number_334',   text: 'Закрыт',  },
            { name: 'OvN_number_316',   text: 'Закрыт',  },
            { name: 'OvN_number_332',   text: 'Закрыт',  },
            
            { name: 'OvN_path_310',     color: '#FF381B',  },
            { name: 'OvN_path_311',     color: '#FF381B',  },
            { name: 'OvN_path_312',     color: '#FF381B',  },
            { name: 'OvN_path_313',     color: '#FF381B',  },
            { name: 'OvN_path_324',     color: '#FF381B',  },
            { name: 'OvN_path_317',     color: '#FF381B',  },
            { name: 'OvN_path_334',     color: '#FF381B',  },
            { name: 'OvN_path_316',     color: '#FF381B',  },
            { name: 'OvN_path_332',     color: '#FF381B',  },
          ]
        },
      },
      startTime: timeDiff + 438.1,
      human: true,
    },
    {
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
      startTime: timeDiff + 438.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
    
          ]
        },
      },
      startTime: timeDiff + 438.3,
      human: true,
    },
    //1  
    {
      action: {
        window2D: {
          elements: [
            { name: 'circle_dutyo',         color: '#000000' },
            { name: 'circle_nagrev',        color: '#000000' },
            { name: 'circle_otdeleniye_1',  color: '#000000' },
            { name: 'circle_otdeleniye_2',  color: '#000000' },

            { name: 'kl_210',  color: '#00FF00' },
            { name: 'kl_211',  color: '#FF1E00' },
            { name: 'kl_212',  color: '#FF1E00' },
            { name: 'kl_213',  color: '#FF1E00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            // Table

            { name: 'OvN_number_310',   text: 'Открыт', y: 520},
            { name: 'OvN_number_311',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_312',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 520},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 520},
            { name: 'OvN_path_310',     color: '#06FF06', position: { y: 40 } },
            { name: 'OvN_path_311',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_312',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 40 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 40 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 439,
    },
    //2
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#00FF00' },
            { name: 'kl_211',  color: '#FF1E00' },
            { name: 'kl_212',  color: '#FF1E00' },
            { name: 'kl_213',  color: '#FF1E00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },

            // Table
            { name: 'OvN_number_310',   text: 'Открыт', y: 560},
            { name: 'OvN_number_311',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_312',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 560},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 560},
            { name: 'OvN_path_310',     color: '#06FF06', position: { y: 81 } },
            { name: 'OvN_path_311',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_312',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 81 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 81 } },


            // End Table
          ]
        }
      },
      startTime: timeDiff + 440,
    },
    //3
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#00FF00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#FF1E00' },
            { name: 'kl_213',  color: '#FF1E00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },

            // Table
            { name: 'OvN_number_310',   text: 'Открыт', y: 600},
            { name: 'OvN_number_311',   text: 'Открыт', y: 600},
            { name: 'OvN_number_312',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 600},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 600},
            { name: 'OvN_path_310',     color: '#06FF06', position: { y: 122 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 122 } },
            { name: 'OvN_path_312',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 122 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 122 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 441,
    },
    //4
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#00FF00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#FF1E00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Открыт', y: 640},
            { name: 'OvN_number_311',   text: 'Открыт', y: 640},
            { name: 'OvN_number_312',   text: 'Открыт', y: 640},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 640},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 640},
            { name: 'OvN_path_310',     color: '#06FF06', position: { y: 162 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 162 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 162 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 162 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 162 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 442,
    },
    //5
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#FF1E00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_311',   text: 'Открыт', y: 680},
            { name: 'OvN_number_312',   text: 'Открыт', y: 680},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 680},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 680},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 204 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 204 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 204 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 204 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 443,
    },
    //6
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#FF1E00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_311',   text: 'Открыт', y: 720},
            { name: 'OvN_number_312',   text: 'Открыт', y: 720},
            { name: 'OvN_number_313',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 720},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 720},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 245 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 245 } },
            { name: 'OvN_path_313',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 245 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 245 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 444,
    },
    //7
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_311',   text: 'Открыт', y: 762},
            { name: 'OvN_number_312',   text: 'Открыт', y: 762},
            { name: 'OvN_number_313',   text: 'Открыт', y: 762},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 762},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 762},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 286 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 286 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 286 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 286 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 286 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 445,
    },
    //8
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#00FF00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 805},
            { name: 'OvN_number_311',   text: 'Открыт', y: 805},
            { name: 'OvN_number_312',   text: 'Открыт', y: 805},
            { name: 'OvN_number_313',   text: 'Открыт', y: 805},
            { name: 'OvN_number_324',   text: 'Открыт', y: 805},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 805},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 805},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 805},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 805},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 327 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 327 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 327 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 327 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 327 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 327 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 327 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 327 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 327 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 446,
    },
    //9
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#00FF00' },
            { name: 'kl_217',  color: '#FF1E00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 846},
            { name: 'OvN_number_311',   text: 'Открыт', y: 846},
            { name: 'OvN_number_312',   text: 'Открыт', y: 846},
            { name: 'OvN_number_313',   text: 'Открыт', y: 846},
            { name: 'OvN_number_324',   text: 'Открыт', y: 846},
            { name: 'OvN_number_317',   text: 'Закрыт', y: 846},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 846},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 846},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 846},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 367 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 367 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 367 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 367 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 367 } },
            { name: 'OvN_path_317',     color: '#FF1E06', position: { y: 367 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 367 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 367 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 367 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 447,
    },
    //10
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#00FF00' },
            { name: 'kl_217',  color: '#00FF00' },
            { name: 'kl_234',  color: '#FF1E00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 886},
            { name: 'OvN_number_311',   text: 'Открыт', y: 886},
            { name: 'OvN_number_312',   text: 'Открыт', y: 886},
            { name: 'OvN_number_313',   text: 'Открыт', y: 886},
            { name: 'OvN_number_324',   text: 'Открыт', y: 886},
            { name: 'OvN_number_317',   text: 'Открыт', y: 886},
            { name: 'OvN_number_334',   text: 'Закрыт', y: 886},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 886},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 886},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 408 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 408 } },
            { name: 'OvN_path_334',     color: '#FF1E06', position: { y: 408 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 408 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 408 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 448,
    },
    //11
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#00FF00' },
            { name: 'kl_217',  color: '#00FF00' },
            { name: 'kl_234',  color: '#00FF00' },
            { name: 'kl_216',  color: '#FF1E00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 926},
            { name: 'OvN_number_311',   text: 'Открыт', y: 926},
            { name: 'OvN_number_312',   text: 'Открыт', y: 926},
            { name: 'OvN_number_313',   text: 'Открыт', y: 926},
            { name: 'OvN_number_324',   text: 'Открыт', y: 926},
            { name: 'OvN_number_317',   text: 'Открыт', y: 926},
            { name: 'OvN_number_334',   text: 'Открыт', y: 926},
            { name: 'OvN_number_316',   text: 'Закрыт', y: 926},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 926},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 449 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 449 } },
            { name: 'OvN_path_316',     color: '#FF1E06', position: { y: 449 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 449 } },
          
            // End Table
          ]
        }
      },
      startTime: timeDiff + 449,
    },
    //12
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#00FF00' },
            { name: 'kl_217',  color: '#00FF00' },
            { name: 'kl_234',  color: '#00FF00' },
            { name: 'kl_216',  color: '#00FF00' },
            { name: 'kl_232',  color: '#FF1E00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 968},
            { name: 'OvN_number_311',   text: 'Открыт', y: 968},
            { name: 'OvN_number_312',   text: 'Открыт', y: 968},
            { name: 'OvN_number_313',   text: 'Открыт', y: 968},
            { name: 'OvN_number_324',   text: 'Открыт', y: 968},
            { name: 'OvN_number_317',   text: 'Открыт', y: 968},
            { name: 'OvN_number_334',   text: 'Открыт', y: 968},
            { name: 'OvN_number_316',   text: 'Открыт', y: 968},
            { name: 'OvN_number_332',   text: 'Закрыт', y: 968},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 490 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 490 } },
            { name: 'OvN_path_332',     color: '#FF1E06', position: { y: 490 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 450,
    },
    //13
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#00FF00' },
            { name: 'kl_217',  color: '#00FF00' },
            { name: 'kl_234',  color: '#00FF00' },
            { name: 'kl_216',  color: '#00FF00' },
            { name: 'kl_232',  color: '#00FF00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 1008},
            { name: 'OvN_number_311',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_312',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_313',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_324',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_317',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_334',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_316',   text: 'Открыт', y: 1008},
            { name: 'OvN_number_332',   text: 'Открыт', y: 1008},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 531 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 531 } },
            { name: 'OvN_path_332',     color: '#06FF06', position: { y: 531 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 451,
    },
    //14
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#00FF00' },
            { name: 'kl_217',  color: '#00FF00' },
            { name: 'kl_234',  color: '#00FF00' },
            { name: 'kl_216',  color: '#00FF00' },
            { name: 'kl_232',  color: '#00FF00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 1050},
            { name: 'OvN_number_311',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_312',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_313',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_324',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_317',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_334',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_316',   text: 'Открыт', y: 1050},
            { name: 'OvN_number_332',   text: 'Открыт', y: 1050},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 572 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_324',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 572 } },
            { name: 'OvN_path_332',     color: '#06FF06', position: { y: 572 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 452,
    },
    //15          
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#00FF00' },
            { name: 'kl_234',  color: '#00FF00' },
            { name: 'kl_216',  color: '#00FF00' },
            { name: 'kl_232',  color: '#00FF00' },
            
            { name: 'OvN_number_310',   text: 'Закрыт', y: 1090},
            { name: 'OvN_number_311',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_312',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_313',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 1090},
            { name: 'OvN_number_317',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_334',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_316',   text: 'Открыт', y: 1090},
            { name: 'OvN_number_332',   text: 'Открыт', y: 1090},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 610 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 610 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 610 } },
            { name: 'OvN_path_332',     color: '#06FF06', position: { y: 610 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 453,
    },
    //16
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_210',  color: '#FF1E00' },
            { name: 'kl_211',  color: '#00FF00' },
            { name: 'kl_212',  color: '#00FF00' },
            { name: 'kl_213',  color: '#00FF00' },
            // { name: '___',  color: '#FF1E00' },
            { name: 'kl_217',  color: '#00FF00' },
            { name: 'kl_234',  color: '#00FF00' },
            { name: 'kl_216',  color: '#00FF00' },
            { name: 'kl_232',  color: '#00FF00' },
            
            // Table
            { name: 'OvN_number_310',   text: 'Закрыт', y: 475},
            { name: 'OvN_number_311',   text: 'Открыт', y: 475},
            { name: 'OvN_number_312',   text: 'Открыт', y: 475},
            { name: 'OvN_number_313',   text: 'Открыт', y: 475},
            { name: 'OvN_number_324',   text: 'Закрыт', y: 475},
            { name: 'OvN_number_317',   text: 'Открыт', y: 475},
            { name: 'OvN_number_334',   text: 'Открыт', y: 475},
            { name: 'OvN_number_316',   text: 'Открыт', y: 475},
            { name: 'OvN_number_332',   text: 'Открыт', y: 475},
            { name: 'OvN_path_310',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_311',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_312',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_313',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_324',     color: '#FF1E06', position: { y: 0 } },
            { name: 'OvN_path_317',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_334',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_316',     color: '#06FF06', position: { y: 0 } },
            { name: 'OvN_path_332',     color: '#06FF06', position: { y: 0 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 454,
    },
    {  
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 454.1,
      human: true,
    },
    {  
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 454.2,
      human: true,
    },
    ////-----------------------------------75
    {
      text: 'Выполнен запуск доменной печи №6, после кратковременной остановки.',
      sender: 'Система',
      audio: 'tts--75',
      startTime: timeDiff + 455,
    },
    /**/
  ]

]
// Массив исходных состояний
let startState2D = [
  [// Первый сценарий
    { name: 'kl028', color: '#06FF06' },
    { name: 'circle_1_kl028', stroke: '#06FF06' },
    { name: 'circle_2_kl028', stroke: '#06FF06' },
    { name: 'kl028_proc', text: '100' },
    { name: 'kl007', color: '#06FF06' },
    { name: 'circle_1_kl007', stroke: '#06FF06' },
    { name: 'circle_2_kl007', stroke: '#06FF06' },
    { name: 'kl007_proc', text: '100' },
    { name: 'circle_1_kl025', stroke: '#06FF06' },
    ///// КУЧА старых 2д исчезла. НАЙТИ!!!!
    // { name: 'vnk_1', color: '#ff1e00' },
    // { name: 'vn_132', color: '#06FF06' },
    // { name: 'vn_117', color: '#06FF06' },
    // { name: 'vn_132_l', color: '#06FF06' },
    // { name: 'vn_116', color: '#06FF06' },
    // { name: 'vn_116_l', color: '#06FF06' },
    // { name: '1PS_03_square', color: '#06FF06' },
    // { name: '1PS_05_square', color: '#06FF06' },
    // { name: 'Avto', text: 'Циклический' },
    // { name: 'Dutyo', text: 'Нагрев-Отдел.' },
    // { name: 'Vremya_nagreva', text: '109' },
    // { name: 'Vremya_dutya', text: '60' },
    // { name: 'Vremya_otdelen', text: '0' },
    // BZU
    { name: 'v rabote', color: '#2B2A29' },
    { name: 'bg_vRabote', color: '#06FF06' },
    { name: 'arrow_right', opacity: '1' },
    { name: 'arrow_left', opacity: '0' },
    { name: 'left_rect_down_arrow', opacity: '1' },
    { name: 'right_rect_down_arrow', opacity: '0' },
    { name: 'right_rect_yellow_arrow', opacity: '0' },
    { name: 'left_rect_yellow_arrow', opacity: '0' },
    { name: 'Krasniy nijniy Poloska', color: '#06FF06' },
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
    { name: 'kl_0332', color: '#06FF06' },
    { name: 'kl0332_proc', text: '100' },
    { name: 'kl_0331', color: '#ff1e00' },
    { name: 'kl0331_proc', text: '0' },
    { name: 'vnk1_stripes', color: '#B50000' },
    { name: 'vnk3_stripes', color: '#0033FF' },
    { name: 'circle_kl0332', stroke: '#06FF06' },
    { name: 'circle_kl0331', stroke: '#ff1e00' },
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
    { name: '0F2_stripe_3', opacity: 0 },
    { name: '0F1_stripe', opacity: 0 },
    { name: '0F1_stripe_1', opacity: 0 },
    { name: 'circle_0F3', opacity: 0 },
    { name: 'circle_0F2', opacity: 0 },
    { name: 'circle_0F1', opacity: 0 },
    { name: '001_stripe_1', opacity: 0 },
    { name: '001a_stripe_1', opacity: 0 },
    { name: '001a_stripe_2', opacity: 0 },
    { name: 'circle_001a', stroke: '#B0B0B0' },
    { name: 'circle_kl007', stroke: '#06FF06' },
    { name: 'circle_kl028', stroke: '#06FF06' },
    { name: 'circle_053', stroke: '#B0B0B0' },
    { name: 'circle_dutyo_VNK3', stroke: '#04FF00' },
    { name: 'circle_nagrev_VNK3', stroke: '#000600' },
    { name: 'circle_kl_0502', stroke: '#ff1e00' },
    { name: 'circle_051', stroke: '#ff1e00' },
    { name: 'circle_052', stroke: '#ff1e00' },
    { name: 'circle_0501', stroke: '#ff1e00' },
    { name: 'circle_001', stroke: '#ff1e00' },
    { name: 'circle_kl036b', stroke: '#ff1e00' },
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
    { name: 'kl_134', color: '#06FF06' },
    { name: 'kl_117', color: '#06FF06' },
    { name: 'kl_132', color: '#06FF06' },
    { name: 'rect_132_2', color: '#06FF06' },
    { name: 'kl_116', color: '#06FF06' },
    { name: 'rect_116_2', color: '#06FF06' },
    { name: 'kl_111', color: '#06FF06' },
    { name: 'kl_112', color: '#06FF06' },
    { name: '1PS_05', color: '#06FF06' },
    { name: 'kl_118', color: '#ff1e00' },
    { name: 'kl_119', color: '#ff1e00' },
    { name: 'circle_dutyo', color: '#000000' },
    { name: 'circle_nagrev', color: '#06FF06' },
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
    { name: 'Str1_1', color: '#06FF06' },
    { name: 'Str1_4', color: '#C7B295' },
    { name: 'pech_left_down_zaglushka', color: '#D90001' },
    { name: 'leviy', color: '#06FF06' },
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
    { name: 'VNK3_status_1_fon_DP', color: '#0033FF' },
    { name: 'VNK2_status_1_fon_DP', color: '#ff1e00' },
    { name: 'VNK1_status_1_fon_DP', color: '#ff1e00' },
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
    { name: 'kl_red', color: '#ff1e00' },
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
    { name: 'L3', opacity: 1 },
    { name: 'L4', opacity: 0 },
    { name: 'L2_elem', color: '#CCD056' },
    { name: 'N2', text: '42,3' },
    { name: 'H2_tryb', text: '9,0' },
    { name: 'W_sinij_hol_dyt', text: '7,2' },
    { name: 'O_hol_dyt', text: '29,9' },
    { name: 'EVD1_O_fon', color: '#FFFFFF' },
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
    { name: 'circle_kl0333', stroke: '#06FF06' },
    { name: 'circle_kl004', stroke: '#06FF06' },
    { name: 'circle_kl025', stroke: '#06FF06' },
    { name: 'circle_kl030', stroke: '#06FF06' },
    { name: 'circle_kl048', stroke: '#ff1e00' },
    // { name: 'kl_028', color: '#06FF06' },
  ],
  [
    { name: 'Left_GBF_VA01_M01', color: '#FF1E06' }
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
    { name: 'Lamp_Green_023', material: 'Unic_Lamp_Green_On' },
    { name: 'Lamp_Red_020', material: 'Unic_Lamp_Red_On' },
    { name: 'Lamp_Red_019', material: 'Unic_Lamp_Red_Off' },
    { name: 'Lamp_Red_017', material: 'Unic_Lamp_Red_On' },
    { name: 'Lamp_Red_015', material: 'Unic_Lamp_Red_On' },
    { id: '8b1850b5-9c32-4d19-a4dc-70eab7778b97', position: { x: 0.024 }, material: 'd731d161-f41e-465a-9fb0-b1ac09cb8062' }, // точка жёл экран1
    { id: '7cd2a16b-0f5e-4691-9f5b-bd8e7dc3c3c7', position: { x: 0.042 }, material: 'd46ce2bf-329c-4b0b-932f-04e9aa6686bb' }, // точка зел экран1
    // Первый щит
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
    { id: '46dd9fce-1386-4ad0-94c9-de4cda5d1503', rotation: { y: (130 * Math.PI) / 180 } }, // Местн Дистн Авт_1
    { id: '31f7b14d-862e-4e43-993a-60b6539a2771', rotation: { y: (130 * Math.PI) / 180 } }, // Местн Дистн Авт_2
    { id: '6f63b513-516b-4dac-b482-9b8828e0a8b0', rotation: { y: (130 * Math.PI) / 180 } }, // Местн Дистн Авт_3
    { id: '07ed087c-0c84-47ef-a9c9-e7b170b65c60', rotation: { y: (125 * Math.PI) / 180 } }, // Клапан 721 выбо режима управления
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
    { id: 'c148f4e6-c6e9-4ecc-b6a8-ab22ac6bea77', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '3d6bbe77-1dea-4e8a-8dd8-238707bd6611', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '4ef3ebb3-38b4-417b-b53c-29728435c435', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: 'ed264d39-16f2-4c05-bb44-1eaca334f770', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: 'ee652b8c-bb08-49a6-b6c9-23865c084520', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '5007bde1-510e-43ab-9451-aa80ea873560', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '39eae169-9777-45dd-ad48-17af39e3f1f7', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '150106eb-69af-4b04-9027-f7830b1689af', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '1ce1d776-154a-4831-98f9-a3a028aae415', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '6795a23a-d2f7-4e56-a2a4-9e6c7d723013', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '0f9728b6-3aae-4637-a4ba-d1a9d6fe2d50', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '4d1de7e7-1f2c-4b05-876b-3c8c07363a9e', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '16ec5920-4a18-48b6-860d-89fd70c039b7', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: 'f75b7231-1294-491d-ad84-ba29d2876708', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: 'f3ed9e35-90f2-4a34-9555-6a472ae68707', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '2ebe0893-f4da-4241-bf7f-3b42120e9906', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '8e28a17e-9949-4f01-9dc5-0ccd47533059', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '23b03ff6-10fd-45f7-8301-7c418754e860', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: 'b968ba96-4d8f-44f4-acef-4bfef8978670', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: 'ba315587-572c-4914-839c-06588dfb55aa', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '75bf4393-8c70-4953-8187-36c0c785c233', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },
    { id: '30ad115a-f46c-4c47-80eb-d73e87e27326', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' },

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
    // Второй щит BZU
    { id: '6ddce191-0d83-43c2-af7e-ebdaddf5ab37', rotation: { y: (45 * Math.PI) / 180 } }, // Выбор бункера
    { id: '53ce370c-847a-41d5-ad4b-8acfa136f7fd', rotation: { y: (90 * Math.PI) / 180 } }, // Выбор режима
    { id: '9c84c3c4-e56b-4c5d-ab4d-dd1e3dd93833', rotation: { y: (45 * Math.PI) / 180 } }, // Выбор уровнемера
    // { id: 'c148f4e6-c6e9-4ecc-b6a8-ab22ac6bea77', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // положение на колошнике
    // { id: 'd682e192-5c28-41a3-bc3b-e16b17d03989', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // обойти остановку конвейера
    // { id: '3d6bbe77-1dea-4e8a-8dd8-238707bd6611', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // выбор режима АВТОМАТИЧ ПУСК
    { id: 'ca347a9f-4ba3-427f-a670-87edac8c1b6f', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // выбор режима АВТОМАТИЧ СТОП
    // { id: '4ef3ebb3-38b4-417b-b53c-29728435c435', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан сброса ЗАКРЫТ (слева)
    { id: 'e1811a26-22eb-4aa4-b105-82eebe3d1f50', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан сброса ОТКРЫТ (слева)
    { id: 'ed264d39-16f2-4c05-bb44-1eaca334f770', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан первичного выравнивания ЗАКРЫТ (слева)
    // { id: 'ee652b8c-bb08-49a6-b6c9-23865c084520', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан вторичного выравнивания ОТКРЫТ (справа)
    { id: '2cda85aa-dac2-42ca-9881-cf907eac7fe7', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан вторичного выравнивания ЗАКРЫТ (справа)
    { id: 'ac36637f-ce86-4d3a-bc27-969e9d7b0be9', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан первичного выравнивания ЗАКРЫТ (справа)
    // { id: '5007bde1-510e-43ab-9451-aa80ea873560', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // выбор угла наклона <1
    { id: '0db3fee6-f875-48a3-ac29-6f3cb24f987d', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // выбор угла наклона <8
    // { id: '39eae169-9777-45dd-ad48-17af39e3f1f7', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // желоб распределитель бункер 1
    { id: '56ee3c7e-2a19-40cb-9583-234429e9974e', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // желоб распределитель бункер 2
    // { id: '150106eb-69af-4b04-9027-f7830b1689af', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // верхний газоуплотнительный клапан ОТКРЫТ (слева)
    { id: '12da4e03-0b8d-4b99-bab3-894030abe51a', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // верхний газоуплотнительный клапан ЗАКРЫТ (слева)
    { id: '1ce1d776-154a-4831-98f9-a3a028aae415', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // нижний шихтовый затвор ЗАКРЫТ (слева) верх
    { id: '6795a23a-d2f7-4e56-a2a4-9e6c7d723013', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // нижний шихтовый затвор ЗАКРЫТ (слева) низ
    { id: '6ec942f8-f3be-417c-9887-0d7a128ef755', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // нижний шихтовый затвор ОТКРЫТ (справа) верх
    // { id: '0f9728b6-3aae-4637-a4ba-d1a9d6fe2d50', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // нижний шихтовый затвор ОТКРЫТ (справа) низ
    { id: '3ab702cb-b75b-4239-a546-8fbd27a38d20', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // нижний шихтовый затвор ЗАКРЫТ (справа) низ
    { id: '4d1de7e7-1f2c-4b05-876b-3c8c07363a9e', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // агломерат 1
    { id: '54116a57-7c08-4cc6-9ab4-4d55636e5354', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // агломерат 2
    // { id: '16ec5920-4a18-48b6-860d-89fd70c039b7', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // верхний газоуплотнительный клапан ЗАКРЫТ (справа)
    { id: '79785066-2885-4b81-8cae-7d8fdbe0b965', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // верхний газоуплотнительный клапан ОТКРЫТ (справа)
    { id: 'f75b7231-1294-491d-ad84-ba29d2876708', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан сброса ЗАКРЫТ (справа)
    { id: 'f3ed9e35-90f2-4a34-9555-6a472ae68707', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // охлаждение ДИСТАНЦ
    { id: '2ebe0893-f4da-4241-bf7f-3b42120e9906', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // охлаждение АВТОМАТ ВКЛ
    { id: '8e28a17e-9949-4f01-9dc5-0ccd47533059', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // смазка ДИСТАНЦ
    { id: '23b03ff6-10fd-45f7-8301-7c418754e860', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // смазка АВТОМАТ ВКЛ
    { id: 'b968ba96-4d8f-44f4-acef-4bfef8978670', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // гидравлика ДИСТАНЦ
    { id: 'ba315587-572c-4914-839c-06588dfb55aa', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // гидравлика АВТОМАТ ВКЛ
    // { id: '75bf4393-8c70-4953-8187-36c0c785c233', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан аварийного охлаждения ОТКРЫТ
    { id: '8a6a2ebf-034c-467d-aa75-93fb829a25f6', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // клапан аварийного охлаждения ЗАКРЫТ
    // { id: '30ad115a-f46c-4c47-80eb-d73e87e27326', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // механич уровнемер ОЖИДАНИЕ
    { id: '10dee587-2039-4288-b05f-213dc1bef870', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // механич уровнемер ОЖИДАНИЕ
    { id: 'b2dc1bc7-37a6-4c87-8a61-bd2636863890', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // вращение ВПРАВО БЫСТРО
    { id: '19152be3-71fb-49f3-b81d-9bc82b13bc60', material: '18656b14-e5a3-4e09-ac52-00de847fa1bd' }, // приостановить выгрузку бункера 1 и 2
    { id: 'd682e192-5c28-41a3-bc3b-e16b17d03989', material: 'f0e495bf-3d34-4e5e-a792-b539bfb9f230' }, // обойти остановку конвейера
    { name: 'bzuDavlenie_l', number: '00.00', color: 'red' },
    { name: 'bzuVesNetto_l', number: '093.0', color: 'red' },
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