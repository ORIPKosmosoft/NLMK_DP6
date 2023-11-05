/*----------TODO----------------------------------------------------
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
    if (ObjectSvg.name === 'O_n_k_na_VNK_posle_11') {
      ObjectSvg.object.style.left = '0';
      ObjectSvg.object.style.top = '0';
      ObjectSvg.object.style.visibility = 'visible';
    }

    if (ObjectSvg.name === 'dp') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '4,32') { addSvgElem(Index, Element, 'P_1'); }
        if (Element.innerHTML === '4,22') { addSvgElem(Index, Element, 'P_2'); }
        if (Element.innerHTML === '30') {
          if (TextIndex < 307)
            addSvgElem(Index, Element, 'EKZ_H' + (TextIndex - 222)); else
            addSvgElem(Index, Element, 'kol_furm');
        }
        if (Element.innerHTML === '0,70') { addSvgElem(Index, Element, 'radar1_text'); }
        if (Element.innerHTML === '0,97') { addSvgElem(Index, Element, 'radar2_text'); }
        if (Element.innerHTML === '-1,67') { addSvgElem(Index, Element, 'radar3_text'); }
        if (Element.innerHTML === '97') { addSvgElem(Index, Element, 'H_tryba'); }
        if (Element.innerHTML === '582084') { addSvgElem(Index, Element, 'F_tryba'); }
        if (Element.innerHTML === '2,30') { if (TextIndex === 201) { addSvgElem(Index, Element, 'P_col_gaza'); } else { addSvgElem(Index, Element, 'P_tryba_1_' + (TextIndex - 287)); } }
        if (Element.innerHTML === '1,40') { addSvgElem(Index, Element, 'Dp_obsh'); }
        if (Element.innerHTML === '1210') {
          if (TextIndex === 198)
            addSvgElem(Index, Element, 'T_gor_dyt_tryb_kras'); else if (TextIndex === 203)
            addSvgElem(Index, Element, 'T_gor_dyt_table'); else if (TextIndex === 258)
            addSvgElem(Index, Element, 'T_gor_dyt_tryb_sin');
        }
        if (Element.innerHTML === '30708') {
          if (TextIndex === 199)
            addSvgElem(Index, Element, 'F_prir_gaz_tryb'); else
            addSvgElem(Index, Element, 'F_prir_gaz_table');
        }
        if (Element.innerHTML === '2120') { if (TextIndex === 200) { addSvgElem(Index, Element, 'TTG'); } else { addSvgElem(Index, Element, 'TTG_zadanie'); } }
        if (Element.innerHTML === '1,00') { addSvgElem(Index, Element, 'F_par_yvl'); }
        if (Element.innerHTML === '5,0') { if (TextIndex === 197) { addSvgElem(Index, Element, 'W_par_yvl'); } else { addSvgElem(Index, Element, 'Vlaznost'); } }
        if (TextIndex >= 292 && TextIndex <= 295) { addSvgElem(Index, Element, 'P_tryba_2_' + (296 - TextIndex)); }
        if (Element.innerHTML === '2,47') { addSvgElem(Index, Element, 'P_tryba_3_' + (TextIndex - 295)); }
        if (TextIndex >= 298 && TextIndex <= 301) { addSvgElem(Index, Element, 'P_tryba_4_' + (TextIndex - 297)); }
        if (Element.innerHTML === '2,79') { addSvgElem(Index, Element, 'P_tryba_5_1'); }
        if (Element.innerHTML === '2,76') { addSvgElem(Index, Element, 'P_tryba_5_2'); }
        if (Element.innerHTML === '3,07') { addSvgElem(Index, Element, 'P_tryba_5_3'); }
        if (Element.innerHTML === '3,59') { addSvgElem(Index, Element, 'P_tryba_5_4'); }
        if (Element.innerHTML === '2,25') { addSvgElem(Index, Element, 'P_vbls'); }
        if (Element.innerHTML === '0,24') { addSvgElem(Index, Element, 'dP_verh'); }
        if (Element.innerHTML === '1,93') { addSvgElem(Index, Element, 'dP_obsh_tryba'); }
        if (Element.innerHTML === '1,69') { addSvgElem(Index, Element, 'dP_nish_tryba'); }
        if (Element.innerHTML === '2084') { addSvgElem(Index, Element, 'TTG_raschet'); }
        if (Element.innerHTML === '43,0') { addSvgElem(Index, Element, 'N2'); }
        if (Element.innerHTML === '26,9') { addSvgElem(Index, Element, 'CO'); }
        if (Element.innerHTML === '21,9') { addSvgElem(Index, Element, 'CO2'); }
        if (Element.innerHTML === '52577') { addSvgElem(Index, Element, 'EVS_DP7_O'); }
        if (Element.innerHTML === '7174') { addSvgElem(Index, Element, 'EVS_DP7_F'); }
        if (Element.innerHTML === '42753') { addSvgElem(Index, Element, 'EVD1_O'); }
        if (Element.innerHTML === '365177') { addSvgElem(Index, Element, 'EVD1_F'); }
        if (Element.innerHTML === '364389') { addSvgElem(Index, Element, 'EVD_F'); }
        if (Element.innerHTML === '6081') { addSvgElem(Index, Element, 'F_evd'); }
        if (Element.innerHTML === '5925') { addSvgElem(Index, Element, 'F_hol_dyt'); }
        if (Element.innerHTML === '80') { addSvgElem(Index, Element, 'T_hol_dyt'); }
        if (Element.innerHTML === '30,1') { addSvgElem(Index, Element, 'O_hol_dyt'); }
        if (Element.innerHTML === '1847') { addSvgElem(Index, Element, 'FO2_hol_dyt'); }
        if (Element.innerHTML === '8,2') { addSvgElem(Index, Element, 'H2_tryb'); }
        if (Element.innerHTML === '44,8') { addSvgElem(Index, Element, 'Nco_tryb'); }
        if (Element.innerHTML === '1052') { addSvgElem(Index, Element, 'Q_domG_tryb'); }
        if (Element.innerHTML === '-0') { addSvgElem(Index, Element, 'H_snotr'); }
        if (Element.innerHTML === '1327') { addSvgElem(Index, Element, 'Tkyp_3'); }
        if (Element.innerHTML === '102016') { addSvgElem(Index, Element, 'Fvozdyh_3'); }
        if (Element.innerHTML === '80994') { addSvgElem(Index, Element, 'Fgaz_3'); }
        if (Element.innerHTML === '1328') { addSvgElem(Index, Element, 'Tkyp_2'); }
        if (Element.innerHTML === '120222') { addSvgElem(Index, Element, 'Fvozdyh_2'); }
        if (Element.innerHTML === '101351') { addSvgElem(Index, Element, 'Fgaz_2'); }
        if (Element.innerHTML === '1297') { addSvgElem(Index, Element, 'Tkyp_1'); }
        if (Element.innerHTML === '141') { addSvgElem(Index, Element, 'Tdym_3'); }
        if (Element.innerHTML === '306') { addSvgElem(Index, Element, 'Tdym_2'); }
        if (Element.innerHTML === '174') { addSvgElem(Index, Element, 'Tdym_1'); }
        if (Element.innerHTML === 'НАГРЕВ') { addSvgElem(Index, Element, 'Sostoynie_' + (59 - TextIndex)); }
        if (Element.innerHTML === 'ДУТЬЕ') { addSvgElem(Index, Element, 'Sostoynie_1'); }
        if (Element.innerHTML === '68') { addSvgElem(Index, Element, 'Temp_peref_1'); }
        if (Element.innerHTML === '63') {
          if (TextIndex === 241)
            addSvgElem(Index, Element, 'Temp_peref_2'); else
            addSvgElem(Index, Element, 'Temp_peref_13');
        }
        if (Element.innerHTML === '56') { addSvgElem(Index, Element, 'Temp_peref_3'); }
        if (Element.innerHTML === '62') {
          if (TextIndex === 243)
            addSvgElem(Index, Element, 'Temp_peref_4'); else if (TextIndex === 246)
            addSvgElem(Index, Element, 'Temp_peref_8'); else
            addSvgElem(Index, Element, 'Temp_peref_11');
        }
        if (Element.innerHTML === '61') {
          if (TextIndex === 245)
            addSvgElem(Index, Element, 'Temp_peref_5'); else if (TextIndex === 247)
            addSvgElem(Index, Element, 'Temp_peref_7'); else
            addSvgElem(Index, Element, 'Temp_peref_9');
        }
        if (Element.innerHTML === '57') { addSvgElem(Index, Element, 'Temp_peref_6'); }
        if (Element.innerHTML === '58') { addSvgElem(Index, Element, 'Temp_peref_10'); }
        if (Element.innerHTML === '59') { addSvgElem(Index, Element, 'Temp_peref_12'); }
        if (Element.innerHTML === '66') { addSvgElem(Index, Element, 'Temp_peref_14'); }
        if (Element.innerHTML === '65') { addSvgElem(Index, Element, 'Temp_peref_15'); }
        if (Element.innerHTML === '64') { addSvgElem(Index, Element, 'Temp_peref_16'); }
        if (Element.innerHTML === '117') { addSvgElem(Index, Element, 'T1'); }
        if (Element.innerHTML === '101') { addSvgElem(Index, Element, 'T2'); }
        if (Element.innerHTML === '114') { addSvgElem(Index, Element, 'T3'); }
        if (Element.innerHTML === '112') { addSvgElem(Index, Element, 'T4'); }
        if (Element.innerHTML === '9,7') { addSvgElem(Index, Element, 'W_sinij_hol_dyt'); }
        if (Element.innerHTML === '8,14') { addSvgElem(Index, Element, 'P_Os_szat_voz'); }
        if (Element.innerHTML === '34') { addSvgElem(Index, Element, 'T_Os_szat_voz'); }
        if (Element.innerHTML === '35') { addSvgElem(Index, Element, 'H_Os_szat_voz'); }
        if (Element.innerHTML === '15') {
          if (TextIndex === 273)
            addSvgElem(Index, Element, 'T_prir_gaz');
        }
        if (Element.innerHTML === '39') { addSvgElem(Index, Element, 'H_prir_gaz'); }
        if (Element.innerHTML === '30626') { addSvgElem(Index, Element, 'F_pg_sym_prir_gaz'); }
        if (Element.innerHTML === '8,56') { addSvgElem(Index, Element, 'P_pg_prir_gaz'); }
        if (Element.innerHTML === '30719') { addSvgElem(Index, Element, 'F_pg_prir_gaz'); }
        if (Element.innerHTML === '-93') { addSvgElem(Index, Element, 'dF_pg_prir_gaz'); }
        if (Element.innerHTML === '1487') { addSvgElem(Index, Element, 'L4'); }
        if (Element.innerHTML === '49,4') { addSvgElem(Index, Element, 'H_step_isp'); }
        if (Element.innerHTML === '46,0') { addSvgElem(Index, Element, 'HCO_step_isp'); }
        if (Element.innerHTML === '216,1') { addSvgElem(Index, Element, 'V_dyt'); }
        if (Element.innerHTML === '48') { addSvgElem(Index, Element, 'F_obsh_pyt'); }
        if (Element.innerHTML === '48,1') { addSvgElem(Index, Element, 'F_tek_pyt'); }
        if (Element.innerHTML === '27') { addSvgElem(Index, Element, 'fyrm_v_rab'); }
        if (Element.innerHTML === '0,27') { addSvgElem(Index, Element, 'par_yvlaz'); }
        if (Element.innerHTML === '32,7') { addSvgElem(Index, Element, 'ydel_tep_18'); }
        if (Element.innerHTML === '60,2') { addSvgElem(Index, Element, 'ydel_tep_17'); }
        if (Element.innerHTML === '32,4') { addSvgElem(Index, Element, 'ydel_tep_16'); }
        if (Element.innerHTML === '46,4') { addSvgElem(Index, Element, 'ydel_tep_15'); }
        if (Element.innerHTML === '75,9') { addSvgElem(Index, Element, 'ydel_tep_12_14'); }
        if (Element.innerHTML === '33,2') { addSvgElem(Index, Element, 'ydel_tep_10_11'); }
        if (Element.innerHTML === '19,2') { addSvgElem(Index, Element, 'ydel_tep_9'); }
        if (Element.innerHTML === '24,9') { addSvgElem(Index, Element, 'ydel_tep_8'); }
        if (Element.innerHTML === '36,5') { addSvgElem(Index, Element, 'ydel_tep_7'); }
        if (Element.innerHTML === '0,80') {
          if (TextIndex === 196)
            addSvgElem(Index, Element, 'zadan_yrov_kras'); else
            addSvgElem(Index, Element, 'zadan_yrov_sin');
        }
        if (Element.innerHTML === '0,0') { addSvgElem(Index, Element, '02_trub'); }
        if (Element.innerHTML === '0') {
          if (TextIndex === 260)
            addSvgElem(Index, Element, 'Fvozdyh_1'); else if (TextIndex === 261)
            addSvgElem(Index, Element, 'Fgaz_1'); else if (TextIndex === 269)
            addSvgElem(Index, Element, 'H001'); else if (TextIndex === 270)
            addSvgElem(Index, Element, 'F_osysh_szat_voz'); else if (TextIndex === 328)
            addSvgElem(Index, Element, 'EVD2_O'); else if (TextIndex === 316)
            addSvgElem(Index, Element, 'H_par_yvlaz');
        }
      })
    }
    if (ObjectSvg.name === 'BVNK_VNK1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '92') { addSvgElem(Index, Element, '3TI_43'); }
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') { addSvgElem(Index, Element, '313'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_1'); }
      })
    }
    if (ObjectSvg.name === 'BVNK_VNK2') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
      });
    }
    if (ObjectSvg.name === 'BVNK_VNK3') {
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') { addSvgElem(Index, Element, 'fire_vnk_3'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_3'); }
      })
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
      });
    }
    if (ObjectSvg.name === 'vnk_main') {
      ObjectSvg.svg.querySelectorAll('circle').forEach((Element) => {
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') === '858.16' && Element.hasAttribute('r') && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_kl029'); }
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') === '858.16' && Element.hasAttribute('r') && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_2_kl029'); }
        if (Element.hasAttribute('cy') && Element.getAttribute('cy') === '568.43' && Element.hasAttribute('cx') && Element.getAttribute('cx') === '750.32' && Element.hasAttribute('r') && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_kl028'); }
        if (Element.hasAttribute('cy') && Element.getAttribute('cy') === '568.43' && Element.hasAttribute('cx') && Element.getAttribute('cx') === '750.32' && Element.hasAttribute('r') && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_2_kl028'); }
        if (Element.hasAttribute('cy') && Element.getAttribute('cy') === '568.43' && Element.hasAttribute('cx') && Element.getAttribute('cx') === '1001.82' && Element.hasAttribute('r') && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_kl007'); }
        if (Element.hasAttribute('cy') && Element.getAttribute('cy') === '568.43' && Element.hasAttribute('cx') && Element.getAttribute('cx') === '1001.82' && Element.hasAttribute('r') && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_2_kl007'); }
        if (Element.hasAttribute('cy') && Element.getAttribute('cy') === '629.53' && Element.hasAttribute('cx') && Element.getAttribute('cx') === '1000.92' && Element.hasAttribute('r') && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_kl025'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1712.25 544.97V557l-22.15 28.77c-2.52 3.27-3.73 6.81-3.73 10.94v11.21H1763.72v-12.74c0-4.66-1.42-8.66-4.37-12.26l-20.56-25.18v-12.46h2.36l-.29-.91v-22.21c0-8.54-6.96-12.27-15.5-12.27h-.4c-8.54 0-15.5 3.73-15.5 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1301.37 544.97V557l-22.15 28.77c-2.52 3.27-3.72 6.81-3.72 10.94v11.21h77.35v-12.74c0-4.66-1.43-8.66-4.37-12.26l-20.56-25.18v-12.46h2.35l-.28-.91v-22.21c0-8.54-6.97-12.27-15.51-12.27h-.39c-8.54 0-15.51 3.73-15.51 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_3'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M841.6 529.43v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl029'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M733.76 579.16V557.7l33.12 21.46V557.7z') { addSvgElem(Index, Element, 'kl028'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M985.26 579.16V557.7l33.12 21.46V557.7z') { addSvgElem(Index, Element, 'kl007'); }
      })
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '51') { addSvgElem(Index, Element, 'kl029_proc', 'middle'); }
        if (Element.innerHTML === '0' && Element.hasAttribute('x') && Element.getAttribute('x') === '746.9' && Element.hasAttribute('y') && Element.getAttribute('y') === '592.85') { addSvgElem(Index, Element, 'kl028_proc', 'center'); }
        if (Element.innerHTML === '0' && Element.hasAttribute('x') && Element.getAttribute('x') === '998.47' && Element.hasAttribute('y') && Element.getAttribute('y') === '592.85') { addSvgElem(Index, Element, 'kl007_proc', 'center'); }
      });
    }

    if (ObjectSvg.name === 'vnk_spvg') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
      });
    }
    if (ObjectSvg.name === 'O_n_k_na_VNK_posle_1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'Управление клапаном 116') { addSvgElem(Index, Element, 'title_work_vn',); }
        if (Element.innerHTML === 'Открыт') { addSvgElem(Index, Element, 'status_window_text', false); }
        if (Element.innerHTML === '100') { addSvgElem(Index, Element, 'polozenie_text'); }
        if (Element.innerHTML === 'Открыть') { addSvgElem(Index, Element, 'polozenie_button_text'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm58.35 75.18 14.08-7.8 14.07-7.8v31.2l-14.07-7.8z') { addSvgElem(Index, Element, 'right_vn'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm58.69 75.18-14.08-7.8-14.08-7.8v31.2l14.08-7.8z') { addSvgElem(Index, Element, 'left_vn'); }
      })
      ObjectSvg.svg.querySelectorAll('ellipse').forEach((Element) => {
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '7.8') { addSvgElem(Index, Element, 'circle_1_kl029'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '16.12') { addSvgElem(Index, Element, 'circle_2_kl029'); }
      })
      ObjectSvg.svg.querySelectorAll('rect').forEach((Element) => {
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '4.14' && Element.getAttribute('x') && Element.getAttribute('x') === '169.84' && Element.getAttribute('y') && Element.getAttribute('y') === '121.6') { addSvgElem(Index, Element, 'btn_open'); }
      })
    }
    if (ObjectSvg.name === 'O_n_k_na_VNK_posle_2') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'Закрыть') { addSvgElem(Index, Element, 'title_open_vn',); }
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

  changeSvgElem({ name: 'lifetime', text: devHelper.trenVals.timers.lifeTime });
});


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

function addSvgElem(SvgIndex, Element, Name, Move = 'middle') {//start middle end
  devHelper.svgVals[SvgIndex].activeElements.push({
    element: Element,
    name: Name,
  })
  if (Move !== false) {
    if (Element.tagName === 'text') {
      let moveAtrribute = Move === 'end' ? 'end' : Move === 'right' ? 'end' : Move === 'left' ? 'start' : Move === 'start' ? 'start' : Move === 'center' ? 'middle' : Move === 'middle' ? 'middle' : 'end';
      Element.style.textAnchor = moveAtrribute;
      if (Element.hasAttribute('x')) {
        let diffX1 = moveAtrribute === 'end' ? Element.getBoundingClientRect().width : moveAtrribute === 'start' ? 0 : (Element.getBoundingClientRect().width / 2);
        Element.setAttribute('x', Number(Element.getAttribute('x')) + diffX1);
      } else {
        let diffX1 = moveAtrribute === 'end' ? (Element.getBoundingClientRect().width * 2) : moveAtrribute === 'start' ? 0 : (Element.getBoundingClientRect().width / 2);
        Element.style.transform = `translate(${diffX1}px, 0px)`;
      }
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
            { x: 60.2, y: 57, w: 3.2, h: 2.4, removeWindow: textureSvgName, forAction: true, id: 'close_vn', }, // close
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
            let currentActonObject = devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions.find(action => (action.passed === false && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
            if (devHelper.trenVals.waitingInput === true) {
              if (Vals.forAction && Vals.forAction === true) {
                if (currentActonObject && currentActonObject.action && currentActonObject.action.target2D) {
                  if (invisElem.id === currentActonObject.action.target2D) {
                    trenClickOnSvgElem(invisElem);
                    if (currentActonObject.action.window2D && currentActonObject.action.window2D.newPositionWindow) {
                      if (Vals.value && Vals.value.window) {
                        if (currentActonObject.action.window2D.newPositionWindow.x) Vals.value.x = currentActonObject.action.window2D.newPositionWindow.x;
                        if (currentActonObject.action.window2D.newPositionWindow.y) Vals.value.y = currentActonObject.action.window2D.newPositionWindow.y;
                      }
                    }
                    if (Vals.removeWindow) {
                      RemoveSvgFromTextrue(DisplayMesh, Vals.removeWindow);
                    } else if (Vals.value && Vals.value.window) {
                      addSvgToTextrue(DisplayMesh, Vals.value);
                      createSvghelper(CurrentPosition, Vals.value.window);
                    } else if (Vals.name) {
                      changeSvgtexture(DisplayMesh, Vals.name, true);
                      createSvghelper(CurrentPosition, Vals.name);
                    }
                  } else console.warn('неверный клик по элементу', invisElem.id);
                }
              } else {
                // if (Vals.id !== undefined) trenClickOnSvgElem(invisElem);
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

            }
          });
          return invisElem;
        }
        function createSvgHelperButtons(Arr) {
          let mainContainer = createMainHelperContainer();
          let currentActonObject = findLast(devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions, action => (action.passed === true && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
          Arr.forEach((element) => {
            if (currentActonObject && currentActonObject.action.helper2D && currentActonObject.action.helper2D.length > 0) {
              currentActonObject.action.helper2D.forEach(element2 => {
                if (element.id === element2.id) {
                  if (element2.x) element.x = element2.x;
                  if (element2.y) element.y = element2.y;
                  if (element2.w) element.w = element2.w;
                  if (element2.h) element.h = element2.h;
                }
              })
            }
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
          svgArrObject.object.nextElementSibling.svgReload = false;
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

function setBaseScheme(param = {}) {

}