// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 5; i++) {
  // eslint-disable-next-line no-plusplus
  for (let j = 1; j <= 5; j++) {
    const result = i * j;
    console.log(`${i} x ${j} = ${result}`);
  }
  if (i !== 5) {
    console.log("=>");
  }
}
for (let i = 1; i <= 5; i++) {
  console.log('\n=> ' + i + ' <=\n\n');
  for (let j = 1; j <= 10; j++) {
    console.log(i + ' x ' + j + ' = ' + i * j);   
  }
}
