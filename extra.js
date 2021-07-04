var L = 10000;
var A = 10000;
var P_pool = A/L;
var P_real = 1;

P_real = 1.3;
arb();

function buyL(input_a){
  var output_l = input_a * L / (input_a + A);
  L = L - output_l;
  A = A + input_a;
  return output_l;
}

function buyA(input_l){
  var output_a = input_l * A / (input_l + L);
  L = L + input_l;
  A = A - output_a;
  return output_a;
}

function arb(){
  for var x = 0; P_real < P_pool; x++{
    buyA(x);
  }
  for var y = 0; P_real > P_pool; y++{
    buyA(y);
  }
  console.log('Pool contains: ' + A + ' ava, ' +
  L + ' link.');
}