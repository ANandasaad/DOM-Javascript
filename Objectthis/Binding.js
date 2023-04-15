
function x()
{
console.log(this.a);
}
var obj={
    a:10,
    x:x
}
var bar=obj.x;
var a=20;
bar();