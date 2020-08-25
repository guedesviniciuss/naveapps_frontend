import { parseISO, format } from 'date-fns';

function DateConverter(date: string): string {
  const parsedDate = parseISO(date);
  const formatedDate = format(parsedDate, "'ás' hh:mm 'de' dd/mm/yy");

  return formatedDate;
}

export default DateConverter;
