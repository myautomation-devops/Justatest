function assignGrade(number){
    if(number > 90){
        return 'A';
    }
    else if(number >80){
        return 'B';
    }
    else if(number > 70){
        return 'C';
    }
    else{
        return 'D';
    }
} 

for(i=70; i<=100; i++){
    console.log('You got '+i+' number hence your grade is '+assignGrade(i));
}
console.log('You got '+66+' number hence your grade is '+assignGrade(66));
