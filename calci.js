function solve(){
     var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
     var op=document.getElementById("opera").value;
    
     res;
    if(op=='+'){
        res=Number(num1)+Number(num2);
    }else if(op=="-"){
        res=num1-num2;
    }else if(op=="*"){
        res=num1*num2;
    }else{
        res=num1/num2;
    }
    var temp=document.getElementById("res");
    temp.value=res
   
}