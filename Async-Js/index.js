

//sync

// console.log('hi')
// console.log('hello')
// console.log('bye')

//sync and async


// console.log('hi')
// setTimeout(() => {
//   console.log('Timer-1')
// }, 4000)
// setTimeout(() => {
//   console.log('Timer-2')
// }, 0)
// Promise.resolve().then(() => { console.log('PR-1') }).then(() => console.log('PR-2'))
// setTimeout(() => {
//   console.log('Timer-3')
// }, 5000)
// console.log('bye')

// var data
// function fetchData(num, displayData) {
//   setTimeout(() => {
//     // data = { pname: 'mobile', price: 20000 }
//     data = num*num
//     displayData(data)
//   }, 4000)

// }
// fetchData(2, (data1)=> {
//   console.log(data1);
//   fetchData(data1, (data2) => {
//     console.log(data2)
//     fetchData(data2, (data3) => {
//       console.log(data3);
//       fetchData(data3, (data4) => {
//         console.log(data4);
//          fetchData(data4, (data5) => {
//            console.log(data5);
//             fetchData(data5, (data6) => {
//               console.log(data6);
//                fetchData(data6, (data7) => {
//                  console.log(data7);
//                });
//             });
//          });
//       });
//     });
//   } )
// });

//promises

// var data

// function fetchData(num) {
// return new Promise((res, rej) => {
//     setTimeout(() => {
//       // data = { pName: 'apple', pPrice: 100 };
//       data = num*num;
//       res(data);
//     }, 4000);
//   });
// }
// fetchData(2).then((data1)=> {
//   console.log(data1);
//   return fetchData(data1)
// }).then((data2) => {
//   console.log(data2)
//   return fetchData(data2);
// }).then((data3) => {
//   console.log(data3)
//   return fetchData(data3)
// }).then((data4) => {
//   console.log(data4)
// })

//async and await

var data 
function fetchData(num) {
 return new Promise((res, rej) => {
    setTimeout(() => {
      // data = { pname: 'apple', price: 100 }
      data = num*num
      res(data)
    }, 4000)
  })
}


async function displayData() {
  var data1 = await fetchData(2) 
  console.log(data1) 
  var data2 = await fetchData(data1) 
  console.log(data2) 
  var data3 = await fetchData(data2) 
  console.log(data3) 
  var data4 = await fetchData(data3) 
  console.log(data4) 
  var data5 = await fetchData(data4) 
  console.log(data5) 
  var data6 = await fetchData(data5) 
  console.log(data6) 
}
displayData()








