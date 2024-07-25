/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   if (transactions?.length === 0) return [];

//   // Getting all unique categories
//   const categories = transactions?.reduce(
//     (acc, curr) =>
//       acc.includes(curr.category) ? acc : [...acc, curr.category],
//     []
//   );

//   return categories?.map((item) => {
//     const itemsOfCategory = transactions?.filter(
//       (data) => data.category === item
//     );
//     const totalOfAllItems = itemsOfCategory?.reduce(
//       (acc, curr) => acc + curr.price,
//       0
//     );

//     return {
//       category: item,
//       totalSpent: totalOfAllItems,
//     };
//   });
// }
const calculateTotalSpentByCategory = (transactions) => {
  const result = transactions?.reduce((acc, curr) => {
    const itemPresent = acc?.find(
      (item) => item.category === curr.category
    );

    if (Boolean(itemPresent)) {
      return acc?.map((data) =>
        data?.category === itemPresent?.category
          ? { ...data, totalSpent: data?.totalSpent + curr.price }
          : data
      );
    } else {
      return [...acc, { category: curr.category, totalSpent: curr.price }];
    }
  }, []);
  console.log("_res", result);
  return result;
};

module.exports = calculateTotalSpentByCategory;
