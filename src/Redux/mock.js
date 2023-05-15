const mainMeal = [
  {
    id: 1,
    name: "Jollof Rice",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "400",
  },
  {
    id: 2,
    name: "Beans",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "400",
  },
  {
    id: 3,
    name: "Chicken",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "400",
  },
  {
    id: 4,
    name: "Semo",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "400",
  },
  {
    id: 5,
    name: "Fried Rice",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "400",
  },
];

const sideMeal = [
  {
    id: 1,
    name: "Efo riro",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "400",
  },
  {
    id: 2,
    name: "Beans",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "400",
  },
  {
    id: 3,
    name: "Moin moin",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    price: "400",
  },
  {
    id: 4,
    name: "Egusi Soup",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    price: "400",
  },
  {
    id: 5,
    name: "Plantain",
    quantity: 1,
    image:
      "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    price: "400",
  },
];

const suggestedMeal = [
  {
    name: "Rice & Beans",
    image:
      "https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullList: [
      {
        name: "White Rice",
        quantity: 3,
        unitprice: "300",
        price: "1200",
      },
      { name: "Beans", quantity: 2, unitprice: "150", price: "300" },
      { name: "Plantain", quantity: 1, unitprice: "300", price: "300" },
      { name: "Chicken", quantity: 3, unitprice: "300", price: "900" },
    ],
    vendor: "Food Republic",
    overallPrice: "3000",
    type: "suggested",
  },

  {
    name: "Amala & Ewedu",
    image:
      "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullList: [
      { name: "Amala", quantity: 3, unitprice: "300", price: "1200" },
      { name: "Ewedu", quantity: 2, unitprice: "" },
      {
        name: "Goat Meat",
        quantity: 3,
        unitprice: "300",
        price: "4000",
      },
    ],
    vendor: "Unique Kitchen",
    overallPrice: "6000",
    type: "suggested",
  },
  {
    name: "Pounded Yam & Egusi",
    image:
      "https://images.pexels.com/photos/2095569/pexels-photo-2095569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    fullList: [
      {
        name: "Pounded Yam",
        quantity: 3,
        unitprice: "300",
        price: "1200",
      },
      { name: "Egusi", quantity: 2, unitprice: "" },
      { name: "Chicken", quantity: 3, unitprice: "300", price: "1200" },
      { name: "Beef", quantity: 4, unitprice: "300", price: "1400" },
    ],
    vendor: "Delight Kitchen",
    overallPrice: "5000",
    type: "suggested",
  },
];

const featuredVendors = [
  {
    id: 1,
    name: "Food Republic",
    image:
      "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deliveryFee: "200",
    dishes: "Nigerian Dishes",
    close: "9pm",
    open: "10am",
    type: "vendors",
    mainMeal: [
      {
        id: 1,
        name: "Jollof Rice",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 2,
        name: "Beans",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 3,
        name: "Chicken",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 4,
        name: "Semo",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 5,
        name: "Fried Rice",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
    ],
    sideMeal: [
      {
        id: 1,
        name: "Efo riro",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1600",
        unitprice: "400",
      },
      {
        id: 2,
        name: "Beans",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1600",
        unitprice: "400",
      },
      {
        id: 3,
        name: "Moin moin",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1600",

        unitprice: "400",
      },
      {
        id: 4,
        name: "Egusi Soup",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1600",

        unitprice: "400",
      },
      {
        id: 5,
        name: "Plantain",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1600",

        unitprice: "400",
      },
    ],
    other: [
      {
        name: "Rice & Beans",
        image:
          "https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "3000",
      },

      {
        name: "Amala & Ewedu",
        image:
          "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "6000",
      },
      {
        name: "Pounded Yam & Egusi",
        image:
          "https://images.pexels.com/photos/2095569/pexels-photo-2095569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "5000",
      },
    ],
  },
  {
    id: 2,
    name: "Unique Kitchen",
    image:
      "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deliveryFee: "100",
    dishes: "Ewa Joint",
    close: "9pm",
    open: "10am",
    type: "vendors",
    mainMeal: [
      {
        id: 1,
        name: "Jollof Rice",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 2,
        name: "Beans",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 3,
        name: "Chicken",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 4,
        name: "Semo",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 5,
        name: "Fried Rice",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
    ],
    sideMeal: [
      {
        id: 1,
        name: "Efo riro",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 2,
        name: "Beans",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 3,
        name: "Moin moin",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "400",
      },
      {
        id: 4,
        name: "Egusi Soup",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "400",
      },
      {
        id: 5,
        name: "Plantain",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/2365940/pexels-photo-2365940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "400",
      },
    ],
    other: [
      {
        name: "Rice & Beans",
        image:
          "https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "3000",
      },

      {
        name: "Amala & Ewedu",
        image:
          "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "6000",
      },
      {
        name: "Pounded Yam & Egusi",
        image:
          "https://images.pexels.com/photos/2095569/pexels-photo-2095569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "5000",
      },
    ],
  },
  {
    id: 3,
    name: "Delight Kitchen",
    image:
      "https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    deliveryFee: "200",
    dishes: "Local Dishes",
    close: "8pm",
    open: "8am",
    type: "vendors",
    mainMeal: [
      {
        id: 1,
        name: "Jollof Rice",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 2,
        name: "Beans",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 3,
        name: "Chicken",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 4,
        name: "Semo",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 5,
        name: "Fried Rice",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
    ],
    sideMeal: [
      {
        id: 1,
        name: "Efo riro",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 2,
        name: "Beans",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        unitprice: "400",
      },
      {
        id: 3,
        name: "Moin moin",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "400",
      },
      {
        id: 4,
        name: "Egusi Soup",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210747/pexels-photo-6210747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "400",
      },
      {
        id: 5,
        name: "Plantain",
        quantity: 1,
        image:
          "https://images.pexels.com/photos/6210959/pexels-photo-6210959.jpeg?auto=compress&cs=tinysrgb&w=1600",

        unitprice: "400",
      },
    ],
    other: [
      {
        name: "Rice & Beans",
        image:
          "https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "3000",
      },

      {
        name: "Amala & Ewedu",
        image:
          "https://images.pexels.com/photos/2751755/pexels-photo-2751755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "6000",
      },
      {
        name: "Pounded Yam & Egusi",
        image:
          "https://images.pexels.com/photos/2095569/pexels-photo-2095569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        unitprice: "5000",
      },
    ],
  },
];

const previousOrders = [
  {
    image:
      "https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullList: [
      { name: "Amala", quantity: 3, unitprice: "300", price: "1200" },
      { name: "Ewedu", quantity: 2, unitprice: "" },
      {
        name: "Goat Meat",
        quantity: 3,
        unitprice: "300",
        price: "4000",
      },
    ],
    overallPrice: "5000",
    type: "previousOrders",
    vendor: {
      name: "Food Republic",
      image:
        "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    address: "No 24, oritsha street",
    date: "22, march 2022",
  },
  {
    image:
      "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullList: [
      {
        name: "Pounded Yam",
        quantity: 3,
        unitprice: "300",
        price: "1200",
      },
      { name: "Egusi", quantity: 2, unitprice: "" },
      { name: "Chicken", quantity: 3, unitprice: "300", price: "1200" },
      { name: "Beef", quantity: 4, unitprice: "300", price: "1400" },
    ],
    overallPrice: "6000",
    type: "previousOrders",
    address: "Wike Adama Lodge",
    vendor: {
      name: "Delight Kitchen",
      image:
        "https://images.pexels.com/photos/1383776/pexels-photo-1383776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    date: "23, jun 2024",
  },
  {
    image:
      "https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    fullList: [
      {
        name: "White Rice",
        quantity: 3,
        unitprice: "300",
        price: "1200",
      },
      { name: "Beans", quantity: 2, unitprice: "150", price: "300" },
      { name: "Plantain", quantity: 1, unitprice: "300", price: "300" },
      { name: "Chicken", quantity: 3, unitprice: "300", price: "900" },
    ],
    overallPrice: "7000",
    type: "previousOrders",
    address: "Sabstizer Villa, Talba Road",
    vendor: {
      name: "Unique Kitchen",
      image:
        "https://images.pexels.com/photos/735869/pexels-photo-735869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    date: "23, jan 2023",
  },
];

export { previousOrders, featuredVendors, suggestedMeal, mainMeal, sideMeal };
