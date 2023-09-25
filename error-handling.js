// 1.
function sum(array) {
  if (array === null) {
    throw new Error("Array cannot be null");
  }
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  // if (error instanceof TypeError) {
    console.error(error.name + ' ' + error.message);
  // }
  
}

// 2.
sayName = name => {
  console.log(`${name}`);
  if (typeof name !== 'string') {
    throw new Error('This is not a string!')
  }
}
try{
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.error(error.name + ' ' + error.message);

}


// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

  try {
  greet(false);
  } catch (error) {
    console.error(error.name + ' ' + error.message);
  } finally {
    console.log('Hello World!');
  }



