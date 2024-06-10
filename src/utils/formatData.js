export const formatStockData = (data) => {
  const formattedData = [];
  console.log(data);

  data.map((key, value) => {
    console.log(key);
    formattedData.push({
      x: value[0],
      y: [
        value["1. open"],
        value["2. high"],
        value["3. low"],
        value["4. close"],
      ],
    });
  });

  // if (stockData['Weekly Adjusted Time Series']) {
  //     Object.entries(
  //         stockData['Weekly Adjusted Time Series']
  //     ).map(
  //         ([key, value]) => {
  //             formattedData.push({
  //                 x: key,
  //                 y: [
  //                     value['1. open'],
  //                     value['2. high'],
  //                     value['3. low'],
  //                     value['4. close'],
  //                 ]
  //             })
  //         }
  //     )
  return formattedData;
};
