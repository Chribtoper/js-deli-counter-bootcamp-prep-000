var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(){
  if (katzDeli.length === 0) return "There is nobody waiting to be served!";
  
}

function currentLine(){
  
}

console.log(katzDeli)