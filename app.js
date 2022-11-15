const touches = [...document.querySelectorAll('.bouton')];
const ecran = document.querySelector('.ecran');
const listKey = touches.map(touche => touche.dataset.key);

document.addEventListener('keydown', (e) => {
    valeur = e.keyCode.toString();
    calculer(valeur)
})

document.addEventListener('click', (e) => {
    valeur = e.target.dataset.key;
    calculer(valeur)
})

const calculer = (valeur) => {
    if(listKey.includes(valeur)){
        
        switch(valeur) {
            case "8":
                ecran.textContent = "";
                break;

            case "13":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;

            default:
                const indexKeyCode = listKey.indexOf(valeur);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML
                break;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue lors du calcul '+e.message)
})