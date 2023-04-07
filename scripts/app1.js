let a=+prompt("enter number:1");
let b=parseInt( prompt("enter number:2"));

if (a>b && a>=0){
    console.log(a);

}
else if (a>b && a<=0){
    console.log(a);
}
else if (b>a && b>=0){
    console.log(b);

}
else if (b>a && b<=0){
    console.log(b);
}
else{

    console.log('please Type Diffrent numbers');
}   
