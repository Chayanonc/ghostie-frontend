export interface IRows {
  round: string;
  Time_end: string;
  Ticket_Amount: string;
  Prize_pot: string;
  Your_Tickets: string;
  Winning_Number: string;
}
const rows = [
  {
    round: "144235",
    Time_end: "12/14/1023, 07:00 PM",
    Ticket_Amount: "0",
    Prize_pot: "0.00",
    Your_Tickets: "11111",
    Winning_Number: "124057",
  },
  {
    round: "144336",
    Time_end: "12/14/1023, 07:00 PM",
    Ticket_Amount: "0",
    Prize_pot: "0.00",
    Your_Tickets: "11111",
    Winning_Number: "124058",
  },
  {
    round: "144437",
    Time_end: "12/14/1023, 07:00 PM",
    Ticket_Amount: "0",
    Prize_pot: "0.00",
    Your_Tickets: "11111",
    Winning_Number: "424067",
  },
  {
    round: "144538",
    Time_end: "12/14/1023, 07:00 PM",
    Ticket_Amount: "0",
    Prize_pot: "0.00",
    Your_Tickets: "11111",
    Winning_Number: "674334",
  },
  {
    round: "144239",
    Time_end: "12/14/1023, 07:00 PM",
    Ticket_Amount: "0",
    Prize_pot: "0.00",
    Your_Tickets: "11111",
    Winning_Number: "124117",
  },
  {
    round: "144340",
    Time_end: "12/14/1023, 07:00 PM",
    Ticket_Amount: "0",
    Prize_pot: "0.00",
    Your_Tickets: "11111",
    Winning_Number: "284057",
  },
  {
    round: "144441",
    Time_end: "12/14/1023, 07:00 PM",
    Ticket_Amount: "0",
    Prize_pot: "0.00",
    Your_Tickets: "11111",
    Winning_Number: "124034",
  },
  {
    round: "144542",
    Time_end: "12/14/1023, 07:00 PM",
    Ticket_Amount: "0",
    Prize_pot: "0.00",
    Your_Tickets: "11111",
    Winning_Number: "529087",
  },
];

const columns = [
  {
    key: "round",
    label: "Round",
  },
  {
    key: "Time_end",
    label: "Time end",
  },
  {
    key: "Ticket_Amount",
    label: "Start Presale",
  },
  {
    key: "Prize_pot",
    label: "Prize Pot",
  },
  {
    key: "Your_Tickets",
    label: "Your Tickets",
  },
  {
    key: "Winning_Number",
    label: "Winning Number",
  },
];

const columnsSummarize = [
  {
    key: "totalPlayers",
    label: "Total players",
  },
  {
    key: "match_all",
    label: "Match all",
  },
  {
    key: "match5",
    label: "Match 5 (15%)",
  },
  {
    key: "match4",
    label: "Match 4 (10%)",
  },
  {
    key: "match3",
    label: "Match 3 (5%)",
  },
];

export { columns, rows, columnsSummarize };
