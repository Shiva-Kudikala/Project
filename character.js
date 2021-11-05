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
        // document.getElementById('constellation').textContent = cobj.constellation;
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
    name = 'Character_' + name + '_Portrait.png';
    name = '/Images/' + element + '/Full/' + name;
    console.log(name);
    return name;
}

let startext = '<svg height="50" width="50" class="star rating" data-rating="1"><polygon points="19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56" style="fill-rule:nonzero; fill: #ffd055;"/></svg>'