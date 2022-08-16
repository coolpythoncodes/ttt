// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc3 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Object({
    board: ctc3,
    playerTurn: ctc4
    });
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc0, ctc5, ctc1],
      5: [ctc0, ctc0, ctc5, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc2 = stdlib.T_Tuple([ctc1]);
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Object({
    board: ctc4,
    playerTurn: ctc5
    });
  const ctc7 = stdlib.T_Null;
  
  
  const v938 = stdlib.protect(ctc0, interact.budget, 'for Alice\'s interact field budget');
  
  const txn1 = await (ctc.sendrecv({
    args: [v938],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:148:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v938, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v942], secs: v944, time: v943, didSend: v64, from: v941 } = txn1;
      
      sim_r.txns.push({
        amt: v942,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v942], secs: v944, time: v943, didSend: v64, from: v941 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v950, time: v949, didSend: v74, from: v948 } = txn2;
  const v952 = stdlib.safeAdd(v942, v942);
  ;
  const v953 = ' ';
  const v962 = [v953, v953, v953, v953, v953, v953, v953, v953, v953];
  const v963 = {
    board: v962,
    playerTurn: true
    };
  let v975 = v963;
  let v976 = v949;
  let v983 = v952;
  
  while (await (async () => {
    const v987 = v975.board;
    const v988 = await stdlib.Array_asyncReduce([v987], true, async([v990], v989, v991) => {
      const v992 = 'x';
      const v993 = stdlib.digest(ctc2, [v990]);
      const v995 = stdlib.digest(ctc2, [v992]);
      const v996 = stdlib.digestEq(v993, v995);
      const v997 = 'o';
      const v1000 = stdlib.digest(ctc2, [v997]);
      const v1001 = stdlib.digestEq(v993, v1000);
      const v1002 = v996 ? true : v1001;
      const v1003 = v989 ? v1002 : false;
      
      return v1003;})
    let v1005;
    const v1006 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
    const v1007 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
    const v1008 = stdlib.digest(ctc2, [v1006]);
    const v1009 = stdlib.digest(ctc2, [v1007]);
    const v1010 = stdlib.digestEq(v1008, v1009);
    const v1012 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
    const v1014 = stdlib.digest(ctc2, [v1012]);
    const v1015 = stdlib.digestEq(v1008, v1014);
    const v1016 = v1010 ? v1015 : false;
    if (v1016) {
      v1005 = v1006;
      }
    else {
      const v1018 = '-';
      v1005 = v1018;
      }
    const v1019 = 'x';
    const v1020 = stdlib.digest(ctc2, [v1005]);
    const v1022 = stdlib.digest(ctc2, [v1019]);
    const v1023 = stdlib.digestEq(v1020, v1022);
    let v1024;
    const v1025 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
    const v1026 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
    const v1027 = stdlib.digest(ctc2, [v1025]);
    const v1028 = stdlib.digest(ctc2, [v1026]);
    const v1029 = stdlib.digestEq(v1027, v1028);
    const v1031 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
    const v1033 = stdlib.digest(ctc2, [v1031]);
    const v1034 = stdlib.digestEq(v1027, v1033);
    const v1035 = v1029 ? v1034 : false;
    if (v1035) {
      v1024 = v1025;
      }
    else {
      const v1037 = '-';
      v1024 = v1037;
      }
    const v1039 = stdlib.digest(ctc2, [v1024]);
    const v1042 = stdlib.digestEq(v1039, v1022);
    const v1043 = v1023 ? true : v1042;
    let v1044;
    const v1045 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
    const v1046 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
    const v1047 = stdlib.digest(ctc2, [v1045]);
    const v1048 = stdlib.digest(ctc2, [v1046]);
    const v1049 = stdlib.digestEq(v1047, v1048);
    const v1051 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
    const v1053 = stdlib.digest(ctc2, [v1051]);
    const v1054 = stdlib.digestEq(v1047, v1053);
    const v1055 = v1049 ? v1054 : false;
    if (v1055) {
      v1044 = v1045;
      }
    else {
      const v1057 = '-';
      v1044 = v1057;
      }
    const v1059 = stdlib.digest(ctc2, [v1044]);
    const v1062 = stdlib.digestEq(v1059, v1022);
    const v1063 = v1043 ? true : v1062;
    let v1064;
    if (v1016) {
      v1064 = v1006;
      }
    else {
      const v1077 = '-';
      v1064 = v1077;
      }
    const v1078 = 'o';
    const v1079 = stdlib.digest(ctc2, [v1064]);
    const v1081 = stdlib.digest(ctc2, [v1078]);
    const v1082 = stdlib.digestEq(v1079, v1081);
    const v1083 = v1063 ? true : v1082;
    let v1084;
    if (v1035) {
      v1084 = v1025;
      }
    else {
      const v1097 = '-';
      v1084 = v1097;
      }
    const v1099 = stdlib.digest(ctc2, [v1084]);
    const v1102 = stdlib.digestEq(v1099, v1081);
    const v1103 = v1083 ? true : v1102;
    let v1104;
    if (v1055) {
      v1104 = v1045;
      }
    else {
      const v1117 = '-';
      v1104 = v1117;
      }
    const v1119 = stdlib.digest(ctc2, [v1104]);
    const v1122 = stdlib.digestEq(v1119, v1081);
    const v1123 = v1103 ? true : v1122;
    let v1124;
    const v1129 = stdlib.digestEq(v1008, v1027);
    const v1134 = stdlib.digestEq(v1008, v1047);
    const v1135 = v1129 ? v1134 : false;
    if (v1135) {
      v1124 = v1006;
      }
    else {
      const v1137 = '-';
      v1124 = v1137;
      }
    const v1139 = stdlib.digest(ctc2, [v1124]);
    const v1142 = stdlib.digestEq(v1139, v1022);
    const v1143 = v1123 ? true : v1142;
    let v1144;
    const v1149 = stdlib.digestEq(v1009, v1028);
    const v1154 = stdlib.digestEq(v1009, v1048);
    const v1155 = v1149 ? v1154 : false;
    if (v1155) {
      v1144 = v1007;
      }
    else {
      const v1157 = '-';
      v1144 = v1157;
      }
    const v1159 = stdlib.digest(ctc2, [v1144]);
    const v1162 = stdlib.digestEq(v1159, v1022);
    const v1163 = v1143 ? true : v1162;
    let v1164;
    const v1169 = stdlib.digestEq(v1014, v1033);
    const v1174 = stdlib.digestEq(v1014, v1053);
    const v1175 = v1169 ? v1174 : false;
    if (v1175) {
      v1164 = v1012;
      }
    else {
      const v1177 = '-';
      v1164 = v1177;
      }
    const v1179 = stdlib.digest(ctc2, [v1164]);
    const v1182 = stdlib.digestEq(v1179, v1022);
    const v1183 = v1163 ? true : v1182;
    let v1184;
    if (v1135) {
      v1184 = v1006;
      }
    else {
      const v1197 = '-';
      v1184 = v1197;
      }
    const v1199 = stdlib.digest(ctc2, [v1184]);
    const v1202 = stdlib.digestEq(v1199, v1081);
    const v1203 = v1183 ? true : v1202;
    let v1204;
    if (v1155) {
      v1204 = v1007;
      }
    else {
      const v1217 = '-';
      v1204 = v1217;
      }
    const v1219 = stdlib.digest(ctc2, [v1204]);
    const v1222 = stdlib.digestEq(v1219, v1081);
    const v1223 = v1203 ? true : v1222;
    let v1224;
    if (v1175) {
      v1224 = v1012;
      }
    else {
      const v1237 = '-';
      v1224 = v1237;
      }
    const v1239 = stdlib.digest(ctc2, [v1224]);
    const v1242 = stdlib.digestEq(v1239, v1081);
    const v1243 = v1223 ? true : v1242;
    let v1244;
    const v1249 = stdlib.digestEq(v1008, v1028);
    const v1254 = stdlib.digestEq(v1008, v1053);
    const v1255 = v1249 ? true : v1254;
    if (v1255) {
      v1244 = v1006;
      }
    else {
      const v1257 = '-';
      v1244 = v1257;
      }
    const v1259 = stdlib.digest(ctc2, [v1244]);
    const v1262 = stdlib.digestEq(v1259, v1022);
    const v1263 = v1243 ? true : v1262;
    let v1264;
    if (v1255) {
      v1264 = v1006;
      }
    else {
      const v1277 = '-';
      v1264 = v1277;
      }
    const v1279 = stdlib.digest(ctc2, [v1264]);
    const v1282 = stdlib.digestEq(v1279, v1081);
    const v1283 = v1263 ? true : v1282;
    let v1284;
    const v1289 = stdlib.digestEq(v1014, v1028);
    const v1294 = stdlib.digestEq(v1014, v1047);
    const v1295 = v1289 ? true : v1294;
    if (v1295) {
      v1284 = v1012;
      }
    else {
      const v1297 = '-';
      v1284 = v1297;
      }
    const v1299 = stdlib.digest(ctc2, [v1284]);
    const v1302 = stdlib.digestEq(v1299, v1022);
    const v1303 = v1283 ? true : v1302;
    let v1304;
    if (v1295) {
      v1304 = v1012;
      }
    else {
      const v1317 = '-';
      v1304 = v1317;
      }
    const v1319 = stdlib.digest(ctc2, [v1304]);
    const v1322 = stdlib.digestEq(v1319, v1081);
    const v1323 = v1303 ? true : v1322;
    const v1324 = v988 ? true : v1323;
    const v1325 = v1324 ? false : true;
    
    return v1325;})()) {
    const v1326 = v975.playerTurn;
    if (v1326) {
      const v1330 = v975.board;
      const v1341 = stdlib.protect(ctc0, await interact.getSquareSelected(v975), {
        at: './index.rsh:102:43:application',
        fs: ['at ./index.rsh:164:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Alice'
        });
      const v1342 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1341);
      const v1343 = stdlib.lt(v1341, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1344 = v1342 ? v1343 : false;
      stdlib.assert(v1344, {
        at: './index.rsh:103:9:application',
        fs: ['at ./index.rsh:164:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1347 = v1330[v1341];
      const v1348 = 'x';
      const v1349 = stdlib.digest(ctc2, [v1347]);
      const v1351 = stdlib.digest(ctc2, [v1348]);
      const v1352 = stdlib.digestEq(v1349, v1351);
      let v1353;
      if (v1352) {
        v1353 = true;
        }
      else {
        const v1357 = 'o';
        const v1360 = stdlib.digest(ctc2, [v1357]);
        const v1361 = stdlib.digestEq(v1349, v1360);
        v1353 = v1361;
        }
      const v1362 = v1353 ? false : true;
      stdlib.assert(v1362, {
        at: './index.rsh:104:9:application',
        fs: ['at ./index.rsh:164:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v941, v948, v975, v983, v1341],
        evt_cnt: 1,
        funcNum: 3,
        lct: v976,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:166:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1364], secs: v1366, time: v1365, didSend: v497, from: v1363 } = txn3;
          
          ;
          const v1371 = v975.board;
          const v1374 = 'x';
          const v1395 = stdlib.Array_set(v1371, v1364, v1374);
          const v1400 = {
            board: v1395,
            playerTurn: false
            };
          const cv975 = v1400;
          const cv976 = v1365;
          const cv983 = v983;
          
          await (async () => {
            const v975 = cv975;
            const v976 = cv976;
            const v983 = cv983;
            
            if (await (async () => {
              const v987 = v975.board;
              const v988 = await stdlib.Array_asyncReduce([v987], true, async([v990], v989, v991) => {
                const v992 = 'x';
                const v993 = stdlib.digest(ctc2, [v990]);
                const v995 = stdlib.digest(ctc2, [v992]);
                const v996 = stdlib.digestEq(v993, v995);
                const v997 = 'o';
                const v1000 = stdlib.digest(ctc2, [v997]);
                const v1001 = stdlib.digestEq(v993, v1000);
                const v1002 = v996 ? true : v1001;
                const v1003 = v989 ? v1002 : false;
                
                return v1003;})
              let v1005;
              const v1006 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1007 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1008 = stdlib.digest(ctc2, [v1006]);
              const v1009 = stdlib.digest(ctc2, [v1007]);
              const v1010 = stdlib.digestEq(v1008, v1009);
              const v1012 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1014 = stdlib.digest(ctc2, [v1012]);
              const v1015 = stdlib.digestEq(v1008, v1014);
              const v1016 = v1010 ? v1015 : false;
              if (v1016) {
                v1005 = v1006;
                }
              else {
                const v1018 = '-';
                v1005 = v1018;
                }
              const v1019 = 'x';
              const v1020 = stdlib.digest(ctc2, [v1005]);
              const v1022 = stdlib.digest(ctc2, [v1019]);
              const v1023 = stdlib.digestEq(v1020, v1022);
              let v1024;
              const v1025 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1026 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1027 = stdlib.digest(ctc2, [v1025]);
              const v1028 = stdlib.digest(ctc2, [v1026]);
              const v1029 = stdlib.digestEq(v1027, v1028);
              const v1031 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1033 = stdlib.digest(ctc2, [v1031]);
              const v1034 = stdlib.digestEq(v1027, v1033);
              const v1035 = v1029 ? v1034 : false;
              if (v1035) {
                v1024 = v1025;
                }
              else {
                const v1037 = '-';
                v1024 = v1037;
                }
              const v1039 = stdlib.digest(ctc2, [v1024]);
              const v1042 = stdlib.digestEq(v1039, v1022);
              const v1043 = v1023 ? true : v1042;
              let v1044;
              const v1045 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1046 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1047 = stdlib.digest(ctc2, [v1045]);
              const v1048 = stdlib.digest(ctc2, [v1046]);
              const v1049 = stdlib.digestEq(v1047, v1048);
              const v1051 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1053 = stdlib.digest(ctc2, [v1051]);
              const v1054 = stdlib.digestEq(v1047, v1053);
              const v1055 = v1049 ? v1054 : false;
              if (v1055) {
                v1044 = v1045;
                }
              else {
                const v1057 = '-';
                v1044 = v1057;
                }
              const v1059 = stdlib.digest(ctc2, [v1044]);
              const v1062 = stdlib.digestEq(v1059, v1022);
              const v1063 = v1043 ? true : v1062;
              let v1064;
              if (v1016) {
                v1064 = v1006;
                }
              else {
                const v1077 = '-';
                v1064 = v1077;
                }
              const v1078 = 'o';
              const v1079 = stdlib.digest(ctc2, [v1064]);
              const v1081 = stdlib.digest(ctc2, [v1078]);
              const v1082 = stdlib.digestEq(v1079, v1081);
              const v1083 = v1063 ? true : v1082;
              let v1084;
              if (v1035) {
                v1084 = v1025;
                }
              else {
                const v1097 = '-';
                v1084 = v1097;
                }
              const v1099 = stdlib.digest(ctc2, [v1084]);
              const v1102 = stdlib.digestEq(v1099, v1081);
              const v1103 = v1083 ? true : v1102;
              let v1104;
              if (v1055) {
                v1104 = v1045;
                }
              else {
                const v1117 = '-';
                v1104 = v1117;
                }
              const v1119 = stdlib.digest(ctc2, [v1104]);
              const v1122 = stdlib.digestEq(v1119, v1081);
              const v1123 = v1103 ? true : v1122;
              let v1124;
              const v1129 = stdlib.digestEq(v1008, v1027);
              const v1134 = stdlib.digestEq(v1008, v1047);
              const v1135 = v1129 ? v1134 : false;
              if (v1135) {
                v1124 = v1006;
                }
              else {
                const v1137 = '-';
                v1124 = v1137;
                }
              const v1139 = stdlib.digest(ctc2, [v1124]);
              const v1142 = stdlib.digestEq(v1139, v1022);
              const v1143 = v1123 ? true : v1142;
              let v1144;
              const v1149 = stdlib.digestEq(v1009, v1028);
              const v1154 = stdlib.digestEq(v1009, v1048);
              const v1155 = v1149 ? v1154 : false;
              if (v1155) {
                v1144 = v1007;
                }
              else {
                const v1157 = '-';
                v1144 = v1157;
                }
              const v1159 = stdlib.digest(ctc2, [v1144]);
              const v1162 = stdlib.digestEq(v1159, v1022);
              const v1163 = v1143 ? true : v1162;
              let v1164;
              const v1169 = stdlib.digestEq(v1014, v1033);
              const v1174 = stdlib.digestEq(v1014, v1053);
              const v1175 = v1169 ? v1174 : false;
              if (v1175) {
                v1164 = v1012;
                }
              else {
                const v1177 = '-';
                v1164 = v1177;
                }
              const v1179 = stdlib.digest(ctc2, [v1164]);
              const v1182 = stdlib.digestEq(v1179, v1022);
              const v1183 = v1163 ? true : v1182;
              let v1184;
              if (v1135) {
                v1184 = v1006;
                }
              else {
                const v1197 = '-';
                v1184 = v1197;
                }
              const v1199 = stdlib.digest(ctc2, [v1184]);
              const v1202 = stdlib.digestEq(v1199, v1081);
              const v1203 = v1183 ? true : v1202;
              let v1204;
              if (v1155) {
                v1204 = v1007;
                }
              else {
                const v1217 = '-';
                v1204 = v1217;
                }
              const v1219 = stdlib.digest(ctc2, [v1204]);
              const v1222 = stdlib.digestEq(v1219, v1081);
              const v1223 = v1203 ? true : v1222;
              let v1224;
              if (v1175) {
                v1224 = v1012;
                }
              else {
                const v1237 = '-';
                v1224 = v1237;
                }
              const v1239 = stdlib.digest(ctc2, [v1224]);
              const v1242 = stdlib.digestEq(v1239, v1081);
              const v1243 = v1223 ? true : v1242;
              let v1244;
              const v1249 = stdlib.digestEq(v1008, v1028);
              const v1254 = stdlib.digestEq(v1008, v1053);
              const v1255 = v1249 ? true : v1254;
              if (v1255) {
                v1244 = v1006;
                }
              else {
                const v1257 = '-';
                v1244 = v1257;
                }
              const v1259 = stdlib.digest(ctc2, [v1244]);
              const v1262 = stdlib.digestEq(v1259, v1022);
              const v1263 = v1243 ? true : v1262;
              let v1264;
              if (v1255) {
                v1264 = v1006;
                }
              else {
                const v1277 = '-';
                v1264 = v1277;
                }
              const v1279 = stdlib.digest(ctc2, [v1264]);
              const v1282 = stdlib.digestEq(v1279, v1081);
              const v1283 = v1263 ? true : v1282;
              let v1284;
              const v1289 = stdlib.digestEq(v1014, v1028);
              const v1294 = stdlib.digestEq(v1014, v1047);
              const v1295 = v1289 ? true : v1294;
              if (v1295) {
                v1284 = v1012;
                }
              else {
                const v1297 = '-';
                v1284 = v1297;
                }
              const v1299 = stdlib.digest(ctc2, [v1284]);
              const v1302 = stdlib.digestEq(v1299, v1022);
              const v1303 = v1283 ? true : v1302;
              let v1304;
              if (v1295) {
                v1304 = v1012;
                }
              else {
                const v1317 = '-';
                v1304 = v1317;
                }
              const v1319 = stdlib.digest(ctc2, [v1304]);
              const v1322 = stdlib.digestEq(v1319, v1081);
              const v1323 = v1303 ? true : v1322;
              const v1324 = v988 ? true : v1323;
              const v1325 = v1324 ? false : true;
              
              return v1325;})()) {
              const v1326 = v975.playerTurn;
              if (v1326) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            else {
              const v1476 = v975.board;
              let v1477;
              const v1478 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1479 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1480 = stdlib.digest(ctc2, [v1478]);
              const v1481 = stdlib.digest(ctc2, [v1479]);
              const v1482 = stdlib.digestEq(v1480, v1481);
              const v1484 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1486 = stdlib.digest(ctc2, [v1484]);
              const v1487 = stdlib.digestEq(v1480, v1486);
              const v1488 = v1482 ? v1487 : false;
              if (v1488) {
                v1477 = v1478;
                }
              else {
                const v1490 = '-';
                v1477 = v1490;
                }
              const v1491 = 'x';
              const v1492 = stdlib.digest(ctc2, [v1477]);
              const v1494 = stdlib.digest(ctc2, [v1491]);
              const v1495 = stdlib.digestEq(v1492, v1494);
              let v1496;
              const v1497 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1498 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1499 = stdlib.digest(ctc2, [v1497]);
              const v1500 = stdlib.digest(ctc2, [v1498]);
              const v1501 = stdlib.digestEq(v1499, v1500);
              const v1503 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1505 = stdlib.digest(ctc2, [v1503]);
              const v1506 = stdlib.digestEq(v1499, v1505);
              const v1507 = v1501 ? v1506 : false;
              if (v1507) {
                v1496 = v1497;
                }
              else {
                const v1509 = '-';
                v1496 = v1509;
                }
              const v1511 = stdlib.digest(ctc2, [v1496]);
              const v1514 = stdlib.digestEq(v1511, v1494);
              const v1515 = v1495 ? true : v1514;
              let v1516;
              const v1517 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1518 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1519 = stdlib.digest(ctc2, [v1517]);
              const v1520 = stdlib.digest(ctc2, [v1518]);
              const v1521 = stdlib.digestEq(v1519, v1520);
              const v1523 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1525 = stdlib.digest(ctc2, [v1523]);
              const v1526 = stdlib.digestEq(v1519, v1525);
              const v1527 = v1521 ? v1526 : false;
              if (v1527) {
                v1516 = v1517;
                }
              else {
                const v1529 = '-';
                v1516 = v1529;
                }
              const v1531 = stdlib.digest(ctc2, [v1516]);
              const v1534 = stdlib.digestEq(v1531, v1494);
              const v1535 = v1515 ? true : v1534;
              let v1536;
              const v1541 = stdlib.digestEq(v1480, v1499);
              const v1546 = stdlib.digestEq(v1480, v1519);
              const v1547 = v1541 ? v1546 : false;
              if (v1547) {
                v1536 = v1478;
                }
              else {
                const v1549 = '-';
                v1536 = v1549;
                }
              const v1551 = stdlib.digest(ctc2, [v1536]);
              const v1554 = stdlib.digestEq(v1551, v1494);
              const v1555 = v1535 ? true : v1554;
              let v1556;
              const v1561 = stdlib.digestEq(v1481, v1500);
              const v1566 = stdlib.digestEq(v1481, v1520);
              const v1567 = v1561 ? v1566 : false;
              if (v1567) {
                v1556 = v1479;
                }
              else {
                const v1569 = '-';
                v1556 = v1569;
                }
              const v1571 = stdlib.digest(ctc2, [v1556]);
              const v1574 = stdlib.digestEq(v1571, v1494);
              const v1575 = v1555 ? true : v1574;
              let v1576;
              const v1581 = stdlib.digestEq(v1486, v1505);
              const v1586 = stdlib.digestEq(v1486, v1525);
              const v1587 = v1581 ? v1586 : false;
              if (v1587) {
                v1576 = v1484;
                }
              else {
                const v1589 = '-';
                v1576 = v1589;
                }
              const v1591 = stdlib.digest(ctc2, [v1576]);
              const v1594 = stdlib.digestEq(v1591, v1494);
              const v1595 = v1575 ? true : v1594;
              let v1596;
              if (v1488) {
                v1596 = v1478;
                }
              else {
                const v1609 = '-';
                v1596 = v1609;
                }
              const v1610 = 'o';
              const v1611 = stdlib.digest(ctc2, [v1596]);
              const v1613 = stdlib.digest(ctc2, [v1610]);
              const v1614 = stdlib.digestEq(v1611, v1613);
              let v1615;
              if (v1507) {
                v1615 = v1497;
                }
              else {
                const v1628 = '-';
                v1615 = v1628;
                }
              const v1630 = stdlib.digest(ctc2, [v1615]);
              const v1633 = stdlib.digestEq(v1630, v1613);
              const v1634 = v1614 ? true : v1633;
              let v1635;
              if (v1527) {
                v1635 = v1517;
                }
              else {
                const v1648 = '-';
                v1635 = v1648;
                }
              const v1650 = stdlib.digest(ctc2, [v1635]);
              const v1653 = stdlib.digestEq(v1650, v1613);
              const v1654 = v1634 ? true : v1653;
              let v1655;
              if (v1547) {
                v1655 = v1478;
                }
              else {
                const v1668 = '-';
                v1655 = v1668;
                }
              const v1670 = stdlib.digest(ctc2, [v1655]);
              const v1673 = stdlib.digestEq(v1670, v1613);
              const v1674 = v1654 ? true : v1673;
              let v1675;
              if (v1567) {
                v1675 = v1479;
                }
              else {
                const v1688 = '-';
                v1675 = v1688;
                }
              const v1690 = stdlib.digest(ctc2, [v1675]);
              const v1693 = stdlib.digestEq(v1690, v1613);
              const v1694 = v1674 ? true : v1693;
              let v1695;
              if (v1587) {
                v1695 = v1484;
                }
              else {
                const v1708 = '-';
                v1695 = v1708;
                }
              const v1710 = stdlib.digest(ctc2, [v1695]);
              const v1713 = stdlib.digestEq(v1710, v1613);
              const v1714 = v1694 ? true : v1713;
              const v1715 = v1714 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
              const v1716 = v1595 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1715;
              sim_r.txns.push({
                kind: 'from',
                to: v941,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc3, ctc6, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v1364], secs: v1366, time: v1365, didSend: v497, from: v1363 } = txn3;
      ;
      const v1367 = stdlib.addressEq(v941, v1363);
      stdlib.assert(v1367, {
        at: './index.rsh:166:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1368 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1364);
      const v1369 = stdlib.lt(v1364, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1370 = v1368 ? v1369 : false;
      stdlib.assert(v1370, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:168:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1371 = v975.board;
      const v1373 = v1371[v1364];
      const v1374 = 'x';
      const v1375 = stdlib.digest(ctc2, [v1373]);
      const v1377 = stdlib.digest(ctc2, [v1374]);
      const v1378 = stdlib.digestEq(v1375, v1377);
      let v1379;
      if (v1378) {
        v1379 = true;
        }
      else {
        const v1383 = 'o';
        const v1386 = stdlib.digest(ctc2, [v1383]);
        const v1387 = stdlib.digestEq(v1375, v1386);
        v1379 = v1387;
        }
      const v1388 = v1379 ? false : true;
      stdlib.assert(v1388, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:168:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const v1395 = stdlib.Array_set(v1371, v1364, v1374);
      const v1400 = {
        board: v1395,
        playerTurn: false
        };
      const cv975 = v1400;
      const cv976 = v1365;
      const cv983 = v983;
      
      v975 = cv975;
      v976 = cv976;
      v983 = cv983;
      
      continue;
      
      }
    else {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1438], secs: v1440, time: v1439, didSend: v582, from: v1437 } = txn3;
      ;
      const v1441 = stdlib.addressEq(v948, v1437);
      stdlib.assert(v1441, {
        at: './index.rsh:177:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1442 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1438);
      const v1443 = stdlib.lt(v1438, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1444 = v1442 ? v1443 : false;
      stdlib.assert(v1444, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:178:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1445 = v975.board;
      const v1447 = v1445[v1438];
      const v1448 = 'x';
      const v1449 = stdlib.digest(ctc2, [v1447]);
      const v1451 = stdlib.digest(ctc2, [v1448]);
      const v1452 = stdlib.digestEq(v1449, v1451);
      let v1453;
      if (v1452) {
        v1453 = true;
        }
      else {
        const v1457 = 'o';
        const v1460 = stdlib.digest(ctc2, [v1457]);
        const v1461 = stdlib.digestEq(v1449, v1460);
        v1453 = v1461;
        }
      const v1462 = v1453 ? false : true;
      stdlib.assert(v1462, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:178:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const v1471 = 'o';
      const v1473 = stdlib.Array_set(v1445, v1438, v1471);
      const v1474 = {
        board: v1473,
        playerTurn: true
        };
      const cv975 = v1474;
      const cv976 = v1439;
      const cv983 = v983;
      
      v975 = cv975;
      v976 = cv976;
      v983 = cv983;
      
      continue;
      
      }}
  const v1476 = v975.board;
  let v1477;
  const v1478 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
  const v1479 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
  const v1480 = stdlib.digest(ctc2, [v1478]);
  const v1481 = stdlib.digest(ctc2, [v1479]);
  const v1482 = stdlib.digestEq(v1480, v1481);
  const v1484 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
  const v1486 = stdlib.digest(ctc2, [v1484]);
  const v1487 = stdlib.digestEq(v1480, v1486);
  const v1488 = v1482 ? v1487 : false;
  if (v1488) {
    v1477 = v1478;
    }
  else {
    const v1490 = '-';
    v1477 = v1490;
    }
  const v1491 = 'x';
  const v1492 = stdlib.digest(ctc2, [v1477]);
  const v1494 = stdlib.digest(ctc2, [v1491]);
  const v1495 = stdlib.digestEq(v1492, v1494);
  let v1496;
  const v1497 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
  const v1498 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
  const v1499 = stdlib.digest(ctc2, [v1497]);
  const v1500 = stdlib.digest(ctc2, [v1498]);
  const v1501 = stdlib.digestEq(v1499, v1500);
  const v1503 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
  const v1505 = stdlib.digest(ctc2, [v1503]);
  const v1506 = stdlib.digestEq(v1499, v1505);
  const v1507 = v1501 ? v1506 : false;
  if (v1507) {
    v1496 = v1497;
    }
  else {
    const v1509 = '-';
    v1496 = v1509;
    }
  const v1511 = stdlib.digest(ctc2, [v1496]);
  const v1514 = stdlib.digestEq(v1511, v1494);
  const v1515 = v1495 ? true : v1514;
  let v1516;
  const v1517 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
  const v1518 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
  const v1519 = stdlib.digest(ctc2, [v1517]);
  const v1520 = stdlib.digest(ctc2, [v1518]);
  const v1521 = stdlib.digestEq(v1519, v1520);
  const v1523 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
  const v1525 = stdlib.digest(ctc2, [v1523]);
  const v1526 = stdlib.digestEq(v1519, v1525);
  const v1527 = v1521 ? v1526 : false;
  if (v1527) {
    v1516 = v1517;
    }
  else {
    const v1529 = '-';
    v1516 = v1529;
    }
  const v1531 = stdlib.digest(ctc2, [v1516]);
  const v1534 = stdlib.digestEq(v1531, v1494);
  const v1535 = v1515 ? true : v1534;
  let v1536;
  const v1541 = stdlib.digestEq(v1480, v1499);
  const v1546 = stdlib.digestEq(v1480, v1519);
  const v1547 = v1541 ? v1546 : false;
  if (v1547) {
    v1536 = v1478;
    }
  else {
    const v1549 = '-';
    v1536 = v1549;
    }
  const v1551 = stdlib.digest(ctc2, [v1536]);
  const v1554 = stdlib.digestEq(v1551, v1494);
  const v1555 = v1535 ? true : v1554;
  let v1556;
  const v1561 = stdlib.digestEq(v1481, v1500);
  const v1566 = stdlib.digestEq(v1481, v1520);
  const v1567 = v1561 ? v1566 : false;
  if (v1567) {
    v1556 = v1479;
    }
  else {
    const v1569 = '-';
    v1556 = v1569;
    }
  const v1571 = stdlib.digest(ctc2, [v1556]);
  const v1574 = stdlib.digestEq(v1571, v1494);
  const v1575 = v1555 ? true : v1574;
  let v1576;
  const v1581 = stdlib.digestEq(v1486, v1505);
  const v1586 = stdlib.digestEq(v1486, v1525);
  const v1587 = v1581 ? v1586 : false;
  if (v1587) {
    v1576 = v1484;
    }
  else {
    const v1589 = '-';
    v1576 = v1589;
    }
  const v1591 = stdlib.digest(ctc2, [v1576]);
  const v1594 = stdlib.digestEq(v1591, v1494);
  const v1595 = v1575 ? true : v1594;
  let v1596;
  if (v1488) {
    v1596 = v1478;
    }
  else {
    const v1609 = '-';
    v1596 = v1609;
    }
  const v1610 = 'o';
  const v1611 = stdlib.digest(ctc2, [v1596]);
  const v1613 = stdlib.digest(ctc2, [v1610]);
  const v1614 = stdlib.digestEq(v1611, v1613);
  let v1615;
  if (v1507) {
    v1615 = v1497;
    }
  else {
    const v1628 = '-';
    v1615 = v1628;
    }
  const v1630 = stdlib.digest(ctc2, [v1615]);
  const v1633 = stdlib.digestEq(v1630, v1613);
  const v1634 = v1614 ? true : v1633;
  let v1635;
  if (v1527) {
    v1635 = v1517;
    }
  else {
    const v1648 = '-';
    v1635 = v1648;
    }
  const v1650 = stdlib.digest(ctc2, [v1635]);
  const v1653 = stdlib.digestEq(v1650, v1613);
  const v1654 = v1634 ? true : v1653;
  let v1655;
  if (v1547) {
    v1655 = v1478;
    }
  else {
    const v1668 = '-';
    v1655 = v1668;
    }
  const v1670 = stdlib.digest(ctc2, [v1655]);
  const v1673 = stdlib.digestEq(v1670, v1613);
  const v1674 = v1654 ? true : v1673;
  let v1675;
  if (v1567) {
    v1675 = v1479;
    }
  else {
    const v1688 = '-';
    v1675 = v1688;
    }
  const v1690 = stdlib.digest(ctc2, [v1675]);
  const v1693 = stdlib.digestEq(v1690, v1613);
  const v1694 = v1674 ? true : v1693;
  let v1695;
  if (v1587) {
    v1695 = v1484;
    }
  else {
    const v1708 = '-';
    v1695 = v1708;
    }
  const v1710 = stdlib.digest(ctc2, [v1695]);
  const v1713 = stdlib.digestEq(v1710, v1613);
  const v1714 = v1694 ? true : v1713;
  const v1715 = v1714 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
  const v1716 = v1595 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1715;
  ;
  stdlib.protect(ctc7, await interact.endsWith(v975), {
    at: './index.rsh:191:22:application',
    fs: ['at ./index.rsh:190:7:application call to [unknown function] (defined at: ./index.rsh:190:19:function exp)'],
    msg: 'endsWith',
    who: 'Alice'
    });
  stdlib.protect(ctc7, await interact.seeOutcome(v1716), {
    at: './index.rsh:192:24:application',
    fs: ['at ./index.rsh:190:7:application call to [unknown function] (defined at: ./index.rsh:190:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    board: ctc5,
    playerTurn: ctc6
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v942], secs: v944, time: v943, didSend: v64, from: v941 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptBudget(v942), {
    at: './index.rsh:153:26:application',
    fs: ['at ./index.rsh:153:26:application call to [unknown function] (defined at: ./index.rsh:153:26:function exp)', 'at ./index.rsh:153:26:application call to "liftedInteract" (defined at: ./index.rsh:153:26:application)'],
    msg: 'acceptBudget',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v941, v942],
    evt_cnt: 0,
    funcNum: 1,
    lct: v943,
    onlyIf: true,
    out_tys: [],
    pay: [v942, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v950, time: v949, didSend: v74, from: v948 } = txn2;
      
      const v952 = stdlib.safeAdd(v942, v942);
      sim_r.txns.push({
        amt: v942,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v953 = ' ';
      const v962 = [v953, v953, v953, v953, v953, v953, v953, v953, v953];
      const v963 = {
        board: v962,
        playerTurn: true
        };
      const v975 = v963;
      const v976 = v949;
      const v983 = v952;
      
      if (await (async () => {
        const v987 = v975.board;
        const v988 = await stdlib.Array_asyncReduce([v987], true, async([v990], v989, v991) => {
          const v992 = 'x';
          const v993 = stdlib.digest(ctc3, [v990]);
          const v995 = stdlib.digest(ctc3, [v992]);
          const v996 = stdlib.digestEq(v993, v995);
          const v997 = 'o';
          const v1000 = stdlib.digest(ctc3, [v997]);
          const v1001 = stdlib.digestEq(v993, v1000);
          const v1002 = v996 ? true : v1001;
          const v1003 = v989 ? v1002 : false;
          
          return v1003;})
        let v1005;
        const v1006 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
        const v1007 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
        const v1008 = stdlib.digest(ctc3, [v1006]);
        const v1009 = stdlib.digest(ctc3, [v1007]);
        const v1010 = stdlib.digestEq(v1008, v1009);
        const v1012 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
        const v1014 = stdlib.digest(ctc3, [v1012]);
        const v1015 = stdlib.digestEq(v1008, v1014);
        const v1016 = v1010 ? v1015 : false;
        if (v1016) {
          v1005 = v1006;
          }
        else {
          const v1018 = '-';
          v1005 = v1018;
          }
        const v1019 = 'x';
        const v1020 = stdlib.digest(ctc3, [v1005]);
        const v1022 = stdlib.digest(ctc3, [v1019]);
        const v1023 = stdlib.digestEq(v1020, v1022);
        let v1024;
        const v1025 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
        const v1026 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
        const v1027 = stdlib.digest(ctc3, [v1025]);
        const v1028 = stdlib.digest(ctc3, [v1026]);
        const v1029 = stdlib.digestEq(v1027, v1028);
        const v1031 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
        const v1033 = stdlib.digest(ctc3, [v1031]);
        const v1034 = stdlib.digestEq(v1027, v1033);
        const v1035 = v1029 ? v1034 : false;
        if (v1035) {
          v1024 = v1025;
          }
        else {
          const v1037 = '-';
          v1024 = v1037;
          }
        const v1039 = stdlib.digest(ctc3, [v1024]);
        const v1042 = stdlib.digestEq(v1039, v1022);
        const v1043 = v1023 ? true : v1042;
        let v1044;
        const v1045 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
        const v1046 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
        const v1047 = stdlib.digest(ctc3, [v1045]);
        const v1048 = stdlib.digest(ctc3, [v1046]);
        const v1049 = stdlib.digestEq(v1047, v1048);
        const v1051 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
        const v1053 = stdlib.digest(ctc3, [v1051]);
        const v1054 = stdlib.digestEq(v1047, v1053);
        const v1055 = v1049 ? v1054 : false;
        if (v1055) {
          v1044 = v1045;
          }
        else {
          const v1057 = '-';
          v1044 = v1057;
          }
        const v1059 = stdlib.digest(ctc3, [v1044]);
        const v1062 = stdlib.digestEq(v1059, v1022);
        const v1063 = v1043 ? true : v1062;
        let v1064;
        if (v1016) {
          v1064 = v1006;
          }
        else {
          const v1077 = '-';
          v1064 = v1077;
          }
        const v1078 = 'o';
        const v1079 = stdlib.digest(ctc3, [v1064]);
        const v1081 = stdlib.digest(ctc3, [v1078]);
        const v1082 = stdlib.digestEq(v1079, v1081);
        const v1083 = v1063 ? true : v1082;
        let v1084;
        if (v1035) {
          v1084 = v1025;
          }
        else {
          const v1097 = '-';
          v1084 = v1097;
          }
        const v1099 = stdlib.digest(ctc3, [v1084]);
        const v1102 = stdlib.digestEq(v1099, v1081);
        const v1103 = v1083 ? true : v1102;
        let v1104;
        if (v1055) {
          v1104 = v1045;
          }
        else {
          const v1117 = '-';
          v1104 = v1117;
          }
        const v1119 = stdlib.digest(ctc3, [v1104]);
        const v1122 = stdlib.digestEq(v1119, v1081);
        const v1123 = v1103 ? true : v1122;
        let v1124;
        const v1129 = stdlib.digestEq(v1008, v1027);
        const v1134 = stdlib.digestEq(v1008, v1047);
        const v1135 = v1129 ? v1134 : false;
        if (v1135) {
          v1124 = v1006;
          }
        else {
          const v1137 = '-';
          v1124 = v1137;
          }
        const v1139 = stdlib.digest(ctc3, [v1124]);
        const v1142 = stdlib.digestEq(v1139, v1022);
        const v1143 = v1123 ? true : v1142;
        let v1144;
        const v1149 = stdlib.digestEq(v1009, v1028);
        const v1154 = stdlib.digestEq(v1009, v1048);
        const v1155 = v1149 ? v1154 : false;
        if (v1155) {
          v1144 = v1007;
          }
        else {
          const v1157 = '-';
          v1144 = v1157;
          }
        const v1159 = stdlib.digest(ctc3, [v1144]);
        const v1162 = stdlib.digestEq(v1159, v1022);
        const v1163 = v1143 ? true : v1162;
        let v1164;
        const v1169 = stdlib.digestEq(v1014, v1033);
        const v1174 = stdlib.digestEq(v1014, v1053);
        const v1175 = v1169 ? v1174 : false;
        if (v1175) {
          v1164 = v1012;
          }
        else {
          const v1177 = '-';
          v1164 = v1177;
          }
        const v1179 = stdlib.digest(ctc3, [v1164]);
        const v1182 = stdlib.digestEq(v1179, v1022);
        const v1183 = v1163 ? true : v1182;
        let v1184;
        if (v1135) {
          v1184 = v1006;
          }
        else {
          const v1197 = '-';
          v1184 = v1197;
          }
        const v1199 = stdlib.digest(ctc3, [v1184]);
        const v1202 = stdlib.digestEq(v1199, v1081);
        const v1203 = v1183 ? true : v1202;
        let v1204;
        if (v1155) {
          v1204 = v1007;
          }
        else {
          const v1217 = '-';
          v1204 = v1217;
          }
        const v1219 = stdlib.digest(ctc3, [v1204]);
        const v1222 = stdlib.digestEq(v1219, v1081);
        const v1223 = v1203 ? true : v1222;
        let v1224;
        if (v1175) {
          v1224 = v1012;
          }
        else {
          const v1237 = '-';
          v1224 = v1237;
          }
        const v1239 = stdlib.digest(ctc3, [v1224]);
        const v1242 = stdlib.digestEq(v1239, v1081);
        const v1243 = v1223 ? true : v1242;
        let v1244;
        const v1249 = stdlib.digestEq(v1008, v1028);
        const v1254 = stdlib.digestEq(v1008, v1053);
        const v1255 = v1249 ? true : v1254;
        if (v1255) {
          v1244 = v1006;
          }
        else {
          const v1257 = '-';
          v1244 = v1257;
          }
        const v1259 = stdlib.digest(ctc3, [v1244]);
        const v1262 = stdlib.digestEq(v1259, v1022);
        const v1263 = v1243 ? true : v1262;
        let v1264;
        if (v1255) {
          v1264 = v1006;
          }
        else {
          const v1277 = '-';
          v1264 = v1277;
          }
        const v1279 = stdlib.digest(ctc3, [v1264]);
        const v1282 = stdlib.digestEq(v1279, v1081);
        const v1283 = v1263 ? true : v1282;
        let v1284;
        const v1289 = stdlib.digestEq(v1014, v1028);
        const v1294 = stdlib.digestEq(v1014, v1047);
        const v1295 = v1289 ? true : v1294;
        if (v1295) {
          v1284 = v1012;
          }
        else {
          const v1297 = '-';
          v1284 = v1297;
          }
        const v1299 = stdlib.digest(ctc3, [v1284]);
        const v1302 = stdlib.digestEq(v1299, v1022);
        const v1303 = v1283 ? true : v1302;
        let v1304;
        if (v1295) {
          v1304 = v1012;
          }
        else {
          const v1317 = '-';
          v1304 = v1317;
          }
        const v1319 = stdlib.digest(ctc3, [v1304]);
        const v1322 = stdlib.digestEq(v1319, v1081);
        const v1323 = v1303 ? true : v1322;
        const v1324 = v988 ? true : v1323;
        const v1325 = v1324 ? false : true;
        
        return v1325;})()) {
        const v1326 = v975.playerTurn;
        if (v1326) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v1476 = v975.board;
        let v1477;
        const v1478 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
        const v1479 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
        const v1480 = stdlib.digest(ctc3, [v1478]);
        const v1481 = stdlib.digest(ctc3, [v1479]);
        const v1482 = stdlib.digestEq(v1480, v1481);
        const v1484 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
        const v1486 = stdlib.digest(ctc3, [v1484]);
        const v1487 = stdlib.digestEq(v1480, v1486);
        const v1488 = v1482 ? v1487 : false;
        if (v1488) {
          v1477 = v1478;
          }
        else {
          const v1490 = '-';
          v1477 = v1490;
          }
        const v1491 = 'x';
        const v1492 = stdlib.digest(ctc3, [v1477]);
        const v1494 = stdlib.digest(ctc3, [v1491]);
        const v1495 = stdlib.digestEq(v1492, v1494);
        let v1496;
        const v1497 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
        const v1498 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
        const v1499 = stdlib.digest(ctc3, [v1497]);
        const v1500 = stdlib.digest(ctc3, [v1498]);
        const v1501 = stdlib.digestEq(v1499, v1500);
        const v1503 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
        const v1505 = stdlib.digest(ctc3, [v1503]);
        const v1506 = stdlib.digestEq(v1499, v1505);
        const v1507 = v1501 ? v1506 : false;
        if (v1507) {
          v1496 = v1497;
          }
        else {
          const v1509 = '-';
          v1496 = v1509;
          }
        const v1511 = stdlib.digest(ctc3, [v1496]);
        const v1514 = stdlib.digestEq(v1511, v1494);
        const v1515 = v1495 ? true : v1514;
        let v1516;
        const v1517 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
        const v1518 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
        const v1519 = stdlib.digest(ctc3, [v1517]);
        const v1520 = stdlib.digest(ctc3, [v1518]);
        const v1521 = stdlib.digestEq(v1519, v1520);
        const v1523 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
        const v1525 = stdlib.digest(ctc3, [v1523]);
        const v1526 = stdlib.digestEq(v1519, v1525);
        const v1527 = v1521 ? v1526 : false;
        if (v1527) {
          v1516 = v1517;
          }
        else {
          const v1529 = '-';
          v1516 = v1529;
          }
        const v1531 = stdlib.digest(ctc3, [v1516]);
        const v1534 = stdlib.digestEq(v1531, v1494);
        const v1535 = v1515 ? true : v1534;
        let v1536;
        const v1541 = stdlib.digestEq(v1480, v1499);
        const v1546 = stdlib.digestEq(v1480, v1519);
        const v1547 = v1541 ? v1546 : false;
        if (v1547) {
          v1536 = v1478;
          }
        else {
          const v1549 = '-';
          v1536 = v1549;
          }
        const v1551 = stdlib.digest(ctc3, [v1536]);
        const v1554 = stdlib.digestEq(v1551, v1494);
        const v1555 = v1535 ? true : v1554;
        let v1556;
        const v1561 = stdlib.digestEq(v1481, v1500);
        const v1566 = stdlib.digestEq(v1481, v1520);
        const v1567 = v1561 ? v1566 : false;
        if (v1567) {
          v1556 = v1479;
          }
        else {
          const v1569 = '-';
          v1556 = v1569;
          }
        const v1571 = stdlib.digest(ctc3, [v1556]);
        const v1574 = stdlib.digestEq(v1571, v1494);
        const v1575 = v1555 ? true : v1574;
        let v1576;
        const v1581 = stdlib.digestEq(v1486, v1505);
        const v1586 = stdlib.digestEq(v1486, v1525);
        const v1587 = v1581 ? v1586 : false;
        if (v1587) {
          v1576 = v1484;
          }
        else {
          const v1589 = '-';
          v1576 = v1589;
          }
        const v1591 = stdlib.digest(ctc3, [v1576]);
        const v1594 = stdlib.digestEq(v1591, v1494);
        const v1595 = v1575 ? true : v1594;
        let v1596;
        if (v1488) {
          v1596 = v1478;
          }
        else {
          const v1609 = '-';
          v1596 = v1609;
          }
        const v1610 = 'o';
        const v1611 = stdlib.digest(ctc3, [v1596]);
        const v1613 = stdlib.digest(ctc3, [v1610]);
        const v1614 = stdlib.digestEq(v1611, v1613);
        let v1615;
        if (v1507) {
          v1615 = v1497;
          }
        else {
          const v1628 = '-';
          v1615 = v1628;
          }
        const v1630 = stdlib.digest(ctc3, [v1615]);
        const v1633 = stdlib.digestEq(v1630, v1613);
        const v1634 = v1614 ? true : v1633;
        let v1635;
        if (v1527) {
          v1635 = v1517;
          }
        else {
          const v1648 = '-';
          v1635 = v1648;
          }
        const v1650 = stdlib.digest(ctc3, [v1635]);
        const v1653 = stdlib.digestEq(v1650, v1613);
        const v1654 = v1634 ? true : v1653;
        let v1655;
        if (v1547) {
          v1655 = v1478;
          }
        else {
          const v1668 = '-';
          v1655 = v1668;
          }
        const v1670 = stdlib.digest(ctc3, [v1655]);
        const v1673 = stdlib.digestEq(v1670, v1613);
        const v1674 = v1654 ? true : v1673;
        let v1675;
        if (v1567) {
          v1675 = v1479;
          }
        else {
          const v1688 = '-';
          v1675 = v1688;
          }
        const v1690 = stdlib.digest(ctc3, [v1675]);
        const v1693 = stdlib.digestEq(v1690, v1613);
        const v1694 = v1674 ? true : v1693;
        let v1695;
        if (v1587) {
          v1695 = v1484;
          }
        else {
          const v1708 = '-';
          v1695 = v1708;
          }
        const v1710 = stdlib.digest(ctc3, [v1695]);
        const v1713 = stdlib.digestEq(v1710, v1613);
        const v1714 = v1694 ? true : v1713;
        const v1715 = v1714 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
        const v1716 = v1595 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1715;
        sim_r.txns.push({
          kind: 'from',
          to: v941,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v950, time: v949, didSend: v74, from: v948 } = txn2;
  const v952 = stdlib.safeAdd(v942, v942);
  ;
  const v953 = ' ';
  const v962 = [v953, v953, v953, v953, v953, v953, v953, v953, v953];
  const v963 = {
    board: v962,
    playerTurn: true
    };
  let v975 = v963;
  let v976 = v949;
  let v983 = v952;
  
  while (await (async () => {
    const v987 = v975.board;
    const v988 = await stdlib.Array_asyncReduce([v987], true, async([v990], v989, v991) => {
      const v992 = 'x';
      const v993 = stdlib.digest(ctc3, [v990]);
      const v995 = stdlib.digest(ctc3, [v992]);
      const v996 = stdlib.digestEq(v993, v995);
      const v997 = 'o';
      const v1000 = stdlib.digest(ctc3, [v997]);
      const v1001 = stdlib.digestEq(v993, v1000);
      const v1002 = v996 ? true : v1001;
      const v1003 = v989 ? v1002 : false;
      
      return v1003;})
    let v1005;
    const v1006 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
    const v1007 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
    const v1008 = stdlib.digest(ctc3, [v1006]);
    const v1009 = stdlib.digest(ctc3, [v1007]);
    const v1010 = stdlib.digestEq(v1008, v1009);
    const v1012 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
    const v1014 = stdlib.digest(ctc3, [v1012]);
    const v1015 = stdlib.digestEq(v1008, v1014);
    const v1016 = v1010 ? v1015 : false;
    if (v1016) {
      v1005 = v1006;
      }
    else {
      const v1018 = '-';
      v1005 = v1018;
      }
    const v1019 = 'x';
    const v1020 = stdlib.digest(ctc3, [v1005]);
    const v1022 = stdlib.digest(ctc3, [v1019]);
    const v1023 = stdlib.digestEq(v1020, v1022);
    let v1024;
    const v1025 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
    const v1026 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
    const v1027 = stdlib.digest(ctc3, [v1025]);
    const v1028 = stdlib.digest(ctc3, [v1026]);
    const v1029 = stdlib.digestEq(v1027, v1028);
    const v1031 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
    const v1033 = stdlib.digest(ctc3, [v1031]);
    const v1034 = stdlib.digestEq(v1027, v1033);
    const v1035 = v1029 ? v1034 : false;
    if (v1035) {
      v1024 = v1025;
      }
    else {
      const v1037 = '-';
      v1024 = v1037;
      }
    const v1039 = stdlib.digest(ctc3, [v1024]);
    const v1042 = stdlib.digestEq(v1039, v1022);
    const v1043 = v1023 ? true : v1042;
    let v1044;
    const v1045 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
    const v1046 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
    const v1047 = stdlib.digest(ctc3, [v1045]);
    const v1048 = stdlib.digest(ctc3, [v1046]);
    const v1049 = stdlib.digestEq(v1047, v1048);
    const v1051 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
    const v1053 = stdlib.digest(ctc3, [v1051]);
    const v1054 = stdlib.digestEq(v1047, v1053);
    const v1055 = v1049 ? v1054 : false;
    if (v1055) {
      v1044 = v1045;
      }
    else {
      const v1057 = '-';
      v1044 = v1057;
      }
    const v1059 = stdlib.digest(ctc3, [v1044]);
    const v1062 = stdlib.digestEq(v1059, v1022);
    const v1063 = v1043 ? true : v1062;
    let v1064;
    if (v1016) {
      v1064 = v1006;
      }
    else {
      const v1077 = '-';
      v1064 = v1077;
      }
    const v1078 = 'o';
    const v1079 = stdlib.digest(ctc3, [v1064]);
    const v1081 = stdlib.digest(ctc3, [v1078]);
    const v1082 = stdlib.digestEq(v1079, v1081);
    const v1083 = v1063 ? true : v1082;
    let v1084;
    if (v1035) {
      v1084 = v1025;
      }
    else {
      const v1097 = '-';
      v1084 = v1097;
      }
    const v1099 = stdlib.digest(ctc3, [v1084]);
    const v1102 = stdlib.digestEq(v1099, v1081);
    const v1103 = v1083 ? true : v1102;
    let v1104;
    if (v1055) {
      v1104 = v1045;
      }
    else {
      const v1117 = '-';
      v1104 = v1117;
      }
    const v1119 = stdlib.digest(ctc3, [v1104]);
    const v1122 = stdlib.digestEq(v1119, v1081);
    const v1123 = v1103 ? true : v1122;
    let v1124;
    const v1129 = stdlib.digestEq(v1008, v1027);
    const v1134 = stdlib.digestEq(v1008, v1047);
    const v1135 = v1129 ? v1134 : false;
    if (v1135) {
      v1124 = v1006;
      }
    else {
      const v1137 = '-';
      v1124 = v1137;
      }
    const v1139 = stdlib.digest(ctc3, [v1124]);
    const v1142 = stdlib.digestEq(v1139, v1022);
    const v1143 = v1123 ? true : v1142;
    let v1144;
    const v1149 = stdlib.digestEq(v1009, v1028);
    const v1154 = stdlib.digestEq(v1009, v1048);
    const v1155 = v1149 ? v1154 : false;
    if (v1155) {
      v1144 = v1007;
      }
    else {
      const v1157 = '-';
      v1144 = v1157;
      }
    const v1159 = stdlib.digest(ctc3, [v1144]);
    const v1162 = stdlib.digestEq(v1159, v1022);
    const v1163 = v1143 ? true : v1162;
    let v1164;
    const v1169 = stdlib.digestEq(v1014, v1033);
    const v1174 = stdlib.digestEq(v1014, v1053);
    const v1175 = v1169 ? v1174 : false;
    if (v1175) {
      v1164 = v1012;
      }
    else {
      const v1177 = '-';
      v1164 = v1177;
      }
    const v1179 = stdlib.digest(ctc3, [v1164]);
    const v1182 = stdlib.digestEq(v1179, v1022);
    const v1183 = v1163 ? true : v1182;
    let v1184;
    if (v1135) {
      v1184 = v1006;
      }
    else {
      const v1197 = '-';
      v1184 = v1197;
      }
    const v1199 = stdlib.digest(ctc3, [v1184]);
    const v1202 = stdlib.digestEq(v1199, v1081);
    const v1203 = v1183 ? true : v1202;
    let v1204;
    if (v1155) {
      v1204 = v1007;
      }
    else {
      const v1217 = '-';
      v1204 = v1217;
      }
    const v1219 = stdlib.digest(ctc3, [v1204]);
    const v1222 = stdlib.digestEq(v1219, v1081);
    const v1223 = v1203 ? true : v1222;
    let v1224;
    if (v1175) {
      v1224 = v1012;
      }
    else {
      const v1237 = '-';
      v1224 = v1237;
      }
    const v1239 = stdlib.digest(ctc3, [v1224]);
    const v1242 = stdlib.digestEq(v1239, v1081);
    const v1243 = v1223 ? true : v1242;
    let v1244;
    const v1249 = stdlib.digestEq(v1008, v1028);
    const v1254 = stdlib.digestEq(v1008, v1053);
    const v1255 = v1249 ? true : v1254;
    if (v1255) {
      v1244 = v1006;
      }
    else {
      const v1257 = '-';
      v1244 = v1257;
      }
    const v1259 = stdlib.digest(ctc3, [v1244]);
    const v1262 = stdlib.digestEq(v1259, v1022);
    const v1263 = v1243 ? true : v1262;
    let v1264;
    if (v1255) {
      v1264 = v1006;
      }
    else {
      const v1277 = '-';
      v1264 = v1277;
      }
    const v1279 = stdlib.digest(ctc3, [v1264]);
    const v1282 = stdlib.digestEq(v1279, v1081);
    const v1283 = v1263 ? true : v1282;
    let v1284;
    const v1289 = stdlib.digestEq(v1014, v1028);
    const v1294 = stdlib.digestEq(v1014, v1047);
    const v1295 = v1289 ? true : v1294;
    if (v1295) {
      v1284 = v1012;
      }
    else {
      const v1297 = '-';
      v1284 = v1297;
      }
    const v1299 = stdlib.digest(ctc3, [v1284]);
    const v1302 = stdlib.digestEq(v1299, v1022);
    const v1303 = v1283 ? true : v1302;
    let v1304;
    if (v1295) {
      v1304 = v1012;
      }
    else {
      const v1317 = '-';
      v1304 = v1317;
      }
    const v1319 = stdlib.digest(ctc3, [v1304]);
    const v1322 = stdlib.digestEq(v1319, v1081);
    const v1323 = v1303 ? true : v1322;
    const v1324 = v988 ? true : v1323;
    const v1325 = v1324 ? false : true;
    
    return v1325;})()) {
    const v1326 = v975.playerTurn;
    if (v1326) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1364], secs: v1366, time: v1365, didSend: v497, from: v1363 } = txn3;
      ;
      const v1367 = stdlib.addressEq(v941, v1363);
      stdlib.assert(v1367, {
        at: './index.rsh:166:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1368 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1364);
      const v1369 = stdlib.lt(v1364, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1370 = v1368 ? v1369 : false;
      stdlib.assert(v1370, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:168:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1371 = v975.board;
      const v1373 = v1371[v1364];
      const v1374 = 'x';
      const v1375 = stdlib.digest(ctc3, [v1373]);
      const v1377 = stdlib.digest(ctc3, [v1374]);
      const v1378 = stdlib.digestEq(v1375, v1377);
      let v1379;
      if (v1378) {
        v1379 = true;
        }
      else {
        const v1383 = 'o';
        const v1386 = stdlib.digest(ctc3, [v1383]);
        const v1387 = stdlib.digestEq(v1375, v1386);
        v1379 = v1387;
        }
      const v1388 = v1379 ? false : true;
      stdlib.assert(v1388, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:168:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const v1395 = stdlib.Array_set(v1371, v1364, v1374);
      const v1400 = {
        board: v1395,
        playerTurn: false
        };
      const cv975 = v1400;
      const cv976 = v1365;
      const cv983 = v983;
      
      v975 = cv975;
      v976 = cv976;
      v983 = cv983;
      
      continue;
      
      }
    else {
      const v1404 = v975.board;
      const v1415 = stdlib.protect(ctc0, await interact.getSquareSelected(v975), {
        at: './index.rsh:102:43:application',
        fs: ['at ./index.rsh:174:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Bob'
        });
      const v1416 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1415);
      const v1417 = stdlib.lt(v1415, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1418 = v1416 ? v1417 : false;
      stdlib.assert(v1418, {
        at: './index.rsh:103:9:application',
        fs: ['at ./index.rsh:174:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1421 = v1404[v1415];
      const v1422 = 'x';
      const v1423 = stdlib.digest(ctc3, [v1421]);
      const v1425 = stdlib.digest(ctc3, [v1422]);
      const v1426 = stdlib.digestEq(v1423, v1425);
      let v1427;
      if (v1426) {
        v1427 = true;
        }
      else {
        const v1431 = 'o';
        const v1434 = stdlib.digest(ctc3, [v1431]);
        const v1435 = stdlib.digestEq(v1423, v1434);
        v1427 = v1435;
        }
      const v1436 = v1427 ? false : true;
      stdlib.assert(v1436, {
        at: './index.rsh:104:9:application',
        fs: ['at ./index.rsh:174:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v941, v948, v975, v983, v1415],
        evt_cnt: 1,
        funcNum: 4,
        lct: v976,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:177:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1438], secs: v1440, time: v1439, didSend: v582, from: v1437 } = txn3;
          
          ;
          const v1445 = v975.board;
          const v1471 = 'o';
          const v1473 = stdlib.Array_set(v1445, v1438, v1471);
          const v1474 = {
            board: v1473,
            playerTurn: true
            };
          const cv975 = v1474;
          const cv976 = v1439;
          const cv983 = v983;
          
          await (async () => {
            const v975 = cv975;
            const v976 = cv976;
            const v983 = cv983;
            
            if (await (async () => {
              const v987 = v975.board;
              const v988 = await stdlib.Array_asyncReduce([v987], true, async([v990], v989, v991) => {
                const v992 = 'x';
                const v993 = stdlib.digest(ctc3, [v990]);
                const v995 = stdlib.digest(ctc3, [v992]);
                const v996 = stdlib.digestEq(v993, v995);
                const v997 = 'o';
                const v1000 = stdlib.digest(ctc3, [v997]);
                const v1001 = stdlib.digestEq(v993, v1000);
                const v1002 = v996 ? true : v1001;
                const v1003 = v989 ? v1002 : false;
                
                return v1003;})
              let v1005;
              const v1006 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1007 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1008 = stdlib.digest(ctc3, [v1006]);
              const v1009 = stdlib.digest(ctc3, [v1007]);
              const v1010 = stdlib.digestEq(v1008, v1009);
              const v1012 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1014 = stdlib.digest(ctc3, [v1012]);
              const v1015 = stdlib.digestEq(v1008, v1014);
              const v1016 = v1010 ? v1015 : false;
              if (v1016) {
                v1005 = v1006;
                }
              else {
                const v1018 = '-';
                v1005 = v1018;
                }
              const v1019 = 'x';
              const v1020 = stdlib.digest(ctc3, [v1005]);
              const v1022 = stdlib.digest(ctc3, [v1019]);
              const v1023 = stdlib.digestEq(v1020, v1022);
              let v1024;
              const v1025 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1026 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1027 = stdlib.digest(ctc3, [v1025]);
              const v1028 = stdlib.digest(ctc3, [v1026]);
              const v1029 = stdlib.digestEq(v1027, v1028);
              const v1031 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1033 = stdlib.digest(ctc3, [v1031]);
              const v1034 = stdlib.digestEq(v1027, v1033);
              const v1035 = v1029 ? v1034 : false;
              if (v1035) {
                v1024 = v1025;
                }
              else {
                const v1037 = '-';
                v1024 = v1037;
                }
              const v1039 = stdlib.digest(ctc3, [v1024]);
              const v1042 = stdlib.digestEq(v1039, v1022);
              const v1043 = v1023 ? true : v1042;
              let v1044;
              const v1045 = v987[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1046 = v987[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1047 = stdlib.digest(ctc3, [v1045]);
              const v1048 = stdlib.digest(ctc3, [v1046]);
              const v1049 = stdlib.digestEq(v1047, v1048);
              const v1051 = v987[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1053 = stdlib.digest(ctc3, [v1051]);
              const v1054 = stdlib.digestEq(v1047, v1053);
              const v1055 = v1049 ? v1054 : false;
              if (v1055) {
                v1044 = v1045;
                }
              else {
                const v1057 = '-';
                v1044 = v1057;
                }
              const v1059 = stdlib.digest(ctc3, [v1044]);
              const v1062 = stdlib.digestEq(v1059, v1022);
              const v1063 = v1043 ? true : v1062;
              let v1064;
              if (v1016) {
                v1064 = v1006;
                }
              else {
                const v1077 = '-';
                v1064 = v1077;
                }
              const v1078 = 'o';
              const v1079 = stdlib.digest(ctc3, [v1064]);
              const v1081 = stdlib.digest(ctc3, [v1078]);
              const v1082 = stdlib.digestEq(v1079, v1081);
              const v1083 = v1063 ? true : v1082;
              let v1084;
              if (v1035) {
                v1084 = v1025;
                }
              else {
                const v1097 = '-';
                v1084 = v1097;
                }
              const v1099 = stdlib.digest(ctc3, [v1084]);
              const v1102 = stdlib.digestEq(v1099, v1081);
              const v1103 = v1083 ? true : v1102;
              let v1104;
              if (v1055) {
                v1104 = v1045;
                }
              else {
                const v1117 = '-';
                v1104 = v1117;
                }
              const v1119 = stdlib.digest(ctc3, [v1104]);
              const v1122 = stdlib.digestEq(v1119, v1081);
              const v1123 = v1103 ? true : v1122;
              let v1124;
              const v1129 = stdlib.digestEq(v1008, v1027);
              const v1134 = stdlib.digestEq(v1008, v1047);
              const v1135 = v1129 ? v1134 : false;
              if (v1135) {
                v1124 = v1006;
                }
              else {
                const v1137 = '-';
                v1124 = v1137;
                }
              const v1139 = stdlib.digest(ctc3, [v1124]);
              const v1142 = stdlib.digestEq(v1139, v1022);
              const v1143 = v1123 ? true : v1142;
              let v1144;
              const v1149 = stdlib.digestEq(v1009, v1028);
              const v1154 = stdlib.digestEq(v1009, v1048);
              const v1155 = v1149 ? v1154 : false;
              if (v1155) {
                v1144 = v1007;
                }
              else {
                const v1157 = '-';
                v1144 = v1157;
                }
              const v1159 = stdlib.digest(ctc3, [v1144]);
              const v1162 = stdlib.digestEq(v1159, v1022);
              const v1163 = v1143 ? true : v1162;
              let v1164;
              const v1169 = stdlib.digestEq(v1014, v1033);
              const v1174 = stdlib.digestEq(v1014, v1053);
              const v1175 = v1169 ? v1174 : false;
              if (v1175) {
                v1164 = v1012;
                }
              else {
                const v1177 = '-';
                v1164 = v1177;
                }
              const v1179 = stdlib.digest(ctc3, [v1164]);
              const v1182 = stdlib.digestEq(v1179, v1022);
              const v1183 = v1163 ? true : v1182;
              let v1184;
              if (v1135) {
                v1184 = v1006;
                }
              else {
                const v1197 = '-';
                v1184 = v1197;
                }
              const v1199 = stdlib.digest(ctc3, [v1184]);
              const v1202 = stdlib.digestEq(v1199, v1081);
              const v1203 = v1183 ? true : v1202;
              let v1204;
              if (v1155) {
                v1204 = v1007;
                }
              else {
                const v1217 = '-';
                v1204 = v1217;
                }
              const v1219 = stdlib.digest(ctc3, [v1204]);
              const v1222 = stdlib.digestEq(v1219, v1081);
              const v1223 = v1203 ? true : v1222;
              let v1224;
              if (v1175) {
                v1224 = v1012;
                }
              else {
                const v1237 = '-';
                v1224 = v1237;
                }
              const v1239 = stdlib.digest(ctc3, [v1224]);
              const v1242 = stdlib.digestEq(v1239, v1081);
              const v1243 = v1223 ? true : v1242;
              let v1244;
              const v1249 = stdlib.digestEq(v1008, v1028);
              const v1254 = stdlib.digestEq(v1008, v1053);
              const v1255 = v1249 ? true : v1254;
              if (v1255) {
                v1244 = v1006;
                }
              else {
                const v1257 = '-';
                v1244 = v1257;
                }
              const v1259 = stdlib.digest(ctc3, [v1244]);
              const v1262 = stdlib.digestEq(v1259, v1022);
              const v1263 = v1243 ? true : v1262;
              let v1264;
              if (v1255) {
                v1264 = v1006;
                }
              else {
                const v1277 = '-';
                v1264 = v1277;
                }
              const v1279 = stdlib.digest(ctc3, [v1264]);
              const v1282 = stdlib.digestEq(v1279, v1081);
              const v1283 = v1263 ? true : v1282;
              let v1284;
              const v1289 = stdlib.digestEq(v1014, v1028);
              const v1294 = stdlib.digestEq(v1014, v1047);
              const v1295 = v1289 ? true : v1294;
              if (v1295) {
                v1284 = v1012;
                }
              else {
                const v1297 = '-';
                v1284 = v1297;
                }
              const v1299 = stdlib.digest(ctc3, [v1284]);
              const v1302 = stdlib.digestEq(v1299, v1022);
              const v1303 = v1283 ? true : v1302;
              let v1304;
              if (v1295) {
                v1304 = v1012;
                }
              else {
                const v1317 = '-';
                v1304 = v1317;
                }
              const v1319 = stdlib.digest(ctc3, [v1304]);
              const v1322 = stdlib.digestEq(v1319, v1081);
              const v1323 = v1303 ? true : v1322;
              const v1324 = v988 ? true : v1323;
              const v1325 = v1324 ? false : true;
              
              return v1325;})()) {
              const v1326 = v975.playerTurn;
              if (v1326) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            else {
              const v1476 = v975.board;
              let v1477;
              const v1478 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1479 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1480 = stdlib.digest(ctc3, [v1478]);
              const v1481 = stdlib.digest(ctc3, [v1479]);
              const v1482 = stdlib.digestEq(v1480, v1481);
              const v1484 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1486 = stdlib.digest(ctc3, [v1484]);
              const v1487 = stdlib.digestEq(v1480, v1486);
              const v1488 = v1482 ? v1487 : false;
              if (v1488) {
                v1477 = v1478;
                }
              else {
                const v1490 = '-';
                v1477 = v1490;
                }
              const v1491 = 'x';
              const v1492 = stdlib.digest(ctc3, [v1477]);
              const v1494 = stdlib.digest(ctc3, [v1491]);
              const v1495 = stdlib.digestEq(v1492, v1494);
              let v1496;
              const v1497 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1498 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1499 = stdlib.digest(ctc3, [v1497]);
              const v1500 = stdlib.digest(ctc3, [v1498]);
              const v1501 = stdlib.digestEq(v1499, v1500);
              const v1503 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1505 = stdlib.digest(ctc3, [v1503]);
              const v1506 = stdlib.digestEq(v1499, v1505);
              const v1507 = v1501 ? v1506 : false;
              if (v1507) {
                v1496 = v1497;
                }
              else {
                const v1509 = '-';
                v1496 = v1509;
                }
              const v1511 = stdlib.digest(ctc3, [v1496]);
              const v1514 = stdlib.digestEq(v1511, v1494);
              const v1515 = v1495 ? true : v1514;
              let v1516;
              const v1517 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1518 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1519 = stdlib.digest(ctc3, [v1517]);
              const v1520 = stdlib.digest(ctc3, [v1518]);
              const v1521 = stdlib.digestEq(v1519, v1520);
              const v1523 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1525 = stdlib.digest(ctc3, [v1523]);
              const v1526 = stdlib.digestEq(v1519, v1525);
              const v1527 = v1521 ? v1526 : false;
              if (v1527) {
                v1516 = v1517;
                }
              else {
                const v1529 = '-';
                v1516 = v1529;
                }
              const v1531 = stdlib.digest(ctc3, [v1516]);
              const v1534 = stdlib.digestEq(v1531, v1494);
              const v1535 = v1515 ? true : v1534;
              let v1536;
              const v1541 = stdlib.digestEq(v1480, v1499);
              const v1546 = stdlib.digestEq(v1480, v1519);
              const v1547 = v1541 ? v1546 : false;
              if (v1547) {
                v1536 = v1478;
                }
              else {
                const v1549 = '-';
                v1536 = v1549;
                }
              const v1551 = stdlib.digest(ctc3, [v1536]);
              const v1554 = stdlib.digestEq(v1551, v1494);
              const v1555 = v1535 ? true : v1554;
              let v1556;
              const v1561 = stdlib.digestEq(v1481, v1500);
              const v1566 = stdlib.digestEq(v1481, v1520);
              const v1567 = v1561 ? v1566 : false;
              if (v1567) {
                v1556 = v1479;
                }
              else {
                const v1569 = '-';
                v1556 = v1569;
                }
              const v1571 = stdlib.digest(ctc3, [v1556]);
              const v1574 = stdlib.digestEq(v1571, v1494);
              const v1575 = v1555 ? true : v1574;
              let v1576;
              const v1581 = stdlib.digestEq(v1486, v1505);
              const v1586 = stdlib.digestEq(v1486, v1525);
              const v1587 = v1581 ? v1586 : false;
              if (v1587) {
                v1576 = v1484;
                }
              else {
                const v1589 = '-';
                v1576 = v1589;
                }
              const v1591 = stdlib.digest(ctc3, [v1576]);
              const v1594 = stdlib.digestEq(v1591, v1494);
              const v1595 = v1575 ? true : v1594;
              let v1596;
              if (v1488) {
                v1596 = v1478;
                }
              else {
                const v1609 = '-';
                v1596 = v1609;
                }
              const v1610 = 'o';
              const v1611 = stdlib.digest(ctc3, [v1596]);
              const v1613 = stdlib.digest(ctc3, [v1610]);
              const v1614 = stdlib.digestEq(v1611, v1613);
              let v1615;
              if (v1507) {
                v1615 = v1497;
                }
              else {
                const v1628 = '-';
                v1615 = v1628;
                }
              const v1630 = stdlib.digest(ctc3, [v1615]);
              const v1633 = stdlib.digestEq(v1630, v1613);
              const v1634 = v1614 ? true : v1633;
              let v1635;
              if (v1527) {
                v1635 = v1517;
                }
              else {
                const v1648 = '-';
                v1635 = v1648;
                }
              const v1650 = stdlib.digest(ctc3, [v1635]);
              const v1653 = stdlib.digestEq(v1650, v1613);
              const v1654 = v1634 ? true : v1653;
              let v1655;
              if (v1547) {
                v1655 = v1478;
                }
              else {
                const v1668 = '-';
                v1655 = v1668;
                }
              const v1670 = stdlib.digest(ctc3, [v1655]);
              const v1673 = stdlib.digestEq(v1670, v1613);
              const v1674 = v1654 ? true : v1673;
              let v1675;
              if (v1567) {
                v1675 = v1479;
                }
              else {
                const v1688 = '-';
                v1675 = v1688;
                }
              const v1690 = stdlib.digest(ctc3, [v1675]);
              const v1693 = stdlib.digestEq(v1690, v1613);
              const v1694 = v1674 ? true : v1693;
              let v1695;
              if (v1587) {
                v1695 = v1484;
                }
              else {
                const v1708 = '-';
                v1695 = v1708;
                }
              const v1710 = stdlib.digest(ctc3, [v1695]);
              const v1713 = stdlib.digestEq(v1710, v1613);
              const v1714 = v1694 ? true : v1713;
              const v1715 = v1714 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
              const v1716 = v1595 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1715;
              sim_r.txns.push({
                kind: 'from',
                to: v941,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc4, ctc4, ctc7, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v1438], secs: v1440, time: v1439, didSend: v582, from: v1437 } = txn3;
      ;
      const v1441 = stdlib.addressEq(v948, v1437);
      stdlib.assert(v1441, {
        at: './index.rsh:177:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1442 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1438);
      const v1443 = stdlib.lt(v1438, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1444 = v1442 ? v1443 : false;
      stdlib.assert(v1444, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:178:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1445 = v975.board;
      const v1447 = v1445[v1438];
      const v1448 = 'x';
      const v1449 = stdlib.digest(ctc3, [v1447]);
      const v1451 = stdlib.digest(ctc3, [v1448]);
      const v1452 = stdlib.digestEq(v1449, v1451);
      let v1453;
      if (v1452) {
        v1453 = true;
        }
      else {
        const v1457 = 'o';
        const v1460 = stdlib.digest(ctc3, [v1457]);
        const v1461 = stdlib.digestEq(v1449, v1460);
        v1453 = v1461;
        }
      const v1462 = v1453 ? false : true;
      stdlib.assert(v1462, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:178:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const v1471 = 'o';
      const v1473 = stdlib.Array_set(v1445, v1438, v1471);
      const v1474 = {
        board: v1473,
        playerTurn: true
        };
      const cv975 = v1474;
      const cv976 = v1439;
      const cv983 = v983;
      
      v975 = cv975;
      v976 = cv976;
      v983 = cv983;
      
      continue;
      
      }}
  const v1476 = v975.board;
  let v1477;
  const v1478 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
  const v1479 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
  const v1480 = stdlib.digest(ctc3, [v1478]);
  const v1481 = stdlib.digest(ctc3, [v1479]);
  const v1482 = stdlib.digestEq(v1480, v1481);
  const v1484 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
  const v1486 = stdlib.digest(ctc3, [v1484]);
  const v1487 = stdlib.digestEq(v1480, v1486);
  const v1488 = v1482 ? v1487 : false;
  if (v1488) {
    v1477 = v1478;
    }
  else {
    const v1490 = '-';
    v1477 = v1490;
    }
  const v1491 = 'x';
  const v1492 = stdlib.digest(ctc3, [v1477]);
  const v1494 = stdlib.digest(ctc3, [v1491]);
  const v1495 = stdlib.digestEq(v1492, v1494);
  let v1496;
  const v1497 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
  const v1498 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
  const v1499 = stdlib.digest(ctc3, [v1497]);
  const v1500 = stdlib.digest(ctc3, [v1498]);
  const v1501 = stdlib.digestEq(v1499, v1500);
  const v1503 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
  const v1505 = stdlib.digest(ctc3, [v1503]);
  const v1506 = stdlib.digestEq(v1499, v1505);
  const v1507 = v1501 ? v1506 : false;
  if (v1507) {
    v1496 = v1497;
    }
  else {
    const v1509 = '-';
    v1496 = v1509;
    }
  const v1511 = stdlib.digest(ctc3, [v1496]);
  const v1514 = stdlib.digestEq(v1511, v1494);
  const v1515 = v1495 ? true : v1514;
  let v1516;
  const v1517 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
  const v1518 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
  const v1519 = stdlib.digest(ctc3, [v1517]);
  const v1520 = stdlib.digest(ctc3, [v1518]);
  const v1521 = stdlib.digestEq(v1519, v1520);
  const v1523 = v1476[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
  const v1525 = stdlib.digest(ctc3, [v1523]);
  const v1526 = stdlib.digestEq(v1519, v1525);
  const v1527 = v1521 ? v1526 : false;
  if (v1527) {
    v1516 = v1517;
    }
  else {
    const v1529 = '-';
    v1516 = v1529;
    }
  const v1531 = stdlib.digest(ctc3, [v1516]);
  const v1534 = stdlib.digestEq(v1531, v1494);
  const v1535 = v1515 ? true : v1534;
  let v1536;
  const v1541 = stdlib.digestEq(v1480, v1499);
  const v1546 = stdlib.digestEq(v1480, v1519);
  const v1547 = v1541 ? v1546 : false;
  if (v1547) {
    v1536 = v1478;
    }
  else {
    const v1549 = '-';
    v1536 = v1549;
    }
  const v1551 = stdlib.digest(ctc3, [v1536]);
  const v1554 = stdlib.digestEq(v1551, v1494);
  const v1555 = v1535 ? true : v1554;
  let v1556;
  const v1561 = stdlib.digestEq(v1481, v1500);
  const v1566 = stdlib.digestEq(v1481, v1520);
  const v1567 = v1561 ? v1566 : false;
  if (v1567) {
    v1556 = v1479;
    }
  else {
    const v1569 = '-';
    v1556 = v1569;
    }
  const v1571 = stdlib.digest(ctc3, [v1556]);
  const v1574 = stdlib.digestEq(v1571, v1494);
  const v1575 = v1555 ? true : v1574;
  let v1576;
  const v1581 = stdlib.digestEq(v1486, v1505);
  const v1586 = stdlib.digestEq(v1486, v1525);
  const v1587 = v1581 ? v1586 : false;
  if (v1587) {
    v1576 = v1484;
    }
  else {
    const v1589 = '-';
    v1576 = v1589;
    }
  const v1591 = stdlib.digest(ctc3, [v1576]);
  const v1594 = stdlib.digestEq(v1591, v1494);
  const v1595 = v1575 ? true : v1594;
  let v1596;
  if (v1488) {
    v1596 = v1478;
    }
  else {
    const v1609 = '-';
    v1596 = v1609;
    }
  const v1610 = 'o';
  const v1611 = stdlib.digest(ctc3, [v1596]);
  const v1613 = stdlib.digest(ctc3, [v1610]);
  const v1614 = stdlib.digestEq(v1611, v1613);
  let v1615;
  if (v1507) {
    v1615 = v1497;
    }
  else {
    const v1628 = '-';
    v1615 = v1628;
    }
  const v1630 = stdlib.digest(ctc3, [v1615]);
  const v1633 = stdlib.digestEq(v1630, v1613);
  const v1634 = v1614 ? true : v1633;
  let v1635;
  if (v1527) {
    v1635 = v1517;
    }
  else {
    const v1648 = '-';
    v1635 = v1648;
    }
  const v1650 = stdlib.digest(ctc3, [v1635]);
  const v1653 = stdlib.digestEq(v1650, v1613);
  const v1654 = v1634 ? true : v1653;
  let v1655;
  if (v1547) {
    v1655 = v1478;
    }
  else {
    const v1668 = '-';
    v1655 = v1668;
    }
  const v1670 = stdlib.digest(ctc3, [v1655]);
  const v1673 = stdlib.digestEq(v1670, v1613);
  const v1674 = v1654 ? true : v1673;
  let v1675;
  if (v1567) {
    v1675 = v1479;
    }
  else {
    const v1688 = '-';
    v1675 = v1688;
    }
  const v1690 = stdlib.digest(ctc3, [v1675]);
  const v1693 = stdlib.digestEq(v1690, v1613);
  const v1694 = v1674 ? true : v1693;
  let v1695;
  if (v1587) {
    v1695 = v1484;
    }
  else {
    const v1708 = '-';
    v1695 = v1708;
    }
  const v1710 = stdlib.digest(ctc3, [v1695]);
  const v1713 = stdlib.digestEq(v1710, v1613);
  const v1714 = v1694 ? true : v1713;
  const v1715 = v1714 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
  const v1716 = v1595 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1715;
  ;
  stdlib.protect(ctc1, await interact.endsWith(v975), {
    at: './index.rsh:191:22:application',
    fs: ['at ./index.rsh:190:7:application call to [unknown function] (defined at: ./index.rsh:190:19:function exp)'],
    msg: 'endsWith',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.seeOutcome(v1716), {
    at: './index.rsh:192:24:application',
    fs: ['at ./index.rsh:190:7:application call to [unknown function] (defined at: ./index.rsh:190:19:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAEGCQQCBUomBgEtAQAgZcdMFaaGGHu2u/mVj0lPxrgAaANKZZqa1EmRsIxY8tIgLXEWQrcmsEQBYnyp+6wy9chTD7GQPMTbAiWHF5IaSIEAAQEiNQAxGEEFpCcEZEkiWzUBSYEIWzUCgRBbNQg2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEDDEABbEkhBAxAALEhBBJEIjX/sSKyASSyEDQIshizNP8jCEk1/yEFDED/5yEGNAESRDQESSISTDQCEhFEKWRJNQNXICA1/0k1BRc1/oAE+YuveDT+FlCwNP8xABJEIjT+DjT+JQwQRDQDV0AKVwAJSTX9IzT+CyNYAUk1/CsSQQAGIzX7QgAGNPwqEjX7NPsURDQDVwAgNP80/SIjNP4LUoABb1A0/SNJNP4LCCVSUCcFUDIGNAMhB1tCAZRIIjX/sSKyASSyEDQIshizNP8jCEk1/yEFDED/5yEENAESRDQESSISTDQCEhFEKWRJNQNXACA1/0k1BRc1/oAE1Axs1jT+FlCwNP8xABJEIjT+DjT+JQwQRDQDV0AKVwAJNf2AAXg1/DT9IzT+CyNYAUk1+zT8ARJBAAYjNfpCAAY0+yoSNfo0+hRENP80A1cgIDT9IiM0/gtSNPxQNP0jSTT+CwglUlApUDIGNAMhB1tCAOBJIwxAAHYjEkQiNf+xIrIBJLIQNAiyGLM0/yMISTX/IQUMQP/nIzQBEkQ0BEkiEkw0AhIRRClkSTUDgSBbNf+ABJqLkXSwNP+IA9iAASA1/jQDVwAgMQA0/klQNP5QNP5QNP5QNP5QNP5QNP5QNP5QJwVQMgY0/0kIQgBkSIHAmgyIA5+xIrIBJLIQIrIYgAYGMQAyCRKyHoABBrIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gDWzEANP8WUClLAVcAKGdIIzUBMgY1AkIC6TX/Nf41/TX8Nfs0/VcACTXqIzXpIjXoNOojNOgLI1hJNecBNeY06TTmKxI05ioSERA16TToIwhJNeglDED/2DTqVwABNec06lcBATXmNOcBNeU05gE15DTqVwIBSTXjATXiNOU05BI05TTiEhBJNeFBAAc05zXoQgADKDXoKzXgNOpXAwFJNd4BNd006lcEAQE13DTqVwUBATXbNN003BI03TTbEhBJNdpBAAc03jXfQgADKDXfNOpXBgFJNdgBNdc06lcHAQE11jTqVwgBATXVNNc01hI01zTVEhBJNdRBAAc02DXZQgADKDXZNOFBAAc05zXTQgADKDXTKjXSNNpBAAc03jXRQgADKDXRNNRBAAc02DXQQgADKDXQNOU03RI05TTXEhBJNc5BAAc05zXPQgADKDXPNOQ03BI05DTWEhBJNcxBAAc05jXNQgADKDXNNOI02xI04jTVEhBJNcpBAAc04zXLQgADKDXLNM5BAAc05zXJQgADKDXJNMxBAAc05jXIQgADKDXINMpBAAc04zXHQgADKDXHNOU03BI05TTVEhFJNcVBAAc05zXGQgADKDXGNMVBAAc05zXEQgADKDXENOI03BI04jTXEhFJNcJBAAc04zXDQgADKDXDNMJBAAc04zXBQgADKDXBNOk06AE04BI03wE04BIRNNkBNOASETTTATTSEhE00QE00hIRNNABNNISETTPATTgEhE0zQE04BIRNMsBNOASETTJATTSEhE0yAE00hIRNMcBNNISETTGATTgEhE0xAE00hIRNMMBNOASETTBATTSEhERQQATsSKyATT/sggjshA0+7IHs0IARzT9VwkBF0EAHzT7NPxQNP1QNP8WUClLAVcAUmdIIQQ1ATIGNQJCAEs0+zT8UDT9UDT/FlApSwFXAFJnSCEGNQEyBjUCQgAsMRkhBhJEsSKyASSyEDQIshghBrIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcENAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQIiNQhC/6Y0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: {
    publish1: 2,
    publish3: 2,
    publish4: 2
    },
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 82,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v942",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v942",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1364",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1438",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1364",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1438",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200253e3803806200253e8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b61229080620002ae6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a209ad4e146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004611e45565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004611e45565b6102dd565b3480156100ca57600080fd5b506100d36105a5565b60405161007a929190611e68565b61005d6100ef366004611e45565b610642565b61010460016000541460096108fa565b61011e8135158061011757506001548235145b600a6108fa565b60008080556002805461013090611ec5565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90611ec5565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190611fbf565b90506101cb611765565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516101fc929190612006565b60405180910390a16102158260200151341460086108fa565b8051600160fd1b9052805160208083018051929092528251825182015282518251604090810191909152835183516060015283518351608001528351835160a001528351835160c001528351835160e0015283518351610100015291519183018051929092529051600191015261028a611799565b825181516001600160a01b03909116905280513360209182015260408301518183018051919091525143908201528301516102c59080610924565b6020820151604001526102d781610977565b50505050565b6102ed60056000541460156108fa565b6103078135158061030057506001548235145b60166108fa565b60008080556002805461031990611ec5565b80601f016020809104026020016040519081016040528092919081815260200182805461034590611ec5565b80156103925780601f1061036757610100808354040283529160200191610392565b820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b50505050508060200190518101906103aa919061205f565b90506103b46117c2565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516103e592919061215c565b60405180910390a16103f9341560116108fa565b6020820151610414906001600160a01b0316331460126108fa565b610426600960208501351060136108fa565b8051600f60fb1b905260408201515160208401356009811061044a5761044a61203e565b602002015160405160200161045f9190612183565b60408051601f19818403018152918152815160209283012083830152825190516104899201612183565b6040516020818303038152906040528051906020012060001c816020015114156104b957600160408201526104fb565b606081018051606f60f81b9052516040516104d79190602001612183565b60408051601f19818403018152918152815160209283012091830151909114908201525b610518816040015161050e576001610511565b60005b60146108fa565b608081018051606f60f81b9052604083015151905161053d91906020860135906116f1565b60a08201805191909152516001602090910152610558611799565b825181516001600160a01b039182169052602080850151835192169181019190915260a083015181830180519190915280514392019190915260608401519051604001526102d781610977565b6000606060005460028080546105ba90611ec5565b80601f01602080910402602001604051908101604052809291908181526020018280546105e690611ec5565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b50505050509050915091509091565b610652600460005414600f6108fa565b61066c8135158061066557506001548235145b60106108fa565b60008080556002805461067e90611ec5565b80601f01602080910402602001604051908101604052809291908181526020018280546106aa90611ec5565b80156106f75780601f106106cc576101008083540402835291602001916106f7565b820191906000526020600020905b8154815290600101906020018083116106da57829003601f168201915b505050505080602001905181019061070f919061205f565b9050610719611809565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338460405161074a92919061215c565b60405180910390a161075e3415600b6108fa565b8151610776906001600160a01b03163314600c6108fa565b6107886009602085013510600d6108fa565b8051600f60fb1b90526040820151516020840135600981106107ac576107ac61203e565b60200201516040516020016107c19190612183565b60408051601f19818403018152918152815160209283012083830152825190516107eb9201612183565b6040516020818303038152906040528051906020012060001c8160200151141561081b576001604082015261085d565b606081018051606f60f81b9052516040516108399190602001612183565b60408051601f19818403018152918152815160209283012091830151909114908201525b61087a8160400151610870576001610873565b60005b600e6108fa565b604082015151815161089291906020860135906116f1565b608082018051919091525160006020909101526108ad611799565b825181516001600160a01b0391821690526020808501518351921691810191909152608083015181830180519190915280514392019190915260608401519051604001526102d781610977565b816109205760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008261093183826121ad565b91508110156109715760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610917565b92915050565b61097f611841565b6001602082015260005b6009811015610a9a576020830151515181600981106109aa576109aa61203e565b6020908102919091015160408085019182526060850151600f60fb1b9052905190516109d69201612183565b60408051601f198184030181529190528051602091820120608084015260a0830151606f60f81b9052820151610a0d576000610a81565b8160600151604051602001610a229190612183565b6040516020818303038152906040528051906020012060001c826080015114610a7e578160a00151604051602001610a5a9190612183565b6040516020818303038152906040528051906020012060001c826080015114610a81565b60015b1515602083015280610a92816121c5565b915050610989565b506020818101511515825282810151515151604051610ab99201612183565b60408051808303601f19018152918152815160209283012060e08401528382015151518201519051610aeb9201612183565b60408051808303601f1901815291815281516020928301206101008401528382015151518101519051610b1e9201612183565b60408051601f19818403018152919052805160209091012061012082015261010081015160e082015114610b53576000610b60565b8061012001518160e00151145b158015610140830152610b7f57602082015151515160c0820152610b94565b61016081018051602d60f81b90525160c08201525b61018081018051600f60fb1b905251604051610bb39190602001612183565b60408051808303601f1901815291815281516020928301206101a0840152838201515151606001519051610be79201612183565b60408051808303601f1901815291815281516020928301206101e0840152838201515151608001519051610c1b9201612183565b60408051808303601f19018152918152815160209283012061020084015283820151515160a001519051610c4f9201612183565b60408051601f1981840301815291905280516020909101206102208201526102008101516101e082015114610c85576000610c93565b806102200151816101e00151145b158015610240830152610cb65760208201515151606001516101c0820152610ccc565b61026081018051602d60f81b9052516101c08201525b602082810151515160c00151604051610ce59201612183565b60408051808303601f1901815291815281516020928301206102a084015283820151515160e001519051610d199201612183565b60408051808303601f1901815291815281516020928301206102c084015283820151515161010001519051610d4e9201612183565b60408051601f1981840301815291905280516020909101206102e08201526102c08101516102a082015114610d84576000610d92565b806102e00151816102a00151145b158015610300830152610db5576020820151515160c00151610280820152610dcb565b61032081018051602d60f81b9052516102808201525b80610140015115610de9576020820151515151610340820152610dff565b61036081018051602d60f81b9052516103408201525b61038081018051606f60f81b905251604051610e1e9190602001612183565b60408051601f1981840301815291905280516020909101206103a082015261024081015115610e5d5760208201515151606001516103c0820152610e73565b6103e081018051602d60f81b9052516103c08201525b80610300015115610e94576020820151515160c00151610400820152610eaa565b61042081018051602d60f81b9052516104008201525b806101e001518160e0015114610ec1576000610ece565b806102a001518160e00151145b158015610460830152610eee576020820151515151610440820152610f04565b61048081018051602d60f81b9052516104408201525b80610200015181610100015114610f1c576000610f2a565b806102c00151816101000151145b1580156104c0830152610f4c57602082810151515101516104a0820152610f62565b6104e081018051602d60f81b9052516104a08201525b80610220015181610120015114610f7a576000610f88565b806102e00151816101200151145b158015610520830152610fab576020820151515160400151610500820152610fc1565b61054081018051602d60f81b9052516105008201525b80610460015115610fdf576020820151515151610560820152610ff5565b61058081018051602d60f81b9052516105608201525b806104c001511561101557602082810151515101516105a082015261102b565b6105c081018051602d60f81b9052516105a08201525b8061052001511561104c5760208201515151604001516105e0820152611062565b61060081018051602d60f81b9052516105e08201525b8061020001518160e001511461108357806102e001518160e0015114611086565b60015b1580156106408301526110a65760208201515151516106208201526110bc565b61066081018051602d60f81b9052516106208201525b806101a001518160c001516040516020016110d79190612183565b6040516020818303038152906040528051906020012060001c1461113057806101a00151816101c001516040516020016111119190612183565b6040516020818303038152906040528051906020012060001c14611133565b60015b61117257806101a001518161028001516040516020016111539190612183565b6040516020818303038152906040528051906020012060001c14611175565b60015b6111b457806103a001518161034001516040516020016111959190612183565b6040516020818303038152906040528051906020012060001c146111b7565b60015b6111f657806103a00151816103c001516040516020016111d79190612183565b6040516020818303038152906040528051906020012060001c146111f9565b60015b61123857806103a001518161040001516040516020016112199190612183565b6040516020818303038152906040528051906020012060001c1461123b565b60015b61127a57806101a0015181610440015160405160200161125b9190612183565b6040516020818303038152906040528051906020012060001c1461127d565b60015b6112bc57806101a00151816104a0015160405160200161129d9190612183565b6040516020818303038152906040528051906020012060001c146112bf565b60015b6112fe57806101a001518161050001516040516020016112df9190612183565b6040516020818303038152906040528051906020012060001c14611301565b60015b61134057806103a001518161056001516040516020016113219190612183565b6040516020818303038152906040528051906020012060001c14611343565b60015b61138257806103a00151816105a001516040516020016113639190612183565b6040516020818303038152906040528051906020012060001c14611385565b60015b6113c457806103a00151816105e001516040516020016113a59190612183565b6040516020818303038152906040528051906020012060001c146113c7565b60015b61140657806101a001518161062001516040516020016113e79190612183565b6040516020818303038152906040528051906020012060001c14611409565b60015b15156106808201526106408101511561142f5760208201515151516106a0820152611445565b6106c081018051602d60f81b9052516106a08201525b8061020001518161012001511461146857806102a001518161012001511461146b565b60015b15801561070083015261148e5760208201515151604001516106e08201526114a4565b61072081018051602d60f81b9052516106e08201525b806107000151156114c55760208201515151604001516107408201526114db565b61076081018051602d60f81b9052516107408201525b80516115b15780610680015161152657806103a00151816106a001516040516020016115079190612183565b6040516020818303038152906040528051906020012060001c14611529565b60015b61156857806101a00151816106e001516040516020016115499190612183565b6040516020818303038152906040528051906020012060001c1461156b565b60015b6115aa57806103a0015181610740015160405160200161158b9190612183565b6040516020818303038152906040528051906020012060001c146115b4565b60016115b4565b60015b1561161357815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156115fc573d6000803e3d6000fd5b506000808055600181905561092090600290611caf565b6020808301515101511561169b57611629611cec565b8251516001600160a01b0390811682528351602090810151909116818301528084018051516040808501919091529051810151606084015260046000554360015551611677918391016121e0565b604051602081830303815290604052600290805190602001906102d7929190611d18565b6116a3611cec565b8251516001600160a01b0390811682528351602090810151909116818301528084018051516040808501919091529051810151606084015260056000554360015551611677918391016121e0565b6116f9611d9c565b60005b6009811015611745578481600981106117175761171761203e565b602002015182826009811061172e5761172e61203e565b60200201528061173d816121c5565b9150506116fc565b50818184600981106117595761175961203e565b60200201529392505050565b6040805160808101909152600060608201908152815260208101611787611d9c565b8152602001611794611dd1565b905290565b604080516080810182526000918101828152606082019290925290815260208101611794611df1565b6040805160e081018252600060c082018181528252602080830182905282840182905283518082018552828152606084015283519081019093528252906080820190611787565b6040805160c081018252600060a082018181528252602080830182905282840182905283519081019093528252906060820190611787565b60408051610780810182526000808252602082015290810161186e60408051602081019091526000815290565b815260200161188860408051602081019091526000815290565b8152602001600081526020016118a960408051602081019091526000815290565b81526020016118c360408051602081019091526000815290565b81526020016000815260200160008152602001600081526020016000151581526020016118fb60408051602081019091526000815290565b815260200161191560408051602081019091526000815290565b81526020016000815260200161193660408051602081019091526000815290565b815260200160008152602001600081526020016000815260200160001515815260200161196e60408051602081019091526000815290565b815260200161198860408051602081019091526000815290565b81526020016000815260200160008152602001600081526020016000151581526020016119c060408051602081019091526000815290565b81526020016119da60408051602081019091526000815290565b81526020016119f460408051602081019091526000815290565b8152602001611a0e60408051602081019091526000815290565b815260200160008152602001611a2f60408051602081019091526000815290565b8152602001611a4960408051602081019091526000815290565b8152602001611a6360408051602081019091526000815290565b8152602001611a7d60408051602081019091526000815290565b8152602001611a9760408051602081019091526000815290565b815260006020820152604001611ab860408051602081019091526000815290565b8152602001611ad260408051602081019091526000815290565b815260006020820152604001611af360408051602081019091526000815290565b8152602001611b0d60408051602081019091526000815290565b815260006020820152604001611b2e60408051602081019091526000815290565b8152602001611b4860408051602081019091526000815290565b8152602001611b6260408051602081019091526000815290565b8152602001611b7c60408051602081019091526000815290565b8152602001611b9660408051602081019091526000815290565b8152602001611bb060408051602081019091526000815290565b8152602001611bca60408051602081019091526000815290565b8152602001611be460408051602081019091526000815290565b815260006020820152604001611c0560408051602081019091526000815290565b815260006020820152604001611c2660408051602081019091526000815290565b8152602001611c4060408051602081019091526000815290565b8152602001611c5a60408051602081019091526000815290565b815260006020820152604001611c7b60408051602081019091526000815290565b8152602001611c9560408051602081019091526000815290565b815260200161179460408051602081019091526000815290565b508054611cbb90611ec5565b6000825580601f10611ccb575050565b601f016020900490600052602060002090810190611ce99190611e18565b50565b6040805160808101825260008082526020820152908101611d0b611dd1565b8152602001600081525090565b828054611d2490611ec5565b90600052602060002090601f016020900481019282611d465760008555611d8c565b82601f10611d5f57805160ff1916838001178555611d8c565b82800160010185558215611d8c579182015b82811115611d8c578251825591602001919060010190611d71565b50611d98929150611e18565b5090565b6040518061012001604052806009905b604080516020810190915260008152815260200190600190039081611dac5790505090565b6040518060400160405280611de4611d9c565b8152600060209091015290565b6040518060600160405280611e04611dd1565b815260200160008152602001600081525090565b5b80821115611d985760008155600101611e19565b600060408284031215611e3f57600080fd5b50919050565b600060408284031215611e5757600080fd5b611e618383611e2d565b9392505050565b82815260006020604081840152835180604085015260005b81811015611e9c57858101830151858201606001528201611e80565b81811115611eae576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611ed957607f821691505b60208210811415611e3f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611f3357611f33611efa565b60405290565b6040516080810167ffffffffffffffff81118282101715611f3357611f33611efa565b604051610120810167ffffffffffffffff81118282101715611f3357611f33611efa565b6040516020810167ffffffffffffffff81118282101715611f3357611f33611efa565b80516001600160a01b0381168114611fba57600080fd5b919050565b600060408284031215611fd157600080fd5b611fd9611f10565b611fe283611fa3565b8152602083015160208201528091505092915050565b8015158114611ce957600080fd5b6001600160a01b03831681528135602080830191909152606082019083013561202e81611ff8565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b8051611fba81611ff8565b60008183036101a081121561207357600080fd5b61207b611f39565b61208484611fa3565b81526020612093818601611fa3565b82820152610140603f19840112156120aa57600080fd5b6120b2611f10565b925085605f8601126120c357600080fd5b6120cb611f5c565b806101608701888111156120de57600080fd5b604088015b8181101561212b5784818b0312156120fb5760008081fd5b612103611f80565b81516001600160f81b03198116811461211c5760008081fd5b815284529284019284016120e3565b5081865261213881612054565b84870152505050508160408201526101808401516060820152809250505092915050565b6001600160a01b038316815260608101611e61602083018480358252602090810135910152565b90516001600160f81b031916815260200190565b634e487b7160e01b600052601160045260246000fd5b600082198211156121c0576121c0612197565b500190565b60006000198214156121d9576121d9612197565b5060010190565b81516001600160a01b0390811682526020808401519091168183015260408084015180516101a0850193919260009086015b600982101561223c578251516001600160f81b031916815291830191600191909101908301612212565b5050500151151561016083015260609290920151610180909101529056fea26469706673582212203e899a4149031d7d8f75e7cfd2434fc345a44dc55601d4e9436a5211f71cb48f64736f6c634300080c0033`,
  BytecodeLen: 9534,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:150:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:188:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:161:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:171:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
