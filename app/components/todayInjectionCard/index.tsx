"use client";

import { getInjectionSiteForDate } from "../../helpers/getInjectionSiteForDate";

export const TodayInjectionCard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("sv-SV", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const injectionSite = getInjectionSiteForDate(today);

  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md w-full rounded-2xl bg-white p-8 shadow-lg border border-sky-100">
        <h2 className="text-lg text-gray-500 mb-2">{formattedDate}</h2>
        <h3 className="text-3xl font-bold text-sky-700 mb-4">
          💉 Dagens infusionsställe
        </h3>
        <p className="text-xl font-medium text-gray-700">{injectionSite}</p>
        <p className="mt-4 text-sm text-gray-500">
          Kom ihåg att rengöra området innan infusion
        </p>
      </div>
    </section>
  );
};
