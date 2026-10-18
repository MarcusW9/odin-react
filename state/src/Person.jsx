import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName:"", age: 100 });

  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  const handleFirstName = (e) => {
    const value = e.target.value;
    setPerson((prevPerson) => ({
      ...prevPerson,
      firstName: value
    }))
  }

  const handleLastName = (e) => {
    const value = e.target.value
    setPerson((prevPerson) => ({
      ...prevPerson, 
      lastName: value
    })
    )
  }

  return (
    <section className='person'>
      <h1>{person.firstName} {person.lastName}</h1>
      <label>First Name
        <input value={person.firstName} onChange={handleFirstName}/>
      </label>
      <label>Last Name
        <input value={person.lastName} onChange={handleLastName}/>
      </label>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </section>
  );
}