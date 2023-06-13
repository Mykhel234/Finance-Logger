import { ListTemplate } from './classes/ListTemplates.js'
import {Invoice} from './classes/invoice.js'
import {payments} from './classes/payments.js'
import {HasFormatter} from './interfaces/HasFormater.js'

const form = document.querySelector('form')!
const select = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const ul = document.querySelector('ul')!

//instance of the listTemplate class\

const list = new ListTemplate(ul)

form.addEventListener("submit", (e:Event)=>{
    e.preventDefault()

    // console.log(select.value, toFrom.value, details.value, amount.valueAsNumber)

    let doc: HasFormatter

    if(select.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else {
        doc = new payments(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, select.value, 'start')
})