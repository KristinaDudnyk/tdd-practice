/*
- write a function canAdmitToNightClub that takes a person object as an argument and returns true if they can be admitted and false if they cannot
- an unaccompanied minor (under the age of 18) may not be admitted
- any person who is visibly inebriated may not be admitted
- the person object should have the following fields
  - age (Number)
  - isAccompaniedByAdult (Boolean)
  - isVisiblyInebriated (Boolean)

  - написати функцію canAdmitToNightClub, яка приймає об'єкт person як аргумент і повертає true, якщо їх можна прийняти, і false, якщо вони не можуть
- неповнолітній (до 18 років) без супроводу не може бути допущений
- будь-які особи, які перебувають у стані алкогольного сп'яніння, не можуть бути допущені
- об'єкт person повинен мати такі поля
   - вік (Кількість)
   - isAccompaniedByAdult (логічне значення)
   - isVisiblyIntebriated (логічне значення)
*/
function canAdmitToNightClub(person) {
  if(person.age >= 18 && person.isVisiblyInebriated === false){
    return true
  }
  else if(person.age < 18 && person.isAccompaniedByAdult === true && person.isVisiblyInebriated === false) {
    return true
  }
  else  return false
}

//    TDD-TESTS    //

//tests were passed because function checking statement:
//1) age
//2) if person is drunk 
//3) also it's count as true if person under 18 but with accompanied by adult
// otherwise false
test("returns true for a person over 18", () => {
  const personOver18 = {
    age: 30,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(true);
});


test("returns false for an inebriated person", () => {
  const inebriatedPerson = {
    age: 18,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(inebriatedPerson)).toBe(false);
});

test("returns true for a person over 18", () => {
  const personOver18 = {
    age: 30,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(true);
});

test("returns false for a person under 18", () => {
  const personUnder18 = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});