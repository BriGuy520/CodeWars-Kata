function mix(s1, s2){

    let i;
    let arr = [];
    const regex = /[a-z]/g;


    const s1Split  = s1.match(regex);
    const s2Split = s2.match(regex);

    const s1Reg  = s1.match(regex).join('');
    const s2Reg = s2.match(regex).join('');

    let memoS1 = {};
    let memoS2 = {};

    for(i = 0; i < s1Split.length; i++){

        let letter = s1Split[i];
        let regex2 = new RegExp(letter, 'g');
        let howMany = s1Reg.match(regex2).join('');

        if(!memoS1[letter]) {
            memoS1[letter] = howMany;
        }
    }

    console.log(memoS1);

    for(i = 0; i < s2Split.length; i++){

        let letter = s2Split[i];
        let regex2 = new RegExp(letter, 'g');
        let howMany = s2Reg.match(regex2).join('');

        if(!memoS2[letter]) {
            memoS2[letter] = howMany;
        }
    }

    console.log(memoS2);

    for(const value in memoS1){

        if(memoS1[value] > memoS2[value]){
            if(memoS1[value].length > 1){
                arr.push(`1:${memoS1[value]}/`);         
            }
        } else if (memoS1[value] < memoS2[value]) {
            if(memoS2[value].length > 1){
                arr.push(`2:${memoS2[value]}/`);   
            }    
        } else {
            if(memoS1[value].length > 1){
                arr.push(`=:${memoS1[value]}/`); 
            }       
        }
       
    }
    
    const answer = (arr.sort().sort(function(a,b){

        return b.length - a.length;
    }).join(''));

    const finalString = answer.substring(0, answer.length - 1);

    console.log(finalString);

    return finalString;

}

let s1 = "my&friend&Paul has heavy hats! &";
let s2 = "my friend John has many many friends &";

// mix(s1, s2);

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &";
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&";

// mix(s1, s2);

// s1 = "Are they here";
// s2 = "yes, they are here";

// mix(s1, s2);

s1 = "A generation must confront the looming ";
s2 = "codewarrs";

mix(s1, s2);