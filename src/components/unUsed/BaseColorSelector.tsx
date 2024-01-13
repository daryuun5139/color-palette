// "use client";

// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { useRecoilState } from "recoil";
// import { baseColorState } from "@/lib/atoms/base-color-state";
// import RedColorsList from "./baseColorList/RedColorsList";
// import BlueColorsList from "./baseColorList/BlueColorsList";
// import YellowColorsList from "./baseColorList/YellowColorList";
// import GreenColorsList from "./baseColorList/GreenColorsList";

// type Props = {};

// const BaseColorSelector = (props: Props) => {
//   const [baseColor, setBaseColor] = useRecoilState(baseColorState);

//   //BaseColorリセットボタン
//   const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     setBaseColor("");
//   };

//   //checkboxのcheckedを重複させない方法
//   // useEffect(() => {
//   //   //https://clicklyquickly.com/2022/04/20/javascript-checkbox-one/
//   //   const checkGet = document.getElementsByName("baseColor") as NodeListOf<HTMLInputElement>;
//   //   checkGet.forEach((check: HTMLInputElement) => {
//   //     check.addEventListener("click", () => {
//   //       if (check.checked) {
//   //         checkGet.forEach((allChecks) => {
//   //           allChecks.checked = false;
//   //         });
//   //         check.checked = true;
//   //         setBaseColor(check.value);
//   //       } else {
//   //         setBaseColor("");
//   //       }
//   //     });
//   //   });
//   // }, [baseColor]);

//   return (
//     <div>
//       <div className="flex items-center gap-3 pb-1">
//         <h2 className="text-xl font-bold">Base Color</h2>
//         <p className="text-sm">現在のBase color : {baseColor}</p>
//       </div>
//       <Tabs defaultValue="red" className="h-[330px] w-[500px] rounded-md border-[1px]">
//         <TabsList>
//           <TabsTrigger value="red">red</TabsTrigger>
//           <TabsTrigger value="blue">blue</TabsTrigger>
//           <TabsTrigger value="yellow">yellow</TabsTrigger>
//           <TabsTrigger value="green">green</TabsTrigger>
//           <TabsTrigger value="orange">orange</TabsTrigger>
//         </TabsList>
//         {/* 赤系統タブ--------------------------------------------------------------- */}
//         <TabsContent value="red" className="h-[260px] w-full px-2 pb-2 text-sm">
//           こちらからベースカラーを選択してください
//           <ScrollArea className="h-full w-full pt-1">
//             <div className="grid grid-cols-3">
//               <RedColorsList />
//             </div>
//             <ScrollBar />
//           </ScrollArea>
//         </TabsContent>
//         {/* 青系統タブ--------------------------------------------------------------- */}
//         <TabsContent value="blue" className="h-[260px] w-full px-2 pb-2 text-sm">
//           こちらからベースカラーを選択してください
//           <ScrollArea className="h-full w-full pt-1">
//             <div className="grid grid-cols-3">
//               <BlueColorsList />
//             </div>
//             <ScrollBar />
//           </ScrollArea>
//         </TabsContent>
//         {/* 黃系統タブ--------------------------------------------------------------- */}
//         <TabsContent value="yellow" className="h-[260px] w-full px-2 pb-2 text-sm">
//           こちらからベースカラーを選択してください
//           <ScrollArea className="h-full w-full pt-1">
//             <div className="grid grid-cols-3">
//               <YellowColorsList />
//             </div>
//             <ScrollBar />
//           </ScrollArea>
//         </TabsContent>
//         {/* 緑系統タブ--------------------------------------------------------------- */}
//         <TabsContent value="green" className="h-[260px] w-full px-2 pb-2 text-sm">
//           こちらからベースカラーを選択してください
//           <ScrollArea className="h-full w-full pt-1">
//             <div className="grid grid-cols-3">
//               <GreenColorsList />
//             </div>
//             <ScrollBar />
//           </ScrollArea>
//         </TabsContent>
//         {/* オレンジ系統タブ--------------------------------------------------------------- */}
//         <TabsContent value="orange" className="h-[260px] w-full px-2 pb-2 text-sm">
//           こちらからベースカラーを選択してください
//         </TabsContent>
//       </Tabs>
//       <div className="flex justify-end pt-2">
//         <Button variant="outline" className="text-sm font-semibold" onClick={onClick}>
//           BaseColorをリセット
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BaseColorSelector;
