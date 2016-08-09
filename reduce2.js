let fs=require('file-system');

let output = fs.readFileSync('book.txt', 'utf8')
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
      customers[line[0]] = customers[line[0]] || [];
      customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
      });
      return customers;
    }, {});

console.log('output', output);
