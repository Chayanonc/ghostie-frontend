// import React, { useState, useEffect } from "react";

// const CountdownTimer = () => {
//   const [timeRemaining, setTimeRemaining] = useState<number>();

//   useEffect(() => {
//     calculateTimeRemaining();
//     const intervalId = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining());
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, []);

//   const calculateTimeRemaining = () => {
//     const now = new Date();
//     const endOfDay = new Date("2024-01-31T23:59:59+07:00");
//     return Math.max(0, endOfDay.getTime() - now.getTime());
//   };

//   const formatTime = (milliseconds: number) => {
//     const seconds = Math.floor(milliseconds / 1000) % 60;
//     const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
//     const hours = Math.floor(milliseconds / (1000 * 60 * 60)) % 24;
//     const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

//     return (
//       <div>
//         <div
//           className="text-center font-bold py-3 px-8 mt-6  border-3 max-w-[35.00rem] border-slate-200  border-solid rounded-3xl"
//           style={{
//             backgroundImage:
//               "linear-gradient(111deg, rgba(255, 255, 255, 0.40) -8.95%, rgba(255, 255, 255, 0.01) 114%)",
//           }}
//         >
//           <div className="text-white text-base font-light mb-2 text-start">
//             Now is the time to stake, You can choose to Buy a Ticket for the
//             next round #1144 now!
//           </div>

//           <div className="flex justify-between items-center my-7">
//             <div
//               className="flex px-5 py-11 justify-center items-center bg-white  w-[80px] h-[80px]"
//               style={{
//                 borderRadius: "20px",
//                 padding: "25px 19px 25px 20px",
//                 border: " 3px solid rgba(0, 0, 0, 0.10)",
//                 background: "rgba(255, 255, 255, 0.90)",
//               }}
//             >
//               <div className="text-black text-2xl">{days}d</div>
//             </div>
//             <div className="text-white text-5xl px-3">:</div>
//             <div
//               className="flex px-5 py-11 justify-center items-center bg-white  w-[80px] h-[80px]"
//               style={{
//                 borderRadius: "20px",

//                 padding: "25px 19px 25px 20px",
//                 border: " 3px solid rgba(0, 0, 0, 0.10)",
//                 background: "rgba(255, 255, 255, 0.90)",
//               }}
//             >
//               <div className="text-black text-2xl">
//                 {hours.toString().padStart(2, "0")}h
//               </div>
//             </div>
//             <div className="text-white text-5xl px-3">:</div>
//             <div
//               className="flex px-5 py-11 justify-center items-center bg-white  w-[80px] h-[80px]"
//               style={{
//                 borderRadius: "20px",

//                 padding: "25px 19px 25px 20px",
//                 border: " 3px solid rgba(0, 0, 0, 0.10)",
//                 background: "rgba(255, 255, 255, 0.90)",
//               }}
//             >
//               <div className="text-black text-2xl">
//                 {minutes.toString().padStart(2, "0")}m
//               </div>
//             </div>
//             <div className="text-white text-5xl px-3">:</div>
//             <div
//               className="flex  justify-center items-center bg-white  w-[80px] h-[80px]"
//               style={{
//                 borderRadius: "20px",
//                 padding: "25px 19px 25px 20px",
//                 border: " 3px solid rgba(0, 0, 0, 0.10)",
//                 background: "rgba(255, 255, 255, 0.90)",
//               }}
//             >
//               <div className="text-black text-2xl">
//                 {seconds.toString().padStart(2, "0")}s
//               </div>
//             </div>
//           </div>

//           <div className="text-white text-sm font-light mb-2">
//             #1143 | Next round : Jan 15, 2024, 7:00 PM
//           </div>
//         </div>
//       </div>
//     );

//     // return `${days} days, ${hours.toString().padStart(2, "0")} hours, ${minutes
//     //   .toString()
//     //   .padStart(2, "0")} minutes, ${seconds
//     //   .toString()
//     //   .padStart(2, "0")} seconds`;
//   };

//   return timeRemaining ? <div>{formatTime(timeRemaining)}</div> : <div></div>;
// };

// export default CountdownTimer;
