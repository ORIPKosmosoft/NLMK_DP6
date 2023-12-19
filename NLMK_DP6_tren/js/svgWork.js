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
      realName: '',
      startSvgState: undefined,
    })
  })

  devHelper.svgVals.forEach((ObjectSvg, Index) => {
    ObjectSvg.realName = ObjectSvg.name === 'dp' ? 'ДП' :
      ObjectSvg.name === 'BVNK_VNK1' ? 'ВНК №1' :
        ObjectSvg.name === 'BVNK_VNK2' ? 'ВНК №2' :
          ObjectSvg.name === 'BVNK_VNK3' ? 'ВНК №3' :
            ObjectSvg.name === 'bzu' ? 'БЗУ' :
              ObjectSvg.name === 'vnk_main' ? 'Общая схема ВНК' :
                ObjectSvg.name === 'vnk_spvg' ? 'СПВГ' :
                  ObjectSvg.name === 'O_n_k_na_VNK' ? 'Управление клапаном' :
                    ObjectSvg.name === 'okno_klap_vid3' ? 'Управление клапаном' : // ilay
                      ObjectSvg.name === 'O_n_k_na_VNK_posle_1' ? 'Управление клапаном' :
                        ObjectSvg.name === 'O_n_k_na_VNK_posle_2' ? 'Управление клапаном' :
                          ObjectSvg.name === 'O_p_n_na_k_na-o_2_na_VNK' ? 'Перекидка из Нагрева в Отделение' :
                            ObjectSvg.name === 'O_p_n_na_k_p_na_VNK' ? 'Перекидка' :
                              ObjectSvg.name === 'vvod_znachenij' ? 'Ввод значений' :
                                ObjectSvg.name === 'Osnovnye_parametry_DP' ? 'Основные параметры доменной печи' :
                                  ObjectSvg.name === 'win_sym_302' ? 'Дополнительное окно' :
                                    ObjectSvg.name === 'priczvuksinal' ? 'Дополнительное окно' :
                                      ObjectSvg.name === 'win_otdel2_na_vnk' ? 'Дополнительное окно' :
                                        ObjectSvg.name === 'Kontrol_progara' ? 'Контроль прогара' :
                                          ObjectSvg.name === 'Shagi_upraleniya' ? 'Дополнительное окно' : 'Дополнительное окно';

    if (ObjectSvg.name === 'dp1') {
      ObjectSvg.object.style.left = '0';
      ObjectSvg.object.style.top = '0';
      ObjectSvg.object.style.visibility = 'visible';
      // ObjectSvg.object.style.zIndex = 999;
      ObjectSvg.object.style.width = '95%';
    }

    if (ObjectSvg.name === 'dp') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === 'F' && Element.getAttribute('x') === '1802.74') { addSvgElem(Index, Element, 'FprirGaz_text', 'start'); Element.innerHTML += 'прир. газа' }
        if (Element.innerHTML === ' прир. газа') { Element.innerHTML = ''; }
        if (Element.innerHTML === 'ТТГ' && Element.getAttribute('x') === '1796.61') { addSvgElem(Index, Element, 'TTG_text'); }


        if (Element.innerHTML === '4,32') { addSvgElem(Index, Element, 'P_1'); }
        if (Element.innerHTML === '4,22') { addSvgElem(Index, Element, 'P_2', 'center'); }
        if (Element.innerHTML === '30' && Element.getAttribute('y') == 779.37) { addSvgElem(Index, Element, 'kol_furm'); }
        if (Element.innerHTML === '30' && Element.getAttribute('y') == 598.79) { addSvgElem(Index, Element, 'EKZ_H1'); }
        if (Element.innerHTML === '30' && Element.getAttribute('y') == 631.95) { addSvgElem(Index, Element, 'EKZ_H2'); }
        if (Element.innerHTML === '30' && Element.getAttribute('y') == 666.32) { addSvgElem(Index, Element, 'EKZ_H3'); }
        if (Element.innerHTML === '0,70') { addSvgElem(Index, Element, 'radar1_text'); }
        if (Element.innerHTML === '0,97') { addSvgElem(Index, Element, 'radar2_text'); }
        if (Element.innerHTML === '-1,67') { addSvgElem(Index, Element, 'radar3_text', 'start'); }
        if (Element.innerHTML === '97') { addSvgElem(Index, Element, 'H_tryba'); }
        if (Element.innerHTML === '582084') { addSvgElem(Index, Element, 'F_tryba', 'start'); }
        if (Element.innerHTML === '2,30') {
          if (TextIndex === 212) { addSvgElem(Index, Element, 'P_col_gaza'); } else { addSvgElem(Index, Element, 'P_tryba_1_' + (TextIndex - 298), 'start'); }
        }
        if (Element.innerHTML === '1,40') { addSvgElem(Index, Element, 'Dp_obsh'); }
        if (Element.innerHTML === '1210') {
          if (TextIndex === 209)
            addSvgElem(Index, Element, 'T_gor_dyt_tryb_kras', 'start'); else if (TextIndex === 214)
            addSvgElem(Index, Element, 'T_gor_dyt_table'); else if (TextIndex === 269)
            addSvgElem(Index, Element, 'T_gor_dyt_tryb_sin', 'start');
        }
        if (Element.innerHTML === '30708') {
          if (TextIndex === 210)
            addSvgElem(Index, Element, 'F_prir_gaz_tryb'); else
            addSvgElem(Index, Element, 'F_prir_gaz_table', 'start');
        }
        if (Element.innerHTML === '2120') { if (TextIndex === 211) { addSvgElem(Index, Element, 'TTG'); } else { addSvgElem(Index, Element, 'TTG_zadanie'); } }
        if (Element.innerHTML === '1,00') { addSvgElem(Index, Element, 'F_par_yvl'); }
        if (Element.innerHTML === '5,0') { if (TextIndex === 208) { addSvgElem(Index, Element, 'W_par_yvl'); } else { addSvgElem(Index, Element, 'Vlaznost'); } }
        if (TextIndex >= 303 && TextIndex <= 306) { addSvgElem(Index, Element, 'P_tryba_2_' + (307 - TextIndex), 'start'); }
        if (Element.innerHTML === '2,47') { addSvgElem(Index, Element, 'P_tryba_3_' + (TextIndex - 306), 'start'); }
        if (TextIndex >= 309 && TextIndex <= 312) { addSvgElem(Index, Element, 'P_tryba_4_' + (TextIndex - 308), 'start'); }
        if (Element.innerHTML === '2,79') { addSvgElem(Index, Element, 'P_tryba_5_1', 'start'); }
        if (Element.innerHTML === '2,76') { addSvgElem(Index, Element, 'P_tryba_5_2', 'start'); }
        if (Element.innerHTML === '3,07') { addSvgElem(Index, Element, 'P_tryba_5_3', 'start'); }
        if (Element.innerHTML === '3,59') { addSvgElem(Index, Element, 'P_tryba_5_4', 'start'); }
        if (Element.innerHTML === '2,25') { addSvgElem(Index, Element, 'P_vbls'); }
        if (Element.innerHTML === '0,24') { addSvgElem(Index, Element, 'dP_verh'); }
        if (Element.innerHTML === '1,93') { addSvgElem(Index, Element, 'dP_obsh_tryba'); }
        if (Element.innerHTML === '1,69') { addSvgElem(Index, Element, 'dP_nish_tryba'); }
        if (Element.innerHTML === '2084') { addSvgElem(Index, Element, 'TTG_raschet'); }
        if (Element.innerHTML === '43,0') { addSvgElem(Index, Element, 'N2', 'start'); }
        if (Element.innerHTML === '26,9') { addSvgElem(Index, Element, 'CO', 'start'); }
        if (Element.innerHTML === '21,9') { addSvgElem(Index, Element, 'CO2', 'start'); }
        if (Element.innerHTML === '52577') { addSvgElem(Index, Element, 'EVS_DP7_O'); }
        if (Element.innerHTML === '7174') { addSvgElem(Index, Element, 'EVS_DP7_F'); }
        if (Element.innerHTML === '42753') { addSvgElem(Index, Element, 'EVD1_O'); }
        if (Element.innerHTML === '365177') { addSvgElem(Index, Element, 'EVD1_F', 'start'); }
        if (Element.innerHTML === '364389') { addSvgElem(Index, Element, 'EVD_F', 'start'); }
        if (Element.innerHTML === '6081') { addSvgElem(Index, Element, 'F_evd'); }
        if (Element.innerHTML === '5925') { addSvgElem(Index, Element, 'F_hol_dyt'); }
        if (Element.innerHTML === '80') { addSvgElem(Index, Element, 'T_hol_dyt'); }
        if (Element.innerHTML === '30,1') { addSvgElem(Index, Element, 'O_hol_dyt', 'start'); }
        if (Element.innerHTML === '1847') { addSvgElem(Index, Element, 'FO2_hol_dyt', 'start'); }
        if (Element.innerHTML === '8,2') { addSvgElem(Index, Element, 'H2_tryb'); }
        if (Element.innerHTML === '44,8') { addSvgElem(Index, Element, 'Nco_tryb'); }
        if (Element.innerHTML === '1052') { addSvgElem(Index, Element, 'Q_domG_tryb', 'start'); }
        if (Element.innerHTML === '-0') { addSvgElem(Index, Element, 'H_snotr'); }
        if (Element.innerHTML === '1327') { addSvgElem(Index, Element, 'Tkyp_3', 'start'); }
        if (Element.innerHTML === '102016') { addSvgElem(Index, Element, 'Fvozdyh_3', 'start'); }
        if (Element.innerHTML === '80994') { addSvgElem(Index, Element, 'Fgaz_3', 'start'); }
        if (Element.getAttribute('x') === '1022.95' && Element.getAttribute('y') === '773.85') { addSvgElem(Index, Element, 'VNK1_Fb'); } // Sergey
        if (Element.getAttribute('x') === '1022.95' && Element.getAttribute('y') === '807.2') { addSvgElem(Index, Element, 'VNK1_Fr'); } // Sergey
        if (Element.innerHTML === '1328') { addSvgElem(Index, Element, 'Tkyp_2', 'start'); }
        if (Element.innerHTML === '120222') { addSvgElem(Index, Element, 'Fvozdyh_2', 'start'); }
        if (Element.innerHTML === '101351') { addSvgElem(Index, Element, 'Fgaz_2', 'start'); }
        if (Element.innerHTML === '1297') { addSvgElem(Index, Element, 'Tkyp_1', 'start'); }
        if (Element.innerHTML === '141') { addSvgElem(Index, Element, 'Tdym_3'); }
        if (Element.innerHTML === '306') { addSvgElem(Index, Element, 'Tdym_2'); }
        if (Element.innerHTML === '174') { addSvgElem(Index, Element, 'Tdym_1'); }
        if (Element.getAttribute('x') === '996.88' && Element.getAttribute('y') === '703.28') { addSvgElem(Index, Element, 'VNK1_status_2'); } // Sergey
        if (Element.getAttribute('x') === '898.69' && Element.getAttribute('y') === '703.51') { addSvgElem(Index, Element, 'VNK2_status_2'); } // Sergey
        if (Element.getAttribute('x') === '803.4' && Element.getAttribute('y') === '702.01') { addSvgElem(Index, Element, 'VNK3_status_2'); } // Sergey
        if (Element.getAttribute('x') === '1010.96' && Element.getAttribute('y') === '731.58') { addSvgElem(Index, Element, 'VNK1_status_1_1'); } // Sergey
        if (Element.getAttribute('x') === '918.26' && Element.getAttribute('y') === '731.58') { addSvgElem(Index, Element, 'VNK2_status_1_2'); } // Sergey
        if (Element.getAttribute('x') === '825.55' && Element.getAttribute('y') === '731.58') { addSvgElem(Index, Element, 'VNK3_status_1_3'); } // Sergey
        if (Element.innerHTML === '68') { addSvgElem(Index, Element, 'Temp_peref_1'); }
        if (Element.innerHTML === '140,0' && TextIndex === 296) { addSvgElem(Index, Element, 'nizkoe'); }
        if (Element.innerHTML === 'Р кол. газа' && TextIndex === 532) { addSvgElem(Index, Element, 'P col. gaza'); }
        if (Element.innerHTML === 'dp ' && TextIndex === 196) { addSvgElem(Index, Element, 'dp obh.', 'start'); Element.innerHTML = 'dp общ'; }
        if (Element.innerHTML === 'общ' && TextIndex === 198) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'Т гор. дутья' && TextIndex === 533) { addSvgElem(Index, Element, 'T gor. dytia'); }
        if (Element.innerHTML === 'F' && TextIndex === 534) { addSvgElem(Index, Element, 'f prirod. gaza', 'start'); Element.innerHTML = 'F прир. газа'; }
        if (Element.innerHTML === ' прир. газа' && TextIndex === 535) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'ТТГ' && TextIndex === 198) { addSvgElem(Index, Element, 'TTG'); }
        if (Element.innerHTML === 'F' && TextIndex === 536) { addSvgElem(Index, Element, 'F par. yvl', 'start'); Element.innerHTML = 'F пар. увл'; }
        if (Element.innerHTML === ' пар. увл.' && TextIndex === 537) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'Влажность' && TextIndex === 538) { addSvgElem(Index, Element, 'vlajnost'); }
        if (Element.innerHTML === 'ГРУЗИТЬ' && TextIndex === 41) { addSvgElem(Index, Element, 'gruzit'); }
        if (Element.innerHTML === 'Работа по ' && TextIndex === 221) { addSvgElem(Index, Element, 'rabota po max yrovnu', 'start'); Element.innerHTML = 'Работа по MAX уровню'; }
        if (Element.innerHTML === 'уровню' && TextIndex === 222) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'MAX ' && TextIndex === 223) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'Машинист' && TextIndex === 192) { addSvgElem(Index, Element, 'mahinist'); }
        if (Element.innerHTML === 'Вызов принят' && TextIndex === 193) { addSvgElem(Index, Element, 'vyzov prenit'); }
        if (Element.innerHTML === 'Выпуск Л1' && TextIndex === 194) { addSvgElem(Index, Element, 'vipysk L1'); }
        if (Element.innerHTML === 'Выпуск Л3' && TextIndex === 195) { addSvgElem(Index, Element, 'vipysk L3'); }
        if (Element.innerHTML === 'Выпуск Л2' && TextIndex === 519) { addSvgElem(Index, Element, 'vipysk L2'); }
        if (Element.innerHTML === 'Выпуск Л4' && TextIndex === 520) { addSvgElem(Index, Element, 'vipusk L4'); }
        if (Element.innerHTML === 'Достигнут заданный уровень' && TextIndex === 42) { addSvgElem(Index, Element, 'dostignyt zadanyu yroven'); }
        if (Element.innerHTML === '10' && TextIndex === 244) { addSvgElem(Index, Element, 'Pvozd'); }
        if (Element.innerHTML === '9' && TextIndex === 245) { addSvgElem(Index, Element, 'Pgaz'); }
        if (Element.innerHTML === '0,00' && TextIndex === 246) { addSvgElem(Index, Element, 'CO bor'); }
        if (Element.innerHTML === '63') {
          if (TextIndex === 252)
            addSvgElem(Index, Element, 'Temp_peref_2'); else
            addSvgElem(Index, Element, 'Temp_peref_13');
        }
        if (Element.innerHTML === '56') { addSvgElem(Index, Element, 'Temp_peref_3'); }
        if (Element.innerHTML === '62') {
          if (TextIndex === 254)
            addSvgElem(Index, Element, 'Temp_peref_4'); else if (TextIndex === 257)
            addSvgElem(Index, Element, 'Temp_peref_8'); else
            addSvgElem(Index, Element, 'Temp_peref_11');
        }
        if (Element.innerHTML === '61') {
          if (TextIndex === 256)
            addSvgElem(Index, Element, 'Temp_peref_5'); else if (TextIndex === 258)
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
        if (Element.innerHTML === '8,14') { addSvgElem(Index, Element, 'P_Os_szat_voz', 'start'); }
        if (Element.innerHTML === '34') { addSvgElem(Index, Element, 'T_Os_szat_voz'); }
        if (Element.innerHTML === '35') { addSvgElem(Index, Element, 'H_Os_szat_voz'); }
        if (Element.innerHTML === '15') {
          if (TextIndex === 284)
            addSvgElem(Index, Element, 'T_prir_gaz');
        }
        if (Element.innerHTML === '39') { addSvgElem(Index, Element, 'H_prir_gaz'); }
        if (Element.innerHTML === '30626') { addSvgElem(Index, Element, 'F_pg_sym_prir_gaz', 'start'); }
        if (Element.innerHTML === '8,56') { addSvgElem(Index, Element, 'P_pg_prir_gaz'); }
        if (Element.innerHTML === '30719') { addSvgElem(Index, Element, 'F_pg_prir_gaz', 'start'); }
        if (Element.innerHTML === '-93') { addSvgElem(Index, Element, 'dF_pg_prir_gaz'); }
        if (Element.innerHTML === '1487' && Element.getAttribute('x') === '1599.25' && Element.getAttribute('y') === '933.1') { addSvgElem(Index, Element, 'L1'); } // Sergey
        if (Element.innerHTML === '1487' && Element.getAttribute('x') === '1703.94' && Element.getAttribute('y') === '933.1') { addSvgElem(Index, Element, 'L2'); } // Sergey
        if (Element.innerHTML === '1487' && Element.getAttribute('x') === '1703.94' && Element.getAttribute('y') === '963.83') { addSvgElem(Index, Element, 'L3'); } // Sergey
        if (Element.innerHTML === '1487' && Element.getAttribute('x') === '1599.25' && Element.getAttribute('y') === '961.75') { addSvgElem(Index, Element, 'L4'); } // Sergey
        if (Element.innerHTML === '49,4') { addSvgElem(Index, Element, 'H_step_isp'); }
        if (Element.innerHTML === '46,0') { addSvgElem(Index, Element, 'HCO_step_isp'); }
        if (Element.innerHTML === '216,1') { addSvgElem(Index, Element, 'V_dyt', 'start'); }
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
          if (TextIndex === 207)
            addSvgElem(Index, Element, 'zadan_yrov_kras'); else
            addSvgElem(Index, Element, 'zadan_yrov_sin');
        }
        if (Element.innerHTML === '0,0') { addSvgElem(Index, Element, '02_trub'); }
        if (Element.innerHTML === '0') {
          if (TextIndex === 271)
            addSvgElem(Index, Element, 'Fvozdyh_1'); else if (TextIndex === 272)
            addSvgElem(Index, Element, 'Fgaz_1'); else if (TextIndex === 280)
            addSvgElem(Index, Element, 'H001'); else if (TextIndex === 281)
            addSvgElem(Index, Element, 'F_osysh_szat_voz'); else if (TextIndex === 339)
            addSvgElem(Index, Element, 'EVD2_O'); else if (TextIndex === 327)
            addSvgElem(Index, Element, 'H_par_yvlaz');
        }
        if (Element.innerHTML === '10' && Element.getAttribute('x') == 707.62) { addSvgElem(Index, Element, 'P_vozd_tryb'); }
        if (Element.innerHTML === '9' && Element.getAttribute('x') == 718.7) { addSvgElem(Index, Element, 'P_gaza_tryb'); }
        if (Element.innerHTML === '0,00' && Element.getAttribute('x') == 706) { addSvgElem(Index, Element, 'CO_bor_tryb'); }
        // Sergey
        if (Element.innerHTML === '1210' && Element.getAttribute('x') === '1917.7' && Element.getAttribute('y') === '248.82') { addSvgElem(Index, Element, 't_gor_dut'); }
        if (Element.innerHTML === '1210' && Element.getAttribute('x') === '1275.31' && Element.getAttribute('y') === '708.13') { addSvgElem(Index, Element, 't_gor_dut'); }
        if (Element.innerHTML === '1210' && Element.getAttribute('x') === '1347.06' && Element.getAttribute('y') === '710.66') { addSvgElem(Index, Element, 't_gor_dut'); }
        if (Element.innerHTML === '15' && Element.getAttribute('x') === '1254.49' && Element.getAttribute('y') === '893.55') { addSvgElem(Index, Element, 't_prirodn_gaz'); }
        if (Element.innerHTML === 'Выпуск Л3' && Element.getAttribute('x') === '779.42' && Element.getAttribute('y') === '252.37') { addSvgElem(Index, Element, 'vipusk_L3'); }
        if (Element.innerHTML === '3,12' && Element.getAttribute('x') === '1810.69' && Element.getAttribute('y') === '642.76') { addSvgElem(Index, Element, 'P_tryba_4_1'); }
        if (Element.innerHTML === '2,78' && Element.getAttribute('x') === '1859.05' && Element.getAttribute('y') === '642.76') { addSvgElem(Index, Element, 'P_tryba_4_2'); }
        if (Element.innerHTML === '3,78' && Element.getAttribute('x') === '1906.28' && Element.getAttribute('y') === '642.76') { addSvgElem(Index, Element, 'P_tryba_4_3'); }
        if (Element.innerHTML === '2,98' && Element.getAttribute('x') === '1953.68' && Element.getAttribute('y') === '642.76') { addSvgElem(Index, Element, 'P_tryba_4_4'); }
        // Ilay
        if (Element.innerHTML === 'Работа' && Element.getAttribute('x') === '443.53' && Element.getAttribute('y') === '340.11') { addSvgElem(Index, Element, 'M_t1_4'); }
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '234.62' && Element.getAttribute('y') === '463.58') { addSvgElem(Index, Element, 'M_t2_4'); }
        if (Element.innerHTML === 'Работа' && Element.getAttribute('x') === '174.04' && Element.getAttribute('y') === '810.13') { addSvgElem(Index, Element, 'M_t3_4'); }
        if (Element.innerHTML === 'Работа' && Element.getAttribute('x') === '1316.65' && Element.getAttribute('y') === '187.93') { addSvgElem(Index, Element, 'M_t4_4'); }
        if (Element.innerHTML === '2,40' && Element.getAttribute('x') === '1811.04' && Element.getAttribute('y') === '518.28') { addSvgElem(Index, Element, 'P_tryba_2_1'); }
        if (Element.innerHTML === '2,40' && Element.getAttribute('x') === '1858.96' && Element.getAttribute('y') === '518.28') { addSvgElem(Index, Element, 'P_tryba_2_2'); }
        if (Element.innerHTML === '2,39' && Element.getAttribute('x') === '1905.73' && Element.getAttribute('y') === '518.28') { addSvgElem(Index, Element, 'P_tryba_2_3'); }
        if (Element.innerHTML === '2,40' && Element.getAttribute('x') === '1953.65' && Element.getAttribute('y') === '518.28') { addSvgElem(Index, Element, 'P_tryba_2_4'); }

      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.getAttribute('d') === 'M14.06 778.51c4.03 0 7.29 3.27 7.29 7.3 0 4.03-3.26 7.29-7.29 7.29s-7.29-3.26-7.29-7.29 3.26-7.3 7.29-7.3z') { addSvgElem(Index, Element, 'EVS 7'); }
        if (Element.getAttribute('d') === 'M14.06 826.95c4.03 0 7.29 3.27 7.29 7.3 0 4.02-3.26 7.29-7.29 7.29s-7.29-3.27-7.29-7.29c0-4.03 3.26-7.3 7.29-7.3z') { addSvgElem(Index, Element, 'EVD 1'); }
        if (Element.getAttribute('d') === 'M13.02 877.47c4.03 0 7.29 3.27 7.29 7.29 0 4.03-3.26 7.3-7.29 7.3s-7.29-3.27-7.29-7.3c0-4.02 3.26-7.29 7.29-7.29z') { addSvgElem(Index, Element, 'EVD 2'); }
        if (Element.getAttribute('d') === 'M254.69 795.18a4.69 4.69 0 1 1 0 9.38 4.69 4.69 0 0 1 0-9.38z') { addSvgElem(Index, Element, 'menihe 0.2'); }
        if (Element.getAttribute('d') === 'M303.66 795.08a4.69 4.69 0 1 1 0 9.38 4.69 4.69 0 0 1 0-9.38z') { addSvgElem(Index, Element, 'menihe 2'); }
        if (Element.getAttribute('d') === 'M458.86 781.12 422.4 758.2v22.92l36.46-22.92z') { addSvgElem(Index, Element, 'kl_726'); }
        if (Element.getAttribute('d') === 'm463.02 602.99-46.87-12.5h46.87l-46.87 12.5z') { addSvgElem(Index, Element, 'OGV06'); }
        if (Element.getAttribute('d') === 'm1152.61 808.2-23.96-33.33h23.96l-23.96 33.33z') { addSvgElem(Index, Element, 'kl_002'); }
        if (Element.getAttribute('d') === 'm957.81 359.24-36.45 21.88v-21.88l36.45 21.88z') { addSvgElem(Index, Element, 'kl_81'); }
        if (Element.getAttribute('d') === 'M497.4 887.89c2.58 0 4.68 2.1 4.68 4.69 0 2.59-2.1 4.69-4.68 4.69a4.69 4.69 0 0 1 0-9.38zm2.6 2.08a3.632 3.632 0 0 0-2.6-1.08c-1.02 0-1.95.42-2.61 1.08-.67.67-1.08 1.59-1.08 2.61 0 1.02.41 1.94 1.08 2.61.66.66 1.59 1.08 2.61 1.08a3.69 3.69 0 0 0 3.68-3.69c0-1.02-.41-1.94-1.07-2.61H500z') { addSvgElem(Index, Element, 'W g/m3'); }
        if (Element.getAttribute('d') === 'm1306.77 925.91-36.46-21.87v21.87l36.46-21.87z') { addSvgElem(Index, Element, 'kl_722'); }

        // if (Element.getAttribute('d') === 'm1494.27 899.87-23.96-33.33h23.96l-23.96 33.33z') { addSvgElem(Index, Element, 'kl_723'); }
        if (Element.getAttribute('d') === 'm1422.83 770.52 5.84-9.36 5.84-9.36h-23.37l5.84 9.36z') { addSvgElem(Index, Element, 'kl_723_t'); }
        if (Element.getAttribute('d') === 'm1422.83 768.79 5.84 9.36 5.84 9.37h-23.37l5.84-9.37z') { addSvgElem(Index, Element, 'kl_723_b'); }

        if (Element.getAttribute('d') === 'm1457.81 670.7-23.95 33.34h23.95l-23.95-33.34z') { addSvgElem(Index, Element, 'kl_022'); }
        if (Element.getAttribute('d') === 'M1200.52 679.04a4.165 4.165 0 1 1 0 8.33 4.165 4.165 0 1 1 0-8.33z') { addSvgElem(Index, Element, 'menihe 0.2_P'); }
        if (Element.getAttribute('d') === 'M1200.52 692.06a4.165 4.165 0 1 1 0 8.33 4.165 4.165 0 1 1 0-8.33z') { addSvgElem(Index, Element, 'menihe 0.5_P'); }
        if (Element.getAttribute('d') === 'M1200.52 706.64c2.3 0 4.17 1.87 4.17 4.17s-1.87 4.16-4.17 4.16-4.17-1.86-4.17-4.16 1.87-4.17 4.17-4.17z') { addSvgElem(Index, Element, 'menihe 2_P'); }
        if (Element.getAttribute('d') === 'M1256.25 755.6a4.165 4.165 0 1 1 0 8.33 4.165 4.165 0 1 1 0-8.33z') { addSvgElem(Index, Element, 'menihe 0.5_Perepad'); }
        if (Element.getAttribute('d') === 'M1256.25 770.18c2.3 0 4.17 1.87 4.17 4.17s-1.87 4.17-4.17 4.17-4.17-1.87-4.17-4.17 1.87-4.17 4.17-4.17z') { addSvgElem(Index, Element, 'menihe 1'); }
        if (Element.getAttribute('d') === 'M1404.17 751.43c2.3 0 4.16 1.87 4.16 4.17s-1.86 4.17-4.16 4.17-4.17-1.87-4.17-4.17 1.87-4.17 4.17-4.17z') { addSvgElem(Index, Element, ''); }
        if (Element.getAttribute('d') === 'm346.35 621.74-31.25-18.75v19.8l31.25-19.8z') { addSvgElem(Index, Element, 'kl_TEV06'); }
        if (Element.getAttribute('d') === 'm298.44 588.41-14.59 46.88v-46.88l14.59 46.88z') { addSvgElem(Index, Element, 'kl_IGV06'); }
        if (Element.getAttribute('d') === 'm330.73 551.95-27.08 19.79v-18.75l27.08 17.71z') { addSvgElem(Index, Element, 'kl_MBV06'); }
        if (Element.getAttribute('d') === 'm332.29 517.58-27.08 18.75v-17.71l27.08 16.67z') { addSvgElem(Index, Element, 'kl_SBV06'); }
        if (Element.getAttribute('d') === 'd="m626.56 936.33-36.45-21.88v21.88l36.45-21.88z"') { addSvgElem(Index, Element, 'kl_zeliniy_zeliniy'); }
        if (Element.getAttribute('d') === 'm608.86 923.83-12.5-16.67h23.95z') { addSvgElem(Index, Element, 'kl_red'); }
        if (Element.getAttribute('d') === 'M153.65 452.99h-18.76l18.76 28.13h-19.8z') { addSvgElem(Index, Element, 'kl_red_red'); }
        if (Element.getAttribute('d') === 'm776.56 338.41-23.96-33.33h23.96l-23.96 33.33z') { addSvgElem(Index, Element, 'kl_84'); }
        if (Element.getAttribute('d') === 'm998.44 338.41-23.96-33.33h23.96l-23.96 33.33z') { addSvgElem(Index, Element, 'kl_83'); }
        if (Element.getAttribute('d') === 'm957.81 359.24-36.45 21.88v-21.88l36.45 21.88z') { addSvgElem(Index, Element, 'kl_81'); }
        if (Element.getAttribute('d') === 'M792.71 684.77h90.62v28.12h-90.62z') { addSvgElem(Index, Element, 'VNK3_status_1_fon'); } // Sergey
        if (Element.getAttribute('d') === 'M886.46 684.77h90.62v28.12h-90.62z') { addSvgElem(Index, Element, 'VNK2_status_1_fon'); } // Sergey
        if (Element.getAttribute('d') === 'M981.25 684.77h90.63v28.12h-90.63z') { addSvgElem(Index, Element, 'VNK1_status_1_fon'); } // Sergey
        if (Element.getAttribute('d') === 'M804.17 714.97h71.87v25h-71.87z') { addSvgElem(Index, Element, 'VNK3_status_2'); }
        if (Element.getAttribute('d') === 'M896.88 714.97h71.87v25h-71.87z') { addSvgElem(Index, Element, 'VNK2_status_2'); }
        if (Element.getAttribute('d') === 'M989.58 714.97h71.88v25h-71.88z') { addSvgElem(Index, Element, 'VNK1_status_2'); }
        if (Element.getAttribute('d') === 'm1495.31 151.95 23.96 34.38h-23.96l23.96-34.38z') { addSvgElem(Index, Element, 'kl_3'); }
        if (Element.getAttribute('d') === 'm1565.11 152.99-23.96 34.38h23.99l-23.99-34.38z') { addSvgElem(Index, Element, 'kl_2'); }
        if (Element.getAttribute('d') === 'm1654.69 151.95-23.96 34.38h23.96l-23.96-34.38z') { addSvgElem(Index, Element, 'kl_1'); }
        if (Element.getAttribute('d') === 'M196.81 219.5h14.89v-14.38h-14.89z') { addSvgElem(Index, Element, 'golyboy kvadrat'); }
        if (Element.getAttribute('d') === 'M106.25 206.64h10.42v30.21h-10.42z') { addSvgElem(Index, Element, 'zeleniy_radar 2'); }
        if (Element.getAttribute('d') === 'M37.5 206.64h10.42v30.21H37.5z') { addSvgElem(Index, Element, 'zeleniy_radar 1'); }
        if (Element.getAttribute('d') === 'M36.46 236.85h12.5v79.16h-12.5z') { addSvgElem(Index, Element, 'beluy_radar 1'); }
        if (Element.getAttribute('d') === 'M105.21 236.85h12.5v79.16h-12.5z') { addSvgElem(Index, Element, 'beluy_radar 2'); }
        if (Element.getAttribute('d') === 'M182.29 206.64h12.5v109.37h-12.5z') { addSvgElem(Index, Element, 'beluy_radar 3'); }
        if (Element.getAttribute('d') === 'M477.08 157.68h18.75v14.59h-18.75z') { addSvgElem(Index, Element, 'Fakt.Yr_1'); }
        if (Element.getAttribute('d') === 'M505.21 157.68h18.75v14.59h-18.75z') { addSvgElem(Index, Element, 'Fakt.Yr_2'); }
        if (Element.getAttribute('d') === 'M591.67 156.64h18.75v14.58h-18.75z') { addSvgElem(Index, Element, 'Zadanuy'); }
        if (Element.getAttribute('d') === 'M534.37 157.68h18.75v14.59h-18.75z') { addSvgElem(Index, Element, 'Fakt.Yr_3'); }
        if (Element.getAttribute('d') === 'M322.92 156.64h18.75v14.58h-18.75z') { addSvgElem(Index, Element, 'RGD'); }
        if (Element.getAttribute('d') === 'M1015.63 462.89h13.54v13.54h-13.54z') { addSvgElem(Index, Element, 'stepen espolizovania SO'); }
        if (Element.getAttribute('d') === 'm1076.56 101.95 47.92-9.37-45.15-10.8h-2.19l6.72 7.67h-72.92v5.21h72.92z') { addSvgElem(Index, Element, 'zelenay strelka'); }
        if (Element.getAttribute('d') === 'M1025 232.85h11.46v65.46H1025z') { addSvgElem(Index, Element, 'poloska_1_1'); }
        if (Element.getAttribute('d') === 'M1037.5 233.9h11.46v64.41h-11.46z') { addSvgElem(Index, Element, 'poloska_1_2'); }
        if (Element.getAttribute('d') === 'M1050 241.13h11.46v57.17H1050z') { addSvgElem(Index, Element, 'poloska_1_3'); }
        if (Element.getAttribute('d') === 'M1062.5 236.2h10.97v61.06h-10.97z') { addSvgElem(Index, Element, 'poloska_1_4'); }
        if (Element.getAttribute('d') === 'M1075.52 233.44h10.94v63.92h-10.94z') { addSvgElem(Index, Element, 'poloska_1_5'); }
        if (Element.getAttribute('d') === 'M1088.02 233.44h10.94v63.92h-10.94z') { addSvgElem(Index, Element, 'poloska_1_6'); }
        if (Element.getAttribute('d') === 'M1100.52 235.44h10.94v62.21h-10.94z') { addSvgElem(Index, Element, 'poloska_1_7'); }
        if (Element.getAttribute('d') === 'M1112.5 232.78h11.46v64.78h-11.46z') { addSvgElem(Index, Element, 'poloska_1_8'); }
        if (Element.getAttribute('d') === 'M1125.52 231.35h9.9v65.91h-9.9z') { addSvgElem(Index, Element, 'poloska_1_9'); }
        if (Element.getAttribute('d') === 'M1148.96 298.31h-11.46V180.6h11.46v117.71zm-10.46-1h9.46V181.6h-9.46v115.71z') { addSvgElem(Index, Element, 'poloska_1_10'); }
        if (Element.getAttribute('d') === 'M1150 234.77h10.42v63.54H1150z') { addSvgElem(Index, Element, 'poloska_1_11'); }
        if (Element.getAttribute('d') === 'M1163.54 236.85h10.42v60.42h-10.42z') { addSvgElem(Index, Element, 'poloska_1_12'); }
        if (Element.getAttribute('d') === 'M1175.52 238.01h9.9v59.26h-9.9z') { addSvgElem(Index, Element, 'poloska_1_13'); }
        if (Element.getAttribute('d') === 'M1187.5 241.02h11.46v56.25h-11.46z') { addSvgElem(Index, Element, 'poloska_1_14'); }
        if (Element.getAttribute('d') === 'M1201.04 241.02h10.42v56.25h-10.42z') { addSvgElem(Index, Element, 'poloska_1_15'); }
        if (Element.getAttribute('d') === 'M1225.52 240.77h10.94v57.54h-10.94z') { addSvgElem(Index, Element, 'poloska_1_17'); }
        if (Element.getAttribute('d') === 'M1237.5 236.85h11.46v61.46h-11.46z') { addSvgElem(Index, Element, 'poloska_1_18'); }
        if (Element.getAttribute('d') === 'M1250.52 237.91h10.94v59.93h-10.94z') { addSvgElem(Index, Element, 'poloska_1_19'); }
        if (Element.getAttribute('d') === 'M1212.5 237.89h11.46v59.38h-11.46z') { addSvgElem(Index, Element, 'poloska_1_16'); }
        if (Element.getAttribute('d') === 'M1263.02 242h9.9v55.26h-9.9z') { addSvgElem(Index, Element, 'poloska_1_20'); }
        if (Element.getAttribute('d') === 'M1275 237.53h11.46v60.77H1275z') { addSvgElem(Index, Element, 'poloska_1_21'); }
        if (Element.getAttribute('d') === 'M1288.02 235.73h10.94v62.58h-10.94z') { addSvgElem(Index, Element, 'poloska_1_22'); }
        if (Element.getAttribute('d') === 'M1350.52 232.97h10.94v64.11h-10.94z') { addSvgElem(Index, Element, 'poloska_1_23'); }
        if (Element.getAttribute('d') === 'M1312.5 235.15h10.42v62.11h-10.42z') { addSvgElem(Index, Element, 'poloska_1_24'); }
        if (Element.getAttribute('d') === 'M1325 232.97h10.42v64.3H1325z') { addSvgElem(Index, Element, 'poloska_1_25'); }
        if (Element.getAttribute('d') === 'M1348.96 298.31h-11.46V180.6h11.46v117.71zm-10.46-1h9.46V181.6h-9.46v115.71z') { addSvgElem(Index, Element, 'poloska_1_26'); }
        if (Element.getAttribute('d') === 'M1363.02 232.97h10.94v64.4h-10.94z') { addSvgElem(Index, Element, 'poloska_1_27'); }
        if (Element.getAttribute('d') === 'M1363.02 232.97h10.94v64.4h-10.94z') { addSvgElem(Index, Element, 'poloska_1_28'); }
        if (Element.getAttribute('d') === 'M1375.52 241.43h9.9v55.83h-9.9z') { addSvgElem(Index, Element, 'poloska_1_29'); }
        if (Element.getAttribute('d') === 'M1398.96 298.31h-11.46V180.6h11.46v117.71zm-10.46-1h9.46V181.6h-9.46v115.71z') { addSvgElem(Index, Element, 'poloska_1-30'); }
        if (Element.getAttribute('d') === 'M1400 234.19h11.46v63.3H1400z') { addSvgElem(Index, Element, 'polosca_1_31'); }
        if (Element.getAttribute('d') === 'M1412.5 236.72h10.42v60.55h-10.42z') { addSvgElem(Index, Element, 'polosca_1_32'); }
        if (Element.getAttribute('d') === 'M1026.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_1'); }
        if (Element.getAttribute('d') === 'M1038.54 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_2'); }
        if (Element.getAttribute('d') === 'M1051.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_3'); }
        if (Element.getAttribute('d') === 'M1063.54 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_4'); }
        if (Element.getAttribute('d') === 'M1076.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_5'); }
        if (Element.getAttribute('d') === 'M1088.54 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_6'); }
        if (Element.getAttribute('d') === 'M1101.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_7'); }
        if (Element.getAttribute('d') === 'M1113.54 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_8'); }
        if (Element.getAttribute('d') === 'M1126.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_9'); }
        if (Element.getAttribute('d') === 'M1138.54 167.06h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_2_10'); }
        if (Element.getAttribute('d') === 'M1151.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_11'); }
        if (Element.getAttribute('d') === 'M1163.54 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_12'); }
        if (Element.getAttribute('d') === 'M1176.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_13'); }
        if (Element.getAttribute('d') === 'M1188.54 167.06h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_2_14'); }
        if (Element.getAttribute('d') === 'M1201.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_15'); }
        if (Element.getAttribute('d') === 'M1213.54 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_16'); }
        if (Element.getAttribute('d') === 'M1226.04 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_17'); }
        if (Element.getAttribute('d') === 'M1238.28 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_18'); }
        if (Element.getAttribute('d') === 'M1250.75 167.06h10.41v11.45h-10.41z') { addSvgElem(Index, Element, 'kvadrat_2_19'); }
        if (Element.getAttribute('d') === 'M1263.21 167.06h10.41v11.45h-10.41v-11.45zm9.41 1h-8.41v9.45h8.41v-9.45z') { addSvgElem(Index, Element, 'kvadrat_2_20'); }
        if (Element.getAttribute('d') === 'M1275.67 167.06h10.41v11.45h-10.41z') { addSvgElem(Index, Element, 'kvadrat_2_21'); }
        if (Element.getAttribute('d') === 'M1288.13 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_22'); }
        if (Element.getAttribute('d') === 'M1300.59 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_23'); }
        if (Element.getAttribute('d') === 'M1313.05 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2__24'); }
        if (Element.getAttribute('d') === 'M1325.52 167.06h10.41v11.45h-10.41z') { addSvgElem(Index, Element, 'kvadrat_2_25'); }
        if (Element.getAttribute('d') === 'M1337.98 167.06h10.41v11.45h-10.41z') { addSvgElem(Index, Element, 'kvadrat_2_26'); }
        if (Element.getAttribute('d') === 'M1350.44 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_27'); }
        if (Element.getAttribute('d') === 'M1362.9 167.06h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_28'); }
        if (Element.getAttribute('d') === 'M1375.36 166.8h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_29'); }
        if (Element.getAttribute('d') === 'M1387.83 166.8h10.41v11.45h-10.41z') { addSvgElem(Index, Element, 'kvadrat_2_30'); }
        if (Element.getAttribute('d') === 'M1400.29 166.8h10.41v11.45h-10.41z') { addSvgElem(Index, Element, 'kvadrat_2_31'); }
        if (Element.getAttribute('d') === 'M1412.76 166.8h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_2_32'); }
        if (Element.getAttribute('d') === 'M1026.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_1'); }
        if (Element.getAttribute('d') === 'M1038.54 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_2'); }
        if (Element.getAttribute('d') === 'M1051.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_3'); }
        if (Element.getAttribute('d') === 'M1063.54 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_4'); }
        if (Element.getAttribute('d') === 'M1076.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_5'); }
        if (Element.getAttribute('d') === 'M1088.54 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_6'); }
        if (Element.getAttribute('d') === 'M1101.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_7'); }
        if (Element.getAttribute('d') === 'M1113.54 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_8'); }
        if (Element.getAttribute('d') === 'M1126.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_9'); }
        if (Element.getAttribute('d') === 'M1138.54 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_10'); }
        if (Element.getAttribute('d') === 'M1151.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_11'); }
        if (Element.getAttribute('d') === 'M1163.54 153.52h10.42v11.45h-10.42z') { addSvgElem(Index, Element, 'kvadrat_1_12'); }
        if (Element.getAttribute('d') === 'M1176.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_13'); }
        if (Element.getAttribute('d') === 'M1188.54 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_14'); }
        if (Element.getAttribute('d') === 'M1201.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_15'); }
        if (Element.getAttribute('d') === 'M1213.54 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_16'); }
        if (Element.getAttribute('d') === 'M1226.04 153.52h10.42v11.45h-10.42v-11.45zm9.42 1h-8.42v9.45h8.42v-9.45z') { addSvgElem(Index, Element, 'kvadrat_1_17'); }
        if (Element.getAttribute('d') === 'M1238.28 153.77h10.42v11.46h-10.42v-11.46zm9.42 1h-8.42v9.46h8.42v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_18'); }
        if (Element.getAttribute('d') === 'M1250.75 153.77h10.41v11.46h-10.41v-11.46zm9.41 1h-8.41v9.46h8.41v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_19'); }
        if (Element.getAttribute('d') === 'M1263.21 153.77h10.41v11.46h-10.41v-11.46zm9.41 1h-8.41v9.46h8.41v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_20'); }
        if (Element.getAttribute('d') === 'M1275.67 153.77h10.41v11.46h-10.41v-11.46zm9.41 1h-8.41v9.46h8.41v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_21'); }
        if (Element.getAttribute('d') === 'M1288.13 153.77h10.42v11.46h-10.42v-11.46zm9.42 1h-8.42v9.46h8.42v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_22'); }
        if (Element.getAttribute('d') === 'M1300.59 153.77h10.42v11.46h-10.42v-11.46zm9.42 1h-8.42v9.46h8.42v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_23'); }
        if (Element.getAttribute('d') === 'M1313.05 153.77h10.42v11.46h-10.42v-11.46zm9.42 1h-8.41v9.46h8.41v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_24'); }
        if (Element.getAttribute('d') === 'M1325.52 153.77h10.41v11.46h-10.41v-11.46zm9.41 1h-8.41v9.46h8.41v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_25'); }
        if (Element.getAttribute('d') === 'M1337.98 153.77h10.41v11.46h-10.41v-11.46zm9.41 1h-8.41v9.46h8.41v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_26'); }
        if (Element.getAttribute('d') === 'M1350.44 153.77h10.42v11.46h-10.42v-11.46zm9.42 1h-8.42v9.46h8.42v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_27'); }
        if (Element.getAttribute('d') === 'M1362.9 153.77h10.42v11.46h-10.42v-11.46zm9.42 1h-8.42v9.46h8.42v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_28'); }
        if (Element.getAttribute('d') === 'M1375.36 153.51h10.42v11.46h-10.42v-11.46zm9.42 1h-8.42v9.46h8.42v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_29'); }
        if (Element.getAttribute('d') === 'M1387.83 153.51h10.41v11.46h-10.41v-11.46zm9.41 1h-8.41v9.46h8.41v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_30'); }
        if (Element.getAttribute('d') === 'M1400.29 153.51h10.41v11.46h-10.41v-11.46zm9.41 1h-8.41v9.46h8.41v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_31'); }
        if (Element.getAttribute('d') === 'M1412.76 153.51h10.42v11.46h-10.42v-11.46zm9.42 1h-8.42v9.46h8.42v-9.46z') { addSvgElem(Index, Element, 'kvadrat_1_32'); }
        if (Element.getAttribute('d') === 'M206.77 537.37v43.75l-17.71-43.75v43.75z') { addSvgElem(Index, Element, 'klapon vyhoda cistogo gaza'); }
        if (Element.getAttribute('d') === 'M146 521.47c5.24 0 9.49 4.25 9.49 9.49 0 5.25-4.25 9.5-9.49 9.5-5.25 0-9.5-4.25-9.5-9.5 0-5.24 4.25-9.49 9.5-9.49z') { addSvgElem(Index, Element, 'zeleniy krug'); }
        if (Element.getAttribute('d') === 'M115.62 631.64h12.5v-57.29h-12.5z') { addSvgElem(Index, Element, 'beliy primoygolinik 1'); }
        if (Element.getAttribute('d') === 'M138.54 631.64h12.5v-57.29h-12.5z') { addSvgElem(Index, Element, 'beliy primoygolinik 2'); }
        if (Element.getAttribute('d') === 'M160.42 631.64h12.5v-57.29h-12.5z') { addSvgElem(Index, Element, 'beliy primoygolinik 3'); }
        if (Element.getAttribute('d') === 'M115.62 631.64h12.5v27.08h-12.5z') { addSvgElem(Index, Element, 'zeliniy primoygolinik 1'); }
        if (Element.getAttribute('d') === 'M160.42 631.64h12.5v27.08h-12.5z') { addSvgElem(Index, Element, 'zeliniy primoygolinik 3'); }
        if (Element.getAttribute('d') === 'M138.54 631.65h12.5v27.07h-12.5v-27.07zm11.5 1h-10.5v25.07h10.5v-25.07z') { addSvgElem(Index, Element, 'zeliniy primoygolinik 2_2'); }
        if (Element.getAttribute('d') === 'm1192.19 858.2-27.08-15.62 2.08-2.09 28.12 15.63z') { addSvgElem(Index, Element, 'ventel_H001a'); }
        if (Element.getAttribute('d') === 'M1125 879.56h32.29v4.16H1125v-4.16zm31.29 1H1126v2.16h30.29v-2.16z') { addSvgElem(Index, Element, 'venteli_H001'); }
        if (Element.getAttribute('d') === 'm1408.33 914.97 12.51-14.58 3.12 2.08-15.63 19.8v-7.3zm12.69-13.26-11.69 13.63v4.05l13.18-16.68-1.49-1z') { addSvgElem(Index, Element, 'venteli_302'); }
        if (Element.getAttribute('d') === 'M485.42 102.47h110.26v23.96H485.42z') { addSvgElem(Index, Element, 'joltiy primoygolnik'); }
        if (Element.getAttribute('d') === 'M595.03 102.47h157.05v12.5H595.03z') { addSvgElem(Index, Element, 'zeliniy primougolnik_1'); }
        if (Element.getAttribute('d') === 'M766.65 102.47h94.81v12.5h-94.81z') { addSvgElem(Index, Element, 'zeliniy primougolnik_2'); }
        if (Element.getAttribute('d') === 'M719.79 113.93h219.78v12.5H719.79z') { addSvgElem(Index, Element, 'krasnay poloska'); }
        if (Element.getAttribute('d') === 'M359.38 654.56c9.37-4.17 18.75-8.34 28.12-11.46v43.75l-28.12-9.38v-22.91z') { addSvgElem(Index, Element, 'perviy celinder'); }
        if (Element.getAttribute('d') === 'M403.65 662.03v18.05l37.5 14.58v-59.37l-37.5 15.62v11.12z') { addSvgElem(Index, Element, 'vtoroy celinder'); }
        if (Element.getAttribute('d') === 'M1550.52 204.56v6.77h1.04V221.74h3.13V210.29h-1.04V202.99h-3.13z') { addSvgElem(Index, Element, 'vtorou vyxod'); }
        if (Element.getAttribute('d') === 'M66.67 943.1h66.66v28.12H66.67V943.1zm65.66 1H67.67v26.12h64.66V944.1z') { addSvgElem(Index, Element, 'quntum'); }
        if (Element.getAttribute('d') === 'M140.62 948.31h57.3v17.71h-57.3z') { addSvgElem(Index, Element, 'M340'); }
        if (Element.getAttribute('d') === 'M1404.17 751.43c2.3 0 4.16 1.87 4.16 4.17s-1.86 4.17-4.16 4.17-4.17-1.87-4.17-4.17 1.87-4.17 4.17-4.17z') { addSvgElem(Index, Element, 'menihe 4,8'); }
        if (Element.getAttribute('d') === 'm232.67 559.85-13.4 8.25v-16.67l13.41 8.77z') { addSvgElem(Index, Element, 'krasniy treygolnik_cistiy gaz'); }
        if (Element.getAttribute('d') === 'm246.35 551.43-13.97 8.6-.01-.03 13.98 9.14z') { addSvgElem(Index, Element, 'zeliniy treygolnik_cistiy gaz'); }
        if (Element.getAttribute('d') === '') { addSvgElem(Index, Element, ''); }

        if (Element.getAttribute('d') === 'M806.25 629.56h71.88v27.08h-71.88z') { addSvgElem(Index, Element, 'Tkyp_3_rect'); }
        if (Element.getAttribute('d') === 'M898.96 629.56h71.87v27.08h-71.87z') { addSvgElem(Index, Element, 'Tkyp_2_rect'); }
        if (Element.getAttribute('d') === 'M991.67 629.56h71.87v28.12h-71.87z') { addSvgElem(Index, Element, 'Tkyp_1_rect'); }
        if (Element.getAttribute('d') === 'M1126.04 682.68h66.67v32.29h-66.67z') { addSvgElem(Index, Element, 'P_2_rect'); }
        if (Element.getAttribute('d') === 'M1628 824.12h70v28h-70z') { addSvgElem(Index, Element, 'L3sqr'); }
        if (Element.getAttribute('d') === 'M1628 795.12h70v28h-70z') { addSvgElem(Index, Element, 'L4sqr'); }
        if (Element.getAttribute('d') === 'M603.11 893.6h10.47v10.08h-10.47z') { addSvgElem(Index, Element, 'H_progres_7'); }
        if (Element.getAttribute('d') === 'M603.11 882.65h10.47v10.99h-10.47z') { addSvgElem(Index, Element, 'H_progres_19'); }
        if (Element.getAttribute('d') === 'M603.11 879.25h10.47v3.56h-10.47z') { addSvgElem(Index, Element, 'H_progres_22'); }
        if (Element.getAttribute('d') === 'M603.11 868.63h10.47v10.79h-10.47z') { addSvgElem(Index, Element, 'H_progres_33'); }
        if (Element.getAttribute('d') === 'M603.11 853.98h10.47v14.8h-10.47z') { addSvgElem(Index, Element, 'H_progres_49'); }
        if (Element.getAttribute('d') === 'M603.11 847.22h10.47v6.99h-10.47z') { addSvgElem(Index, Element, 'H_progres_56'); }
        if (Element.getAttribute('d') === 'M603.11 842.98h10.47v4.39h-10.47z') { addSvgElem(Index, Element, 'H_progres_60'); }
        if (Element.getAttribute('d') === 'M603.11 814.9h10.47v28.13h-10.47z') { addSvgElem(Index, Element, 'H_progres_67'); }
        if (Element.getAttribute('d') === 'M603.11 811.03h10.47v4.02h-10.47z') { addSvgElem(Index, Element, 'H_progres_89'); }
        if (Element.getAttribute('d') === 'M603.11 800.23h10.47v10.83h-10.47z') { addSvgElem(Index, Element, 'H_progres_100'); }
        if (Element.getAttribute('d') === 'M116.68 575.62h10.41v82.24h-10.41z') { addSvgElem(Index, Element, 'AKZ_100'); }
        if (Element.getAttribute('d') === 'M139.57 575.62h10.41v82.24h-10.41z') { addSvgElem(Index, Element, 'AKZ_100'); }
        if (Element.getAttribute('d') === 'M161.49 575.62h10.41v82.24h-10.41z') { addSvgElem(Index, Element, 'AKZ_100'); }
        if (Element.getAttribute('d') === 'M116.68 575.62h10.41v42.11h-10.41z') { addSvgElem(Index, Element, 'AKZ_45-100'); }
        if (Element.getAttribute('d') === 'M139.57 575.62h10.41v42.11h-10.41z') { addSvgElem(Index, Element, 'AKZ_45-100'); }
        if (Element.getAttribute('d') === 'M161.49 575.62h10.41v42.11h-10.41z') { addSvgElem(Index, Element, 'AKZ_45-100'); }
        if (Element.getAttribute('d') === 'M116.68 617.64h10.41v11.68h-10.41z') { addSvgElem(Index, Element, 'AKZ_45'); }
        if (Element.getAttribute('d') === 'M139.57 617.64h10.41v11.68h-10.41z') { addSvgElem(Index, Element, 'AKZ_45'); }
        if (Element.getAttribute('d') === 'M161.49 617.64h10.41v11.68h-10.41z') { addSvgElem(Index, Element, 'AKZ_45'); }
        if (Element.getAttribute('d') === 'M116.68 629.24h10.41v12.59h-10.41z') { addSvgElem(Index, Element, 'AKZ_30'); }
        if (Element.getAttribute('d') === 'M139.57 629.24h10.41v12.59h-10.41z') { addSvgElem(Index, Element, 'AKZ_30'); }
        if (Element.getAttribute('d') === 'M161.49 629.24h10.41v12.59h-10.41z') { addSvgElem(Index, Element, 'AKZ_30'); }
        if (Element.getAttribute('d') === 'M116.68 641.86h10.41v16h-10.41z') { addSvgElem(Index, Element, 'AKZ_17'); }
        if (Element.getAttribute('d') === 'M139.57 641.86h10.41v16h-10.41z') { addSvgElem(Index, Element, 'AKZ_17'); }
        if (Element.getAttribute('d') === 'M161.49 641.86h10.41v16h-10.41z') { addSvgElem(Index, Element, 'AKZ_17'); }
        // Sergey
        if (Element.getAttribute('d') === 'M1695.84 909.77h72.91v29.16h-72.91z') { addSvgElem(Index, Element, 'L2_elem'); }
        // Ilay
        if (Element.getAttribute('d') === 'm1512.14 554.97-5.12 1.96 12.51-22.86 10.1 22.86-4.55-3.22 7.96 25.58-5.24-5.37-7.7 16.8-8.59-16.74-5.75 3.35z') { addSvgElem(Index, Element, 'vnk2_fire'); }
        if (Element.getAttribute('d') === 'M1505.8 544.97V557l-22.15 28.77c-2.52 3.27-3.72 6.81-3.72 10.94v11.21h77.35v-12.74c0-4.66-1.43-8.66-4.38-12.26l-20.55-25.18v-12.46h2.35l-.29-.91v-22.21c0-8.54-6.96-12.27-15.5-12.27h-.4c-8.53 0-15.5 3.73-15.5 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_2'); }
        if (Element.getAttribute('d') === 'm1719.17 554.97-5.12 1.96 12.51-22.86 10.1 22.86-4.54-3.22 7.95 25.58-5.24-5.37-7.7 16.8-8.59-16.74-5.75 3.35z') { addSvgElem(Index, Element, 'vnk1_fire'); }
        if (Element.getAttribute('d') === 'M1489.26 610.01h2.63v155.55h-2.63z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1495.64 610.01h2.64v155.55h-2.64z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1502.92 610.01h1.82v155.55h-1.82z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1508.8 610.01h2.92v155.55h-2.92z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1515.97 610.01h2.74v155.55h-2.74z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1522 610.01h2.92v155.55H1522z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1529.64 610.01h1.82v155.55h-1.82z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1536.55 610.01h2.51v155.55h-2.51z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1542.72 610.01h2.64v155.55h-2.64z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1550.02 610.01h2.34v155.55h-2.34z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1651.04 470.18h62.5v33.34h-62.5z') { addSvgElem(Index, Element, 'P_vus_rect'); }
        if (Element.getAttribute('d') === 'M1651.04 516.02h62.5v33.33h-62.5z') { addSvgElem(Index, Element, 'dP_verh_rect'); }
        if (Element.getAttribute('d') === 'M1651.04 567.06h62.5v32.29h-62.5z') { addSvgElem(Index, Element, 'dP_obsh_trybarect'); }
        if (Element.getAttribute('d') === 'M1651.04 616.02h62.5v32.29h-62.5z') { addSvgElem(Index, Element, 'dP_nish_rect'); }
        if (Element.getAttribute('d') === 'M1695.84 939.97h72.91v29.17h-72.91z') { addSvgElem(Index, Element, 'L3_elem'); }
        if (Element.getAttribute('d') === 'M1632.29 693.1h72.92v25h-72.92z') { addSvgElem(Index, Element, 'zadanie_rect'); }

      })
      ObjectSvg.svg.querySelectorAll('circle').forEach((Element) => {
        if (Element.getAttribute('cy') === '214.97' && Element.getAttribute('cx') === '1584.9' && Element.getAttribute('r') === '4.17') { addSvgElem(Index, Element, 'circle_otk'); }
        if (Element.getAttribute('cy') === '226.95' && Element.getAttribute('cx') === '1584.9' && Element.getAttribute('r') === '5.21') { addSvgElem(Index, Element, 'circle_1_kl025'); }
        if (Element.getAttribute('cy') === '480.6' && Element.getAttribute('cx') === '1793.75' && Element.getAttribute('r') === '4.17') { addSvgElem(Index, Element, 'circle_1_kl025'); }

      })
    }
    else if (ObjectSvg.name === 'BVNK_VNK1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '92') { addSvgElem(Index, Element, '1TI_43'); }
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '1330' && TextIndex === 123) { addSvgElem(Index, Element, 'vybor_signala', 'start'); }
        if (Element.innerHTML === '345') { addSvgElem(Index, Element, 'dym_vybor_signala'); }
        if (Element.innerHTML === '9,00') { addSvgElem(Index, Element, '7PI_13'); }
        if (Element.innerHTML === '104971') { addSvgElem(Index, Element, '1FI_01', 'start'); }
        if (Element.innerHTML === '8,45') { addSvgElem(Index, Element, '1PI_02'); }
        if (Element.innerHTML === '1330' && TextIndex === 127) { addSvgElem(Index, Element, '1TI_02'); }
        if (Element.innerHTML === '1316') { addSvgElem(Index, Element, '1TI_03'); }
        if (Element.innerHTML === '-999') { addSvgElem(Index, Element, '1TI_04'); }
        if (Element.innerHTML === '1183') { addSvgElem(Index, Element, '1TI_05'); }
        if (Element.innerHTML === '0' && TextIndex === 141) { addSvgElem(Index, Element, '1FI_03'); }
        if (Element.innerHTML === '9,03') { addSvgElem(Index, Element, '1PI_04'); }
        if (Element.innerHTML === '124123') { addSvgElem(Index, Element, '1FI_02', 'start'); }
        if (Element.innerHTML === '2,79') { addSvgElem(Index, Element, '1QI_01'); }
        if (Element.innerHTML === '105054') { addSvgElem(Index, Element, '115_PV', 'start'); }
        if (Element.innerHTML === '103220') { addSvgElem(Index, Element, '115_SP', 'start'); }
        if (Element.innerHTML === '41,85') { addSvgElem(Index, Element, '115_KP_1', 'start'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 186) { addSvgElem(Index, Element, '115_SPW', 'start'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 187) { addSvgElem(Index, Element, '115_SPT', 'start'); }
        if (Element.innerHTML === '46,95' && TextIndex === 188) { addSvgElem(Index, Element, '115_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 189) { addSvgElem(Index, Element, '115_GAZ'); }
        if (Element.innerHTML === '1,183') { addSvgElem(Index, Element, '123_PV_1', 'start'); }
        if (Element.innerHTML === '1,300') { addSvgElem(Index, Element, '123_SP_1', 'start'); }
        if (Element.innerHTML === '46,49') { addSvgElem(Index, Element, '123_KP_1', 'start'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 179) { addSvgElem(Index, Element, '123_PV_2', 'start'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 180) { addSvgElem(Index, Element, '123_SP_2', 'start'); }
        if (Element.innerHTML === '46,95' && TextIndex === 181) { addSvgElem(Index, Element, '123_KP_2', 'start'); }
        if (Element.innerHTML === '0,00' && TextIndex === 182) { addSvgElem(Index, Element, '123_GAZ', 'start'); }
        if (Element.getAttribute('x') === '1305.59') { addSvgElem(Index, Element, '1PI_01'); }
        if (Element.getAttribute('x') === '903.36') { addSvgElem(Index, Element, '1TI_28_2'); }
        if (Element.getAttribute('x') === '776.96') { addSvgElem(Index, Element, '1TI_28_1'); }
        if (Element.getAttribute('x') === '872.16') { addSvgElem(Index, Element, '1TI_29'); }
        if (Element.innerHTML === '42') { addSvgElem(Index, Element, 'Kl115_proc'); }
        if (Element.innerHTML === '43') { addSvgElem(Index, Element, 'Kl123_proc'); }
        if (Element.innerHTML === '22') { addSvgElem(Index, Element, 'Vremya_nagreva'); }
        if (Element.innerHTML === '60') { addSvgElem(Index, Element, 'Vremya_dutya'); }
        if (Element.innerHTML === '0' && TextIndex === 153) { addSvgElem(Index, Element, 'Vremya_otdelen'); }
        if (Element.getAttribute('x') === '1017.42') { addSvgElem(Index, Element, 'VNK1_status_1', 'center'); }
        if (Element.getAttribute('x') === '1096.84') { addSvgElem(Index, Element, 'VNK1_status_2', 'center'); }
        if (Element.getAttribute('x') === '331.03') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '674.78') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '901.37') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '1265.74') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '1362.09') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '1445.16') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '1528.76') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '216.26') { Element.innerHTML = '1FI_03'; }
        if (Element.getAttribute('x') === '667.63') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '853.81') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '319.16') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '747.86') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '874.79') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '589.18') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '1286.57') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '666.82') { Element.innerHTML = '115'; }
        if (Element.getAttribute('x') === '671.1') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '735.69') { Element.innerHTML = '1'; }
        if (Element.getAttribute('x') === '1318.9') { Element.innerHTML = '119'; }
        // Ilay
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '409.68' && Element.getAttribute('y') === '374.11') { addSvgElem(Index, Element, 'V1_t1_5'); }
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '548.43' && Element.getAttribute('y') === '374.11') { addSvgElem(Index, Element, 'V1_t2_4'); }
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '339.14' && Element.getAttribute('y') === '514.49') { addSvgElem(Index, Element, 'V1_t3_4'); }
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '470.44' && Element.getAttribute('y') === '512.77') { addSvgElem(Index, Element, 'V1_t4_4'); }
        if (Element.innerHTML === '0' && Element.getAttribute('x') === '1486.31' && Element.getAttribute('y') === '735.25') { addSvgElem(Index, Element, 'kl_118a_proc'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.getAttribute('d') === 'M1004.17 466.75h277.11v45.68h-277.11z') { addSvgElem(Index, Element, 'VNK1_status_1_fon'); }
        if (Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') { addSvgElem(Index, Element, '313'); }
        if (Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.getAttribute('d') === 'M132.29 187.58h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_7PI_13'); }
        if (Element.getAttribute('d') === 'M297.92 186.54h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_1FI_01'); }
        if (Element.getAttribute('d') === 'M641.67 185.5h93.75v29.17h-93.75V185.5zm91.75 2h-89.75v25.17h89.75V187.5z') { addSvgElem(Index, Element, 'ramka_1PI_02'); }
        if (Element.getAttribute('d') === 'M866.67 212.58h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_1TI_43'); }
        if (Element.getAttribute('d') === 'M182.29 326.13h93.75v28.12h-93.75v-28.12zm91.75 1.99h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_1FI_03'); }
        if (Element.getAttribute('d') === 'M634.38 488.62h93.75v28.13h-93.75v-28.13zm91.75 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_1PI_04'); }
        if (Element.getAttribute('d') === 'M819.79 486.54h93.75v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17h89.75v-25.17z') { addSvgElem(Index, Element, 'ramka_1TI_29'); }
        if (Element.getAttribute('d') === 'M285.42 627.17h93.75v29.16h-93.75v-29.16zm91.75 2h-89.75v25.16h89.75v-25.16z') { addSvgElem(Index, Element, 'ramka_1FI_02'); }
        if (Element.getAttribute('d') === 'M557.29 819.88h93.75v29.16h-93.75v-29.16zm91.75 2h-89.75v25.16h89.75v-25.16z') { addSvgElem(Index, Element, 'ramka_1QI_01'); }
        if (Element.getAttribute('d') === 'M780.21 605.29h130.21v46.88H780.21v-46.88zm127.21 3H783.21v40.88h124.21v-40.88z') { addSvgElem(Index, Element, 'ramka_Dblm_Vblb_sig'); }
        if (Element.getAttribute('d') === 'M730.21 674.04h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_1TI_28_1'); }
        if (Element.getAttribute('d') === 'M857.29 671.96h93.75v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17h89.75v-25.17z') { addSvgElem(Index, Element, 'ramka_1TI_28_2'); }
        if (Element.getAttribute('d') === 'M1253.12 699.04h93.75v28.13h-93.75v-28.13zm91.76 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_1PI_01'); }
        if (Element.getAttribute('d') === 'M1465.5 306.46h124.21v-41.92H1465.5v41.92zm-3 3h130.21v-47.92H1462.5v47.92z') { addSvgElem(Index, Element, 'ramka_Vblb_sig'); }
        if (Element.getAttribute('d') === 'M1231.25 274.04H1325v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17H1323v-25.17z') { addSvgElem(Index, Element, 'ramka_1TI_02'); }
        if (Element.getAttribute('d') === 'M1328.12 305.29h93.75v28.13h-93.75v-28.13zm91.76 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_1TI_03'); }
        if (Element.getAttribute('d') === 'M1410.42 341.75h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_1TI_04'); }
        if (Element.getAttribute('d') === 'M1494.79 375.08h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_1TI_05'); }
        if (Element.getAttribute('d') === 'm409.22 288.26-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_132'); }
        if (Element.getAttribute('d') === 'm571.66 288.26-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_116'); }
        if (Element.getAttribute('d') === 'm478.18 181.26-19.69 32.87h19.69l-19.69-32.87z') { addSvgElem(Index, Element, 'kl_127'); }
        if (Element.getAttribute('d') === 'm816.21 181.26-19.69 32.87h19.69l-19.69-32.87z') { addSvgElem(Index, Element, 'kl_121'); }
        if (Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') { addSvgElem(Index, Element, 'kl_113'); }
        if (Element.getAttribute('d') === 'm303.24 402.37-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_124'); }
        if (Element.getAttribute('d') === 'm259.64 575.3-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_134'); }
        if (Element.getAttribute('d') === 'm791.47 434.02-19.69 32.88h19.69l-19.69-32.88z') { addSvgElem(Index, Element, 'kl_140'); }
        if (Element.getAttribute('d') === 'm914.9 575.3-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_117'); }
        if (Element.getAttribute('d') === 'm660.59 746.68-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_111'); }
        if (Element.getAttribute('d') === 'm660.59 793.56-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_112'); }
        if (Element.getAttribute('d') === 'm1345.43 454.61-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_119'); }
        if (Element.getAttribute('d') === 'm1491.07 649.03-32.87-19.7v19.7l32.87-19.7z') { addSvgElem(Index, Element, 'kl_136a'); }
        if (Element.getAttribute('d') === 'm1505.4 725.07-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_118a'); }
        if (Element.getAttribute('d') === 'm1507.22 788.11-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_118'); }
        if (Element.getAttribute('d') === 'M1482.15 833.43c-2.56-1.57-5.11-3.13-7.67-4.7v19.79l9.3-5.7 2.85-1.75 4-2.44c-1.94-1.19-3.87-2.38-5.81-3.56-.89-.55-1.78-1.1-2.67-1.64z') { addSvgElem(Index, Element, 'kl_110'); }
        if (Element.getAttribute('d') === 'm1506.77 828.73-10.18 6.24-2.85 1.75-3.11 1.91c.71.43 1.42.87 2.13 1.31.9.54 1.79 1.09 2.68 1.64 3.78 2.31 7.55 4.63 11.33 6.94v-19.79z') { addSvgElem(Index, Element, 'kl_110'); } //Nilay
        if (Element.getAttribute('d') === 'M120.83 359.46h16.67v17.71h-16.67z') { addSvgElem(Index, Element, 'PS_10'); }
        if (Element.getAttribute('d') === 'M754.17 233.42h16.67v16.67h-16.67z') { addSvgElem(Index, Element, '1PS_03'); }
        if (Element.getAttribute('d') === 'M689.58 539.67h15.63v15.63h-15.63z') { addSvgElem(Index, Element, '1PS_05'); }
        if (Element.getAttribute('d') === 'M362.5 255.29h9.38v8.33h-9.38z') { addSvgElem(Index, Element, 'rect_132_1'); }
        if (Element.getAttribute('d') === 'M525 254.25h9.37v8.33H525z') { addSvgElem(Index, Element, 'rect_116_1'); }
        if (Element.getAttribute('d') === 'M358.33 265.71h10.42v22.92h-10.42z') { addSvgElem(Index, Element, 'rect_132_2'); }
        if (Element.getAttribute('d') === 'M520.83 264.67h10.42v22.92h-10.42z') { addSvgElem(Index, Element, 'rect_116_2'); }
        if (Element.getAttribute('d') === 'M870.83 627.17h23.96v19.79h-23.96z') { addSvgElem(Index, Element, 'rect_Vblb_sig_1'); }
        if (Element.getAttribute('d') === 'M1553.12 284.46h23.96v19.79h-23.96z') { addSvgElem(Index, Element, 'rect_Vblb_sig_2'); }
        if (Element.getAttribute('d') === 'M1184.37 646.96h16.67v15.62h-16.67z') { addSvgElem(Index, Element, 'rect_R_VN-ATM'); }
        if (Element.getAttribute('d') === 'M1184.37 674.04h16.67v15.63h-16.67z') { addSvgElem(Index, Element, 'rect_R_VN-GD'); }
        if (Element.getAttribute('d') === 'M1402.6 490.71c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_dutyo'); }
        if (Element.getAttribute('d') === 'M1402.6 518.84c8.06 0 14.59 5.82 14.59 13.02 0 7.19-6.53 13.01-14.59 13.01-8.05 0-14.58-5.82-14.58-13.01 0-7.2 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_nagrev'); }
        if (Element.getAttribute('d') === 'M1402.6 548c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_otdeleniye_1'); }
        if (Element.getAttribute('d') === 'M1402.6 576.13c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_otdeleniye_2'); }
        // Sergey
        if (Element.getAttribute('d') === 'M679.12 263.96a2.99 2.99 0 0 1 4.2-.6c1.33.99 1.6 2.87.6 4.2l-4.8-3.6zM664 284.17l15.12-20.21 4.8 3.6-15.12 20.21-4.8-3.6zm4.8 3.6a2.99 2.99 0 0 1-4.2.6 2.99 2.99 0 0 1-.6-4.2l4.8 3.6z') { addSvgElem(Index, Element, '115_stripe'); }
        if (Element.getAttribute('d') === 'M564.54 549.37a3.008 3.008 0 0 1 4.2-.6c1.32.99 1.59 2.87.6 4.2l-4.8-3.6zm-15.13 20.22 15.13-20.22 4.8 3.6-15.12 20.21-4.81-3.59zm4.81 3.59a3.002 3.002 0 0 1-4.81-3.59l4.81 3.59z') { addSvgElem(Index, Element, '123_stripe'); }
        if (Element.getAttribute('d') === 'M1077.08 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1090.62 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1106.25 451.13h3.13v120.83h-3.13z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1119.79 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1134.37 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1146.87 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1162.5 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1178.12 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1190.62 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1206.25 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        // Ilay
        if (Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') { addSvgElem(Index, Element, 'vnk1_fire'); }
        if (Element.getAttribute('d') === 'm1118.01 355.49-9.92 32.3 11.81-4.38c.44-.16.92 0 1.17.38l25.18 37.43 22.86-37.2c.29-.47.9-.61 1.37-.33.07.05.14.1.19.16l8.76 7.67-17.95-55.7a.999.999 0 0 1 1.38-1.21l7.03 3.34-25.32-49.07-31.65 49.14 9.46-3.12c.52-.17 1.09.12 1.26.64.07.22.06.45-.01.66l-5.61 19.26c-.01.01-.01.02-.01.03zm-.95-.31-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4-5.63 19.33z') { addSvgElem(Index, Element, 'vnk1_fire_border'); }
      })
    }
    else if (ObjectSvg.name === 'BVNK_VNK2') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '9,00') { addSvgElem(Index, Element, '7PI_13'); }
        if (Element.innerHTML === '104971') { addSvgElem(Index, Element, '2FI_01', 'start'); }
        if (Element.innerHTML === '8,45') { addSvgElem(Index, Element, '2PI_02'); }
        if (Element.innerHTML === '92') { addSvgElem(Index, Element, '2TI_43'); }
        if (Element.innerHTML === '0' && TextIndex === 126) { addSvgElem(Index, Element, '2FI_03'); }
        if (Element.innerHTML === '9,03') { addSvgElem(Index, Element, '2PI_04'); }
        if (Element.innerHTML === '124123') { addSvgElem(Index, Element, '2FI_02', 'start'); }
        if (Element.innerHTML === '2,79') { addSvgElem(Index, Element, '2QI_01'); }
        if (Element.innerHTML === '345') { addSvgElem(Index, Element, 'dym_vybor_signala_2'); } // Sergey
        if (Element.innerHTML === '1330' && TextIndex === 108) { addSvgElem(Index, Element, 'vybor_signala'); }
        if (Element.innerHTML === '1330' && TextIndex === 112) { addSvgElem(Index, Element, '2TI_02'); }
        if (Element.innerHTML === '1316') { addSvgElem(Index, Element, '2TI_03'); }
        if (Element.innerHTML === '1190') { addSvgElem(Index, Element, '2TI_04'); }
        if (Element.innerHTML === '-999') { addSvgElem(Index, Element, '2TI_05'); }
        if (Element.innerHTML === '105054') { addSvgElem(Index, Element, '215_PV', 'start'); }
        if (Element.innerHTML === '103220') { addSvgElem(Index, Element, '215_SP', 'start'); }
        if (Element.innerHTML === '41,85') { addSvgElem(Index, Element, '215_KP_1', 'start'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 171) { addSvgElem(Index, Element, '215_SPW', 'start'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 172) { addSvgElem(Index, Element, '215_SPT', 'start'); }
        if (Element.innerHTML === '46,95' && TextIndex === 173) { addSvgElem(Index, Element, '215_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 174) { addSvgElem(Index, Element, '215_GAZ'); }
        if (Element.innerHTML === '1,183') { addSvgElem(Index, Element, '223_PV_1', 'start'); }
        if (Element.innerHTML === '1,300') { addSvgElem(Index, Element, '223_SP_1', 'start'); }
        if (Element.innerHTML === '46,49') { addSvgElem(Index, Element, '223_KP_1', 'start'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 164) { addSvgElem(Index, Element, '223_PV_2', 'start'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 165) { addSvgElem(Index, Element, '223_SP_2', 'start'); }
        if (Element.innerHTML === '46,95' && TextIndex === 166) { addSvgElem(Index, Element, '223_KP_2', 'start'); }
        if (Element.innerHTML === '0,00' && TextIndex === 167) { addSvgElem(Index, Element, '223_GAZ', 'start'); }
        if (Element.getAttribute('x') === '1305.59') { addSvgElem(Index, Element, '2PI_01'); }
        if (Element.getAttribute('x') === '903.36') { addSvgElem(Index, Element, '2TI_28_2'); }
        if (Element.getAttribute('x') === '776.96') { addSvgElem(Index, Element, '2TI_28_1'); }
        if (Element.getAttribute('x') === '872.16') { addSvgElem(Index, Element, '2TI_29'); }
        if (Element.innerHTML === '42') { addSvgElem(Index, Element, 'kl215_proc'); }
        if (Element.innerHTML === '43') { addSvgElem(Index, Element, 'kl223_proc'); }
        if (Element.innerHTML === '107') { addSvgElem(Index, Element, 'Vremya_nagreva'); }
        if (Element.innerHTML === '27') { addSvgElem(Index, Element, 'Vremya_dutya'); }
        if (Element.innerHTML === '0' && TextIndex === 138) { addSvgElem(Index, Element, 'Vremya_otdelen'); }
        if (Element.getAttribute('x') === '1017.42') { addSvgElem(Index, Element, 'VNK2_status_1', 'center'); }
        if (Element.getAttribute('x') === '1096.84') { addSvgElem(Index, Element, 'VNK2_status_2', 'center'); }
        // Ilay
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '409.68' && Element.getAttribute('y') === '374.11') { addSvgElem(Index, Element, 'V2_t1_5'); }
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '339.14' && Element.getAttribute('y') === '514.49') { addSvgElem(Index, Element, 'V2_t2_4'); }
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '548.43' && Element.getAttribute('y') === '374.11') { addSvgElem(Index, Element, 'V2_t3_4'); }
        if (Element.innerHTML === 'Соглас' && Element.getAttribute('x') === '470.44' && Element.getAttribute('y') === '512.77') { addSvgElem(Index, Element, 'V2_t4_4'); }
      });
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, TextIndex) => {
        if (Element.getAttribute('d') === 'M1004.17 466.75h277.11v45.68h-277.11z') { addSvgElem(Index, Element, 'VNK2_status_1_fon'); }
        if (Element.getAttribute('d') === 'M132.29 187.58h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_7PI_13'); }
        if (Element.getAttribute('d') === 'M297.92 186.54h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_2FI_01'); }
        if (Element.getAttribute('d') === 'M641.67 185.5h93.75v29.17h-93.75V185.5zm91.75 2h-89.75v25.17h89.75V187.5z') { addSvgElem(Index, Element, 'ramka_2PI_02'); }
        if (Element.getAttribute('d') === 'M866.67 212.58h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_2TI_43'); }
        if (Element.getAttribute('d') === 'M182.29 326.13h93.75v28.12h-93.75v-28.12zm91.75 1.99h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_2FI_03'); }
        if (Element.getAttribute('d') === 'M634.38 488.62h93.75v28.13h-93.75v-28.13zm91.75 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_2PI_04'); }
        if (Element.getAttribute('d') === 'M819.79 486.54h93.75v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17h89.75v-25.17z') { addSvgElem(Index, Element, 'ramka_2TI_29'); }
        if (Element.getAttribute('d') === 'M285.42 627.17h93.75v29.16h-93.75v-29.16zm91.75 2h-89.75v25.16h89.75v-25.16z') { addSvgElem(Index, Element, 'ramka_2FI_02'); }
        if (Element.getAttribute('d') === 'M557.29 819.88h93.75v29.16h-93.75v-29.16zm91.75 2h-89.75v25.16h89.75v-25.16z') { addSvgElem(Index, Element, 'ramka_2QI_01'); }
        if (Element.getAttribute('d') === 'M780.21 605.29h130.21v46.88H780.21v-46.88zm127.21 3H783.21v40.88h124.21v-40.88z') { addSvgElem(Index, Element, 'ramka_Dblm_Vblb_sig'); }
        if (Element.getAttribute('d') === 'M730.21 674.04h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_2TI_28_1'); }
        if (Element.getAttribute('d') === 'M857.29 671.96h93.75v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17h89.75v-25.17z') { addSvgElem(Index, Element, 'ramka_2TI_28_2'); }
        if (Element.getAttribute('d') === 'M1253.12 699.04h93.75v28.13h-93.75v-28.13zm91.76 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_2PI_01'); }
        if (Element.getAttribute('d') === 'M1465.5 306.46h124.21v-41.92H1465.5v41.92zm-3 3h130.21v-47.92H1462.5v47.92z') { addSvgElem(Index, Element, 'ramka_Vblb_sig'); }
        if (Element.getAttribute('d') === 'M1231.25 274.04H1325v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17H1323v-25.17z') { addSvgElem(Index, Element, 'ramka_2TI_02'); }
        if (Element.getAttribute('d') === 'M1328.12 305.29h93.75v28.13h-93.75v-28.13zm91.76 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_2TI_03'); }
        if (Element.getAttribute('d') === 'M1410.42 341.75h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_2TI_04'); }
        if (Element.getAttribute('d') === 'M1494.79 375.08h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_2TI_05'); }
        if (Element.getAttribute('d') === 'm409.22 288.26-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_232'); }
        if (Element.getAttribute('d') === 'm571.66 288.26-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_216'); }
        if (Element.getAttribute('d') === 'm478.18 181.26-19.69 32.87h19.69l-19.69-32.87z') { addSvgElem(Index, Element, 'kl_227'); }
        if (Element.getAttribute('d') === 'm816.21 181.26-19.69 32.87h19.69l-19.69-32.87z') { addSvgElem(Index, Element, 'kl_221'); }
        if (Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') { addSvgElem(Index, Element, 'kl_213'); }
        if (Element.getAttribute('d') === 'm303.24 402.37-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_224'); }
        if (Element.getAttribute('d') === 'm259.64 575.3-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_234'); }
        if (Element.getAttribute('d') === 'm791.47 434.02-19.69 32.88h19.69l-19.69-32.88z') { addSvgElem(Index, Element, 'kl_240'); }
        if (Element.getAttribute('d') === 'm914.9 575.3-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_217'); }
        if (Element.getAttribute('d') === 'm660.59 746.68-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_211'); }
        if (Element.getAttribute('d') === 'm660.59 793.56-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_212'); }
        if (Element.getAttribute('d') === 'm1345.43 454.61-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_219'); }
        if (Element.getAttribute('d') === 'm1491.07 649.03-32.87-19.7v19.7l32.87-19.7z') { addSvgElem(Index, Element, 'kl_236a'); }
        if (Element.getAttribute('d') === 'm1505.4 725.07-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_218a'); }
        if (Element.getAttribute('d') === 'm1507.22 788.11-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_218'); }
        if (Element.getAttribute('d') === 'M1482.15 833.43c-2.56-1.57-5.11-3.13-7.67-4.7v19.79l9.3-5.7 2.85-1.75 4-2.44c-1.94-1.19-3.87-2.38-5.81-3.56-.89-.55-1.78-1.1-2.67-1.64z') { addSvgElem(Index, Element, 'kl_210'); }
        if (Element.getAttribute('d') === 'M120.83 359.46h16.67v17.71h-16.67z') { addSvgElem(Index, Element, 'PS_10'); }
        if (Element.getAttribute('d') === 'M754.17 233.42h16.67v16.67h-16.67z') { addSvgElem(Index, Element, '2PS_03'); }
        if (Element.getAttribute('d') === 'M689.58 539.67h15.63v15.63h-15.63z') { addSvgElem(Index, Element, '2PS_05'); }
        if (Element.getAttribute('d') === 'M362.5 255.29h9.38v8.33h-9.38z') { addSvgElem(Index, Element, 'rect_232_1'); }
        if (Element.getAttribute('d') === 'M525 254.25h9.37v8.33H525z') { addSvgElem(Index, Element, 'rect_216_1'); }
        if (Element.getAttribute('d') === 'M365.62 265.71h10.42v22.92h-10.42z') { addSvgElem(Index, Element, 'rect_232_2'); }
        if (Element.getAttribute('d') === 'M528.12 264.67h10.42v22.91h-10.42z') { addSvgElem(Index, Element, 'rect_216_2'); }
        if (Element.getAttribute('d') === 'M870.83 627.17h23.96v19.79h-23.96z') { addSvgElem(Index, Element, 'rect_Vblb_sig_1'); }
        if (Element.getAttribute('d') === 'M1553.12 284.46h23.96v19.79h-23.96z') { addSvgElem(Index, Element, 'rect_Vblb_sig_2'); }
        if (Element.getAttribute('d') === 'M1184.37 646.96h16.67v15.62h-16.67z') { addSvgElem(Index, Element, 'rect_R_VN-ATM'); }
        if (Element.getAttribute('d') === 'M1184.37 674.04h16.67v15.63h-16.67z') { addSvgElem(Index, Element, 'rect_R_VN-GD'); }
        if (Element.getAttribute('d') === 'M1402.6 490.71c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_dutyo'); }
        if (Element.getAttribute('d') === 'M1402.6 518.84c8.06 0 14.59 5.82 14.59 13.02 0 7.19-6.53 13.01-14.59 13.01-8.05 0-14.58-5.82-14.58-13.01 0-7.2 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_nagrev'); }
        if (Element.getAttribute('d') === 'M1402.6 548c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_otdeleniye_1'); }
        if (Element.getAttribute('d') === 'M1402.6 576.13c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_otdeleniye_2'); }
        // Ilay
        if (Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') { addSvgElem(Index, Element, 'vnk2_fire'); }
        if (Element.getAttribute('d') === 'm1118.01 355.49-9.92 32.3 11.81-4.38c.44-.16.92 0 1.17.38l25.18 37.43 22.86-37.2c.29-.47.9-.61 1.37-.33.07.05.14.1.19.16l8.76 7.67-17.95-55.7a.999.999 0 0 1 1.38-1.21l7.03 3.34-25.32-49.07-31.65 49.14 9.46-3.12c.52-.17 1.09.12 1.26.64.07.22.06.45-.01.66l-5.61 19.26c-.01.01-.01.02-.01.03zm-.95-.31-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4-5.63 19.33z') { addSvgElem(Index, Element, 'vnk2_fire_border'); }
        if (Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_2'); }
        // Sergey
        if (Element.getAttribute('d') === 'M1077.08 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1090.62 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1106.25 451.13h3.13v120.83h-3.13z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1119.79 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1134.37 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1146.87 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1162.5 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1178.12 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1190.62 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1206.25 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
      })
    }
    else if (ObjectSvg.name === 'BVNK_VNK3') {
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.getAttribute('d') === 'M1004.17 466.75h277.11v45.68h-277.11z') { addSvgElem(Index, Element, 'VNK3_status_1_fon'); }
        if (Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') { addSvgElem(Index, Element, 'fire_vnk_3'); }
        if (Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_3'); }
        if (Element.getAttribute('d') === 'M132.29 187.58h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_7PI_13'); }
        if (Element.getAttribute('d') === 'M297.92 186.54h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_3FI_01'); }
        if (Element.getAttribute('d') === 'M641.67 185.5h93.75v29.17h-93.75V185.5zm91.75 2h-89.75v25.17h89.75V187.5z') { addSvgElem(Index, Element, 'ramka_3PI_02'); }
        if (Element.getAttribute('d') === 'M866.67 212.58h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_3TI_43'); }
        if (Element.getAttribute('d') === 'M182.29 326.13h93.75v28.12h-93.75v-28.12zm91.75 1.99h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_3FI_03'); }
        if (Element.getAttribute('d') === 'M634.38 488.62h93.75v28.13h-93.75v-28.13zm91.75 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_3PI_04'); }
        if (Element.getAttribute('d') === 'M819.79 486.54h93.75v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17h89.75v-25.17z') { addSvgElem(Index, Element, 'ramka_3TI_29'); }
        if (Element.getAttribute('d') === 'M285.42 627.17h93.75v29.16h-93.75v-29.16zm91.75 2h-89.75v25.16h89.75v-25.16z') { addSvgElem(Index, Element, 'ramka_3FI_02'); }
        if (Element.getAttribute('d') === 'M557.29 819.88h93.75v29.16h-93.75v-29.16zm91.75 2h-89.75v25.16h89.75v-25.16z') { addSvgElem(Index, Element, 'ramka_3QI_01'); }
        if (Element.getAttribute('d') === 'M780.21 605.29h130.21v46.88H780.21v-46.88zm127.21 3H783.21v40.88h124.21v-40.88z') { addSvgElem(Index, Element, 'ramka_Dblm_Vblb_sig'); }
        if (Element.getAttribute('d') === 'M730.21 674.04h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_3TI_28_1'); }
        if (Element.getAttribute('d') === 'M857.29 671.96h93.75v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17h89.75v-25.17z') { addSvgElem(Index, Element, 'ramka_3TI_28_2'); }
        if (Element.getAttribute('d') === 'M1253.12 699.04h93.75v28.13h-93.75v-28.13zm91.76 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_3PI_01'); }
        if (Element.getAttribute('d') === 'M1465.5 306.46h124.21v-41.92H1465.5v41.92zm-3 3h130.21v-47.92H1462.5v47.92z') { addSvgElem(Index, Element, 'ramka_Vblb_sig'); }
        if (Element.getAttribute('d') === 'M1231.25 274.04H1325v29.17h-93.75v-29.17zm91.75 2h-89.75v25.17H1323v-25.17z') { addSvgElem(Index, Element, 'ramka_3TI_02'); }
        if (Element.getAttribute('d') === 'M1328.12 305.29h93.75v28.13h-93.75v-28.13zm91.76 2h-89.76v24.13h89.76v-24.13z') { addSvgElem(Index, Element, 'ramka_3TI_03'); }
        if (Element.getAttribute('d') === 'M1410.42 341.75h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_3TI_04'); }
        if (Element.getAttribute('d') === 'M1494.79 375.08h93.75v28.13h-93.75v-28.13zm91.75 2h-89.75v24.13h89.75v-24.13z') { addSvgElem(Index, Element, 'ramka_3TI_05'); }
        if (Element.getAttribute('d') === 'm409.22 288.26-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_332'); }
        if (Element.getAttribute('d') === 'm571.66 288.26-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_316'); }
        if (Element.getAttribute('d') === 'm478.18 181.26-19.69 32.87h19.69l-19.69-32.87z') { addSvgElem(Index, Element, 'kl_327'); }
        if (Element.getAttribute('d') === 'm816.21 181.26-19.69 32.87h19.69l-19.69-32.87z') { addSvgElem(Index, Element, 'kl_321'); }
        if (Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') { addSvgElem(Index, Element, 'kl_313'); }
        if (Element.getAttribute('d') === 'm303.24 402.37-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_324'); }
        if (Element.getAttribute('d') === 'm259.64 575.3-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_334'); }
        if (Element.getAttribute('d') === 'm791.47 434.02-19.69 32.88h19.69l-19.69-32.88z') { addSvgElem(Index, Element, 'kl_340'); }
        if (Element.getAttribute('d') === 'm914.9 575.3-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_317'); }
        if (Element.getAttribute('d') === 'm660.59 746.68-32.88-19.69v19.69l32.88-19.69z') { addSvgElem(Index, Element, 'kl_311'); }
        if (Element.getAttribute('d') === 'm660.59 793.56-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_312'); }
        if (Element.getAttribute('d') === 'm1345.43 454.61-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_319'); }
        if (Element.getAttribute('d') === 'm1491.07 649.03-32.87-19.7v19.7l32.87-19.7z') { addSvgElem(Index, Element, 'kl_336a'); }
        if (Element.getAttribute('d') === 'm1505.4 725.07-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_318a'); }
        if (Element.getAttribute('d') === 'm1507.22 788.11-32.88-19.7v19.7l32.88-19.7z') { addSvgElem(Index, Element, 'kl_318'); }
        if (Element.getAttribute('d') === 'M1482.15 833.43c-2.56-1.57-5.11-3.13-7.67-4.7v19.79l9.3-5.7 2.85-1.75 4-2.44c-1.94-1.19-3.87-2.38-5.81-3.56-.89-.55-1.78-1.1-2.67-1.64z') { addSvgElem(Index, Element, 'kl_310_1'); }
        if (Element.getAttribute('d') === 'm1506.77 828.73-10.18 6.24-2.85 1.75-3.11 1.91c.71.43 1.42.87 2.13 1.31.9.54 1.79 1.09 2.68 1.64 3.78 2.31 7.55 4.63 11.33 6.94v-19.79z') { addSvgElem(Index, Element, 'kl_310_2'); }
        if (Element.getAttribute('d') === 'M120.83 359.46h16.67v17.71h-16.67z') { addSvgElem(Index, Element, 'PS_10'); }
        if (Element.getAttribute('d') === 'M754.17 233.42h16.67v16.67h-16.67z') { addSvgElem(Index, Element, '3PS_03'); }
        if (Element.getAttribute('d') === 'M689.58 539.67h15.63v15.63h-15.63z') { addSvgElem(Index, Element, '3PS_05'); }
        if (Element.getAttribute('d') === 'M362.5 255.29h9.38v8.33h-9.38z') { addSvgElem(Index, Element, 'rect_332_1'); }
        if (Element.getAttribute('d') === 'M525 254.25h9.37v8.33H525z') { addSvgElem(Index, Element, 'rect_316_1'); }
        if (Element.getAttribute('d') === 'M365.62 265.71h10.42v22.92h-10.42z') { addSvgElem(Index, Element, 'rect_332_2'); }
        if (Element.getAttribute('d') === 'M528.12 264.67h10.42v22.91h-10.42z') { addSvgElem(Index, Element, 'rect_316_2'); }
        if (Element.getAttribute('d') === 'M870.83 627.17h23.96v19.79h-23.96z') { addSvgElem(Index, Element, 'rect_Vblb_sig_1'); }
        if (Element.getAttribute('d') === 'M1553.12 284.46h23.96v19.79h-23.96z') { addSvgElem(Index, Element, 'rect_Vblb_sig_2'); }
        if (Element.getAttribute('d') === 'M1184.37 646.96h16.67v15.62h-16.67z') { addSvgElem(Index, Element, 'rect_R_VN-ATM'); }
        if (Element.getAttribute('d') === 'M1184.37 674.04h16.67v15.63h-16.67z') { addSvgElem(Index, Element, 'rect_R_VN-GD'); }
        if (Element.getAttribute('d') === 'M1402.6 490.71c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_dutyo'); }
        if (Element.getAttribute('d') === 'M1402.6 518.84c8.06 0 14.59 5.82 14.59 13.02 0 7.19-6.53 13.01-14.59 13.01-8.05 0-14.58-5.82-14.58-13.01 0-7.2 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_nagrev'); }
        if (Element.getAttribute('d') === 'M1402.6 548c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_otdeleniye_1'); }
        if (Element.getAttribute('d') === 'M1402.6 576.13c8.06 0 14.59 5.83 14.59 13.02 0 7.19-6.53 13.02-14.59 13.02-8.05 0-14.58-5.83-14.58-13.02 0-7.19 6.53-13.02 14.58-13.02z') { addSvgElem(Index, Element, 'circle_otdeleniye_2'); }
        // Sergey 
        if (Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') { addSvgElem(Index, Element, 'vnk3_fire'); }
        if (Element.getAttribute('d') === 'm1118.01 355.49-9.92 32.3 11.81-4.38c.44-.16.92 0 1.17.38l25.18 37.43 22.86-37.2c.29-.47.9-.61 1.37-.33.07.05.14.1.19.16l8.76 7.67-17.95-55.7a.999.999 0 0 1 1.38-1.21l7.03 3.34-25.32-49.07-31.65 49.14 9.46-3.12c.52-.17 1.09.12 1.26.64.07.22.06.45-.01.66l-5.61 19.26c-.01.01-.01.02-.01.03zm-.95-.31-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4-5.63 19.33z') { addSvgElem(Index, Element, 'vnk3_fire'); }
        if (Element.getAttribute('d') === 'M1077.08 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1090.62 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1106.25 451.13h3.13v120.83h-3.13z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1119.79 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1134.37 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1146.87 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1162.5 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1178.12 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1190.62 451.13h5.21v120.83h-5.21z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1206.25 451.13h4.17v120.83h-4.17z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
      })
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '9,00') { addSvgElem(Index, Element, '7PI_13'); }
        if (Element.innerHTML === '104971') { addSvgElem(Index, Element, '3FI_01', 'start'); }
        if (Element.innerHTML === '8,45') { addSvgElem(Index, Element, '3PI_02'); }
        if (Element.innerHTML === '92') { addSvgElem(Index, Element, '3TI_43'); }
        if (Element.innerHTML === '0' && TextIndex === 142) { addSvgElem(Index, Element, '3FI_03'); }
        if (Element.innerHTML === '9,03') { addSvgElem(Index, Element, '3PI_04'); }
        if (Element.innerHTML === '124123') { addSvgElem(Index, Element, '3FI_02', 'start'); }
        if (Element.innerHTML === '2,79') { addSvgElem(Index, Element, '3QI_01'); }
        if (Element.innerHTML === '345') { addSvgElem(Index, Element, 'dym_vybor_signala'); }
        if (Element.innerHTML === '1330' && TextIndex === 124) { addSvgElem(Index, Element, 'vybor_signala'); }
        if (Element.innerHTML === '1330' && TextIndex === 128) { addSvgElem(Index, Element, '3TI_02'); }
        if (Element.innerHTML === '1316') { addSvgElem(Index, Element, '3TI_03'); }
        if (Element.innerHTML === '-999') { addSvgElem(Index, Element, '3TI_04'); }
        if (Element.innerHTML === '1183') { addSvgElem(Index, Element, '3TI_05'); }
        if (Element.innerHTML === '105054') { addSvgElem(Index, Element, '315_PV', 'start'); }
        if (Element.innerHTML === '103220') { addSvgElem(Index, Element, '315_SP', 'start'); }
        if (Element.innerHTML === '41,85') { addSvgElem(Index, Element, '315_KP_1', 'start'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 187) { addSvgElem(Index, Element, '315_SPW', 'start'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 188) { addSvgElem(Index, Element, '315_SPT', 'start'); }
        if (Element.innerHTML === '46,95' && TextIndex === 189) { addSvgElem(Index, Element, '315_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 190) { addSvgElem(Index, Element, '315_GAZ'); }
        if (Element.innerHTML === '1,183') { addSvgElem(Index, Element, '323_PV_1', 'start'); }
        if (Element.innerHTML === '1,300') { addSvgElem(Index, Element, '323_SP_1', 'start'); }
        if (Element.innerHTML === '46,49') { addSvgElem(Index, Element, '323_KP_1', 'start'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 180) { addSvgElem(Index, Element, '323_PV_2', 'start'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 181) { addSvgElem(Index, Element, '323_SP_2', 'start'); }
        if (Element.innerHTML === '46,95' && TextIndex === 182) { addSvgElem(Index, Element, '323_KP_2', 'start'); }
        if (Element.innerHTML === '0,00' && TextIndex === 183) { addSvgElem(Index, Element, '323_GAZ', 'start'); }
        if (Element.getAttribute('x') === '1305.59') { addSvgElem(Index, Element, '3PI_01'); }
        if (Element.getAttribute('x') === '903.36') { addSvgElem(Index, Element, '3TI_28_2'); }
        if (Element.getAttribute('x') === '776.96') { addSvgElem(Index, Element, '3TI_28_1'); }
        if (Element.getAttribute('x') === '872.16') { addSvgElem(Index, Element, '3TI_29'); }
        if (Element.innerHTML === '42') { addSvgElem(Index, Element, 'kl315_proc'); }
        if (Element.innerHTML === '43') { addSvgElem(Index, Element, 'kl323_proc'); }
        if (Element.innerHTML === '22') { addSvgElem(Index, Element, 'Vremya_nagreva'); }
        if (Element.innerHTML === '60') { addSvgElem(Index, Element, 'Vremya_dutya'); }
        if (Element.innerHTML === '0' && TextIndex === 154) { addSvgElem(Index, Element, 'Vremya_otdelen'); }
        if (Element.getAttribute('x') === '1017.42') { addSvgElem(Index, Element, 'VNK3_status_1', 'center'); }
        if (Element.getAttribute('x') === '1096.84') { addSvgElem(Index, Element, 'VNK3_status_2', 'center'); }
      });
    }
    else if (ObjectSvg.name === 'vnk_main') {
      ObjectSvg.svg.querySelectorAll('circle').forEach((Element) => {
        // if (Element.getAttribute('cx') === '858.16' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_win1'); }
        // if (Element.getAttribute('cx') === '858.16' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_2_win1'); }
        // if (Element.getAttribute('cy') === '568.43' && Element.getAttribute('cx') === '750.32' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_kl028'); }
        // if (Element.getAttribute('cy') === '568.43' && Element.getAttribute('cx') === '750.32' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_2_kl028'); }
        // if (Element.getAttribute('cy') === '568.43' && Element.getAttribute('cx') === '1001.82' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_kl007'); }
        // if (Element.getAttribute('cy') === '568.43' && Element.getAttribute('cx') === '1001.82' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_2_kl007'); }
        // if (Element.getAttribute('cy') === '629.53' && Element.getAttribute('cx') === '1000.92' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_kl025'); }
        // if (Element.getAttribute('cy') === '224.95' && Element.getAttribute('cx') === '1754.85' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_1_kl022'); }
        // if (Element.getAttribute('cy') === '224.95' && Element.getAttribute('cx') === '1754.85' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_2_kl022'); }
        // if (Element.getAttribute('cy') === '260.06' && Element.getAttribute('cx') === '1550.69' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_1_kl002'); }
        // if (Element.getAttribute('cy') === '260.06' && Element.getAttribute('cx') === '1550.69' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_2_kl002'); }
        if (Element.getAttribute('cx') === '858.16' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_kl029'); }
        if (Element.getAttribute('cx') === '858.16' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_kl029'); }
        if (Element.getAttribute('cy') === '568.43' && Element.getAttribute('cx') === '750.32' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_kl028'); }
        if (Element.getAttribute('cy') === '568.43' && Element.getAttribute('cx') === '750.32' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_kl028'); }
        if (Element.getAttribute('cy') === '568.43' && Element.getAttribute('cx') === '1001.82' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_kl007'); }
        if (Element.getAttribute('cy') === '568.43' && Element.getAttribute('cx') === '1001.82' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_kl007'); }
        if (Element.getAttribute('cy') === '629.53' && Element.getAttribute('cx') === '1000.92' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_kl025'); }
        if (Element.getAttribute('cy') === '224.95' && Element.getAttribute('cx') === '1754.85' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_kl022'); }
        if (Element.getAttribute('cy') === '224.95' && Element.getAttribute('cx') === '1754.85' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_kl022'); }
        if (Element.getAttribute('cy') === '260.06' && Element.getAttribute('cx') === '1550.69' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_kl002'); }
        if (Element.getAttribute('cy') === '260.06' && Element.getAttribute('cx') === '1550.69' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_kl002'); }
        if (Element.getAttribute('cy') === '452.81' && Element.getAttribute('cx') === '743.93' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_kl038'); }
        if (Element.getAttribute('cy') === '452.81' && Element.getAttribute('cx') === '743.93' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_kl038'); }
        if (Element.getAttribute('cy') === '452.21' && Element.getAttribute('cx') === '1003.04' && Element.getAttribute('r') === '5.61') { addSvgElem(Index, Element, 'circle_kl037'); }
        if (Element.getAttribute('cy') === '452.21' && Element.getAttribute('cx') === '1003.04' && Element.getAttribute('r') === '9.18') { addSvgElem(Index, Element, 'circle_kl037'); }
        // Sergey
        if (Element.getAttribute('cx') === '589.47' && Element.getAttribute('cy') === '641') { addSvgElem(Index, Element, 'circle_kl0331'); }
        if (Element.getAttribute('cx') === '467.87' && Element.getAttribute('cy') === '639.14') { addSvgElem(Index, Element, 'circle_kl0332'); }
        if (Element.getAttribute('cx') === '342.61' && Element.getAttribute('cy') === '641') { addSvgElem(Index, Element, 'circle_kl0333'); }
        if (Element.getAttribute('cx') === '297.8' && Element.getAttribute('cy') === '757.44') { addSvgElem(Index, Element, 'circle_0F3'); }
        if (Element.getAttribute('cx') === '423.12' && Element.getAttribute('cy') === '754.44') { addSvgElem(Index, Element, 'circle_0F2'); }
        if (Element.getAttribute('cx') === '541.19' && Element.getAttribute('cy') === '754.44') { addSvgElem(Index, Element, 'circle_0F1'); }
        if (Element.getAttribute('cx') === '1427.41' && Element.getAttribute('cy') === '300.17') { addSvgElem(Index, Element, 'circle_001a'); }
        if (Element.getAttribute('cx') === '398.19' && Element.getAttribute('cy') === '389.87') { addSvgElem(Index, Element, 'circle_053'); }
        if (Element.getAttribute('cx') === '238.59' && Element.getAttribute('cy') === '606.51') { addSvgElem(Index, Element, 'circle_035'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.getAttribute('d') === 'M1712.25 544.97V557l-22.15 28.77c-2.52 3.27-3.73 6.81-3.73 10.94v11.21H1763.72v-12.74c0-4.66-1.42-8.66-4.37-12.26l-20.56-25.18v-12.46h2.36l-.29-.91v-22.21c0-8.54-6.96-12.27-15.5-12.27h-.4c-8.54 0-15.5 3.73-15.5 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.getAttribute('d') === 'M1301.37 544.97V557l-22.15 28.77c-2.52 3.27-3.72 6.81-3.72 10.94v11.21h77.35v-12.74c0-4.66-1.43-8.66-4.37-12.26l-20.56-25.18v-12.46h2.35l-.28-.91v-22.21c0-8.54-6.97-12.27-15.51-12.27h-.39c-8.54 0-15.51 3.73-15.51 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_3'); }
        if (Element.getAttribute('d') === 'M841.6 529.43v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl029'); }
        if (Element.getAttribute('d') === 'M733.76 579.16V557.7l33.12 21.46V557.7z') { addSvgElem(Index, Element, 'kl028'); }
        if (Element.getAttribute('d') === 'M985.26 579.16V557.7l33.12 21.46V557.7z') { addSvgElem(Index, Element, 'kl007'); }
        if (Element.getAttribute('d') === 'M37.34 327.68h90.93v26.67H37.34z') { addSvgElem(Index, Element, 'ramka_7TI_41'); }
        if (Element.getAttribute('d') === 'M37.34 375.06h90.93v26.67H37.34z') { addSvgElem(Index, Element, 'ramka_7PI_12'); }
        if (Element.getAttribute('d') === 'M37.34 420.71h90.93v26.67H37.34z') { addSvgElem(Index, Element, 'ramka_7FI_05'); }
        if (Element.getAttribute('d') === 'M40.32 486.46h90.93v26.67H40.32z') { addSvgElem(Index, Element, 'ramka_7TI_40'); }
        if (Element.getAttribute('d') === 'M40.32 534.34h90.93v26.67H40.32z') { addSvgElem(Index, Element, 'ramka_7PI_11'); }
        if (Element.getAttribute('d') === 'M39.57 582.47h90.93v26.67H39.57z') { addSvgElem(Index, Element, 'ramka_7FI_04'); }
        if (Element.getAttribute('d') === 'M235.94 195.81h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_5QI_01_01'); }
        if (Element.getAttribute('d') === 'M373.38 195.81h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_5QI_01_02'); }
        if (Element.getAttribute('d') === 'M575.76 353.79h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_7QI_01'); }
        if (Element.getAttribute('d') === 'M907.15 746.95h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_PI_16'); }
        if (Element.getAttribute('d') === 'M907.15 794.21h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_9TI_44'); }
        if (Element.getAttribute('d') === 'M1075.73 121.88h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_8QI_05_1'); }
        if (Element.getAttribute('d') === 'M1075.73 168.53h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_8QI_05_2'); }
        if (Element.getAttribute('d') === 'M1075.73 212.93h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_8QI_05_4'); }
        if (Element.getAttribute('d') === 'M1111.96 300.02h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_7PI_13'); }
        if (Element.getAttribute('d') === 'M1110.96 349.39h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_7TI_42'); }
        if (Element.getAttribute('d') === 'M1682.87 156.19h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_5PI_08'); }
        if (Element.getAttribute('d') === 'M1673.45 305.78h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_TI_36'); }
        if (Element.getAttribute('d') === 'M1677.54 379.59h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_FI_03'); }
        if (Element.getAttribute('d') === 'M1858.71 201.65h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_5TI_21'); }
        if (Element.getAttribute('d') === 'M1856.6 246.18h90.93v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_5TI_22'); }
        if (Element.getAttribute('d') === 'M1844.07 384.49H1935v26.67h-90.93z') { addSvgElem(Index, Element, 'ramka_PI_09'); }
        if (Element.getAttribute('d') === 'M287.37 831.4h21.46l-21.46 33.13h21.46z') { addSvgElem(Index, Element, 'kl_0313'); }
        if (Element.getAttribute('d') === 'M413.55 831.4h21.46l-21.46 33.13h21.46z') { addSvgElem(Index, Element, 'kl_0312'); }
        if (Element.getAttribute('d') === 'M529.73 834.33h21.46l-21.46 33.12h21.46z') { addSvgElem(Index, Element, 'kl_0311'); }
        if (Element.getAttribute('d') === 'M716.04 821.68v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl_036b'); }
        if (Element.getAttribute('d') === 'M660.59 711.15h21.46l-21.46 33.12h21.46z') { addSvgElem(Index, Element, 'kl_036v'); }
        if (Element.getAttribute('d') === 'M862.3 713.01v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl_004'); }
        if (Element.getAttribute('d') === 'M331.88 624.44h21.46l-21.46 33.12h21.46z') { addSvgElem(Index, Element, 'kl_0333'); }
        if (Element.getAttribute('d') === 'M457.14 622.58h21.46l-21.46 33.12h21.46z') { addSvgElem(Index, Element, 'kl_0332'); }
        if (Element.getAttribute('d') === 'M578.74 624.44h21.46l-21.46 33.12h21.46z') { addSvgElem(Index, Element, 'kl_0331'); }
        if (Element.getAttribute('d') === 'M736.43 640.26V618.8l33.12 21.46V618.8z') { addSvgElem(Index, Element, 'kl_020'); }
        if (Element.getAttribute('d') === 'M984.36 640.26V618.8l33.12 21.46V618.8z') { addSvgElem(Index, Element, 'kl_025'); }
        if (Element.getAttribute('d') === 'M221.01 568.76V547.3l33.12 21.46V547.3z') { addSvgElem(Index, Element, 'kl_0502'); }
        if (Element.getAttribute('d') === 'M503.37 568.42v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl_0501'); }
        if (Element.getAttribute('d') === 'M448.6 469.14h21.46l-21.46 33.12h21.46z') { addSvgElem(Index, Element, 'kl_054'); }
        if (Element.getAttribute('d') === 'M727.32 463.57v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl_038'); }
        if (Element.getAttribute('d') === 'M986.48 462.94v-21.46l33.13 21.46v-21.46z') { addSvgElem(Index, Element, 'kl_037'); }
        if (Element.getAttribute('d') === 'M725.84 404.38v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl_039'); }
        if (Element.getAttribute('d') === 'M983.46 404.76V383.3l33.13 21.46V383.3z') { addSvgElem(Index, Element, 'kl_030'); }
        if (Element.getAttribute('d') === 'M848.12 340.68v-21.47l33.12 21.47v-21.47z') { addSvgElem(Index, Element, 'kl_048'); }
        if (Element.getAttribute('d') === 'M1292.28 297.08h21.46l-21.46 33.12h21.46z') { addSvgElem(Index, Element, 'kl_047'); }
        if (Element.getAttribute('d') === 'M1534.13 270.79v-21.47l33.12 21.47v-21.47z') { addSvgElem(Index, Element, 'kl_002'); }
        if (Element.getAttribute('d') === 'M1738.29 235.67v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl_022'); }
        if (Element.getAttribute('d') === 'M1536.43 314.81h16.99v16.99h-16.99z') { addSvgElem(Index, Element, 'PS_10'); }
        if (Element.getAttribute('d') === 'M1278.6 689.58h71.89v21.09h-71.89z') { addSvgElem(Index, Element, 'Fr_156'); }
        if (Element.getAttribute('d') === 'M1278.6 729.53h71.89v21.09h-71.89z') { addSvgElem(Index, Element, 'Fb_156'); }
        if (Element.getAttribute('d') === 'M1484.36 690.39h71.89v21.09h-71.89z') { addSvgElem(Index, Element, 'Fr_339'); }
        if (Element.getAttribute('d') === 'M1484.36 730.46h71.89v21.09h-71.89z') { addSvgElem(Index, Element, 'Fb_339'); }
        if (Element.getAttribute('d') === 'M1688.17 691.26h71.89v21.09h-71.89z') { addSvgElem(Index, Element, 'Fr_159'); }
        if (Element.getAttribute('d') === 'M1688.17 731.33h71.89v21.09h-71.89z') { addSvgElem(Index, Element, 'Fb_159'); }
        if (Element.getAttribute('d') === 'm319.38 690.85-13.51-8.52m-10.72-12.08h.24l28.1.3.05 20.37-4.14.03c1.79 14.07-9.1 28.16-24.25 28.16-13.49 0-24.43-10.94-24.43-24.43 0-13.5 10.94-24.43 24.43-24.43z') { addSvgElem(Index, Element, 'B3_1'); }
        if (Element.getAttribute('d') === 'm267.51 724.77.01-6.07h7.39l4.01-5.13 2.46-46.23h25.17l2.16 47.15 4.11 4.42h7.29v5.86z') { addSvgElem(Index, Element, 'B3_2'); }
        if (Element.getAttribute('d') === 'M294.91 685.22c5.45 0 9.86 4.41 9.86 9.86 0 5.44-4.41 9.86-9.86 9.86-5.45 0-9.86-4.42-9.86-9.86 0-5.45 4.41-9.86 9.86-9.86z') { addSvgElem(Index, Element, 'B3_3'); } // Sergey
        if (Element.getAttribute('d') === 'm445.43 689.64-13.4-8.46M421.4 669.2h.23l27.87.31.05 20.2-4.11.02c1.78 13.96-9.02 27.93-24.04 27.93-13.38 0-24.23-10.85-24.23-24.23s10.85-24.23 24.23-24.23z') { addSvgElem(Index, Element, 'B2_1'); }
        if (Element.getAttribute('d') === 'M394.39 723.37v-6.02h7.34l3.97-5.09 2.44-45.85h24.97l2.14 46.77 4.07 4.38h7.24v5.81z') { addSvgElem(Index, Element, 'B2_2'); }
        if (Element.getAttribute('d') === 'M421.56 684.14c5.4 0 9.78 4.38 9.78 9.78 0 5.4-4.38 9.78-9.78 9.78-5.4 0-9.78-4.38-9.78-9.78 0-5.4 4.38-9.78 9.78-9.78z') { addSvgElem(Index, Element, 'B2_3'); } // Sergey
        if (Element.getAttribute('d') === 'm564.44 696.82-13.5-8.53m-10.72-12.08h.24l28.09.31.05 20.36-4.14.03c1.79 14.07-9.09 28.16-24.24 28.16-13.49 0-24.43-10.94-24.43-24.43s10.94-24.43 24.43-24.43z') { addSvgElem(Index, Element, 'B1_1'); }
        if (Element.getAttribute('d') === 'M512.99 730.82v-6.06h7.39l4.01-5.14 2.46-46.22h25.17l2.16 47.15 4.11 4.41h7.29v5.86z') { addSvgElem(Index, Element, 'B1_2'); }
        if (Element.getAttribute('d') === 'M540.38 691.27c5.45 0 9.86 4.42 9.86 9.86 0 5.45-4.41 9.86-9.86 9.86-5.44 0-9.86-4.41-9.86-9.86 0-5.44 4.42-9.86 9.86-9.86z') { addSvgElem(Index, Element, 'B1_3'); } // Sergey
        // Sergey
        if (Element.getAttribute('d') === 'M1695.71 610.01h2.63v155.55h-2.63z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1702.09 610.01h2.64v155.55h-2.64z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1709.36 610.01h1.82v155.55h-1.82z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1715.25 610.01h2.92v155.55h-2.92z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1722.42 610.01h2.74v155.55h-2.74z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1728.45 610.01h2.92v155.55h-2.92z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1736.09 610.01h1.82v155.55h-1.82z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1743 610.01h2.51v155.55H1743z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1749.17 610.01h2.64v155.55h-2.64z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1756.46 610.01h2.34v155.55h-2.34z') { addSvgElem(Index, Element, 'vnk1_stripes'); }
        if (Element.getAttribute('d') === 'M1284.83 610.01h2.63v155.55h-2.63z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1291.21 610.01h2.64v155.55h-2.64z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1298.49 610.01h1.82v155.55h-1.82z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1304.37 610.01h2.92v155.55h-2.92z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1311.54 610.01h2.74v155.55h-2.74z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1317.57 610.01h2.92v155.55h-2.92z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1325.21 610.01h1.82v155.55h-1.82z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1332.12 610.01h2.51v155.55h-2.51z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1338.29 610.01h2.64v155.55h-2.64z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'M1345.59 610.01h2.34v155.55h-2.34z') { addSvgElem(Index, Element, 'vnk3_stripes'); }
        if (Element.getAttribute('d') === 'm1306.95 554.03-5.25 2.01 12.84-23.48 10.38 23.48-4.67-3.31 8.17 26.27-5.38-5.51-7.91 17.25-8.82-17.19-5.91 3.44z') { addSvgElem(Index, Element, 'vnk3_fire'); }
        if (Element.getAttribute('d') === 'm437.18 752.42-26.04.19') { addSvgElem(Index, Element, '0F2_stripe'); }
        if (Element.getAttribute('d') === 'm548.58 764.75-16.39-20.25') { addSvgElem(Index, Element, '0F1_stripe'); }
        if (Element.getAttribute('d') === 'm411.09 389.1-26.26.2') { addSvgElem(Index, Element, '053_stripe_1'); }
        if (Element.getAttribute('d') === 'm398.12 401.65.14-23.57') { addSvgElem(Index, Element, '053_stripe_2'); }
        if (Element.getAttribute('d') === 'm352.88 494.61-16.52-20.41') { addSvgElem(Index, Element, '051_stripe_1'); }
        if (Element.getAttribute('d') === 'm357.71 484.94-26.26.19') { addSvgElem(Index, Element, '051_stripe_2'); }
        if (Element.getAttribute('d') === 'm352.88 566.91-16.52-20.42') { addSvgElem(Index, Element, '052_stripe_1'); }
        if (Element.getAttribute('d') === 'm357.71 557.23-26.26.2') { addSvgElem(Index, Element, '052_stripe_2'); }
        if (Element.getAttribute('d') === 'm244.32 616.19-16.53-20.42') { addSvgElem(Index, Element, '035_stripe_1'); }
        if (Element.getAttribute('d') === 'm249.14 606.51-26.26.19') { addSvgElem(Index, Element, '035_stripe_2'); }
        if (Element.getAttribute('d') === 'm238.51 618.2.15-23.38') { addSvgElem(Index, Element, '035_stripe_3'); }
        if (Element.getAttribute('d') === 'm310.18 756.97-26.26.2') { addSvgElem(Index, Element, '0F3_stripe_1'); }
        if (Element.getAttribute('d') === 'm297.73 769.23.14-23.57') { addSvgElem(Index, Element, '0F3_stripe_2'); }
        if (Element.getAttribute('d') === 'm306.61 765.86-16.38-20.24') { addSvgElem(Index, Element, '0F3_stripe_3'); }
        if (Element.getAttribute('d') === 'm431.18 764.02-16.53-20.41') { addSvgElem(Index, Element, '0F2_stripe_0'); }
        if (Element.getAttribute('d') === 'm423.05 766.23.14-23.57') { addSvgElem(Index, Element, '0F2_stripe_1'); }
        if (Element.getAttribute('d') === 'm436.25 753.72-26.26.19') { addSvgElem(Index, Element, '0F2_stripe_2'); }
        if (Element.getAttribute('d') === 'm436.25 753.72-26.26.19') { addSvgElem(Index, Element, '0F2_stripe_3'); }
        if (Element.getAttribute('d') === 'm541.12 766.23.14-23.57') { addSvgElem(Index, Element, '0F1_stripe_1'); }
        if (Element.getAttribute('d') === 'm554.82 755.47-26.26.2') { addSvgElem(Index, Element, '0F1_stripe_2'); }
        if (Element.getAttribute('d') === 'm1435.73 214.52-26.25.2') { addSvgElem(Index, Element, '001_stripe_1'); }
        if (Element.getAttribute('d') === 'm1439.1 300.33-26.26.19') { addSvgElem(Index, Element, '001a_stripe_1'); }
        if (Element.getAttribute('d') === 'm1427.33 311.96.15-23.58') { addSvgElem(Index, Element, '001a_stripe_2'); }
        if (Element.getAttribute('d') === 'm1419.92 310.52 15.31-21.06') { addSvgElem(Index, Element, '001a_stripe_3'); }
        if (Element.getAttribute('d') === 'm1719.17 554.97-5.12 1.96 12.51-22.86 10.1 22.86-4.54-3.22 7.95 25.58-5.24-5.37-7.7 16.8-8.59-16.74-5.75 3.35z') { addSvgElem(Index, Element, 'vnk1_fire'); }
        if (Element.getAttribute('d') === 'm1512.14 554.97-5.12 1.96 12.51-22.86 10.1 22.86-4.55-3.22 7.96 25.58-5.24-5.37-7.7 16.8-8.59-16.74-5.75 3.35z') { addSvgElem(Index, Element, 'vnk2_fire'); }
        if (Element.getAttribute('d') === 'M1505.8 544.97V557l-22.15 28.77c-2.52 3.27-3.72 6.81-3.72 10.94v11.21h77.35v-12.74c0-4.66-1.43-8.66-4.38-12.26l-20.55-25.18v-12.46h2.35l-.29-.91v-22.21c0-8.54-6.96-12.27-15.5-12.27h-.4c-8.53 0-15.5 3.73-15.5 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_2'); }
        if (Element.getAttribute('d') === 'M1489.26 610.01h2.63v155.55h-2.63z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1495.64 610.01h2.64v155.55h-2.64z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1502.92 610.01h1.82v155.55h-1.82z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1508.8 610.01h2.92v155.55h-2.92z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1515.97 610.01h2.74v155.55h-2.74z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1522 610.01h2.92v155.55H1522z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1529.64 610.01h1.82v155.55h-1.82z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1536.55 610.01h2.51v155.55h-2.51z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1542.72 610.01h2.64v155.55h-2.64z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1550.02 610.01h2.34v155.55h-2.34z') { addSvgElem(Index, Element, 'vnk2_stripes'); }
        if (Element.getAttribute('d') === 'M1236.82 618.65h154.44v27.41h-154.44z') { addSvgElem(Index, Element, 'VNK3_status_1_fon'); }
        if (Element.getAttribute('d') === 'M1441.49 618.65h154.44v27.41h-154.44z') { addSvgElem(Index, Element, 'VNK2_status_1_fon'); }
        if (Element.getAttribute('d') === 'M1649.17 618.65h154.44v27.41h-154.44z') { addSvgElem(Index, Element, 'VNK1_status_1_fon'); }
        if (Element.getAttribute('d') === '') { addSvgElem(Index, Element, ''); }

      })
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '3FL_01') { Element.innerHTML = ''; }
        if (Element.innerHTML === '3FL_02') { Element.innerHTML = ''; }
        if (Element.innerHTML === '2FL_01') { Element.innerHTML = ''; }
        if (Element.innerHTML === '2FL_02') { Element.innerHTML = ''; }
        if (Element.innerHTML === '1FL_01') { Element.innerHTML = ''; }
        if (Element.innerHTML === '1FL_02') { Element.innerHTML = ''; }
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '51') { addSvgElem(Index, Element, 'kl029_proc', 'start'); }
        if (Element.innerHTML === '0' && Element.getAttribute('x') === '746.9' && Element.getAttribute('y') === '592.85') { addSvgElem(Index, Element, 'kl028_proc', 'center'); }
        if (Element.innerHTML === '0' && Element.getAttribute('x') === '998.47' && Element.getAttribute('y') === '592.85') { addSvgElem(Index, Element, 'kl007_proc', 'center'); }
        if (Element.getAttribute('x') === '1246.49' && Element.getAttribute('y') === '638.72') { addSvgElem(Index, Element, 'VNK3_status_1', 'center'); }
        if (Element.getAttribute('x') === '1279.2' && Element.getAttribute('y') === '664.05') { addSvgElem(Index, Element, 'VNK3_status_2', 'center'); }
        if (Element.getAttribute('x') === '1451.16' && Element.getAttribute('y') === '638.72') { addSvgElem(Index, Element, 'VNK2_status_1', 'center'); }
        if (Element.getAttribute('x') === '1483.87' && Element.getAttribute('y') === '664.05') { addSvgElem(Index, Element, 'VNK2_status_2', 'center'); }
        if (Element.getAttribute('x') === '1658.84' && Element.getAttribute('y') === '638.72') { addSvgElem(Index, Element, 'VNK1_status_1', 'center'); }
        if (Element.getAttribute('x') === '1691.55' && Element.getAttribute('y') === '664.05') { addSvgElem(Index, Element, 'VNK1_status_2', 'center'); }
        if (Element.innerHTML === '-999,00' && TextIndex === 168) { addSvgElem(Index, Element, '7QI_01'); }
        if (Element.innerHTML === '11' && TextIndex === 166) { addSvgElem(Index, Element, '5QI_01_01'); }
        if (Element.innerHTML === '81' && TextIndex === 167) { addSvgElem(Index, Element, '5QI_01_02'); }
        if (Element.innerHTML === '29' && TextIndex === 169) { addSvgElem(Index, Element, '7TI_41'); }
        if (Element.innerHTML === '18,18' && TextIndex === 170) { addSvgElem(Index, Element, '7PI_12'); }
        if (Element.innerHTML === '189371' && TextIndex === 171) { addSvgElem(Index, Element, '7FI_05'); }
        if (Element.innerHTML === '20' && TextIndex === 172) { addSvgElem(Index, Element, '7TI_40'); }
        if (Element.innerHTML === '0,00' && TextIndex === 173) { addSvgElem(Index, Element, '7PI_11'); }
        if (Element.innerHTML === '0' && TextIndex === 174) { addSvgElem(Index, Element, '7FI_04'); }
        if (Element.innerHTML === '0,00' && TextIndex === 177) { addSvgElem(Index, Element, '8QI_05_01'); } // Segey
        if (Element.innerHTML === '0,00' && TextIndex === 178) { addSvgElem(Index, Element, '8QI_05_02'); } // Segey
        if (Element.innerHTML === '0,00' && TextIndex === 179) { addSvgElem(Index, Element, '8QI_05_04'); } // Segey
        if (Element.innerHTML === '9,15' && TextIndex === 180) { addSvgElem(Index, Element, '7PI_13'); }
        if (Element.innerHTML === '91' && TextIndex === 181) { addSvgElem(Index, Element, '7PI_42'); }
        if (Element.innerHTML === '412' && TextIndex === 182) { addSvgElem(Index, Element, '5PI_08'); }
        if (Element.innerHTML === '21' && TextIndex === 185) { addSvgElem(Index, Element, 'TI_36'); }
        if (Element.innerHTML === '900' && TextIndex === 186) { addSvgElem(Index, Element, 'FI_03'); }
        if (Element.innerHTML === '1202' && TextIndex === 183) { addSvgElem(Index, Element, '5TI_21'); }
        if (Element.innerHTML === '1210' && TextIndex === 184) { addSvgElem(Index, Element, '5TI_22'); }
        if (Element.innerHTML === '526,80' && TextIndex === 187) { addSvgElem(Index, Element, 'PI_09'); }
        if (Element.innerHTML === '0' && TextIndex === 193) { addSvgElem(Index, Element, 'VNK1_Fr', 'end'); } // Sergey
        if (Element.innerHTML === '0' && TextIndex === 194) { addSvgElem(Index, Element, 'VNK1_Fb', 'end'); } // Sergey
        if (Element.innerHTML === '159' && TextIndex === 94) { addSvgElem(Index, Element, 'Tdym_1'); }
        if (Element.innerHTML === '1296' && TextIndex === 95) { addSvgElem(Index, Element, 'Tkyp_1'); }
        if (Element.innerHTML === '105385' && TextIndex === 191) { addSvgElem(Index, Element, 'VNK2_Fr'); }
        if (Element.innerHTML === '130113' && TextIndex === 192) { addSvgElem(Index, Element, 'VNK2_Fb'); }
        if (Element.innerHTML === '1330' && TextIndex === 92) { addSvgElem(Index, Element, 'Tkyp_2'); }
        if (Element.innerHTML === '339' && TextIndex === 93) { addSvgElem(Index, Element, 'Tdym_2'); }
        if (Element.innerHTML === '80930' && TextIndex === 189) { addSvgElem(Index, Element, 'VNK3_Fr'); }
        if (Element.innerHTML === '95531' && TextIndex === 190) { addSvgElem(Index, Element, 'VNK3_Fb'); }
        if (Element.innerHTML === '1331' && TextIndex === 90) { addSvgElem(Index, Element, 'Tkyp_3'); }
        if (Element.innerHTML === '156' && TextIndex === 91) { addSvgElem(Index, Element, 'Tdym_3'); }
        if (Element.innerHTML === '1210' && TextIndex === 188) { addSvgElem(Index, Element, 'vybor_signala'); }
        if (Element.innerHTML === '1209,70' && TextIndex === 96) { addSvgElem(Index, Element, 'PV1'); }
        if (Element.innerHTML === '1210,00' && TextIndex === 97) { addSvgElem(Index, Element, 'SP1'); }
        if (Element.innerHTML === '32,49' && TextIndex === 98) { addSvgElem(Index, Element, 'PV1_1'); }
        if (Element.innerHTML === '9,10' && TextIndex === 122) { addSvgElem(Index, Element, 'PV2'); }
        if (Element.innerHTML === '9,00' && TextIndex === 123) { addSvgElem(Index, Element, 'SP2'); }
        if (Element.innerHTML === '36,21' && TextIndex === 124) { addSvgElem(Index, Element, 'PV2_1'); }
        if (Element.innerHTML === '0,00' && TextIndex === 114) { addSvgElem(Index, Element, 'PV3'); }
        if (Element.innerHTML === '0,00' && TextIndex === 115) { addSvgElem(Index, Element, 'SP3'); }
        if (Element.innerHTML === '0,00' && TextIndex === 116) { addSvgElem(Index, Element, 'PV3_1'); }
        if (Element.innerHTML === '9,74' && TextIndex === 104) { addSvgElem(Index, Element, 'PV4'); }
        if (Element.innerHTML === '10,00' && TextIndex === 105) { addSvgElem(Index, Element, 'SP4'); }
        if (Element.innerHTML === '63,12' && TextIndex === 106) { addSvgElem(Index, Element, 'PV4_1'); }
        if (Element.innerHTML === '100' && TextIndex === 297) { addSvgElem(Index, Element, 'kl0333_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 303) { addSvgElem(Index, Element, 'kl0332_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 298) { addSvgElem(Index, Element, 'kl0331_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 294) { addSvgElem(Index, Element, 'kl0313_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 295) { addSvgElem(Index, Element, 'kl0312_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 296) { addSvgElem(Index, Element, 'kl0311_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 304) { addSvgElem(Index, Element, 'kl036v_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 305) { addSvgElem(Index, Element, 'kl036b_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 299) { addSvgElem(Index, Element, 'kl020_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 306) { addSvgElem(Index, Element, 'kl028_proc'); }
        if (Element.innerHTML === '51' && TextIndex === 309) { addSvgElem(Index, Element, 'kl029_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 308) { addSvgElem(Index, Element, 'kl007_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 302) { addSvgElem(Index, Element, 'kl025_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 300) { addSvgElem(Index, Element, 'kl004_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 301) { addSvgElem(Index, Element, 'kl038_proc'); }
        if (Element.innerHTML === '63' && TextIndex === 310) { addSvgElem(Index, Element, 'kl037_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 307) { addSvgElem(Index, Element, 'kl048_proc'); }
        if (Element.innerHTML === '9,69' && TextIndex === 175) { addSvgElem(Index, Element, 'PI_16_proc'); }
        if (Element.innerHTML === '36' && TextIndex === 176) { addSvgElem(Index, Element, '9TI_44_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 290) { addSvgElem(Index, Element, 'kl035_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 288) { addSvgElem(Index, Element, 'kl052_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 278) { addSvgElem(Index, Element, 'kl051_proc'); }
        if (Element.innerHTML === '36' && TextIndex === 276) { addSvgElem(Index, Element, 'kl053_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 292) { addSvgElem(Index, Element, 'kl001_proc'); }
        if (Element.innerHTML === '33' && TextIndex === 286) { addSvgElem(Index, Element, 'kl001a_proc'); }
        if (Element.innerHTML === '64' && TextIndex === 280) { addSvgElem(Index, Element, 'klOF3_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 282) { addSvgElem(Index, Element, 'klOF2_proc'); }
        if (Element.innerHTML === '63' && TextIndex === 284) { addSvgElem(Index, Element, 'klOF1_proc'); }
      });
    }
    else if (ObjectSvg.name === 'vnk_spvg') {
      // Sergey
      ObjectSvg.svg.querySelectorAll('circle').forEach((Element, TextIndex) => {
        if (Element.getAttribute('cx') === '734.36' && Element.getAttribute('cy') === '698.3') { addSvgElem(Index, Element, 'B3_3'); }
        if (Element.getAttribute('cx') === '880.65' && Element.getAttribute('cy') === '702.01') { addSvgElem(Index, Element, 'B2_3'); }
        if (Element.getAttribute('cx') === '1024.4' && Element.getAttribute('cy') === '702.01') { addSvgElem(Index, Element, 'B1_3'); }
        if (Element.getAttribute('cx') === '936.28' && Element.getAttribute('cy') === '646.42') { addSvgElem(Index, Element, 'circle_kl0332'); }
        if (Element.getAttribute('cx') === '936.28' && Element.getAttribute('cy') === '646.58') { addSvgElem(Index, Element, 'circle_kl0332'); }
        if (Element.getAttribute('cx') === '1084.1' && Element.getAttribute('cy') === '646.42') { addSvgElem(Index, Element, 'circle_kl0331'); }
        if (Element.getAttribute('cx') === '1084.1' && Element.getAttribute('cy') === '646.58') { addSvgElem(Index, Element, 'circle_kl0331'); }
        if (Element.getAttribute('cx') === '732.01' && Element.getAttribute('cy') === '757.9') { addSvgElem(Index, Element, 'circle_0F3'); }
        if (Element.getAttribute('cx') === '732.01' && Element.getAttribute('cy') === '758.13') { addSvgElem(Index, Element, 'circle_0F3'); }
        if (Element.getAttribute('cx') === '878.82' && Element.getAttribute('cy') === '759.98') { addSvgElem(Index, Element, 'circle_0F2'); }
        if (Element.getAttribute('cx') === '878.82' && Element.getAttribute('cy') === '760.22') { addSvgElem(Index, Element, 'circle_0F2'); }
        if (Element.getAttribute('cx') === '1022.05' && Element.getAttribute('cy') === '761.39') { addSvgElem(Index, Element, 'circle_0F1'); }
        if (Element.getAttribute('cx') === '1022.05' && Element.getAttribute('cy') === '761.15') { addSvgElem(Index, Element, 'circle_0F1'); }
        if (Element.getAttribute('cx') === '1282.67' && Element.getAttribute('cy') === '548.14') { addSvgElem(Index, Element, 'circle_kl028'); }
        if (Element.getAttribute('cx') === '1282.67' && Element.getAttribute('cy') === '547.98') { addSvgElem(Index, Element, 'circle_kl028'); }
        if (Element.getAttribute('cx') === '1573.3' && Element.getAttribute('cy') === '548.77') { addSvgElem(Index, Element, 'circle_kl007'); }
        if (Element.getAttribute('cx') === '1573.3' && Element.getAttribute('cy') === '548.61') { addSvgElem(Index, Element, 'circle_kl007'); }
        if (Element.getAttribute('cx') === '602.84' && Element.getAttribute('cy') === '608.14') { addSvgElem(Index, Element, 'circle_035') }
        if (Element.getAttribute('cx') === '602.84' && Element.getAttribute('cy') === '607.91') { addSvgElem(Index, Element, 'circle_035') }
        if (Element.getAttribute('cx') === '789.25' && Element.getAttribute('cy') === '646.58') { addSvgElem(Index, Element, 'circle_kl0333') }
        if (Element.getAttribute('cx') === '789.25' && Element.getAttribute('cy') === '646.42') { addSvgElem(Index, Element, 'circle_kl0333') }
        if (Element.getAttribute('cx') === '1148.99' && Element.getAttribute('cy') === '795.1') { addSvgElem(Index, Element, 'circle_kl036b') }
        if (Element.getAttribute('cx') === '1148.99' && Element.getAttribute('cy') === '794.94') { addSvgElem(Index, Element, 'circle_kl036b') }
        if (Element.getAttribute('cx') === '1210.4' && Element.getAttribute('cy') === '725.88') { addSvgElem(Index, Element, 'circle_kl036v') }
        if (Element.getAttribute('cx') === '1210.4' && Element.getAttribute('cy') === '725.72') { addSvgElem(Index, Element, 'circle_kl036v') }
        if (Element.getAttribute('cx') === '1398.53' && Element.getAttribute('cy') === '257.36') { addSvgElem(Index, Element, 'circle_kl029') }
        if (Element.getAttribute('cx') === '1398.53' && Element.getAttribute('cy') === '257.2') { addSvgElem(Index, Element, 'circle_kl029') }
        if (Element.getAttribute('cx') === '1404.93' && Element.getAttribute('cy') === '318.61') { addSvgElem(Index, Element, 'circle_kl048') }
        if (Element.getAttribute('cx') === '1404.93' && Element.getAttribute('cy') === '318.45') { addSvgElem(Index, Element, 'circle_kl048') }
        if (Element.getAttribute('cx') === '1274.93' && Element.getAttribute('cy') === '363.21') { addSvgElem(Index, Element, 'circle_kl039') }
        if (Element.getAttribute('cx') === '1274.93' && Element.getAttribute('cy') === '363.06') { addSvgElem(Index, Element, 'circle_kl039') }
        if (Element.getAttribute('cx') === '1561.96' && Element.getAttribute('cy') === '363.37') { addSvgElem(Index, Element, 'circle_kl030') }
        if (Element.getAttribute('cx') === '1561.96' && Element.getAttribute('cy') === '363.21') { addSvgElem(Index, Element, 'circle_kl030') }
        if (Element.getAttribute('cx') === '1276.64' && Element.getAttribute('cy') === '421.49') { addSvgElem(Index, Element, 'circle_kl038') }
        if (Element.getAttribute('cx') === '1276.64' && Element.getAttribute('cy') === '421.34') { addSvgElem(Index, Element, 'circle_kl038') }
        if (Element.getAttribute('cx') === '1565.09' && Element.getAttribute('cy') === '421.42') { addSvgElem(Index, Element, 'circle_kl037') }
        if (Element.getAttribute('cx') === '1565.09' && Element.getAttribute('cy') === '421.26') { addSvgElem(Index, Element, 'circle_kl037') }
        if (Element.getAttribute('cx') === '1286.76' && Element.getAttribute('cy') === '607.75') { addSvgElem(Index, Element, 'circle_kl020') }
        if (Element.getAttribute('cx') === '1286.76' && Element.getAttribute('cy') === '607.59') { addSvgElem(Index, Element, 'circle_kl020') }
        if (Element.getAttribute('cx') === '1573.76' && Element.getAttribute('cy') === '607.67') { addSvgElem(Index, Element, 'circle_kl025') }
        if (Element.getAttribute('cx') === '1573.76' && Element.getAttribute('cy') === '607.52') { addSvgElem(Index, Element, 'circle_kl025') }
        if (Element.getAttribute('cx') === '1446.41' && Element.getAttribute('cy') === '679.23') { addSvgElem(Index, Element, 'circle_kl004') }
        if (Element.getAttribute('cx') === '1446.41' && Element.getAttribute('cy') === '679.08') { addSvgElem(Index, Element, 'circle_kl004') }
      });
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        // Sergey
        if (Element.getAttribute('x') === '125.37' && Element.getAttribute('y') === '343.41') { addSvgElem(Index, Element, '6TI_39_1'); }
        if (Element.getAttribute('x') === '249.58' && Element.getAttribute('y') === '345.23') { addSvgElem(Index, Element, '6TI_38_1'); }
        if (Element.getAttribute('x') === '376.67' && Element.getAttribute('y') === '343.41') { addSvgElem(Index, Element, '6TI_37_1'); }
        if (Element.getAttribute('x') === '124.58' && Element.getAttribute('y') === '390.87') { addSvgElem(Index, Element, '6TI_39_2'); }
        if (Element.getAttribute('x') === '249.58' && Element.getAttribute('y') === '390.87') { addSvgElem(Index, Element, '6TI_38_2'); }
        if (Element.getAttribute('x') === '376.15' && Element.getAttribute('y') === '390.87') { addSvgElem(Index, Element, '6TI_37_2'); }
        if (Element.getAttribute('x') === '124.58' && Element.getAttribute('y') === '473.49') { addSvgElem(Index, Element, '6TI_39_3'); }
        if (Element.getAttribute('x') === '249.58' && Element.getAttribute('y') === '473.49') { addSvgElem(Index, Element, '6TI_38_3'); }
        if (Element.getAttribute('x') === '375.76' && Element.getAttribute('y') === '473.49') { addSvgElem(Index, Element, '6TI_37_3'); }
        if (Element.getAttribute('x') === '125' && Element.getAttribute('y') === '517.11') { addSvgElem(Index, Element, '6TI_39_4'); }
        if (Element.getAttribute('x') === '250.39' && Element.getAttribute('y') === '517.11') { addSvgElem(Index, Element, '6TI_38_4'); }
        if (Element.getAttribute('x') === '376.17' && Element.getAttribute('y') === '517.11') { addSvgElem(Index, Element, '6TI_37_4'); }
        if (Element.getAttribute('x') === '125' && Element.getAttribute('y') === '562.42') { addSvgElem(Index, Element, '6TI_39_5'); }
        if (Element.getAttribute('x') === '250.39' && Element.getAttribute('y') === '562.42') { addSvgElem(Index, Element, '6TI_38_5'); }
        if (Element.getAttribute('x') === '376.17' && Element.getAttribute('y') === '562.42') { addSvgElem(Index, Element, '6TI_37_5'); }
        if (Element.getAttribute('x') === '125' && Element.getAttribute('y') === '607.74') { addSvgElem(Index, Element, '6TI_39_6'); }
        if (Element.getAttribute('x') === '250.39' && Element.getAttribute('y') === '607.74') { addSvgElem(Index, Element, '6TI_38_6'); }
        if (Element.getAttribute('x') === '376.17' && Element.getAttribute('y') === '607.74') { addSvgElem(Index, Element, '6TI_37_6'); }
        if (Element.getAttribute('x') === '125' && Element.getAttribute('y') === '653.44') { addSvgElem(Index, Element, '6TI_39_7'); }
        if (Element.getAttribute('x') === '250.39' && Element.getAttribute('y') === '653.44') { addSvgElem(Index, Element, '6TI_38_7'); }
        if (Element.getAttribute('x') === '376.17' && Element.getAttribute('y') === '653.44') { addSvgElem(Index, Element, '6TI_37_7'); }
        if (Element.getAttribute('x') === '125' && Element.getAttribute('y') === '698.75') { addSvgElem(Index, Element, '6TI_39_8'); }
        if (Element.getAttribute('x') === '250.39' && Element.getAttribute('y') === '698.75') { addSvgElem(Index, Element, '6TI_38_8'); }
        if (Element.getAttribute('x') === '376.17' && Element.getAttribute('y') === '698.75') { addSvgElem(Index, Element, '6TI_37_8'); }
        if (Element.getAttribute('x') === '125' && Element.getAttribute('y') === '781.17') { addSvgElem(Index, Element, '6TI_39_9'); }
        if (Element.getAttribute('x') === '250.39' && Element.getAttribute('y') === '781.17') { addSvgElem(Index, Element, '6TI_38_9'); }
        if (Element.getAttribute('x') === '376.17' && Element.getAttribute('y') === '781.17') { addSvgElem(Index, Element, '6TI_37_9'); }
        if (Element.getAttribute('x') === '125' && Element.getAttribute('y') === '826.1') { addSvgElem(Index, Element, '6TI_39_10'); }
        if (Element.getAttribute('x') === '250.39' && Element.getAttribute('y') === '826.1') { addSvgElem(Index, Element, '6TI_38_10'); }
        if (Element.getAttribute('x') === '376.17' && Element.getAttribute('y') === '826.1') { addSvgElem(Index, Element, '6TI_37_10'); }
        if (Element.getAttribute('x') === '671.5' && Element.getAttribute('y') === '415.55') { addSvgElem(Index, Element, '6VI_3_1'); }
        if (Element.getAttribute('x') === '821.5' && Element.getAttribute('y') === '415.55') { addSvgElem(Index, Element, '6VI_2_1'); }
        if (Element.getAttribute('x') === '974.23' && Element.getAttribute('y') === '415.55') { addSvgElem(Index, Element, '6VI_1_1'); }
        if (Element.getAttribute('x') === '671.5' && Element.getAttribute('y') === '461.25') { addSvgElem(Index, Element, '6VI_3_2'); }
        if (Element.getAttribute('x') === '821.5' && Element.getAttribute('y') === '461.25') { addSvgElem(Index, Element, '6VI_2_2'); }
        if (Element.getAttribute('x') === '974.23' && Element.getAttribute('y') === '461.25') { addSvgElem(Index, Element, '6VI_1_2'); }
        if (Element.getAttribute('x') === '671.5' && Element.getAttribute('y') === '504.22') { addSvgElem(Index, Element, '6VI_3_3'); }
        if (Element.getAttribute('x') === '821.5' && Element.getAttribute('y') === '504.22') { addSvgElem(Index, Element, '6VI_2_3'); }
        if (Element.getAttribute('x') === '974.23' && Element.getAttribute('y') === '504.22') { addSvgElem(Index, Element, '6VI_1_3'); }
        if (Element.getAttribute('x') === '671.5' && Element.getAttribute('y') === '547.58') { addSvgElem(Index, Element, '6VI_3_4'); }
        if (Element.getAttribute('x') === '821.5' && Element.getAttribute('y') === '547.58') { addSvgElem(Index, Element, '6VI_2_4'); }
        if (Element.getAttribute('x') === '974.23' && Element.getAttribute('y') === '547.58') { addSvgElem(Index, Element, '6VI_1_4'); }
        if (Element.innerHTML === '18' && TextIndex === 381) { addSvgElem(Index, Element, '6TI_31_3'); }
        if (Element.innerHTML === '20' && TextIndex === 382) { addSvgElem(Index, Element, '6TI_31_2'); }
        if (Element.innerHTML === '18' && TextIndex === 383) { addSvgElem(Index, Element, '6TI_31_1'); }
        if (Element.innerHTML === '0,00' && TextIndex === 378) { addSvgElem(Index, Element, '8QI_05_1'); }
        if (Element.innerHTML === '0,00' && TextIndex === 379) { addSvgElem(Index, Element, '8QI_05_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 380) { addSvgElem(Index, Element, '8QI_05_4'); }
        if (Element.innerHTML === '30' && TextIndex === 384) { addSvgElem(Index, Element, '9TI_41'); }
        if (Element.innerHTML === '86' && TextIndex === 385) { addSvgElem(Index, Element, '9TI_42'); }
        if (Element.innerHTML === '92' && TextIndex === 386) { addSvgElem(Index, Element, '7TI_42'); }
        if (Element.innerHTML === '134' && TextIndex === 387) { addSvgElem(Index, Element, '9TI_34'); }
        if (Element.innerHTML === '226' && TextIndex === 388) { addSvgElem(Index, Element, '9TI_32'); }
        if (Element.innerHTML === '73' && TextIndex === 390) { addSvgElem(Index, Element, '9TI_35'); }
        if (Element.innerHTML === '58' && TextIndex === 389) { addSvgElem(Index, Element, '9TI_33'); }
        if (Element.innerHTML === '36' && TextIndex === 391) { addSvgElem(Index, Element, '9TI_30'); }
        if (Element.innerHTML === '36' && TextIndex === 392) { addSvgElem(Index, Element, '9TI_44'); }
        if (Element.innerHTML === '10,00' && TextIndex === 393) { addSvgElem(Index, Element, 'PI_16'); }
        if (Element.innerHTML === '64  %' && TextIndex === 208) { addSvgElem(Index, Element, 'klOF3_proc'); }
        if (Element.innerHTML === '0  %' && TextIndex === 209) { addSvgElem(Index, Element, 'klOF2_proc'); }
        if (Element.innerHTML === '65  %' && TextIndex === 210) { addSvgElem(Index, Element, 'klOF1_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 402) { addSvgElem(Index, Element, 'kl0333_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 414) { addSvgElem(Index, Element, 'kl0332_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 401) { addSvgElem(Index, Element, 'kl0331_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 398) { addSvgElem(Index, Element, 'kl0313_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 399) { addSvgElem(Index, Element, 'kl0312_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 400) { addSvgElem(Index, Element, 'kl0311_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 413) { addSvgElem(Index, Element, 'kl036b_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 412) { addSvgElem(Index, Element, 'kl036v_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 403) { addSvgElem(Index, Element, 'kl020_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 411) { addSvgElem(Index, Element, 'kl028_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 410) { addSvgElem(Index, Element, 'kl007_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 405) { addSvgElem(Index, Element, 'kl025_proc'); }
        if (Element.innerHTML === '62' && TextIndex === 407) { addSvgElem(Index, Element, 'kl037_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 406) { addSvgElem(Index, Element, 'kl038_proc'); }
        if (Element.innerHTML === '51' && TextIndex === 408) { addSvgElem(Index, Element, 'kl029_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 409) { addSvgElem(Index, Element, 'kl048_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 404) { addSvgElem(Index, Element, 'kl004_proc'); }
        // Ilay
        if (Element.innerHTML === '0 %' && Element.getAttribute('y') == 643.11 && Element.getAttribute('x') == 599.87) { addSvgElem(Index, Element, 'klO35_proc'); }
        if (Element.innerHTML === 'Работа' && Element.getAttribute('y') == 792.83 && Element.getAttribute('x') == 612.99) { addSvgElem(Index, Element, 'spvg_t1_4'); }
      });
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, TextIndex) => {
        if (Element.getAttribute('d') === 'M67.66 323.97h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_1'); }
        if (Element.getAttribute('d') === 'M192.66 324.04h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_1'); }
        if (Element.getAttribute('d') === 'M318.83 323.97h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_1'); }
        if (Element.getAttribute('d') === 'M67.66 369.67h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_2'); }
        if (Element.getAttribute('d') === 'M192.66 369.67h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_2'); }
        if (Element.getAttribute('d') === 'M318.83 369.67h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_2'); }
        if (Element.getAttribute('d') === 'M67.66 452.48h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_3'); }
        if (Element.getAttribute('d') === 'M192.66 452.48h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_3'); }
        if (Element.getAttribute('d') === 'M318.83 452.48h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_3'); }
        if (Element.getAttribute('d') === 'M67.66 495.84h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_4'); }
        if (Element.getAttribute('d') === 'M192.66 495.84h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_4'); }
        if (Element.getAttribute('d') === 'M318.83 495.84h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_4'); }
        if (Element.getAttribute('d') === 'M67.66 541.55h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_5'); }
        if (Element.getAttribute('d') === 'M192.66 541.55h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_5'); }
        if (Element.getAttribute('d') === 'M318.83 541.55h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_5'); }
        if (Element.getAttribute('d') === 'M67.66 587.64h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_6'); }
        if (Element.getAttribute('d') === 'M192.66 587.64h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_6'); }
        if (Element.getAttribute('d') === 'M318.83 587.64h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_6'); }
        if (Element.getAttribute('d') === 'M67.66 632.56h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_7'); }
        if (Element.getAttribute('d') === 'M192.66 632.56h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_7'); }
        if (Element.getAttribute('d') === 'M318.83 632.56h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_7'); }
        if (Element.getAttribute('d') === 'M67.66 678.27h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_8'); }
        if (Element.getAttribute('d') === 'M192.66 678.27h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_8'); }
        if (Element.getAttribute('d') === 'M318.83 678.27h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_8'); }
        if (Element.getAttribute('d') === 'M67.66 760.69h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_9'); }
        if (Element.getAttribute('d') === 'M192.66 760.69h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_9'); }
        if (Element.getAttribute('d') === 'M318.83 760.69h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_9'); }
        if (Element.getAttribute('d') === 'M67.66 805.61h88.09v26.56H67.66z') { addSvgElem(Index, Element, 'ramka_6TI_39_10'); }
        if (Element.getAttribute('d') === 'M192.66 805.61h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_38_10'); }
        if (Element.getAttribute('d') === 'M318.83 805.61h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_37_10'); }
        if (Element.getAttribute('d') === 'M632.31 395.53h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_3_1'); }
        if (Element.getAttribute('d') === 'M781.92 395.53h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_2_1'); }
        if (Element.getAttribute('d') === 'M934.65 395.53h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_1_1'); }
        if (Element.getAttribute('d') === 'M632.31 441.23h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_3_2'); }
        if (Element.getAttribute('d') === 'M781.92 441.23h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_2_2'); }
        if (Element.getAttribute('d') === 'M934.65 441.23h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'rmaka_6VI_1_2'); }
        if (Element.getAttribute('d') === 'M632.31 484.69h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_3_3'); }
        if (Element.getAttribute('d') === 'M781.92 484.69h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_2_3'); }
        if (Element.getAttribute('d') === 'M934.65 484.69h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_1_3'); }
        if (Element.getAttribute('d') === 'M632.31 528.34h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_3_4'); }
        if (Element.getAttribute('d') === 'M781.92 528.34h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_2_4'); }
        if (Element.getAttribute('d') === 'M934.65 528.34h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6VI_1_4'); }
        if (Element.getAttribute('d') === 'M969.81 209.98h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_8QI_05_1'); }
        if (Element.getAttribute('d') === 'M969.81 280.29h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_8QI_05_2'); }
        if (Element.getAttribute('d') === 'M969.81 324.83h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_8QI_05_4'); }
        if (Element.getAttribute('d') === 'M1306.72 701.78h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_9TI_30'); }
        if (Element.getAttribute('d') === 'M1524.69 467.79h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_9TI_32'); }
        if (Element.getAttribute('d') === 'M1696.96 523.26h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_9TI_33'); }
        if (Element.getAttribute('d') === 'M1213.75 467.79h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_9TI_34'); }
        if (Element.getAttribute('d') === 'M1135.62 570.14h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_9TI_35'); }
        if (Element.getAttribute('d') === 'M1236.71 280.39h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_9TI_41'); }
        if (Element.getAttribute('d') === 'M1499.99 280.39h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_9TI_42'); }
        if (Element.getAttribute('d') === 'M1507.89 701.78h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_9TI_44'); }
        if (Element.getAttribute('d') === 'M1705.94 306.08h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_7TI_42'); }
        if (Element.getAttribute('d') === 'M1750.08 638.5h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_PI_16'); }
        if (Element.getAttribute('d') === 'M730.54 896.31h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_31_3'); }
        if (Element.getAttribute('d') === 'M880.55 896.31h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_31_2'); }
        if (Element.getAttribute('d') === 'M1016.87 896.31h88.09v26.56h-88.09z') { addSvgElem(Index, Element, 'ramka_6TI_31_1'); }
        if (Element.getAttribute('d') === 'm1413.5 266.46-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl029'); }
        if (Element.getAttribute('d') === 'm1420.5 327.96-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_048'); }
        if (Element.getAttribute('d') === 'm1290.44 372.38-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_039'); }
        if (Element.getAttribute('d') === 'm1577.55 372.38-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_030'); }
        if (Element.getAttribute('d') === 'm1291.95 430.56-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_038'); }
        if (Element.getAttribute('d') === 'm1580.5 430.46-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_037'); }
        if (Element.getAttribute('d') === 'm1298.5 557.46-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl028'); } // Sergey
        if (Element.getAttribute('d') === 'm1588.5 557.46-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl007'); } // Sergey
        if (Element.getAttribute('d') === 'm1302.5 616.71-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_020'); }
        if (Element.getAttribute('d') === 'm1588.97 617.24-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_025'); }
        if (Element.getAttribute('d') === 'm1461.68 687.99-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_004'); }
        if (Element.getAttribute('d') === 'm780.28 662.54 18-31h-18l18 31z') { addSvgElem(Index, Element, 'kl_0333'); }
        if (Element.getAttribute('d') === 'm945.5 631.46-18 31h18l-18-31z') { addSvgElem(Index, Element, 'kl_0332'); }
        if (Element.getAttribute('d') === 'm1074.81 662.54 18-31h-18l18 31z') { addSvgElem(Index, Element, 'kl_0331'); }
        if (Element.getAttribute('d') === 'm726.07 848.87 18-31h-18l18 31z') { addSvgElem(Index, Element, 'kl_0313'); }
        if (Element.getAttribute('d') === 'm873.14 848.87 18-31h-18l18 31z') { addSvgElem(Index, Element, 'kl_0312'); }
        if (Element.getAttribute('d') === 'm1015.65 848.87 18-31h-18l18 31z') { addSvgElem(Index, Element, 'kl_0311'); }
        if (Element.getAttribute('d') === 'm1164.5 804.46-31-18v18l31-18z') { addSvgElem(Index, Element, 'kl_036b'); }
        if (Element.getAttribute('d') === 'm1201.5 741.46 18-31h-18l18 31z') { addSvgElem(Index, Element, 'kl_036v'); }
        if (Element.getAttribute('d') === 'm757.23 694.2-12.84-8.11m-10.19-11.48h.23l26.71.29.05 19.36-3.94.03c1.7 13.37-8.65 26.76-23.05 26.76-12.82 0-23.22-10.39-23.22-23.22 0-12.83 10.4-23.22 23.22-23.22z') { addSvgElem(Index, Element, 'B3_1'); }
        if (Element.getAttribute('d') === 'm708.31 726.52.01-5.76h7.03l3.8-4.88 2.35-43.95h23.92l2.06 44.83 3.9 4.19h6.94v5.57z') { addSvgElem(Index, Element, 'B3_2'); }
        if (Element.getAttribute('d') === 'm903.52 697.91-12.84-8.11m-10.19-11.48h.23l26.71.29.04 19.36-3.93.03c1.7 13.37-8.65 26.76-23.05 26.76-12.82 0-23.22-10.39-23.22-23.22 0-12.83 10.4-23.22 23.22-23.22z') { addSvgElem(Index, Element, 'B2_1'); }
        if (Element.getAttribute('d') === 'M854.6 730.23v-5.76h7.03l3.81-4.88 2.35-43.95h23.92l2.05 44.83 3.91 4.19h6.93v5.57z') { addSvgElem(Index, Element, 'B2_2'); }
        if (Element.getAttribute('d') === 'm1047.27 697.91-12.84-8.11m-10.19-11.48h.23l26.71.29.05 19.36-3.94.03c1.7 13.37-8.65 26.76-23.05 26.76-12.82 0-23.22-10.39-23.22-23.22 0-12.83 10.4-23.22 23.22-23.22z') { addSvgElem(Index, Element, 'B1_1'); }
        if (Element.getAttribute('d') === 'M998.35 730.23v-5.76h7.04l3.8-4.88 2.35-43.95h23.92l2.06 44.83 3.9 4.19h6.93v5.57z') { addSvgElem(Index, Element, 'B1_2'); }
        // Sergey
        if (Element.getAttribute('d') === 'm1013.18 749.06 15.86 23.79') { addSvgElem(Index, Element, '0F1_stripe'); }
        if (Element.getAttribute('d') === 'M864.62 758.77h28.6') { addSvgElem(Index, Element, '0F2_stripe'); }
        if (Element.getAttribute('d') === 'm722.28 745.75 15.78 23.85') { addSvgElem(Index, Element, '0F3_stripe'); }
        if (Element.getAttribute('d') === 'M717.16 756.55h28.6') { addSvgElem(Index, Element, '0F3_stripe_1'); }
        if (Element.getAttribute('d') === 'M732.07 746.57v22.81') { addSvgElem(Index, Element, '0F3_stripe_2'); }
        if (Element.getAttribute('d') === 'M878.88 748.65v22.82') { addSvgElem(Index, Element, '0F2_stripe_2'); }
        if (Element.getAttribute('d') === 'M1022.11 749.83v22.81') { addSvgElem(Index, Element, '0F1_stripe_1'); }
        if (Element.getAttribute('d') === 'm592.79 594.7 15.77 23.85') { addSvgElem(Index, Element, '035_stripe_1'); }
        if (Element.getAttribute('d') === 'M588.91 605.5h28.59') { addSvgElem(Index, Element, '035_stripe_2'); }
      })
    }
    else if (ObjectSvg.name === 'O_n_k_na_VNK_posle_1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'Управление клапаном 116') { addSvgElem(Index, Element, 'title_work_vn',); }
        if (Element.innerHTML === 'Открыт') { addSvgElem(Index, Element, 'status_window_text', 'start'); }
        if (Element.innerHTML === '45') { addSvgElem(Index, Element, 'time_full_vnk_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 18.462 -82.543)') { addSvgElem(Index, Element, 'btn_auto_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 98.702 -83.619)') { addSvgElem(Index, Element, 'btn_ruchnoy_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 6.957 -44.328)') { addSvgElem(Index, Element, 'btn_open_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 95.213 -44.328)') { addSvgElem(Index, Element, 'btn_close_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 60.33 -13.703)') { addSvgElem(Index, Element, 'btn_stop_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 34.648 36.28)') { addSvgElem(Index, Element, 'btn_sbros_oshibki_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 4.096 89.94)') { addSvgElem(Index, Element, 'btn_baypas_vsekh_blokirovok_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -118.012 -56.515)') { addSvgElem(Index, Element, 'status_control_vnk_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -161.17 26.01)') { addSvgElem(Index, Element, 'skhema_sobrana_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -155.99 90.394)') { addSvgElem(Index, Element, 'block_open_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -82.331 90.394)') { addSvgElem(Index, Element, 'block_close_text'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element) => {
        if (Element.getAttribute('d') === 'm58.35 75.18 14.08-7.8 14.07-7.8v31.2l-14.07-7.8z') { addSvgElem(Index, Element, 'right_vn'); }
        if (Element.getAttribute('d') === 'm58.69 75.18-14.08-7.8-14.08-7.8v31.2l14.08-7.8z') { addSvgElem(Index, Element, 'left_vn'); }
        if (Element.getAttribute('d') === 'M9.78 108.49h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'ruchnoy'); }
        if (Element.getAttribute('d') === 'M9.78 149.68h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'open'); }
        if (Element.getAttribute('d') === 'M9.78 190.88h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'skhema_sobrana'); }
      })
      ObjectSvg.svg.querySelectorAll('ellipse').forEach((Element) => {
        // if (Element.getAttribute('rx') === '7.8') { addSvgElem(Index, Element, 'circle_1_win1'); }
        // if (Element.getAttribute('rx') === '16.12') { addSvgElem(Index, Element, 'circle_2_win1'); }
        if (Element.getAttribute('rx') === '7.8') { addSvgElem(Index, Element, 'circle_n_winVN'); }
        if (Element.getAttribute('rx') === '16.12') { addSvgElem(Index, Element, 'circle_n_winVN'); }
      })
      ObjectSvg.svg.querySelectorAll('rect').forEach((Element) => {
        if (Element.getAttribute('rx') === '4.14' && Element.getAttribute('x') === '169.84' && Element.getAttribute('y') === '121.6') { addSvgElem(Index, Element, 'btn_open_2'); }
        if (Element.getAttribute('x') === '167.75' && Element.getAttribute('y') === '119.86') { addSvgElem(Index, Element, 'btn_open_1'); }
        if (Element.getAttribute('x') === '167.75' && Element.getAttribute('y') === '81.35') { addSvgElem(Index, Element, 'btn_auto_1'); }
        if (Element.getAttribute('x') === '169.84' && Element.getAttribute('y') === '83.22') { addSvgElem(Index, Element, 'btn_auto_2'); }
        if (Element.getAttribute('x') === '257.34' && Element.getAttribute('y') === '83.22') { addSvgElem(Index, Element, 'btn_ruchnoy_2'); }
        if (Element.getAttribute('x') === '255.38' && Element.getAttribute('y') === '81.35') { addSvgElem(Index, Element, 'btn_ruchnoy_1'); }
        if (Element.getAttribute('x') === '257.34' && Element.getAttribute('y') === '121.6') { addSvgElem(Index, Element, 'btn_close_2'); }
        if (Element.getAttribute('x') === '255.38' && Element.getAttribute('y') === '119.86') { addSvgElem(Index, Element, 'btn_close_1'); }
        if (Element.getAttribute('x') === '170.17' && Element.getAttribute('y') === '151.08') { addSvgElem(Index, Element, 'btn_stop_2'); }
        if (Element.getAttribute('x') === '167.75' && Element.getAttribute('y') === '148.63') { addSvgElem(Index, Element, 'btn_stop_1'); }
        if (Element.getAttribute('x') === '169.92' && Element.getAttribute('y') === '203.95') { addSvgElem(Index, Element, 'btn_reset_2'); }
        if (Element.getAttribute('x') === '167.75' && Element.getAttribute('y') === '201.88') { addSvgElem(Index, Element, 'btn_reset_1'); }
        if (Element.getAttribute('x') === '169.92' && Element.getAttribute('y') === '257.04') { addSvgElem(Index, Element, 'btn_baypas_vsekh_blokirovok_2'); }
        if (Element.getAttribute('x') === '167.75' && Element.getAttribute('y') === '254.97') { addSvgElem(Index, Element, 'btn_baypas_vsekh_blokirovok_1'); }
        if (Element.getAttribute('x') === '14.72' && Element.getAttribute('y') === '255.8') { addSvgElem(Index, Element, 'block_open'); }
        if (Element.getAttribute('x') === '87.79' && Element.getAttribute('y') === '255.8') { addSvgElem(Index, Element, 'block_close'); }
      })
    }
    else if (ObjectSvg.name === 'O_n_k_na_VNK_posle_2') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'Закрыть') { addSvgElem(Index, Element, 'title_open_vn', 'start'); }
      })
    }
    else if (ObjectSvg.name === 'Kontrol_progara') {
      ObjectSvg.svg.querySelectorAll('rect').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '183.87') { addSvgElem(Index, Element, 'KP_c_1_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '234.71') { addSvgElem(Index, Element, 'KP_c_2_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '307.12') { addSvgElem(Index, Element, 'KP_c_3_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '356.04') { addSvgElem(Index, Element, 'KP_c_4_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '465.86') { addSvgElem(Index, Element, 'KP_c_5_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '516.7') { addSvgElem(Index, Element, 'KP_c_6_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '589.11') { addSvgElem(Index, Element, 'KP_c_7_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '638.03') { addSvgElem(Index, Element, 'KP_c_8_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '749.77') { addSvgElem(Index, Element, 'KP_c_9_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '800.6') { addSvgElem(Index, Element, 'KP_c_10_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '873.02') { addSvgElem(Index, Element, 'KP_c_11_16'); }
        if (Element.getAttribute('x') === '401.43' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_1'); }
        if (Element.getAttribute('x') === '479.6' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_2'); }
        if (Element.getAttribute('x') === '559.69' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_3'); }
        if (Element.getAttribute('x') === '637.38' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_4'); }
        if (Element.getAttribute('x') === '715.07' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_5'); }
        if (Element.getAttribute('x') === '796.12' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_6'); }
        if (Element.getAttribute('x') === '875.73' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_7'); }
        if (Element.getAttribute('x') === '950.54' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_8'); }
        if (Element.getAttribute('x') === '1032.07' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_9'); }
        if (Element.getAttribute('x') === '1109.76' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_10'); }
        if (Element.getAttribute('x') === '1186.49' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_11'); }
        if (Element.getAttribute('x') === '1264.18' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_12'); }
        if (Element.getAttribute('x') === '1341.4' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_13'); }
        if (Element.getAttribute('x') === '1422.92' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_14'); }
        if (Element.getAttribute('x') === '1501.57' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_15'); }
        if (Element.getAttribute('x') === '1578.31' && Element.getAttribute('y') === '921.93') { addSvgElem(Index, Element, 'KP_c_12_16'); }
      });
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, TextIndex) => {
        if (Element.getAttribute('d') === 'M1698.11 167.19h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_1_17'); }
        if (Element.getAttribute('d') === 'M1702.07 171.41h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_1_17'); }
        if (Element.getAttribute('d') === 'M1803.26 167.19H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_1_18'); }
        if (Element.getAttribute('d') === 'M1807.23 171.41h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_1_18'); }
        if (Element.getAttribute('d') === 'M1698.11 205.25h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_2_17'); }
        if (Element.getAttribute('d') === 'M1702.07 209.47h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_2_17'); }
        if (Element.getAttribute('d') === 'M1803.26 205.25H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_2_18'); }
        if (Element.getAttribute('d') === 'M1807.23 209.47h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_2_18'); }
        if (Element.getAttribute('d') === 'M1698.11 243.31h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_3_17'); }
        if (Element.getAttribute('d') === 'M1702.07 247.53h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_3_17'); }
        if (Element.getAttribute('d') === 'M1803.26 243.31H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_3_18'); }
        if (Element.getAttribute('d') === 'M1807.23 247.53h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_3_18'); }
        if (Element.getAttribute('d') === 'M1698.11 281.37h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_4_17'); }
        if (Element.getAttribute('d') === 'M1702.07 285.59h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_4_17'); }
        if (Element.getAttribute('d') === 'M1803.26 281.37H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_4_18'); }
        if (Element.getAttribute('d') === 'M1807.23 285.59h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_4_18'); }
        if (Element.getAttribute('d') === 'M1698.11 319.43h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_5_17'); }
        if (Element.getAttribute('d') === 'M1702.07 323.65h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_5_17'); }
        if (Element.getAttribute('d') === 'M1803.26 319.43H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_5_18'); }
        if (Element.getAttribute('d') === 'M1807.23 323.65h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_5_18'); }
        if (Element.getAttribute('d') === 'M1698.11 357.49h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_6_17'); }
        if (Element.getAttribute('d') === 'M1702.07 361.71h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_6_17'); }
        if (Element.getAttribute('d') === 'M1803.26 357.49H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_6_18'); }
        if (Element.getAttribute('d') === 'M1807.23 361.71h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_6_18'); }
        if (Element.getAttribute('d') === 'M1698.11 395.55h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_7_17'); }
        if (Element.getAttribute('d') === 'M1702.07 399.77h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_7_17'); }
        if (Element.getAttribute('d') === 'M1803.26 395.55H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_7_18'); }
        if (Element.getAttribute('d') === 'M1807.23 399.77h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_7_18'); }
        if (Element.getAttribute('d') === 'M1698.11 433.61h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_8_17'); }
        if (Element.getAttribute('d') === 'M1702.07 437.83h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_8_17'); }
        if (Element.getAttribute('d') === 'M1803.26 433.61H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_8_18'); }
        if (Element.getAttribute('d') === 'M1807.23 437.83h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_8_18'); }
        if (Element.getAttribute('d') === 'M1698.11 471.67h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_9_17'); }
        if (Element.getAttribute('d') === 'M1702.07 475.89h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_9_17'); }
        if (Element.getAttribute('d') === 'M1803.26 471.67H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_9_18'); }
        if (Element.getAttribute('d') === 'M1807.23 475.89h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_9_18'); }
        if (Element.getAttribute('d') === 'M1698.11 509.73h94.74V538h-94.74z') { addSvgElem(Index, Element, 'KP_c_10_17'); }
        if (Element.getAttribute('d') === 'M1702.07 513.95h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_10_17'); }
        if (Element.getAttribute('d') === 'M1803.26 509.73H1898V538h-94.74z') { addSvgElem(Index, Element, 'KP_c_10_18'); }
        if (Element.getAttribute('d') === 'M1807.23 513.95h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_10_18'); }
        if (Element.getAttribute('d') === 'M1698.11 547.79h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_11_17'); }
        if (Element.getAttribute('d') === 'M1702.07 552.01h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_11_17'); }
        if (Element.getAttribute('d') === 'M1803.26 547.79H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_11_18'); }
        if (Element.getAttribute('d') === 'M1807.23 552.01h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_11_18'); }
        if (Element.getAttribute('d') === 'M1698.11 585.85h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_12_17'); }
        if (Element.getAttribute('d') === 'M1702.07 590.07h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_12_17'); }
        if (Element.getAttribute('d') === 'M1803.26 585.85H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_12_18'); }
        if (Element.getAttribute('d') === 'M1807.23 590.07h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_12_18'); }
        if (Element.getAttribute('d') === 'M1698.11 623.91h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_13_1'); }
        if (Element.getAttribute('d') === 'M1702.07 628.13h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_13_1'); }
        if (Element.getAttribute('d') === 'M1803.26 623.91H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_13_2'); }
        if (Element.getAttribute('d') === 'M1807.23 628.13h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_13_2'); }
        if (Element.getAttribute('d') === 'M1698.11 661.97h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_14_1'); }
        if (Element.getAttribute('d') === 'M1702.07 666.19h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_14_1'); }
        if (Element.getAttribute('d') === 'M1803.26 661.97H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_14_2'); }
        if (Element.getAttribute('d') === 'M1807.23 666.19h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_14_2'); }
        if (Element.getAttribute('d') === 'M1698.11 700.03h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_15_1'); }
        if (Element.getAttribute('d') === 'M1702.07 704.25h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_15_1'); }
        if (Element.getAttribute('d') === 'M1803.26 700.03H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_15_2'); }
        if (Element.getAttribute('d') === 'M1807.23 704.25h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_15_2'); }
        if (Element.getAttribute('d') === 'M1698.11 738.09h94.74v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_16_1'); }
        if (Element.getAttribute('d') === 'M1702.07 742.31h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_16_1'); }
        if (Element.getAttribute('d') === 'M1803.26 738.09H1898v28.27h-94.74z') { addSvgElem(Index, Element, 'KP_c_16_2'); }
        if (Element.getAttribute('d') === 'M1807.23 742.31h86.8v19.84h-86.8z') { addSvgElem(Index, Element, 'KP_c_16_2'); }
      });
    }
    else if (ObjectSvg.name === 'O_n_k_na_VNK') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '60') { addSvgElem(Index, Element, 'time_full_vnk_text'); }
        if (Element.innerHTML === '5') { addSvgElem(Index, Element, 'Kontrolnoye_vremy_avar_zakrytiya'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 18.462 -82.543)') { addSvgElem(Index, Element, 'btn_avto_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 98.702 -83.619)') { addSvgElem(Index, Element, 'btn_ruchnoy_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 6.957 -44.328)') { addSvgElem(Index, Element, 'btn_open_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 95.213 -44.328)') { addSvgElem(Index, Element, 'btn_close_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 60.33 -13.703)') { addSvgElem(Index, Element, 'btn_stop_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 34.648 22.737)') { addSvgElem(Index, Element, 'btn_sbros_oshibki_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 22.101 51.553)') { addSvgElem(Index, Element, 'btn_avar_close_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 4.096 89.94)') { addSvgElem(Index, Element, 'btn_baypas_vsekh_blokirovok_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -160.503 -55.473)') { addSvgElem(Index, Element, 'avto_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -161.113 -30.017)') { addSvgElem(Index, Element, 'open_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -161.17 -.814)') { addSvgElem(Index, Element, 'skhema_sobrana_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -161.566 27.744)') { addSvgElem(Index, Element, 'kontrgruz_prizhat_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -155.99 90.394)') { addSvgElem(Index, Element, 'block_open_text'); }
        if (Element.hasAttribute('transform') && Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -82.331 90.394)') { addSvgElem(Index, Element, 'block_close_text'); }
      });
      ObjectSvg.svg.querySelectorAll('rect').forEach((Element, TextIndex) => {
        if (Element.getAttribute('x') && Element.getAttribute('x') === '167.75' && Element.getAttribute('y') && Element.getAttribute('y') === '81.35') { addSvgElem(Index, Element, 'btn_avto'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '169.84' && Element.getAttribute('y') && Element.getAttribute('y') === '83.22') { addSvgElem(Index, Element, 'btn_avto'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '257.34' && Element.getAttribute('y') && Element.getAttribute('y') === '83.22') { addSvgElem(Index, Element, 'btn_ruchnoy'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '255.38' && Element.getAttribute('y') && Element.getAttribute('y') === '81.35') { addSvgElem(Index, Element, 'btn_ruchnoy'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '257.34' && Element.getAttribute('y') && Element.getAttribute('y') === '121.6') { addSvgElem(Index, Element, 'btn_close'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '255.38' && Element.getAttribute('y') && Element.getAttribute('y') === '119.86') { addSvgElem(Index, Element, 'btn_close'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '167.75' && Element.getAttribute('y') && Element.getAttribute('y') === '119.86') { addSvgElem(Index, Element, 'btn_open'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '169.84' && Element.getAttribute('y') && Element.getAttribute('y') === '121.6') { addSvgElem(Index, Element, 'btn_open'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '170.17' && Element.getAttribute('y') && Element.getAttribute('y') === '151.08') { addSvgElem(Index, Element, 'btn_stop'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '167.75' && Element.getAttribute('y') && Element.getAttribute('y') === '148.63') { addSvgElem(Index, Element, 'btn_stop'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '170.05' && Element.getAttribute('y') && Element.getAttribute('y') === '189.2') { addSvgElem(Index, Element, 'btn_sbros_oshibki'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '167.75' && Element.getAttribute('y') && Element.getAttribute('y') === '186.8') { addSvgElem(Index, Element, 'btn_sbros_oshibki'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '169.92' && Element.getAttribute('y') && Element.getAttribute('y') === '218.79') { addSvgElem(Index, Element, 'btn__close'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '167.75' && Element.getAttribute('y') && Element.getAttribute('y') === '216.72') { addSvgElem(Index, Element, 'btn_avar_close'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '169.92' && Element.getAttribute('y') && Element.getAttribute('y') === '257.04') { addSvgElem(Index, Element, 'btn_baypas_vsekh_blokirovok'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '167.75' && Element.getAttribute('y') && Element.getAttribute('y') === '254.97') { addSvgElem(Index, Element, 'btn_baypas_vsekh_blokirovok'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '14.72' && Element.getAttribute('y') && Element.getAttribute('y') === '255.8') { addSvgElem(Index, Element, 'block_open'); }
        if (Element.getAttribute('x') && Element.getAttribute('x') === '87.79' && Element.getAttribute('y') && Element.getAttribute('y') === '255.8') { addSvgElem(Index, Element, 'block_close'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, TextIndex) => {
        if (Element.getAttribute('d') === 'M9.78 108.49h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'avto'); }
        if (Element.getAttribute('d') === 'M9.78 135.11h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'open'); }
        if (Element.getAttribute('d') === 'M9.78 164.06h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'skhema_sobrana'); }
        if (Element.getAttribute('d') === 'M9.78 192.48h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'kontrgruz_prizhat'); }
      })
    }
    else if (ObjectSvg.name === 'O_p_n_na_k_na-o_2_na_VNK') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === 'клапан на возд.гор. 24') { Element.innerHTML = 'клапан на возд.гор. 34'; }
        if (Element.innerHTML === 'клапан из смеш. газе 22 ') { Element.innerHTML = 'клапан на смеш. газе 32 '; }
        if (Element.innerHTML === 'пересадки') { Element.innerHTML = 'перекидок'; }
        if (Element.innerHTML === 'клапан из смеш. газе 16') { Element.innerHTML = 'клапан на смеш. газе 16'; }
        if (Element.innerHTML === 'клапан газа 13') { Element.innerHTML = 'клапан на газе 13'; }
        if (Element.innerHTML === 'Закрыть отсечной' && Element.getAttribute('transform') === 'matrix(.9988 0 0 1 -319.261 283.161)') { Element.innerHTML = 'Закрыть отделительный'; Element.setAttribute('x', '403'); }

        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '180' && TextIndex === 48) { addSvgElem(Index, Element, 'Ustanovit_klapany_15_i_23_na_ugol_zazhig'); }
        if (Element.innerHTML === '65' && TextIndex === 49) { addSvgElem(Index, Element, 'Zakryt_otsechnoy_klapan_iz_smesh_gaze_22'); }
        if (Element.innerHTML === '180' && TextIndex === 50) { addSvgElem(Index, Element, 'Zakryt_otsechnoy_klapan_iz_smesh_gaze_16'); }
        if (Element.innerHTML === '5' && TextIndex === 51) { addSvgElem(Index, Element, 'Kontrol_davl_azota_v_kollektore'); }
        if (Element.innerHTML === '27' && TextIndex === 52) { addSvgElem(Index, Element, 'Otkryt_klapan_produvki_azotom_24'); }
        if (Element.innerHTML === '15' && TextIndex === 53) { addSvgElem(Index, Element, 'Ozhidaniye_vremeni_produvki_azotom'); }
        if (Element.innerHTML === '27' && TextIndex === 54) { addSvgElem(Index, Element, 'Zakryt_klapan_produvki_azotom_24'); }
        if (Element.innerHTML === '5' && TextIndex === 55) { addSvgElem(Index, Element, 'Kontrol_raskhoda_azota_pri_produvki'); }
        if (Element.innerHTML === '27' && TextIndex === 56) { addSvgElem(Index, Element, 'Zakryt_otdelitelnyy_klapan_gaza_13'); }
        if (Element.innerHTML === '20' && TextIndex === 57) { addSvgElem(Index, Element, 'Ozhidaniye_vremeni_ventilyatsii_vozdukhom'); }
        if (Element.innerHTML === '35' && TextIndex === 58) { addSvgElem(Index, Element, 'Zakryt_otsechnoy_klapan_na_vozd_gor_24'); }
        if (Element.innerHTML === '27' && TextIndex === 59) { addSvgElem(Index, Element, 'Zakryt_otsechnoy_klapan_na_vozd_gor_17'); }
        if (Element.innerHTML === '27' && TextIndex === 60) { addSvgElem(Index, Element, 'Zakryt_dymovoy_klapan_11'); }
        if (Element.innerHTML === '27' && TextIndex === 61) { addSvgElem(Index, Element, 'Zakryt_dymovoy_klapan_12'); }
        if (Element.innerHTML === '27' && TextIndex === 62) { addSvgElem(Index, Element, 'Otkryt_sbrosnoy_klapan_13'); }
        if (Element.innerHTML === '0') { addSvgElem(Index, Element, 'Vremya_do_kontsa_shaga'); }

        if (Element.innerHTML === 'ВН1 Перекидка из Нагрева в Отделение') { addSvgElem(Index, Element, 'Title_window_peric_nagrevotd'); }

        if (Element.getAttribute('transform') == 'matrix(.9988 0 0 1 -170.582 -209.832)') { addSvgElem(Index, Element, 'text_132'); }
        if (Element.getAttribute('transform') == 'matrix(.9988 0 0 1 -109.787 -209.832)') { addSvgElem(Index, Element, 'text_116'); }
        if (Element.getAttribute('transform') == 'matrix(.9988 0 0 1 -43.62 -210.215)') { addSvgElem(Index, Element, 'text_124'); }
        if (Element.getAttribute('transform') == 'matrix(.9988 0 0 1 23.125 -209.832)') { addSvgElem(Index, Element, 'text_113'); }
        if (Element.getAttribute('transform') == 'matrix(.9988 0 0 1 92.167 -208.104)') { addSvgElem(Index, Element, 'text_134'); }
        if (Element.getAttribute('transform') == 'matrix(.9988 0 0 1 163.51 -208.104)') { addSvgElem(Index, Element, 'text_117'); }
        if (Element.getAttribute('transform') == 'matrix(.9988 0 0 1 234.852 -208.104)') { addSvgElem(Index, Element, 'text_111'); }
        if (Element.getAttribute('transform') == 'matrix(.9988 0 0 1 295.839 -208.104)') { addSvgElem(Index, Element, 'text_112'); }

        if (Element.innerHTML == '111' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 -160.064 -367.476)') { addSvgElem(Index, Element, 'text_Nagrev_111'); }
        if (Element.innerHTML == '112' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 -98.694 -368.244)') { addSvgElem(Index, Element, 'text_Nagrev_112'); }
        if (Element.innerHTML == '113' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 -31.57 -368.244)') { addSvgElem(Index, Element, 'text_Nagrev_113'); }
        if (Element.innerHTML == '121') { addSvgElem(Index, Element, 'text_Nagrev_121'); }
        if (Element.innerHTML == '117' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 175.174 -368.244)') { addSvgElem(Index, Element, 'text_Nagrev_117'); }
        if (Element.innerHTML == '143') { addSvgElem(Index, Element, 'text_Nagrev_143'); }
        if (Element.innerHTML == '110') { addSvgElem(Index, Element, 'text_Nagrev_110'); }
        if (Element.innerHTML == '124' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 102.295 -368.244)') { addSvgElem(Index, Element, 'text_Nagrev_124_1'); }
        if (Element.innerHTML == '124' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 -160.064 -326.962)') { addSvgElem(Index, Element, 'text_Nagrev_124_2'); }
        if (Element.innerHTML == '123') { addSvgElem(Index, Element, 'text_Nagrev_123'); }
        if (Element.innerHTML == '114') { addSvgElem(Index, Element, 'text_Nagrev_114'); }
        if (Element.innerHTML == '127') { addSvgElem(Index, Element, 'text_Nagrev_127'); }
        if (Element.innerHTML == '132') { addSvgElem(Index, Element, 'text_Nagrev_132_down'); }
        if (Element.innerHTML == '116') { addSvgElem(Index, Element, 'text_Nagrev_116_down'); }
        if (Element.innerHTML == '124' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 -32.69 -244.012)') { addSvgElem(Index, Element, 'text_Nagrev_124_down'); }
        if (Element.innerHTML == '113' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 34.051 -244.012)') { addSvgElem(Index, Element, 'text_Nagrev_113_down'); }
        if (Element.innerHTML == '134') { addSvgElem(Index, Element, 'text_Nagrev_134_down'); }
        if (Element.innerHTML == '117') { addSvgElem(Index, Element, 'text_Nagrev_117_down'); }
        if (Element.innerHTML == '111' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 245.015 -244.012)') { addSvgElem(Index, Element, 'text_Nagrev_111_down'); }
        if (Element.innerHTML == '112' && Element.getAttribute('transform') == 'matrix(.9988 0 0 1 307.346 -244.012)') { addSvgElem(Index, Element, 'text_Nagrev_112_down'); }

      });
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, TextIndex) => {
        if (Element.getAttribute('d') === 'M158.11 187.58h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_1'); }
        if (Element.getAttribute('d') === 'M158.11 212.92h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_2'); }
        if (Element.getAttribute('d') === 'M158.11 238.99h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_3'); }
        if (Element.getAttribute('d') === 'M158.11 264.34h26.69v17.46h-26.69z') { addSvgElem(Index, Element, 'shag_4'); }
        if (Element.getAttribute('d') === 'M158.11 291.14h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_5'); }
        if (Element.getAttribute('d') === 'M158.11 316.49h26.69v17.46h-26.69z') { addSvgElem(Index, Element, 'shag_6'); }
        if (Element.getAttribute('d') === 'M158.11 342.56h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_7'); }
        if (Element.getAttribute('d') === 'M158.11 367.91h26.69v17.46h-26.69z') { addSvgElem(Index, Element, 'shag_8'); }
        if (Element.getAttribute('d') === 'M158.11 393.74h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_9'); }
        if (Element.getAttribute('d') === 'M158.11 419.08h26.69v17.47h-26.69z') { addSvgElem(Index, Element, 'shag_10'); }
        if (Element.getAttribute('d') === 'M158.11 446.13h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_11'); }
        if (Element.getAttribute('d') === 'M158.11 471.47h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_12'); }
        if (Element.getAttribute('d') === 'M158.11 497.06h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_13'); }
        if (Element.getAttribute('d') === 'M158.11 522.41h26.7v17.46h-26.7z') { addSvgElem(Index, Element, 'shag_14'); }
        if (Element.getAttribute('d') === 'M158.11 548.48h26.7v15.89h-26.7z') { addSvgElem(Index, Element, 'shag_15'); }
        if (Element.getAttribute('d') === 'M186.96 157.66h36.36v26.67h-36.36z') { addSvgElem(Index, Element, 'c_5_4'); }
        if (Element.getAttribute('d') === 'M223.29 157.66h40.84v26.67h-40.84z') { addSvgElem(Index, Element, 'c_5_5'); }
        if (Element.getAttribute('d') === 'M264.26 157.14h42.39v26.67h-42.39z') { addSvgElem(Index, Element, 'c_5_6'); }
        if (Element.getAttribute('d') === 'M307.14 157.66h40.46v26.67h-40.46z') { addSvgElem(Index, Element, 'c_5_7'); }
        if (Element.getAttribute('d') === 'M347.07 157.66h48.7v26.67h-48.7z') { addSvgElem(Index, Element, 'c_5_8'); }
        if (Element.getAttribute('d') === 'M396.03 157.66h40.63v26.67h-40.63z') { addSvgElem(Index, Element, 'c_5_9'); }
        if (Element.getAttribute('d') === 'M436.4 157.66h44.79v26.67H436.4z') { addSvgElem(Index, Element, 'c_5_10'); }
        if (Element.getAttribute('d') === 'M481.19 157.66h35.42v26.67h-35.42z') { addSvgElem(Index, Element, 'c_5_11'); }
        if (Element.getAttribute('d') === 'M187 51.17h36.2v26.17H187z') { addSvgElem(Index, Element, 'c_1_4'); }
        if (Element.getAttribute('d') === 'M223.72 51.17h40.62v26.17h-40.62z') { addSvgElem(Index, Element, 'c_1_5'); }
        if (Element.getAttribute('d') === 'M264.35 51.17h42.18v26.17h-42.18z') { addSvgElem(Index, Element, 'c_1_6'); }
        if (Element.getAttribute('d') === 'M306.53 51.17h40.63v26.17h-40.63z') { addSvgElem(Index, Element, 'c_1_7'); }
        if (Element.getAttribute('d') === 'M347.81 51.17h47.79v26.17h-47.79z') { addSvgElem(Index, Element, 'c_1_8'); }
        if (Element.getAttribute('d') === 'M395.72 51.17H437v26.17h-41.28z') { addSvgElem(Index, Element, 'c_1_9'); }
        if (Element.getAttribute('d') === 'M437.13 51.17h44.27v26.17h-44.27z') { addSvgElem(Index, Element, 'c_1_10'); }
        if (Element.getAttribute('d') === 'M481.4 51.17h35.55v26.17H481.4z') { addSvgElem(Index, Element, 'c_1_11'); }
        if (Element.getAttribute('d') === 'M187 77.61h36.2v26.17H187z') { addSvgElem(Index, Element, 'c_2_4'); }
        if (Element.getAttribute('d') === 'M223.72 77.61h40.62v26.17h-40.62z') { addSvgElem(Index, Element, 'c_2_5'); }
        if (Element.getAttribute('d') === 'M264.35 77.61h42.18v26.17h-42.18z') { addSvgElem(Index, Element, 'c_2_6'); }
        if (Element.getAttribute('d') === 'M306.53 77.61h40.63v26.17h-40.63z') { addSvgElem(Index, Element, 'c_2_7'); }
        if (Element.getAttribute('d') === 'M348.06 77.48h88.28v51.3h-88.28z') { addSvgElem(Index, Element, 'c_2_8'); }
        if (Element.getAttribute('d') === 'M436.87 77.48h79.94v51.04h-79.94z') { addSvgElem(Index, Element, 'c_2_9'); }
        if (Element.getAttribute('d') === 'M187 104.3h36.2v24.08H187z') { addSvgElem(Index, Element, 'c_3_4'); }
        if (Element.getAttribute('d') === 'M223.72 104.3h40.62v24.08h-40.62z') { addSvgElem(Index, Element, 'c_3_5'); }
        if (Element.getAttribute('d') === 'M264.35 104.3h83.2v24.08h-83.2z') { addSvgElem(Index, Element, 'c_3_6'); }

        if (Element.getAttribute('d') === 'M296.01 249.63h57.56v42.23h-57.56z') { addSvgElem(Index, Element, 'rect_132'); }
        if (Element.getAttribute('d') === 'M353.54 249.63h64.67v42.23h-64.67z') { addSvgElem(Index, Element, 'rect_116'); }
        if (Element.getAttribute('d') === 'M418.41 248.8h67.12v42.23h-67.12z') { addSvgElem(Index, Element, 'rect_124'); }
        if (Element.getAttribute('d') === 'M486.31 249.63h64.06v42.23h-64.06z') { addSvgElem(Index, Element, 'rect_113'); }
        if (Element.getAttribute('d') === 'M549.53 249.63h77.11v42.23h-77.11z') { addSvgElem(Index, Element, 'rect_134'); }
        if (Element.getAttribute('d') === 'M627.05 249.63h64.32v42.23h-64.32z') { addSvgElem(Index, Element, 'rect_117'); }
        if (Element.getAttribute('d') === 'M690.96 249.63h70.92v42.23h-70.92z') { addSvgElem(Index, Element, 'rect_111'); }
        if (Element.getAttribute('d') === 'M761.88 249.63h56.08v42.23h-56.08z') { addSvgElem(Index, Element, 'rect_112'); }

      })
    }
    else if (ObjectSvg.name === 'O_p_n_na_k_p_na_VNK') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
      });
      ObjectSvg.svg.querySelectorAll('rect').forEach((Element, TextIndex) => {
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '46.2') { addSvgElem(Index, Element, 'avariynoye_otdeleniye'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '44.59') { addSvgElem(Index, Element, 'avariynoye_otdeleniye'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '65.62') { addSvgElem(Index, Element, 'otdeleniye_nagrev'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '64.01') { addSvgElem(Index, Element, 'otdeleniye_nagrev'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '85.04') { addSvgElem(Index, Element, 'nagrev_otdeleniye_2'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '83.42') { addSvgElem(Index, Element, 'nagrev_otdeleniye_2'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '104.45') { addSvgElem(Index, Element, 'otdeleniye_dutyo'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '102.84') { addSvgElem(Index, Element, 'otdeleniye_dutyo'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '123.87') { addSvgElem(Index, Element, 'dutyo_otdeleniye'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '122.25') { addSvgElem(Index, Element, 'dutyo_otdeleniye'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '143.28') { addSvgElem(Index, Element, 'otdeleniye-otdeleniye_2'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '141.67') { addSvgElem(Index, Element, 'otdeleniye-otdeleniye_2'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '162.7') { addSvgElem(Index, Element, 'otdeleniye-2_otdeleniye'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '161.08') { addSvgElem(Index, Element, 'otdeleniye-2_otdeleniye'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '215.05') { addSvgElem(Index, Element, 'kl_10'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '213.44') { addSvgElem(Index, Element, 'kl_10'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '233.09') { addSvgElem(Index, Element, 'kl_11'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '231.48') { addSvgElem(Index, Element, 'kl_11'); }
        if (Element.getAttribute('x') === '19.12' && Element.getAttribute('y') === '251.14') { addSvgElem(Index, Element, 'kl_12'); }
        if (Element.getAttribute('x') === '17.13' && Element.getAttribute('y') === '249.52') { addSvgElem(Index, Element, 'kl_12'); }

        if (Element.getAttribute('x') == 4029 && Element.getAttribute('y') == 49105 && Element.getAttribute('rx') == 1230) { addSvgElem(Index, Element, 'kl_11_rect'); }
        if (Element.getAttribute('x') == 4029 && Element.getAttribute('y') == 9733 && Element.getAttribute('rx') == 1230) { addSvgElem(Index, Element, 'avarin_otd_rect'); }
        if (Element.getAttribute('x') == 4029 && Element.getAttribute('y') == 13825 && Element.getAttribute('rx') == 1230) { addSvgElem(Index, Element, 'otdel_nagrev'); }
        if (Element.getAttribute('x') == 4029 && Element.getAttribute('y') == 17915 && Element.getAttribute('rx') == 1230) { addSvgElem(Index, Element, 'nagrev_otd_2_rect'); }
        if (Element.getAttribute('x') == 4029 && Element.getAttribute('y') == 22005 && Element.getAttribute('rx') == 1230) { addSvgElem(Index, Element, 'otdel_dute'); }
        if (Element.getAttribute('x') == 4029 && Element.getAttribute('y') == 26095 && Element.getAttribute('rx') == 1230) { addSvgElem(Index, Element, 'dute_otdel'); }
        if (Element.getAttribute('x') == 4029 && Element.getAttribute('y') == 30185 && Element.getAttribute('rx') == 1230) { addSvgElem(Index, Element, 'otdel_otdel2'); }
        if (Element.getAttribute('x') == 4029 && Element.getAttribute('y') == 34275 && Element.getAttribute('rx') == 1230) { addSvgElem(Index, Element, 'otd2_otd_rect'); }

      })
    }
    else if (ObjectSvg.name === 'Osnovnye_parametry_DP') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '2.30') { addSvgElem(Index, Element, 'c_1_1', 'start'); }
        if (Element.innerHTML === '6003') { addSvgElem(Index, Element, 'c_1_2', 'start'); }
        if (Element.innerHTML === '128') { addSvgElem(Index, Element, 'c_1_3', 'start'); }
        if (Element.innerHTML === '112') { addSvgElem(Index, Element, 'c_1_4', 'start'); }
        if (Element.innerHTML === '113') { addSvgElem(Index, Element, 'c_1_5', 'start'); }
        if (Element.innerHTML === '124') { addSvgElem(Index, Element, 'c_1_6', 'start'); }
        if (Element.innerHTML === '48' && TextIndex === 38) { addSvgElem(Index, Element, 'c_1_7', 'start'); }
        if (Element.innerHTML === '0.24') { addSvgElem(Index, Element, 'c_2_1', 'start'); }
        if (Element.innerHTML === '1210') { addSvgElem(Index, Element, 'c_2_2', 'start'); }
        if (Element.innerHTML === '63' && TextIndex === 15) { addSvgElem(Index, Element, 'c_2_3', 'start'); }
        if (Element.innerHTML === '63' && TextIndex === 21) { addSvgElem(Index, Element, 'c_2_4', 'start'); }
        if (Element.innerHTML === '69') { addSvgElem(Index, Element, 'c_2_5', 'start'); }
        if (Element.innerHTML === '64' && TextIndex === 33) { addSvgElem(Index, Element, 'c_2_6', 'start'); }
        if (Element.innerHTML === '48' && TextIndex === 39) { addSvgElem(Index, Element, 'c_2_7', 'start'); }
        if (Element.innerHTML === '1.80') { addSvgElem(Index, Element, 'c_3_1', 'start'); }
        if (Element.innerHTML === '1.60') { addSvgElem(Index, Element, 'c_3_2', 'start'); }
        if (Element.innerHTML === '55' && TextIndex === 16) { addSvgElem(Index, Element, 'c_3_3', 'start'); }
        if (Element.innerHTML === '5' && TextIndex === 22) { addSvgElem(Index, Element, 'c_3_4', 'start'); Element.innerHTML = '59'; }
        if (Element.innerHTML === '9' && TextIndex === 23) { Element.innerHTML = ''; }
        if (Element.innerHTML === '61') { addSvgElem(Index, Element, 'c_3_5', 'start'); }
        if (Element.innerHTML === '55' && TextIndex === 34) { addSvgElem(Index, Element, 'c_3_6', 'start'); }
        if (Element.innerHTML === '2071') { addSvgElem(Index, Element, 'c_3_7', 'start'); }
        if (Element.innerHTML === '1.55') { addSvgElem(Index, Element, 'c_4_1', 'start'); }
        if (Element.innerHTML === '9.7') { addSvgElem(Index, Element, 'c_4_2', 'start'); }
        if (Element.innerHTML === '62' && TextIndex === 17) { addSvgElem(Index, Element, 'c_4_3', 'start'); }
        if (Element.innerHTML === '6' && TextIndex === 24) { addSvgElem(Index, Element, 'c_4_4', 'start'); Element.innerHTML = '63'; }
        if (Element.innerHTML === '3' && TextIndex === 25) { Element.innerHTML = ''; }
        if (Element.innerHTML === '62' && TextIndex === 30) { addSvgElem(Index, Element, 'c_4_5', 'start'); }
        if (Element.innerHTML === '6' && TextIndex === 35) { addSvgElem(Index, Element, 'c_4_6', 'start'); Element.innerHTML = '60'; }
        if (Element.innerHTML === '0' && TextIndex === 36) { Element.innerHTML = ''; }
        if (Element.innerHTML === '4.12') { addSvgElem(Index, Element, 'c_5_1', 'start'); }
        if (Element.innerHTML === '30.1') { addSvgElem(Index, Element, 'c_5_2', 'start'); }
        if (Element.innerHTML === '6' && TextIndex === 18) { addSvgElem(Index, Element, 'c_5_3', 'start'); Element.innerHTML = '62'; }
        if (Element.innerHTML === '2' && TextIndex === 19) { Element.innerHTML = ''; }
        if (Element.innerHTML === '57') { addSvgElem(Index, Element, 'c_5_4', 'start'); }
        if (Element.innerHTML === '64' && TextIndex === 31) { addSvgElem(Index, Element, 'c_5_5', 'start'); }
        if (Element.innerHTML === '65') { addSvgElem(Index, Element, 'c_5_6', 'start'); }
        if (Element.innerHTML === '-0') { addSvgElem(Index, Element, 'c_6_1', 'start'); }
        if (Element.innerHTML === '30007') { addSvgElem(Index, Element, 'c_6_2', 'start'); }
        if (Element.innerHTML === '25.3') { addSvgElem(Index, Element, 'c_6_3', 'start'); }
        if (Element.innerHTML === '21.8') { addSvgElem(Index, Element, 'c_6_4', 'start'); }
        if (Element.innerHTML === '8.4') { addSvgElem(Index, Element, 'c_6_5', 'start'); }
        if (Element.innerHTML === '43.5') { addSvgElem(Index, Element, 'c_6_6', 'start'); }
        if (Element.innerHTML === '0.0') { addSvgElem(Index, Element, 'c_6_7', 'start'); }
        if (Element.innerHTML === '603873') { addSvgElem(Index, Element, 'c_6_8', 'start'); }
        if (Element.innerHTML === '217.4') { addSvgElem(Index, Element, 'c_7_1', 'start'); }
        if (Element.innerHTML === '8.6') { addSvgElem(Index, Element, 'c_7_2', 'start'); }
        if (Element.innerHTML === '31943') { addSvgElem(Index, Element, 'c_7_3', 'start'); }
        if (Element.innerHTML === '45.21') { addSvgElem(Index, Element, 'c_7_4', 'start'); }
        if (Element.innerHTML === '0.80') { addSvgElem(Index, Element, 'c_7_5', 'start'); }
        if (Element.innerHTML === '0.45') { addSvgElem(Index, Element, 'c_7_6', 'start'); }
        if (Element.innerHTML === '0.86') { addSvgElem(Index, Element, 'c_7_7', 'start'); }
        if (Element.innerHTML === '0' && TextIndex === 52) { addSvgElem(Index, Element, 'c_7_8', 'start'); }
        if (Element.innerHTML === '1433') { addSvgElem(Index, Element, 'c_7_9', 'start'); }
        if (Element.innerHTML === '5052') { addSvgElem(Index, Element, 'c_8_1', 'start'); }
        if (Element.innerHTML === '40' && TextIndex === 53) { addSvgElem(Index, Element, 'c_8_2', 'start'); }
        if (Element.innerHTML === '40' && TextIndex === 54) { addSvgElem(Index, Element, 'c_8_3', 'start'); }
        if (Element.innerHTML === '40' && TextIndex === 55) { addSvgElem(Index, Element, 'c_8_4', 'start'); }
      });
    }
    else if (ObjectSvg.name === 'bzu') {
      // Sergey
      ObjectSvg.svg.querySelectorAll('ellipse').forEach((Element, ElemIndex) => {
        if (Element.getAttribute('cx') === '540.29' && Element.getAttribute('cy') === '234.41' && Element.getAttribute('rx') === '19.47' && Element.getAttribute('ry') === '17.71') { addSvgElem(Index, Element, 'left_ellipse'); }
      })
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '17,1' && TextIndex === 323) { addSvgElem(Index, Element, 'B1_ves'); }
        if (Element.innerHTML === '24,8' && TextIndex === 324) { addSvgElem(Index, Element, 'B2_ves'); }
        if (Element.innerHTML === '17,1' && TextIndex === 325) { addSvgElem(Index, Element, 'T3_ves'); }
        if (Element.innerHTML === '91,5' && TextIndex === 326) { addSvgElem(Index, Element, 'T2_ves'); }
        if (Element.innerHTML === '-1,0' && TextIndex === 327) { addSvgElem(Index, Element, 'T1_ves'); }
        if (Element.innerHTML === '1' && TextIndex === 317) { addSvgElem(Index, Element, 'B1_nomerstr'); }
        if (Element.innerHTML === '0,80' && TextIndex === 293) { addSvgElem(Index, Element, 'tekushy_level'); }
        if (Element.innerHTML === '0,80' && TextIndex === 292) { addSvgElem(Index, Element, 'given_level'); }
        if (Element.innerHTML === '20' && TextIndex === 436) { addSvgElem(Index, Element, 'counder podachi_za tekuschuyu smenu'); }
        if (Element.innerHTML === '81' && TextIndex === 437) { addSvgElem(Index, Element, 'counder podachi_za past smenu'); }
        if (Element.innerHTML === '1' && TextIndex === 318) { addSvgElem(Index, Element, 'T3_nomerstr'); }
        if (Element.innerHTML === '2' && TextIndex === 319) { addSvgElem(Index, Element, 'T2_nomerstr'); }
        if (Element.innerHTML === '3' && TextIndex === 320) { addSvgElem(Index, Element, 'T1_nomerstr'); }
        if (Element.innerHTML === '1' && TextIndex === 312) { addSvgElem(Index, Element, 'B1_nomermatr'); }
        if (Element.innerHTML === '1' && TextIndex === 313) { addSvgElem(Index, Element, 'B2_nomermatr'); }
        if (Element.innerHTML === '1' && TextIndex === 314) { addSvgElem(Index, Element, 'T3_nomermatr'); }
        if (Element.innerHTML === '1' && TextIndex === 315) { addSvgElem(Index, Element, 'T2_nomermatr'); }
        if (Element.innerHTML === '1' && TextIndex === 316) { addSvgElem(Index, Element, 'T1_nomermatr'); }
        if (Element.innerHTML === '2,24' && TextIndex === 77) { addSvgElem(Index, Element, 'B2_Dp bunker'); }
        if (Element.innerHTML === '0,00' && TextIndex === 78) { addSvgElem(Index, Element, 'B2_P compens'); }
        if (Element.innerHTML === '31' && TextIndex === 79) { addSvgElem(Index, Element, 'B2_time vygruski'); }
        if (Element.innerHTML === '28' && TextIndex === 80) { addSvgElem(Index, Element, 'B2_time vygruski raschyotnoe'); }
        if (Element.innerHTML === '10' && TextIndex === 81) { addSvgElem(Index, Element, 'B2_time sbrosa P'); }
        if (Element.innerHTML === '9' && TextIndex === 82) { addSvgElem(Index, Element, 'B2_time nabora P'); }
        if (Element.innerHTML === '24,8' && TextIndex === 83) { addSvgElem(Index, Element, 'B2_ves s HP'); }
        if (Element.innerHTML === '31' && TextIndex === 84) { addSvgElem(Index, Element, 'B2_vibratciya'); }
        if (Element.innerHTML === '0,57' && TextIndex === 269) { addSvgElem(Index, Element, 'radar 1'); }
        if (Element.innerHTML === '0,99' && TextIndex === 270) { addSvgElem(Index, Element, 'radar 2'); }
        if (Element.innerHTML === '-1,67' && TextIndex === 271) { addSvgElem(Index, Element, 'mexan'); }
        if (Element.innerHTML === '0' && TextIndex === 264) { addSvgElem(Index, Element, 'do zapuska mexan min'); }
        if (Element.innerHTML === '0' && TextIndex === 265) { addSvgElem(Index, Element, 'do zapuska mexan max'); }
        if (Element.innerHTML === '33' && TextIndex === 240) { addSvgElem(Index, Element, 'time do vydochi porchii'); }
        if (Element.innerHTML === '2' && TextIndex === 448) { addSvgElem(Index, Element, 'Kol-vo porchiy na konveere'); }
        if (Element.innerHTML === '3,89' && TextIndex === 114) { addSvgElem(Index, Element, 'Vtorichnye vyskazyvaniia_P_B2'); }
        if (Element.innerHTML === '34' && TextIndex === 115) { addSvgElem(Index, Element, 'Vtorichnye vyskazyvaniia_T_B2'); }
        if (Element.innerHTML === '0' && TextIndex === 116) { addSvgElem(Index, Element, 'Vtorichnye vyskazyvaniia_F_B2', 'end'); }
        if (Element.innerHTML === '5106' && TextIndex === 126) { addSvgElem(Index, Element, 'Vtorichnye vyskazyvaniia_F_B1'); }
        if (Element.innerHTML === '34' && TextIndex === 125) { addSvgElem(Index, Element, 'Vtorichnye vyskazyvaniia_T_B1'); }
        if (Element.innerHTML === '3,88' && TextIndex === 124) { addSvgElem(Index, Element, 'Vtorichnye vyskazyvaniia_P_B1'); }
        if (Element.innerHTML === '5,64' && TextIndex === 137) { addSvgElem(Index, Element, 'ochistka sedel_P'); }
        if (Element.innerHTML === '0,00' && TextIndex === 98) { addSvgElem(Index, Element, 'B1_dp Bunker'); }
        if (Element.innerHTML === '2,26' && TextIndex === 99) { addSvgElem(Index, Element, 'B1_P compes'); }
        if (Element.innerHTML === '46' && TextIndex === 100) { addSvgElem(Index, Element, 'B1_vremy vygruski'); }
        if (Element.innerHTML === '101' && TextIndex === 101) { addSvgElem(Index, Element, 'B1_vremy vygruski raschoytnoe '); }
        if (Element.innerHTML === '11' && TextIndex === 102) { addSvgElem(Index, Element, 'B1_vremy sbrosa P '); }
        if (Element.innerHTML === '8' && TextIndex === 103) { addSvgElem(Index, Element, 'B1_vremy nabora P '); }
        if (Element.innerHTML === '17,1' && TextIndex === 104) { addSvgElem(Index, Element, 'B1_ves s SHP'); }
        if (Element.innerHTML === '3' && TextIndex === 105) { addSvgElem(Index, Element, 'B1_vibratciya'); }
        if (Element.innerHTML === '197' && TextIndex === 148) { addSvgElem(Index, Element, 'V linii P_B1'); }
        if (Element.innerHTML === '148' && TextIndex === 149) { addSvgElem(Index, Element, 'V linii P_B2'); }
        if (Element.innerHTML === '240' && TextIndex === 152) { addSvgElem(Index, Element, 'V linii dP_B1'); }
        if (Element.innerHTML === '273' && TextIndex === 150) { addSvgElem(Index, Element, 'V linii dP_B2'); }
        if (Element.innerHTML === '192' && TextIndex === 153) { addSvgElem(Index, Element, 'V sisteme vzveh_B1'); }
        if (Element.innerHTML === '165' && TextIndex === 151) { addSvgElem(Index, Element, 'V sisteme vzveh_B2'); }
        if (Element.innerHTML === '4' && TextIndex === 451) { addSvgElem(Index, Element, 'stanciia'); }
        if (Element.innerHTML === '36,6' && TextIndex === 185) { addSvgElem(Index, Element, 'ugol naklona_tekushiy'); }
        if (Element.innerHTML === '2,29' && TextIndex === 173) { addSvgElem(Index, Element, 'rashody u davlenia v gazoprovode_P1'); }
        if (Element.innerHTML === '2,29' && TextIndex === 175) { addSvgElem(Index, Element, 'rashody u davlenia v gazoprovode_P3'); }
        if (Element.innerHTML === '2,30' && TextIndex === 174) { addSvgElem(Index, Element, 'rashody u davlenia v gazoprovode_P2'); }
        if (Element.innerHTML === '2,29' && TextIndex === 176) { addSvgElem(Index, Element, 'rashody u davlenia v gazoprovode_P4'); }
        if (Element.innerHTML === '0' && TextIndex === 180) { addSvgElem(Index, Element, 'rashody u davlenia v gazoprovode_F1'); }
        if (Element.innerHTML === '149' && TextIndex === 179) { addSvgElem(Index, Element, 'rashody u davlenia v gazoprovode_F2'); }
        if (Element.innerHTML === '132' && TextIndex === 178) { addSvgElem(Index, Element, 'rashody u davlenia v gazoprovode_F3'); }
        if (Element.innerHTML === '142' && TextIndex === 177) { addSvgElem(Index, Element, 'rashody u davlenia v gazoprovode_F4'); }
        if (Element.innerHTML === '35,1' && TextIndex === 186) { addSvgElem(Index, Element, 'ugol naklona_zadanyi'); }
        if (Element.innerHTML === '238,8' && TextIndex === 187) { addSvgElem(Index, Element, 'gradusow ugol'); }
        if (Element.innerHTML === '35,6' && TextIndex === 7) { addSvgElem(Index, Element, 'HZ1'); }
        if (Element.innerHTML === '1,4' && TextIndex === 8) { addSvgElem(Index, Element, 'HZ2'); }
        if (Element.innerHTML === '1' && TextIndex === 36) { addSvgElem(Index, Element, 'prochent2'); }
        if (Element.innerHTML === '52' && TextIndex === 38) { addSvgElem(Index, Element, 'prochent1'); }
        if (Element.innerHTML === '88' && TextIndex === 56) { addSvgElem(Index, Element, 'verx'); }
        if (Element.innerHTML === '2,25' && TextIndex === 16) { addSvgElem(Index, Element, 'matrix 1 str 1_kgc'); }
        if (Element.innerHTML === '0,00' && TextIndex === 29) { addSvgElem(Index, Element, 'matrix 1 str 14_kgc'); }
        if (Element.innerHTML === '0,1' && TextIndex === 30) { addSvgElem(Index, Element, 'matrix 1 str 14_T'); }
        if (Element.innerHTML === '0,0' && TextIndex === 31) { addSvgElem(Index, Element, 'matrix 1 str 14_M'); }
        if (Element.innerHTML === '16,6' && TextIndex === 18) { addSvgElem(Index, Element, 'matrix 1 str 1_M'); }
        if (Element.innerHTML === '8,1' && TextIndex === 17) { addSvgElem(Index, Element, 'matrix 1 str 1_T'); }
        if (Element.innerHTML === 'Вес в бункере больше заданного в матрице' && TextIndex === 241) { addSvgElem(Index, Element, 'pervoe v tabliche'); }
        if (Element.innerHTML === 'Нет готовности БЗУ послет т.2 + таймер' && TextIndex === 242) { addSvgElem(Index, Element, 'vtoroe v tabliche'); }
        if (Element.innerHTML === 'Вес порции отличается от типового веса' && TextIndex === 243) { addSvgElem(Index, Element, 'tretie v tabliche'); }
        if (Element.innerHTML === 'Запрет машиниста ШП' && TextIndex === 244) { addSvgElem(Index, Element, 'hetvyortoe v tabliche'); }
        if (Element.innerHTML === 'Снимай запрет пора грузить' && TextIndex === 245) { addSvgElem(Index, Element, 'pitoe v tabliche'); }
        if (Element.innerHTML === '№ строки не совпадает с запрошенным' && TextIndex === 246) { addSvgElem(Index, Element, 'hestoe v tabliche'); }
        if (Element.innerHTML === 'Нет поступления след.порции по запросу' && TextIndex === 247) { addSvgElem(Index, Element, 'sedimoe v tabliche'); }
        if (Element.innerHTML === 'Ошибочный тип материала' && TextIndex === 248) { addSvgElem(Index, Element, 'vosimoe v tabliche'); }
        if (Element.innerHTML === 'Выдача порции с ШП без запроса от БЗУ' && TextIndex === 249) { addSvgElem(Index, Element, 'devatoe v tabliche'); }
        if (Element.innerHTML === 'в работе' && TextIndex === 253) { addSvgElem(Index, Element, 'v rabote', 'start'); }
        if (Element.innerHTML === 'Откл' && TextIndex === 207) { addSvgElem(Index, Element, 'ustochnik ypravlenia_otkl'); }
        if (Element.innerHTML === 'Мест' && TextIndex === 208) { addSvgElem(Index, Element, 'ustochnik ypravlenia_mest'); }
        if (Element.innerHTML === 'ЧМИ' && TextIndex === 209) { addSvgElem(Index, Element, 'ustochnik ypravlenia_HMI'); }
        if (Element.innerHTML === 'Аварийный' && TextIndex === 452) { addSvgElem(Index, Element, 'c2_Avariyniy'); }
        if (Element.innerHTML === 'останов' && TextIndex === 453) { addSvgElem(Index, Element, 'c2_ostanovrf'); }
        if (Element.innerHTML === 'Ошибка БЗУ' && TextIndex === 455) { addSvgElem(Index, Element, 'c2_ohibka BZU'); }
        if (Element.innerHTML === 'Откл' && TextIndex === 217) { addSvgElem(Index, Element, 'tek rejim_Otkl'); }
        if (Element.innerHTML === 'М' && TextIndex === 216) { addSvgElem(Index, Element, 'tek rejim_M'); }
        if (Element.innerHTML === 'По времени' && TextIndex === 439) { addSvgElem(Index, Element, 'tip vygruski_Po vremeni'); }
        if (Element.innerHTML === 'Кольцо' && TextIndex === 440) { addSvgElem(Index, Element, 'tip vygruski_koliho'); }
        if (Element.innerHTML === 'Сектор' && TextIndex === 441) { addSvgElem(Index, Element, 'tip vygruski_sector'); }
        if (Element.innerHTML === 'Точка' && TextIndex === 442) { addSvgElem(Index, Element, 'tip vygruski_Tohka'); }
        if (Element.innerHTML === 'По весу') { addSvgElem(Index, Element, 'tip vygruski_Po vesy'); }
        if (Element.innerHTML === 'Спираль') { addSvgElem(Index, Element, 'tip vygruski_Spiral'); }
        if (Element.innerHTML === 'Пульт' && TextIndex === 206) { addSvgElem(Index, Element, 'ustochnik ypravlenia_Pult'); }
        if (Element.innerHTML === 'А' && TextIndex === 215) { addSvgElem(Index, Element, 'tek rejim_A'); }
        if (Element.innerHTML === 'Д' && TextIndex === 214) { addSvgElem(Index, Element, 'tek rejim_D'); }
        if (Element.innerHTML === 'Достигнут заданный' && TextIndex === 273) { addSvgElem(Index, Element, 'text_dosZadYrov1', 'start'); }
        if (Element.innerHTML === 'уровень' && TextIndex === 274) { addSvgElem(Index, Element, 'text_dosZadYrov2'); Element.setAttribute('y', '504.79') }
        if (Element.innerHTML === 'Работа по ' && TextIndex === 266) { addSvgElem(Index, Element, 'rab_max_ur', 'start'); Element.innerHTML = 'Работа по MAХ уровню'; }
        if (Element.innerHTML === 'MA' && TextIndex === 268) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'Х уровню' && TextIndex === 267) { Element.innerHTML = ''; }
        if (Element.innerHTML === '1' && TextIndex === 321) { addSvgElem(Index, Element, 'B2_nomerstr'); Element.innerHTML = '14'; }
        if (Element.innerHTML === '4' && TextIndex === 322) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'Ош.мех.зонда' && TextIndex === 272) { addSvgElem(Index, Element, 'oh_mex_zonda', 'start'); }
        if (Element.innerHTML === '0' && TextIndex === 345) { addSvgElem(Index, Element, 'str2_P_1'); }
        if (Element.innerHTML === '0' && TextIndex === 346) { addSvgElem(Index, Element, 'str2_P_2'); }
        if (Element.innerHTML === '0' && TextIndex === 347) { addSvgElem(Index, Element, 'str2_P_3'); }
        if (Element.innerHTML === '22' && TextIndex === 348) { addSvgElem(Index, Element, 'str2_P_4'); }
        if (Element.innerHTML === '21' && TextIndex === 349) { addSvgElem(Index, Element, 'str2_P_5'); }
        if (Element.innerHTML === '19' && TextIndex === 350) { addSvgElem(Index, Element, 'str2_P_6'); }
        if (Element.innerHTML === '15' && TextIndex === 351) { addSvgElem(Index, Element, 'str2_P_7'); }
        if (Element.innerHTML === '13' && TextIndex === 352) { addSvgElem(Index, Element, 'str2_P_8'); }
        if (Element.innerHTML === '10' && TextIndex === 353) { addSvgElem(Index, Element, 'str2_P_9'); }
        if (Element.innerHTML === '0' && TextIndex === 354) { addSvgElem(Index, Element, 'str2_P_10'); }
        if (Element.innerHTML === '0' && TextIndex === 355) { addSvgElem(Index, Element, 'str2_P_11'); }
        if (Element.innerHTML === '91,7' && TextIndex === 356) { addSvgElem(Index, Element, 'str2_P_12'); }
        if (Element.innerHTML === '0' && TextIndex === 396) { addSvgElem(Index, Element, 'str1_K_1'); }
        if (Element.innerHTML === '0' && TextIndex === 397) { addSvgElem(Index, Element, 'str1_K_2'); }
        if (Element.innerHTML === '0' && TextIndex === 398) { addSvgElem(Index, Element, 'str1_K_3'); }
        if (Element.innerHTML === '13' && TextIndex === 410) { addSvgElem(Index, Element, 'str1_K_4'); }
        if (Element.innerHTML === '13' && TextIndex === 411) { addSvgElem(Index, Element, 'str1_K_5'); }
        if (Element.innerHTML === '13' && TextIndex === 412) { addSvgElem(Index, Element, 'str1_K_6'); }
        if (Element.innerHTML === '11' && TextIndex === 413) { addSvgElem(Index, Element, 'str1_K_7'); }
        if (Element.innerHTML === '10' && TextIndex === 408) { addSvgElem(Index, Element, 'str1_K_8'); }
        if (Element.innerHTML === '10' && TextIndex === 409) { addSvgElem(Index, Element, 'str1_K_9'); }
        if (Element.innerHTML === '9' && TextIndex === 414) { addSvgElem(Index, Element, 'str1_K_10'); }
        if (Element.innerHTML === '21' && TextIndex === 415) { addSvgElem(Index, Element, 'str1_K_11'); }
        if (Element.innerHTML === '17,1' && TextIndex === 416) { addSvgElem(Index, Element, 'str1_K_12'); }
        if (Element.innerHTML === '0' && TextIndex === 399) { addSvgElem(Index, Element, 'str51_SM_1'); }
        if (Element.innerHTML === '0' && TextIndex === 400) { addSvgElem(Index, Element, 'str51_SM_2'); }
        if (Element.innerHTML === '0' && TextIndex === 401) { addSvgElem(Index, Element, 'str51_SM_3'); }
        if (Element.innerHTML === '0' && TextIndex === 402) { addSvgElem(Index, Element, 'str51_SM_4'); }
        if (Element.innerHTML === '0' && TextIndex === 403) { addSvgElem(Index, Element, 'str51_SM_5'); }
        if (Element.innerHTML === '0' && TextIndex === 404) { addSvgElem(Index, Element, 'str51_SM_6'); }
        if (Element.innerHTML === '1000' && TextIndex === 417) { addSvgElem(Index, Element, 'str51_SM_7'); }
        if (Element.innerHTML === '0' && TextIndex === 405) { addSvgElem(Index, Element, 'str51_SM_8'); }
        if (Element.innerHTML === '0' && TextIndex === 406) { addSvgElem(Index, Element, 'str51_SM_9'); }
        if (Element.innerHTML === '0' && TextIndex === 407) { addSvgElem(Index, Element, 'str51_SM_10'); }
        if (Element.innerHTML === '14,0' && TextIndex === 418) { addSvgElem(Index, Element, 'str51_SM_11'); }
        // Sergey
        if (Element.innerHTML === '4' && Element.getAttribute('transform') === 'matrix(1.06968 0 0 1 290.773 -182.401)') { addSvgElem(Index, Element, 'zaprosi_shp_stroka'); }
        if (Element.innerHTML === '263' && Element.getAttribute('transform') === 'matrix(1.10402 0 0 1 269.054 -254.938)') { addSvgElem(Index, Element, 'dlina_porcii'); }
        if (Element.innerHTML === 'К' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 666.134 101.028)') { addSvgElem(Index, Element, 'B1_Tip_text'); }
        if (Element.innerHTML === 'См' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 675.968 127.83)') { addSvgElem(Index, Element, 'B2_Tip_text'); }
        if (Element.innerHTML === 'К' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 666.134 152.977)') { addSvgElem(Index, Element, 'T3_Tip_text'); }
        if (Element.innerHTML === 'Р' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 668.038 181.991)') { addSvgElem(Index, Element, 'T2_Tip_text'); }
        if (Element.innerHTML === 'К' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 666.134 209.123)') { addSvgElem(Index, Element, 'T1_Tip_text'); }
        if (Element.innerHTML === 'К' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 666.787 101.845)') { addSvgElem(Index, Element, 'B1_Tip_text'); }
        if (Element.innerHTML === 'См' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 676.593 128.454)') { addSvgElem(Index, Element, 'B2_Tip_text'); }
        if (Element.innerHTML === 'К' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 666.787 153.793)') { addSvgElem(Index, Element, 'T3_Tip_text'); }
        if (Element.innerHTML === 'Р' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 668.736 182.805)') { addSvgElem(Index, Element, 'T2_Tip_text'); }
        if (Element.innerHTML === 'К' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 666.787 209.94)') { addSvgElem(Index, Element, 'T1_Tip_text'); }
        if (Element.innerHTML === 'См' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 379.982 440.594)') { addSvgElem(Index, Element, 'str51_down'); }
        if (Element.innerHTML === 'См' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 380.485 441.096)') { addSvgElem(Index, Element, 'str51_down'); }
        if (Element.innerHTML === 'К' && Element.getAttribute('transform') === 'matrix(1.14419 0 0 1 -611.004 -249.71)') { addSvgElem(Index, Element, 'left_ellipse_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.10719 0 0 1 -550.241 -220.669)') { addSvgElem(Index, Element, 'left_matrix_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.10719 0 0 1 -337.526 -221.799)') { addSvgElem(Index, Element, 'right_matrix_text'); }
        // Ilay
        if (Element.getAttribute('transform') === 'matrix(1.10402 0 0 1 -342.755 -366.684)' && Element.innerHTML === '1') { addSvgElem(Index, Element, 'tr_3_str_1_'); }
        if (Element.getAttribute('transform') === 'matrix(1.10402 0 0 1 -5.843 -309.553)' && Element.innerHTML === '2') { addSvgElem(Index, Element, 'tr_2_str_2_'); }
        if (Element.getAttribute('transform') === 'matrix(1.24252 0 0 1 -560.095 -104.792)' && Element.innerHTML === 'Пуст') { addSvgElem(Index, Element, 'r_pust'); }
        if (Element.getAttribute('transform') === 'matrix(1.05071 0 0 1 500.85 365.119)' && Element.innerHTML === '1') { addSvgElem(Index, Element, 'v_pech_str3_str'); }
        if (Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 371.317 283.192)' && Element.innerHTML === 'Р') { addSvgElem(Index, Element, 'na_conveer_s1_bukca'); }
        if (Element.innerHTML === 'К' && Element.getAttribute('transform') === 'matrix(1.21021 0 0 1 371.317 361.589)') { addSvgElem(Index, Element, 'str1_down'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.getAttribute('d') === 'm580.77 489.13-17.86.71 31.34 19.03 2.13-36.55-9.63 13.55-7.83-29.26-15.95 8.55z') { addSvgElem(Index, Element, 'arrow_left'); }
        if (Element.getAttribute('d') === 'm674.81 491.6 18.84.75-33.05 20.06-2.25-38.54 10.16 14.29 8.25-30.85 16.82 9.01z') { addSvgElem(Index, Element, 'arrow_right'); }
        if (Element.getAttribute('d') === 'm592.97 494.11-7.25 5.93-15.86-23.26 7.24-5.93z') { addSvgElem(Index, Element, 'left_rect_yellow_arrow'); }
        if (Element.getAttribute('d') === 'm585.21 465.26 6.76 6.48-21.22 18.52-6.76-6.49z') { addSvgElem(Index, Element, 'left_rect_down_arrow'); }
        if (Element.getAttribute('d') === 'm660.2 494.63 7.24 5.93 15.87-23.26-7.24-5.93z') { addSvgElem(Index, Element, 'right_rect_yellow_arrow'); }
        if (Element.getAttribute('d') === 'm669.98 466-6.41 6.15 20.12 17.56 6.41-6.15z') { addSvgElem(Index, Element, 'right_rect_down_arrow'); }
        if (Element.getAttribute('d') === 'M1438.84 676.74h82.67c1.33 0 2.42 1.09 2.42 2.42v24.62c0 1.34-1.09 2.42-2.42 2.42h-82.67c-1.33 0-2.42-1.08-2.42-2.42v-24.62c0-1.33 1.09-2.42 2.42-2.42z') { addSvgElem(Index, Element, 'btn_Gryzit_1'); }
        if (Element.getAttribute('d') === 'M1442.22 679.35h75.75c1.61 0 2.92 1.52 2.92 3.38v16.84c0 1.87-1.31 3.39-2.92 3.39h-75.75c-1.61 0-2.92-1.52-2.92-3.39v-16.84c0-1.86 1.31-3.38 2.92-3.38z') { addSvgElem(Index, Element, 'btn_Gryzit_2'); }
        if (Element.getAttribute('d') === 'M1141.16 944.7h180.03v35.59h-180.03z') { addSvgElem(Index, Element, 'bg_dosZadYrov'); }
        if (Element.getAttribute('d') === 'M1411.31 719.45h71.07v14.65h-71.07z') { addSvgElem(Index, Element, 'bg_vRabote'); }
        if (Element.getAttribute('d') === 'M1174.1 351.97h180.02c3.82 0 6.94 2.12 6.94 4.71v23.47c0 2.6-3.12 4.71-6.94 4.71H1174.1c-3.83 0-6.95-2.11-6.95-4.71v-23.47c0-2.59 3.12-4.71 6.95-4.71z') { addSvgElem(Index, Element, 'btn_ZapSledPorc_border'); }
        if (Element.getAttribute('d') === 'M1174.1 388.4h180.02c3.82 0 6.94 2.11 6.94 4.71v23.47c0 2.59-3.12 4.71-6.94 4.71H1174.1c-3.83 0-6.95-2.12-6.95-4.71v-23.47c0-2.6 3.12-4.71 6.95-4.71z') { addSvgElem(Index, Element, 'btn_SledPorc_border'); }
        if (Element.getAttribute('d') === 'M595 531.65h67.8c1.63 0 2.96 1.16 2.96 2.58v27.37c0 1.42-1.33 2.58-2.96 2.58H595c-1.63 0-2.97-1.16-2.97-2.58v-27.37c0-1.42 1.34-2.58 2.97-2.58z') { addSvgElem(Index, Element, 'btn_Pause_border'); }
        if (Element.getAttribute('d') === 'M1442.99 225.13h42.91v30.77h-42.91z') { addSvgElem(Index, Element, 'tekushiy rezym_A'); }
        if (Element.getAttribute('d') === 'M1426.19 292.7h10.87v10.87h-10.87z') { addSvgElem(Index, Element, 'scorosti_1'); }
        if (Element.getAttribute('d') === 'M1526.41 225.13h41.87v30.77h-41.87z') { addSvgElem(Index, Element, 'tekushiy rezym_D'); }
        if (Element.getAttribute('d') === 'M1574.55 125.03h16.62c.89 0 1.61.73 1.61 1.62v15.23c0 .89-.72 1.61-1.61 1.61h-16.62c-.89 0-1.61-.72-1.61-1.61v-15.23c0-.89.72-1.62 1.61-1.62z') { addSvgElem(Index, Element, 'Avtomat'); }
        if (Element.getAttribute('d') === 'M1841.38 574.27h56.39v22.17h-56.39z') { addSvgElem(Index, Element, 'B1_Tip'); }
        if (Element.getAttribute('d') === 'M1583.78 318.25c-2.18 3.12-1.39 7.44 1.77 9.66 3.16 2.21 7.49 1.47 9.68-1.65 2.19-3.12 1.39-7.45-1.77-9.66s-7.49-1.47-9.68 1.65z') { addSvgElem(Index, Element, 'T_1'); }
        if (Element.getAttribute('d') === 'M1841.38 601.07h56.39v22.17h-56.39z') { addSvgElem(Index, Element, 'B2_Tip'); }
        if (Element.getAttribute('d') === 'M1841.38 626.82h56.39v22.17h-56.39z') { addSvgElem(Index, Element, 'T3_Tip'); }
        if (Element.getAttribute('d') === 'M1841.38 626.82h56.39v22.17h-56.39z') { addSvgElem(Index, Element, 'T2_Tip'); }
        if (Element.getAttribute('d') === 'M1841.49 682.4h56.09v22.06h-56.09z') { addSvgElem(Index, Element, 'T1_Tip'); }
        if (Element.getAttribute('d') === 'M1562.15 735.28h28.89v50.66h-28.89z') { addSvgElem(Index, Element, 'P_str2'); }
        if (Element.getAttribute('d') === 'M1562.15 816.5h28.89v50.66h-28.89z') { addSvgElem(Index, Element, 'K_str1'); }
        if (Element.getAttribute('d') === 'M1562.15 893.75h28.89v50.66h-28.89z') { addSvgElem(Index, Element, 'SM_str51'); }
        if (Element.getAttribute('d') === 'M1562.15 893.75h28.89v50.66h-28.89z') { addSvgElem(Index, Element, 'zelyniy primoygolinik_Radar2'); }
        if (Element.getAttribute('d') === 'M1186.13 747.75h10.57v29.24h-10.57z') { addSvgElem(Index, Element, 'zelyniy primoygolinik_Radar1'); }
        if (Element.getAttribute('d') === 'M1382.99 860.13h12.66v11.51h-12.66z') { addSvgElem(Index, Element, 'hesti m'); }
        if (Element.getAttribute('d') === 'M1383.14 880.95h12.56v11.51h-12.56z') { addSvgElem(Index, Element, 'dvadcati semi m'); }
        if (Element.getAttribute('d') === 'M1428.1 869.55h12.35v11.46h-12.35z') { addSvgElem(Index, Element, 'mex.zond na huxte'); }
        if (Element.getAttribute('d') === 'M1362.05 747.75h11.3v144.03h-11.3z') { addSvgElem(Index, Element, 'mexan'); }
        if (Element.getAttribute('d') === 'm567.61 203-7.53 10.18 41.01 21.19 10.3-8.92z') { addSvgElem(Index, Element, 'leviy'); }
        if (Element.getAttribute('d') === 'm646.19 224.67 5.65 10.43 45.8-21.8-8.8-9.24z') { addSvgElem(Index, Element, 'praviy'); }
        if (Element.getAttribute('d') === 'M1401.93 743.36h12.61v11.46h-12.61z') { addSvgElem(Index, Element, 'prodolhenie'); }
        if (Element.getAttribute('d') === 'M46.23 842.24h83.58c1.78 0 3.23 1.45 3.23 3.23v16.06c0 1.77-1.45 3.22-3.23 3.22H46.23c-1.78 0-3.22-1.45-3.22-3.22v-16.06c0-1.78 1.44-3.23 3.22-3.23z') { addSvgElem(Index, Element, 'datchik 1'); }
        if (Element.getAttribute('d') === 'M46.23 876.16h83.58c1.78 0 3.23 1.44 3.23 3.22v16.06c0 1.78-1.45 3.22-3.23 3.22H46.23c-1.78 0-3.22-1.44-3.22-3.22v-16.06c0-1.78 1.44-3.22 3.22-3.22z') { addSvgElem(Index, Element, 'datchik 2'); }
        if (Element.getAttribute('d') === 'M46.23 909.23h83.58c1.78 0 3.23 1.45 3.23 3.23v16.06c0 1.77-1.45 3.22-3.23 3.22H46.23c-1.78 0-3.22-1.45-3.22-3.22v-16.06c0-1.78 1.44-3.23 3.22-3.23z') { addSvgElem(Index, Element, 'datchik 3'); }
        if (Element.getAttribute('d') === 'M46.23 942.94h83.58c1.78 0 3.23 1.44 3.23 3.22v16.06c0 1.78-1.45 3.22-3.23 3.22H46.23c-1.78 0-3.22-1.44-3.22-3.22v-16.06c0-1.78 1.44-3.22 3.22-3.22z') { addSvgElem(Index, Element, 'datchik 4'); }
        if (Element.getAttribute('d') === 'M788.53 789.96h116.73v22.8H788.53z') { addSvgElem(Index, Element, 'po vesy'); }
        if (Element.getAttribute('d') === 'm907.81 759.15-2.55 2.34H788.53v22.8l-2.56 2.34v-27.48z') { addSvgElem(Index, Element, 'po vremeni'); }
        if (Element.getAttribute('d') === 'M788.53 827.64h116.73v22.8H788.53z') { addSvgElem(Index, Element, 'spiral'); }
        if (Element.getAttribute('d') === 'M788.53 856.32h116.73v22.8H788.53z') { addSvgElem(Index, Element, 'kolico'); }
        if (Element.getAttribute('d') === 'M788.53 885.21h116.73v22.8H788.53z') { addSvgElem(Index, Element, 'sector'); }
        if (Element.getAttribute('d') === 'M788.53 914.1h116.73v22.8H788.53z') { addSvgElem(Index, Element, 'tochka'); }
        if (Element.getAttribute('d') === 'M588.39 384.43h9.55v48.23h-9.55z') { addSvgElem(Index, Element, 'zelyniy primoygolinik_smehivateli'); }
        if (Element.getAttribute('d') === 'M588.39 250.04h9.55v182.63h-9.55z') { addSvgElem(Index, Element, 'beliy primoygolinik_smehivateli'); }
        if (Element.getAttribute('d') === 'M0 0h791.23v8.2H0z') { addSvgElem(Index, Element, 'konveer_verhniy cast'); }
        if (Element.getAttribute('d') === 'M700.62 170.12h37.62v25.5h-37.62z') { addSvgElem(Index, Element, 'klapon oh.VGUK2'); }
        if (Element.getAttribute('d') === 'M528.73 169.75h37.62v25.5h-37.62z') { addSvgElem(Index, Element, 'klapon oh.VGUK1'); }
        if (Element.getAttribute('d') === 'M414.701 337.069h5.691l17.017 16.415h-5.692z') { addSvgElem(Index, Element, 'verxniy ventili_NKV-1'); }
        if (Element.getAttribute('d') === 'M1485.9 225.13h40.51v30.77h-40.51z') { addSvgElem(Index, Element, 'tekushiy rezym_M'); }
        if (Element.getAttribute('d') === 'M1568.28 225.13h56.21v30.77h-56.21z') { addSvgElem(Index, Element, 'tekushiy rezym_Otkl'); }
        if (Element.getAttribute('d') === 'M1292.27 147.78h71.59V184h-71.59z') { addSvgElem(Index, Element, 'ustochnik upravlenia_Pulit'); }
        if (Element.getAttribute('d') === 'M1221.1 147.78h71.18V184h-71.18z') { addSvgElem(Index, Element, 'ustochnik upravlenia_Mest'); }
        if (Element.getAttribute('d') === 'M1149.92 147.78h71.17V184h-71.17z') { addSvgElem(Index, Element, 'ustochnik upravlenia_Otkl'); }
        if (Element.getAttribute('d') === 'M1363.87 147.78h73.27V184h-73.27z') { addSvgElem(Index, Element, 'ustochnik upravlenia_Hmi'); }
        if (Element.getAttribute('d') === 'm641.56 867.4 49.56-28.13c.63-.36 1.27-.49 1.99-.4 1.65.2 2.17 1.04 1.51 2.54-.3.66-.74 1.14-1.37 1.5l-43.64 24.49h-8.05z') { addSvgElem(Index, Element, 'strelka'); }
        if (Element.getAttribute('d') === 'M813.52 340.96h16.46v1.38h15.76v1.2h-1.07v2.07h-15.63v-1.32h-16.71v-1.32h1.26z') { addSvgElem(Index, Element, 'verhniy klapon_Azot'); }
        if (Element.getAttribute('d') === 'M670.03 420.58h55.32c1.33 0 2.42 1.05 2.42 2.34v24.86c0 1.29-1.09 2.35-2.42 2.35h-55.32c-1.34 0-2.42-1.06-2.42-2.35v-24.86c0-1.29 1.08-2.34 2.42-2.34z') { addSvgElem(Index, Element, 'vigruzca pravo'); }
        if (Element.getAttribute('d') === 'M531.13 426.36h45.86c.98 0 1.77.44 1.77 2v16.03c0 1.57-.8 1.81-1.77 1.81h-45.86c-.98 0-1.77-.22-1.77-1.79v-16.36c0-1.56.79-1.69 1.77-1.69z') { addSvgElem(Index, Element, 'vigruzca levo'); }
        if (Element.getAttribute('d') === 'M743.47 225.11h45.87c.97 0 1.77.43 1.77 2v16.03c0 1.56-.8 1.8-1.77 1.8h-45.87c-.97 0-1.77-.21-1.77-1.78V226.8c0-1.57.8-1.69 1.77-1.69z') { addSvgElem(Index, Element, 'zagruzka pravo'); }
        if (Element.getAttribute('d') === 'M465.25 225.82h45.87c.97 0 1.76.43 1.76 1.99v16.04c0 1.56-.79 1.8-1.76 1.8h-45.87c-.97 0-1.77-.22-1.77-1.78v-16.36c0-1.57.8-1.69 1.77-1.69z') { addSvgElem(Index, Element, 'zagruzka levo'); }
        if (Element.getAttribute('d') === 'm925.47 366.18-11.89 17.54-11.89-17.54c-.17-.25-.65-.84-.5-1.11.14-.27.86-.16 1.17-.16h22.44c.3 0 .91-.08 1.05.19.15.27-.21.82-.38 1.08z') { addSvgElem(Index, Element, 'klNKP-2_1'); }
        if (Element.getAttribute('d') === 'm913.58 383.72 11.89 17.54c.17.26.67.88.53 1.15-.14.27-.9.12-1.2.12h-22.44c-.31 0-1.21.11-1.35-.16-.14-.27.51-.85.68-1.11l11.89-17.54z') { addSvgElem(Index, Element, 'klNKP-2_2'); }
        if (Element.getAttribute('d') === 'm841.96 366.18-11.89 17.54-11.89-17.54c-.17-.25-.64-.84-.5-1.11.15-.27.87-.16 1.18-.16h22.43c.31 0 .91-.08 1.06.19.14.27-.22.82-.39 1.08z') { addSvgElem(Index, Element, 'klNKB-2_1'); }
        if (Element.getAttribute('d') === 'm830.07 383.72 11.89 17.54c.17.26.68.88.53 1.15-.14.27-.89.12-1.2.12h-22.43c-.31 0-1.21.11-1.36-.16-.14-.27.51-.85.68-1.11l11.89-17.54z') { addSvgElem(Index, Element, 'klNKB-2_2'); }
        if (Element.getAttribute('d') === 'm755.69 478.32 17.54 11.89c.25.17.88.68 1.15.53.27-.14.12-.89.12-1.2v-22.43c0-.31.11-1.21-.16-1.36-.27-.14-.86.51-1.11.68l-17.54 11.89z') { addSvgElem(Index, Element, 'kl.Oh.NGUK2_1'); }
        if (Element.getAttribute('d') === 'm738.15 490.21 17.54-11.89-17.54-11.89c-.26-.17-.84-.64-1.11-.5-.28.15-.16.87-.16 1.18v22.43c0 .31-.08.91.19 1.05.27.15.82-.21 1.08-.38z') { addSvgElem(Index, Element, 'kl.Oh.NGUK2_2'); }
        if (Element.getAttribute('d') === 'm840.69 270.35-11.89 17.54-11.89-17.54c-.17-.26-.65-.84-.5-1.12.14-.27.86-.15 1.17-.15h22.43c.31 0 .92-.09 1.06.19.14.27-.21.82-.38 1.08z') { addSvgElem(Index, Element, 'klBK-2_1'); }
        if (Element.getAttribute('d') === 'm828.8 287.89 11.89 17.54c.17.25.67.87.53 1.15-.15.27-.9.11-1.21.11h-22.43c-.31 0-1.21.12-1.35-.15-.15-.28.51-.86.68-1.11l11.89-17.54z') { addSvgElem(Index, Element, 'klBK-2_2'); }
        if (Element.getAttribute('d') === 'm719.43 182.87 17.54 11.89c.25.17.88.68 1.15.53.27-.14.12-.89.12-1.2v-22.43c0-.31.11-1.21-.16-1.36-.27-.14-.86.51-1.11.68l-17.54 11.89z') { addSvgElem(Index, Element, 'kl.Oh.BGYK2_1'); }
        if (Element.getAttribute('d') === 'm701.89 194.76 17.54-11.89-17.54-11.89c-.26-.17-.84-.64-1.11-.5-.28.15-.16.87-.16 1.18v22.43c0 .31-.09.91.19 1.06.27.14.82-.21 1.08-.39z') { addSvgElem(Index, Element, 'kl.Oh.BGYK2_2'); }
        if (Element.getAttribute('d') === 'm565.08 194.39-17.55-11.89 17.55-11.89c.25-.17.84-.65 1.11-.5.27.14.15.86.15 1.17v22.43c0 .31.09.91-.18 1.06-.28.14-.83-.21-1.08-.38z') { addSvgElem(Index, Element, 'kl.Oh.VGYK1_1'); }
        if (Element.getAttribute('d') === 'm547.53 182.5-17.54 11.89c-.25.17-.87.67-1.15.53-.27-.15-.11-.9-.11-1.21v-22.43c0-.31-.12-1.21.15-1.35.28-.15.86.51 1.11.68l17.54 11.89z') { addSvgElem(Index, Element, 'kl.Oh.VGYK1_2'); }
        if (Element.getAttribute('d') === 'm415.55 270.35 11.88 17.54 11.89-17.54c.18-.26.65-.84.5-1.12-.14-.27-.86-.15-1.17-.15h-22.43c-.31 0-.91-.09-1.06.19-.14.27.21.82.39 1.08z') { addSvgElem(Index, Element, 'klBK-1_1'); }
        if (Element.getAttribute('d') === 'm427.43 287.89-11.88 17.54c-.18.25-.68.87-.54 1.15.15.27.9.11 1.21.11h22.43c.31 0 1.21.12 1.35-.15.15-.28-.51-.86-.68-1.11l-11.89-17.54z') { addSvgElem(Index, Element, 'klBK-1_2'); }
        if (Element.getAttribute('d') === 'm330.76 366.18 11.89 17.54 11.89-17.54c.17-.25.65-.84.5-1.11-.14-.27-.86-.16-1.17-.16h-22.43c-.31 0-.92-.08-1.06.19s.21.82.38 1.08z') { addSvgElem(Index, Element, 'klNKP-1_1'); }
        if (Element.getAttribute('d') === 'm342.65 383.72-11.89 17.54c-.17.26-.67.88-.53 1.15.15.27.9.12 1.21.12h22.43c.31 0 1.21.11 1.35-.16.15-.27-.51-.85-.68-1.11l-11.89-17.54z') { addSvgElem(Index, Element, 'klNKP-1_2'); }
        if (Element.getAttribute('d') === 'm414.27 366.18 11.89 17.54 11.89-17.54c.17-.25.64-.84.5-1.11-.15-.27-.87-.16-1.17-.16h-22.44c-.31 0-.91-.08-1.05.19-.15.27.21.82.38 1.08z') { addSvgElem(Index, Element, 'klNKB-1_1'); }
        if (Element.getAttribute('d') === 'm426.16 383.72-11.89 17.54c-.17.26-.68.88-.53 1.15.14.27.89.12 1.2.12h22.44c.3 0 1.2.11 1.35-.16.14-.27-.51-.85-.68-1.11l-11.89-17.54z') { addSvgElem(Index, Element, 'klNKB-1_2'); }
        if (Element.getAttribute('d') === 'm504.23 479.99-17.54 11.89c-.25.17-.88.68-1.15.53-.27-.14-.12-.89-.12-1.2v-22.43c0-.31-.11-1.21.16-1.36.28-.14.86.51 1.11.68l17.54 11.89z') { addSvgElem(Index, Element, 'Kl.oh.NGYK1_1'); }
        if (Element.getAttribute('d') === 'm521.77 491.88-17.54-11.89 17.54-11.89c.26-.17.84-.64 1.12-.5.27.15.15.87.15 1.18v22.43c0 .31.09.91-.19 1.06-.27.14-.82-.22-1.08-.39z') { addSvgElem(Index, Element, 'Kl.oh.NGYK1_2'); }
        if (Element.getAttribute('d') === 'M541.66 630.93h54.39v8.67h-54.39z') { addSvgElem(Index, Element, 'Ohkovay zadvijka'); }
        if (Element.getAttribute('d') === 'M654.96 250.04h9.55v182.63h-9.55z') { addSvgElem(Index, Element, 'pravay poloska'); }
        if (Element.getAttribute('d') === 'M162.99 88.44h22.99v11.81h-22.99z') { addSvgElem(Index, Element, 'Ok'); }
        if (Element.getAttribute('d') === 'M131.71 88.44h22.99v11.81h-22.99z') { addSvgElem(Index, Element, 'A'); }
        if (Element.getAttribute('d') === 'M101.57 88.44h22.99v11.81h-22.99z') { addSvgElem(Index, Element, 'C.K.'); }
        if (Element.getAttribute('d') === 'M72.3 88.44h22.99v11.81H72.3z') { addSvgElem(Index, Element, 'K'); }
        if (Element.getAttribute('d') === 'M42.15 88.44h22.99v11.81H42.15z') { addSvgElem(Index, Element, 'P'); }
        if (Element.getAttribute('d') === 'M13.89 88.44h22.99v11.81H13.89z') { addSvgElem(Index, Element, 'SM'); }
        if (Element.getAttribute('d') === 'M37.55 155.49c-3.12-2.18-7.44-1.39-9.65 1.77-2.22 3.16-1.48 7.49 1.64 9.68 3.12 2.18 7.45 1.39 9.66-1.77s1.47-7.49-1.65-9.68z') { addSvgElem(Index, Element, 'B1_Patm'); }
        if (Element.getAttribute('d') === 'M70.84 155.49c-3.12-2.18-7.45-1.39-9.66 1.77s-1.47 7.49 1.65 9.68c3.12 2.18 7.44 1.39 9.66-1.77 2.21-3.16 1.47-7.49-1.65-9.68z') { addSvgElem(Index, Element, 'B2_Patm'); }
        if (Element.getAttribute('d') === 'M37.43 181.87c-3.12-2.18-7.45-1.39-9.66 1.77s-1.48 7.49 1.65 9.68c3.12 2.18 7.44 1.39 9.65-1.77 2.22-3.16 1.48-7.49-1.64-9.68z') { addSvgElem(Index, Element, 'B1_Ppeci'); }
        if (Element.getAttribute('d') === 'M70.96 181.87c-3.12-2.19-7.44-1.4-9.65 1.77-2.22 3.16-1.48 7.49 1.64 9.68 3.12 2.18 7.45 1.39 9.66-1.77s1.47-7.5-1.65-9.68z') { addSvgElem(Index, Element, 'B2_Ppeci'); }
        if (Element.getAttribute('d') === 'M37.55 206.11c-3.12-2.18-7.44-1.39-9.65 1.77-2.22 3.16-1.48 7.49 1.64 9.68 3.12 2.18 7.45 1.39 9.66-1.77s1.47-7.49-1.65-9.68z') { addSvgElem(Index, Element, 'B1_Pod.Izbutkom'); }
        if (Element.getAttribute('d') === 'M70.96 206.11c-3.12-2.18-7.44-1.39-9.65 1.77-2.22 3.16-1.48 7.49 1.64 9.68 3.12 2.18 7.45 1.39 9.66-1.77s1.47-7.49-1.65-9.68z') { addSvgElem(Index, Element, 'B2_Pod.Izbutkom'); }
        if (Element.getAttribute('d') === 'M616.49 515.11h-68.36v1.86h-2.99l-7.91-5.83c-.29-.22-1.34-.87-1.23-1.21.11-.34 1.35-.26 1.71-.26h78.78v5.44z') { addSvgElem(Index, Element, 'Zelinay nijniy Poloska'); }

        if (Element.getAttribute('d') === 'M1330.92 719.45h75.05v18.84h-75.05z') { addSvgElem(Index, Element, 'Mexan_1'); }
        if (Element.getAttribute('d') === 'M1611.56 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_11'); }
        if (Element.getAttribute('d') === 'M1271.12 747.75h10.55v38.45h-10.55z') { addSvgElem(Index, Element, 'radar2_1'); }
        if (Element.getAttribute('d') === 'M1270.78 747.75h11.3v144.03h-11.3z') { addSvgElem(Index, Element, 'radar2_2'); }
        if (Element.getAttribute('d') === 'M1638.67 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_10'); }
        if (Element.getAttribute('d') === 'M1665.78 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_9'); }
        if (Element.getAttribute('d') === 'M1692.88 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_8'); }
        if (Element.getAttribute('d') === 'M1720 742.28h24.91v16.75H1720z') { addSvgElem(Index, Element, 'Str2_7'); }
        if (Element.getAttribute('d') === 'M1747.1 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_6'); }
        if (Element.getAttribute('d') === 'M1774.21 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_5'); }
        if (Element.getAttribute('d') === 'M1801.32 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_4'); }
        if (Element.getAttribute('d') === 'M1828.43 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_3'); }
        if (Element.getAttribute('d') === 'M1855.54 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_2'); }
        if (Element.getAttribute('d') === 'M1882.65 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_1'); }
        if (Element.getAttribute('d') === 'M1910.71 742.28h47.1v16.75h-47.1z') { addSvgElem(Index, Element, 'Str2_ves'); }
        if (Element.getAttribute('d') === 'M1961.89 742.28h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str2_Oh'); }
        if (Element.getAttribute('d') === 'M1611.56 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_11'); }
        if (Element.getAttribute('d') === 'M1638.67 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_10'); }
        if (Element.getAttribute('d') === 'M1665.78 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_9'); }
        if (Element.getAttribute('d') === 'M1692.88 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_8'); }
        if (Element.getAttribute('d') === 'M1720 823.51h24.91v16.75H1720z') { addSvgElem(Index, Element, 'Str1_7'); }
        if (Element.getAttribute('d') === 'M1747.1 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_6'); }
        if (Element.getAttribute('d') === 'M1774.21 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_5'); }
        if (Element.getAttribute('d') === 'M1801.32 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_4'); }
        if (Element.getAttribute('d') === 'M1828.43 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_3'); }
        if (Element.getAttribute('d') === 'M1855.54 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_2'); }
        if (Element.getAttribute('d') === 'M1882.65 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_1'); }
        if (Element.getAttribute('d') === 'M1910.71 823.51h47.1v16.75h-47.1z') { addSvgElem(Index, Element, 'Str1_ves'); }
        if (Element.getAttribute('d') === 'M1961.89 823.51h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str1_Oh'); }
        if (Element.getAttribute('d') === 'M1611.56 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_11'); }
        if (Element.getAttribute('d') === 'M1638.67 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_10'); }
        if (Element.getAttribute('d') === 'M1665.78 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_9'); }
        if (Element.getAttribute('d') === 'M1692.88 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_8'); }
        if (Element.getAttribute('d') === 'M1720 900.75h24.91v16.75H1720z') { addSvgElem(Index, Element, 'Str51_7'); }
        if (Element.getAttribute('d') === 'M1747.1 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_6'); }
        if (Element.getAttribute('d') === 'M1774.21 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_5'); }
        if (Element.getAttribute('d') === 'M1801.32 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_4'); }
        if (Element.getAttribute('d') === 'M1828.43 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_3'); }
        if (Element.getAttribute('d') === 'M1828.43 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_2'); }
        if (Element.getAttribute('d') === 'M1882.65 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_1'); }
        if (Element.getAttribute('d') === 'M1910.71 900.75h47.1v16.75h-47.1z') { addSvgElem(Index, Element, 'Str51_Ves'); }
        if (Element.getAttribute('d') === 'M1961.89 900.75h24.91v16.75h-24.91z') { addSvgElem(Index, Element, 'Str51_Oh'); }
        if (Element.getAttribute('d') === 'M1979.91 764.84c-3.12-2.19-7.44-1.4-9.65 1.76-2.22 3.17-1.48 7.5 1.64 9.68 3.12 2.19 7.45 1.4 9.66-1.76s1.47-7.5-1.65-9.68z') { addSvgElem(Index, Element, 'Str2_Oh_2'); }
        if (Element.getAttribute('d') === 'M1979.91 846.06c-3.12-2.18-7.44-1.39-9.65 1.77-2.22 3.16-1.48 7.49 1.64 9.68 3.12 2.18 7.45 1.39 9.66-1.77s1.47-7.49-1.65-9.68z') { addSvgElem(Index, Element, 'Str1_Oh'); }
        if (Element.getAttribute('d') === 'M1979.91 923.31c-3.12-2.19-7.44-1.4-9.65 1.76-2.22 3.17-1.48 7.5 1.64 9.68 3.12 2.19 7.45 1.4 9.66-1.76s1.47-7.5-1.65-9.68z') { addSvgElem(Index, Element, 'Str51_Oh'); }
        if (Element.getAttribute('d') === 'M1458.19 159.4h61.85c1.31 0 2.38 1.62 2.38 3.61v17.96c0 1.98-1.07 3.6-2.38 3.6h-61.85c-1.32 0-2.39-1.62-2.39-3.6v-17.96c0-1.99 1.07-3.61 2.39-3.61z') { addSvgElem(Index, Element, 'Pusk'); }
        if (Element.getAttribute('d') === 'M1547.16 159.4h61.85c1.31 0 2.38 1.62 2.38 3.61v17.96c0 1.98-1.07 3.6-2.38 3.6h-61.85c-1.32 0-2.39-1.62-2.39-3.6v-17.96c0-1.99 1.07-3.61 2.39-3.61z') { addSvgElem(Index, Element, 'Stop'); }
        // Sergey
        if (Element.getAttribute('d') === 'M548.13 515.11h68.36v10.04h-68.36z') { addSvgElem(Index, Element, 'pech_left_down_zaglushka'); }
        if (Element.getAttribute('d') === 'M639.55 515.11h68.36v9.72h-68.36z') { addSvgElem(Index, Element, 'Krasniy nijniy Poloska'); }
        // Ilay
        if (Element.getAttribute('d') === 'M498.31 136.82h59.67c1.44 0 2.61 1.11 2.61 2.47v26.15c0 1.36-1.17 2.47-2.61 2.47h-59.67c-1.44 0-2.62-1.11-2.62-2.47v-26.15c0-1.36 1.18-2.47 2.62-2.47z') { addSvgElem(Index, Element, 'jelob_ramka'); }
        if (Element.getAttribute('d') === 'M460.38 220.71h55.32c1.33 0 2.42 1.06 2.42 2.35v24.86c0 1.29-1.09 2.34-2.42 2.34h-55.32c-1.33 0-2.42-1.05-2.42-2.34v-24.86c0-1.29 1.09-2.35 2.42-2.35z') { addSvgElem(Index, Element, 'zagr_ramka_l'); }
        if (Element.getAttribute('d') === 'm543.57 759.67 15.58 14.13-5.09 4.09 12.88.12v-13.19l-4.21 5.34-15.83-14.13z') { addSvgElem(Index, Element, 'strelka_snizu'); }
        if (Element.getAttribute('d') === 'M1021.81 169.18c-3.12-2.19-7.45-1.4-9.66 1.76-2.21 3.17-1.47 7.5 1.65 9.68 3.12 2.19 7.44 1.4 9.66-1.76 2.21-3.16 1.47-7.5-1.65-9.68z') { addSvgElem(Index, Element, 'cir_t_2'); }
        if (Element.getAttribute('d') === 'M738.6 220.01h55.32c1.34 0 2.42 1.05 2.42 2.34v24.86c0 1.29-1.08 2.34-2.42 2.34H738.6c-1.33 0-2.42-1.05-2.42-2.34v-24.86c0-1.29 1.09-2.34 2.42-2.34z') { addSvgElem(Index, Element, 'zagr_ramka_r'); }
        if (Element.getAttribute('d') === 'M672.75 367.88h62.22c1.5 0 2.72.97 2.72 2.15v22.86c0 1.18-1.22 2.15-2.72 2.15h-62.22c-1.5 0-2.73-.97-2.73-2.15v-22.86c0-1.18 1.23-2.15 2.73-2.15z') { addSvgElem(Index, Element, 'pust_ramka_r'); }
        if (Element.getAttribute('d') === 'M1841.28 654.76h56.66v21.95h-56.66z') { addSvgElem(Index, Element, 'bzu_T2_color'); }
        if (Element.getAttribute('d') === 'M1392.57 822.75h103.25v30.52h-103.25z') { addSvgElem(Index, Element, 'ismetir_ramki'); }
        if (Element.getAttribute('d') === 'M526.25 421.26h55.32c1.34 0 2.42 1.05 2.42 2.34v24.86c0 1.29-1.08 2.34-2.42 2.34h-55.32c-1.33 0-2.42-1.05-2.42-2.34V423.6c0-1.29 1.09-2.34 2.42-2.34z') { addSvgElem(Index, Element, 'left_vugr_rect'); }
      })
    }
    else if (ObjectSvg.name === 'vvod_znachenij') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '0' && TextIndex === 1) { addSvgElem(Index, Element, 'vz_number', 'start'); }
      })
    }
    else if (ObjectSvg.name === 'win_sym_302') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'расход ПГ') { addSvgElem(Index, Element, 'ws3_ttg', 'center'); }
      })
    }
    else if (ObjectSvg.name === 'priczvuksinal') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'БЗУ не готово принимать порцию после т.Р2') { addSvgElem(Index, Element, 'prixZvykSig_text', 'start'); }
      })
    }
    else if (ObjectSvg.name === 'win_otdel2_na_vnk') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'Закрыт' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 62.29 90.383)') { addSvgElem(Index, Element, 'text_ish_c4'); }
        if (Element.innerHTML === 'Открыт' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 130.01 90.383)') { addSvgElem(Index, Element, 'text_ish_c5'); Element.innerHTML = 'Закрыт'; }
        if (Element.innerHTML === 'Закрыт' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 198.933 90.383)') { addSvgElem(Index, Element, 'text_ish_c6'); }
        if (Element.innerHTML === 'ВН1 Перекидка из Отделения2 в Отделение') { addSvgElem(Index, Element, 'Title_window_otdel2_otdel'); }
        if (Element.innerHTML === '110' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 71.913 -101.793)') { addSvgElem(Index, Element, 'text_otdel2_110'); }
        if (Element.innerHTML === '110' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 71.913 26.325)') { addSvgElem(Index, Element, 'text_otdel2_110'); }
        if (Element.innerHTML === '111' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 144.102 -101.793)') { addSvgElem(Index, Element, 'text_otdel2_111'); }
        if (Element.innerHTML === '111' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 144.102 26.325)') { addSvgElem(Index, Element, 'text_otdel2_111'); }
        if (Element.innerHTML === '112' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 210.789 -101.793)') { addSvgElem(Index, Element, 'text_otdel2_112'); }
        if (Element.innerHTML === '112' && Element.getAttribute('transform') == 'matrix(.99692 0 0 1 210.789 26.325)') { addSvgElem(Index, Element, 'text_otdel2_112'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element) => {
        if (Element.getAttribute('d') === 'M327.2 291.87h67.75v60.96H327.2z') { addSvgElem(Index, Element, 'rect_ish_c4'); }
        if (Element.getAttribute('d') === 'M395.95 291.87h68.79v60.96h-68.79z') { addSvgElem(Index, Element, 'rect_ish_c5'); }
        if (Element.getAttribute('d') === 'M466.76 291.87h62.94v60.96h-62.94z') { addSvgElem(Index, Element, 'rect_ish_c6'); }
      })
    }
    // Ilay
    else if (ObjectSvg.name === 'okno_klap_vid3') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'Управление клапаном 116') { addSvgElem(Index, Element, 'title_work_vn',); }

        if (Element.innerHTML === 'Автоматический') { addSvgElem(Index, Element, 'status_window_text', 'start'); }
        if (Element.innerHTML === '22') { addSvgElem(Index, Element, 'time_full_vnk_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 18.462 -152.297)') { addSvgElem(Index, Element, 'btn_auto_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 98.702 -153.373)') { addSvgElem(Index, Element, 'btn_ruchnoy_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 6.957 -114.082)') { addSvgElem(Index, Element, 'btn_open_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 95.213 -114.082)') { addSvgElem(Index, Element, 'btn_close_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 60.33 -83.457)') { addSvgElem(Index, Element, 'btn_stop_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 34.648 -33.474)') { addSvgElem(Index, Element, 'btn_sbros_oshibki_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 4.096 20.186)') { addSvgElem(Index, Element, 'btn_baypas_vsekh_blokirovok_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -161.356 -85.38)') { addSvgElem(Index, Element, 'status_control_vnk_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -161.17 -43.745)') { addSvgElem(Index, Element, 'skhema_sobrana_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -155.99 20.64)') { addSvgElem(Index, Element, 'block_open_text'); }
        if (Element.getAttribute('transform') === 'matrix(1.00617 0 0 1 -82.331 20.64)') { addSvgElem(Index, Element, 'block_close_text'); }
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element) => {
        if (Element.getAttribute('d') === 'm58.69 75.43-14.08-7.8-14.08-7.8v31.2l14.08-7.8z') { addSvgElem(Index, Element, 'left_vn'); }
        if (Element.getAttribute('d') === 'm58.35 75.43 14.08-7.8 14.07-7.8v31.2l-14.07-7.8z') { addSvgElem(Index, Element, 'right_vn'); }
        if (Element.getAttribute('d') === 'M9.78 108.74h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'ruchnoy'); }
        if (Element.getAttribute('d') === 'M9.78 149.93h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'open'); }
        if (Element.getAttribute('d') === 'M9.78 191.13h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'skhema_sobrana'); }
      })
      ObjectSvg.svg.querySelectorAll('ellipse').forEach((Element) => {
        if (Element.getAttribute('rx') === '7.8') { addSvgElem(Index, Element, 'circle_n_winVN'); }
        if (Element.getAttribute('rx') === '16.12') { addSvgElem(Index, Element, 'circle_n_winVN'); }
      })
      ObjectSvg.svg.querySelectorAll('rect').forEach((Element) => {
        if (Element.getAttribute('x') === '169.84' && Element.getAttribute('y') === '83.47') { addSvgElem(Index, Element, 'btn_auto_2'); }
        if (Element.getAttribute('x') === '257.34' && Element.getAttribute('y') === '83.47') { addSvgElem(Index, Element, 'btn_ruchnoy_2'); }
        if (Element.getAttribute('x') === '169.84' && Element.getAttribute('y') === '121.85') { addSvgElem(Index, Element, 'btn_open_2'); }
        if (Element.getAttribute('x') === '257.34' && Element.getAttribute('y') === '121.85') { addSvgElem(Index, Element, 'btn_close_2'); }
        if (Element.getAttribute('x') === '170.17' && Element.getAttribute('y') === '151.33') { addSvgElem(Index, Element, 'btn_stop_2'); }
        if (Element.getAttribute('x') === '169.92' && Element.getAttribute('y') === '204.19') { addSvgElem(Index, Element, 'btn_reset_2'); }
        if (Element.getAttribute('x') === '169.92' && Element.getAttribute('y') === '257.28') { addSvgElem(Index, Element, 'btn_baypas_vsekh_blokirovok_2'); }
        if (Element.getAttribute('x') === '14.72' && Element.getAttribute('y') === '256.05') { addSvgElem(Index, Element, 'block_open'); }
        if (Element.getAttribute('x') === '87.79' && Element.getAttribute('y') === '256.05') { addSvgElem(Index, Element, 'block_close'); }
      })
    }
  })

  devHelper.svgVals.forEach(Element => {
    pushSvgDisplaysArr(Element);
    let tempUnicArr = [];
    Element.activeElements.forEach((Element2) => {
      // Element2.element.innerHTML = 'ВЗЯЛ';
      //  ПРоверка на повторение имён элементов
      let isUnique = true;
      tempUnicArr.forEach(uniqueElement => {
        if (Element2.name === uniqueElement.name) {
          isUnique = false;
          // console.warn(`Дублирование элемента ${Element2.name} в схеме ${Element.name}.`);
        }
      });
      if (isUnique) tempUnicArr.push(Element2);
      Element2.element.id = `${Element.name}_${Element2.name}`;
    })
  })

  devHelper.svgVals.forEach(Element => {
    Element.startSvgState = Element.svg.innerHTML;
  })

  changeSvgElem({ name: 'lifetime', text: devHelper.trenVals.timers.lifeTime });

});


function addSvgElem(SvgIndex, Element, Name, Move = 'middle') {//start middle end
  devHelper.dev.maxCountSvgElems++;
  devHelper.svgVals[SvgIndex].activeElements.push({
    element: Element,
    name: Name,
    // name: Name.replace(/\s/g, "_").replace(/\./g, "_").replace(/\,/g, "_"),
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
      if (CurrentPosition === 1 || CurrentPosition === 2 || CurrentPosition === 4 || CurrentPosition === 5) {
        let mainMesh = devHelper.model3DVals.svgDisplays.meshs.find(mesh => mesh.positionIndex === CurrentPosition);
        let textureSvgName = SvgName === undefined ? mainMesh.svgArr[mainMesh.svgArr.length - 1].name : SvgName;
        let currentMeshTexture = devHelper.model3DVals.svgDisplays.meshs.find(mesh => mesh.positionIndex === devHelper.model3DVals.currentPosition).material.diffuseTexture;
        let textureName = currentMeshTexture.name.substring(currentMeshTexture.name.indexOf('_') + 1);
        createSvgHelperButtons(devHelper.svgHelpers[devHelper.svgHelpers.findIndex(element => element.name === textureSvgName)].helpers, textureSvgName);
        function createSvgHelperButton(Vals, DisplayMesh) {
          let invisElem = document.createElement('div');
          invisElem.classList.add('invisible-element-svg');
          if (devHelper.dev.enable === true) {
            invisElem.classList.add('invisible-element-svg-helper');
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
                  } else handleError(invisElem);
                } else if (currentActonObject && ((currentActonObject.action && currentActonObject.action.target3D))) {
                  handleError(invisElem);
                } else if (currentActonObject.multi) {
                  if (currentActonObject.multi[0].action && currentActonObject.multi[0].action.target3D) {
                    handleError(invisElem);
                  } else if (currentActonObject.multi[0].action && currentActonObject.multi[0].action.target2D) {
                    const multiAction = devHelper.trenVals.multiAction.find(multiAction2 => (invisElem.id === multiAction2.action.target2D));
                    if (multiAction) {
                      trenClickOnSvgElem(invisElem);
                      if (multiAction.action.window2D && multiAction.action.window2D.newPositionWindow) {
                        if (Vals.value && Vals.value.window) {
                          if (multiAction.action.window2D.newPositionWindow.x) Vals.value.x = multiAction.action.window2D.newPositionWindow.x;
                          if (multiAction.action.window2D.newPositionWindow.y) Vals.value.y = multiAction.action.window2D.newPositionWindow.y;
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
                    } else handleError(invisElem);
                  } else handleError(invisElem);
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
          invisElem.addEventListener('transitionstart', (e) => {
            if (e.propertyName === 'opacity') {
              invisElem.style.backgroundColor = getComputedStyle(invisElem).backgroundColor;
            }
          })
          return invisElem;
        }
        function createSvgHelperButtons(Arr, TextureSvgName) {
          let mainContainer = createMainHelperContainer(TextureSvgName);
          let currentActonObject = findLast(devHelper.trenVals.scenarioArr[devHelper.trenVals.scenario].actions, action => (action.passed === true && action.startTime <= devHelper.trenVals.timers.scenarioTime / 1000));
          Arr.forEach((element) => {
            if (currentActonObject && currentActonObject.hasOwnProperty('action') && currentActonObject.action.hasOwnProperty('helper2D')) {
              currentActonObject.action.helper2D.forEach(element2 => {
                if (element.id === element2.id) {
                  if (element2.x !== undefined) element.x = element2.x;
                  if (element2.y !== undefined) element.y = element2.y;
                  if (element2.w !== undefined) element.w = element2.w;
                  if (element2.h !== undefined) element.h = element2.h;
                }
              })
            }
            mainContainer.append(createSvgHelperButton(element, mainMesh));
          })
          function createMainHelperContainer(TextureSvgName) {
            if (document.getElementById('svg-helper')) document.getElementById('svg-helper').remove();
            let mesh2DVals = getClientRectFromMesh(devHelper.model3DVals.svgDisplays.meshs.find(m => m.positionIndex === devHelper.model3DVals.currentPosition));
            let mainContainer = document.createElement('div');
            mainContainer.style.position = 'absolute';
            mainContainer.style.left = (mesh2DVals.left / (document.getElementById('renderCanvas').width / 100)) + '%';
            mainContainer.style.top = (mesh2DVals.top / (document.getElementById('renderCanvas').height / 100)) + '%';
            mainContainer.style.width = (mesh2DVals.width / (document.getElementById('renderCanvas').width / 100)) + '%';
            mainContainer.style.height = (mesh2DVals.height / (document.getElementById('renderCanvas').height / 100)) + '%';
            mainContainer.id = 'svg-helper';
            mainContainer.forScheme = TextureSvgName;
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
          if (Val.text !== undefined)
            activeElemObj.element.innerHTML = Val.text;
          if (Val.color !== undefined)
            activeElemObj.element.style.fill = Val.color === 'start' ? '' : Val.color;
          if (Val.stroke !== undefined)
            activeElemObj.element.style.stroke = Val.stroke === 'start' ? '' : Val.stroke;
          if (Val.opacity !== undefined)
            activeElemObj.element.style.opacity = Val.opacity === 'start' ? '' : Val.opacity;
          if (Val.rotation !== undefined)
            changeSvgElemPos(activeElemObj.element, Val.rotation, 'rotate');
          if (Val.position) {
            if (Val.position.x !== undefined) changeSvgElemPos(activeElemObj.element, Val.position.x, 'translateX');
            if (Val.position.y !== undefined) changeSvgElemPos(activeElemObj.element, Val.position.y, 'translateY');
          }
          if (Val.y) activeElemObj.element.setAttribute('y', Val.y);
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