import { injectionSites } from "../config/injectionSites";
import { startDate } from "../config/dates.";

export function getInjectionSiteForDate(date: Date): string {
  // Calculate number of days since start date
  const diffTime = date.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Use modulo to get site index
  const index =
    ((diffDays % injectionSites.length) + injectionSites.length) %
    injectionSites.length;

  return injectionSites[index];
}
