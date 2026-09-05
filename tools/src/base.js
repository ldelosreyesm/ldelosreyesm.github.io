async function load(url, element) {
    const res = await fetch(url)
    console.log(res)
    element.innerHTML = ''
    element.innerHTML = await res.text()
}

async function loadData(url) {
    const res = await fetch(url)
    return res.json()
}