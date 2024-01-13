// "use client";

// import { redColors } from "@/lib/colorData/unUsed/baseColorList";
// import { ChangeEvent } from "react";
// import { useRecoilState } from "recoil";
// import { baseColorState } from "@/lib/atoms/base-color-state";

// type Props = {};

// const RedColorsList = (props: Props) => {
//   const [baseColor, setBaseColor] = useRecoilState(baseColorState);

//   const onChecked = (event: ChangeEvent<HTMLInputElement>) => {
//     if (event.target.checked === true) {
//       setBaseColor(event.target.value);
//     }
//   };

//   return (
//     <>
//       {redColors.map((color, index) => (
//         <div className="relative flex items-center p-2" key={index}>
//           <input
//             type="radio"
//             id={`base-${color}`}
//             name="baseColor"
//             value={color}
//             className="scale-125 cursor-pointer accent-black"
//             onChange={onChecked}
//           />
//           <label htmlFor={`base-${color}`} className="pl-3 hover:cursor-pointer">
//             {color}
//           </label>
//           <div
//             className="absolute right-6 h-[30px] w-[30px] border-[1px]"
//             // tailwindのbg-${color}だと読み取られないので、styleで効かせる
//             // https://stackoverflow.com/questions/72481680/tailwinds-background-color-is-not-being-applied-when-added-dynamically
//             style={{ backgroundColor: `${color}` }}
//           ></div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default RedColorsList;
