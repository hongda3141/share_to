// import Config from "../config";
const goto = {
  urls: {
    // watcherTestnet: "https://testnet.forcebridge.com/api/force-bridge/api/v1", 
    // watcherBase: "https://forcebridge.com/api/force-bridge/api/v1", 
    // watcherLocal: "http://127.0.0.1:3060/force-bridge/api/v1",
    watcherLocal: "https://www.tianqiapi.com/api/?version=v1",
    // ckbTestnet: "https://testnet-rpc.forcebridge.com/", 
    // ckbMainnet: "http://mainnet-rpc.force-bridge.com/"
  },
};
export default goto;





// import Config from "../config";

// const goto = {
//   pageIds: {
//     btnId: "#btn", testTypeId: "#testType", param1Id: "#param1", param2Id: "#param2", param3Id: "#param3", param4Id: "#param4", param5Id: "#param5", param6Id: "#param6", param7Id: "#param7", param8Id: "#param8",
//   },
//   urls: {
//     watcherTestnet: "https://testnet.forcebridge.com/api/force-bridge/api/v1", 
//     watcherBase: "https://forcebridge.com/api/force-bridge/api/v1", 
//     watcherLocal: "http://127.0.0.1:3060/force-bridge/api/v1",
//     ckbTestnet: "https://testnet-rpc.forcebridge.com/", 
//     ckbMainnet: "http://mainnet-rpc.force-bridge.com/"
//   },

//   longTimeOut: 30000,
//   paraErrorRes: {"jsonrpc":"2.0","id":expect.anything(),"error":{"code":0,"message":expect.anything(),}},

//   async goto(currentpage, pageName) {
//     try {
//       await currentpage.goto(`${Config.getIns().httpServer}/${pageName}`);
//       // await currentpage.goto(`${pageName}`);
//     } catch (err) {
//       // eslint-disable-next-line no-console
//       console.log(err);
//       throw err;
//     }
//   },

//   async check(currentpage, expectedValue) {
//     await currentpage.click(goto.pageIds.btnId);
//     await currentpage.waitForFunction(() => document.getElementById("ret").innerText !== ""); // ,30000
//     // await currentpage.waitForFunction(() => document.getElementById("ret").includes("result"));
//     await expect(currentpage.$eval("#ret", (e) => e.innerText)).resolves.toMatch(expectedValue);
//   },
//   async checkObject(currentpage, expectedValue) {
//     await currentpage.click(goto.pageIds.btnId);
//     await currentpage.waitForFunction(() => document.getElementById("ret").innerText !== ""); 
//     await expect(currentpage.$eval("#ret", (e) => JSON.parse(e.innerText))).resolves.toMatchObject(expectedValue);
//   },
//   // get the  value
//   async value(currentpage) {
//     await currentpage.click(goto.pageIds.btnId);
//     await currentpage.waitForFunction(() => document.getElementById("ret").innerText !== "");
//     return currentpage.$eval("#ret", (e) => e.innerText);
//   },
// };
// export default goto;
