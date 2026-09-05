function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log("ξεκινάω");
  await wait(1000);                        // περίμενε 1 δευτ. — χωρίς πάγωμα
  console.log("πέρασε 1 δευτερόλεπτο");
  await wait(1000);
  console.log("πέρασαν 2 δευτερόλεπτα");
}

demo();