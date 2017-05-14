$(document).ready(generateNames);

function generateNames() {
    $("#submit-values").click(function () {
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
       

        var sumName = firstName + lastName;
       

        var nameSize;
       
        if (sumName.length > 16) {
 
            nameSize = 3;
        } else {
            nameSize = 2;
        }

        console.log("button-clicked");
        $(".search-content").toggle(3000);
        
       
        var finalName = getName(nameSize, hashName(sumName));
        displayName(finalName);

    });

}


function hashName( name ) {
    var hash=0;
    for(var i = 0; i < name.length - 1; i++){

        hash += name.charCodeAt(i) * 3;
    }
    return hash;
    
}
function displayName( name ) {
    $("#name-display").toggle(1000);
    
    $("#final-name").text(name);
    
    
}

function getName(nameSize, nameHash) {

    var starWarsNames = [
  '4-LOM', 'Aayla Secura', 'Admiral Ackbar'
  , 'Admiral Thrawn'
  , 'Ahsoka Tano'
  , 'Anakin Solo'
  , 'Asajj Ventress'
  , 'Aurra Sing'
  , 'Senator Bail Organa'
  , 'Barriss Offee'
  , 'Bastila Shan'
  , 'Ben Skywalker'
  , 'Bib Fortuna'
  , 'Biggs Darklighter'
  , 'Boba Fett'
  , 'Bossk'
  , 'Brakiss'
  , 'C-3PO'
  , 'Cad Bane'
  , 'Cade Skywalker'
  , 'Callista Ming'
  , 'Captain Rex'
  , 'Carnor Jax'
  , 'Chewbacca'
  , 'Clone Commander Cody'
  , 'Count Dooku'
  , 'Darth Bane'
  , 'Darth Krayt'
  , 'Darth Maul'
  , 'Darth Nihilus'
  , 'Darth Vader'
  , 'Dash Rendar'
  , 'Dengar'
  , 'Durge'
  , 'Emperor Palpatine'
  , 'Exar Kun'
  , 'Galen Marek'
  , 'General Crix Madine'
  , 'General Dodonna'
  , 'General Grievous'
  , 'General Veers'
  , 'Gilad Pellaeon'
  , 'Grand Moff Tarkin'
  , 'Greedo'
  , 'Han Solo'
  , 'IG 88'
  , 'Jabba The Hutt'
  , 'Jacen Solo'
  , 'Jaina Solo'
  , 'Jango Fett'
  , 'Jarael'
  , 'Jerec'
  , 'Joruus CBaoth'
  , 'Ki-Adi-Mundi'
  , 'Kir Kanos'
  , 'Kit Fisto'
  , 'Kyle Katarn'
  , 'Kyp Durron'
  , 'Lando Calrissian'
  , 'Luke Skywalker'
  , 'Luminara Unduli'
  , 'Lumiya'
  , 'Mace Windu'
  , 'Mara Jade'
  , 'Mission Vao'
  , 'Natasi Daala'
  , 'Nom Anor'
  , 'Obi-Wan Kenobi'
  , 'Padmé Amidala'
  , 'Plo Koon'
  , 'Pre Vizsla'
  , 'Prince Xizor'
  , 'Princess Leia'
  , 'PROXY'
  , 'Qui-Gon Jinn'
  , 'Quinlan Vos'
  , 'R2-D2'
  , 'Rahm Kota'
  , 'Revan'
  , 'Satele Shan'
  , 'Savage Opress'
  , 'Sebulba'
  , 'Shaak Ti'
  , 'Shmi Skywalker'
  , 'Talon Karrde'
  , 'Ulic Qel-Droma'
  , 'Visas Marr'
  , 'Watto'
  , 'Wedge Antilles'
  , 'Yoda'
  , 'Zam Wesell'
  , 'Zayne Carrick'
  , 'Zuckuss'
];


    var firstNames = [];
    var secondNames = [];
    var thirdNames = [];

    var finalName = " ";

    for (var i = 0; i < starWarsNames.length; i++) {
     
        var name = starWarsNames[i];
        var splitName = name.split(" ");

        firstNames.push(splitName[0]);

        if (splitName.length > 1) {
            secondNames.push(splitName[1]);

        }
        if (splitName.length > 2) {
            thirdNames.push(splitName[2]);
        }
    }

    if (nameSize >= 2) {
      
        finalName += firstNames[(nameHash % firstNames.length)] + " " + secondNames[(nameHash % secondNames.length)];
     
    }


    if (nameSize == 3) {
        finalName += " " + thirdNames[(nameHash % thirdNames.length)];
    }

    return finalName;

}