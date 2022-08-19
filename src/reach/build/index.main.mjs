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
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc5, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc5, ctc1, ctc1]
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
  
  
  const v932 = stdlib.protect(ctc0, interact.budget, 'for Alice\'s interact field budget');
  const v933 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const txn1 = await (ctc.sendrecv({
    args: [v932, v933],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:124:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v932, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v938, v939], secs: v941, time: v940, didSend: v67, from: v937 } = txn1;
      
      sim_r.txns.push({
        amt: v938,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v950 = stdlib.safeAdd(v940, v939);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v938, v939], secs: v941, time: v940, didSend: v67, from: v937 } = txn1;
  ;
  const v950 = stdlib.safeAdd(v940, v939);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v950],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v937, v938, v939, v950],
      evt_cnt: 0,
      funcNum: 2,
      lct: v940,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1689, time: v1688, didSend: v880, from: v1687 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v937,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1689, time: v1688, didSend: v880, from: v1687 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeOut(), {
      at: './index.rsh:116:29:application',
      fs: ['at ./index.rsh:115:9:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:114:28:function exp)', 'at ./index.rsh:130:62:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v955, time: v954, didSend: v77, from: v953 } = txn2;
    const v957 = stdlib.safeAdd(v938, v938);
    ;
    const v958 = ' ';
    const v967 = [v958, v958, v958, v958, v958, v958, v958, v958, v958];
    const v968 = {
      board: v967,
      playerTurn: true
      };
    let v980 = v968;
    let v981 = v954;
    let v988 = v957;
    
    while (await (async () => {
      const v992 = v980.board;
      let v993;
      const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
      const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
      const v996 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
      const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
      const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
      const v999 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
      const v1000 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
      const v1001 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
      const v1002 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
      const v1003 = stdlib.digest(ctc2, [v994]);
      const v1004 = stdlib.digest(ctc2, [v995]);
      const v1005 = stdlib.digestEq(v1003, v1004);
      const v1007 = stdlib.digest(ctc2, [v996]);
      const v1008 = stdlib.digestEq(v1003, v1007);
      const v1009 = v1005 ? v1008 : false;
      const v1010 = '-';
      const v1011 = v1009 ? v994 : v1010;
      const v1012 = stdlib.digest(ctc2, [v997]);
      const v1013 = stdlib.digest(ctc2, [v998]);
      const v1014 = stdlib.digestEq(v1012, v1013);
      const v1016 = stdlib.digest(ctc2, [v999]);
      const v1017 = stdlib.digestEq(v1012, v1016);
      const v1018 = v1014 ? v1017 : false;
      const v1020 = v1018 ? v997 : v1010;
      const v1021 = stdlib.digest(ctc2, [v1000]);
      const v1022 = stdlib.digest(ctc2, [v1001]);
      const v1023 = stdlib.digestEq(v1021, v1022);
      const v1025 = stdlib.digest(ctc2, [v1002]);
      const v1026 = stdlib.digestEq(v1021, v1025);
      const v1027 = v1023 ? v1026 : false;
      const v1029 = v1027 ? v1000 : v1010;
      const v1032 = stdlib.digestEq(v1003, v1012);
      const v1035 = stdlib.digestEq(v1003, v1021);
      const v1036 = v1032 ? v1035 : false;
      const v1038 = v1036 ? v994 : v1010;
      const v1041 = stdlib.digestEq(v1004, v1013);
      const v1044 = stdlib.digestEq(v1004, v1022);
      const v1045 = v1041 ? v1044 : false;
      const v1047 = v1045 ? v995 : v1010;
      const v1050 = stdlib.digestEq(v1007, v1016);
      const v1053 = stdlib.digestEq(v1007, v1025);
      const v1054 = v1050 ? v1053 : false;
      const v1056 = v1054 ? v996 : v1010;
      const v1059 = stdlib.digestEq(v1003, v1013);
      const v1062 = stdlib.digestEq(v1003, v1025);
      const v1063 = v1059 ? v1062 : false;
      const v1065 = v1063 ? v994 : v1010;
      const v1068 = stdlib.digestEq(v1007, v1013);
      const v1071 = stdlib.digestEq(v1007, v1021);
      const v1072 = v1068 ? v1071 : false;
      const v1074 = v1072 ? v996 : v1010;
      const v1075 = 'x';
      const v1076 = stdlib.digest(ctc2, [v1011]);
      const v1078 = stdlib.digest(ctc2, [v1075]);
      const v1079 = stdlib.digestEq(v1076, v1078);
      const v1081 = stdlib.digest(ctc2, [v1020]);
      const v1084 = stdlib.digestEq(v1081, v1078);
      const v1085 = v1079 ? true : v1084;
      const v1087 = stdlib.digest(ctc2, [v1029]);
      const v1090 = stdlib.digestEq(v1087, v1078);
      const v1091 = v1085 ? true : v1090;
      const v1093 = stdlib.digest(ctc2, [v1038]);
      const v1096 = stdlib.digestEq(v1093, v1078);
      const v1097 = v1091 ? true : v1096;
      const v1099 = stdlib.digest(ctc2, [v1047]);
      const v1102 = stdlib.digestEq(v1099, v1078);
      const v1103 = v1097 ? true : v1102;
      const v1105 = stdlib.digest(ctc2, [v1056]);
      const v1108 = stdlib.digestEq(v1105, v1078);
      const v1109 = v1103 ? true : v1108;
      const v1111 = stdlib.digest(ctc2, [v1065]);
      const v1114 = stdlib.digestEq(v1111, v1078);
      const v1115 = v1109 ? true : v1114;
      const v1117 = stdlib.digest(ctc2, [v1074]);
      const v1120 = stdlib.digestEq(v1117, v1078);
      const v1121 = v1115 ? true : v1120;
      if (v1121) {
        v993 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1122 = 'o';
        const v1125 = stdlib.digest(ctc2, [v1122]);
        const v1126 = stdlib.digestEq(v1076, v1125);
        const v1131 = stdlib.digestEq(v1081, v1125);
        const v1132 = v1126 ? true : v1131;
        const v1137 = stdlib.digestEq(v1087, v1125);
        const v1138 = v1132 ? true : v1137;
        const v1143 = stdlib.digestEq(v1093, v1125);
        const v1144 = v1138 ? true : v1143;
        const v1149 = stdlib.digestEq(v1099, v1125);
        const v1150 = v1144 ? true : v1149;
        const v1155 = stdlib.digestEq(v1105, v1125);
        const v1156 = v1150 ? true : v1155;
        const v1161 = stdlib.digestEq(v1111, v1125);
        const v1162 = v1156 ? true : v1161;
        const v1167 = stdlib.digestEq(v1117, v1125);
        const v1168 = v1162 ? true : v1167;
        if (v1168) {
          v993 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
          }
        else {
          v993 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
          }
        }
      const v1170 = await stdlib.Array_asyncReduce([v992], true, async([v1172], v1171, v1173) => {
        const v1175 = stdlib.digest(ctc2, [v1172]);
        const v1178 = stdlib.digestEq(v1175, v1078);
        const v1179 = 'o';
        const v1182 = stdlib.digest(ctc2, [v1179]);
        const v1183 = stdlib.digestEq(v1175, v1182);
        const v1184 = v1178 ? true : v1183;
        const v1185 = v1171 ? v1184 : false;
        
        return v1185;})
      const v1186 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:52:decimal', stdlib.UInt_max, '1'));
      const v1187 = v1170 ? true : v1186;
      const v1188 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:70:decimal', stdlib.UInt_max, '0'));
      const v1189 = v1187 ? true : v1188;
      const v1190 = v1189 ? false : true;
      
      return v1190;})()) {
      const v1191 = v980.playerTurn;
      if (v1191) {
        const v1199 = stdlib.safeAdd(v981, v939);
        const v1203 = v980.board;
        const v1214 = stdlib.protect(ctc0, await interact.getSquareSelected(v980), {
          at: './index.rsh:64:43:application',
          fs: ['at ./index.rsh:140:37:application call to "getValidSquare" (defined at: ./index.rsh:63:42:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
          msg: 'getSquareSelected',
          who: 'Alice'
          });
        const v1215 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '0'), v1214);
        const v1216 = stdlib.lt(v1214, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1217 = v1215 ? v1216 : false;
        stdlib.assert(v1217, {
          at: './index.rsh:65:9:application',
          fs: ['at ./index.rsh:140:37:application call to "getValidSquare" (defined at: ./index.rsh:63:42:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Alice'
          });
        const v1220 = v1203[v1214];
        const v1221 = 'x';
        const v1222 = stdlib.digest(ctc2, [v1220]);
        const v1224 = stdlib.digest(ctc2, [v1221]);
        const v1225 = stdlib.digestEq(v1222, v1224);
        const v1226 = 'o';
        const v1229 = stdlib.digest(ctc2, [v1226]);
        const v1230 = stdlib.digestEq(v1222, v1229);
        const v1231 = v1225 ? true : v1230;
        const v1232 = v1231 ? false : true;
        stdlib.assert(v1232, {
          at: './index.rsh:66:9:application',
          fs: ['at ./index.rsh:140:37:application call to "getValidSquare" (defined at: ./index.rsh:63:42:function exp)', 'at ./index.rsh:139:13:application call to [unknown function] (defined at: ./index.rsh:139:17:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Alice'
          });
        
        const txn3 = await (ctc.sendrecv({
          args: [v937, v938, v939, v953, v980, v988, v1199, v1214],
          evt_cnt: 1,
          funcNum: 4,
          lct: v981,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:142:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v1234], secs: v1236, time: v1235, didSend: v356, from: v1233 } = txn3;
            
            ;
            const v1241 = v980.board;
            const v1244 = 'x';
            const v1262 = stdlib.Array_set(v1241, v1234, v1244);
            const v1267 = {
              board: v1262,
              playerTurn: false
              };
            
            const cv980 = v1267;
            const cv981 = v1235;
            const cv988 = v988;
            
            await (async () => {
              const v980 = cv980;
              const v981 = cv981;
              const v988 = cv988;
              
              if (await (async () => {
                const v992 = v980.board;
                let v993;
                const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
                const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
                const v996 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
                const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
                const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
                const v999 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
                const v1000 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
                const v1001 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
                const v1002 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
                const v1003 = stdlib.digest(ctc2, [v994]);
                const v1004 = stdlib.digest(ctc2, [v995]);
                const v1005 = stdlib.digestEq(v1003, v1004);
                const v1007 = stdlib.digest(ctc2, [v996]);
                const v1008 = stdlib.digestEq(v1003, v1007);
                const v1009 = v1005 ? v1008 : false;
                const v1010 = '-';
                const v1011 = v1009 ? v994 : v1010;
                const v1012 = stdlib.digest(ctc2, [v997]);
                const v1013 = stdlib.digest(ctc2, [v998]);
                const v1014 = stdlib.digestEq(v1012, v1013);
                const v1016 = stdlib.digest(ctc2, [v999]);
                const v1017 = stdlib.digestEq(v1012, v1016);
                const v1018 = v1014 ? v1017 : false;
                const v1020 = v1018 ? v997 : v1010;
                const v1021 = stdlib.digest(ctc2, [v1000]);
                const v1022 = stdlib.digest(ctc2, [v1001]);
                const v1023 = stdlib.digestEq(v1021, v1022);
                const v1025 = stdlib.digest(ctc2, [v1002]);
                const v1026 = stdlib.digestEq(v1021, v1025);
                const v1027 = v1023 ? v1026 : false;
                const v1029 = v1027 ? v1000 : v1010;
                const v1032 = stdlib.digestEq(v1003, v1012);
                const v1035 = stdlib.digestEq(v1003, v1021);
                const v1036 = v1032 ? v1035 : false;
                const v1038 = v1036 ? v994 : v1010;
                const v1041 = stdlib.digestEq(v1004, v1013);
                const v1044 = stdlib.digestEq(v1004, v1022);
                const v1045 = v1041 ? v1044 : false;
                const v1047 = v1045 ? v995 : v1010;
                const v1050 = stdlib.digestEq(v1007, v1016);
                const v1053 = stdlib.digestEq(v1007, v1025);
                const v1054 = v1050 ? v1053 : false;
                const v1056 = v1054 ? v996 : v1010;
                const v1059 = stdlib.digestEq(v1003, v1013);
                const v1062 = stdlib.digestEq(v1003, v1025);
                const v1063 = v1059 ? v1062 : false;
                const v1065 = v1063 ? v994 : v1010;
                const v1068 = stdlib.digestEq(v1007, v1013);
                const v1071 = stdlib.digestEq(v1007, v1021);
                const v1072 = v1068 ? v1071 : false;
                const v1074 = v1072 ? v996 : v1010;
                const v1075 = 'x';
                const v1076 = stdlib.digest(ctc2, [v1011]);
                const v1078 = stdlib.digest(ctc2, [v1075]);
                const v1079 = stdlib.digestEq(v1076, v1078);
                const v1081 = stdlib.digest(ctc2, [v1020]);
                const v1084 = stdlib.digestEq(v1081, v1078);
                const v1085 = v1079 ? true : v1084;
                const v1087 = stdlib.digest(ctc2, [v1029]);
                const v1090 = stdlib.digestEq(v1087, v1078);
                const v1091 = v1085 ? true : v1090;
                const v1093 = stdlib.digest(ctc2, [v1038]);
                const v1096 = stdlib.digestEq(v1093, v1078);
                const v1097 = v1091 ? true : v1096;
                const v1099 = stdlib.digest(ctc2, [v1047]);
                const v1102 = stdlib.digestEq(v1099, v1078);
                const v1103 = v1097 ? true : v1102;
                const v1105 = stdlib.digest(ctc2, [v1056]);
                const v1108 = stdlib.digestEq(v1105, v1078);
                const v1109 = v1103 ? true : v1108;
                const v1111 = stdlib.digest(ctc2, [v1065]);
                const v1114 = stdlib.digestEq(v1111, v1078);
                const v1115 = v1109 ? true : v1114;
                const v1117 = stdlib.digest(ctc2, [v1074]);
                const v1120 = stdlib.digestEq(v1117, v1078);
                const v1121 = v1115 ? true : v1120;
                if (v1121) {
                  v993 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v1122 = 'o';
                  const v1125 = stdlib.digest(ctc2, [v1122]);
                  const v1126 = stdlib.digestEq(v1076, v1125);
                  const v1131 = stdlib.digestEq(v1081, v1125);
                  const v1132 = v1126 ? true : v1131;
                  const v1137 = stdlib.digestEq(v1087, v1125);
                  const v1138 = v1132 ? true : v1137;
                  const v1143 = stdlib.digestEq(v1093, v1125);
                  const v1144 = v1138 ? true : v1143;
                  const v1149 = stdlib.digestEq(v1099, v1125);
                  const v1150 = v1144 ? true : v1149;
                  const v1155 = stdlib.digestEq(v1105, v1125);
                  const v1156 = v1150 ? true : v1155;
                  const v1161 = stdlib.digestEq(v1111, v1125);
                  const v1162 = v1156 ? true : v1161;
                  const v1167 = stdlib.digestEq(v1117, v1125);
                  const v1168 = v1162 ? true : v1167;
                  if (v1168) {
                    v993 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
                    }
                  else {
                    v993 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
                    }
                  }
                const v1170 = await stdlib.Array_asyncReduce([v992], true, async([v1172], v1171, v1173) => {
                  const v1175 = stdlib.digest(ctc2, [v1172]);
                  const v1178 = stdlib.digestEq(v1175, v1078);
                  const v1179 = 'o';
                  const v1182 = stdlib.digest(ctc2, [v1179]);
                  const v1183 = stdlib.digestEq(v1175, v1182);
                  const v1184 = v1178 ? true : v1183;
                  const v1185 = v1171 ? v1184 : false;
                  
                  return v1185;})
                const v1186 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:52:decimal', stdlib.UInt_max, '1'));
                const v1187 = v1170 ? true : v1186;
                const v1188 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:70:decimal', stdlib.UInt_max, '0'));
                const v1189 = v1187 ? true : v1188;
                const v1190 = v1189 ? false : true;
                
                return v1190;})()) {
                const v1191 = v980.playerTurn;
                if (v1191) {
                  const v1199 = stdlib.safeAdd(v981, v939);
                  sim_r.isHalt = false;
                  }
                else {
                  const v1334 = stdlib.safeAdd(v981, v939);
                  sim_r.isHalt = false;
                  }}
              else {
                const v1463 = v980.board;
                let v1464;
                const v1465 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
                const v1466 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
                const v1467 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
                const v1468 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
                const v1469 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
                const v1470 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
                const v1471 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
                const v1472 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
                const v1473 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
                const v1474 = stdlib.digest(ctc2, [v1465]);
                const v1475 = stdlib.digest(ctc2, [v1466]);
                const v1476 = stdlib.digestEq(v1474, v1475);
                const v1478 = stdlib.digest(ctc2, [v1467]);
                const v1479 = stdlib.digestEq(v1474, v1478);
                const v1480 = v1476 ? v1479 : false;
                const v1481 = '-';
                const v1482 = v1480 ? v1465 : v1481;
                const v1483 = stdlib.digest(ctc2, [v1468]);
                const v1484 = stdlib.digest(ctc2, [v1469]);
                const v1485 = stdlib.digestEq(v1483, v1484);
                const v1487 = stdlib.digest(ctc2, [v1470]);
                const v1488 = stdlib.digestEq(v1483, v1487);
                const v1489 = v1485 ? v1488 : false;
                const v1491 = v1489 ? v1468 : v1481;
                const v1492 = stdlib.digest(ctc2, [v1471]);
                const v1493 = stdlib.digest(ctc2, [v1472]);
                const v1494 = stdlib.digestEq(v1492, v1493);
                const v1496 = stdlib.digest(ctc2, [v1473]);
                const v1497 = stdlib.digestEq(v1492, v1496);
                const v1498 = v1494 ? v1497 : false;
                const v1500 = v1498 ? v1471 : v1481;
                const v1503 = stdlib.digestEq(v1474, v1483);
                const v1506 = stdlib.digestEq(v1474, v1492);
                const v1507 = v1503 ? v1506 : false;
                const v1509 = v1507 ? v1465 : v1481;
                const v1512 = stdlib.digestEq(v1475, v1484);
                const v1515 = stdlib.digestEq(v1475, v1493);
                const v1516 = v1512 ? v1515 : false;
                const v1518 = v1516 ? v1466 : v1481;
                const v1521 = stdlib.digestEq(v1478, v1487);
                const v1524 = stdlib.digestEq(v1478, v1496);
                const v1525 = v1521 ? v1524 : false;
                const v1527 = v1525 ? v1467 : v1481;
                const v1530 = stdlib.digestEq(v1474, v1484);
                const v1533 = stdlib.digestEq(v1474, v1496);
                const v1534 = v1530 ? v1533 : false;
                const v1536 = v1534 ? v1465 : v1481;
                const v1539 = stdlib.digestEq(v1478, v1484);
                const v1542 = stdlib.digestEq(v1478, v1492);
                const v1543 = v1539 ? v1542 : false;
                const v1545 = v1543 ? v1467 : v1481;
                const v1546 = 'x';
                const v1547 = stdlib.digest(ctc2, [v1482]);
                const v1549 = stdlib.digest(ctc2, [v1546]);
                const v1550 = stdlib.digestEq(v1547, v1549);
                const v1552 = stdlib.digest(ctc2, [v1491]);
                const v1555 = stdlib.digestEq(v1552, v1549);
                const v1556 = v1550 ? true : v1555;
                const v1558 = stdlib.digest(ctc2, [v1500]);
                const v1561 = stdlib.digestEq(v1558, v1549);
                const v1562 = v1556 ? true : v1561;
                const v1564 = stdlib.digest(ctc2, [v1509]);
                const v1567 = stdlib.digestEq(v1564, v1549);
                const v1568 = v1562 ? true : v1567;
                const v1570 = stdlib.digest(ctc2, [v1518]);
                const v1573 = stdlib.digestEq(v1570, v1549);
                const v1574 = v1568 ? true : v1573;
                const v1576 = stdlib.digest(ctc2, [v1527]);
                const v1579 = stdlib.digestEq(v1576, v1549);
                const v1580 = v1574 ? true : v1579;
                const v1582 = stdlib.digest(ctc2, [v1536]);
                const v1585 = stdlib.digestEq(v1582, v1549);
                const v1586 = v1580 ? true : v1585;
                const v1588 = stdlib.digest(ctc2, [v1545]);
                const v1591 = stdlib.digestEq(v1588, v1549);
                const v1592 = v1586 ? true : v1591;
                if (v1592) {
                  v1464 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v1593 = 'o';
                  const v1596 = stdlib.digest(ctc2, [v1593]);
                  const v1597 = stdlib.digestEq(v1547, v1596);
                  const v1602 = stdlib.digestEq(v1552, v1596);
                  const v1603 = v1597 ? true : v1602;
                  const v1608 = stdlib.digestEq(v1558, v1596);
                  const v1609 = v1603 ? true : v1608;
                  const v1614 = stdlib.digestEq(v1564, v1596);
                  const v1615 = v1609 ? true : v1614;
                  const v1620 = stdlib.digestEq(v1570, v1596);
                  const v1621 = v1615 ? true : v1620;
                  const v1626 = stdlib.digestEq(v1576, v1596);
                  const v1627 = v1621 ? true : v1626;
                  const v1632 = stdlib.digestEq(v1582, v1596);
                  const v1633 = v1627 ? true : v1632;
                  const v1638 = stdlib.digestEq(v1588, v1596);
                  const v1639 = v1633 ? true : v1638;
                  if (v1639) {
                    v1464 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
                    }
                  else {
                    v1464 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
                    }
                  }
                const v1640 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:33:decimal', stdlib.UInt_max, '0'));
                const v1641 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:57:decimal', stdlib.UInt_max, '1'));
                const v1642 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                const v1643 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                const v1644 = v1641 ? v1642 : v1643;
                const v1645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                const v1646 = v1640 ? v1645 : v1644;
                const v1647 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '0')];
                const v1648 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '1')];
                const v1649 = stdlib.safeMul(v1647, v938);
                sim_r.txns.push({
                  kind: 'from',
                  to: v937,
                  tok: undefined /* Nothing */
                  });
                const v1654 = stdlib.safeMul(v1648, v938);
                sim_r.txns.push({
                  kind: 'from',
                  to: v953,
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
          timeoutAt: ['time', v1199],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc7, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const txn4 = await (ctc.sendrecv({
            args: [v937, v938, v939, v953, v980, v988, v1199],
            evt_cnt: 0,
            funcNum: 5,
            lct: v981,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v1312, time: v1311, didSend: v461, from: v1310 } = txn4;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v953,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc7, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1312, time: v1311, didSend: v461, from: v1310 } = txn4;
          ;
          const v1313 = stdlib.addressEq(v937, v1310);
          const v1314 = stdlib.addressEq(v953, v1310);
          const v1315 = v1313 ? true : v1314;
          stdlib.assert(v1315, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:143:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeOut(), {
            at: './index.rsh:116:29:application',
            fs: ['at ./index.rsh:115:9:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:114:28:function exp)', 'at ./index.rsh:143:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v1234], secs: v1236, time: v1235, didSend: v356, from: v1233 } = txn3;
          ;
          const v1237 = stdlib.addressEq(v937, v1233);
          stdlib.assert(v1237, {
            at: './index.rsh:142:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v1238 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '0'), v1234);
          const v1239 = stdlib.lt(v1234, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
          const v1240 = v1238 ? v1239 : false;
          stdlib.assert(v1240, {
            at: './index.rsh:71:10:application',
            fs: ['at ./index.rsh:144:42:application call to "applyPlayerMove" (defined at: ./index.rsh:70:39:function exp)'],
            msg: 'A square in the board should be selected',
            who: 'Alice'
            });
          const v1241 = v980.board;
          const v1243 = v1241[v1234];
          const v1244 = 'x';
          const v1245 = stdlib.digest(ctc2, [v1243]);
          const v1247 = stdlib.digest(ctc2, [v1244]);
          const v1248 = stdlib.digestEq(v1245, v1247);
          const v1249 = 'o';
          const v1252 = stdlib.digest(ctc2, [v1249]);
          const v1253 = stdlib.digestEq(v1245, v1252);
          const v1254 = v1248 ? true : v1253;
          const v1255 = v1254 ? false : true;
          stdlib.assert(v1255, {
            at: './index.rsh:72:10:application',
            fs: ['at ./index.rsh:144:42:application call to "applyPlayerMove" (defined at: ./index.rsh:70:39:function exp)'],
            msg: 'The square has been played by a player already',
            who: 'Alice'
            });
          const v1262 = stdlib.Array_set(v1241, v1234, v1244);
          const v1267 = {
            board: v1262,
            playerTurn: false
            };
          stdlib.protect(ctc3, await interact.seeBoard(v1267), {
            at: './index.rsh:144:26:application',
            fs: ['at ./index.rsh:144:26:application call to [unknown function] (defined at: ./index.rsh:144:26:function exp)', 'at ./index.rsh:144:26:application call to "liftedInteract" (defined at: ./index.rsh:144:26:application)'],
            msg: 'seeBoard',
            who: 'Alice'
            });
          
          const cv980 = v1267;
          const cv981 = v1235;
          const cv988 = v988;
          
          v980 = cv980;
          v981 = cv981;
          v988 = cv988;
          
          continue;}
        
        }
      else {
        const v1334 = stdlib.safeAdd(v981, v939);
        const txn3 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc0],
          timeoutAt: ['time', v1334],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const txn4 = await (ctc.sendrecv({
            args: [v937, v938, v939, v953, v980, v988, v1334],
            evt_cnt: 0,
            funcNum: 7,
            lct: v981,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v1447, time: v1446, didSend: v623, from: v1445 } = txn4;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v937,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc7, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1447, time: v1446, didSend: v623, from: v1445 } = txn4;
          ;
          const v1448 = stdlib.addressEq(v937, v1445);
          const v1449 = stdlib.addressEq(v953, v1445);
          const v1450 = v1448 ? true : v1449;
          stdlib.assert(v1450, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:156:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeOut(), {
            at: './index.rsh:116:29:application',
            fs: ['at ./index.rsh:115:9:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:114:28:function exp)', 'at ./index.rsh:156:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v1369], secs: v1371, time: v1370, didSend: v518, from: v1368 } = txn3;
          ;
          const v1372 = stdlib.addressEq(v953, v1368);
          stdlib.assert(v1372, {
            at: './index.rsh:155:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v1373 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '0'), v1369);
          const v1374 = stdlib.lt(v1369, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
          const v1375 = v1373 ? v1374 : false;
          stdlib.assert(v1375, {
            at: './index.rsh:71:10:application',
            fs: ['at ./index.rsh:157:42:application call to "applyPlayerMove" (defined at: ./index.rsh:70:39:function exp)'],
            msg: 'A square in the board should be selected',
            who: 'Alice'
            });
          const v1376 = v980.board;
          const v1378 = v1376[v1369];
          const v1379 = 'x';
          const v1380 = stdlib.digest(ctc2, [v1378]);
          const v1382 = stdlib.digest(ctc2, [v1379]);
          const v1383 = stdlib.digestEq(v1380, v1382);
          const v1384 = 'o';
          const v1387 = stdlib.digest(ctc2, [v1384]);
          const v1388 = stdlib.digestEq(v1380, v1387);
          const v1389 = v1383 ? true : v1388;
          const v1390 = v1389 ? false : true;
          stdlib.assert(v1390, {
            at: './index.rsh:72:10:application',
            fs: ['at ./index.rsh:157:42:application call to "applyPlayerMove" (defined at: ./index.rsh:70:39:function exp)'],
            msg: 'The square has been played by a player already',
            who: 'Alice'
            });
          const v1401 = stdlib.Array_set(v1376, v1369, v1384);
          const v1402 = {
            board: v1401,
            playerTurn: true
            };
          const cv980 = v1402;
          const cv981 = v1370;
          const cv988 = v988;
          
          v980 = cv980;
          v981 = cv981;
          v988 = cv988;
          
          continue;}
        
        }}
    const v1463 = v980.board;
    let v1464;
    const v1465 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
    const v1466 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
    const v1467 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
    const v1468 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
    const v1469 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
    const v1470 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
    const v1471 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
    const v1472 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
    const v1473 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
    const v1474 = stdlib.digest(ctc2, [v1465]);
    const v1475 = stdlib.digest(ctc2, [v1466]);
    const v1476 = stdlib.digestEq(v1474, v1475);
    const v1478 = stdlib.digest(ctc2, [v1467]);
    const v1479 = stdlib.digestEq(v1474, v1478);
    const v1480 = v1476 ? v1479 : false;
    const v1481 = '-';
    const v1482 = v1480 ? v1465 : v1481;
    const v1483 = stdlib.digest(ctc2, [v1468]);
    const v1484 = stdlib.digest(ctc2, [v1469]);
    const v1485 = stdlib.digestEq(v1483, v1484);
    const v1487 = stdlib.digest(ctc2, [v1470]);
    const v1488 = stdlib.digestEq(v1483, v1487);
    const v1489 = v1485 ? v1488 : false;
    const v1491 = v1489 ? v1468 : v1481;
    const v1492 = stdlib.digest(ctc2, [v1471]);
    const v1493 = stdlib.digest(ctc2, [v1472]);
    const v1494 = stdlib.digestEq(v1492, v1493);
    const v1496 = stdlib.digest(ctc2, [v1473]);
    const v1497 = stdlib.digestEq(v1492, v1496);
    const v1498 = v1494 ? v1497 : false;
    const v1500 = v1498 ? v1471 : v1481;
    const v1503 = stdlib.digestEq(v1474, v1483);
    const v1506 = stdlib.digestEq(v1474, v1492);
    const v1507 = v1503 ? v1506 : false;
    const v1509 = v1507 ? v1465 : v1481;
    const v1512 = stdlib.digestEq(v1475, v1484);
    const v1515 = stdlib.digestEq(v1475, v1493);
    const v1516 = v1512 ? v1515 : false;
    const v1518 = v1516 ? v1466 : v1481;
    const v1521 = stdlib.digestEq(v1478, v1487);
    const v1524 = stdlib.digestEq(v1478, v1496);
    const v1525 = v1521 ? v1524 : false;
    const v1527 = v1525 ? v1467 : v1481;
    const v1530 = stdlib.digestEq(v1474, v1484);
    const v1533 = stdlib.digestEq(v1474, v1496);
    const v1534 = v1530 ? v1533 : false;
    const v1536 = v1534 ? v1465 : v1481;
    const v1539 = stdlib.digestEq(v1478, v1484);
    const v1542 = stdlib.digestEq(v1478, v1492);
    const v1543 = v1539 ? v1542 : false;
    const v1545 = v1543 ? v1467 : v1481;
    const v1546 = 'x';
    const v1547 = stdlib.digest(ctc2, [v1482]);
    const v1549 = stdlib.digest(ctc2, [v1546]);
    const v1550 = stdlib.digestEq(v1547, v1549);
    const v1552 = stdlib.digest(ctc2, [v1491]);
    const v1555 = stdlib.digestEq(v1552, v1549);
    const v1556 = v1550 ? true : v1555;
    const v1558 = stdlib.digest(ctc2, [v1500]);
    const v1561 = stdlib.digestEq(v1558, v1549);
    const v1562 = v1556 ? true : v1561;
    const v1564 = stdlib.digest(ctc2, [v1509]);
    const v1567 = stdlib.digestEq(v1564, v1549);
    const v1568 = v1562 ? true : v1567;
    const v1570 = stdlib.digest(ctc2, [v1518]);
    const v1573 = stdlib.digestEq(v1570, v1549);
    const v1574 = v1568 ? true : v1573;
    const v1576 = stdlib.digest(ctc2, [v1527]);
    const v1579 = stdlib.digestEq(v1576, v1549);
    const v1580 = v1574 ? true : v1579;
    const v1582 = stdlib.digest(ctc2, [v1536]);
    const v1585 = stdlib.digestEq(v1582, v1549);
    const v1586 = v1580 ? true : v1585;
    const v1588 = stdlib.digest(ctc2, [v1545]);
    const v1591 = stdlib.digestEq(v1588, v1549);
    const v1592 = v1586 ? true : v1591;
    if (v1592) {
      v1464 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1593 = 'o';
      const v1596 = stdlib.digest(ctc2, [v1593]);
      const v1597 = stdlib.digestEq(v1547, v1596);
      const v1602 = stdlib.digestEq(v1552, v1596);
      const v1603 = v1597 ? true : v1602;
      const v1608 = stdlib.digestEq(v1558, v1596);
      const v1609 = v1603 ? true : v1608;
      const v1614 = stdlib.digestEq(v1564, v1596);
      const v1615 = v1609 ? true : v1614;
      const v1620 = stdlib.digestEq(v1570, v1596);
      const v1621 = v1615 ? true : v1620;
      const v1626 = stdlib.digestEq(v1576, v1596);
      const v1627 = v1621 ? true : v1626;
      const v1632 = stdlib.digestEq(v1582, v1596);
      const v1633 = v1627 ? true : v1632;
      const v1638 = stdlib.digestEq(v1588, v1596);
      const v1639 = v1633 ? true : v1638;
      if (v1639) {
        v1464 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
        }
      else {
        v1464 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
        }
      }
    const v1640 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:33:decimal', stdlib.UInt_max, '0'));
    const v1641 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:57:decimal', stdlib.UInt_max, '1'));
    const v1642 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v1643 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v1644 = v1641 ? v1642 : v1643;
    const v1645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v1646 = v1640 ? v1645 : v1644;
    const v1647 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '0')];
    const v1648 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '1')];
    const v1649 = stdlib.safeMul(v1647, v938);
    ;
    const v1654 = stdlib.safeMul(v1648, v938);
    ;
    stdlib.protect(ctc3, await interact.endsWith(v980), {
      at: './index.rsh:176:22:application',
      fs: ['at ./index.rsh:175:7:application call to [unknown function] (defined at: ./index.rsh:175:19:function exp)'],
      msg: 'endsWith',
      who: 'Alice'
      });
    stdlib.protect(ctc3, await interact.seeOutcome(v1464), {
      at: './index.rsh:177:24:application',
      fs: ['at ./index.rsh:175:7:application call to [unknown function] (defined at: ./index.rsh:175:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
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
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v938, v939], secs: v941, time: v940, didSend: v67, from: v937 } = txn1;
  ;
  const v950 = stdlib.safeAdd(v940, v939);
  stdlib.protect(ctc1, await interact.acceptBudget(v938), {
    at: './index.rsh:129:26:application',
    fs: ['at ./index.rsh:129:26:application call to [unknown function] (defined at: ./index.rsh:129:26:function exp)', 'at ./index.rsh:129:26:application call to "liftedInteract" (defined at: ./index.rsh:129:26:application)'],
    msg: 'acceptBudget',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v937, v938, v939, v950],
    evt_cnt: 0,
    funcNum: 1,
    lct: v940,
    onlyIf: true,
    out_tys: [],
    pay: [v938, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v955, time: v954, didSend: v77, from: v953 } = txn2;
      
      const v957 = stdlib.safeAdd(v938, v938);
      sim_r.txns.push({
        amt: v938,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v958 = ' ';
      const v967 = [v958, v958, v958, v958, v958, v958, v958, v958, v958];
      const v968 = {
        board: v967,
        playerTurn: true
        };
      const v980 = v968;
      const v981 = v954;
      const v988 = v957;
      
      if (await (async () => {
        const v992 = v980.board;
        let v993;
        const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
        const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
        const v996 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
        const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
        const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
        const v999 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
        const v1000 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
        const v1001 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
        const v1002 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
        const v1003 = stdlib.digest(ctc3, [v994]);
        const v1004 = stdlib.digest(ctc3, [v995]);
        const v1005 = stdlib.digestEq(v1003, v1004);
        const v1007 = stdlib.digest(ctc3, [v996]);
        const v1008 = stdlib.digestEq(v1003, v1007);
        const v1009 = v1005 ? v1008 : false;
        const v1010 = '-';
        const v1011 = v1009 ? v994 : v1010;
        const v1012 = stdlib.digest(ctc3, [v997]);
        const v1013 = stdlib.digest(ctc3, [v998]);
        const v1014 = stdlib.digestEq(v1012, v1013);
        const v1016 = stdlib.digest(ctc3, [v999]);
        const v1017 = stdlib.digestEq(v1012, v1016);
        const v1018 = v1014 ? v1017 : false;
        const v1020 = v1018 ? v997 : v1010;
        const v1021 = stdlib.digest(ctc3, [v1000]);
        const v1022 = stdlib.digest(ctc3, [v1001]);
        const v1023 = stdlib.digestEq(v1021, v1022);
        const v1025 = stdlib.digest(ctc3, [v1002]);
        const v1026 = stdlib.digestEq(v1021, v1025);
        const v1027 = v1023 ? v1026 : false;
        const v1029 = v1027 ? v1000 : v1010;
        const v1032 = stdlib.digestEq(v1003, v1012);
        const v1035 = stdlib.digestEq(v1003, v1021);
        const v1036 = v1032 ? v1035 : false;
        const v1038 = v1036 ? v994 : v1010;
        const v1041 = stdlib.digestEq(v1004, v1013);
        const v1044 = stdlib.digestEq(v1004, v1022);
        const v1045 = v1041 ? v1044 : false;
        const v1047 = v1045 ? v995 : v1010;
        const v1050 = stdlib.digestEq(v1007, v1016);
        const v1053 = stdlib.digestEq(v1007, v1025);
        const v1054 = v1050 ? v1053 : false;
        const v1056 = v1054 ? v996 : v1010;
        const v1059 = stdlib.digestEq(v1003, v1013);
        const v1062 = stdlib.digestEq(v1003, v1025);
        const v1063 = v1059 ? v1062 : false;
        const v1065 = v1063 ? v994 : v1010;
        const v1068 = stdlib.digestEq(v1007, v1013);
        const v1071 = stdlib.digestEq(v1007, v1021);
        const v1072 = v1068 ? v1071 : false;
        const v1074 = v1072 ? v996 : v1010;
        const v1075 = 'x';
        const v1076 = stdlib.digest(ctc3, [v1011]);
        const v1078 = stdlib.digest(ctc3, [v1075]);
        const v1079 = stdlib.digestEq(v1076, v1078);
        const v1081 = stdlib.digest(ctc3, [v1020]);
        const v1084 = stdlib.digestEq(v1081, v1078);
        const v1085 = v1079 ? true : v1084;
        const v1087 = stdlib.digest(ctc3, [v1029]);
        const v1090 = stdlib.digestEq(v1087, v1078);
        const v1091 = v1085 ? true : v1090;
        const v1093 = stdlib.digest(ctc3, [v1038]);
        const v1096 = stdlib.digestEq(v1093, v1078);
        const v1097 = v1091 ? true : v1096;
        const v1099 = stdlib.digest(ctc3, [v1047]);
        const v1102 = stdlib.digestEq(v1099, v1078);
        const v1103 = v1097 ? true : v1102;
        const v1105 = stdlib.digest(ctc3, [v1056]);
        const v1108 = stdlib.digestEq(v1105, v1078);
        const v1109 = v1103 ? true : v1108;
        const v1111 = stdlib.digest(ctc3, [v1065]);
        const v1114 = stdlib.digestEq(v1111, v1078);
        const v1115 = v1109 ? true : v1114;
        const v1117 = stdlib.digest(ctc3, [v1074]);
        const v1120 = stdlib.digestEq(v1117, v1078);
        const v1121 = v1115 ? true : v1120;
        if (v1121) {
          v993 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1122 = 'o';
          const v1125 = stdlib.digest(ctc3, [v1122]);
          const v1126 = stdlib.digestEq(v1076, v1125);
          const v1131 = stdlib.digestEq(v1081, v1125);
          const v1132 = v1126 ? true : v1131;
          const v1137 = stdlib.digestEq(v1087, v1125);
          const v1138 = v1132 ? true : v1137;
          const v1143 = stdlib.digestEq(v1093, v1125);
          const v1144 = v1138 ? true : v1143;
          const v1149 = stdlib.digestEq(v1099, v1125);
          const v1150 = v1144 ? true : v1149;
          const v1155 = stdlib.digestEq(v1105, v1125);
          const v1156 = v1150 ? true : v1155;
          const v1161 = stdlib.digestEq(v1111, v1125);
          const v1162 = v1156 ? true : v1161;
          const v1167 = stdlib.digestEq(v1117, v1125);
          const v1168 = v1162 ? true : v1167;
          if (v1168) {
            v993 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
            }
          else {
            v993 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
            }
          }
        const v1170 = await stdlib.Array_asyncReduce([v992], true, async([v1172], v1171, v1173) => {
          const v1175 = stdlib.digest(ctc3, [v1172]);
          const v1178 = stdlib.digestEq(v1175, v1078);
          const v1179 = 'o';
          const v1182 = stdlib.digest(ctc3, [v1179]);
          const v1183 = stdlib.digestEq(v1175, v1182);
          const v1184 = v1178 ? true : v1183;
          const v1185 = v1171 ? v1184 : false;
          
          return v1185;})
        const v1186 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:52:decimal', stdlib.UInt_max, '1'));
        const v1187 = v1170 ? true : v1186;
        const v1188 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:70:decimal', stdlib.UInt_max, '0'));
        const v1189 = v1187 ? true : v1188;
        const v1190 = v1189 ? false : true;
        
        return v1190;})()) {
        const v1191 = v980.playerTurn;
        if (v1191) {
          const v1199 = stdlib.safeAdd(v981, v939);
          sim_r.isHalt = false;
          }
        else {
          const v1334 = stdlib.safeAdd(v981, v939);
          sim_r.isHalt = false;
          }}
      else {
        const v1463 = v980.board;
        let v1464;
        const v1465 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
        const v1466 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
        const v1467 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
        const v1468 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
        const v1469 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
        const v1470 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
        const v1471 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
        const v1472 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
        const v1473 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
        const v1474 = stdlib.digest(ctc3, [v1465]);
        const v1475 = stdlib.digest(ctc3, [v1466]);
        const v1476 = stdlib.digestEq(v1474, v1475);
        const v1478 = stdlib.digest(ctc3, [v1467]);
        const v1479 = stdlib.digestEq(v1474, v1478);
        const v1480 = v1476 ? v1479 : false;
        const v1481 = '-';
        const v1482 = v1480 ? v1465 : v1481;
        const v1483 = stdlib.digest(ctc3, [v1468]);
        const v1484 = stdlib.digest(ctc3, [v1469]);
        const v1485 = stdlib.digestEq(v1483, v1484);
        const v1487 = stdlib.digest(ctc3, [v1470]);
        const v1488 = stdlib.digestEq(v1483, v1487);
        const v1489 = v1485 ? v1488 : false;
        const v1491 = v1489 ? v1468 : v1481;
        const v1492 = stdlib.digest(ctc3, [v1471]);
        const v1493 = stdlib.digest(ctc3, [v1472]);
        const v1494 = stdlib.digestEq(v1492, v1493);
        const v1496 = stdlib.digest(ctc3, [v1473]);
        const v1497 = stdlib.digestEq(v1492, v1496);
        const v1498 = v1494 ? v1497 : false;
        const v1500 = v1498 ? v1471 : v1481;
        const v1503 = stdlib.digestEq(v1474, v1483);
        const v1506 = stdlib.digestEq(v1474, v1492);
        const v1507 = v1503 ? v1506 : false;
        const v1509 = v1507 ? v1465 : v1481;
        const v1512 = stdlib.digestEq(v1475, v1484);
        const v1515 = stdlib.digestEq(v1475, v1493);
        const v1516 = v1512 ? v1515 : false;
        const v1518 = v1516 ? v1466 : v1481;
        const v1521 = stdlib.digestEq(v1478, v1487);
        const v1524 = stdlib.digestEq(v1478, v1496);
        const v1525 = v1521 ? v1524 : false;
        const v1527 = v1525 ? v1467 : v1481;
        const v1530 = stdlib.digestEq(v1474, v1484);
        const v1533 = stdlib.digestEq(v1474, v1496);
        const v1534 = v1530 ? v1533 : false;
        const v1536 = v1534 ? v1465 : v1481;
        const v1539 = stdlib.digestEq(v1478, v1484);
        const v1542 = stdlib.digestEq(v1478, v1492);
        const v1543 = v1539 ? v1542 : false;
        const v1545 = v1543 ? v1467 : v1481;
        const v1546 = 'x';
        const v1547 = stdlib.digest(ctc3, [v1482]);
        const v1549 = stdlib.digest(ctc3, [v1546]);
        const v1550 = stdlib.digestEq(v1547, v1549);
        const v1552 = stdlib.digest(ctc3, [v1491]);
        const v1555 = stdlib.digestEq(v1552, v1549);
        const v1556 = v1550 ? true : v1555;
        const v1558 = stdlib.digest(ctc3, [v1500]);
        const v1561 = stdlib.digestEq(v1558, v1549);
        const v1562 = v1556 ? true : v1561;
        const v1564 = stdlib.digest(ctc3, [v1509]);
        const v1567 = stdlib.digestEq(v1564, v1549);
        const v1568 = v1562 ? true : v1567;
        const v1570 = stdlib.digest(ctc3, [v1518]);
        const v1573 = stdlib.digestEq(v1570, v1549);
        const v1574 = v1568 ? true : v1573;
        const v1576 = stdlib.digest(ctc3, [v1527]);
        const v1579 = stdlib.digestEq(v1576, v1549);
        const v1580 = v1574 ? true : v1579;
        const v1582 = stdlib.digest(ctc3, [v1536]);
        const v1585 = stdlib.digestEq(v1582, v1549);
        const v1586 = v1580 ? true : v1585;
        const v1588 = stdlib.digest(ctc3, [v1545]);
        const v1591 = stdlib.digestEq(v1588, v1549);
        const v1592 = v1586 ? true : v1591;
        if (v1592) {
          v1464 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
          }
        else {
          const v1593 = 'o';
          const v1596 = stdlib.digest(ctc3, [v1593]);
          const v1597 = stdlib.digestEq(v1547, v1596);
          const v1602 = stdlib.digestEq(v1552, v1596);
          const v1603 = v1597 ? true : v1602;
          const v1608 = stdlib.digestEq(v1558, v1596);
          const v1609 = v1603 ? true : v1608;
          const v1614 = stdlib.digestEq(v1564, v1596);
          const v1615 = v1609 ? true : v1614;
          const v1620 = stdlib.digestEq(v1570, v1596);
          const v1621 = v1615 ? true : v1620;
          const v1626 = stdlib.digestEq(v1576, v1596);
          const v1627 = v1621 ? true : v1626;
          const v1632 = stdlib.digestEq(v1582, v1596);
          const v1633 = v1627 ? true : v1632;
          const v1638 = stdlib.digestEq(v1588, v1596);
          const v1639 = v1633 ? true : v1638;
          if (v1639) {
            v1464 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
            }
          else {
            v1464 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
            }
          }
        const v1640 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:33:decimal', stdlib.UInt_max, '0'));
        const v1641 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:57:decimal', stdlib.UInt_max, '1'));
        const v1642 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v1643 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v1644 = v1641 ? v1642 : v1643;
        const v1645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v1646 = v1640 ? v1645 : v1644;
        const v1647 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '0')];
        const v1648 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '1')];
        const v1649 = stdlib.safeMul(v1647, v938);
        sim_r.txns.push({
          kind: 'from',
          to: v937,
          tok: undefined /* Nothing */
          });
        const v1654 = stdlib.safeMul(v1648, v938);
        sim_r.txns.push({
          kind: 'from',
          to: v953,
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
    timeoutAt: ['time', v950],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v937, v938, v939, v950],
      evt_cnt: 0,
      funcNum: 2,
      lct: v940,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v1689, time: v1688, didSend: v880, from: v1687 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v937,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1689, time: v1688, didSend: v880, from: v1687 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeOut(), {
      at: './index.rsh:116:29:application',
      fs: ['at ./index.rsh:115:9:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:114:28:function exp)', 'at ./index.rsh:130:62:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeOut',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v955, time: v954, didSend: v77, from: v953 } = txn2;
    const v957 = stdlib.safeAdd(v938, v938);
    ;
    const v958 = ' ';
    const v967 = [v958, v958, v958, v958, v958, v958, v958, v958, v958];
    const v968 = {
      board: v967,
      playerTurn: true
      };
    let v980 = v968;
    let v981 = v954;
    let v988 = v957;
    
    while (await (async () => {
      const v992 = v980.board;
      let v993;
      const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
      const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
      const v996 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
      const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
      const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
      const v999 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
      const v1000 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
      const v1001 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
      const v1002 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
      const v1003 = stdlib.digest(ctc3, [v994]);
      const v1004 = stdlib.digest(ctc3, [v995]);
      const v1005 = stdlib.digestEq(v1003, v1004);
      const v1007 = stdlib.digest(ctc3, [v996]);
      const v1008 = stdlib.digestEq(v1003, v1007);
      const v1009 = v1005 ? v1008 : false;
      const v1010 = '-';
      const v1011 = v1009 ? v994 : v1010;
      const v1012 = stdlib.digest(ctc3, [v997]);
      const v1013 = stdlib.digest(ctc3, [v998]);
      const v1014 = stdlib.digestEq(v1012, v1013);
      const v1016 = stdlib.digest(ctc3, [v999]);
      const v1017 = stdlib.digestEq(v1012, v1016);
      const v1018 = v1014 ? v1017 : false;
      const v1020 = v1018 ? v997 : v1010;
      const v1021 = stdlib.digest(ctc3, [v1000]);
      const v1022 = stdlib.digest(ctc3, [v1001]);
      const v1023 = stdlib.digestEq(v1021, v1022);
      const v1025 = stdlib.digest(ctc3, [v1002]);
      const v1026 = stdlib.digestEq(v1021, v1025);
      const v1027 = v1023 ? v1026 : false;
      const v1029 = v1027 ? v1000 : v1010;
      const v1032 = stdlib.digestEq(v1003, v1012);
      const v1035 = stdlib.digestEq(v1003, v1021);
      const v1036 = v1032 ? v1035 : false;
      const v1038 = v1036 ? v994 : v1010;
      const v1041 = stdlib.digestEq(v1004, v1013);
      const v1044 = stdlib.digestEq(v1004, v1022);
      const v1045 = v1041 ? v1044 : false;
      const v1047 = v1045 ? v995 : v1010;
      const v1050 = stdlib.digestEq(v1007, v1016);
      const v1053 = stdlib.digestEq(v1007, v1025);
      const v1054 = v1050 ? v1053 : false;
      const v1056 = v1054 ? v996 : v1010;
      const v1059 = stdlib.digestEq(v1003, v1013);
      const v1062 = stdlib.digestEq(v1003, v1025);
      const v1063 = v1059 ? v1062 : false;
      const v1065 = v1063 ? v994 : v1010;
      const v1068 = stdlib.digestEq(v1007, v1013);
      const v1071 = stdlib.digestEq(v1007, v1021);
      const v1072 = v1068 ? v1071 : false;
      const v1074 = v1072 ? v996 : v1010;
      const v1075 = 'x';
      const v1076 = stdlib.digest(ctc3, [v1011]);
      const v1078 = stdlib.digest(ctc3, [v1075]);
      const v1079 = stdlib.digestEq(v1076, v1078);
      const v1081 = stdlib.digest(ctc3, [v1020]);
      const v1084 = stdlib.digestEq(v1081, v1078);
      const v1085 = v1079 ? true : v1084;
      const v1087 = stdlib.digest(ctc3, [v1029]);
      const v1090 = stdlib.digestEq(v1087, v1078);
      const v1091 = v1085 ? true : v1090;
      const v1093 = stdlib.digest(ctc3, [v1038]);
      const v1096 = stdlib.digestEq(v1093, v1078);
      const v1097 = v1091 ? true : v1096;
      const v1099 = stdlib.digest(ctc3, [v1047]);
      const v1102 = stdlib.digestEq(v1099, v1078);
      const v1103 = v1097 ? true : v1102;
      const v1105 = stdlib.digest(ctc3, [v1056]);
      const v1108 = stdlib.digestEq(v1105, v1078);
      const v1109 = v1103 ? true : v1108;
      const v1111 = stdlib.digest(ctc3, [v1065]);
      const v1114 = stdlib.digestEq(v1111, v1078);
      const v1115 = v1109 ? true : v1114;
      const v1117 = stdlib.digest(ctc3, [v1074]);
      const v1120 = stdlib.digestEq(v1117, v1078);
      const v1121 = v1115 ? true : v1120;
      if (v1121) {
        v993 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
        }
      else {
        const v1122 = 'o';
        const v1125 = stdlib.digest(ctc3, [v1122]);
        const v1126 = stdlib.digestEq(v1076, v1125);
        const v1131 = stdlib.digestEq(v1081, v1125);
        const v1132 = v1126 ? true : v1131;
        const v1137 = stdlib.digestEq(v1087, v1125);
        const v1138 = v1132 ? true : v1137;
        const v1143 = stdlib.digestEq(v1093, v1125);
        const v1144 = v1138 ? true : v1143;
        const v1149 = stdlib.digestEq(v1099, v1125);
        const v1150 = v1144 ? true : v1149;
        const v1155 = stdlib.digestEq(v1105, v1125);
        const v1156 = v1150 ? true : v1155;
        const v1161 = stdlib.digestEq(v1111, v1125);
        const v1162 = v1156 ? true : v1161;
        const v1167 = stdlib.digestEq(v1117, v1125);
        const v1168 = v1162 ? true : v1167;
        if (v1168) {
          v993 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
          }
        else {
          v993 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
          }
        }
      const v1170 = await stdlib.Array_asyncReduce([v992], true, async([v1172], v1171, v1173) => {
        const v1175 = stdlib.digest(ctc3, [v1172]);
        const v1178 = stdlib.digestEq(v1175, v1078);
        const v1179 = 'o';
        const v1182 = stdlib.digest(ctc3, [v1179]);
        const v1183 = stdlib.digestEq(v1175, v1182);
        const v1184 = v1178 ? true : v1183;
        const v1185 = v1171 ? v1184 : false;
        
        return v1185;})
      const v1186 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:52:decimal', stdlib.UInt_max, '1'));
      const v1187 = v1170 ? true : v1186;
      const v1188 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:70:decimal', stdlib.UInt_max, '0'));
      const v1189 = v1187 ? true : v1188;
      const v1190 = v1189 ? false : true;
      
      return v1190;})()) {
      const v1191 = v980.playerTurn;
      if (v1191) {
        const v1199 = stdlib.safeAdd(v981, v939);
        const txn3 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 4,
          out_tys: [ctc0],
          timeoutAt: ['time', v1199],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const txn4 = await (ctc.sendrecv({
            args: [v937, v938, v939, v953, v980, v988, v1199],
            evt_cnt: 0,
            funcNum: 5,
            lct: v981,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v1312, time: v1311, didSend: v461, from: v1310 } = txn4;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v953,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc7, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1312, time: v1311, didSend: v461, from: v1310 } = txn4;
          ;
          const v1313 = stdlib.addressEq(v937, v1310);
          const v1314 = stdlib.addressEq(v953, v1310);
          const v1315 = v1313 ? true : v1314;
          stdlib.assert(v1315, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:143:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeOut(), {
            at: './index.rsh:116:29:application',
            fs: ['at ./index.rsh:115:9:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:114:28:function exp)', 'at ./index.rsh:143:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v1234], secs: v1236, time: v1235, didSend: v356, from: v1233 } = txn3;
          ;
          const v1237 = stdlib.addressEq(v937, v1233);
          stdlib.assert(v1237, {
            at: './index.rsh:142:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v1238 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '0'), v1234);
          const v1239 = stdlib.lt(v1234, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
          const v1240 = v1238 ? v1239 : false;
          stdlib.assert(v1240, {
            at: './index.rsh:71:10:application',
            fs: ['at ./index.rsh:144:42:application call to "applyPlayerMove" (defined at: ./index.rsh:70:39:function exp)'],
            msg: 'A square in the board should be selected',
            who: 'Bob'
            });
          const v1241 = v980.board;
          const v1243 = v1241[v1234];
          const v1244 = 'x';
          const v1245 = stdlib.digest(ctc3, [v1243]);
          const v1247 = stdlib.digest(ctc3, [v1244]);
          const v1248 = stdlib.digestEq(v1245, v1247);
          const v1249 = 'o';
          const v1252 = stdlib.digest(ctc3, [v1249]);
          const v1253 = stdlib.digestEq(v1245, v1252);
          const v1254 = v1248 ? true : v1253;
          const v1255 = v1254 ? false : true;
          stdlib.assert(v1255, {
            at: './index.rsh:72:10:application',
            fs: ['at ./index.rsh:144:42:application call to "applyPlayerMove" (defined at: ./index.rsh:70:39:function exp)'],
            msg: 'The square has been played by a player already',
            who: 'Bob'
            });
          const v1262 = stdlib.Array_set(v1241, v1234, v1244);
          const v1267 = {
            board: v1262,
            playerTurn: false
            };
          const cv980 = v1267;
          const cv981 = v1235;
          const cv988 = v988;
          
          v980 = cv980;
          v981 = cv981;
          v988 = cv988;
          
          continue;}
        
        }
      else {
        const v1334 = stdlib.safeAdd(v981, v939);
        const v1338 = v980.board;
        const v1349 = stdlib.protect(ctc0, await interact.getSquareSelected(v980), {
          at: './index.rsh:64:43:application',
          fs: ['at ./index.rsh:152:37:application call to "getValidSquare" (defined at: ./index.rsh:63:42:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)'],
          msg: 'getSquareSelected',
          who: 'Bob'
          });
        const v1350 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '0'), v1349);
        const v1351 = stdlib.lt(v1349, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
        const v1352 = v1350 ? v1351 : false;
        stdlib.assert(v1352, {
          at: './index.rsh:65:9:application',
          fs: ['at ./index.rsh:152:37:application call to "getValidSquare" (defined at: ./index.rsh:63:42:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)'],
          msg: 'A square in the board should be selected',
          who: 'Bob'
          });
        const v1355 = v1338[v1349];
        const v1356 = 'x';
        const v1357 = stdlib.digest(ctc3, [v1355]);
        const v1359 = stdlib.digest(ctc3, [v1356]);
        const v1360 = stdlib.digestEq(v1357, v1359);
        const v1361 = 'o';
        const v1364 = stdlib.digest(ctc3, [v1361]);
        const v1365 = stdlib.digestEq(v1357, v1364);
        const v1366 = v1360 ? true : v1365;
        const v1367 = v1366 ? false : true;
        stdlib.assert(v1367, {
          at: './index.rsh:66:9:application',
          fs: ['at ./index.rsh:152:37:application call to "getValidSquare" (defined at: ./index.rsh:63:42:function exp)', 'at ./index.rsh:151:13:application call to [unknown function] (defined at: ./index.rsh:151:17:function exp)'],
          msg: 'The square has been played by a player already',
          who: 'Bob'
          });
        
        const txn3 = await (ctc.sendrecv({
          args: [v937, v938, v939, v953, v980, v988, v1334, v1349],
          evt_cnt: 1,
          funcNum: 6,
          lct: v981,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:155:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn3) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v1369], secs: v1371, time: v1370, didSend: v518, from: v1368 } = txn3;
            
            ;
            const v1376 = v980.board;
            const v1384 = 'o';
            const v1401 = stdlib.Array_set(v1376, v1369, v1384);
            const v1402 = {
              board: v1401,
              playerTurn: true
              };
            
            const cv980 = v1402;
            const cv981 = v1370;
            const cv988 = v988;
            
            await (async () => {
              const v980 = cv980;
              const v981 = cv981;
              const v988 = cv988;
              
              if (await (async () => {
                const v992 = v980.board;
                let v993;
                const v994 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
                const v995 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
                const v996 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
                const v997 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
                const v998 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
                const v999 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
                const v1000 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
                const v1001 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
                const v1002 = v992[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
                const v1003 = stdlib.digest(ctc3, [v994]);
                const v1004 = stdlib.digest(ctc3, [v995]);
                const v1005 = stdlib.digestEq(v1003, v1004);
                const v1007 = stdlib.digest(ctc3, [v996]);
                const v1008 = stdlib.digestEq(v1003, v1007);
                const v1009 = v1005 ? v1008 : false;
                const v1010 = '-';
                const v1011 = v1009 ? v994 : v1010;
                const v1012 = stdlib.digest(ctc3, [v997]);
                const v1013 = stdlib.digest(ctc3, [v998]);
                const v1014 = stdlib.digestEq(v1012, v1013);
                const v1016 = stdlib.digest(ctc3, [v999]);
                const v1017 = stdlib.digestEq(v1012, v1016);
                const v1018 = v1014 ? v1017 : false;
                const v1020 = v1018 ? v997 : v1010;
                const v1021 = stdlib.digest(ctc3, [v1000]);
                const v1022 = stdlib.digest(ctc3, [v1001]);
                const v1023 = stdlib.digestEq(v1021, v1022);
                const v1025 = stdlib.digest(ctc3, [v1002]);
                const v1026 = stdlib.digestEq(v1021, v1025);
                const v1027 = v1023 ? v1026 : false;
                const v1029 = v1027 ? v1000 : v1010;
                const v1032 = stdlib.digestEq(v1003, v1012);
                const v1035 = stdlib.digestEq(v1003, v1021);
                const v1036 = v1032 ? v1035 : false;
                const v1038 = v1036 ? v994 : v1010;
                const v1041 = stdlib.digestEq(v1004, v1013);
                const v1044 = stdlib.digestEq(v1004, v1022);
                const v1045 = v1041 ? v1044 : false;
                const v1047 = v1045 ? v995 : v1010;
                const v1050 = stdlib.digestEq(v1007, v1016);
                const v1053 = stdlib.digestEq(v1007, v1025);
                const v1054 = v1050 ? v1053 : false;
                const v1056 = v1054 ? v996 : v1010;
                const v1059 = stdlib.digestEq(v1003, v1013);
                const v1062 = stdlib.digestEq(v1003, v1025);
                const v1063 = v1059 ? v1062 : false;
                const v1065 = v1063 ? v994 : v1010;
                const v1068 = stdlib.digestEq(v1007, v1013);
                const v1071 = stdlib.digestEq(v1007, v1021);
                const v1072 = v1068 ? v1071 : false;
                const v1074 = v1072 ? v996 : v1010;
                const v1075 = 'x';
                const v1076 = stdlib.digest(ctc3, [v1011]);
                const v1078 = stdlib.digest(ctc3, [v1075]);
                const v1079 = stdlib.digestEq(v1076, v1078);
                const v1081 = stdlib.digest(ctc3, [v1020]);
                const v1084 = stdlib.digestEq(v1081, v1078);
                const v1085 = v1079 ? true : v1084;
                const v1087 = stdlib.digest(ctc3, [v1029]);
                const v1090 = stdlib.digestEq(v1087, v1078);
                const v1091 = v1085 ? true : v1090;
                const v1093 = stdlib.digest(ctc3, [v1038]);
                const v1096 = stdlib.digestEq(v1093, v1078);
                const v1097 = v1091 ? true : v1096;
                const v1099 = stdlib.digest(ctc3, [v1047]);
                const v1102 = stdlib.digestEq(v1099, v1078);
                const v1103 = v1097 ? true : v1102;
                const v1105 = stdlib.digest(ctc3, [v1056]);
                const v1108 = stdlib.digestEq(v1105, v1078);
                const v1109 = v1103 ? true : v1108;
                const v1111 = stdlib.digest(ctc3, [v1065]);
                const v1114 = stdlib.digestEq(v1111, v1078);
                const v1115 = v1109 ? true : v1114;
                const v1117 = stdlib.digest(ctc3, [v1074]);
                const v1120 = stdlib.digestEq(v1117, v1078);
                const v1121 = v1115 ? true : v1120;
                if (v1121) {
                  v993 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v1122 = 'o';
                  const v1125 = stdlib.digest(ctc3, [v1122]);
                  const v1126 = stdlib.digestEq(v1076, v1125);
                  const v1131 = stdlib.digestEq(v1081, v1125);
                  const v1132 = v1126 ? true : v1131;
                  const v1137 = stdlib.digestEq(v1087, v1125);
                  const v1138 = v1132 ? true : v1137;
                  const v1143 = stdlib.digestEq(v1093, v1125);
                  const v1144 = v1138 ? true : v1143;
                  const v1149 = stdlib.digestEq(v1099, v1125);
                  const v1150 = v1144 ? true : v1149;
                  const v1155 = stdlib.digestEq(v1105, v1125);
                  const v1156 = v1150 ? true : v1155;
                  const v1161 = stdlib.digestEq(v1111, v1125);
                  const v1162 = v1156 ? true : v1161;
                  const v1167 = stdlib.digestEq(v1117, v1125);
                  const v1168 = v1162 ? true : v1167;
                  if (v1168) {
                    v993 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
                    }
                  else {
                    v993 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
                    }
                  }
                const v1170 = await stdlib.Array_asyncReduce([v992], true, async([v1172], v1171, v1173) => {
                  const v1175 = stdlib.digest(ctc3, [v1172]);
                  const v1178 = stdlib.digestEq(v1175, v1078);
                  const v1179 = 'o';
                  const v1182 = stdlib.digest(ctc3, [v1179]);
                  const v1183 = stdlib.digestEq(v1175, v1182);
                  const v1184 = v1178 ? true : v1183;
                  const v1185 = v1171 ? v1184 : false;
                  
                  return v1185;})
                const v1186 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:52:decimal', stdlib.UInt_max, '1'));
                const v1187 = v1170 ? true : v1186;
                const v1188 = stdlib.eq(v993, stdlib.checkedBigNumberify('./index.rsh:84:70:decimal', stdlib.UInt_max, '0'));
                const v1189 = v1187 ? true : v1188;
                const v1190 = v1189 ? false : true;
                
                return v1190;})()) {
                const v1191 = v980.playerTurn;
                if (v1191) {
                  const v1199 = stdlib.safeAdd(v981, v939);
                  sim_r.isHalt = false;
                  }
                else {
                  const v1334 = stdlib.safeAdd(v981, v939);
                  sim_r.isHalt = false;
                  }}
              else {
                const v1463 = v980.board;
                let v1464;
                const v1465 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
                const v1466 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
                const v1467 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
                const v1468 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
                const v1469 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
                const v1470 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
                const v1471 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
                const v1472 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
                const v1473 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
                const v1474 = stdlib.digest(ctc3, [v1465]);
                const v1475 = stdlib.digest(ctc3, [v1466]);
                const v1476 = stdlib.digestEq(v1474, v1475);
                const v1478 = stdlib.digest(ctc3, [v1467]);
                const v1479 = stdlib.digestEq(v1474, v1478);
                const v1480 = v1476 ? v1479 : false;
                const v1481 = '-';
                const v1482 = v1480 ? v1465 : v1481;
                const v1483 = stdlib.digest(ctc3, [v1468]);
                const v1484 = stdlib.digest(ctc3, [v1469]);
                const v1485 = stdlib.digestEq(v1483, v1484);
                const v1487 = stdlib.digest(ctc3, [v1470]);
                const v1488 = stdlib.digestEq(v1483, v1487);
                const v1489 = v1485 ? v1488 : false;
                const v1491 = v1489 ? v1468 : v1481;
                const v1492 = stdlib.digest(ctc3, [v1471]);
                const v1493 = stdlib.digest(ctc3, [v1472]);
                const v1494 = stdlib.digestEq(v1492, v1493);
                const v1496 = stdlib.digest(ctc3, [v1473]);
                const v1497 = stdlib.digestEq(v1492, v1496);
                const v1498 = v1494 ? v1497 : false;
                const v1500 = v1498 ? v1471 : v1481;
                const v1503 = stdlib.digestEq(v1474, v1483);
                const v1506 = stdlib.digestEq(v1474, v1492);
                const v1507 = v1503 ? v1506 : false;
                const v1509 = v1507 ? v1465 : v1481;
                const v1512 = stdlib.digestEq(v1475, v1484);
                const v1515 = stdlib.digestEq(v1475, v1493);
                const v1516 = v1512 ? v1515 : false;
                const v1518 = v1516 ? v1466 : v1481;
                const v1521 = stdlib.digestEq(v1478, v1487);
                const v1524 = stdlib.digestEq(v1478, v1496);
                const v1525 = v1521 ? v1524 : false;
                const v1527 = v1525 ? v1467 : v1481;
                const v1530 = stdlib.digestEq(v1474, v1484);
                const v1533 = stdlib.digestEq(v1474, v1496);
                const v1534 = v1530 ? v1533 : false;
                const v1536 = v1534 ? v1465 : v1481;
                const v1539 = stdlib.digestEq(v1478, v1484);
                const v1542 = stdlib.digestEq(v1478, v1492);
                const v1543 = v1539 ? v1542 : false;
                const v1545 = v1543 ? v1467 : v1481;
                const v1546 = 'x';
                const v1547 = stdlib.digest(ctc3, [v1482]);
                const v1549 = stdlib.digest(ctc3, [v1546]);
                const v1550 = stdlib.digestEq(v1547, v1549);
                const v1552 = stdlib.digest(ctc3, [v1491]);
                const v1555 = stdlib.digestEq(v1552, v1549);
                const v1556 = v1550 ? true : v1555;
                const v1558 = stdlib.digest(ctc3, [v1500]);
                const v1561 = stdlib.digestEq(v1558, v1549);
                const v1562 = v1556 ? true : v1561;
                const v1564 = stdlib.digest(ctc3, [v1509]);
                const v1567 = stdlib.digestEq(v1564, v1549);
                const v1568 = v1562 ? true : v1567;
                const v1570 = stdlib.digest(ctc3, [v1518]);
                const v1573 = stdlib.digestEq(v1570, v1549);
                const v1574 = v1568 ? true : v1573;
                const v1576 = stdlib.digest(ctc3, [v1527]);
                const v1579 = stdlib.digestEq(v1576, v1549);
                const v1580 = v1574 ? true : v1579;
                const v1582 = stdlib.digest(ctc3, [v1536]);
                const v1585 = stdlib.digestEq(v1582, v1549);
                const v1586 = v1580 ? true : v1585;
                const v1588 = stdlib.digest(ctc3, [v1545]);
                const v1591 = stdlib.digestEq(v1588, v1549);
                const v1592 = v1586 ? true : v1591;
                if (v1592) {
                  v1464 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
                  }
                else {
                  const v1593 = 'o';
                  const v1596 = stdlib.digest(ctc3, [v1593]);
                  const v1597 = stdlib.digestEq(v1547, v1596);
                  const v1602 = stdlib.digestEq(v1552, v1596);
                  const v1603 = v1597 ? true : v1602;
                  const v1608 = stdlib.digestEq(v1558, v1596);
                  const v1609 = v1603 ? true : v1608;
                  const v1614 = stdlib.digestEq(v1564, v1596);
                  const v1615 = v1609 ? true : v1614;
                  const v1620 = stdlib.digestEq(v1570, v1596);
                  const v1621 = v1615 ? true : v1620;
                  const v1626 = stdlib.digestEq(v1576, v1596);
                  const v1627 = v1621 ? true : v1626;
                  const v1632 = stdlib.digestEq(v1582, v1596);
                  const v1633 = v1627 ? true : v1632;
                  const v1638 = stdlib.digestEq(v1588, v1596);
                  const v1639 = v1633 ? true : v1638;
                  if (v1639) {
                    v1464 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
                    }
                  else {
                    v1464 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
                    }
                  }
                const v1640 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:33:decimal', stdlib.UInt_max, '0'));
                const v1641 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:57:decimal', stdlib.UInt_max, '1'));
                const v1642 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                const v1643 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                const v1644 = v1641 ? v1642 : v1643;
                const v1645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                const v1646 = v1640 ? v1645 : v1644;
                const v1647 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '0')];
                const v1648 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '1')];
                const v1649 = stdlib.safeMul(v1647, v938);
                sim_r.txns.push({
                  kind: 'from',
                  to: v937,
                  tok: undefined /* Nothing */
                  });
                const v1654 = stdlib.safeMul(v1648, v938);
                sim_r.txns.push({
                  kind: 'from',
                  to: v953,
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
          timeoutAt: ['time', v1334],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc7, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn3.didTimeout) {
          const txn4 = await (ctc.sendrecv({
            args: [v937, v938, v939, v953, v980, v988, v1334],
            evt_cnt: 0,
            funcNum: 7,
            lct: v981,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn4) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v1447, time: v1446, didSend: v623, from: v1445 } = txn4;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v937,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc7, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v1447, time: v1446, didSend: v623, from: v1445 } = txn4;
          ;
          const v1448 = stdlib.addressEq(v937, v1445);
          const v1449 = stdlib.addressEq(v953, v1445);
          const v1450 = v1448 ? true : v1449;
          stdlib.assert(v1450, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:156:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeOut(), {
            at: './index.rsh:116:29:application',
            fs: ['at ./index.rsh:115:9:application call to [unknown function] (defined at: ./index.rsh:115:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:114:28:function exp)', 'at ./index.rsh:156:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeOut',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v1369], secs: v1371, time: v1370, didSend: v518, from: v1368 } = txn3;
          ;
          const v1372 = stdlib.addressEq(v953, v1368);
          stdlib.assert(v1372, {
            at: './index.rsh:155:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v1373 = stdlib.le(stdlib.checkedBigNumberify('./index.rsh:53:34:decimal', stdlib.UInt_max, '0'), v1369);
          const v1374 = stdlib.lt(v1369, stdlib.checkedBigNumberify('./index.rsh:3:17:decimal', stdlib.UInt_max, '9'));
          const v1375 = v1373 ? v1374 : false;
          stdlib.assert(v1375, {
            at: './index.rsh:71:10:application',
            fs: ['at ./index.rsh:157:42:application call to "applyPlayerMove" (defined at: ./index.rsh:70:39:function exp)'],
            msg: 'A square in the board should be selected',
            who: 'Bob'
            });
          const v1376 = v980.board;
          const v1378 = v1376[v1369];
          const v1379 = 'x';
          const v1380 = stdlib.digest(ctc3, [v1378]);
          const v1382 = stdlib.digest(ctc3, [v1379]);
          const v1383 = stdlib.digestEq(v1380, v1382);
          const v1384 = 'o';
          const v1387 = stdlib.digest(ctc3, [v1384]);
          const v1388 = stdlib.digestEq(v1380, v1387);
          const v1389 = v1383 ? true : v1388;
          const v1390 = v1389 ? false : true;
          stdlib.assert(v1390, {
            at: './index.rsh:72:10:application',
            fs: ['at ./index.rsh:157:42:application call to "applyPlayerMove" (defined at: ./index.rsh:70:39:function exp)'],
            msg: 'The square has been played by a player already',
            who: 'Bob'
            });
          const v1401 = stdlib.Array_set(v1376, v1369, v1384);
          const v1402 = {
            board: v1401,
            playerTurn: true
            };
          stdlib.protect(ctc1, await interact.seeBoard(v1402), {
            at: './index.rsh:157:26:application',
            fs: ['at ./index.rsh:157:26:application call to [unknown function] (defined at: ./index.rsh:157:26:function exp)', 'at ./index.rsh:157:26:application call to "liftedInteract" (defined at: ./index.rsh:157:26:application)'],
            msg: 'seeBoard',
            who: 'Bob'
            });
          
          const cv980 = v1402;
          const cv981 = v1370;
          const cv988 = v988;
          
          v980 = cv980;
          v981 = cv981;
          v988 = cv988;
          
          continue;}
        
        }}
    const v1463 = v980.board;
    let v1464;
    const v1465 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '0')];
    const v1466 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '1')];
    const v1467 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '2')];
    const v1468 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '3')];
    const v1469 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '4')];
    const v1470 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '5')];
    const v1471 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '6')];
    const v1472 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '7')];
    const v1473 = v1463[stdlib.checkedBigNumberify('./index.rsh:24:49:spread', stdlib.UInt_max, '8')];
    const v1474 = stdlib.digest(ctc3, [v1465]);
    const v1475 = stdlib.digest(ctc3, [v1466]);
    const v1476 = stdlib.digestEq(v1474, v1475);
    const v1478 = stdlib.digest(ctc3, [v1467]);
    const v1479 = stdlib.digestEq(v1474, v1478);
    const v1480 = v1476 ? v1479 : false;
    const v1481 = '-';
    const v1482 = v1480 ? v1465 : v1481;
    const v1483 = stdlib.digest(ctc3, [v1468]);
    const v1484 = stdlib.digest(ctc3, [v1469]);
    const v1485 = stdlib.digestEq(v1483, v1484);
    const v1487 = stdlib.digest(ctc3, [v1470]);
    const v1488 = stdlib.digestEq(v1483, v1487);
    const v1489 = v1485 ? v1488 : false;
    const v1491 = v1489 ? v1468 : v1481;
    const v1492 = stdlib.digest(ctc3, [v1471]);
    const v1493 = stdlib.digest(ctc3, [v1472]);
    const v1494 = stdlib.digestEq(v1492, v1493);
    const v1496 = stdlib.digest(ctc3, [v1473]);
    const v1497 = stdlib.digestEq(v1492, v1496);
    const v1498 = v1494 ? v1497 : false;
    const v1500 = v1498 ? v1471 : v1481;
    const v1503 = stdlib.digestEq(v1474, v1483);
    const v1506 = stdlib.digestEq(v1474, v1492);
    const v1507 = v1503 ? v1506 : false;
    const v1509 = v1507 ? v1465 : v1481;
    const v1512 = stdlib.digestEq(v1475, v1484);
    const v1515 = stdlib.digestEq(v1475, v1493);
    const v1516 = v1512 ? v1515 : false;
    const v1518 = v1516 ? v1466 : v1481;
    const v1521 = stdlib.digestEq(v1478, v1487);
    const v1524 = stdlib.digestEq(v1478, v1496);
    const v1525 = v1521 ? v1524 : false;
    const v1527 = v1525 ? v1467 : v1481;
    const v1530 = stdlib.digestEq(v1474, v1484);
    const v1533 = stdlib.digestEq(v1474, v1496);
    const v1534 = v1530 ? v1533 : false;
    const v1536 = v1534 ? v1465 : v1481;
    const v1539 = stdlib.digestEq(v1478, v1484);
    const v1542 = stdlib.digestEq(v1478, v1492);
    const v1543 = v1539 ? v1542 : false;
    const v1545 = v1543 ? v1467 : v1481;
    const v1546 = 'x';
    const v1547 = stdlib.digest(ctc3, [v1482]);
    const v1549 = stdlib.digest(ctc3, [v1546]);
    const v1550 = stdlib.digestEq(v1547, v1549);
    const v1552 = stdlib.digest(ctc3, [v1491]);
    const v1555 = stdlib.digestEq(v1552, v1549);
    const v1556 = v1550 ? true : v1555;
    const v1558 = stdlib.digest(ctc3, [v1500]);
    const v1561 = stdlib.digestEq(v1558, v1549);
    const v1562 = v1556 ? true : v1561;
    const v1564 = stdlib.digest(ctc3, [v1509]);
    const v1567 = stdlib.digestEq(v1564, v1549);
    const v1568 = v1562 ? true : v1567;
    const v1570 = stdlib.digest(ctc3, [v1518]);
    const v1573 = stdlib.digestEq(v1570, v1549);
    const v1574 = v1568 ? true : v1573;
    const v1576 = stdlib.digest(ctc3, [v1527]);
    const v1579 = stdlib.digestEq(v1576, v1549);
    const v1580 = v1574 ? true : v1579;
    const v1582 = stdlib.digest(ctc3, [v1536]);
    const v1585 = stdlib.digestEq(v1582, v1549);
    const v1586 = v1580 ? true : v1585;
    const v1588 = stdlib.digest(ctc3, [v1545]);
    const v1591 = stdlib.digestEq(v1588, v1549);
    const v1592 = v1586 ? true : v1591;
    if (v1592) {
      v1464 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '0');
      }
    else {
      const v1593 = 'o';
      const v1596 = stdlib.digest(ctc3, [v1593]);
      const v1597 = stdlib.digestEq(v1547, v1596);
      const v1602 = stdlib.digestEq(v1552, v1596);
      const v1603 = v1597 ? true : v1602;
      const v1608 = stdlib.digestEq(v1558, v1596);
      const v1609 = v1603 ? true : v1608;
      const v1614 = stdlib.digestEq(v1564, v1596);
      const v1615 = v1609 ? true : v1614;
      const v1620 = stdlib.digestEq(v1570, v1596);
      const v1621 = v1615 ? true : v1620;
      const v1626 = stdlib.digestEq(v1576, v1596);
      const v1627 = v1621 ? true : v1626;
      const v1632 = stdlib.digestEq(v1582, v1596);
      const v1633 = v1627 ? true : v1632;
      const v1638 = stdlib.digestEq(v1588, v1596);
      const v1639 = v1633 ? true : v1638;
      if (v1639) {
        v1464 = stdlib.checkedBigNumberify('./index.rsh:42:14:decimal', stdlib.UInt_max, '1');
        }
      else {
        v1464 = stdlib.checkedBigNumberify('./index.rsh:44:14:decimal', stdlib.UInt_max, '2');
        }
      }
    const v1640 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:33:decimal', stdlib.UInt_max, '0'));
    const v1641 = stdlib.eq(v1464, stdlib.checkedBigNumberify('./index.rsh:165:57:decimal', stdlib.UInt_max, '1'));
    const v1642 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v1643 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v1644 = v1641 ? v1642 : v1643;
    const v1645 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v1646 = v1640 ? v1645 : v1644;
    const v1647 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '0')];
    const v1648 = v1646[stdlib.checkedBigNumberify('./index.rsh:165:9:array', stdlib.UInt_max, '1')];
    const v1649 = stdlib.safeMul(v1647, v938);
    ;
    const v1654 = stdlib.safeMul(v1648, v938);
    ;
    stdlib.protect(ctc1, await interact.endsWith(v980), {
      at: './index.rsh:176:22:application',
      fs: ['at ./index.rsh:175:7:application call to [unknown function] (defined at: ./index.rsh:175:19:function exp)'],
      msg: 'endsWith',
      who: 'Bob'
      });
    stdlib.protect(ctc1, await interact.seeOutcome(v1464), {
      at: './index.rsh:177:24:application',
      fs: ['at ./index.rsh:175:7:application call to [unknown function] (defined at: ./index.rsh:175:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiANAAECBgUHCWJaIAgoMCYFAQAgZcdMFaaGGHu2u/mVj0lPxrgAaANKZZqa1EmRsIxY8tIAIC1xFkK3JrBEAWJ8qfusMvXIUw+xkDzE2wIlhxeSGkiBAQEiNQAxGEEHBipkSSJbNQFJIQpbNQKBEFs1CDYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJgQQMQAIySSUMQAEYSSEFDEAAVCEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABOIbs6mwMgY0AyEHWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQhbsggjshA0/7IHs0IGDEgiNf+xIrIBJbIQNAiyGLM0/yMISTX/JAxA/+ghBTQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf9JNQUXNf6ABHDt73o0/hZQsDIGNAMhB1sMRDT/MQASRCI0/g40/iEGDBBENANXUApXAAlJNf0jNP4LI1gBNfyAAW81+zT8KxI0/DT7ARIRFEQ0A1cAIDQDIQlbNAMhC1s0/zT9IiM0/gtSNPtQNP0jSTT+CwghBlJQJwRQMgY0AyEIW0ICYUkhBAxAAFFIIQQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhB1sPRDQDVwAgMQASNP8xABIRRLEisgE0AyEIW7III7IQNP+yB7NCBPdIIjX/sSKyASWyEDQIshizNP8jCEk1/yQMQP/oIQQ0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/STUFFzX+gAT5i694NP4WULAyBjQDIQdbDEQ0/zEAEkQiNP4ONP4hBgwQRDQDV1AKVwAJNf2AAXg1/DT9IzT+CyNYAUk1+zT8ARI0+ykSERRENP80AyEJWzQDIQtbNANXMCA0/SIjNP4LUjT8UDT9I0k0/gsIIQZSUChQMgY0AyEIW0IBTUkjDEAAyUkkDEAAQCQSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDFsPRLEisgE0AyEJW7III7IQNANXACCyB7NCA+9IIjX/sSKyASWyEDQIshizNP8jCEk1/yQMQP/oIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQlbNf+ABJqLkXSwMgY0AyEMWwxENP+IBCiAASA1/jQDVwAgNP80AyELWzEANP5JUDT+UDT+UDT+UDT+UDT+UDT+UDT+UCcEUDIGNP9JCEIAfkiBwJoMiAPosSKyASWyECKyGIAGBjEAMgkSsh6AAQayH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQpbNf6ABKzRH8M0/xZQNP4WULA0/4gDmTIGNP4INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIDGjX/Nf41/TX8Nfs1+jX5NP1XAAlJNfdXAAE19TT3VwEBNfQ091cCATXzNPdXAwE18jT3VwYBNfE09QE18DT0ATXvNPMBNe6AAS017TTyATXsNPdXBAEBNes091cFAQE16jTxATXpNPdXBwEBNeg091cIAQE15zTtNPU08DTvEjTwNO4SEE0BNeYrNeU07TTyNOw06xI07DTqEhBNATXkNO008TTpNOgSNOk05xIQTQE14zTtNPU08DTsEjTwNOkSEE0BNeI07TT0NO806xI07zToEhBNATXhNO008zTuNOoSNO405xIQTQE14DTtNPU08DTrEjTwNOcSEE0BNd807TTzNO406xI07jTpEhBNATXeNOY05RI05DTlEhE04zTlEhE04jTlEhE04TTlEhE04DTlEhE03zTlEhE03jTlEhFJNd1BAAYiNfZCAD4pNdw05jTcEjTkNNwSETTjNNwSETTiNNwSETThNNwSETTgNNwSETTfNNwSETTeNNwSEUEABiM19kIAAyQ19iM13CI12zT3IzTbCyNYSTXaATXZNNw02TTlEjTZKRIREDXcNNsjCEk12yEGDED/1jTcNPYjEhE09iISEUEAuTTdQQAGIjXbQgA+KTXaNOY02hI05DTaEhE04zTaEhE04jTaEhE04TTaEhE04DTaEhE03zTaEhE03jTaEhFBAAYjNdtCAAMkNduAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI02yMSTYAQAAAAAAAAAAIAAAAAAAAAADTbIhJNNdqxIrIBNNoiWzT6C7III7IQNPmyB7OxIrIBNNohCls0+guyCCOyEDT8sgezQgBtNP1XCQEXQQAyNP40+wg12zT5NPoWUDT7FlA0/FA0/VA0/xZQNNsWUChLAVcAamdIIQQ1ATIGNQJCAF40/jT7CDXbNPk0+hZQNPsWUDT8UDT9UDT/FlA02xZQKEsBVwBqZ0ghBTUBMgY1AkIALDEZIQQSRLEisgElshA0CLIYIQSyGbOxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWNAgWUFBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AiI1CEL/qDQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: {
    publish1: 2,
    publish4: 2,
    publish6: 2
    },
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 106,
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
                "name": "v938",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v939",
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
                "name": "v938",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v939",
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
    "name": "_reach_e2",
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
                "name": "v1234",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v1369",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
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
    "name": "_reach_e7",
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
    "name": "_reach_m2",
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
                "name": "v1234",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v1369",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002836380380620028368339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b6124b9806200037d6000396000f3fe6080604052600436106100845760003560e01c80638e314769116100565780638e314769146100ec578063980b6eac146100ff578063a209ad4e14610112578063ab53f2c614610125578063bf2c5b241461014857005b80631e93b0f11461008d5780632c10a159146100b15780637eea518c146100c457806383230757146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004611f99565b61015b565b61008b6100d2366004611f99565b61036a565b3480156100e357600080fd5b5060015461009e565b61008b6100fa366004611f99565b6104e8565b61008b61010d366004611f99565b610683565b61008b610120366004611f99565b61095c565b34801561013157600080fd5b5061013a610bcd565b6040516100a8929190611fbc565b61008b610156366004611f99565b610c6a565b61016b6001600054146009610e01565b6101858135158061017e57506001548235145b600a610e01565b60008080556002805461019790612019565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390612019565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b50505050508060200190518101906102289190612113565b9050610232611b61565b61024382606001514310600b610e01565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338460405161027492919061218c565b60405180910390a161028d826020015134146008610e01565b8051600160fd1b9052805160208083018051929092528251825182015282518251604090810191909152835183516060015283518351608001528351835160a001528351835160c001528351835160e00152835183516101000152915191830180519290925290516001910152610302611b95565b825181516001600160a01b03909116905260208084018051835183015260408086015184518201528351336060909101528401518284018051919091525143920191909152516103529080610e27565b60208201516040015261036481610e7a565b50505050565b61037a600160005414600d610e01565b6103948135158061038d57506001548235145b600e610e01565b6000808055600280546103a690612019565b80601f01602080910402602001604051908101604052809291908181526020018280546103d290612019565b801561041f5780601f106103f45761010080835404028352916020019161041f565b820191906000526020600020905b81548152906001019060200180831161040257829003601f168201915b50505050508060200190518101906104379190612113565b905061044b8160600151431015600f610e01565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161047c92919061218c565b60405180910390a16104903415600c610e01565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104cd573d6000803e3d6000fd5b50600080805560018190556104e490600290611bcc565b5050565b6104f86005600054146019610e01565b6105128135158061050b57506001548235145b601a610e01565b60008080556002805461052490612019565b80601f016020809104026020016040519081016040528092919081815260200182805461055090612019565b801561059d5780601f106105725761010080835404028352916020019161059d565b820191906000526020600020905b81548152906001019060200180831161058057829003601f168201915b50505050508060200190518101906105b591906122ff565b90506105c98160c00151431015601b610e01565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516105fa92919061218c565b60405180910390a161060e34156017610e01565b8051610642906001600160a01b031633146106385760608201516001600160a01b0316331461063b565b60015b6018610e01565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156104cd573d6000803e3d6000fd5b6106936007600054146020610e01565b6106ad813515806106a657506001548235145b6021610e01565b6000808055600280546106bf90612019565b80601f01602080910402602001604051908101604052809291908181526020018280546106eb90612019565b80156107385780601f1061070d57610100808354040283529160200191610738565b820191906000526020600020905b81548152906001019060200180831161071b57829003601f168201915b505050505080602001905181019061075091906122ff565b905061075a611c09565b61076b8260c0015143106022610e01565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c338460405161079c92919061231c565b60405180910390a16107b03415601c610e01565b60608201516107cb906001600160a01b03163314601d610e01565b6107dd6009602085013510601e610e01565b8051600f60fb1b9052608082015151602084013560098110610801576108016121c4565b60200201516040516020016108169190612343565b60408051601f1981840301815291815281516020928301208383015282810151606f60f81b9052825190516108c492610850929101612343565b6040516020818303038152906040528051906020012060001c8260200151146108ac5781604001516040516020016108889190612343565b6040516020818303038152906040528051906020012060001c8260200151146108af565b60015b6108ba5760016108bd565b60005b601f610e01565b60808201515160408201516108df9190602086013590611a8e565b606082018051919091525160016020909101526108fa611b95565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416938101939093529184015181840180519190915280514392019190915260a085015190519091015261036481610e7a565b61096c6005600054146014610e01565b6109868135158061097f57506001548235145b6015610e01565b60008080556002805461099890612019565b80601f01602080910402602001604051908101604052809291908181526020018280546109c490612019565b8015610a115780601f106109e657610100808354040283529160200191610a11565b820191906000526020600020905b8154815290600101906020018083116109f457829003601f168201915b5050505050806020019051810190610a2991906122ff565b9050610a33611c09565b610a448260c0015143106016610e01565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc03384604051610a7592919061231c565b60405180910390a1610a8934156010610e01565b8151610aa1906001600160a01b031633146011610e01565b610ab360096020850135106012610e01565b8051600f60fb1b9052608082015151602084013560098110610ad757610ad76121c4565b6020020151604051602001610aec9190612343565b60408051601f1981840301815291815281516020928301208383015282810151606f60f81b905282519051610b9a92610b26929101612343565b6040516020818303038152906040528051906020012060001c826020015114610b82578160400151604051602001610b5e9190612343565b6040516020818303038152906040528051906020012060001c826020015114610b85565b60015b610b90576001610b93565b60005b6013610e01565b6080820151518151610bb29190602086013590611a8e565b606082018051919091525160006020909101526108fa611b95565b600060606000546002808054610be290612019565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0e90612019565b8015610c5b5780601f10610c3057610100808354040283529160200191610c5b565b820191906000526020600020905b815481529060010190602001808311610c3e57829003601f168201915b50505050509050915091509091565b610c7a6007600054146025610e01565b610c9481351580610c8d57506001548235145b6026610e01565b600080805560028054610ca690612019565b80601f0160208091040260200160405190810160405280929190818152602001828054610cd290612019565b8015610d1f5780601f10610cf457610100808354040283529160200191610d1f565b820191906000526020600020905b815481529060010190602001808311610d0257829003601f168201915b5050505050806020019051810190610d3791906122ff565b9050610d4b8160c001514310156027610e01565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610d7c92919061218c565b60405180910390a1610d9034156023610e01565b8051610dc4906001600160a01b03163314610dba5760608201516001600160a01b03163314610dbd565b60015b6024610e01565b805160a08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156104cd573d6000803e3d6000fd5b816104e45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610e34838261236d565b9150811015610e745760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610e1e565b92915050565b610e82611c3a565b602082810151515151604051610e989201612343565b60408051808303601f190181529181528151602092830120838301528382015151518201519051610ec99201612343565b60408051808303601f190181529181528151602092830120838201528382015151518101519051610efa9201612343565b60408051601f19818403018152919052805160209182012060608301526080820151602d60f81b9052820151515160036020020151604051602001610f3f9190612343565b60408051808303601f19018152918152815160209283012060a0840152838201515151608001519051610f729201612343565b60408051808303601f19018152918152815160209283012060c084015283820151515160a001519051610fa59201612343565b60408051808303601f19018152918152815160209283012060e084015283820151515160c001519051610fd89201612343565b60408051808303601f19018152918152815160209283012061010084015283820151515160e00151905161100c9201612343565b60408051808303601f190181529181528151602092830120610120840152838201515151610100015190516110419201612343565b60408051601f198184030181529181528151602092830120610140840152610160830151600f60fb1b9052820151908201511461107f57600061108b565b80606001518160200151145b6110995780608001516110a2565b60208201515151515b6040516020016110b29190612343565b60408051601f19818403018152918152815160209283012061018084015261016083015190516110e29201612343565b60408051601f1981840301815291905280516020909101206101a082015260c081015160a082015114611116576000611122565b8060e001518160a00151145b61113057806080015161113c565b60208201515151606001515b60405160200161114c9190612343565b60408051601f1981840301815291905280516020909101206101c082015261012081015161010082015114611182576000611190565b806101400151816101000151145b61119e5780608001516111aa565b6020820151515160c001515b6040516020016111ba9190612343565b60408051601f1981840301815291905280516020918201206101e083015260a082015190820151146111ed5760006111fa565b8061010001518160200151145b611208578060800151611211565b60208201515151515b6040516020016112219190612343565b60408051601f19818403018152918152815160209092019190912061020083015260c08201519082015114611257576000611264565b8061012001518160400151145b61127257806080015161127d565b602082810151515101515b60405160200161128d9190612343565b60408051601f19818403018152919052805160209091012061022082015260e08101516060820151146112c15760006112ce565b8061014001518160600151145b6112dc5780608001516112e8565b60208201515151604001515b6040516020016112f89190612343565b60408051601f19818403018152919052805160209182012061024083015260c0820151908201511461132b576000611338565b8061014001518160200151145b61134657806080015161134f565b60208201515151515b60405160200161135f9190612343565b60408051601f19818403018152919052805160209091012061026082015260c08101516060820151146113935760006113a0565b8061010001518160600151145b6113ae5780608001516113ba565b60208201515151604001515b6040516020016113ca9190612343565b60408051601f1981840301815291905280516020909101206102808201526101a08101516101808201511461140b57806101a00151816101c001511461140e565b60015b61142457806101a00151816101e0015114611427565b60015b61143d57806101a0015181610200015114611440565b60015b61145657806101a0015181610220015114611459565b60015b61146f57806101a0015181610240015114611472565b60015b61148857806101a001518161026001511461148b565b60015b6114a157806101a00151816102800151146114a4565b60015b1580156102a08301526114ba57600081526115c2565b6102c081018051606f60f81b9052516040516114d99190602001612343565b60408051601f1981840301815291905280516020909101206102e082018190526101808201511461151657806102e00151816101c0015114611519565b60015b61152f57806102e00151816101e0015114611532565b60015b61154857806102e001518161020001511461154b565b60015b61156157806102e0015181610220015114611564565b60015b61157a57806102e001518161024001511461157d565b60015b61159357806102e0015181610260015114611596565b60015b6115ac57806102e00151816102800151146115af565b60015b156115bd57600181526115c2565b600281525b600161032082015260005b60098110156116b2576020830151515181600981106115ee576115ee6121c4565b60209081029190910151610340840181905260405161160d9201612343565b60408051601f198184030181529190528051602090910120610360830152610380820151606f60f81b9052610320820151611649576000611698565b816101a0015182610360015114611695578161038001516040516020016116709190612343565b6040516020818303038152906040528051906020012060001c82610360015114611698565b60015b1515610320830152806116aa81612385565b9150506115cd565b50610320810151151561030082018190526116d15780516001146116d4565b60015b6116e0578051156116e3565b60015b1561192c57806102a00151156117005760006103e0820152611810565b61040081018051606f60f81b90525160405161171f9190602001612343565b60408051601f19818403018152919052805160209091012061042082018190526101808201511461175c57806104200151816101c001511461175f565b60015b61177557806104200151816101e0015114611778565b60015b61178e5780610420015181610200015114611791565b60015b6117a757806104200151816102200151146117aa565b60015b6117c057806104200151816102400151146117c3565b60015b6117d957806104200151816102600151146117dc565b60015b6117f257806104200151816102800151146117f5565b60015b156118075760016103e0820152611810565b60026103e08201525b6104408101805160009081905290516002602091820181905261046084018051600190819052905183015261048084018051919091525101526103e081015115611877576001816103e001511461186c5780610460015161187e565b80610440015161187e565b8061048001515b6104a082018190528251805191516020909101516001600160a01b03909216916108fc916118ab91611b02565b6040518115909202916000818181858888f193505050501580156118d3573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc611904836104a0015160200151856000015160200151611b02565b6040518115909202916000818181858888f193505050501580156104cd573d6000803e3d6000fd5b602080830151510151156119f657611954826020015160200151836000015160400151610e27565b6103a0820152611962611e2b565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925280850180515160808501525182015160a08401526103a084015160c084015260056000554360015590516119d291839101612433565b60405160208183030381529060405260029080519060200190610364929190611e80565b611a10826020015160200151836000015160400151610e27565b6103c0820152611a1e611e2b565b8251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093169284019290925280850180515160808501525182015160a08401526103c084015160c084015260076000554360015590516119d291839101612433565b611a96611f04565b60005b6009811015611ae257848160098110611ab457611ab46121c4565b6020020151828260098110611acb57611acb6121c4565b602002015280611ada81612385565b915050611a99565b5081818460098110611af657611af66121c4565b60200201529392505050565b6000811580611b2657508282611b188183612442565b9250611b249083612461565b145b610e745760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610e1e565b6040805160808101909152600060608201908152815260208101611b83611f04565b8152602001611b90611f39565b905290565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290815260208101611b90611f59565b508054611bd890612019565b6000825580601f10611be8575050565b601f016020900490600052602060002090810190611c069190611f6c565b50565b6040805160a08101825260006080820181815282526020808301829052835190810184529081529091820190611b83565b604051806104c0016040528060008152602001600081526020016000815260200160008152602001611c7760408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001611cbb60408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600015158152602001611d1d60408051602081019091526000815290565b8152600060208201819052604082018190526060820152608001611d4c60408051602081019091526000815290565b815260200160008152602001611d6d60408051602081019091526000815290565b8152602001600081526020016000815260200160008152602001611d9c60408051602081019091526000815290565b815260200160008152602001611dc5604051806040016040528060008152602001600081525090565b8152602001611de7604051806040016040528060008152602001600081525090565b8152602001611e09604051806040016040528060008152602001600081525090565b8152602001611b90604051806040016040528060008152602001600081525090565b6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001611e6c611f39565b815260200160008152602001600081525090565b828054611e8c90612019565b90600052602060002090601f016020900481019282611eae5760008555611ef4565b82601f10611ec757805160ff1916838001178555611ef4565b82800160010185558215611ef4579182015b82811115611ef4578251825591602001919060010190611ed9565b50611f00929150611f6c565b5090565b6040518061012001604052806009905b604080516020810190915260008152815260200190600190039081611f145790505090565b6040518060400160405280611f4c611f04565b8152600060209091015290565b6040518060600160405280611e6c611f39565b5b80821115611f005760008155600101611f6d565b600060408284031215611f9357600080fd5b50919050565b600060408284031215611fab57600080fd5b611fb58383611f81565b9392505050565b82815260006020604081840152835180604085015260005b81811015611ff057858101830151858201606001528201611fd4565b81811115612002576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061202d57607f821691505b60208210811415611f9357634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff811182821017156120875761208761204e565b60405290565b6040805190810167ffffffffffffffff811182821017156120875761208761204e565b604051610120810167ffffffffffffffff811182821017156120875761208761204e565b6040516020810167ffffffffffffffff811182821017156120875761208761204e565b80516001600160a01b038116811461210e57600080fd5b919050565b60006080828403121561212557600080fd5b6040516080810181811067ffffffffffffffff821117156121485761214861204e565b604052612154836120f7565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b8015158114611c0657600080fd5b6001600160a01b0383168152813560208083019190915260608201908301356121b48161217e565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b805161210e8161217e565b60008183036102008112156121f957600080fd5b612201612064565b915061220c836120f7565b8252602080840151818401526040840151604084015261222e606085016120f7565b6060840152610140607f198301121561224657600080fd5b61224e61208d565b915084609f85011261225f57600080fd5b6122676120b0565b806101a086018781111561227a57600080fd5b608087015b818110156122c75784818a0312156122975760008081fd5b61229f6120d4565b81516001600160f81b0319811681146122b85760008081fd5b8152845292840192840161227f565b508185526122d4816121da565b8486015250505050806080830152506101c082015160a08201526101e082015160c082015292915050565b6000610200828403121561231257600080fd5b611fb583836121e5565b6001600160a01b038316815260608101611fb5602083018480358252602090810135910152565b90516001600160f81b031916815260200190565b634e487b7160e01b600052601160045260246000fd5b6000821982111561238057612380612357565b500190565b600060001982141561239957612399612357565b5060010190565b80516001600160a01b039081168352602080830151818501526040808401519085015260608084015190921691840191909152608080830151805190929160009086015b600982101561240e578251516001600160f81b0319168152918301916001919091019083016123e4565b505050015115156101a083015260a08101516101c083015260c001516101e090910152565b6102008101610e7482846123a0565b600081600019048311821515161561245c5761245c612357565b500290565b60008261247e57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212201bab6d993642363394f2d76377356c519ea0d46e868eef26c1c4c969b08e043264736f6c634300080c0033`,
  BytecodeLen: 10294,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:126:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:130:62:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:173:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:137:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:143:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:149:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:156:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
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
