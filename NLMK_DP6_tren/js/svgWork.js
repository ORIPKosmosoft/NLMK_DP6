/*----------TODO----------------------------------------------------
Сделать размеы хелпера в пикселях

w 1427 - 1307 (91.57%)  
h 840 - 743 (88,45%)
x 33 (2,31)
y -800

w 1816 - 1404(77,29%)
h 900 - 800 (88,89%)
x 179 (9,85)
y -862

w 1816 - 1165 (64.16%)
h 748 - 664 (88,77%)
x 303 (16.68)
y -718






58,86 - 91.57 * 88,45
49,55 - 77,29 * 88,89 
41,18 - 64,16 * 88,77

58.86, 49.45, 41.17
2.31, 9.85, 16.68

58,86 - -95,24
49,45 - -95,78
41,17 - -96,12





Сделать зависимость ширина зоны рендера в пикселях и точноых размеров.
--------------------------------------------------------------------
Так смогу найти нужное уравнение для изменения размеров.
А внутри окна хелпера помогаторы можно делать в процентах? Или так же в пикселях?
Ну и продолжить джелать действия без человека
--------------------------------------------------------------------
*/

// console.log(calculateDynamicLeftHelper(49.45));

function findVal(y, q) {
  return (y / q) * 100;
}

let x = findVal(58.86, 100);
// x === 2.31;
console.log(x);

x = findVal(49.55, 100);
// x === 9.85;
console.log(x);

x = findVal(41.1, 100);
console.log(x);

window.addEventListener('load', function () {
  document.querySelector('.svg-scheme-container').querySelectorAll('object').forEach((ObjSvg) => {
    devHelper.svgVals.push({
      name: ObjSvg.data.substring(ObjSvg.data.lastIndexOf('/') + 1, ObjSvg.data.indexOf('.svg')),
      object: ObjSvg,
      svg: ObjSvg.contentDocument.querySelector('svg'),
      activeElements: [],
    })
  })

  devHelper.svgVals.forEach((ObjectSvg, Index) => {
    // if (ObjectSvg.name === 'O_n_k_na_VNK_posle_1') {
    //   ObjectSvg.object.style.left = '0';
    //   ObjectSvg.object.style.top = '0';
    //   ObjectSvg.object.style.visibility = 'visible';
    // }

    if (ObjectSvg.name === 'dp') {
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => {
        if (TextElement.innerHTML === '4,32') { addSvgElem(Index, TextElement, 'P_1'); }
        if (TextElement.innerHTML === '4,22') { addSvgElem(Index, TextElement, 'P_2'); }
        if (TextElement.innerHTML === '30') {
          if (TextIndex < 307)
            addSvgElem(Index, TextElement, 'EKZ_H' + (TextIndex - 222)); else
            addSvgElem(Index, TextElement, 'kol_furm');
        }
        if (TextElement.innerHTML === '0,70') { addSvgElem(Index, TextElement, 'radar1_text'); }
        if (TextElement.innerHTML === '0,97') { addSvgElem(Index, TextElement, 'radar2_text'); }
        if (TextElement.innerHTML === '-1,67') { addSvgElem(Index, TextElement, 'radar3_text'); }
        if (TextElement.innerHTML === '97') { addSvgElem(Index, TextElement, 'H_tryba'); }
        if (TextElement.innerHTML === '582084') { addSvgElem(Index, TextElement, 'F_tryba'); }
        if (TextElement.innerHTML === '2,30') { if (TextIndex === 201) { addSvgElem(Index, TextElement, 'P_col_gaza'); } else { addSvgElem(Index, TextElement, 'P_tryba_1_' + (TextIndex - 287)); } }
        if (TextElement.innerHTML === '1,40') { addSvgElem(Index, TextElement, 'Dp_obsh'); }
        if (TextElement.innerHTML === '1210') {
          if (TextIndex === 198)
            addSvgElem(Index, TextElement, 'T_gor_dyt_tryb_kras'); else if (TextIndex === 203)
            addSvgElem(Index, TextElement, 'T_gor_dyt_table'); else if (TextIndex === 258)
            addSvgElem(Index, TextElement, 'T_gor_dyt_tryb_sin');
        }
        if (TextElement.innerHTML === '30708') {
          if (TextIndex === 199)
            addSvgElem(Index, TextElement, 'F_prir_gaz_tryb'); else
            addSvgElem(Index, TextElement, 'F_prir_gaz_table');
        }
        if (TextElement.innerHTML === '2120') { if (TextIndex === 200) { addSvgElem(Index, TextElement, 'TTG'); } else { addSvgElem(Index, TextElement, 'TTG_zadanie'); } }
        if (TextElement.innerHTML === '1,00') { addSvgElem(Index, TextElement, 'F_par_yvl'); }
        if (TextElement.innerHTML === '5,0') { if (TextIndex === 197) { addSvgElem(Index, TextElement, 'W_par_yvl'); } else { addSvgElem(Index, TextElement, 'Vlaznost'); } }
        if (TextIndex >= 292 && TextIndex <= 295) { addSvgElem(Index, TextElement, 'P_tryba_2_' + (296 - TextIndex)); }
        if (TextElement.innerHTML === '2,47') { addSvgElem(Index, TextElement, 'P_tryba_3_' + (TextIndex - 295)); }
        if (TextIndex >= 298 && TextIndex <= 301) { addSvgElem(Index, TextElement, 'P_tryba_4_' + (TextIndex - 297)); }
        if (TextElement.innerHTML === '2,79') { addSvgElem(Index, TextElement, 'P_tryba_5_1'); }
        if (TextElement.innerHTML === '2,76') { addSvgElem(Index, TextElement, 'P_tryba_5_2'); }
        if (TextElement.innerHTML === '3,07') { addSvgElem(Index, TextElement, 'P_tryba_5_3'); }
        if (TextElement.innerHTML === '3,59') { addSvgElem(Index, TextElement, 'P_tryba_5_4'); }
        if (TextElement.innerHTML === '2,25') { addSvgElem(Index, TextElement, 'P_vbls'); }
        if (TextElement.innerHTML === '0,24') { addSvgElem(Index, TextElement, 'dP_verh'); }
        if (TextElement.innerHTML === '1,93') { addSvgElem(Index, TextElement, 'dP_obsh_tryba'); }
        if (TextElement.innerHTML === '1,69') { addSvgElem(Index, TextElement, 'dP_nish_tryba'); }
        if (TextElement.innerHTML === '2084') { addSvgElem(Index, TextElement, 'TTG_raschet'); }
        if (TextElement.innerHTML === '43,0') { addSvgElem(Index, TextElement, 'N2'); }
        if (TextElement.innerHTML === '26,9') { addSvgElem(Index, TextElement, 'CO'); }
        if (TextElement.innerHTML === '21,9') { addSvgElem(Index, TextElement, 'CO2'); }
        if (TextElement.innerHTML === '52577') { addSvgElem(Index, TextElement, 'EVS_DP7_O'); }
        if (TextElement.innerHTML === '7174') { addSvgElem(Index, TextElement, 'EVS_DP7_F'); }
        if (TextElement.innerHTML === '42753') { addSvgElem(Index, TextElement, 'EVD1_O'); }
        if (TextElement.innerHTML === '365177') { addSvgElem(Index, TextElement, 'EVD1_F'); }
        if (TextElement.innerHTML === '364389') { addSvgElem(Index, TextElement, 'EVD_F'); }
        if (TextElement.innerHTML === '6081') { addSvgElem(Index, TextElement, 'F_evd'); }
        if (TextElement.innerHTML === '5925') { addSvgElem(Index, TextElement, 'F_hol_dyt'); }
        if (TextElement.innerHTML === '80') { addSvgElem(Index, TextElement, 'T_hol_dyt'); }
        if (TextElement.innerHTML === '30,1') { addSvgElem(Index, TextElement, 'O_hol_dyt'); }
        if (TextElement.innerHTML === '1847') { addSvgElem(Index, TextElement, 'FO2_hol_dyt'); }
        if (TextElement.innerHTML === '8,2') { addSvgElem(Index, TextElement, 'H2_tryb'); }
        if (TextElement.innerHTML === '44,8') { addSvgElem(Index, TextElement, 'Nco_tryb'); }
        if (TextElement.innerHTML === '1052') { addSvgElem(Index, TextElement, 'Q_domG_tryb'); }
        if (TextElement.innerHTML === '-0') { addSvgElem(Index, TextElement, 'H_snotr'); }
        if (TextElement.innerHTML === '1327') { addSvgElem(Index, TextElement, 'Tkyp_3'); }
        if (TextElement.innerHTML === '102016') { addSvgElem(Index, TextElement, 'Fvozdyh_3'); }
        if (TextElement.innerHTML === '80994') { addSvgElem(Index, TextElement, 'Fgaz_3'); }
        if (TextElement.innerHTML === '1328') { addSvgElem(Index, TextElement, 'Tkyp_2'); }
        if (TextElement.innerHTML === '120222') { addSvgElem(Index, TextElement, 'Fvozdyh_2'); }
        if (TextElement.innerHTML === '101351') { addSvgElem(Index, TextElement, 'Fgaz_2'); }
        if (TextElement.innerHTML === '1297') { addSvgElem(Index, TextElement, 'Tkyp_1'); }
        if (TextElement.innerHTML === '141') { addSvgElem(Index, TextElement, 'Tdym_3'); }
        if (TextElement.innerHTML === '306') { addSvgElem(Index, TextElement, 'Tdym_2'); }
        if (TextElement.innerHTML === '174') { addSvgElem(Index, TextElement, 'Tdym_1'); }
        if (TextElement.innerHTML === 'НАГРЕВ') { addSvgElem(Index, TextElement, 'Sostoynie_' + (59 - TextIndex)); }
        if (TextElement.innerHTML === 'ДУТЬЕ') { addSvgElem(Index, TextElement, 'Sostoynie_1'); }
        if (TextElement.innerHTML === '68') { addSvgElem(Index, TextElement, 'Temp_peref_1'); }
        if (TextElement.innerHTML === '63') {
          if (TextIndex === 241)
            addSvgElem(Index, TextElement, 'Temp_peref_2'); else
            addSvgElem(Index, TextElement, 'Temp_peref_13');
        }
        if (TextElement.innerHTML === '56') { addSvgElem(Index, TextElement, 'Temp_peref_3'); }
        if (TextElement.innerHTML === '62') {
          if (TextIndex === 243)
            addSvgElem(Index, TextElement, 'Temp_peref_4'); else if (TextIndex === 246)
            addSvgElem(Index, TextElement, 'Temp_peref_8'); else
            addSvgElem(Index, TextElement, 'Temp_peref_11');
        }
        if (TextElement.innerHTML === '61') {
          if (TextIndex === 245)
            addSvgElem(Index, TextElement, 'Temp_peref_5'); else if (TextIndex === 247)
            addSvgElem(Index, TextElement, 'Temp_peref_7'); else
            addSvgElem(Index, TextElement, 'Temp_peref_9');
        }
        if (TextElement.innerHTML === '57') { addSvgElem(Index, TextElement, 'Temp_peref_6'); }
        if (TextElement.innerHTML === '58') { addSvgElem(Index, TextElement, 'Temp_peref_10'); }
        if (TextElement.innerHTML === '59') { addSvgElem(Index, TextElement, 'Temp_peref_12'); }
        if (TextElement.innerHTML === '66') { addSvgElem(Index, TextElement, 'Temp_peref_14'); }
        if (TextElement.innerHTML === '65') { addSvgElem(Index, TextElement, 'Temp_peref_15'); }
        if (TextElement.innerHTML === '64') { addSvgElem(Index, TextElement, 'Temp_peref_16'); }
        if (TextElement.innerHTML === '117') { addSvgElem(Index, TextElement, 'T1'); }
        if (TextElement.innerHTML === '101') { addSvgElem(Index, TextElement, 'T2'); }
        if (TextElement.innerHTML === '114') { addSvgElem(Index, TextElement, 'T3'); }
        if (TextElement.innerHTML === '112') { addSvgElem(Index, TextElement, 'T4'); }
        if (TextElement.innerHTML === '9,7') { addSvgElem(Index, TextElement, 'W_sinij_hol_dyt'); }
        if (TextElement.innerHTML === '8,14') { addSvgElem(Index, TextElement, 'P_Os_szat_voz'); }
        if (TextElement.innerHTML === '34') { addSvgElem(Index, TextElement, 'T_Os_szat_voz'); }
        if (TextElement.innerHTML === '35') { addSvgElem(Index, TextElement, 'H_Os_szat_voz'); }
        if (TextElement.innerHTML === '15') {
          if (TextIndex === 273)
            addSvgElem(Index, TextElement, 'T_prir_gaz');
        }
        if (TextElement.innerHTML === '39') { addSvgElem(Index, TextElement, 'H_prir_gaz'); }
        if (TextElement.innerHTML === '30626') { addSvgElem(Index, TextElement, 'F_pg_sym_prir_gaz'); }
        if (TextElement.innerHTML === '8,56') { addSvgElem(Index, TextElement, 'P_pg_prir_gaz'); }
        if (TextElement.innerHTML === '30719') { addSvgElem(Index, TextElement, 'F_pg_prir_gaz'); }
        if (TextElement.innerHTML === '-93') { addSvgElem(Index, TextElement, 'dF_pg_prir_gaz'); }
        if (TextElement.innerHTML === '1487') { addSvgElem(Index, TextElement, 'L4'); }
        if (TextElement.innerHTML === '49,4') { addSvgElem(Index, TextElement, 'H_step_isp'); }
        if (TextElement.innerHTML === '46,0') { addSvgElem(Index, TextElement, 'HCO_step_isp'); }
        if (TextElement.innerHTML === '216,1') { addSvgElem(Index, TextElement, 'V_dyt'); }
        if (TextElement.innerHTML === '48') { addSvgElem(Index, TextElement, 'F_obsh_pyt'); }
        if (TextElement.innerHTML === '48,1') { addSvgElem(Index, TextElement, 'F_tek_pyt'); }
        if (TextElement.innerHTML === '27') { addSvgElem(Index, TextElement, 'fyrm_v_rab'); }
        if (TextElement.innerHTML === '0,27') { addSvgElem(Index, TextElement, 'par_yvlaz'); }
        if (TextElement.innerHTML === '32,7') { addSvgElem(Index, TextElement, 'ydel_tep_18'); }
        if (TextElement.innerHTML === '60,2') { addSvgElem(Index, TextElement, 'ydel_tep_17'); }
        if (TextElement.innerHTML === '32,4') { addSvgElem(Index, TextElement, 'ydel_tep_16'); }
        if (TextElement.innerHTML === '46,4') { addSvgElem(Index, TextElement, 'ydel_tep_15'); }
        if (TextElement.innerHTML === '75,9') { addSvgElem(Index, TextElement, 'ydel_tep_12_14'); }
        if (TextElement.innerHTML === '33,2') { addSvgElem(Index, TextElement, 'ydel_tep_10_11'); }
        if (TextElement.innerHTML === '19,2') { addSvgElem(Index, TextElement, 'ydel_tep_9'); }
        if (TextElement.innerHTML === '24,9') { addSvgElem(Index, TextElement, 'ydel_tep_8'); }
        if (TextElement.innerHTML === '36,5') { addSvgElem(Index, TextElement, 'ydel_tep_7'); }
        if (TextElement.innerHTML === '0,80') {
          if (TextIndex === 196)
            addSvgElem(Index, TextElement, 'zadan_yrov_kras'); else
            addSvgElem(Index, TextElement, 'zadan_yrov_sin');
        }
        if (TextElement.innerHTML === '0,0') { addSvgElem(Index, TextElement, '02_trub'); }
        if (TextElement.innerHTML === '0') {
          if (TextIndex === 260)
            addSvgElem(Index, TextElement, 'Fvozdyh_1'); else if (TextIndex === 261)
            addSvgElem(Index, TextElement, 'Fgaz_1'); else if (TextIndex === 269)
            addSvgElem(Index, TextElement, 'H001'); else if (TextIndex === 270)
            addSvgElem(Index, TextElement, 'F_osysh_szat_voz'); else if (TextIndex === 328)
            addSvgElem(Index, TextElement, 'EVD2_O'); else if (TextIndex === 316)
            addSvgElem(Index, TextElement, 'H_par_yvlaz');
        }
      })
    }
    if (ObjectSvg.name === 'BVNK_VNK1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => { if (TextElement.innerHTML === '92') { addSvgElem(Index, TextElement, '3TI_43'); } })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') { addSvgElem(Index, Element, '313'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_1'); }
      })
    }
    if (ObjectSvg.name === 'BVNK_VNK3') {
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') { addSvgElem(Index, Element, 'fire_vnk_3'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_3'); }
      })
    }
    if (ObjectSvg.name === 'vnk_main') {
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1712.25 544.97V557l-22.15 28.77c-2.52 3.27-3.73 6.81-3.73 10.94v11.21H1763.72v-12.74c0-4.66-1.42-8.66-4.37-12.26l-20.56-25.18v-12.46h2.36l-.29-.91v-22.21c0-8.54-6.96-12.27-15.5-12.27h-.4c-8.54 0-15.5 3.73-15.5 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1301.37 544.97V557l-22.15 28.77c-2.52 3.27-3.72 6.81-3.72 10.94v11.21h77.35v-12.74c0-4.66-1.43-8.66-4.37-12.26l-20.56-25.18v-12.46h2.35l-.28-.91v-22.21c0-8.54-6.97-12.27-15.51-12.27h-.39c-8.54 0-15.51 3.73-15.51 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_3'); }
      })
    }
    if (ObjectSvg.name === 'O_n_k_na_VNK_posle_1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement) => {
        if (TextElement.innerHTML === 'Управление клапаном 116') { addSvgElem(Index, TextElement, 'title',); }
        if (TextElement.innerHTML === 'Открыт') { addSvgElem(Index, TextElement, 'status_window_text', false); }
        if (TextElement.innerHTML === '100') { addSvgElem(Index, TextElement, 'polozenie_text'); }
        if (TextElement.innerHTML === 'Открыть') { addSvgElem(Index, TextElement, 'polozenie_button_text'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm58.35 75.18 14.08-7.8 14.07-7.8v31.2l-14.07-7.8z') { addSvgElem(Index, Element, 'right_vn'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm58.69 75.18-14.08-7.8-14.08-7.8v31.2l14.08-7.8z') { addSvgElem(Index, Element, 'left_vn'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === '') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === '') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === '') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === '') { addSvgElem(Index, Element, 'vnk_1'); }
      })
      ObjectSvg.svg.querySelectorAll('ellipse').forEach((Element) => {
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '7.8') { addSvgElem(Index, Element, 'circle_1'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '16.12') { addSvgElem(Index, Element, 'circle_2'); }
      })
      ObjectSvg.svg.querySelectorAll('rect').forEach((Element) => {
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '4.14') { addSvgElem(Index, Element, 'btn_open'); }
      })
    }

  })

  devHelper.svgVals.forEach((Element) => {
    makeDynamicTextureDisplay(Element);
    //let tempUnicArr = [];
    Element.activeElements.forEach((Element2) => {
      // Element2.element.innerHTML = 'ВЗЯЛ';
      /* ПРоверка на повторение имён элементов
        let isUnique = true;
        tempUnicArr.forEach(uniqueElement => {
          if (Element2.name === uniqueElement.name) {
            isUnique = false;
            console.warn(`Дублирование элемента ${Element2.name} в схеме ${Element.name}.`);
          }
        });
        if (isUnique) tempUnicArr.push(Element2);
      */
      Element2.element.id = `${Element.name}_${Element2.name}`;
    })
  })


});

function calculateDynamicLeftHelper(x1) {
  const coefficients = findLineByLeastSquares([58.86, 49.45, 41.17], [2.31, 9.85, 16.68]);
  const x2 = coefficients[0] * x1 + coefficients[1];
  return x2;
  function findLineByLeastSquares(valuesX, valuesY) {
    const xBar = valuesX.reduce((sum, x) => sum + x, 0) / valuesX.length;
    const yBar = valuesY.reduce((sum, y) => sum + y, 0) / valuesY.length;

    const num = valuesX.map((x, i) => (x - xBar) * (valuesY[i] - yBar)).reduce((sum, x) => sum + x, 0);
    const den = valuesX.map(x => Math.pow(x - xBar, 2)).reduce((sum, x) => sum + x, 0);

    const slope = num / den;
    const intercept = yBar - slope * xBar;

    return [slope, intercept];
  }
}

function addSvgElem(SvgIndex, Element, Name, Move = true) {
  devHelper.svgVals[SvgIndex].activeElements.push({
    element: Element,
    name: Name,
  })
  if (Move === true) {
    if (Element.tagName === 'text') {
      Element.style.textAnchor = 'end';
      if (Element.hasAttribute('x'))
        Element.setAttribute('x', Element.getBoundingClientRect().width + parseFloat(Element.getAttribute('x')))
      else
        Element.style.transform = `translate(${Element.getBoundingClientRect().width}px, 0px)`;
    }
  }
}

function makeDynamicTextureDisplay(ObjectSvg) {
  let outputImage = ObjectSvg.object.nextElementSibling;
  let planeTexture = new BABYLON.DynamicTexture(`texture_${ObjectSvg.name}`, { width: ObjectSvg.svg.getAttribute('width'), height: ObjectSvg.svg.getAttribute('height') }, devHelper.model3DVals.scene, true);
  devHelper.model3DVals.svgDisplays.textures.push(planeTexture);
  devHelper.model3DVals.svgDisplays.tagImgs.push(outputImage);
  devHelper.model3DVals.svgDisplays.svgs.push(ObjectSvg.svg);
  let textureContext = planeTexture.getContext();
  outputImage.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(ObjectSvg.svg))));
  outputImage.onload = function () {
    textureContext.drawImage(outputImage, 0, 0);
  }
}
// Появление нужного модуля управления для каждо схемы в зависимости от вида
function createSvghelper(CurrentPosition, SvgName = undefined) {
  if (CurrentPosition !== undefined) {
    if (CurrentPosition === 1) {
      let mainMesh = devHelper.model3DVals.svgDisplays.meshs.find(mesh => mesh.positionIndex === CurrentPosition);
      let textureSvgName = SvgName === undefined ? mainMesh.material.diffuseTexture.name.substring(mainMesh.material.diffuseTexture.name.indexOf('_') + 1) : SvgName;
      let tempObj = { x: 0, y: 0, w: 0, h: 0, name: 'vnk_main', };
      let currentMeshTexture = devHelper.model3DVals.svgDisplays.meshs.find(mesh => mesh.positionIndex === devHelper.model3DVals.currentPosition).material.diffuseTexture;
      let textureName = currentMeshTexture.name.substring(currentMeshTexture.name.indexOf('_') + 1);
      /* Высчитывание значений для хелперов
        ------------------------------------------------------------------------------
        Y всегда в процентах от высоты рендера
        ------------------------------------------------------------------------------
        высота всегда в процентах от высоты рендера
        ------------------------------------------------------------------------------
        ширина изменяется в соотношении примерно 1,56 к ширине рендера
        Уравнение получения значения W для ширины прозрачного окна хелпера
          Wpx   => W%;    (1.56 * W%) / 77.31 = w: W
          254рх => 14%; (1.56 * 14) / 77.31 = w: 0.284
        ------------------------------------------------------------------------------
        положение по X найти логом
        console.log(calculateDynamicLeftHelper(ЗАМЕНИТЬ) * ШИРИНА_РЕНДЕРА / 100 + 'px')
        ------------------------------------------------------------------------------
        Нужно создать формулу, которая будет высчитывать значение x, если известные следующие значения:
        49.45(y), 58.86(q) = 2.31(x) ----- 135,9666 49,45 * 2.74
        49.45(y), 49.45(q) = 9.85(x) ----- 487,0825 49,45 * 9.85
        49.45(y), 41.17(q) = 16.68(x) ---- 686,7156 49.45 * 13.88
        Формула должна быть одна и высчитывать динамически значение х, если известны y и q/
        ------------------------------
        Это придумл нейростека
        32.5 - 23.51
        24.03 - 30.34
        15.56 - 37.17
        ----------------------------------
      */

      function findVal(i1, i2) {
        // i1 = 58.86, i2 = 100
        // return 2.31
         ///x = findVal(49.55, 100);
        //x === 9.85;
        //x = findVal(41.1, 100);
        //x === 16.68;
      }

      let renderRationProc = parseFloat(document.getElementById('renderCanvas').getAttribute('height')) / parseFloat(document.getElementById('renderCanvas').getAttribute('width')) * 100;

      if (textureSvgName === 'vnk_main') {
        let mainContainer = createMainHelperContainer({ x: renderRationProc, y: -95.71, w: 1.56, h: 88.7, });
        for (let i = 0; i < 6; i++) {
          if (i === 0) tempObj = { x: 0.5, y: 1, w: 10, h: 3, name: 'vnk_main', };
          else if (i === 1) tempObj = { x: 11, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK1', };
          else if (i === 2) tempObj = { x: 21.8, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK2', };
          else if (i === 3) tempObj = { x: 32.5, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK3', };
          else if (i === 4) tempObj = { x: 43.1, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', };
          else if (i === 5) tempObj = { x: 41.5, y: 50, w: 2.7, h: 3.5, forAction: true, id: 'kl029', value: { window: 'O_n_k_na_VNK_posle_1', x: 900, y: 473, } };
          mainContainer.append(createSvgHelperButton(tempObj, mainMesh));
        }
      } else if (textureSvgName === 'BVNK_VNK1') {
        let mainContainer = createMainHelperContainer({ x: renderRationProc, y: -95.71, w: 1.56, h: 88.7, });
        for (let i = 0; i < 5; i++) {
          if (i === 0) tempObj = { x: 0.5, y: 1, w: 10, h: 3, name: 'vnk_main', };
          else if (i === 1) tempObj = { x: 11, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK1', };
          else if (i === 2) tempObj = { x: 21.8, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK2', };
          else if (i === 3) tempObj = { x: 32.5, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK3', };
          else if (i === 4) tempObj = { x: 43.1, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', };
          mainContainer.append(createSvgHelperButton(tempObj, mainMesh));
        }
      } else if (textureSvgName === 'BVNK_VNK2') {
        let mainContainer = createMainHelperContainer({ x: renderRationProc, y: -95.71, w: 1.56, h: 88.7, });
        for (let i = 0; i < 5; i++) {
          if (i === 0) tempObj = { x: 0.5, y: 1, w: 10, h: 3, name: 'vnk_main', };
          else if (i === 1) tempObj = { x: 11, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK1', };
          else if (i === 2) tempObj = { x: 21.8, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK2', };
          else if (i === 3) tempObj = { x: 32.5, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK3', };
          else if (i === 4) tempObj = { x: 43.1, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', };
          mainContainer.append(createSvgHelperButton(tempObj, mainMesh));
        }
      } else if (textureSvgName === 'BVNK_VNK3') {
        let mainContainer = createMainHelperContainer({ x: renderRationProc, y: -95.71, w: 1.56, h: 88.7, });
        for (let i = 0; i < 7; i++) {
          if (i === 0) tempObj = { x: 0.5, y: 1, w: 10, h: 3, name: 'vnk_main', };
          else if (i === 1) tempObj = { x: 11, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK1', };
          else if (i === 2) tempObj = { x: 21.8, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK2', };
          else if (i === 3) tempObj = { x: 32.5, y: 1, w: 10.3, h: 3, name: 'BVNK_VNK3', };
          else if (i === 4) tempObj = { x: 43.1, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', };
          mainContainer.append(createSvgHelperButton(tempObj, mainMesh));
        }
      } else if (textureSvgName === 'O_n_k_na_VNK_posle_1') {
        let mainContainer = createMainHelperContainer({ x: 6.8, y: -54, w: 0.284, h: 32.6, });
        for (let i = 0; i < 2; i++) {
          if (i === 0) tempObj = { x: 12, y: 0.1, w: 1, h: 2, forAction: true, name: textureName, id: 'close_w1' }; // close
          else if (i === 1) tempObj = { x: 6.4, y: 11.1, w: 3, h: 1.9, forAction: true, id: 'open_vn', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, }, }; // open
          mainContainer.append(createSvgHelperButton(tempObj, mainMesh));
        }
      } else if (textureSvgName === 'O_n_k_na_VNK_posle_2') {
        let mainContainer = createMainHelperContainer({ x: 51.6, y: -47.5, w: 6, h: 5.6, });
        for (let i = 0; i < 2; i++) {
          if (i === 0) tempObj = { x: 3.1, y: 2.1, w: 2.3, h: 2.3, removeWindow: textureSvgName, id: 'close_vn', }; // close
          else if (i === 1) tempObj = { x: 0.4, y: 2.1, w: 2.3, h: 2.3, removeWindow: textureSvgName, forAction: true, id: 'open_vn1', }; // open
          mainContainer.append(createSvgHelperButton(tempObj, mainMesh));
        }

      }

      // todo Нужно сделать что-то с размерами и положениями. В процентах тоже не верно вроде кака

      function createMainHelperContainer(Vals) {
        if (document.getElementById('svg-helper')) {
          document.getElementById('svg-helper').remove();
        }
        let renderRationProc = parseFloat(document.getElementById('renderCanvas').getAttribute('height')) / parseFloat(document.getElementById('renderCanvas').getAttribute('width')) * 100;
        let mainContainer = document.createElement('div');
        mainContainer.style.position = 'relative';
        mainContainer.style.left = calculateDynamicLeftHelper(Vals.x) + '%';
        // mainContainer.style.left = (calculateDynamicLeftHelper(Vals.x) * parseFloat(document.getElementById('renderCanvas').getAttribute('width'))) / 100 + 'px';
        mainContainer.style.top = Vals.y + '%';
        mainContainer.style.width = (Vals.w * renderRationProc) + '%';
        mainContainer.style.height = Vals.h + '%';
        mainContainer.id = 'svg-helper';
        document.body.querySelector('.game-view').append(mainContainer);
        return mainContainer;
      }
      function createSvgHelperButton(Vals, DisplayMesh) {
        let invisElem = document.createElement('div');
        invisElem.classList.add('invisible-element-svg');
        if (devHelper.dev.enable === true) {
          invisElem.classList.add('invisible-element-svg-helper');
          invisElem.innerHTML = Vals.id === undefined ? 'test' : Vals.id;
        }
        invisElem.style.left = Vals.x + '%';
        invisElem.style.top = Vals.y + '%';
        invisElem.style.width = Vals.w + '%';
        invisElem.style.height = Vals.h + '%';

        invisElem.addEventListener('click', () => {
          if (devHelper.trenVals.waitingInput === true) {
            if (Vals.id !== undefined) {
              invisElem.id = Vals.id;
              trenClickOnSvgElem(invisElem);
            }
            if (Vals.removeWindow) {
              RemoveSvgFromTextrue(DisplayMesh, Vals.removeWindow);
            } else if (Vals.forAction && Vals.forAction === true) {
              if (Vals.value && Vals.value.window) {
                addSvgToTextrue(DisplayMesh, Vals.value);
                createSvghelper(CurrentPosition, Vals.value.window);
              }
            } else if (Vals.name) {
              changeSvgtexture(DisplayMesh, Vals.name, true);
              createSvghelper(CurrentPosition, Vals.name);
            } else if (Vals.value && Vals.value.window) {
              createSvghelper(CurrentPosition, Vals.value.window);
              changeSvgtexture(DisplayMesh, DisplayMesh.material.diffuseTexture.name.substring(DisplayMesh.material.diffuseTexture.name.indexOf('_') + 1), false, Vals.value.window, Vals.value);
            } else changeSvgElem(Vals.value);

          }
        });
        return invisElem;
      }
    } else {
      if (document.getElementById('svg-helper')) document.getElementById('svg-helper').remove();
    }
  }
}
// color; text; alpha; position в vw, vh;
function changeSvgElem(Val = {}) {
  console.log(Val);
  if (Val.name) {
    devHelper.svgVals.forEach((svgArrObject) => {
      svgArrObject.activeElements.forEach((activeElemObj) => {
        if (activeElemObj.name === Val.name) {
          if (Val.text)
            activeElemObj.element.innerHTML = Val.text;
          if (Val.color)
            activeElemObj.element.style.fill = Val.color;
          if (Val.stroke)
            activeElemObj.element.style.stroke = Val.stroke;
          if (Val.alpha)
            activeElemObj.element.style.opacity = Val.alpha;
          if (Val.rotation)
            changeSvgElemPos(activeElemObj.element, Val.rotation, 'rotate');
          if (Val.position) {
            if (Val.position.x) changeSvgElemPos(activeElemObj.element, Val.position.x, 'translateX');
            if (Val.position.y) changeSvgElemPos(activeElemObj.element, Val.position.y, 'translateY');
          }
        }
        // updateSvgTexture(svgArrObject.name, true);
        // let Texture = devHelper.model3DVals.svgDisplays.meshs[0].material.diffuseTexture;
        // Texture.update();
      })
    })
  } else {
    if (devHelper.dev.enable === true) console.warn(`В функцию changeSvgElem не передали имя переменной.`);
    return
  }
}

function changeSvgElemPos(Elem, Val, Type) {
  let tempTransform = Elem.style.transform ? Elem.style.transform : '';
  // TODO тут вроде в пикселях можно, чтобы легче ориентироваться внутри SVG
  let endString = Type === 'translateX' ? 'px' : Type === 'translateY' ? 'px' : 'deg';
  if (tempTransform !== '' && tempTransform.includes(Type)) {
    let oldTrans = tempTransform.split(`${Type}(`)[1].split(endString)[0];
    let newTransform = tempTransform.replace(`${Type}(${oldTrans}${endString})`, `${Type}(${Val}${endString})`);
    Elem.style.transform = newTransform;
  }
  else
    Elem.style.transform = tempTransform + `${Type}(${Val}${endString})`;
}

