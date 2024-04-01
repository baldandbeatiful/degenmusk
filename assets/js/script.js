document.getElementById('copyButton').addEventListener('click', function() {
    var textToCopy = 'HyC88nKxLcBHdhxNN7eooDrFNnatd3FCtoXKpevTepeF';

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            document.getElementById('copyButton').classList.add('clicked');
            setTimeout(function() {
                document.getElementById('copyButton').classList.remove('clicked');
            }, 2000); 
        })
        .catch(err => {
            console.error('Impossible de copier le texte : ', err);
            alert('Impossible de copier le texte. Veuillez le sélectionner et utiliser la fonction de copie de votre navigateur.');
        });
});
