//lert("Hello World");
//let a=242.4;
//let p=23.4;

//alert(a+p);

//function add(x,y){
  //  var sum=x+y;
   // return sum;
//}

//var n=8;
//var m=9;
//var s= add(n,m);
//alert(s);

function fn(){
    var a=document.getElementById('mail').value;
    document.getElementById('par').innerHTML=a;
}

function sendEmail() {
    var email =document.getElementById('mail').value;
    var subject = "request to connect-reg.";
    var body ="Hello i would like to connect with you";
    window.location.href ="mailto:"+encodeURIComponent(email)+"?subject" +encodeURIComponent(subject)+ " &body=" +encodeURIComponent(body)+ "&cc=vrlakshmikrishna@gmail.com"; 

    }
