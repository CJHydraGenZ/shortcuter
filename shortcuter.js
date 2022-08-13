
//? Array Sortcut
export let RandomArray = (URandom) => URandom[Math.floor(Math.random() * URandom.length)]





//! Testing Functions
export let LoopTest = (int) => {
  let start = new Date().getDate()
  for (let i = 0; i <= int; i++) {
    console.log(i);
  }

  let end = new Date().getTime()
  console.log('Start:', start);
  console.log('end:', end);
  console.log('milsec:', (end - start));
}
