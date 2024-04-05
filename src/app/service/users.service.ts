import { Injectable } from '@angular/core';
import { Users } from 'src/interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Users [] = [
    {
      "id": 1,
      "firstName": "Terry",
      "lastName": "Medhurst",
      "email": "atuny0@sohu.com",
      "image": "https://robohash.org/hicveldicta.png",
      "title": "Help Desk Operator"
    },
    {
      "id": 2,
      "firstName": "Sheldon",
      "lastName": "Quigley",
      "email": "hbingley1@plala.or.jp",
      "image": "https://robohash.org/doloremquesintcorrupti.png",
      "title": "Senior Cost Accountant"
    },
    {
      "id": 3,
      "firstName": "Terrill",
      "lastName": "Hills",
      "email": "rshawe2@51.la",
      "image": "https://robohash.org/consequunturautconsequatur.png",
      "title": "Mechanical Systems Engineer"
    },
    {
      "id": 4,
      "firstName": "Miles",
      "lastName": "Cummerata",
      "email": "yraigatt3@nature.com",
      "image": "https://robohash.org/facilisdignissimosdolore.png",
      "title": "Paralegal"
    },
    {
      "id": 5,
      "firstName": "Mavis",
      "lastName": "Schultz",
      "email": "kmeus4@upenn.edu",
      "image": "https://robohash.org/adverovelit.png",
      "title": "Web Developer I"
    },
    {
      "id": 6,
      "firstName": "Alison",
      "lastName": "Reichert",
      "email": "jtreleven5@nhs.uk",
      "image": "https://robohash.org/laboriosamfacilisrem.png",
      "title": "Civil Engineer"
    },
    {
      "id": 7,
      "firstName": "Oleta",
      "lastName": "Abbott",
      "email": "dpettegre6@columbia.edu",
      "image": "https://robohash.org/cupiditatererumquos.png",
      "title": "Sales Associate"
    },
    {
      "id": 8,
      "firstName": "Ewell",
      "lastName": "Mueller",
      "email": "ggude7@chron.com",
      "image": "https://robohash.org/quiaharumsapiente.png",
      "title": "Clinical Specialist"
    },
    {
      "id": 9,
      "firstName": "Demetrius",
      "lastName": "Corkery",
      "email": "nloiterton8@aol.com",
      "image": "https://robohash.org/excepturiiuremolestiae.png",
      "title": "Community Outreach Specialist"
    },
    {
      "id": 10,
      "firstName": "Eleanora",
      "lastName": "Price",
      "email": "umcgourty9@jalbum.net",
      "image": "https://robohash.org/aliquamcumqueiure.png",
      "title": "Senior Sales Associate"
    },
    {
      "id": 11,
      "firstName": "Marcel",
      "lastName": "Jones",
      "email": "acharlota@liveinternet.ru",
      "image": "https://robohash.org/impeditautest.png",
      "title": "Account Executive"
    },
    {
      "id": 12,
      "firstName": "Assunta",
      "lastName": "Rath",
      "email": "rhallawellb@dropbox.com",
      "image": "https://robohash.org/namquaerataut.png",
      "title": "Developer II"
    },
    {
      "id": 13,
      "firstName": "Trace",
      "lastName": "Douglas",
      "email": "lgribbinc@posterous.com",
      "image": "https://robohash.org/voluptatemsintnulla.png",
      "title": "Sales Associate"
    },
    {
      "id": 14,
      "firstName": "Enoch",
      "lastName": "Lynch",
      "email": "mturleyd@tumblr.com",
      "image": "https://robohash.org/quisequienim.png",
      "title": "Professor"
    },
    {
      "id": 15,
      "firstName": "Jeanne",
      "lastName": "Halvorson",
      "email": "kminchelle@qq.com",
      "image": "https://robohash.org/autquiaut.png",
      "title": "Software Test Engineer IV"
    },
    {
      "id": 16,
      "firstName": "Trycia",
      "lastName": "Fadel",
      "email": "dpierrof@vimeo.com",
      "image": "https://robohash.org/porronumquamid.png",
      "title": "Geological Engineer"
    },
    {
      "id": 17,
      "firstName": "Bradford",
      "lastName": "Prohaska",
      "email": "vcholdcroftg@ucoz.com",
      "image": "https://robohash.org/accusantiumvoluptateseos.png",
      "title": "Operator"
    },
    {
      "id": 18,
      "firstName": "Arely",
      "lastName": "Skiles",
      "email": "sberminghamh@chron.com",
      "image": "https://robohash.org/nihilharumqui.png",
      "title": "VP Accounting"
    },
    {
      "id": 19,
      "firstName": "Gust",
      "lastName": "Purdy",
      "email": "bleveragei@so-net.ne.jp",
      "image": "https://robohash.org/delenitipraesentiumvoluptatum.png",
      "title": "Financial Analyst"
    },
    {
      "id": 20,
      "firstName": "Lenna",
      "lastName": "Renner",
      "email": "aeatockj@psu.edu",
      "image": "https://robohash.org/ipsumutofficiis.png",
      "title": "Geologist III"
    },
    {
      "id": 21,
      "firstName": "Doyle",
      "lastName": "Ernser",
      "email": "ckensleyk@pen.io",
      "image": "https://robohash.org/providenttemporadelectus.png",
      "title": "Programmer Analyst I"
    },
    {
      "id": 22,
      "firstName": "Tressa",
      "lastName": "Weber",
      "email": "froachel@howstuffworks.com",
      "image": "https://robohash.org/temporarecusandaeet.png",
      "title": "Help Desk Technician"
    },
    {
      "id": 23,
      "firstName": "Bunni",
      "lastName": "Bevington",
      "email": "gbohanskym@naver.com",
      "image": "https://robohash.org/veniamrationeesse.png",
      "title": "Operator"
    },
    {
      "id": 24,
      "firstName": "Lanny",
      "lastName": "Sturman",
      "email": "jvellon@washington.edu",
      "image": "https://robohash.org/omnisdoloribusquia.png",
      "title": "Internal Auditor"
    },
    {
      "id": 25,
      "firstName": "Brigit",
      "lastName": "Willmot",
      "email": "dmathero@phpbb.com",
      "image": "https://robohash.org/inullamrerum.png",
      "title": "Marketing Manager"
    }
  ]      


  constructor() { }
}
