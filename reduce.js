const votes = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
];

const initialValue = {};

const reducer = function(tally, vote) {
  if (!tally[vote]){
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
};

const result = votes.reduce(reducer, initialValue);

console.log(result);