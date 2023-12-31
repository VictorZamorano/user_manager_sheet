// "use strict";
// var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
//     if (k2 === undefined) k2 = k;
//     var desc = Object.getOwnPropertyDescriptor(m, k);
//     if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
//       desc = { enumerable: true, get: function() { return m[k]; } };
//     }
//     Object.defineProperty(o, k2, desc);
// }) : (function(o, m, k, k2) {
//     if (k2 === undefined) k2 = k;
//     o[k2] = m[k];
// }));
// var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
//     Object.defineProperty(o, "default", { enumerable: true, value: v });
// }) : function(o, v) {
//     o["default"] = v;
// });
// var __importStar = (this && this.__importStar) || function (mod) {
//     if (mod && mod.__esModule) return mod;
//     var result = {};
//     if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
//     __setModuleDefault(result, mod);
//     return result;
// };
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// exports.pool = void 0;
// const dotenv = __importStar(require("dotenv"));
// const pg_1 = __importDefault(require("pg"));
// dotenv.config();
// const { Pool } = pg_1.default;
// const connectionString = process.env.PG_URL;
// exports.pool = connectionString
//     ? new Pool({
//         connectionString,
//         ssl: {
//             rejectUnauthorized: false
//         },
//         allowExitOnIdle: true
//     })
//     :
//         new Pool({
//             allowExitOnIdle: true,
//         });
// // export const pool = new Pool({
// // 	allowExitOnIdle: true,
// // });
// try {
//     await exports.pool.query("SELECT NOW()");
//     console.log("Database connected");
// }
// catch (error) {
//     console.log(error);
// }
