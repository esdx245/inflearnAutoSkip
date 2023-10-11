function test() {
  console.log('시행 중입니다!');
  document
    .querySelector(
      '#root > main > div > footer > div > div > button:nth-child(2)'
    )
    .click();
  document
    .querySelector(
      '#root > main > div > footer > div > div > button:nth-child(3)'
    )
    .click();
  setInterval(() => {
    if (
      document.querySelector(
        '#root > main > div > footer > div > div > button:nth-child(3)'
      ) !== null
    ) {
      document
        .querySelector(
          '#root > main > div > footer > div > div > button:nth-child(2)'
        )
        .click();
      document
        .querySelector(
          '#root > main > div > footer > div > div > button:nth-child(3)'
        )
        .click();
    }
  }, 63000);
}
test();
