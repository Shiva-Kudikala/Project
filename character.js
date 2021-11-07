//setEventListeners();

function createObj(fname) {
    let arr = "";
    let elem = fname;
    fname = '/Data/' + fname + '.json';
    $.getJSON(fname, function(json) {
        arr = json[0].name;
        console.log(arr);
        let lbar = document.getElementById('lbar');
        while (lbar.firstChild)
            lbar.removeChild(lbar.firstChild);
        json.forEach(element => {
            // document.getElementById('name').innerHTML = element.name;
            let d = document.createElement('div');
            d.classList += "thumbnail";
            d.style.backgroundImage = 'url("' + getThumbFile(element.name, elem) + '")';
            d.setAttribute('onclick', 'setData("' + element.name + '","' + elem + '")');
            lbar.appendChild(d);
        });
        setData(arr, elem);
    })
}

function setData(name, elem) {
    let fname = '/Data/' + elem + '.json';
    $.getJSON(fname, function(json) {
        let cname = document.getElementById('name');
        cname.textContent = name;
        let cobj = json[0];
        json.forEach(element => {
            if (element.name == name)
                cobj = element;
        });
        document.getElementById('title').textContent = cobj.title;
        document.getElementById('const').textContent = 'Constellation: ' + cobj.constellation;
        // // document.getElementById('weapon').textContent = cobj.weapon;
        // document.getElementById('ascension').textContent = cobj.ascension;
        // document.getElementById('rarity').textContent = cobj.rarity;

        let sdiv = document.getElementById('stars');

        while (sdiv.firstChild) {
            sdiv.removeChild(sdiv.firstChild);
        }

        let nstars = parseInt(cobj.rarity, 10);


        for (let i = 0; i < nstars; ++i) {
            sdiv.innerHTML += startext;
        }

        document.getElementById('weapon').setAttribute('src', '/Images/Weapons/Icons/' + cobj.weapon + '.png');
        document.getElementById('image').style.backgroundImage = "url('" + getFullImage(name, cobj.element) + "')";
    });
}

function getThumbFile(name, element) {
    let l = name.length;
    // for(let i = 0; i < l; i++)
    // {
    //     if(name[i] == ' ')
    //         name[i] = '_';
    // }
    name = name.replace(' ', '_');
    name = 'Character_' + name + '_Thumb.png';
    name = '/Images/' + element + '/' + name;
    console.log(name);
    return name;
}

function getFullImage(name, element) {
    let l = name.length;
    name = name.replace(' ', '_');
    name = 'Character_' + name + '_Wish_Cropped.png';
    name = '/Images/' + element + '/Wish/' + name;
    console.log(name);
    return name;
}

function setEventListeners() {
    console.log("Here");
    let arr = ['Anemo', 'Pyro', 'Geo', 'Cryo', 'Electro', 'Hydro']
    arr.forEach(element => {
        let cobj = document.getElementById(element.toLowerCase() + '-img');
        console.log(element.toLowerCase() + '-img');
        cobj.addEventListener("mouseover", () => {
            cobj.style.transition = 'background-image 10s ease-in-out';
            cobj.style.backgroundImage = 'radial-gradient(rgba(255, 255, 0, 1), rgba(0,255,255,0.1) 60%, rgba(255,0,0,0) 100%';
        });
        cobj.addEventListener("mouseout", () => {
            cobj.style.backgroundImage = 'radial-gradient(rgba(255, 255, 0, 0), rgba(255,255,0,0)';
        });
    });
}


let scale = 1.25;

let startext = '<svg height="' + (scale * 50) + '" width="' + (scale * 50) + '" class="star rating" data-rating="1"><polygon points="' + (19.8 * scale) + ',' + (2.2 * scale) + ',' + (6.6 * scale) + ',' + (43.56 * scale) + ',' + (39.6 * scale) + ',' + (17.16 * scale) + ',' + (0 * scale) + ',' + (17.16 * scale) + ',' + (33 * scale) + ',' + (43.56 * scale) + '" style="fill-rule:nonzero; fill: #ffd055;"/></svg>'