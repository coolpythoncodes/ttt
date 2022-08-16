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
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Array(ctc1, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'));
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Object({
    board: ctc5,
    playerTurn: ctc6
    });
  
  
  const v1122 = stdlib.protect(ctc0, interact.budget, 'for Alice\'s interact field budget');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1122],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:149:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v1122, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1126], secs: v1128, time: v1127, didSend: v64, from: v1125 } = txn1;
      
      sim_r.txns.push({
        amt: v1126,
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
  const {data: [v1126], secs: v1128, time: v1127, didSend: v64, from: v1125 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1134, time: v1133, didSend: v74, from: v1132 } = txn2;
  const v1136 = stdlib.safeAdd(v1126, v1126);
  ;
  const v1137 = ' ';
  const v1146 = [v1137, v1137, v1137, v1137, v1137, v1137, v1137, v1137, v1137];
  const v1147 = {
    board: v1146,
    playerTurn: true
    };
  let v1159 = v1147;
  let v1160 = v1133;
  let v1167 = v1136;
  
  while (await (async () => {
    const v1171 = v1159.board;
    const v1172 = await stdlib.Array_asyncReduce([v1171], true, async([v1174], v1173, v1175) => {
      const v1176 = 'x';
      const v1177 = stdlib.digest(ctc2, [v1174]);
      const v1179 = stdlib.digest(ctc2, [v1176]);
      const v1180 = stdlib.digestEq(v1177, v1179);
      const v1181 = 'o';
      const v1184 = stdlib.digest(ctc2, [v1181]);
      const v1185 = stdlib.digestEq(v1177, v1184);
      const v1186 = v1180 ? true : v1185;
      const v1187 = v1173 ? v1186 : false;
      
      return v1187;})
    let v1189;
    const v1190 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
    const v1191 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
    const v1192 = stdlib.digest(ctc2, [v1190]);
    const v1193 = stdlib.digest(ctc2, [v1191]);
    const v1194 = stdlib.digestEq(v1192, v1193);
    const v1196 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
    const v1198 = stdlib.digest(ctc2, [v1196]);
    const v1199 = stdlib.digestEq(v1192, v1198);
    const v1200 = v1194 ? v1199 : false;
    if (v1200) {
      v1189 = v1190;
      }
    else {
      const v1202 = '-';
      v1189 = v1202;
      }
    const v1203 = 'x';
    const v1204 = stdlib.digest(ctc2, [v1189]);
    const v1206 = stdlib.digest(ctc2, [v1203]);
    const v1207 = stdlib.digestEq(v1204, v1206);
    let v1208;
    const v1209 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
    const v1210 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
    const v1211 = stdlib.digest(ctc2, [v1209]);
    const v1212 = stdlib.digest(ctc2, [v1210]);
    const v1213 = stdlib.digestEq(v1211, v1212);
    const v1215 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
    const v1217 = stdlib.digest(ctc2, [v1215]);
    const v1218 = stdlib.digestEq(v1211, v1217);
    const v1219 = v1213 ? v1218 : false;
    if (v1219) {
      v1208 = v1209;
      }
    else {
      const v1221 = '-';
      v1208 = v1221;
      }
    const v1223 = stdlib.digest(ctc2, [v1208]);
    const v1226 = stdlib.digestEq(v1223, v1206);
    const v1227 = v1207 ? true : v1226;
    let v1228;
    const v1229 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
    const v1230 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
    const v1231 = stdlib.digest(ctc2, [v1229]);
    const v1232 = stdlib.digest(ctc2, [v1230]);
    const v1233 = stdlib.digestEq(v1231, v1232);
    const v1235 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
    const v1237 = stdlib.digest(ctc2, [v1235]);
    const v1238 = stdlib.digestEq(v1231, v1237);
    const v1239 = v1233 ? v1238 : false;
    if (v1239) {
      v1228 = v1229;
      }
    else {
      const v1241 = '-';
      v1228 = v1241;
      }
    const v1243 = stdlib.digest(ctc2, [v1228]);
    const v1246 = stdlib.digestEq(v1243, v1206);
    const v1247 = v1227 ? true : v1246;
    let v1248;
    if (v1200) {
      v1248 = v1190;
      }
    else {
      const v1261 = '-';
      v1248 = v1261;
      }
    const v1262 = 'o';
    const v1263 = stdlib.digest(ctc2, [v1248]);
    const v1265 = stdlib.digest(ctc2, [v1262]);
    const v1266 = stdlib.digestEq(v1263, v1265);
    const v1267 = v1247 ? true : v1266;
    let v1268;
    if (v1219) {
      v1268 = v1209;
      }
    else {
      const v1281 = '-';
      v1268 = v1281;
      }
    const v1283 = stdlib.digest(ctc2, [v1268]);
    const v1286 = stdlib.digestEq(v1283, v1265);
    const v1287 = v1267 ? true : v1286;
    let v1288;
    if (v1239) {
      v1288 = v1229;
      }
    else {
      const v1301 = '-';
      v1288 = v1301;
      }
    const v1303 = stdlib.digest(ctc2, [v1288]);
    const v1306 = stdlib.digestEq(v1303, v1265);
    const v1307 = v1287 ? true : v1306;
    let v1308;
    const v1313 = stdlib.digestEq(v1192, v1211);
    const v1318 = stdlib.digestEq(v1192, v1231);
    const v1319 = v1313 ? v1318 : false;
    if (v1319) {
      v1308 = v1190;
      }
    else {
      const v1321 = '-';
      v1308 = v1321;
      }
    const v1323 = stdlib.digest(ctc2, [v1308]);
    const v1326 = stdlib.digestEq(v1323, v1206);
    const v1327 = v1307 ? true : v1326;
    let v1328;
    const v1333 = stdlib.digestEq(v1193, v1212);
    const v1338 = stdlib.digestEq(v1193, v1232);
    const v1339 = v1333 ? v1338 : false;
    if (v1339) {
      v1328 = v1191;
      }
    else {
      const v1341 = '-';
      v1328 = v1341;
      }
    const v1343 = stdlib.digest(ctc2, [v1328]);
    const v1346 = stdlib.digestEq(v1343, v1206);
    const v1347 = v1327 ? true : v1346;
    let v1348;
    const v1353 = stdlib.digestEq(v1198, v1217);
    const v1358 = stdlib.digestEq(v1198, v1237);
    const v1359 = v1353 ? v1358 : false;
    if (v1359) {
      v1348 = v1196;
      }
    else {
      const v1361 = '-';
      v1348 = v1361;
      }
    const v1363 = stdlib.digest(ctc2, [v1348]);
    const v1366 = stdlib.digestEq(v1363, v1206);
    const v1367 = v1347 ? true : v1366;
    let v1368;
    if (v1319) {
      v1368 = v1190;
      }
    else {
      const v1381 = '-';
      v1368 = v1381;
      }
    const v1383 = stdlib.digest(ctc2, [v1368]);
    const v1386 = stdlib.digestEq(v1383, v1265);
    const v1387 = v1367 ? true : v1386;
    let v1388;
    if (v1339) {
      v1388 = v1191;
      }
    else {
      const v1401 = '-';
      v1388 = v1401;
      }
    const v1403 = stdlib.digest(ctc2, [v1388]);
    const v1406 = stdlib.digestEq(v1403, v1265);
    const v1407 = v1387 ? true : v1406;
    let v1408;
    if (v1359) {
      v1408 = v1196;
      }
    else {
      const v1421 = '-';
      v1408 = v1421;
      }
    const v1423 = stdlib.digest(ctc2, [v1408]);
    const v1426 = stdlib.digestEq(v1423, v1265);
    const v1427 = v1407 ? true : v1426;
    let v1428;
    const v1433 = stdlib.digestEq(v1192, v1212);
    const v1438 = stdlib.digestEq(v1192, v1237);
    const v1439 = v1433 ? v1438 : false;
    if (v1439) {
      v1428 = v1190;
      }
    else {
      const v1441 = '-';
      v1428 = v1441;
      }
    const v1443 = stdlib.digest(ctc2, [v1428]);
    const v1446 = stdlib.digestEq(v1443, v1206);
    const v1447 = v1427 ? true : v1446;
    let v1448;
    if (v1439) {
      v1448 = v1190;
      }
    else {
      const v1461 = '-';
      v1448 = v1461;
      }
    const v1463 = stdlib.digest(ctc2, [v1448]);
    const v1466 = stdlib.digestEq(v1463, v1265);
    const v1467 = v1447 ? true : v1466;
    let v1468;
    const v1473 = stdlib.digestEq(v1198, v1212);
    const v1478 = stdlib.digestEq(v1198, v1231);
    const v1479 = v1473 ? v1478 : false;
    if (v1479) {
      v1468 = v1196;
      }
    else {
      const v1481 = '-';
      v1468 = v1481;
      }
    const v1483 = stdlib.digest(ctc2, [v1468]);
    const v1486 = stdlib.digestEq(v1483, v1206);
    const v1487 = v1467 ? true : v1486;
    let v1488;
    if (v1479) {
      v1488 = v1196;
      }
    else {
      const v1501 = '-';
      v1488 = v1501;
      }
    const v1503 = stdlib.digest(ctc2, [v1488]);
    const v1506 = stdlib.digestEq(v1503, v1265);
    const v1507 = v1487 ? true : v1506;
    const v1508 = v1172 ? true : v1507;
    const v1509 = v1508 ? false : true;
    
    return v1509;})()) {
    const v1510 = v1159.playerTurn;
    if (v1510) {
      const v1514 = v1159.board;
      const v1525 = stdlib.protect(ctc0, await interact.getSquareSelected(v1159), {
        at: './index.rsh:102:43:application',
        fs: ['at ./index.rsh:165:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Alice'
        });
      const v1526 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1525);
      const v1527 = stdlib.lt(v1525, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1528 = v1526 ? v1527 : false;
      stdlib.assert(v1528, {
        at: './index.rsh:103:9:application',
        fs: ['at ./index.rsh:165:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1531 = v1514[v1525];
      const v1532 = 'x';
      const v1533 = stdlib.digest(ctc2, [v1531]);
      const v1535 = stdlib.digest(ctc2, [v1532]);
      const v1536 = stdlib.digestEq(v1533, v1535);
      let v1537;
      if (v1536) {
        v1537 = true;
        }
      else {
        const v1541 = 'o';
        const v1544 = stdlib.digest(ctc2, [v1541]);
        const v1545 = stdlib.digestEq(v1533, v1544);
        v1537 = v1545;
        }
      const v1546 = v1537 ? false : true;
      stdlib.assert(v1546, {
        at: './index.rsh:104:9:application',
        fs: ['at ./index.rsh:165:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:164:13:application call to [unknown function] (defined at: ./index.rsh:164:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v1125, v1132, v1159, v1167, v1525],
        evt_cnt: 1,
        funcNum: 3,
        lct: v1160,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:167:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1548], secs: v1550, time: v1549, didSend: v497, from: v1547 } = txn3;
          
          ;
          const v1555 = v1159.board;
          const v1558 = 'x';
          const v1579 = stdlib.Array_set(v1555, v1548, v1558);
          const v1584 = {
            board: v1579,
            playerTurn: false
            };
          
          const cv1159 = v1584;
          const cv1160 = v1549;
          const cv1167 = v1167;
          
          await (async () => {
            const v1159 = cv1159;
            const v1160 = cv1160;
            const v1167 = cv1167;
            
            if (await (async () => {
              const v1171 = v1159.board;
              const v1172 = await stdlib.Array_asyncReduce([v1171], true, async([v1174], v1173, v1175) => {
                const v1176 = 'x';
                const v1177 = stdlib.digest(ctc2, [v1174]);
                const v1179 = stdlib.digest(ctc2, [v1176]);
                const v1180 = stdlib.digestEq(v1177, v1179);
                const v1181 = 'o';
                const v1184 = stdlib.digest(ctc2, [v1181]);
                const v1185 = stdlib.digestEq(v1177, v1184);
                const v1186 = v1180 ? true : v1185;
                const v1187 = v1173 ? v1186 : false;
                
                return v1187;})
              let v1189;
              const v1190 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1191 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1192 = stdlib.digest(ctc2, [v1190]);
              const v1193 = stdlib.digest(ctc2, [v1191]);
              const v1194 = stdlib.digestEq(v1192, v1193);
              const v1196 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1198 = stdlib.digest(ctc2, [v1196]);
              const v1199 = stdlib.digestEq(v1192, v1198);
              const v1200 = v1194 ? v1199 : false;
              if (v1200) {
                v1189 = v1190;
                }
              else {
                const v1202 = '-';
                v1189 = v1202;
                }
              const v1203 = 'x';
              const v1204 = stdlib.digest(ctc2, [v1189]);
              const v1206 = stdlib.digest(ctc2, [v1203]);
              const v1207 = stdlib.digestEq(v1204, v1206);
              let v1208;
              const v1209 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1210 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1211 = stdlib.digest(ctc2, [v1209]);
              const v1212 = stdlib.digest(ctc2, [v1210]);
              const v1213 = stdlib.digestEq(v1211, v1212);
              const v1215 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1217 = stdlib.digest(ctc2, [v1215]);
              const v1218 = stdlib.digestEq(v1211, v1217);
              const v1219 = v1213 ? v1218 : false;
              if (v1219) {
                v1208 = v1209;
                }
              else {
                const v1221 = '-';
                v1208 = v1221;
                }
              const v1223 = stdlib.digest(ctc2, [v1208]);
              const v1226 = stdlib.digestEq(v1223, v1206);
              const v1227 = v1207 ? true : v1226;
              let v1228;
              const v1229 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1230 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1231 = stdlib.digest(ctc2, [v1229]);
              const v1232 = stdlib.digest(ctc2, [v1230]);
              const v1233 = stdlib.digestEq(v1231, v1232);
              const v1235 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1237 = stdlib.digest(ctc2, [v1235]);
              const v1238 = stdlib.digestEq(v1231, v1237);
              const v1239 = v1233 ? v1238 : false;
              if (v1239) {
                v1228 = v1229;
                }
              else {
                const v1241 = '-';
                v1228 = v1241;
                }
              const v1243 = stdlib.digest(ctc2, [v1228]);
              const v1246 = stdlib.digestEq(v1243, v1206);
              const v1247 = v1227 ? true : v1246;
              let v1248;
              if (v1200) {
                v1248 = v1190;
                }
              else {
                const v1261 = '-';
                v1248 = v1261;
                }
              const v1262 = 'o';
              const v1263 = stdlib.digest(ctc2, [v1248]);
              const v1265 = stdlib.digest(ctc2, [v1262]);
              const v1266 = stdlib.digestEq(v1263, v1265);
              const v1267 = v1247 ? true : v1266;
              let v1268;
              if (v1219) {
                v1268 = v1209;
                }
              else {
                const v1281 = '-';
                v1268 = v1281;
                }
              const v1283 = stdlib.digest(ctc2, [v1268]);
              const v1286 = stdlib.digestEq(v1283, v1265);
              const v1287 = v1267 ? true : v1286;
              let v1288;
              if (v1239) {
                v1288 = v1229;
                }
              else {
                const v1301 = '-';
                v1288 = v1301;
                }
              const v1303 = stdlib.digest(ctc2, [v1288]);
              const v1306 = stdlib.digestEq(v1303, v1265);
              const v1307 = v1287 ? true : v1306;
              let v1308;
              const v1313 = stdlib.digestEq(v1192, v1211);
              const v1318 = stdlib.digestEq(v1192, v1231);
              const v1319 = v1313 ? v1318 : false;
              if (v1319) {
                v1308 = v1190;
                }
              else {
                const v1321 = '-';
                v1308 = v1321;
                }
              const v1323 = stdlib.digest(ctc2, [v1308]);
              const v1326 = stdlib.digestEq(v1323, v1206);
              const v1327 = v1307 ? true : v1326;
              let v1328;
              const v1333 = stdlib.digestEq(v1193, v1212);
              const v1338 = stdlib.digestEq(v1193, v1232);
              const v1339 = v1333 ? v1338 : false;
              if (v1339) {
                v1328 = v1191;
                }
              else {
                const v1341 = '-';
                v1328 = v1341;
                }
              const v1343 = stdlib.digest(ctc2, [v1328]);
              const v1346 = stdlib.digestEq(v1343, v1206);
              const v1347 = v1327 ? true : v1346;
              let v1348;
              const v1353 = stdlib.digestEq(v1198, v1217);
              const v1358 = stdlib.digestEq(v1198, v1237);
              const v1359 = v1353 ? v1358 : false;
              if (v1359) {
                v1348 = v1196;
                }
              else {
                const v1361 = '-';
                v1348 = v1361;
                }
              const v1363 = stdlib.digest(ctc2, [v1348]);
              const v1366 = stdlib.digestEq(v1363, v1206);
              const v1367 = v1347 ? true : v1366;
              let v1368;
              if (v1319) {
                v1368 = v1190;
                }
              else {
                const v1381 = '-';
                v1368 = v1381;
                }
              const v1383 = stdlib.digest(ctc2, [v1368]);
              const v1386 = stdlib.digestEq(v1383, v1265);
              const v1387 = v1367 ? true : v1386;
              let v1388;
              if (v1339) {
                v1388 = v1191;
                }
              else {
                const v1401 = '-';
                v1388 = v1401;
                }
              const v1403 = stdlib.digest(ctc2, [v1388]);
              const v1406 = stdlib.digestEq(v1403, v1265);
              const v1407 = v1387 ? true : v1406;
              let v1408;
              if (v1359) {
                v1408 = v1196;
                }
              else {
                const v1421 = '-';
                v1408 = v1421;
                }
              const v1423 = stdlib.digest(ctc2, [v1408]);
              const v1426 = stdlib.digestEq(v1423, v1265);
              const v1427 = v1407 ? true : v1426;
              let v1428;
              const v1433 = stdlib.digestEq(v1192, v1212);
              const v1438 = stdlib.digestEq(v1192, v1237);
              const v1439 = v1433 ? v1438 : false;
              if (v1439) {
                v1428 = v1190;
                }
              else {
                const v1441 = '-';
                v1428 = v1441;
                }
              const v1443 = stdlib.digest(ctc2, [v1428]);
              const v1446 = stdlib.digestEq(v1443, v1206);
              const v1447 = v1427 ? true : v1446;
              let v1448;
              if (v1439) {
                v1448 = v1190;
                }
              else {
                const v1461 = '-';
                v1448 = v1461;
                }
              const v1463 = stdlib.digest(ctc2, [v1448]);
              const v1466 = stdlib.digestEq(v1463, v1265);
              const v1467 = v1447 ? true : v1466;
              let v1468;
              const v1473 = stdlib.digestEq(v1198, v1212);
              const v1478 = stdlib.digestEq(v1198, v1231);
              const v1479 = v1473 ? v1478 : false;
              if (v1479) {
                v1468 = v1196;
                }
              else {
                const v1481 = '-';
                v1468 = v1481;
                }
              const v1483 = stdlib.digest(ctc2, [v1468]);
              const v1486 = stdlib.digestEq(v1483, v1206);
              const v1487 = v1467 ? true : v1486;
              let v1488;
              if (v1479) {
                v1488 = v1196;
                }
              else {
                const v1501 = '-';
                v1488 = v1501;
                }
              const v1503 = stdlib.digest(ctc2, [v1488]);
              const v1506 = stdlib.digestEq(v1503, v1265);
              const v1507 = v1487 ? true : v1506;
              const v1508 = v1172 ? true : v1507;
              const v1509 = v1508 ? false : true;
              
              return v1509;})()) {
              const v1510 = v1159.playerTurn;
              if (v1510) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            else {
              const v1748 = v1159.board;
              let v1749;
              const v1750 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1751 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1752 = stdlib.digest(ctc2, [v1750]);
              const v1753 = stdlib.digest(ctc2, [v1751]);
              const v1754 = stdlib.digestEq(v1752, v1753);
              const v1756 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1758 = stdlib.digest(ctc2, [v1756]);
              const v1759 = stdlib.digestEq(v1752, v1758);
              const v1760 = v1754 ? v1759 : false;
              if (v1760) {
                v1749 = v1750;
                }
              else {
                const v1762 = '-';
                v1749 = v1762;
                }
              const v1763 = 'x';
              const v1764 = stdlib.digest(ctc2, [v1749]);
              const v1766 = stdlib.digest(ctc2, [v1763]);
              const v1767 = stdlib.digestEq(v1764, v1766);
              let v1768;
              const v1769 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1770 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1771 = stdlib.digest(ctc2, [v1769]);
              const v1772 = stdlib.digest(ctc2, [v1770]);
              const v1773 = stdlib.digestEq(v1771, v1772);
              const v1775 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1777 = stdlib.digest(ctc2, [v1775]);
              const v1778 = stdlib.digestEq(v1771, v1777);
              const v1779 = v1773 ? v1778 : false;
              if (v1779) {
                v1768 = v1769;
                }
              else {
                const v1781 = '-';
                v1768 = v1781;
                }
              const v1783 = stdlib.digest(ctc2, [v1768]);
              const v1786 = stdlib.digestEq(v1783, v1766);
              const v1787 = v1767 ? true : v1786;
              let v1788;
              const v1789 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1790 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1791 = stdlib.digest(ctc2, [v1789]);
              const v1792 = stdlib.digest(ctc2, [v1790]);
              const v1793 = stdlib.digestEq(v1791, v1792);
              const v1795 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1797 = stdlib.digest(ctc2, [v1795]);
              const v1798 = stdlib.digestEq(v1791, v1797);
              const v1799 = v1793 ? v1798 : false;
              if (v1799) {
                v1788 = v1789;
                }
              else {
                const v1801 = '-';
                v1788 = v1801;
                }
              const v1803 = stdlib.digest(ctc2, [v1788]);
              const v1806 = stdlib.digestEq(v1803, v1766);
              const v1807 = v1787 ? true : v1806;
              let v1808;
              const v1813 = stdlib.digestEq(v1752, v1771);
              const v1818 = stdlib.digestEq(v1752, v1791);
              const v1819 = v1813 ? v1818 : false;
              if (v1819) {
                v1808 = v1750;
                }
              else {
                const v1821 = '-';
                v1808 = v1821;
                }
              const v1823 = stdlib.digest(ctc2, [v1808]);
              const v1826 = stdlib.digestEq(v1823, v1766);
              const v1827 = v1807 ? true : v1826;
              let v1828;
              const v1833 = stdlib.digestEq(v1753, v1772);
              const v1838 = stdlib.digestEq(v1753, v1792);
              const v1839 = v1833 ? v1838 : false;
              if (v1839) {
                v1828 = v1751;
                }
              else {
                const v1841 = '-';
                v1828 = v1841;
                }
              const v1843 = stdlib.digest(ctc2, [v1828]);
              const v1846 = stdlib.digestEq(v1843, v1766);
              const v1847 = v1827 ? true : v1846;
              let v1848;
              const v1853 = stdlib.digestEq(v1758, v1777);
              const v1858 = stdlib.digestEq(v1758, v1797);
              const v1859 = v1853 ? v1858 : false;
              if (v1859) {
                v1848 = v1756;
                }
              else {
                const v1861 = '-';
                v1848 = v1861;
                }
              const v1863 = stdlib.digest(ctc2, [v1848]);
              const v1866 = stdlib.digestEq(v1863, v1766);
              const v1867 = v1847 ? true : v1866;
              let v1868;
              const v1873 = stdlib.digestEq(v1752, v1772);
              const v1878 = stdlib.digestEq(v1752, v1797);
              const v1879 = v1873 ? v1878 : false;
              if (v1879) {
                v1868 = v1750;
                }
              else {
                const v1881 = '-';
                v1868 = v1881;
                }
              const v1883 = stdlib.digest(ctc2, [v1868]);
              const v1886 = stdlib.digestEq(v1883, v1766);
              const v1887 = v1867 ? true : v1886;
              let v1888;
              const v1893 = stdlib.digestEq(v1758, v1772);
              const v1898 = stdlib.digestEq(v1758, v1791);
              const v1899 = v1893 ? v1898 : false;
              if (v1899) {
                v1888 = v1756;
                }
              else {
                const v1901 = '-';
                v1888 = v1901;
                }
              const v1903 = stdlib.digest(ctc2, [v1888]);
              const v1906 = stdlib.digestEq(v1903, v1766);
              const v1907 = v1887 ? true : v1906;
              let v1908;
              if (v1760) {
                v1908 = v1750;
                }
              else {
                const v1921 = '-';
                v1908 = v1921;
                }
              const v1922 = 'o';
              const v1923 = stdlib.digest(ctc2, [v1908]);
              const v1925 = stdlib.digest(ctc2, [v1922]);
              const v1926 = stdlib.digestEq(v1923, v1925);
              let v1927;
              if (v1779) {
                v1927 = v1769;
                }
              else {
                const v1940 = '-';
                v1927 = v1940;
                }
              const v1942 = stdlib.digest(ctc2, [v1927]);
              const v1945 = stdlib.digestEq(v1942, v1925);
              const v1946 = v1926 ? true : v1945;
              let v1947;
              if (v1799) {
                v1947 = v1789;
                }
              else {
                const v1960 = '-';
                v1947 = v1960;
                }
              const v1962 = stdlib.digest(ctc2, [v1947]);
              const v1965 = stdlib.digestEq(v1962, v1925);
              const v1966 = v1946 ? true : v1965;
              let v1967;
              if (v1819) {
                v1967 = v1750;
                }
              else {
                const v1980 = '-';
                v1967 = v1980;
                }
              const v1982 = stdlib.digest(ctc2, [v1967]);
              const v1985 = stdlib.digestEq(v1982, v1925);
              const v1986 = v1966 ? true : v1985;
              let v1987;
              if (v1839) {
                v1987 = v1751;
                }
              else {
                const v2000 = '-';
                v1987 = v2000;
                }
              const v2002 = stdlib.digest(ctc2, [v1987]);
              const v2005 = stdlib.digestEq(v2002, v1925);
              const v2006 = v1986 ? true : v2005;
              let v2007;
              if (v1859) {
                v2007 = v1756;
                }
              else {
                const v2020 = '-';
                v2007 = v2020;
                }
              const v2022 = stdlib.digest(ctc2, [v2007]);
              const v2025 = stdlib.digestEq(v2022, v1925);
              const v2026 = v2006 ? true : v2025;
              let v2027;
              if (v1879) {
                v2027 = v1750;
                }
              else {
                const v2040 = '-';
                v2027 = v2040;
                }
              const v2042 = stdlib.digest(ctc2, [v2027]);
              const v2045 = stdlib.digestEq(v2042, v1925);
              const v2046 = v2026 ? true : v2045;
              let v2047;
              if (v1899) {
                v2047 = v1756;
                }
              else {
                const v2060 = '-';
                v2047 = v2060;
                }
              const v2062 = stdlib.digest(ctc2, [v2047]);
              const v2065 = stdlib.digestEq(v2062, v1925);
              const v2066 = v2046 ? true : v2065;
              const v2067 = v2066 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
              const v2068 = v1907 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v2067;
              sim_r.txns.push({
                kind: 'from',
                to: v1125,
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
      const {data: [v1548], secs: v1550, time: v1549, didSend: v497, from: v1547 } = txn3;
      ;
      const v1551 = stdlib.addressEq(v1125, v1547);
      stdlib.assert(v1551, {
        at: './index.rsh:167:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1552 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1548);
      const v1553 = stdlib.lt(v1548, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1554 = v1552 ? v1553 : false;
      stdlib.assert(v1554, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:168:42:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1555 = v1159.board;
      const v1557 = v1555[v1548];
      const v1558 = 'x';
      const v1559 = stdlib.digest(ctc2, [v1557]);
      const v1561 = stdlib.digest(ctc2, [v1558]);
      const v1562 = stdlib.digestEq(v1559, v1561);
      let v1563;
      if (v1562) {
        v1563 = true;
        }
      else {
        const v1567 = 'o';
        const v1570 = stdlib.digest(ctc2, [v1567]);
        const v1571 = stdlib.digestEq(v1559, v1570);
        v1563 = v1571;
        }
      const v1572 = v1563 ? false : true;
      stdlib.assert(v1572, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:168:42:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const v1579 = stdlib.Array_set(v1555, v1548, v1558);
      const v1584 = {
        board: v1579,
        playerTurn: false
        };
      stdlib.protect(ctc3, await interact.seeBoard(v1584), {
        at: './index.rsh:168:26:application',
        fs: ['at ./index.rsh:168:26:application call to [unknown function] (defined at: ./index.rsh:168:26:function exp)', 'at ./index.rsh:168:26:application call to "liftedInteract" (defined at: ./index.rsh:168:26:application)'],
        msg: 'seeBoard',
        who: 'Alice'
        });
      
      let v1607;
      if (v1562) {
        v1607 = true;
        }
      else {
        const v1611 = 'o';
        const v1614 = stdlib.digest(ctc2, [v1611]);
        const v1615 = stdlib.digestEq(v1559, v1614);
        v1607 = v1615;
        }
      const v1616 = v1607 ? false : true;
      stdlib.assert(v1616, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:169:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const cv1159 = v1584;
      const cv1160 = v1549;
      const cv1167 = v1167;
      
      v1159 = cv1159;
      v1160 = cv1160;
      v1167 = cv1167;
      
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
      const {data: [v1666], secs: v1668, time: v1667, didSend: v634, from: v1665 } = txn3;
      ;
      const v1669 = stdlib.addressEq(v1132, v1665);
      stdlib.assert(v1669, {
        at: './index.rsh:179:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v1670 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1666);
      const v1671 = stdlib.lt(v1666, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1672 = v1670 ? v1671 : false;
      stdlib.assert(v1672, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:180:42:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1673 = v1159.board;
      const v1675 = v1673[v1666];
      const v1676 = 'x';
      const v1677 = stdlib.digest(ctc2, [v1675]);
      const v1679 = stdlib.digest(ctc2, [v1676]);
      const v1680 = stdlib.digestEq(v1677, v1679);
      let v1681;
      if (v1680) {
        v1681 = true;
        }
      else {
        const v1685 = 'o';
        const v1688 = stdlib.digest(ctc2, [v1685]);
        const v1689 = stdlib.digestEq(v1677, v1688);
        v1681 = v1689;
        }
      const v1690 = v1681 ? false : true;
      stdlib.assert(v1690, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:180:42:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const v1699 = 'o';
      const v1701 = stdlib.Array_set(v1673, v1666, v1699);
      const v1702 = {
        board: v1701,
        playerTurn: true
        };
      let v1725;
      if (v1680) {
        v1725 = true;
        }
      else {
        const v1732 = stdlib.digest(ctc2, [v1699]);
        const v1733 = stdlib.digestEq(v1677, v1732);
        v1725 = v1733;
        }
      const v1734 = v1725 ? false : true;
      stdlib.assert(v1734, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:181:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const cv1159 = v1702;
      const cv1160 = v1667;
      const cv1167 = v1167;
      
      v1159 = cv1159;
      v1160 = cv1160;
      v1167 = cv1167;
      
      continue;
      
      }}
  const v1748 = v1159.board;
  let v1749;
  const v1750 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
  const v1751 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
  const v1752 = stdlib.digest(ctc2, [v1750]);
  const v1753 = stdlib.digest(ctc2, [v1751]);
  const v1754 = stdlib.digestEq(v1752, v1753);
  const v1756 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
  const v1758 = stdlib.digest(ctc2, [v1756]);
  const v1759 = stdlib.digestEq(v1752, v1758);
  const v1760 = v1754 ? v1759 : false;
  if (v1760) {
    v1749 = v1750;
    }
  else {
    const v1762 = '-';
    v1749 = v1762;
    }
  const v1763 = 'x';
  const v1764 = stdlib.digest(ctc2, [v1749]);
  const v1766 = stdlib.digest(ctc2, [v1763]);
  const v1767 = stdlib.digestEq(v1764, v1766);
  let v1768;
  const v1769 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
  const v1770 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
  const v1771 = stdlib.digest(ctc2, [v1769]);
  const v1772 = stdlib.digest(ctc2, [v1770]);
  const v1773 = stdlib.digestEq(v1771, v1772);
  const v1775 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
  const v1777 = stdlib.digest(ctc2, [v1775]);
  const v1778 = stdlib.digestEq(v1771, v1777);
  const v1779 = v1773 ? v1778 : false;
  if (v1779) {
    v1768 = v1769;
    }
  else {
    const v1781 = '-';
    v1768 = v1781;
    }
  const v1783 = stdlib.digest(ctc2, [v1768]);
  const v1786 = stdlib.digestEq(v1783, v1766);
  const v1787 = v1767 ? true : v1786;
  let v1788;
  const v1789 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
  const v1790 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
  const v1791 = stdlib.digest(ctc2, [v1789]);
  const v1792 = stdlib.digest(ctc2, [v1790]);
  const v1793 = stdlib.digestEq(v1791, v1792);
  const v1795 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
  const v1797 = stdlib.digest(ctc2, [v1795]);
  const v1798 = stdlib.digestEq(v1791, v1797);
  const v1799 = v1793 ? v1798 : false;
  if (v1799) {
    v1788 = v1789;
    }
  else {
    const v1801 = '-';
    v1788 = v1801;
    }
  const v1803 = stdlib.digest(ctc2, [v1788]);
  const v1806 = stdlib.digestEq(v1803, v1766);
  const v1807 = v1787 ? true : v1806;
  let v1808;
  const v1813 = stdlib.digestEq(v1752, v1771);
  const v1818 = stdlib.digestEq(v1752, v1791);
  const v1819 = v1813 ? v1818 : false;
  if (v1819) {
    v1808 = v1750;
    }
  else {
    const v1821 = '-';
    v1808 = v1821;
    }
  const v1823 = stdlib.digest(ctc2, [v1808]);
  const v1826 = stdlib.digestEq(v1823, v1766);
  const v1827 = v1807 ? true : v1826;
  let v1828;
  const v1833 = stdlib.digestEq(v1753, v1772);
  const v1838 = stdlib.digestEq(v1753, v1792);
  const v1839 = v1833 ? v1838 : false;
  if (v1839) {
    v1828 = v1751;
    }
  else {
    const v1841 = '-';
    v1828 = v1841;
    }
  const v1843 = stdlib.digest(ctc2, [v1828]);
  const v1846 = stdlib.digestEq(v1843, v1766);
  const v1847 = v1827 ? true : v1846;
  let v1848;
  const v1853 = stdlib.digestEq(v1758, v1777);
  const v1858 = stdlib.digestEq(v1758, v1797);
  const v1859 = v1853 ? v1858 : false;
  if (v1859) {
    v1848 = v1756;
    }
  else {
    const v1861 = '-';
    v1848 = v1861;
    }
  const v1863 = stdlib.digest(ctc2, [v1848]);
  const v1866 = stdlib.digestEq(v1863, v1766);
  const v1867 = v1847 ? true : v1866;
  let v1868;
  const v1873 = stdlib.digestEq(v1752, v1772);
  const v1878 = stdlib.digestEq(v1752, v1797);
  const v1879 = v1873 ? v1878 : false;
  if (v1879) {
    v1868 = v1750;
    }
  else {
    const v1881 = '-';
    v1868 = v1881;
    }
  const v1883 = stdlib.digest(ctc2, [v1868]);
  const v1886 = stdlib.digestEq(v1883, v1766);
  const v1887 = v1867 ? true : v1886;
  let v1888;
  const v1893 = stdlib.digestEq(v1758, v1772);
  const v1898 = stdlib.digestEq(v1758, v1791);
  const v1899 = v1893 ? v1898 : false;
  if (v1899) {
    v1888 = v1756;
    }
  else {
    const v1901 = '-';
    v1888 = v1901;
    }
  const v1903 = stdlib.digest(ctc2, [v1888]);
  const v1906 = stdlib.digestEq(v1903, v1766);
  const v1907 = v1887 ? true : v1906;
  let v1908;
  if (v1760) {
    v1908 = v1750;
    }
  else {
    const v1921 = '-';
    v1908 = v1921;
    }
  const v1922 = 'o';
  const v1923 = stdlib.digest(ctc2, [v1908]);
  const v1925 = stdlib.digest(ctc2, [v1922]);
  const v1926 = stdlib.digestEq(v1923, v1925);
  let v1927;
  if (v1779) {
    v1927 = v1769;
    }
  else {
    const v1940 = '-';
    v1927 = v1940;
    }
  const v1942 = stdlib.digest(ctc2, [v1927]);
  const v1945 = stdlib.digestEq(v1942, v1925);
  const v1946 = v1926 ? true : v1945;
  let v1947;
  if (v1799) {
    v1947 = v1789;
    }
  else {
    const v1960 = '-';
    v1947 = v1960;
    }
  const v1962 = stdlib.digest(ctc2, [v1947]);
  const v1965 = stdlib.digestEq(v1962, v1925);
  const v1966 = v1946 ? true : v1965;
  let v1967;
  if (v1819) {
    v1967 = v1750;
    }
  else {
    const v1980 = '-';
    v1967 = v1980;
    }
  const v1982 = stdlib.digest(ctc2, [v1967]);
  const v1985 = stdlib.digestEq(v1982, v1925);
  const v1986 = v1966 ? true : v1985;
  let v1987;
  if (v1839) {
    v1987 = v1751;
    }
  else {
    const v2000 = '-';
    v1987 = v2000;
    }
  const v2002 = stdlib.digest(ctc2, [v1987]);
  const v2005 = stdlib.digestEq(v2002, v1925);
  const v2006 = v1986 ? true : v2005;
  let v2007;
  if (v1859) {
    v2007 = v1756;
    }
  else {
    const v2020 = '-';
    v2007 = v2020;
    }
  const v2022 = stdlib.digest(ctc2, [v2007]);
  const v2025 = stdlib.digestEq(v2022, v1925);
  const v2026 = v2006 ? true : v2025;
  let v2027;
  if (v1879) {
    v2027 = v1750;
    }
  else {
    const v2040 = '-';
    v2027 = v2040;
    }
  const v2042 = stdlib.digest(ctc2, [v2027]);
  const v2045 = stdlib.digestEq(v2042, v1925);
  const v2046 = v2026 ? true : v2045;
  let v2047;
  if (v1899) {
    v2047 = v1756;
    }
  else {
    const v2060 = '-';
    v2047 = v2060;
    }
  const v2062 = stdlib.digest(ctc2, [v2047]);
  const v2065 = stdlib.digestEq(v2062, v1925);
  const v2066 = v2046 ? true : v2065;
  const v2067 = v2066 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
  const v2068 = v1907 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v2067;
  ;
  stdlib.protect(ctc3, await interact.endsWith(v1159), {
    at: './index.rsh:195:22:application',
    fs: ['at ./index.rsh:194:7:application call to [unknown function] (defined at: ./index.rsh:194:19:function exp)'],
    msg: 'endsWith',
    who: 'Alice'
    });
  stdlib.protect(ctc3, await interact.seeOutcome(v2068), {
    at: './index.rsh:196:24:application',
    fs: ['at ./index.rsh:194:7:application call to [unknown function] (defined at: ./index.rsh:194:19:function exp)'],
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
  const {data: [v1126], secs: v1128, time: v1127, didSend: v64, from: v1125 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptBudget(v1126), {
    at: './index.rsh:154:26:application',
    fs: ['at ./index.rsh:154:26:application call to [unknown function] (defined at: ./index.rsh:154:26:function exp)', 'at ./index.rsh:154:26:application call to "liftedInteract" (defined at: ./index.rsh:154:26:application)'],
    msg: 'acceptBudget',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1125, v1126],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1127,
    onlyIf: true,
    out_tys: [],
    pay: [v1126, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1134, time: v1133, didSend: v74, from: v1132 } = txn2;
      
      const v1136 = stdlib.safeAdd(v1126, v1126);
      sim_r.txns.push({
        amt: v1126,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v1137 = ' ';
      const v1146 = [v1137, v1137, v1137, v1137, v1137, v1137, v1137, v1137, v1137];
      const v1147 = {
        board: v1146,
        playerTurn: true
        };
      const v1159 = v1147;
      const v1160 = v1133;
      const v1167 = v1136;
      
      if (await (async () => {
        const v1171 = v1159.board;
        const v1172 = await stdlib.Array_asyncReduce([v1171], true, async([v1174], v1173, v1175) => {
          const v1176 = 'x';
          const v1177 = stdlib.digest(ctc3, [v1174]);
          const v1179 = stdlib.digest(ctc3, [v1176]);
          const v1180 = stdlib.digestEq(v1177, v1179);
          const v1181 = 'o';
          const v1184 = stdlib.digest(ctc3, [v1181]);
          const v1185 = stdlib.digestEq(v1177, v1184);
          const v1186 = v1180 ? true : v1185;
          const v1187 = v1173 ? v1186 : false;
          
          return v1187;})
        let v1189;
        const v1190 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
        const v1191 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
        const v1192 = stdlib.digest(ctc3, [v1190]);
        const v1193 = stdlib.digest(ctc3, [v1191]);
        const v1194 = stdlib.digestEq(v1192, v1193);
        const v1196 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
        const v1198 = stdlib.digest(ctc3, [v1196]);
        const v1199 = stdlib.digestEq(v1192, v1198);
        const v1200 = v1194 ? v1199 : false;
        if (v1200) {
          v1189 = v1190;
          }
        else {
          const v1202 = '-';
          v1189 = v1202;
          }
        const v1203 = 'x';
        const v1204 = stdlib.digest(ctc3, [v1189]);
        const v1206 = stdlib.digest(ctc3, [v1203]);
        const v1207 = stdlib.digestEq(v1204, v1206);
        let v1208;
        const v1209 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
        const v1210 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
        const v1211 = stdlib.digest(ctc3, [v1209]);
        const v1212 = stdlib.digest(ctc3, [v1210]);
        const v1213 = stdlib.digestEq(v1211, v1212);
        const v1215 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
        const v1217 = stdlib.digest(ctc3, [v1215]);
        const v1218 = stdlib.digestEq(v1211, v1217);
        const v1219 = v1213 ? v1218 : false;
        if (v1219) {
          v1208 = v1209;
          }
        else {
          const v1221 = '-';
          v1208 = v1221;
          }
        const v1223 = stdlib.digest(ctc3, [v1208]);
        const v1226 = stdlib.digestEq(v1223, v1206);
        const v1227 = v1207 ? true : v1226;
        let v1228;
        const v1229 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
        const v1230 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
        const v1231 = stdlib.digest(ctc3, [v1229]);
        const v1232 = stdlib.digest(ctc3, [v1230]);
        const v1233 = stdlib.digestEq(v1231, v1232);
        const v1235 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
        const v1237 = stdlib.digest(ctc3, [v1235]);
        const v1238 = stdlib.digestEq(v1231, v1237);
        const v1239 = v1233 ? v1238 : false;
        if (v1239) {
          v1228 = v1229;
          }
        else {
          const v1241 = '-';
          v1228 = v1241;
          }
        const v1243 = stdlib.digest(ctc3, [v1228]);
        const v1246 = stdlib.digestEq(v1243, v1206);
        const v1247 = v1227 ? true : v1246;
        let v1248;
        if (v1200) {
          v1248 = v1190;
          }
        else {
          const v1261 = '-';
          v1248 = v1261;
          }
        const v1262 = 'o';
        const v1263 = stdlib.digest(ctc3, [v1248]);
        const v1265 = stdlib.digest(ctc3, [v1262]);
        const v1266 = stdlib.digestEq(v1263, v1265);
        const v1267 = v1247 ? true : v1266;
        let v1268;
        if (v1219) {
          v1268 = v1209;
          }
        else {
          const v1281 = '-';
          v1268 = v1281;
          }
        const v1283 = stdlib.digest(ctc3, [v1268]);
        const v1286 = stdlib.digestEq(v1283, v1265);
        const v1287 = v1267 ? true : v1286;
        let v1288;
        if (v1239) {
          v1288 = v1229;
          }
        else {
          const v1301 = '-';
          v1288 = v1301;
          }
        const v1303 = stdlib.digest(ctc3, [v1288]);
        const v1306 = stdlib.digestEq(v1303, v1265);
        const v1307 = v1287 ? true : v1306;
        let v1308;
        const v1313 = stdlib.digestEq(v1192, v1211);
        const v1318 = stdlib.digestEq(v1192, v1231);
        const v1319 = v1313 ? v1318 : false;
        if (v1319) {
          v1308 = v1190;
          }
        else {
          const v1321 = '-';
          v1308 = v1321;
          }
        const v1323 = stdlib.digest(ctc3, [v1308]);
        const v1326 = stdlib.digestEq(v1323, v1206);
        const v1327 = v1307 ? true : v1326;
        let v1328;
        const v1333 = stdlib.digestEq(v1193, v1212);
        const v1338 = stdlib.digestEq(v1193, v1232);
        const v1339 = v1333 ? v1338 : false;
        if (v1339) {
          v1328 = v1191;
          }
        else {
          const v1341 = '-';
          v1328 = v1341;
          }
        const v1343 = stdlib.digest(ctc3, [v1328]);
        const v1346 = stdlib.digestEq(v1343, v1206);
        const v1347 = v1327 ? true : v1346;
        let v1348;
        const v1353 = stdlib.digestEq(v1198, v1217);
        const v1358 = stdlib.digestEq(v1198, v1237);
        const v1359 = v1353 ? v1358 : false;
        if (v1359) {
          v1348 = v1196;
          }
        else {
          const v1361 = '-';
          v1348 = v1361;
          }
        const v1363 = stdlib.digest(ctc3, [v1348]);
        const v1366 = stdlib.digestEq(v1363, v1206);
        const v1367 = v1347 ? true : v1366;
        let v1368;
        if (v1319) {
          v1368 = v1190;
          }
        else {
          const v1381 = '-';
          v1368 = v1381;
          }
        const v1383 = stdlib.digest(ctc3, [v1368]);
        const v1386 = stdlib.digestEq(v1383, v1265);
        const v1387 = v1367 ? true : v1386;
        let v1388;
        if (v1339) {
          v1388 = v1191;
          }
        else {
          const v1401 = '-';
          v1388 = v1401;
          }
        const v1403 = stdlib.digest(ctc3, [v1388]);
        const v1406 = stdlib.digestEq(v1403, v1265);
        const v1407 = v1387 ? true : v1406;
        let v1408;
        if (v1359) {
          v1408 = v1196;
          }
        else {
          const v1421 = '-';
          v1408 = v1421;
          }
        const v1423 = stdlib.digest(ctc3, [v1408]);
        const v1426 = stdlib.digestEq(v1423, v1265);
        const v1427 = v1407 ? true : v1426;
        let v1428;
        const v1433 = stdlib.digestEq(v1192, v1212);
        const v1438 = stdlib.digestEq(v1192, v1237);
        const v1439 = v1433 ? v1438 : false;
        if (v1439) {
          v1428 = v1190;
          }
        else {
          const v1441 = '-';
          v1428 = v1441;
          }
        const v1443 = stdlib.digest(ctc3, [v1428]);
        const v1446 = stdlib.digestEq(v1443, v1206);
        const v1447 = v1427 ? true : v1446;
        let v1448;
        if (v1439) {
          v1448 = v1190;
          }
        else {
          const v1461 = '-';
          v1448 = v1461;
          }
        const v1463 = stdlib.digest(ctc3, [v1448]);
        const v1466 = stdlib.digestEq(v1463, v1265);
        const v1467 = v1447 ? true : v1466;
        let v1468;
        const v1473 = stdlib.digestEq(v1198, v1212);
        const v1478 = stdlib.digestEq(v1198, v1231);
        const v1479 = v1473 ? v1478 : false;
        if (v1479) {
          v1468 = v1196;
          }
        else {
          const v1481 = '-';
          v1468 = v1481;
          }
        const v1483 = stdlib.digest(ctc3, [v1468]);
        const v1486 = stdlib.digestEq(v1483, v1206);
        const v1487 = v1467 ? true : v1486;
        let v1488;
        if (v1479) {
          v1488 = v1196;
          }
        else {
          const v1501 = '-';
          v1488 = v1501;
          }
        const v1503 = stdlib.digest(ctc3, [v1488]);
        const v1506 = stdlib.digestEq(v1503, v1265);
        const v1507 = v1487 ? true : v1506;
        const v1508 = v1172 ? true : v1507;
        const v1509 = v1508 ? false : true;
        
        return v1509;})()) {
        const v1510 = v1159.playerTurn;
        if (v1510) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.isHalt = false;
          }}
      else {
        const v1748 = v1159.board;
        let v1749;
        const v1750 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
        const v1751 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
        const v1752 = stdlib.digest(ctc3, [v1750]);
        const v1753 = stdlib.digest(ctc3, [v1751]);
        const v1754 = stdlib.digestEq(v1752, v1753);
        const v1756 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
        const v1758 = stdlib.digest(ctc3, [v1756]);
        const v1759 = stdlib.digestEq(v1752, v1758);
        const v1760 = v1754 ? v1759 : false;
        if (v1760) {
          v1749 = v1750;
          }
        else {
          const v1762 = '-';
          v1749 = v1762;
          }
        const v1763 = 'x';
        const v1764 = stdlib.digest(ctc3, [v1749]);
        const v1766 = stdlib.digest(ctc3, [v1763]);
        const v1767 = stdlib.digestEq(v1764, v1766);
        let v1768;
        const v1769 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
        const v1770 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
        const v1771 = stdlib.digest(ctc3, [v1769]);
        const v1772 = stdlib.digest(ctc3, [v1770]);
        const v1773 = stdlib.digestEq(v1771, v1772);
        const v1775 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
        const v1777 = stdlib.digest(ctc3, [v1775]);
        const v1778 = stdlib.digestEq(v1771, v1777);
        const v1779 = v1773 ? v1778 : false;
        if (v1779) {
          v1768 = v1769;
          }
        else {
          const v1781 = '-';
          v1768 = v1781;
          }
        const v1783 = stdlib.digest(ctc3, [v1768]);
        const v1786 = stdlib.digestEq(v1783, v1766);
        const v1787 = v1767 ? true : v1786;
        let v1788;
        const v1789 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
        const v1790 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
        const v1791 = stdlib.digest(ctc3, [v1789]);
        const v1792 = stdlib.digest(ctc3, [v1790]);
        const v1793 = stdlib.digestEq(v1791, v1792);
        const v1795 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
        const v1797 = stdlib.digest(ctc3, [v1795]);
        const v1798 = stdlib.digestEq(v1791, v1797);
        const v1799 = v1793 ? v1798 : false;
        if (v1799) {
          v1788 = v1789;
          }
        else {
          const v1801 = '-';
          v1788 = v1801;
          }
        const v1803 = stdlib.digest(ctc3, [v1788]);
        const v1806 = stdlib.digestEq(v1803, v1766);
        const v1807 = v1787 ? true : v1806;
        let v1808;
        const v1813 = stdlib.digestEq(v1752, v1771);
        const v1818 = stdlib.digestEq(v1752, v1791);
        const v1819 = v1813 ? v1818 : false;
        if (v1819) {
          v1808 = v1750;
          }
        else {
          const v1821 = '-';
          v1808 = v1821;
          }
        const v1823 = stdlib.digest(ctc3, [v1808]);
        const v1826 = stdlib.digestEq(v1823, v1766);
        const v1827 = v1807 ? true : v1826;
        let v1828;
        const v1833 = stdlib.digestEq(v1753, v1772);
        const v1838 = stdlib.digestEq(v1753, v1792);
        const v1839 = v1833 ? v1838 : false;
        if (v1839) {
          v1828 = v1751;
          }
        else {
          const v1841 = '-';
          v1828 = v1841;
          }
        const v1843 = stdlib.digest(ctc3, [v1828]);
        const v1846 = stdlib.digestEq(v1843, v1766);
        const v1847 = v1827 ? true : v1846;
        let v1848;
        const v1853 = stdlib.digestEq(v1758, v1777);
        const v1858 = stdlib.digestEq(v1758, v1797);
        const v1859 = v1853 ? v1858 : false;
        if (v1859) {
          v1848 = v1756;
          }
        else {
          const v1861 = '-';
          v1848 = v1861;
          }
        const v1863 = stdlib.digest(ctc3, [v1848]);
        const v1866 = stdlib.digestEq(v1863, v1766);
        const v1867 = v1847 ? true : v1866;
        let v1868;
        const v1873 = stdlib.digestEq(v1752, v1772);
        const v1878 = stdlib.digestEq(v1752, v1797);
        const v1879 = v1873 ? v1878 : false;
        if (v1879) {
          v1868 = v1750;
          }
        else {
          const v1881 = '-';
          v1868 = v1881;
          }
        const v1883 = stdlib.digest(ctc3, [v1868]);
        const v1886 = stdlib.digestEq(v1883, v1766);
        const v1887 = v1867 ? true : v1886;
        let v1888;
        const v1893 = stdlib.digestEq(v1758, v1772);
        const v1898 = stdlib.digestEq(v1758, v1791);
        const v1899 = v1893 ? v1898 : false;
        if (v1899) {
          v1888 = v1756;
          }
        else {
          const v1901 = '-';
          v1888 = v1901;
          }
        const v1903 = stdlib.digest(ctc3, [v1888]);
        const v1906 = stdlib.digestEq(v1903, v1766);
        const v1907 = v1887 ? true : v1906;
        let v1908;
        if (v1760) {
          v1908 = v1750;
          }
        else {
          const v1921 = '-';
          v1908 = v1921;
          }
        const v1922 = 'o';
        const v1923 = stdlib.digest(ctc3, [v1908]);
        const v1925 = stdlib.digest(ctc3, [v1922]);
        const v1926 = stdlib.digestEq(v1923, v1925);
        let v1927;
        if (v1779) {
          v1927 = v1769;
          }
        else {
          const v1940 = '-';
          v1927 = v1940;
          }
        const v1942 = stdlib.digest(ctc3, [v1927]);
        const v1945 = stdlib.digestEq(v1942, v1925);
        const v1946 = v1926 ? true : v1945;
        let v1947;
        if (v1799) {
          v1947 = v1789;
          }
        else {
          const v1960 = '-';
          v1947 = v1960;
          }
        const v1962 = stdlib.digest(ctc3, [v1947]);
        const v1965 = stdlib.digestEq(v1962, v1925);
        const v1966 = v1946 ? true : v1965;
        let v1967;
        if (v1819) {
          v1967 = v1750;
          }
        else {
          const v1980 = '-';
          v1967 = v1980;
          }
        const v1982 = stdlib.digest(ctc3, [v1967]);
        const v1985 = stdlib.digestEq(v1982, v1925);
        const v1986 = v1966 ? true : v1985;
        let v1987;
        if (v1839) {
          v1987 = v1751;
          }
        else {
          const v2000 = '-';
          v1987 = v2000;
          }
        const v2002 = stdlib.digest(ctc3, [v1987]);
        const v2005 = stdlib.digestEq(v2002, v1925);
        const v2006 = v1986 ? true : v2005;
        let v2007;
        if (v1859) {
          v2007 = v1756;
          }
        else {
          const v2020 = '-';
          v2007 = v2020;
          }
        const v2022 = stdlib.digest(ctc3, [v2007]);
        const v2025 = stdlib.digestEq(v2022, v1925);
        const v2026 = v2006 ? true : v2025;
        let v2027;
        if (v1879) {
          v2027 = v1750;
          }
        else {
          const v2040 = '-';
          v2027 = v2040;
          }
        const v2042 = stdlib.digest(ctc3, [v2027]);
        const v2045 = stdlib.digestEq(v2042, v1925);
        const v2046 = v2026 ? true : v2045;
        let v2047;
        if (v1899) {
          v2047 = v1756;
          }
        else {
          const v2060 = '-';
          v2047 = v2060;
          }
        const v2062 = stdlib.digest(ctc3, [v2047]);
        const v2065 = stdlib.digestEq(v2062, v1925);
        const v2066 = v2046 ? true : v2065;
        const v2067 = v2066 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
        const v2068 = v1907 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v2067;
        sim_r.txns.push({
          kind: 'from',
          to: v1125,
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
  const {data: [], secs: v1134, time: v1133, didSend: v74, from: v1132 } = txn2;
  const v1136 = stdlib.safeAdd(v1126, v1126);
  ;
  const v1137 = ' ';
  const v1146 = [v1137, v1137, v1137, v1137, v1137, v1137, v1137, v1137, v1137];
  const v1147 = {
    board: v1146,
    playerTurn: true
    };
  let v1159 = v1147;
  let v1160 = v1133;
  let v1167 = v1136;
  
  while (await (async () => {
    const v1171 = v1159.board;
    const v1172 = await stdlib.Array_asyncReduce([v1171], true, async([v1174], v1173, v1175) => {
      const v1176 = 'x';
      const v1177 = stdlib.digest(ctc3, [v1174]);
      const v1179 = stdlib.digest(ctc3, [v1176]);
      const v1180 = stdlib.digestEq(v1177, v1179);
      const v1181 = 'o';
      const v1184 = stdlib.digest(ctc3, [v1181]);
      const v1185 = stdlib.digestEq(v1177, v1184);
      const v1186 = v1180 ? true : v1185;
      const v1187 = v1173 ? v1186 : false;
      
      return v1187;})
    let v1189;
    const v1190 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
    const v1191 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
    const v1192 = stdlib.digest(ctc3, [v1190]);
    const v1193 = stdlib.digest(ctc3, [v1191]);
    const v1194 = stdlib.digestEq(v1192, v1193);
    const v1196 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
    const v1198 = stdlib.digest(ctc3, [v1196]);
    const v1199 = stdlib.digestEq(v1192, v1198);
    const v1200 = v1194 ? v1199 : false;
    if (v1200) {
      v1189 = v1190;
      }
    else {
      const v1202 = '-';
      v1189 = v1202;
      }
    const v1203 = 'x';
    const v1204 = stdlib.digest(ctc3, [v1189]);
    const v1206 = stdlib.digest(ctc3, [v1203]);
    const v1207 = stdlib.digestEq(v1204, v1206);
    let v1208;
    const v1209 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
    const v1210 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
    const v1211 = stdlib.digest(ctc3, [v1209]);
    const v1212 = stdlib.digest(ctc3, [v1210]);
    const v1213 = stdlib.digestEq(v1211, v1212);
    const v1215 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
    const v1217 = stdlib.digest(ctc3, [v1215]);
    const v1218 = stdlib.digestEq(v1211, v1217);
    const v1219 = v1213 ? v1218 : false;
    if (v1219) {
      v1208 = v1209;
      }
    else {
      const v1221 = '-';
      v1208 = v1221;
      }
    const v1223 = stdlib.digest(ctc3, [v1208]);
    const v1226 = stdlib.digestEq(v1223, v1206);
    const v1227 = v1207 ? true : v1226;
    let v1228;
    const v1229 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
    const v1230 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
    const v1231 = stdlib.digest(ctc3, [v1229]);
    const v1232 = stdlib.digest(ctc3, [v1230]);
    const v1233 = stdlib.digestEq(v1231, v1232);
    const v1235 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
    const v1237 = stdlib.digest(ctc3, [v1235]);
    const v1238 = stdlib.digestEq(v1231, v1237);
    const v1239 = v1233 ? v1238 : false;
    if (v1239) {
      v1228 = v1229;
      }
    else {
      const v1241 = '-';
      v1228 = v1241;
      }
    const v1243 = stdlib.digest(ctc3, [v1228]);
    const v1246 = stdlib.digestEq(v1243, v1206);
    const v1247 = v1227 ? true : v1246;
    let v1248;
    if (v1200) {
      v1248 = v1190;
      }
    else {
      const v1261 = '-';
      v1248 = v1261;
      }
    const v1262 = 'o';
    const v1263 = stdlib.digest(ctc3, [v1248]);
    const v1265 = stdlib.digest(ctc3, [v1262]);
    const v1266 = stdlib.digestEq(v1263, v1265);
    const v1267 = v1247 ? true : v1266;
    let v1268;
    if (v1219) {
      v1268 = v1209;
      }
    else {
      const v1281 = '-';
      v1268 = v1281;
      }
    const v1283 = stdlib.digest(ctc3, [v1268]);
    const v1286 = stdlib.digestEq(v1283, v1265);
    const v1287 = v1267 ? true : v1286;
    let v1288;
    if (v1239) {
      v1288 = v1229;
      }
    else {
      const v1301 = '-';
      v1288 = v1301;
      }
    const v1303 = stdlib.digest(ctc3, [v1288]);
    const v1306 = stdlib.digestEq(v1303, v1265);
    const v1307 = v1287 ? true : v1306;
    let v1308;
    const v1313 = stdlib.digestEq(v1192, v1211);
    const v1318 = stdlib.digestEq(v1192, v1231);
    const v1319 = v1313 ? v1318 : false;
    if (v1319) {
      v1308 = v1190;
      }
    else {
      const v1321 = '-';
      v1308 = v1321;
      }
    const v1323 = stdlib.digest(ctc3, [v1308]);
    const v1326 = stdlib.digestEq(v1323, v1206);
    const v1327 = v1307 ? true : v1326;
    let v1328;
    const v1333 = stdlib.digestEq(v1193, v1212);
    const v1338 = stdlib.digestEq(v1193, v1232);
    const v1339 = v1333 ? v1338 : false;
    if (v1339) {
      v1328 = v1191;
      }
    else {
      const v1341 = '-';
      v1328 = v1341;
      }
    const v1343 = stdlib.digest(ctc3, [v1328]);
    const v1346 = stdlib.digestEq(v1343, v1206);
    const v1347 = v1327 ? true : v1346;
    let v1348;
    const v1353 = stdlib.digestEq(v1198, v1217);
    const v1358 = stdlib.digestEq(v1198, v1237);
    const v1359 = v1353 ? v1358 : false;
    if (v1359) {
      v1348 = v1196;
      }
    else {
      const v1361 = '-';
      v1348 = v1361;
      }
    const v1363 = stdlib.digest(ctc3, [v1348]);
    const v1366 = stdlib.digestEq(v1363, v1206);
    const v1367 = v1347 ? true : v1366;
    let v1368;
    if (v1319) {
      v1368 = v1190;
      }
    else {
      const v1381 = '-';
      v1368 = v1381;
      }
    const v1383 = stdlib.digest(ctc3, [v1368]);
    const v1386 = stdlib.digestEq(v1383, v1265);
    const v1387 = v1367 ? true : v1386;
    let v1388;
    if (v1339) {
      v1388 = v1191;
      }
    else {
      const v1401 = '-';
      v1388 = v1401;
      }
    const v1403 = stdlib.digest(ctc3, [v1388]);
    const v1406 = stdlib.digestEq(v1403, v1265);
    const v1407 = v1387 ? true : v1406;
    let v1408;
    if (v1359) {
      v1408 = v1196;
      }
    else {
      const v1421 = '-';
      v1408 = v1421;
      }
    const v1423 = stdlib.digest(ctc3, [v1408]);
    const v1426 = stdlib.digestEq(v1423, v1265);
    const v1427 = v1407 ? true : v1426;
    let v1428;
    const v1433 = stdlib.digestEq(v1192, v1212);
    const v1438 = stdlib.digestEq(v1192, v1237);
    const v1439 = v1433 ? v1438 : false;
    if (v1439) {
      v1428 = v1190;
      }
    else {
      const v1441 = '-';
      v1428 = v1441;
      }
    const v1443 = stdlib.digest(ctc3, [v1428]);
    const v1446 = stdlib.digestEq(v1443, v1206);
    const v1447 = v1427 ? true : v1446;
    let v1448;
    if (v1439) {
      v1448 = v1190;
      }
    else {
      const v1461 = '-';
      v1448 = v1461;
      }
    const v1463 = stdlib.digest(ctc3, [v1448]);
    const v1466 = stdlib.digestEq(v1463, v1265);
    const v1467 = v1447 ? true : v1466;
    let v1468;
    const v1473 = stdlib.digestEq(v1198, v1212);
    const v1478 = stdlib.digestEq(v1198, v1231);
    const v1479 = v1473 ? v1478 : false;
    if (v1479) {
      v1468 = v1196;
      }
    else {
      const v1481 = '-';
      v1468 = v1481;
      }
    const v1483 = stdlib.digest(ctc3, [v1468]);
    const v1486 = stdlib.digestEq(v1483, v1206);
    const v1487 = v1467 ? true : v1486;
    let v1488;
    if (v1479) {
      v1488 = v1196;
      }
    else {
      const v1501 = '-';
      v1488 = v1501;
      }
    const v1503 = stdlib.digest(ctc3, [v1488]);
    const v1506 = stdlib.digestEq(v1503, v1265);
    const v1507 = v1487 ? true : v1506;
    const v1508 = v1172 ? true : v1507;
    const v1509 = v1508 ? false : true;
    
    return v1509;})()) {
    const v1510 = v1159.playerTurn;
    if (v1510) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 3,
        out_tys: [ctc0],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1548], secs: v1550, time: v1549, didSend: v497, from: v1547 } = txn3;
      ;
      const v1551 = stdlib.addressEq(v1125, v1547);
      stdlib.assert(v1551, {
        at: './index.rsh:167:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1552 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1548);
      const v1553 = stdlib.lt(v1548, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1554 = v1552 ? v1553 : false;
      stdlib.assert(v1554, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:168:42:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1555 = v1159.board;
      const v1557 = v1555[v1548];
      const v1558 = 'x';
      const v1559 = stdlib.digest(ctc3, [v1557]);
      const v1561 = stdlib.digest(ctc3, [v1558]);
      const v1562 = stdlib.digestEq(v1559, v1561);
      let v1563;
      if (v1562) {
        v1563 = true;
        }
      else {
        const v1567 = 'o';
        const v1570 = stdlib.digest(ctc3, [v1567]);
        const v1571 = stdlib.digestEq(v1559, v1570);
        v1563 = v1571;
        }
      const v1572 = v1563 ? false : true;
      stdlib.assert(v1572, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:168:42:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const v1579 = stdlib.Array_set(v1555, v1548, v1558);
      const v1584 = {
        board: v1579,
        playerTurn: false
        };
      let v1607;
      if (v1562) {
        v1607 = true;
        }
      else {
        const v1611 = 'o';
        const v1614 = stdlib.digest(ctc3, [v1611]);
        const v1615 = stdlib.digestEq(v1559, v1614);
        v1607 = v1615;
        }
      const v1616 = v1607 ? false : true;
      stdlib.assert(v1616, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:169:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const cv1159 = v1584;
      const cv1160 = v1549;
      const cv1167 = v1167;
      
      v1159 = cv1159;
      v1160 = cv1160;
      v1167 = cv1167;
      
      continue;
      
      }
    else {
      const v1632 = v1159.board;
      const v1643 = stdlib.protect(ctc0, await interact.getSquareSelected(v1159), {
        at: './index.rsh:102:43:application',
        fs: ['at ./index.rsh:176:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Bob'
        });
      const v1644 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1643);
      const v1645 = stdlib.lt(v1643, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1646 = v1644 ? v1645 : false;
      stdlib.assert(v1646, {
        at: './index.rsh:103:9:application',
        fs: ['at ./index.rsh:176:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1649 = v1632[v1643];
      const v1650 = 'x';
      const v1651 = stdlib.digest(ctc3, [v1649]);
      const v1653 = stdlib.digest(ctc3, [v1650]);
      const v1654 = stdlib.digestEq(v1651, v1653);
      let v1655;
      if (v1654) {
        v1655 = true;
        }
      else {
        const v1659 = 'o';
        const v1662 = stdlib.digest(ctc3, [v1659]);
        const v1663 = stdlib.digestEq(v1651, v1662);
        v1655 = v1663;
        }
      const v1664 = v1655 ? false : true;
      stdlib.assert(v1664, {
        at: './index.rsh:104:9:application',
        fs: ['at ./index.rsh:176:37:application call to "getValidSquare" (defined at: ./index.rsh:101:42:function exp)', 'at ./index.rsh:175:13:application call to [unknown function] (defined at: ./index.rsh:175:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v1125, v1132, v1159, v1167, v1643],
        evt_cnt: 1,
        funcNum: 4,
        lct: v1160,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:179:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1666], secs: v1668, time: v1667, didSend: v634, from: v1665 } = txn3;
          
          ;
          const v1673 = v1159.board;
          const v1699 = 'o';
          const v1701 = stdlib.Array_set(v1673, v1666, v1699);
          const v1702 = {
            board: v1701,
            playerTurn: true
            };
          
          const cv1159 = v1702;
          const cv1160 = v1667;
          const cv1167 = v1167;
          
          await (async () => {
            const v1159 = cv1159;
            const v1160 = cv1160;
            const v1167 = cv1167;
            
            if (await (async () => {
              const v1171 = v1159.board;
              const v1172 = await stdlib.Array_asyncReduce([v1171], true, async([v1174], v1173, v1175) => {
                const v1176 = 'x';
                const v1177 = stdlib.digest(ctc3, [v1174]);
                const v1179 = stdlib.digest(ctc3, [v1176]);
                const v1180 = stdlib.digestEq(v1177, v1179);
                const v1181 = 'o';
                const v1184 = stdlib.digest(ctc3, [v1181]);
                const v1185 = stdlib.digestEq(v1177, v1184);
                const v1186 = v1180 ? true : v1185;
                const v1187 = v1173 ? v1186 : false;
                
                return v1187;})
              let v1189;
              const v1190 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1191 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1192 = stdlib.digest(ctc3, [v1190]);
              const v1193 = stdlib.digest(ctc3, [v1191]);
              const v1194 = stdlib.digestEq(v1192, v1193);
              const v1196 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1198 = stdlib.digest(ctc3, [v1196]);
              const v1199 = stdlib.digestEq(v1192, v1198);
              const v1200 = v1194 ? v1199 : false;
              if (v1200) {
                v1189 = v1190;
                }
              else {
                const v1202 = '-';
                v1189 = v1202;
                }
              const v1203 = 'x';
              const v1204 = stdlib.digest(ctc3, [v1189]);
              const v1206 = stdlib.digest(ctc3, [v1203]);
              const v1207 = stdlib.digestEq(v1204, v1206);
              let v1208;
              const v1209 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1210 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1211 = stdlib.digest(ctc3, [v1209]);
              const v1212 = stdlib.digest(ctc3, [v1210]);
              const v1213 = stdlib.digestEq(v1211, v1212);
              const v1215 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1217 = stdlib.digest(ctc3, [v1215]);
              const v1218 = stdlib.digestEq(v1211, v1217);
              const v1219 = v1213 ? v1218 : false;
              if (v1219) {
                v1208 = v1209;
                }
              else {
                const v1221 = '-';
                v1208 = v1221;
                }
              const v1223 = stdlib.digest(ctc3, [v1208]);
              const v1226 = stdlib.digestEq(v1223, v1206);
              const v1227 = v1207 ? true : v1226;
              let v1228;
              const v1229 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1230 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1231 = stdlib.digest(ctc3, [v1229]);
              const v1232 = stdlib.digest(ctc3, [v1230]);
              const v1233 = stdlib.digestEq(v1231, v1232);
              const v1235 = v1171[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1237 = stdlib.digest(ctc3, [v1235]);
              const v1238 = stdlib.digestEq(v1231, v1237);
              const v1239 = v1233 ? v1238 : false;
              if (v1239) {
                v1228 = v1229;
                }
              else {
                const v1241 = '-';
                v1228 = v1241;
                }
              const v1243 = stdlib.digest(ctc3, [v1228]);
              const v1246 = stdlib.digestEq(v1243, v1206);
              const v1247 = v1227 ? true : v1246;
              let v1248;
              if (v1200) {
                v1248 = v1190;
                }
              else {
                const v1261 = '-';
                v1248 = v1261;
                }
              const v1262 = 'o';
              const v1263 = stdlib.digest(ctc3, [v1248]);
              const v1265 = stdlib.digest(ctc3, [v1262]);
              const v1266 = stdlib.digestEq(v1263, v1265);
              const v1267 = v1247 ? true : v1266;
              let v1268;
              if (v1219) {
                v1268 = v1209;
                }
              else {
                const v1281 = '-';
                v1268 = v1281;
                }
              const v1283 = stdlib.digest(ctc3, [v1268]);
              const v1286 = stdlib.digestEq(v1283, v1265);
              const v1287 = v1267 ? true : v1286;
              let v1288;
              if (v1239) {
                v1288 = v1229;
                }
              else {
                const v1301 = '-';
                v1288 = v1301;
                }
              const v1303 = stdlib.digest(ctc3, [v1288]);
              const v1306 = stdlib.digestEq(v1303, v1265);
              const v1307 = v1287 ? true : v1306;
              let v1308;
              const v1313 = stdlib.digestEq(v1192, v1211);
              const v1318 = stdlib.digestEq(v1192, v1231);
              const v1319 = v1313 ? v1318 : false;
              if (v1319) {
                v1308 = v1190;
                }
              else {
                const v1321 = '-';
                v1308 = v1321;
                }
              const v1323 = stdlib.digest(ctc3, [v1308]);
              const v1326 = stdlib.digestEq(v1323, v1206);
              const v1327 = v1307 ? true : v1326;
              let v1328;
              const v1333 = stdlib.digestEq(v1193, v1212);
              const v1338 = stdlib.digestEq(v1193, v1232);
              const v1339 = v1333 ? v1338 : false;
              if (v1339) {
                v1328 = v1191;
                }
              else {
                const v1341 = '-';
                v1328 = v1341;
                }
              const v1343 = stdlib.digest(ctc3, [v1328]);
              const v1346 = stdlib.digestEq(v1343, v1206);
              const v1347 = v1327 ? true : v1346;
              let v1348;
              const v1353 = stdlib.digestEq(v1198, v1217);
              const v1358 = stdlib.digestEq(v1198, v1237);
              const v1359 = v1353 ? v1358 : false;
              if (v1359) {
                v1348 = v1196;
                }
              else {
                const v1361 = '-';
                v1348 = v1361;
                }
              const v1363 = stdlib.digest(ctc3, [v1348]);
              const v1366 = stdlib.digestEq(v1363, v1206);
              const v1367 = v1347 ? true : v1366;
              let v1368;
              if (v1319) {
                v1368 = v1190;
                }
              else {
                const v1381 = '-';
                v1368 = v1381;
                }
              const v1383 = stdlib.digest(ctc3, [v1368]);
              const v1386 = stdlib.digestEq(v1383, v1265);
              const v1387 = v1367 ? true : v1386;
              let v1388;
              if (v1339) {
                v1388 = v1191;
                }
              else {
                const v1401 = '-';
                v1388 = v1401;
                }
              const v1403 = stdlib.digest(ctc3, [v1388]);
              const v1406 = stdlib.digestEq(v1403, v1265);
              const v1407 = v1387 ? true : v1406;
              let v1408;
              if (v1359) {
                v1408 = v1196;
                }
              else {
                const v1421 = '-';
                v1408 = v1421;
                }
              const v1423 = stdlib.digest(ctc3, [v1408]);
              const v1426 = stdlib.digestEq(v1423, v1265);
              const v1427 = v1407 ? true : v1426;
              let v1428;
              const v1433 = stdlib.digestEq(v1192, v1212);
              const v1438 = stdlib.digestEq(v1192, v1237);
              const v1439 = v1433 ? v1438 : false;
              if (v1439) {
                v1428 = v1190;
                }
              else {
                const v1441 = '-';
                v1428 = v1441;
                }
              const v1443 = stdlib.digest(ctc3, [v1428]);
              const v1446 = stdlib.digestEq(v1443, v1206);
              const v1447 = v1427 ? true : v1446;
              let v1448;
              if (v1439) {
                v1448 = v1190;
                }
              else {
                const v1461 = '-';
                v1448 = v1461;
                }
              const v1463 = stdlib.digest(ctc3, [v1448]);
              const v1466 = stdlib.digestEq(v1463, v1265);
              const v1467 = v1447 ? true : v1466;
              let v1468;
              const v1473 = stdlib.digestEq(v1198, v1212);
              const v1478 = stdlib.digestEq(v1198, v1231);
              const v1479 = v1473 ? v1478 : false;
              if (v1479) {
                v1468 = v1196;
                }
              else {
                const v1481 = '-';
                v1468 = v1481;
                }
              const v1483 = stdlib.digest(ctc3, [v1468]);
              const v1486 = stdlib.digestEq(v1483, v1206);
              const v1487 = v1467 ? true : v1486;
              let v1488;
              if (v1479) {
                v1488 = v1196;
                }
              else {
                const v1501 = '-';
                v1488 = v1501;
                }
              const v1503 = stdlib.digest(ctc3, [v1488]);
              const v1506 = stdlib.digestEq(v1503, v1265);
              const v1507 = v1487 ? true : v1506;
              const v1508 = v1172 ? true : v1507;
              const v1509 = v1508 ? false : true;
              
              return v1509;})()) {
              const v1510 = v1159.playerTurn;
              if (v1510) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }}
            else {
              const v1748 = v1159.board;
              let v1749;
              const v1750 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
              const v1751 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
              const v1752 = stdlib.digest(ctc3, [v1750]);
              const v1753 = stdlib.digest(ctc3, [v1751]);
              const v1754 = stdlib.digestEq(v1752, v1753);
              const v1756 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
              const v1758 = stdlib.digest(ctc3, [v1756]);
              const v1759 = stdlib.digestEq(v1752, v1758);
              const v1760 = v1754 ? v1759 : false;
              if (v1760) {
                v1749 = v1750;
                }
              else {
                const v1762 = '-';
                v1749 = v1762;
                }
              const v1763 = 'x';
              const v1764 = stdlib.digest(ctc3, [v1749]);
              const v1766 = stdlib.digest(ctc3, [v1763]);
              const v1767 = stdlib.digestEq(v1764, v1766);
              let v1768;
              const v1769 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
              const v1770 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
              const v1771 = stdlib.digest(ctc3, [v1769]);
              const v1772 = stdlib.digest(ctc3, [v1770]);
              const v1773 = stdlib.digestEq(v1771, v1772);
              const v1775 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
              const v1777 = stdlib.digest(ctc3, [v1775]);
              const v1778 = stdlib.digestEq(v1771, v1777);
              const v1779 = v1773 ? v1778 : false;
              if (v1779) {
                v1768 = v1769;
                }
              else {
                const v1781 = '-';
                v1768 = v1781;
                }
              const v1783 = stdlib.digest(ctc3, [v1768]);
              const v1786 = stdlib.digestEq(v1783, v1766);
              const v1787 = v1767 ? true : v1786;
              let v1788;
              const v1789 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
              const v1790 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
              const v1791 = stdlib.digest(ctc3, [v1789]);
              const v1792 = stdlib.digest(ctc3, [v1790]);
              const v1793 = stdlib.digestEq(v1791, v1792);
              const v1795 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
              const v1797 = stdlib.digest(ctc3, [v1795]);
              const v1798 = stdlib.digestEq(v1791, v1797);
              const v1799 = v1793 ? v1798 : false;
              if (v1799) {
                v1788 = v1789;
                }
              else {
                const v1801 = '-';
                v1788 = v1801;
                }
              const v1803 = stdlib.digest(ctc3, [v1788]);
              const v1806 = stdlib.digestEq(v1803, v1766);
              const v1807 = v1787 ? true : v1806;
              let v1808;
              const v1813 = stdlib.digestEq(v1752, v1771);
              const v1818 = stdlib.digestEq(v1752, v1791);
              const v1819 = v1813 ? v1818 : false;
              if (v1819) {
                v1808 = v1750;
                }
              else {
                const v1821 = '-';
                v1808 = v1821;
                }
              const v1823 = stdlib.digest(ctc3, [v1808]);
              const v1826 = stdlib.digestEq(v1823, v1766);
              const v1827 = v1807 ? true : v1826;
              let v1828;
              const v1833 = stdlib.digestEq(v1753, v1772);
              const v1838 = stdlib.digestEq(v1753, v1792);
              const v1839 = v1833 ? v1838 : false;
              if (v1839) {
                v1828 = v1751;
                }
              else {
                const v1841 = '-';
                v1828 = v1841;
                }
              const v1843 = stdlib.digest(ctc3, [v1828]);
              const v1846 = stdlib.digestEq(v1843, v1766);
              const v1847 = v1827 ? true : v1846;
              let v1848;
              const v1853 = stdlib.digestEq(v1758, v1777);
              const v1858 = stdlib.digestEq(v1758, v1797);
              const v1859 = v1853 ? v1858 : false;
              if (v1859) {
                v1848 = v1756;
                }
              else {
                const v1861 = '-';
                v1848 = v1861;
                }
              const v1863 = stdlib.digest(ctc3, [v1848]);
              const v1866 = stdlib.digestEq(v1863, v1766);
              const v1867 = v1847 ? true : v1866;
              let v1868;
              const v1873 = stdlib.digestEq(v1752, v1772);
              const v1878 = stdlib.digestEq(v1752, v1797);
              const v1879 = v1873 ? v1878 : false;
              if (v1879) {
                v1868 = v1750;
                }
              else {
                const v1881 = '-';
                v1868 = v1881;
                }
              const v1883 = stdlib.digest(ctc3, [v1868]);
              const v1886 = stdlib.digestEq(v1883, v1766);
              const v1887 = v1867 ? true : v1886;
              let v1888;
              const v1893 = stdlib.digestEq(v1758, v1772);
              const v1898 = stdlib.digestEq(v1758, v1791);
              const v1899 = v1893 ? v1898 : false;
              if (v1899) {
                v1888 = v1756;
                }
              else {
                const v1901 = '-';
                v1888 = v1901;
                }
              const v1903 = stdlib.digest(ctc3, [v1888]);
              const v1906 = stdlib.digestEq(v1903, v1766);
              const v1907 = v1887 ? true : v1906;
              let v1908;
              if (v1760) {
                v1908 = v1750;
                }
              else {
                const v1921 = '-';
                v1908 = v1921;
                }
              const v1922 = 'o';
              const v1923 = stdlib.digest(ctc3, [v1908]);
              const v1925 = stdlib.digest(ctc3, [v1922]);
              const v1926 = stdlib.digestEq(v1923, v1925);
              let v1927;
              if (v1779) {
                v1927 = v1769;
                }
              else {
                const v1940 = '-';
                v1927 = v1940;
                }
              const v1942 = stdlib.digest(ctc3, [v1927]);
              const v1945 = stdlib.digestEq(v1942, v1925);
              const v1946 = v1926 ? true : v1945;
              let v1947;
              if (v1799) {
                v1947 = v1789;
                }
              else {
                const v1960 = '-';
                v1947 = v1960;
                }
              const v1962 = stdlib.digest(ctc3, [v1947]);
              const v1965 = stdlib.digestEq(v1962, v1925);
              const v1966 = v1946 ? true : v1965;
              let v1967;
              if (v1819) {
                v1967 = v1750;
                }
              else {
                const v1980 = '-';
                v1967 = v1980;
                }
              const v1982 = stdlib.digest(ctc3, [v1967]);
              const v1985 = stdlib.digestEq(v1982, v1925);
              const v1986 = v1966 ? true : v1985;
              let v1987;
              if (v1839) {
                v1987 = v1751;
                }
              else {
                const v2000 = '-';
                v1987 = v2000;
                }
              const v2002 = stdlib.digest(ctc3, [v1987]);
              const v2005 = stdlib.digestEq(v2002, v1925);
              const v2006 = v1986 ? true : v2005;
              let v2007;
              if (v1859) {
                v2007 = v1756;
                }
              else {
                const v2020 = '-';
                v2007 = v2020;
                }
              const v2022 = stdlib.digest(ctc3, [v2007]);
              const v2025 = stdlib.digestEq(v2022, v1925);
              const v2026 = v2006 ? true : v2025;
              let v2027;
              if (v1879) {
                v2027 = v1750;
                }
              else {
                const v2040 = '-';
                v2027 = v2040;
                }
              const v2042 = stdlib.digest(ctc3, [v2027]);
              const v2045 = stdlib.digestEq(v2042, v1925);
              const v2046 = v2026 ? true : v2045;
              let v2047;
              if (v1899) {
                v2047 = v1756;
                }
              else {
                const v2060 = '-';
                v2047 = v2060;
                }
              const v2062 = stdlib.digest(ctc3, [v2047]);
              const v2065 = stdlib.digestEq(v2062, v1925);
              const v2066 = v2046 ? true : v2065;
              const v2067 = v2066 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
              const v2068 = v1907 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v2067;
              sim_r.txns.push({
                kind: 'from',
                to: v1125,
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
      const {data: [v1666], secs: v1668, time: v1667, didSend: v634, from: v1665 } = txn3;
      ;
      const v1669 = stdlib.addressEq(v1132, v1665);
      stdlib.assert(v1669, {
        at: './index.rsh:179:9:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v1670 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:94:34:decimal', stdlib.UInt_max, '0'), v1666);
      const v1671 = stdlib.lt(v1666, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1672 = v1670 ? v1671 : false;
      stdlib.assert(v1672, {
        at: './index.rsh:109:10:application',
        fs: ['at ./index.rsh:180:42:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1673 = v1159.board;
      const v1675 = v1673[v1666];
      const v1676 = 'x';
      const v1677 = stdlib.digest(ctc3, [v1675]);
      const v1679 = stdlib.digest(ctc3, [v1676]);
      const v1680 = stdlib.digestEq(v1677, v1679);
      let v1681;
      if (v1680) {
        v1681 = true;
        }
      else {
        const v1685 = 'o';
        const v1688 = stdlib.digest(ctc3, [v1685]);
        const v1689 = stdlib.digestEq(v1677, v1688);
        v1681 = v1689;
        }
      const v1690 = v1681 ? false : true;
      stdlib.assert(v1690, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:180:42:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const v1699 = 'o';
      const v1701 = stdlib.Array_set(v1673, v1666, v1699);
      const v1702 = {
        board: v1701,
        playerTurn: true
        };
      stdlib.protect(ctc1, await interact.seeBoard(v1702), {
        at: './index.rsh:180:26:application',
        fs: ['at ./index.rsh:180:26:application call to [unknown function] (defined at: ./index.rsh:180:26:function exp)', 'at ./index.rsh:180:26:application call to "liftedInteract" (defined at: ./index.rsh:180:26:application)'],
        msg: 'seeBoard',
        who: 'Bob'
        });
      
      let v1725;
      if (v1680) {
        v1725 = true;
        }
      else {
        const v1732 = stdlib.digest(ctc3, [v1699]);
        const v1733 = stdlib.digestEq(v1677, v1732);
        v1725 = v1733;
        }
      const v1734 = v1725 ? false : true;
      stdlib.assert(v1734, {
        at: './index.rsh:110:10:application',
        fs: ['at ./index.rsh:181:30:application call to "applyPlayerMove" (defined at: ./index.rsh:108:39:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const cv1159 = v1702;
      const cv1160 = v1667;
      const cv1167 = v1167;
      
      v1159 = cv1159;
      v1160 = cv1160;
      v1167 = cv1167;
      
      continue;
      
      }}
  const v1748 = v1159.board;
  let v1749;
  const v1750 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '0')];
  const v1751 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '1')];
  const v1752 = stdlib.digest(ctc3, [v1750]);
  const v1753 = stdlib.digest(ctc3, [v1751]);
  const v1754 = stdlib.digestEq(v1752, v1753);
  const v1756 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '2')];
  const v1758 = stdlib.digest(ctc3, [v1756]);
  const v1759 = stdlib.digestEq(v1752, v1758);
  const v1760 = v1754 ? v1759 : false;
  if (v1760) {
    v1749 = v1750;
    }
  else {
    const v1762 = '-';
    v1749 = v1762;
    }
  const v1763 = 'x';
  const v1764 = stdlib.digest(ctc3, [v1749]);
  const v1766 = stdlib.digest(ctc3, [v1763]);
  const v1767 = stdlib.digestEq(v1764, v1766);
  let v1768;
  const v1769 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '3')];
  const v1770 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '4')];
  const v1771 = stdlib.digest(ctc3, [v1769]);
  const v1772 = stdlib.digest(ctc3, [v1770]);
  const v1773 = stdlib.digestEq(v1771, v1772);
  const v1775 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '5')];
  const v1777 = stdlib.digest(ctc3, [v1775]);
  const v1778 = stdlib.digestEq(v1771, v1777);
  const v1779 = v1773 ? v1778 : false;
  if (v1779) {
    v1768 = v1769;
    }
  else {
    const v1781 = '-';
    v1768 = v1781;
    }
  const v1783 = stdlib.digest(ctc3, [v1768]);
  const v1786 = stdlib.digestEq(v1783, v1766);
  const v1787 = v1767 ? true : v1786;
  let v1788;
  const v1789 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:8:array ref', stdlib.UInt_max, '6')];
  const v1790 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:16:array ref', stdlib.UInt_max, '7')];
  const v1791 = stdlib.digest(ctc3, [v1789]);
  const v1792 = stdlib.digest(ctc3, [v1790]);
  const v1793 = stdlib.digestEq(v1791, v1792);
  const v1795 = v1748[stdlib.checkedBigNumberify('./index.rsh:24:36:array ref', stdlib.UInt_max, '8')];
  const v1797 = stdlib.digest(ctc3, [v1795]);
  const v1798 = stdlib.digestEq(v1791, v1797);
  const v1799 = v1793 ? v1798 : false;
  if (v1799) {
    v1788 = v1789;
    }
  else {
    const v1801 = '-';
    v1788 = v1801;
    }
  const v1803 = stdlib.digest(ctc3, [v1788]);
  const v1806 = stdlib.digestEq(v1803, v1766);
  const v1807 = v1787 ? true : v1806;
  let v1808;
  const v1813 = stdlib.digestEq(v1752, v1771);
  const v1818 = stdlib.digestEq(v1752, v1791);
  const v1819 = v1813 ? v1818 : false;
  if (v1819) {
    v1808 = v1750;
    }
  else {
    const v1821 = '-';
    v1808 = v1821;
    }
  const v1823 = stdlib.digest(ctc3, [v1808]);
  const v1826 = stdlib.digestEq(v1823, v1766);
  const v1827 = v1807 ? true : v1826;
  let v1828;
  const v1833 = stdlib.digestEq(v1753, v1772);
  const v1838 = stdlib.digestEq(v1753, v1792);
  const v1839 = v1833 ? v1838 : false;
  if (v1839) {
    v1828 = v1751;
    }
  else {
    const v1841 = '-';
    v1828 = v1841;
    }
  const v1843 = stdlib.digest(ctc3, [v1828]);
  const v1846 = stdlib.digestEq(v1843, v1766);
  const v1847 = v1827 ? true : v1846;
  let v1848;
  const v1853 = stdlib.digestEq(v1758, v1777);
  const v1858 = stdlib.digestEq(v1758, v1797);
  const v1859 = v1853 ? v1858 : false;
  if (v1859) {
    v1848 = v1756;
    }
  else {
    const v1861 = '-';
    v1848 = v1861;
    }
  const v1863 = stdlib.digest(ctc3, [v1848]);
  const v1866 = stdlib.digestEq(v1863, v1766);
  const v1867 = v1847 ? true : v1866;
  let v1868;
  const v1873 = stdlib.digestEq(v1752, v1772);
  const v1878 = stdlib.digestEq(v1752, v1797);
  const v1879 = v1873 ? v1878 : false;
  if (v1879) {
    v1868 = v1750;
    }
  else {
    const v1881 = '-';
    v1868 = v1881;
    }
  const v1883 = stdlib.digest(ctc3, [v1868]);
  const v1886 = stdlib.digestEq(v1883, v1766);
  const v1887 = v1867 ? true : v1886;
  let v1888;
  const v1893 = stdlib.digestEq(v1758, v1772);
  const v1898 = stdlib.digestEq(v1758, v1791);
  const v1899 = v1893 ? v1898 : false;
  if (v1899) {
    v1888 = v1756;
    }
  else {
    const v1901 = '-';
    v1888 = v1901;
    }
  const v1903 = stdlib.digest(ctc3, [v1888]);
  const v1906 = stdlib.digestEq(v1903, v1766);
  const v1907 = v1887 ? true : v1906;
  let v1908;
  if (v1760) {
    v1908 = v1750;
    }
  else {
    const v1921 = '-';
    v1908 = v1921;
    }
  const v1922 = 'o';
  const v1923 = stdlib.digest(ctc3, [v1908]);
  const v1925 = stdlib.digest(ctc3, [v1922]);
  const v1926 = stdlib.digestEq(v1923, v1925);
  let v1927;
  if (v1779) {
    v1927 = v1769;
    }
  else {
    const v1940 = '-';
    v1927 = v1940;
    }
  const v1942 = stdlib.digest(ctc3, [v1927]);
  const v1945 = stdlib.digestEq(v1942, v1925);
  const v1946 = v1926 ? true : v1945;
  let v1947;
  if (v1799) {
    v1947 = v1789;
    }
  else {
    const v1960 = '-';
    v1947 = v1960;
    }
  const v1962 = stdlib.digest(ctc3, [v1947]);
  const v1965 = stdlib.digestEq(v1962, v1925);
  const v1966 = v1946 ? true : v1965;
  let v1967;
  if (v1819) {
    v1967 = v1750;
    }
  else {
    const v1980 = '-';
    v1967 = v1980;
    }
  const v1982 = stdlib.digest(ctc3, [v1967]);
  const v1985 = stdlib.digestEq(v1982, v1925);
  const v1986 = v1966 ? true : v1985;
  let v1987;
  if (v1839) {
    v1987 = v1751;
    }
  else {
    const v2000 = '-';
    v1987 = v2000;
    }
  const v2002 = stdlib.digest(ctc3, [v1987]);
  const v2005 = stdlib.digestEq(v2002, v1925);
  const v2006 = v1986 ? true : v2005;
  let v2007;
  if (v1859) {
    v2007 = v1756;
    }
  else {
    const v2020 = '-';
    v2007 = v2020;
    }
  const v2022 = stdlib.digest(ctc3, [v2007]);
  const v2025 = stdlib.digestEq(v2022, v1925);
  const v2026 = v2006 ? true : v2025;
  let v2027;
  if (v1879) {
    v2027 = v1750;
    }
  else {
    const v2040 = '-';
    v2027 = v2040;
    }
  const v2042 = stdlib.digest(ctc3, [v2027]);
  const v2045 = stdlib.digestEq(v2042, v1925);
  const v2046 = v2026 ? true : v2045;
  let v2047;
  if (v1899) {
    v2047 = v1756;
    }
  else {
    const v2060 = '-';
    v2047 = v2060;
    }
  const v2062 = stdlib.digest(ctc3, [v2047]);
  const v2065 = stdlib.digestEq(v2062, v1925);
  const v2066 = v2046 ? true : v2065;
  const v2067 = v2066 ? stdlib.checkedBigNumberify('./index.rsh:79:57:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:79:61:decimal', stdlib.UInt_max, '0');
  const v2068 = v1907 ? stdlib.checkedBigNumberify('./index.rsh:79:43:decimal', stdlib.UInt_max, '0') : v2067;
  ;
  stdlib.protect(ctc1, await interact.endsWith(v1159), {
    at: './index.rsh:195:22:application',
    fs: ['at ./index.rsh:194:7:application call to [unknown function] (defined at: ./index.rsh:194:19:function exp)'],
    msg: 'endsWith',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.seeOutcome(v2068), {
    at: './index.rsh:196:24:application',
    fs: ['at ./index.rsh:194:7:application call to [unknown function] (defined at: ./index.rsh:194:19:function exp)'],
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
  appApproval: `BiAIAAEGCQQCBUomBgEtAQAgZcdMFaaGGHu2u/mVj0lPxrgAaANKZZqa1EmRsIxY8tIgLXEWQrcmsEQBYnyp+6wy9chTD7GQPMTbAiWHF5IaSIEAAQEiNQAxGEEF2icEZEkiWzUBSYEIWzUCgRBbNQg2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEDDEABokkhBAxAAM8hBBJEIjX/sSKyASSyEDQIshizNP8jCEk1/yEFDED/5yEGNAESRDQESSISTDQCEhFEKWRJNQNXICA1/0k1BRc1/oAE+YuveDT+FlCwNP8xABJEIjT+DjT+JQwQRDQDV0AKVwAJSTX9IzT+CyNYAUk1/CsSSTX7QQAGIzX6QgAGNPwqEjX6NPoURIABbzX5NPtBAAYjNfhCAAg0/DT5ARI1+DT4FEQ0A1cAIDT/NP0iIzT+C1I0+VA0/SNJNP4LCCVSUCcFUDIGNAMhB1tCAaxIIjX/sSKyASSyEDQIshizNP8jCEk1/yEFDED/5yEENAESRDQESSISTDQCEhFEKWRJNQNXACA1/0k1BRc1/oAE1Axs1jT+FlCwNP8xABJEIjT+DjT+JQwQRDQDV0AKVwAJNf2AAXg1/DT9IzT+CyNYAUk1+zT8ARJJNfpBAAYjNflCAAY0+yoSNfk0+RRENPpBAAYjNfhCAAY0+yoSNfg0+BRENP80A1cgIDT9IiM0/gtSNPxQNP0jSTT+CwglUlApUDIGNAMhB1tCAOBJIwxAAHYjEkQiNf+xIrIBJLIQNAiyGLM0/yMISTX/IQUMQP/nIzQBEkQ0BEkiEkw0AhIRRClkSTUDgSBbNf+ABJqLkXSwNP+IA9iAASA1/jQDVwAgMQA0/klQNP5QNP5QNP5QNP5QNP5QNP5QNP5QJwVQMgY0/0kIQgBkSIHAmgyIA5+xIrIBJLIQIrIYgAYGMQAyCRKyHoABBrIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gDWzEANP8WUClLAVcAKGdIIzUBMgY1AkIC6TX/Nf41/TX8Nfs0/VcACTXqIzXpIjXoNOojNOgLI1hJNecBNeY06TTmKxI05ioSERA16TToIwhJNeglDED/2DTqVwABNec06lcBATXmNOcBNeU05gE15DTqVwIBSTXjATXiNOU05BI05TTiEhBJNeFBAAc05zXoQgADKDXoKzXgNOpXAwFJNd4BNd006lcEAQE13DTqVwUBATXbNN003BI03TTbEhBJNdpBAAc03jXfQgADKDXfNOpXBgFJNdgBNdc06lcHAQE11jTqVwgBATXVNNc01hI01zTVEhBJNdRBAAc02DXZQgADKDXZNOFBAAc05zXTQgADKDXTKjXSNNpBAAc03jXRQgADKDXRNNRBAAc02DXQQgADKDXQNOU03RI05TTXEhBJNc5BAAc05zXPQgADKDXPNOQ03BI05DTWEhBJNcxBAAc05jXNQgADKDXNNOI02xI04jTVEhBJNcpBAAc04zXLQgADKDXLNM5BAAc05zXJQgADKDXJNMxBAAc05jXIQgADKDXINMpBAAc04zXHQgADKDXHNOU03BI05TTVEhBJNcVBAAc05zXGQgADKDXGNMVBAAc05zXEQgADKDXENOI03BI04jTXEhBJNcJBAAc04zXDQgADKDXDNMJBAAc04zXBQgADKDXBNOk06AE04BI03wE04BIRNNkBNOASETTTATTSEhE00QE00hIRNNABNNISETTPATTgEhE0zQE04BIRNMsBNOASETTJATTSEhE0yAE00hIRNMcBNNISETTGATTgEhE0xAE00hIRNMMBNOASETTBATTSEhERQQATsSKyATT/sggjshA0+7IHs0IARzT9VwkBF0EAHzT7NPxQNP1QNP8WUClLAVcAUmdIIQQ1ATIGNQJCAEs0+zT8UDT9UDT/FlApSwFXAFJnSCEGNQEyBjUCQgAsMRkhBhJEsSKyASSyEDQIshghBrIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCcENAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQIiNQhC/6Y0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v1126",
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
                "name": "v1126",
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
                "name": "v1548",
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
                "name": "v1666",
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
                "name": "v1548",
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
                "name": "v1666",
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
  Bytecode: `0x60806040526040516200266a3803806200266a8339810160408190526200002691620001bf565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a1602081015151620000899034146007620000ef565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000e6926002929091019062000119565b5050506200029e565b81620001155760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001279062000261565b90600052602060002090601f0160209004810192826200014b576000855562000196565b82601f106200016657805160ff191683800117855562000196565b8280016001018555821562000196579182015b828111156200019657825182559160200191906001019062000179565b50620001a4929150620001a8565b5090565b5b80821115620001a45760008155600101620001a9565b6000818303604080821215620001d457600080fd5b80518082016001600160401b0380821183831017156200020457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021e57600080fd5b8351945060208501915084821081831117156200024b57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200027657607f821691505b602082108114156200029857634e487b7160e01b600052602260045260246000fd5b50919050565b6123bc80620002ae6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a159146100835780638323075714610096578063a209ad4e146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004611f71565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004611f71565b6102dd565b3480156100ca57600080fd5b506100d3610615565b60405161007a929190611f94565b61005d6100ef366004611f71565b6106b2565b61010460016000541460096109e3565b61011e8135158061011757506001548235145b600a6109e3565b60008080556002805461013090611ff1565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90611ff1565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c191906120eb565b90506101cb61184e565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516101fc929190612132565b60405180910390a16102158260200151341460086109e3565b8051600160fd1b9052805160208083018051929092528251825182015282518251604090810191909152835183516060015283518351608001528351835160a001528351835160c001528351835160e0015283518351610100015291519183018051929092529051600191015261028a611882565b825181516001600160a01b03909116905280513360209182015260408301518183018051919091525143908201528301516102c59080610a0d565b6020820151604001526102d781610a60565b50505050565b6102ed60056000541460176109e3565b6103078135158061030057506001548235145b60186109e3565b60008080556002805461031990611ff1565b80601f016020809104026020016040519081016040528092919081815260200182805461034590611ff1565b80156103925780601f1061036757610100808354040283529160200191610392565b820191906000526020600020905b81548152906001019060200180831161037557829003601f168201915b50505050508060200190518101906103aa919061218b565b90506103b46118ab565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516103e5929190612288565b60405180910390a16103f9341560126109e3565b6020820151610414906001600160a01b0316331460136109e3565b610426600960208501351060146109e3565b8051600f60fb1b905260408201515160208401356009811061044a5761044a61216a565b602002015160405160200161045f91906122af565b60408051601f198184030181529181528151602092830120838301528251905161048992016122af565b60408051601f19818403018152918152815160209283012091830151909114908201819052156104bf5760016060820152610500565b608081018051606f60f81b9052516040516104dd91906020016122af565b60408051601f198184030181529190528051602091820120908201511460608201525b61051d8160600151610513576001610516565b60005b60156109e3565b60a081018051606f60f81b9052604083015151905161054291906020860135906117da565b60c0820180519190915251600160209091015260408101511561056b57600160e08201526105a3565b8060a0015160405160200161058091906122af565b60408051601f198184030181529190528051602091820120908201511460e08201525b6105c08160e001516105b65760016105b9565b60005b60166109e3565b6105c8611882565b825181516001600160a01b039182169052602080850151835192169181019190915260c083015181830180519190915280514392019190915260608401519051604001526102d781610a60565b60006060600054600280805461062a90611ff1565b80601f016020809104026020016040519081016040528092919081815260200182805461065690611ff1565b80156106a35780601f10610678576101008083540402835291602001916106a3565b820191906000526020600020905b81548152906001019060200180831161068657829003601f168201915b50505050509050915091509091565b6106c260046000541460106109e3565b6106dc813515806106d557506001548235145b60116109e3565b6000808055600280546106ee90611ff1565b80601f016020809104026020016040519081016040528092919081815260200182805461071a90611ff1565b80156107675780601f1061073c57610100808354040283529160200191610767565b820191906000526020600020905b81548152906001019060200180831161074a57829003601f168201915b505050505080602001905181019061077f919061218b565b9050610789611910565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133846040516107ba929190612288565b60405180910390a16107ce3415600b6109e3565b81516107e6906001600160a01b03163314600c6109e3565b6107f86009602085013510600d6109e3565b8051600f60fb1b905260408201515160208401356009811061081c5761081c61216a565b602002015160405160200161083191906122af565b60408051601f198184030181529181528151602092830120838301528251905161085b92016122af565b60408051601f198184030181529181528151602092830120918301519091149082018190521561089157600160608201526108d2565b608081018051606f60f81b9052516040516108af91906020016122af565b60408051601f198184030181529190528051602091820120908201511460608201525b6108ef81606001516108e55760016108e8565b60005b600e6109e3565b604082015151815161090791906020860135906117da565b60a0820180519190915251600060209091015260408101511561093057600160c0820152610971565b60e081018051606f60f81b90525160405161094e91906020016122af565b60408051601f198184030181529190528051602091820120908201511460c08201525b61098e8160c00151610984576001610987565b60005b600f6109e3565b610996611882565b825181516001600160a01b039182169052602080850151835192169181019190915260a083015181830180519190915280514392019190915260608401519051604001526102d781610a60565b81610a095760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600082610a1a83826122d9565b9150811015610a5a5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610a00565b92915050565b610a6861197a565b6001602082015260005b6009811015610b8357602083015151518160098110610a9357610a9361216a565b6020908102919091015160408085019182526060850151600f60fb1b905290519051610abf92016122af565b60408051601f198184030181529190528051602091820120608084015260a0830151606f60f81b9052820151610af6576000610b6a565b8160600151604051602001610b0b91906122af565b6040516020818303038152906040528051906020012060001c826080015114610b67578160a00151604051602001610b4391906122af565b6040516020818303038152906040528051906020012060001c826080015114610b6a565b60015b1515602083015280610b7b816122f1565b915050610a72565b506020818101511515825282810151515151604051610ba292016122af565b60408051808303601f19018152918152815160209283012060e08401528382015151518201519051610bd492016122af565b60408051808303601f1901815291815281516020928301206101008401528382015151518101519051610c0792016122af565b60408051601f19818403018152919052805160209091012061012082015261010081015160e082015114610c3c576000610c49565b8061012001518160e00151145b158015610140830152610c6857602082015151515160c0820152610c7d565b61016081018051602d60f81b90525160c08201525b61018081018051600f60fb1b905251604051610c9c91906020016122af565b60408051808303601f1901815291815281516020928301206101a0840152838201515151606001519051610cd092016122af565b60408051808303601f1901815291815281516020928301206101e0840152838201515151608001519051610d0492016122af565b60408051808303601f19018152918152815160209283012061020084015283820151515160a001519051610d3892016122af565b60408051601f1981840301815291905280516020909101206102208201526102008101516101e082015114610d6e576000610d7c565b806102200151816101e00151145b158015610240830152610d9f5760208201515151606001516101c0820152610db5565b61026081018051602d60f81b9052516101c08201525b602082810151515160c00151604051610dce92016122af565b60408051808303601f1901815291815281516020928301206102a084015283820151515160e001519051610e0292016122af565b60408051808303601f1901815291815281516020928301206102c084015283820151515161010001519051610e3792016122af565b60408051601f1981840301815291905280516020909101206102e08201526102c08101516102a082015114610e6d576000610e7b565b806102e00151816102a00151145b158015610300830152610e9e576020820151515160c00151610280820152610eb4565b61032081018051602d60f81b9052516102808201525b80610140015115610ed2576020820151515151610340820152610ee8565b61036081018051602d60f81b9052516103408201525b61038081018051606f60f81b905251604051610f0791906020016122af565b60408051601f1981840301815291905280516020909101206103a082015261024081015115610f465760208201515151606001516103c0820152610f5c565b6103e081018051602d60f81b9052516103c08201525b80610300015115610f7d576020820151515160c00151610400820152610f93565b61042081018051602d60f81b9052516104008201525b806101e001518160e0015114610faa576000610fb7565b806102a001518160e00151145b158015610460830152610fd7576020820151515151610440820152610fed565b61048081018051602d60f81b9052516104408201525b80610200015181610100015114611005576000611013565b806102c00151816101000151145b1580156104c083015261103557602082810151515101516104a082015261104b565b6104e081018051602d60f81b9052516104a08201525b80610220015181610120015114611063576000611071565b806102e00151816101200151145b1580156105208301526110945760208201515151604001516105008201526110aa565b61054081018051602d60f81b9052516105008201525b806104600151156110c85760208201515151516105608201526110de565b61058081018051602d60f81b9052516105608201525b806104c00151156110fe57602082810151515101516105a0820152611114565b6105c081018051602d60f81b9052516105a08201525b806105200151156111355760208201515151604001516105e082015261114b565b61060081018051602d60f81b9052516105e08201525b8061020001518160e001511461116257600061116f565b806102e001518160e00151145b15801561064083015261118f5760208201515151516106208201526111a5565b61066081018051602d60f81b9052516106208201525b806101a001518160c001516040516020016111c091906122af565b6040516020818303038152906040528051906020012060001c1461121957806101a00151816101c001516040516020016111fa91906122af565b6040516020818303038152906040528051906020012060001c1461121c565b60015b61125b57806101a0015181610280015160405160200161123c91906122af565b6040516020818303038152906040528051906020012060001c1461125e565b60015b61129d57806103a0015181610340015160405160200161127e91906122af565b6040516020818303038152906040528051906020012060001c146112a0565b60015b6112df57806103a00151816103c001516040516020016112c091906122af565b6040516020818303038152906040528051906020012060001c146112e2565b60015b61132157806103a0015181610400015160405160200161130291906122af565b6040516020818303038152906040528051906020012060001c14611324565b60015b61136357806101a0015181610440015160405160200161134491906122af565b6040516020818303038152906040528051906020012060001c14611366565b60015b6113a557806101a00151816104a0015160405160200161138691906122af565b6040516020818303038152906040528051906020012060001c146113a8565b60015b6113e757806101a001518161050001516040516020016113c891906122af565b6040516020818303038152906040528051906020012060001c146113ea565b60015b61142957806103a0015181610560015160405160200161140a91906122af565b6040516020818303038152906040528051906020012060001c1461142c565b60015b61146b57806103a00151816105a0015160405160200161144c91906122af565b6040516020818303038152906040528051906020012060001c1461146e565b60015b6114ad57806103a00151816105e0015160405160200161148e91906122af565b6040516020818303038152906040528051906020012060001c146114b0565b60015b6114ef57806101a001518161062001516040516020016114d091906122af565b6040516020818303038152906040528051906020012060001c146114f2565b60015b1515610680820152610640810151156115185760208201515151516106a082015261152e565b6106c081018051602d60f81b9052516106a08201525b80610200015181610120015114611546576000611554565b806102a00151816101200151145b1580156107008301526115775760208201515151604001516106e082015261158d565b61072081018051602d60f81b9052516106e08201525b806107000151156115ae5760208201515151604001516107408201526115c4565b61076081018051602d60f81b9052516107408201525b805161169a5780610680015161160f57806103a00151816106a001516040516020016115f091906122af565b6040516020818303038152906040528051906020012060001c14611612565b60015b61165157806101a00151816106e0015160405160200161163291906122af565b6040516020818303038152906040528051906020012060001c14611654565b60015b61169357806103a0015181610740015160405160200161167491906122af565b6040516020818303038152906040528051906020012060001c1461169d565b600161169d565b60015b156116fc57815151602083015160409081015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156116e5573d6000803e3d6000fd5b5060008080556001819055610a0990600290611de8565b6020808301515101511561178457611712611e25565b8251516001600160a01b03908116825283516020908101519091168183015280840180515160408085019190915290518101516060840152600460005543600155516117609183910161230c565b604051602081830303815290604052600290805190602001906102d7929190611e51565b61178c611e25565b8251516001600160a01b03908116825283516020908101519091168183015280840180515160408085019190915290518101516060840152600560005543600155516117609183910161230c565b6117e2611ed5565b60005b600981101561182e578481600981106118005761180061216a565b60200201518282600981106118175761181761216a565b602002015280611826816122f1565b9150506117e5565b50818184600981106118425761184261216a565b60200201529392505050565b6040805160808101909152600060608201908152815260208101611870611ed5565b815260200161187d611f0a565b905290565b60408051608081018252600091810182815260608201929092529081526020810161187d611f1d565b6040805161012081018252600061010082018181528252602080830182905282840182905260608301829052835180820185528281526080840152835190810190935282529060a08201908152602001611903611f0a565b8152600060209091015290565b6040805161012081018252600061010082018181528252602080830182905282840182905260608301829052835190810190935282529060808201908152602001611959611f0a565b81526000602082015260400161187d60408051602081019091526000815290565b6040805161078081018252600080825260208201529081016119a760408051602081019091526000815290565b81526020016119c160408051602081019091526000815290565b8152602001600081526020016119e260408051602081019091526000815290565b81526020016119fc60408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600015158152602001611a3460408051602081019091526000815290565b8152602001611a4e60408051602081019091526000815290565b815260200160008152602001611a6f60408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600015158152602001611aa760408051602081019091526000815290565b8152602001611ac160408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600015158152602001611af960408051602081019091526000815290565b8152602001611b1360408051602081019091526000815290565b8152602001611b2d60408051602081019091526000815290565b8152602001611b4760408051602081019091526000815290565b815260200160008152602001611b6860408051602081019091526000815290565b8152602001611b8260408051602081019091526000815290565b8152602001611b9c60408051602081019091526000815290565b8152602001611bb660408051602081019091526000815290565b8152602001611bd060408051602081019091526000815290565b815260006020820152604001611bf160408051602081019091526000815290565b8152602001611c0b60408051602081019091526000815290565b815260006020820152604001611c2c60408051602081019091526000815290565b8152602001611c4660408051602081019091526000815290565b815260006020820152604001611c6760408051602081019091526000815290565b8152602001611c8160408051602081019091526000815290565b8152602001611c9b60408051602081019091526000815290565b8152602001611cb560408051602081019091526000815290565b8152602001611ccf60408051602081019091526000815290565b8152602001611ce960408051602081019091526000815290565b8152602001611d0360408051602081019091526000815290565b8152602001611d1d60408051602081019091526000815290565b815260006020820152604001611d3e60408051602081019091526000815290565b815260006020820152604001611d5f60408051602081019091526000815290565b8152602001611d7960408051602081019091526000815290565b8152602001611d9360408051602081019091526000815290565b815260006020820152604001611db460408051602081019091526000815290565b8152602001611dce60408051602081019091526000815290565b815260200161187d60408051602081019091526000815290565b508054611df490611ff1565b6000825580601f10611e04575050565b601f016020900490600052602060002090810190611e229190611f44565b50565b6040805160808101825260008082526020820152908101611e44611f0a565b8152602001600081525090565b828054611e5d90611ff1565b90600052602060002090601f016020900481019282611e7f5760008555611ec5565b82601f10611e9857805160ff1916838001178555611ec5565b82800160010185558215611ec5579182015b82811115611ec5578251825591602001919060010190611eaa565b50611ed1929150611f44565b5090565b6040518061012001604052806009905b604080516020810190915260008152815260200190600190039081611ee55790505090565b6040518060400160405280611903611ed5565b6040518060600160405280611f30611f0a565b815260200160008152602001600081525090565b5b80821115611ed15760008155600101611f45565b600060408284031215611f6b57600080fd5b50919050565b600060408284031215611f8357600080fd5b611f8d8383611f59565b9392505050565b82815260006020604081840152835180604085015260005b81811015611fc857858101830151858201606001528201611fac565b81811115611fda576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061200557607f821691505b60208210811415611f6b57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561205f5761205f612026565b60405290565b6040516080810167ffffffffffffffff8111828210171561205f5761205f612026565b604051610120810167ffffffffffffffff8111828210171561205f5761205f612026565b6040516020810167ffffffffffffffff8111828210171561205f5761205f612026565b80516001600160a01b03811681146120e657600080fd5b919050565b6000604082840312156120fd57600080fd5b61210561203c565b61210e836120cf565b8152602083015160208201528091505092915050565b8015158114611e2257600080fd5b6001600160a01b03831681528135602080830191909152606082019083013561215a81612124565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b80516120e681612124565b60008183036101a081121561219f57600080fd5b6121a7612065565b6121b0846120cf565b815260206121bf8186016120cf565b82820152610140603f19840112156121d657600080fd5b6121de61203c565b925085605f8601126121ef57600080fd5b6121f7612088565b8061016087018881111561220a57600080fd5b604088015b818110156122575784818b0312156122275760008081fd5b61222f6120ac565b81516001600160f81b0319811681146122485760008081fd5b8152845292840192840161220f565b5081865261226481612180565b84870152505050508160408201526101808401516060820152809250505092915050565b6001600160a01b038316815260608101611f8d602083018480358252602090810135910152565b90516001600160f81b031916815260200190565b634e487b7160e01b600052601160045260246000fd5b600082198211156122ec576122ec6122c3565b500190565b6000600019821415612305576123056122c3565b5060010190565b81516001600160a01b0390811682526020808401519091168183015260408084015180516101a0850193919260009086015b6009821015612368578251516001600160f81b03191681529183019160019190910190830161233e565b5050500151151561016083015260609290920151610180909101529056fea264697066735822122083b4bcd5eed45bcade21f5eb9310fe112034f51d50bfc4c6c5a8989b2d3d5a9364736f6c634300080c0033`,
  BytecodeLen: 9834,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:151:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:192:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:162:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:173:7:after expr stmt',
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
