document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('object').forEach((ElementObj) => {
    devHelper.svgVals.push({
      object: ElementObj,
      svg: ElementObj.contentDocument.querySelector('svg'),
      name: ElementObj.contentDocument.querySelector('svg').baseURI.substring(ElementObj.contentDocument.querySelector('svg').baseURI.lastIndexOf('/') + 1, ElementObj.contentDocument.querySelector('svg').baseURI.indexOf('.svg')),
      activeElements: [],
    })
  })



  devHelper.svgVals.forEach((Element, Index) => {
    if (Element.name === 'dp') {
      let mainSVG = Element.svg;
      Element.svg.querySelectorAll('text').forEach(TextElement => {
        if (TextElement.innerHTML === '4,32') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_1'
          })
        }
        if (TextElement.innerHTML === '4,22') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_2'
          })
        }

      })
    }
  })



  console.log(devHelper);
});
