// "use client";

// import { useRecoilValue } from "recoil";
// import { baseColorState } from "@/lib/atoms/base-color-state";
// import { patternState } from "@/lib/atoms/pattern-state";
// import SampleDesign from "../selectPattern/Defaultpatterns/SampleDesign";
// import { secondColorState } from "@/lib/atoms/second-color-state";

// type Props = {};

// const BaseColorPanel = (props: Props) => {
//   const baseColor = useRecoilValue(baseColorState);
//   const pattern = useRecoilValue(patternState);
//   const secondColor = useRecoilValue(secondColorState);

//   const selectedPattern = (pattern: string) => {
//     switch (pattern) {
//       case "Simple Dot":
//         return (
//           //Simple Dotが選択されている場合、Simple Dotデザイのの描画＆＆パネル枠線の描画なし。
//           <div
//             className="relative h-[400px] w-[400px] "
//             style={{ backgroundColor: `${baseColor}` }}
//           >
//             <SampleDesign width={400} height={400} secondColor={"#000000"} />
//           </div>
//         );
//         break;
//       default:
//         return (
//           // patternが選択されていない場合、「patternを選択してください」の表示＆パネル枠線を描画。
//           <div
//             className="relative h-[400px] w-[400px] border-[1px]"
//             style={{ backgroundColor: `${baseColor}` }}
//           >
//             <p className="absolute top-1/2 -translate-y-1/2 translate-x-1/2">
//               patternを選択してください
//             </p>
//           </div>
//         );
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col">
//         {selectedPattern(pattern)}
//         <p className="pr-11 text-right text-sm">
//           pattern:{pattern} / baseColor:{baseColor}
//         </p>
//       </div>
//     </>
//   );
// };

// export default BaseColorPanel;
