function stringCode(sentence){

    function isConsonant(char){
        const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
        return consonants.includes(char);
    }
    
    function countConsonantsAndVowels(word){
        let consonants = 0;
        let vowels = 0;

        for(const char of word){
            if(isConsonant(char)){
                consonants++;
            }
            else if("aeiouAEIOU".includes(char)){
                vowels++;
            }
        }

        return consonants + " " +vowels;
    }

    const words = sentence.split(' ');
    console.log(words);

    const consonantCount = words.map(word => countConsonantsAndVowels(word));

    return consonantCount;

}

console.log(stringCode("Happy Birthday To Me"))