var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  console.log(`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(line){
  if (katzDeli.length > 0){
    return `Currently serving ${katzDeli[0]}`, katzDeli.pop(0);
  }
  else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(){
  
}

