/* const site = window.location.hostname
console.log(site) */

window.confirm('voulez-vous passer en mode accessibilité ?');

// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Create Custom Element - Function
function Create_Custom_Element(tag, attr_tag, attr_name, value) { // paramètres : balise html,attribut(ex: class),valeur de l'attribut (son nom qu'on lui donne),contenu html
    const custom_element = document.createElement(tag) //Cette ligne crée un nouvel élément HTML avec le type de balise spécifié par le paramètre tag.
    custom_element.setAttribute(attr_tag, attr_name) // attribue l'attribut (ex : class)
    custom_element.innerHTML = value // attribue la valeur
    document.body.append(custom_element) // ajoute l'élément que l'on vient de personnaliser à la fin du <body> du document HTML
}

/* if (site.includes("wikipedia.org")){ */
    /* -------------- */
    /* Add Custom CSS */
    /* -------------- */
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Tahoma,Calibri,Helvetica,Arial,Verdana");

        * { 
            font-family: "Tahoma" !important;
            color: rgb(254, 220, 42) !important;
            font-size:2vw !important;
        }

        a {
            color: rgb(255, 189, 229) !important
        }
`)

Add_Custom_Style(`

    * {
    background-color: rgb(98, 98, 98) !important;
}

`)
//}