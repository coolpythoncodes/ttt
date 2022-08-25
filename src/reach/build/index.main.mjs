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
    oCost: ctc1,
    playerTurn: ctc4,
    xCost: ctc1
    });
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [ctc0, ctc1, ctc1, ctc0, ctc5, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc5, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Object({
    board: ctc6,
    oCost: ctc0,
    playerTurn: ctc1,
    xCost: ctc0
    });
  
  
  const v1062 = stdlib.protect(ctc0, interact.budget, 'for Alice\'s interact field budget');
  const v1063 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1062, v1063],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:140:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:140:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1068, v1069], secs: v1071, time: v1070, didSend: v65, from: v1067 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v1068, v1069], secs: v1071, time: v1070, didSend: v65, from: v1067 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1076], secs: v1078, time: v1077, didSend: v74, from: v1075 } = txn2;
  ;
  const v1079 = ' ';
  const v1088 = [v1079, v1079, v1079, v1079, v1079, v1079, v1079, v1079, v1079];
  const v1089 = {
    board: v1088,
    oCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    playerTurn: true,
    xCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v1101 = v1089;
  let v1102 = v1077;
  let v1109 = stdlib.checkedBigNumberify('./index.rsh:127:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1112 = v1101.board;
    let v1113;
    const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
    const v1115 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
    const v1116 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
    const v1117 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
    const v1118 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
    const v1119 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
    const v1120 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
    const v1121 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
    const v1122 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
    const v1123 = stdlib.digest(ctc3, [v1114]);
    const v1124 = stdlib.digest(ctc3, [v1115]);
    const v1125 = stdlib.digestEq(v1123, v1124);
    const v1127 = stdlib.digest(ctc3, [v1116]);
    const v1128 = stdlib.digestEq(v1123, v1127);
    const v1129 = v1125 ? v1128 : false;
    const v1130 = '-';
    const v1131 = v1129 ? v1114 : v1130;
    const v1132 = stdlib.digest(ctc3, [v1117]);
    const v1133 = stdlib.digest(ctc3, [v1118]);
    const v1134 = stdlib.digestEq(v1132, v1133);
    const v1136 = stdlib.digest(ctc3, [v1119]);
    const v1137 = stdlib.digestEq(v1132, v1136);
    const v1138 = v1134 ? v1137 : false;
    const v1140 = v1138 ? v1117 : v1130;
    const v1141 = stdlib.digest(ctc3, [v1120]);
    const v1142 = stdlib.digest(ctc3, [v1121]);
    const v1143 = stdlib.digestEq(v1141, v1142);
    const v1145 = stdlib.digest(ctc3, [v1122]);
    const v1146 = stdlib.digestEq(v1141, v1145);
    const v1147 = v1143 ? v1146 : false;
    const v1149 = v1147 ? v1120 : v1130;
    const v1152 = stdlib.digestEq(v1123, v1132);
    const v1155 = stdlib.digestEq(v1123, v1141);
    const v1156 = v1152 ? v1155 : false;
    const v1158 = v1156 ? v1114 : v1130;
    const v1161 = stdlib.digestEq(v1124, v1133);
    const v1164 = stdlib.digestEq(v1124, v1142);
    const v1165 = v1161 ? v1164 : false;
    const v1167 = v1165 ? v1115 : v1130;
    const v1170 = stdlib.digestEq(v1127, v1136);
    const v1173 = stdlib.digestEq(v1127, v1145);
    const v1174 = v1170 ? v1173 : false;
    const v1176 = v1174 ? v1116 : v1130;
    const v1179 = stdlib.digestEq(v1123, v1133);
    const v1182 = stdlib.digestEq(v1123, v1145);
    const v1183 = v1179 ? v1182 : false;
    const v1185 = v1183 ? v1114 : v1130;
    const v1188 = stdlib.digestEq(v1127, v1133);
    const v1191 = stdlib.digestEq(v1127, v1141);
    const v1192 = v1188 ? v1191 : false;
    const v1194 = v1192 ? v1116 : v1130;
    const v1195 = 'x';
    const v1196 = stdlib.digest(ctc3, [v1131]);
    const v1198 = stdlib.digest(ctc3, [v1195]);
    const v1199 = stdlib.digestEq(v1196, v1198);
    const v1201 = stdlib.digest(ctc3, [v1140]);
    const v1204 = stdlib.digestEq(v1201, v1198);
    const v1205 = v1199 ? true : v1204;
    const v1207 = stdlib.digest(ctc3, [v1149]);
    const v1210 = stdlib.digestEq(v1207, v1198);
    const v1211 = v1205 ? true : v1210;
    const v1213 = stdlib.digest(ctc3, [v1158]);
    const v1216 = stdlib.digestEq(v1213, v1198);
    const v1217 = v1211 ? true : v1216;
    const v1219 = stdlib.digest(ctc3, [v1167]);
    const v1222 = stdlib.digestEq(v1219, v1198);
    const v1223 = v1217 ? true : v1222;
    const v1225 = stdlib.digest(ctc3, [v1176]);
    const v1228 = stdlib.digestEq(v1225, v1198);
    const v1229 = v1223 ? true : v1228;
    const v1231 = stdlib.digest(ctc3, [v1185]);
    const v1234 = stdlib.digestEq(v1231, v1198);
    const v1235 = v1229 ? true : v1234;
    const v1237 = stdlib.digest(ctc3, [v1194]);
    const v1240 = stdlib.digestEq(v1237, v1198);
    const v1241 = v1235 ? true : v1240;
    if (v1241) {
      v1113 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1242 = 'o';
      const v1245 = stdlib.digest(ctc3, [v1242]);
      const v1246 = stdlib.digestEq(v1196, v1245);
      const v1251 = stdlib.digestEq(v1201, v1245);
      const v1252 = v1246 ? true : v1251;
      const v1257 = stdlib.digestEq(v1207, v1245);
      const v1258 = v1252 ? true : v1257;
      const v1263 = stdlib.digestEq(v1213, v1245);
      const v1264 = v1258 ? true : v1263;
      const v1269 = stdlib.digestEq(v1219, v1245);
      const v1270 = v1264 ? true : v1269;
      const v1275 = stdlib.digestEq(v1225, v1245);
      const v1276 = v1270 ? true : v1275;
      const v1281 = stdlib.digestEq(v1231, v1245);
      const v1282 = v1276 ? true : v1281;
      const v1287 = stdlib.digestEq(v1237, v1245);
      const v1288 = v1282 ? true : v1287;
      if (v1288) {
        v1113 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
        }
      else {
        v1113 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
        }
      }
    const v1290 = await stdlib.Array_asyncReduce([v1112], true, async([v1292], v1291, v1293) => {
      const v1295 = stdlib.digest(ctc3, [v1292]);
      const v1298 = stdlib.digestEq(v1295, v1198);
      const v1299 = 'o';
      const v1302 = stdlib.digest(ctc3, [v1299]);
      const v1303 = stdlib.digestEq(v1295, v1302);
      const v1304 = v1298 ? true : v1303;
      const v1305 = v1291 ? v1304 : false;
      
      return v1305;})
    const v1306 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:52:decimal', stdlib.UInt_max, '1'));
    const v1307 = v1290 ? true : v1306;
    const v1308 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:70:decimal', stdlib.UInt_max, '0'));
    const v1309 = v1307 ? true : v1308;
    const v1311 = v1101.xCost;
    const v1312 = v1101.oCost;
    const v1313 = stdlib.safeAdd(v1311, v1312);
    const v1314 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:155:64:decimal', stdlib.UInt_max, '2'), v1068);
    const v1315 = stdlib.le(v1313, v1314);
    const v1316 = v1309 ? false : v1315;
    
    return v1316;})()) {
    const v1317 = v1101.playerTurn;
    if (v1317) {
      const v1325 = stdlib.safeAdd(v1102, v1069);
      const v1329 = v1101.board;
      const v1342 = stdlib.protect(ctc0, await interact.getSquareSelected(v1101), {
        at: './index.rsh:70:43:application',
        fs: ['at ./index.rsh:160:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Alice'
        });
      const v1343 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1342);
      const v1344 = stdlib.lt(v1342, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1345 = v1343 ? v1344 : false;
      stdlib.assert(v1345, {
        at: './index.rsh:71:9:application',
        fs: ['at ./index.rsh:160:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1348 = v1329[v1342];
      const v1349 = 'x';
      const v1350 = stdlib.digest(ctc3, [v1348]);
      const v1352 = stdlib.digest(ctc3, [v1349]);
      const v1353 = stdlib.digestEq(v1350, v1352);
      const v1354 = 'o';
      const v1357 = stdlib.digest(ctc3, [v1354]);
      const v1358 = stdlib.digestEq(v1350, v1357);
      const v1359 = v1353 ? true : v1358;
      const v1360 = v1359 ? false : true;
      stdlib.assert(v1360, {
        at: './index.rsh:72:9:application',
        fs: ['at ./index.rsh:160:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:159:13:application call to [unknown function] (defined at: ./index.rsh:159:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const v1361 = stdlib.safeDiv(v1068, stdlib.checkedBigNumberify('./index.rsh:161:40:decimal', stdlib.UInt_max, '16000000'));
      const v1362 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:162:46:decimal', stdlib.UInt_max, '3000000'), v1361);
      const v1363 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:162:71:decimal', stdlib.UInt_max, '2000000'), v1361);
      const v1366 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:162:146:decimal', stdlib.UInt_max, '4000000'), v1361);
      const v1371 = [v1362, v1363, v1362, v1363, v1366, v1363, v1362, v1363, v1362];
      const v1373 = v1371[v1342];
      
      const txn3 = await (ctc.sendrecv({
        args: [v1067, v1068, v1069, v1075, v1101, v1109, v1325, v1342, v1373],
        evt_cnt: 2,
        funcNum: 3,
        lct: v1102,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [v1373, []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1375, v1376], secs: v1378, time: v1377, didSend: v376, from: v1374 } = txn3;
          
          const v1380 = stdlib.safeAdd(v1109, v1376);
          sim_r.txns.push({
            amt: v1376,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1385 = v1101.board;
          const v1388 = 'x';
          const v1401 = stdlib.safeDiv(v1068, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
          const v1402 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:40:decimal', stdlib.UInt_max, '3000000'), v1401);
          const v1403 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:65:decimal', stdlib.UInt_max, '2000000'), v1401);
          const v1406 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:140:decimal', stdlib.UInt_max, '4000000'), v1401);
          const v1416 = stdlib.Array_set(v1385, v1375, v1388);
          const v1422 = v1101.xCost;
          const v1423 = [v1402, v1403, v1402, v1403, v1406, v1403, v1402, v1403, v1402];
          const v1425 = v1423[v1375];
          const v1426 = stdlib.safeAdd(v1422, v1425);
          const v1429 = v1101.oCost;
          const v1435 = {
            board: v1416,
            oCost: v1429,
            playerTurn: false,
            xCost: v1426
            };
          
          const cv1101 = v1435;
          const cv1102 = v1377;
          const cv1109 = v1380;
          
          await (async () => {
            const v1101 = cv1101;
            const v1102 = cv1102;
            const v1109 = cv1109;
            
            if (await (async () => {
              const v1112 = v1101.board;
              let v1113;
              const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
              const v1115 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
              const v1116 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
              const v1117 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
              const v1118 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
              const v1119 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
              const v1120 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
              const v1121 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
              const v1122 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
              const v1123 = stdlib.digest(ctc3, [v1114]);
              const v1124 = stdlib.digest(ctc3, [v1115]);
              const v1125 = stdlib.digestEq(v1123, v1124);
              const v1127 = stdlib.digest(ctc3, [v1116]);
              const v1128 = stdlib.digestEq(v1123, v1127);
              const v1129 = v1125 ? v1128 : false;
              const v1130 = '-';
              const v1131 = v1129 ? v1114 : v1130;
              const v1132 = stdlib.digest(ctc3, [v1117]);
              const v1133 = stdlib.digest(ctc3, [v1118]);
              const v1134 = stdlib.digestEq(v1132, v1133);
              const v1136 = stdlib.digest(ctc3, [v1119]);
              const v1137 = stdlib.digestEq(v1132, v1136);
              const v1138 = v1134 ? v1137 : false;
              const v1140 = v1138 ? v1117 : v1130;
              const v1141 = stdlib.digest(ctc3, [v1120]);
              const v1142 = stdlib.digest(ctc3, [v1121]);
              const v1143 = stdlib.digestEq(v1141, v1142);
              const v1145 = stdlib.digest(ctc3, [v1122]);
              const v1146 = stdlib.digestEq(v1141, v1145);
              const v1147 = v1143 ? v1146 : false;
              const v1149 = v1147 ? v1120 : v1130;
              const v1152 = stdlib.digestEq(v1123, v1132);
              const v1155 = stdlib.digestEq(v1123, v1141);
              const v1156 = v1152 ? v1155 : false;
              const v1158 = v1156 ? v1114 : v1130;
              const v1161 = stdlib.digestEq(v1124, v1133);
              const v1164 = stdlib.digestEq(v1124, v1142);
              const v1165 = v1161 ? v1164 : false;
              const v1167 = v1165 ? v1115 : v1130;
              const v1170 = stdlib.digestEq(v1127, v1136);
              const v1173 = stdlib.digestEq(v1127, v1145);
              const v1174 = v1170 ? v1173 : false;
              const v1176 = v1174 ? v1116 : v1130;
              const v1179 = stdlib.digestEq(v1123, v1133);
              const v1182 = stdlib.digestEq(v1123, v1145);
              const v1183 = v1179 ? v1182 : false;
              const v1185 = v1183 ? v1114 : v1130;
              const v1188 = stdlib.digestEq(v1127, v1133);
              const v1191 = stdlib.digestEq(v1127, v1141);
              const v1192 = v1188 ? v1191 : false;
              const v1194 = v1192 ? v1116 : v1130;
              const v1195 = 'x';
              const v1196 = stdlib.digest(ctc3, [v1131]);
              const v1198 = stdlib.digest(ctc3, [v1195]);
              const v1199 = stdlib.digestEq(v1196, v1198);
              const v1201 = stdlib.digest(ctc3, [v1140]);
              const v1204 = stdlib.digestEq(v1201, v1198);
              const v1205 = v1199 ? true : v1204;
              const v1207 = stdlib.digest(ctc3, [v1149]);
              const v1210 = stdlib.digestEq(v1207, v1198);
              const v1211 = v1205 ? true : v1210;
              const v1213 = stdlib.digest(ctc3, [v1158]);
              const v1216 = stdlib.digestEq(v1213, v1198);
              const v1217 = v1211 ? true : v1216;
              const v1219 = stdlib.digest(ctc3, [v1167]);
              const v1222 = stdlib.digestEq(v1219, v1198);
              const v1223 = v1217 ? true : v1222;
              const v1225 = stdlib.digest(ctc3, [v1176]);
              const v1228 = stdlib.digestEq(v1225, v1198);
              const v1229 = v1223 ? true : v1228;
              const v1231 = stdlib.digest(ctc3, [v1185]);
              const v1234 = stdlib.digestEq(v1231, v1198);
              const v1235 = v1229 ? true : v1234;
              const v1237 = stdlib.digest(ctc3, [v1194]);
              const v1240 = stdlib.digestEq(v1237, v1198);
              const v1241 = v1235 ? true : v1240;
              if (v1241) {
                v1113 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1242 = 'o';
                const v1245 = stdlib.digest(ctc3, [v1242]);
                const v1246 = stdlib.digestEq(v1196, v1245);
                const v1251 = stdlib.digestEq(v1201, v1245);
                const v1252 = v1246 ? true : v1251;
                const v1257 = stdlib.digestEq(v1207, v1245);
                const v1258 = v1252 ? true : v1257;
                const v1263 = stdlib.digestEq(v1213, v1245);
                const v1264 = v1258 ? true : v1263;
                const v1269 = stdlib.digestEq(v1219, v1245);
                const v1270 = v1264 ? true : v1269;
                const v1275 = stdlib.digestEq(v1225, v1245);
                const v1276 = v1270 ? true : v1275;
                const v1281 = stdlib.digestEq(v1231, v1245);
                const v1282 = v1276 ? true : v1281;
                const v1287 = stdlib.digestEq(v1237, v1245);
                const v1288 = v1282 ? true : v1287;
                if (v1288) {
                  v1113 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  v1113 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
                  }
                }
              const v1290 = await stdlib.Array_asyncReduce([v1112], true, async([v1292], v1291, v1293) => {
                const v1295 = stdlib.digest(ctc3, [v1292]);
                const v1298 = stdlib.digestEq(v1295, v1198);
                const v1299 = 'o';
                const v1302 = stdlib.digest(ctc3, [v1299]);
                const v1303 = stdlib.digestEq(v1295, v1302);
                const v1304 = v1298 ? true : v1303;
                const v1305 = v1291 ? v1304 : false;
                
                return v1305;})
              const v1306 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:52:decimal', stdlib.UInt_max, '1'));
              const v1307 = v1290 ? true : v1306;
              const v1308 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:70:decimal', stdlib.UInt_max, '0'));
              const v1309 = v1307 ? true : v1308;
              const v1311 = v1101.xCost;
              const v1312 = v1101.oCost;
              const v1313 = stdlib.safeAdd(v1311, v1312);
              const v1314 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:155:64:decimal', stdlib.UInt_max, '2'), v1068);
              const v1315 = stdlib.le(v1313, v1314);
              const v1316 = v1309 ? false : v1315;
              
              return v1316;})()) {
              const v1317 = v1101.playerTurn;
              if (v1317) {
                const v1325 = stdlib.safeAdd(v1102, v1069);
                sim_r.isHalt = false;
                }
              else {
                const v1526 = stdlib.safeAdd(v1102, v1069);
                sim_r.isHalt = false;
                }}
            else {
              const v1721 = v1101.board;
              let v1722;
              const v1723 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
              const v1724 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
              const v1725 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
              const v1726 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
              const v1727 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
              const v1728 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
              const v1729 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
              const v1730 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
              const v1731 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
              const v1732 = stdlib.digest(ctc3, [v1723]);
              const v1733 = stdlib.digest(ctc3, [v1724]);
              const v1734 = stdlib.digestEq(v1732, v1733);
              const v1736 = stdlib.digest(ctc3, [v1725]);
              const v1737 = stdlib.digestEq(v1732, v1736);
              const v1738 = v1734 ? v1737 : false;
              const v1739 = '-';
              const v1740 = v1738 ? v1723 : v1739;
              const v1741 = stdlib.digest(ctc3, [v1726]);
              const v1742 = stdlib.digest(ctc3, [v1727]);
              const v1743 = stdlib.digestEq(v1741, v1742);
              const v1745 = stdlib.digest(ctc3, [v1728]);
              const v1746 = stdlib.digestEq(v1741, v1745);
              const v1747 = v1743 ? v1746 : false;
              const v1749 = v1747 ? v1726 : v1739;
              const v1750 = stdlib.digest(ctc3, [v1729]);
              const v1751 = stdlib.digest(ctc3, [v1730]);
              const v1752 = stdlib.digestEq(v1750, v1751);
              const v1754 = stdlib.digest(ctc3, [v1731]);
              const v1755 = stdlib.digestEq(v1750, v1754);
              const v1756 = v1752 ? v1755 : false;
              const v1758 = v1756 ? v1729 : v1739;
              const v1761 = stdlib.digestEq(v1732, v1741);
              const v1764 = stdlib.digestEq(v1732, v1750);
              const v1765 = v1761 ? v1764 : false;
              const v1767 = v1765 ? v1723 : v1739;
              const v1770 = stdlib.digestEq(v1733, v1742);
              const v1773 = stdlib.digestEq(v1733, v1751);
              const v1774 = v1770 ? v1773 : false;
              const v1776 = v1774 ? v1724 : v1739;
              const v1779 = stdlib.digestEq(v1736, v1745);
              const v1782 = stdlib.digestEq(v1736, v1754);
              const v1783 = v1779 ? v1782 : false;
              const v1785 = v1783 ? v1725 : v1739;
              const v1788 = stdlib.digestEq(v1732, v1742);
              const v1791 = stdlib.digestEq(v1732, v1754);
              const v1792 = v1788 ? v1791 : false;
              const v1794 = v1792 ? v1723 : v1739;
              const v1797 = stdlib.digestEq(v1736, v1742);
              const v1800 = stdlib.digestEq(v1736, v1750);
              const v1801 = v1797 ? v1800 : false;
              const v1803 = v1801 ? v1725 : v1739;
              const v1804 = 'x';
              const v1805 = stdlib.digest(ctc3, [v1740]);
              const v1807 = stdlib.digest(ctc3, [v1804]);
              const v1808 = stdlib.digestEq(v1805, v1807);
              const v1810 = stdlib.digest(ctc3, [v1749]);
              const v1813 = stdlib.digestEq(v1810, v1807);
              const v1814 = v1808 ? true : v1813;
              const v1816 = stdlib.digest(ctc3, [v1758]);
              const v1819 = stdlib.digestEq(v1816, v1807);
              const v1820 = v1814 ? true : v1819;
              const v1822 = stdlib.digest(ctc3, [v1767]);
              const v1825 = stdlib.digestEq(v1822, v1807);
              const v1826 = v1820 ? true : v1825;
              const v1828 = stdlib.digest(ctc3, [v1776]);
              const v1831 = stdlib.digestEq(v1828, v1807);
              const v1832 = v1826 ? true : v1831;
              const v1834 = stdlib.digest(ctc3, [v1785]);
              const v1837 = stdlib.digestEq(v1834, v1807);
              const v1838 = v1832 ? true : v1837;
              const v1840 = stdlib.digest(ctc3, [v1794]);
              const v1843 = stdlib.digestEq(v1840, v1807);
              const v1844 = v1838 ? true : v1843;
              const v1846 = stdlib.digest(ctc3, [v1803]);
              const v1849 = stdlib.digestEq(v1846, v1807);
              const v1850 = v1844 ? true : v1849;
              if (v1850) {
                v1722 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1851 = 'o';
                const v1854 = stdlib.digest(ctc3, [v1851]);
                const v1855 = stdlib.digestEq(v1805, v1854);
                const v1860 = stdlib.digestEq(v1810, v1854);
                const v1861 = v1855 ? true : v1860;
                const v1866 = stdlib.digestEq(v1816, v1854);
                const v1867 = v1861 ? true : v1866;
                const v1872 = stdlib.digestEq(v1822, v1854);
                const v1873 = v1867 ? true : v1872;
                const v1878 = stdlib.digestEq(v1828, v1854);
                const v1879 = v1873 ? true : v1878;
                const v1884 = stdlib.digestEq(v1834, v1854);
                const v1885 = v1879 ? true : v1884;
                const v1890 = stdlib.digestEq(v1840, v1854);
                const v1891 = v1885 ? true : v1890;
                const v1896 = stdlib.digestEq(v1846, v1854);
                const v1897 = v1891 ? true : v1896;
                if (v1897) {
                  v1722 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  v1722 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
                  }
                }
              const v1899 = stdlib.safeDiv(v1109, stdlib.checkedBigNumberify('./index.rsh:203:32:decimal', stdlib.UInt_max, '2'));
              const v1901 = stdlib.safeSub(v1109, v1899);
              let v1902;
              const v1903 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:193:24:decimal', stdlib.UInt_max, '0'));
              if (v1903) {
                const v1904 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                v1902 = v1904;
                }
              else {
                const v1905 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:195:31:decimal', stdlib.UInt_max, '1'));
                if (v1905) {
                  const v1906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  v1902 = v1906;
                  }
                else {
                  const v1907 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  v1902 = v1907;
                  }
                }
              const v1908 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '0')];
              const v1909 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '1')];
              let v1910;
              const v1912 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:207:44:decimal', stdlib.UInt_max, '1'));
              const v1913 = v1903 ? true : v1912;
              if (v1913) {
                const v1915 = stdlib.safeMul(v1908, v1109);
                v1910 = v1915;
                }
              else {
                const v1916 = stdlib.safeMul(v1908, v1899);
                v1910 = v1916;
                }
              const v1920 = stdlib.safeSub(v1109, v1910);
              sim_r.txns.push({
                kind: 'from',
                to: v1067,
                tok: undefined /* Nothing */
                });
              let v1921;
              if (v1913) {
                const v1926 = stdlib.safeMul(v1909, v1920);
                v1921 = v1926;
                }
              else {
                const v1927 = stdlib.safeMul(v1909, v1901);
                v1921 = v1927;
                }
              sim_r.txns.push({
                kind: 'from',
                to: v1075,
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
        timeoutAt: ['time', v1325],
        tys: [ctc5, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v1067, v1068, v1069, v1075, v1101, v1109, v1325],
          evt_cnt: 0,
          funcNum: 4,
          lct: v1102,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1504, time: v1503, didSend: v533, from: v1502 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v1075,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1504, time: v1503, didSend: v533, from: v1502 } = txn4;
        ;
        const v1505 = stdlib.addressEq(v1067, v1502);
        const v1506 = stdlib.addressEq(v1075, v1502);
        const v1507 = v1505 ? true : v1506;
        stdlib.assert(v1507, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:167:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeOut(), {
          at: './index.rsh:132:29:application',
          fs: ['at ./index.rsh:131:9:application call to [unknown function] (defined at: ./index.rsh:131:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:130:28:function exp)', 'at ./index.rsh:167:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v1375, v1376], secs: v1378, time: v1377, didSend: v376, from: v1374 } = txn3;
        const v1380 = stdlib.safeAdd(v1109, v1376);
        ;
        const v1381 = stdlib.addressEq(v1067, v1374);
        stdlib.assert(v1381, {
          at: './index.rsh:165:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1382 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1375);
        const v1383 = stdlib.lt(v1375, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1384 = v1382 ? v1383 : false;
        stdlib.assert(v1384, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:168:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Alice'
          });
        const v1385 = v1101.board;
        const v1387 = v1385[v1375];
        const v1388 = 'x';
        const v1389 = stdlib.digest(ctc3, [v1387]);
        const v1391 = stdlib.digest(ctc3, [v1388]);
        const v1392 = stdlib.digestEq(v1389, v1391);
        const v1393 = 'o';
        const v1396 = stdlib.digest(ctc3, [v1393]);
        const v1397 = stdlib.digestEq(v1389, v1396);
        const v1398 = v1392 ? true : v1397;
        const v1399 = v1398 ? false : true;
        stdlib.assert(v1399, {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:168:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Alice'
          });
        const v1401 = stdlib.safeDiv(v1068, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
        const v1402 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:40:decimal', stdlib.UInt_max, '3000000'), v1401);
        const v1403 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:65:decimal', stdlib.UInt_max, '2000000'), v1401);
        const v1406 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:140:decimal', stdlib.UInt_max, '4000000'), v1401);
        const v1416 = stdlib.Array_set(v1385, v1375, v1388);
        const v1422 = v1101.xCost;
        const v1423 = [v1402, v1403, v1402, v1403, v1406, v1403, v1402, v1403, v1402];
        const v1425 = v1423[v1375];
        const v1426 = stdlib.safeAdd(v1422, v1425);
        const v1429 = v1101.oCost;
        const v1435 = {
          board: v1416,
          oCost: v1429,
          playerTurn: false,
          xCost: v1426
          };
        stdlib.protect(ctc4, await interact.seeBoard(v1435), {
          at: './index.rsh:168:26:application',
          fs: ['at ./index.rsh:168:26:application call to [unknown function] (defined at: ./index.rsh:168:26:function exp)', 'at ./index.rsh:168:26:application call to "liftedInteract" (defined at: ./index.rsh:168:26:application)'],
          msg: 'seeBoard',
          who: 'Alice'
          });
        
        const cv1101 = v1435;
        const cv1102 = v1377;
        const cv1109 = v1380;
        
        v1101 = cv1101;
        v1102 = cv1102;
        v1109 = cv1109;
        
        continue;}
      
      }
    else {
      const v1526 = stdlib.safeAdd(v1102, v1069);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v1526],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v1067, v1068, v1069, v1075, v1101, v1109, v1526],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1102,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1705, time: v1704, didSend: v765, from: v1703 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v1067,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1705, time: v1704, didSend: v765, from: v1703 } = txn4;
        ;
        const v1706 = stdlib.addressEq(v1067, v1703);
        const v1707 = stdlib.addressEq(v1075, v1703);
        const v1708 = v1706 ? true : v1707;
        stdlib.assert(v1708, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:183:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeOut(), {
          at: './index.rsh:132:29:application',
          fs: ['at ./index.rsh:131:9:application call to [unknown function] (defined at: ./index.rsh:131:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:130:28:function exp)', 'at ./index.rsh:183:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v1576, v1577], secs: v1579, time: v1578, didSend: v608, from: v1575 } = txn3;
        const v1581 = stdlib.safeAdd(v1109, v1577);
        ;
        const v1582 = stdlib.addressEq(v1075, v1575);
        stdlib.assert(v1582, {
          at: './index.rsh:181:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1583 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1576);
        const v1584 = stdlib.lt(v1576, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1585 = v1583 ? v1584 : false;
        stdlib.assert(v1585, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:184:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Alice'
          });
        const v1586 = v1101.board;
        const v1588 = v1586[v1576];
        const v1589 = 'x';
        const v1590 = stdlib.digest(ctc3, [v1588]);
        const v1592 = stdlib.digest(ctc3, [v1589]);
        const v1593 = stdlib.digestEq(v1590, v1592);
        const v1594 = 'o';
        const v1597 = stdlib.digest(ctc3, [v1594]);
        const v1598 = stdlib.digestEq(v1590, v1597);
        const v1599 = v1593 ? true : v1598;
        const v1600 = v1599 ? false : true;
        stdlib.assert(v1600, {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:184:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Alice'
          });
        const v1602 = stdlib.safeDiv(v1068, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
        const v1603 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:40:decimal', stdlib.UInt_max, '3000000'), v1602);
        const v1604 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:65:decimal', stdlib.UInt_max, '2000000'), v1602);
        const v1607 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:140:decimal', stdlib.UInt_max, '4000000'), v1602);
        const v1621 = stdlib.Array_set(v1586, v1576, v1594);
        const v1628 = v1101.xCost;
        const v1631 = v1101.oCost;
        const v1632 = [v1603, v1604, v1603, v1604, v1607, v1604, v1603, v1604, v1603];
        const v1634 = v1632[v1576];
        const v1635 = stdlib.safeAdd(v1631, v1634);
        const v1636 = {
          board: v1621,
          oCost: v1635,
          playerTurn: true,
          xCost: v1628
          };
        const cv1101 = v1636;
        const cv1102 = v1578;
        const cv1109 = v1581;
        
        v1101 = cv1101;
        v1102 = cv1102;
        v1109 = cv1109;
        
        continue;}
      
      }}
  const v1721 = v1101.board;
  let v1722;
  const v1723 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
  const v1724 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
  const v1725 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
  const v1726 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
  const v1727 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
  const v1728 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
  const v1729 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
  const v1730 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
  const v1731 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
  const v1732 = stdlib.digest(ctc3, [v1723]);
  const v1733 = stdlib.digest(ctc3, [v1724]);
  const v1734 = stdlib.digestEq(v1732, v1733);
  const v1736 = stdlib.digest(ctc3, [v1725]);
  const v1737 = stdlib.digestEq(v1732, v1736);
  const v1738 = v1734 ? v1737 : false;
  const v1739 = '-';
  const v1740 = v1738 ? v1723 : v1739;
  const v1741 = stdlib.digest(ctc3, [v1726]);
  const v1742 = stdlib.digest(ctc3, [v1727]);
  const v1743 = stdlib.digestEq(v1741, v1742);
  const v1745 = stdlib.digest(ctc3, [v1728]);
  const v1746 = stdlib.digestEq(v1741, v1745);
  const v1747 = v1743 ? v1746 : false;
  const v1749 = v1747 ? v1726 : v1739;
  const v1750 = stdlib.digest(ctc3, [v1729]);
  const v1751 = stdlib.digest(ctc3, [v1730]);
  const v1752 = stdlib.digestEq(v1750, v1751);
  const v1754 = stdlib.digest(ctc3, [v1731]);
  const v1755 = stdlib.digestEq(v1750, v1754);
  const v1756 = v1752 ? v1755 : false;
  const v1758 = v1756 ? v1729 : v1739;
  const v1761 = stdlib.digestEq(v1732, v1741);
  const v1764 = stdlib.digestEq(v1732, v1750);
  const v1765 = v1761 ? v1764 : false;
  const v1767 = v1765 ? v1723 : v1739;
  const v1770 = stdlib.digestEq(v1733, v1742);
  const v1773 = stdlib.digestEq(v1733, v1751);
  const v1774 = v1770 ? v1773 : false;
  const v1776 = v1774 ? v1724 : v1739;
  const v1779 = stdlib.digestEq(v1736, v1745);
  const v1782 = stdlib.digestEq(v1736, v1754);
  const v1783 = v1779 ? v1782 : false;
  const v1785 = v1783 ? v1725 : v1739;
  const v1788 = stdlib.digestEq(v1732, v1742);
  const v1791 = stdlib.digestEq(v1732, v1754);
  const v1792 = v1788 ? v1791 : false;
  const v1794 = v1792 ? v1723 : v1739;
  const v1797 = stdlib.digestEq(v1736, v1742);
  const v1800 = stdlib.digestEq(v1736, v1750);
  const v1801 = v1797 ? v1800 : false;
  const v1803 = v1801 ? v1725 : v1739;
  const v1804 = 'x';
  const v1805 = stdlib.digest(ctc3, [v1740]);
  const v1807 = stdlib.digest(ctc3, [v1804]);
  const v1808 = stdlib.digestEq(v1805, v1807);
  const v1810 = stdlib.digest(ctc3, [v1749]);
  const v1813 = stdlib.digestEq(v1810, v1807);
  const v1814 = v1808 ? true : v1813;
  const v1816 = stdlib.digest(ctc3, [v1758]);
  const v1819 = stdlib.digestEq(v1816, v1807);
  const v1820 = v1814 ? true : v1819;
  const v1822 = stdlib.digest(ctc3, [v1767]);
  const v1825 = stdlib.digestEq(v1822, v1807);
  const v1826 = v1820 ? true : v1825;
  const v1828 = stdlib.digest(ctc3, [v1776]);
  const v1831 = stdlib.digestEq(v1828, v1807);
  const v1832 = v1826 ? true : v1831;
  const v1834 = stdlib.digest(ctc3, [v1785]);
  const v1837 = stdlib.digestEq(v1834, v1807);
  const v1838 = v1832 ? true : v1837;
  const v1840 = stdlib.digest(ctc3, [v1794]);
  const v1843 = stdlib.digestEq(v1840, v1807);
  const v1844 = v1838 ? true : v1843;
  const v1846 = stdlib.digest(ctc3, [v1803]);
  const v1849 = stdlib.digestEq(v1846, v1807);
  const v1850 = v1844 ? true : v1849;
  if (v1850) {
    v1722 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1851 = 'o';
    const v1854 = stdlib.digest(ctc3, [v1851]);
    const v1855 = stdlib.digestEq(v1805, v1854);
    const v1860 = stdlib.digestEq(v1810, v1854);
    const v1861 = v1855 ? true : v1860;
    const v1866 = stdlib.digestEq(v1816, v1854);
    const v1867 = v1861 ? true : v1866;
    const v1872 = stdlib.digestEq(v1822, v1854);
    const v1873 = v1867 ? true : v1872;
    const v1878 = stdlib.digestEq(v1828, v1854);
    const v1879 = v1873 ? true : v1878;
    const v1884 = stdlib.digestEq(v1834, v1854);
    const v1885 = v1879 ? true : v1884;
    const v1890 = stdlib.digestEq(v1840, v1854);
    const v1891 = v1885 ? true : v1890;
    const v1896 = stdlib.digestEq(v1846, v1854);
    const v1897 = v1891 ? true : v1896;
    if (v1897) {
      v1722 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
      }
    else {
      v1722 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
      }
    }
  const v1899 = stdlib.safeDiv(v1109, stdlib.checkedBigNumberify('./index.rsh:203:32:decimal', stdlib.UInt_max, '2'));
  const v1901 = stdlib.safeSub(v1109, v1899);
  let v1902;
  const v1903 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:193:24:decimal', stdlib.UInt_max, '0'));
  if (v1903) {
    const v1904 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    v1902 = v1904;
    }
  else {
    const v1905 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:195:31:decimal', stdlib.UInt_max, '1'));
    if (v1905) {
      const v1906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      v1902 = v1906;
      }
    else {
      const v1907 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      v1902 = v1907;
      }
    }
  const v1908 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '0')];
  const v1909 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '1')];
  let v1910;
  const v1912 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:207:44:decimal', stdlib.UInt_max, '1'));
  const v1913 = v1903 ? true : v1912;
  if (v1913) {
    const v1915 = stdlib.safeMul(v1908, v1109);
    v1910 = v1915;
    }
  else {
    const v1916 = stdlib.safeMul(v1908, v1899);
    v1910 = v1916;
    }
  const v1920 = stdlib.safeSub(v1109, v1910);
  ;
  let v1921;
  if (v1913) {
    const v1926 = stdlib.safeMul(v1909, v1920);
    v1921 = v1926;
    }
  else {
    const v1927 = stdlib.safeMul(v1909, v1901);
    v1921 = v1927;
    }
  ;
  stdlib.protect(ctc4, await interact.endsWith(v1101), {
    at: './index.rsh:230:22:application',
    fs: ['at ./index.rsh:229:7:application call to [unknown function] (defined at: ./index.rsh:229:19:function exp)'],
    msg: 'endsWith',
    who: 'Alice'
    });
  stdlib.protect(ctc4, await interact.seeOutcome(v1722), {
    at: './index.rsh:231:24:application',
    fs: ['at ./index.rsh:229:7:application call to [unknown function] (defined at: ./index.rsh:229:19:function exp)'],
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
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Array(ctc2, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc7 = stdlib.T_Object({
    board: ctc6,
    oCost: ctc0,
    playerTurn: ctc1,
    xCost: ctc0
    });
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1068, v1069], secs: v1071, time: v1070, didSend: v65, from: v1067 } = txn1;
  ;
  const v1074 = stdlib.protect(ctc1, await interact.acceptBudget(v1068), {
    at: './index.rsh:148:60:application',
    fs: ['at ./index.rsh:147:9:application call to [unknown function] (defined at: ./index.rsh:147:13:function exp)'],
    msg: 'acceptBudget',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1067, v1068, v1069, v1074],
    evt_cnt: 1,
    funcNum: 1,
    lct: v1070,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:150:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1076], secs: v1078, time: v1077, didSend: v74, from: v1075 } = txn2;
      
      ;
      const v1079 = ' ';
      const v1088 = [v1079, v1079, v1079, v1079, v1079, v1079, v1079, v1079, v1079];
      const v1089 = {
        board: v1088,
        oCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        playerTurn: true,
        xCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v1101 = v1089;
      const v1102 = v1077;
      const v1109 = stdlib.checkedBigNumberify('./index.rsh:127:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1112 = v1101.board;
        let v1113;
        const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
        const v1115 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
        const v1116 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
        const v1117 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
        const v1118 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
        const v1119 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
        const v1120 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
        const v1121 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
        const v1122 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
        const v1123 = stdlib.digest(ctc3, [v1114]);
        const v1124 = stdlib.digest(ctc3, [v1115]);
        const v1125 = stdlib.digestEq(v1123, v1124);
        const v1127 = stdlib.digest(ctc3, [v1116]);
        const v1128 = stdlib.digestEq(v1123, v1127);
        const v1129 = v1125 ? v1128 : false;
        const v1130 = '-';
        const v1131 = v1129 ? v1114 : v1130;
        const v1132 = stdlib.digest(ctc3, [v1117]);
        const v1133 = stdlib.digest(ctc3, [v1118]);
        const v1134 = stdlib.digestEq(v1132, v1133);
        const v1136 = stdlib.digest(ctc3, [v1119]);
        const v1137 = stdlib.digestEq(v1132, v1136);
        const v1138 = v1134 ? v1137 : false;
        const v1140 = v1138 ? v1117 : v1130;
        const v1141 = stdlib.digest(ctc3, [v1120]);
        const v1142 = stdlib.digest(ctc3, [v1121]);
        const v1143 = stdlib.digestEq(v1141, v1142);
        const v1145 = stdlib.digest(ctc3, [v1122]);
        const v1146 = stdlib.digestEq(v1141, v1145);
        const v1147 = v1143 ? v1146 : false;
        const v1149 = v1147 ? v1120 : v1130;
        const v1152 = stdlib.digestEq(v1123, v1132);
        const v1155 = stdlib.digestEq(v1123, v1141);
        const v1156 = v1152 ? v1155 : false;
        const v1158 = v1156 ? v1114 : v1130;
        const v1161 = stdlib.digestEq(v1124, v1133);
        const v1164 = stdlib.digestEq(v1124, v1142);
        const v1165 = v1161 ? v1164 : false;
        const v1167 = v1165 ? v1115 : v1130;
        const v1170 = stdlib.digestEq(v1127, v1136);
        const v1173 = stdlib.digestEq(v1127, v1145);
        const v1174 = v1170 ? v1173 : false;
        const v1176 = v1174 ? v1116 : v1130;
        const v1179 = stdlib.digestEq(v1123, v1133);
        const v1182 = stdlib.digestEq(v1123, v1145);
        const v1183 = v1179 ? v1182 : false;
        const v1185 = v1183 ? v1114 : v1130;
        const v1188 = stdlib.digestEq(v1127, v1133);
        const v1191 = stdlib.digestEq(v1127, v1141);
        const v1192 = v1188 ? v1191 : false;
        const v1194 = v1192 ? v1116 : v1130;
        const v1195 = 'x';
        const v1196 = stdlib.digest(ctc3, [v1131]);
        const v1198 = stdlib.digest(ctc3, [v1195]);
        const v1199 = stdlib.digestEq(v1196, v1198);
        const v1201 = stdlib.digest(ctc3, [v1140]);
        const v1204 = stdlib.digestEq(v1201, v1198);
        const v1205 = v1199 ? true : v1204;
        const v1207 = stdlib.digest(ctc3, [v1149]);
        const v1210 = stdlib.digestEq(v1207, v1198);
        const v1211 = v1205 ? true : v1210;
        const v1213 = stdlib.digest(ctc3, [v1158]);
        const v1216 = stdlib.digestEq(v1213, v1198);
        const v1217 = v1211 ? true : v1216;
        const v1219 = stdlib.digest(ctc3, [v1167]);
        const v1222 = stdlib.digestEq(v1219, v1198);
        const v1223 = v1217 ? true : v1222;
        const v1225 = stdlib.digest(ctc3, [v1176]);
        const v1228 = stdlib.digestEq(v1225, v1198);
        const v1229 = v1223 ? true : v1228;
        const v1231 = stdlib.digest(ctc3, [v1185]);
        const v1234 = stdlib.digestEq(v1231, v1198);
        const v1235 = v1229 ? true : v1234;
        const v1237 = stdlib.digest(ctc3, [v1194]);
        const v1240 = stdlib.digestEq(v1237, v1198);
        const v1241 = v1235 ? true : v1240;
        if (v1241) {
          v1113 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1242 = 'o';
          const v1245 = stdlib.digest(ctc3, [v1242]);
          const v1246 = stdlib.digestEq(v1196, v1245);
          const v1251 = stdlib.digestEq(v1201, v1245);
          const v1252 = v1246 ? true : v1251;
          const v1257 = stdlib.digestEq(v1207, v1245);
          const v1258 = v1252 ? true : v1257;
          const v1263 = stdlib.digestEq(v1213, v1245);
          const v1264 = v1258 ? true : v1263;
          const v1269 = stdlib.digestEq(v1219, v1245);
          const v1270 = v1264 ? true : v1269;
          const v1275 = stdlib.digestEq(v1225, v1245);
          const v1276 = v1270 ? true : v1275;
          const v1281 = stdlib.digestEq(v1231, v1245);
          const v1282 = v1276 ? true : v1281;
          const v1287 = stdlib.digestEq(v1237, v1245);
          const v1288 = v1282 ? true : v1287;
          if (v1288) {
            v1113 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
            }
          else {
            v1113 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
            }
          }
        const v1290 = await stdlib.Array_asyncReduce([v1112], true, async([v1292], v1291, v1293) => {
          const v1295 = stdlib.digest(ctc3, [v1292]);
          const v1298 = stdlib.digestEq(v1295, v1198);
          const v1299 = 'o';
          const v1302 = stdlib.digest(ctc3, [v1299]);
          const v1303 = stdlib.digestEq(v1295, v1302);
          const v1304 = v1298 ? true : v1303;
          const v1305 = v1291 ? v1304 : false;
          
          return v1305;})
        const v1306 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:52:decimal', stdlib.UInt_max, '1'));
        const v1307 = v1290 ? true : v1306;
        const v1308 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:70:decimal', stdlib.UInt_max, '0'));
        const v1309 = v1307 ? true : v1308;
        const v1311 = v1101.xCost;
        const v1312 = v1101.oCost;
        const v1313 = stdlib.safeAdd(v1311, v1312);
        const v1314 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:155:64:decimal', stdlib.UInt_max, '2'), v1068);
        const v1315 = stdlib.le(v1313, v1314);
        const v1316 = v1309 ? false : v1315;
        
        return v1316;})()) {
        const v1317 = v1101.playerTurn;
        if (v1317) {
          const v1325 = stdlib.safeAdd(v1102, v1069);
          sim_r.isHalt = false;
          }
        else {
          const v1526 = stdlib.safeAdd(v1102, v1069);
          sim_r.isHalt = false;
          }}
      else {
        const v1721 = v1101.board;
        let v1722;
        const v1723 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
        const v1724 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
        const v1725 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
        const v1726 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
        const v1727 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
        const v1728 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
        const v1729 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
        const v1730 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
        const v1731 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
        const v1732 = stdlib.digest(ctc3, [v1723]);
        const v1733 = stdlib.digest(ctc3, [v1724]);
        const v1734 = stdlib.digestEq(v1732, v1733);
        const v1736 = stdlib.digest(ctc3, [v1725]);
        const v1737 = stdlib.digestEq(v1732, v1736);
        const v1738 = v1734 ? v1737 : false;
        const v1739 = '-';
        const v1740 = v1738 ? v1723 : v1739;
        const v1741 = stdlib.digest(ctc3, [v1726]);
        const v1742 = stdlib.digest(ctc3, [v1727]);
        const v1743 = stdlib.digestEq(v1741, v1742);
        const v1745 = stdlib.digest(ctc3, [v1728]);
        const v1746 = stdlib.digestEq(v1741, v1745);
        const v1747 = v1743 ? v1746 : false;
        const v1749 = v1747 ? v1726 : v1739;
        const v1750 = stdlib.digest(ctc3, [v1729]);
        const v1751 = stdlib.digest(ctc3, [v1730]);
        const v1752 = stdlib.digestEq(v1750, v1751);
        const v1754 = stdlib.digest(ctc3, [v1731]);
        const v1755 = stdlib.digestEq(v1750, v1754);
        const v1756 = v1752 ? v1755 : false;
        const v1758 = v1756 ? v1729 : v1739;
        const v1761 = stdlib.digestEq(v1732, v1741);
        const v1764 = stdlib.digestEq(v1732, v1750);
        const v1765 = v1761 ? v1764 : false;
        const v1767 = v1765 ? v1723 : v1739;
        const v1770 = stdlib.digestEq(v1733, v1742);
        const v1773 = stdlib.digestEq(v1733, v1751);
        const v1774 = v1770 ? v1773 : false;
        const v1776 = v1774 ? v1724 : v1739;
        const v1779 = stdlib.digestEq(v1736, v1745);
        const v1782 = stdlib.digestEq(v1736, v1754);
        const v1783 = v1779 ? v1782 : false;
        const v1785 = v1783 ? v1725 : v1739;
        const v1788 = stdlib.digestEq(v1732, v1742);
        const v1791 = stdlib.digestEq(v1732, v1754);
        const v1792 = v1788 ? v1791 : false;
        const v1794 = v1792 ? v1723 : v1739;
        const v1797 = stdlib.digestEq(v1736, v1742);
        const v1800 = stdlib.digestEq(v1736, v1750);
        const v1801 = v1797 ? v1800 : false;
        const v1803 = v1801 ? v1725 : v1739;
        const v1804 = 'x';
        const v1805 = stdlib.digest(ctc3, [v1740]);
        const v1807 = stdlib.digest(ctc3, [v1804]);
        const v1808 = stdlib.digestEq(v1805, v1807);
        const v1810 = stdlib.digest(ctc3, [v1749]);
        const v1813 = stdlib.digestEq(v1810, v1807);
        const v1814 = v1808 ? true : v1813;
        const v1816 = stdlib.digest(ctc3, [v1758]);
        const v1819 = stdlib.digestEq(v1816, v1807);
        const v1820 = v1814 ? true : v1819;
        const v1822 = stdlib.digest(ctc3, [v1767]);
        const v1825 = stdlib.digestEq(v1822, v1807);
        const v1826 = v1820 ? true : v1825;
        const v1828 = stdlib.digest(ctc3, [v1776]);
        const v1831 = stdlib.digestEq(v1828, v1807);
        const v1832 = v1826 ? true : v1831;
        const v1834 = stdlib.digest(ctc3, [v1785]);
        const v1837 = stdlib.digestEq(v1834, v1807);
        const v1838 = v1832 ? true : v1837;
        const v1840 = stdlib.digest(ctc3, [v1794]);
        const v1843 = stdlib.digestEq(v1840, v1807);
        const v1844 = v1838 ? true : v1843;
        const v1846 = stdlib.digest(ctc3, [v1803]);
        const v1849 = stdlib.digestEq(v1846, v1807);
        const v1850 = v1844 ? true : v1849;
        if (v1850) {
          v1722 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1851 = 'o';
          const v1854 = stdlib.digest(ctc3, [v1851]);
          const v1855 = stdlib.digestEq(v1805, v1854);
          const v1860 = stdlib.digestEq(v1810, v1854);
          const v1861 = v1855 ? true : v1860;
          const v1866 = stdlib.digestEq(v1816, v1854);
          const v1867 = v1861 ? true : v1866;
          const v1872 = stdlib.digestEq(v1822, v1854);
          const v1873 = v1867 ? true : v1872;
          const v1878 = stdlib.digestEq(v1828, v1854);
          const v1879 = v1873 ? true : v1878;
          const v1884 = stdlib.digestEq(v1834, v1854);
          const v1885 = v1879 ? true : v1884;
          const v1890 = stdlib.digestEq(v1840, v1854);
          const v1891 = v1885 ? true : v1890;
          const v1896 = stdlib.digestEq(v1846, v1854);
          const v1897 = v1891 ? true : v1896;
          if (v1897) {
            v1722 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
            }
          else {
            v1722 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
            }
          }
        const v1899 = stdlib.safeDiv(v1109, stdlib.checkedBigNumberify('./index.rsh:203:32:decimal', stdlib.UInt_max, '2'));
        const v1901 = stdlib.safeSub(v1109, v1899);
        let v1902;
        const v1903 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:193:24:decimal', stdlib.UInt_max, '0'));
        if (v1903) {
          const v1904 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          v1902 = v1904;
          }
        else {
          const v1905 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:195:31:decimal', stdlib.UInt_max, '1'));
          if (v1905) {
            const v1906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            v1902 = v1906;
            }
          else {
            const v1907 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            v1902 = v1907;
            }
          }
        const v1908 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '0')];
        const v1909 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '1')];
        let v1910;
        const v1912 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:207:44:decimal', stdlib.UInt_max, '1'));
        const v1913 = v1903 ? true : v1912;
        if (v1913) {
          const v1915 = stdlib.safeMul(v1908, v1109);
          v1910 = v1915;
          }
        else {
          const v1916 = stdlib.safeMul(v1908, v1899);
          v1910 = v1916;
          }
        const v1920 = stdlib.safeSub(v1109, v1910);
        sim_r.txns.push({
          kind: 'from',
          to: v1067,
          tok: undefined /* Nothing */
          });
        let v1921;
        if (v1913) {
          const v1926 = stdlib.safeMul(v1909, v1920);
          v1921 = v1926;
          }
        else {
          const v1927 = stdlib.safeMul(v1909, v1901);
          v1921 = v1927;
          }
        sim_r.txns.push({
          kind: 'from',
          to: v1075,
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
    tys: [ctc5, ctc0, ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1076], secs: v1078, time: v1077, didSend: v74, from: v1075 } = txn2;
  ;
  const v1079 = ' ';
  const v1088 = [v1079, v1079, v1079, v1079, v1079, v1079, v1079, v1079, v1079];
  const v1089 = {
    board: v1088,
    oCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    playerTurn: true,
    xCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v1101 = v1089;
  let v1102 = v1077;
  let v1109 = stdlib.checkedBigNumberify('./index.rsh:127:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1112 = v1101.board;
    let v1113;
    const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
    const v1115 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
    const v1116 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
    const v1117 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
    const v1118 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
    const v1119 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
    const v1120 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
    const v1121 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
    const v1122 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
    const v1123 = stdlib.digest(ctc3, [v1114]);
    const v1124 = stdlib.digest(ctc3, [v1115]);
    const v1125 = stdlib.digestEq(v1123, v1124);
    const v1127 = stdlib.digest(ctc3, [v1116]);
    const v1128 = stdlib.digestEq(v1123, v1127);
    const v1129 = v1125 ? v1128 : false;
    const v1130 = '-';
    const v1131 = v1129 ? v1114 : v1130;
    const v1132 = stdlib.digest(ctc3, [v1117]);
    const v1133 = stdlib.digest(ctc3, [v1118]);
    const v1134 = stdlib.digestEq(v1132, v1133);
    const v1136 = stdlib.digest(ctc3, [v1119]);
    const v1137 = stdlib.digestEq(v1132, v1136);
    const v1138 = v1134 ? v1137 : false;
    const v1140 = v1138 ? v1117 : v1130;
    const v1141 = stdlib.digest(ctc3, [v1120]);
    const v1142 = stdlib.digest(ctc3, [v1121]);
    const v1143 = stdlib.digestEq(v1141, v1142);
    const v1145 = stdlib.digest(ctc3, [v1122]);
    const v1146 = stdlib.digestEq(v1141, v1145);
    const v1147 = v1143 ? v1146 : false;
    const v1149 = v1147 ? v1120 : v1130;
    const v1152 = stdlib.digestEq(v1123, v1132);
    const v1155 = stdlib.digestEq(v1123, v1141);
    const v1156 = v1152 ? v1155 : false;
    const v1158 = v1156 ? v1114 : v1130;
    const v1161 = stdlib.digestEq(v1124, v1133);
    const v1164 = stdlib.digestEq(v1124, v1142);
    const v1165 = v1161 ? v1164 : false;
    const v1167 = v1165 ? v1115 : v1130;
    const v1170 = stdlib.digestEq(v1127, v1136);
    const v1173 = stdlib.digestEq(v1127, v1145);
    const v1174 = v1170 ? v1173 : false;
    const v1176 = v1174 ? v1116 : v1130;
    const v1179 = stdlib.digestEq(v1123, v1133);
    const v1182 = stdlib.digestEq(v1123, v1145);
    const v1183 = v1179 ? v1182 : false;
    const v1185 = v1183 ? v1114 : v1130;
    const v1188 = stdlib.digestEq(v1127, v1133);
    const v1191 = stdlib.digestEq(v1127, v1141);
    const v1192 = v1188 ? v1191 : false;
    const v1194 = v1192 ? v1116 : v1130;
    const v1195 = 'x';
    const v1196 = stdlib.digest(ctc3, [v1131]);
    const v1198 = stdlib.digest(ctc3, [v1195]);
    const v1199 = stdlib.digestEq(v1196, v1198);
    const v1201 = stdlib.digest(ctc3, [v1140]);
    const v1204 = stdlib.digestEq(v1201, v1198);
    const v1205 = v1199 ? true : v1204;
    const v1207 = stdlib.digest(ctc3, [v1149]);
    const v1210 = stdlib.digestEq(v1207, v1198);
    const v1211 = v1205 ? true : v1210;
    const v1213 = stdlib.digest(ctc3, [v1158]);
    const v1216 = stdlib.digestEq(v1213, v1198);
    const v1217 = v1211 ? true : v1216;
    const v1219 = stdlib.digest(ctc3, [v1167]);
    const v1222 = stdlib.digestEq(v1219, v1198);
    const v1223 = v1217 ? true : v1222;
    const v1225 = stdlib.digest(ctc3, [v1176]);
    const v1228 = stdlib.digestEq(v1225, v1198);
    const v1229 = v1223 ? true : v1228;
    const v1231 = stdlib.digest(ctc3, [v1185]);
    const v1234 = stdlib.digestEq(v1231, v1198);
    const v1235 = v1229 ? true : v1234;
    const v1237 = stdlib.digest(ctc3, [v1194]);
    const v1240 = stdlib.digestEq(v1237, v1198);
    const v1241 = v1235 ? true : v1240;
    if (v1241) {
      v1113 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1242 = 'o';
      const v1245 = stdlib.digest(ctc3, [v1242]);
      const v1246 = stdlib.digestEq(v1196, v1245);
      const v1251 = stdlib.digestEq(v1201, v1245);
      const v1252 = v1246 ? true : v1251;
      const v1257 = stdlib.digestEq(v1207, v1245);
      const v1258 = v1252 ? true : v1257;
      const v1263 = stdlib.digestEq(v1213, v1245);
      const v1264 = v1258 ? true : v1263;
      const v1269 = stdlib.digestEq(v1219, v1245);
      const v1270 = v1264 ? true : v1269;
      const v1275 = stdlib.digestEq(v1225, v1245);
      const v1276 = v1270 ? true : v1275;
      const v1281 = stdlib.digestEq(v1231, v1245);
      const v1282 = v1276 ? true : v1281;
      const v1287 = stdlib.digestEq(v1237, v1245);
      const v1288 = v1282 ? true : v1287;
      if (v1288) {
        v1113 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
        }
      else {
        v1113 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
        }
      }
    const v1290 = await stdlib.Array_asyncReduce([v1112], true, async([v1292], v1291, v1293) => {
      const v1295 = stdlib.digest(ctc3, [v1292]);
      const v1298 = stdlib.digestEq(v1295, v1198);
      const v1299 = 'o';
      const v1302 = stdlib.digest(ctc3, [v1299]);
      const v1303 = stdlib.digestEq(v1295, v1302);
      const v1304 = v1298 ? true : v1303;
      const v1305 = v1291 ? v1304 : false;
      
      return v1305;})
    const v1306 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:52:decimal', stdlib.UInt_max, '1'));
    const v1307 = v1290 ? true : v1306;
    const v1308 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:70:decimal', stdlib.UInt_max, '0'));
    const v1309 = v1307 ? true : v1308;
    const v1311 = v1101.xCost;
    const v1312 = v1101.oCost;
    const v1313 = stdlib.safeAdd(v1311, v1312);
    const v1314 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:155:64:decimal', stdlib.UInt_max, '2'), v1068);
    const v1315 = stdlib.le(v1313, v1314);
    const v1316 = v1309 ? false : v1315;
    
    return v1316;})()) {
    const v1317 = v1101.playerTurn;
    if (v1317) {
      const v1325 = stdlib.safeAdd(v1102, v1069);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 3,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v1325],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v1067, v1068, v1069, v1075, v1101, v1109, v1325],
          evt_cnt: 0,
          funcNum: 4,
          lct: v1102,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1504, time: v1503, didSend: v533, from: v1502 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v1075,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1504, time: v1503, didSend: v533, from: v1502 } = txn4;
        ;
        const v1505 = stdlib.addressEq(v1067, v1502);
        const v1506 = stdlib.addressEq(v1075, v1502);
        const v1507 = v1505 ? true : v1506;
        stdlib.assert(v1507, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:167:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeOut(), {
          at: './index.rsh:132:29:application',
          fs: ['at ./index.rsh:131:9:application call to [unknown function] (defined at: ./index.rsh:131:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:130:28:function exp)', 'at ./index.rsh:167:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v1375, v1376], secs: v1378, time: v1377, didSend: v376, from: v1374 } = txn3;
        const v1380 = stdlib.safeAdd(v1109, v1376);
        ;
        const v1381 = stdlib.addressEq(v1067, v1374);
        stdlib.assert(v1381, {
          at: './index.rsh:165:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1382 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1375);
        const v1383 = stdlib.lt(v1375, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1384 = v1382 ? v1383 : false;
        stdlib.assert(v1384, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:168:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Bob'
          });
        const v1385 = v1101.board;
        const v1387 = v1385[v1375];
        const v1388 = 'x';
        const v1389 = stdlib.digest(ctc3, [v1387]);
        const v1391 = stdlib.digest(ctc3, [v1388]);
        const v1392 = stdlib.digestEq(v1389, v1391);
        const v1393 = 'o';
        const v1396 = stdlib.digest(ctc3, [v1393]);
        const v1397 = stdlib.digestEq(v1389, v1396);
        const v1398 = v1392 ? true : v1397;
        const v1399 = v1398 ? false : true;
        stdlib.assert(v1399, {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:168:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Bob'
          });
        const v1401 = stdlib.safeDiv(v1068, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
        const v1402 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:40:decimal', stdlib.UInt_max, '3000000'), v1401);
        const v1403 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:65:decimal', stdlib.UInt_max, '2000000'), v1401);
        const v1406 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:140:decimal', stdlib.UInt_max, '4000000'), v1401);
        const v1416 = stdlib.Array_set(v1385, v1375, v1388);
        const v1422 = v1101.xCost;
        const v1423 = [v1402, v1403, v1402, v1403, v1406, v1403, v1402, v1403, v1402];
        const v1425 = v1423[v1375];
        const v1426 = stdlib.safeAdd(v1422, v1425);
        const v1429 = v1101.oCost;
        const v1435 = {
          board: v1416,
          oCost: v1429,
          playerTurn: false,
          xCost: v1426
          };
        const cv1101 = v1435;
        const cv1102 = v1377;
        const cv1109 = v1380;
        
        v1101 = cv1101;
        v1102 = cv1102;
        v1109 = cv1109;
        
        continue;}
      
      }
    else {
      const v1526 = stdlib.safeAdd(v1102, v1069);
      const v1530 = v1101.board;
      const v1543 = stdlib.protect(ctc0, await interact.getSquareSelected(v1101), {
        at: './index.rsh:70:43:application',
        fs: ['at ./index.rsh:175:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Bob'
        });
      const v1544 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1543);
      const v1545 = stdlib.lt(v1543, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1546 = v1544 ? v1545 : false;
      stdlib.assert(v1546, {
        at: './index.rsh:71:9:application',
        fs: ['at ./index.rsh:175:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1549 = v1530[v1543];
      const v1550 = 'x';
      const v1551 = stdlib.digest(ctc3, [v1549]);
      const v1553 = stdlib.digest(ctc3, [v1550]);
      const v1554 = stdlib.digestEq(v1551, v1553);
      const v1555 = 'o';
      const v1558 = stdlib.digest(ctc3, [v1555]);
      const v1559 = stdlib.digestEq(v1551, v1558);
      const v1560 = v1554 ? true : v1559;
      const v1561 = v1560 ? false : true;
      stdlib.assert(v1561, {
        at: './index.rsh:72:9:application',
        fs: ['at ./index.rsh:175:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:174:13:application call to [unknown function] (defined at: ./index.rsh:174:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const v1562 = stdlib.safeDiv(v1068, stdlib.checkedBigNumberify('./index.rsh:176:40:decimal', stdlib.UInt_max, '16000000'));
      const v1563 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:177:46:decimal', stdlib.UInt_max, '3000000'), v1562);
      const v1564 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:177:71:decimal', stdlib.UInt_max, '2000000'), v1562);
      const v1567 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:177:146:decimal', stdlib.UInt_max, '4000000'), v1562);
      const v1572 = [v1563, v1564, v1563, v1564, v1567, v1564, v1563, v1564, v1563];
      const v1574 = v1572[v1543];
      
      const txn3 = await (ctc.sendrecv({
        args: [v1067, v1068, v1069, v1075, v1101, v1109, v1526, v1543, v1574],
        evt_cnt: 2,
        funcNum: 5,
        lct: v1102,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [v1574, []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1576, v1577], secs: v1579, time: v1578, didSend: v608, from: v1575 } = txn3;
          
          const v1581 = stdlib.safeAdd(v1109, v1577);
          sim_r.txns.push({
            amt: v1577,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1586 = v1101.board;
          const v1594 = 'o';
          const v1602 = stdlib.safeDiv(v1068, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
          const v1603 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:40:decimal', stdlib.UInt_max, '3000000'), v1602);
          const v1604 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:65:decimal', stdlib.UInt_max, '2000000'), v1602);
          const v1607 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:140:decimal', stdlib.UInt_max, '4000000'), v1602);
          const v1621 = stdlib.Array_set(v1586, v1576, v1594);
          const v1628 = v1101.xCost;
          const v1631 = v1101.oCost;
          const v1632 = [v1603, v1604, v1603, v1604, v1607, v1604, v1603, v1604, v1603];
          const v1634 = v1632[v1576];
          const v1635 = stdlib.safeAdd(v1631, v1634);
          const v1636 = {
            board: v1621,
            oCost: v1635,
            playerTurn: true,
            xCost: v1628
            };
          
          const cv1101 = v1636;
          const cv1102 = v1578;
          const cv1109 = v1581;
          
          await (async () => {
            const v1101 = cv1101;
            const v1102 = cv1102;
            const v1109 = cv1109;
            
            if (await (async () => {
              const v1112 = v1101.board;
              let v1113;
              const v1114 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
              const v1115 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
              const v1116 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
              const v1117 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
              const v1118 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
              const v1119 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
              const v1120 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
              const v1121 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
              const v1122 = v1112[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
              const v1123 = stdlib.digest(ctc3, [v1114]);
              const v1124 = stdlib.digest(ctc3, [v1115]);
              const v1125 = stdlib.digestEq(v1123, v1124);
              const v1127 = stdlib.digest(ctc3, [v1116]);
              const v1128 = stdlib.digestEq(v1123, v1127);
              const v1129 = v1125 ? v1128 : false;
              const v1130 = '-';
              const v1131 = v1129 ? v1114 : v1130;
              const v1132 = stdlib.digest(ctc3, [v1117]);
              const v1133 = stdlib.digest(ctc3, [v1118]);
              const v1134 = stdlib.digestEq(v1132, v1133);
              const v1136 = stdlib.digest(ctc3, [v1119]);
              const v1137 = stdlib.digestEq(v1132, v1136);
              const v1138 = v1134 ? v1137 : false;
              const v1140 = v1138 ? v1117 : v1130;
              const v1141 = stdlib.digest(ctc3, [v1120]);
              const v1142 = stdlib.digest(ctc3, [v1121]);
              const v1143 = stdlib.digestEq(v1141, v1142);
              const v1145 = stdlib.digest(ctc3, [v1122]);
              const v1146 = stdlib.digestEq(v1141, v1145);
              const v1147 = v1143 ? v1146 : false;
              const v1149 = v1147 ? v1120 : v1130;
              const v1152 = stdlib.digestEq(v1123, v1132);
              const v1155 = stdlib.digestEq(v1123, v1141);
              const v1156 = v1152 ? v1155 : false;
              const v1158 = v1156 ? v1114 : v1130;
              const v1161 = stdlib.digestEq(v1124, v1133);
              const v1164 = stdlib.digestEq(v1124, v1142);
              const v1165 = v1161 ? v1164 : false;
              const v1167 = v1165 ? v1115 : v1130;
              const v1170 = stdlib.digestEq(v1127, v1136);
              const v1173 = stdlib.digestEq(v1127, v1145);
              const v1174 = v1170 ? v1173 : false;
              const v1176 = v1174 ? v1116 : v1130;
              const v1179 = stdlib.digestEq(v1123, v1133);
              const v1182 = stdlib.digestEq(v1123, v1145);
              const v1183 = v1179 ? v1182 : false;
              const v1185 = v1183 ? v1114 : v1130;
              const v1188 = stdlib.digestEq(v1127, v1133);
              const v1191 = stdlib.digestEq(v1127, v1141);
              const v1192 = v1188 ? v1191 : false;
              const v1194 = v1192 ? v1116 : v1130;
              const v1195 = 'x';
              const v1196 = stdlib.digest(ctc3, [v1131]);
              const v1198 = stdlib.digest(ctc3, [v1195]);
              const v1199 = stdlib.digestEq(v1196, v1198);
              const v1201 = stdlib.digest(ctc3, [v1140]);
              const v1204 = stdlib.digestEq(v1201, v1198);
              const v1205 = v1199 ? true : v1204;
              const v1207 = stdlib.digest(ctc3, [v1149]);
              const v1210 = stdlib.digestEq(v1207, v1198);
              const v1211 = v1205 ? true : v1210;
              const v1213 = stdlib.digest(ctc3, [v1158]);
              const v1216 = stdlib.digestEq(v1213, v1198);
              const v1217 = v1211 ? true : v1216;
              const v1219 = stdlib.digest(ctc3, [v1167]);
              const v1222 = stdlib.digestEq(v1219, v1198);
              const v1223 = v1217 ? true : v1222;
              const v1225 = stdlib.digest(ctc3, [v1176]);
              const v1228 = stdlib.digestEq(v1225, v1198);
              const v1229 = v1223 ? true : v1228;
              const v1231 = stdlib.digest(ctc3, [v1185]);
              const v1234 = stdlib.digestEq(v1231, v1198);
              const v1235 = v1229 ? true : v1234;
              const v1237 = stdlib.digest(ctc3, [v1194]);
              const v1240 = stdlib.digestEq(v1237, v1198);
              const v1241 = v1235 ? true : v1240;
              if (v1241) {
                v1113 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1242 = 'o';
                const v1245 = stdlib.digest(ctc3, [v1242]);
                const v1246 = stdlib.digestEq(v1196, v1245);
                const v1251 = stdlib.digestEq(v1201, v1245);
                const v1252 = v1246 ? true : v1251;
                const v1257 = stdlib.digestEq(v1207, v1245);
                const v1258 = v1252 ? true : v1257;
                const v1263 = stdlib.digestEq(v1213, v1245);
                const v1264 = v1258 ? true : v1263;
                const v1269 = stdlib.digestEq(v1219, v1245);
                const v1270 = v1264 ? true : v1269;
                const v1275 = stdlib.digestEq(v1225, v1245);
                const v1276 = v1270 ? true : v1275;
                const v1281 = stdlib.digestEq(v1231, v1245);
                const v1282 = v1276 ? true : v1281;
                const v1287 = stdlib.digestEq(v1237, v1245);
                const v1288 = v1282 ? true : v1287;
                if (v1288) {
                  v1113 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  v1113 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
                  }
                }
              const v1290 = await stdlib.Array_asyncReduce([v1112], true, async([v1292], v1291, v1293) => {
                const v1295 = stdlib.digest(ctc3, [v1292]);
                const v1298 = stdlib.digestEq(v1295, v1198);
                const v1299 = 'o';
                const v1302 = stdlib.digest(ctc3, [v1299]);
                const v1303 = stdlib.digestEq(v1295, v1302);
                const v1304 = v1298 ? true : v1303;
                const v1305 = v1291 ? v1304 : false;
                
                return v1305;})
              const v1306 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:52:decimal', stdlib.UInt_max, '1'));
              const v1307 = v1290 ? true : v1306;
              const v1308 = stdlib.eq(v1113, stdlib.checkedBigNumberify('./index.rsh:100:70:decimal', stdlib.UInt_max, '0'));
              const v1309 = v1307 ? true : v1308;
              const v1311 = v1101.xCost;
              const v1312 = v1101.oCost;
              const v1313 = stdlib.safeAdd(v1311, v1312);
              const v1314 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:155:64:decimal', stdlib.UInt_max, '2'), v1068);
              const v1315 = stdlib.le(v1313, v1314);
              const v1316 = v1309 ? false : v1315;
              
              return v1316;})()) {
              const v1317 = v1101.playerTurn;
              if (v1317) {
                const v1325 = stdlib.safeAdd(v1102, v1069);
                sim_r.isHalt = false;
                }
              else {
                const v1526 = stdlib.safeAdd(v1102, v1069);
                sim_r.isHalt = false;
                }}
            else {
              const v1721 = v1101.board;
              let v1722;
              const v1723 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
              const v1724 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
              const v1725 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
              const v1726 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
              const v1727 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
              const v1728 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
              const v1729 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
              const v1730 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
              const v1731 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
              const v1732 = stdlib.digest(ctc3, [v1723]);
              const v1733 = stdlib.digest(ctc3, [v1724]);
              const v1734 = stdlib.digestEq(v1732, v1733);
              const v1736 = stdlib.digest(ctc3, [v1725]);
              const v1737 = stdlib.digestEq(v1732, v1736);
              const v1738 = v1734 ? v1737 : false;
              const v1739 = '-';
              const v1740 = v1738 ? v1723 : v1739;
              const v1741 = stdlib.digest(ctc3, [v1726]);
              const v1742 = stdlib.digest(ctc3, [v1727]);
              const v1743 = stdlib.digestEq(v1741, v1742);
              const v1745 = stdlib.digest(ctc3, [v1728]);
              const v1746 = stdlib.digestEq(v1741, v1745);
              const v1747 = v1743 ? v1746 : false;
              const v1749 = v1747 ? v1726 : v1739;
              const v1750 = stdlib.digest(ctc3, [v1729]);
              const v1751 = stdlib.digest(ctc3, [v1730]);
              const v1752 = stdlib.digestEq(v1750, v1751);
              const v1754 = stdlib.digest(ctc3, [v1731]);
              const v1755 = stdlib.digestEq(v1750, v1754);
              const v1756 = v1752 ? v1755 : false;
              const v1758 = v1756 ? v1729 : v1739;
              const v1761 = stdlib.digestEq(v1732, v1741);
              const v1764 = stdlib.digestEq(v1732, v1750);
              const v1765 = v1761 ? v1764 : false;
              const v1767 = v1765 ? v1723 : v1739;
              const v1770 = stdlib.digestEq(v1733, v1742);
              const v1773 = stdlib.digestEq(v1733, v1751);
              const v1774 = v1770 ? v1773 : false;
              const v1776 = v1774 ? v1724 : v1739;
              const v1779 = stdlib.digestEq(v1736, v1745);
              const v1782 = stdlib.digestEq(v1736, v1754);
              const v1783 = v1779 ? v1782 : false;
              const v1785 = v1783 ? v1725 : v1739;
              const v1788 = stdlib.digestEq(v1732, v1742);
              const v1791 = stdlib.digestEq(v1732, v1754);
              const v1792 = v1788 ? v1791 : false;
              const v1794 = v1792 ? v1723 : v1739;
              const v1797 = stdlib.digestEq(v1736, v1742);
              const v1800 = stdlib.digestEq(v1736, v1750);
              const v1801 = v1797 ? v1800 : false;
              const v1803 = v1801 ? v1725 : v1739;
              const v1804 = 'x';
              const v1805 = stdlib.digest(ctc3, [v1740]);
              const v1807 = stdlib.digest(ctc3, [v1804]);
              const v1808 = stdlib.digestEq(v1805, v1807);
              const v1810 = stdlib.digest(ctc3, [v1749]);
              const v1813 = stdlib.digestEq(v1810, v1807);
              const v1814 = v1808 ? true : v1813;
              const v1816 = stdlib.digest(ctc3, [v1758]);
              const v1819 = stdlib.digestEq(v1816, v1807);
              const v1820 = v1814 ? true : v1819;
              const v1822 = stdlib.digest(ctc3, [v1767]);
              const v1825 = stdlib.digestEq(v1822, v1807);
              const v1826 = v1820 ? true : v1825;
              const v1828 = stdlib.digest(ctc3, [v1776]);
              const v1831 = stdlib.digestEq(v1828, v1807);
              const v1832 = v1826 ? true : v1831;
              const v1834 = stdlib.digest(ctc3, [v1785]);
              const v1837 = stdlib.digestEq(v1834, v1807);
              const v1838 = v1832 ? true : v1837;
              const v1840 = stdlib.digest(ctc3, [v1794]);
              const v1843 = stdlib.digestEq(v1840, v1807);
              const v1844 = v1838 ? true : v1843;
              const v1846 = stdlib.digest(ctc3, [v1803]);
              const v1849 = stdlib.digestEq(v1846, v1807);
              const v1850 = v1844 ? true : v1849;
              if (v1850) {
                v1722 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1851 = 'o';
                const v1854 = stdlib.digest(ctc3, [v1851]);
                const v1855 = stdlib.digestEq(v1805, v1854);
                const v1860 = stdlib.digestEq(v1810, v1854);
                const v1861 = v1855 ? true : v1860;
                const v1866 = stdlib.digestEq(v1816, v1854);
                const v1867 = v1861 ? true : v1866;
                const v1872 = stdlib.digestEq(v1822, v1854);
                const v1873 = v1867 ? true : v1872;
                const v1878 = stdlib.digestEq(v1828, v1854);
                const v1879 = v1873 ? true : v1878;
                const v1884 = stdlib.digestEq(v1834, v1854);
                const v1885 = v1879 ? true : v1884;
                const v1890 = stdlib.digestEq(v1840, v1854);
                const v1891 = v1885 ? true : v1890;
                const v1896 = stdlib.digestEq(v1846, v1854);
                const v1897 = v1891 ? true : v1896;
                if (v1897) {
                  v1722 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  v1722 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
                  }
                }
              const v1899 = stdlib.safeDiv(v1109, stdlib.checkedBigNumberify('./index.rsh:203:32:decimal', stdlib.UInt_max, '2'));
              const v1901 = stdlib.safeSub(v1109, v1899);
              let v1902;
              const v1903 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:193:24:decimal', stdlib.UInt_max, '0'));
              if (v1903) {
                const v1904 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                v1902 = v1904;
                }
              else {
                const v1905 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:195:31:decimal', stdlib.UInt_max, '1'));
                if (v1905) {
                  const v1906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  v1902 = v1906;
                  }
                else {
                  const v1907 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  v1902 = v1907;
                  }
                }
              const v1908 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '0')];
              const v1909 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '1')];
              let v1910;
              const v1912 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:207:44:decimal', stdlib.UInt_max, '1'));
              const v1913 = v1903 ? true : v1912;
              if (v1913) {
                const v1915 = stdlib.safeMul(v1908, v1109);
                v1910 = v1915;
                }
              else {
                const v1916 = stdlib.safeMul(v1908, v1899);
                v1910 = v1916;
                }
              const v1920 = stdlib.safeSub(v1109, v1910);
              sim_r.txns.push({
                kind: 'from',
                to: v1067,
                tok: undefined /* Nothing */
                });
              let v1921;
              if (v1913) {
                const v1926 = stdlib.safeMul(v1909, v1920);
                v1921 = v1926;
                }
              else {
                const v1927 = stdlib.safeMul(v1909, v1901);
                v1921 = v1927;
                }
              sim_r.txns.push({
                kind: 'from',
                to: v1075,
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
        timeoutAt: ['time', v1526],
        tys: [ctc5, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v1067, v1068, v1069, v1075, v1101, v1109, v1526],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1102,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1705, time: v1704, didSend: v765, from: v1703 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v1067,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1705, time: v1704, didSend: v765, from: v1703 } = txn4;
        ;
        const v1706 = stdlib.addressEq(v1067, v1703);
        const v1707 = stdlib.addressEq(v1075, v1703);
        const v1708 = v1706 ? true : v1707;
        stdlib.assert(v1708, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:183:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeOut(), {
          at: './index.rsh:132:29:application',
          fs: ['at ./index.rsh:131:9:application call to [unknown function] (defined at: ./index.rsh:131:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:130:28:function exp)', 'at ./index.rsh:183:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v1576, v1577], secs: v1579, time: v1578, didSend: v608, from: v1575 } = txn3;
        const v1581 = stdlib.safeAdd(v1109, v1577);
        ;
        const v1582 = stdlib.addressEq(v1075, v1575);
        stdlib.assert(v1582, {
          at: './index.rsh:181:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1583 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1576);
        const v1584 = stdlib.lt(v1576, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1585 = v1583 ? v1584 : false;
        stdlib.assert(v1585, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:184:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Bob'
          });
        const v1586 = v1101.board;
        const v1588 = v1586[v1576];
        const v1589 = 'x';
        const v1590 = stdlib.digest(ctc3, [v1588]);
        const v1592 = stdlib.digest(ctc3, [v1589]);
        const v1593 = stdlib.digestEq(v1590, v1592);
        const v1594 = 'o';
        const v1597 = stdlib.digest(ctc3, [v1594]);
        const v1598 = stdlib.digestEq(v1590, v1597);
        const v1599 = v1593 ? true : v1598;
        const v1600 = v1599 ? false : true;
        stdlib.assert(v1600, {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:184:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Bob'
          });
        const v1602 = stdlib.safeDiv(v1068, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
        const v1603 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:40:decimal', stdlib.UInt_max, '3000000'), v1602);
        const v1604 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:65:decimal', stdlib.UInt_max, '2000000'), v1602);
        const v1607 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:86:140:decimal', stdlib.UInt_max, '4000000'), v1602);
        const v1621 = stdlib.Array_set(v1586, v1576, v1594);
        const v1628 = v1101.xCost;
        const v1631 = v1101.oCost;
        const v1632 = [v1603, v1604, v1603, v1604, v1607, v1604, v1603, v1604, v1603];
        const v1634 = v1632[v1576];
        const v1635 = stdlib.safeAdd(v1631, v1634);
        const v1636 = {
          board: v1621,
          oCost: v1635,
          playerTurn: true,
          xCost: v1628
          };
        stdlib.protect(ctc4, await interact.seeBoard(v1636), {
          at: './index.rsh:184:26:application',
          fs: ['at ./index.rsh:184:26:application call to [unknown function] (defined at: ./index.rsh:184:26:function exp)', 'at ./index.rsh:184:26:application call to "liftedInteract" (defined at: ./index.rsh:184:26:application)'],
          msg: 'seeBoard',
          who: 'Bob'
          });
        
        const cv1101 = v1636;
        const cv1102 = v1578;
        const cv1109 = v1581;
        
        v1101 = cv1101;
        v1102 = cv1102;
        v1109 = cv1109;
        
        continue;}
      
      }}
  const v1721 = v1101.board;
  let v1722;
  const v1723 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
  const v1724 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
  const v1725 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
  const v1726 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
  const v1727 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
  const v1728 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
  const v1729 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
  const v1730 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
  const v1731 = v1721[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
  const v1732 = stdlib.digest(ctc3, [v1723]);
  const v1733 = stdlib.digest(ctc3, [v1724]);
  const v1734 = stdlib.digestEq(v1732, v1733);
  const v1736 = stdlib.digest(ctc3, [v1725]);
  const v1737 = stdlib.digestEq(v1732, v1736);
  const v1738 = v1734 ? v1737 : false;
  const v1739 = '-';
  const v1740 = v1738 ? v1723 : v1739;
  const v1741 = stdlib.digest(ctc3, [v1726]);
  const v1742 = stdlib.digest(ctc3, [v1727]);
  const v1743 = stdlib.digestEq(v1741, v1742);
  const v1745 = stdlib.digest(ctc3, [v1728]);
  const v1746 = stdlib.digestEq(v1741, v1745);
  const v1747 = v1743 ? v1746 : false;
  const v1749 = v1747 ? v1726 : v1739;
  const v1750 = stdlib.digest(ctc3, [v1729]);
  const v1751 = stdlib.digest(ctc3, [v1730]);
  const v1752 = stdlib.digestEq(v1750, v1751);
  const v1754 = stdlib.digest(ctc3, [v1731]);
  const v1755 = stdlib.digestEq(v1750, v1754);
  const v1756 = v1752 ? v1755 : false;
  const v1758 = v1756 ? v1729 : v1739;
  const v1761 = stdlib.digestEq(v1732, v1741);
  const v1764 = stdlib.digestEq(v1732, v1750);
  const v1765 = v1761 ? v1764 : false;
  const v1767 = v1765 ? v1723 : v1739;
  const v1770 = stdlib.digestEq(v1733, v1742);
  const v1773 = stdlib.digestEq(v1733, v1751);
  const v1774 = v1770 ? v1773 : false;
  const v1776 = v1774 ? v1724 : v1739;
  const v1779 = stdlib.digestEq(v1736, v1745);
  const v1782 = stdlib.digestEq(v1736, v1754);
  const v1783 = v1779 ? v1782 : false;
  const v1785 = v1783 ? v1725 : v1739;
  const v1788 = stdlib.digestEq(v1732, v1742);
  const v1791 = stdlib.digestEq(v1732, v1754);
  const v1792 = v1788 ? v1791 : false;
  const v1794 = v1792 ? v1723 : v1739;
  const v1797 = stdlib.digestEq(v1736, v1742);
  const v1800 = stdlib.digestEq(v1736, v1750);
  const v1801 = v1797 ? v1800 : false;
  const v1803 = v1801 ? v1725 : v1739;
  const v1804 = 'x';
  const v1805 = stdlib.digest(ctc3, [v1740]);
  const v1807 = stdlib.digest(ctc3, [v1804]);
  const v1808 = stdlib.digestEq(v1805, v1807);
  const v1810 = stdlib.digest(ctc3, [v1749]);
  const v1813 = stdlib.digestEq(v1810, v1807);
  const v1814 = v1808 ? true : v1813;
  const v1816 = stdlib.digest(ctc3, [v1758]);
  const v1819 = stdlib.digestEq(v1816, v1807);
  const v1820 = v1814 ? true : v1819;
  const v1822 = stdlib.digest(ctc3, [v1767]);
  const v1825 = stdlib.digestEq(v1822, v1807);
  const v1826 = v1820 ? true : v1825;
  const v1828 = stdlib.digest(ctc3, [v1776]);
  const v1831 = stdlib.digestEq(v1828, v1807);
  const v1832 = v1826 ? true : v1831;
  const v1834 = stdlib.digest(ctc3, [v1785]);
  const v1837 = stdlib.digestEq(v1834, v1807);
  const v1838 = v1832 ? true : v1837;
  const v1840 = stdlib.digest(ctc3, [v1794]);
  const v1843 = stdlib.digestEq(v1840, v1807);
  const v1844 = v1838 ? true : v1843;
  const v1846 = stdlib.digest(ctc3, [v1803]);
  const v1849 = stdlib.digestEq(v1846, v1807);
  const v1850 = v1844 ? true : v1849;
  if (v1850) {
    v1722 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1851 = 'o';
    const v1854 = stdlib.digest(ctc3, [v1851]);
    const v1855 = stdlib.digestEq(v1805, v1854);
    const v1860 = stdlib.digestEq(v1810, v1854);
    const v1861 = v1855 ? true : v1860;
    const v1866 = stdlib.digestEq(v1816, v1854);
    const v1867 = v1861 ? true : v1866;
    const v1872 = stdlib.digestEq(v1822, v1854);
    const v1873 = v1867 ? true : v1872;
    const v1878 = stdlib.digestEq(v1828, v1854);
    const v1879 = v1873 ? true : v1878;
    const v1884 = stdlib.digestEq(v1834, v1854);
    const v1885 = v1879 ? true : v1884;
    const v1890 = stdlib.digestEq(v1840, v1854);
    const v1891 = v1885 ? true : v1890;
    const v1896 = stdlib.digestEq(v1846, v1854);
    const v1897 = v1891 ? true : v1896;
    if (v1897) {
      v1722 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
      }
    else {
      v1722 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
      }
    }
  const v1899 = stdlib.safeDiv(v1109, stdlib.checkedBigNumberify('./index.rsh:203:32:decimal', stdlib.UInt_max, '2'));
  const v1901 = stdlib.safeSub(v1109, v1899);
  let v1902;
  const v1903 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:193:24:decimal', stdlib.UInt_max, '0'));
  if (v1903) {
    const v1904 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    v1902 = v1904;
    }
  else {
    const v1905 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:195:31:decimal', stdlib.UInt_max, '1'));
    if (v1905) {
      const v1906 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      v1902 = v1906;
      }
    else {
      const v1907 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      v1902 = v1907;
      }
    }
  const v1908 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '0')];
  const v1909 = v1902[stdlib.checkedBigNumberify('./index.rsh:223:9:array', stdlib.UInt_max, '1')];
  let v1910;
  const v1912 = stdlib.eq(v1722, stdlib.checkedBigNumberify('./index.rsh:207:44:decimal', stdlib.UInt_max, '1'));
  const v1913 = v1903 ? true : v1912;
  if (v1913) {
    const v1915 = stdlib.safeMul(v1908, v1109);
    v1910 = v1915;
    }
  else {
    const v1916 = stdlib.safeMul(v1908, v1899);
    v1910 = v1916;
    }
  const v1920 = stdlib.safeSub(v1109, v1910);
  ;
  let v1921;
  if (v1913) {
    const v1926 = stdlib.safeMul(v1909, v1920);
    v1921 = v1926;
    }
  else {
    const v1927 = stdlib.safeMul(v1909, v1901);
    v1921 = v1927;
    }
  ;
  stdlib.protect(ctc4, await interact.endsWith(v1101), {
    at: './index.rsh:230:22:application',
    fs: ['at ./index.rsh:229:7:application call to [unknown function] (defined at: ./index.rsh:229:19:function exp)'],
    msg: 'endsWith',
    who: 'Bob'
    });
  stdlib.protect(ctc4, await interact.seeOutcome(v1722), {
    at: './index.rsh:231:24:application',
    fs: ['at ./index.rsh:229:7:application call to [unknown function] (defined at: ./index.rsh:229:19:function exp)'],
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
  appApproval: `BiARAAEIBgIJBHJqBSAogMjQB8CNtwGAiXqAkvQBEiYFAQAgZcdMFaaGGHu2u/mVj0lPxrgAaANKZZqa1EmRsIxY8tIAIC1xFkK3JrBEAWJ8qfusMvXIUw+xkDzE2wIlhxeSGkiBAQEiNQAxGEEH5ipkSSJbNQFJJFs1AoEQWzUINhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBgxAAdVJIQkMQAF9SSUMQABSJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABGG0rAywMgY0AyEHWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQhbsggjshA0/7IHs0IG70giNf+xIrIBJbIQNAiyGLM0/yMISTX/IQQMQP/nJTQBEkQ0BEkiEkw0AhIRRChkSTUDSUkhCls1/1cwIDX+V1AaNf1JNQVJIls1/CRbNfuABLNR9480/BZQNPsWULAyBjQDIQdbDEQ0+4gHCDT+MQASRCI0/A40/CEFDBBENP1XAAlJNfojNPwLI1gBNfmAAW81+DT5KxI0+TT4ARIRFEQ0/yEMCjX3IQ009ws19iEONPcLNfU0A1cAIDT/NAMhC1s0/jT6IiM0/AtSNPhQNPojSTT8CwghBVJQNP0hBVs09hY09RZQNPYWUDT1FlAhDzT3CxZQNPUWUDT2FlA09RZQNPYWUCQ0/AskWBcIFlAnBFA0/VcSCFAyBjQDIQhbNPsIQgJ1SCEGNAESRDQESSISTDQCEhFEKGRJNQNXMCA1/4AEkSc087AyBjQDIQdbD0Q0A1cAIDEAEjT/MQASEUSxIrIBNAMhCFuyCCOyEDT/sgezQgV5SSMMQAGxSYEDDEABJUgiNf+xIrIBJbIQNAiyGLM0/yMISTX/IQQMQP/nIQY0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hCls1/ldQGjX9STUFSSJbNfwkWzX7gASkpfCINPwWUDT7FlCwMgY0AyEHWwxENPuIBYQ0/zEAEkQiNPwONPwhBQwQRDT9VwAJNfqAAXg1+TT6IzT8CyNYAUk1+DT5ARI0+CkSERRENP4hDAo19yENNPcLNfYhDjT3CzX1NP80/jQDIQtbNANXMCA0+iIjNPwLUjT5UDT6I0k0/AsIIQVSUDT9VwkIUChQNP0hEFs09hY09RZQNPYWUDT1FlAhDzT3CxZQNPUWUDT2FlA09RZQNPYWUCQ0/AskWBcIFlAyBjQDIQhbNPsIQgDyIxJEIjX/sSKyASWyEDQIshizNP8jCEk1/yEEDED/5yM0ARJENARJIhJMNAISEUQoZDUDSTUFFzX/gAQPv8Y0NP8WUQcIULCAASA1/jQDVwAgNAMhCls0AyELWzEANP5JUDT+UDT+UDT+UDT+UDT+UDT+UDT+UCSvUCcEUCSvUDIGIkIAbUiBwJoMiAQ/sSKyASWyECKyGIAGBjEAMgkSsh6AAQayH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCA4E1/zX+Nf01/DX7Nfo1+TT9VwAJSTX3VwABNfU091cBATX0NPdXAgE18zT3VwMBNfI091cGATXxNPUBNfA09AE17zTzATXugAEtNe008gE17DT3VwQBATXrNPdXBQEBNeo08QE16TT3VwcBATXoNPdXCAEBNec07TT1NPA07xI08DTuEhBNATXmKzXlNO008jTsNOsSNOw06hIQTQE15DTtNPE06TToEjTpNOcSEE0BNeM07TT1NPA07BI08DTpEhBNATXiNO009DTvNOsSNO806BIQTQE14TTtNPM07jTqEjTuNOcSEE0BNeA07TT1NPA06xI08DTnEhBNATXfNO008zTuNOsSNO406RIQTQE13jTmNOUSNOQ05RIRNOM05RIRNOI05RIRNOE05RIRNOA05RIRNN805RIRNN405RIRSTXdQQAGIjX2QgA/KTXcNOY03BI05DTcEhE04zTcEhE04jTcEhE04TTcEhE04DTcEhE03zTcEhE03jTcEhFBAAYjNfZCAAQhBDX2IzXcIjXbNPcjNNsLI1hJNdoBNdk03DTZNOUSNNkpEhEQNdw02yMISTXbIQUMQP/WNNw09iMSETT2IhIRFDT9IRBbNP0hBVsIIQQ0+gsOEEEAbDT9VxEBF0EAMjT+NPsINds0+TT6FlA0+xZQNPxQNP1QNP8WUDTbFlAoSwFXAHpnSCEGNQEyBjUCQgFqNP40+wg12zT5NPoWUDT7FlA0/FA0/VA0/xZQNNsWUChLAVcAemdIJTUBMgY1AkIBOTTdQQAGIjXbQgA/KTXaNOY02hI05DTaEhE04zTaEhE04jTaEhE04TTaEhE04DTaEhE03zTaEhE03jTaEhFBAAYjNdtCAAQhBDXbNP8hBAo12jTbIhJJNdhBABeAEAAAAAAAAAABAAAAAAAAAAA12UIAMjTbIxJBABeAEAAAAAAAAAAAAAAAAAAAAAE12UIAFIAQAAAAAAAAAAEAAAAAAAAAATXZNNkiWzXXNNkkWzXWNNg02yMSEUk11EEACjTXNP8LNdVCAAc01zTaCzXVsSKyATTVsggjshA0+bIHszTUQQANNNY0/zTVCQs100IACjTWNP802gkLNdOxIrIBNNOyCCOyEDT8sgezQgAAMRkhCRJEsSKyASWyEDQIshghCbIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQQxNRJEIjE2EkQiMTcSRCI1ASI1AiI1CEL/pzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: {
    publish1: 2,
    publish3: 2,
    publish5: 2
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 122,
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
                "name": "v1068",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1069",
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
                "name": "v1068",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1069",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1076",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
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
                "name": "v1375",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1376",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "name": "v1576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1577",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
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
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
            "components": [
              {
                "internalType": "bool",
                "name": "v1076",
                "type": "bool"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
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
                "name": "v1375",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1376",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
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
                "name": "v1576",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1577",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002a9438038062002a9483398101604081905262000026916200022e565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000127565b620000b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011e92600292019062000151565b505050620002cb565b816200014d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015f906200028e565b90600052602060002090601f016020900481019282620001835760008555620001ce565b82601f106200019e57805160ff1916838001178555620001ce565b82800160010185558215620001ce579182015b82811115620001ce578251825591602001919060010190620001b1565b50620001dc929150620001e0565b5090565b5b80821115620001dc5760008155600101620001e1565b604080519081016001600160401b03811182821017156200022857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024257600080fd5b6200024c620001f7565b835181526040601f19830112156200026357600080fd5b6200026d620001f7565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a357607f821691505b60208210811415620002c557634e487b7160e01b600052602260045260246000fd5b50919050565b6127b980620002db6000396000f3fe6080604052600436106100795760003560e01c8063ab53f2c61161004b578063ab53f2c6146100e1578063ad2d91d114610104578063aff5115f14610117578063c79800371461012a57005b80631e93b0f11461008257806383230757146100a65780639a3e3912146100bb578063a7661d54146100ce57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100b257600080fd5b50600154610093565b6100806100c9366004612232565b61013d565b6100806100dc366004612232565b610342565b3480156100ed57600080fd5b506100f66104f8565b60405161009d92919061224e565b6100806101123660046122bd565b610595565b6100806101253660046122bd565b61097d565b610080610138366004612232565b610cf8565b61014d6001600054146009610e8f565b6101678135158061016057506001548235145b600a610e8f565b600080805560028054610179906122d9565b80601f01602080910402602001604051908101604052809291908181526020018280546101a5906122d9565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a91906123d3565b9050610214611d9c565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f49153384604051610245929190612442565b60405180910390a161025934156008610e8f565b8051600160fd1b90528051602080830180519290925282518251909101528151815160400152815181516060015281518151608001528151815160a001528151815160c001528151815160e00152815190516008602090810291909101919091528181015160408084018051929092528151600093018390528151600191015251606001526102e6611dd0565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152825133606090910152838101518284018051919091528051439301929092529051600091015261033c81610eb5565b50505050565b6103526004600054146014610e8f565b61036c8135158061036557506001548235145b6015610e8f565b60008080556002805461037e906122d9565b80601f01602080910402602001604051908101604052809291908181526020018280546103aa906122d9565b80156103f75780601f106103cc576101008083540402835291602001916103f7565b820191906000526020600020905b8154815290600101906020018083116103da57829003601f168201915b505050505080602001905181019061040f91906125c8565b90506104238160c001514310156016610e8f565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610454929190612442565b60405180910390a161046834156012610e8f565b805161049c906001600160a01b031633146104925760608201516001600160a01b03163314610495565b60015b6013610e8f565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156104dd573d6000803e3d6000fd5b50600080805560018190556104f490600290611e07565b5050565b60006060600054600280805461050d906122d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610539906122d9565b80156105865780601f1061055b57610100808354040283529160200191610586565b820191906000526020600020905b81548152906001019060200180831161056957829003601f168201915b50505050509050915091509091565b6105a5600460005414600f610e8f565b6105bf813515806105b857506001548235145b6010610e8f565b6000808055600280546105d1906122d9565b80601f01602080910402602001604051908101604052809291908181526020018280546105fd906122d9565b801561064a5780601f1061061f5761010080835404028352916020019161064a565b820191906000526020600020905b81548152906001019060200180831161062d57829003601f168201915b505050505080602001905181019061066291906125c8565b905061066c611e44565b61067d8260c0015143106011610e8f565b7f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d163433846040516106ae9291906125e5565b60405180910390a16106c734604085013514600b610e8f565b81516106df906001600160a01b03163314600c610e8f565b6106f16009602085013510600d610e8f565b8051600f60fb1b90526080820151516020840135600981106107155761071561247a565b602002015160405160200161072a9190612616565b60408051601f1981840301815291815281516020928301208383015282810151606f60f81b9052825190516107d892610764929101612616565b6040516020818303038152906040528051906020012060001c8260200151146107c057816040015160405160200161079c9190612616565b6040516020818303038152906040528051906020012060001c8260200151146107c3565b60015b6107ce5760016107d1565b60005b600e610e8f565b6107e9826020015162f42400611bd9565b606082018190526107fe90622dc6c090611c27565b6080820152606081015161081690621e848090611c27565b60a0820190815260808201805160c08401805191909152825181516020015290518151604001529051905160609081019190915281015161085b90623d090090611c27565b60c0828101805160809081019390935260a08085018051835190920191909152838501805183519094019390935251815160e001529051905161010001528201515181516108af9190602086013590611c8c565b60e08201805191909152608083018051602090810151835182015291516000604090910152516060015160c08301516108ff92860135600981106108f5576108f561247a565b6020020151611d00565b60e082015160600152610910611dd0565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925260e0840151818401805191909152514391015260a084015161096b91860135611d00565b60208201516040015261033c81610eb5565b61098d600660005414601b610e8f565b6109a7813515806109a057506001548235145b601c610e8f565b6000808055600280546109b9906122d9565b80601f01602080910402602001604051908101604052809291908181526020018280546109e5906122d9565b8015610a325780601f10610a0757610100808354040283529160200191610a32565b820191906000526020600020905b815481529060010190602001808311610a1557829003601f168201915b5050505050806020019051810190610a4a91906125c8565b9050610a54611e44565b610a658260c001514310601d610e8f565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb663384604051610a969291906125e5565b60405180910390a1610aaf346040850135146017610e8f565b6060820151610aca906001600160a01b031633146018610e8f565b610adc60096020850135106019610e8f565b8051600f60fb1b9052608082015151602084013560098110610b0057610b0061247a565b6020020151604051602001610b159190612616565b60408051601f1981840301815291815281516020928301208383015282810151606f60f81b905282519051610bc392610b4f929101612616565b6040516020818303038152906040528051906020012060001c826020015114610bab578160400151604051602001610b879190612616565b6040516020818303038152906040528051906020012060001c826020015114610bae565b60015b610bb9576001610bbc565b60005b601a610e8f565b610bd4826020015162f42400611bd9565b60608201819052610be990622dc6c090611c27565b60808201526060810151610c0190621e848090611c27565b60a0820190815260808201805160c084018051919091528251815160200152905181516040015290519051606090810191909152810151610c4690623d090090611c27565b60c0828101805160809081019390935260a08085018051835190920191909152838501805183519094019390935251815160e00152905190516101000152820151516040820151610c9d9190602086013590611c8c565b60e082015152608082015160209081015160c0830151610cca92860135600981106108f5576108f561247a565b60e0820180516020019190915280516001604090910152608083015160609081015191510152610910611dd0565b610d086006600054146020610e8f565b610d2281351580610d1b57506001548235145b6021610e8f565b600080805560028054610d34906122d9565b80601f0160208091040260200160405190810160405280929190818152602001828054610d60906122d9565b8015610dad5780601f10610d8257610100808354040283529160200191610dad565b820191906000526020600020905b815481529060010190602001808311610d9057829003601f168201915b5050505050806020019051810190610dc591906125c8565b9050610dd98160c001514310156022610e8f565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610e0a929190612442565b60405180910390a1610e1e3415601e610e8f565b8051610e52906001600160a01b03163314610e485760608201516001600160a01b03163314610e4b565b60015b601f610e8f565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104dd573d6000803e3d6000fd5b816104f45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610ebd611e94565b602082810151515151604051610ed39201612616565b60408051808303601f190181529181528151602092830120838301528382015151518201519051610f049201612616565b60408051808303601f190181529181528151602092830120838201528382015151518101519051610f359201612616565b60408051601f19818403018152919052805160209182012060608301526080820151602d60f81b9052820151515160036020020151604051602001610f7a9190612616565b60408051808303601f19018152918152815160209283012060a0840152838201515151608001519051610fad9201612616565b60408051808303601f19018152918152815160209283012060c084015283820151515160a001519051610fe09201612616565b60408051808303601f19018152918152815160209283012060e084015283820151515160c0015190516110139201612616565b60408051808303601f19018152918152815160209283012061010084015283820151515160e0015190516110479201612616565b60408051808303601f1901815291815281516020928301206101208401528382015151516101000151905161107c9201612616565b60408051601f198184030181529181528151602092830120610140840152610160830151600f60fb1b905282015190820151146110ba5760006110c6565b80606001518160200151145b6110d45780608001516110dd565b60208201515151515b6040516020016110ed9190612616565b60408051601f198184030181529181528151602092830120610180840152610160830151905161111d9201612616565b60408051601f1981840301815291905280516020909101206101a082015260c081015160a08201511461115157600061115d565b8060e001518160a00151145b61116b578060800151611177565b60208201515151606001515b6040516020016111879190612616565b60408051601f1981840301815291905280516020909101206101c0820152610120810151610100820151146111bd5760006111cb565b806101400151816101000151145b6111d95780608001516111e5565b6020820151515160c001515b6040516020016111f59190612616565b60408051601f1981840301815291905280516020918201206101e083015260a08201519082015114611228576000611235565b8061010001518160200151145b61124357806080015161124c565b60208201515151515b60405160200161125c9190612616565b60408051601f19818403018152918152815160209092019190912061020083015260c0820151908201511461129257600061129f565b8061012001518160400151145b6112ad5780608001516112b8565b602082810151515101515b6040516020016112c89190612616565b60408051601f19818403018152919052805160209091012061022082015260e08101516060820151146112fc576000611309565b8061014001518160600151145b611317578060800151611323565b60208201515151604001515b6040516020016113339190612616565b60408051601f19818403018152919052805160209182012061024083015260c08201519082015114611366576000611373565b8061014001518160200151145b61138157806080015161138a565b60208201515151515b60405160200161139a9190612616565b60408051601f19818403018152919052805160209091012061026082015260c08101516060820151146113ce5760006113db565b8061010001518160600151145b6113e95780608001516113f5565b60208201515151604001515b6040516020016114059190612616565b60408051601f1981840301815291905280516020909101206102808201526101a08101516101808201511461144657806101a00151816101c0015114611449565b60015b61145f57806101a00151816101e0015114611462565b60015b61147857806101a001518161020001511461147b565b60015b61149157806101a0015181610220015114611494565b60015b6114aa57806101a00151816102400151146114ad565b60015b6114c357806101a00151816102600151146114c6565b60015b6114dc57806101a00151816102800151146114df565b60015b1580156102a08301526114f557600081526115fd565b6102c081018051606f60f81b9052516040516115149190602001612616565b60408051601f1981840301815291905280516020909101206102e082018190526101808201511461155157806102e00151816101c0015114611554565b60015b61156a57806102e00151816101e001511461156d565b60015b61158357806102e0015181610200015114611586565b60015b61159c57806102e001518161022001511461159f565b60015b6115b557806102e00151816102400151146115b8565b60015b6115ce57806102e00151816102600151146115d1565b60015b6115e757806102e00151816102800151146115ea565b60015b156115f857600181526115fd565b600281525b600161032082015260005b60098110156116ed576020830151515181600981106116295761162961247a565b6020908102919091015161034084018190526040516116489201612616565b60408051601f198184030181529190528051602090910120610360830152610380820151606f60f81b90526103208201516116845760006116d3565b816101a00151826103600151146116d0578161038001516040516020016116ab9190612616565b6040516020818303038152906040528051906020012060001c826103600151146116d3565b60015b1515610320830152806116e581612640565b915050611608565b506103208101511515610300820181905261170c57805160011461170f565b60015b61171b5780511561171e565b60015b611755576117356002836000015160200151611c27565b60208084015151606081015191015161174e9190611d00565b1115611758565b60005b156118c057602082015151604001511561182857611786826020015160200151836000015160400151611d00565b6103a08201526117946120b2565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925280850180515160808501525182015160a08401526103a084015160c0840152600460005543600155905161180491839101612704565b6040516020818303038152906040526002908051906020019061033c929190612107565b611842826020015160200151836000015160400151611d00565b6103c08201526118506120b2565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925280850180515160808501525182015160a08401526103c084015160c0840152600660005543600155905161180491839101612704565b806102a00151156118d85760006103e08201526119e8565b61040081018051606f60f81b9052516040516118f79190602001612616565b60408051601f19818403018152919052805160209091012061042082018190526101808201511461193457806104200151816101c0015114611937565b60015b61194d57806104200151816101e0015114611950565b60015b6119665780610420015181610200015114611969565b60015b61197f5780610420015181610220015114611982565b60015b611998578061042001518161024001511461199b565b60015b6119b157806104200151816102600151146119b4565b60015b6119ca57806104200151816102800151146119cd565b60015b156119df5760016103e08201526119e8565b60026103e08201525b6119fb8260200151604001516002611bd9565b6104408201526103e081015115610480820181905215611a36576104a081018051600190528051600060209091015251610460820152611a80565b6001816103e001511415611a65576104c081018051600090528051600160209091015251610460820152611a80565b6104e081018051600190819052815160200152516104608201525b806104800151611a98576001816103e0015114611a9b565b60015b158015610520830152611ace57611ac381610460015160000151836020015160400151611c27565b610500820152611aed565b611ae681610460015160000151826104400151611c27565b6105008201525b8151516105008201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611b2c573d6000803e3d6000fd5b5080610520015115611b6c57611b6181610460015160200151611b5c846020015160400151846105000151611d4d565b611c27565b610540820152611b97565b611b9081610460015160200151611b5c846020015160400151846104400151611d4d565b6105408201525b8151606001516105408201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104dd573d6000803e3d6000fd5b600081611c165760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401610eac565b611c208284612713565b9392505050565b6000811580611c4b57508282611c3d8183612735565b9250611c499083612713565b145b611c865760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610eac565b92915050565b611c9461218b565b60005b6009811015611ce057848160098110611cb257611cb261247a565b6020020151828260098110611cc957611cc961247a565b602002015280611cd881612640565b915050611c97565b5081818460098110611cf457611cf461247a565b60200201529392505050565b600082611d0d8382612754565b9150811015611c865760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610eac565b600082611d5a838261276c565b9150811115611c865760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610eac565b6040805160808101909152600060608201908152815260208101611dbe61218b565b8152602001611dcb6121c0565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611dcb6121d3565b508054611e13906122d9565b6000825580601f10611e23575050565b601f016020900490600052602060002090810190611e4191906121e6565b50565b604080516101208101825260006101008201818152825260208083018290528351908101845290815290918201908152602001600081526020016000815260200160008152602001611dbe6121fb565b60405180610560016040528060008152602001600081526020016000815260200160008152602001611ed160408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611f1560408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001611f7760408051602081019091526000815290565b8152600060208201819052604082018190526060820152608001611fa660408051602081019091526000815290565b815260200160008152602001611fc760408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001611ff660408051602081019091526000815290565b81526020016000815260200160008152602001612026604051806040016040528060008152602001600081525090565b8152602001600015158152602001612051604051806040016040528060008152602001600081525090565b8152602001612073604051806040016040528060008152602001600081525090565b8152602001612095604051806040016040528060008152602001600081525090565b815260200160008152602001600015158152602001600081525090565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016120f36121c0565b815260200160008152602001600081525090565b828054612113906122d9565b90600052602060002090601f016020900481019282612135576000855561217b565b82601f1061214e57805160ff191683800117855561217b565b8280016001018555821561217b579182015b8281111561217b578251825591602001919060010190612160565b506121879291506121e6565b5090565b6040518061012001604052806009905b60408051602081019091526000815281526020019060019003908161219b5790505090565b604051806080016040528061209561218b565b60405180606001604052806120f36121c0565b5b8082111561218757600081556001016121e7565b6040518061012001604052806009906020820280368337509192915050565b60006040828403121561222c57600080fd5b50919050565b60006040828403121561224457600080fd5b611c20838361221a565b82815260006020604081840152835180604085015260005b8181101561228257858101830151858201606001528201612266565b81811115612294576000606083870101525b50601f01601f191692909201606001949350505050565b60006060828403121561222c57600080fd5b6000606082840312156122cf57600080fd5b611c2083836122ab565b600181811c908216806122ed57607f821691505b6020821081141561222c57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156123475761234761230e565b60405290565b6040516080810167ffffffffffffffff811182821017156123475761234761230e565b604051610120810167ffffffffffffffff811182821017156123475761234761230e565b6040516020810167ffffffffffffffff811182821017156123475761234761230e565b80516001600160a01b03811681146123ce57600080fd5b919050565b6000606082840312156123e557600080fd5b6040516060810181811067ffffffffffffffff821117156124085761240861230e565b604052612414836123b7565b815260208301516020820152604083015160408201528091505092915050565b8015158114611e4157600080fd5b6001600160a01b03831681528135602080830191909152606082019083013561246a81612434565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b80516123ce81612434565b60008183036102408112156124af57600080fd5b6124b7612324565b91506124c2836123b7565b825260208084015181840152604084015160408401526124e4606085016123b7565b6060840152610180607f19830112156124fc57600080fd5b61250461234d565b915084609f85011261251557600080fd5b61251d612370565b806101a086018781111561253057600080fd5b608087015b8181101561257d5784818a03121561254d5760008081fd5b612555612394565b81516001600160f81b03198116811461256e5760008081fd5b81528452928401928401612535565b509084525191830191909152506125976101c08401612490565b60408201526101e08301516060820152608082015261020082015160a08201526102209091015160c0820152919050565b600061024082840312156125db57600080fd5b611c20838361249b565b6001600160a01b038316815260808101611c2060208301848035825260208082013590830152604090810135910152565b90516001600160f81b031916815260200190565b634e487b7160e01b600052601160045260246000fd5b60006000198214156126545761265461262a565b5060010190565b80516001600160a01b039081168352602080830151818501526040808401519085015260608084015190921691840191909152608080830151805190929160009086015b60098210156126c9578251516001600160f81b03191681529183019160019190910190830161269f565b5050508101516101a0840152604081015115156101c0840152606001516101e083015260a081015161020083015260c0015161022090910152565b6102408101611c86828461265b565b60008261273057634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561274f5761274f61262a565b500290565b600082198211156127675761276761262a565b500190565b60008282101561277e5761277e61262a565b50039056fea26469706673582212209a4cbfed4c6ba68343ce63c653d449fb9c5f2f29a78c178ad19f7cda30066c5b64736f6c634300080c0033`,
  BytecodeLen: 10900,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:142:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:227:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:157:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:167:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:172:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:183:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
