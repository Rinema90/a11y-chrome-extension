//changement de la police

$('#fontFamily').on('change', () => {
    var fontFamily = $('#fontFamily option:selected').val();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {fontFamily: fontFamily});
    });
});

    //changement de la taille de police

$('#font_size').on('change', () => { //on utilise le jQuery selector et les () est un raccourci pour await
    var font_size = $('#font_size option:selected').val();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { //on désigne le tab spécifique (l'onglet ouvert)
        chrome.tabs.sendMessage(tabs[0].id, {font_size: font_size}); //envoi d'un message au tab spécifique tabs[0].id (onglet ouvert)
    });
    });

    // 1st font-size : the element font-size
    // 2nd font-size : the value picked from the selector


        //changement du fond

$('#background_color').on('change', () => { //on utilise le jQuery selector et les () est un raccourci pour await
    var background_color = $('#background_color option:selected').val();
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) { //on désigne le tab spécifique (l'onglet ouvert)
        chrome.tabs.sendMessage(tabs[0].id, {background_color : background_color}); //envoi d'un message au tab spécifique tabs[0].id (onglet ouvert)
    });
    });