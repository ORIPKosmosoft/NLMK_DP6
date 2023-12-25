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
        { x: 73.4, y: 70.5, w: 2.0, h: 2.8, forAction: true, id: 'kl118a', value: { window: 'O_n_k_na_VNK_posle_1', x: 1488, y: 678, }, realName: 'Клапан холодного дутья 118а' },
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
        { x: 61.00, y: 47.2, w: 1.5, h: 2.4, forAction: true, id: 'close_w1', realName: 'Закрыть', removeWindow: 'O_n_k_na_VNK_posle_1' }, // КРЕСТИК
        { x: 53.40, y: 55.4, w: 4.0, h: 2.6, forAction: true, id: 'auto', realName: 'Авто', value: { window: 'O_n_k_na_VNK_posle_2', x: 1719, y: 669, } },
        { x: 57.8, y: 55.4, w: 4.0, h: 2.6, forAction: true, id: 'ruchnoi', realName: 'Ручной', value: { window: 'O_n_k_na_VNK_posle_2', x: 1804, y: 669, } },
        { x: 53.5, y: 59.3, w: 4.0, h: 2.6, forAction: true, id: 'open_vn', realName: 'Открыть', value: { window: 'O_n_k_na_VNK_posle_2', x: 1717, y: 708, } },
        { x: 57.8, y: 59.3, w: 4.0, h: 2.6, forAction: true, id: 'close_ventil', realName: 'Закрыть', value: { window: 'O_n_k_na_VNK_posle_2', x: 1800, y: 708, } },
        { x: 53.4, y: 62.1, w: 8.5, h: 2.9, forAction: true, id: 'stop', realName: 'СТОП' },
        { x: 53.4, y: 67.5, w: 8.5, h: 2.6, forAction: true, id: 'sbros_oshibki', realName: 'Сброс ошибки' },
        { x: 53.4, y: 72.85, w: 8.5, h: 2.6, forAction: true, id: 'baypas_blokirovok', realName: 'Байпас всех блокировок', value: { window: 'O_n_k_na_VNK_posle_2', x: 1774, y: 837, } },
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
        { x: 13.6, y: 0.0, w: 3.4, h: 2.8, name: 'dp', },
        { x: 18.0, y: 0.0, w: 4.5, h: 3.3, name: 'Kontrol_progara', },
        { x: 45.5, y: 0.0, w: 3.5, h: 2.8, name: 'bzu', },
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
        { x: 15.6, y: 25.0, w: 11.9, h: 3.6, forAction: true, id: 'otdel_nagrev_btn', realName: 'Отделение-Нагрев', },
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
      ]
    },
    {
      name: 'Kontrol_progara', helpers: [
        { x: 13.7, y: 0.0, w: 3.4, h: 3.3, name: 'dp', },
        { x: 18.0, y: 0.0, w: 4.5, h: 3.3, name: 'Kontrol_progara', },
        { x: 45.5, y: 0.0, w: 3.5, h: 3.3, name: 'bzu', },
      ]
    },
    {
      name: 'Shagi_upraleniya', helpers: [
        { x: 14.7, y: 27.4, w: 1.7, h: 3.1, removeWindow: 'Shagi_upraleniya', forAction: true, id: 'shagi_uprav_close_btn', realName: 'Закрыть' },
        { x: 10.1, y: 92.4, w: 4.9, h: 2.2, forAction: true, id: 'shagi_uprav_zakryt', realName: 'Закрыть', },
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
  [
    {
      scenarioText: 'Отделить подогреватели воздуха и газа',
      sender: 'Система',
      startTime: timeDiff + 0,
    },
    {
      text: 'Нажать на кнопки с надписью: «Газовый цех», «Насосный цех», «Кислородный цех», «ЭВС», «Угольная» на телефоне.',
      sender: 'Система',
      audio: 'telephone_say',
      multi: [
        {
          text: 'Газовый цех: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton001',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Насосный цех: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton006',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Кислородный цех: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton017',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'ЭВС: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton020',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Угольная: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton016',
          },
          audio: 'tts-vo1',
        },
      ],
      startTime: timeDiff + 1,
      human: true,
    },
    {
      scenarioText: 'Отделить подогреватели воздуха и газа',
      sender: 'Система',
      startTime: timeDiff + 2,
    },
  ],
  
  // Первый сценарий  
  [
    {
      lifeTime: '07:30:00',
      chapterText: 'Отделение подогревателей воздуха и газа.',
      sender: 'Система',
      startTime: timeDiff + 0,
    },
    {
      scenarioText: 'Отделить подогреватели воздуха и газа',
      sender: 'Система',
      startTime: timeDiff + 1,
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
            // { name: 'skhema_sobrana', color: '#06FF06' },
            // { name: 'block_open',     color: '#06FF06' },
            // { name: 'block_close',    color: '#06FF06' },
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
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'kl029', color: '#06FF06' },
            { name: 'kl029_proc', text: '55' },
            { name: 'circle_kl029', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' }
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
            { name: 'kl029', color: '#06FF06' },
            { name: 'kl029_proc', text: '75' },
            { name: 'polozenie_text', text: '75' },
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_kl029', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
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
            { name: 'kl029', color: '#06FF06' },
            { name: 'kl029_proc', text: '100' },
            { name: 'polozenie_text', text: '100' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },        //  #6E6E6E //  #000;
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_2', color: '#e6e6e6', stroke: '#b3b3b3' },
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_kl029', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
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
            { name: 'M_t1_4', text: 'Работа', color: '#06FF06' },
            { name: 'PV3', text: '0,00' },
            { name: 'SP3', text: '0,00' },
            { name: 'PV3_1', text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            { name: 'PV4', text: '9,78' },
            { name: 'SP4', text: '10,00' },
            { name: 'PV4_1', text: '52,16' },
            { name: 'M_t3_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'M_t4_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'vnk_2', color: '#ff1e00' }, // задник стрелки
            { name: 'Tkyp_2', text: '1329' },
            { name: 'VNK2_status_1', text: 'Автоматический' },
            { name: 'VNK2_status_2', text: 'Нагрев' },
            { name: 'vnk2_stripes', color: '#ff1e00' },
            { name: 'VNK2_Fr', text: '81782' },
            { name: 'VNK2_Fb', text: '104004' },
            { name: 'Tdym_2', text: '140' },
            { name: '5PI_08', text: '406' },
            { name: 'TI_36', text: '15' },
            { name: 'FI_03', text: '947' },
            { name: 'vnk1_fire', opacity: '1' }, // стрелка
            { name: 'vnk_1', color: '#ff1e00' }, // задник стрелки
            { name: 'Tkyp_1', text: '1333' },
            { name: 'VNK1_status_1', text: 'Автоматический' },
            { name: 'VNK1_status_2', text: 'Нагрев' },
            { name: 'vnk1_stripes', color: '#ff1e00' },
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
            { name: 'circle_kl038', stroke: '#06FF06' },
            { name: 'kl_038', color: '#06FF06' },
            { name: 'title_work_vn', text: 'Управление клапаном 038' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'status_control_vnk_text', text: 'Ручной' },
            { name: 'status_window_text', text: 'Открыт' },
            // { name: 'skhema_sobrana', color: '#06FF06' },
            // { name: 'block_open',     color: '#06FF06' },
            // { name: 'block_close',    color: '#06FF06' },
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
          { x: 54.45, y: 44.20, w: 1.5, h: 2.4, id: 'close_w1', },
          { x: 47.00, y: 52.10, w: 4.0, h: 2.6, id: 'auto', },
          { x: 51.30, y: 52.10, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 47.00, y: 56.10, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 51.30, y: 56.10, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 47.00, y: 59.10, w: 8.5, h: 2.9, id: 'stop', },
          { x: 47.00, y: 64.30, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 47.00, y: 69.55, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 17.1,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'close_ventil',
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
          { x: 67.40, y: 44.20, w: 1.7, h: 2.0, id: 'close_w1', },
          { x: 59.95, y: 52.10, w: 4.0, h: 2.6, id: 'auto', },
          { x: 64.25, y: 52.10, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 59.95, y: 56.10, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 64.25, y: 56.10, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 59.90, y: 58.90, w: 8.5, h: 2.9, id: 'stop', },
          { x: 59.90, y: 64.20, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 59.90, y: 69.60, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      // lifeTime: '10:00:00',
      startTime: timeDiff + 24.1,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'close_ventil',
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
            { name: 'circle_kl007', stroke: '#06FF06' },
            { name: 'kl007', color: '#06FF06' },
            { name: 'title_work_vn', text: 'Управление клапаном 007' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
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
          { x: 67.40, y: 56.05, w: 1.7, h: 2.0, id: 'close_w1', },
          { x: 59.95, y: 64.00, w: 4.0, h: 2.6, id: 'auto', },
          { x: 64.30, y: 64.00, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 59.95, y: 67.90, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 64.30, y: 67.90, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 59.95, y: 70.85, w: 8.5, h: 2.9, id: 'stop', },
          { x: 59.95, y: 76.10, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 59.95, y: 81.45, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 32,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'close_ventil',
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
            { name: 'circle_kl028', stroke: '#06FF06' },
            { name: 'circle_kl028', stroke: '#06FF06' },
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'polozenie_text', text: '100' },
            { name: 'polozenie_button_text', color: '#6E6E6E' },
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'btn_open_text', color: '#666' },                        // afk
            { name: 'btn_open_2', color: '#e6e6e6', stroke: '#b3b3b3' }, // afk
            { name: 'btn_close_text', color: '#000' },
            { name: 'btn_close_2', color: '#fff', stroke: '#000' },
          ],
        },
        helper2D: [
          { x: 54.70, y: 54.70, w: 1.7, h: 2.0, id: 'close_w1', },
          { x: 47.30, y: 62.65, w: 4.0, h: 2.6, id: 'auto', },
          { x: 51.65, y: 62.65, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 47.30, y: 66.50, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 51.65, y: 66.50, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 47.30, y: 69.50, w: 8.5, h: 2.9, id: 'stop', },
          { x: 47.30, y: 74.75, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 47.30, y: 80.20, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 39.1,
      human: true,
    },
    // окно ВН
    {
      action: {
        target2D: 'close_ventil',
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
      chapterText: 'Сообщение о запланированной остановке',
      sender: 'Система',
      startTime: timeDiff + 49.1,
    },
    {
      scenarioText: 'Сообщить об остановке доменной печи',
      sender: 'Система',
      startTime: timeDiff + 49.2,
    },
    {
      text: 'В случае запланированной остановки доменной печи газовщик сообщает об этом по телефону.',
      audio: 'tts-7',
      sender: 'Система',
      lifeTime: '07:45:00',
      startTime: timeDiff + 49.3,
    },
    ////--------------------------------1----------------------------------------//8-12//-new
    {
      text: 'Нажать на кнопки с надписью: «Газовый цех», «Насосный цех», «Кислородный цех», «ЭВС», «Угольная» на телефоне.',
      sender: 'Система',
      audio: 'telephone_say',
      multi: [
        {
          text: 'Газовый цех: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton001',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Насосный цех: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton006',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Кислородный цех: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton017',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'ЭВС: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
          sender: 'Газовщик',
          action: {
            target3D: 'PhoneButton020',
          },
          audio: 'tts-vo1',
        },
        {
          text: 'Угольная: Здравствуйте! Планируется остановка доменной печи №6 в 09:00 на 3 часа.',
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
    ////--------------------------------0----------------------------------------//13//-new
    {
      chapterText: 'Прекращение подачи ПУТ в ДП',
      sender: 'Система',
      startTime: timeDiff + 58,
    },
    {
      scenarioText: 'Остановить подачу ПУТ',
      sender: 'Система',
      lifeTime: '08:00:00',
      startTime: timeDiff + 59,
    },
    {
      text: 'По указанию сменного мастера печи газовщик прекращает подачу ПУТ в доменную печь',
      sender: 'Система',
      audio: 'tts-8 (1)',
      startTime: timeDiff + 60,
    },
    ////--------------------------------1----------------------------------------//14//-new
    {
      text: 'Принять телефонный звонок, подняв трубку телефона.',
      sender: 'Система',
      audio: 'Zvuk_gudka_telefona',
      startTime: timeDiff + 68,
    },
    {
      action: {
        target3D: 'Telephone_highlight2',
      },
      startTime: timeDiff + 68.1,
      human: true,
    },
    {
      text: 'Прекратить подачу ПУТ в доменную печь.',
      sender: 'Сменный мастер печи',
      audio: 'vo_new_14_1',
      startTime: timeDiff + 69,
    },
    {
      text: 'Приступаю к выполнению.',
      sender: 'Газовщик',
      audio: 'vo_new_14_2',
      startTime: timeDiff + 72,
    },

    ////--------------------------------//15//-new
    {
      text: 'Нажать на кнопку с надписью: «Угольная».',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 75,
    },
    {
      action: {
        target3D: 'PhoneButton016',
      },
      startTime: timeDiff + 75.5,
      human: true,
    },
    {
      text: 'Остановить вдувания пылеугольного топлива.',
      sender: 'Газовщик',
      audio: 'vo_new_15_1',
      startTime: timeDiff + 77,
    },
    {
      text: 'Понял. Выполняю.',
      sender: 'Оператор',
      audio: 'vo_new_15_2',
      startTime: timeDiff + 81,
    },
    ////--------------------------------//16//-new
    {
      text: 'В 08:00 остановили вдувания пылеугольного топлива.',
      sender: 'Система',
      audio: 'tts-9-1',
      startTime: timeDiff + 84,
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
      startTime: timeDiff + 84.1,
    },
    {
      audio: 'tts-9-2',
      startTime: timeDiff + 88,
    },
    {
      text: 'Проверить значение пылеугольного топлива.',
      sender: 'Система',
      multi: [
        {
          action: {
            target2D: 'F_Obsh',
          },
        },
        {
          action: {
            target2D: 'F_Tek',
          },
        },
      ],
      startTime: timeDiff + 88.1,
      human: true,
    },
    ////--------------------------------//17//-new
    {
      scenarioText: 'Подготовительные работы перед остановкой ДП.',
      sender: 'Система',
      startTime: timeDiff + 88.9,
    },
    {
      text: 'Проверка значений ПГ, ТТГ и температуры чугуна в лётках. В случае необходимости, внести корректировки.',
      sender: 'Система',
      audio: 'tts_new_17',
      startTime: timeDiff + 89,
    },
    ////--------------------------------2----------------------------------------//18//-new
    {
      text: 'Увеличить расход природного газа для поддержания ТТГ. Установить на 37000.',
      sender: 'Система',
      audio: 'tts_new_18',
      startTime: timeDiff + 97,
    },
    {
      action: {
        target2D: 't_r_4',
      },
      startTime: timeDiff + 101.5,
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
      startTime: timeDiff + 101.6,
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
      startTime: timeDiff + 101.7,
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
      startTime: timeDiff + 101.8,
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
      startTime: timeDiff + 101.9,
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
      startTime: timeDiff + 102,
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
      startTime: timeDiff + 102.1,
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
      startTime: timeDiff + 102.61,
    },
    {
      action: {
        target3D: 'dpVerh', // dP_verh
        color: 'green',
        number: '00.23',
      },
      startTime: timeDiff + 102.62,
    },
    {
      action: {
        target3D: 'dpObsh', // dP_obsh_tryba
        color: 'green',
        number: '01.68',
      },
      startTime: timeDiff + 102.62,
    },
    {
      action: {
        target3D: 'dpNiz', // dP_nish_tryba
        color: 'green',
        number: '01.45',
      },
      startTime: timeDiff + 102.62,
    },
    {
      action: {
        target3D: 'pGorDut', // P_2
        color: 'green',
        number: '03.99',
      },
      startTime: timeDiff + 102.62,
    },
    {
      action: {
        target3D: 'tGorDut', // t_gor_dut
        color: 'green',
        number: '1211',
      },
      startTime: timeDiff + 102.62,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd', // P_Os_szat_voz
        color: 'green',
        number: '1211',
      },
      startTime: timeDiff + 102.62,
    },
    {
      action: {
        target3D: 'fParaUvlajDutReg', // par_yvlaz
        color: 'green',
        number: '00.00',
      },
      startTime: timeDiff + 102.62,
    },
    ////--------------------------------3----------------------------------------//19//-new
    {
      text: 'Настройка значения теоретической температуры горения.',
      sender: 'Система',
      audio: 'tts-11',
      startTime: timeDiff + 103,
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
      startTime: timeDiff + 107,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_ttg_text_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'ТТГ' },
            { name: 'FprirGaz_text', stroke: '#c4bdb3' },
            { name: 'TTG_text', stroke: '#000' },
          ]
        },
        helper2D: [
          { x: 18.40, y: 73, w: 0, h: 0.0, id: 'ws3_ttg_text_btn' },
          { x: 18.40, y: 73, w: 8, h: 5.5, id: 'ws3_ttg2_text_btn' },
        ]
      },
      startTime: timeDiff + 107.1,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_ttg2_text_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
            { name: 'FprirGaz_text', stroke: '#000' },
            { name: 'TTG_text', stroke: '#c4bdb3' },
          ]
        },
        helper2D: [
          { x: 18.40, y: 73, w: 8, h: 5.5, id: 'ws3_ttg_text_btn' },
          { x: 18.40, y: 73, w: 0, h: 0.0, id: 'ws3_ttg2_text_btn' },
        ]
      },
      startTime: timeDiff + 107.2,
      human: true,
    },
    {
      action: {
        target2D: 'pzs_close_btn',
      },
      startTime: timeDiff + 107.3,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 107.4,
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
      startTime: timeDiff + 107.41,
    },
    {
      action: {
        target3D: 'dpVerh', // dP_verh
        color: 'green',
        number: '00.22',
      },
      startTime: timeDiff + 107.42,
    },
    {
      action: {
        target3D: 'dpObsh', // dP_obsh_tryba
        color: 'green',
        number: '01.74',
      },
      startTime: timeDiff + 107.42,
    },
    {
      action: {
        target3D: 'dpNiz', // dP_nish_tryba
        color: 'green',
        number: '01.53',
      },
      startTime: timeDiff + 107.42,
    },
    {
      action: {
        target3D: 'pGorDut', // dP_nish_tryba
        color: 'green',
        number: '04.07',
      },
      startTime: timeDiff + 107.42,
    },
    {
      action: {
        target3D: 'tGorDut', // t_gor_dut
        color: 'green',
        number: '1209',
      },
      startTime: timeDiff + 107.42,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd', // P_Os_szat_voz
        color: 'green',
        number: '08.42',
      },
      startTime: timeDiff + 107.42,
    },
    {
      action: {
        target3D: 'fParaUvlajDutReg', // par_yvlaz
        color: 'green',
        number: '00.00',
      },
      startTime: timeDiff + 107.42,
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
      startTime: timeDiff + 107.5,
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
      startTime: timeDiff + 107.6,
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
      startTime: timeDiff + 107.7,
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
      startTime: timeDiff + 107.8,
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
      startTime: timeDiff + 107.9,
      human: true,
    },
    {
      action: {
        target2D: 'vz_ok',
        window2D: {
          elements: [
            { name: 'TTG_zadanie', text: '2200' },
            { name: 'ws3_ttg_number', text: '2200' },
          ]
        }
      },
      startTime: timeDiff + 108,
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
      startTime: timeDiff + 108.01,
    },
    {
      action: {
        target3D: 'dpVerh', // dP_verh
        color: 'green',
        number: '00.22',
      },
      startTime: timeDiff + 108.02,
    },
    {
      action: {
        target3D: 'dpObsh', // dP_obsh_tryba
        color: 'green',
        number: '01.74',
      },
      startTime: timeDiff + 108.02,
    },
    {
      action: {
        target3D: 'dpNiz', // dP_nish_tryba
        color: 'green',
        number: '01.53',
      },
      startTime: timeDiff + 108.02,
    },
    {
      action: {
        target3D: 'pGorDut', // P_2
        color: 'green',
        number: '04.07',
      },
      startTime: timeDiff + 108.02,
    },
    {
      action: {
        target3D: 'tGorDut', // t_gor_dut
        color: 'green',
        number: '1209',
      },
      startTime: timeDiff + 108.02,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd', // P_Os_szat_voz
        color: 'green',
        number: '08.43',
      },
      startTime: timeDiff + 108.02,
    },
    {
      action: {
        target3D: 'fParaUvlajDutReg', // par_yvlaz
        color: 'green',
        number: '00.34',
      },
      startTime: timeDiff + 108.02,
    },
    ////--------------------------------3.2
    {
      action: {
        target2D: 't_b_302_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'расход ПГ' },
          ]
        },
        helper2D: [
          { x: 18.40, y: 73, w: 8, h: 5.5, id: 'ws3_ttg_text_btn' },
          { x: 18.40, y: 73, w: 0, h: 0.0, id: 'ws3_ttg2_text_btn' },
        ]
      },
      startTime: timeDiff + 108.1,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_ttg_text_btn',
        window2D: {
          elements: [
            { name: 'ws3_ttg', text: 'ТТГ' },
            { name: 'FprirGaz_text', stroke: '#c4bdb3' }, //  #000  //  #c4bdb3
            { name: 'TTG_text', stroke: '#000' },
          ]
        },
      },
      startTime: timeDiff + 108.2,
      human: true,
    },
    {
      action: {
        target2D: 'ws3_close_btn',
      },
      startTime: timeDiff + 108.3,
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
      startTime: timeDiff + 108.31,
    },
    {
      action: {
        target3D: 'dpVerh', // dP_verh
        color: 'green',
        number: '00.22',
      },
      startTime: timeDiff + 108.32,
    },
    {
      action: {
        target3D: 'dpObsh', // dP_obsh_tryba
        color: 'green',
        number: '01.74',
      },
      startTime: timeDiff + 108.32,
    },
    {
      action: {
        target3D: 'dpNiz', // dP_nish_tryba
        color: 'green',
        number: '01.53',
      },
      startTime: timeDiff + 108.32,
    },
    {
      action: {
        target3D: 'pGorDut', // P_2
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 108.32,
    },
    {
      action: {
        target3D: 'tGorDut', // t_gor_dut
        color: 'green',
        number: '1209',
      },
      startTime: timeDiff + 108.32,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd', // P_Os_szat_voz
        color: 'green',
        number: '08.38',
      },
      startTime: timeDiff + 108.32,
    },
    {
      action: {
        target3D: 'fParaUvlajDutReg', // par_yvlaz
        color: 'green',
        number: '00.34',
      },
      startTime: timeDiff + 108.32,
    },
    ////--------------------------------4       //20//-new
    {
      text: 'Выпуск чугуна из лёток, продвука, понижения давления температуры.',
      sender: 'Система',
      audio: 'tts-12',
      lifeTime: '08:15:00',
      startTime: timeDiff + 109,
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
      startTime: timeDiff + 110,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'L2sqr', color: '#fff' },
          ]
        }
      },
      startTime: timeDiff + 111,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'L2sqr', color: '#F7F700' },
          ]
        }
      },
      startTime: timeDiff + 112,
    },
    {
      multi: [
        {
          action: {
            target2D: 'F_L2',
          },
        },
        {
          action: {
            target2D: 'F_L3',
          },
        },
      ],
      startTime: timeDiff + 113,
      human: true,
    },
    // 1.3 
    ////--------------------------------1----------------------------------------//21//-new
    {
      chapterText: 'Закрытие кислорода на обогащение дутья и природного газа на печь.',
      sender: 'Система',
      lifeTime: '08:30:00',
      startTime: timeDiff + 113.5,
    },
    {
      scenarioText: 'По команде мастера печи, до окончания выпуска чугуна, закрыть кислород на обогащение дутья.',
      sender: 'Система',
      audio: 'tts-13',
      startTime: timeDiff + 114,
    },
    ////--------------------------------//22//-new
    {
      text: 'По рации мастер печи сообщил команду газовщикам.',
      sender: 'Система',
      startTime: timeDiff + 121,
    },
    {
      text: 'Закрыть кислород на обогащения дутья и оставить 20000.',
      sender: 'Мастер печи',
      audio: 'tts-vo2',
      startTime: timeDiff + 122,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 126,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046'
      },
      startTime: timeDiff + 127,
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
            { name: 'M_t1_4', text: 'Работа', color: '#06FF06' },
            { name: 'PV3', text: '0,00' },
            { name: 'SP3', text: '0,00' },
            { name: 'PV3_1', text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            { name: 'PV4', text: '11,07' },
            { name: 'SP4', text: '10,00' },
            { name: 'PV4_1', text: '11,64' },
            { name: 'M_t3_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'M_t4_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'vnk_2', color: '#ff1e00' }, // задник стрелки
            { name: 'Tkyp_2', text: '1326' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_2', text: 'Нагрев' },
            { name: 'vnk2_stripes', color: '#ff1e00' },
            { name: 'VNK2_Fr', text: '111915' },
            { name: 'VNK2_Fb', text: '104399' },
            { name: 'Tdym_2', text: '233' },
            { name: '5PI_08', text: '386' },
            { name: '5PI_08', text: '16' },
            { name: 'FI_03', text: '934' },
            { name: 'vnk1_fire', opacity: '1' }, // стрелка
            { name: 'vnk_1', color: '#ff1e00' }, // задник стрелки
            { name: 'Tkyp_1', text: '1322' },
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Нагрев' },
            { name: 'vnk1_stripes', color: '#ff1e00' },
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
            { name: 'spvg_t1_4', text: 'Работа', color: '#06FF06' },
            { name: 'vnk_spvg_B3_1', color: '#06FF06' },
            { name: 'vnk_spvg_B2_1', color: '#06FF06' },
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
            { name: 'VNK3_status_1_DP', text: 'Цикл' },
            { name: 'VNK2_status_1_DP', text: 'Цикл' },
            { name: 'VNK1_status_1_DP', text: 'Цикл' },
          ]
        }
      },
      startTime: timeDiff + 127.1,
    },
    {
      text: 'Хорошо. Выполняю.',
      sender: 'Газовщик',
      audio: 'tts-vo3',
      startTime: timeDiff + 128,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 130,
    },
    ////--------------------------------2//23//-new
    {
      text: 'Перекидка клапанов в автоматическом режиме.',
      sender: 'Система',
      audio: 'tts-14',
      startTime: timeDiff + 131,
    },
    // Ilay vnk1 + main
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '8,96' },
            { name: 'PS_10', color: '#06FF06' },
            { name: '1FI_03', text: '0' },
            { name: '1FI_01', text: '110037' },
            { name: '115_SPW', text: '433,0' },
            { name: '115_SPT', text: '108,0' },
            { name: '115_KP_2', text: '500,0' },
            { name: '115_GAZ', text: '112221' },
            { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            { name: '123_PV_2', text: '1221,1' },
            { name: '123_SP_2', text: '1200,0' },
            { name: '123_KP_2', text: '28,54' },
            { name: '123_GAZ', text: '0,00' },
            { name: 'V1_t2_4', text: 'Работа', color: '#06FF06' },
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
            { name: '1PS_03', color: '#06FF06' },
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
            { name: 'vnk_1', color: '#ff1e00' }, // задник стрелки
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Нагрев' },
            { name: 'vnk1_stripes', color: '#ff1e00' },
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
            { name: 'circle_nagrev', color: '#06FF06' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            //main
            { name: '7PI_12', text: '17,60' },
            { name: 'ramka_7PI_12', color: '#ffff0f' },
            { name: '7FI_05', text: '103147' },
            { name: '7TI_40', text: '11' },
            { name: '5QI_01_01', text: '10' },
            { name: '5QI_01_02', text: '77' },
            { name: 'M_t1_4', text: 'Работа', color: '#06FF06' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            { name: 'M_t3_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'M_t4_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'vnk_2', color: '#ff1e00' }, // задник стрелки
            { name: 'Tkyp_2', text: '1326' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_2', text: 'Нагрев' },
            { name: 'vnk2_stripes', color: '#ff1e00' },
            { name: 'VNK2_Fr', text: '111915' },
            { name: 'VNK2_Fb', text: '104399' },
            { name: 'Tdym_2', text: '233' },
            { name: '5PI_08', text: '386' },
            { name: '5PI_08', text: '16' },
            { name: 'FI_03', text: '934' },
            { name: 'vnk1_fire', opacity: '1' }, // стрелка
            { name: 'vnk_1', color: '#ff1e00' }, // задник стрелки
            { name: 'Tkyp_1', text: '1322' },
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Нагрев' },
            { name: 'vnk1_stripes', color: '#ff1e00' },
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
      startTime: timeDiff + 131.01,
    },
    {
      action: {
        target2D: 'perekidta_btn',
        window2D: {
          elements: [
            { name: 'vb_otkr_klap2_rect', color: '#e3d4ce' },
            { name: 'kl_11_rect', color: '#06FF06' },
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
      startTime: timeDiff + 134,
      human: true,
    },
    {
      action: {
        target2D: 'nagrev_otd2_btn',
      },
      startTime: timeDiff + 134.1,
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
      startTime: timeDiff + 134.2,
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
            { name: 'nagrev_otd_2_rect', color: '#06FF06' },
          ]
        },
      },
      startTime: timeDiff + 134.3,
      human: true,
    },
    //1
    {
      action: {
        window2D: {
          elements: [
            { name: '1PS_03_square', color: '#ff1e00' },
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
      startTime: timeDiff + 135,
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
            { name: 'kl_132', color: '#ff1e00' },
            { name: 'rect_132_2', color: '#000' },
            { name: 'rect_132_2', position: { x: -3 } },
            // Table
            { name: 'text_132', y: 565, text: 'Закрыт' },
            { name: 'text_116', y: 565 },
            { name: 'text_124', y: 565 },
            { name: 'text_113', y: 565 },
            { name: 'text_134', y: 565 },
            { name: 'text_117', y: 565 },
            { name: 'text_111', y: 565 },
            { name: 'text_112', y: 565 },
            { name: 'rect_132', position: { y: 81 }, color: '#ff1e00' },
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
      startTime: timeDiff + 136,
    },
    //3
    {
      action: {
        window2D: {
          elements: [
            { name: 'vnk1_red_Arrow', opacity: '0' },
            { name: 'vnk1_red_Arrow_border', opacity: '0' },
            { name: 'kl_132', color: '#ff1e00' },
            { name: 'kl_132_l', color: '#ff1e00' },
            { name: 'kl_127', color: '#b5b3b6' },
            { name: '7PI_13', text: '9,80' },
            // Table
            { name: 'text_132', y: 605 },
            { name: 'text_116', y: 605, text: 'Закрыт' },
            { name: 'text_124', y: 605 },
            { name: 'text_113', y: 605 },
            { name: 'text_134', y: 605 },
            { name: 'text_117', y: 605 },
            { name: 'text_111', y: 605 },
            { name: 'text_112', y: 605 },
            { name: 'rect_132', position: { y: 123 } },
            { name: 'rect_116', position: { y: 123 }, color: '#ff1e00' },
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
      startTime: timeDiff + 137,
    },
    //4
    {
      action: {
        window2D: {
          elements: [
            { name: 'vnk1_red_Arrow', opacity: 1 },
            { name: 'vnk1_red_Arrow_border', opacity: 1 },
            { name: 'vnk1_red_Arrow', color: '#ffffff' },
            { name: '1PS_05_square', color: '#ff1e00' },
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
      startTime: timeDiff + 138,
    },
    //5
    {
      action: {
        window2D: {
          elements: [
            { name: '1PI_02', text: '0,17' },
            { name: 'vnk1_red_Arrow', opacity: '0' },
            { name: 'vnk1_red_Arrow_border', opacity: '0' },
            { name: 'vn_116', color: '#ff1e00' },
            { name: 'vn_116_l', color: '#ff1e00' },
            { name: 'vnk_1', color: '#ffffff' },
            { name: '7PI_13', text: '10,78' },
            // Table
            { name: 'text_132', y: 685 },
            { name: 'text_116', y: 685 },
            { name: 'text_124', y: 685, text: 'Открыт' },
            { name: 'text_113', y: 685 },
            { name: 'text_134', y: 685 },
            { name: 'text_117', y: 685 },
            { name: 'text_111', y: 685 },
            { name: 'text_112', y: 685 },
            { name: 'rect_132', position: { y: 205 } },
            { name: 'rect_116', position: { y: 205 } },
            { name: 'rect_124', position: { y: 205 }, color: '#06f322' },
            { name: 'rect_113', position: { y: 205 } },
            { name: 'rect_134', position: { y: 205 } },
            { name: 'rect_117', position: { y: 205 } },
            { name: 'rect_111', position: { y: 205 } },
            { name: 'rect_112', position: { y: 205 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 139,
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
      startTime: timeDiff + 140,
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
            { name: 'text_124', y: 765, text: 'Закрыт' },
            { name: 'text_113', y: 765 },
            { name: 'text_134', y: 765 },
            { name: 'text_117', y: 765 },
            { name: 'text_111', y: 765 },
            { name: 'text_112', y: 765 },
            { name: 'rect_132', position: { y: 286 } },
            { name: 'rect_116', position: { y: 286 } },
            { name: 'rect_124', position: { y: 286 }, color: '#ff1e00' },
            { name: 'rect_113', position: { y: 286 } },
            { name: 'rect_134', position: { y: 286 } },
            { name: 'rect_117', position: { y: 286 } },
            { name: 'rect_111', position: { y: 286 } },
            { name: 'rect_112', position: { y: 286 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 141,
    },
    //8
    {
      action: {
        window2D: {
          elements: [
            { name: '1PI_02', text: '0' },
            { name: 'vn_134', color: '#ff1e00' },
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
      startTime: timeDiff + 142,
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
            { name: 'text_113', y: 845, text: 'Закрыт' },
            { name: 'text_134', y: 845 },
            { name: 'text_117', y: 845 },
            { name: 'text_111', y: 845 },
            { name: 'text_112', y: 845 },
            { name: 'rect_132', position: { y: 368 } },
            { name: 'rect_116', position: { y: 368 } },
            { name: 'rect_124', position: { y: 368 } },
            { name: 'rect_113', position: { y: 368 }, color: '#ff1e00' },
            { name: 'rect_134', position: { y: 368 } },
            { name: 'rect_117', position: { y: 368 } },
            { name: 'rect_111', position: { y: 368 } },
            { name: 'rect_112', position: { y: 368 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 143,
    },
    //10
    {
      action: {
        window2D: {
          elements: [
            { name: 'vn_117', color: '#ff1e00' },
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
      startTime: timeDiff + 144,
    },
    //11
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_134', color: '#ff1e00' },
            // Table
            { name: 'text_132', y: 925 },
            { name: 'text_116', y: 925 },
            { name: 'text_124', y: 925 },
            { name: 'text_113', y: 925 },
            { name: 'text_134', y: 925, text: 'Закрыт' },
            { name: 'text_117', y: 925 },
            { name: 'text_111', y: 925 },
            { name: 'text_112', y: 925 },
            { name: 'rect_132', position: { y: 450 } },
            { name: 'rect_116', position: { y: 450 } },
            { name: 'rect_124', position: { y: 450 } },
            { name: 'rect_113', position: { y: 450 } },
            { name: 'rect_134', position: { y: 450 }, color: '#ff1e00' },
            { name: 'rect_117', position: { y: 450 } },
            { name: 'rect_111', position: { y: 450 } },
            { name: 'rect_112', position: { y: 450 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 145,
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
            { name: 'text_117', y: 965, text: 'Закрыт' },
            { name: 'text_111', y: 965 },
            { name: 'text_112', y: 965 },
            { name: 'rect_132', position: { y: 491 } },
            { name: 'rect_116', position: { y: 491 } },
            { name: 'rect_124', position: { y: 491 } },
            { name: 'rect_113', position: { y: 491 } },
            { name: 'rect_134', position: { y: 491 } },
            { name: 'rect_117', position: { y: 491 }, color: '#ff1e00' },
            { name: 'rect_111', position: { y: 491 } },
            { name: 'rect_112', position: { y: 491 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 146,
    },
    //13
    {
      action: {
        window2D: {
          elements: [
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
            { name: 'text_111', y: 1008, text: 'Закрыт' },
            { name: 'text_112', y: 1008 },
            { name: 'rect_132', position: { y: 531 } },
            { name: 'rect_116', position: { y: 531 } },
            { name: 'rect_124', position: { y: 531 } },
            { name: 'rect_113', position: { y: 531 } },
            { name: 'rect_134', position: { y: 531 } },
            { name: 'rect_117', position: { y: 531 } },
            { name: 'rect_111', position: { y: 531 }, color: '#ff1e00' },
            { name: 'rect_112', position: { y: 531 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 147,
    },
    //14
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_140', color: '#06FF06' },
            { name: 'kl_112', color: '#7b828c' },
            { name: '1QI_01', text: '15,61' },
            { name: 'kl_112', color: '#ff1e00' },
            // Table
            { name: 'text_132', y: 1048 },
            { name: 'text_116', y: 1048 },
            { name: 'text_124', y: 1048 },
            { name: 'text_113', y: 1048 },
            { name: 'text_134', y: 1048 },
            { name: 'text_117', y: 1048 },
            { name: 'text_111', y: 1048 },
            { name: 'text_112', y: 1048, text: 'Закрыт' },
            { name: 'rect_132', position: { y: 572 } },
            { name: 'rect_116', position: { y: 572 } },
            { name: 'rect_124', position: { y: 572 } },
            { name: 'rect_113', position: { y: 572 } },
            { name: 'rect_134', position: { y: 572 } },
            { name: 'rect_117', position: { y: 572 } },
            { name: 'rect_111', position: { y: 572 } },
            { name: 'rect_112', position: { y: 572 }, color: '#ff1e00' },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 148,
    },
    //15          
    {
      action: {
        window2D: {
          elements: [
            { name: 'VNK1_status_1', text: 'Циклический' },
            { name: 'VNK1_status_2', text: 'Отделение 2' },
            { name: 'kl_132', color: '#ff1e00' },
            { name: 'kl_116', color: '#ff1e00' },
            { name: 'kl_113', color: '#ff1e00' },
            { name: 'kl_124', color: '#ff1e00' },
            { name: 'kl_134', color: '#ff1e00' },
            { name: 'kl_117', color: '#ff1e00' },
            { name: 'kl_127', color: '#06FF06' },
            { name: 'kl_121', color: '#06FF06' },
            { name: 'kl_140', color: '#06FF06' },
            { name: 'kl_111', color: '#06FF06' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#06FF06' },
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
            { name: 'text_113', y: 1090, text: 'Открыт' },
            { name: 'text_134', y: 1090 },
            { name: 'text_117', y: 1090 },
            { name: 'text_111', y: 1090 },
            { name: 'text_112', y: 1090 },
            { name: 'rect_132', position: { y: 613 } },
            { name: 'rect_116', position: { y: 613 } },
            { name: 'rect_124', position: { y: 613 } },
            { name: 'rect_113', position: { y: 613 }, color: '#06f322' },
            { name: 'rect_134', position: { y: 613 } },
            { name: 'rect_117', position: { y: 613 } },
            { name: 'rect_111', position: { y: 613 } },
            { name: 'rect_112', position: { y: 613 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 149,
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
      startTime: timeDiff + 150,
    },
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
            { name: 'vnk1_stripes', color: '#ff1e00' },
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
            { name: 'circle_otdeleniye_2', color: '#06FF06' },
            //VN
            { name: 'rect_132_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_132', color: '#ff1e00' },
            { name: 'kl_127', color: '#06FF06' },
            { name: 'rect_116_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_116', color: '#ff1e00' },
            { name: '1PS_03', color: '#06FF06' },
            { name: 'kl_121', color: '#ff1e00' },
            { name: 'kl_113', color: '#ff1e00' },
            { name: 'PS_10', color: '#06FF06' },
            { name: 'kl_124', color: '#ff1e00' },
            { name: 'kl_134', color: '#ff1e00' },
            { name: '1PS_05', color: '#ff1e00' },
            { name: 'kl_140', color: '#06FF06' },
            { name: 'kl_117', color: '#ff1e00' },
            { name: 'kl_119', color: '#ff1e00' },
            { name: 'kl_111', color: '#ff1e00' },
            { name: 'kl_112', color: '#06FF06' },
            { name: 'kl_112', color: '#ff1e00' },
            { name: 'kl_136a', color: '#ff1e00' },
            { name: 'kl_118a', color: '#ff1e00' },
            { name: 'kl_118', color: '#ff1e00' },
            { name: 'rashod_azota_fon', color: '#1CCC3D' },
            { name: 'na_Ugle_115', color: '#CF25FB' },
            { name: 'na_Ugle_123', color: '#CF25FB' },
          ]
        }
      },
      startTime: timeDiff + 150.01,
    },
    {  // O_p_n_na_k_na-o_2_na_VNK close
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 150.2,
      human: true,
    },
    // Ilay F vnk1 + main

    // {  // O_p_n_na_k_p_na_VNK close   
    //   action: {
    //     target2D: 'perekidta_exit_btn',
    //   },
    // startTime: timeDiff + 150.2,
    //   human: true,
    // },
    ////--------------------------------3-------------------------------------//24//-new
    {
      text: 'Отделить воздухонагреватель ВНК №1.',
      sender: 'Система',
      audio: 'tts-15',
      startTime: timeDiff + 151,
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
    //         { name: 'kl_11_rect', color: '#06FF06' },
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
    // startTime: timeDiff + 155,
    //   human: true,
    // },
    {
      action: {
        target2D: 'otdel2_otdel_btn',
        window2D: {
          elements: [
            { name: 'rect_ish_c5', color: '#ff1e00' },
          ]
        },
      },
      startTime: timeDiff + 155.1,
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
      startTime: timeDiff + 155.11,
    },
    {
      action: {
        target2D: 'otdel2_pusk_btn',
        window2D: {
          elements: [
            { name: 'title_open_vn', text: 'Пуск' },
            { name: 'rect_ish_c5', color: '#ff1e00' },
          ]
        },
        helper2D: [
          { x: 39.4, y: 93.9, w: 3.2, h: 2.4, id: 'close_vn' },
          { x: 35.8, y: 93.9, w: 3.2, h: 2.4, id: 'open_vn1' },  //  wind 2
        ]
      },
      startTime: timeDiff + 155.2,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'otd2_otd_rect', color: '#06FF06' },
            // { name: 'text_ish_c4', y: 297.5 },   // start 237.5
            // { name: 'text_ish_c5', y: 297.5 },   // start 237.5
            // { name: 'text_ish_c6', y: 297.5 },   // start 237.5
            // { name: 'rect_ish_c4', position: { y: 60 } },
            // { name: 'rect_ish_c5', position: { y: 60 } },
            // { name: 'rect_ish_c6', position: { y: 60 } },
          ]
        }
      },
      startTime: timeDiff + 155.3,
      human: true,
    },
    {  // win_otdel2_na_vnk CLOSE
      action: {
        target2D: 'otdel2_close_btn',
      },
      startTime: timeDiff + 155.4,
      human: true,
    },
    {  // O_p_n_na_k_p_na_VNK CLOSE
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 155.5,
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
            { name: 'rashod_azota_fon', color: '#808080' },
            { name: 'na_Ugle_115', color: '#808080' },
            { name: 'na_Ugle_123', color: '#808080' },
          ]
        }
      },
      startTime: timeDiff + 156,
    }, {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '9,88' },
            { name: '1FI_01', text: '0' },
            { name: '1PI_02', text: '0,00' },
            { name: '1TI_43', text: '47' },
            { name: 'kl_111', color: '#ff1e00' },
            { name: '1TI_28_1', text: '380' },
            { name: '1TI_28_2', text: '384' },
          ]
        }
      },
      startTime: timeDiff + 157,
    },
    //  {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'kl_111', color: '#e6e6e6' },
    //       ]
    //     }
    //   },
    //   startTime: timeDiff + 158,
    // }, {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'kl_111', color: '#ff1e00' },
    //       ]
    //     }
    //   },
    //   startTime: timeDiff + 159,
    // }, {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'kl_111', color: '#e6e6e6' },
    //       ]
    //     }
    //   },
    //   startTime: timeDiff + 160,
    // }, 
    {
      action: {
        window2D: {
          elements: [
            // { name: 'kl_111', color: '#ff1e00' },
            { name: 'vnk_1', color: '#A0AAB9' },
            { name: 'vnk1_red_Arrow', opacity: '0' },
          ]
        }
      },
      startTime: timeDiff + 158,
    },
    // {
    //   action: {
    //     window2D: {
    //       elements: [
    //         { name: 'rect_132', position: { y: 40 } },
    //         { name: 'rect_116', position: { y: 40 } },
    //         { name: 'rect_124', position: { y: 40 } },
    //         { name: 'rect_113', position: { y: 40 } },
    //         { name: 'rect_134', position: { y: 40 } },
    //         { name: 'rect_117', position: { y: 40 } },
    //         { name: 'rect_111', position: { y: 40 } },
    //         { name: 'rect_112', position: { y: 40 } },
    //       ]
    //     }
    //   },
    //   startTime: timeDiff + 162,
    // },
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
            { name: 'circle_otdeleniye_1', color: '#06FF06' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            //VN
            { name: 'rect_132_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_132', color: '#ff1e00' },
            { name: 'kl_127', color: '#06FF06' },
            { name: 'rect_116_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_116', color: '#ff1e00' },
            { name: '1PS_03', color: '#ff1e00' },
            { name: 'kl_121', color: '#06FF06' },
            { name: 'kl_113', color: '#ff1e00' },
            { name: 'PS_10', color: '#06FF06' },
            { name: 'kl_124', color: '#ff1e00' },
            { name: 'kl_134', color: '#ff1e00' },
            { name: '1PS_05', color: '#ff1e00' },
            { name: 'kl_140', color: '#06FF06' },
            { name: 'kl_117', color: '#ff1e00' },
            { name: 'kl_119', color: '#ff1e00' },
            { name: 'kl_111', color: '#ff1e00' },
            { name: 'kl_112', color: '#ff1e00' },
            { name: 'kl_112', color: '#ff1e00' },
            { name: 'kl_136a', color: '#ff1e00' },
            { name: 'kl_118a', color: '#ff1e00' },
            { name: 'kl_118', color: '#ff1e00' },
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
      startTime: timeDiff + 158.1,
    },
    ////--------------------------------4-------------------------------------//25//-new //
    {
      text: 'Отделить воздухонагреватель ВНК №2.',
      sender: 'Система',
      audio: 'tts-16',
      startTime: timeDiff + 159,
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
            { name: 'rect_124', position: { y: 0 }, color: '#ff1e00' },
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
      startTime: timeDiff + 163,
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
      startTime: timeDiff + 163.1,
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
      startTime: timeDiff + 163.2,
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
            { name: 'nagrev_otd_2_rect', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 163.3,
      human: true,
    },
    //1
    {
      action: {
        window2D: {
          elements: [
            { name: '2PS_03', color: '#ff1e00' },
            { name: '2PS_05', color: '#ff1e00' },
            { name: 'kl215_proc', text: '28' },
            { name: '7PI_13', text: '10,52' },
            { name: '2FI_01', text: '81142' },
            { name: '2PI_02', text: '2,05' },
            { name: '1TI_43', text: '47' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_2', text: 'Нагрев-Отдел.' },
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
            { name: 'VNK2_t2_r', color: '#06FF06' },
            { name: 'VNK2_t3_r', text: 'Работа' },
            { name: 'VNK2_t3_r', color: '#06FF06' },
            { name: 'VNK2_t4_r', text: 'Работа' },
            { name: 'VNK2_t4_r', color: '#06FF06' },
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
      startTime: timeDiff + 164,
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
            { name: 'text_132', y: 565, text: 'Закрыт' },
            { name: 'text_116', y: 565 },
            { name: 'text_124', y: 565 },
            { name: 'text_113', y: 565 },
            { name: 'text_134', y: 565 },
            { name: 'text_117', y: 565 },
            { name: 'text_111', y: 565 },
            { name: 'text_112', y: 565 },
            { name: 'rect_132', position: { y: 81 }, color: '#ff1e00' },
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
      startTime: timeDiff + 165,
    },
    //3
    {
      action: {
        window2D: {
          elements: [
            // Table
            { name: 'text_132', y: 605 },
            { name: 'text_116', y: 605, text: 'Закрыт' },
            { name: 'text_124', y: 605 },
            { name: 'text_113', y: 605 },
            { name: 'text_134', y: 605 },
            { name: 'text_117', y: 605 },
            { name: 'text_111', y: 605 },
            { name: 'text_112', y: 605 },
            { name: 'rect_132', position: { y: 123 } },
            { name: 'rect_116', position: { y: 123 }, color: '#ff1e00' },
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
      startTime: timeDiff + 166,
    },
    //4
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_216', color: '#ff1e00' },
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
      startTime: timeDiff + 167,
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
            { name: 'text_124', y: 685, text: 'Открыт' },
            { name: 'text_113', y: 685 },
            { name: 'text_134', y: 685 },
            { name: 'text_117', y: 685 },
            { name: 'text_111', y: 685 },
            { name: 'text_112', y: 685 },
            { name: 'rect_132', position: { y: 205 } },
            { name: 'rect_116', position: { y: 205 } },
            { name: 'rect_124', position: { y: 205 }, color: '#06f322' },
            { name: 'rect_113', position: { y: 205 } },
            { name: 'rect_134', position: { y: 205 } },
            { name: 'rect_117', position: { y: 205 } },
            { name: 'rect_111', position: { y: 205 } },
            { name: 'rect_112', position: { y: 205 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 168,
    },
    //6
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_227', color: '#06FF06' },
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
      startTime: timeDiff + 169,
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
            { name: 'text_124', y: 765, text: 'Закрыт' },
            { name: 'text_113', y: 765 },
            { name: 'text_134', y: 765 },
            { name: 'text_117', y: 765 },
            { name: 'text_111', y: 765 },
            { name: 'text_112', y: 765 },
            { name: 'rect_132', position: { y: 286 } },
            { name: 'rect_116', position: { y: 286 } },
            { name: 'rect_124', position: { y: 286 }, color: '#ff1e00' },
            { name: 'rect_113', position: { y: 286 } },
            { name: 'rect_134', position: { y: 286 } },
            { name: 'rect_117', position: { y: 286 } },
            { name: 'rect_111', position: { y: 286 } },
            { name: 'rect_112', position: { y: 286 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 170,
    },
    //8
    {
      action: {
        window2D: {
          elements: [
            { name: '2FI_03', text: '1468' },
            { name: 'kl_224', color: '#06FF06' },
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
      startTime: timeDiff + 171,
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
            { name: 'text_113', y: 845, text: 'Закрыт' },
            { name: 'text_134', y: 845 },
            { name: 'text_117', y: 845 },
            { name: 'text_111', y: 845 },
            { name: 'text_112', y: 845 },
            { name: 'rect_132', position: { y: 368 } },
            { name: 'rect_116', position: { y: 368 } },
            { name: 'rect_124', position: { y: 368 } },
            { name: 'rect_113', position: { y: 368 }, color: '#ff1e00' },
            { name: 'rect_134', position: { y: 368 } },
            { name: 'rect_117', position: { y: 368 } },
            { name: 'rect_111', position: { y: 368 } },
            { name: 'rect_112', position: { y: 368 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 172,
    },
    //10
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_224', color: '#ff1e00' },
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
      startTime: timeDiff + 173,
    },
    //11
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_213', color: '#06FF06' },
            { name: 'kl_221', color: '#06FF06' },
            { name: '7PI_13', text: '16,69' },
            { name: '2QI_01', text: '19,47' },
            // Table
            { name: 'text_132', y: 925 },
            { name: 'text_116', y: 925 },
            { name: 'text_124', y: 925 },
            { name: 'text_113', y: 925 },
            { name: 'text_134', y: 925, text: 'Закрыт' },
            { name: 'text_117', y: 925 },
            { name: 'text_111', y: 925 },
            { name: 'text_112', y: 925 },
            { name: 'rect_132', position: { y: 450 } },
            { name: 'rect_116', position: { y: 450 } },
            { name: 'rect_124', position: { y: 450 } },
            { name: 'rect_113', position: { y: 450 } },
            { name: 'rect_134', position: { y: 450 }, color: '#ff1e00' },
            { name: 'rect_117', position: { y: 450 } },
            { name: 'rect_111', position: { y: 450 } },
            { name: 'rect_112', position: { y: 450 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 174,
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
            { name: 'text_117', y: 965, text: 'Закрыт' },
            { name: 'text_111', y: 965 },
            { name: 'text_112', y: 965 },
            { name: 'rect_132', position: { y: 491 } },
            { name: 'rect_116', position: { y: 491 } },
            { name: 'rect_124', position: { y: 491 } },
            { name: 'rect_113', position: { y: 491 } },
            { name: 'rect_134', position: { y: 491 } },
            { name: 'rect_117', position: { y: 491 }, color: '#ff1e00' },
            { name: 'rect_111', position: { y: 491 } },
            { name: 'rect_112', position: { y: 491 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 175,
    },
    //13
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_234', color: '#ff1e00' },
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
            { name: 'text_111', y: 1008, text: 'Закрыт' },
            { name: 'text_112', y: 1008 },
            { name: 'rect_132', position: { y: 531 } },
            { name: 'rect_116', position: { y: 531 } },
            { name: 'rect_124', position: { y: 531 } },
            { name: 'rect_113', position: { y: 531 } },
            { name: 'rect_134', position: { y: 531 } },
            { name: 'rect_117', position: { y: 531 } },
            { name: 'rect_111', position: { y: 531 }, color: '#ff1e00' },
            { name: 'rect_112', position: { y: 531 } },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 176,
    },
    //14
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_240', color: '#06FF06' },
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
            { name: 'text_112', y: 1048, text: 'Закрыт' },
            { name: 'rect_132', position: { y: 572 } },
            { name: 'rect_116', position: { y: 572 } },
            { name: 'rect_124', position: { y: 572 } },
            { name: 'rect_113', position: { y: 572 } },
            { name: 'rect_134', position: { y: 572 } },
            { name: 'rect_117', position: { y: 572 } },
            { name: 'rect_111', position: { y: 572 } },
            { name: 'rect_112', position: { y: 572 }, color: '#ff1e00' },
            // End Table
          ]
        }
      },
      startTime: timeDiff + 177,
    },
    //15          
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_212', color: '#ff1e00' },
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
            { name: 'text_113', y: 1090, text: 'Открыт' },
            { name: 'text_134', y: 1090 },
            { name: 'text_117', y: 1090 },
            { name: 'text_111', y: 1090 },
            { name: 'text_112', y: 1090 },
            { name: 'rect_132', position: { y: 613 } },
            { name: 'rect_116', position: { y: 613 } },
            { name: 'rect_124', position: { y: 613 } },
            { name: 'rect_113', position: { y: 613 }, color: '#06f322' },
            { name: 'rect_134', position: { y: 613 } },
            { name: 'rect_117', position: { y: 613 } },
            { name: 'rect_111', position: { y: 613 } },
            { name: 'rect_112', position: { y: 613 } },
            //  End Table
          ]
        }
      },
      startTime: timeDiff + 178,
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
      startTime: timeDiff + 179,
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
            { name: 'kl_232', color: '#ff1e00' },
            { name: 'kl_227', color: '#06FF06' },
            { name: 'rect_216_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_216', color: '#ff1e00' },
            { name: '2PS_03', color: '#ff1e00' },
            { name: 'kl_221', color: '#ff1e00' },
            { name: 'kl_213', color: '#ff1e00' },
            { name: 'PS_10', color: '#06FF06' },
            { name: 'kl_224', color: '#ff1e00' },
            { name: 'kl_234', color: '#ff1e00' },
            { name: '2PS_05', color: '#ff1e00' },
            { name: 'kl_240', color: '#06FF06' },
            { name: 'kl_217', color: '#ff1e00' },
            { name: 'kl_219', color: '#ff1e00' },
            { name: 'kl_211', color: '#ff1e00' },
            { name: 'kl_212', color: '#06FF06' },
            { name: 'kl_212', color: '#ff1e00' },
            { name: 'kl_236a', color: '#ff1e00' },
            { name: 'kl_218a', color: '#ff1e00' },
            { name: 'kl_218', color: '#ff1e00' },
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
            { name: 'M_t1_4', text: 'Работа', color: '#06FF06' },
            // { name: 'PV3',    text: '0,00' },
            // { name: 'SP3',    text: '0,00' },
            // { name: 'PV3_1',  text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            // { name: 'PV4',    text: '11,07' },
            // { name: 'SP4',    text: '10,00' },
            // { name: 'PV4_1',  text: '11,64' },
            { name: 'M_t3_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'M_t4_4', text: 'Работа', color: '#06FF06' },
            { name: 'VNK2_status_2', text: 'Отделение 2' },
            // { name: 'vybor_signala',  text: '1210' },
            // { name: '5TI_21',         text: '1201' },
            // { name: '5TI_22',         text: '1210' },
            // { name: 'PI_09',          text: '536б65' },
            { name: 'rashod_azota_fon', color: '#1CCC3D' },
            { name: 'na_Ugle_115', color: '#CF25FB' },
            { name: 'na_Ugle_123', color: '#CF25FB' },
          ]
        }
      },
      startTime: timeDiff + 179.01,
    },
    {
      action: {
        target2D: 'pericNagrev_close_btn',
      },
      startTime: timeDiff + 179.1,
      human: true,
    },
    // {  // O_p_n_na_k_p_na_VNK CLOSE
    //   action: {
    //     target2D: 'perekidta_exit_btn',
    //   },
    // startTime: timeDiff + 179.2,
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
    // startTime: timeDiff + 179.3,
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
            { name: 'rect_ish_c4', color: '#ff1e00', position: { y: 0 } },
            { name: 'rect_ish_c5', color: '#ff1e00', position: { y: 0 } },
            { name: 'rect_ish_c6', color: '#ff1e00', position: { y: 0 } },
          ]
        }
      },
      startTime: timeDiff + 179.4,
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
          { x: 39.4, y: 93.9, w: 3.2, h: 2.4, id: 'close_vn' },
          { x: 35.8, y: 93.9, w: 3.2, h: 2.4, id: 'open_vn1' },  //  wind 2
        ]
      },
      startTime: timeDiff + 179.5,
      human: true,
    },
    {  // wind 2  ok
      action: {
        target2D: 'open_vn1',
        window2D: {
          elements: [
            { name: 'otd2_otd_rect', color: '#06FF06' },
            // { name: 'text_ish_c4', y: 297.5 },   // start 237.5
            // { name: 'text_ish_c5', y: 297.5 },   // start 237.5
            // { name: 'text_ish_c6', y: 297.5 },   // start 237.5
            // { name: 'rect_ish_c4', position: { y: 60 } },
            // { name: 'rect_ish_c5', position: { y: 60 } },
            // { name: 'rect_ish_c6', position: { y: 60 } },
          ]
        }
      },
      startTime: timeDiff + 179.6,
      human: true,
    },
    {
      action: {
        target2D: 'otdel2_close_btn',
        window2D: {
          elements: []
        }
      },
      startTime: timeDiff + 179.7,
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
      startTime: timeDiff + 180,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'nagrev_otd_2_rect', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 181,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'avarin_otd_rect', color: '#e6e6e6' },
          ]
        }
      },
      startTime: timeDiff + 182,
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
      startTime: timeDiff + 182.1,
    },
    {
      action: {
        target2D: 'perekidta_exit_btn',
      },
      startTime: timeDiff + 182,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#ff1e00' },
            { name: '2QI_01', text: '15,40' },
            { name: '7PI_13', text: '20,19' },
            { name: '2TI_43', text: '48' },
            { name: '2TI_02', text: '1226' },
            { name: '2TI_03', text: '1185' },
            { name: '2TI_04', text: '1102' },
          ]
        }
      },
      startTime: timeDiff + 182.2,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#7b828c' },
            { name: '2QI_01', text: '15,39' },
          ]
        }
      },
      startTime: timeDiff + 182.3,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_211', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 182.4,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#06FF06' },
            { name: 'red_back_underArrow', color: '#99A0AA' },
            { name: 'VNK2_status_1', text: 'Циклический' },
            { name: 'VNK2_status_1', text: 'Отделение' },
            { name: '2QI_01', text: '15,36' },
          ]
        }
      },
      startTime: timeDiff + 182.6,
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
            { name: 'kl_232', color: '#ff1e00' },
            { name: 'kl_227', color: '#06FF06' },
            { name: 'rect_216_2', position: { x: -3 }, color: '#000' },
            { name: 'kl_216', color: '#ff1e00' },
            { name: '2PS_03', color: '#ff1e00' },
            { name: 'kl_221', color: '#ff1e00' },
            { name: 'kl_213', color: '#ff1e00' },
            { name: 'PS_10', color: '#06FF06' },
            { name: 'kl_224', color: '#ff1e00' },
            { name: 'kl_234', color: '#ff1e00' },
            { name: '2PS_05', color: '#ff1e00' },
            { name: 'kl_240', color: '#06FF06' },
            { name: 'kl_217', color: '#ff1e00' },
            { name: 'kl_219', color: '#ff1e00' },
            { name: 'kl_211', color: '#ff1e00' },
            { name: 'kl_212', color: '#06FF06' },
            { name: 'kl_212', color: '#ff1e00' },
            { name: 'kl_236a', color: '#ff1e00' },
            { name: 'kl_218a', color: '#ff1e00' },
            { name: 'kl_218', color: '#ff1e00' },
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
            { name: 'M_t1_4', text: 'Работа', color: '#06FF06' },
            // { name: 'PV3',    text: '0,00' },
            // { name: 'SP3',    text: '0,00' },
            // { name: 'PV3_1',  text: '0,00' },
            { name: 'M_t2_4', text: 'Соглас', color: '#000' },
            // { name: 'PV4',    text: '11,07' },
            // { name: 'SP4',    text: '10,00' },
            // { name: 'PV4_1',  text: '11,64' },
            { name: 'M_t3_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'M_t4_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'spvg_t1_4', text: 'Работа', color: '#06FF06' },
            { name: 'vnk_spvg_B3_1', color: '#06FF06' },
            { name: 'vnk_spvg_B2_1', color: '#06FF06' },
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
      startTime: timeDiff + 183.5,
    },
    ///--------------------------------//26//
    {
      text: 'ВНК №1, ВНК №2 отделены, а ВНК №3 на дутье.',
      sender: 'Система',
      audio: 'tts-17',
      lifeTime: '08:45:00',
      startTime: timeDiff + 184,
    },
    ///--------------------------------//27//-new
    {
      scenarioText: 'Дать команду дежурному водопроводчику на закрытие природного газа на печь задвижками на подводе газа к фурмам.',
      sender: 'Система',
      audio: 'tts-18',
      startTime: timeDiff + 191,
    },
    ////--------------------------------1---------------------------------------- РАЦИЯ //28//-new
    {
      text: 'Сообщить по рации дежурному водопроводчику.',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 199,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 199.1,
      human: true,
    },
    {
      text: 'Закрыть природный газ на фурмах.',
      sender: 'Газовщик',
      audio: 'tts-vo4',
      startTime: timeDiff + 200,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 203.1,
    },
    {
      text: 'Понял, приступаю.',
      sender: 'Дежурный водопроводчик',
      audio: 'tts-vo5',
      startTime: timeDiff + 204,
    },
    // ilay 3d - s
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    },
    {
      action: {
        target3D: 'Rectangle113',
        material: 'off',
      },
      startTime: timeDiff + 206.53,
    },
    {
      action: {
        target3D: 'Rectangle112',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 206.53,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle060',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    },
    // {
    //   action: {
    //     target3D: 'Rectangle080', 
    //     material: 'ButtonLightOn',
    //   },
    // startTime: timeDiff + 206.53,
    // },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle084',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle055',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle063',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle114',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle044',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    },
    {
      action: {
        target3D: 'Rectangle039',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle041',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle029',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle031',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle049',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle051',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle034',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle036',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    }, {
      action: {
        target3D: 'Rectangle096',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.53,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '01.94'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '002.5'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '037.8'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0080'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '009.9'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '023.1'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '015.0'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0104'
      },
      startTime: timeDiff + 206.54,
    }, {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.05'
      },
      startTime: timeDiff + 206.54,
    },
    {
      action: {
        target3D: 'Handle_013',
        rotation: { y: 0.785398 }
      },
      startTime: timeDiff + 206.55,
    }, {
      action: {
        target3D: 'Handle_014',
        rotation: { y: 0.785398 }
      },
      startTime: timeDiff + 206.55,
    },
    ///------ ep2
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.904'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.182'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.541'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.200'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5711.'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.516'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.10'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.10'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 206.56,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0154.'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0168.'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0163.'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '07.94'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1109.'
      },
      startTime: timeDiff + 206.56,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.13'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.60'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.281'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.3'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.17'
      },
      startTime: timeDiff + 206.56,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.303'
      },
      startTime: timeDiff + 206.56,
    },
    {
      action: {
        target3D: 'fPrirodGazReg', // l
        color: 'red',
        number: '028.5'
      },
      startTime: timeDiff + 206.57,
    }, {
      action: {
        target3D: 'fParaUvlajDutReg', // r
        color: 'red',
        number: '000.8'
      },
      startTime: timeDiff + 206.57,
    },
    ///----
    {
      action: {
        target3D: 'Lamp_Red_007',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 206.58,
    }, {
      action: {
        target3D: 'Lamp_Red_006',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 206.58,
    }, {
      action: {
        target3D: 'Lamp_Red_005',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 206.58,
    }, {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Red_Lamp_Off',
      },
      startTime: timeDiff + 206.58,
    }, {
      action: {
        target3D: 'Lamp_Green_023',
        material: 'Green_Lamp_On',
      },
      startTime: timeDiff + 206.58,
    },
    {
      action: {
        target3D: 'Lamp_Red_008',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 206.58,
    }, {
      action: {
        target3D: 'Lamp_Red_003',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 206.58,
    }, {
      action: {
        target3D: 'Lamp_Red_002',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 206.58,
    }, {
      action: {
        target3D: 'Lamp_Red_009',
        material: 'Red_Lamp_On',
      },
      startTime: timeDiff + 206.58,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle045',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle044',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle082',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle081',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle080',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 206.59,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 206.59,
    },
    ////--------------------------------2----------------------------------------//29//-new
    {
      text: 'Перевести клапан 721 в режим управления «Дистанция»',
      sender: 'Система',
      audio: 'tts-19',
      startTime: timeDiff + 207,
    },
    {
      action: {
        target3D: 'Handle_018',
        rotation: { y: 1.571 },
      },
      duration: 0.15,
      startTime: timeDiff + 208,
      human: true,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.805'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.202'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.601'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.243'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5748.'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.451'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.17'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.27'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 208.1,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0155.'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0163.'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0164.'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.90'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1209.'
      },
      startTime: timeDiff + 208.1,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.60'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.293'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.2'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.17'
      },
      startTime: timeDiff + 208.1,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.285'
      },
      startTime: timeDiff + 208.1,
    },
    ////--------------------------------3----------------------------------------//30//-new
    {
      audio: 'tts-20',
      text: 'Перевести атмосферные клапана в режим управления «Дистанция»',
      sender: 'Система',
      startTime: timeDiff + 209,
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
      startTime: timeDiff + 217,
      human: true,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.823'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.203'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.565'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.209'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5677.'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.432'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.20'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.29'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 217.1,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0156.'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0163.'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0165.'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.94'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1210.'
      },
      startTime: timeDiff + 217.1,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.14'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.60'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.294'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.2'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.16'
      },
      startTime: timeDiff + 217.1,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.280'
      },
      startTime: timeDiff + 217.1,
    },
    ////--------------------------------4----------------------------------------//31//-new
    {
      text: 'Уменьшить значение параметра на регуляторе природного газа.',
      audio: 'tts-21',
      startTime: timeDiff + 218,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 221.1,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '024.5'
      },
      startTime: timeDiff + 221.11,
    },
    {
      action: {
        target3D: 'Clone_4_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 221.12,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 221.5,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '020.0'
      },
      startTime: timeDiff + 221.51,
    },
    {
      action: {
        target3D: 'Clone_3_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 221.52,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.788'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.192'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.570'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.226'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5715.'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.425'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.20'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.29'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 221.53,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0156.'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0162.'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0165.'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '07.91'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1209.'
      },
      startTime: timeDiff + 221.53,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.15'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.15'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.68'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.293'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.2'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.16'
      },
      startTime: timeDiff + 221.53,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.278'
      },
      startTime: timeDiff + 221.53,
    },
    {
      action: {
        target3D: 'downBtnFPrirGaza_highlight',
      },
      startTime: timeDiff + 222,
      human: true,
    },
    {
      action: {
        target3D: 'fPrirodGazReg',
        color: 'red',
        number: '017.0'
      },
      startTime: timeDiff + 222.1,
    },
    {
      action: {
        target3D: 'Clone_2_progress bar142',
        material: 'Unic_progress bar_off'
      },
      startTime: timeDiff + 222.2,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.727'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.193'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.1614'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.262'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '2800.'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.404'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.20'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.31'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 222.21,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0157.'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0161.'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0165.'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0150.'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.83'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.40'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1210.'
      },
      startTime: timeDiff + 222.21,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.13'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.13'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.68'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.15'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.301'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '052.2'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.16'
      },
      startTime: timeDiff + 222.21,
    }, {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '1.170'
      },
      startTime: timeDiff + 222.21,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '157.8',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '09.12',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '014.4',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '01.04',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.16',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle045',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle044',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle082',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle081',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle080',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 222.22,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 222.22,
    },
    ////--------------------------------5----------------------------------------//32//-new
    {
      text: 'Водопроводчик по рации сообщает о выполненных своих операциях.',
      sender: 'Система',
      startTime: timeDiff + 223,
    },
    {
      audio: 'tts-vo6',
      text: 'Газ по фурмам закрыт',
      sender: 'Дежурный водопроводчик',
      startTime: timeDiff + 223.1,
    },
    ////--------------------------------6----------------------------------------//33//-new
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 225.5,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 228,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'poloska_1_1', opacity: '0' },
            { name: 'poloska_1_2', opacity: '0' },
            { name: 'poloska_1_3', opacity: '0' },
            { name: 'poloska_1_4', opacity: '0' },
            { name: 'poloska_1_5', opacity: '0' },
            { name: 'poloska_1_6', opacity: '0' },
            { name: 'poloska_1_7', opacity: '0' },
            { name: 'poloska_1_8', opacity: '0' },
            { name: 'poloska_1_9', opacity: '0' },
            { name: 'poloska_1_10', opacity: '0' },
            { name: 'poloska_1_11', opacity: '0' },
            { name: 'poloska_1_12', opacity: '0' },
            { name: 'poloska_1_13', opacity: '0' },
            { name: 'poloska_1_14', opacity: '0' },
            { name: 'poloska_1_15', opacity: '0' },
            { name: 'poloska_1_16', opacity: '0' },
            { name: 'poloska_1_17', opacity: '0' },
            { name: 'poloska_1_18', opacity: '0' },
            { name: 'poloska_1_19', opacity: '0' },
            { name: 'poloska_1_20', opacity: '0' },
            { name: 'poloska_1_21', opacity: '0' },
            { name: 'poloska_1_22', opacity: '0' },
            { name: 'poloska_1_23', opacity: '0' },
            { name: 'poloska_1_23_1', opacity: '0' },
            { name: 'poloska_1_24', opacity: '0' },
            { name: 'poloska_1_25', opacity: '0' },
            { name: 'poloska_1_26', opacity: '0' },
            { name: 'poloska_1_27', opacity: '0' },
            { name: 'poloska_1_28', opacity: '0' },
            { name: 'poloska_1_29', opacity: '0' },
            { name: 'poloska_1_30', opacity: '0' },
            { name: 'polosca_1_31', opacity: '0' },
            { name: 'polosca_1_32', opacity: '0' },
          ]
        }
      },
      startTime: timeDiff + 228.1,
    },
    {
      text: 'Природный газ закрыт. На фурмах 3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo7',
      startTime: timeDiff + 229,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 232,
    },
    {
      audio: 'tts-vo8',
      text: 'Понял, принял.',
      sender: 'Дежурный водопроводчик',
      startTime: timeDiff + 233,
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
      startTime: timeDiff + 233.01,
    },
    ////--------------------------------7----------------------------------------//34//-new 
    {
      text: 'Закрыть электрифицированную задвижку 721.',
      sender: 'Система',
      audio: 'tts-22',
      startTime: timeDiff + 236,
    },
    {
      action: {
        target3D: 'b6cc151c-004a-4e3f-bb7b-921c4300993c',
        rotation: { y: 0.7854 }, // 45
      },
      duration: 0.3,
      startTime: timeDiff + 237,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_722', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 237.3,
    },
    {
      action: {
        target3D: 'b6cc151c-004a-4e3f-bb7b-921c4300993c',
        rotation: { y: 0 },
      },
      duration: 0.3,
      startTime: timeDiff + 237.5,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Green_023',
        material: 'Green_Lamp_Off'
      },
      startTime: timeDiff + 238,
    },
    {
      action: {
        target3D: 'Lamp_Red_019',
        material: 'Red_Lamp_On'
      },
      startTime: timeDiff + 239,
    },
    // ilay
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '01.94',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '016.4',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '200.2',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '09.12',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.5',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0101',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 239.11,
    },
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.350'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.0240'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.525'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.233'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5000.'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '3.325'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '00.75'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.95'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 239.12,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0157.'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0161.'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0162.'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0141.'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.50'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.60'
      },
      startTime: timeDiff + 239.12,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1210.'
      },
      startTime: timeDiff + 239.12,
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
      startTime: timeDiff + 239.13,
    },
    //----------------------------------------------------------------------------------------35//-new 
    {
      chapterText: 'Снижение давления ГД 3-2 кгс/см².',
      sender: 'Система',
      lifeTime: '09:00:00',
      startTime: timeDiff + 240.9,
    },
    {
      text: 'По команде мастера печи - газовщик должен открыть клапан «СНОРТ» полностью для сброса в атмосферу излишки.',
      audio: 'tts-23',
      sender: 'Система',
      startTime: timeDiff + 241,
    },
    ////--------------------------------1----------------------------------------//36//-new 
    {
      text: 'Делаем 2,5 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo9',
      startTime: timeDiff + 248,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 251.5,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 253.5,
      human: true,
    },
    {
      text: 'Делаю 2,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo10',
      startTime: timeDiff + 254,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 257,
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
      startTime: timeDiff + 257.01,
    },
    //////----------------------------------------37//-new 
    {
      scenarioText: 'Понизить давление',
      sender: 'Система',
      startTime: timeDiff + 258.9,
    },
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 2,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 259,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 260,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_020',
        material: 'Unic_Lamp_Red_Off',
      },
      startTime: timeDiff + 260.1,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 261,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 262,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 263,
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
            { name: 'P_1', text: '2.6' },
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
            { name: 'H_snotr', text: '13' },
            { name: 'kl_red', color: '#75788E' },
            { name: 'H_progres_7', opacity: '1' },
            { name: 'H_progres_19', opacity: '0' },
            { name: 'H_progres_22', opacity: '0' },
            { name: 'H_progres_33', opacity: '0' },
            { name: 'H_progres_49', opacity: '0' },
            { name: 'H_progres_56', opacity: '0' },
            { name: 'H_progres_60', opacity: '0' },
            { name: 'H_progres_89', opacity: '0' },
            { name: 'H_progres_100', opacity: '0' },
            { name: 'P_2', text: '2.5' },
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
      startTime: timeDiff + 263.1,
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
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
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
      startTime: timeDiff + 263.101,
    },
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '1.928'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.211'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.601'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.225'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5464.'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '2.561'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '00.89'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.04'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 263.11,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0167.'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0171.'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0171.'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0156.'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '06.85'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.39'
      },
      startTime: timeDiff + 263.11,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1208.'
      },
      startTime: timeDiff + 263.11,
    },
    {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '25.12'
      },
      startTime: timeDiff + 263.11,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.64',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '009.5',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '160.1',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '01.06',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '018.3',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0101',
      },
      startTime: timeDiff + 263.12,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.87',
      },
      startTime: timeDiff + 263.12,
    },
    ////--------------------------------3----------------------------------------//38//-new      ////    2   //
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 264,
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
      startTime: timeDiff + 265,
      human: true,
    },
    ////--------------------------------4----------------------------------------//39//-new
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 266,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 268,
      human: true,
    },
    {
      text: 'На фурмах 2,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo11',
      startTime: timeDiff + 269,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 273,
    },
    {
      text: 'Делаем 2 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo12',
      startTime: timeDiff + 274,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 274.1,
      human: true,
    },
    {
      text: 'Делаю 2 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo13',
      startTime: timeDiff + 275,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 277.9,
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
      startTime: timeDiff + 277.90999999999997,
    },
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '0.071'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.226'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.599'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.220'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5405.'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '2.495'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '00.92'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.14'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 277.91999999999996,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0158.'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0167.'
      },
      startTime: timeDiff + 277.91999999999996,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0158.'
      },
      startTime: timeDiff + 277.91999999999996,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '052.8',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '01.04',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0101',
      },
      startTime: timeDiff + 277.93,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.89',
      },
      startTime: timeDiff + 277.93,
    },
    ////--------------------------------5----------------------------------------//40//-new /////   2   ////      4 раза из сценария
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 2кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 278,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 279,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 280,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 281,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 282,
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
      startTime: timeDiff + 283,
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
      startTime: timeDiff + 284,
    },
    // ilay
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '018.2',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0098',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '261.4',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.66',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '094.2',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '012.1',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.2',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0002',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.10',
      },
      startTime: timeDiff + 284.01,
    },
    {
      action: {
        target3D: 'pKolGaz', //1-1
        color: 'green',
        number: '0.476'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'dpVerh', //2
        color: 'green',
        number: '0.232'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'dpObsh', //3
        color: 'green',
        number: '1.507'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'dpNiz', //4
        color: 'green',
        number: '1.203'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'fHolodDut', //5
        color: 'green',
        number: '5008.'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'pGorDut', //6
        color: 'green',
        number: '2.086'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'urZasDat1', //7
        color: 'green',
        number: '01.27'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'urZasDat2', //8
        color: 'green',
        number: '01.53'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'urZasMeh', //9
        color: 'green',
        number: '0000'
      },
      startTime: timeDiff + 284.02,
    },
    {
      action: {
        target3D: 'tVGazT1', //2-1
        color: 'green',
        number: '0166.'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'tVGazT2', //2
        color: 'green',
        number: '0160.'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'tVGazT3', //3
        color: 'green',
        number: '0170.'
      },
      startTime: timeDiff + 284.02,
    },
    {
      action: {
        target3D: 'tVGazT4', //4
        color: 'green',
        number: '0147.'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'tVGazT5', //5
        color: 'green',
        number: '00.26'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'tVGazT6', //6
        color: 'green',
        number: '00.39'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'tVGazT7', //7
        color: 'green',
        number: '1205.'
      },
      startTime: timeDiff + 284.02,
    },
    {
      action: {
        target3D: 'pTechVodT1', //3-1
        color: 'green',
        number: '10.15'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'pTechVodT2', //2
        color: 'green',
        number: '10.15'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'pSjatVozd', //3
        color: 'green',
        number: '04.74'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'pOsyshSjatVozd', //4
        color: 'green',
        number: '04.70'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'pAzotkZatv', //5
        color: 'green',
        number: '2.330'
      },
      startTime: timeDiff + 284.02,
    }, {
      action: {
        target3D: 'tReduct', //6
        color: 'green',
        number: '047.4'
      },
      startTime: timeDiff + 284.02,
    },
    {
      action: {
        target3D: 'fVodNaReduct', //7
        color: 'green',
        number: '24.19'
      },
      startTime: timeDiff + 284.02,
    },
    {
      action: {
        target3D: 'fPrirodGaz', //8
        color: 'green',
        number: '2.285'
      },
      startTime: timeDiff + 284.02,
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
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
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
            // { name: 'left_vugr_rect', color: '#06FF06' }, //
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
      startTime: timeDiff + 284.03,
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
            { name: 'P_1', text: '2.1' },
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
            { name: 'P_2', text: '2' },
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
      startTime: timeDiff + 284.04,
    },
    ////-----------------------------------41//-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 285,
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
      startTime: timeDiff + 289.1,
      human: true,
    },
    ////--------------------------------6----------------------------------------//42//-new ////   4   ////
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 290,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 290.1,
      human: true,
    },
    {
      text: 'На фурмах 2 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo14',
      startTime: timeDiff + 291,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 295,
    },
    {
      chapterText: 'Снижение давления ГД 2-1 кгс/см².',
      sender: 'Система',
      startTime: timeDiff + 297,
    },
    {
      text: 'Делаем 1,5 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo15',
      startTime: timeDiff + 298,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 298.1,
      human: true,
    },
    {
      text: 'Выполняю.',
      sender: 'Газовщик',
      audio: 'tts-vo16',
      startTime: timeDiff + 299,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 302,
    },
    ////--------------------------------7----------------------------------------//43//-new
    {
      scenarioText: 'Позвонить в ЭВС',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 303,
    },
    {
      action: {
        target3D: 'PhoneButton020',
      },
      startTime: timeDiff + 305,
      human: true,
    },
    {
      text: 'Разгрузка на 20000.',
      sender: 'Газовщик',
      startTime: timeDiff + 307,
      audio: 'tts-vo17',
    },
    {
      text: 'Принял',
      sender: 'Инженер-энергетик',
      audio: 'tts-vo18',
      startTime: timeDiff + 311.5,
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
            // { name: 'zagr_ramka_l',  color: '#06FF06' }, // загр слева
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
            // { name: 'left_vugr_rect', color: '#06FF06' }, // 
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
            { name: 'P_1', text: '1.63' },
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
            { name: 'P_2', text: '1.5' },
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
      startTime: timeDiff + 311.51,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle113',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle112',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle068',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle086',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle087',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle088',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle089',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle090',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle091',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle098',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle099',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle100',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle101',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle102',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle103',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle105',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle106',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle107',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle092',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle093',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle094',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle095',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle096',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle085',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle058',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle059',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle060',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    // {
    //   action: {
    //     target3D: 'Rectangle080', 
    //     material: 'ButtonLightOn',
    //   },
    // startTime: timeDiff + 311.52,
    // },
    {
      action: {
        target3D: 'Rectangle064',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle114',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle041',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle039',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle029',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle031',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle034',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle036',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle048',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    }, {
      action: {
        target3D: 'Rectangle050',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '0.00',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '085.7',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '015.5',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '00.13',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '044.4',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0104',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.75',
      },
      startTime: timeDiff + 311.52,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0314',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0181',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '1278',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0967',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '4248',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1591',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '0074',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0124',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0165',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0177',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0171',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0156',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0738',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1282',
      },
      startTime: timeDiff + 311.53,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '1710',
      },
      startTime: timeDiff + 311.53,
    },
    ////--------------------------------8----------------------------------------//44//-new
    {
      scenarioText: 'Понизить давление',
      sender: 'Система',
      startTime: timeDiff + 312.9,
    },
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 1,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 313,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 314,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 315,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 316,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 317,
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
            { name: 'P_1', text: '1.6' },
            { name: 'P_2', text: '1.5' },
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
      startTime: timeDiff + 317.5,
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
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '189.1',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.4',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '044.4',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0104',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 317.51,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0312',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0178',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '1244',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0946',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '4257',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1590',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '0075',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0129',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0161',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0179',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0171',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0156',
      },
      startTime: timeDiff + 317.52,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1282',
      },
      startTime: timeDiff + 317.52,
    },
    ////-----------------------------------46/-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 318,
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
      startTime: timeDiff + 322.1,
      human: true,
    },
    ////--------------------------------9----------------------------------------//46//-new
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 323,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 323.1,
      human: true,
    },
    {
      text: 'На фурмах 1,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo19',
      startTime: timeDiff + 324,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 330,
    },
    {
      text: 'Делаем 1 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo20',
      startTime: timeDiff + 332,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      duration: 0.15,
      startTime: timeDiff + 332.1,
      human: true,
    },
    {
      text: 'Делаю единицу.',
      sender: 'Газовщик',
      audio: 'tts-vo21',
      startTime: timeDiff + 333,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 335,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0302',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0153',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '1106',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0846',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '3989',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1411',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '0095',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0144',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0172',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0174',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0152',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0704',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0239',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1281',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '1469',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '0461',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '2438',
      },
      startTime: timeDiff + 335.01,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 335.02,
    }, {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.4',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '303.3',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.4',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.4',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0104',
      },
      startTime: timeDiff + 335.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.93',
      },
      startTime: timeDiff + 335.02,
    },
    ////--------------------------------10----------------------------------------//47//-new
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 1кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 336,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 337,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 338,
      human: true,
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
            { name: 'H_snotr', text: '49' },
            { name: 'H_progres_49', opacity: 1 },
            { name: 'P_1', text: '1.10' },
            { name: 'P_2', text: '1.00' },
          ]
        }
      },
      startTime: timeDiff + 341,
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
      startTime: timeDiff + 341.01,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0259',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0107',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0836',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0647',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '3328',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1.094',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.13',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0144',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0181',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0098',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0182',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0166',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0782',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1198',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '1112',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '1113',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '1467',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '0112',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2344',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '2473',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.5',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '124.3',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '015.2',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 341.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.93',
      },
      startTime: timeDiff + 341.02,
    },
    ////-----------------------------------48//-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 342,
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
      startTime: timeDiff + 346.1,
      human: true,
    },
    ////--------------------------------11----------------------------------------//49//-new   
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 347,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 347.1,
      human: true,
    },
    {
      text: 'На фурмах 1 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo22',
      startTime: timeDiff + 348,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 352,
    },
    {
      chapterText: 'Снижение давления ГД 0,8-0,6 кгс/см².',
      sender: 'Система',
      startTime: timeDiff + 352.9,
    },
    {
      text: 'Делаем 0,8 кг. Открываем свечу.',
      sender: 'Мастер печи',
      audio: 'tts-vo23',
      startTime: timeDiff + 353,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 353.1,
      human: true,
    },
    {
      text: 'Приступаю к выполнению.',
      sender: 'Газовщик',
      audio: 'tts-vo24',
      startTime: timeDiff + 354,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 357,
    },
    // ilay ne vido
    {
      action: {
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 358.1,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.26',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.8',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '023.5',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0003',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '112.0',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.4',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 358.12,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.21',
      },
      startTime: timeDiff + 358.12,
    },
    ////--------------------------------12----------------------------------------//50//-new
    {
      scenarioText: 'Понизить давление',
      sender: 'Система',
      startTime: timeDiff + 360.9,
    },
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,8 кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 361,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 362,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 363,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '56' },
            { name: 'H_progres_56', opacity: 1 },
            { name: 'P_1', text: '0.9' },
            { name: 'P_2', text: '0.8' },
          ]
        }
      },
      startTime: timeDiff + 363.1,
    },
    // ilay   tables-NO
    {
      action: {
        window2D: {
          elements: [
          ]
        }
      },
      startTime: timeDiff + 363.11,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0252',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0096',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0756',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0592',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '3211',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '1012',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.28',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0166',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0189',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0192',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0154',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0154',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0650',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1159',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '1463',
      },
      startTime: timeDiff + 363.12,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.25',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '084.0',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '037.5',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0016',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '313.4 ',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.4',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.21',
      },
      startTime: timeDiff + 363.13,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 363.14,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 363.14,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 363.14,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 363.14,
    },
    ////-----------------------------------51//-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 364,
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
      startTime: timeDiff + 368.1,
      human: true,
    },
    ////--------------------------------13----------------------------------------//52
    {
      scenarioText: 'Открыть нижний шихтовый затвор.',
      sender: 'Система',
      audio: 'tts-25',
      startTime: timeDiff + 369,
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
      startTime: timeDiff + 370.5,
    },
    {
      action: {
        target3D: 'Rectangle076',
      },
      startTime: timeDiff + 372,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 373,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 373.5,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 374,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 374.5,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 375,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 375.5,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 376,
    }, {
      action: {
        target3D: 'Rectangle076',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 376.5,
    },
    // ilay
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.28',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '067.3',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '042.6',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '094.1',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '044.2',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.16',
      },
      startTime: timeDiff + 376.51,
    },
    {
      action: {
        target3D: 'Rectangle053',
      },
      startTime: timeDiff + 377,
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
      startTime: timeDiff + 377.5,
    },
    // ilay
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.28',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '070.9',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '042.6',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0026',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '058.4',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '044.5',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.16',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0732',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '3233',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0986',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.18',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '0170',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0154',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0180',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0164',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0678',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 377.51,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1157',
      },
      startTime: timeDiff + 377.51,
    },
    ////--------------------------------14----------------------------------------//53//-new
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,78 кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 381,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 382,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 383,
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
            { name: 'P_1', text: '0.88' },
            { name: 'P_2', text: '0.78' },
          ]
        }
      },
      startTime: timeDiff + 383.5,
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
      startTime: timeDiff + 383.51,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.0',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '314.8',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.21',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.2',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '045.5',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0099',
      },
      startTime: timeDiff + 383.52,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.70',
      },
      startTime: timeDiff + 383.52,
    },
    ////-----------------------------------54//-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 384,
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
      startTime: timeDiff + 388.1,
      human: true,
    },
    ////--------------------------------15----------------------------------------//55//-new
    {
      scenarioText: 'Отключить загрузку печи.',
      sender: 'Система',
      startTime: timeDiff + 389,
    },
    {
      text: 'Выгрузить кокс и остановить загрузку.',
      sender: 'Система',
      audio: 'tts-27',
      startTime: timeDiff + 389.1,
    },
    {
      action: {
        target2D: 'bzu_gruzit_btn',
        window2D: {
          elements: [
            { name: 'text_dosZadYrov1', color: '#2B2A29' },
            { name: 'text_dosZadYrov2', color: '#2B2A29' },
            { name: 'bg_dosZadYrov', color: '#06FF06' },
            { name: 'time do vydochi porchii', text: '30' },
          ]
        }
      },
      startTime: timeDiff + 392,
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
      startTime: timeDiff + 392.3,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '20' },
          ]
        }
      },
      startTime: timeDiff + 392.6,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '15' },
          ]
        }
      },
      startTime: timeDiff + 393,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '10' },
          ]
        }
      },
      startTime: timeDiff + 393.3,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '5' },
          ]
        }
      },
      startTime: timeDiff + 393.6,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'time do vydochi porchii', text: '0' },
          ]
        }
      },
      startTime: timeDiff + 394,
    },
    {
      action: {
        target2D: 'bzu_ZapretSledPorci_btn',
        window2D: {
          elements: [
            { name: 'btn_Gryzit_1', color: '#06FF06' },
            { name: 'btn_Gryzit_2', color: '#06FF06' },
            { name: 'v rabote', color: 'start' },
            { name: 'bg_vRabote', color: 'start' },
            { name: 'btn_ZapSledPorc_border', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 394.1,
      human: true
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'Krasniy nijniy Poloska', color: '#858585' },
            { name: 'kl.Oh.NGUK2_2', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 395,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl.Oh.NGUK2_1', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 395.5,
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
      startTime: timeDiff + 395.6,
      human: true
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl.Oh.NGUK2_1', color: 'start' },
            { name: 'Krasniy nijniy Poloska', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 396,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl.Oh.NGUK2_2', color: 'start' },
            { name: 'right_rect_under_arrow', opacity: '0' },
            { name: 'arrow_right', opacity: '1' },
            { name: 'btn_SledPorc_border', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 397,
    },
    { //3D
      action: {
        target3D: 'Rectangle056',
      },
      startTime: timeDiff + 397.2,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle056',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 397.3,
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0236',
      },
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0072',
      },
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0536',
      },
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0165',
      },
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '2538',
      },
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0032',
      },
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '0007',
      },
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '2128',
      },
      startTime: timeDiff + 397.31,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle113',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle112',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle068',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle086',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle087',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle088',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle089',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle090',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle091',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle098',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle099',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle100',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle101',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle102',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle103',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle105',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle106',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle107',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle092',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle093',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle094',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle095',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle096',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle085',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle058',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle059',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle060',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '152.5',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.20',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '011.4',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '038.3',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '042.6',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0028',
      },
      startTime: timeDiff + 397.32,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 397.32,
    },
    ////--------------------------------16----------------------------------------//56//-new
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,75 кг.',
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
      startTime: timeDiff + 398,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 399,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '60' },
            { name: 'H_progres_60', opacity: 1 },
            { name: 'P_1', text: '0.83' },
            { name: 'P_2', text: '0.75' },
            { name: 'btn_ZapSledPorc_border', color: '#06FF06' },
            { name: 'btn_SledPorc_border', color: 'start' },
            { name: 'arrow_right', opacity: '0' },
            { name: 'right_rect_yellow_arrow', opacity: '1', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 399.1,
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
            { name: 'P_2', text: '0.75' },
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
            // { name: 'zagr_ramka_l',  color: '#06FF06' }, // загр слева
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
            // { name: 'left_vugr_rect', color: '#06FF06' }, // 
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
      startTime: timeDiff + 399.11,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '013.8',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '192.4',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.20',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.0',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '038.1',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '032.2',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0082',
      },
      startTime: timeDiff + 399.12,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.59',
      },
      startTime: timeDiff + 399.12,
    },
    ////-----------------------------------57//-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 400,
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
      startTime: timeDiff + 404.1,
      human: true,
    },
    ////--------------------------------17----------------------------------------//58//-new
    {
      text: 'Загрузка приостановлена.',
      sender: 'Система',
      audio: 'tts-28',
      startTime: timeDiff + 405,
    },
    {
      action: {
        target2D: 'bzu_pause_btn',
        window2D: {
          elements: [
            { name: 'right_rect_yellow_arrow', color: 'start' },
            { name: 'btn_Pause_border', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 405.1,
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
            // { name: 'zagr_ramka_l',  color: '#06FF06' }, // загр слева
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
            { name: 'left_vugr_rect', color: '#06FF06' },
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
      startTime: timeDiff + 405.11,
    },
    ////--------------------------------18----------------------------------------//59//-new 
    {
      scenarioText: 'Открыть атмосферные клапаны.',
      sender: 'Система',
      audio: 'tts-29',
      startTime: timeDiff + 406,
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
      startTime: timeDiff + 408,
      human: true,
    },
    // ilay
    {
      action: {
        target3D: 'Lamp_Red_007',
        material: 'Red_Lamp_Off',
      },
      startTime: timeDiff + 408.01,
    }, {
      action: {
        target3D: 'Lamp_Red_006',
        material: 'Red_Lamp_Off',
      },
      startTime: timeDiff + 408.01,
    }, {
      action: {
        target3D: 'Lamp_Red_005',
        material: 'Red_Lamp_Off',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'Lamp_Green_007',
        material: 'Green_Lamp_On',
      },
      startTime: timeDiff + 408.01,
    }, {
      action: {
        target3D: 'Lamp_Green_006',
        material: 'Green_Lamp_On',
      },
      startTime: timeDiff + 408.01,
    }, {
      action: {
        target3D: 'Lamp_Green_005',
        material: 'Green_Lamp_On',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.133',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.037',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.564',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.468',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '2779.',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.738',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '00.67',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.14',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0114.',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0156.',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0174.',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0148.',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0696',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1194',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '1020',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '1020',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '0484',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '0409',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2310',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '0455',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '2435',
      },
      startTime: timeDiff + 408.01,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 408.01,
    },
    ////--------------------------------19----------------------------------------//60//-new 
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
      startTime: timeDiff + 409.1,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_1', color: '#06FF06' },
            { name: 'kl_2', color: '#06FF06' },
            { name: 'kl_3', color: '#06FF06' },
          ],
        },
      },
      startTime: timeDiff + 409.19,
    },
    {
      text: 'Атмосферные клапаны открыты.',
      sender: 'Система',
      audio: 'tts-30',
      startTime: timeDiff + 409.2,
    },
    // ilay  
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '0481',
      },
      startTime: timeDiff + 409.21,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'Rectangle102',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '083.2',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '168.7',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '00.13',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '014.4',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0096',
      },
      startTime: timeDiff + 409.22,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.69',
      },
      startTime: timeDiff + 409.22,
    },
    ////--------------------------------20----------------------------------------//61//-new 
    { // 3D
      text: 'По рации сообщить мастеру печи о выполненной операции.',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 413,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 414,
      human: true,
    },
    {
      text: 'Атмосферные клапана открыты. На фурмах 0,75 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo25',
      startTime: timeDiff + 415,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 421,
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
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
            { name: 'left_vugr_rect', color: '#06FF06' },
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
          ]
        }
      },
      startTime: timeDiff + 421.01,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 421.02,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 421.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '092.2',
      },
      startTime: timeDiff + 421.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '325.7',
      },
      startTime: timeDiff + 421.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.1',
      },
      startTime: timeDiff + 421.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.71',
      },
      startTime: timeDiff + 421.02,
    },
    ////--------------------------------21----------------------------------------//62//-new 
    {
      chapterText: 'Снижение давления ГД 0,5-0,3 кгс/см².',
      sender: 'Система',
      startTime: timeDiff + 421.8,
    },
    {
      scenarioText: 'Закрыть кислород',
      sender: 'Система',
      startTime: timeDiff + 421.9,
    },
    {
      text: 'Закрывайте кислород и делайте 0,5 кг на фурмах.',
      sender: 'Мастер печи',
      audio: 'tts-vo26',
      startTime: timeDiff + 422,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 422.1,
      human: true,
    },
    {
      text: 'Закрываю кислород полностью и делаю 0,5.',
      sender: 'Газовщик',
      audio: 'tts-vo27',
      startTime: timeDiff + 423.5,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 428.15,
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
            { name: 'left_vugr_rect', color: '#06FF06' },
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'verx', text: '72' }, // цифры сверху
            { name: 'tr_3_str_1_', text: '4' }, // 
            { name: 'tr_2_str_2_', text: '5' }, // 
            { name: 'cir_t_2', color: '#5E5E5E' }, //  
            { name: 'dlina_porcii', text: '125' }, // длина порции
            { name: 'zagr_ramka_r', color: '#06FF06' }, // загр справа
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
      startTime: timeDiff + 428.16,
    },
    {
      action: {
        target3D: 'Rectangle085',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 428.17,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 428.17,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '045.8',
      },
      startTime: timeDiff + 428.17,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 428.17,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 428.17,
    },
    ////--------------------------------22----------------------------------------//63//-new 
    {
      text: 'Сообщить по телефону в "Кислородный цех".',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 429,
    },
    {
      action: {
        target3D: 'PhoneButton017',
      },
      startTime: timeDiff + 430,
      human: true,
    },
    {
      text: 'Закрывайте кислород на выходе.',
      sender: 'Газовщик',
      audio: 'tts-vo28',
      startTime: timeDiff + 431,
    },
    {
      text: 'Выполняю',
      sender: 'Инженер-энергетик',
      audio: 'tts-vo29',
      startTime: timeDiff + 436,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.090',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.072',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.604',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.472',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '2877.',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.697',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '00.70',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.12',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0170.',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0147.',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0169.',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0143.',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '0684',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0039',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1194',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '1022',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '1022',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '0481',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '0410',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2373',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '0453',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 435.01,
    },
    {
      action: {
        target3D: 'Rectangle111',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle109',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle113',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle112',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle068',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle086',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle087',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle088',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle089',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle090',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle091',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle098',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle099',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle100',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle101',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle102',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle103',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle105',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle106',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle107',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle092',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle093',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle094',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle095',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle096',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle085',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle058',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle057',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle059',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle060',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'Rectangle049',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    }, {
      action: {
        target3D: 'Rectangle051',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 435.02,
    }, {
      action: {
        target3D: 'Rectangle048',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    }, {
      action: {
        target3D: 'Rectangle050',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.11',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '276.4',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '000.2',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '00.13',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '037.0',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0096',
      },
      startTime: timeDiff + 435.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.76',
      },
      startTime: timeDiff + 435.02,
    },
    ////--------------------------------23----------------------------------------//64//-new
    {
      scenarioText: 'Понизить давление',
      sender: 'Система',
      startTime: timeDiff + 438.9,
    },
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,5кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 439,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 441.1,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 441.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 442,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 442.5,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '67' },
            { name: 'H_progres_67', opacity: 1 },
            { name: 'P_2', text: '0.5' },
            { name: 'P_1', text: '0.66' },
          ]
        }
      },
      startTime: timeDiff + 442.6,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.071',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.052',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.460',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.362',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1736.',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.526',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '00.95',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.40',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0160.',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0136.',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0159.',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0134.',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '07.11',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.39',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1191.',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.12',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.12',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.83',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.380',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '045.1',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.73',
      },
      startTime: timeDiff + 442.61,
    },
    {
      action: {
        target3D: 'Rectangle110',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 442.62,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 442.62,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.08',
      },
      startTime: timeDiff + 442.62,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '238.9',
      },
      startTime: timeDiff + 442.62,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.07',
      },
      startTime: timeDiff + 442.62,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.2',
      },
      startTime: timeDiff + 442.62,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 442.62,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.93',
      },
      startTime: timeDiff + 442.62,
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
      startTime: timeDiff + 442.63,
    },
    ////-----------------------------------65//-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 443,
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
      startTime: timeDiff + 447.1,
      human: true,
    },
    ////--------------------------------24----------------------------------------//66//-new 
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 448,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 448.1,
      human: true,
    },
    {
      text: 'На фурмах 0,5 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo30',
      startTime: timeDiff + 449,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 452,
    },
    // ilay
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '068.5',
      },
      startTime: timeDiff + 452.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.08',
      },
      startTime: timeDiff + 452.02,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.070',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.049',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.445',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.350',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1800.',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.510',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0159.',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0135.',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0158.',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.38',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.13',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.383',
      },
      startTime: timeDiff + 452.03,
    },
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle068',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle067',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle045',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle044',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle097',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle104',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle076',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle075',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle074',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle073',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle082',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle081',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle080',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 452.04,
    },
    {
      action: {
        target3D: 'Rectangle079',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 452.04,
    },
    ////--------------------------------69---------------------------------------- 
    {
      scenarioText: 'Открыть клапан вторичного выравнивания.',
      sender: 'Система',
      startTime: timeDiff + 453,
    },
    {
      text: 'БЗУ снять с автоматического режима.',
      audio: 'tts-31',
      sender: 'Система',
      startTime: timeDiff + 454,
    },
    {
      action: {
        target3D: 'Rectangle072',
      },
      startTime: timeDiff + 455,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 456,
    },
    // ilay
    {
      action: {
        target3D: 'Rectangle071',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 456.01,
    },
    {
      action: {
        target3D: 'Rectangle065',
      },
      startTime: timeDiff + 456.1,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 456.3,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 456.4,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 457,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 457.5,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 458,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 458.5,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 459,
    },
    {
      action: {
        target3D: 'Rectangle065',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 459.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
      },
      startTime: timeDiff + 459.6,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle047',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 459.7,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 460,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 460.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 461,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 461.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 462,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 462.5,
    },
    {
      action: {
        target3D: 'Rectangle046',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 463,
    },
    {
      action: {
        target3D: 'Rectangle070',
      },
      startTime: timeDiff + 463.1,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 463.2,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 463.4,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 464,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 464.5,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 465,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 465.5,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 466,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 466.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
      },
      startTime: timeDiff + 466.6,
      human: true,
    },
    {
      action: {
        target3D: 'Rectangle114',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 466.7,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 467,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 467.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 468,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 468.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 469,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_Off',
      },
      startTime: timeDiff + 469.5,
    },
    {
      action: {
        target3D: 'Rectangle115',
        material: 'Unic_Botton_On',
      },
      startTime: timeDiff + 470,
    },// ilay
    {
      action: {
        target3D: 'Rectangle071',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'Rectangle072',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'Rectangle070',
        material: 'ButtonLightOn',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'Rectangle069',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'Rectangle066',
        material: 'ButtonLightOff',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.03',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.1',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '170.4',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.16',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '016.6',
      },
      startTime: timeDiff + 470.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '00.98',
      },
      startTime: timeDiff + 470.02,
    },
    ////--------------------------------70----------------------------------------//68//-new 
    {
      text: 'Мастер печи по рации сообщает о следующих операциях',
      startTime: timeDiff + 471.09,
    },
    {
      text: 'Делаем 0,3кг',
      sender: 'Мастер печи',
      audio: 'tts-vo31',
      startTime: timeDiff + 471.1,
    },
    {
      sender: 'Система',
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      audio: 'radio_say',
      startTime: timeDiff + 474,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 474.1,
      human: true,
    },
    {
      text: 'Принимаю, делаю 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo32',
      startTime: timeDiff + 475,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 479,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.068',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.046',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.419',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.331',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1893.',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.482',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.00',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.42',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0156.',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0133.',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0156.',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0132.',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.92',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.39',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1191.',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.12',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.12',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.83',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.387',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '045.1',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 479.02,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 479.02,
    },
    //--------------------------------71----------------------------------------//69//-new  // Газовщик проворачивал клапан 6 раз с интервалом.
    {
      scenarioText: 'Понизить давление',
      sender: 'Система',
      startTime: timeDiff + 479.1,
    },
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,3кг.',
      sender: 'Система',
      audio: 'tts-24',
      startTime: timeDiff + 479.2,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 481.3,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 482,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 483,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 484,
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
            { name: 'P_2', text: '0.3' },
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
      startTime: timeDiff + 484.1,
    },
    // ilay
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.058',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.028',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.287',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.229',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '0857.',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.339',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.17',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.47',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0146.',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0126.',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0146.',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0125.',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.89',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.38',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1190.',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.11',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.11',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.83',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.410',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '045.0',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 484.12,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 484.12,
    },
    ////-----------------------------------72//-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 485,
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
      startTime: timeDiff + 485.1,
      human: true,
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
      startTime: timeDiff + 486,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 486.1,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 487,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'vn_002', color: '#8F8F8F' },
          ]
        }
      },
      startTime: timeDiff + 488,
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
      startTime: timeDiff + 489,
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
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
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
            { name: 'left_vugr_rect', color: '#06FF06' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#06FF06' }, // пауза по центру
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
            { name: 'ismetir_ramki', color: '#06FF06' }, // в работе
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
      startTime: timeDiff + 489.01,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.058',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.028',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.287',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.229',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '0848.',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.339',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.17',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.47',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0146.',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0126.',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0146.',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0125.',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.88',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '00.38',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1190.',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.11',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.11',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.83',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.410',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '045.0',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '008.7',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '013.3',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '046.9',
      },
      startTime: timeDiff + 489.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.16',
      },
      startTime: timeDiff + 489.02,
    },
    ////--------------------------------73----------------------------------------//71//-new
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 490,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 490.1,
      human: true,
    },
    {
      text: 'На фурмах 0,3 кг.',
      sender: 'Газовщик',
      audio: 'tts-vo33',
      startTime: timeDiff + 491,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 496,
    },
    {
      chapterText: 'Снижение давления ГД до 0 кгс/см².',
      sender: 'Система',
      startTime: timeDiff + 496.9,
    },
    {
      scenarioText: 'Закрытие отсечного клапана пылеуловителя',
      startTime: timeDiff + 497,
    },
    {
      text: 'Закрывайте отсечной.',
      sender: 'Мастер печи',
      audio: 'tts-vo34',
      startTime: timeDiff + 498,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 498.1,
      human: true,
    },
    {
      text: 'Понятно, Артём Викторович – закрывай отсечной.',
      sender: 'Газовщик',
      audio: 'tts-vo35',
      startTime: timeDiff + 499,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 504,
    },
    {
      text: 'Понял, закрываю отсечной клапан.',
      sender: 'Аппаратчик газоочистки',
      audio: 'tts-vo36',
      startTime: timeDiff + 505,
    },
    // ilay ничего 
    ////--------------------------------75----------------------------------------//72//-new 
    {
      text: 'Отсечной клапан закрывыается.',
      sender: 'Система',
      startTime: timeDiff + 508,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 510.5,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#06DA06' },
          ]
        }
      },
      startTime: timeDiff + 511,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 511.5,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#06DA06' },
          ]
        }
      },
      startTime: timeDiff + 512,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'kl_81', color: '#ff1e00' },
          ]
        }
      },
      startTime: timeDiff + 512.5,
    },
    {
      text: 'Отсечной клапан закрыт.',
      sender: 'Система',
      audio: 'tts-33',
      startTime: timeDiff + 513,
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
      startTime: timeDiff + 513.1,
    },
    ////--------------------------------76----------------------------------------/
    {
      text: 'Открыть сбросной клапан 723',
      sender: 'Система',
      audio: 'tts-34',
      startTime: timeDiff + 516,
    },
    {
      action: {
        target3D: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44',
        rotation: { y: -0.785 },
      },
      duration: 0.3,
      startTime: timeDiff + 519,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_017',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 519.5,
    },
    {
      action: {
        target3D: 'Lamp_Green_021',
        material: 'Unic_Lamp_Green_On'
      },
      startTime: timeDiff + 520,
    },
    {
      action: {
        target3D: 'ebc13da1-0cf6-47e7-b08b-b39f7100bc44',
        rotation: { y: 0 },
      },
      duration: 0.3,
      startTime: timeDiff + 520.5,
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
      startTime: timeDiff + 520.6,
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
      startTime: timeDiff + 520.61,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.057',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.025',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.268',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.215',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '0967.',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.318',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.28',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.46',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0141.',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0123.',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0142.',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0123.',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.89',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0038',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1190.',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.22',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.22',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.85',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.407',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '044.9',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.74',
      },
      startTime: timeDiff + 520.62,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 520.62,
    },
    ////--------------------------------77----------------------------------------//74//-new 
    {
      text: 'Третью закрыли 1.1 по второму толкателю.',
      sender: 'Мастер печи',
      audio: 'tts-vo37',
      startTime: timeDiff + 522,
    },

    {
      text: 'Сообщить по рации в «Лётки №3».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 527,
    },
    {
      action: {
        target3D: 'ButtonHightlight_006',
      },
      startTime: timeDiff + 529.5,
      human: true,
    },
    {
      text: '1.1 второй толкатель.',
      sender: 'Газовщик',
      audio: 'tts-vo38',
      startTime: timeDiff + 530.5,
    },
    {
      action: {
        target3D: 'Lamp_006',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 534,
    },
    ////--------------------------------78----------------------------------------//75//-new 
    {
      text: 'Сообщить по телефону в "Дисп.комб".',
      sender: 'Система',
      audio: 'telephone_say',
      startTime: timeDiff + 535,
    },
    {
      action: {
        target3D: 'PhoneButton012',
      },
      startTime: timeDiff + 536,
      human: true,
    },
    {
      text: 'Слева 1.1 по второму от толкателя.',
      sender: 'Газовщик',
      audio: 'tts-vo39',
      startTime: timeDiff + 537,
    },
    {
      text: 'Хорошо, принял.',
      sender: 'Сменный диспетчер',
      audio: 'tts-vo40',
      startTime: timeDiff + 542,
    },
    {
      text: 'Справа пока не сдавай.',
      sender: 'Газовщик',
      audio: 'tts-vo41',
      startTime: timeDiff + 545,
    },
    ////--------------------------------79----------------------------------------//76//-new 
    {
      text: 'Сообщить по рации в «Лётки №3».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 549,
    },
    {
      action: {
        target3D: 'ButtonHightlight_006',
      },
      startTime: timeDiff + 549.5,
      human: true,
    },
    {
      text: 'Третья лётка, отдавайте ковши.',
      sender: 'Газовщик',
      audio: 'tts-vo42',
      startTime: timeDiff + 550.5,
    },
    {
      action: {
        target3D: 'Lamp_006',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 555,
    },
    // ilay     
    {
      action: {
        target3D: 'bzuDavlenie_l',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_l',
        color: 'red',
        number: '093.0',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_l',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_l',
        color: 'red',
        number: '0085',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '259.3',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuDavlenie_r',
        color: 'red',
        number: '00.00',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '013.5',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuPolShihZat_r',
        color: 'red',
        number: '001.3',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuVremVigruz_r',
        color: 'red',
        number: '0096',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.36',
      },
      startTime: timeDiff + 555.02,
    },
    {
      action: {
        target3D: 'pKolGaz',
        color: 'green',
        number: '0.055',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.024',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.264',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.212',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '0950.',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.312',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.37',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.74',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'urZasMeh',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'tVGazT1',
        color: 'green',
        number: '0136.',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0120.',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0138.',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0120.',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.85',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'tVGazT6',
        color: 'green',
        number: '0038',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1189.',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'pTechVodT1',
        color: 'green',
        number: '10.25',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'pTechVodT2',
        color: 'green',
        number: '10.25',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'pSjatVozd',
        color: 'green',
        number: '04.87',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'pOsyshSjatVozd',
        color: 'green',
        number: '04.11',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.419',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '044.7',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.75',
      },
      startTime: timeDiff + 555.03,
    },
    {
      action: {
        target3D: 'fPrirodGaz',
        color: 'green',
        number: '0000',
      },
      startTime: timeDiff + 555.03,
    },
    ////--------------------------------80----------------------------------------//77//-new 
    {
      text: 'Отсечной закрыт.',
      sender: 'Мастер печи',
      audio: 'tts-vo43',
      startTime: timeDiff + 556,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 559,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 559.1,
      human: true,
    },
    {
      text: 'Отсечной закрыт, на фурмах 0,3.',
      sender: 'Газовщик',
      audio: 'tts-vo44',
      startTime: timeDiff + 560,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 565,
    },
    {
      scenarioText: 'Понизить давление',
      sender: 'Система',
      startTime: timeDiff + 565.5,
    },
    {
      text: 'Делаем 0,2 кг.',
      sender: 'Мастер печи',
      audio: 'tts-vo45',
      startTime: timeDiff + 566,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 567.1,
      human: true,
    },
    {
      text: 'Принял, делаю 0,2.',
      sender: 'Газовщик',
      audio: 'tts-vo46',
      startTime: timeDiff + 568,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 572,
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
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
            { name: 'ismetir_ramki', color: '#06FF06' }, // в работе
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
      startTime: timeDiff + 572.01,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '255.3',
      },
      startTime: timeDiff + 572.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.42',
      },
      startTime: timeDiff + 572.02,
    },
    ////--------------------------------81----------------------------------------//78//-new 
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0,2кг.',
      audio: 'tts-24',
      sender: 'Система',
      startTime: timeDiff + 573,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 575.2,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 576,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 576.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 577,
      human: true,
    },
    {
      action: {
        window2D: {
          elements: [
            { name: 'H_snotr', text: '93' },
            { name: 'P_2', text: '0.27' },
            { name: 'P_2', text: '0.22' },
          ]
        }
      },
      startTime: timeDiff + 577.1,
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
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
            { name: 'ismetir_ramki', color: '#06FF06' }, // в работе
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
      startTime: timeDiff + 577.11,
    },
    {
      action: {
        target3D: 'dpVerh',
        color: 'green',
        number: '0.020',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.229',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.184',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1179.',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.232',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.47',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.72',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'tVGazT2',
        color: 'green',
        number: '0117.',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0134.',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'tVGazT4',
        color: 'green',
        number: '0118.',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.76',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'tVGazT7',
        color: 'green',
        number: '1187.',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'pAzotkZatv',
        color: 'green',
        number: '2.422',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'tReduct',
        color: 'green',
        number: '044.4',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'fVodNaReduct',
        color: 'green',
        number: '24.73',
      },
      startTime: timeDiff + 577.12,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '146.8',
      },
      startTime: timeDiff + 577.13,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '008.5',
      },
      startTime: timeDiff + 577.13,
    },
    {
      action: {
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '046.9',
      },
      startTime: timeDiff + 577.13,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.46',
      },
      startTime: timeDiff + 577.13,
    },
    ////-----------------------------------82//-new//
    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 578,
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
      startTime: timeDiff + 582.1,
      human: true,
    },
    ////--------------------------------84----------------------------------------
    {
      scenarioText: 'Понизить давление до нуля',
      sender: 'Система',
      startTime: timeDiff + 582.9,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 583,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 583.1,
      human: true,
    },
    {
      text: 'На фурмах 0,2.',
      sender: 'Газовщик',
      audio: 'tts-vo47',
      startTime: timeDiff + 584,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 588,
    },
    {
      text: 'Делаем 0.',
      sender: 'Мастер печи',
      audio: 'tts-vo48',
      startTime: timeDiff + 590,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 590.1,
      human: true,
    },
    {
      text: 'Понял, делаю 0.',
      sender: 'Газовщик',
      audio: 'tts-vo49',
      startTime: timeDiff + 591,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 595,
    },
    // ilay
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '133.6',
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
        target3D: 'bzuFactUgol_r',
        color: 'red',
        number: '047.0',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'bzuUrovZasip',
        color: 'red',
        number: '01.50',
      },
      startTime: timeDiff + 595.02,
    },
    {
      action: {
        target3D: 'dpObsh',
        color: 'green',
        number: '0.135',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'dpNiz',
        color: 'green',
        number: '0.157',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'fHolodDut',
        color: 'green',
        number: '1329.',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'pGorDut',
        color: 'green',
        number: '0.196',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'urZasDat1',
        color: 'green',
        number: '01.50',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'urZasDat2',
        color: 'green',
        number: '01.76',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT3',
        color: 'green',
        number: '0133.',
      },
      startTime: timeDiff + 595.03,
    },
    {
      action: {
        target3D: 'tVGazT5',
        color: 'green',
        number: '06.94',
      },
      startTime: timeDiff + 595.03,
    },
    ////--------------------------------84----------------------------------------//81//-new 
    {
      text: 'Приоткрыть клапан «СНОРТ» до давления на фурмах 0кг.',
      audio: 'tts-24',
      sender: 'Система',
      startTime: timeDiff + 595.1,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 595.2,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 596,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: -0.785 },
      },
      duration: 0.15,
      startTime: timeDiff + 596.5,
      human: true,
    },
    {
      action: {
        target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
        rotation: { y: 0 },
      },
      duration: 0.15,
      startTime: timeDiff + 597,
      human: true,
    },
    {
      action: {
        target3D: 'Lamp_Red_020',
        material: 'Unic_Lamp_Red_Off'
      },
      startTime: timeDiff + 597.6,
    },
    {
      action: {
        target3D: 'Lamp_Green_024',
        material: 'Unic_Lamp_Green_On'
      },
      startTime: timeDiff + 597.7,
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
      startTime: timeDiff + 597.8,
    },

    {
      text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
      sender: 'Система',
      audio: 'SoundSnortFurma',
      startTime: timeDiff + 598,
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
      startTime: timeDiff + 598.1,
      human: true,
    },


    {
      text: 'Прекращение циркуляции кокса.',
      sender: 'Система',
      startTime: timeDiff + 599,
    },
    {
      action: {
        target3D: 'Display_TV002',
        imgTexture: 'media/images/monitors/Kamera-nablyudeniya.jpg'
      },
      startTime: timeDiff + 599.1,
    },
    {
      action: {
        target3D: 'Display_flat006',
        imgTexture: 'media/images/monitors/Kamera-nablyudeniya.jpg'
      },
      startTime: timeDiff + 599.2,
    },
    {
      text: 'Клапан «СНОРТ» полностью открыт.',
      sender: 'Система',
      startTime: timeDiff + 600,
    },
    {
      text: 'Прекращение дутья.',
      sender: 'Система',
      startTime: timeDiff + 601,
    },
    ////--------------------------------86----------------------------------------//83//-new 
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 602,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 602.1,
      human: true,
    },
    {
      text: '«СНОРТ» раскручен полностью. На фурмах 0.',
      sender: 'Газовщик',
      audio: 'tts-vo50',
      startTime: timeDiff + 603,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 607,
    },
    {
      chapterText: 'Заключительные операции и взятие печи на «тягу»',
      sender: 'Система',
      startTime: timeDiff + 607.8,
    },
    {
      scenarioText: 'Закрыть шибера',
      sender: 'Система',
      startTime: timeDiff + 607.9,
    },
    {
      text: 'Закрывайте шибера.',
      sender: 'Мастер печи',
      audio: 'tts-vo51',
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
      text: 'Закрываю шибера.',
      sender: 'Газовщик',
      audio: 'tts-vo52',
      startTime: timeDiff + 609,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 612,
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
            { name: 'kl_red', color: '#00DA01' },
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
            { name: 'VNK3_status_1_fon', color: '#0033FF' },
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
            { name: 'zagr_ramka_l', color: '#06FF06' }, // загр слева
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
            { name: 'left_vugr_rect', color: '#06FF06' }, //  Выгр зеленые зеленые рамки
            { name: 'left_rect_yellow_arrow', opacity: '0' }, // желтая над стрелкой
            { name: 'left_rect_under_arrow', opacity: '1' }, // красная над стрелкой
            { name: 'arrow_left', opacity: '0' }, // стрелка слева
            { name: 'strelka_snizu', opacity: '0' }, // стрелка снизу
            { name: 'btn_Pause_border', color: '#06FF06' }, // пауза по центру
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
            { name: 'mex.zond na huxte', color: '#06FF06' }, //  зеленый квадрат Мех.зонд на шихт
            { name: 'do zapuska mexan min', text: '0' }, // 
            { name: 'do zapuska mexan max', text: '0' }, // 
            { name: 'bg_vRabote', color: '#2B2A29' }, // в работе
            { name: 'ismetir_ramki', color: '#06FF06' }, // в работе
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
            { name: 'Str1_8', color: '#06FF06' }, // str 1-8 r  // #008600
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
      startTime: timeDiff + 612.01,
    },
    {
      action: {
        target3D: 'bzuFactUgol_l',
        color: 'red',
        number: '332.9',
      },
      startTime: timeDiff + 612.02,
    },
    {
      action: {
        target3D: 'bzuVesNetto_r',
        color: 'red',
        number: '013.6',
      },
      startTime: timeDiff + 612.02,
    },
    ////--------------------------------88----------------------------------------//84//-new 
    // scenarioText: 'Делаем 310 318 и 319 поочерёдно.',
    ////--------------------------------клапан 310----------------------------------------Закрыт. Автоматический в ручной-------------------------------
    // ilay vnk3 vnk3 ff 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.35' },
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
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
            { name: 'kl_319', color: '#06FF06' },
            { name: 'circle_dutyo', color: '#06FF06' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#06FF06' },
            { name: 'kl_310', color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 612.03,
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
      startTime: timeDiff + 612.1,
    },
    {
      text: 'Перевести ВНК №3 на ручной режим.',
      audio: 'tts-38',
      sender: 'Система',
      startTime: timeDiff + 613,
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
        }, // ТУТ ОСТАНОВИЛСЯ
        helper2D: [
          { x: 91.30, y: 63.90, w: 1.5, h: 2.0, id: 'close_w1', },
          { x: 83.80, y: 71.80, w: 4.0, h: 2.6, id: 'auto', },
          { x: 88.15, y: 71.80, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 83.80, y: 75.80, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 88.15, y: 75.80, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 83.80, y: 78.60, w: 8.5, h: 2.9, id: 'stop', },
          { x: 83.80, y: 83.95, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 83.80, y: 89.35, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 616,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'ruchnoi',
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
      startTime: timeDiff + 616.2,
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
      },
      startTime: timeDiff + 616.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'baypas_blokirovok',
        window2D: {
          newPositionWindow: { x: 1760, y: 900 },
          elements: [
            { name: 'title_open_vn', text: 'Байпас всех блокировок' },
          ],
        },
        helper2D: [
          { x: 88.30, y: 93.00, w: 1.5, h: 2.0, id: 'open_vn1' },
          { x: 91.90, y: 93.00, w: 1.5, h: 2.0, id: 'close_w1' },
        ]
      },
      startTime: timeDiff + 616.6,
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
      startTime: timeDiff + 616.8,
      human: true,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 617,
      human: true,
    },
    // ilay vnk3
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.30' },
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
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
            { name: 'kl_319', color: '#06FF06' },
            { name: 'circle_dutyo', color: '#06FF06' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
          ]
        }
      },
      startTime: timeDiff + 617.02,
    },
    ////
    ////--------------------------------клапан 318----------------------------------------Открыт. Автоматический в ручной-------------------------------
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
      startTime: timeDiff + 617.1,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'ruchnoi',
        // target2D: 'open_vn',
        // realName: 'Ручной',
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
      startTime: timeDiff + 617.2,
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
      startTime: timeDiff + 617.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'baypas_blokirovok',
        // target2D: 'open_vn',
        // realName: 'Байпас всех блокировок',
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
      startTime: timeDiff + 617.6,
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
      startTime: timeDiff + 617.8,
      human: true,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 618,
      human: true,
    },
    // ilay vnk3
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.28' },
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
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
      startTime: timeDiff + 618.03,
    },
    ////--------------------------------клапан 319----------------------------------------Открыт. Автоматический в ручной-------------------------------
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
          { x: 82.90, y: 45.15, w: 1.5, h: 2.0, id: 'close_w1', },
          { x: 75.45, y: 53.10, w: 4.0, h: 2.6, id: 'auto', },
          { x: 79.80, y: 53.10, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 75.45, y: 57.00, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 79.80, y: 57.00, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 75.45, y: 60.00, w: 8.5, h: 2.9, id: 'stop', },
          { x: 75.45, y: 65.20, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 75.45, y: 70.55, w: 8.5, h: 2.6, id: 'baypas_blokirovok' }
        ]
      },
      startTime: timeDiff + 618.1,
      human: true,
    },
    // окно ВН  // клик ручной
    {
      action: {
        target2D: 'ruchnoi',
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
      startTime: timeDiff + 618.2,
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
      },
      startTime: timeDiff + 618.4,
      human: true,
    },
    // окно ВН  //  клик байпас
    {
      action: {
        target2D: 'baypas_blokirovok',
        // target2D: 'open_vn',
        // realName: 'Байпас всех блокировок',
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
      startTime: timeDiff + 618.6,
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
      },
      startTime: timeDiff + 618.8,
      human: true,
    },
    // ilay vnk3 vnk3 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.26' },
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
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
      startTime: timeDiff + 618.82,
    },
    ////--------------------------------40----------------------------------------//85//-new 
    {
      text: 'Открыть клапан 310 для сброса давления.',
      sender: 'Система',
      audio: 'tts-39',
      startTime: timeDiff + 619,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 619.1,
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
            { name: 'btn_open_text', color: '#6E6E6E' },
            { name: 'btn_open_2', color: '#E6E6E6', stroke: '#6E6E6E' },
          ]
        },
        helper2D: [
          { x: 91.30, y: 63.90, w: 1.5, h: 2.0, id: 'close_w1', },
          { x: 83.80, y: 71.80, w: 4.0, h: 2.6, id: 'auto', },
          { x: 88.15, y: 71.80, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 83.80, y: 75.80, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 88.15, y: 75.80, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 83.80, y: 78.60, w: 8.5, h: 2.9, id: 'stop', },
          { x: 83.80, y: 83.95, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 83.80, y: 89.35, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 622,
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
      startTime: timeDiff + 623,
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
      },
      startTime: timeDiff + 623.2,
      human: true,
    },
    //  мигание
    {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_310_1', color: '#06FF06' },
            { name: 'kl_310_2', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 624,
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
      startTime: timeDiff + 625,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_310_1', color: '#06FF06' },
            { name: 'kl_310_2', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 626,
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
      startTime: timeDiff + 627,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'status_window_text', text: 'Открыт' },
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_310_1', color: '#06FF06' },
            { name: 'kl_310_2', color: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 628,
    },
    // ilay vnk3 vnk3 
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.24' },
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
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
      startTime: timeDiff + 628.02,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 629,
      human: true,
    },
    ////--------------------------------91----------------------------------------
    {
      text: 'Закрыть клапан 318.',
      sender: 'Система',
      audio: 'tts-40',
      startTime: timeDiff + 630,
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
          { x: 91.30, y: 63.90, w: 1.5, h: 2.0, id: 'close_w1', },
          { x: 83.80, y: 71.80, w: 4.0, h: 2.6, id: 'auto', },
          { x: 88.15, y: 71.80, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 83.80, y: 75.80, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 88.15, y: 75.80, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 83.80, y: 78.60, w: 8.5, h: 2.9, id: 'stop', },
          { x: 83.80, y: 83.95, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 83.80, y: 89.35, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 630.4,
      human: true,
    },
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'close_ventil',
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
      startTime: timeDiff + 631.6,
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
      },
      startTime: timeDiff + 631.8,
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
      startTime: timeDiff + 632.3,
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
      startTime: timeDiff + 633,
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
      startTime: timeDiff + 634,
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
      startTime: timeDiff + 635,
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
      startTime: timeDiff + 635.2,
      human: true
    },
    ////--------------------------------клапан 318----------------------------------------Закрыт. Закрыт в закрыт-------------------------------    //  1
    // повторить 2-3 раза. Будет 2
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'close_ventil',
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
      startTime: timeDiff + 635.4,
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
      },
      startTime: timeDiff + 635.6,
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
      startTime: timeDiff + 636.3,
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
      startTime: timeDiff + 637,
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
      startTime: timeDiff + 638,
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
      startTime: timeDiff + 639,
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
      startTime: timeDiff + 639.2,
      human: true
    },
    ///////
    // окно ВН  // закрыть
    {
      action: {
        target2D: 'close_ventil',
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
      startTime: timeDiff + 639.4,
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
      },
      startTime: timeDiff + 639.6,
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
      startTime: timeDiff + 640.3,
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
      startTime: timeDiff + 641,
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
      startTime: timeDiff + 642,
    },
    // ilay
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '13.24' },
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
            // { name: '115_SPW',  text: '433.0' },
            // { name: '115_SPT',  text: '108.0' },
            // { name: '115_KP_2', text: '500.0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221.1' },
            // { name: '123_SP_2', text: '1200.0' },
            // { name: '123_KP_2', text: '28.54' },
            // { name: '123_GAZ',  text: '0.00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
            // { name: 'kl_319',   color: '#06FF06' },
            // { name: 'circle_dutyo',           color: '#06FF06' },
            // { name: 'circle_nagrev',          color: '#000' },
            // { name: 'circle_otdeleniye_1',    color: '#000' },
            // { name: 'circle_otdeleniye_2',    color: '#000' },
            // { name: 'kl_336a',   color: '#ff0000' },
            // { name: 'kl_318a',   color: '#ff0000' },
            // { name: 'kl_318',   color: '#06FF06' },
            // { name: 'kl_310',   color: '#ff0000' },
          ]
        }
      },
      startTime: timeDiff + 642.02,
    },
    ////--------------------------------клапан 318----------------------------------------Закрыт. Закрыт в закрыт-------------------------------    //  2
    ////--------------------------------42----------------------------------------//87//-new 319
    {
      text: 'Закрыть клапан 319.',
      sender: 'Система',
      audio: 'tts-41',
      startTime: timeDiff + 643,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 643.1,
      human: true,
    },
    // Sergey (VNK3 после закрытия клапана 318)
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '12,64' },
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
            // { name: '115_SPW',  text: '433,0' },
            // { name: '115_SPT',  text: '108,0' },
            // { name: '115_KP_2', text: '500,0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221,1' },
            // { name: '123_SP_2', text: '1200,0' },
            // { name: '123_KP_2', text: '28,54' },
            // { name: '123_GAZ',  text: '0,00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
            { name: 'kl_319', color: '#06FF06' },
            { name: 'circle_dutyo', color: '#000' },
            { name: 'circle_nagrev', color: '#000' },
            { name: 'circle_otdeleniye_1', color: '#000' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#ff0000' },
            { name: 'kl_310_1', color: '#06FF06' },
            { name: 'kl_310_2', color: '#06FF06' },
          ],
        },
      },
      startTime: timeDiff + 643.11,
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
          { x: 82.90, y: 45.15, w: 1.5, h: 2.0, id: 'close_w1', },
          { x: 75.45, y: 53.10, w: 4.0, h: 2.6, id: 'auto', },
          { x: 79.80, y: 53.10, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 75.45, y: 57.00, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 79.80, y: 57.00, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 75.45, y: 60.00, w: 8.5, h: 2.9, id: 'stop', },
          { x: 75.45, y: 65.20, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 75.45, y: 70.55, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 646.4,
      human: true,
    },
    {
      action: {
        target2D: 'close_ventil',  // окно ВН  "Закрыть"
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
      startTime: timeDiff + 646.6,
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
      },
      startTime: timeDiff + 646.8,
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
      startTime: timeDiff + 647.8,
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
      startTime: timeDiff + 648.8,
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
      startTime: timeDiff + 649.8,
    },
    ////--------------------------------43----------------------------------------//88//-new 310
    {
      text: 'Закрыть клапан 310.',
      sender: 'Система',
      audio: 'tts-42',
      startTime: timeDiff + 650,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 650.1,
      human: true,
    },
    // Sergey (VNK3 после закрытия клапана 319)
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '12,62' },
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
            // { name: '115_SPW',  text: '433,0' },
            // { name: '115_SPT',  text: '108,0' },
            // { name: '115_KP_2', text: '500,0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221,1' },
            // { name: '123_SP_2', text: '1200,0' },
            // { name: '123_KP_2', text: '28,54' },
            // { name: '123_GAZ',  text: '0,00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
            { name: 'kl_310_1', color: '#06FF06' },
            { name: 'kl_310_2', color: '#06FF06' },
          ],
        },
      },
      startTime: timeDiff + 650.11,
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
          { x: 91.30, y: 63.90, w: 1.5, h: 2.0, id: 'close_w1', },
          { x: 83.80, y: 71.80, w: 4.0, h: 2.6, id: 'auto', },
          { x: 88.15, y: 71.80, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 83.80, y: 75.80, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 88.15, y: 75.80, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 83.80, y: 78.60, w: 8.5, h: 2.9, id: 'stop', },
          { x: 83.80, y: 83.95, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 83.80, y: 89.35, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 651.5,
      human: true,
    },
    {
      action: {
        target2D: 'close_ventil',
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
      startTime: timeDiff + 651.6,
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
      },
      startTime: timeDiff + 651.8,
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
      startTime: timeDiff + 652.8,
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
      startTime: timeDiff + 653.8,
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
      startTime: timeDiff + 654.8,
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
      startTime: timeDiff + 654.9,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 655,
      human: true,
    },
    ////--------------------------------44----------------------------------------//89//-new 
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 655.1,
    },
    // Sergey (VNK3 после закрытия клапана 310)
    {
      action: {
        window2D: {
          elements: [
            { name: '7PI_13', text: '12,32' },
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
            // { name: '115_SPW',  text: '433,0' },
            // { name: '115_SPT',  text: '108,0' },
            // { name: '115_KP_2', text: '500,0' },
            // { name: '115_GAZ',  text: '112221' },
            // { name: 'V1_t1_5', text: 'Работа', color: '#06FF06' },
            // { name: '123_PV_2', text: '1221,1' },
            // { name: '123_SP_2', text: '1200,0' },
            // { name: '123_KP_2', text: '28,54' },
            // { name: '123_GAZ',  text: '0,00' },
            // { name: 'V1_t2_4',  text: 'Работа', color: '#06FF06' },
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
            { name: 'kl_321', color: '#06FF06' },
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
            { name: 'circle_otdeleniye_1', color: '#06FF06' },
            { name: 'circle_otdeleniye_2', color: '#000' },
            { name: 'kl_336a', color: '#ff0000' },
            { name: 'kl_318a', color: '#ff0000' },
            { name: 'kl_318', color: '#ff0000' },
            { name: 'kl_310_1', color: '#ff0000' },
            { name: 'kl_310_2', color: '#ff0000' },
          ],
        },
      },
      startTime: timeDiff + 655.11,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 657,
      human: true,
    },
    {
      text: 'Шибера закрыты.',
      sender: 'Газовщик',
      audio: 'tts-vo53',
      startTime: timeDiff + 658,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 661,
    },
    {
      scenarioText: 'Взять печь на «тягу»',
      sender: 'Система',
      startTime: timeDiff + 662,
    },
    {
      text: 'Берём печь на тягу.',
      sender: 'Мастер печи',
      audio: 'tts-vo54',
      startTime: timeDiff + 663,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 663.1,
      human: true,
    },
    {
      text: 'Выполняю, берём печь на тягу.',
      sender: 'Газовщик',
      audio: 'tts-vo55',
      startTime: timeDiff + 664,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 666,
    },
    ////--------------------------------97----------------------------------------
    {
      text: 'Перевести на дистанцию клапан тяги 022.',
      sender: 'Система',
      audio: 'tts-43',
      startTime: timeDiff + 667,
    },
    {
      action: {
        target3D: '25408591-8ddd-4b64-a7ad-499aaa995ae6',
        rotation: { y: 6.370451606381854 },
      },
      duration: 0.3,
      startTime: timeDiff + 668,
      human: true,
    },
    ////--------------------------------46----------------------------------------//92//-new 
    {
      text: 'Открыть клапан тяги 022.',
      sender: 'Система',
      startTime: timeDiff + 669,
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
          { x: 94.60, y: 26.10, w: 1.5, h: 2.0, id: 'close_w1', },
          { x: 87.18, y: 34.00, w: 4.0, h: 2.6, id: 'auto', },
          { x: 91.55, y: 34.00, w: 4.0, h: 2.6, id: 'ruchnoi', },
          { x: 87.18, y: 37.82, w: 4.0, h: 2.6, id: 'open_vn', },
          { x: 91.55, y: 37.82, w: 4.0, h: 2.6, id: 'close_ventil', },
          { x: 87.18, y: 40.82, w: 8.5, h: 2.9, id: 'stop', },
          { x: 87.18, y: 45.95, w: 8.5, h: 2.6, id: 'sbros_oshibki', },
          { x: 87.18, y: 51.30, w: 8.5, h: 2.6, id: 'baypas_blokirovok', }
        ]
      },
      startTime: timeDiff + 669.1,
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
      startTime: timeDiff + 669.2,
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
      },
      startTime: timeDiff + 669.3,
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
            { name: 'kl_022', color: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 670,
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
      startTime: timeDiff + 671,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_022', color: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 672,
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
      startTime: timeDiff + 673,
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
      startTime: timeDiff + 673.1,
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
      startTime: timeDiff + 673.2,
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
      },
      startTime: timeDiff + 673.3,
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
            { name: 'kl_022', color: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 674,
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
      startTime: timeDiff + 675,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_022', color: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 676,
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
      startTime: timeDiff + 677,
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
      startTime: timeDiff + 677.1,
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
      startTime: timeDiff + 677.2,
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
      },
      startTime: timeDiff + 677.3,
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
            { name: 'kl_022', color: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 678,
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
      startTime: timeDiff + 679,
    }, {
      action: {
        window2D: {
          elements: [
            { name: 'left_vn', color: '#06FF06' },
            { name: 'right_vn', color: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'circle_n_winVN', stroke: '#06FF06' },
            { name: 'kl_022', color: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
            { name: 'circle_kl022', stroke: '#06FF06' },
          ]
        }
      },
      startTime: timeDiff + 680,
    },
    {
      action: {
        target2D: 'close_w1',
      },
      startTime: timeDiff + 680.5,
      human: true,
    },
    {
      text: 'Клапан тяги открыт',
      sender: 'Система',
      audio: 'tts-44',
      startTime: timeDiff + 681,
    },
    /// 47 sound
    {
      action: {
        target3D: 'vozNagr1_1', // Tkyp_1
        color: 'green',
        number: '1333',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'vozNagr1_2', // Tdym_1
        color: 'green',
        number: '270.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'vozNagr2_1', // Tkyp_2
        color: 'green',
        number: '1153',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'vozNagr2_2', // Tdym_2
        color: 'green',
        number: '154.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'vozNagr3_1', // Tkyp_3
        color: 'green',
        number: '1216',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'vozNagr3_2', // Tdym_3
        color: 'green',
        number: '134.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_1', // VNK1_Fr /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_2', // VNK2_Fr /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'rashodSmeshGaza_3', // VNK3_Fr /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_1', // VNK1_Fb /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_2', // VNK2_Fb /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'rashodVozdyhGor_3', // VNK3_Fb /10^4
        color: 'green',
        number: '000.0',
      },
      startTime: timeDiff + 681.12,
    },
    {
      action: {
        target3D: 'davVozGorBVN', // PI_16_proc
        color: 'green',
        number: '00.00',
      },
      startTime: timeDiff + 681.12,
    },
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
            { name: 'M_t1_4', text: 'Работа', color: '#06FF06' },
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
            { name: 'M_t4_4', text: 'Работа', color: '#06FF06' },
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
      startTime: timeDiff + 681.11,
    },
    {
      text: 'Сообщить по рации в «Литейный фурменный поддоменник».',
      sender: 'Система',
      audio: 'radio_say',
      startTime: timeDiff + 682,
    },
    ////--------------------------------47 orig----------------------------------------//93//-new 
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 685,
      human: true,
    },
    {
      text: 'Печь на тяге.',
      sender: 'Газовщик',
      audio: 'tts-vo56',
      startTime: timeDiff + 686,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 689,
    },
    {
      text: 'Хорошо.',
      sender: 'Мастер печи',
      audio: 'tts-vo57',
      startTime: timeDiff + 690,
    },
    {
      action: {
        target3D: 'ButtonHightlight_046',
      },
      startTime: timeDiff + 690.1,
      human: true,
    },
    {
      text: 'Доменная печь №6 остановлена.',
      sender: 'Газовщик',
      audio: 'tts-vo58',
      startTime: timeDiff + 691,
    },
    {
      action: {
        target3D: 'Lamp_034',
        material: 'DonorLamp_off',
      },
      startTime: timeDiff + 694,
    },
    {
      text: 'Доменная печь №6 остановлена.',
      sender: 'Система',
      startTime: timeDiff + 695,
    },
    /**/
  ],
    // 2 scenario
    [
      // #region qs/qsa
      /*
      ////-----------------------------------27
      {
        chapterText: 'Повышение давления ГД до 0,6-0,8 кгс/см²',
        text: 'Делаем 0,7.',
        sender: 'Мастер печи',
        audio: 'tts-vo69',
        startTime: timeDiff + 3,
      },
      {
        action: {
          target3D: 'ButtonHightlight_046',
        },
        startTime: timeDiff + 6,
        human: true,
      },
      {
        text: 'Делаю 0,7.',
        sender: 'Газовщик',
        audio: 'tts-vo70',
        startTime: timeDiff + 7,
      },
      {
        action: {
          target3D: 'Lamp_034',
          material: 'DonorLamp_off',
        },
        startTime: timeDiff + 10,
      },
      ////-----------------------------------28
      {
        // scenarioText: 'Повысить давление.', // TODO какой то баг
        text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 0,4 кгс/см².',
        sender: 'Система',
        audio: 'tts-53',
        startTime: timeDiff + 11,
      },     
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0.785 },
        },
        duration: 0.15,
        startTime: timeDiff + 12,
        human: true,
      },
      {
        action: {
          target3D: 'Lamp_Red_020',
          material: 'Unic_Lamp_Red_Off',
        },
        startTime: timeDiff + 12.1,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0 },
        },
        duration: 0.15,
        startTime: timeDiff + 13,
        human: true,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0.785 },
        },
        duration: 0.15,
        startTime: timeDiff + 14,
        human: true,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0 },
        },
        duration: 0.15,
        startTime: timeDiff + 15,
        human: true,
      },
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
        startTime: timeDiff + 15.1,
      },
      {
        action: {
          target3D: 'tGorDut', 
          color: 'green',
          number: '1165.'
        },
        startTime: timeDiff + 15.101,
      },
      ////-----------------------------------29
      {
        text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
        sender: 'Система',
        audio: 'SoundSnortFurma',
        startTime: timeDiff + 16,
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
        startTime: timeDiff + 17,
        human: true,
      },
      ////-----------------------------------30
      {
        // scenarioText: 'Установить БЗУ на автоматический режим.', // TODO какой то баг
        text: 'Установить БЗУ на автоматический режим.',
        sender: 'Система',
        audio: 'tts--30',
        startTime: timeDiff + 18,
      },
      {
        action: { target3D: 'Rectangle071' },
        startTime: timeDiff + 18.1,
        human: true,
      },
      { action: { target3D: 'Rectangle071', material: 'ButtonLightOn' }, startTime: timeDiff + 18.5,},
      { action: { target3D: 'Rectangle072', material: 'ButtonLightOff' }, startTime: timeDiff + 19,},
      { action: { target3D: 'Rectangle070', material: 'ButtonLightOff' }, startTime: timeDiff + 19,},
      { action: { target3D: 'Rectangle084', material: 'ButtonLightOff' }, startTime: timeDiff + 19,},
  
      { action: { target3D: 'Rectangle069', material: 'ButtonLightOn' }, startTime: timeDiff + 19,},
      { action: { target3D: 'Rectangle114', material: 'ButtonLightOn' }, startTime: timeDiff + 19,},
      { action: { target3D: 'Rectangle083', material: 'ButtonLightOn' }, startTime: timeDiff + 19,},
      { action: { target3D: 'Rectangle104', material: 'ButtonLightOn' }, startTime: timeDiff + 19,},
      { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '242.5' }, startTime: timeDiff + 19,},
      { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '047.0' }, startTime: timeDiff + 19,},
  
      { action: { target3D: 'Rectangle069', material: 'ButtonLightOff' }, startTime: timeDiff + 20,},
      { action: { target3D: 'Rectangle114', material: 'ButtonLightOff' }, startTime: timeDiff + 20,},
      { action: { target3D: 'Rectangle083', material: 'ButtonLightOff' }, startTime: timeDiff + 20,},
      { action: { target3D: 'Rectangle104', material: 'ButtonLightOff' }, startTime: timeDiff + 20,},
  
      { action: { target3D: 'Rectangle069', material: 'ButtonLightOn' }, startTime: timeDiff + 21,},
      { action: { target3D: 'Rectangle114', material: 'ButtonLightOn' }, startTime: timeDiff + 21,},
      { action: { target3D: 'Rectangle083', material: 'ButtonLightOn' }, startTime: timeDiff + 21,},
      { action: { target3D: 'Rectangle104', material: 'ButtonLightOn' }, startTime: timeDiff + 21,},
  
      { action: { target3D: 'Rectangle069', material: 'ButtonLightOff' }, startTime: timeDiff + 22,},
      { action: { target3D: 'Rectangle114', material: 'ButtonLightOff' }, startTime: timeDiff + 22,},
      { action: { target3D: 'Rectangle083', material: 'ButtonLightOff' }, startTime: timeDiff + 22,},
      { action: { target3D: 'Rectangle104', material: 'ButtonLightOff' }, startTime: timeDiff + 22,},
      { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '277.5' }, startTime: timeDiff + 22,},
      { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '046.6' }, startTime: timeDiff + 22,},
  
      { action: { target3D: 'Rectangle069', material: 'ButtonLightOn' }, startTime: timeDiff + 23,},
      { action: { target3D: 'Rectangle114', material: 'ButtonLightOn' }, startTime: timeDiff + 23,},
      { action: { target3D: 'Rectangle083', material: 'ButtonLightOn' }, startTime: timeDiff + 23,},
      { action: { target3D: 'Rectangle104', material: 'ButtonLightOn' }, startTime: timeDiff + 23,},
  
      {
        text: 'Сбросить сигнал тревоги.',
        sender: 'Система',
        audio: 'tts--30(1)',
        startTime: timeDiff + 24,
      },
      {
        action: { target3D: 'Rectangle053' },
        startTime: timeDiff + 25,
        human: true,
      },
      { action: { target3D: 'Rectangle053', material: 'ButtonLightOn' }, startTime: timeDiff + 25.5, },
      { action: { target3D: 'Rectangle055', material: 'ButtonLightOff' }, startTime: timeDiff + 26, },
  
      { action: { target3D: 'Rectangle066', material: 'ButtonLightOn' }, startTime: timeDiff + 26,},
      { action: { target3D: 'Rectangle054', material: 'ButtonLightOn' }, startTime: timeDiff + 26,},
      { action: { target3D: 'bzuFactUgol_l', color: 'red', number: '178.6' }, startTime: timeDiff + 26,},
      { action: { target3D: 'bzuFactUgol_r', color: 'red', number: '046.6' }, startTime: timeDiff + 26,},
  
      { action: { target3D: 'Rectangle066', material: 'ButtonLightOff' }, startTime: timeDiff + 27,},
      { action: { target3D: 'Rectangle054', material: 'ButtonLightOff' }, startTime: timeDiff + 27,},
  
      { action: { target3D: 'Rectangle066', material: 'ButtonLightOn' }, startTime: timeDiff + 28,},
      { action: { target3D: 'Rectangle054', material: 'ButtonLightOn' }, startTime: timeDiff + 28,},
  
      { action: { target3D: 'Rectangle066', material: 'ButtonLightOff' }, startTime: timeDiff + 29,},
      { action: { target3D: 'Rectangle054', material: 'ButtonLightOff' }, startTime: timeDiff + 29,},
  
      { action: { target3D: 'Rectangle066', material: 'ButtonLightOn' }, startTime: timeDiff + 30,},
      { action: { target3D: 'Rectangle054', material: 'ButtonLightOn' }, startTime: timeDiff + 30,},
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
              { name: 'leviy', color: '#ff1e00' }, 
              { name: 'praviy', color: '#ff1e00' }, 
              { name: 'pech_left_down_zaglushka', color: '#ff1e00' }, 
              { name: 'Krasniy nijniy Poloska', color: '#ff1e00' }, 
  
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
        startTime: timeDiff + 30,
      },
      ////-----------------------------------31
      {
        text: 'Проверка шагов управления.',
        sender: 'Система',
        audio: 'tts--31',
        startTime: timeDiff + 31,
      },
      {
        action: {
          target2D: 'hagi upravleniy1',
          window2D: {
            elements: [ { name: 'shagUprav_bunkerNum', text: 'Бункер 1' }, ]
          },
        },
        startTime: timeDiff + 32,
        human: true,
      },
      {
        action: { target2D: 'shagi_uprav_close_btn',},
        startTime: timeDiff + 32.5,
        human: true,
      },
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
        startTime: timeDiff + 33,
        human: true,
      },
      {
        action: { target2D: 'shagi_uprav_close_btn',},
        startTime: timeDiff + 33.5,
        human: true,
      },
      ////-----------------------------------32
      {
        // scenarioText: 'Повысить давление.', // TODO какой то баг
        text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 0,55 кгс/см².',
        sender: 'Система',
        audio: 'tts--32',
        startTime: timeDiff + 34,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0.785 },
        },
        duration: 0.15,
        startTime: timeDiff + 35,
        human: true,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0 },
        },
        duration: 0.15,
        startTime: timeDiff + 36,
        human: true,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0.785 },
        },
        duration: 0.15,
        startTime: timeDiff + 37,
        human: true,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0 },
        },
        duration: 0.15,
        startTime: timeDiff + 38,
        human: true,
      },
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
        startTime: timeDiff + 38.1,
      },
      ////-----------------------------------33
      {
        text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
        sender: 'Система',
        audio: 'SoundSnortFurma',
        startTime: timeDiff + 39,
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
        startTime: timeDiff + 40,
        human: true,
      },
      ////-----------------------------------34
      {
        // scenarioText: 'При необходимости открыть смесительно-предохранительный клапан (для поддержания заданной температуры горячего дутья).', // TODO какой то баг
        text: 'Отрегулировать температуру дутья.',
        sender: 'Система',
        audio: 'tts-53',
        startTime: timeDiff + 41,
      },
      */
      // #endregion
      ////-----------------------------------35
      {
        // scenarioText: 'При необходимости открыть смесительно-предохранительный клапан (для поддержания заданной температуры горячего дутья).', // TODO какой то баг
        text: 'Открыть смесительно-предохранительный клапан 002.',
        sender: 'Система',
        audio: 'tts--35',
        startTime: timeDiff + 44,
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
        startTime: timeDiff + 45,
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
        startTime: timeDiff + 45.1,
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
        startTime: timeDiff + 45.2,
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
        startTime: timeDiff + 45.3,
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
        startTime: timeDiff + 45.4,
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
        startTime: timeDiff + 46,
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
        startTime: timeDiff + 47,
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
        startTime: timeDiff + 48,
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
        startTime: timeDiff + 49,
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
        startTime: timeDiff + 50,
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
        startTime: timeDiff + 50.1,
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
        startTime: timeDiff + 50.2,
        human: true,
      },
      {
        action: { target2D: 'close_w1', },
        startTime: timeDiff + 50.3,
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
              { name: 'kl038_proc', text: '0' },
              { name: 'kl028_proc', text: '0' },
              { name: 'kl020_proc', text: '100' },
              { name: 'kl036v_proc', text: '0' },
              { name: 'kl036b_proc', text: '0' },
              { name: 'kl048_proc', text: '0' },
              { name: 'kl029_proc', text: '100' },
              { name: 'kl004_proc', text: '100' },
              { name: 'PI_16_proc', text: '0,40' },
              { name: 'ramka_PI_16', color: '#ff1e00' },
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
        startTime: timeDiff + 50.4,
      },
      ////-----------------------------------35
      {
        // scenarioText: 'Повысить давление.', // TODO какой то баг
        text: 'Прикрывая клапан «СНОРТ» поднять давление горючего дутья до 0,7 кгс/см².',
        sender: 'Система',
        audio: 'tts--32',
        startTime: timeDiff + 51,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0.785 },
        },
        duration: 0.15,
        startTime: timeDiff + 52,
        human: true,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0 },
        },
        duration: 0.15,
        startTime: timeDiff + 53,
        human: true,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0.785 },
        },
        duration: 0.15,
        startTime: timeDiff + 54,
        human: true,
      },
      {
        action: {
          target3D: '128f49df-9d0a-4b03-b177-dfa710831d6f',
          rotation: { y: 0 },
        },
        duration: 0.15,
        startTime: timeDiff + 55,
        human: true,
      },
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
        startTime: timeDiff + 55.1,
      },
      ////-----------------------------------36
      {
        text: 'Проконтролировать давление на клапане «СНОРТ» и на фурмах.',
        sender: 'Система',
        audio: 'SoundSnortFurma',
        startTime: timeDiff + 56,
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
        startTime: timeDiff + 57,
        human: true,
      },
      ////-----------------------------------34
  
      // ЗАГЛУШКА ПРОСТО
      { action: { window2D: { elements: [] } }, startTime: timeDiff + 15000.1, },
  
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