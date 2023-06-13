import { ListTemplate } from './classes/ListTemplates.js';
import { Invoice } from './classes/invoice.js';
import { payments } from './classes/payments.js';
const form = document.querySelector('form');
const select = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
//instance of the listTemplate class\
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(select.value, toFrom.value, details.value, amount.valueAsNumber)
    let doc;
    if (select.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, select.value, 'start');
});
