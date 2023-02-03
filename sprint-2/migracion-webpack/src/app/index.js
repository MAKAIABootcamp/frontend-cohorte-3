import { renderCards } from "./modules/ui";
import './../assets/styles/index.scss';
import { DateTime, Duration, Interval } from "luxon";

renderCards();

//Puebas con Luxon
const date = DateTime.now();
console.log(date.c);

const secondTest = DateTime.now().setZone("system");
console.log(secondTest);

const otherTest = DateTime.now().toFormat("MMMM dd, yyyy", { locale: "es-ES" });
console.log(otherTest);

const dateStart = "03/01/2023"
const dateEnd = "03/02/2023"

const relativeMonth = Duration.fromISO(dateStart).toObject();
console.log(relativeMonth);

const interval = Interval.fromDateTimes(dateStart, dateEnd);
console.log(interval);