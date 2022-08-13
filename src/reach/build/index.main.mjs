// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

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
  
  
  const v1020 = stdlib.protect(ctc0, await interact.getBudget(), {
    at: './index.rsh:146:49:application',
    fs: ['at ./index.rsh:145:9:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
    msg: 'getBudget',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1020],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:148:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v1020, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1022], secs: v1024, time: v1023, didSend: v64, from: v1021 } = txn1;
      
      sim_r.txns.push({
        amt: v1022,
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
  const {data: [v1022], secs: v1024, time: v1023, didSend: v64, from: v1021 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1030, time: v1029, didSend: v74, from: v1028 } = txn2;
  const v1032 = stdlib.add(v1022, v1022);
  ;
  const v1033 = ' ';
  const v1042 = [v1033, v1033, v1033, v1033, v1033, v1033, v1033, v1033, v1033];
  const v1043 = {
    board: v1042,
    playerTurn: true
    };
  let v1055 = v1043;
  let v1056 = v1029;
  let v1063 = v1032;
  
  while (await (async () => {
    const v1067 = v1055.board;
    const v1068 = await stdlib.Array_asyncReduce([v1067], true, async([v1070], v1069, v1071) => {
      const v1072 = 'x';
      const v1073 = stdlib.digest(ctc2, [v1070]);
      const v1075 = stdlib.digest(ctc2, [v1072]);
      const v1076 = stdlib.digestEq(v1073, v1075);
      const v1077 = 'o';
      const v1080 = stdlib.digest(ctc2, [v1077]);
      const v1081 = stdlib.digestEq(v1073, v1080);
      const v1082 = v1076 ? true : v1081;
      const v1083 = v1069 ? v1082 : false;
      
      return v1083;})
    let v1085;
    const v1086 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
    const v1087 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
    const v1088 = stdlib.digest(ctc2, [v1086]);
    const v1089 = stdlib.digest(ctc2, [v1087]);
    const v1090 = stdlib.digestEq(v1088, v1089);
    const v1092 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
    const v1094 = stdlib.digest(ctc2, [v1092]);
    const v1095 = stdlib.digestEq(v1088, v1094);
    const v1096 = v1090 ? v1095 : false;
    if (v1096) {
      v1085 = v1086;
      }
    else {
      const v1098 = '-';
      v1085 = v1098;
      }
    const v1099 = 'x';
    const v1100 = stdlib.digest(ctc2, [v1085]);
    const v1102 = stdlib.digest(ctc2, [v1099]);
    const v1103 = stdlib.digestEq(v1100, v1102);
    let v1104;
    const v1105 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
    const v1106 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
    const v1107 = stdlib.digest(ctc2, [v1105]);
    const v1108 = stdlib.digest(ctc2, [v1106]);
    const v1109 = stdlib.digestEq(v1107, v1108);
    const v1111 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
    const v1113 = stdlib.digest(ctc2, [v1111]);
    const v1114 = stdlib.digestEq(v1107, v1113);
    const v1115 = v1109 ? v1114 : false;
    if (v1115) {
      v1104 = v1105;
      }
    else {
      const v1117 = '-';
      v1104 = v1117;
      }
    const v1119 = stdlib.digest(ctc2, [v1104]);
    const v1122 = stdlib.digestEq(v1119, v1102);
    const v1123 = v1103 ? true : v1122;
    let v1124;
    const v1125 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
    const v1126 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
    const v1127 = stdlib.digest(ctc2, [v1125]);
    const v1128 = stdlib.digest(ctc2, [v1126]);
    const v1129 = stdlib.digestEq(v1127, v1128);
    const v1131 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
    const v1133 = stdlib.digest(ctc2, [v1131]);
    const v1134 = stdlib.digestEq(v1127, v1133);
    const v1135 = v1129 ? v1134 : false;
    if (v1135) {
      v1124 = v1125;
      }
    else {
      const v1137 = '-';
      v1124 = v1137;
      }
    const v1139 = stdlib.digest(ctc2, [v1124]);
    const v1142 = stdlib.digestEq(v1139, v1102);
    const v1143 = v1123 ? true : v1142;
    let v1144;
    if (v1096) {
      v1144 = v1086;
      }
    else {
      const v1157 = '-';
      v1144 = v1157;
      }
    const v1158 = 'o';
    const v1159 = stdlib.digest(ctc2, [v1144]);
    const v1161 = stdlib.digest(ctc2, [v1158]);
    const v1162 = stdlib.digestEq(v1159, v1161);
    const v1163 = v1143 ? true : v1162;
    let v1164;
    if (v1115) {
      v1164 = v1105;
      }
    else {
      const v1177 = '-';
      v1164 = v1177;
      }
    const v1179 = stdlib.digest(ctc2, [v1164]);
    const v1182 = stdlib.digestEq(v1179, v1161);
    const v1183 = v1163 ? true : v1182;
    let v1184;
    if (v1135) {
      v1184 = v1125;
      }
    else {
      const v1197 = '-';
      v1184 = v1197;
      }
    const v1199 = stdlib.digest(ctc2, [v1184]);
    const v1202 = stdlib.digestEq(v1199, v1161);
    const v1203 = v1183 ? true : v1202;
    let v1204;
    const v1209 = stdlib.digestEq(v1088, v1107);
    const v1214 = stdlib.digestEq(v1088, v1127);
    const v1215 = v1209 ? v1214 : false;
    if (v1215) {
      v1204 = v1086;
      }
    else {
      const v1217 = '-';
      v1204 = v1217;
      }
    const v1219 = stdlib.digest(ctc2, [v1204]);
    const v1222 = stdlib.digestEq(v1219, v1102);
    const v1223 = v1203 ? true : v1222;
    let v1224;
    const v1229 = stdlib.digestEq(v1089, v1108);
    const v1234 = stdlib.digestEq(v1089, v1128);
    const v1235 = v1229 ? v1234 : false;
    if (v1235) {
      v1224 = v1087;
      }
    else {
      const v1237 = '-';
      v1224 = v1237;
      }
    const v1239 = stdlib.digest(ctc2, [v1224]);
    const v1242 = stdlib.digestEq(v1239, v1102);
    const v1243 = v1223 ? true : v1242;
    let v1244;
    const v1249 = stdlib.digestEq(v1094, v1113);
    const v1254 = stdlib.digestEq(v1094, v1133);
    const v1255 = v1249 ? v1254 : false;
    if (v1255) {
      v1244 = v1092;
      }
    else {
      const v1257 = '-';
      v1244 = v1257;
      }
    const v1259 = stdlib.digest(ctc2, [v1244]);
    const v1262 = stdlib.digestEq(v1259, v1102);
    const v1263 = v1243 ? true : v1262;
    let v1264;
    if (v1215) {
      v1264 = v1086;
      }
    else {
      const v1277 = '-';
      v1264 = v1277;
      }
    const v1279 = stdlib.digest(ctc2, [v1264]);
    const v1282 = stdlib.digestEq(v1279, v1161);
    const v1283 = v1263 ? true : v1282;
    let v1284;
    if (v1235) {
      v1284 = v1087;
      }
    else {
      const v1297 = '-';
      v1284 = v1297;
      }
    const v1299 = stdlib.digest(ctc2, [v1284]);
    const v1302 = stdlib.digestEq(v1299, v1161);
    const v1303 = v1283 ? true : v1302;
    let v1304;
    if (v1255) {
      v1304 = v1092;
      }
    else {
      const v1317 = '-';
      v1304 = v1317;
      }
    const v1319 = stdlib.digest(ctc2, [v1304]);
    const v1322 = stdlib.digestEq(v1319, v1161);
    const v1323 = v1303 ? true : v1322;
    let v1324;
    const v1329 = stdlib.digestEq(v1088, v1108);
    const v1334 = stdlib.digestEq(v1088, v1133);
    const v1335 = v1329 ? true : v1334;
    if (v1335) {
      v1324 = v1086;
      }
    else {
      const v1337 = '-';
      v1324 = v1337;
      }
    const v1339 = stdlib.digest(ctc2, [v1324]);
    const v1342 = stdlib.digestEq(v1339, v1102);
    const v1343 = v1323 ? true : v1342;
    let v1344;
    if (v1335) {
      v1344 = v1086;
      }
    else {
      const v1357 = '-';
      v1344 = v1357;
      }
    const v1359 = stdlib.digest(ctc2, [v1344]);
    const v1362 = stdlib.digestEq(v1359, v1161);
    const v1363 = v1343 ? true : v1362;
    let v1364;
    const v1369 = stdlib.digestEq(v1094, v1108);
    const v1374 = stdlib.digestEq(v1094, v1127);
    const v1375 = v1369 ? true : v1374;
    if (v1375) {
      v1364 = v1092;
      }
    else {
      const v1377 = '-';
      v1364 = v1377;
      }
    const v1379 = stdlib.digest(ctc2, [v1364]);
    const v1382 = stdlib.digestEq(v1379, v1102);
    const v1383 = v1363 ? true : v1382;
    let v1384;
    if (v1375) {
      v1384 = v1092;
      }
    else {
      const v1397 = '-';
      v1384 = v1397;
      }
    const v1399 = stdlib.digest(ctc2, [v1384]);
    const v1402 = stdlib.digestEq(v1399, v1161);
    const v1403 = v1383 ? true : v1402;
    const v1404 = v1068 ? true : v1403;
    const v1405 = v1404 ? false : true;
    
    return v1405;})()) {
    const v1406 = v1055.playerTurn;
    if (v1406) {
      const v1410 = v1055.board;
      const v1421 = stdlib.protect(ctc0, await interact.getSquareSelected(v1055), {
        at: './index.rsh:102:43:application',
        fs: ['at ./index.rsh:164:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Alice'
        });
      const v1422 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1421);
      const v1423 = stdlib.lt(v1421, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1424 = v1422 ? v1423 : false;
      stdlib.assert(v1424, {
        at: './index.rsh:103:9:application',
        fs: ['at ./index.rsh:164:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1427 = v1410[v1421];
      const v1428 = 'x';
      const v1429 = stdlib.digest(ctc2, [v1427]);
      const v1431 = stdlib.digest(ctc2, [v1428]);
      const v1432 = stdlib.digestEq(v1429, v1431);
      let v1433;
      if (v1432) {
        v1433 = true;
        }
      else {
        const v1437 = 'o';
        const v1440 = stdlib.digest(ctc2, [v1437]);
        const v1441 = stdlib.digestEq(v1429, v1440);
        v1433 = v1441;
        }
      const v1442 = v1433 ? false : true;
      stdlib.assert(v1442, {
        at: './index.rsh:104:9:application',
        fs: ['at ./index.rsh:164:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:163:13:application call to [unknown function] (defined at: ./index.rsh:163:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v1021, v1028, v1055, v1063, v1421],
        evt_cnt: 1,
        funcNum: 3,
        lct: v1056,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:166:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1444], secs: v1446, time: v1445, didSend: v497, from: v1443 } = txn3;
          
          ;
          const v1451 = v1055.board;
          const v1454 = 'x';
          const v1475 = stdlib.Array_set(v1451, v1444, v1454);
          const v1480 = {
            board: v1475,
            playerTurn: false
            };
          const cv1055 = v1480;
          const cv1056 = v1445;
          const cv1063 = v1063;
          
          await (async () => {
            const v1055 = cv1055;
            const v1056 = cv1056;
            const v1063 = cv1063;
            
            if (await (async () => {
              const v1067 = v1055.board;
              const v1068 = await stdlib.Array_asyncReduce([v1067], true, async([v1070], v1069, v1071) => {
                const v1072 = 'x';
                const v1073 = stdlib.digest(ctc2, [v1070]);
                const v1075 = stdlib.digest(ctc2, [v1072]);
                const v1076 = stdlib.digestEq(v1073, v1075);
                const v1077 = 'o';
                const v1080 = stdlib.digest(ctc2, [v1077]);
                const v1081 = stdlib.digestEq(v1073, v1080);
                const v1082 = v1076 ? true : v1081;
                const v1083 = v1069 ? v1082 : false;
                
                return v1083;})
              let v1085;
              const v1086 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1087 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1088 = stdlib.digest(ctc2, [v1086]);
              const v1089 = stdlib.digest(ctc2, [v1087]);
              const v1090 = stdlib.digestEq(v1088, v1089);
              const v1092 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1094 = stdlib.digest(ctc2, [v1092]);
              const v1095 = stdlib.digestEq(v1088, v1094);
              const v1096 = v1090 ? v1095 : false;
              if (v1096) {
                v1085 = v1086;
                }
              else {
                const v1098 = '-';
                v1085 = v1098;
                }
              const v1099 = 'x';
              const v1100 = stdlib.digest(ctc2, [v1085]);
              const v1102 = stdlib.digest(ctc2, [v1099]);
              const v1103 = stdlib.digestEq(v1100, v1102);
              let v1104;
              const v1105 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1106 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1107 = stdlib.digest(ctc2, [v1105]);
              const v1108 = stdlib.digest(ctc2, [v1106]);
              const v1109 = stdlib.digestEq(v1107, v1108);
              const v1111 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1113 = stdlib.digest(ctc2, [v1111]);
              const v1114 = stdlib.digestEq(v1107, v1113);
              const v1115 = v1109 ? v1114 : false;
              if (v1115) {
                v1104 = v1105;
                }
              else {
                const v1117 = '-';
                v1104 = v1117;
                }
              const v1119 = stdlib.digest(ctc2, [v1104]);
              const v1122 = stdlib.digestEq(v1119, v1102);
              const v1123 = v1103 ? true : v1122;
              let v1124;
              const v1125 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1126 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1127 = stdlib.digest(ctc2, [v1125]);
              const v1128 = stdlib.digest(ctc2, [v1126]);
              const v1129 = stdlib.digestEq(v1127, v1128);
              const v1131 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1133 = stdlib.digest(ctc2, [v1131]);
              const v1134 = stdlib.digestEq(v1127, v1133);
              const v1135 = v1129 ? v1134 : false;
              if (v1135) {
                v1124 = v1125;
                }
              else {
                const v1137 = '-';
                v1124 = v1137;
                }
              const v1139 = stdlib.digest(ctc2, [v1124]);
              const v1142 = stdlib.digestEq(v1139, v1102);
              const v1143 = v1123 ? true : v1142;
              let v1144;
              if (v1096) {
                v1144 = v1086;
                }
              else {
                const v1157 = '-';
                v1144 = v1157;
                }
              const v1158 = 'o';
              const v1159 = stdlib.digest(ctc2, [v1144]);
              const v1161 = stdlib.digest(ctc2, [v1158]);
              const v1162 = stdlib.digestEq(v1159, v1161);
              const v1163 = v1143 ? true : v1162;
              let v1164;
              if (v1115) {
                v1164 = v1105;
                }
              else {
                const v1177 = '-';
                v1164 = v1177;
                }
              const v1179 = stdlib.digest(ctc2, [v1164]);
              const v1182 = stdlib.digestEq(v1179, v1161);
              const v1183 = v1163 ? true : v1182;
              let v1184;
              if (v1135) {
                v1184 = v1125;
                }
              else {
                const v1197 = '-';
                v1184 = v1197;
                }
              const v1199 = stdlib.digest(ctc2, [v1184]);
              const v1202 = stdlib.digestEq(v1199, v1161);
              const v1203 = v1183 ? true : v1202;
              let v1204;
              const v1209 = stdlib.digestEq(v1088, v1107);
              const v1214 = stdlib.digestEq(v1088, v1127);
              const v1215 = v1209 ? v1214 : false;
              if (v1215) {
                v1204 = v1086;
                }
              else {
                const v1217 = '-';
                v1204 = v1217;
                }
              const v1219 = stdlib.digest(ctc2, [v1204]);
              const v1222 = stdlib.digestEq(v1219, v1102);
              const v1223 = v1203 ? true : v1222;
              let v1224;
              const v1229 = stdlib.digestEq(v1089, v1108);
              const v1234 = stdlib.digestEq(v1089, v1128);
              const v1235 = v1229 ? v1234 : false;
              if (v1235) {
                v1224 = v1087;
                }
              else {
                const v1237 = '-';
                v1224 = v1237;
                }
              const v1239 = stdlib.digest(ctc2, [v1224]);
              const v1242 = stdlib.digestEq(v1239, v1102);
              const v1243 = v1223 ? true : v1242;
              let v1244;
              const v1249 = stdlib.digestEq(v1094, v1113);
              const v1254 = stdlib.digestEq(v1094, v1133);
              const v1255 = v1249 ? v1254 : false;
              if (v1255) {
                v1244 = v1092;
                }
              else {
                const v1257 = '-';
                v1244 = v1257;
                }
              const v1259 = stdlib.digest(ctc2, [v1244]);
              const v1262 = stdlib.digestEq(v1259, v1102);
              const v1263 = v1243 ? true : v1262;
              let v1264;
              if (v1215) {
                v1264 = v1086;
                }
              else {
                const v1277 = '-';
                v1264 = v1277;
                }
              const v1279 = stdlib.digest(ctc2, [v1264]);
              const v1282 = stdlib.digestEq(v1279, v1161);
              const v1283 = v1263 ? true : v1282;
              let v1284;
              if (v1235) {
                v1284 = v1087;
                }
              else {
                const v1297 = '-';
                v1284 = v1297;
                }
              const v1299 = stdlib.digest(ctc2, [v1284]);
              const v1302 = stdlib.digestEq(v1299, v1161);
              const v1303 = v1283 ? true : v1302;
              let v1304;
              if (v1255) {
                v1304 = v1092;
                }
              else {
                const v1317 = '-';
                v1304 = v1317;
                }
              const v1319 = stdlib.digest(ctc2, [v1304]);
              const v1322 = stdlib.digestEq(v1319, v1161);
              const v1323 = v1303 ? true : v1322;
              let v1324;
              const v1329 = stdlib.digestEq(v1088, v1108);
              const v1334 = stdlib.digestEq(v1088, v1133);
              const v1335 = v1329 ? true : v1334;
              if (v1335) {
                v1324 = v1086;
                }
              else {
                const v1337 = '-';
                v1324 = v1337;
                }
              const v1339 = stdlib.digest(ctc2, [v1324]);
              const v1342 = stdlib.digestEq(v1339, v1102);
              const v1343 = v1323 ? true : v1342;
              let v1344;
              if (v1335) {
                v1344 = v1086;
                }
              else {
                const v1357 = '-';
                v1344 = v1357;
                }
              const v1359 = stdlib.digest(ctc2, [v1344]);
              const v1362 = stdlib.digestEq(v1359, v1161);
              const v1363 = v1343 ? true : v1362;
              let v1364;
              const v1369 = stdlib.digestEq(v1094, v1108);
              const v1374 = stdlib.digestEq(v1094, v1127);
              const v1375 = v1369 ? true : v1374;
              if (v1375) {
                v1364 = v1092;
                }
              else {
                const v1377 = '-';
                v1364 = v1377;
                }
              const v1379 = stdlib.digest(ctc2, [v1364]);
              const v1382 = stdlib.digestEq(v1379, v1102);
              const v1383 = v1363 ? true : v1382;
              let v1384;
              if (v1375) {
                v1384 = v1092;
                }
              else {
                const v1397 = '-';
                v1384 = v1397;
                }
              const v1399 = stdlib.digest(ctc2, [v1384]);
              const v1402 = stdlib.digestEq(v1399, v1161);
              const v1403 = v1383 ? true : v1402;
              const v1404 = v1068 ? true : v1403;
              const v1405 = v1404 ? false : true;
              
              return v1405;})()) {
              const v1406 = v1055.playerTurn;
              if (v1406) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            else {
              const v1556 = v1055.board;
              let v1557;
              const v1558 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1559 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1560 = stdlib.digest(ctc2, [v1558]);
              const v1561 = stdlib.digest(ctc2, [v1559]);
              const v1562 = stdlib.digestEq(v1560, v1561);
              const v1564 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1566 = stdlib.digest(ctc2, [v1564]);
              const v1567 = stdlib.digestEq(v1560, v1566);
              const v1568 = v1562 ? v1567 : false;
              if (v1568) {
                v1557 = v1558;
                }
              else {
                const v1570 = '-';
                v1557 = v1570;
                }
              const v1571 = 'x';
              const v1572 = stdlib.digest(ctc2, [v1557]);
              const v1574 = stdlib.digest(ctc2, [v1571]);
              const v1575 = stdlib.digestEq(v1572, v1574);
              let v1576;
              const v1577 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1578 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1579 = stdlib.digest(ctc2, [v1577]);
              const v1580 = stdlib.digest(ctc2, [v1578]);
              const v1581 = stdlib.digestEq(v1579, v1580);
              const v1583 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1585 = stdlib.digest(ctc2, [v1583]);
              const v1586 = stdlib.digestEq(v1579, v1585);
              const v1587 = v1581 ? v1586 : false;
              if (v1587) {
                v1576 = v1577;
                }
              else {
                const v1589 = '-';
                v1576 = v1589;
                }
              const v1591 = stdlib.digest(ctc2, [v1576]);
              const v1594 = stdlib.digestEq(v1591, v1574);
              const v1595 = v1575 ? true : v1594;
              let v1596;
              const v1597 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1598 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1599 = stdlib.digest(ctc2, [v1597]);
              const v1600 = stdlib.digest(ctc2, [v1598]);
              const v1601 = stdlib.digestEq(v1599, v1600);
              const v1603 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1605 = stdlib.digest(ctc2, [v1603]);
              const v1606 = stdlib.digestEq(v1599, v1605);
              const v1607 = v1601 ? v1606 : false;
              if (v1607) {
                v1596 = v1597;
                }
              else {
                const v1609 = '-';
                v1596 = v1609;
                }
              const v1611 = stdlib.digest(ctc2, [v1596]);
              const v1614 = stdlib.digestEq(v1611, v1574);
              const v1615 = v1595 ? true : v1614;
              let v1616;
              const v1621 = stdlib.digestEq(v1560, v1579);
              const v1626 = stdlib.digestEq(v1560, v1599);
              const v1627 = v1621 ? v1626 : false;
              if (v1627) {
                v1616 = v1558;
                }
              else {
                const v1629 = '-';
                v1616 = v1629;
                }
              const v1631 = stdlib.digest(ctc2, [v1616]);
              const v1634 = stdlib.digestEq(v1631, v1574);
              const v1635 = v1615 ? true : v1634;
              let v1636;
              const v1641 = stdlib.digestEq(v1561, v1580);
              const v1646 = stdlib.digestEq(v1561, v1600);
              const v1647 = v1641 ? v1646 : false;
              if (v1647) {
                v1636 = v1559;
                }
              else {
                const v1649 = '-';
                v1636 = v1649;
                }
              const v1651 = stdlib.digest(ctc2, [v1636]);
              const v1654 = stdlib.digestEq(v1651, v1574);
              const v1655 = v1635 ? true : v1654;
              let v1656;
              const v1661 = stdlib.digestEq(v1566, v1585);
              const v1666 = stdlib.digestEq(v1566, v1605);
              const v1667 = v1661 ? v1666 : false;
              if (v1667) {
                v1656 = v1564;
                }
              else {
                const v1669 = '-';
                v1656 = v1669;
                }
              const v1671 = stdlib.digest(ctc2, [v1656]);
              const v1674 = stdlib.digestEq(v1671, v1574);
              const v1675 = v1655 ? true : v1674;
              let v1676;
              const v1681 = stdlib.digestEq(v1560, v1580);
              const v1686 = stdlib.digestEq(v1560, v1605);
              const v1687 = v1681 ? true : v1686;
              if (v1687) {
                v1676 = v1558;
                }
              else {
                const v1689 = '-';
                v1676 = v1689;
                }
              const v1691 = stdlib.digest(ctc2, [v1676]);
              const v1694 = stdlib.digestEq(v1691, v1574);
              const v1695 = v1675 ? true : v1694;
              let v1696;
              const v1701 = stdlib.digestEq(v1566, v1580);
              const v1706 = stdlib.digestEq(v1566, v1599);
              const v1707 = v1701 ? true : v1706;
              if (v1707) {
                v1696 = v1564;
                }
              else {
                const v1709 = '-';
                v1696 = v1709;
                }
              const v1711 = stdlib.digest(ctc2, [v1696]);
              const v1714 = stdlib.digestEq(v1711, v1574);
              const v1715 = v1695 ? true : v1714;
              let v1716;
              if (v1568) {
                v1716 = v1558;
                }
              else {
                const v1729 = '-';
                v1716 = v1729;
                }
              const v1730 = 'o';
              const v1731 = stdlib.digest(ctc2, [v1716]);
              const v1733 = stdlib.digest(ctc2, [v1730]);
              const v1734 = stdlib.digestEq(v1731, v1733);
              let v1735;
              if (v1587) {
                v1735 = v1577;
                }
              else {
                const v1748 = '-';
                v1735 = v1748;
                }
              const v1750 = stdlib.digest(ctc2, [v1735]);
              const v1753 = stdlib.digestEq(v1750, v1733);
              const v1754 = v1734 ? true : v1753;
              let v1755;
              if (v1607) {
                v1755 = v1597;
                }
              else {
                const v1768 = '-';
                v1755 = v1768;
                }
              const v1770 = stdlib.digest(ctc2, [v1755]);
              const v1773 = stdlib.digestEq(v1770, v1733);
              const v1774 = v1754 ? true : v1773;
              let v1775;
              if (v1627) {
                v1775 = v1558;
                }
              else {
                const v1788 = '-';
                v1775 = v1788;
                }
              const v1790 = stdlib.digest(ctc2, [v1775]);
              const v1793 = stdlib.digestEq(v1790, v1733);
              const v1794 = v1774 ? true : v1793;
              let v1795;
              if (v1647) {
                v1795 = v1559;
                }
              else {
                const v1808 = '-';
                v1795 = v1808;
                }
              const v1810 = stdlib.digest(ctc2, [v1795]);
              const v1813 = stdlib.digestEq(v1810, v1733);
              const v1814 = v1794 ? true : v1813;
              let v1815;
              if (v1667) {
                v1815 = v1564;
                }
              else {
                const v1828 = '-';
                v1815 = v1828;
                }
              const v1830 = stdlib.digest(ctc2, [v1815]);
              const v1833 = stdlib.digestEq(v1830, v1733);
              const v1834 = v1814 ? true : v1833;
              let v1835;
              if (v1687) {
                v1835 = v1558;
                }
              else {
                const v1848 = '-';
                v1835 = v1848;
                }
              const v1850 = stdlib.digest(ctc2, [v1835]);
              const v1853 = stdlib.digestEq(v1850, v1733);
              const v1854 = v1834 ? true : v1853;
              let v1855;
              if (v1707) {
                v1855 = v1564;
                }
              else {
                const v1868 = '-';
                v1855 = v1868;
                }
              const v1870 = stdlib.digest(ctc2, [v1855]);
              const v1873 = stdlib.digestEq(v1870, v1733);
              const v1874 = v1854 ? true : v1873;
              const v1875 = v1874 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
              const v1876 = v1715 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1875;
              sim_r.txns.push({
                kind: 'from',
                to: v1021,
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
      const {data: [v1444], secs: v1446, time: v1445, didSend: v497, from: v1443 } = txn3;
      ;
      const v1447 = stdlib.addressEq(v1021, v1443);
      stdlib.assert(v1447, {
        at: './index.rsh:166:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1448 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1444);
      const v1449 = stdlib.lt(v1444, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1450 = v1448 ? v1449 : false;
      stdlib.assert(v1450, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:168:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1451 = v1055.board;
      const v1453 = v1451[v1444];
      const v1454 = 'x';
      const v1455 = stdlib.digest(ctc2, [v1453]);
      const v1457 = stdlib.digest(ctc2, [v1454]);
      const v1458 = stdlib.digestEq(v1455, v1457);
      let v1459;
      if (v1458) {
        v1459 = true;
        }
      else {
        const v1463 = 'o';
        const v1466 = stdlib.digest(ctc2, [v1463]);
        const v1467 = stdlib.digestEq(v1455, v1466);
        v1459 = v1467;
        }
      const v1468 = v1459 ? false : true;
      stdlib.assert(v1468, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:168:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const v1475 = stdlib.Array_set(v1451, v1444, v1454);
      const v1480 = {
        board: v1475,
        playerTurn: false
        };
      const cv1055 = v1480;
      const cv1056 = v1445;
      const cv1063 = v1063;
      
      v1055 = cv1055;
      v1056 = cv1056;
      v1063 = cv1063;
      
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
      const {data: [v1518], secs: v1520, time: v1519, didSend: v582, from: v1517 } = txn3;
      ;
      const v1521 = stdlib.addressEq(v1028, v1517);
      stdlib.assert(v1521, {
        at: './index.rsh:177:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1522 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1518);
      const v1523 = stdlib.lt(v1518, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1524 = v1522 ? v1523 : false;
      stdlib.assert(v1524, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:178:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1525 = v1055.board;
      const v1527 = v1525[v1518];
      const v1528 = 'x';
      const v1529 = stdlib.digest(ctc2, [v1527]);
      const v1531 = stdlib.digest(ctc2, [v1528]);
      const v1532 = stdlib.digestEq(v1529, v1531);
      let v1533;
      if (v1532) {
        v1533 = true;
        }
      else {
        const v1537 = 'o';
        const v1540 = stdlib.digest(ctc2, [v1537]);
        const v1541 = stdlib.digestEq(v1529, v1540);
        v1533 = v1541;
        }
      const v1542 = v1533 ? false : true;
      stdlib.assert(v1542, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:178:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const v1551 = 'o';
      const v1553 = stdlib.Array_set(v1525, v1518, v1551);
      const v1554 = {
        board: v1553,
        playerTurn: true
        };
      const cv1055 = v1554;
      const cv1056 = v1519;
      const cv1063 = v1063;
      
      v1055 = cv1055;
      v1056 = cv1056;
      v1063 = cv1063;
      
      continue;
      
      }}
  const v1556 = v1055.board;
  let v1557;
  const v1558 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
  const v1559 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
  const v1560 = stdlib.digest(ctc2, [v1558]);
  const v1561 = stdlib.digest(ctc2, [v1559]);
  const v1562 = stdlib.digestEq(v1560, v1561);
  const v1564 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
  const v1566 = stdlib.digest(ctc2, [v1564]);
  const v1567 = stdlib.digestEq(v1560, v1566);
  const v1568 = v1562 ? v1567 : false;
  if (v1568) {
    v1557 = v1558;
    }
  else {
    const v1570 = '-';
    v1557 = v1570;
    }
  const v1571 = 'x';
  const v1572 = stdlib.digest(ctc2, [v1557]);
  const v1574 = stdlib.digest(ctc2, [v1571]);
  const v1575 = stdlib.digestEq(v1572, v1574);
  let v1576;
  const v1577 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
  const v1578 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
  const v1579 = stdlib.digest(ctc2, [v1577]);
  const v1580 = stdlib.digest(ctc2, [v1578]);
  const v1581 = stdlib.digestEq(v1579, v1580);
  const v1583 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
  const v1585 = stdlib.digest(ctc2, [v1583]);
  const v1586 = stdlib.digestEq(v1579, v1585);
  const v1587 = v1581 ? v1586 : false;
  if (v1587) {
    v1576 = v1577;
    }
  else {
    const v1589 = '-';
    v1576 = v1589;
    }
  const v1591 = stdlib.digest(ctc2, [v1576]);
  const v1594 = stdlib.digestEq(v1591, v1574);
  const v1595 = v1575 ? true : v1594;
  let v1596;
  const v1597 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
  const v1598 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
  const v1599 = stdlib.digest(ctc2, [v1597]);
  const v1600 = stdlib.digest(ctc2, [v1598]);
  const v1601 = stdlib.digestEq(v1599, v1600);
  const v1603 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
  const v1605 = stdlib.digest(ctc2, [v1603]);
  const v1606 = stdlib.digestEq(v1599, v1605);
  const v1607 = v1601 ? v1606 : false;
  if (v1607) {
    v1596 = v1597;
    }
  else {
    const v1609 = '-';
    v1596 = v1609;
    }
  const v1611 = stdlib.digest(ctc2, [v1596]);
  const v1614 = stdlib.digestEq(v1611, v1574);
  const v1615 = v1595 ? true : v1614;
  let v1616;
  const v1621 = stdlib.digestEq(v1560, v1579);
  const v1626 = stdlib.digestEq(v1560, v1599);
  const v1627 = v1621 ? v1626 : false;
  if (v1627) {
    v1616 = v1558;
    }
  else {
    const v1629 = '-';
    v1616 = v1629;
    }
  const v1631 = stdlib.digest(ctc2, [v1616]);
  const v1634 = stdlib.digestEq(v1631, v1574);
  const v1635 = v1615 ? true : v1634;
  let v1636;
  const v1641 = stdlib.digestEq(v1561, v1580);
  const v1646 = stdlib.digestEq(v1561, v1600);
  const v1647 = v1641 ? v1646 : false;
  if (v1647) {
    v1636 = v1559;
    }
  else {
    const v1649 = '-';
    v1636 = v1649;
    }
  const v1651 = stdlib.digest(ctc2, [v1636]);
  const v1654 = stdlib.digestEq(v1651, v1574);
  const v1655 = v1635 ? true : v1654;
  let v1656;
  const v1661 = stdlib.digestEq(v1566, v1585);
  const v1666 = stdlib.digestEq(v1566, v1605);
  const v1667 = v1661 ? v1666 : false;
  if (v1667) {
    v1656 = v1564;
    }
  else {
    const v1669 = '-';
    v1656 = v1669;
    }
  const v1671 = stdlib.digest(ctc2, [v1656]);
  const v1674 = stdlib.digestEq(v1671, v1574);
  const v1675 = v1655 ? true : v1674;
  let v1676;
  const v1681 = stdlib.digestEq(v1560, v1580);
  const v1686 = stdlib.digestEq(v1560, v1605);
  const v1687 = v1681 ? true : v1686;
  if (v1687) {
    v1676 = v1558;
    }
  else {
    const v1689 = '-';
    v1676 = v1689;
    }
  const v1691 = stdlib.digest(ctc2, [v1676]);
  const v1694 = stdlib.digestEq(v1691, v1574);
  const v1695 = v1675 ? true : v1694;
  let v1696;
  const v1701 = stdlib.digestEq(v1566, v1580);
  const v1706 = stdlib.digestEq(v1566, v1599);
  const v1707 = v1701 ? true : v1706;
  if (v1707) {
    v1696 = v1564;
    }
  else {
    const v1709 = '-';
    v1696 = v1709;
    }
  const v1711 = stdlib.digest(ctc2, [v1696]);
  const v1714 = stdlib.digestEq(v1711, v1574);
  const v1715 = v1695 ? true : v1714;
  let v1716;
  if (v1568) {
    v1716 = v1558;
    }
  else {
    const v1729 = '-';
    v1716 = v1729;
    }
  const v1730 = 'o';
  const v1731 = stdlib.digest(ctc2, [v1716]);
  const v1733 = stdlib.digest(ctc2, [v1730]);
  const v1734 = stdlib.digestEq(v1731, v1733);
  let v1735;
  if (v1587) {
    v1735 = v1577;
    }
  else {
    const v1748 = '-';
    v1735 = v1748;
    }
  const v1750 = stdlib.digest(ctc2, [v1735]);
  const v1753 = stdlib.digestEq(v1750, v1733);
  const v1754 = v1734 ? true : v1753;
  let v1755;
  if (v1607) {
    v1755 = v1597;
    }
  else {
    const v1768 = '-';
    v1755 = v1768;
    }
  const v1770 = stdlib.digest(ctc2, [v1755]);
  const v1773 = stdlib.digestEq(v1770, v1733);
  const v1774 = v1754 ? true : v1773;
  let v1775;
  if (v1627) {
    v1775 = v1558;
    }
  else {
    const v1788 = '-';
    v1775 = v1788;
    }
  const v1790 = stdlib.digest(ctc2, [v1775]);
  const v1793 = stdlib.digestEq(v1790, v1733);
  const v1794 = v1774 ? true : v1793;
  let v1795;
  if (v1647) {
    v1795 = v1559;
    }
  else {
    const v1808 = '-';
    v1795 = v1808;
    }
  const v1810 = stdlib.digest(ctc2, [v1795]);
  const v1813 = stdlib.digestEq(v1810, v1733);
  const v1814 = v1794 ? true : v1813;
  let v1815;
  if (v1667) {
    v1815 = v1564;
    }
  else {
    const v1828 = '-';
    v1815 = v1828;
    }
  const v1830 = stdlib.digest(ctc2, [v1815]);
  const v1833 = stdlib.digestEq(v1830, v1733);
  const v1834 = v1814 ? true : v1833;
  let v1835;
  if (v1687) {
    v1835 = v1558;
    }
  else {
    const v1848 = '-';
    v1835 = v1848;
    }
  const v1850 = stdlib.digest(ctc2, [v1835]);
  const v1853 = stdlib.digestEq(v1850, v1733);
  const v1854 = v1834 ? true : v1853;
  let v1855;
  if (v1707) {
    v1855 = v1564;
    }
  else {
    const v1868 = '-';
    v1855 = v1868;
    }
  const v1870 = stdlib.digest(ctc2, [v1855]);
  const v1873 = stdlib.digestEq(v1870, v1733);
  const v1874 = v1854 ? true : v1873;
  const v1875 = v1874 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
  const v1876 = v1715 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1875;
  ;
  stdlib.protect(ctc7, await interact.endsWith(v1055), {
    at: './index.rsh:191:22:application',
    fs: ['at ./index.rsh:190:7:application call to [unknown function] (defined at: ./index.rsh:190:19:function exp)'],
    msg: 'endsWith',
    who: 'Alice'
    });
  stdlib.protect(ctc7, await interact.seeOutcome(v1876), {
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
  const {data: [v1022], secs: v1024, time: v1023, didSend: v64, from: v1021 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptBudget(v1022), {
    at: './index.rsh:153:26:application',
    fs: ['at ./index.rsh:153:26:application call to [unknown function] (defined at: ./index.rsh:153:26:function exp)', 'at ./index.rsh:153:26:application call to "liftedInteract" (defined at: ./index.rsh:153:26:application)'],
    msg: 'acceptBudget',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1021, v1022],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1023,
    onlyIf: true,
    out_tys: [],
    pay: [v1022, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1030, time: v1029, didSend: v74, from: v1028 } = txn2;
      
      const v1032 = stdlib.add(v1022, v1022);
      sim_r.txns.push({
        amt: v1022,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1033 = ' ';
      const v1042 = [v1033, v1033, v1033, v1033, v1033, v1033, v1033, v1033, v1033];
      const v1043 = {
        board: v1042,
        playerTurn: true
        };
      const v1055 = v1043;
      const v1056 = v1029;
      const v1063 = v1032;
      
      if (await (async () => {
        const v1067 = v1055.board;
        const v1068 = await stdlib.Array_asyncReduce([v1067], true, async([v1070], v1069, v1071) => {
          const v1072 = 'x';
          const v1073 = stdlib.digest(ctc3, [v1070]);
          const v1075 = stdlib.digest(ctc3, [v1072]);
          const v1076 = stdlib.digestEq(v1073, v1075);
          const v1077 = 'o';
          const v1080 = stdlib.digest(ctc3, [v1077]);
          const v1081 = stdlib.digestEq(v1073, v1080);
          const v1082 = v1076 ? true : v1081;
          const v1083 = v1069 ? v1082 : false;
          
          return v1083;})
        let v1085;
        const v1086 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
        const v1087 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
        const v1088 = stdlib.digest(ctc3, [v1086]);
        const v1089 = stdlib.digest(ctc3, [v1087]);
        const v1090 = stdlib.digestEq(v1088, v1089);
        const v1092 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
        const v1094 = stdlib.digest(ctc3, [v1092]);
        const v1095 = stdlib.digestEq(v1088, v1094);
        const v1096 = v1090 ? v1095 : false;
        if (v1096) {
          v1085 = v1086;
          }
        else {
          const v1098 = '-';
          v1085 = v1098;
          }
        const v1099 = 'x';
        const v1100 = stdlib.digest(ctc3, [v1085]);
        const v1102 = stdlib.digest(ctc3, [v1099]);
        const v1103 = stdlib.digestEq(v1100, v1102);
        let v1104;
        const v1105 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
        const v1106 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
        const v1107 = stdlib.digest(ctc3, [v1105]);
        const v1108 = stdlib.digest(ctc3, [v1106]);
        const v1109 = stdlib.digestEq(v1107, v1108);
        const v1111 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
        const v1113 = stdlib.digest(ctc3, [v1111]);
        const v1114 = stdlib.digestEq(v1107, v1113);
        const v1115 = v1109 ? v1114 : false;
        if (v1115) {
          v1104 = v1105;
          }
        else {
          const v1117 = '-';
          v1104 = v1117;
          }
        const v1119 = stdlib.digest(ctc3, [v1104]);
        const v1122 = stdlib.digestEq(v1119, v1102);
        const v1123 = v1103 ? true : v1122;
        let v1124;
        const v1125 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
        const v1126 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
        const v1127 = stdlib.digest(ctc3, [v1125]);
        const v1128 = stdlib.digest(ctc3, [v1126]);
        const v1129 = stdlib.digestEq(v1127, v1128);
        const v1131 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
        const v1133 = stdlib.digest(ctc3, [v1131]);
        const v1134 = stdlib.digestEq(v1127, v1133);
        const v1135 = v1129 ? v1134 : false;
        if (v1135) {
          v1124 = v1125;
          }
        else {
          const v1137 = '-';
          v1124 = v1137;
          }
        const v1139 = stdlib.digest(ctc3, [v1124]);
        const v1142 = stdlib.digestEq(v1139, v1102);
        const v1143 = v1123 ? true : v1142;
        let v1144;
        if (v1096) {
          v1144 = v1086;
          }
        else {
          const v1157 = '-';
          v1144 = v1157;
          }
        const v1158 = 'o';
        const v1159 = stdlib.digest(ctc3, [v1144]);
        const v1161 = stdlib.digest(ctc3, [v1158]);
        const v1162 = stdlib.digestEq(v1159, v1161);
        const v1163 = v1143 ? true : v1162;
        let v1164;
        if (v1115) {
          v1164 = v1105;
          }
        else {
          const v1177 = '-';
          v1164 = v1177;
          }
        const v1179 = stdlib.digest(ctc3, [v1164]);
        const v1182 = stdlib.digestEq(v1179, v1161);
        const v1183 = v1163 ? true : v1182;
        let v1184;
        if (v1135) {
          v1184 = v1125;
          }
        else {
          const v1197 = '-';
          v1184 = v1197;
          }
        const v1199 = stdlib.digest(ctc3, [v1184]);
        const v1202 = stdlib.digestEq(v1199, v1161);
        const v1203 = v1183 ? true : v1202;
        let v1204;
        const v1209 = stdlib.digestEq(v1088, v1107);
        const v1214 = stdlib.digestEq(v1088, v1127);
        const v1215 = v1209 ? v1214 : false;
        if (v1215) {
          v1204 = v1086;
          }
        else {
          const v1217 = '-';
          v1204 = v1217;
          }
        const v1219 = stdlib.digest(ctc3, [v1204]);
        const v1222 = stdlib.digestEq(v1219, v1102);
        const v1223 = v1203 ? true : v1222;
        let v1224;
        const v1229 = stdlib.digestEq(v1089, v1108);
        const v1234 = stdlib.digestEq(v1089, v1128);
        const v1235 = v1229 ? v1234 : false;
        if (v1235) {
          v1224 = v1087;
          }
        else {
          const v1237 = '-';
          v1224 = v1237;
          }
        const v1239 = stdlib.digest(ctc3, [v1224]);
        const v1242 = stdlib.digestEq(v1239, v1102);
        const v1243 = v1223 ? true : v1242;
        let v1244;
        const v1249 = stdlib.digestEq(v1094, v1113);
        const v1254 = stdlib.digestEq(v1094, v1133);
        const v1255 = v1249 ? v1254 : false;
        if (v1255) {
          v1244 = v1092;
          }
        else {
          const v1257 = '-';
          v1244 = v1257;
          }
        const v1259 = stdlib.digest(ctc3, [v1244]);
        const v1262 = stdlib.digestEq(v1259, v1102);
        const v1263 = v1243 ? true : v1262;
        let v1264;
        if (v1215) {
          v1264 = v1086;
          }
        else {
          const v1277 = '-';
          v1264 = v1277;
          }
        const v1279 = stdlib.digest(ctc3, [v1264]);
        const v1282 = stdlib.digestEq(v1279, v1161);
        const v1283 = v1263 ? true : v1282;
        let v1284;
        if (v1235) {
          v1284 = v1087;
          }
        else {
          const v1297 = '-';
          v1284 = v1297;
          }
        const v1299 = stdlib.digest(ctc3, [v1284]);
        const v1302 = stdlib.digestEq(v1299, v1161);
        const v1303 = v1283 ? true : v1302;
        let v1304;
        if (v1255) {
          v1304 = v1092;
          }
        else {
          const v1317 = '-';
          v1304 = v1317;
          }
        const v1319 = stdlib.digest(ctc3, [v1304]);
        const v1322 = stdlib.digestEq(v1319, v1161);
        const v1323 = v1303 ? true : v1322;
        let v1324;
        const v1329 = stdlib.digestEq(v1088, v1108);
        const v1334 = stdlib.digestEq(v1088, v1133);
        const v1335 = v1329 ? true : v1334;
        if (v1335) {
          v1324 = v1086;
          }
        else {
          const v1337 = '-';
          v1324 = v1337;
          }
        const v1339 = stdlib.digest(ctc3, [v1324]);
        const v1342 = stdlib.digestEq(v1339, v1102);
        const v1343 = v1323 ? true : v1342;
        let v1344;
        if (v1335) {
          v1344 = v1086;
          }
        else {
          const v1357 = '-';
          v1344 = v1357;
          }
        const v1359 = stdlib.digest(ctc3, [v1344]);
        const v1362 = stdlib.digestEq(v1359, v1161);
        const v1363 = v1343 ? true : v1362;
        let v1364;
        const v1369 = stdlib.digestEq(v1094, v1108);
        const v1374 = stdlib.digestEq(v1094, v1127);
        const v1375 = v1369 ? true : v1374;
        if (v1375) {
          v1364 = v1092;
          }
        else {
          const v1377 = '-';
          v1364 = v1377;
          }
        const v1379 = stdlib.digest(ctc3, [v1364]);
        const v1382 = stdlib.digestEq(v1379, v1102);
        const v1383 = v1363 ? true : v1382;
        let v1384;
        if (v1375) {
          v1384 = v1092;
          }
        else {
          const v1397 = '-';
          v1384 = v1397;
          }
        const v1399 = stdlib.digest(ctc3, [v1384]);
        const v1402 = stdlib.digestEq(v1399, v1161);
        const v1403 = v1383 ? true : v1402;
        const v1404 = v1068 ? true : v1403;
        const v1405 = v1404 ? false : true;
        
        return v1405;})()) {
        const v1406 = v1055.playerTurn;
        if (v1406) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v1556 = v1055.board;
        let v1557;
        const v1558 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
        const v1559 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
        const v1560 = stdlib.digest(ctc3, [v1558]);
        const v1561 = stdlib.digest(ctc3, [v1559]);
        const v1562 = stdlib.digestEq(v1560, v1561);
        const v1564 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
        const v1566 = stdlib.digest(ctc3, [v1564]);
        const v1567 = stdlib.digestEq(v1560, v1566);
        const v1568 = v1562 ? v1567 : false;
        if (v1568) {
          v1557 = v1558;
          }
        else {
          const v1570 = '-';
          v1557 = v1570;
          }
        const v1571 = 'x';
        const v1572 = stdlib.digest(ctc3, [v1557]);
        const v1574 = stdlib.digest(ctc3, [v1571]);
        const v1575 = stdlib.digestEq(v1572, v1574);
        let v1576;
        const v1577 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
        const v1578 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
        const v1579 = stdlib.digest(ctc3, [v1577]);
        const v1580 = stdlib.digest(ctc3, [v1578]);
        const v1581 = stdlib.digestEq(v1579, v1580);
        const v1583 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
        const v1585 = stdlib.digest(ctc3, [v1583]);
        const v1586 = stdlib.digestEq(v1579, v1585);
        const v1587 = v1581 ? v1586 : false;
        if (v1587) {
          v1576 = v1577;
          }
        else {
          const v1589 = '-';
          v1576 = v1589;
          }
        const v1591 = stdlib.digest(ctc3, [v1576]);
        const v1594 = stdlib.digestEq(v1591, v1574);
        const v1595 = v1575 ? true : v1594;
        let v1596;
        const v1597 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
        const v1598 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
        const v1599 = stdlib.digest(ctc3, [v1597]);
        const v1600 = stdlib.digest(ctc3, [v1598]);
        const v1601 = stdlib.digestEq(v1599, v1600);
        const v1603 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
        const v1605 = stdlib.digest(ctc3, [v1603]);
        const v1606 = stdlib.digestEq(v1599, v1605);
        const v1607 = v1601 ? v1606 : false;
        if (v1607) {
          v1596 = v1597;
          }
        else {
          const v1609 = '-';
          v1596 = v1609;
          }
        const v1611 = stdlib.digest(ctc3, [v1596]);
        const v1614 = stdlib.digestEq(v1611, v1574);
        const v1615 = v1595 ? true : v1614;
        let v1616;
        const v1621 = stdlib.digestEq(v1560, v1579);
        const v1626 = stdlib.digestEq(v1560, v1599);
        const v1627 = v1621 ? v1626 : false;
        if (v1627) {
          v1616 = v1558;
          }
        else {
          const v1629 = '-';
          v1616 = v1629;
          }
        const v1631 = stdlib.digest(ctc3, [v1616]);
        const v1634 = stdlib.digestEq(v1631, v1574);
        const v1635 = v1615 ? true : v1634;
        let v1636;
        const v1641 = stdlib.digestEq(v1561, v1580);
        const v1646 = stdlib.digestEq(v1561, v1600);
        const v1647 = v1641 ? v1646 : false;
        if (v1647) {
          v1636 = v1559;
          }
        else {
          const v1649 = '-';
          v1636 = v1649;
          }
        const v1651 = stdlib.digest(ctc3, [v1636]);
        const v1654 = stdlib.digestEq(v1651, v1574);
        const v1655 = v1635 ? true : v1654;
        let v1656;
        const v1661 = stdlib.digestEq(v1566, v1585);
        const v1666 = stdlib.digestEq(v1566, v1605);
        const v1667 = v1661 ? v1666 : false;
        if (v1667) {
          v1656 = v1564;
          }
        else {
          const v1669 = '-';
          v1656 = v1669;
          }
        const v1671 = stdlib.digest(ctc3, [v1656]);
        const v1674 = stdlib.digestEq(v1671, v1574);
        const v1675 = v1655 ? true : v1674;
        let v1676;
        const v1681 = stdlib.digestEq(v1560, v1580);
        const v1686 = stdlib.digestEq(v1560, v1605);
        const v1687 = v1681 ? true : v1686;
        if (v1687) {
          v1676 = v1558;
          }
        else {
          const v1689 = '-';
          v1676 = v1689;
          }
        const v1691 = stdlib.digest(ctc3, [v1676]);
        const v1694 = stdlib.digestEq(v1691, v1574);
        const v1695 = v1675 ? true : v1694;
        let v1696;
        const v1701 = stdlib.digestEq(v1566, v1580);
        const v1706 = stdlib.digestEq(v1566, v1599);
        const v1707 = v1701 ? true : v1706;
        if (v1707) {
          v1696 = v1564;
          }
        else {
          const v1709 = '-';
          v1696 = v1709;
          }
        const v1711 = stdlib.digest(ctc3, [v1696]);
        const v1714 = stdlib.digestEq(v1711, v1574);
        const v1715 = v1695 ? true : v1714;
        let v1716;
        if (v1568) {
          v1716 = v1558;
          }
        else {
          const v1729 = '-';
          v1716 = v1729;
          }
        const v1730 = 'o';
        const v1731 = stdlib.digest(ctc3, [v1716]);
        const v1733 = stdlib.digest(ctc3, [v1730]);
        const v1734 = stdlib.digestEq(v1731, v1733);
        let v1735;
        if (v1587) {
          v1735 = v1577;
          }
        else {
          const v1748 = '-';
          v1735 = v1748;
          }
        const v1750 = stdlib.digest(ctc3, [v1735]);
        const v1753 = stdlib.digestEq(v1750, v1733);
        const v1754 = v1734 ? true : v1753;
        let v1755;
        if (v1607) {
          v1755 = v1597;
          }
        else {
          const v1768 = '-';
          v1755 = v1768;
          }
        const v1770 = stdlib.digest(ctc3, [v1755]);
        const v1773 = stdlib.digestEq(v1770, v1733);
        const v1774 = v1754 ? true : v1773;
        let v1775;
        if (v1627) {
          v1775 = v1558;
          }
        else {
          const v1788 = '-';
          v1775 = v1788;
          }
        const v1790 = stdlib.digest(ctc3, [v1775]);
        const v1793 = stdlib.digestEq(v1790, v1733);
        const v1794 = v1774 ? true : v1793;
        let v1795;
        if (v1647) {
          v1795 = v1559;
          }
        else {
          const v1808 = '-';
          v1795 = v1808;
          }
        const v1810 = stdlib.digest(ctc3, [v1795]);
        const v1813 = stdlib.digestEq(v1810, v1733);
        const v1814 = v1794 ? true : v1813;
        let v1815;
        if (v1667) {
          v1815 = v1564;
          }
        else {
          const v1828 = '-';
          v1815 = v1828;
          }
        const v1830 = stdlib.digest(ctc3, [v1815]);
        const v1833 = stdlib.digestEq(v1830, v1733);
        const v1834 = v1814 ? true : v1833;
        let v1835;
        if (v1687) {
          v1835 = v1558;
          }
        else {
          const v1848 = '-';
          v1835 = v1848;
          }
        const v1850 = stdlib.digest(ctc3, [v1835]);
        const v1853 = stdlib.digestEq(v1850, v1733);
        const v1854 = v1834 ? true : v1853;
        let v1855;
        if (v1707) {
          v1855 = v1564;
          }
        else {
          const v1868 = '-';
          v1855 = v1868;
          }
        const v1870 = stdlib.digest(ctc3, [v1855]);
        const v1873 = stdlib.digestEq(v1870, v1733);
        const v1874 = v1854 ? true : v1873;
        const v1875 = v1874 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
        const v1876 = v1715 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1875;
        sim_r.txns.push({
          kind: 'from',
          to: v1021,
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
  const {data: [], secs: v1030, time: v1029, didSend: v74, from: v1028 } = txn2;
  const v1032 = stdlib.add(v1022, v1022);
  ;
  const v1033 = ' ';
  const v1042 = [v1033, v1033, v1033, v1033, v1033, v1033, v1033, v1033, v1033];
  const v1043 = {
    board: v1042,
    playerTurn: true
    };
  let v1055 = v1043;
  let v1056 = v1029;
  let v1063 = v1032;
  
  while (await (async () => {
    const v1067 = v1055.board;
    const v1068 = await stdlib.Array_asyncReduce([v1067], true, async([v1070], v1069, v1071) => {
      const v1072 = 'x';
      const v1073 = stdlib.digest(ctc3, [v1070]);
      const v1075 = stdlib.digest(ctc3, [v1072]);
      const v1076 = stdlib.digestEq(v1073, v1075);
      const v1077 = 'o';
      const v1080 = stdlib.digest(ctc3, [v1077]);
      const v1081 = stdlib.digestEq(v1073, v1080);
      const v1082 = v1076 ? true : v1081;
      const v1083 = v1069 ? v1082 : false;
      
      return v1083;})
    let v1085;
    const v1086 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
    const v1087 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
    const v1088 = stdlib.digest(ctc3, [v1086]);
    const v1089 = stdlib.digest(ctc3, [v1087]);
    const v1090 = stdlib.digestEq(v1088, v1089);
    const v1092 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
    const v1094 = stdlib.digest(ctc3, [v1092]);
    const v1095 = stdlib.digestEq(v1088, v1094);
    const v1096 = v1090 ? v1095 : false;
    if (v1096) {
      v1085 = v1086;
      }
    else {
      const v1098 = '-';
      v1085 = v1098;
      }
    const v1099 = 'x';
    const v1100 = stdlib.digest(ctc3, [v1085]);
    const v1102 = stdlib.digest(ctc3, [v1099]);
    const v1103 = stdlib.digestEq(v1100, v1102);
    let v1104;
    const v1105 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
    const v1106 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
    const v1107 = stdlib.digest(ctc3, [v1105]);
    const v1108 = stdlib.digest(ctc3, [v1106]);
    const v1109 = stdlib.digestEq(v1107, v1108);
    const v1111 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
    const v1113 = stdlib.digest(ctc3, [v1111]);
    const v1114 = stdlib.digestEq(v1107, v1113);
    const v1115 = v1109 ? v1114 : false;
    if (v1115) {
      v1104 = v1105;
      }
    else {
      const v1117 = '-';
      v1104 = v1117;
      }
    const v1119 = stdlib.digest(ctc3, [v1104]);
    const v1122 = stdlib.digestEq(v1119, v1102);
    const v1123 = v1103 ? true : v1122;
    let v1124;
    const v1125 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
    const v1126 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
    const v1127 = stdlib.digest(ctc3, [v1125]);
    const v1128 = stdlib.digest(ctc3, [v1126]);
    const v1129 = stdlib.digestEq(v1127, v1128);
    const v1131 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
    const v1133 = stdlib.digest(ctc3, [v1131]);
    const v1134 = stdlib.digestEq(v1127, v1133);
    const v1135 = v1129 ? v1134 : false;
    if (v1135) {
      v1124 = v1125;
      }
    else {
      const v1137 = '-';
      v1124 = v1137;
      }
    const v1139 = stdlib.digest(ctc3, [v1124]);
    const v1142 = stdlib.digestEq(v1139, v1102);
    const v1143 = v1123 ? true : v1142;
    let v1144;
    if (v1096) {
      v1144 = v1086;
      }
    else {
      const v1157 = '-';
      v1144 = v1157;
      }
    const v1158 = 'o';
    const v1159 = stdlib.digest(ctc3, [v1144]);
    const v1161 = stdlib.digest(ctc3, [v1158]);
    const v1162 = stdlib.digestEq(v1159, v1161);
    const v1163 = v1143 ? true : v1162;
    let v1164;
    if (v1115) {
      v1164 = v1105;
      }
    else {
      const v1177 = '-';
      v1164 = v1177;
      }
    const v1179 = stdlib.digest(ctc3, [v1164]);
    const v1182 = stdlib.digestEq(v1179, v1161);
    const v1183 = v1163 ? true : v1182;
    let v1184;
    if (v1135) {
      v1184 = v1125;
      }
    else {
      const v1197 = '-';
      v1184 = v1197;
      }
    const v1199 = stdlib.digest(ctc3, [v1184]);
    const v1202 = stdlib.digestEq(v1199, v1161);
    const v1203 = v1183 ? true : v1202;
    let v1204;
    const v1209 = stdlib.digestEq(v1088, v1107);
    const v1214 = stdlib.digestEq(v1088, v1127);
    const v1215 = v1209 ? v1214 : false;
    if (v1215) {
      v1204 = v1086;
      }
    else {
      const v1217 = '-';
      v1204 = v1217;
      }
    const v1219 = stdlib.digest(ctc3, [v1204]);
    const v1222 = stdlib.digestEq(v1219, v1102);
    const v1223 = v1203 ? true : v1222;
    let v1224;
    const v1229 = stdlib.digestEq(v1089, v1108);
    const v1234 = stdlib.digestEq(v1089, v1128);
    const v1235 = v1229 ? v1234 : false;
    if (v1235) {
      v1224 = v1087;
      }
    else {
      const v1237 = '-';
      v1224 = v1237;
      }
    const v1239 = stdlib.digest(ctc3, [v1224]);
    const v1242 = stdlib.digestEq(v1239, v1102);
    const v1243 = v1223 ? true : v1242;
    let v1244;
    const v1249 = stdlib.digestEq(v1094, v1113);
    const v1254 = stdlib.digestEq(v1094, v1133);
    const v1255 = v1249 ? v1254 : false;
    if (v1255) {
      v1244 = v1092;
      }
    else {
      const v1257 = '-';
      v1244 = v1257;
      }
    const v1259 = stdlib.digest(ctc3, [v1244]);
    const v1262 = stdlib.digestEq(v1259, v1102);
    const v1263 = v1243 ? true : v1262;
    let v1264;
    if (v1215) {
      v1264 = v1086;
      }
    else {
      const v1277 = '-';
      v1264 = v1277;
      }
    const v1279 = stdlib.digest(ctc3, [v1264]);
    const v1282 = stdlib.digestEq(v1279, v1161);
    const v1283 = v1263 ? true : v1282;
    let v1284;
    if (v1235) {
      v1284 = v1087;
      }
    else {
      const v1297 = '-';
      v1284 = v1297;
      }
    const v1299 = stdlib.digest(ctc3, [v1284]);
    const v1302 = stdlib.digestEq(v1299, v1161);
    const v1303 = v1283 ? true : v1302;
    let v1304;
    if (v1255) {
      v1304 = v1092;
      }
    else {
      const v1317 = '-';
      v1304 = v1317;
      }
    const v1319 = stdlib.digest(ctc3, [v1304]);
    const v1322 = stdlib.digestEq(v1319, v1161);
    const v1323 = v1303 ? true : v1322;
    let v1324;
    const v1329 = stdlib.digestEq(v1088, v1108);
    const v1334 = stdlib.digestEq(v1088, v1133);
    const v1335 = v1329 ? true : v1334;
    if (v1335) {
      v1324 = v1086;
      }
    else {
      const v1337 = '-';
      v1324 = v1337;
      }
    const v1339 = stdlib.digest(ctc3, [v1324]);
    const v1342 = stdlib.digestEq(v1339, v1102);
    const v1343 = v1323 ? true : v1342;
    let v1344;
    if (v1335) {
      v1344 = v1086;
      }
    else {
      const v1357 = '-';
      v1344 = v1357;
      }
    const v1359 = stdlib.digest(ctc3, [v1344]);
    const v1362 = stdlib.digestEq(v1359, v1161);
    const v1363 = v1343 ? true : v1362;
    let v1364;
    const v1369 = stdlib.digestEq(v1094, v1108);
    const v1374 = stdlib.digestEq(v1094, v1127);
    const v1375 = v1369 ? true : v1374;
    if (v1375) {
      v1364 = v1092;
      }
    else {
      const v1377 = '-';
      v1364 = v1377;
      }
    const v1379 = stdlib.digest(ctc3, [v1364]);
    const v1382 = stdlib.digestEq(v1379, v1102);
    const v1383 = v1363 ? true : v1382;
    let v1384;
    if (v1375) {
      v1384 = v1092;
      }
    else {
      const v1397 = '-';
      v1384 = v1397;
      }
    const v1399 = stdlib.digest(ctc3, [v1384]);
    const v1402 = stdlib.digestEq(v1399, v1161);
    const v1403 = v1383 ? true : v1402;
    const v1404 = v1068 ? true : v1403;
    const v1405 = v1404 ? false : true;
    
    return v1405;})()) {
    const v1406 = v1055.playerTurn;
    if (v1406) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1444], secs: v1446, time: v1445, didSend: v497, from: v1443 } = txn3;
      ;
      const v1447 = stdlib.addressEq(v1021, v1443);
      stdlib.assert(v1447, {
        at: './index.rsh:166:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1448 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1444);
      const v1449 = stdlib.lt(v1444, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1450 = v1448 ? v1449 : false;
      stdlib.assert(v1450, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:168:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1451 = v1055.board;
      const v1453 = v1451[v1444];
      const v1454 = 'x';
      const v1455 = stdlib.digest(ctc3, [v1453]);
      const v1457 = stdlib.digest(ctc3, [v1454]);
      const v1458 = stdlib.digestEq(v1455, v1457);
      let v1459;
      if (v1458) {
        v1459 = true;
        }
      else {
        const v1463 = 'o';
        const v1466 = stdlib.digest(ctc3, [v1463]);
        const v1467 = stdlib.digestEq(v1455, v1466);
        v1459 = v1467;
        }
      const v1468 = v1459 ? false : true;
      stdlib.assert(v1468, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:168:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const v1475 = stdlib.Array_set(v1451, v1444, v1454);
      const v1480 = {
        board: v1475,
        playerTurn: false
        };
      const cv1055 = v1480;
      const cv1056 = v1445;
      const cv1063 = v1063;
      
      v1055 = cv1055;
      v1056 = cv1056;
      v1063 = cv1063;
      
      continue;
      
      }
    else {
      const v1484 = v1055.board;
      const v1495 = stdlib.protect(ctc0, await interact.getSquareSelected(v1055), {
        at: './index.rsh:102:43:application',
        fs: ['at ./index.rsh:174:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Bob'
        });
      const v1496 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1495);
      const v1497 = stdlib.lt(v1495, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1498 = v1496 ? v1497 : false;
      stdlib.assert(v1498, {
        at: './index.rsh:103:9:application',
        fs: ['at ./index.rsh:174:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1501 = v1484[v1495];
      const v1502 = 'x';
      const v1503 = stdlib.digest(ctc3, [v1501]);
      const v1505 = stdlib.digest(ctc3, [v1502]);
      const v1506 = stdlib.digestEq(v1503, v1505);
      let v1507;
      if (v1506) {
        v1507 = true;
        }
      else {
        const v1511 = 'o';
        const v1514 = stdlib.digest(ctc3, [v1511]);
        const v1515 = stdlib.digestEq(v1503, v1514);
        v1507 = v1515;
        }
      const v1516 = v1507 ? false : true;
      stdlib.assert(v1516, {
        at: './index.rsh:104:9:application',
        fs: ['at ./index.rsh:174:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v1021, v1028, v1055, v1063, v1495],
        evt_cnt: 1,
        funcNum: 4,
        lct: v1056,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:177:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1518], secs: v1520, time: v1519, didSend: v582, from: v1517 } = txn3;
          
          ;
          const v1525 = v1055.board;
          const v1551 = 'o';
          const v1553 = stdlib.Array_set(v1525, v1518, v1551);
          const v1554 = {
            board: v1553,
            playerTurn: true
            };
          const cv1055 = v1554;
          const cv1056 = v1519;
          const cv1063 = v1063;
          
          await (async () => {
            const v1055 = cv1055;
            const v1056 = cv1056;
            const v1063 = cv1063;
            
            if (await (async () => {
              const v1067 = v1055.board;
              const v1068 = await stdlib.Array_asyncReduce([v1067], true, async([v1070], v1069, v1071) => {
                const v1072 = 'x';
                const v1073 = stdlib.digest(ctc3, [v1070]);
                const v1075 = stdlib.digest(ctc3, [v1072]);
                const v1076 = stdlib.digestEq(v1073, v1075);
                const v1077 = 'o';
                const v1080 = stdlib.digest(ctc3, [v1077]);
                const v1081 = stdlib.digestEq(v1073, v1080);
                const v1082 = v1076 ? true : v1081;
                const v1083 = v1069 ? v1082 : false;
                
                return v1083;})
              let v1085;
              const v1086 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1087 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1088 = stdlib.digest(ctc3, [v1086]);
              const v1089 = stdlib.digest(ctc3, [v1087]);
              const v1090 = stdlib.digestEq(v1088, v1089);
              const v1092 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1094 = stdlib.digest(ctc3, [v1092]);
              const v1095 = stdlib.digestEq(v1088, v1094);
              const v1096 = v1090 ? v1095 : false;
              if (v1096) {
                v1085 = v1086;
                }
              else {
                const v1098 = '-';
                v1085 = v1098;
                }
              const v1099 = 'x';
              const v1100 = stdlib.digest(ctc3, [v1085]);
              const v1102 = stdlib.digest(ctc3, [v1099]);
              const v1103 = stdlib.digestEq(v1100, v1102);
              let v1104;
              const v1105 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1106 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1107 = stdlib.digest(ctc3, [v1105]);
              const v1108 = stdlib.digest(ctc3, [v1106]);
              const v1109 = stdlib.digestEq(v1107, v1108);
              const v1111 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1113 = stdlib.digest(ctc3, [v1111]);
              const v1114 = stdlib.digestEq(v1107, v1113);
              const v1115 = v1109 ? v1114 : false;
              if (v1115) {
                v1104 = v1105;
                }
              else {
                const v1117 = '-';
                v1104 = v1117;
                }
              const v1119 = stdlib.digest(ctc3, [v1104]);
              const v1122 = stdlib.digestEq(v1119, v1102);
              const v1123 = v1103 ? true : v1122;
              let v1124;
              const v1125 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1126 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1127 = stdlib.digest(ctc3, [v1125]);
              const v1128 = stdlib.digest(ctc3, [v1126]);
              const v1129 = stdlib.digestEq(v1127, v1128);
              const v1131 = v1067[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1133 = stdlib.digest(ctc3, [v1131]);
              const v1134 = stdlib.digestEq(v1127, v1133);
              const v1135 = v1129 ? v1134 : false;
              if (v1135) {
                v1124 = v1125;
                }
              else {
                const v1137 = '-';
                v1124 = v1137;
                }
              const v1139 = stdlib.digest(ctc3, [v1124]);
              const v1142 = stdlib.digestEq(v1139, v1102);
              const v1143 = v1123 ? true : v1142;
              let v1144;
              if (v1096) {
                v1144 = v1086;
                }
              else {
                const v1157 = '-';
                v1144 = v1157;
                }
              const v1158 = 'o';
              const v1159 = stdlib.digest(ctc3, [v1144]);
              const v1161 = stdlib.digest(ctc3, [v1158]);
              const v1162 = stdlib.digestEq(v1159, v1161);
              const v1163 = v1143 ? true : v1162;
              let v1164;
              if (v1115) {
                v1164 = v1105;
                }
              else {
                const v1177 = '-';
                v1164 = v1177;
                }
              const v1179 = stdlib.digest(ctc3, [v1164]);
              const v1182 = stdlib.digestEq(v1179, v1161);
              const v1183 = v1163 ? true : v1182;
              let v1184;
              if (v1135) {
                v1184 = v1125;
                }
              else {
                const v1197 = '-';
                v1184 = v1197;
                }
              const v1199 = stdlib.digest(ctc3, [v1184]);
              const v1202 = stdlib.digestEq(v1199, v1161);
              const v1203 = v1183 ? true : v1202;
              let v1204;
              const v1209 = stdlib.digestEq(v1088, v1107);
              const v1214 = stdlib.digestEq(v1088, v1127);
              const v1215 = v1209 ? v1214 : false;
              if (v1215) {
                v1204 = v1086;
                }
              else {
                const v1217 = '-';
                v1204 = v1217;
                }
              const v1219 = stdlib.digest(ctc3, [v1204]);
              const v1222 = stdlib.digestEq(v1219, v1102);
              const v1223 = v1203 ? true : v1222;
              let v1224;
              const v1229 = stdlib.digestEq(v1089, v1108);
              const v1234 = stdlib.digestEq(v1089, v1128);
              const v1235 = v1229 ? v1234 : false;
              if (v1235) {
                v1224 = v1087;
                }
              else {
                const v1237 = '-';
                v1224 = v1237;
                }
              const v1239 = stdlib.digest(ctc3, [v1224]);
              const v1242 = stdlib.digestEq(v1239, v1102);
              const v1243 = v1223 ? true : v1242;
              let v1244;
              const v1249 = stdlib.digestEq(v1094, v1113);
              const v1254 = stdlib.digestEq(v1094, v1133);
              const v1255 = v1249 ? v1254 : false;
              if (v1255) {
                v1244 = v1092;
                }
              else {
                const v1257 = '-';
                v1244 = v1257;
                }
              const v1259 = stdlib.digest(ctc3, [v1244]);
              const v1262 = stdlib.digestEq(v1259, v1102);
              const v1263 = v1243 ? true : v1262;
              let v1264;
              if (v1215) {
                v1264 = v1086;
                }
              else {
                const v1277 = '-';
                v1264 = v1277;
                }
              const v1279 = stdlib.digest(ctc3, [v1264]);
              const v1282 = stdlib.digestEq(v1279, v1161);
              const v1283 = v1263 ? true : v1282;
              let v1284;
              if (v1235) {
                v1284 = v1087;
                }
              else {
                const v1297 = '-';
                v1284 = v1297;
                }
              const v1299 = stdlib.digest(ctc3, [v1284]);
              const v1302 = stdlib.digestEq(v1299, v1161);
              const v1303 = v1283 ? true : v1302;
              let v1304;
              if (v1255) {
                v1304 = v1092;
                }
              else {
                const v1317 = '-';
                v1304 = v1317;
                }
              const v1319 = stdlib.digest(ctc3, [v1304]);
              const v1322 = stdlib.digestEq(v1319, v1161);
              const v1323 = v1303 ? true : v1322;
              let v1324;
              const v1329 = stdlib.digestEq(v1088, v1108);
              const v1334 = stdlib.digestEq(v1088, v1133);
              const v1335 = v1329 ? true : v1334;
              if (v1335) {
                v1324 = v1086;
                }
              else {
                const v1337 = '-';
                v1324 = v1337;
                }
              const v1339 = stdlib.digest(ctc3, [v1324]);
              const v1342 = stdlib.digestEq(v1339, v1102);
              const v1343 = v1323 ? true : v1342;
              let v1344;
              if (v1335) {
                v1344 = v1086;
                }
              else {
                const v1357 = '-';
                v1344 = v1357;
                }
              const v1359 = stdlib.digest(ctc3, [v1344]);
              const v1362 = stdlib.digestEq(v1359, v1161);
              const v1363 = v1343 ? true : v1362;
              let v1364;
              const v1369 = stdlib.digestEq(v1094, v1108);
              const v1374 = stdlib.digestEq(v1094, v1127);
              const v1375 = v1369 ? true : v1374;
              if (v1375) {
                v1364 = v1092;
                }
              else {
                const v1377 = '-';
                v1364 = v1377;
                }
              const v1379 = stdlib.digest(ctc3, [v1364]);
              const v1382 = stdlib.digestEq(v1379, v1102);
              const v1383 = v1363 ? true : v1382;
              let v1384;
              if (v1375) {
                v1384 = v1092;
                }
              else {
                const v1397 = '-';
                v1384 = v1397;
                }
              const v1399 = stdlib.digest(ctc3, [v1384]);
              const v1402 = stdlib.digestEq(v1399, v1161);
              const v1403 = v1383 ? true : v1402;
              const v1404 = v1068 ? true : v1403;
              const v1405 = v1404 ? false : true;
              
              return v1405;})()) {
              const v1406 = v1055.playerTurn;
              if (v1406) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            else {
              const v1556 = v1055.board;
              let v1557;
              const v1558 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1559 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1560 = stdlib.digest(ctc3, [v1558]);
              const v1561 = stdlib.digest(ctc3, [v1559]);
              const v1562 = stdlib.digestEq(v1560, v1561);
              const v1564 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1566 = stdlib.digest(ctc3, [v1564]);
              const v1567 = stdlib.digestEq(v1560, v1566);
              const v1568 = v1562 ? v1567 : false;
              if (v1568) {
                v1557 = v1558;
                }
              else {
                const v1570 = '-';
                v1557 = v1570;
                }
              const v1571 = 'x';
              const v1572 = stdlib.digest(ctc3, [v1557]);
              const v1574 = stdlib.digest(ctc3, [v1571]);
              const v1575 = stdlib.digestEq(v1572, v1574);
              let v1576;
              const v1577 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1578 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1579 = stdlib.digest(ctc3, [v1577]);
              const v1580 = stdlib.digest(ctc3, [v1578]);
              const v1581 = stdlib.digestEq(v1579, v1580);
              const v1583 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1585 = stdlib.digest(ctc3, [v1583]);
              const v1586 = stdlib.digestEq(v1579, v1585);
              const v1587 = v1581 ? v1586 : false;
              if (v1587) {
                v1576 = v1577;
                }
              else {
                const v1589 = '-';
                v1576 = v1589;
                }
              const v1591 = stdlib.digest(ctc3, [v1576]);
              const v1594 = stdlib.digestEq(v1591, v1574);
              const v1595 = v1575 ? true : v1594;
              let v1596;
              const v1597 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1598 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1599 = stdlib.digest(ctc3, [v1597]);
              const v1600 = stdlib.digest(ctc3, [v1598]);
              const v1601 = stdlib.digestEq(v1599, v1600);
              const v1603 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1605 = stdlib.digest(ctc3, [v1603]);
              const v1606 = stdlib.digestEq(v1599, v1605);
              const v1607 = v1601 ? v1606 : false;
              if (v1607) {
                v1596 = v1597;
                }
              else {
                const v1609 = '-';
                v1596 = v1609;
                }
              const v1611 = stdlib.digest(ctc3, [v1596]);
              const v1614 = stdlib.digestEq(v1611, v1574);
              const v1615 = v1595 ? true : v1614;
              let v1616;
              const v1621 = stdlib.digestEq(v1560, v1579);
              const v1626 = stdlib.digestEq(v1560, v1599);
              const v1627 = v1621 ? v1626 : false;
              if (v1627) {
                v1616 = v1558;
                }
              else {
                const v1629 = '-';
                v1616 = v1629;
                }
              const v1631 = stdlib.digest(ctc3, [v1616]);
              const v1634 = stdlib.digestEq(v1631, v1574);
              const v1635 = v1615 ? true : v1634;
              let v1636;
              const v1641 = stdlib.digestEq(v1561, v1580);
              const v1646 = stdlib.digestEq(v1561, v1600);
              const v1647 = v1641 ? v1646 : false;
              if (v1647) {
                v1636 = v1559;
                }
              else {
                const v1649 = '-';
                v1636 = v1649;
                }
              const v1651 = stdlib.digest(ctc3, [v1636]);
              const v1654 = stdlib.digestEq(v1651, v1574);
              const v1655 = v1635 ? true : v1654;
              let v1656;
              const v1661 = stdlib.digestEq(v1566, v1585);
              const v1666 = stdlib.digestEq(v1566, v1605);
              const v1667 = v1661 ? v1666 : false;
              if (v1667) {
                v1656 = v1564;
                }
              else {
                const v1669 = '-';
                v1656 = v1669;
                }
              const v1671 = stdlib.digest(ctc3, [v1656]);
              const v1674 = stdlib.digestEq(v1671, v1574);
              const v1675 = v1655 ? true : v1674;
              let v1676;
              const v1681 = stdlib.digestEq(v1560, v1580);
              const v1686 = stdlib.digestEq(v1560, v1605);
              const v1687 = v1681 ? true : v1686;
              if (v1687) {
                v1676 = v1558;
                }
              else {
                const v1689 = '-';
                v1676 = v1689;
                }
              const v1691 = stdlib.digest(ctc3, [v1676]);
              const v1694 = stdlib.digestEq(v1691, v1574);
              const v1695 = v1675 ? true : v1694;
              let v1696;
              const v1701 = stdlib.digestEq(v1566, v1580);
              const v1706 = stdlib.digestEq(v1566, v1599);
              const v1707 = v1701 ? true : v1706;
              if (v1707) {
                v1696 = v1564;
                }
              else {
                const v1709 = '-';
                v1696 = v1709;
                }
              const v1711 = stdlib.digest(ctc3, [v1696]);
              const v1714 = stdlib.digestEq(v1711, v1574);
              const v1715 = v1695 ? true : v1714;
              let v1716;
              if (v1568) {
                v1716 = v1558;
                }
              else {
                const v1729 = '-';
                v1716 = v1729;
                }
              const v1730 = 'o';
              const v1731 = stdlib.digest(ctc3, [v1716]);
              const v1733 = stdlib.digest(ctc3, [v1730]);
              const v1734 = stdlib.digestEq(v1731, v1733);
              let v1735;
              if (v1587) {
                v1735 = v1577;
                }
              else {
                const v1748 = '-';
                v1735 = v1748;
                }
              const v1750 = stdlib.digest(ctc3, [v1735]);
              const v1753 = stdlib.digestEq(v1750, v1733);
              const v1754 = v1734 ? true : v1753;
              let v1755;
              if (v1607) {
                v1755 = v1597;
                }
              else {
                const v1768 = '-';
                v1755 = v1768;
                }
              const v1770 = stdlib.digest(ctc3, [v1755]);
              const v1773 = stdlib.digestEq(v1770, v1733);
              const v1774 = v1754 ? true : v1773;
              let v1775;
              if (v1627) {
                v1775 = v1558;
                }
              else {
                const v1788 = '-';
                v1775 = v1788;
                }
              const v1790 = stdlib.digest(ctc3, [v1775]);
              const v1793 = stdlib.digestEq(v1790, v1733);
              const v1794 = v1774 ? true : v1793;
              let v1795;
              if (v1647) {
                v1795 = v1559;
                }
              else {
                const v1808 = '-';
                v1795 = v1808;
                }
              const v1810 = stdlib.digest(ctc3, [v1795]);
              const v1813 = stdlib.digestEq(v1810, v1733);
              const v1814 = v1794 ? true : v1813;
              let v1815;
              if (v1667) {
                v1815 = v1564;
                }
              else {
                const v1828 = '-';
                v1815 = v1828;
                }
              const v1830 = stdlib.digest(ctc3, [v1815]);
              const v1833 = stdlib.digestEq(v1830, v1733);
              const v1834 = v1814 ? true : v1833;
              let v1835;
              if (v1687) {
                v1835 = v1558;
                }
              else {
                const v1848 = '-';
                v1835 = v1848;
                }
              const v1850 = stdlib.digest(ctc3, [v1835]);
              const v1853 = stdlib.digestEq(v1850, v1733);
              const v1854 = v1834 ? true : v1853;
              let v1855;
              if (v1707) {
                v1855 = v1564;
                }
              else {
                const v1868 = '-';
                v1855 = v1868;
                }
              const v1870 = stdlib.digest(ctc3, [v1855]);
              const v1873 = stdlib.digestEq(v1870, v1733);
              const v1874 = v1854 ? true : v1873;
              const v1875 = v1874 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
              const v1876 = v1715 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1875;
              sim_r.txns.push({
                kind: 'from',
                to: v1021,
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
      const {data: [v1518], secs: v1520, time: v1519, didSend: v582, from: v1517 } = txn3;
      ;
      const v1521 = stdlib.addressEq(v1028, v1517);
      stdlib.assert(v1521, {
        at: './index.rsh:177:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1522 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1518);
      const v1523 = stdlib.lt(v1518, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1524 = v1522 ? v1523 : false;
      stdlib.assert(v1524, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:178:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1525 = v1055.board;
      const v1527 = v1525[v1518];
      const v1528 = 'x';
      const v1529 = stdlib.digest(ctc3, [v1527]);
      const v1531 = stdlib.digest(ctc3, [v1528]);
      const v1532 = stdlib.digestEq(v1529, v1531);
      let v1533;
      if (v1532) {
        v1533 = true;
        }
      else {
        const v1537 = 'o';
        const v1540 = stdlib.digest(ctc3, [v1537]);
        const v1541 = stdlib.digestEq(v1529, v1540);
        v1533 = v1541;
        }
      const v1542 = v1533 ? false : true;
      stdlib.assert(v1542, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:178:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const v1551 = 'o';
      const v1553 = stdlib.Array_set(v1525, v1518, v1551);
      const v1554 = {
        board: v1553,
        playerTurn: true
        };
      const cv1055 = v1554;
      const cv1056 = v1519;
      const cv1063 = v1063;
      
      v1055 = cv1055;
      v1056 = cv1056;
      v1063 = cv1063;
      
      continue;
      
      }}
  const v1556 = v1055.board;
  let v1557;
  const v1558 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
  const v1559 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
  const v1560 = stdlib.digest(ctc3, [v1558]);
  const v1561 = stdlib.digest(ctc3, [v1559]);
  const v1562 = stdlib.digestEq(v1560, v1561);
  const v1564 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
  const v1566 = stdlib.digest(ctc3, [v1564]);
  const v1567 = stdlib.digestEq(v1560, v1566);
  const v1568 = v1562 ? v1567 : false;
  if (v1568) {
    v1557 = v1558;
    }
  else {
    const v1570 = '-';
    v1557 = v1570;
    }
  const v1571 = 'x';
  const v1572 = stdlib.digest(ctc3, [v1557]);
  const v1574 = stdlib.digest(ctc3, [v1571]);
  const v1575 = stdlib.digestEq(v1572, v1574);
  let v1576;
  const v1577 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
  const v1578 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
  const v1579 = stdlib.digest(ctc3, [v1577]);
  const v1580 = stdlib.digest(ctc3, [v1578]);
  const v1581 = stdlib.digestEq(v1579, v1580);
  const v1583 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
  const v1585 = stdlib.digest(ctc3, [v1583]);
  const v1586 = stdlib.digestEq(v1579, v1585);
  const v1587 = v1581 ? v1586 : false;
  if (v1587) {
    v1576 = v1577;
    }
  else {
    const v1589 = '-';
    v1576 = v1589;
    }
  const v1591 = stdlib.digest(ctc3, [v1576]);
  const v1594 = stdlib.digestEq(v1591, v1574);
  const v1595 = v1575 ? true : v1594;
  let v1596;
  const v1597 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
  const v1598 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
  const v1599 = stdlib.digest(ctc3, [v1597]);
  const v1600 = stdlib.digest(ctc3, [v1598]);
  const v1601 = stdlib.digestEq(v1599, v1600);
  const v1603 = v1556[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
  const v1605 = stdlib.digest(ctc3, [v1603]);
  const v1606 = stdlib.digestEq(v1599, v1605);
  const v1607 = v1601 ? v1606 : false;
  if (v1607) {
    v1596 = v1597;
    }
  else {
    const v1609 = '-';
    v1596 = v1609;
    }
  const v1611 = stdlib.digest(ctc3, [v1596]);
  const v1614 = stdlib.digestEq(v1611, v1574);
  const v1615 = v1595 ? true : v1614;
  let v1616;
  const v1621 = stdlib.digestEq(v1560, v1579);
  const v1626 = stdlib.digestEq(v1560, v1599);
  const v1627 = v1621 ? v1626 : false;
  if (v1627) {
    v1616 = v1558;
    }
  else {
    const v1629 = '-';
    v1616 = v1629;
    }
  const v1631 = stdlib.digest(ctc3, [v1616]);
  const v1634 = stdlib.digestEq(v1631, v1574);
  const v1635 = v1615 ? true : v1634;
  let v1636;
  const v1641 = stdlib.digestEq(v1561, v1580);
  const v1646 = stdlib.digestEq(v1561, v1600);
  const v1647 = v1641 ? v1646 : false;
  if (v1647) {
    v1636 = v1559;
    }
  else {
    const v1649 = '-';
    v1636 = v1649;
    }
  const v1651 = stdlib.digest(ctc3, [v1636]);
  const v1654 = stdlib.digestEq(v1651, v1574);
  const v1655 = v1635 ? true : v1654;
  let v1656;
  const v1661 = stdlib.digestEq(v1566, v1585);
  const v1666 = stdlib.digestEq(v1566, v1605);
  const v1667 = v1661 ? v1666 : false;
  if (v1667) {
    v1656 = v1564;
    }
  else {
    const v1669 = '-';
    v1656 = v1669;
    }
  const v1671 = stdlib.digest(ctc3, [v1656]);
  const v1674 = stdlib.digestEq(v1671, v1574);
  const v1675 = v1655 ? true : v1674;
  let v1676;
  const v1681 = stdlib.digestEq(v1560, v1580);
  const v1686 = stdlib.digestEq(v1560, v1605);
  const v1687 = v1681 ? true : v1686;
  if (v1687) {
    v1676 = v1558;
    }
  else {
    const v1689 = '-';
    v1676 = v1689;
    }
  const v1691 = stdlib.digest(ctc3, [v1676]);
  const v1694 = stdlib.digestEq(v1691, v1574);
  const v1695 = v1675 ? true : v1694;
  let v1696;
  const v1701 = stdlib.digestEq(v1566, v1580);
  const v1706 = stdlib.digestEq(v1566, v1599);
  const v1707 = v1701 ? true : v1706;
  if (v1707) {
    v1696 = v1564;
    }
  else {
    const v1709 = '-';
    v1696 = v1709;
    }
  const v1711 = stdlib.digest(ctc3, [v1696]);
  const v1714 = stdlib.digestEq(v1711, v1574);
  const v1715 = v1695 ? true : v1714;
  let v1716;
  if (v1568) {
    v1716 = v1558;
    }
  else {
    const v1729 = '-';
    v1716 = v1729;
    }
  const v1730 = 'o';
  const v1731 = stdlib.digest(ctc3, [v1716]);
  const v1733 = stdlib.digest(ctc3, [v1730]);
  const v1734 = stdlib.digestEq(v1731, v1733);
  let v1735;
  if (v1587) {
    v1735 = v1577;
    }
  else {
    const v1748 = '-';
    v1735 = v1748;
    }
  const v1750 = stdlib.digest(ctc3, [v1735]);
  const v1753 = stdlib.digestEq(v1750, v1733);
  const v1754 = v1734 ? true : v1753;
  let v1755;
  if (v1607) {
    v1755 = v1597;
    }
  else {
    const v1768 = '-';
    v1755 = v1768;
    }
  const v1770 = stdlib.digest(ctc3, [v1755]);
  const v1773 = stdlib.digestEq(v1770, v1733);
  const v1774 = v1754 ? true : v1773;
  let v1775;
  if (v1627) {
    v1775 = v1558;
    }
  else {
    const v1788 = '-';
    v1775 = v1788;
    }
  const v1790 = stdlib.digest(ctc3, [v1775]);
  const v1793 = stdlib.digestEq(v1790, v1733);
  const v1794 = v1774 ? true : v1793;
  let v1795;
  if (v1647) {
    v1795 = v1559;
    }
  else {
    const v1808 = '-';
    v1795 = v1808;
    }
  const v1810 = stdlib.digest(ctc3, [v1795]);
  const v1813 = stdlib.digestEq(v1810, v1733);
  const v1814 = v1794 ? true : v1813;
  let v1815;
  if (v1667) {
    v1815 = v1564;
    }
  else {
    const v1828 = '-';
    v1815 = v1828;
    }
  const v1830 = stdlib.digest(ctc3, [v1815]);
  const v1833 = stdlib.digestEq(v1830, v1733);
  const v1834 = v1814 ? true : v1833;
  let v1835;
  if (v1687) {
    v1835 = v1558;
    }
  else {
    const v1848 = '-';
    v1835 = v1848;
    }
  const v1850 = stdlib.digest(ctc3, [v1835]);
  const v1853 = stdlib.digestEq(v1850, v1733);
  const v1854 = v1834 ? true : v1853;
  let v1855;
  if (v1707) {
    v1855 = v1564;
    }
  else {
    const v1868 = '-';
    v1855 = v1868;
    }
  const v1870 = stdlib.digest(ctc3, [v1855]);
  const v1873 = stdlib.digestEq(v1870, v1733);
  const v1874 = v1854 ? true : v1873;
  const v1875 = v1874 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
  const v1876 = v1715 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v1875;
  ;
  stdlib.protect(ctc1, await interact.endsWith(v1055), {
    at: './index.rsh:191:22:application',
    fs: ['at ./index.rsh:190:7:application call to [unknown function] (defined at: ./index.rsh:190:19:function exp)'],
    msg: 'endsWith',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.seeOutcome(v1876), {
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
                "name": "v1022",
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
                "name": "v1022",
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
                "name": "v1444",
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
                "name": "v1518",
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
                "name": "v1444",
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
                "name": "v1518",
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
  Bytecode: `0x6080604052604051620024ea380380620024ea8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b61223c80620002ae6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a209ad4e146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004611df1565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004611df1565b6102dd565b3480156100ca57600080fd5b506100d36105a5565b60405161007a929190611e14565b61005d6100ef366004611df1565b610642565b61010460016000541460096108fa565b61011e8135158061011757506001548235145b600a6108fa565b60008080556002805461013090611e71565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90611e71565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190611f6b565b90506101cb611711565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516101fc929190611fb2565b60405180910390a16102158260200151341460086108fa565b8051600160fd1b9052805160208083018051929092528251825182015282518251604090810191909152835183516060015283518351608001528351835160a001528351835160c001528351835160e0015283518351610100015291519183018051929092529051600191015261028a611745565b825181516001600160a01b03909116905280513360209182015260408301518183018051919091525143908201528301516102c59080612016565b6020820151604001526102d781610923565b50505050565b6102ed60056000541460156108fa565b6103078135158061030057506001548235145b60166108fa565b60008080556002805461031990611e71565b80601f016020809104026020016040519081016040528092919081815260200182805461034590611e71565b80156103925780601f1061036757610100808354040283529160200191610392565b820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b50505050508060200190518101906103aa9190612039565b90506103b461176e565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516103e5929190612136565b60405180910390a16103f9341560116108fa565b6020820151610414906001600160a01b0316331460126108fa565b610426600960208501351060136108fa565b8051600f60fb1b905260408201515160208401356009811061044a5761044a611fea565b602002015160405160200161045f919061215d565b60408051601f1981840301815291815281516020928301208383015282519051610489920161215d565b6040516020818303038152906040528051906020012060001c816020015114156104b957600160408201526104fb565b606081018051606f60f81b9052516040516104d7919060200161215d565b60408051601f19818403018152918152815160209283012091830151909114908201525b610518816040015161050e576001610511565b60005b60146108fa565b608081018051606f60f81b9052604083015151905161053d919060208601359061169d565b60a08201805191909152516001602090910152610558611745565b825181516001600160a01b039182169052602080850151835192169181019190915260a083015181830180519190915280514392019190915260608401519051604001526102d781610923565b6000606060005460028080546105ba90611e71565b80601f01602080910402602001604051908101604052809291908181526020018280546105e690611e71565b80156106335780601f1061060857610100808354040283529160200191610633565b820191906000526020600020905b81548152906001019060200180831161061657829003601f168201915b50505050509050915091509091565b610652600460005414600f6108fa565b61066c8135158061066557506001548235145b60106108fa565b60008080556002805461067e90611e71565b80601f01602080910402602001604051908101604052809291908181526020018280546106aa90611e71565b80156106f75780601f106106cc576101008083540402835291602001916106f7565b820191906000526020600020905b8154815290600101906020018083116106da57829003601f168201915b505050505080602001905181019061070f9190612039565b90506107196117b5565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc1338460405161074a929190612136565b60405180910390a161075e3415600b6108fa565b8151610776906001600160a01b03163314600c6108fa565b6107886009602085013510600d6108fa565b8051600f60fb1b90526040820151516020840135600981106107ac576107ac611fea565b60200201516040516020016107c1919061215d565b60408051601f19818403018152918152815160209283012083830152825190516107eb920161215d565b6040516020818303038152906040528051906020012060001c8160200151141561081b576001604082015261085d565b606081018051606f60f81b905251604051610839919060200161215d565b60408051601f19818403018152918152815160209283012091830151909114908201525b61087a8160400151610870576001610873565b60005b600e6108fa565b6040820151518151610892919060208601359061169d565b608082018051919091525160006020909101526108ad611745565b825181516001600160a01b0391821690526020808501518351921691810191909152608083015181830180519190915280514392019190915260608401519051604001526102d781610923565b8161091f5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b61092b6117ed565b6001602082015260005b6009811015610a465760208301515151816009811061095657610956611fea565b6020908102919091015160408085019182526060850151600f60fb1b905290519051610982920161215d565b60408051601f198184030181529190528051602091820120608084015260a0830151606f60f81b90528201516109b9576000610a2d565b81606001516040516020016109ce919061215d565b6040516020818303038152906040528051906020012060001c826080015114610a2a578160a00151604051602001610a06919061215d565b6040516020818303038152906040528051906020012060001c826080015114610a2d565b60015b1515602083015280610a3e81612171565b915050610935565b506020818101511515825282810151515151604051610a65920161215d565b60408051808303601f19018152918152815160209283012060e08401528382015151518201519051610a97920161215d565b60408051808303601f1901815291815281516020928301206101008401528382015151518101519051610aca920161215d565b60408051601f19818403018152919052805160209091012061012082015261010081015160e082015114610aff576000610b0c565b8061012001518160e00151145b158015610140830152610b2b57602082015151515160c0820152610b40565b61016081018051602d60f81b90525160c08201525b61018081018051600f60fb1b905251604051610b5f919060200161215d565b60408051808303601f1901815291815281516020928301206101a0840152838201515151606001519051610b93920161215d565b60408051808303601f1901815291815281516020928301206101e0840152838201515151608001519051610bc7920161215d565b60408051808303601f19018152918152815160209283012061020084015283820151515160a001519051610bfb920161215d565b60408051601f1981840301815291905280516020909101206102208201526102008101516101e082015114610c31576000610c3f565b806102200151816101e00151145b158015610240830152610c625760208201515151606001516101c0820152610c78565b61026081018051602d60f81b9052516101c08201525b602082810151515160c00151604051610c91920161215d565b60408051808303601f1901815291815281516020928301206102a084015283820151515160e001519051610cc5920161215d565b60408051808303601f1901815291815281516020928301206102c084015283820151515161010001519051610cfa920161215d565b60408051601f1981840301815291905280516020909101206102e08201526102c08101516102a082015114610d30576000610d3e565b806102e00151816102a00151145b158015610300830152610d61576020820151515160c00151610280820152610d77565b61032081018051602d60f81b9052516102808201525b80610140015115610d95576020820151515151610340820152610dab565b61036081018051602d60f81b9052516103408201525b61038081018051606f60f81b905251604051610dca919060200161215d565b60408051601f1981840301815291905280516020909101206103a082015261024081015115610e095760208201515151606001516103c0820152610e1f565b6103e081018051602d60f81b9052516103c08201525b80610300015115610e40576020820151515160c00151610400820152610e56565b61042081018051602d60f81b9052516104008201525b806101e001518160e0015114610e6d576000610e7a565b806102a001518160e00151145b158015610460830152610e9a576020820151515151610440820152610eb0565b61048081018051602d60f81b9052516104408201525b80610200015181610100015114610ec8576000610ed6565b806102c00151816101000151145b1580156104c0830152610ef857602082810151515101516104a0820152610f0e565b6104e081018051602d60f81b9052516104a08201525b80610220015181610120015114610f26576000610f34565b806102e00151816101200151145b158015610520830152610f57576020820151515160400151610500820152610f6d565b61054081018051602d60f81b9052516105008201525b80610460015115610f8b576020820151515151610560820152610fa1565b61058081018051602d60f81b9052516105608201525b806104c0015115610fc157602082810151515101516105a0820152610fd7565b6105c081018051602d60f81b9052516105a08201525b80610520015115610ff85760208201515151604001516105e082015261100e565b61060081018051602d60f81b9052516105e08201525b8061020001518160e001511461102f57806102e001518160e0015114611032565b60015b158015610640830152611052576020820151515151610620820152611068565b61066081018051602d60f81b9052516106208201525b806101a001518160c00151604051602001611083919061215d565b6040516020818303038152906040528051906020012060001c146110dc57806101a00151816101c001516040516020016110bd919061215d565b6040516020818303038152906040528051906020012060001c146110df565b60015b61111e57806101a001518161028001516040516020016110ff919061215d565b6040516020818303038152906040528051906020012060001c14611121565b60015b61116057806103a00151816103400151604051602001611141919061215d565b6040516020818303038152906040528051906020012060001c14611163565b60015b6111a257806103a00151816103c00151604051602001611183919061215d565b6040516020818303038152906040528051906020012060001c146111a5565b60015b6111e457806103a001518161040001516040516020016111c5919061215d565b6040516020818303038152906040528051906020012060001c146111e7565b60015b61122657806101a00151816104400151604051602001611207919061215d565b6040516020818303038152906040528051906020012060001c14611229565b60015b61126857806101a00151816104a00151604051602001611249919061215d565b6040516020818303038152906040528051906020012060001c1461126b565b60015b6112aa57806101a0015181610500015160405160200161128b919061215d565b6040516020818303038152906040528051906020012060001c146112ad565b60015b6112ec57806103a001518161056001516040516020016112cd919061215d565b6040516020818303038152906040528051906020012060001c146112ef565b60015b61132e57806103a00151816105a0015160405160200161130f919061215d565b6040516020818303038152906040528051906020012060001c14611331565b60015b61137057806103a00151816105e00151604051602001611351919061215d565b6040516020818303038152906040528051906020012060001c14611373565b60015b6113b257806101a00151816106200151604051602001611393919061215d565b6040516020818303038152906040528051906020012060001c146113b5565b60015b1515610680820152610640810151156113db5760208201515151516106a08201526113f1565b6106c081018051602d60f81b9052516106a08201525b8061020001518161012001511461141457806102a0015181610120015114611417565b60015b15801561070083015261143a5760208201515151604001516106e0820152611450565b61072081018051602d60f81b9052516106e08201525b80610700015115611471576020820151515160400151610740820152611487565b61076081018051602d60f81b9052516107408201525b805161155d578061068001516114d257806103a00151816106a001516040516020016114b3919061215d565b6040516020818303038152906040528051906020012060001c146114d5565b60015b61151457806101a00151816106e001516040516020016114f5919061215d565b6040516020818303038152906040528051906020012060001c14611517565b60015b61155657806103a00151816107400151604051602001611537919061215d565b6040516020818303038152906040528051906020012060001c14611560565b6001611560565b60015b156115bf57815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156115a8573d6000803e3d6000fd5b506000808055600181905561091f90600290611c5b565b60208083015151015115611647576115d5611c98565b8251516001600160a01b03908116825283516020908101519091168183015280840180515160408085019190915290518101516060840152600460005543600155516116239183910161218c565b604051602081830303815290604052600290805190602001906102d7929190611cc4565b61164f611c98565b8251516001600160a01b03908116825283516020908101519091168183015280840180515160408085019190915290518101516060840152600560005543600155516116239183910161218c565b6116a5611d48565b60005b60098110156116f1578481600981106116c3576116c3611fea565b60200201518282600981106116da576116da611fea565b6020020152806116e981612171565b9150506116a8565b508181846009811061170557611705611fea565b60200201529392505050565b6040805160808101909152600060608201908152815260208101611733611d48565b8152602001611740611d7d565b905290565b604080516080810182526000918101828152606082019290925290815260208101611740611d9d565b6040805160e081018252600060c082018181528252602080830182905282840182905283518082018552828152606084015283519081019093528252906080820190611733565b6040805160c081018252600060a082018181528252602080830182905282840182905283519081019093528252906060820190611733565b60408051610780810182526000808252602082015290810161181a60408051602081019091526000815290565b815260200161183460408051602081019091526000815290565b81526020016000815260200161185560408051602081019091526000815290565b815260200161186f60408051602081019091526000815290565b81526020016000815260200160008152602001600081526020016000151581526020016118a760408051602081019091526000815290565b81526020016118c160408051602081019091526000815290565b8152602001600081526020016118e260408051602081019091526000815290565b815260200160008152602001600081526020016000815260200160001515815260200161191a60408051602081019091526000815290565b815260200161193460408051602081019091526000815290565b815260200160008152602001600081526020016000815260200160001515815260200161196c60408051602081019091526000815290565b815260200161198660408051602081019091526000815290565b81526020016119a060408051602081019091526000815290565b81526020016119ba60408051602081019091526000815290565b8152602001600081526020016119db60408051602081019091526000815290565b81526020016119f560408051602081019091526000815290565b8152602001611a0f60408051602081019091526000815290565b8152602001611a2960408051602081019091526000815290565b8152602001611a4360408051602081019091526000815290565b815260006020820152604001611a6460408051602081019091526000815290565b8152602001611a7e60408051602081019091526000815290565b815260006020820152604001611a9f60408051602081019091526000815290565b8152602001611ab960408051602081019091526000815290565b815260006020820152604001611ada60408051602081019091526000815290565b8152602001611af460408051602081019091526000815290565b8152602001611b0e60408051602081019091526000815290565b8152602001611b2860408051602081019091526000815290565b8152602001611b4260408051602081019091526000815290565b8152602001611b5c60408051602081019091526000815290565b8152602001611b7660408051602081019091526000815290565b8152602001611b9060408051602081019091526000815290565b815260006020820152604001611bb160408051602081019091526000815290565b815260006020820152604001611bd260408051602081019091526000815290565b8152602001611bec60408051602081019091526000815290565b8152602001611c0660408051602081019091526000815290565b815260006020820152604001611c2760408051602081019091526000815290565b8152602001611c4160408051602081019091526000815290565b815260200161174060408051602081019091526000815290565b508054611c6790611e71565b6000825580601f10611c77575050565b601f016020900490600052602060002090810190611c959190611dc4565b50565b6040805160808101825260008082526020820152908101611cb7611d7d565b8152602001600081525090565b828054611cd090611e71565b90600052602060002090601f016020900481019282611cf25760008555611d38565b82601f10611d0b57805160ff1916838001178555611d38565b82800160010185558215611d38579182015b82811115611d38578251825591602001919060010190611d1d565b50611d44929150611dc4565b5090565b6040518061012001604052806009905b604080516020810190915260008152815260200190600190039081611d585790505090565b6040518060400160405280611d90611d48565b8152600060209091015290565b6040518060600160405280611db0611d7d565b815260200160008152602001600081525090565b5b80821115611d445760008155600101611dc5565b600060408284031215611deb57600080fd5b50919050565b600060408284031215611e0357600080fd5b611e0d8383611dd9565b9392505050565b82815260006020604081840152835180604085015260005b81811015611e4857858101830151858201606001528201611e2c565b81811115611e5a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680611e8557607f821691505b60208210811415611deb57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611edf57611edf611ea6565b60405290565b6040516080810167ffffffffffffffff81118282101715611edf57611edf611ea6565b604051610120810167ffffffffffffffff81118282101715611edf57611edf611ea6565b6040516020810167ffffffffffffffff81118282101715611edf57611edf611ea6565b80516001600160a01b0381168114611f6657600080fd5b919050565b600060408284031215611f7d57600080fd5b611f85611ebc565b611f8e83611f4f565b8152602083015160208201528091505092915050565b8015158114611c9557600080fd5b6001600160a01b038316815281356020808301919091526060820190830135611fda81611fa4565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561202957612029612000565b500190565b8051611f6681611fa4565b60008183036101a081121561204d57600080fd5b612055611ee5565b61205e84611f4f565b8152602061206d818601611f4f565b82820152610140603f198401121561208457600080fd5b61208c611ebc565b925085605f86011261209d57600080fd5b6120a5611f08565b806101608701888111156120b857600080fd5b604088015b818110156121055784818b0312156120d55760008081fd5b6120dd611f2c565b81516001600160f81b0319811681146120f65760008081fd5b815284529284019284016120bd565b508186526121128161202e565b84870152505050508160408201526101808401516060820152809250505092915050565b6001600160a01b038316815260608101611e0d602083018480358252602090810135910152565b90516001600160f81b031916815260200190565b600060001982141561218557612185612000565b5060010190565b81516001600160a01b0390811682526020808401519091168183015260408084015180516101a0850193919260009086015b60098210156121e8578251516001600160f81b0319168152918301916001919091019083016121be565b5050500151151561016083015260609290920151610180909101529056fea26469706673582212205cb7ed3102cce375f4177e7861dc139e6ac56f84f8dd2fca053be11590fcfae764736f6c634300080c0033`,
  BytecodeLen: 9450,
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
