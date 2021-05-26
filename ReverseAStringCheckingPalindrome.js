var num = parseInt(prompt('Enter the Number'));
var originalNum = num; 
var reverse  = 0; 
while (num !=0)
{
    reverse = (reverse*10)+(num%10);
      num = parseInt(num/10);
    }
     if(originalNum == reverse)
        { 
            document.write( reverse        +   "This is a Plindrome Number", "<br>");
        } 
    else
       { 
            document.write( reverse        +   "This is Not A Pilandrome Number", "<br>" );
      } 