import Card from "./components/card";
import Footer from "./components/footer";
import Header from "./components/header"
import { ImBriefcase } from "react-icons/im";

export default function Home() {
  return (
    <main className="h-[100dvh]">
      <Header/>
        <div className="mr-12 ml-12">
          <div className="h-[460px] bg-rose-100 rounded-xl rounded-t-none flex p-12">
            <div className="w-[50%]">
              <h3 className="text-[42px] font-extrabold mt-6">
                Simplify your daily tasks with our versatility tools
              </h3>
              <h6 className="font-extralight mt-6">
                Access various tools to streamline your tasks and enhance productivity.
              </h6>
              <div className="gap-2 flex mt-6">
                <button className="bg-red-100 w-32 h-8 rounded-md">Explore</button>
                <button className="bg-red-100 w-32 h-8 rounded-md">Try now</button>
              </div>
            </div>
            <div className="w-[50%] mt-6 flex justify-end items-center mr-16 mb-12">
              <ImBriefcase size={200}/>
            </div>
          </div>
          <div className="flex justify-between gap-6 mt-4 w-full">
            <Card title="Active users count" subtitle="1M+" icon="1" />
            <Card title="Tools available" subtitle="5TB+" icon="2" />
            <Card title="Data processed" subtitle="6M+" icon="3" />
            <Card title="Get start for free" subtitle="Discover" icon="4" />
          </div>
        </div>
      <Footer />
    </main>
  );
}
