import a from "./a.js"

async function getNumber(){
   const b = await import("./b.js");
   console.log(b);
}
getNumber();

