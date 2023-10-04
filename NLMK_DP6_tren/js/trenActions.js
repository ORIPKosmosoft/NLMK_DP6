
/*                 TODO
----------------------------------------------------
----------------------------------------------------
*/
const trenWorkObj = { dev: true, activeAction: 0, trenTimer: 0, currentActionTime: 0, waitingInput: true, trenType: undefined, trenEnded: false, realTimer: 0, activeControlCamera: true, unicMeshArr: [] };
/*                 action
----------------------------------------------------
открыть
закрыть
контролировать
----------------------------------------------------
*/
let tempActions = [
  [
    {
      text: 'Заменить1',
      action: 'открыть',
      target: 'TV1',
      duration: 3
    }, {
      text: 'Заменить2',
      action: 'контролировать',
      target: 'TV2',
      duration: 3
    },{
      text: 'Заменить3',
      action: 'закрыть',
      target: 'TV3',
      duration: 3
    },
  ]
];
