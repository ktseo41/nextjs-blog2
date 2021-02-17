---
title : regex실습
created : 2020-09-19 12:02:13 +0900
modified : 2021-02-17 17:19:53 +0900
tag : 
---
const urlex1 = 'http://gangnam.sbsgameacademy.com/consult/game_CU_tuition2.asp?txtBoardSeq=7001&txtMenu=701&URLMater=%uC2DC%uAC04%uD45C%uC870%uD68C'

const matchedGroups = urlex1.match(/([A-z][\w]*):\/\/([\w]*:?[\w]*@)?([\w\.]*(:[\d]{1,5})?)([\/\w.]*)(\?(&?([\w%]*)=([\w%]*))*)?/);

`scheme: ${matchedGroups[1]}`;
`userinfo: ${matchedGroups[2]}`;
`host: ${matchedGroups[3]}`;
`port: ${matchedGroups[4]}`;
`path: ${matchedGroups[5]}`;
`querys: ${matchedGroups[6]}`;
`query1: ${matchedGroups[7]}`;
`querys: ${matchedGroups[8]}`;
`querys: ${matchedGroups[9]}`;
