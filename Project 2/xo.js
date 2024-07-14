let val =1;
function click1(obj){
    if(obj.innerHTML=="")
        {
            if(val==1){
            obj.innerHTML="X";
            val=0;
            exe(obj);
            }
          else{
                 obj.innerHTML="O";
                 val=1;
                 exe(obj);
            }
        }
 
}
function exe(obj){
    var key=obj.innerHTML;
    console.log(key);
    var key1=document.getElementById('c1').innerHTML;
    var key2=document.getElementById('c2').innerHTML;
    var key3=document.getElementById('c3').innerHTML;
    var key4=document.getElementById('c4').innerHTML;
    var key5=document.getElementById('c5').innerHTML;
    var key6=document.getElementById('c6').innerHTML;
    var key7=document.getElementById('c7').innerHTML;
    var key8=document.getElementById('c8').innerHTML;
    var key9=document.getElementById('c9').innerHTML;
    console.log(obj.id);
    if((key==key1)&&((key1==key2)&&(key1==key3)||(key1==key5)&&(key1==key9)||(key1==key4)&&(key1==key7)))
    { 
        alert(`${key} wins`);
        reset();
    }
    else if((key==key2)&&((key2==key1)&&(key2==key3)||(key2==key5)&&(key2==key8)))
    {
        alert(`${key} wins`);
        reset();
    }
    else if((key==key3)&&((key3==key1)&&(key3==key2)||(key3==key5)&&(key3==key7)||(key3==key6)&&(key3==key9)))
    {
        alert(`${key} wins`);
        reset();
    }
    else if((key==key4)&&((key4==key1)&&(key4==key7)||(key4==key5)&&(key4==key6)))
    {
       alert(`${key} wins`);
        reset(); 
    }
    else if((key==key5)&&((key5==key1)&&(key5==key9)||(key5==key2)&&(key5==key8)||(key5==key4)&&(key5==key6)||(key5==key3)&&(key5==key7)))
    {
        alert(`${key} wins`);
        reset(); 
    }
    else if((key==key6)&&((key6==key3)&&(key6==key9)||(key6==key4)&&(key6==key5)))
    {
        alert(`${key} wins`);
        reset(); 
    }
    else if((key==key7)&&((key7==key8)&&(key7==key9)||(key7==key4)&&(key7==key1)||(key7==key5)&&(key3==key3)))
    {
         alert(`${key} wins`);
         reset();
    }
    else if((key==key8)&&((key8==key7)&&(key8==key9)||(key8==key5)&&(key8==key2)))
    {
         alert(`${key} wins`);
         reset();

     }
     else if((key==key9)&&((key9==key8)&&(key9==key7)||(key9==key5)&&(key9==key1)||(key9==key6)&&(key9==key3)))
    {

        alert(`${key} wins`);
        reset();

    }
    }
function reset(){
    for( var i=1;i<10;i++)  {
        document.getElementById(`c${i}`).innerHTML="";
        val=1;
    }
}