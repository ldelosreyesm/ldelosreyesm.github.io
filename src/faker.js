(function () {
    console.log('Load faker...')
    const fakerForm = document.getElementById('fakerForm');
    const personCheck = document.getElementById('btn-check-1');
    const dateCheck = document.getElementById('btn-check-2');
    const locationCheck = document.getElementById('btn-check-3');
    const commerceCheck = document.getElementById('btn-check-4');
    const musicCheck = document.getElementById('btn-check-5');
    const amount = document.getElementById('amount');
    const separator = document.getElementById('separator');
    const options = document.getElementById('options');
    const btnExport = document.getElementById('export');
    let html = ''

    personCheck.addEventListener("change", async function() {
        const items = await loadData('src/data/options.json')
        html = options.innerHTML
        console.log(this.checked);
        if (this.checked) {
            console.log("Default checkbox is checked");
            console.log(items);
            // let html = ''
            for (let i = 0; i < items.person.length; i++) {
                html = html + `<div id="person-${i}" class="form-check" style="margin-right: 10px; flex-basis: calc(30% - 10px); margin: 5px;">
                <input class="form-check-input" type="checkbox" value="Person.${items.person[i]}" id="personcb-${i}">
                <label class="form-check-label" for="personcb-${i}">
                Person.${items.person[i]}
                </label>
            </div>`
            options.innerHTML = html
            }
            html = ''
            // Aquí puedes realizar acciones cuando el checkbox está marcado
        } else {
            console.log("Default checkbox is unchecked");
            // options.innerHTML = ''
            const elems = document.querySelectorAll('div[id^="person-"]')
            for (const elem of elems) {
                elem.remove()
            }
            // Aquí puedes realizar acciones cuando el checkbox no está marcado
        }
    });

    dateCheck.addEventListener("change", async function() {
        const items = await loadData('src/data/options.json')
        html = options.innerHTML
        console.log(this.checked);
        if (this.checked) {
            console.log("Default checkbox is checked");
            console.log(items);
            
            for (let i = 0; i < items.date.length; i++) {
                html = html + `<div id="date-${i}" class="form-check" style="margin-right: 10px; flex-basis: calc(30% - 10px); margin: 5px;">
                <input class="form-check-input" type="checkbox" value="Date.${items.date[i]}" id="datecb-${i}">
                <label class="form-check-label" for="datecb-${i}">
                Date.${items.date[i]}
                </label>
            </div>`
            options.innerHTML = html
            }
            html = ''
        } else {
            console.log("Default checkbox is unchecked");
            const elems = document.querySelectorAll('div[id^="date-"]')
            for (const elem of elems) {
                elem.remove()
            }
        }
    });

    locationCheck.addEventListener("change", async function() {
        const items = await loadData('src/data/options.json')
        html = options.innerHTML
        console.log(this.checked);
        if (this.checked) {
            console.log("Default checkbox is checked");
            console.log(items);
            
            for (let i = 0; i < items.location.length; i++) {
                html = html + `<div id="location-${i}" class="form-check" style="margin-right: 10px; flex-basis: calc(30% - 10px); margin: 5px;">
                <input class="form-check-input" type="checkbox" value="Location.${items.location[i]}" id="locationcb-${i}" >
                <label class="form-check-label" for="locationcb-${i}">
                Location.${items.location[i]}
                </label>
            </div>`
            options.innerHTML = html
            }
            html = ''
        } else {
            console.log("Default checkbox is unchecked");
            const elems = document.querySelectorAll('div[id^="location-"]')
            for (const elem of elems) {
                elem.remove()
            }
        }
    });

    commerceCheck.addEventListener("change", async function() {
        const items = await loadData('src/data/options.json')
        html = options.innerHTML
        console.log(this.checked);
        if (this.checked) {
            console.log("Default checkbox is checked");
            console.log(items);
            
            for (let i = 0; i < items.commerce.length; i++) {
                html = html + `<div id="commerce-${i}" class="form-check" style="margin-right: 10px; flex-basis: calc(30% - 10px); margin: 5px;">
                <input class="form-check-input" type="checkbox" value="Commerce.${items.commerce[i]}" id="commercecb-${i}" >
                <label class="form-check-label" for="commercecb-${i}">
                Commerce.${items.commerce[i]}
                </label>
            </div>`
            options.innerHTML = html
            }
            html = ''
        } else {
            console.log("Default checkbox is unchecked");
            const elems = document.querySelectorAll('div[id^="commerce-"]')
            for (const elem of elems) {
                elem.remove()
            }
        }
    });

    musicCheck.addEventListener("change", async function() {
        const items = await loadData('src/data/options.json')
        html = options.innerHTML
        console.log(this.checked);
        if (this.checked) {
            console.log("Default checkbox is checked");
            console.log(items);
            
            for (let i = 0; i < items.music.length; i++) {
                html = html + `<div id="music-${i}" class="form-check" style="margin-right: 10px; flex-basis: calc(30% - 10px); margin: 5px;">
                <input class="form-check-input" type="checkbox" value="Music.${items.music[i]}" id="musiccb-${i}" >
                <label class="form-check-label" for="musiccb-${i}">
                Music.${items.music[i]}
                </label>
            </div>`
            options.innerHTML = html
            }
            html = ''
        } else {
            console.log("Default checkbox is unchecked");
            const elems = document.querySelectorAll('div[id^="music-"]')
            for (const elem of elems) {
                elem.remove()
            }
        }
    });

    fakerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get values form
        const checkboxes = document.querySelectorAll(".form-check-input");
        let values = {}

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                let text = checkbox.value
                text = text.split('.')
                if (!values[text[0].toLowerCase()]) {
                    values[text[0].toLowerCase()] = []
                }
                values[text[0].toLowerCase()].push(text[1])
            }
            
        });

        console.log(values)
        const data = values
        let sum = 0
        let cols = 0
        let line = ''
        for (const property in data) {
        cols = cols + data[property].length
        }
        for (const property in data) {
            for (const item of data[property]) {
                sum = sum + 1
                line = line + `${item}${(sum == cols)?'\r\n':separator.value}`
            }
        }
        console.log(cols)
        const numberOfProperties = Object.keys(data).length;
        console.log(`El objeto tiene ${numberOfProperties} propiedades.`);
        
        sum = 0
        for (let i = 0; i < parseInt(amount.value); i++) {
        for (const property in data) {
            for (const item of data[property]) {
                sum = sum + 1
                let itemData = faker[property][item]()
                if (property == 'date' && typeof itemData == 'object'){
                    itemData = itemData.toISOString()
                }
                line = line + `${itemData}${(sum == cols)?'\r\n':separator.value}`
            }
        }
        sum = 0
        }

        console.log(line)
        // toastBootstrap.show()
        document.getElementById('output').value = line
    })
    function copyData(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    // Start file download.
    btnExport.addEventListener("click", function () {
    const text = document.getElementById("output").value;
    const filename = "toExport.txt";
    copyData(filename, text);
    }, false);
})();