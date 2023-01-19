export const filterData = [
  {
    items: [
      { name: "For men", value: "cat1230040" },
      { name: "For women", value: "cat1230039" },
    ],
    placeholder: "Purpose",
    queryName: "categoryId",
  },
  {
    items: [
      { name: "20", value: "20" },
      { name: "40", value: "40" },
      { name: "60", value: "60" },
      { name: "80", value: "80" },
      { name: "100", value: "100" },
      { name: "120", value: "120" },
      { name: "150", value: "150" },
      { name: "200", value: "200" },
    ],
    placeholder: "Min Price(USD)",
    queryName: "pl",
  },
  {
    items: [
      { name: "30", value: "30" },
      { name: "50", value: "50" },
      { name: "70", value: "70" },
      { name: "90", value: "90" },
      { name: "100", value: "100" },
      { name: "120", value: "120" },
      { name: "140", value: "140" },
      { name: "150", value: "150" },
      { name: "170", value: "170" },
      { name: "200", value: "200" },
      { name: "230", value: "230" },
      { name: "250", value: "250" },
    ],
    placeholder: "Max Price(USD)",
    queryName: "ph",
  },
  {
    items: [
      { name: "Lowest Price", value: "price:0" },
      { name: "Highest Price", value: "price:1" },
      { name: "Best Selling", value: "P_BEST_SELLING:1" },
      { name: "Oldest", value: "P_NEW:0" },
      { name: "Newest", value: "P_NEW:1" },
      { name: "Best Rating", value: "P_RATING:1" },
    ],
    placeholder: "Sort",
    queryName: "sortBy",
  },
];

export const getFilterValues = (filterValues) => {
  const { categoryId, pl, ph, sortBy } = filterValues;

  const values = [
    {
      name: "categoryId",
      value: categoryId,
    },
    {
      name: "pl",
      value: pl,
    },
    {
      name: "ph",
      value: ph,
    },
    {
      name: "sortBy",
      value: sortBy,
    },
  ];

  return values;
};
