const employees = [
  {
    name: 'Alice',
    grossSalary: 1500,
  },
  {
    name: 'Bob',
    grossSalary: 1750,
  },
  {
    name: 'Carol',
    grossSalary: 1700,
  },
  {
    name: 'Donald',
    grossSalary: 2000,
  },
  {
    name: 'Emily',
    grossSalary: 1600,
  },
];

// const atLeast = employees.filter((emp) => emp.grossSalary >= 1700);

// console.log(atLeast);

// const netPay = employees.map((emp) => {
//   const netSalary = emp.grossSalary - emp.grossSalary * 0.2;

//   return { ...emp, netSalary };
// });

// console.log(netPay);

const biggestSalary = (emp) => {
  let max = 0;
  let name = '';

  for (let i = 0; i < emp.length; i++) {
    if (max < emp[i].grossSalary) {
      max = emp[i].grossSalary;
      name = emp[i].name;
    }
  }

  return name;
};

// console.log(biggestSalary(employees));

const twoDecimal = (val) => {
  const fixedVal = Number(val.toFixed(2)).toLocaleString();
  // const fixedVal = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return fixedVal;
};

// console.log(twoDecimal(77.88));
console.log(twoDecimal(455.23453));
// console.log(twoDecimal(4555.23453));
console.log(twoDecimal(24352438.432543));
