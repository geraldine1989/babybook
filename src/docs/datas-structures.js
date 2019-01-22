// users :
let parents = {
  id: "parents",
  allParents: [
    {
      id: "1",
      email:"toto@gmail.com",
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
          medics: [
            {
              name: "doliprane",
              qty: "1",
            },
          ],
          vaccins: [
            {
              name: "vaccin machin",
              date: "12/02/2018",
            },
          ],
          allergies: [
            {
              name: "cacahuètes",
            },
          ],
          myDay: [
            {
              date: Date(),
              note: "Ceci est une note des parents pour la journée.",
              item1: [
                {
                  name: "Biberon",
                  hour: "08:00",
                  indic: "Mettre 3 dossettes avec 250 cl de lait",
                  note: "Tototounet a tout bu !!!",
                },
              ],
              item2: [
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
        },
      ],
    },
  ],
}

// babies :
let babies = {
  id: "babies",
  allBabies: [

  ],
}
