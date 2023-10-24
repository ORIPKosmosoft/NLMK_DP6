window.addEventListener('load', function () {
  document.querySelector('.svg-scheme-container').querySelectorAll('object').forEach((ObjSvg) => {
    devHelper.svgVals.push({
      name: ObjSvg.data.substring(ObjSvg.data.lastIndexOf('/') + 1, ObjSvg.data.indexOf('.svg')),
      object: ObjSvg,
      svg: ObjSvg.contentDocument.querySelector('svg'),
      activeElements: [],
    })
  })

  //TODO: Весть текст изменениямый сместить если надо
  devHelper.svgVals.forEach((Element, Index) => {
    if (Element.name === 'dp') {
      Element.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => {
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
        if (TextElement.innerHTML === '30') {
          if (TextIndex < 307)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'EKZ_H' + (TextIndex - 222)
            })
          else
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'kol_furm'
            })
        }
        if (TextElement.innerHTML === '0,70') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'radar1_text'
          })
        }
        if (TextElement.innerHTML === '0,97') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'radar2_text'
          })
        }
        if (TextElement.innerHTML === '-1,67') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'radar3_text'
          })
        }
        if (TextElement.innerHTML === '97') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'H_tryba'
          })
        }
        if (TextElement.innerHTML === '582084') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'F_tryba'
          })
        }
        if (TextElement.innerHTML === '2,30') {
          if (TextIndex === 201) {
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'P_col_gaza'
            })
          } else {
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'P_tryba_1_' + (TextIndex - 287)
            })

          }
        }
        if (TextElement.innerHTML === '1,40') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Dp_obsh'
          })
        }
        if (TextElement.innerHTML === '1210') {
          if (TextIndex === 198)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'T_gor_dyt_tryb_kras'
            })
          else if (TextIndex === 203)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'T_gor_dyt_table'
            })
          else if (TextIndex === 258)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'T_gor_dyt_tryb_sin'
            })
        }
        if (TextElement.innerHTML === '30708') {
          if (TextIndex === 199)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'F_prir_gaz_tryb'
            })
          else
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'F_prir_gaz_table'
            })
        }
        if (TextElement.innerHTML === '2120') {
          if (TextIndex === 200) {
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'TTG'
            })
          } else {
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'TTG_zadanie'
            })
          }
        }
        if (TextElement.innerHTML === '1,00') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'F_par_yvl'
          })
        }
        if (TextElement.innerHTML === '5,0') {
          if (TextIndex === 197) {
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'W_par_yvl'
            })
          } else {
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Vlaznost'
            })
          }
        }
        if (TextIndex >= 292 && TextIndex <= 295) {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_tryba_2_' + (296 - TextIndex)
          })
        }
        if (TextElement.innerHTML === '2,47') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_tryba_3_' + (TextIndex - 295),
          })
        }
        if (TextIndex >= 298 && TextIndex <= 301) {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_tryba_4_' + (TextIndex - 297),
          })
        }
        if (TextElement.innerHTML === '2,79') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_tryba_5_1',
          })
        }
        if (TextElement.innerHTML === '2,76') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_tryba_5_2',
          })
        }
        if (TextElement.innerHTML === '3,07') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_tryba_5_3',
          })
        }
        if (TextElement.innerHTML === '3,59') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_tryba_5_4',
          })
        }
        if (TextElement.innerHTML === '2,25') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_vbls',
          })
        }
        if (TextElement.innerHTML === '0,24') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'dP_verh',
          })
        }
        if (TextElement.innerHTML === '1,93') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'dP_obsh_tryba',
          })
        }
        if (TextElement.innerHTML === '1,69') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'dP_nish_tryba',
          })
        }
        if (TextElement.innerHTML === '2084') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'TTG_raschet',
          })
        }
        if (TextElement.innerHTML === '43,0') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'N2',
          })
        }
        if (TextElement.innerHTML === '26,9') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'CO',
          })
        }
        if (TextElement.innerHTML === '21,9') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'CO2',
          })
        }
        if (TextElement.innerHTML === '52577') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'EVS_DP7_O',
          })
        }
        if (TextElement.innerHTML === '7174') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'EVS_DP7_F',
          })
        }
        if (TextElement.innerHTML === '42753') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'EVD1_O',
          })
        }
        if (TextElement.innerHTML === '365177') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'EVD1_F',
          })
        }
        if (TextElement.innerHTML === '364389') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'EVD_F',
          })
        }
        if (TextElement.innerHTML === '6081') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'F_evd',
          })
        }
        if (TextElement.innerHTML === '5925') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'F_hol_dyt',
          })
        }
        if (TextElement.innerHTML === '80') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'T_hol_dyt',
          })
        }
        if (TextElement.innerHTML === '30,1') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'O_hol_dyt',
          })
        }
        if (TextElement.innerHTML === '1847') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'FO2_hol_dyt',
          })
        }
        if (TextElement.innerHTML === '8,2') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'H2_tryb',
          })
        }
        if (TextElement.innerHTML === '44,8') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Nco_tryb',
          })
        }
        if (TextElement.innerHTML === '1052') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Q_domG_tryb',
          })
        }
        if (TextElement.innerHTML === '-0') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'H_snotr',
          })
        }
        if (TextElement.innerHTML === '1327') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Tkyp_3',
          })
        }
        if (TextElement.innerHTML === '102016') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Fvozdyh_3',
          })
        }
        if (TextElement.innerHTML === '80994') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Fgaz_3',
          })
        }
        if (TextElement.innerHTML === '1328') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Tkyp_2',
          })
        }
        if (TextElement.innerHTML === '120222') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Fvozdyh_2',
          })
        }
        if (TextElement.innerHTML === '101351') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Fgaz_2',
          })
        }
        if (TextElement.innerHTML === '1297') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Tkyp_1',
          })
        }
        if (TextElement.innerHTML === '141') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Tdym_3',
          })
        }
        if (TextElement.innerHTML === '306') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Tdym_2',
          })
        }
        if (TextElement.innerHTML === '174') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Tdym_1',
          })
        }
        if (TextElement.innerHTML === 'НАГРЕВ') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Sostoynie_' + (59 - TextIndex),
          })
        }
        if (TextElement.innerHTML === 'ДУТЬЕ') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Sostoynie_1',
          })
        }
        if (TextElement.innerHTML === '68') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Temp_peref_1',
          })
        }
        if (TextElement.innerHTML === '63') {
          if (TextIndex === 241)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Temp_peref_2',
            })
          else
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Temp_peref_13',
            })
        }
        if (TextElement.innerHTML === '56') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Temp_peref_3',
          })
        }
        if (TextElement.innerHTML === '62') {
          if (TextIndex === 243)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Temp_peref_4',
            })
          else if (TextIndex === 246)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Temp_peref_8',
            })
          else
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Temp_peref_11',
            })
        }
        if (TextElement.innerHTML === '61') {
          if (TextIndex === 245)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Temp_peref_5',
            })
          else if (TextIndex === 247)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Temp_peref_7',
            })
          else
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Temp_peref_9',
            })
        }
        if (TextElement.innerHTML === '57') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Temp_peref_6',
          })
        }
        if (TextElement.innerHTML === '58') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Temp_peref_10',
          })
        }
        if (TextElement.innerHTML === '59') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Temp_peref_12',
          })
        }
        if (TextElement.innerHTML === '66') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Temp_peref_14',
          })
        }
        if (TextElement.innerHTML === '65') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Temp_peref_15',
          })
        }
        if (TextElement.innerHTML === '64') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'Temp_peref_16',
          })
        }
        if (TextElement.innerHTML === '117') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'T1',
          })
        }
        if (TextElement.innerHTML === '101') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'T2',
          })
        }
        if (TextElement.innerHTML === '114') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'T3',
          })
        }
        if (TextElement.innerHTML === '112') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'T4',
          })
        }
        if (TextElement.innerHTML === '9,7') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'W_sinij_hol_dyt',
          })
        }
        if (TextElement.innerHTML === '8,14') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_Os_szat_voz',
          })
        }
        if (TextElement.innerHTML === '34') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'T_Os_szat_voz',
          })
        }
        if (TextElement.innerHTML === '35') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'H_Os_szat_voz',
          })
        }
        if (TextElement.innerHTML === '15') {
          if (TextIndex === 273)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'T_prir_gaz',
            })
        }
        if (TextElement.innerHTML === '39') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'H_prir_gaz',
          })
        }
        if (TextElement.innerHTML === '30626') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'F_pg_sym_prir_gaz',
          })
        }
        if (TextElement.innerHTML === '8,56') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'P_pg_prir_gaz',
          })
        }
        if (TextElement.innerHTML === '30719') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'F_pg_prir_gaz',
          })
        }
        if (TextElement.innerHTML === '-93') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'dF_pg_prir_gaz',
          })
        }
        if (TextElement.innerHTML === '1487') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'L4',
          })
        }
        if (TextElement.innerHTML === '49,4') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'H_step_isp',
          })
        }
        if (TextElement.innerHTML === '46,0') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'HCO_step_isp',
          })
        }
        if (TextElement.innerHTML === '216,1') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'V_dyt',
          })
        }
        if (TextElement.innerHTML === '48') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'F_obsh_pyt',
          })
        }
        if (TextElement.innerHTML === '48,1') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'F_tek_pyt',
          })
        }
        if (TextElement.innerHTML === '27') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'fyrm_v_rab',
          })
        }
        if (TextElement.innerHTML === '0,27') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'par_yvlaz',
          })
        }
        if (TextElement.innerHTML === '32,7') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_18',
          })
        }
        if (TextElement.innerHTML === '60,2') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_17',
          })
        }
        if (TextElement.innerHTML === '32,4') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_16',
          })
        }
        if (TextElement.innerHTML === '46,4') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_15',
          })
        }
        if (TextElement.innerHTML === '75,9') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_12_14',
          })
        }
        if (TextElement.innerHTML === '33,2') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_10_11',
          })
        }
        if (TextElement.innerHTML === '19,2') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_9',
          })
        }
        if (TextElement.innerHTML === '24,9') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_8',
          })
        }
        if (TextElement.innerHTML === '36,5') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: 'ydel_tep_7',
          })
        }
        if (TextElement.innerHTML === '0,80') {
          if (TextIndex === 196)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'zadan_yrov_kras',
            })
          else
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'zadan_yrov_sin',
            })
        }
        if (TextElement.innerHTML === '0,0') {
          devHelper.svgVals[Index].activeElements.push({
            element: TextElement,
            name: '02_trub',
          })
        }

        if (TextElement.innerHTML === '0') {
          if (TextIndex === 260)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Fvozdyh_1',
            })
          else if (TextIndex === 261)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'Fgaz_1',
            })
          else if (TextIndex === 269)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'H001',
            })
          else if (TextIndex === 270)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'F_osysh_szat_voz',
            })
          else if (TextIndex === 328)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'EVD2_O',
            })
          else if (TextIndex === 316)
            devHelper.svgVals[Index].activeElements.push({
              element: TextElement,
              name: 'H_par_yvlaz',
            })
        }
      })
    }
    if (Element.name === 'BVNK_VNK1') {
      // Element.object.style.left = '0';
      // Element.object.style.top = '0';
      // Element.object.style.visibility = 'visible';
      Element.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => {
        if (TextElement.innerHTML === '92') {
          addSvgElem(Index, TextElement, '3TI_43')

        }
      })
      Element.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') {
          devHelper.svgVals[Index].activeElements.push({
            element: Element,
            name: '313'
          })
          // Element.addEventListener('click', () => {
          //   changeSvgElem('3TI_43', { text: '100' });
          // });
        }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') {
          devHelper.svgVals[Index].activeElements.push({
            element: Element,
            name: 'vnk_1'
          })
        }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') {
          devHelper.svgVals[Index].activeElements.push({
            element: Element,
            name: 'fire_vnk_1'
          })
        }
      })
    }
    if (Element.name === 'vnk_main') {
      Element.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1712.25 544.97V557l-22.15 28.77c-2.52 3.27-3.73 6.81-3.73 10.94v11.21H1763.72v-12.74c0-4.66-1.42-8.66-4.37-12.26l-20.56-25.18v-12.46h2.36l-.29-.91v-22.21c0-8.54-6.96-12.27-15.5-12.27h-.4c-8.54 0-15.5 3.73-15.5 12.27v22.81h2.79z') {
          devHelper.svgVals[Index].activeElements.push({
            element: Element,
            name: 'vnk_1'
          })
        }
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

function revialSvgObject(CurrentPosition) {
  if (CurrentPosition === 1) { // вынести повторяемые блкои кода
    let mainContainer = document.createElement('div');
    mainContainer.style.position = 'absolute';
    mainContainer.style.top = '44px';
    mainContainer.style.left = '223px';
    mainContainer.style.width = '73%';
    mainContainer.style.height = '89%';
    document.body.append(mainContainer);

    for (let i = 0; i < 6; i++) {
      let invisElem = document.createElement('div');
      invisElem.classList.add('invisible-element-svg');
      let tempObj = { x: 0, y: 0, w: 0, h: 0 };
      if (i === 0) tempObj = { x: 0.5, y: 0.5, w: 6.5, h: 3 };
      else if (i === 1) tempObj = { x: 8.5, y: 0.5, w: 6.5, h: 3 };
      else if (i === 2) tempObj = { x: 16, y: 0.5, w: 7, h: 3 };
      else if (i === 3) tempObj = { x: 24, y: 0.5, w: 7, h: 3 };
      else if (i === 4) tempObj = { x: 32, y: 0.5, w: 6.8, h: 3 };
      else if (i === 5) tempObj = { x: 33.9, y: 23.5, w: 1.5, h: 2.7 };

      invisElem.addEventListener('click', () => {
        if (i < 5) {
          let tempName = 'vnk_main';
          if (i === 0) tempName = 'vnk_main';
          else if (i === 1) tempName = 'BVNK_VNK1';
          else if (i === 2) tempName = 'BVNK_VNK2';
          else if (i === 3) tempName = 'BVNK_VNK3';
          else if (i === 4) tempName = 'vnk_spvg';
          changeSvgtexture(devHelper.model3DVals.svgDisplays.meshs[0], tempName)
        } else if (i === 5) changeSvgElem('fire_vnk_1', { position: { x: 10, y: 10 } });
      });

      invisElem.style.left = tempObj.x + 'vw';
      invisElem.style.top = tempObj.y + 'vh';
      invisElem.style.width = tempObj.w + 'vw';
      invisElem.style.height = tempObj.h + 'vh';
      mainContainer.append(invisElem);
    }
  }
}
// color; text; alpha; position в vw, vh;
function changeSvgElem(Name = undefined, Val = {}) {
  if (Name) {
    devHelper.svgVals.forEach((svgArrObject) => {
      svgArrObject.activeElements.forEach((activeElemObj) => {
        if (activeElemObj.name === Name) {
          if (Val.text && Val.text !== '')
            activeElemObj.element.innerHTML = Val.text;
          if (Val.color && Val.color !== '')
            activeElemObj.element.style.fill = Val.color;
          if (Val.alpha && Val.alpha !== '')
            activeElemObj.element.style.opacity = Val.alpha;
          if (Val.rotation && Val.rotation !== '')
            changeSvgElemPos(activeElemObj.element, Val.rotation, 'rotate');
          if (Val.position) {
            if (Val.position.x && Val.position.x !== '') changeSvgElemPos(activeElemObj.element, Val.position.x, 'translateX');
            if (Val.position.y && Val.position.y !== '') changeSvgElemPos(activeElemObj.element, Val.position.y, 'translateY');
          }
          updateSvgTexture(svgArrObject.name);
        }
      })
    })
  } else {
    if (devHelper.dev.enable === true) console.warn(`В функцию changeSvgElem передали не все переменные.`);
    return
  }
}

function changeSvgElemPos(Elem, Val, Type) {
  let tempTransform = Elem.style.transform ? Elem.style.transform : '';
  let endString = Type === 'translateX' ? 'vw' : Type === 'translateY' ? 'vh' : 'deg';
  console.log(`${Type}(${Val}${endString})`);
  if (tempTransform !== '' && tempTransform.includes(Type)) {
    let oldTrans = tempTransform.split(`${Type}(`)[1].split(endString)[0];
    let newTransform = tempTransform.replace(`${Type}(${oldTrans}${endString})`, `${Type}(${Val}${endString})`);
    Elem.style.transform = newTransform;
  }
  else
    Elem.style.transform = tempTransform + `${Type}(${Val}${endString})`;
}

function addSvgElem(SvgIndex, Element, Name) {
  devHelper.svgVals[SvgIndex].activeElements.push({
    element: Element,
    name: Name,
  })
  if (Element.tagName === 'text') {
    Element.style.textAnchor = 'end';
    Element.style.transform = `translate(${Element.getBoundingClientRect().width}px, 0px)`;
  }
}