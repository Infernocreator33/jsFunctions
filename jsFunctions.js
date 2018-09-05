function square1(x)
{
    return Math.pow(x,2);
}
    for(let i = 0; i <= 10; i++)
    {
        console.log(square1(i));
    }
const square2 = x => Math.pow(x,2);

for(let i = 0; i <= 10; i++)
{
    console.log(square2(i));
}

const min = (x, y) => 
{
    if(x < y)
        return x;
    if(x > y)
        return y;
    if(x = y)
        return "The first and second number are equal";          
}
console.log(min(4,5));
console.log(min(5,7));
console.log(min(25, 30));
console.log(min(20, 20));
