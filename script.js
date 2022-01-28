let num = 266219;
num = String(num);

a = 1
i = 0
while (i < num.length) {

  a = a * num[i];
  i += 1;
}

console.log(a);


b = a **3
console.log(b);

num = String(b)
console.log(num.slice(0,2));