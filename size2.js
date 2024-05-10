var selectElement = document.getElementById("size");

selectElement.addEventListener("input", function() {
  selectedValue = selectElement.value;
  console.log(selectedValue); // Affichera la valeur de l'option sélectionnée
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tabId = tabs[0].id;
    
    // Injectez un script de contenu dans la page web actuelle pour modifier la taille de la police
    chrome.tabs.executeScript(tabId, {
        code: `document.body.style.fontSize = "${selectedFontSize}px";`
    });
});

});



//document.documentElement.style.setProperty('--font-size-medium', '4vw');

