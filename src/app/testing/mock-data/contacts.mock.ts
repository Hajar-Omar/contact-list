import { IContactRes } from "src/app/core/models/contact";

export const contactsMock: IContactRes = {
  _meta: {
    success: true,
    code: 200,
    message: "OK. Everything worked as expected.",
    totalCount: 1829,
    pageCount: 92,
    currentPage: 1,
    perPage: 20,
    rateLimit: {
      limit: 30,
      remaining: 29,
      reset: 2,
    },
  },
  result: [
    {
      id: "11887",
      first_name: "Roy",
      last_name: "Huels",
      gender: "male",
      dob: "2003-03-03",
      email: "aframi@example.com",
      phone: "+1-764-384-3788",
      website: "http://abernathy.com/",
      address: "8257 Meredith Loop\nNorth Dolly, HI 27271-7149",
      status: "inactive",
      _links: {
        self: {
          href: "https://gorest.co.in/public-api/users/11887",
        },
        edit: {
          href: "https://gorest.co.in/public-api/users/11887",
        },
        avatar: {
          href: "https://lorempixel.com/250/250/people/?94560",
        },
      },
    },
  ],
};
