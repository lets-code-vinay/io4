1. Write a function that returns a sequence (index begins with 1) of
   all the even characters from a string.

input --> “abcdefghijklm”

output-1 -–> [“b”, “d”, “f”, “h”, “j”, “l”]

output-2 -–> “bdfhjl

input-2 --> “I Love JavaScript”

output-1 -–> [“ ”, “o”, “e”, “J”, “v”, “S”, "r", "p"]

output-2 -–> “ oeJvSrp"

2. You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (\*).
For example:
“Chicago” –> “c:+,h:+,i:+,a:+,g:+,o:+”
“Bangkok” –> “b:+,a:+,n:+,g:+,k:+,o:+”
“Las Vegas” –> “l:+,a:+,s:+,v:+,e:+,g:+”
<!--
const v = "Chicago".split('');
const j=v.map(a => `${a}:+`)
j.join(',')
 -->

3. Return the number (count) of vowels in the given string.
   We will consider a, e, i, o, u as vowels for this Kata (but not y).
   The input string will only consist of lower case letters and/or spaces.

   <!--
   const str = "Return the number (count) of vowels in the given string.
   We will consider a, e, i, o, u as vowels for this Kata (but not y).
   The input string will only consist of lower case letters and/or spaces."

   let count=0;

   for(let i =0; i<= str.length; i++ ){
   if(str[i] === 'a' || str[i] === 'e'||str[i] === 'i'|| str[i] === 'o' || str[i] === 'u'){
   console.log(i)
   count++;
   }
   }
   console.log('count:',count)
    -->
