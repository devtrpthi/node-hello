import {readFile} from 'fs/promises'

let template  = await readFile(new URL('template.html', import.meta.url),'utf-8')

//console.log(template)

const data = {
    title: 'Random title',
    body: 'Famous body'
}


for (const [k,v] of Object.entries(data)) {
    template = template.replace(`{${k}}`, v)
}

console.log(template)
