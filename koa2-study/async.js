async function testAsync1(){
    return 'hello world';
}
const result = testAsync1();
console.log(result);

function getSomethig(){
    return 'something';
}

async function testAsync2(){
    return 'hello world';
}

async function test(){
    const v1 = await getSomethig();
    const v2 = await testAsync2();
    console.log(v1,v2);
}

test();

var i = 0;
function takeLongTime(){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve('long_time_value');
        }, 1000);
    });
}

async function test2(){
    const v = await takeLongTime();
    i++;
    console.log(i+':'+v);
}

test2();