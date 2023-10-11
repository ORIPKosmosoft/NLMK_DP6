document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('object').forEach((ElementObj) => {
    devHelper.svgVals.push({
      object: ElementObj,
      svg: ElementObj.contentDocument.querySelector('svg'),
      name: ElementObj.contentDocument.querySelector('svg').baseURI.substring(ElementObj.contentDocument.querySelector('svg').baseURI.lastIndexOf('/') + 1, ElementObj.contentDocument.querySelector('svg').baseURI.indexOf('.svg')),
      activeElements: [],
    })
  })


  //TODO: Весть текст изменениямый сместить если надо
  devHelper.svgVals.forEach((Element, Index) => {
    if (Element.name === 'dp') {
      let tempElemCount = 0;
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
            TextElement.innerHTML = 99999999;
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
  })

  devHelper.svgVals.forEach((Element) => {
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




  console.log(devHelper);
});

// tempElemCount++;
// TextElement.innerHTML = '!!' + tempElemCount + '!!';
// console.log(TextIndex);
// console.log(tempElemCount);