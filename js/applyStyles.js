
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
          // Concaténez la font-family et la font-size dans le même style pour qu'il s'applique simultanément
          var style = 'font-family: ' + request.fontFamily + '!important;';
          style += 'font-size: ' + request.font_size + 'px' + '!important;';
          style+= 'background-color:' + request.background_color + '!important';
              // Appliquer le style à l'élément cible
      $('.mw-page-title-main, .vector-pinned-container, .mw-page-container, .vector-user-links-main, .vector-menu-content-list, .vector-pinnable-element, .vector-header mw-header, .mw-body h1, .mw-body, .mw-heading1, .mw-body-content h1, .mw-body-content, .mw-heading1, .mw-body-content h2, .mw-body-content, .mw-heading2, .vector-search-box-vue').attr('style', style)
    }
  );
 
