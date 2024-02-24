type Props = {};

const HowToUse = (props: Props) => {
  return (
    <div className="relative flex w-fit flex-col items-center rounded-md border-[1px] p-3 pb-2">
      <h1 className="absolute -top-4 w-fit bg-white px-2 text-2xl font-bold">How to Use</h1>
      <div className="pt-2 text-sm font-medium">
        <p className="leading-8">① Patternを1つ選択 or アップロードしてください。</p>
        <p className="leading-6">
          ② generated panels listから気に入った配色のパネルを選択してください。
          <br />
          (選択した配色のパネルがselected panelsに表示されます。)
        </p>
        <p className="leading-8 line-through">
          ③ selected panelsの中でさらに気に入った配色のパネルは保存することもできます。
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
