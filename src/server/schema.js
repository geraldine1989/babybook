const datas = [
  {
    email: "toto",
    password: String,
    passwordNanny: String,
    baby: [
      {
        id: String,
        firstname: String,
        lastname: String,
        birthdate: String,
        health: [
          {
            medics: [
              {
                id: String,
                name: String,
              },
            ],
            vaccins: [
              {
                id: String,
                name: String,
              },
            ],
            allergies: [
              {
                id: String,
                name: String,
              },
            ],
          }
        ],
        phoneDatas: [
          {
            id: String,
            phonename: String,
            phonenumber: String,
          },
        ],
        myDay: 
          {
            itemList: [
              {
                id: String,
                tododone: Boolean,
                name: String,
                hour: String,
                indic: String,
                note: String,
              },
            ],
            nannyNote: String
          },
        contacts: [
          {
            id: String,
            name: String,
            email: String,
          },
        ],
      },
    ],
  },
]