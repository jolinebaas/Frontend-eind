const logo = document.querySelectorAll('#logo path');

for (let i = 0; i < logo.length; i++){
    console.log('Letter ${i} is ${logo[i].getTotalLength()}');
}
//deze code is om te kijken hoe lang het pad is per letter
