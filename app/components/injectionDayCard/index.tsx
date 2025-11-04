"use client";

import { getInjectionSiteForDate } from "../../helpers/getInjectionSiteForDate";

type Props = {
  label?: string; // e.g., "Yesterday", "Tomorrow"
  offset: number; // -1 = yesterday, 1 = tomorrow
};

export const InjectionDayCard = ({ label, offset }: Props) => {
  // Calculate date based on offset
  const date = new Date();
  date.setDate(date.getDate() + offset);

  const formattedDate = date.toLocaleDateString("sv-SV", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const injectionSite = getInjectionSiteForDate(date);

  return (
    <div className="w-48 rounded-xl bg-white border border-sky-100 shadow-sm px-4 py-5 text-center flex flex-col items-center">
      {label && (
        <p className="text-sm font-medium text-sky-600 mb-1">{label}</p>
      )}

      <p className="text-sm text-gray-500">{formattedDate}</p>
      <p className="text-lg font-semibold text-gray-700 mt-2">
        {injectionSite}
      </p>
    </div>
  );
};
