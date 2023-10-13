/*                 TODO
----------------------------------------------------
Сделать ресайзер для 2Д и 3Д
----------------------------------------------------
переработать систему сообщений
----------------------------------------------------
*/
document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  devHelper.trenVals.scenario = undefined;
  devHelper.trenVals.messages = {
    normal: [],
    error: []
  }
  let scenarioBoxes = document.querySelectorAll('.scenario-box');

  scenarioBoxes.forEach((box, Index) => {
    box.classList.toggle('scenario-box-clicked', false);
    box.classList.toggle('scenario-box', true);
    box.addEventListener('click', function (e) {
      e.currentTarget.classList.toggle('scenario-box-clicked', true);
      e.currentTarget.classList.toggle('scenario-box', false);
      Array.from(document.querySelector('.scenarion-buttons').children).forEach((Element) => {
        Element.classList.toggle('scenarion-button-active', true);
        Element.onclick = (e) => prepareTren(e.currentTarget.innerText, box.innerText, Index);
      })

      scenarioBoxes.forEach(function (elem) {
        if (elem !== e.currentTarget) {
          elem.classList.toggle('scenario-box-clicked', false);
          elem.classList.toggle('scenario-box', true);
        }
      });
    });
  });


  document.querySelector('.tren-container').addEventListener('transitionend', (e) => {
    if (e.propertyName === 'opacity') {
      e.currentTarget.style.visibility = e.currentTarget.style.opacity === '0' ? 'hidden' : 'visible';
      if (e.currentTarget.style.opacity === '0') {
        e.currentTarget.style.visibility = 'hidden';
        document.querySelector('.header').style.top = '0px';
        document.querySelectorAll('.section')[0].style.left = '0px';
        document.querySelectorAll('.section')[1].style.left = '0px';
        document.querySelector('.start-container').style.visibility = 'visible';
      } else e.currentTarget.style.visibility = 'visible';
    }
  })

  document.querySelector('.exit').addEventListener('click', (e) => {
    document.querySelector('.tren-container').style.opacity = 0;
  })

  function removeStartScreen(argument) {
    document.querySelector('.header').style.top = -document.querySelector('.header').getBoundingClientRect().bottom - 10 + 'px';
    document.querySelector('.section').style.left = -window.innerWidth / 2 + 'px';
    document.querySelectorAll('.section')[1].style.left = '101%';
    Array.from(document.querySelectorAll('.section')).forEach((Element) => {
      Element.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'left' && (Element.style.left === -window.innerWidth / 2 + 'px' || Element.style.left === '101%')) {
          document.querySelector('.start-container').style.visibility = 'hidden';
          document.querySelector('.tren-container').style.visibility = 'visible';
        }
      });
    })
  }

  function prepareTren(TrenType, Scenario, Index) {
    if (devHelper.trenVals.actionArr[Index].actions) {
      removeStartScreen();
      document.querySelector('.tren-container').style.transition = 'opacity 0.5s ease 0.5s';
      document.querySelector('.tren-container').style.opacity = 1;
      devHelper.trenVals.type = TrenType;
      devHelper.trenVals.scenario = Index;
    } else {
      let popupDiv = document.createElement('div');
      popupDiv.classList.add('popup-alert');
      popupDiv.innerHTML = `Вы не можете воспроизвести этот сценарий сейчас.`;
      document.body.append(popupDiv);
      document.body.addEventListener('mousedown', () => { if (document.querySelector('.popup-alert')) document.querySelector('.popup-alert').remove() });
    }
  }

  function guideBtnsClick(e) {
    if (!e.currentTarget.classList.contains('nav-icon-active')) {
      document.querySelectorAll('.section .nav-icon').forEach((Element2) => {
        Element2.classList.toggle('nav-icon-active', false);
        Array.from(Element2.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
          if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
        })
      })
      e.currentTarget.classList.toggle('nav-icon-active', true);
      Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
        if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f4f4f4');
      })

      if (document.querySelector('.text-container-active')) {
        document.querySelector('.text-container-active').classList.toggle('text-container-active', false);
      }
      let newTextIndex = Array.from(e.currentTarget.parentElement.children).indexOf(e.currentTarget);
      let textConNew = document.querySelector('.info-container').children[newTextIndex];
      textConNew.classList.toggle('text-container-active', true);
      document.querySelector('.info-container').children[0].style.marginTop = `-${newTextIndex * textConNew.getBoundingClientRect().height}px`;
      
      if (document.querySelector('.arrow-text-active')) {
        document.querySelectorAll('.arrow-text-active').forEach((Element) => {
          Element.parentElement.dispatchEvent(new Event('click'));
        })
      }

      if (document.querySelector('.info-container').querySelector('.drop-item-active')) {
        document.querySelector('.info-container').querySelector('.drop-item-active').classList.toggle('drop-item-active', false);
        document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
      }
    }
  }
  document.querySelectorAll('.section .nav-icon').forEach((Element, index) => {
    Element.addEventListener('click', guideBtnsClick);
    if (index === 0) Element.dispatchEvent(new Event('click'));
  });

  document.querySelectorAll('.dropdown-container .dropdown-content').forEach((Element) => {
    Element.style.marginTop = `-${Element.getBoundingClientRect().height}px`;
    Element.classList.remove('first-drop');
  })

  document.querySelectorAll('.dropdown-content .drop-item').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('drop-item-active')) {
        document.querySelectorAll('.dropdown-content .drop-item').forEach((Element2) => {
          if (Element2 !== e.currentTarget) {
            Element2.querySelector('span').classList.toggle('drop-span-active', false);
            Element2.classList.toggle('drop-item-active', false);
          }
        });
        e.currentTarget.querySelector('span').classList.toggle('drop-span-active', true);
        e.currentTarget.classList.toggle('drop-item-active', true);
        let btnCon = document.querySelector('.scenarion-buttons-container');
        btnCon.querySelectorAll('.scenarion-button').forEach((Element3) => {
          Element3.classList.toggle('scenarion-button-active', false);
          Array.from(Element3.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
            if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
          })
        })
        e.currentTarget.parentElement.prepend(btnCon);
        btnCon.style.visibility = 'visible';
        btnCon.style.position = 'relative';
        btnCon.style.marginTop = -btnCon.getBoundingClientRect().height + 'px';
        btnCon.style.transform = `translateY(${(e.currentTarget.getBoundingClientRect().height + window.innerHeight * 0.02) * Array.from(e.currentTarget.parentElement.children).indexOf(e.currentTarget) - window.innerHeight * 0.02}px`;

      }
    });
  });

  document.querySelectorAll('.scenarion-button').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('scenarion-button-active')) {
        document.querySelectorAll('.scenarion-button').forEach((Element2) => {
          if (Element2 !== e.currentTarget) {
            Element2.classList.toggle('scenarion-button-active', false);
            Array.from(Element2.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
              if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#7c7c7c');
            })
          }
        })
        e.currentTarget.classList.toggle('scenarion-button-active', true);
        Array.from(e.currentTarget.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
          if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f4f4f4');
        })
      }
      // prepareTren(devHelper.trenVals.type, devHelper.trenVals.scenario, e.currentTarget.dataset.index);
    });
  })

  document.querySelectorAll('.drop-title').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      e.currentTarget.querySelector('img').classList.toggle('arrow-text-active');
      e.currentTarget.nextElementSibling.children[0].style.marginTop = e.currentTarget.querySelector('img').classList.contains('arrow-text-active') ? '' :
        `-${e.currentTarget.nextElementSibling.children[0].getBoundingClientRect().height}px`;
      if (e.currentTarget.nextElementSibling.querySelector('.drop-item-active')) {
        e.currentTarget.nextElementSibling.querySelector('.drop-item-active').classList.toggle('drop-item-active', false);
        document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
      }
    })
  })


  loadTrenActions();

}
setInterval(() => {
  for (let i = 0; i < document.querySelectorAll('.photo').length; i++) {
    const Element = document.querySelectorAll('.photo')[i];
    Element.style.transition = 'opacity 1s ease';
    if (Element.style.opacity === '1') {
      Element.style.opacity = 0;
      let nextElem = Element.nextElementSibling.classList.contains('photo') ? Element.nextElementSibling : document.querySelector('.photo');
      nextElem.style.transition = 'opacity 1s ease';
      nextElem.style.opacity = 1;
      break
    }
  }
}, 4000)


function changeMessageWindow(Num) {
  document.querySelector('.message').innerHTML = Num === 0 ? devHelper.trenVals.messages.normal : devHelper.trenVals.messages.error;
  document.querySelector('.message').style.backgroundColor = Num === 0 ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 0, 0, 0.4)';
}
