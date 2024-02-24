import { Alkalami } from "next/font/google";
const newFont = Alkalami({
  subsets: ["arabic"],
  weight: ["400"],
});
export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center text-5xl">
      <div className={`${newFont.className} antialiased`}>
        السلام على من اتبع الهدى
        <br /> <br />
        الصفحة الخاصة بإبراهيم خليل شحادة
      </div>
    </div>
  );
}
