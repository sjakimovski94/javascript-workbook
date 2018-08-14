const Persons={
    firstName: "Jane",
    lastName: "Doe",
    birthDay: "Jan 5, 1925", 
    gender: "female"
  }
  
  
  const personsObjKey= Object.keys(Persons);
  
  
  for(let i=0;i<personsObjKey.length;i++){
   console.log(personsObjKey[i])
  }
  
  for(let i=0;i<personsObjKey.length;i++){
      if(personsObjKey[i]=="birthDay"){
        console.log(Persons.birthDay)
      }
  }
  
  
  for(let i=0;i<1000;i++){
    //console.log(i)
  }
  
  i=0;
  
  do{
    //console.log(i)
    i+=1;
  }while(i<1000);
  
  
  