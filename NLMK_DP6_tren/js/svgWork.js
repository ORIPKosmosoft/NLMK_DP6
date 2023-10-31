/*----------TODO----------------------------------------------------
Сделать размеы хелпера в пикселях

Сделать зависимость ширина зоны рендера в пикселях и точноых размеров.
--------------------------------------------------------------------
Так смогу найти нужное уравнение для изменения размеров.
А внутри окна хелпера помогаторы можно делать в процентах? Или так же в пикселях?
Ну и продолжить джелать действия без человека
--------------------------------------------------------------------
*/

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
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => { 
        if (TextElement.innerHTML === '92') { addSvgElem(Index, TextElement, '3TI_43'); } 
        if (TextElement.innerHTML === '11:05:39') { addSvgElem(Index, TextElement, 'lifetime'); } 
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') { addSvgElem(Index, Element, '313'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_1'); }
      })
    }
    if (ObjectSvg.name === 'BVNK_VNK2') {
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => { 
        if (TextElement.innerHTML === '11:05:39') { addSvgElem(Index, TextElement, 'lifetime'); }
      });
    }
    if (ObjectSvg.name === 'BVNK_VNK3') {
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') { addSvgElem(Index, Element, 'fire_vnk_3'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_3'); }
      })
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => { 
        if (TextElement.innerHTML === '11:05:39') { addSvgElem(Index, TextElement, 'lifetime'); }
      });
    }
    if (ObjectSvg.name === 'vnk_main') {
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1712.25 544.97V557l-22.15 28.77c-2.52 3.27-3.73 6.81-3.73 10.94v11.21H1763.72v-12.74c0-4.66-1.42-8.66-4.37-12.26l-20.56-25.18v-12.46h2.36l-.29-.91v-22.21c0-8.54-6.96-12.27-15.5-12.27h-.4c-8.54 0-15.5 3.73-15.5 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1301.37 544.97V557l-22.15 28.77c-2.52 3.27-3.72 6.81-3.72 10.94v11.21h77.35v-12.74c0-4.66-1.43-8.66-4.37-12.26l-20.56-25.18v-12.46h2.35l-.28-.91v-22.21c0-8.54-6.97-12.27-15.51-12.27h-.39c-8.54 0-15.51 3.73-15.51 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_3'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M841.6 529.43v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl029'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M733.76 579.16V557.7l33.12 21.46V557.7z') { addSvgElem(Index, Element, 'kl028'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M985.26 579.16V557.7l33.12 21.46V557.7z') { addSvgElem(Index, Element, 'kl007'); }
      })
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => { 
        if (TextElement.innerHTML === '11:05:39') { addSvgElem(Index, TextElement, 'lifetime'); }
        if (TextElement.innerHTML === '51') { addSvgElem(Index, TextElement, 'kl029_proc'); }
      });
    }
    if (ObjectSvg.name === 'vnk_spvg') {
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => { 
        if (TextElement.innerHTML === '11:05:39') { addSvgElem(Index, TextElement, 'lifetime'); }
      });
    }
    if (ObjectSvg.name === 'O_n_k_na_VNK_posle_1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement) => {
        if (TextElement.innerHTML === 'Управление клапаном 116') { addSvgElem(Index, TextElement, 'title_work_vn',); }
        if (TextElement.innerHTML === 'Открыт') { addSvgElem(Index, TextElement, 'status_window_text', false); }
        if (TextElement.innerHTML === '100') { addSvgElem(Index, TextElement, 'polozenie_text'); }
        if (TextElement.innerHTML === 'Открыть') { addSvgElem(Index, TextElement, 'polozenie_button_text'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm58.35 75.18 14.08-7.8 14.07-7.8v31.2l-14.07-7.8z') { addSvgElem(Index, Element, 'right_vn'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm58.69 75.18-14.08-7.8-14.08-7.8v31.2l14.08-7.8z') { addSvgElem(Index, Element, 'left_vn'); }
      })
      ObjectSvg.svg.querySelectorAll('ellipse').forEach((Element) => {
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '7.8') { addSvgElem(Index, Element, 'circle_1'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '16.12') { addSvgElem(Index, Element, 'circle_2'); }
      })
      ObjectSvg.svg.querySelectorAll('rect').forEach((Element) => {
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '4.14') { addSvgElem(Index, Element, 'btn_open'); }
      })
    }
    if (ObjectSvg.name === 'O_n_k_na_VNK_posle_2') {
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement) => {
        if (TextElement.innerHTML === 'Закрыть') { addSvgElem(Index, TextElement, 'title_open_vn',); }
      })
    }
    
  })

  devHelper.svgVals.forEach((Element) => {
    pushSvgDisplaysArr(Element);
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
  setTimeSvgScheme();
});
function setTimeSvgScheme() {

  // console.log(devHelper.model3DVals.svgDisplays.svgs);
  // console.log(devHelper.svgVals);
  // for (let i = 0; i < devHelper.model3DVals.svgDisplays.meshs.length; i++) {
  //   let elem = devHelper.model3DVals.svgDisplays.meshs[i];
  //   let svg = devHelper.model3DVals.svgDisplays.svgs[i];
  //   console.log(elem);
  //   console.log(elem.name);
  //   console.log("____________________________");
  // }
    let _indexMonitor = 0;
    devHelper.svgVals.forEach((ObjectSvg, Index) => {
      ObjectSvg.activeElements.forEach((Element) => {
        if (Element.name === "lifetime") {
          Element.innerHTML = devHelper.trenVals.timers.lifeTime;
          changeSvgElem({
            name: Element.name, 
            text: devHelper.trenVals.timers.lifeTime
          });

          // changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[_indexMonitor], ObjectSvg.name, true); // В будущем возможно придётся поменять _indexMonitor
          // _indexMonitor++;
        }
      })  
      
    })
}

// TODO Это главная функция, которая возвращает размеры меша в видимой области как гетбаундингклиентрект
function getClientRectFromMesh(Mesh) {
  const meshVectors = Mesh.getBoundingInfo().boundingBox.vectors
  const worldMatrix = Mesh.getWorldMatrix()
  const transformMatrix = devHelper.model3DVals.scene.getTransformMatrix()
  const viewport = devHelper.model3DVals.camera.viewport
  const coordinates = meshVectors.map(v => {
    const proj = BABYLON.Vector3.Project(v, worldMatrix, transformMatrix, viewport)
    proj.x = proj.x * devHelper.model3DVals.engine.getRenderWidth()
    proj.y = proj.y * devHelper.model3DVals.engine.getRenderHeight()
    return proj
  })
  const [minX, maxX] = extent(coordinates, c => c.x)
  const [minY, maxY] = extent(coordinates, c => c.y)
  const rect = {
    width: maxX - minX,
    height: maxY - minY,
    left: minX,
    top: minY,
    right: maxX,
    bottom: maxY,
  }

  function extent(array, accessor) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0, n = array.length; i < n; ++i) {
      const value = accessor(array[i], i, array);
      if (value != null) {
        if (value < min) min = value;
        if (value > max) max = value;
      }
    }
    if (min === Infinity || max === -Infinity) {
      return undefined;
    }
    return [min, max];
  }
  return rect
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

function pushSvgDisplaysArr(ObjectSvg) {
  let outputImage = ObjectSvg.object.nextElementSibling;
  devHelper.model3DVals.svgDisplays.tagImgs.push(outputImage);
  devHelper.model3DVals.svgDisplays.svgs.push(ObjectSvg.svg);
  devHelper.model3DVals.svgDisplays.svgNames.push(ObjectSvg.name);
}

function createSvghelper(CurrentPosition, SvgName = undefined) {
  if (CurrentPosition !== undefined) {
    setTimeout(() => {
      if (CurrentPosition === 1) {
        let mainMesh = devHelper.model3DVals.svgDisplays.meshs.find(mesh => mesh.positionIndex === CurrentPosition);
        let textureSvgName = SvgName === undefined ? mainMesh.svgArr[mainMesh.svgArr.length - 1].name : SvgName;
        let currentMeshTexture = devHelper.model3DVals.svgDisplays.meshs.find(mesh => mesh.positionIndex === devHelper.model3DVals.currentPosition).material.diffuseTexture;
        let textureName = currentMeshTexture.name.substring(currentMeshTexture.name.indexOf('_') + 1);
        if (textureSvgName === 'vnk_main') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
            { x: 41.5, y: 50, w: 2.7, h: 3.5, forAction: true, id: 'kl029', value: { window: 'O_n_k_na_VNK_posle_1', x: 900, y: 473, } },
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'BVNK_VNK1') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'BVNK_VNK2') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'BVNK_VNK3') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'O_n_k_na_VNK_posle_1') {
          let tempArrHelperButtons = [
            { x: 61, y: 47.2, w: 1.5, h: 2.4, forAction: true, name: textureName, id: 'close_w1', removeWindow: textureSvgName, },// close
            { x: 53.4, y: 59.1, w: 4, h: 2.6, forAction: true, id: 'open_vn', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, } },// open
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'O_n_k_na_VNK_posle_2') {
          let tempArrHelperButtons = [
            { x: 60.2, y: 57, w: 3.2, h: 2.4, removeWindow: textureSvgName, id: 'close_vn', }, // close
            { x: 56.5, y: 57, w: 3.2, h: 2.4, removeWindow: textureSvgName, forAction: true, id: 'open_vn1', }, // open
          ];
          createSvgHelperButtons(tempArrHelperButtons);
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
          invisElem.id = Vals.id;

          invisElem.addEventListener('click', () => {
            if (devHelper.trenVals.waitingInput === true) {
              if (Vals.id !== undefined) {
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
        function createSvgHelperButtons(Arr) {
          let mainContainer = createMainHelperContainer();
          Arr.forEach((element) => {
            mainContainer.append(createSvgHelperButton(element, mainMesh));
          })
          function createMainHelperContainer() {
            if (document.getElementById('svg-helper')) document.getElementById('svg-helper').remove();
            let mesh2DVals = getClientRectFromMesh(devHelper.model3DVals.svgDisplays.meshs.find(m => m.positionIndex === devHelper.model3DVals.currentPosition));
            let mainContainer = document.createElement('div');
            mainContainer.style.position = 'absolute';
            mainContainer.style.left = (mesh2DVals.left / (document.getElementById('renderCanvas').width / 100)) + '%';
            mainContainer.style.top = (mesh2DVals.top / (document.getElementById('renderCanvas').height / 100)) + '%';
            mainContainer.style.width = (mesh2DVals.width / (document.getElementById('renderCanvas').width / 100)) + '%';
            mainContainer.style.height = (mesh2DVals.height / (document.getElementById('renderCanvas').height / 100)) + '%';
            mainContainer.id = 'svg-helper';
            document.body.querySelector('.game-view').append(mainContainer);
            return mainContainer;
          }
        }
      } else {
        if (document.getElementById('svg-helper')) document.getElementById('svg-helper').remove();
      }
    }, 150);
  }
}

function changeSvgElem(Val = {}) {
  if (Val.name) {
    devHelper.svgVals.forEach((svgArrObject) => {
      svgArrObject.activeElements.forEach((activeElemObj) => {
        if (activeElemObj.name === Val.name) {
          if (Val.text) {
            activeElemObj.element.innerHTML = Val.text;
          }
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
      })
    })
  } else {
    if (devHelper.dev.enable === true) console.warn(`В функцию changeSvgElem не передали имя переменной.`);
    return
  }
}

function changeSvgElemPos(Elem, Val, Type) {
  let tempTransform = Elem.style.transform ? Elem.style.transform : '';
  let endString = Type === 'translateX' ? 'px' : Type === 'translateY' ? 'px' : 'deg';
  if (tempTransform !== '' && tempTransform.includes(Type)) {
    let oldTrans = tempTransform.split(`${Type}(`)[1].split(endString)[0];
    let newTransform = tempTransform.replace(`${Type}(${oldTrans}${endString})`, `${Type}(${Val}${endString})`);
    Elem.style.transform = newTransform;
  }
  else
    Elem.style.transform = tempTransform + `${Type}(${Val}${endString})`;
}

