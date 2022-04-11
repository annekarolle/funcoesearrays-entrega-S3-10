function positions (firstPlace, secondPlace, lastPlace) {
   let podio = [firstPlace, secondPlace, lastPlace];  
    if ("Daniel" === secondPlace){
      podio = [secondPlace, firstPlace, lastPlace];
    } 
     if ("Daniel" === lastPlace){
      podio = [firstPlace, lastPlace, secondPlace];
    }
   console.log(`1ª - Colocado ${podio[0]}, 2ª - Colocado ${podio[1]} , 3ª - Colocado ${podio[2]}`);  

}

positions("Manoel", "Daniel", "Rafael")


