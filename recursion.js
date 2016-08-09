let countDownFrom;

countDownFrom = (num) => {
  if (num === 0) {
    return;
  }
  countDownFrom(num - 1);
};

countDownFrom(10);
