import React, { FunctionComponent, useState, useEffect } from 'react';

const User = {
  firstname: "Bernard", 
  lastname: "Minet",
  age: 56
}


type UserT = {
  firstname: string,
  lastname: string,
  age: number
}

const PokemonTest: FunctionComponent = () => {

  const [user,setUser] = useState<UserT>({
    firstname: "",
    lastname: "",
    age: 0

  });

  const [isToggled, setToggled] = useState<boolean>(false);
  const toggle = () => setToggled(!isToggled);

 useEffect(() => {
   setUser({
    firstname: User.firstname, 
    lastname: User.lastname,
    age: User.age
  });
 }, []);

  const handleClick = () =>{
    setUser({
    firstname: "pickachu", 
    lastname: "Pickachu",
    age: 5
    }); 
  }

  return (
    <div>
      <p>{user.firstname + " " + user.lastname + " " + user.age}</p>
      <p onClick={handleClick}>{ `fullname: ${user.firstname} ${user.lastname} / age: ${user.age} ans` }</p>
      <p onClick={toggle}>Toggle is {isToggled?"on":"off"}</p>
    </div>
    
  );
};

export default PokemonTest;