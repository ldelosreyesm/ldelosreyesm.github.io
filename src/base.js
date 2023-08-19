async function load(url, element) {
    console.log('desde el load')
    const res = await fetch(url)
    console.log(res)
    element.innerHTML = await res.text()
}

async function loadData(url) {
    console.log('desde el load')
    const res = await fetch(url)
    // console.log(res.json())
    return res.json()
}