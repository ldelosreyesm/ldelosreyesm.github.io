//document.addEventListener('DOMContentLoaded', function() {
(function () {
    document.getElementById('jsonConfig').value = 'try.with.example*,*now\r\ntry.now*,*true'
    const form = document.getElementById('configForm');
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Get values form
    const input = document.getElementById('jsonConfig').value;

    const lines = input.split('\n')
    const extraConfig = {}
    lines.forEach((line) => {
        const [path, value] = line.trim().split('*,*')
        const keys = path.split('.')
        let currentObject = extraConfig
        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i]
            if (!currentObject[key]) {
                currentObject[key] = {}
            }
            currentObject = currentObject[key]
        }
        const lastKey = keys[keys.length - 1]
        currentObject[lastKey] = parseValue(value)
    })

      // toastBootstrap.show()
    document.getElementById('result').innerHTML = JSON.stringify(extraConfig)


})

const parseValue = function (value) {
// Convert the string value to the appropriate data type (e.g., boolean, number, array, etc.)
if (value === 'true' || value === 'false') {
    return value === 'true'
} else if (!isNaN(value)) {
    return Number(value)
}
return value
}
})();