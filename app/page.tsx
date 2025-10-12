import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { TodayInjectionCard } from "./components/todayInjectionCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-sky-50 to-white text-gray-800">
      <Header />
      <TodayInjectionCard />
      <Footer />
    </main>
  );
}
