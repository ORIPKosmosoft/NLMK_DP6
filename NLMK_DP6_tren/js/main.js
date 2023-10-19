/*                 TODO
----------------------------------------------------
Сделать ресайзер для 2Д и 3Д
----------------------------------------------------
переработать систему сообщений
----------------------------------------------------
*/
document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
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

  function removeStartScreen() {
    document.querySelector('.header').style.top = -document.querySelector('.header').getBoundingClientRect().bottom - 10 + 'px';
    document.querySelector('.section').style.left = -document.querySelector('.section').getBoundingClientRect().width * 1.1 + 'px';
  }

  function revialTrenScreen() {
    document.querySelector('.tren-container').style.visibility = 'visible';
    document.querySelector('.tren-container').style.transition = 'opacity 0.5s ease 0.5s';
    document.querySelector('.tren-container').style.opacity = 1;
  }

  function prepareTren(TrenType, Scenario, Index) {
    if (devHelper.trenVals.actionArr[Index].actions) {
      removeStartScreen();
      revialTrenScreen();
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

  document.querySelectorAll('.dropdown-container .dropdown-content').forEach((Element) => {
    Element.style.marginTop = `-${Element.getBoundingClientRect().height + 50}px`;
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
      } else {
        e.currentTarget.classList.toggle('drop-item-active', false);
        e.currentTarget.querySelector('span').classList.toggle('drop-span-active', false);
        document.querySelector('.scenarion-buttons-container').style.visibility = 'hidden';
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
        prepareTren(e.currentTarget.querySelector('span').innerText === 'Обучение' ? 'learn' : 'test', document.querySelector('.drop-item-active').querySelector('span').innerText, Array.from(document.querySelectorAll('.drop-item')).indexOf(document.querySelector('.drop-item-active')));
      }
    });
  })

  document.querySelectorAll('.drop-title').forEach((Element) => {
    Element.addEventListener('click', (e) => {
      e.currentTarget.querySelector('img').classList.toggle('arrow-text-active');
      e.currentTarget.nextElementSibling.children[0].style.marginTop = e.currentTarget.querySelector('img').classList.contains('arrow-text-active') ? '1vh' :
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

window.addEventListener('load', function () {
  document.querySelectorAll('.section .nav-icon').forEach((Element, index) => {
    Element.addEventListener('click', guideBtnsClick);
    if (index === 0) {
      Element.classList.toggle('nav-icon-active', true);
      Array.from(Element.querySelector('object').contentDocument.querySelector('svg').children).forEach((SvgElem) => {
        if (SvgElem.hasAttribute('fill')) SvgElem.setAttribute('fill', '#f4f4f4');
      })
    }
  });
});

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
