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
  
  
  const v1014 = stdlib.protect(ctc0, interact.budget, 'for Alice\'s interact field budget');
  const v1015 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const txn1 = await (ctc.sendrecv({
    args: [v1014, v1015],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:138:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:138:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1020, v1021], secs: v1023, time: v1022, didSend: v65, from: v1019 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v1020, v1021], secs: v1023, time: v1022, didSend: v65, from: v1019 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v1028], secs: v1030, time: v1029, didSend: v74, from: v1027 } = txn2;
  ;
  const v1031 = ' ';
  const v1040 = [v1031, v1031, v1031, v1031, v1031, v1031, v1031, v1031, v1031];
  const v1041 = {
    board: v1040,
    oCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    playerTurn: true,
    xCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v1053 = v1041;
  let v1054 = v1029;
  let v1061 = stdlib.checkedBigNumberify('./index.rsh:125:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1064 = v1053.board;
    let v1065;
    const v1066 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
    const v1067 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
    const v1068 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
    const v1069 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
    const v1070 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
    const v1071 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
    const v1072 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
    const v1073 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
    const v1074 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
    const v1075 = stdlib.digest(ctc3, [v1066]);
    const v1076 = stdlib.digest(ctc3, [v1067]);
    const v1077 = stdlib.digestEq(v1075, v1076);
    const v1079 = stdlib.digest(ctc3, [v1068]);
    const v1080 = stdlib.digestEq(v1075, v1079);
    const v1081 = v1077 ? v1080 : false;
    const v1082 = '-';
    const v1083 = v1081 ? v1066 : v1082;
    const v1084 = stdlib.digest(ctc3, [v1069]);
    const v1085 = stdlib.digest(ctc3, [v1070]);
    const v1086 = stdlib.digestEq(v1084, v1085);
    const v1088 = stdlib.digest(ctc3, [v1071]);
    const v1089 = stdlib.digestEq(v1084, v1088);
    const v1090 = v1086 ? v1089 : false;
    const v1092 = v1090 ? v1069 : v1082;
    const v1093 = stdlib.digest(ctc3, [v1072]);
    const v1094 = stdlib.digest(ctc3, [v1073]);
    const v1095 = stdlib.digestEq(v1093, v1094);
    const v1097 = stdlib.digest(ctc3, [v1074]);
    const v1098 = stdlib.digestEq(v1093, v1097);
    const v1099 = v1095 ? v1098 : false;
    const v1101 = v1099 ? v1072 : v1082;
    const v1104 = stdlib.digestEq(v1075, v1084);
    const v1107 = stdlib.digestEq(v1075, v1093);
    const v1108 = v1104 ? v1107 : false;
    const v1110 = v1108 ? v1066 : v1082;
    const v1113 = stdlib.digestEq(v1076, v1085);
    const v1116 = stdlib.digestEq(v1076, v1094);
    const v1117 = v1113 ? v1116 : false;
    const v1119 = v1117 ? v1067 : v1082;
    const v1122 = stdlib.digestEq(v1079, v1088);
    const v1125 = stdlib.digestEq(v1079, v1097);
    const v1126 = v1122 ? v1125 : false;
    const v1128 = v1126 ? v1068 : v1082;
    const v1131 = stdlib.digestEq(v1075, v1085);
    const v1134 = stdlib.digestEq(v1075, v1097);
    const v1135 = v1131 ? v1134 : false;
    const v1137 = v1135 ? v1066 : v1082;
    const v1140 = stdlib.digestEq(v1079, v1085);
    const v1143 = stdlib.digestEq(v1079, v1093);
    const v1144 = v1140 ? v1143 : false;
    const v1146 = v1144 ? v1068 : v1082;
    const v1147 = 'x';
    const v1148 = stdlib.digest(ctc3, [v1083]);
    const v1150 = stdlib.digest(ctc3, [v1147]);
    const v1151 = stdlib.digestEq(v1148, v1150);
    const v1153 = stdlib.digest(ctc3, [v1092]);
    const v1156 = stdlib.digestEq(v1153, v1150);
    const v1157 = v1151 ? true : v1156;
    const v1159 = stdlib.digest(ctc3, [v1101]);
    const v1162 = stdlib.digestEq(v1159, v1150);
    const v1163 = v1157 ? true : v1162;
    const v1165 = stdlib.digest(ctc3, [v1110]);
    const v1168 = stdlib.digestEq(v1165, v1150);
    const v1169 = v1163 ? true : v1168;
    const v1171 = stdlib.digest(ctc3, [v1119]);
    const v1174 = stdlib.digestEq(v1171, v1150);
    const v1175 = v1169 ? true : v1174;
    const v1177 = stdlib.digest(ctc3, [v1128]);
    const v1180 = stdlib.digestEq(v1177, v1150);
    const v1181 = v1175 ? true : v1180;
    const v1183 = stdlib.digest(ctc3, [v1137]);
    const v1186 = stdlib.digestEq(v1183, v1150);
    const v1187 = v1181 ? true : v1186;
    const v1189 = stdlib.digest(ctc3, [v1146]);
    const v1192 = stdlib.digestEq(v1189, v1150);
    const v1193 = v1187 ? true : v1192;
    if (v1193) {
      v1065 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1194 = 'o';
      const v1197 = stdlib.digest(ctc3, [v1194]);
      const v1198 = stdlib.digestEq(v1148, v1197);
      const v1203 = stdlib.digestEq(v1153, v1197);
      const v1204 = v1198 ? true : v1203;
      const v1209 = stdlib.digestEq(v1159, v1197);
      const v1210 = v1204 ? true : v1209;
      const v1215 = stdlib.digestEq(v1165, v1197);
      const v1216 = v1210 ? true : v1215;
      const v1221 = stdlib.digestEq(v1171, v1197);
      const v1222 = v1216 ? true : v1221;
      const v1227 = stdlib.digestEq(v1177, v1197);
      const v1228 = v1222 ? true : v1227;
      const v1233 = stdlib.digestEq(v1183, v1197);
      const v1234 = v1228 ? true : v1233;
      const v1239 = stdlib.digestEq(v1189, v1197);
      const v1240 = v1234 ? true : v1239;
      if (v1240) {
        v1065 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
        }
      else {
        v1065 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
        }
      }
    const v1242 = await stdlib.Array_asyncReduce([v1064], true, async([v1244], v1243, v1245) => {
      const v1247 = stdlib.digest(ctc3, [v1244]);
      const v1250 = stdlib.digestEq(v1247, v1150);
      const v1251 = 'o';
      const v1254 = stdlib.digest(ctc3, [v1251]);
      const v1255 = stdlib.digestEq(v1247, v1254);
      const v1256 = v1250 ? true : v1255;
      const v1257 = v1243 ? v1256 : false;
      
      return v1257;})
    const v1258 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:52:decimal', stdlib.UInt_max, '1'));
    const v1259 = v1242 ? true : v1258;
    const v1260 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:70:decimal', stdlib.UInt_max, '0'));
    const v1261 = v1259 ? true : v1260;
    const v1263 = v1053.xCost;
    const v1264 = v1053.oCost;
    const v1265 = stdlib.safeAdd(v1263, v1264);
    const v1266 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:64:decimal', stdlib.UInt_max, '2'), v1020);
    const v1267 = stdlib.le(v1265, v1266);
    const v1268 = v1261 ? false : v1267;
    
    return v1268;})()) {
    const v1269 = v1053.playerTurn;
    if (v1269) {
      const v1277 = stdlib.safeAdd(v1054, v1021);
      const v1281 = v1053.board;
      const v1294 = stdlib.protect(ctc0, await interact.getSquareSelected(v1053), {
        at: './index.rsh:70:43:application',
        fs: ['at ./index.rsh:158:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Alice'
        });
      const v1295 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1294);
      const v1296 = stdlib.lt(v1294, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1297 = v1295 ? v1296 : false;
      stdlib.assert(v1297, {
        at: './index.rsh:71:9:application',
        fs: ['at ./index.rsh:158:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Alice'
        });
      const v1300 = v1281[v1294];
      const v1301 = 'x';
      const v1302 = stdlib.digest(ctc3, [v1300]);
      const v1304 = stdlib.digest(ctc3, [v1301]);
      const v1305 = stdlib.digestEq(v1302, v1304);
      const v1306 = 'o';
      const v1309 = stdlib.digest(ctc3, [v1306]);
      const v1310 = stdlib.digestEq(v1302, v1309);
      const v1311 = v1305 ? true : v1310;
      const v1312 = v1311 ? false : true;
      stdlib.assert(v1312, {
        at: './index.rsh:72:9:application',
        fs: ['at ./index.rsh:158:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:157:13:application call to [unknown function] (defined at: ./index.rsh:157:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Alice'
        });
      const v1313 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000')];
      const v1315 = v1313[v1294];
      
      const txn3 = await (ctc.sendrecv({
        args: [v1019, v1020, v1021, v1027, v1053, v1061, v1277, v1294, v1315],
        evt_cnt: 2,
        funcNum: 3,
        lct: v1054,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [v1315, []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1317, v1318], secs: v1320, time: v1319, didSend: v366, from: v1316 } = txn3;
          
          const v1322 = stdlib.safeAdd(v1061, v1318);
          sim_r.txns.push({
            amt: v1318,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1327 = v1053.board;
          const v1330 = 'x';
          const v1343 = stdlib.safeDiv(v1020, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
          const v1349 = stdlib.Array_set(v1327, v1317, v1330);
          const v1355 = v1053.xCost;
          const v1356 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000')];
          const v1358 = v1356[v1317];
          const v1359 = stdlib.safeMul(v1358, v1343);
          const v1360 = stdlib.safeAdd(v1355, v1359);
          const v1363 = v1053.oCost;
          const v1370 = {
            board: v1349,
            oCost: v1363,
            playerTurn: false,
            xCost: v1360
            };
          
          const cv1053 = v1370;
          const cv1054 = v1319;
          const cv1061 = v1322;
          
          await (async () => {
            const v1053 = cv1053;
            const v1054 = cv1054;
            const v1061 = cv1061;
            
            if (await (async () => {
              const v1064 = v1053.board;
              let v1065;
              const v1066 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
              const v1067 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
              const v1068 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
              const v1069 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
              const v1070 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
              const v1071 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
              const v1072 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
              const v1073 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
              const v1074 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
              const v1075 = stdlib.digest(ctc3, [v1066]);
              const v1076 = stdlib.digest(ctc3, [v1067]);
              const v1077 = stdlib.digestEq(v1075, v1076);
              const v1079 = stdlib.digest(ctc3, [v1068]);
              const v1080 = stdlib.digestEq(v1075, v1079);
              const v1081 = v1077 ? v1080 : false;
              const v1082 = '-';
              const v1083 = v1081 ? v1066 : v1082;
              const v1084 = stdlib.digest(ctc3, [v1069]);
              const v1085 = stdlib.digest(ctc3, [v1070]);
              const v1086 = stdlib.digestEq(v1084, v1085);
              const v1088 = stdlib.digest(ctc3, [v1071]);
              const v1089 = stdlib.digestEq(v1084, v1088);
              const v1090 = v1086 ? v1089 : false;
              const v1092 = v1090 ? v1069 : v1082;
              const v1093 = stdlib.digest(ctc3, [v1072]);
              const v1094 = stdlib.digest(ctc3, [v1073]);
              const v1095 = stdlib.digestEq(v1093, v1094);
              const v1097 = stdlib.digest(ctc3, [v1074]);
              const v1098 = stdlib.digestEq(v1093, v1097);
              const v1099 = v1095 ? v1098 : false;
              const v1101 = v1099 ? v1072 : v1082;
              const v1104 = stdlib.digestEq(v1075, v1084);
              const v1107 = stdlib.digestEq(v1075, v1093);
              const v1108 = v1104 ? v1107 : false;
              const v1110 = v1108 ? v1066 : v1082;
              const v1113 = stdlib.digestEq(v1076, v1085);
              const v1116 = stdlib.digestEq(v1076, v1094);
              const v1117 = v1113 ? v1116 : false;
              const v1119 = v1117 ? v1067 : v1082;
              const v1122 = stdlib.digestEq(v1079, v1088);
              const v1125 = stdlib.digestEq(v1079, v1097);
              const v1126 = v1122 ? v1125 : false;
              const v1128 = v1126 ? v1068 : v1082;
              const v1131 = stdlib.digestEq(v1075, v1085);
              const v1134 = stdlib.digestEq(v1075, v1097);
              const v1135 = v1131 ? v1134 : false;
              const v1137 = v1135 ? v1066 : v1082;
              const v1140 = stdlib.digestEq(v1079, v1085);
              const v1143 = stdlib.digestEq(v1079, v1093);
              const v1144 = v1140 ? v1143 : false;
              const v1146 = v1144 ? v1068 : v1082;
              const v1147 = 'x';
              const v1148 = stdlib.digest(ctc3, [v1083]);
              const v1150 = stdlib.digest(ctc3, [v1147]);
              const v1151 = stdlib.digestEq(v1148, v1150);
              const v1153 = stdlib.digest(ctc3, [v1092]);
              const v1156 = stdlib.digestEq(v1153, v1150);
              const v1157 = v1151 ? true : v1156;
              const v1159 = stdlib.digest(ctc3, [v1101]);
              const v1162 = stdlib.digestEq(v1159, v1150);
              const v1163 = v1157 ? true : v1162;
              const v1165 = stdlib.digest(ctc3, [v1110]);
              const v1168 = stdlib.digestEq(v1165, v1150);
              const v1169 = v1163 ? true : v1168;
              const v1171 = stdlib.digest(ctc3, [v1119]);
              const v1174 = stdlib.digestEq(v1171, v1150);
              const v1175 = v1169 ? true : v1174;
              const v1177 = stdlib.digest(ctc3, [v1128]);
              const v1180 = stdlib.digestEq(v1177, v1150);
              const v1181 = v1175 ? true : v1180;
              const v1183 = stdlib.digest(ctc3, [v1137]);
              const v1186 = stdlib.digestEq(v1183, v1150);
              const v1187 = v1181 ? true : v1186;
              const v1189 = stdlib.digest(ctc3, [v1146]);
              const v1192 = stdlib.digestEq(v1189, v1150);
              const v1193 = v1187 ? true : v1192;
              if (v1193) {
                v1065 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1194 = 'o';
                const v1197 = stdlib.digest(ctc3, [v1194]);
                const v1198 = stdlib.digestEq(v1148, v1197);
                const v1203 = stdlib.digestEq(v1153, v1197);
                const v1204 = v1198 ? true : v1203;
                const v1209 = stdlib.digestEq(v1159, v1197);
                const v1210 = v1204 ? true : v1209;
                const v1215 = stdlib.digestEq(v1165, v1197);
                const v1216 = v1210 ? true : v1215;
                const v1221 = stdlib.digestEq(v1171, v1197);
                const v1222 = v1216 ? true : v1221;
                const v1227 = stdlib.digestEq(v1177, v1197);
                const v1228 = v1222 ? true : v1227;
                const v1233 = stdlib.digestEq(v1183, v1197);
                const v1234 = v1228 ? true : v1233;
                const v1239 = stdlib.digestEq(v1189, v1197);
                const v1240 = v1234 ? true : v1239;
                if (v1240) {
                  v1065 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  v1065 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
                  }
                }
              const v1242 = await stdlib.Array_asyncReduce([v1064], true, async([v1244], v1243, v1245) => {
                const v1247 = stdlib.digest(ctc3, [v1244]);
                const v1250 = stdlib.digestEq(v1247, v1150);
                const v1251 = 'o';
                const v1254 = stdlib.digest(ctc3, [v1251]);
                const v1255 = stdlib.digestEq(v1247, v1254);
                const v1256 = v1250 ? true : v1255;
                const v1257 = v1243 ? v1256 : false;
                
                return v1257;})
              const v1258 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:52:decimal', stdlib.UInt_max, '1'));
              const v1259 = v1242 ? true : v1258;
              const v1260 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:70:decimal', stdlib.UInt_max, '0'));
              const v1261 = v1259 ? true : v1260;
              const v1263 = v1053.xCost;
              const v1264 = v1053.oCost;
              const v1265 = stdlib.safeAdd(v1263, v1264);
              const v1266 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:64:decimal', stdlib.UInt_max, '2'), v1020);
              const v1267 = stdlib.le(v1265, v1266);
              const v1268 = v1261 ? false : v1267;
              
              return v1268;})()) {
              const v1269 = v1053.playerTurn;
              if (v1269) {
                const v1277 = stdlib.safeAdd(v1054, v1021);
                sim_r.isHalt = false;
                }
              else {
                const v1454 = stdlib.safeAdd(v1054, v1021);
                sim_r.isHalt = false;
                }}
            else {
              const v1625 = v1053.board;
              let v1626;
              const v1627 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
              const v1628 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
              const v1629 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
              const v1630 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
              const v1631 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
              const v1632 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
              const v1633 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
              const v1634 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
              const v1635 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
              const v1636 = stdlib.digest(ctc3, [v1627]);
              const v1637 = stdlib.digest(ctc3, [v1628]);
              const v1638 = stdlib.digestEq(v1636, v1637);
              const v1640 = stdlib.digest(ctc3, [v1629]);
              const v1641 = stdlib.digestEq(v1636, v1640);
              const v1642 = v1638 ? v1641 : false;
              const v1643 = '-';
              const v1644 = v1642 ? v1627 : v1643;
              const v1645 = stdlib.digest(ctc3, [v1630]);
              const v1646 = stdlib.digest(ctc3, [v1631]);
              const v1647 = stdlib.digestEq(v1645, v1646);
              const v1649 = stdlib.digest(ctc3, [v1632]);
              const v1650 = stdlib.digestEq(v1645, v1649);
              const v1651 = v1647 ? v1650 : false;
              const v1653 = v1651 ? v1630 : v1643;
              const v1654 = stdlib.digest(ctc3, [v1633]);
              const v1655 = stdlib.digest(ctc3, [v1634]);
              const v1656 = stdlib.digestEq(v1654, v1655);
              const v1658 = stdlib.digest(ctc3, [v1635]);
              const v1659 = stdlib.digestEq(v1654, v1658);
              const v1660 = v1656 ? v1659 : false;
              const v1662 = v1660 ? v1633 : v1643;
              const v1665 = stdlib.digestEq(v1636, v1645);
              const v1668 = stdlib.digestEq(v1636, v1654);
              const v1669 = v1665 ? v1668 : false;
              const v1671 = v1669 ? v1627 : v1643;
              const v1674 = stdlib.digestEq(v1637, v1646);
              const v1677 = stdlib.digestEq(v1637, v1655);
              const v1678 = v1674 ? v1677 : false;
              const v1680 = v1678 ? v1628 : v1643;
              const v1683 = stdlib.digestEq(v1640, v1649);
              const v1686 = stdlib.digestEq(v1640, v1658);
              const v1687 = v1683 ? v1686 : false;
              const v1689 = v1687 ? v1629 : v1643;
              const v1692 = stdlib.digestEq(v1636, v1646);
              const v1695 = stdlib.digestEq(v1636, v1658);
              const v1696 = v1692 ? v1695 : false;
              const v1698 = v1696 ? v1627 : v1643;
              const v1701 = stdlib.digestEq(v1640, v1646);
              const v1704 = stdlib.digestEq(v1640, v1654);
              const v1705 = v1701 ? v1704 : false;
              const v1707 = v1705 ? v1629 : v1643;
              const v1708 = 'x';
              const v1709 = stdlib.digest(ctc3, [v1644]);
              const v1711 = stdlib.digest(ctc3, [v1708]);
              const v1712 = stdlib.digestEq(v1709, v1711);
              const v1714 = stdlib.digest(ctc3, [v1653]);
              const v1717 = stdlib.digestEq(v1714, v1711);
              const v1718 = v1712 ? true : v1717;
              const v1720 = stdlib.digest(ctc3, [v1662]);
              const v1723 = stdlib.digestEq(v1720, v1711);
              const v1724 = v1718 ? true : v1723;
              const v1726 = stdlib.digest(ctc3, [v1671]);
              const v1729 = stdlib.digestEq(v1726, v1711);
              const v1730 = v1724 ? true : v1729;
              const v1732 = stdlib.digest(ctc3, [v1680]);
              const v1735 = stdlib.digestEq(v1732, v1711);
              const v1736 = v1730 ? true : v1735;
              const v1738 = stdlib.digest(ctc3, [v1689]);
              const v1741 = stdlib.digestEq(v1738, v1711);
              const v1742 = v1736 ? true : v1741;
              const v1744 = stdlib.digest(ctc3, [v1698]);
              const v1747 = stdlib.digestEq(v1744, v1711);
              const v1748 = v1742 ? true : v1747;
              const v1750 = stdlib.digest(ctc3, [v1707]);
              const v1753 = stdlib.digestEq(v1750, v1711);
              const v1754 = v1748 ? true : v1753;
              if (v1754) {
                v1626 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1755 = 'o';
                const v1758 = stdlib.digest(ctc3, [v1755]);
                const v1759 = stdlib.digestEq(v1709, v1758);
                const v1764 = stdlib.digestEq(v1714, v1758);
                const v1765 = v1759 ? true : v1764;
                const v1770 = stdlib.digestEq(v1720, v1758);
                const v1771 = v1765 ? true : v1770;
                const v1776 = stdlib.digestEq(v1726, v1758);
                const v1777 = v1771 ? true : v1776;
                const v1782 = stdlib.digestEq(v1732, v1758);
                const v1783 = v1777 ? true : v1782;
                const v1788 = stdlib.digestEq(v1738, v1758);
                const v1789 = v1783 ? true : v1788;
                const v1794 = stdlib.digestEq(v1744, v1758);
                const v1795 = v1789 ? true : v1794;
                const v1800 = stdlib.digestEq(v1750, v1758);
                const v1801 = v1795 ? true : v1800;
                if (v1801) {
                  v1626 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  v1626 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
                  }
                }
              const v1803 = stdlib.safeDiv(v1061, stdlib.checkedBigNumberify('./index.rsh:197:32:decimal', stdlib.UInt_max, '2'));
              const v1805 = stdlib.safeSub(v1061, v1803);
              let v1806;
              const v1807 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:187:24:decimal', stdlib.UInt_max, '0'));
              if (v1807) {
                const v1808 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                v1806 = v1808;
                }
              else {
                const v1809 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '1'));
                if (v1809) {
                  const v1810 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  v1806 = v1810;
                  }
                else {
                  const v1811 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  v1806 = v1811;
                  }
                }
              const v1812 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '0')];
              const v1813 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '1')];
              let v1814;
              const v1816 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:201:44:decimal', stdlib.UInt_max, '1'));
              const v1817 = v1807 ? true : v1816;
              if (v1817) {
                const v1819 = stdlib.safeMul(v1812, v1061);
                v1814 = v1819;
                }
              else {
                const v1820 = stdlib.safeMul(v1812, v1803);
                v1814 = v1820;
                }
              const v1824 = stdlib.safeSub(v1061, v1814);
              sim_r.txns.push({
                kind: 'from',
                to: v1019,
                tok: undefined /* Nothing */
                });
              let v1825;
              if (v1817) {
                const v1830 = stdlib.safeMul(v1813, v1824);
                v1825 = v1830;
                }
              else {
                const v1831 = stdlib.safeMul(v1813, v1805);
                v1825 = v1831;
                }
              sim_r.txns.push({
                kind: 'from',
                to: v1027,
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
        timeoutAt: ['time', v1277],
        tys: [ctc5, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v1019, v1020, v1021, v1027, v1053, v1061, v1277],
          evt_cnt: 0,
          funcNum: 4,
          lct: v1054,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1432, time: v1431, didSend: v509, from: v1430 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v1027,
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
        const {data: [], secs: v1432, time: v1431, didSend: v509, from: v1430 } = txn4;
        ;
        const v1433 = stdlib.addressEq(v1019, v1430);
        const v1434 = stdlib.addressEq(v1027, v1430);
        const v1435 = v1433 ? true : v1434;
        stdlib.assert(v1435, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:163:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeOut(), {
          at: './index.rsh:130:29:application',
          fs: ['at ./index.rsh:129:9:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:128:28:function exp)', 'at ./index.rsh:163:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v1317, v1318], secs: v1320, time: v1319, didSend: v366, from: v1316 } = txn3;
        const v1322 = stdlib.safeAdd(v1061, v1318);
        ;
        const v1323 = stdlib.addressEq(v1019, v1316);
        stdlib.assert(v1323, {
          at: './index.rsh:161:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1324 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1317);
        const v1325 = stdlib.lt(v1317, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1326 = v1324 ? v1325 : false;
        stdlib.assert(v1326, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:164:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Alice'
          });
        const v1327 = v1053.board;
        const v1329 = v1327[v1317];
        const v1330 = 'x';
        const v1331 = stdlib.digest(ctc3, [v1329]);
        const v1333 = stdlib.digest(ctc3, [v1330]);
        const v1334 = stdlib.digestEq(v1331, v1333);
        const v1335 = 'o';
        const v1338 = stdlib.digest(ctc3, [v1335]);
        const v1339 = stdlib.digestEq(v1331, v1338);
        const v1340 = v1334 ? true : v1339;
        const v1341 = v1340 ? false : true;
        stdlib.assert(v1341, {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:164:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Alice'
          });
        const v1343 = stdlib.safeDiv(v1020, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
        const v1349 = stdlib.Array_set(v1327, v1317, v1330);
        const v1355 = v1053.xCost;
        const v1356 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000')];
        const v1358 = v1356[v1317];
        const v1359 = stdlib.safeMul(v1358, v1343);
        const v1360 = stdlib.safeAdd(v1355, v1359);
        const v1363 = v1053.oCost;
        const v1370 = {
          board: v1349,
          oCost: v1363,
          playerTurn: false,
          xCost: v1360
          };
        stdlib.protect(ctc4, await interact.seeBoard(v1370), {
          at: './index.rsh:164:26:application',
          fs: ['at ./index.rsh:164:26:application call to [unknown function] (defined at: ./index.rsh:164:26:function exp)', 'at ./index.rsh:164:26:application call to "liftedInteract" (defined at: ./index.rsh:164:26:application)'],
          msg: 'seeBoard',
          who: 'Alice'
          });
        
        const cv1053 = v1370;
        const cv1054 = v1319;
        const cv1061 = v1322;
        
        v1053 = cv1053;
        v1054 = cv1054;
        v1061 = cv1061;
        
        continue;}
      
      }
    else {
      const v1454 = stdlib.safeAdd(v1054, v1021);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 5,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v1454],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v1019, v1020, v1021, v1027, v1053, v1061, v1454],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1054,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1609, time: v1608, didSend: v717, from: v1607 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v1019,
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
        const {data: [], secs: v1609, time: v1608, didSend: v717, from: v1607 } = txn4;
        ;
        const v1610 = stdlib.addressEq(v1019, v1607);
        const v1611 = stdlib.addressEq(v1027, v1607);
        const v1612 = v1610 ? true : v1611;
        stdlib.assert(v1612, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:177:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeOut(), {
          at: './index.rsh:130:29:application',
          fs: ['at ./index.rsh:129:9:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:128:28:function exp)', 'at ./index.rsh:177:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v1494, v1495], secs: v1497, time: v1496, didSend: v574, from: v1493 } = txn3;
        const v1499 = stdlib.safeAdd(v1061, v1495);
        ;
        const v1500 = stdlib.addressEq(v1027, v1493);
        stdlib.assert(v1500, {
          at: './index.rsh:175:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v1501 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1494);
        const v1502 = stdlib.lt(v1494, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1503 = v1501 ? v1502 : false;
        stdlib.assert(v1503, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:178:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Alice'
          });
        const v1504 = v1053.board;
        const v1506 = v1504[v1494];
        const v1507 = 'x';
        const v1508 = stdlib.digest(ctc3, [v1506]);
        const v1510 = stdlib.digest(ctc3, [v1507]);
        const v1511 = stdlib.digestEq(v1508, v1510);
        const v1512 = 'o';
        const v1515 = stdlib.digest(ctc3, [v1512]);
        const v1516 = stdlib.digestEq(v1508, v1515);
        const v1517 = v1511 ? true : v1516;
        const v1518 = v1517 ? false : true;
        stdlib.assert(v1518, {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:178:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Alice'
          });
        const v1520 = stdlib.safeDiv(v1020, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
        const v1530 = stdlib.Array_set(v1504, v1494, v1512);
        const v1538 = v1053.xCost;
        const v1541 = v1053.oCost;
        const v1542 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000')];
        const v1544 = v1542[v1494];
        const v1545 = stdlib.safeMul(v1544, v1520);
        const v1546 = stdlib.safeAdd(v1541, v1545);
        const v1547 = {
          board: v1530,
          oCost: v1546,
          playerTurn: true,
          xCost: v1538
          };
        const cv1053 = v1547;
        const cv1054 = v1496;
        const cv1061 = v1499;
        
        v1053 = cv1053;
        v1054 = cv1054;
        v1061 = cv1061;
        
        continue;}
      
      }}
  const v1625 = v1053.board;
  let v1626;
  const v1627 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
  const v1628 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
  const v1629 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
  const v1630 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
  const v1631 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
  const v1632 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
  const v1633 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
  const v1634 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
  const v1635 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
  const v1636 = stdlib.digest(ctc3, [v1627]);
  const v1637 = stdlib.digest(ctc3, [v1628]);
  const v1638 = stdlib.digestEq(v1636, v1637);
  const v1640 = stdlib.digest(ctc3, [v1629]);
  const v1641 = stdlib.digestEq(v1636, v1640);
  const v1642 = v1638 ? v1641 : false;
  const v1643 = '-';
  const v1644 = v1642 ? v1627 : v1643;
  const v1645 = stdlib.digest(ctc3, [v1630]);
  const v1646 = stdlib.digest(ctc3, [v1631]);
  const v1647 = stdlib.digestEq(v1645, v1646);
  const v1649 = stdlib.digest(ctc3, [v1632]);
  const v1650 = stdlib.digestEq(v1645, v1649);
  const v1651 = v1647 ? v1650 : false;
  const v1653 = v1651 ? v1630 : v1643;
  const v1654 = stdlib.digest(ctc3, [v1633]);
  const v1655 = stdlib.digest(ctc3, [v1634]);
  const v1656 = stdlib.digestEq(v1654, v1655);
  const v1658 = stdlib.digest(ctc3, [v1635]);
  const v1659 = stdlib.digestEq(v1654, v1658);
  const v1660 = v1656 ? v1659 : false;
  const v1662 = v1660 ? v1633 : v1643;
  const v1665 = stdlib.digestEq(v1636, v1645);
  const v1668 = stdlib.digestEq(v1636, v1654);
  const v1669 = v1665 ? v1668 : false;
  const v1671 = v1669 ? v1627 : v1643;
  const v1674 = stdlib.digestEq(v1637, v1646);
  const v1677 = stdlib.digestEq(v1637, v1655);
  const v1678 = v1674 ? v1677 : false;
  const v1680 = v1678 ? v1628 : v1643;
  const v1683 = stdlib.digestEq(v1640, v1649);
  const v1686 = stdlib.digestEq(v1640, v1658);
  const v1687 = v1683 ? v1686 : false;
  const v1689 = v1687 ? v1629 : v1643;
  const v1692 = stdlib.digestEq(v1636, v1646);
  const v1695 = stdlib.digestEq(v1636, v1658);
  const v1696 = v1692 ? v1695 : false;
  const v1698 = v1696 ? v1627 : v1643;
  const v1701 = stdlib.digestEq(v1640, v1646);
  const v1704 = stdlib.digestEq(v1640, v1654);
  const v1705 = v1701 ? v1704 : false;
  const v1707 = v1705 ? v1629 : v1643;
  const v1708 = 'x';
  const v1709 = stdlib.digest(ctc3, [v1644]);
  const v1711 = stdlib.digest(ctc3, [v1708]);
  const v1712 = stdlib.digestEq(v1709, v1711);
  const v1714 = stdlib.digest(ctc3, [v1653]);
  const v1717 = stdlib.digestEq(v1714, v1711);
  const v1718 = v1712 ? true : v1717;
  const v1720 = stdlib.digest(ctc3, [v1662]);
  const v1723 = stdlib.digestEq(v1720, v1711);
  const v1724 = v1718 ? true : v1723;
  const v1726 = stdlib.digest(ctc3, [v1671]);
  const v1729 = stdlib.digestEq(v1726, v1711);
  const v1730 = v1724 ? true : v1729;
  const v1732 = stdlib.digest(ctc3, [v1680]);
  const v1735 = stdlib.digestEq(v1732, v1711);
  const v1736 = v1730 ? true : v1735;
  const v1738 = stdlib.digest(ctc3, [v1689]);
  const v1741 = stdlib.digestEq(v1738, v1711);
  const v1742 = v1736 ? true : v1741;
  const v1744 = stdlib.digest(ctc3, [v1698]);
  const v1747 = stdlib.digestEq(v1744, v1711);
  const v1748 = v1742 ? true : v1747;
  const v1750 = stdlib.digest(ctc3, [v1707]);
  const v1753 = stdlib.digestEq(v1750, v1711);
  const v1754 = v1748 ? true : v1753;
  if (v1754) {
    v1626 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1755 = 'o';
    const v1758 = stdlib.digest(ctc3, [v1755]);
    const v1759 = stdlib.digestEq(v1709, v1758);
    const v1764 = stdlib.digestEq(v1714, v1758);
    const v1765 = v1759 ? true : v1764;
    const v1770 = stdlib.digestEq(v1720, v1758);
    const v1771 = v1765 ? true : v1770;
    const v1776 = stdlib.digestEq(v1726, v1758);
    const v1777 = v1771 ? true : v1776;
    const v1782 = stdlib.digestEq(v1732, v1758);
    const v1783 = v1777 ? true : v1782;
    const v1788 = stdlib.digestEq(v1738, v1758);
    const v1789 = v1783 ? true : v1788;
    const v1794 = stdlib.digestEq(v1744, v1758);
    const v1795 = v1789 ? true : v1794;
    const v1800 = stdlib.digestEq(v1750, v1758);
    const v1801 = v1795 ? true : v1800;
    if (v1801) {
      v1626 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
      }
    else {
      v1626 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
      }
    }
  const v1803 = stdlib.safeDiv(v1061, stdlib.checkedBigNumberify('./index.rsh:197:32:decimal', stdlib.UInt_max, '2'));
  const v1805 = stdlib.safeSub(v1061, v1803);
  let v1806;
  const v1807 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:187:24:decimal', stdlib.UInt_max, '0'));
  if (v1807) {
    const v1808 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    v1806 = v1808;
    }
  else {
    const v1809 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '1'));
    if (v1809) {
      const v1810 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      v1806 = v1810;
      }
    else {
      const v1811 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      v1806 = v1811;
      }
    }
  const v1812 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '0')];
  const v1813 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '1')];
  let v1814;
  const v1816 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:201:44:decimal', stdlib.UInt_max, '1'));
  const v1817 = v1807 ? true : v1816;
  if (v1817) {
    const v1819 = stdlib.safeMul(v1812, v1061);
    v1814 = v1819;
    }
  else {
    const v1820 = stdlib.safeMul(v1812, v1803);
    v1814 = v1820;
    }
  const v1824 = stdlib.safeSub(v1061, v1814);
  ;
  let v1825;
  if (v1817) {
    const v1830 = stdlib.safeMul(v1813, v1824);
    v1825 = v1830;
    }
  else {
    const v1831 = stdlib.safeMul(v1813, v1805);
    v1825 = v1831;
    }
  ;
  stdlib.protect(ctc4, await interact.endsWith(v1053), {
    at: './index.rsh:224:22:application',
    fs: ['at ./index.rsh:223:7:application call to [unknown function] (defined at: ./index.rsh:223:19:function exp)'],
    msg: 'endsWith',
    who: 'Alice'
    });
  stdlib.protect(ctc4, await interact.seeOutcome(v1626), {
    at: './index.rsh:225:24:application',
    fs: ['at ./index.rsh:223:7:application call to [unknown function] (defined at: ./index.rsh:223:19:function exp)'],
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
  const {data: [v1020, v1021], secs: v1023, time: v1022, didSend: v65, from: v1019 } = txn1;
  ;
  const v1026 = stdlib.protect(ctc1, await interact.acceptBudget(v1020), {
    at: './index.rsh:146:60:application',
    fs: ['at ./index.rsh:145:9:application call to [unknown function] (defined at: ./index.rsh:145:13:function exp)'],
    msg: 'acceptBudget',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v1019, v1020, v1021, v1026],
    evt_cnt: 1,
    funcNum: 1,
    lct: v1022,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:148:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1028], secs: v1030, time: v1029, didSend: v74, from: v1027 } = txn2;
      
      ;
      const v1031 = ' ';
      const v1040 = [v1031, v1031, v1031, v1031, v1031, v1031, v1031, v1031, v1031];
      const v1041 = {
        board: v1040,
        oCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        playerTurn: true,
        xCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v1053 = v1041;
      const v1054 = v1029;
      const v1061 = stdlib.checkedBigNumberify('./index.rsh:125:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1064 = v1053.board;
        let v1065;
        const v1066 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
        const v1067 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
        const v1068 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
        const v1069 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
        const v1070 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
        const v1071 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
        const v1072 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
        const v1073 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
        const v1074 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
        const v1075 = stdlib.digest(ctc3, [v1066]);
        const v1076 = stdlib.digest(ctc3, [v1067]);
        const v1077 = stdlib.digestEq(v1075, v1076);
        const v1079 = stdlib.digest(ctc3, [v1068]);
        const v1080 = stdlib.digestEq(v1075, v1079);
        const v1081 = v1077 ? v1080 : false;
        const v1082 = '-';
        const v1083 = v1081 ? v1066 : v1082;
        const v1084 = stdlib.digest(ctc3, [v1069]);
        const v1085 = stdlib.digest(ctc3, [v1070]);
        const v1086 = stdlib.digestEq(v1084, v1085);
        const v1088 = stdlib.digest(ctc3, [v1071]);
        const v1089 = stdlib.digestEq(v1084, v1088);
        const v1090 = v1086 ? v1089 : false;
        const v1092 = v1090 ? v1069 : v1082;
        const v1093 = stdlib.digest(ctc3, [v1072]);
        const v1094 = stdlib.digest(ctc3, [v1073]);
        const v1095 = stdlib.digestEq(v1093, v1094);
        const v1097 = stdlib.digest(ctc3, [v1074]);
        const v1098 = stdlib.digestEq(v1093, v1097);
        const v1099 = v1095 ? v1098 : false;
        const v1101 = v1099 ? v1072 : v1082;
        const v1104 = stdlib.digestEq(v1075, v1084);
        const v1107 = stdlib.digestEq(v1075, v1093);
        const v1108 = v1104 ? v1107 : false;
        const v1110 = v1108 ? v1066 : v1082;
        const v1113 = stdlib.digestEq(v1076, v1085);
        const v1116 = stdlib.digestEq(v1076, v1094);
        const v1117 = v1113 ? v1116 : false;
        const v1119 = v1117 ? v1067 : v1082;
        const v1122 = stdlib.digestEq(v1079, v1088);
        const v1125 = stdlib.digestEq(v1079, v1097);
        const v1126 = v1122 ? v1125 : false;
        const v1128 = v1126 ? v1068 : v1082;
        const v1131 = stdlib.digestEq(v1075, v1085);
        const v1134 = stdlib.digestEq(v1075, v1097);
        const v1135 = v1131 ? v1134 : false;
        const v1137 = v1135 ? v1066 : v1082;
        const v1140 = stdlib.digestEq(v1079, v1085);
        const v1143 = stdlib.digestEq(v1079, v1093);
        const v1144 = v1140 ? v1143 : false;
        const v1146 = v1144 ? v1068 : v1082;
        const v1147 = 'x';
        const v1148 = stdlib.digest(ctc3, [v1083]);
        const v1150 = stdlib.digest(ctc3, [v1147]);
        const v1151 = stdlib.digestEq(v1148, v1150);
        const v1153 = stdlib.digest(ctc3, [v1092]);
        const v1156 = stdlib.digestEq(v1153, v1150);
        const v1157 = v1151 ? true : v1156;
        const v1159 = stdlib.digest(ctc3, [v1101]);
        const v1162 = stdlib.digestEq(v1159, v1150);
        const v1163 = v1157 ? true : v1162;
        const v1165 = stdlib.digest(ctc3, [v1110]);
        const v1168 = stdlib.digestEq(v1165, v1150);
        const v1169 = v1163 ? true : v1168;
        const v1171 = stdlib.digest(ctc3, [v1119]);
        const v1174 = stdlib.digestEq(v1171, v1150);
        const v1175 = v1169 ? true : v1174;
        const v1177 = stdlib.digest(ctc3, [v1128]);
        const v1180 = stdlib.digestEq(v1177, v1150);
        const v1181 = v1175 ? true : v1180;
        const v1183 = stdlib.digest(ctc3, [v1137]);
        const v1186 = stdlib.digestEq(v1183, v1150);
        const v1187 = v1181 ? true : v1186;
        const v1189 = stdlib.digest(ctc3, [v1146]);
        const v1192 = stdlib.digestEq(v1189, v1150);
        const v1193 = v1187 ? true : v1192;
        if (v1193) {
          v1065 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1194 = 'o';
          const v1197 = stdlib.digest(ctc3, [v1194]);
          const v1198 = stdlib.digestEq(v1148, v1197);
          const v1203 = stdlib.digestEq(v1153, v1197);
          const v1204 = v1198 ? true : v1203;
          const v1209 = stdlib.digestEq(v1159, v1197);
          const v1210 = v1204 ? true : v1209;
          const v1215 = stdlib.digestEq(v1165, v1197);
          const v1216 = v1210 ? true : v1215;
          const v1221 = stdlib.digestEq(v1171, v1197);
          const v1222 = v1216 ? true : v1221;
          const v1227 = stdlib.digestEq(v1177, v1197);
          const v1228 = v1222 ? true : v1227;
          const v1233 = stdlib.digestEq(v1183, v1197);
          const v1234 = v1228 ? true : v1233;
          const v1239 = stdlib.digestEq(v1189, v1197);
          const v1240 = v1234 ? true : v1239;
          if (v1240) {
            v1065 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
            }
          else {
            v1065 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
            }
          }
        const v1242 = await stdlib.Array_asyncReduce([v1064], true, async([v1244], v1243, v1245) => {
          const v1247 = stdlib.digest(ctc3, [v1244]);
          const v1250 = stdlib.digestEq(v1247, v1150);
          const v1251 = 'o';
          const v1254 = stdlib.digest(ctc3, [v1251]);
          const v1255 = stdlib.digestEq(v1247, v1254);
          const v1256 = v1250 ? true : v1255;
          const v1257 = v1243 ? v1256 : false;
          
          return v1257;})
        const v1258 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:52:decimal', stdlib.UInt_max, '1'));
        const v1259 = v1242 ? true : v1258;
        const v1260 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:70:decimal', stdlib.UInt_max, '0'));
        const v1261 = v1259 ? true : v1260;
        const v1263 = v1053.xCost;
        const v1264 = v1053.oCost;
        const v1265 = stdlib.safeAdd(v1263, v1264);
        const v1266 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:64:decimal', stdlib.UInt_max, '2'), v1020);
        const v1267 = stdlib.le(v1265, v1266);
        const v1268 = v1261 ? false : v1267;
        
        return v1268;})()) {
        const v1269 = v1053.playerTurn;
        if (v1269) {
          const v1277 = stdlib.safeAdd(v1054, v1021);
          sim_r.isHalt = false;
          }
        else {
          const v1454 = stdlib.safeAdd(v1054, v1021);
          sim_r.isHalt = false;
          }}
      else {
        const v1625 = v1053.board;
        let v1626;
        const v1627 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
        const v1628 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
        const v1629 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
        const v1630 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
        const v1631 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
        const v1632 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
        const v1633 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
        const v1634 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
        const v1635 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
        const v1636 = stdlib.digest(ctc3, [v1627]);
        const v1637 = stdlib.digest(ctc3, [v1628]);
        const v1638 = stdlib.digestEq(v1636, v1637);
        const v1640 = stdlib.digest(ctc3, [v1629]);
        const v1641 = stdlib.digestEq(v1636, v1640);
        const v1642 = v1638 ? v1641 : false;
        const v1643 = '-';
        const v1644 = v1642 ? v1627 : v1643;
        const v1645 = stdlib.digest(ctc3, [v1630]);
        const v1646 = stdlib.digest(ctc3, [v1631]);
        const v1647 = stdlib.digestEq(v1645, v1646);
        const v1649 = stdlib.digest(ctc3, [v1632]);
        const v1650 = stdlib.digestEq(v1645, v1649);
        const v1651 = v1647 ? v1650 : false;
        const v1653 = v1651 ? v1630 : v1643;
        const v1654 = stdlib.digest(ctc3, [v1633]);
        const v1655 = stdlib.digest(ctc3, [v1634]);
        const v1656 = stdlib.digestEq(v1654, v1655);
        const v1658 = stdlib.digest(ctc3, [v1635]);
        const v1659 = stdlib.digestEq(v1654, v1658);
        const v1660 = v1656 ? v1659 : false;
        const v1662 = v1660 ? v1633 : v1643;
        const v1665 = stdlib.digestEq(v1636, v1645);
        const v1668 = stdlib.digestEq(v1636, v1654);
        const v1669 = v1665 ? v1668 : false;
        const v1671 = v1669 ? v1627 : v1643;
        const v1674 = stdlib.digestEq(v1637, v1646);
        const v1677 = stdlib.digestEq(v1637, v1655);
        const v1678 = v1674 ? v1677 : false;
        const v1680 = v1678 ? v1628 : v1643;
        const v1683 = stdlib.digestEq(v1640, v1649);
        const v1686 = stdlib.digestEq(v1640, v1658);
        const v1687 = v1683 ? v1686 : false;
        const v1689 = v1687 ? v1629 : v1643;
        const v1692 = stdlib.digestEq(v1636, v1646);
        const v1695 = stdlib.digestEq(v1636, v1658);
        const v1696 = v1692 ? v1695 : false;
        const v1698 = v1696 ? v1627 : v1643;
        const v1701 = stdlib.digestEq(v1640, v1646);
        const v1704 = stdlib.digestEq(v1640, v1654);
        const v1705 = v1701 ? v1704 : false;
        const v1707 = v1705 ? v1629 : v1643;
        const v1708 = 'x';
        const v1709 = stdlib.digest(ctc3, [v1644]);
        const v1711 = stdlib.digest(ctc3, [v1708]);
        const v1712 = stdlib.digestEq(v1709, v1711);
        const v1714 = stdlib.digest(ctc3, [v1653]);
        const v1717 = stdlib.digestEq(v1714, v1711);
        const v1718 = v1712 ? true : v1717;
        const v1720 = stdlib.digest(ctc3, [v1662]);
        const v1723 = stdlib.digestEq(v1720, v1711);
        const v1724 = v1718 ? true : v1723;
        const v1726 = stdlib.digest(ctc3, [v1671]);
        const v1729 = stdlib.digestEq(v1726, v1711);
        const v1730 = v1724 ? true : v1729;
        const v1732 = stdlib.digest(ctc3, [v1680]);
        const v1735 = stdlib.digestEq(v1732, v1711);
        const v1736 = v1730 ? true : v1735;
        const v1738 = stdlib.digest(ctc3, [v1689]);
        const v1741 = stdlib.digestEq(v1738, v1711);
        const v1742 = v1736 ? true : v1741;
        const v1744 = stdlib.digest(ctc3, [v1698]);
        const v1747 = stdlib.digestEq(v1744, v1711);
        const v1748 = v1742 ? true : v1747;
        const v1750 = stdlib.digest(ctc3, [v1707]);
        const v1753 = stdlib.digestEq(v1750, v1711);
        const v1754 = v1748 ? true : v1753;
        if (v1754) {
          v1626 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1755 = 'o';
          const v1758 = stdlib.digest(ctc3, [v1755]);
          const v1759 = stdlib.digestEq(v1709, v1758);
          const v1764 = stdlib.digestEq(v1714, v1758);
          const v1765 = v1759 ? true : v1764;
          const v1770 = stdlib.digestEq(v1720, v1758);
          const v1771 = v1765 ? true : v1770;
          const v1776 = stdlib.digestEq(v1726, v1758);
          const v1777 = v1771 ? true : v1776;
          const v1782 = stdlib.digestEq(v1732, v1758);
          const v1783 = v1777 ? true : v1782;
          const v1788 = stdlib.digestEq(v1738, v1758);
          const v1789 = v1783 ? true : v1788;
          const v1794 = stdlib.digestEq(v1744, v1758);
          const v1795 = v1789 ? true : v1794;
          const v1800 = stdlib.digestEq(v1750, v1758);
          const v1801 = v1795 ? true : v1800;
          if (v1801) {
            v1626 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
            }
          else {
            v1626 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
            }
          }
        const v1803 = stdlib.safeDiv(v1061, stdlib.checkedBigNumberify('./index.rsh:197:32:decimal', stdlib.UInt_max, '2'));
        const v1805 = stdlib.safeSub(v1061, v1803);
        let v1806;
        const v1807 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:187:24:decimal', stdlib.UInt_max, '0'));
        if (v1807) {
          const v1808 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          v1806 = v1808;
          }
        else {
          const v1809 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '1'));
          if (v1809) {
            const v1810 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            v1806 = v1810;
            }
          else {
            const v1811 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
            v1806 = v1811;
            }
          }
        const v1812 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '0')];
        const v1813 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '1')];
        let v1814;
        const v1816 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:201:44:decimal', stdlib.UInt_max, '1'));
        const v1817 = v1807 ? true : v1816;
        if (v1817) {
          const v1819 = stdlib.safeMul(v1812, v1061);
          v1814 = v1819;
          }
        else {
          const v1820 = stdlib.safeMul(v1812, v1803);
          v1814 = v1820;
          }
        const v1824 = stdlib.safeSub(v1061, v1814);
        sim_r.txns.push({
          kind: 'from',
          to: v1019,
          tok: undefined /* Nothing */
          });
        let v1825;
        if (v1817) {
          const v1830 = stdlib.safeMul(v1813, v1824);
          v1825 = v1830;
          }
        else {
          const v1831 = stdlib.safeMul(v1813, v1805);
          v1825 = v1831;
          }
        sim_r.txns.push({
          kind: 'from',
          to: v1027,
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
  const {data: [v1028], secs: v1030, time: v1029, didSend: v74, from: v1027 } = txn2;
  ;
  const v1031 = ' ';
  const v1040 = [v1031, v1031, v1031, v1031, v1031, v1031, v1031, v1031, v1031];
  const v1041 = {
    board: v1040,
    oCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    playerTurn: true,
    xCost: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v1053 = v1041;
  let v1054 = v1029;
  let v1061 = stdlib.checkedBigNumberify('./index.rsh:125:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1064 = v1053.board;
    let v1065;
    const v1066 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
    const v1067 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
    const v1068 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
    const v1069 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
    const v1070 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
    const v1071 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
    const v1072 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
    const v1073 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
    const v1074 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
    const v1075 = stdlib.digest(ctc3, [v1066]);
    const v1076 = stdlib.digest(ctc3, [v1067]);
    const v1077 = stdlib.digestEq(v1075, v1076);
    const v1079 = stdlib.digest(ctc3, [v1068]);
    const v1080 = stdlib.digestEq(v1075, v1079);
    const v1081 = v1077 ? v1080 : false;
    const v1082 = '-';
    const v1083 = v1081 ? v1066 : v1082;
    const v1084 = stdlib.digest(ctc3, [v1069]);
    const v1085 = stdlib.digest(ctc3, [v1070]);
    const v1086 = stdlib.digestEq(v1084, v1085);
    const v1088 = stdlib.digest(ctc3, [v1071]);
    const v1089 = stdlib.digestEq(v1084, v1088);
    const v1090 = v1086 ? v1089 : false;
    const v1092 = v1090 ? v1069 : v1082;
    const v1093 = stdlib.digest(ctc3, [v1072]);
    const v1094 = stdlib.digest(ctc3, [v1073]);
    const v1095 = stdlib.digestEq(v1093, v1094);
    const v1097 = stdlib.digest(ctc3, [v1074]);
    const v1098 = stdlib.digestEq(v1093, v1097);
    const v1099 = v1095 ? v1098 : false;
    const v1101 = v1099 ? v1072 : v1082;
    const v1104 = stdlib.digestEq(v1075, v1084);
    const v1107 = stdlib.digestEq(v1075, v1093);
    const v1108 = v1104 ? v1107 : false;
    const v1110 = v1108 ? v1066 : v1082;
    const v1113 = stdlib.digestEq(v1076, v1085);
    const v1116 = stdlib.digestEq(v1076, v1094);
    const v1117 = v1113 ? v1116 : false;
    const v1119 = v1117 ? v1067 : v1082;
    const v1122 = stdlib.digestEq(v1079, v1088);
    const v1125 = stdlib.digestEq(v1079, v1097);
    const v1126 = v1122 ? v1125 : false;
    const v1128 = v1126 ? v1068 : v1082;
    const v1131 = stdlib.digestEq(v1075, v1085);
    const v1134 = stdlib.digestEq(v1075, v1097);
    const v1135 = v1131 ? v1134 : false;
    const v1137 = v1135 ? v1066 : v1082;
    const v1140 = stdlib.digestEq(v1079, v1085);
    const v1143 = stdlib.digestEq(v1079, v1093);
    const v1144 = v1140 ? v1143 : false;
    const v1146 = v1144 ? v1068 : v1082;
    const v1147 = 'x';
    const v1148 = stdlib.digest(ctc3, [v1083]);
    const v1150 = stdlib.digest(ctc3, [v1147]);
    const v1151 = stdlib.digestEq(v1148, v1150);
    const v1153 = stdlib.digest(ctc3, [v1092]);
    const v1156 = stdlib.digestEq(v1153, v1150);
    const v1157 = v1151 ? true : v1156;
    const v1159 = stdlib.digest(ctc3, [v1101]);
    const v1162 = stdlib.digestEq(v1159, v1150);
    const v1163 = v1157 ? true : v1162;
    const v1165 = stdlib.digest(ctc3, [v1110]);
    const v1168 = stdlib.digestEq(v1165, v1150);
    const v1169 = v1163 ? true : v1168;
    const v1171 = stdlib.digest(ctc3, [v1119]);
    const v1174 = stdlib.digestEq(v1171, v1150);
    const v1175 = v1169 ? true : v1174;
    const v1177 = stdlib.digest(ctc3, [v1128]);
    const v1180 = stdlib.digestEq(v1177, v1150);
    const v1181 = v1175 ? true : v1180;
    const v1183 = stdlib.digest(ctc3, [v1137]);
    const v1186 = stdlib.digestEq(v1183, v1150);
    const v1187 = v1181 ? true : v1186;
    const v1189 = stdlib.digest(ctc3, [v1146]);
    const v1192 = stdlib.digestEq(v1189, v1150);
    const v1193 = v1187 ? true : v1192;
    if (v1193) {
      v1065 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1194 = 'o';
      const v1197 = stdlib.digest(ctc3, [v1194]);
      const v1198 = stdlib.digestEq(v1148, v1197);
      const v1203 = stdlib.digestEq(v1153, v1197);
      const v1204 = v1198 ? true : v1203;
      const v1209 = stdlib.digestEq(v1159, v1197);
      const v1210 = v1204 ? true : v1209;
      const v1215 = stdlib.digestEq(v1165, v1197);
      const v1216 = v1210 ? true : v1215;
      const v1221 = stdlib.digestEq(v1171, v1197);
      const v1222 = v1216 ? true : v1221;
      const v1227 = stdlib.digestEq(v1177, v1197);
      const v1228 = v1222 ? true : v1227;
      const v1233 = stdlib.digestEq(v1183, v1197);
      const v1234 = v1228 ? true : v1233;
      const v1239 = stdlib.digestEq(v1189, v1197);
      const v1240 = v1234 ? true : v1239;
      if (v1240) {
        v1065 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
        }
      else {
        v1065 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
        }
      }
    const v1242 = await stdlib.Array_asyncReduce([v1064], true, async([v1244], v1243, v1245) => {
      const v1247 = stdlib.digest(ctc3, [v1244]);
      const v1250 = stdlib.digestEq(v1247, v1150);
      const v1251 = 'o';
      const v1254 = stdlib.digest(ctc3, [v1251]);
      const v1255 = stdlib.digestEq(v1247, v1254);
      const v1256 = v1250 ? true : v1255;
      const v1257 = v1243 ? v1256 : false;
      
      return v1257;})
    const v1258 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:52:decimal', stdlib.UInt_max, '1'));
    const v1259 = v1242 ? true : v1258;
    const v1260 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:70:decimal', stdlib.UInt_max, '0'));
    const v1261 = v1259 ? true : v1260;
    const v1263 = v1053.xCost;
    const v1264 = v1053.oCost;
    const v1265 = stdlib.safeAdd(v1263, v1264);
    const v1266 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:64:decimal', stdlib.UInt_max, '2'), v1020);
    const v1267 = stdlib.le(v1265, v1266);
    const v1268 = v1261 ? false : v1267;
    
    return v1268;})()) {
    const v1269 = v1053.playerTurn;
    if (v1269) {
      const v1277 = stdlib.safeAdd(v1054, v1021);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 3,
        out_tys: [ctc0, ctc0],
        timeoutAt: ['time', v1277],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v1019, v1020, v1021, v1027, v1053, v1061, v1277],
          evt_cnt: 0,
          funcNum: 4,
          lct: v1054,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1432, time: v1431, didSend: v509, from: v1430 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v1027,
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
        const {data: [], secs: v1432, time: v1431, didSend: v509, from: v1430 } = txn4;
        ;
        const v1433 = stdlib.addressEq(v1019, v1430);
        const v1434 = stdlib.addressEq(v1027, v1430);
        const v1435 = v1433 ? true : v1434;
        stdlib.assert(v1435, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:163:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeOut(), {
          at: './index.rsh:130:29:application',
          fs: ['at ./index.rsh:129:9:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:128:28:function exp)', 'at ./index.rsh:163:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v1317, v1318], secs: v1320, time: v1319, didSend: v366, from: v1316 } = txn3;
        const v1322 = stdlib.safeAdd(v1061, v1318);
        ;
        const v1323 = stdlib.addressEq(v1019, v1316);
        stdlib.assert(v1323, {
          at: './index.rsh:161:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1324 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1317);
        const v1325 = stdlib.lt(v1317, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1326 = v1324 ? v1325 : false;
        stdlib.assert(v1326, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:164:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Bob'
          });
        const v1327 = v1053.board;
        const v1329 = v1327[v1317];
        const v1330 = 'x';
        const v1331 = stdlib.digest(ctc3, [v1329]);
        const v1333 = stdlib.digest(ctc3, [v1330]);
        const v1334 = stdlib.digestEq(v1331, v1333);
        const v1335 = 'o';
        const v1338 = stdlib.digest(ctc3, [v1335]);
        const v1339 = stdlib.digestEq(v1331, v1338);
        const v1340 = v1334 ? true : v1339;
        const v1341 = v1340 ? false : true;
        stdlib.assert(v1341, {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:164:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Bob'
          });
        const v1343 = stdlib.safeDiv(v1020, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
        const v1349 = stdlib.Array_set(v1327, v1317, v1330);
        const v1355 = v1053.xCost;
        const v1356 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000')];
        const v1358 = v1356[v1317];
        const v1359 = stdlib.safeMul(v1358, v1343);
        const v1360 = stdlib.safeAdd(v1355, v1359);
        const v1363 = v1053.oCost;
        const v1370 = {
          board: v1349,
          oCost: v1363,
          playerTurn: false,
          xCost: v1360
          };
        const cv1053 = v1370;
        const cv1054 = v1319;
        const cv1061 = v1322;
        
        v1053 = cv1053;
        v1054 = cv1054;
        v1061 = cv1061;
        
        continue;}
      
      }
    else {
      const v1454 = stdlib.safeAdd(v1054, v1021);
      const v1458 = v1053.board;
      const v1471 = stdlib.protect(ctc0, await interact.getSquareSelected(v1053), {
        at: './index.rsh:70:43:application',
        fs: ['at ./index.rsh:171:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:17:function exp)'],
        msg: 'getSquareSelected',
        who: 'Bob'
        });
      const v1472 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1471);
      const v1473 = stdlib.lt(v1471, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
      const v1474 = v1472 ? v1473 : false;
      stdlib.assert(v1474, {
        at: './index.rsh:71:9:application',
        fs: ['at ./index.rsh:171:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:17:function exp)'],
        msg: 'A square in the board should be selected',
        who: 'Bob'
        });
      const v1477 = v1458[v1471];
      const v1478 = 'x';
      const v1479 = stdlib.digest(ctc3, [v1477]);
      const v1481 = stdlib.digest(ctc3, [v1478]);
      const v1482 = stdlib.digestEq(v1479, v1481);
      const v1483 = 'o';
      const v1486 = stdlib.digest(ctc3, [v1483]);
      const v1487 = stdlib.digestEq(v1479, v1486);
      const v1488 = v1482 ? true : v1487;
      const v1489 = v1488 ? false : true;
      stdlib.assert(v1489, {
        at: './index.rsh:72:9:application',
        fs: ['at ./index.rsh:171:37:application call to "getValidSquare" (defined at: ./index.rsh:69:46:function exp)', 'at ./index.rsh:170:13:application call to [unknown function] (defined at: ./index.rsh:170:17:function exp)'],
        msg: 'The square has been played by a player already',
        who: 'Bob'
        });
      const v1490 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000')];
      const v1492 = v1490[v1471];
      
      const txn3 = await (ctc.sendrecv({
        args: [v1019, v1020, v1021, v1027, v1053, v1061, v1454, v1471, v1492],
        evt_cnt: 2,
        funcNum: 5,
        lct: v1054,
        onlyIf: true,
        out_tys: [ctc0, ctc0],
        pay: [v1492, []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v1494, v1495], secs: v1497, time: v1496, didSend: v574, from: v1493 } = txn3;
          
          const v1499 = stdlib.safeAdd(v1061, v1495);
          sim_r.txns.push({
            amt: v1495,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1504 = v1053.board;
          const v1512 = 'o';
          const v1520 = stdlib.safeDiv(v1020, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
          const v1530 = stdlib.Array_set(v1504, v1494, v1512);
          const v1538 = v1053.xCost;
          const v1541 = v1053.oCost;
          const v1542 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000')];
          const v1544 = v1542[v1494];
          const v1545 = stdlib.safeMul(v1544, v1520);
          const v1546 = stdlib.safeAdd(v1541, v1545);
          const v1547 = {
            board: v1530,
            oCost: v1546,
            playerTurn: true,
            xCost: v1538
            };
          
          const cv1053 = v1547;
          const cv1054 = v1496;
          const cv1061 = v1499;
          
          await (async () => {
            const v1053 = cv1053;
            const v1054 = cv1054;
            const v1061 = cv1061;
            
            if (await (async () => {
              const v1064 = v1053.board;
              let v1065;
              const v1066 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
              const v1067 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
              const v1068 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
              const v1069 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
              const v1070 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
              const v1071 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
              const v1072 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
              const v1073 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
              const v1074 = v1064[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
              const v1075 = stdlib.digest(ctc3, [v1066]);
              const v1076 = stdlib.digest(ctc3, [v1067]);
              const v1077 = stdlib.digestEq(v1075, v1076);
              const v1079 = stdlib.digest(ctc3, [v1068]);
              const v1080 = stdlib.digestEq(v1075, v1079);
              const v1081 = v1077 ? v1080 : false;
              const v1082 = '-';
              const v1083 = v1081 ? v1066 : v1082;
              const v1084 = stdlib.digest(ctc3, [v1069]);
              const v1085 = stdlib.digest(ctc3, [v1070]);
              const v1086 = stdlib.digestEq(v1084, v1085);
              const v1088 = stdlib.digest(ctc3, [v1071]);
              const v1089 = stdlib.digestEq(v1084, v1088);
              const v1090 = v1086 ? v1089 : false;
              const v1092 = v1090 ? v1069 : v1082;
              const v1093 = stdlib.digest(ctc3, [v1072]);
              const v1094 = stdlib.digest(ctc3, [v1073]);
              const v1095 = stdlib.digestEq(v1093, v1094);
              const v1097 = stdlib.digest(ctc3, [v1074]);
              const v1098 = stdlib.digestEq(v1093, v1097);
              const v1099 = v1095 ? v1098 : false;
              const v1101 = v1099 ? v1072 : v1082;
              const v1104 = stdlib.digestEq(v1075, v1084);
              const v1107 = stdlib.digestEq(v1075, v1093);
              const v1108 = v1104 ? v1107 : false;
              const v1110 = v1108 ? v1066 : v1082;
              const v1113 = stdlib.digestEq(v1076, v1085);
              const v1116 = stdlib.digestEq(v1076, v1094);
              const v1117 = v1113 ? v1116 : false;
              const v1119 = v1117 ? v1067 : v1082;
              const v1122 = stdlib.digestEq(v1079, v1088);
              const v1125 = stdlib.digestEq(v1079, v1097);
              const v1126 = v1122 ? v1125 : false;
              const v1128 = v1126 ? v1068 : v1082;
              const v1131 = stdlib.digestEq(v1075, v1085);
              const v1134 = stdlib.digestEq(v1075, v1097);
              const v1135 = v1131 ? v1134 : false;
              const v1137 = v1135 ? v1066 : v1082;
              const v1140 = stdlib.digestEq(v1079, v1085);
              const v1143 = stdlib.digestEq(v1079, v1093);
              const v1144 = v1140 ? v1143 : false;
              const v1146 = v1144 ? v1068 : v1082;
              const v1147 = 'x';
              const v1148 = stdlib.digest(ctc3, [v1083]);
              const v1150 = stdlib.digest(ctc3, [v1147]);
              const v1151 = stdlib.digestEq(v1148, v1150);
              const v1153 = stdlib.digest(ctc3, [v1092]);
              const v1156 = stdlib.digestEq(v1153, v1150);
              const v1157 = v1151 ? true : v1156;
              const v1159 = stdlib.digest(ctc3, [v1101]);
              const v1162 = stdlib.digestEq(v1159, v1150);
              const v1163 = v1157 ? true : v1162;
              const v1165 = stdlib.digest(ctc3, [v1110]);
              const v1168 = stdlib.digestEq(v1165, v1150);
              const v1169 = v1163 ? true : v1168;
              const v1171 = stdlib.digest(ctc3, [v1119]);
              const v1174 = stdlib.digestEq(v1171, v1150);
              const v1175 = v1169 ? true : v1174;
              const v1177 = stdlib.digest(ctc3, [v1128]);
              const v1180 = stdlib.digestEq(v1177, v1150);
              const v1181 = v1175 ? true : v1180;
              const v1183 = stdlib.digest(ctc3, [v1137]);
              const v1186 = stdlib.digestEq(v1183, v1150);
              const v1187 = v1181 ? true : v1186;
              const v1189 = stdlib.digest(ctc3, [v1146]);
              const v1192 = stdlib.digestEq(v1189, v1150);
              const v1193 = v1187 ? true : v1192;
              if (v1193) {
                v1065 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1194 = 'o';
                const v1197 = stdlib.digest(ctc3, [v1194]);
                const v1198 = stdlib.digestEq(v1148, v1197);
                const v1203 = stdlib.digestEq(v1153, v1197);
                const v1204 = v1198 ? true : v1203;
                const v1209 = stdlib.digestEq(v1159, v1197);
                const v1210 = v1204 ? true : v1209;
                const v1215 = stdlib.digestEq(v1165, v1197);
                const v1216 = v1210 ? true : v1215;
                const v1221 = stdlib.digestEq(v1171, v1197);
                const v1222 = v1216 ? true : v1221;
                const v1227 = stdlib.digestEq(v1177, v1197);
                const v1228 = v1222 ? true : v1227;
                const v1233 = stdlib.digestEq(v1183, v1197);
                const v1234 = v1228 ? true : v1233;
                const v1239 = stdlib.digestEq(v1189, v1197);
                const v1240 = v1234 ? true : v1239;
                if (v1240) {
                  v1065 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  v1065 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
                  }
                }
              const v1242 = await stdlib.Array_asyncReduce([v1064], true, async([v1244], v1243, v1245) => {
                const v1247 = stdlib.digest(ctc3, [v1244]);
                const v1250 = stdlib.digestEq(v1247, v1150);
                const v1251 = 'o';
                const v1254 = stdlib.digest(ctc3, [v1251]);
                const v1255 = stdlib.digestEq(v1247, v1254);
                const v1256 = v1250 ? true : v1255;
                const v1257 = v1243 ? v1256 : false;
                
                return v1257;})
              const v1258 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:52:decimal', stdlib.UInt_max, '1'));
              const v1259 = v1242 ? true : v1258;
              const v1260 = stdlib.eq(v1065, stdlib.checkedBigNumberify('./index.rsh:98:70:decimal', stdlib.UInt_max, '0'));
              const v1261 = v1259 ? true : v1260;
              const v1263 = v1053.xCost;
              const v1264 = v1053.oCost;
              const v1265 = stdlib.safeAdd(v1263, v1264);
              const v1266 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:153:64:decimal', stdlib.UInt_max, '2'), v1020);
              const v1267 = stdlib.le(v1265, v1266);
              const v1268 = v1261 ? false : v1267;
              
              return v1268;})()) {
              const v1269 = v1053.playerTurn;
              if (v1269) {
                const v1277 = stdlib.safeAdd(v1054, v1021);
                sim_r.isHalt = false;
                }
              else {
                const v1454 = stdlib.safeAdd(v1054, v1021);
                sim_r.isHalt = false;
                }}
            else {
              const v1625 = v1053.board;
              let v1626;
              const v1627 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
              const v1628 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
              const v1629 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
              const v1630 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
              const v1631 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
              const v1632 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
              const v1633 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
              const v1634 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
              const v1635 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
              const v1636 = stdlib.digest(ctc3, [v1627]);
              const v1637 = stdlib.digest(ctc3, [v1628]);
              const v1638 = stdlib.digestEq(v1636, v1637);
              const v1640 = stdlib.digest(ctc3, [v1629]);
              const v1641 = stdlib.digestEq(v1636, v1640);
              const v1642 = v1638 ? v1641 : false;
              const v1643 = '-';
              const v1644 = v1642 ? v1627 : v1643;
              const v1645 = stdlib.digest(ctc3, [v1630]);
              const v1646 = stdlib.digest(ctc3, [v1631]);
              const v1647 = stdlib.digestEq(v1645, v1646);
              const v1649 = stdlib.digest(ctc3, [v1632]);
              const v1650 = stdlib.digestEq(v1645, v1649);
              const v1651 = v1647 ? v1650 : false;
              const v1653 = v1651 ? v1630 : v1643;
              const v1654 = stdlib.digest(ctc3, [v1633]);
              const v1655 = stdlib.digest(ctc3, [v1634]);
              const v1656 = stdlib.digestEq(v1654, v1655);
              const v1658 = stdlib.digest(ctc3, [v1635]);
              const v1659 = stdlib.digestEq(v1654, v1658);
              const v1660 = v1656 ? v1659 : false;
              const v1662 = v1660 ? v1633 : v1643;
              const v1665 = stdlib.digestEq(v1636, v1645);
              const v1668 = stdlib.digestEq(v1636, v1654);
              const v1669 = v1665 ? v1668 : false;
              const v1671 = v1669 ? v1627 : v1643;
              const v1674 = stdlib.digestEq(v1637, v1646);
              const v1677 = stdlib.digestEq(v1637, v1655);
              const v1678 = v1674 ? v1677 : false;
              const v1680 = v1678 ? v1628 : v1643;
              const v1683 = stdlib.digestEq(v1640, v1649);
              const v1686 = stdlib.digestEq(v1640, v1658);
              const v1687 = v1683 ? v1686 : false;
              const v1689 = v1687 ? v1629 : v1643;
              const v1692 = stdlib.digestEq(v1636, v1646);
              const v1695 = stdlib.digestEq(v1636, v1658);
              const v1696 = v1692 ? v1695 : false;
              const v1698 = v1696 ? v1627 : v1643;
              const v1701 = stdlib.digestEq(v1640, v1646);
              const v1704 = stdlib.digestEq(v1640, v1654);
              const v1705 = v1701 ? v1704 : false;
              const v1707 = v1705 ? v1629 : v1643;
              const v1708 = 'x';
              const v1709 = stdlib.digest(ctc3, [v1644]);
              const v1711 = stdlib.digest(ctc3, [v1708]);
              const v1712 = stdlib.digestEq(v1709, v1711);
              const v1714 = stdlib.digest(ctc3, [v1653]);
              const v1717 = stdlib.digestEq(v1714, v1711);
              const v1718 = v1712 ? true : v1717;
              const v1720 = stdlib.digest(ctc3, [v1662]);
              const v1723 = stdlib.digestEq(v1720, v1711);
              const v1724 = v1718 ? true : v1723;
              const v1726 = stdlib.digest(ctc3, [v1671]);
              const v1729 = stdlib.digestEq(v1726, v1711);
              const v1730 = v1724 ? true : v1729;
              const v1732 = stdlib.digest(ctc3, [v1680]);
              const v1735 = stdlib.digestEq(v1732, v1711);
              const v1736 = v1730 ? true : v1735;
              const v1738 = stdlib.digest(ctc3, [v1689]);
              const v1741 = stdlib.digestEq(v1738, v1711);
              const v1742 = v1736 ? true : v1741;
              const v1744 = stdlib.digest(ctc3, [v1698]);
              const v1747 = stdlib.digestEq(v1744, v1711);
              const v1748 = v1742 ? true : v1747;
              const v1750 = stdlib.digest(ctc3, [v1707]);
              const v1753 = stdlib.digestEq(v1750, v1711);
              const v1754 = v1748 ? true : v1753;
              if (v1754) {
                v1626 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
                }
              else {
                const v1755 = 'o';
                const v1758 = stdlib.digest(ctc3, [v1755]);
                const v1759 = stdlib.digestEq(v1709, v1758);
                const v1764 = stdlib.digestEq(v1714, v1758);
                const v1765 = v1759 ? true : v1764;
                const v1770 = stdlib.digestEq(v1720, v1758);
                const v1771 = v1765 ? true : v1770;
                const v1776 = stdlib.digestEq(v1726, v1758);
                const v1777 = v1771 ? true : v1776;
                const v1782 = stdlib.digestEq(v1732, v1758);
                const v1783 = v1777 ? true : v1782;
                const v1788 = stdlib.digestEq(v1738, v1758);
                const v1789 = v1783 ? true : v1788;
                const v1794 = stdlib.digestEq(v1744, v1758);
                const v1795 = v1789 ? true : v1794;
                const v1800 = stdlib.digestEq(v1750, v1758);
                const v1801 = v1795 ? true : v1800;
                if (v1801) {
                  v1626 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
                  }
                else {
                  v1626 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
                  }
                }
              const v1803 = stdlib.safeDiv(v1061, stdlib.checkedBigNumberify('./index.rsh:197:32:decimal', stdlib.UInt_max, '2'));
              const v1805 = stdlib.safeSub(v1061, v1803);
              let v1806;
              const v1807 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:187:24:decimal', stdlib.UInt_max, '0'));
              if (v1807) {
                const v1808 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                v1806 = v1808;
                }
              else {
                const v1809 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '1'));
                if (v1809) {
                  const v1810 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  v1806 = v1810;
                  }
                else {
                  const v1811 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  v1806 = v1811;
                  }
                }
              const v1812 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '0')];
              const v1813 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '1')];
              let v1814;
              const v1816 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:201:44:decimal', stdlib.UInt_max, '1'));
              const v1817 = v1807 ? true : v1816;
              if (v1817) {
                const v1819 = stdlib.safeMul(v1812, v1061);
                v1814 = v1819;
                }
              else {
                const v1820 = stdlib.safeMul(v1812, v1803);
                v1814 = v1820;
                }
              const v1824 = stdlib.safeSub(v1061, v1814);
              sim_r.txns.push({
                kind: 'from',
                to: v1019,
                tok: undefined /* Nothing */
                });
              let v1825;
              if (v1817) {
                const v1830 = stdlib.safeMul(v1813, v1824);
                v1825 = v1830;
                }
              else {
                const v1831 = stdlib.safeMul(v1813, v1805);
                v1825 = v1831;
                }
              sim_r.txns.push({
                kind: 'from',
                to: v1027,
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
        timeoutAt: ['time', v1454],
        tys: [ctc5, ctc0, ctc0, ctc5, ctc7, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v1019, v1020, v1021, v1027, v1053, v1061, v1454],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1054,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1609, time: v1608, didSend: v717, from: v1607 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v1019,
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
        const {data: [], secs: v1609, time: v1608, didSend: v717, from: v1607 } = txn4;
        ;
        const v1610 = stdlib.addressEq(v1019, v1607);
        const v1611 = stdlib.addressEq(v1027, v1607);
        const v1612 = v1610 ? true : v1611;
        stdlib.assert(v1612, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:177:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc4, await interact.informTimeOut(), {
          at: './index.rsh:130:29:application',
          fs: ['at ./index.rsh:129:9:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:128:28:function exp)', 'at ./index.rsh:177:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeOut',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v1494, v1495], secs: v1497, time: v1496, didSend: v574, from: v1493 } = txn3;
        const v1499 = stdlib.safeAdd(v1061, v1495);
        ;
        const v1500 = stdlib.addressEq(v1027, v1493);
        stdlib.assert(v1500, {
          at: './index.rsh:175:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v1501 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:59:34:decimal', stdlib.UInt_max, '0'), v1494);
        const v1502 = stdlib.lt(v1494, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1503 = v1501 ? v1502 : false;
        stdlib.assert(v1503, {
          at: './index.rsh:82:10:application',
          fs: ['at ./index.rsh:178:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Bob'
          });
        const v1504 = v1053.board;
        const v1506 = v1504[v1494];
        const v1507 = 'x';
        const v1508 = stdlib.digest(ctc3, [v1506]);
        const v1510 = stdlib.digest(ctc3, [v1507]);
        const v1511 = stdlib.digestEq(v1508, v1510);
        const v1512 = 'o';
        const v1515 = stdlib.digest(ctc3, [v1512]);
        const v1516 = stdlib.digestEq(v1508, v1515);
        const v1517 = v1511 ? true : v1516;
        const v1518 = v1517 ? false : true;
        stdlib.assert(v1518, {
          at: './index.rsh:83:10:application',
          fs: ['at ./index.rsh:178:42:application call to "applyPlayerMove" (defined at: ./index.rsh:81:47:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Bob'
          });
        const v1520 = stdlib.safeDiv(v1020, stdlib.checkedBigNumberify('./index.rsh:85:34:decimal', stdlib.UInt_max, '16000000'));
        const v1530 = stdlib.Array_set(v1504, v1494, v1512);
        const v1538 = v1053.xCost;
        const v1541 = v1053.oCost;
        const v1542 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2000000'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3000000')];
        const v1544 = v1542[v1494];
        const v1545 = stdlib.safeMul(v1544, v1520);
        const v1546 = stdlib.safeAdd(v1541, v1545);
        const v1547 = {
          board: v1530,
          oCost: v1546,
          playerTurn: true,
          xCost: v1538
          };
        stdlib.protect(ctc4, await interact.seeBoard(v1547), {
          at: './index.rsh:178:26:application',
          fs: ['at ./index.rsh:178:26:application call to [unknown function] (defined at: ./index.rsh:178:26:function exp)', 'at ./index.rsh:178:26:application call to "liftedInteract" (defined at: ./index.rsh:178:26:application)'],
          msg: 'seeBoard',
          who: 'Bob'
          });
        
        const cv1053 = v1547;
        const cv1054 = v1496;
        const cv1061 = v1499;
        
        v1053 = cv1053;
        v1054 = cv1054;
        v1061 = cv1061;
        
        continue;}
      
      }}
  const v1625 = v1053.board;
  let v1626;
  const v1627 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '0')];
  const v1628 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '1')];
  const v1629 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '2')];
  const v1630 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '3')];
  const v1631 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '4')];
  const v1632 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '5')];
  const v1633 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '6')];
  const v1634 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '7')];
  const v1635 = v1625[stdlib.checkedBigNumberify('./index.rsh:30:49:spread', stdlib.UInt_max, '8')];
  const v1636 = stdlib.digest(ctc3, [v1627]);
  const v1637 = stdlib.digest(ctc3, [v1628]);
  const v1638 = stdlib.digestEq(v1636, v1637);
  const v1640 = stdlib.digest(ctc3, [v1629]);
  const v1641 = stdlib.digestEq(v1636, v1640);
  const v1642 = v1638 ? v1641 : false;
  const v1643 = '-';
  const v1644 = v1642 ? v1627 : v1643;
  const v1645 = stdlib.digest(ctc3, [v1630]);
  const v1646 = stdlib.digest(ctc3, [v1631]);
  const v1647 = stdlib.digestEq(v1645, v1646);
  const v1649 = stdlib.digest(ctc3, [v1632]);
  const v1650 = stdlib.digestEq(v1645, v1649);
  const v1651 = v1647 ? v1650 : false;
  const v1653 = v1651 ? v1630 : v1643;
  const v1654 = stdlib.digest(ctc3, [v1633]);
  const v1655 = stdlib.digest(ctc3, [v1634]);
  const v1656 = stdlib.digestEq(v1654, v1655);
  const v1658 = stdlib.digest(ctc3, [v1635]);
  const v1659 = stdlib.digestEq(v1654, v1658);
  const v1660 = v1656 ? v1659 : false;
  const v1662 = v1660 ? v1633 : v1643;
  const v1665 = stdlib.digestEq(v1636, v1645);
  const v1668 = stdlib.digestEq(v1636, v1654);
  const v1669 = v1665 ? v1668 : false;
  const v1671 = v1669 ? v1627 : v1643;
  const v1674 = stdlib.digestEq(v1637, v1646);
  const v1677 = stdlib.digestEq(v1637, v1655);
  const v1678 = v1674 ? v1677 : false;
  const v1680 = v1678 ? v1628 : v1643;
  const v1683 = stdlib.digestEq(v1640, v1649);
  const v1686 = stdlib.digestEq(v1640, v1658);
  const v1687 = v1683 ? v1686 : false;
  const v1689 = v1687 ? v1629 : v1643;
  const v1692 = stdlib.digestEq(v1636, v1646);
  const v1695 = stdlib.digestEq(v1636, v1658);
  const v1696 = v1692 ? v1695 : false;
  const v1698 = v1696 ? v1627 : v1643;
  const v1701 = stdlib.digestEq(v1640, v1646);
  const v1704 = stdlib.digestEq(v1640, v1654);
  const v1705 = v1701 ? v1704 : false;
  const v1707 = v1705 ? v1629 : v1643;
  const v1708 = 'x';
  const v1709 = stdlib.digest(ctc3, [v1644]);
  const v1711 = stdlib.digest(ctc3, [v1708]);
  const v1712 = stdlib.digestEq(v1709, v1711);
  const v1714 = stdlib.digest(ctc3, [v1653]);
  const v1717 = stdlib.digestEq(v1714, v1711);
  const v1718 = v1712 ? true : v1717;
  const v1720 = stdlib.digest(ctc3, [v1662]);
  const v1723 = stdlib.digestEq(v1720, v1711);
  const v1724 = v1718 ? true : v1723;
  const v1726 = stdlib.digest(ctc3, [v1671]);
  const v1729 = stdlib.digestEq(v1726, v1711);
  const v1730 = v1724 ? true : v1729;
  const v1732 = stdlib.digest(ctc3, [v1680]);
  const v1735 = stdlib.digestEq(v1732, v1711);
  const v1736 = v1730 ? true : v1735;
  const v1738 = stdlib.digest(ctc3, [v1689]);
  const v1741 = stdlib.digestEq(v1738, v1711);
  const v1742 = v1736 ? true : v1741;
  const v1744 = stdlib.digest(ctc3, [v1698]);
  const v1747 = stdlib.digestEq(v1744, v1711);
  const v1748 = v1742 ? true : v1747;
  const v1750 = stdlib.digest(ctc3, [v1707]);
  const v1753 = stdlib.digestEq(v1750, v1711);
  const v1754 = v1748 ? true : v1753;
  if (v1754) {
    v1626 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    const v1755 = 'o';
    const v1758 = stdlib.digest(ctc3, [v1755]);
    const v1759 = stdlib.digestEq(v1709, v1758);
    const v1764 = stdlib.digestEq(v1714, v1758);
    const v1765 = v1759 ? true : v1764;
    const v1770 = stdlib.digestEq(v1720, v1758);
    const v1771 = v1765 ? true : v1770;
    const v1776 = stdlib.digestEq(v1726, v1758);
    const v1777 = v1771 ? true : v1776;
    const v1782 = stdlib.digestEq(v1732, v1758);
    const v1783 = v1777 ? true : v1782;
    const v1788 = stdlib.digestEq(v1738, v1758);
    const v1789 = v1783 ? true : v1788;
    const v1794 = stdlib.digestEq(v1744, v1758);
    const v1795 = v1789 ? true : v1794;
    const v1800 = stdlib.digestEq(v1750, v1758);
    const v1801 = v1795 ? true : v1800;
    if (v1801) {
      v1626 = stdlib.checkedBigNumberify('./index.rsh:48:14:decimal', stdlib.UInt_max, '1');
      }
    else {
      v1626 = stdlib.checkedBigNumberify('./index.rsh:50:14:decimal', stdlib.UInt_max, '2');
      }
    }
  const v1803 = stdlib.safeDiv(v1061, stdlib.checkedBigNumberify('./index.rsh:197:32:decimal', stdlib.UInt_max, '2'));
  const v1805 = stdlib.safeSub(v1061, v1803);
  let v1806;
  const v1807 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:187:24:decimal', stdlib.UInt_max, '0'));
  if (v1807) {
    const v1808 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    v1806 = v1808;
    }
  else {
    const v1809 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:189:31:decimal', stdlib.UInt_max, '1'));
    if (v1809) {
      const v1810 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      v1806 = v1810;
      }
    else {
      const v1811 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      v1806 = v1811;
      }
    }
  const v1812 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '0')];
  const v1813 = v1806[stdlib.checkedBigNumberify('./index.rsh:217:9:array', stdlib.UInt_max, '1')];
  let v1814;
  const v1816 = stdlib.eq(v1626, stdlib.checkedBigNumberify('./index.rsh:201:44:decimal', stdlib.UInt_max, '1'));
  const v1817 = v1807 ? true : v1816;
  if (v1817) {
    const v1819 = stdlib.safeMul(v1812, v1061);
    v1814 = v1819;
    }
  else {
    const v1820 = stdlib.safeMul(v1812, v1803);
    v1814 = v1820;
    }
  const v1824 = stdlib.safeSub(v1061, v1814);
  ;
  let v1825;
  if (v1817) {
    const v1830 = stdlib.safeMul(v1813, v1824);
    v1825 = v1830;
    }
  else {
    const v1831 = stdlib.safeMul(v1813, v1805);
    v1825 = v1831;
    }
  ;
  stdlib.protect(ctc4, await interact.endsWith(v1053), {
    at: './index.rsh:224:22:application',
    fs: ['at ./index.rsh:223:7:application call to [unknown function] (defined at: ./index.rsh:223:19:function exp)'],
    msg: 'endsWith',
    who: 'Bob'
    });
  stdlib.protect(ctc4, await interact.seeOutcome(v1626), {
    at: './index.rsh:225:24:application',
    fs: ['at ./index.rsh:223:7:application call to [unknown function] (defined at: ./index.rsh:223:19:function exp)'],
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
  appApproval: `BiAOAAEIBgIJBHJqBSAogMjQBxImBgEAIGXHTBWmhhh7trv5lY9JT8a4AGgDSmWamtRJkbCMWPLSACAtcRZCtyawRAFifKn7rDL1yFMPsZA8xNsCJYcXkhpIgUgAAAAAAC3GwAAAAAAAHoSAAAAAAAAtxsAAAAAAAB6EgAAAAAAAPQkAAAAAAAAehIAAAAAAAC3GwAAAAAAAHoSAAAAAAAAtxsABASI1ADEYQQeAKmRJIls1AUkkWzUCgRBbNQg2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEGDEABokkhCQxAAUpJJQxAAFIlEkQlNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEYbSsDLAyBjQDIQdbD0Q0/zEAEjQDVzAgMQASEUSxIrIBNAMhCFuyCCOyEDT/sgezQgaJSCI1/7EisgElshA0CLIYszT/IwhJNf8hBAxA/+clNAESRDQESSISTDQCEhFEKGRJNQNJSSEKWzX/VzAgNf5XUBo1/Uk1BUkiWzX8JFs1+4AEs1H3jzT8FlA0+xZQsDIGNAMhB1sMRDT7iAaiNP4xABJEIjT8DjT8IQUMEEQ0/VcACUk1+iM0/AsjWAE1+YABbzX4NPkrEjT5NPgBEhEURDQDVwAgNP80AyELWzT+NPoiIzT8C1I0+FA0+iNJNPwLCCEFUlA0/SEFWycEJDT8CyRYFzT/IQwKCwgWUCcFUDT9VxIIUDIGNAMhCFs0+whCAkJIIQY0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gASRJzTzsDIGNAMhB1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyEIW7III7IQNP+yB7NCBUZJIwxAAX5JgQMMQADySCI1/7EisgElshA0CLIYszT/IwhJNf8hBAxA/+chBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEKWzX+V1AaNf1JNQVJIls1/CRbNfuABKSl8Ig0/BZQNPsWULAyBjQDIQdbDEQ0+4gFUTT/MQASRCI0/A40/CEFDBBENP1XAAk1+oABeDX5NPojNPwLI1gBSTX4NPkBEjT4KRIRFEQ0/zT+NAMhC1s0A1cwIDT6IiM0/AtSNPlQNPojSTT8CwghBVJQNP1XCQhQKFA0/SENWycEJDT8CyRYFzT+IQwKCwgWUDIGNAMhCFs0+whCAPIjEkQiNf+xIrIBJbIQNAiyGLM0/yMISTX/IQQMQP/nIzQBEkQ0BEkiEkw0AhIRRChkNQNJNQUXNf+ABA+/xjQ0/xZRBwhQsIABIDX+NANXACA0AyEKWzQDIQtbMQA0/klQNP5QNP5QNP5QNP5QNP5QNP5QNP5QJK9QJwVQJK9QMgYiQgBtSIHAmgyIBD+xIrIBJbIQIrIYgAYGMQAyCRKyHoABBrIfs7Q9NQgiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwMQA0/xZQNP4WUChLAVcAMGdIIzUBMgY1AkIDgTX/Nf41/TX8Nfs1+jX5NP1XAAlJNfdXAAE19TT3VwEBNfQ091cCATXzNPdXAwE18jT3VwYBNfE09QE18DT0ATXvNPMBNe6AAS017TTyATXsNPdXBAEBNes091cFAQE16jTxATXpNPdXBwEBNeg091cIAQE15zTtNPU08DTvEjTwNO4SEE0BNeYrNeU07TTyNOw06xI07DTqEhBNATXkNO008TTpNOgSNOk05xIQTQE14zTtNPU08DTsEjTwNOkSEE0BNeI07TT0NO806xI07zToEhBNATXhNO008zTuNOoSNO405xIQTQE14DTtNPU08DTrEjTwNOcSEE0BNd807TTzNO406xI07jTpEhBNATXeNOY05RI05DTlEhE04zTlEhE04jTlEhE04TTlEhE04DTlEhE03zTlEhE03jTlEhFJNd1BAAYiNfZCAD8pNdw05jTcEjTkNNwSETTjNNwSETTiNNwSETThNNwSETTgNNwSETTfNNwSETTeNNwSEUEABiM19kIABCEENfYjNdwiNds09yM02wsjWEk12gE12TTcNNk05RI02SkSERA13DTbIwhJNdshBQxA/9Y03DT2IxIRNPYiEhEUNP0hDVs0/SEFWwghBDT6Cw4QQQBsNP1XEQEXQQAyNP40+wg12zT5NPoWUDT7FlA0/FA0/VA0/xZQNNsWUChLAVcAemdIIQY1ATIGNQJCAWo0/jT7CDXbNPk0+hZQNPsWUDT8UDT9UDT/FlA02xZQKEsBVwB6Z0glNQEyBjUCQgE5NN1BAAYiNdtCAD8pNdo05jTaEjTkNNoSETTjNNoSETTiNNoSETThNNoSETTgNNoSETTfNNoSETTeNNoSEUEABiM120IABCEENds0/yEECjXaNNsiEkk12EEAF4AQAAAAAAAAAAEAAAAAAAAAADXZQgAyNNsjEkEAF4AQAAAAAAAAAAAAAAAAAAAAATXZQgAUgBAAAAAAAAAAAQAAAAAAAAABNdk02SJbNdc02SRbNdY02DTbIxIRSTXUQQAKNNc0/ws11UIABzTXNNoLNdWxIrIBNNWyCCOyEDT5sgezNNRBAA001jT/NNUJCzXTQgAKNNY0/zTaCQs107EisgE007III7IQNPyyB7NCAAAxGSEJEkSxIrIBJbIQNAiyGCEJshmzsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFjQIFlBQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQhBDE1EkQiMTYSRCIxNxJEIjUBIjUCIjUIQv+nNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v1020",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1021",
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
                "name": "v1020",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1021",
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
                "name": "v1028",
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
                "name": "v1317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1318",
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
                "name": "v1494",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1495",
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
                "name": "v1028",
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
                "name": "v1317",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1318",
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
                "name": "v1494",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1495",
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
  Bytecode: `0x6080604052604051620029ce380380620029ce83398101604081905262000026916200022e565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16200008b3415600762000127565b620000b9604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200011e92600292019062000151565b505050620002cb565b816200014d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015f906200028e565b90600052602060002090601f016020900481019282620001835760008555620001ce565b82601f106200019e57805160ff1916838001178555620001ce565b82800160010185558215620001ce579182015b82811115620001ce578251825591602001919060010190620001b1565b50620001dc929150620001e0565b5090565b5b80821115620001dc5760008155600101620001e1565b604080519081016001600160401b03811182821017156200022857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024257600080fd5b6200024c620001f7565b835181526040601f19830112156200026357600080fd5b6200026d620001f7565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002a357607f821691505b60208210811415620002c557634e487b7160e01b600052602260045260246000fd5b50919050565b6126f380620002db6000396000f3fe6080604052600436106100795760003560e01c8063ab53f2c61161004b578063ab53f2c6146100e1578063ad2d91d114610104578063aff5115f14610117578063c79800371461012a57005b80631e93b0f11461008257806383230757146100a65780639a3e3912146100bb578063a7661d54146100ce57005b3661008057005b005b34801561008e57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100b257600080fd5b50600154610093565b6100806100c936600461216c565b61013d565b6100806100dc36600461216c565b610342565b3480156100ed57600080fd5b506100f66104f8565b60405161009d929190612188565b6100806101123660046121f7565b610595565b6100806101253660046121f7565b61092e565b61008061013836600461216c565b610c4e565b61014d6001600054146009610de5565b6101678135158061016057506001548235145b600a610de5565b60008080556002805461017990612213565b80601f01602080910402602001604051908101604052809291908181526020018280546101a590612213565b80156101f25780601f106101c7576101008083540402835291602001916101f2565b820191906000526020600020905b8154815290600101906020018083116101d557829003601f168201915b505050505080602001905181019061020a919061230d565b9050610214611ced565b7fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338460405161024592919061237c565b60405180910390a161025934156008610de5565b8051600160fd1b90528051602080830180519290925282518251909101528151815160400152815181516060015281518151608001528151815160a001528151815160c001528151815160e00152815190516008602090810291909101919091528181015160408084018051929092528151600093018390528151600191015251606001526102e6611d21565b825181516001600160a01b03909116905260208084015182518201526040808501518351820152825133606090910152838101518284018051919091528051439301929092529051600091015261033c81610e0b565b50505050565b6103526004600054146014610de5565b61036c8135158061036557506001548235145b6015610de5565b60008080556002805461037e90612213565b80601f01602080910402602001604051908101604052809291908181526020018280546103aa90612213565b80156103f75780601f106103cc576101008083540402835291602001916103f7565b820191906000526020600020905b8154815290600101906020018083116103da57829003601f168201915b505050505080602001905181019061040f9190612502565b90506104238160c001514310156016610de5565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb190722338360405161045492919061237c565b60405180910390a161046834156012610de5565b805161049c906001600160a01b031633146104925760608201516001600160a01b03163314610495565b60015b6013610de5565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156104dd573d6000803e3d6000fd5b50600080805560018190556104f490600290611d58565b5050565b60006060600054600280805461050d90612213565b80601f016020809104026020016040519081016040528092919081815260200182805461053990612213565b80156105865780601f1061055b57610100808354040283529160200191610586565b820191906000526020600020905b81548152906001019060200180831161056957829003601f168201915b50505050509050915091509091565b6105a5600460005414600f610de5565b6105bf813515806105b857506001548235145b6010610de5565b6000808055600280546105d190612213565b80601f01602080910402602001604051908101604052809291908181526020018280546105fd90612213565b801561064a5780601f1061061f5761010080835404028352916020019161064a565b820191906000526020600020905b81548152906001019060200180831161062d57829003601f168201915b50505050508060200190518101906106629190612502565b905061066c611d95565b61067d8260c0015143106011610de5565b7f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d163433846040516106ae92919061251f565b60405180910390a16106c734604085013514600b610de5565b81516106df906001600160a01b03163314600c610de5565b6106f16009602085013510600d610de5565b8051600f60fb1b9052608082015151602084013560098110610715576107156123b4565b602002015160405160200161072a9190612550565b60408051601f1981840301815291815281516020928301208383015282810151606f60f81b9052825190516107d892610764929101612550565b6040516020818303038152906040528051906020012060001c8260200151146107c057816040015160405160200161079c9190612550565b6040516020818303038152906040528051906020012060001c8260200151146107c3565b60015b6107ce5760016107d1565b60005b600e610de5565b60608181018051622dc6c0908190528151621e84806020918201819052835160400183905283519094018490528251623d0900608091820152835160a001859052835160c001839052835160e0019490945291516101000152908301515182516108459286013590611b2a565b60808083018051929092528301805160209081015183518201529151600060409091015251606090810151908301516108b0926108ab919087013560098110610890576108906123b4565b60200201516108a6866020015162f42400611b9e565b611bec565b611c51565b6080820151606001526108c1611d21565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092526080840151818401805191909152514391015260a084015161091c91860135611c51565b60208201516040015261033c81610e0b565b61093e600660005414601b610de5565b6109588135158061095157506001548235145b601c610de5565b60008080556002805461096a90612213565b80601f016020809104026020016040519081016040528092919081815260200182805461099690612213565b80156109e35780601f106109b8576101008083540402835291602001916109e3565b820191906000526020600020905b8154815290600101906020018083116109c657829003601f168201915b50505050508060200190518101906109fb9190612502565b9050610a05611d95565b610a168260c001514310601d610de5565b7f5371140060fe309c492663b0377a291d12d8d92a35dabb2b67a32d0ade04bb663384604051610a4792919061251f565b60405180910390a1610a60346040850135146017610de5565b6060820151610a7b906001600160a01b031633146018610de5565b610a8d60096020850135106019610de5565b8051600f60fb1b9052608082015151602084013560098110610ab157610ab16123b4565b6020020151604051602001610ac69190612550565b60408051601f1981840301815291815281516020928301208383015282810151606f60f81b905282519051610b7492610b00929101612550565b6040516020818303038152906040528051906020012060001c826020015114610b5c578160400151604051602001610b389190612550565b6040516020818303038152906040528051906020012060001c826020015114610b5f565b60015b610b6a576001610b6d565b60005b601a610de5565b60608181018051622dc6c0908190528151621e848060209182018190528351604090810184905284519095018190528351623d0900608091820152845160a001829052845160c001849052845160e0019190915292516101000191909152908401515191830151610be9929186013590611b2a565b816080015160000181905250610c218260800151602001516108ab8360600151866020016000013560098110610890576108906123b4565b608080830180516020019290925281516001604090910152830151606090810151915101526108c1611d21565b610c5e6006600054146020610de5565b610c7881351580610c7157506001548235145b6021610de5565b600080805560028054610c8a90612213565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb690612213565b8015610d035780601f10610cd857610100808354040283529160200191610d03565b820191906000526020600020905b815481529060010190602001808311610ce657829003601f168201915b5050505050806020019051810190610d1b9190612502565b9050610d2f8160c001514310156022610de5565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610d6092919061237c565b60405180910390a1610d743415601e610de5565b8051610da8906001600160a01b03163314610d9e5760608201516001600160a01b03163314610da1565b60015b601f610de5565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104dd573d6000803e3d6000fd5b816104f45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b610e13611dce565b602082810151515151604051610e299201612550565b60408051808303601f190181529181528151602092830120838301528382015151518201519051610e5a9201612550565b60408051808303601f190181529181528151602092830120838201528382015151518101519051610e8b9201612550565b60408051601f19818403018152919052805160209182012060608301526080820151602d60f81b9052820151515160036020020151604051602001610ed09190612550565b60408051808303601f19018152918152815160209283012060a0840152838201515151608001519051610f039201612550565b60408051808303601f19018152918152815160209283012060c084015283820151515160a001519051610f369201612550565b60408051808303601f19018152918152815160209283012060e084015283820151515160c001519051610f699201612550565b60408051808303601f19018152918152815160209283012061010084015283820151515160e001519051610f9d9201612550565b60408051808303601f19018152918152815160209283012061012084015283820151515161010001519051610fd29201612550565b60408051601f198184030181529181528151602092830120610140840152610160830151600f60fb1b9052820151908201511461101057600061101c565b80606001518160200151145b61102a578060800151611033565b60208201515151515b6040516020016110439190612550565b60408051601f19818403018152918152815160209283012061018084015261016083015190516110739201612550565b60408051601f1981840301815291905280516020909101206101a082015260c081015160a0820151146110a75760006110b3565b8060e001518160a00151145b6110c15780608001516110cd565b60208201515151606001515b6040516020016110dd9190612550565b60408051601f1981840301815291905280516020909101206101c082015261012081015161010082015114611113576000611121565b806101400151816101000151145b61112f57806080015161113b565b6020820151515160c001515b60405160200161114b9190612550565b60408051601f1981840301815291905280516020918201206101e083015260a0820151908201511461117e57600061118b565b8061010001518160200151145b6111995780608001516111a2565b60208201515151515b6040516020016111b29190612550565b60408051601f19818403018152918152815160209092019190912061020083015260c082015190820151146111e85760006111f5565b8061012001518160400151145b61120357806080015161120e565b602082810151515101515b60405160200161121e9190612550565b60408051601f19818403018152919052805160209091012061022082015260e081015160608201511461125257600061125f565b8061014001518160600151145b61126d578060800151611279565b60208201515151604001515b6040516020016112899190612550565b60408051601f19818403018152919052805160209182012061024083015260c082015190820151146112bc5760006112c9565b8061014001518160200151145b6112d75780608001516112e0565b60208201515151515b6040516020016112f09190612550565b60408051601f19818403018152919052805160209091012061026082015260c0810151606082015114611324576000611331565b8061010001518160600151145b61133f57806080015161134b565b60208201515151604001515b60405160200161135b9190612550565b60408051601f1981840301815291905280516020909101206102808201526101a08101516101808201511461139c57806101a00151816101c001511461139f565b60015b6113b557806101a00151816101e00151146113b8565b60015b6113ce57806101a00151816102000151146113d1565b60015b6113e757806101a00151816102200151146113ea565b60015b61140057806101a0015181610240015114611403565b60015b61141957806101a001518161026001511461141c565b60015b61143257806101a0015181610280015114611435565b60015b1580156102a083015261144b5760008152611553565b6102c081018051606f60f81b90525160405161146a9190602001612550565b60408051601f1981840301815291905280516020909101206102e08201819052610180820151146114a757806102e00151816101c00151146114aa565b60015b6114c057806102e00151816101e00151146114c3565b60015b6114d957806102e00151816102000151146114dc565b60015b6114f257806102e00151816102200151146114f5565b60015b61150b57806102e001518161024001511461150e565b60015b61152457806102e0015181610260015114611527565b60015b61153d57806102e0015181610280015114611540565b60015b1561154e5760018152611553565b600281525b600161032082015260005b60098110156116435760208301515151816009811061157f5761157f6123b4565b60209081029190910151610340840181905260405161159e9201612550565b60408051601f198184030181529190528051602090910120610360830152610380820151606f60f81b90526103208201516115da576000611629565b816101a0015182610360015114611626578161038001516040516020016116019190612550565b6040516020818303038152906040528051906020012060001c82610360015114611629565b60015b15156103208301528061163b8161257a565b91505061155e565b5061032081015115156103008201819052611662578051600114611665565b60015b61167157805115611674565b60015b6116ab5761168b6002836000015160200151611bec565b6020808401515160608101519101516116a49190611c51565b11156116ae565b60005b1561181657602082015151604001511561177e576116dc826020015160200151836000015160400151611c51565b6103a08201526116ea611fec565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925280850180515160808501525182015160a08401526103a084015160c0840152600460005543600155905161175a9183910161263e565b6040516020818303038152906040526002908051906020019061033c929190612041565b611798826020015160200151836000015160400151611c51565b6103c08201526117a6611fec565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925280850180515160808501525182015160a08401526103c084015160c0840152600660005543600155905161175a9183910161263e565b806102a001511561182e5760006103e082015261193e565b61040081018051606f60f81b90525160405161184d9190602001612550565b60408051601f19818403018152919052805160209091012061042082018190526101808201511461188a57806104200151816101c001511461188d565b60015b6118a357806104200151816101e00151146118a6565b60015b6118bc57806104200151816102000151146118bf565b60015b6118d557806104200151816102200151146118d8565b60015b6118ee57806104200151816102400151146118f1565b60015b611907578061042001518161026001511461190a565b60015b6119205780610420015181610280015114611923565b60015b156119355760016103e082015261193e565b60026103e08201525b6119518260200151604001516002611b9e565b6104408201526103e08101511561048082018190521561198c576104a0810180516001905280516000602090910152516104608201526119d6565b6001816103e0015114156119bb576104c0810180516000905280516001602090910152516104608201526119d6565b6104e081018051600190819052815160200152516104608201525b8061048001516119ee576001816103e00151146119f1565b60015b158015610520830152611a2457611a1981610460015160000151836020015160400151611bec565b610500820152611a43565b611a3c81610460015160000151826104400151611bec565b6105008201525b8151516105008201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611a82573d6000803e3d6000fd5b5080610520015115611abd57611ab2816104600151602001516108a6846020015160400151846105000151611c9e565b610540820152611ae8565b611ae1816104600151602001516108a6846020015160400151846104400151611c9e565b6105408201525b8151606001516105408201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104dd573d6000803e3d6000fd5b611b326120c5565b60005b6009811015611b7e57848160098110611b5057611b506123b4565b6020020151828260098110611b6757611b676123b4565b602002015280611b768161257a565b915050611b35565b5081818460098110611b9257611b926123b4565b60200201529392505050565b600081611bdb5760405162461bcd60e51b815260206004820152600b60248201526a646976206279207a65726f60a81b6044820152606401610e02565b611be5828461264d565b9392505050565b6000811580611c1057508282611c02818361266f565b9250611c0e908361264d565b145b611c4b5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610e02565b92915050565b600082611c5e838261268e565b9150811015611c4b5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610e02565b600082611cab83826126a6565b9150811115611c4b5760405162461bcd60e51b815260206004820152600e60248201526d1cdd58881ddc985c185c9bdd5b9960921b6044820152606401610e02565b6040805160808101909152600060608201908152815260208101611d0f6120c5565b8152602001611d1c6120fa565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611d1c61210d565b508054611d6490612213565b6000825580601f10611d74575050565b601f016020900490600052602060002090810190611d929190612120565b50565b6040805160c081018252600060a08201818152825260208083018290528351908101845290815290918201908152602001611d0f612135565b60405180610560016040528060008152602001600081526020016000815260200160008152602001611e0b60408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611e4f60408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001611eb160408051602081019091526000815290565b8152600060208201819052604082018190526060820152608001611ee060408051602081019091526000815290565b815260200160008152602001611f0160408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001611f3060408051602081019091526000815290565b81526020016000815260200160008152602001611f60604051806040016040528060008152602001600081525090565b8152602001600015158152602001611f8b604051806040016040528060008152602001600081525090565b8152602001611fad604051806040016040528060008152602001600081525090565b8152602001611fcf604051806040016040528060008152602001600081525090565b815260200160008152602001600015158152602001600081525090565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200161202d6120fa565b815260200160008152602001600081525090565b82805461204d90612213565b90600052602060002090601f01602090048101928261206f57600085556120b5565b82601f1061208857805160ff19168380011785556120b5565b828001600101855582156120b5579182015b828111156120b557825182559160200191906001019061209a565b506120c1929150612120565b5090565b6040518061012001604052806009905b6040805160208101909152600081528152602001906001900390816120d55790505090565b6040518060800160405280611fcf6120c5565b604051806060016040528061202d6120fa565b5b808211156120c15760008155600101612121565b6040518061012001604052806009906020820280368337509192915050565b60006040828403121561216657600080fd5b50919050565b60006040828403121561217e57600080fd5b611be58383612154565b82815260006020604081840152835180604085015260005b818110156121bc578581018301518582016060015282016121a0565b818111156121ce576000606083870101525b50601f01601f191692909201606001949350505050565b60006060828403121561216657600080fd5b60006060828403121561220957600080fd5b611be583836121e5565b600181811c9082168061222757607f821691505b6020821081141561216657634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561228157612281612248565b60405290565b6040516080810167ffffffffffffffff8111828210171561228157612281612248565b604051610120810167ffffffffffffffff8111828210171561228157612281612248565b6040516020810167ffffffffffffffff8111828210171561228157612281612248565b80516001600160a01b038116811461230857600080fd5b919050565b60006060828403121561231f57600080fd5b6040516060810181811067ffffffffffffffff8211171561234257612342612248565b60405261234e836122f1565b815260208301516020820152604083015160408201528091505092915050565b8015158114611d9257600080fd5b6001600160a01b0383168152813560208083019190915260608201908301356123a48161236e565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b80516123088161236e565b60008183036102408112156123e957600080fd5b6123f161225e565b91506123fc836122f1565b8252602080840151818401526040840151604084015261241e606085016122f1565b6060840152610180607f198301121561243657600080fd5b61243e612287565b915084609f85011261244f57600080fd5b6124576122aa565b806101a086018781111561246a57600080fd5b608087015b818110156124b75784818a0312156124875760008081fd5b61248f6122ce565b81516001600160f81b0319811681146124a85760008081fd5b8152845292840192840161246f565b509084525191830191909152506124d16101c084016123ca565b60408201526101e08301516060820152608082015261020082015160a08201526102209091015160c0820152919050565b6000610240828403121561251557600080fd5b611be583836123d5565b6001600160a01b038316815260808101611be560208301848035825260208082013590830152604090810135910152565b90516001600160f81b031916815260200190565b634e487b7160e01b600052601160045260246000fd5b600060001982141561258e5761258e612564565b5060010190565b80516001600160a01b039081168352602080830151818501526040808401519085015260608084015190921691840191909152608080830151805190929160009086015b6009821015612603578251516001600160f81b0319168152918301916001919091019083016125d9565b5050508101516101a0840152604081015115156101c0840152606001516101e083015260a081015161020083015260c0015161022090910152565b6102408101611c4b8284612595565b60008261266a57634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561268957612689612564565b500290565b600082198211156126a1576126a1612564565b500190565b6000828210156126b8576126b8612564565b50039056fea26469706673582212208ce2598950bab3284a97ffa9d9ab6a2da898052989c724098468149d03b0d9dc64736f6c634300080c0033`,
  BytecodeLen: 10702,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:140:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:221:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:155:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:163:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:168:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:177:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
