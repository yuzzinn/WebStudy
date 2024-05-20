//functional programing
//함수 자체를 인수로 받을 수 있음
//return 값을 function으로 받을 수 있음
//위 2개를 하기 위한 함수를 higher order function이라고 함

let numFirst = ''; //계산입력 첫 번째 숫자
let numSecond = ''; //계산입력 두 번째 숫자
let op_input = null; // 입력된 연산자를 저장하는 변수

//숫자를 입력 받는 higher-order function
//n은 문자열
//closure - 함수와 변수의 범위를 포함
//return 안에 있는 함수 + numFunc의 n는 모두 closure라고 함
//return 안에 n의 값이 주어져있지 않지만 numFunc의 n의 값을 전역변수처럼 사용하게 하는 개념
const numFunc = (n)=>{
    //함수를 만들어서 return함
    return () => {
        if(op_input == null)
            {
                numFirst = numFirst+ n;
                num_input.value = numFirst;
            }
            else
            {
                numSecond = numSecond+ n;
                num_input.value = numSecond;
            }
    };
};

const num_input = document.querySelector('#n_input');
const operator = document.querySelector('#o_input');
//addEventListener도 higher-order function임
//인수로 numFunc라는 함수를 받고 있기 때문

//숫자 입력 받음
document.querySelector('#num0').addEventListener('click', numFunc('0'));
document.querySelector('#num1').addEventListener('click', numFunc('1'));
document.querySelector('#num2').addEventListener('click', numFunc('2'));
document.querySelector('#num3').addEventListener('click', numFunc('3'));
document.querySelector('#num4').addEventListener('click', numFunc('4'));
document.querySelector('#num5').addEventListener('click', numFunc('5'));
document.querySelector('#num6').addEventListener('click', numFunc('6'));
document.querySelector('#num7').addEventListener('click', numFunc('7'));
document.querySelector('#num8').addEventListener('click', numFunc('8'));
document.querySelector('#num9').addEventListener('click', numFunc('9'));


//연산자를 입력 받는 higher-order function
// const opFunc = (op)=>{
//     return ()=>{};
// };

//위의 것과 동일한 역할을 수행
const opFunc = (op) => () => {
    switch(op){
        case'+':
        case'-':
        case'*':
        case'/':
            op_input = op;
            operator.value = op;
            break;
        case'=':
            switch(op_input)
            {
                case'+':
                    num_input.value = parseInt(numFirst) + parseInt(numSecond);
                    break;
                case'-':
                    num_input.value = parseInt(numFirst) - parseInt(numSecond);
                    break;
                case'*':
                    num_input.value = parseInt(numFirst) * parseInt(numSecond);
                    break;
                case'/':
                    num_input.value = parseInt(numFirst) / parseInt(numSecond);
                    break;
            }
            break;
        case'AC':
            numFirst = '';
            numSecond = '';
            op_input = null;
            num_input.value = '';
            operator.value ='';
            break;
    }
};


//연산자 입력 받음
document.querySelector('#operator_plus').addEventListener('click', opFunc('+'));
document.querySelector('#operator_sub').addEventListener('click', opFunc('-'));
document.querySelector('#operator_mul').addEventListener('click', opFunc('*'));
document.querySelector('#operator_div').addEventListener('click', opFunc('/'));
document.querySelector('#operator_calc').addEventListener('click', opFunc('='));
document.querySelector('#operator_clear').addEventListener('click', opFunc('AC'));

