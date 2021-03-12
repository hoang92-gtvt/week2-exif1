function tinhtoan(){
    let number1 = parseInt(document.getElementById('nb1').value);
    let number2 = parseInt(document.getElementById('nb2').value);
    let operator = document.getElementById('operator').value;
    let result;
    if (operator=='+') {
        result = number1 + number2;

    }else{
        if (operator=='-'){
            result = number1 - number2;

        }else{
            if (operator=='*'){
                result = number1 * number2;

            }else{
                result = number1 / number2;

            }
        }
        }

    document.getElementById('kq1').value = result;
    }