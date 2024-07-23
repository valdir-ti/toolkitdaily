import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header"

export default function Home() {
  return (
    <main className="h-[100dvh]">
      <Header/>
        <div className="mt-[80px]">
          <div className="h-[180px] bg-rose-300 mr-12 ml-12 rounded-xl rounded-t-none">
            Banner Tools Project
          </div>
          <div className="flex gap-8">
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      <Footer />
    </main>
  );
}
