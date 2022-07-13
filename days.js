let day='wednsday';
switch(day) {
    case 'monday':
        console.log('five days until saturday'); 
        break;  
    case 'tuesday':
        console.log('four days until saturday');
        break;
    case 'wednsday':
            console.log('three days until saturday');
            break;
    case 'thursday':
        console.log('two days until saturday');
        break;
    case 'friday':
        console.log('one day until saturday');
        break;
    case 'saturday':
        console.log('today is saturday');
        break;
        default:
            console.log(`the correct day is ${day}`);
            break;

}
