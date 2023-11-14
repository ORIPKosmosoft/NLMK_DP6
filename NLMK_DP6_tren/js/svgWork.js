/*----------TODO----------------------------------------------------
Реалищовать хелпер кнопку с разными кликами
--------------------------------------------------------------------
Сделать рабочими все активные мониторы
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
    })
  })

  devHelper.svgVals.forEach((ObjectSvg, Index) => {
    ObjectSvg.realName = ObjectSvg.name === 'dp' ? 'ДП' : 
    ObjectSvg.name === 'BVNK_VNK1' ? 'ВНК №1' :
    ObjectSvg.name === 'BVNK_VNK2' ? 'ВНК №2' : 
    ObjectSvg.name === 'BVNK_VNK3' ? 'ВНК №3' :
    ObjectSvg.name === 'bzu' ? 'БЗУ' : 
    ObjectSvg.name === 'vnk_main' ? 'Общая схема' :
    ObjectSvg.name === 'vnk_spvg' ? 'СПВГ' : 
    ObjectSvg.name === 'O_n_k_na_VNK' ? 'Управление клапаном' :
    ObjectSvg.name === 'O_n_k_na_VNK_posle_1' ? 'Управление клапаном' : 
    ObjectSvg.name === 'O_n_k_na_VNK_posle_2' ? 'Управление клапаном' :
    ObjectSvg.name === 'O_p_n_na_k_na-o_2_na_VNK' ? 'Дополнительное окно' :
    ObjectSvg.name === 'O_p_n_na_k_p_na_VNK' ? 'Перекидка' :
    ObjectSvg.name === 'vvod_znachenij' ? 'Ввод значений' :
    ObjectSvg.name === 'Osnovnye_parametry_DP' ? 'Основные параметры доменной печи' :
    ObjectSvg.name === 'win_sym_302' ? 'Дополнительное окно' :
    ObjectSvg.name === 'priczvuksinal' ? 'Дополнительное окно' :
    ObjectSvg.name === 'win_otdel2_na_vnk' ? 'Дополнительное окно' :
    ObjectSvg.name === 'Kontrol_progara' ? 'Контроль прогара' :
    ObjectSvg.name === 'Shagi_upraleniya' ? 'Дополнительное окно' : 'Дополнительное окно';

    // if (ObjectSvg.name === 'dp') {
    //   ObjectSvg.realName = 'ДП';
    // }
    // if (ObjectSvg.name === 'vnk_main') {
    //   ObjectSvg.object.style.left = '0';
    //   ObjectSvg.object.style.top = '500px';
    //   ObjectSvg.object.style.visibility = 'visible';
    //   // ObjectSvg.object.style.zIndex = 999;
    //   ObjectSvg.object.style.width = '50%';
    // }

    if (ObjectSvg.name === 'dp') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '4,32') { addSvgElem(Index, Element, 'P_1'); }
        if (Element.innerHTML === '4,22') { addSvgElem(Index, Element, 'P_2', 'start'); }
        if (Element.innerHTML === '30') {
          if (TextIndex < 307)
            addSvgElem(Index, Element, 'EKZ_H' + (TextIndex - 233)); else
            addSvgElem(Index, Element, 'kol_furm');
        }
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
        if (Element.innerHTML === '1,00') { addSvgElem(Index, Element, 'F_par_yvl'); } // 2 раза находит. Исправить
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
        if (Element.innerHTML === '43,0') { addSvgElem(Index, Element, 'N2'); }
        if (Element.innerHTML === '26,9') { addSvgElem(Index, Element, 'CO'); }
        if (Element.innerHTML === '21,9') { addSvgElem(Index, Element, 'CO2'); }
        if (Element.innerHTML === '0,00') { addSvgElem(Index, Element, 'CObor'); }
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
        if (Element.innerHTML === '1328') { addSvgElem(Index, Element, 'Tkyp_2', 'start'); }
        if (Element.innerHTML === '120222') { addSvgElem(Index, Element, 'Fvozdyh_2', 'start'); }
        if (Element.innerHTML === '101351') { addSvgElem(Index, Element, 'Fgaz_2', 'start'); }
        if (Element.innerHTML === '1297') { addSvgElem(Index, Element, 'Tkyp_1', 'start'); }
        if (Element.innerHTML === '141') { addSvgElem(Index, Element, 'Tdym_3'); }
        if (Element.innerHTML === '306') { addSvgElem(Index, Element, 'Tdym_2'); }
        if (Element.innerHTML === '174') { addSvgElem(Index, Element, 'Tdym_1'); }
        if (Element.innerHTML === 'НАГРЕВ') { addSvgElem(Index, Element, 'Sostoynie_' + (70 - TextIndex)); }
        if (Element.innerHTML === 'ДУТЬЕ') { addSvgElem(Index, Element, 'Sostoynie_1'); }
        if (Element.innerHTML === '68') { addSvgElem(Index, Element, 'Temp_peref_1'); }
        if (Element.innerHTML === '63' && Element.getAttribute('y') == '528.24') { addSvgElem(Index, Element, 'Temp_peref_13'); }
        if (Element.innerHTML === '63' && Element.getAttribute('y') == '458.97') { addSvgElem(Index, Element, 'Temp_peref_2'); }

        if (Element.innerHTML === '56') { addSvgElem(Index, Element, 'Temp_peref_3'); }
        if (Element.innerHTML === '62' && Element.getAttribute('y') == '606.37') { addSvgElem(Index, Element, 'Temp_peref_11'); }
        if (Element.innerHTML === '62' && Element.getAttribute('y') == '664.7') { addSvgElem(Index, Element, 'Temp_peref_8'); }
        if (Element.innerHTML === '62' && Element.getAttribute('y') == '528.84') { addSvgElem(Index, Element, 'Temp_peref_4'); }

        if (Element.innerHTML === '61') {
          if (TextIndex === 245)
            addSvgElem(Index, Element, 'Temp_peref_5');
          else if (TextIndex === 247) addSvgElem(Index, Element, 'Temp_peref_7');
          else addSvgElem(Index, Element, 'Temp_peref_9');
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
        if (Element.innerHTML === '15' && TextIndex === 284) { addSvgElem(Index, Element, 'T_prir_gaz'); }
        if (Element.innerHTML === '39') { addSvgElem(Index, Element, 'H_prir_gaz'); }
        if (Element.innerHTML === '30626') { addSvgElem(Index, Element, 'F_pg_sym_prir_gaz', 'start'); }
        if (Element.innerHTML === '8,56') { addSvgElem(Index, Element, 'P_pg_prir_gaz'); }
        if (Element.innerHTML === '30719') { addSvgElem(Index, Element, 'F_pg_prir_gaz', 'start'); }
        if (Element.innerHTML === '-93') { addSvgElem(Index, Element, 'dF_pg_prir_gaz'); }
        if (Element.innerHTML === '1487') { addSvgElem(Index, Element, 'L4'); }
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
        if (Element.innerHTML === '3,12') { addSvgElem(Index, Element, 'ydel_tep_4_1'); }
        if (Element.innerHTML === '2,78') { addSvgElem(Index, Element, 'ydel_tep_4_2'); }
        if (Element.innerHTML === '3,78') { addSvgElem(Index, Element, 'ydel_tep_4_3'); }
        if (Element.innerHTML === '2,98') { addSvgElem(Index, Element, 'ydel_tep_4_4'); }
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
        if (Element.innerHTML === '0' && Element.getAttribute('y') == '773.85') { addSvgElem(Index, Element, 'F1_1'); }
        if (Element.innerHTML === '0' && Element.getAttribute('y') == '807.2') { addSvgElem(Index, Element, 'F1_2'); }
        if (Element.innerHTML === 'F' && Element.getAttribute('y') == '279.3') { addSvgElem(Index, Element, 'F_prirGaz'); }
        if (Element.innerHTML === ' прир. газа') { addSvgElem(Index, Element, 'f_prirgaz'); }
        if (Element.innerHTML === 'ТТГ') { addSvgElem(Index, Element, 't_r_ttg'); }
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
      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1591.67 909.77h72.92v29.16h-72.92z') { addSvgElem(Index, Element, 'field_L1'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1695.84 909.77h72.91v29.16h-72.91z') { addSvgElem(Index, Element, 'field_L2'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1695.84 939.97h72.91v29.17h-72.91z') { addSvgElem(Index, Element, 'field_L3'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1591.67 939.97h72.92v29.17h-72.92z') { addSvgElem(Index, Element, 'field_L4'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1152.61 808.2-23.96-33.33h23.96l-23.96 33.33z') { addSvgElem(Index, Element, 'vn_81'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm939.58 370.18-18.22 10.94v-21.88l18.22 10.94zm.01 0 18.22 10.94v-21.88l-18.22 10.94zm-.01 1.16-17.71 10.63a.995.995 0 0 1-1.51-.85v-21.88a.997.997 0 0 1 1.57-.82l17.65 10.6 17.66-10.6c.16-.11.36-.18.57-.18.55 0 1 .45 1 1v21.88a.995.995 0 0 1-1.51.85l-17.72-10.63z') { addSvgElem(Index, Element, 'vn_002'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1494.27 899.87-23.96-33.33h23.96l-23.96 33.33z') { addSvgElem(Index, Element, 'vn_723'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1494.27 899.87-23.96-33.33h23.96l-23.96 33.33z') { addSvgElem(Index, Element, 'vn_310'); }
      })
    }
    if (ObjectSvg.name === 'BVNK_VNK1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '92') { addSvgElem(Index, Element, '1TI_43'); }
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '1330' && TextIndex === 123) { addSvgElem(Index, Element, 'VNK1_Vblb_sig', 'start'); }
        if (Element.innerHTML === '345') { addSvgElem(Index, Element, 'Dblm_Vblb_sig'); }
        if (Element.innerHTML === '9,00') { addSvgElem(Index, Element, '7PI_13'); }
        if (Element.innerHTML === '104971') { addSvgElem(Index, Element, '1FI_01', 'start'); }
        if (Element.innerHTML === '8,45') { addSvgElem(Index, Element, '1PI_02'); }
        if (Element.innerHTML === '1330' && TextIndex === 127) { addSvgElem(Index, Element, '1TI_02'); }
        if (Element.innerHTML === '1316') { addSvgElem(Index, Element, '1TI_03'); }
        if (Element.innerHTML === '-999') { addSvgElem(Index, Element, '1TI_04'); }
        if (Element.innerHTML === '1183') { addSvgElem(Index, Element, '1TI_05'); }
        if (Element.innerHTML === '0' && TextIndex === 141) { addSvgElem(Index, Element, '1FI_03'); }
        if (Element.innerHTML === '9,03') { addSvgElem(Index, Element, '1PI_04'); }
        if (Element.innerHTML === '124123') { addSvgElem(Index, Element, '1FI_02'); }
        if (Element.innerHTML === '2,79') { addSvgElem(Index, Element, '1QI_01'); }
        if (Element.innerHTML === '105054') { addSvgElem(Index, Element, '115_PV'); }
        if (Element.innerHTML === '103220') { addSvgElem(Index, Element, '115_SP'); }
        if (Element.innerHTML === '41,85') { addSvgElem(Index, Element, '115_KP_1'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 186) { addSvgElem(Index, Element, '115_SPW'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 187) { addSvgElem(Index, Element, '115_SPT'); }
        if (Element.innerHTML === '46,95' && TextIndex === 188) { addSvgElem(Index, Element, '115_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 189) { addSvgElem(Index, Element, '115_GAZ'); }
        if (Element.innerHTML === '1,183') { addSvgElem(Index, Element, '123_PV_1'); }
        if (Element.innerHTML === '1,300') { addSvgElem(Index, Element, '123_SP_1'); }
        if (Element.innerHTML === '46,49') { addSvgElem(Index, Element, '123_KP_1'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 179) { addSvgElem(Index, Element, '123_PV_2'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 180) { addSvgElem(Index, Element, '123_SP_2'); }
        if (Element.innerHTML === '46,95' && TextIndex === 181) { addSvgElem(Index, Element, '123_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 182) { addSvgElem(Index, Element, '123_GAZ'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1305.59') { addSvgElem(Index, Element, '1PI_01'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '903.36') { addSvgElem(Index, Element, '1TI_28_2'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '776.96') { addSvgElem(Index, Element, '1TI_28_1'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '872.16') { addSvgElem(Index, Element, '1TI_29'); }
        if (Element.innerHTML === '42') { addSvgElem(Index, Element, 'Kl115_proc'); }
        if (Element.innerHTML === '43') { addSvgElem(Index, Element, 'Kl123_proc'); }
        if (Element.innerHTML === '22') { addSvgElem(Index, Element, 'Vremya_nagreva'); }
        if (Element.innerHTML === '60') { addSvgElem(Index, Element, 'Vremya_dutya'); }
        if (Element.innerHTML === '0' && TextIndex === 153) { addSvgElem(Index, Element, 'Vremya_otdelen'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1017.42') { addSvgElem(Index, Element, 'Avto'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1096.84') { addSvgElem(Index, Element, 'Dutyo'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '331.03') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '674.78') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '901.37') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1265.74') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1362.09') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1445.16') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1528.76') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '216.26') { Element.innerHTML = '1FI_03'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '667.63') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '853.81') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '319.16') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '747.86') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '874.79') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '589.18') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1286.57') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '666.82') { Element.innerHTML = '115'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '671.1') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '735.69') { Element.innerHTML = '1'; }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1318.9') { Element.innerHTML = '119'; }

      })
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm953.82 288.26-32.87-19.69v19.69l32.87-19.69z') { addSvgElem(Index, Element, '313'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_1'); }
      })
    }
    if (ObjectSvg.name === 'BVNK_VNK2') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '9,00') { addSvgElem(Index, Element, '7PI_13'); }
        if (Element.innerHTML === '104971') { addSvgElem(Index, Element, '2FI_01'); }
        if (Element.innerHTML === '8,45') { addSvgElem(Index, Element, '2PI_02'); }
        if (Element.innerHTML === '92') { addSvgElem(Index, Element, '2TI_43'); }
        if (Element.innerHTML === '0' && TextIndex === 126) { addSvgElem(Index, Element, '2FI_03'); }
        if (Element.innerHTML === '9,03') { addSvgElem(Index, Element, '2PI_04'); }
        if (Element.innerHTML === '124123') { addSvgElem(Index, Element, '2FI_02'); }
        if (Element.innerHTML === '2,79') { addSvgElem(Index, Element, '2QI_01'); }
        if (Element.innerHTML === '345') { addSvgElem(Index, Element, 'Dblm_Vblb_sig'); }
        if (Element.innerHTML === '1330' && TextIndex === 108) { addSvgElem(Index, Element, 'VNK2_Vblb_sig'); }
        if (Element.innerHTML === '1330' && TextIndex === 112) { addSvgElem(Index, Element, '2TI_02'); }
        if (Element.innerHTML === '1316') { addSvgElem(Index, Element, '2TI_03'); }
        if (Element.innerHTML === '1190') { addSvgElem(Index, Element, '2TI_04'); }
        if (Element.innerHTML === '-999') { addSvgElem(Index, Element, '2TI_05'); }
        if (Element.innerHTML === '105054') { addSvgElem(Index, Element, '215_PV'); }
        if (Element.innerHTML === '103220') { addSvgElem(Index, Element, '215_SP'); }
        if (Element.innerHTML === '41,85') { addSvgElem(Index, Element, '215_KP_1'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 171) { addSvgElem(Index, Element, '215_SPW'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 172) { addSvgElem(Index, Element, '215_SPT'); }
        if (Element.innerHTML === '46,95' && TextIndex === 173) { addSvgElem(Index, Element, '215_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 174) { addSvgElem(Index, Element, '215_GAZ'); }
        if (Element.innerHTML === '1,183') { addSvgElem(Index, Element, '223_PV_1'); }
        if (Element.innerHTML === '1,300') { addSvgElem(Index, Element, '223_SP_1'); }
        if (Element.innerHTML === '46,49') { addSvgElem(Index, Element, '223_KP_1'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 164) { addSvgElem(Index, Element, '223_PV_2'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 165) { addSvgElem(Index, Element, '223_SP_2'); }
        if (Element.innerHTML === '46,95' && TextIndex === 166) { addSvgElem(Index, Element, '223_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 167) { addSvgElem(Index, Element, '223_GAZ'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1305.59') { addSvgElem(Index, Element, '2PI_01'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '903.36') { addSvgElem(Index, Element, '2TI_28_2'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '776.96') { addSvgElem(Index, Element, '2TI_28_1'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '872.16') { addSvgElem(Index, Element, '2TI_29'); }
        if (Element.innerHTML === '42') { addSvgElem(Index, Element, 'kl215_proc'); }
        if (Element.innerHTML === '43') { addSvgElem(Index, Element, 'kl223_proc'); }
        if (Element.innerHTML === '107') { addSvgElem(Index, Element, 'Vremya_nagreva'); }
        if (Element.innerHTML === '27') { addSvgElem(Index, Element, 'Vremya_dutya'); }
        if (Element.innerHTML === '0' && TextIndex === 138) { addSvgElem(Index, Element, 'Vremya_otdelen'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1017.42') { addSvgElem(Index, Element, 'Avto'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1096.84') { addSvgElem(Index, Element, 'Dutyo'); }


      });
    }
    if (ObjectSvg.name === 'BVNK_VNK3') {
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1117.06 355.18-10.51 34.25 13.7-5.09 26.04 38.73 23.67-38.52 11.53 10.1-19.06-59.14 9.7 4.61-27.47-53.23-34.11 52.96 12.14-4z') { addSvgElem(Index, Element, 'fire_vnk_3'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1110.06 314.88v25.77l-47.47 61.65c-5.4 7.01-7.99 14.61-7.99 23.45v24.03H1220.37v-27.3c0-9.98-3.05-18.56-9.36-26.29l-44.06-53.95v-26.7h5.04l-.61-1.97v-47.58c0-18.3-14.93-26.31-33.23-26.31h-.84c-18.3 0-33.23 8.01-33.23 26.31v48.89h5.98z') { addSvgElem(Index, Element, 'vnk_3'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1482.15 833.43c-2.56-1.57-5.11-3.13-7.67-4.7v19.79l9.3-5.7 2.85-1.75 4-2.44c-1.94-1.19-3.87-2.38-5.81-3.56-.89-.55-1.78-1.1-2.67-1.64z') { addSvgElem(Index, Element, 'vnk3_310_l'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm1506.77 828.73-10.18 6.24-2.85 1.75-3.11 1.91c.71.43 1.42.87 2.13 1.31.9.54 1.79 1.09 2.68 1.64 3.78 2.31 7.55 4.63 11.33 6.94v-19.79z') { addSvgElem(Index, Element, 'vnk3_310_r'); }
      })
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '9,00') { addSvgElem(Index, Element, '7PI_13'); }
        if (Element.innerHTML === '104971') { addSvgElem(Index, Element, '3FI_01'); }
        if (Element.innerHTML === '8,45') { addSvgElem(Index, Element, '3PI_02'); }
        if (Element.innerHTML === '92') { addSvgElem(Index, Element, '3TI_43'); }
        if (Element.innerHTML === '0' && TextIndex === 142) { addSvgElem(Index, Element, '3FI_03'); }
        if (Element.innerHTML === '9,03') { addSvgElem(Index, Element, '3PI_04'); }
        if (Element.innerHTML === '124123') { addSvgElem(Index, Element, '3FI_02'); }
        if (Element.innerHTML === '2,79') { addSvgElem(Index, Element, '3QI_01'); }
        if (Element.innerHTML === '345') { addSvgElem(Index, Element, 'Dblm_Vblb_sig'); }
        if (Element.innerHTML === '1330' && TextIndex === 124) { addSvgElem(Index, Element, 'VNK3_Vblb_sig'); }
        if (Element.innerHTML === '1330' && TextIndex === 128) { addSvgElem(Index, Element, '3TI_02'); }
        if (Element.innerHTML === '1316') { addSvgElem(Index, Element, '3TI_03'); }
        if (Element.innerHTML === '-999') { addSvgElem(Index, Element, '3TI_04'); }
        if (Element.innerHTML === '1183') { addSvgElem(Index, Element, '3TI_05'); }
        if (Element.innerHTML === '105054') { addSvgElem(Index, Element, '315_PV'); }
        if (Element.innerHTML === '103220') { addSvgElem(Index, Element, '315_SP'); }
        if (Element.innerHTML === '41,85') { addSvgElem(Index, Element, '315_KP_1'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 187) { addSvgElem(Index, Element, '315_SPW'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 188) { addSvgElem(Index, Element, '315_SPT'); }
        if (Element.innerHTML === '46,95' && TextIndex === 189) { addSvgElem(Index, Element, '315_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 190) { addSvgElem(Index, Element, '315_GAZ'); }
        if (Element.innerHTML === '1,183') { addSvgElem(Index, Element, '323_PV_1'); }
        if (Element.innerHTML === '1,300') { addSvgElem(Index, Element, '323_SP_1'); }
        if (Element.innerHTML === '46,49') { addSvgElem(Index, Element, '323_KP_1'); }
        if (Element.innerHTML === '13330,2' && TextIndex === 180) { addSvgElem(Index, Element, '323_PV_2'); }
        if (Element.innerHTML === '1330,0' && TextIndex === 181) { addSvgElem(Index, Element, '323_SP_2'); }
        if (Element.innerHTML === '46,95' && TextIndex === 182) { addSvgElem(Index, Element, '323_KP_2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 183) { addSvgElem(Index, Element, '323_GAZ'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1305.59') { addSvgElem(Index, Element, '3PI_01'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '903.36') { addSvgElem(Index, Element, '3TI_28_2'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '776.96') { addSvgElem(Index, Element, '3TI_28_1'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '872.16') { addSvgElem(Index, Element, '3TI_29'); }
        if (Element.innerHTML === '42') { addSvgElem(Index, Element, 'kl315_proc'); }
        if (Element.innerHTML === '43') { addSvgElem(Index, Element, 'kl323_proc'); }
        if (Element.innerHTML === '22') { addSvgElem(Index, Element, 'Vremya_nagreva'); }
        if (Element.innerHTML === '60') { addSvgElem(Index, Element, 'Vremya_dutya'); }
        if (Element.innerHTML === '0' && TextIndex === 154) { addSvgElem(Index, Element, 'Vremya_otdelen'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1017.42') { addSvgElem(Index, Element, 'Avto'); }
        if (Element.hasAttribute('x') && Element.getAttribute('x') === '1096.84') { addSvgElem(Index, Element, 'Dutyo'); }
      });
    }
    if (ObjectSvg.name === 'vnk_main') {
      // PATH
      ObjectSvg.svg.querySelectorAll('path').forEach((Element, ElemIndex) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1712.25 544.97V557l-22.15 28.77c-2.52 3.27-3.73 6.81-3.73 10.94v11.21H1763.72v-12.74c0-4.66-1.42-8.66-4.37-12.26l-20.56-25.18v-12.46h2.36l-.29-.91v-22.21c0-8.54-6.96-12.27-15.5-12.27h-.4c-8.54 0-15.5 3.73-15.5 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_1'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M1301.37 544.97V557l-22.15 28.77c-2.52 3.27-3.72 6.81-3.72 10.94v11.21h77.35v-12.74c0-4.66-1.43-8.66-4.37-12.26l-20.56-25.18v-12.46h2.35l-.28-.91v-22.21c0-8.54-6.97-12.27-15.51-12.27h-.39c-8.54 0-15.51 3.73-15.51 12.27v22.81h2.79z') { addSvgElem(Index, Element, 'vnk_3'); }
        /////////////////////////////////
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M848.12 340.68v-21.47l33.12 21.47v-21.47z') { addSvgElem(Index, Element, 'kl048'); } // 48
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M725.84 404.38v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl039'); } // 39
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M983.46 404.76V383.3l33.13 21.46V383.3z') { addSvgElem(Index, Element, 'kl030'); } // 30
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M727.32 463.57v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl038'); } // 38
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M986.48 462.94v-21.46l33.13 21.46v-21.46z') { addSvgElem(Index, Element, 'kl037'); } // 37
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M841.6 529.43v-21.46l33.12 21.46v-21.46z') { addSvgElem(Index, Element, 'kl029'); } // 29
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M733.76 579.16V557.7l33.12 21.46V557.7z') { addSvgElem(Index, Element, 'kl028'); } // 28
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M985.26 579.16V557.7l33.12 21.46V557.7z') { addSvgElem(Index, Element, 'kl007'); } // 07
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M984.36 640.26V618.8l33.12 21.46V618.8z') { addSvgElem(Index, Element, 'kl025'); } // 25
      })
      // TEXT
      ObjectSvg.svg.querySelectorAll('text').forEach((TextElement, TextIndex) => {
        if (TextElement.innerHTML === '11:05:39') { addSvgElem(Index, TextElement, 'lifetime'); }
        ////////////////////////////////
        if (TextElement.innerHTML === '0' && TextElement.getAttribute('x') == '860.96' && TextElement.getAttribute('y') == '355.11') { addSvgElem(Index, TextElement, 'kl048_proc'); }  // 48
        if (TextElement.innerHTML === '100' && TextElement.getAttribute('x') == '732.24' && TextElement.getAttribute('y') == '477.86') { addSvgElem(Index, TextElement, 'kl038_proc'); }  // 38
        if (TextElement.innerHTML === '63' && TextElement.getAttribute('x') == '996.87' && TextElement.getAttribute('y') == '477.86') { addSvgElem(Index, TextElement, 'kl037_proc'); }  // 37
        if (TextElement.innerHTML === '51') { addSvgElem(Index, TextElement, 'kl029_proc'); }                                                                                              // 29
        if (TextElement.innerHTML === '0' && TextElement.getAttribute('x') == '746.9' && TextElement.getAttribute('y') == '592.85') { addSvgElem(Index, TextElement, 'kl028_proc'); }  // 28
        if (TextElement.innerHTML === '0' && TextElement.getAttribute('x') == '998.47' && TextElement.getAttribute('y') == '592.85') { addSvgElem(Index, TextElement, 'kl007_proc'); }  // 07
        if (TextElement.innerHTML === '100' && TextElement.getAttribute('x') == '989.51' && TextElement.getAttribute('y') == '655.87') { addSvgElem(Index, TextElement, 'kl025_proc'); }  // 25
        ////////////////////////////////
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '51') { addSvgElem(Index, Element, 'kl029_proc', 'middle'); }
        if (Element.innerHTML === '0' && Element.hasAttribute('x') && Element.getAttribute('x') === '746.9' && Element.hasAttribute('y') && Element.getAttribute('y') === '592.85') { addSvgElem(Index, Element, 'kl028_proc', 'center'); }
        if (Element.innerHTML === '0' && Element.hasAttribute('x') && Element.getAttribute('x') === '998.47' && Element.hasAttribute('y') && Element.getAttribute('y') === '592.85') { addSvgElem(Index, Element, 'kl007_proc', 'center'); }
        if (Element.innerHTML === '-999,00' && TextIndex === 168) { addSvgElem(Index, Element, 'Q_7QI_01'); }
        if (Element.innerHTML === '11' && TextIndex === 166) { addSvgElem(Index, Element, 'Q_5QI_01_01'); }
        if (Element.innerHTML === '81' && TextIndex === 167) { addSvgElem(Index, Element, 'T_5QI_01_02'); }
        if (Element.innerHTML === '29' && TextIndex === 169) { addSvgElem(Index, Element, 'T_7TI_41'); }
        if (Element.innerHTML === '18,18' && TextIndex === 170) { addSvgElem(Index, Element, 'P_7PI_12'); }
        if (Element.innerHTML === '189371' && TextIndex === 171) { addSvgElem(Index, Element, 'F_7FI_05'); }
        if (Element.innerHTML === '20' && TextIndex === 172) { addSvgElem(Index, Element, 'T_7TI_40'); }
        if (Element.innerHTML === '0,00' && TextIndex === 173) { addSvgElem(Index, Element, 'P_7PI_11'); }
        if (Element.innerHTML === '0' && TextIndex === 174) { addSvgElem(Index, Element, 'F_7FI_04'); }
        if (Element.innerHTML === '0,00' && TextIndex === 177) { addSvgElem(Index, Element, 'CO_8QI_05_01'); }
        if (Element.innerHTML === '0,00' && TextIndex === 178) { addSvgElem(Index, Element, 'NOX_8QI_05_01'); }
        if (Element.innerHTML === '0,00' && TextIndex === 179) { addSvgElem(Index, Element, 'SO2_8QI_05_01'); }
        if (Element.innerHTML === '9,15' && TextIndex === 180) { addSvgElem(Index, Element, '7PI_13'); }
        if (Element.innerHTML === '91' && TextIndex === 181) { addSvgElem(Index, Element, 'P_7PI_42'); }
        if (Element.innerHTML === '412' && TextIndex === 182) { addSvgElem(Index, Element, 'T_5PI_08'); }
        if (Element.innerHTML === '21' && TextIndex === 185) { addSvgElem(Index, Element, 'TI_36'); }
        if (Element.innerHTML === '900' && TextIndex === 186) { addSvgElem(Index, Element, 'FI_03'); }
        if (Element.innerHTML === '1202' && TextIndex === 183) { addSvgElem(Index, Element, 'T_5TI_21'); }
        if (Element.innerHTML === '1210' && TextIndex === 184) { addSvgElem(Index, Element, 'T_5TI_22'); }
        if (Element.innerHTML === '526,80' && TextIndex === 187) { addSvgElem(Index, Element, 'PI_09'); }
        if (Element.innerHTML === '0' && TextIndex === 193) { addSvgElem(Index, Element, 'BNK №1_Fr'); }
        if (Element.innerHTML === '0' && TextIndex === 194) { addSvgElem(Index, Element, 'BNK №1_Fb'); }
        if (Element.innerHTML === '159' && TextIndex === 94) { addSvgElem(Index, Element, 'BNK №1'); }
        if (Element.innerHTML === '1296' && TextIndex === 95) { addSvgElem(Index, Element, 'BNK №1'); }
        if (Element.innerHTML === '105385' && TextIndex === 191) { addSvgElem(Index, Element, 'BNK №2_Fr'); }
        if (Element.innerHTML === '130113' && TextIndex === 192) { addSvgElem(Index, Element, 'BNK №2_Fb'); }
        if (Element.innerHTML === '1330' && TextIndex === 92) { addSvgElem(Index, Element, 'BNK №2'); }
        if (Element.innerHTML === '339' && TextIndex === 93) { addSvgElem(Index, Element, 'BNK №2'); }
        if (Element.innerHTML === '80930' && TextIndex === 189) { addSvgElem(Index, Element, 'BNK №3_Fr'); }
        if (Element.innerHTML === '95531' && TextIndex === 190) { addSvgElem(Index, Element, 'BNK №3_Fb'); }
        if (Element.innerHTML === '1331' && TextIndex === 90) { addSvgElem(Index, Element, 'BNK №3'); }
        if (Element.innerHTML === '156' && TextIndex === 91) { addSvgElem(Index, Element, 'BNK №3'); }
        if (Element.innerHTML === '1210' && TextIndex === 188) { addSvgElem(Index, Element, 'vybor signala'); }
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

      //  CIRCLE
      ObjectSvg.svg.querySelectorAll('circle').forEach((Element) => {
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '864.68' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '329.95' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl048'); }  // 48-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '864.68' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '329.95' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl048'); }  // 48-2
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '742.4' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '393.65' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl039'); }  // 39-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '742.4' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '393.65' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl039'); }  // 39-2
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '1000.03' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '394.03' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl030'); }  // 30-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '1000.03' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '394.03' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl030'); }  // 30-2
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '743.93' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '452.81' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl038'); }  // 38-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '743.93' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '452.81' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl038'); }  // 38-2
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '1003.04' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '452.21' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl037'); }  // 37-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '1003.04' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '452.21' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl037'); }  // 37-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '858.16' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '518.7' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl029'); }  // 29-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '858.16' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '518.7' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl029'); }  // 29-2
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '750.32' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '568.43' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl028'); }  // 28-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '750.32' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '568.43' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl028'); }  // 28-2
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '1001.82' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '568.43' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl007'); }  // 07-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '1001.82' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '568.43' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl007'); }  // 07-2
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '1000.92' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '629.53' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl025'); }  // 25-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '1000.92' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '629.53' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl025'); }  // 25-2
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '878.86' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '702.28' && Element.getAttribute('r') == '5.61') { addSvgElem(Index, Element, 'circle_1_kl014'); }  // 14-1
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '878.86' && Element.hasAttribute('cy') && Element.getAttribute('cy') == '702.28' && Element.getAttribute('r') == '9.18') { addSvgElem(Index, Element, 'circle_2_kl014'); }  // 14-2
      })
    }
    if (ObjectSvg.name === 'vnk_spvg') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '11:05:39') { addSvgElem(Index, Element, 'lifetime'); }
        if (Element.innerHTML === '42' && TextIndex === 337) { addSvgElem(Index, Element, 'T_6TI_39_1'); }
        if (Element.innerHTML === '17' && TextIndex === 397) { addSvgElem(Index, Element, 'T_6TI_38_1'); }
        if (Element.innerHTML === '28' && TextIndex === 339) { addSvgElem(Index, Element, 'T_6TI_37_1'); }
        if (Element.innerHTML === '36' && TextIndex === 340) { addSvgElem(Index, Element, 'T_6TI_39_2'); }
        if (Element.innerHTML === '17' && TextIndex === 338) { addSvgElem(Index, Element, 'T_6TI_38_2'); }
        if (Element.innerHTML === '36' && TextIndex === 341) { addSvgElem(Index, Element, 'T_6TI_37_2'); }
        if (Element.innerHTML === '67' && TextIndex === 342) { addSvgElem(Index, Element, 'T_6TI_39_3'); }
        if (Element.innerHTML === '21' && TextIndex === 344) { addSvgElem(Index, Element, 'T_6TI_38_3'); }
        if (Element.innerHTML === '69' && TextIndex === 345) { addSvgElem(Index, Element, 'T_6TI_37_3'); }
        if (Element.innerHTML === '67' && TextIndex === 343) { addSvgElem(Index, Element, 'T_6TI_37_4'); }
        if (Element.innerHTML === '22' && TextIndex === 346) { addSvgElem(Index, Element, 'T_6TI_38_4'); }
        if (Element.innerHTML === '66' && TextIndex === 347) { addSvgElem(Index, Element, 'T_6TI_39_4'); }
        if (Element.innerHTML === '66' && TextIndex === 350) { addSvgElem(Index, Element, 'T_6TI_39_5'); }
        if (Element.innerHTML === '21' && TextIndex === 349) { addSvgElem(Index, Element, 'T_6TI_38_5'); }
        if (Element.innerHTML === '76' && TextIndex === 348) { addSvgElem(Index, Element, 'T_6TI_37_5'); }
        if (Element.innerHTML === '64' && TextIndex === 351) { addSvgElem(Index, Element, 'T_6TI_37_6'); }
        if (Element.innerHTML === '22' && TextIndex === 352) { addSvgElem(Index, Element, 'T_6TI_38_6'); }
        if (Element.innerHTML === '65' && TextIndex === 353) { addSvgElem(Index, Element, 'T_6TI_39_6'); }
        if (Element.innerHTML === '70' && TextIndex === 356) { addSvgElem(Index, Element, 'T_6TI_39_7'); }
        if (Element.innerHTML === '70' && TextIndex === 354) { addSvgElem(Index, Element, 'T_6TI_37_7'); }
        if (Element.innerHTML === '21' && TextIndex === 355) { addSvgElem(Index, Element, 'T_6TI_38_7'); }
        if (Element.innerHTML === '21' && TextIndex === 358) { addSvgElem(Index, Element, 'T_6TI_38_8'); }
        if (Element.innerHTML === '64' && TextIndex === 359) { addSvgElem(Index, Element, 'T_6TI_39_8'); }
        if (Element.innerHTML === '64' && TextIndex === 357) { addSvgElem(Index, Element, 'T_6TI_37_8'); }
        if (Element.innerHTML === '37' && TextIndex === 362) { addSvgElem(Index, Element, 'T_6TI_39_9'); }
        if (Element.innerHTML === '20' && TextIndex === 361) { addSvgElem(Index, Element, 'T_6TI_38_9'); }
        if (Element.innerHTML === '35' && TextIndex === 360) { addSvgElem(Index, Element, 'T_6TI_37_9'); }
        if (Element.innerHTML === '38' && TextIndex === 363) { addSvgElem(Index, Element, 'T_6TI_37_10'); }
        if (Element.innerHTML === '20' && TextIndex === 364) { addSvgElem(Index, Element, 'T_6TI_38_10'); }
        if (Element.innerHTML === '41' && TextIndex === 365) { addSvgElem(Index, Element, 'T_6TI_39_10'); }
        if (Element.innerHTML === '0,00' && TextIndex === 378) { addSvgElem(Index, Element, 'CO_8QI_05__1'); }
        if (Element.innerHTML === '0,00' && TextIndex === 379) { addSvgElem(Index, Element, 'NOX_8QI_05__2'); }
        if (Element.innerHTML === '0,00' && TextIndex === 380) { addSvgElem(Index, Element, 'SO2_8QI_05__4'); }
        if (Element.innerHTML === '30' && TextIndex === 384) { addSvgElem(Index, Element, 'T_9TI_41'); }
        if (Element.innerHTML === '86' && TextIndex === 385) { addSvgElem(Index, Element, 'T_9TI_42'); }
        if (Element.innerHTML === '92' && TextIndex === 386) { addSvgElem(Index, Element, 'T_7TI_42'); }
        if (Element.innerHTML === '134' && TextIndex === 387) { addSvgElem(Index, Element, 'T_9TI_34'); }
        if (Element.innerHTML === '226' && TextIndex === 388) { addSvgElem(Index, Element, 'T_9TI_32'); }
        if (Element.innerHTML === '73' && TextIndex === 390) { addSvgElem(Index, Element, 'T_9TI_35'); }
        if (Element.innerHTML === '58' && TextIndex === 389) { addSvgElem(Index, Element, 'T_9TI_33'); }
        if (Element.innerHTML === '36' && TextIndex === 391) { addSvgElem(Index, Element, 'T_9TI_44'); }
        if (Element.innerHTML === '36' && TextIndex === 392) { addSvgElem(Index, Element, 'T_9TI_30'); }
        if (Element.innerHTML === '10,00' && TextIndex === 393) { addSvgElem(Index, Element, 'P_PI_16'); }
        if (Element.innerHTML === '0,86' && TextIndex === 368) { addSvgElem(Index, Element, 'V_6VI_3_1'); }
        if (Element.innerHTML === '1,96' && TextIndex === 371) { addSvgElem(Index, Element, 'V_6VI_3_2'); }
        if (Element.innerHTML === '1,50' && TextIndex === 374) { addSvgElem(Index, Element, 'V_6VI_3_3'); }
        if (Element.innerHTML === '2,13' && TextIndex === 377) { addSvgElem(Index, Element, 'V_6VI_3_4'); }
        if (Element.innerHTML === '0,16' && TextIndex === 367) { addSvgElem(Index, Element, 'V_6VI_2_1'); }
        if (Element.innerHTML === '0,56' && TextIndex === 370) { addSvgElem(Index, Element, 'V_6VI_2_2'); }
        if (Element.innerHTML === '0,21' && TextIndex === 373) { addSvgElem(Index, Element, 'V_6VI_2_3'); }
        if (Element.innerHTML === '0,32' && TextIndex === 376) { addSvgElem(Index, Element, 'V_6VI_2_4'); }
        if (Element.innerHTML === '0,10' && TextIndex === 366) { addSvgElem(Index, Element, 'V_6VI_2_1'); }
        if (Element.innerHTML === '1,90' && TextIndex === 369) { addSvgElem(Index, Element, 'V_6VI_2_2'); }
        if (Element.innerHTML === '2,78' && TextIndex === 372) { addSvgElem(Index, Element, 'V_6VI_2_3'); }
        if (Element.innerHTML === '1,67' && TextIndex === 375) { addSvgElem(Index, Element, 'V_6VI_2_4'); }
        if (Element.innerHTML === '18' && TextIndex === 381) { addSvgElem(Index, Element, 'T_6TI_31_3'); }
        if (Element.innerHTML === '20' && TextIndex === 382) { addSvgElem(Index, Element, 'T_6TI_31_2'); }
        if (Element.innerHTML === '18' && TextIndex === 383) { addSvgElem(Index, Element, 'T_6TI_31_1'); }
        if (Element.innerHTML === '100' && TextIndex === 402) { addSvgElem(Index, Element, 'kl0333_proc'); }
        if (Element.innerHTML === '0' && TextIndex === 414) { addSvgElem(Index, Element, 'kl0332_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 401) { addSvgElem(Index, Element, 'kl0331_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 398) { addSvgElem(Index, Element, 'kl0313_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 399) { addSvgElem(Index, Element, 'kl0313_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 400) { addSvgElem(Index, Element, 'kl0312_proc'); }
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
        if (Element.innerHTML === '0  %' && TextIndex === 301) { addSvgElem(Index, Element, 'kl035_proc'); }
        if (Element.innerHTML === '100' && TextIndex === 404) { addSvgElem(Index, Element, 'kl004_proc'); }
        if (Element.innerHTML === '64  %' && TextIndex === 208) { addSvgElem(Index, Element, 'klOF3_proc'); }
        if (Element.innerHTML === '0  %' && TextIndex === 209) { addSvgElem(Index, Element, 'klOF2_proc'); }
        if (Element.innerHTML === '65  %' && TextIndex === 210) { addSvgElem(Index, Element, 'klOF1_proc'); }
      })
    }
    if (ObjectSvg.name === 'O_n_k_na_VNK_posle_1') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'Управление клапаном 116') { addSvgElem(Index, Element, 'title_work_vn',); }
        if (Element.innerHTML === 'Ручной' && Element.getAttribute('transform') == 'matrix(1.00617 0 0 1 -118.012 -56.515)') { addSvgElem(Index, Element, 'status_control_vnk_text', false); }
        if (Element.innerHTML === 'Открыт') { addSvgElem(Index, Element, 'status_window_text', false); }
        if (Element.innerHTML === '100') { addSvgElem(Index, Element, 'polozenie_text'); }
        if (Element.innerHTML === 'Открыть') { addSvgElem(Index, Element, 'polozenie_button_text'); }
        if (Element.innerHTML === 'Закрыть') { addSvgElem(Index, Element, 'polozenie_button_zakr_text'); }
        if (Element.innerHTML === 'СТОП') { addSvgElem(Index, Element, 'polozenie_button_stop_text'); }
        if (Element.innerHTML === 'Сброс ошибки') { addSvgElem(Index, Element, 'polozenie_button_reset_text'); }
        if (Element.innerHTML === 'Авто') { addSvgElem(Index, Element, 'uprav_auto_text'); }
        if (Element.innerHTML === 'Ручной' && Element.getAttribute('transform') == 'matrix(1.00617 0 0 1 98.702 -83.619)') { addSvgElem(Index, Element, 'uprav_rucnoy_text'); }
        if (Element.innerHTML === '45') { addSvgElem(Index, Element, 'time_full_vnk_text'); }
      })


      ObjectSvg.svg.querySelectorAll('path').forEach((Element) => {
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm58.35 75.18 14.08-7.8 14.07-7.8v31.2l-14.07-7.8z') { addSvgElem(Index, Element, 'right_vn'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'm58.69 75.18-14.08-7.8-14.08-7.8v31.2l14.08-7.8z') { addSvgElem(Index, Element, 'left_vn'); }
        if (Element.hasAttribute('d') && Element.getAttribute('d') === 'M9.78 190.88h141.98v21.19H9.78z') { addSvgElem(Index, Element, 'block_scheme_sobr'); }
      })

      ObjectSvg.svg.querySelectorAll('ellipse').forEach((Element) => {
        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '58.51'
          && Element.hasAttribute('cy') && Element.getAttribute('cy') == '75.04'
          && Element.hasAttribute('rx') && Element.getAttribute('rx') == '7.8'
          && Element.hasAttribute('rx') && Element.getAttribute('ry') == '7.75') { addSvgElem(Index, Element, 'circle_1_win1'); }  // cir win1

        if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '58.51'
          && Element.hasAttribute('cy') && Element.getAttribute('cy') == '75.04'
          && Element.hasAttribute('rx') && Element.getAttribute('rx') == '16.12'
          && Element.hasAttribute('rx') && Element.getAttribute('ry') == '16.02') { addSvgElem(Index, Element, 'circle_2_win1'); }  // cir win2

        // if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '7.8') { addSvgElem(Index, Element, 'circle_1_kl029'); }
        // if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '16.12') { addSvgElem(Index, Element, 'circle_2_kl029'); }
      })

      ObjectSvg.svg.querySelectorAll('rect').forEach((Element) => {
        // if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '4.14' && Element.getAttribute('x') && Element.getAttribute('x') === '169.84' && Element.getAttribute('y') && Element.getAttribute('y') === '121.6') { addSvgElem(Index, Element, 'btn_close_x'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '4.14' && Element.getAttribute('x') && Element.getAttribute('x') === '169.84' && Element.getAttribute('y') && Element.getAttribute('y') === '83.22') { addSvgElem(Index, Element, 'btn_auto'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '4.14' && Element.getAttribute('x') && Element.getAttribute('x') === '257.34' && Element.getAttribute('y') && Element.getAttribute('y') === '83.22') { addSvgElem(Index, Element, 'btn_rucnoy'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '4.14' && Element.getAttribute('x') && Element.getAttribute('x') === '169.84' && Element.getAttribute('y') && Element.getAttribute('y') === '121.6') { addSvgElem(Index, Element, 'btn_open'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '4.14' && Element.getAttribute('x') && Element.getAttribute('x') === '257.34' && Element.getAttribute('y') && Element.getAttribute('y') === '121.6') { addSvgElem(Index, Element, 'btn_close'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '8.48' && Element.getAttribute('x') && Element.getAttribute('x') === '170.17' && Element.getAttribute('y') && Element.getAttribute('y') === '151.08') { addSvgElem(Index, Element, 'btn_stop'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '10.43' && Element.getAttribute('x') && Element.getAttribute('x') === '169.92' && Element.getAttribute('y') && Element.getAttribute('y') === '203.95') { addSvgElem(Index, Element, 'btn_reset'); }
        if (Element.hasAttribute('rx') && Element.getAttribute('rx') === '10.43' && Element.getAttribute('x') && Element.getAttribute('x') === '169.92' && Element.getAttribute('y') && Element.getAttribute('y') === '257.04') { addSvgElem(Index, Element, 'bypas_block'); }
        if (Element.hasAttribute('ry') && Element.getAttribute('ry') === '1.98' && Element.getAttribute('x') && Element.getAttribute('x') === '14.72' && Element.getAttribute('y') && Element.getAttribute('y') === '255.8') { addSvgElem(Index, Element, 'blocks_open'); }
        if (Element.hasAttribute('ry') && Element.getAttribute('ry') === '1.98' && Element.getAttribute('x') && Element.getAttribute('x') === '87.79' && Element.getAttribute('y') && Element.getAttribute('y') === '255.8') { addSvgElem(Index, Element, 'blocks_close'); }
      })

      //  CIRCLE
      // ObjectSvg.svg.querySelectorAll('circle').forEach((Element) => {
      //   if (Element.hasAttribute('cx') && Element.getAttribute('cx') == '58.51'  && Element.hasAttribute('cy') &&  Element.getAttribute('cy') == '75.04' && Element.getAttribute('r') == '5.61')  { addSvgElem(Index, Element, 'circle_1_kl048');  }  // 48-1
      // })



    }
    if (ObjectSvg.name === 'O_n_k_na_VNK_posle_2') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'Закрыть') { addSvgElem(Index, Element, 'title_open_vn',); }
      })
    }
    if (ObjectSvg.name === 'vvod_znachenij') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '0' && TextIndex === 1) { addSvgElem(Index, Element, 'vz_number', 'start'); }
      })
    }
    if (ObjectSvg.name === 'win_sym_302') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === 'ТТГ') { addSvgElem(Index, Element, 'ws3_ttg'); }
      })
    }
    if (ObjectSvg.name === 'O_p_n_na_k_na-o_2_na_VNK') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '180' && TextIndex === 48) { addSvgElem(Index, Element, 'Ustanovit_klapany_15_i_23_na_ugol_zazhig'); }
        if (Element.innerHTML === '65' && TextIndex === 49) { addSvgElem(Index, Element, 'Zakryt_otsechnoy_klapan_iz_smesh_gaze_22'); }
        if (Element.innerHTML === '180' && TextIndex === 50) { addSvgElem(Index, Element, 'Zakryt_otsechnoy_klapan_iz_smesh_gaze_16'); }
        if (Element.innerHTML === '5' && TextIndex === 51) { addSvgElem(Index, Element, 'Kontrol_davl_azota_v_kollekore'); }
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
      })
    }
    if (ObjectSvg.name === 'O_n_k_na_VNK') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element) => {
        if (Element.innerHTML === '60') { addSvgElem(Index, Element, 'Vremya_polnogo_dvizheniya_klapana'); }
        if (Element.innerHTML === '5') { addSvgElem(Index, Element, 'Kontrolnoye_vremy_avar_zakrytiya'); }
      })
    }
    if (ObjectSvg.name === 'Osnovnye_parametry_DP') {
      ObjectSvg.svg.querySelectorAll('text').forEach((Element, TextIndex) => {
        if (Element.innerHTML === '2.30') { addSvgElem(Index, Element, 'c_1_1'); }
        if (Element.innerHTML === '6003') { addSvgElem(Index, Element, 'c_1_2'); }
        if (Element.innerHTML === '128') { addSvgElem(Index, Element, 'c_1_3'); }
        if (Element.innerHTML === '112') { addSvgElem(Index, Element, 'c_1_4'); }
        if (Element.innerHTML === '113') { addSvgElem(Index, Element, 'c_1_5'); }
        if (Element.innerHTML === '124') { addSvgElem(Index, Element, 'c_1_6'); }
        if (Element.innerHTML === '48' && TextIndex === 38) { addSvgElem(Index, Element, 'c_1_7'); }
        if (Element.innerHTML === '0.24') { addSvgElem(Index, Element, 'c_2_1'); }
        if (Element.innerHTML === '1210') { addSvgElem(Index, Element, 'c_2_2'); }
        if (Element.innerHTML === '63' && TextIndex === 15) { addSvgElem(Index, Element, 'c_2_3'); }
        if (Element.innerHTML === '63' && TextIndex === 21) { addSvgElem(Index, Element, 'c_2_4'); }
        if (Element.innerHTML === '69') { addSvgElem(Index, Element, 'c_2_5'); }
        if (Element.innerHTML === '64' && TextIndex === 33) { addSvgElem(Index, Element, 'c_2_6'); }
        if (Element.innerHTML === '48' && TextIndex === 39) { addSvgElem(Index, Element, 'c_2_7'); }
        if (Element.innerHTML === '1.80') { addSvgElem(Index, Element, 'c_3_1'); }
        if (Element.innerHTML === '1.60') { addSvgElem(Index, Element, 'c_3_2'); }
        if (Element.innerHTML === '55' && TextIndex === 16) { addSvgElem(Index, Element, 'c_3_3'); }
        if (Element.innerHTML === '5') { addSvgElem(Index, Element, 'c_3_4'); }
        if (Element.innerHTML === '9') { addSvgElem(Index, Element, 'c_3_4'); }
        if (Element.innerHTML === '61') { addSvgElem(Index, Element, 'c_3_5'); }
        if (Element.innerHTML === '55' && TextIndex === 34) { addSvgElem(Index, Element, 'c_3_6'); }
        if (Element.innerHTML === '2071') { addSvgElem(Index, Element, 'c_3_7'); }
        if (Element.innerHTML === '1.55') { addSvgElem(Index, Element, 'c_4_1'); }
        if (Element.innerHTML === '9.7') { addSvgElem(Index, Element, 'c_4_2'); }
        if (Element.innerHTML === '62' && TextIndex === 17) { addSvgElem(Index, Element, 'c_4_3'); }
        if (Element.innerHTML === '6' && TextIndex === 24) { addSvgElem(Index, Element, 'c_4_4'); }
        if (Element.innerHTML === '3') { addSvgElem(Index, Element, 'c_4_4'); }
        if (Element.innerHTML === '62' && TextIndex === 30) { addSvgElem(Index, Element, 'c_4_5'); }
        if (Element.innerHTML === '6' && TextIndex === 35) { addSvgElem(Index, Element, 'c_4_6'); }
        if (Element.innerHTML === '0' && TextIndex === 36) { addSvgElem(Index, Element, 'c_4_6'); }
        if (Element.innerHTML === '4.12') { addSvgElem(Index, Element, 'c_5_1'); }
        if (Element.innerHTML === '30.1') { addSvgElem(Index, Element, 'c_5_2'); }
        if (Element.innerHTML === '6' && TextIndex === 18) { addSvgElem(Index, Element, 'c_5_3'); }
        if (Element.innerHTML === '2') { addSvgElem(Index, Element, 'c_5_3'); }
        if (Element.innerHTML === '57') { addSvgElem(Index, Element, 'c_5_4'); }
        if (Element.innerHTML === '64' && TextIndex === 31) { addSvgElem(Index, Element, 'c_5_5'); }
        if (Element.innerHTML === '65') { addSvgElem(Index, Element, 'c_5_6'); }
        if (Element.innerHTML === '-0') { addSvgElem(Index, Element, 'c_6_1'); }
        if (Element.innerHTML === '30007') { addSvgElem(Index, Element, 'c_6_2'); }
        if (Element.innerHTML === '25.3') { addSvgElem(Index, Element, 'c_6_3'); }
        if (Element.innerHTML === '21.8') { addSvgElem(Index, Element, 'c_6_4'); }
        if (Element.innerHTML === '8.4') { addSvgElem(Index, Element, 'c_6_5'); }
        if (Element.innerHTML === '43.5') { addSvgElem(Index, Element, 'c_6_6'); }
        if (Element.innerHTML === '0.0') { addSvgElem(Index, Element, 'c_6_7'); }
        if (Element.innerHTML === '603873') { addSvgElem(Index, Element, 'c_6_8'); }
        if (Element.innerHTML === '217.4') { addSvgElem(Index, Element, 'c_7_1'); }
        if (Element.innerHTML === '8.6') { addSvgElem(Index, Element, 'c_7_2'); }
        if (Element.innerHTML === '31943') { addSvgElem(Index, Element, 'c_7_3'); }
        if (Element.innerHTML === '45.21') { addSvgElem(Index, Element, 'c_7_4'); }
        if (Element.innerHTML === '0.80') { addSvgElem(Index, Element, 'c_7_5'); }
        if (Element.innerHTML === '0.45') { addSvgElem(Index, Element, 'c_7_6'); }
        if (Element.innerHTML === '0.86') { addSvgElem(Index, Element, 'c_7_7'); }
        if (Element.innerHTML === '0' && TextIndex === 52) { addSvgElem(Index, Element, 'c_7_8'); }
        if (Element.innerHTML === '1433') { addSvgElem(Index, Element, 'c_7_9'); }
        if (Element.innerHTML === '5052') { addSvgElem(Index, Element, 'c_8_1'); }
        if (Element.innerHTML === '40' && TextIndex === 53) { addSvgElem(Index, Element, 'c_8_2'); }
        if (Element.innerHTML === '40' && TextIndex === 54) { addSvgElem(Index, Element, 'c_8_3'); }
        if (Element.innerHTML === '40' && TextIndex === 55) { addSvgElem(Index, Element, 'c_8_4'); }
      })
    }
    if (ObjectSvg.name === 'bzu') {
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
        if (Element.innerHTML === '0' && TextIndex === 116) { addSvgElem(Index, Element, 'Vtorichnye vyskazyvaniia_F_B2'); }
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
        if (Element.innerHTML === 'в работе' && TextIndex === 253) { addSvgElem(Index, Element, 'v rabote'); }
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
        if (Element.innerHTML === 'Достигнут заданный' && TextIndex === 273) { addSvgElem(Index, Element, 'dostignut zadannyy'); }
        if (Element.innerHTML === 'уровень' && TextIndex === 274) { addSvgElem(Index, Element, 'uroven'); }
        if (Element.innerHTML === 'Работа по ' && TextIndex === 266) { addSvgElem(Index, Element, 'rab_max_ur', 'start'); Element.innerHTML = 'Работа по MAХ уровню'; }
        if (Element.innerHTML === 'MA' && TextIndex === 268) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'Х уровню' && TextIndex === 267) { Element.innerHTML = ''; }
        if (Element.innerHTML === '1' && TextIndex === 321) { addSvgElem(Index, Element, 'B2_nomerstr'); Element.innerHTML = '14'; }
        if (Element.innerHTML === '4' && TextIndex === 322) { Element.innerHTML = ''; }
        if (Element.innerHTML === 'Ош.мех.зонда' && TextIndex === 272) { addSvgElem(Index, Element, 'oh_mex_zonda'); }
      })
    }
  })

  devHelper.svgVals.forEach((Element) => {
    pushSvgDisplaysArr(Element);
    let tempUnicArr = [];
    Element.activeElements.forEach((Element2) => {
      // Element2.element.innerHTML = 'ВЗЯЛ';
      //  ПРоверка на повторение имён элементов
      let isUnique = true;
      tempUnicArr.forEach(uniqueElement => {
        if (Element2.name === uniqueElement.name) {
          isUnique = false;
          console.warn(`Дублирование элемента ${Element2.name} в схеме ${Element.name}.`);
        }
      });
      if (isUnique) tempUnicArr.push(Element2);

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
            { x: 53.7, y: 1, w: 10.3, h: 3, name: 'dp', },
            { x: 64.0, y: 1, w: 10.3, h: 3, name: 'bzu', },


            { x: 41.5, y: 50, w: 2.7, h: 3.5, forAction: true, id: 'kl029', value: { window: 'O_n_k_na_VNK_posle_1', x: 900, y: 473, } },    // win 29
            { x: 35.9, y: 43.5, w: 2.7, h: 3.5, forAction: true, id: 'kl038', value: { window: 'O_n_k_na_VNK_posle_1', x: 770, y: 440, } },    // win 38
            { x: 48.8, y: 43.5, w: 2.7, h: 3.5, forAction: true, id: 'kl037', value: { window: 'O_n_k_na_VNK_posle_1', x: 1030, y: 440, } },    // win 37
            { x: 48.8, y: 55, w: 2.7, h: 3.5, forAction: true, id: 'kl007', value: { window: 'O_n_k_na_VNK_posle_1', x: 1082, y: 555, } },    // win 07
            { x: 36.2, y: 55, w: 2.7, h: 3.5, forAction: true, id: 'kl028', value: { window: 'O_n_k_na_VNK_posle_1', x: 1082, y: 480, } },    // win 28



          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'BVNK_VNK1') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
            { x: 53.7, y: 1, w: 10.3, h: 3, name: 'dp', },
            { x: 64.0, y: 1, w: 10.3, h: 3, name: 'bzu', },


            { x: 10.1, y: 8.5, w: 7, h: 3, forAction: true, id: 'perekidta_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 } },
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'BVNK_VNK2') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
            { x: 53.7, y: 1, w: 10.3, h: 3, name: 'dp', },
            { x: 64.0, y: 1, w: 10.3, h: 3, name: 'bzu', },

            { x: 10.1, y: 8.5, w: 7, h: 3, forAction: true, id: 'perekidta_btn', value: { window: 'O_p_n_na_k_p_na_VNK', x: 270, y: 116 } },
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'BVNK_VNK3') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
            { x: 53.7, y: 1, w: 10.3, h: 3, name: 'dp', },
            { x: 64.0, y: 1, w: 10.3, h: 3, name: 'bzu', },

            { x: 73.5, y: 83.0, w: 2, h: 3, forAction: true, id: 'vn_310_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1510, y: 635 }, },  // win 310
            { x: 73.5, y: 76.7, w: 2, h: 3, forAction: true, id: 'vn_318_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1510, y: 635 }, },  // win 318
            { x: 65.35, y: 42.9, w: 2, h: 3, forAction: true, id: 'vn_319_btn', value: { window: 'O_n_k_na_VNK_posle_1', x: 1343, y: 450 }, },  // win 319
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'O_n_k_na_VNK_posle_1') {
          let tempArrHelperButtons = [
            { x: 61.00, y: 47.2, w: 1.5, h: 2.4, forAction: true, name: textureName, id: 'close_w1', removeWindow: textureSvgName, },// close
            { x: 53.40, y: 59.1, w: 4.0, h: 2.6, forAction: true, id: 'open_vn', value: { window: 'O_n_k_na_VNK_posle_2', x: 1124, y: 546, } },// open
            { x: 83.80, y: 78.8, w: 8.6, h: 2.6, forAction: true, id: 'win_posle_1_stop_btn', x: 1124, y: 546, },  // stop  //  freeBTN
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'O_n_k_na_VNK_posle_2') {
          let tempArrHelperButtons = [
            { x: 60.2, y: 57, w: 3.2, h: 2.4, removeWindow: textureSvgName, forAction: true, id: 'close_vn', }, // close
            { x: 56.5, y: 57, w: 3.2, h: 2.4, removeWindow: textureSvgName, forAction: true, id: 'open_vn1', }, // open
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'dp') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
            { x: 53.7, y: 1, w: 10.3, h: 3, name: 'dp', },
            { x: 64.0, y: 1, w: 10.3, h: 3, name: 'bzu', },
            { x: 94.4, y: 26, w: 4, h: 3, forAction: true, id: 't_r_4', value: { window: 'vvod_znachenij', x: 900, y: 473, } },
            { x: 69.4, y: 90, w: 2.5, h: 4, forAction: true, id: 't_b_302_btn', value: { window: 'win_sym_302', x: 56, y: 48, } },
            { x: 94.4, y: 29.6, w: 4, h: 3, forAction: true, id: 't_r_5', value: { window: 'vvod_znachenij', x: 900, y: 473, } },
            { x: 94.4, y: 0, w: 4, h: 3, forAction: true, id: 't_r_000', value: { window: 'priczvuksinal', x: 956, y: 112, } },   // для 5.13 // удалить на фулл версии
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'win_sym_302') {
          let tempArrHelperButtons = [
            { x: 46, y: 5.6, w: 1.6, h: 3, removeWindow: textureSvgName, forAction: true, id: 'ws3_close_btn', }, // close
            { x: 18.65, y: 75, w: 4, h: 5.5, forAction: true, id: 'ws3_ttg_text_btn', },
            { x: 22.65, y: 75, w: 4, h: 5.5, forAction: true, id: 'ws3_ttg2_text_btn', value: { window: 'priczvuksinal', x: 956, y: 112, } },

            // { x: 63, y: 40, w: 10, h: 3,   forAction: true, id: 'NETU_win_close', },  // temp "CLOSE" new window

          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'vvod_znachenij') {
          let tempArrHelperButtons = [
            { x: 58.4, y: 48, w: 1.5, h: 2, removeWindow: textureSvgName, forAction: true, id: 'vz_close', }, // close
            { x: 47.6, y: 96, w: 4.0, h: 4, removeWindow: textureSvgName, forAction: true, id: 'vz_ok', },    // ok
            { x: 47.7, y: 82.2, w: 3.0, h: 4, forAction: true, id: 'vz_0', },    
            { x: 47.7, y: 77.5, w: 3.0, h: 4, forAction: true, id: 'vz_1', },    
            { x: 51.1, y: 77.5, w: 3.0, h: 4, forAction: true, id: 'vz_2', },    
            { x: 54.4, y: 77.5, w: 3.0, h: 4, forAction: true, id: 'vz_3', },    
            { x: 47.7, y: 72.9, w: 3.0, h: 4, forAction: true, id: 'vz_4', },    
            { x: 51.1, y: 72.9, w: 3.0, h: 4, forAction: true, id: 'vz_5', },    
            { x: 54.4, y: 72.9, w: 3.0, h: 4, forAction: true, id: 'vz_6', },    
            { x: 47.7, y: 68, w: 3.0, h: 4, forAction: true, id: 'vz_7', },    
            { x: 51.1, y: 68, w: 3.0, h: 4, forAction: true, id: 'vz_8', },    
            { x: 54.4, y: 68, w: 3.0, h: 4, forAction: true, id: 'vz_9', },   
          ];
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'O_p_n_na_k_p_na_VNK') {
          let tempArrHelperButtons = [
            { x: 27.2, y: 11.8, w: 2.25, h: 2.6, forAction: true, id: 'perekidta_exit_btn', removeWindow: textureSvgName, },
            { x: 15.6, y: 29, w: 11.9, h: 3.6, forAction: true, id: 'nagrev_otd2_btn', value: { window: 'O_p_n_na_k_na-o_2_na_VNK', x: 379, y: 32, } },
            { x: 15.6, y: 41.4, w: 11.9, h: 3.6, forAction: true, id: 'otdel_otdel2_btn', value: { window: 'win_otdel2_na_vnk', x: 402, y: 468, } },

          ]
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'priczvuksinal') {
          let tempArrHelperButtons = [
            { x: 83.1, y: 17.7, w: 5, h: 3, removeWindow: textureSvgName, forAction: true, id: 'pzs_close_btn' },
          ]
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'O_p_n_na_k_na-o_2_na_VNK') {
          let tempArrHelperButtons = [
            { x: 63.7, y: 3.4, w: 2.4, h: 2.4, removeWindow: textureSvgName, forAction: true, id: 'pericNagrev_close_btn' },
            { x: 31.8, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_pusk_btn', value: { window: 'O_n_k_na_VNK_posle_2', x: 678, y: 917 } },
            { x: 35, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_stop_btn' },
            { x: 38.2, y: 94.6, w: 3.4, h: 3.4, forAction: true, id: 'pericNagrev_reset_btn' },
          ]
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'win_otdel2_na_vnk') {
          let tempArrHelperButtons = [
            { x: 45, y: 48, w: 2.2, h: 2.4, removeWindow: textureSvgName, forAction: true, id: 'otdel2_close_btn' },
            { x: 34.5, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_pusk_btn', value: { window: 'O_n_k_na_VNK_posle_2', x: 707, y: 908 } },
            { x: 38.3, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_stop_btn' },
            { x: 42.1, y: 90, w: 3.8, h: 3.4, forAction: true, id: 'otdel2_reset_btn' },
          ]
          createSvgHelperButtons(tempArrHelperButtons);
        } else if (textureSvgName === 'bzu') {
          let tempArrHelperButtons = [
            { x: 1, y: 1, w: 10.5, h: 3, name: 'vnk_main', },
            { x: 11.6, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK1', },
            { x: 22.2, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK2', },
            { x: 32.7, y: 1, w: 10.4, h: 3, name: 'BVNK_VNK3', },
            { x: 43.4, y: 1, w: 10.3, h: 3, name: 'vnk_spvg', },
            { x: 53.7, y: 1, w: 10.3, h: 3, name: 'dp', },
            { x: 64.0, y: 1, w: 10.3, h: 3, name: 'bzu', },


            { x: 71.7, y: 67.7, w: 4.5, h: 3.3, forAction: true, id: 'bzu_gruzit_btn' },
            { x: 58.3, y: 35.0, w: 9.8, h: 3.3, forAction: true, id: 'bzu_ZapretSledPorci_btn' },
            { x: 32.1, y: 45.3, w: 4.5, h: 6.1, forAction: true, id: 'bzu_raketaNGUK2_btn' },
            { x: 29.7, y: 53.1, w: 3.9, h: 3.5, forAction: true, id: 'bzu_pause_btn' },

          ]
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
            if (currentActonObject && currentActonObject.hasOwnProperty('action') && currentActonObject.action.hasOwnProperty('helper2D')) {
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