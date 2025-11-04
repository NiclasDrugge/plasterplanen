import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { InjectionDayCard } from "./components/injectionDayCard";
import { TodayInjectionCard } from "./components/todayInjectionCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-sky-50 to-white text-gray-800">
      <Header />

      <section className="flex flex-1 flex-col gap-6 items-center justify-center">
        <div className="flex items-start gap-4">
          <InjectionDayCard label="Igår" offset={-1} />
          <TodayInjectionCard />
          <InjectionDayCard label="Imorgon" offset={1} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
