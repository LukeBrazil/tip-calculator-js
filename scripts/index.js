const myButton = document.getElementById('calc')

myButton.addEventListener('click', tipAmount)

function tipAmount() {
    let bill_amount = document.getElementById('bill-amount').value;
    let service = document.getElementById('service').value;
    console.log(service)
    output = ''

    if(service == 1) {
        bill_amount = bill_amount * .20;
    }
    if(service == 2) {
        bill_amount = bill_amount * .15;
    }
    if(service == 3) {
        bill_amount = bill_amount * .10;
    } 
    console.log(bill_amount)
    output = bill_amount
    document.getElementById('output').innerHTML = `
        <p>Tip Amount: $${output}</p>
    `
    
}