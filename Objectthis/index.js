
function foo(num)
{
    console.log('foo'+num);
    // this.count++;// if i use this than it not refernceing to count - beacuse this refernce present inside the functon
    foo.count++;// its foo refernceing itself 
}
foo.count=0;

var i=0;
for(i=0;i<10;i++)
{
    if(i>5)
    {
        foo(i);
    }
}

console.log(foo.count);



/// another to do use call and pass foo1 itself
function foo1(num)
{
    console.log('foo1:'+num);
    foo1.count1++;
}
foo1.count1=0;
var j=0;

for(j=0;j<10;j++)
{
    if(j>5)
    {
        foo1.call(foo1,j);
    }
}
console.log(foo1.count1);


//implict lost

function x()
{
    console.log(this.a);
}
var obj={
    a:10,
    x:x,
}

var bar=obj.x;
var a='oops';
bar();

function x()
{
    console.log(this.a);
}
 
var obj={
    a:2,
    x:x,
}
obj.x();
