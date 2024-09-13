// for

/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
*/ // multicursor search

for(let i = 0; i<= 10; i++){
    console.log(`outerloop value: ${i}`);
    for(let j =0; j<=10; j++){
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }
}

// break and continue

for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`); 
}

for (let index = 0; index < 20; index++) {
    if(index == 5){
        console.log(`detected 5`);
        continue;   // skip this one and then continue
    }
    console.log(`Value of i is ${index}`); 
}