function go(){
    var str=document.getElementById("t1").value;
    var vowel="aeiouAEIOU";
    var consonant="bcdfghjklmnpqrstvwxyz";
    var ctr=0;
    var ctr1=0;
    
    for(var x=0;x<str.length;x++){
        for(var y=0;y<vowel.length;y++){
            if(str[x]==vowel[y])
            {
                ctr++;
            }
        }
        for(var z=0;z<consonant.length;z++){
            if(str[x]==consonant[y])
            {
                ctr1++;
            }
        }
    }
    document.getElementById("p1").innerHTML="The Number Of Vowels are"+ ctr;
    document.getElementById("p2").innerHTML="The Number Of consonant are"+ ctr1;
    }
    