import { getMaxListeners } from "cluster";

// users :
let parents = {
  id: "parents",
  parents: [
    {
      id: "1",
      email:"toto@gmail.com",
      password: "password",
      passwordNanny: "otherPass",
      firstName: "Toto",
      lastName: "Nomdefamille",
      mobileMom: "0612345678",
      mobileDad: "0623456789",
      phoneMom: "0123456789",
      phoneDad: "0134567890",
      baby: [
        {
          firstName: "Tototounet",
          lastName: "FamilleToto",
          birthDate: "01-02-2018",
          health: [
            {
              medics: [
                {
                  name: "doliprane",
                  qty: "1",
                },
                {
                  name: "suppo",
                  qty: "12",
                },
              ],
              vaccins: [
                {
                  name: "vaccin machin",
                  date: "12/02/2018",
                },
                {
                  name: "vaccin bidule",
                  date: "13/02/2018",
                },
              ],
              allergies: [
                {
                  name: "cacahuètes",
                },
                {
                  name: "chat",
                },
              ],
            }
          ],
          myDay: [
            {
              date: Date(),
              note: "Ceci est une note des parents pour la journée.",
              itemList: [
                {
                  name: "Biberon",
                  hour: "08:00",
                  indic: "Mettre 3 dosettes avec 250 cl de lait",
                  note: "Tototounet a tout bu !!!",
                },
                {
                  name: "Sieste",
                  hour: "10:00",
                  indic: "Dort avec son doudou girafe",
                  note: "Tototounet a dormi 3h !",
                },
              ],
              nannyNote: "Très bonne journée. Peinture sur les murs. S'est fait les dents sur un pied de table."
            },
          ],
          contacts: [
            {
              firstName: "Mamie",
              lastName: "",
              phone: "0123456789",
            },
            {
              firstName: "Nanny",
              lastName: "Dupont",
              phone:"0612345678",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      email:"tata@gmail.com",
      password: "password",
      passwordNanny: "otherPass",
      firstName: "Tata",
      lastName: "Ratata",
      mobileMom: "0612345678",
      mobileDad: "0623456789",
      phoneMom: "0123456789",
      phoneDad: "0134567890",
      baby: [
        {
          firstName: "Victor",
          lastName: "Hugo",
          birthDate: "26-02-1802",
          health: [
            {
              medics: [
                {
                  name: "doliprane",
                  qty: "1",
                },
                {
                  name: "suppo",
                  qty: "12",
                },
              ],
              vaccins: [
                {
                  name: "vaccin machin",
                  date: "12/02/2018",
                },
                {
                  name: "vaccin bidule",
                  date: "13/02/2018",
                },
              ],
              allergies: [
                {
                  name: "cacahuètes",
                },
                {
                  name: "chat",
                },
              ],
            }
          ],
          myDay: [
            {
              date: Date(),
              note: "Ceci est une note des parents pour la journée.",
              itemList: [
                {
                  name: "Biberon",
                  hour: "08:00",
                  indic: "Mettre 3 dosettes avec 250 cl de lait",
                  note: "Tototounet a tout bu !!!",
                },
                {
                  name: "Sieste",
                  hour: "10:00",
                  indic: "Dort avec son doudou girafe",
                  note: "Tototounet a dormi 3h !",
                },
              ],
              nannyNote: "Très bonne journée. Peinture sur les murs. S'est fait les dents sur un pied de table."
            },
          ],
          contacts: [
            {
              firstName: "Mamie",
              lastName: "Hugo",
              phone: "0123456789",
            },
            {
              firstName: "Jean",
              lastName: "Valjean",
              phone:"0612345678",
            },
          ],
        },
      ],
    },
  ],
  
}

// emails inscrits :
let emails = [
  "toto@gmail.com",
  "tata@gmail.com",
],
