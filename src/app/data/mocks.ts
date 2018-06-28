import { User } from "../model/user.model";

export const USER_DATA : User[] = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1964"),
    income: 50000,
    isWorking: true,
    company: "Microsoft",
    image: 'assets/images/bill.jpg',
    vote: 120
  },{
    firstName: "Steve",
    lastName: "Jobs",
    dob: new Date("Dec 1, 1964"),
    income: 0,
    isWorking: false,
    company: "Apple",
    image: 'assets/images/steve.png',
    vote: 160
  },{
    firstName: "Tim B.",
    lastName: "Lee",
    dob: new Date("Jan 2, 1964"),
    income: 40000,
    isWorking: true,
    company: "World Wide Web",
    image: 'assets/images/tim.jpg',
    vote: 200
  }]