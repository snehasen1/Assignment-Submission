//FizzBuzz Problem

Program1:
for(i=1;i<=100;i++)
{
  p=i/15
  q=i/5
  r=i/3
  if(Number.isInteger(p)){
    console.log("FizzBuzz"+" ")
  }
  else if(Number.isInteger(q)){
    console.log("Buzz"+" ")
  }
  else if(Number.isInteger(r)){
    console.log("Fizz"+" ")
  }
  else{
    console.log(i)
  }
}

//Palindrome Question
Program2:
a="madam is walking on the road"
s1=""
s2=""
for(k of a){
  if(k!=" "){
    s1=s1+k
    s2=k+s2
  }
  else{
    if(s1==s2){
      console.log(s1)
    }
    s1=""
    s2=""
  }
}