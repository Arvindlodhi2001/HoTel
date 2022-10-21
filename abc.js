




function Detail()
    {
      document.getElementById("lblname").innerText = document.getElementById("txtName").value;
      document.getElementById("lblmobile").innerText = document.getElementById("txtmobile").value;
      document.getElementById("lblDate").innerText = document.getElementById("txtdate").value;
      document.getElementById("lblDays").innerText = document.getElementById("txtdays").value;
      document.getElementById("lbperson").innerText = document.getElementById("txtperson").value;
      document.getElementById("Advancemoney").innerText = document.getElementById("txtAmount").value;
   


       if(txtperson.value > 2)
       {
          document.getElementById("lbaddperson").innerText =  "₹"+" 1000 Per Person";
         var Extraperson = (txtperson.value - 2 )*1000 ;
         
       }
       else
       {
         document.getElementById("lbaddperson").innerText =" Only Person Allow";
         var Extraperson = 0; 
       }
         
      


            var AbName ="";
            var AbbCost =0;
            

           

       DeluxRoom = document.getElementById("DeluxRRoom");
       SuiteRoom = document.getElementById("SuiteRRoom");
       SimpleRoom = document.getElementById("SimpleRRoom");

      
     
     if(DeluxRRoom.checked)
     {
        AAbName.innerText= DeluxRoom.value;
        AbbCost = 2500;
      
     }

     if(SuiteRoom.checked)
     {
        AAbName.innerText= SuiteRoom.value;
        AbbCost = 4000;
       
     }

     if(SimpleRoom.checked)
     {
        AAbName.innerText= SimpleRoom.value;
        AbbCost = 5000;
      
     }



     var facAddName ="";
     var facAddCost =0;


     var LAC = document.getElementById("optAC");
     var Llocker = document.getElementById("optLoker");
     var Lwater = document.getElementById("optwater");

     if(LAC.checked)
     {
        document.getElementById("facAddName").innerText = LAC.value ;
        facAddCost =  1000;
     }
     else
     {
      facAddCost = 0;
     }
     

     if(Llocker.checked)
     {
        document.getElementById("facAddName1").innerText  = Llocker.value ;
        facAddCost += 300;
     }
     else
     {
      facAddCost += 0;
     }

     if(Lwater.checked)
     {
        document.getElementById("facAddName2").innerText  = Lwater.value ;
        facAddCost +=  100;
     }
     else
     {
      facAddCost +=  0;
     }

     
 
     
 

    
 if(txtdays.value <= 1)
 {
   var Day = 1;
   
 }
 if(txtdays.value > 1)
 {
   var Day = txtdays.value;
  
 }

 var Total = (Extraperson + AbbCost + facAddCost)*Day;

    console.log(Total);
    total.innerText = Total;

    totalFinal.innerText = Total - txtAmount.value;
    }
    
