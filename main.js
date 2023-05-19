// console.log( 123);
// alert('Привет это моя домашнее задание')


// var a = 1; //устаревший вариант
// let b = 3; //современный вариант
// const c = 0; // нельзя менять 
// a = 5; // перезаписали, одно = означает присваевание
// var mybirthDay = '11.11';
// mybirthDay  = '17.07.75';
// console.log(mybirthDay);
// const mybirthDay = '11.11';     //это ошибка
// let mybirthDay = '11.11';      // это ошибка
// var mybirthDay = '11.11';       //он не видит ошибку, но видит пустой

// let a =" 'Добро'+'пожаловать'+'на курс'+'Зухра'"
// a = 9
// console.log(a);

// today = '17.04.23';
// console.log(today);
// number
// infinity  математ бесконечность
// console.log(Infinity <1000000000000000000);                //false
// let a = Infinity              // 1 способ получить infinity, задать явно
// console.log(1/0);             // 2 способ  ? разделить число на 0

//NaN             математическу ошибку

// console.log(NaN);
// console.log(777);

//console.log('stroka' / 2);
//console.log(7**7);             //воведение в степень
//console.log(NaN**0)            // будет 1 

// begint                        // больше чем позволено
//console.log(77777777777777777777777n);  //в конце цифр добавить n

// sring  строка
//let str1 = 'JOJO'
//let str2 = "JOJO"
//let str3 =`ANIME ${str2}`          //дает больше возможгности
//let str3 =`ANIME ${2+3}`         // дает сумму цифр
//console.log(str1);
//console.log(str2);
//console.log(str3);

              //booLean   булевое значение
//let check = true
//let uncheck = false
//console.log(1>7);
//console.log(true==1);
//console.log(false==0);

           // Null  спец значение
// let nuller = null
// console.log(nuller);   

            // undefined 
// let a;
// console.log(a);      

            // type of распознает значения
// typeof x 
// typeof (x)
// console.log(typeof 'cat');
// console.log(typeof 2);
// console.log(typeof true);
// console.log(typeof 10n);
// console.log(typeof undefined);
// console.log(typeof null);

   //3 lesson

// document.getElementById(`first`).innerHTML=`Hello World`
// document.getElementById(`one`).innerHTML=`Hello world!!!!

// document.getElementById('one').innerHTML='Anime'
// document.getElementById('one').innerHTML='777'
// document.getElementById('one').innerHTML='KZ'

// document.querySelector('#one').innerHTML=777
// document.querySelectorAll('p').innerHTML='Хакуна Матата'

// document.querySelector('.quer').innerHTML='Хакуна Матата'
// let inp = document.querySelector('.text')
// let btn = document.querySelector('.check')
// btn.OnClick = function() {
//     console.log('что то вышло не так');
// }
// let inp = document.querySelector(".text");
// let btn = document.querySelector(".cheсker");
// console.log(btn);
// btn.onclick = function () {
// 	console.log("наконец то");
    // console.log(inp.value);             //появиться пустая строка в консоле
    // console.log(typeof inp.value);        //string 
    // console.log(+inp.value);                // выведет цифру
    // console.log(typeof +inp.value);           //number
    // console.log(typeof +inp.value+2);           //number2
    // console.log(+inp.value+2);                     //при наборе в Клик  цифры 123 , Консоль суммирует 123+2 и выдаст 125


//}

// let inp = document.querySelector(".text");
// let btn = document.querySelector(".cheсker");
// let out = document.querySelector('.out');
// btn.onclick = function () {
//     let e = inp.value
//     out.innerHTML = e        //перезаписывается введенное
//    out.innerHTML = inp.value   // короткая запись 
//       let e = inp.value
//       out.innerHTML = e 
//       inp. value = ''
//     }
//     let myhappy = prompt('Когда у тебя день рождение?');
//     console.log(myhappy);


    // if(myhappy==22){                    //укороченный вариант
    // alert('Yes')
    // if(myhappy==22)alert('Yes')

//     if(myhappy==22){                  //ввод несколько 
//     alert('Yes')
//     alert('Yes')
//     alert('Yes')
// }


    // if(myhappy==22){                  // со значением инача " else" можно "22"
    // alert('Yes')
    // }else{
    // alert('No')
    // }

    // if(myhappy<100){                  
    // alert('Yes')
    // }else{
    // alert('No')
    // }

    // if(условие){
    //     действие
    // }


                    //4 занятие
    // if(1>2){
    //     console.log(123);
    // }
    // else if(2>1){
    //     console.log(321);
    // }
    // else{
    //     console.log("иначе");
    // }


                                                 //правильная запись для <>=
    // let year = prompt('в каком году вышел ходячий значок?')
    // if(year<2004){
    //     console.log("Рано");
    // }
    // else if(year>2004){
    //     console.log("Поздно");
    // }
    // else{
    //     console.log("верно");
    // }
    //                                           // тоже можно, но не совсем верно
    // let year = prompt('в каком году вышел ходячий значок?')
    // if(year<2004){
    //     console.log("Рано");
    // }
    // if(year>2004){
    //     console.log("Поздно");
    // }
    // if(year == 2004){
    //     console.log("верно");
    // }
    //                             //вариант когда = верно, остальное ложь
    // let day = prompt('сколько дней в неделю?')
    // let week;
    // if(day==7){
    //     week =true
    // }
    // else{
    //     week =false
    // }
    // console.log(week);

                                    // сокращенный вариант

    // let day = prompt('сколько дней в неделю?')
    // let week = day ==7 ? true:false
    // //let - результат(переменная) = Условие ? если True Первый вариант : иначе Второй вариант
    // console.log(week);

                            //математические операторы
// -
// +
// *
// /
// %
// ** возведение в степень
//console.log(5**7);             // степень
//console.log(10%5);             // оператор остатка от деления %   (остаток ноль)
//console.log(10%3);            //остаток 1  
//console.log(10>2);
//<>       - оператор больше или меньше
//>=<=     -больше или равно, меньше или равно
//==       -не строгое равно
//===      -строгое равно
//=        -оператор присваивания
//!=       - не равно

// console.log(10>=10);
// console.log(10=='10');
// console.log(10==='10');
// console.log((1+'2')*2);
//            //1 + строковое '2'=12*2=24
// console.log('lets'>'fils');      //unicod  LETS cбольшой буквы будет меньше
// console.log('bac'>'adf');        // чем ниже буква в алфавите? тем больше будет он
// console.log(5>'1');              //true
// console.log(1>'5');              // false
// console.log(1==true)              //true
// console.log(1==false)              //false
// console.log(0==false)              //true
// console.log(('1'+1)>10)            //true

//                         //Логические операторы
// true||true=true        
// false||true=true
// true||false=true
// false||false=false
// let a =4
// let b = 10
// if(a<5 || a>5){
//     console.log(b);
// }

// &&
// true||true=true        
// false||true=false
// true||false=false
// false||false=false
// let a =4
//  let b = 10
//  if(a<5 && a>5){
//      console.log(b);
// }
// let a =4
//  let b = 10
//  if(a==4 && a<5){
//      console.log(b);
//  }


//              // оператор отрицания!
// let a = true
// console.log(!a);

                                            // 5 занятие 

    // сщздаем переменную, которая будет счетчиком
    // Ключевое слово while (пока условие true){
    //  Тело цикла
    //}

    // let i = 0;
    // while(i<3){
    //     //alert(i)
    //     console.log(i);
    //     i++
        //i+=1      то же самое
    //}
    // 1 итерация i=0
    // 2 итерация i=1
    // 3 итерация i=2
    // 4 итерация i=3
    // let i = 0;
    // while(i<3){
    //     //alert(i)
    //     console.log(i);
    //     i++                // без нее бесконечная цифра 0
    // }
    // let i = 2;
    // i++
    // console.log(i);
        
    // let i =2
    // // i++      //3
    // i--         //1
    // console.log(i);

    // let i = 0;
    // while(i<3){
    //     console.log(i);
    //     i++                    // не является правильным? нельзя применять
    // }

    //let i = 0;
    // i++                // означает счетчик перед увеличением
    // ++1                //означает увеличение счетчика после
    // console.log(i);
    //console.log(i++);    //0
    //console.log(++i);     //1
      
    // let i = 3;
    // while(i !=0){
        // console.log(i);     //можно сократить 
    //     i--
    // }
   
    //  let i = 3;
    // while(i ){                //вот так
    //     console.log(i);     
    //     i--
    // }


            // можно еще сократить
    // let i = 3;
    // while(i) console.log(i--);


// ключевое слово do {
//     тело цикла
// } ключевое слово while (условно)

// let i = 4;
// do{
//     console.log(i++);
// }while(i<3)


                        //ЦИКЛ for

//  ключевое слово for(начало; условие;шаг;)  {
//     начало цикла
//  }   
 
// for(let i = 0; i < 5; i++){
//     console.log(i);
// }
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// (Если условие == true  следует Выполнить тело, Выполнить шаг)
// ......

 
// // for(let i = 0; i < 5; i+=20){   //не верно
//     console.log(i);
// }



//выполняем начало
// let i = 0;
// // если условие ==true, то выполняется тело, выполняется шаг
// if(i<3){console.log(i)}; i++
// // если условие ==true, то выполняется тело, выполняется шаг
// if(i<3){console.log(i)}; i++
// // если условие ==true, то выполняется тело, выполняется шаг
// if(i<3){console.log(i)}; i++
// // если условие ==true, то выполняется тело, выполняется шаг
// // конец цикла

// for(let i = 0; i<3; i++){
//     console.log(i);
// }
// console.log(i);          //ошибка  console не встроена

// let i=0
// for(i = 0; i<3; i++){
//         console.log(i);
//     }
//     console.log(i);    // вывел дополнительно 3

// let i = 0
// for(;;){
//     console.log(i++);
// }

// let i = 0
// for(;;){
//     console.log(i++);
//     if(i>10)break;
// }

// let i = 0
// for(;;){
//     console.log(i++);
//     if(i>10)break;
//     console.log(i+10);
// }

// for(let i=0; i<10; i++){
//     if(i%2 ==0)continue;    // не четные 13579
//     console.log(i);
// }

// for(let i=0; i<10; i++){
//     if(i%2 ==0){                            //02468
//     console.log(i);
//     }
// } 

// for(let i=0; i<10; i++){
//     if(i%2 ==1)continue;    // не четные 02468
//     console.log(i);
// }

// for(let i=0; i<10; i++){
//     if(i%2 ==1){                            //13579
//     console.log(i);
//     }
// }



                                        //   6 занятие

   //макет

// switch(x){                     
//     case 'Значение 1'   //if (x== Значение 1) 
//         ТЕло
//         [break]
//     case 'Значение 2'   //if (x== Значение 2) 
//         ТЕло
//         [break]
//     case 'Значение 3'   //if (x== Значение 3) 
//         ТЕло
//         [break]        
// }           
//  if(x==1){
//     тело
//  }
//  else if(x==2){

//  }
//  else if(x==3){

//  }
//  else{

//  }

// let a = 5 + 5
// switch (a){
//     case 5:
//         console.log('Маловато');
//         break
//     case 10:
//         console.log('В точку');      //точку
//         break
//     case 15:
//         console.log('Перебор');
//     default:
//         console.log('Матан не твое');
// }

// let a = 5 + 5 + 5 
// switch (a){
//     case 5:
//         console.log('Маловато');
//         break
//     case 10:
//           console.log('В точку');             
//         break                                 
//     case 15:
//         console.log('Перебор');               //Перебор
//         //break
//     default:
//         console.log('Матан не твое');         //Матан не твое, потомучто между ними нет break
// }

// let a = 5 + 5 
// switch (a){
//     case 5:
//         console.log('Маловато');
    
//     case 10:
//           console.log('В точку');            // В точку
                                   
//     case 15:
//         console.log('Перебор');              //  Перебор 
        
//     default:
//         console.log('Матан не твое');       //  Матан не твое
// }

// let a = 5 + 5 + 5
// switch (a){
//     case 5:
//         console.log('Маловато');
    
//     case 10:
//           console.log('В точку');            
                                   
//     case 15:
//         console.log('Перебор');                   // Перебор
//           default:
//         console.log('Матан не твое');              // Матан не твое
// }

// let a ='1';
// let b = 0;
// switch(+a){
//     case b + 1:
//         console.log('вополнится, потому как значение +а, будет в точности равно и +1');
//         break
//         default:
//         console.log('это не выполнится');    
// }
// let c = +a
//         console.log(typeof +a); //вополнится, потому как значение +а, будет в точности равно и +1
//                                 //number (+a преобразует в нумер
                                
// let a ='1';
// let b = 0;
// switch(+a){
//     case b + 1:
//         console.log('вополнится, потому как значение +а, будет в точности равно и +1');
//         break
//         default:
//         console.log('это не выполнится');    
// }
// let c = +a
//         console.log(typeof +a);                  // number
//         console.log(typeof c);                  // number
//         console.log(c== a);                    // true
//         console.log(c===a);                   // false
//         console.log(c===+a);                  // true



// let a = 12
// switch(a){
//     case 12:
//         alert('Правильно');                      // правильно
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')
//         alert('Может тебе взять курс по матану?')
//     default:
//         alert('результат кривой однозначно')
// }

// let a = 12
// switch(a){
//     case 11:
//         alert('Правильно');                      
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')
//         alert('Может тебе взять курс по матану?')
//     default:
//         alert('результат кривой однозначно')            // результат кривой однозначно

// }

// let a = 5
// switch(a){
//     case 12:
//         alert('Правильно');                      
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')                         //Не правильно
//         alert('Может тебе взять курс по матану?')     //Может тебе взять курс по матану?
//     default:
//         alert('результат кривой однозначно')         //результат кривой однозначно
// }


// let a = 5
// switch(a){
//     case 12:
//         alert('Правильно');                      
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')                         //Не правильно
//         alert('Может тебе взять курс по матану?')     //Может тебе взять курс по матану?
//         break
//     default:
//         alert('результат кривой однозначно')         
// }



// let a = 5
// switch(a){
//     case 12:
//         alert('Правильно');                      
//         break
//     case 5:
//     case 10:
//         alert('Не правильно')                         //Не правильно
//         break
//         alert('Может тебе взять курс по матану?')     
//         break
//     default:
//         alert('результат кривой однозначно')         
// }

// let arg = prompt ('Введите число')      //
// switch(arg){
//     case '0':
//     case '1':
//         alert('один или ноль')          //
//     case '2':   
//         alert('вы ввели 2')             //
//         break
//     case 3:
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Неизвестное значение')
// }

// let arg = prompt ('Введите число')      //
// switch(arg){
//     case '0':                           //+
//     case '1':                           //+
//         alert('один или ноль')          //+
//         break         
//     case '2':                            //-
//         alert('вы ввели 2')             //-
//         break
//     case 3:                              //*
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Неизвестное значение')    //*
// }
// console.log(typeof arg);


// let arg = +prompt ('Введите число')      
// switch(arg){
//     case '0':                           
//     case '1':                           
//         alert('один или ноль')          
//         break         
//     case '2':                            
//         alert('вы ввели 2')             
//         break
//     case 3:                              
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Неизвестное значение')       // qwer Nan
// }
// console.log( arg);

   // домашка
// let arg = +prompt ('Введите число от 1 до 4')      
// switch(arg){
//     case '0':                           
                          
//         alert('один или ноль')          
//         break         
//     case '2':                            
//         alert('вы ввели 2')             
//         break
//     case 3:                              
//         alert('Никогда не выполнится')
//         break
//     default:
//         alert('Неизвестное значение')       // qwer Nan
// }
// console.log( arg);


        //ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ

//  a??b  a, если а не определено, то b

// let user;
// alert(user?? 'Аноним')          //Аноним

// let user ='John';             // John
// alert(user?? 'Аноним')         
// //потому что user = John

// let user ='';        // user= пустое   
// alert(user?? 'Аноним') 


// let firstName = null
// let lastName = null
// let nickName = 'Naruto01'

// alert(firstName ?? lastName ?? nickName ?? "Аноним")     // Naruto01 т к он не  non и не underfine


// let firstName = null
// let lastName = null
// let nickName = 'Naruto01'

// alert(firstName || lastName || nickName || "Аноним")     // Naruto01 т к он не  non и не underfine  || - или


//       знак || или, такое же знаечение как и ??? он был создан первым? разница || возвращает истинное значение, не возвращает пустое значение, ?? оперед значение

                                                                 //домашка 6.1

// let a = 1
// let b = +prompt('введите число')
// switch(a){
//     case b : 
//     alert('верно')
//     break;
// default:
// alert('не верно')
// }





                                         // 7 занятие Функции
                                        // Fuktion  declaration

// ключевое слово function название функции (параметры){
//     тело функции
// }
// function one(){
//     console.log('Наша первая осознанная функция');
// }                                                                   // без вызова ничего не делает
// one()                                                                   // важны скобки


              // не работает


// let i = 0
// function one(){
// console.log('Наша первая осознанная функция');
// alert('Ты нажал кнопку ' + i + ' раз')
// i+=1
// }

// let btn = document.querySelector('.checker')
// console.log(btn)
// btn.onclick = one




// function borsh (){
//     console.log('порезать лук');
//     console.log('овощи');
//     console.log('поставить кастрюлю');
    
// }

// borsh()
// borsh()                               //продублируется еще раз


// function two(){
//     console.log('это уже второй вызов и что то')
//     return 777
// }

// let btn = document.querySelector('.checker')
// let a = 8;
// let b = 10;
// function two(){
//     console.log('это уже второй вызов и что то')
//     return 777
// }
// btn.onclick=two

// let btn = document.querySelector('.checker')
// let a = 8
// let b = 10

// function multiply(){
//     console.log(a*b);
//     return a*b         // после return ничего не должно быть, он должен быть в конце

// }
// multiply()



// let btn = document.querySelector('.checker')
// let a = 12
// let b = 118

// function multiply(){
//     console.log(a+b);
//     return a+b         // после return ничего не должно быть, он должен быть в конце

// }
// multiply()


// function mlt(x, y, z){
//     return x*y+z
// }
// console.log(mlt(3, 4, 4));


// let a = prompt('Ваше имя?')
// function mlt(x,y){
// return x + y
// }
// let c = mlt('Добро пожаловать ', a )
// console.log(c);



// btn.onclick = function(){
//     console.log(123);
// }
    
// btn.onclick = () =>{
//     console.log('Anon');
// }


//let btn = document.querySelector('.checker')
     // function declaration

// function one(){
//     console.log('Это function declaration');
   
// }

//      // function expretion
// let two = function(){
//     console.log('это function expretion');
// }

//     // стрелочная функция
// let three = () =>{
//     console.log('Стрелочная функция');
// }
// one()
// two()
// three()





                                //домашка 7.1


// let btn=document.querySelector('.checker') 
// let out= document.querySelector('.out')
// let a = 20
// function play(){
//     out.innerHTML= a
// }
// btn.onclick= play


                                      //7.2

// let btn = document.querySelector('.checker')
// let a =36
// let b = 12

// function multiply(){
// console.log(a*b);
//    console.log(a/b);
//    console.log(a+b);
//    console.log(a-b);
// }
// multiply()

// // Запрос выбора операции у пользователя и сохранение результата в переменной menu.
// let menu = prompt("Калькулятор: 1) сложение, 2) вычитание, 3)умножение, 4) деление");

// // Получение ссылки на HTML-элемент с классом qwert и сохранение в переменной qwert.
// let qwert = document.querySelector('.qwert');

// // Функция для выполнения операции сложения.
// function calc1(a, b) {
// // Если выбрана операция сложения, запрашиваем у пользователя два числа и выполняем сложение.
// if (menu == 1){
// let s1 = prompt("a");
// let s2 = prompt("b");
// let sum = +s1 + +s2;
// // Выводим результат сложения на страницу в HTML-элемент с классом qwert.
// qwert.innerHTML = sum;
// }
// }

// // Функция для выполнения операции вычитания.
// function calc2(a, b) {
// // Если выбрана операция вычитания, запрашиваем у пользователя два числа и выполняем вычитание.
// if (menu ==2){
// let s1 = prompt("a");
// let s2 = prompt("b");
// let sub = s1 - s2;
// // Выводим результат вычитания на страницу в HTML-элемент с классом qwert.
// qwert.innerHTML =sub;
// }
// }

// // Функция для выполнения операции умножения.
// function calc3(a, b) {
// // Если выбрана операция умножения, запрашиваем у пользователя два числа и выполняем умножение.
// if (menu == 3){
// let s1 = prompt("a");
// let s2 = prompt("b");
// let multi = s1 * s2;
// // Выводим результат умножения на страницу в HTML-элемент с классом qwert.
// qwert.innerHTML = multi;
// }
// }

// // Функция для выполнения операции деления.
// function calc4(a, b) {
// // Если выбрана операция деления, запрашиваем у пользователя два числа и выполняем деление.
// if (menu == 4){
// let s1 = prompt("a");
// let s2 = prompt("b");
// let div = s1 / s2;
// // Выводим результат деления на страницу в HTML-элемент с классом qwert.
// qwert.innerHTML =div;
// }
// }

// // Вызываем каждую функцию для выполнения операции, если она была выбрана пользователем.
// calc1();
// calc2();
// calc3();
// calc4();

                                       // занятие 8 . Дом

// const one = document.querySelector('.one')
// one.style.color = '#03fccf'                                 // приоритетный, цвет будет этот, даже если будет другой
// // one.style.marginLeft = '150px'                           // отступ от левой части
// //let carNameToy                                        // система Кэмел кейс? каждое новое слово с большой буквы
// // one.style.paddingLeft='150px'
// // one.style.textAlign="center"                            // приоритетный, будет эта команда, даже если будет другая
// console.log(one.style);
// // one.classList.add('black')                    // добавляет класс заголовка
// one.classList.add('pad')                      // добавка дополн класса 20px отступа
// one.classList.remove('pad')                   //удалить класс
// one.classList.remove('black')                 // удалить класс

// let btn = document.querySelector('.btn')
// btn.onclick = function(){
// this.classList.toggle('black')               // можно несколько раз нажимать на клик
//    // this.classList.add('black')                    // то один раз нажимается на клик
// }


// const btn = document.querySelector('.btn')
// const body = document.querySelector('body')
// btn.onclick = function(){
//    body.classList.toggle('bodys')               // при Клике меняется цвет страницы
// }  

                              // Смена сайта и темы

// const btn = document.querySelector('.btn')
// const body = document.querySelector('body')
// btn.onclick = function(){
//    body.classList.toggle('bodys')
//    btn.style.color = 'white'  
//    btn.backgroundColor = 'black'             
// }  

           
// const one = document.querySelector('.one')
// one.setAttribute('data-num',7)                  // data всегда в переди
// console.log(one.getAttribute('data'));

// let genre = document.querySelectorAll('.genre')
// for(let i =0; i<genre.length;i++){
//     genre(i).onclick = function(){
//         let shop = document.querySelector('.shop').value
//         let price = this.getAttribute('data')
//         console.logs ('hop*price')
//     }
// }

// let genre = document.querySelectorAll('.genre')
// for(let i = 0; i<genre.length;i++){
//     genre[i].onclick = function(){
//         let shop = document.querySelector('.shop').value
//         let price = this.getAttribute('data')
//         let out = document.querySelector('.out')
//         out.innerHTML = shop * price
//         console.log(shop * price);

//         // return shop.innerHTML = ''
//         return console.log(shop * price)

// }
// }


 
                           //Занятие 9  Массивы

// let a = 'Anime'      // строковой тип данных  - переменная
// let b = true         // bulen true fauls    - переменная   
// let c = 1;           // числовой тип данных number   - переменная
                     // переменная может хранить один тип данных
// let d =['Anime', true, 1]                 // массив в [] скобках
     //[   0       1   2]
// console.log(d);
// console.log(d[1]);        // выводит true через 1

// let d =['Anime', true, 1, 'томат', 'бэтмэн']
// console.log(d[3]);        // выводит томат через 3

// let d =['Anime', true, 1, 'томат', 'бэтмэн', false]
// console.log(d[4]);        // выводит бэтмэн через 4

// let e = []         // пустой массив


// let d =['Anime', true, 1]
// console.log(d[4]);        // underfined
// let e = []        



// let d =['Anime', true, 1, 5]
// console.log(d.length);        // обращение к length показывает длину массива
// // for(let i=0; 90>i; i++)       // не корректно
// // for(let i = 0; d.length>i; i++)          // правильно  подсчет массива
// let e = []  
// console.log(d [i]);


                //Метод массива  PUSH  добавить в массив 

// let a = 'Anime'      // строковой тип данных  - переменная
// let b = true         // bulen true fauls    - переменная   
// let c = 'ты добавил это через переменную';           // числовой тип данных number   - переменная

// let a = ['a','b', 'c', 'd']
// const b = [1,2,3,4,5,6,7,8]
// console.log(a.length);
// console.log(a.push(9,1,2,3,4,5,6,7,8,9));        // добавил 9,1,2,3,4,5,6,7,8,9 в массив
// console.log(a.push(true));     // добавил true в массив
// console.log(a.push('and', 'litle', c));     // добавил and, litle и переменную с='ты добавил это через переменную' в массив
// console.log(a);      
//console.log(b);  

// let c = 'ты добавил это через переменную'; 
// let a = ['a','b', 'c', 'd']
// const b = [1,2,3,4,5,6,7,8]
// b.push('Zukhra')    // добавил в массив Zukhra, это для удаления, возвращения, вставить копию , изменения
// console.log(b);


                                  // МЕТОД POP  удаляет последний элемент массива

// let c = 'ты добавил это через переменную'; 
// let a = ['a','b', 'c', 'd']
// const b = [1,2,3,4,5,6,7,8]
// b.push('Zukhra')    
// b.pop()        //удаляет последний массив Zukhra
// b.pop()            //удаляет последний массив еще на одну 8
// b.pop()
// b.pop()
// b.pop()
// b.pop()
// b.pop()
// console.log(b);    // точно так же в переменной a удалять

// a.pop()           // точно так же в переменной a удалять, можно удалять до конца
// console.log(a);


// let c = 'ты добавил это через переменную'; 
// let a = ['a','b', 'c', 'd']
// const b = [1,2,3,4,5,6,7,8]
// b.push('Zukhra') 
// console.log(b);  
// b.pop()      // удалил последний элемент массива
// console.log(b.pop()); // вывел в консоль последний элемент и вывед среднене измененный вариант массива
// console.log(b);

// console.log(a);

                         //Удаление  прибавление из середины массива

// let c = 'ты добавил это через переменную'; 
// let a = ['a','b', 'c', 'd']
// const b = [1,2,3,4,5,6,7,8]
// b.push('Zukhra') 
// console.log(b);  
// b.pop()      
// console.log(b.pop()); 
// console.log(b);
// //delete b[3]                //удалить 3 нумерацию (4), вместо него слово пусто  НЕ ИСПОЛЬЗОВАТЬ
// // b.splice(3,2)                // первая цифра индекс,  вторая указывает сколько цифр после индекса удалять (после 3ей цифры удалить 2 цифры)
// // b.splice(4,3)                // первая цифра 4 индекс,  вторая 3 указывает сколько цифр после индекса удалить 3 цифры (5,6,7)
// // b.splice(3,1, 'ух ты')          // в место пропущенного добовляет "Ух ты"
// b.splice(3,4, 'ух ты')  
// console.log(b);


                                   //Двумерные массивы

// let a =[1,2,3,4,5]

// let b = [
//     [1,2,3],    // 3 строки индексация 0=первая строка, 1 =  2строка , 2= 3 строке
//     [4,5,6],    // в каждой строке индексация по новой с нуля 0=1, 0=4, 0=7, 1=2,1=5,1=8,2=3,2=6,2=9
//     [7,8,9]
// ]

// // console.log(a[2]);
// console.log(b[2][1]);    //2 һ 3 строке 1=8, консоль = 8

                            // FOR metod
// let a =[1,2,3,4,5]

// let b = [
//     [1,2,3],    // 3 строки индексация 0=первая строка, 1 =  2строка , 2= 3 строке
//     [4,5,6],    // в каждой строке индексация по новой с нуля 0=1, 0=4, 0=7, 1=2,1=5,1=8,2=3,2=6,2=9
//     [7,8,9]
// ]
// for(let i = 0; b.length>i; i++){
//     console.log(b [i]);
// }
                    // Цикл внутри цикла

// let a =[1,2,3,4,5]

// let b = [
//     [1,2,3],    // 3 строки индексация 0=первая строка, 1 =  2строка , 2= 3 строке
//     [4,5,6],    // в каждой строке индексация по новой с нуля 0=1, 0=4, 0=7, 1=2,1=5,1=8,2=3,2=6,2=9
//     [7,8,9]
// ]
// for(let i = 0; b.length>i; i++){
//    let c = b[i]          // массив = 123
//    for (let j=0;j<c.length; j++){
//     console.log(c[j]);
//    }
// }                                         // в консоле все массивы в одном столбце
    


// let a =[1,2,3,4,5]

// let b = [
//     [1,2,3],    // 3 строки индексация 0=первая строка, 1 =  2строка , 2= 3 строке
//     [4,5,6],    // в каждой строке индексация по новой с нуля 0=1, 0=4, 0=7, 1=2,1=5,1=8,2=3,2=6,2=9
//     [7,8,9]
// ]
// for(let i = 0; b.length>i; i++){
//    let c = b[i]          // массив = 123
//    console.log(b[i]);
//    for (let j=0;j<c.length; j++){
//     console.log(c[j]);
//    }
// }                           //в три строки 123   456   789

                                


                                
                               // обратный перебор
// let a =[1,2,3,4,5]

// let b = [
//     [1,2,3],    // 3 строки индексация 0=первая строка, 1 =  2строка , 2= 3 строке
//     [4,5,6],    // в каждой строке индексация по новой с нуля 0=1, 0=4, 0=7, 1=2,1=5,1=8,2=3,2=6,2=9
//     [7,8,9]
// ]
// for(let i = 0; b.length>i; i++){
//    let c = b[i]          // массив = 123
//    for (let j=c.length-1; j>=0; j--){
//     console.log(c[j]);
//    }
// }                           // в один столбец 321654987 в обратном порядке


                                // в обучении и на практике   привязка к HTML
// let a =[1,2,3,4,5]

// let b = [
//     [1,2,3],    // 3 строки индексация 0=первая строка, 1 =  2строка , 2= 3 строке
//     [4,5,6],    // в каждой строке индексация по новой с нуля 0=1, 0=4, 0=7, 1=2,1=5,1=8,2=3,2=6,2=9
//     [7,8,9]
// ]
// let out='';
//     for(let i = 0; b.length>i; i++){
//     for (let j= 0; j<b[i].length; j++){
//         console.log(b[i][j]);
//         out += b[i][j]+ ''   // по горизонтали
//         out+='<br>'          // по вертикали
//    }                                 //в консоле все массивы в одном столбце 123456789
// }    
// document.querySelector('.out').innerHTML= out 



// let a =[1,2,3,4,5]

// let b = [
//     [1,2,3],    // 3 строки индексация 0=первая строка, 1 =  2строка , 2= 3 строке
//     [4,5,6],    // в каждой строке индексация по новой с нуля 0=1, 0=4, 0=7, 1=2,1=5,1=8,2=3,2=6,2=9
//     [7,8,9]
// ]
// let out='';
//     for(let i = 0; b.length>i; i++){
//     for (let j= 0; j<b[i].length; j++){
//         console.log(b[i][j]);
//         if(b[i][j]>4){       // ВСЕ ЦИФРЫ БОЛЬШЕ 4
//         out += b[i][j]+ ''
//         out+='<br>'
//         }
//    }                                 //в консоле все массивы в одном столбце 123456789
// }    
// document.querySelector('.out').innerHTML= out 



                                // Занятие 10   API

// fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=87518c092f437a178c4f99de30a85995')
// .then(function(resp){return resp.json()})
// .then(function(data){
//     document.querySelector('.city-name').innerHTML = data.name 
//     document.querySelector('.city-name').textContent = data.name 
//     console.log(data.name)
//     document.querySelector('.temp').textContent = Math.round((data.main.temp -273) ) + '°C'
//     document.querySelector('.weather').textContent= data.weather[0]['description']
//     document.querySelector('.icon').innerHTML = `<img src ='https://openweathermap.org/img/wn/${data.weather[0][`icon`]}@2x.png'>`
//     console.log(data);
// })


// fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.18&lon=71.45&appid=87518c092f437a178c4f99de30a85995')
// .then(function (resp) {return resp.json()})
// .then(function (data){
//     document.querySelector('.city-name').innerHTML = data.name 
//     document.querySelector('.city-name').textContent = data.name 
//     console.log(data.name)
//     document.querySelector('.temp').textContent = Math.round((data.main.temp -273) ) + '°C'
//     document.querySelector('.weather').textContent= data.weather[0]['description']
//     document.querySelector('.icon').innerHTML = `<img src ='https://openweathermap.org/img/wn/${data.weather[0][`icon`]}@2x.png'>`
//     document.querySelector('.wind.speed').textContent= Math.round(data.wind.speed)
//     document.querySelector('.humidity').textContent= data.main.humidity +"%";  
//     console.log(data);
// })


                                // занятие 11  Promise

// let a = new Set();
// a.add(777)      // add добавление создание
// a.add(123)
// a.add(321)
// a.add('qwer')
// a.add(true)
// a.add('asdsd')
// console.log(a);
// console.log(a.size);



// let a = new Set();
// let b = [1,2,3,4,5,6,7,7,7,7,7,7,7,8]
// // a.add(1)      // add добавление создание
// // a.add(2)
// // a.add(3)
// // a.add(2)             // убирает дубли
// // a.add(1)
// // a.add('z')                 // добавление
// a.add('строка')
// a.add('Строка')               // если две разные то выйдет два слова? если одинаковые с маленкой буквы то одно
// console.log(a);
// console.log(a.size);
        
                  //удаление из Set

// let a = new Set();
// let b = [1,2,3,4,5,6,7,7,7,7,7,7,7,8]
// a.add(12)     
// a.add(43)
// a.clear()                       // если его писать в середине, то удалится начальное 12,43, останется 82, строка и Строка
// a.add(82)
// a.add('строка')
// a.add('Строка')  
// a.delete('Строка1')                    // ничего не происходит, так как нет такой строки
// // a.delete('Строка')                //удаляет только ту строку, которую указываем
// // a.clear()                    //можно удалить все одним разом через a. clear(;) если его писать в конце a.add
// console.log(a);
// console.log(a.size);


                                     //Метод  HAS

 
// let a = new Set();
// let b = [1,2,3,4,5,6,7,7,7,7,7,7,7,8]
// a.add('строка')
// a.add('Строка')  
// a.add(12)
// a.add(43)
// a.add(82)          
// console.log(a);
// console.log(a.has(12));              // это для проверки. если есть такая строка дает нам true, если нет такой строки дает false
// console.log(a.size);                                    


                                 // FOR OFF
// let a = new Set();
// let b = [1,2,3,4,5,6,7,7,7,7,7,7,7,8]
// a.add('строка')
// a.add('Строка')  
// a.add(12)
// a.add(43)
// a.add(82)          
// console.log(a);
// console.log(a.has(12));              
// console.log(a.size); 
// for (let i of a){                    //  FOR преобразовал Set  и вывел как массив
//     console.log(i);
// }
    

// let b = [1,2,3,4,5,6,7,7,7,7,7,7,7,8]              // вывел от 1 до 8 ми , дубликаты убрал
// let a = new Set(b);   

// let b = ['2',2,'2']                                    //выведе толь две двойки
// let a = new Set(b);   

// let c =1
// let d = 2-1
// let b = [c,d]                                         // c=1, b=2-1=1, выведится 1, не дублируя вторую 1 ку
// let a = new Set(b);   

// let c =24                             
// let d= (1+'2')*2                      // выведет одну переменную 24, 1+строковая 2 это 12 *2 = 24
// let b = [c,d]
// let a = new Set(b);                                

 
// for (let i of a){                    //  FOR преобразовал Set  и вывел как массив
//     console.log(i);
// }

// let b = [1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,7,8]             
// let a = new Set(b); 

// // for (let i of a){                   
// //     console.log(i);
// // }
// for(let i = 0; i<b.length; i++){                  // выводит дубли
//     console.log(b[i]);
// }

// // for(let key in b){
// //     console.log(b[key]);    // перебор массивов , вывод дубликатов
// // }
// for(let key of b){
//     console.log(key);
// }



                                        // Занятие 12 Дом

// document.querySelector('.one').onclick = function (event) {
//     console.log(event);
//     console.log('это первый блок');

// }
// document.querySelector('.two').onclick = function(){
//     console.log('Блок 2');
// }
                                        // Двойной Клик

// document.querySelector('.one').onclick = function (event) {
//     console.log(event);
//     console.log('это первый блок');

// }
// document.querySelector('.two').ondblclick = function(){
//     console.log('Блок 2');
// }

                                    // Добавление блока при наведений мыши
// document.querySelector('.one').onclick = function (event) {
//     console.log(event);
//     console.log('это первый блок');

// }
// document.querySelector('.two').oncontextmenu = function(){
//     console.log('Блок 2');
//     return false
// }
// document.querySelector('.three').onmousemove = function(){
//     console.log('Блок 3');
// }

                                  // увеличение пикселей
// document.querySelector('.one').onclick = function (event) {
//     console.log(event);
//     console.log('это первый блок');

// }
// document.querySelector('.two').oncontextmenu = function(){
//     console.log('Блок 2');
//     return false
// }
// let width = 100
// document.querySelector('.three').onmousemove = function(){
//     document.querySelector('.three').style.width = width +'px'
//     width++
// }

                                 // менять цвета
// document.querySelector('.one').onclick = function (event) {
//     console.log(event);
//     console.log('это первый блок');

// }
// document.querySelector('.two').oncontextmenu = function(){
//     console.log('Блок 2');
//     return false
// }
// let width = 100
// document.querySelector('.three').onmouseenter = function(){
//     document.querySelector('.three').style.background ='pink'
// }
//                  // возврат на другой цвет
// document.querySelector('.three').onmouseleave = function(){
//     document.querySelector('.three').style.background = 'white'
// }

//                     // при удерживании мыши краситься в другой цвет

// document.querySelector('.three').onmousedown = function(){
//     document.querySelector('.three').style.background = 'red'
// }
//                    // при отпускании клавиши мыши краситься в другой цвет

// document.querySelector('.three').onmouseup = function(){
//     document.querySelector('.three').style.background = 'green'
// }

                        //события с клавиатурой

// document.querySelector('.inp1').oninput = function(event){
//     console.log(event);
// }   
                     // почти как oninput, только когда клавиша нажата
// document.querySelector('.inp1').onkeypress = function(event){
//     console.log(event);
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.key);
// }  
                    // использование служебных клавиш выводит коды сразу при нажатии

// document.querySelector('.inp1').onkeydown = function(event){
//     console.log(event);
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.key);
// } 
                    // использование служебных клавиш  выводит в консоль код после отпуска клавиши

// document.querySelector('.inp1').onkeyup = function(event){
//     console.log(event);
//     console.log(event.charCode);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.key);
// } 

                                        //Домашка 12 . 1

// let width = 100
// let height =100
// document.querySelector('.one').onmousemove = function(){
//       document.querySelector('.one').style.width= width +'15px'
    
//       document.querySelector('.one').style.height= height +'15px'
   
// }
    
                                        //Домашка 12 . 2
// let div = document.createElement('div');   
// document.querySelector('div').ondblclick = function () {
//     div.className = "alert";
//     div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
//     document.body.append(div);
//     console.log('Вы прочитали важное сообщение');
// }

//                                         //Домашка 12 . 3

// document.querySelector(Imagees).onclick ="document='images/home1.png';" {
// document.querySelector(Imagees).onmousedown="document.home.src='/images/home2.jpg';" 
// }

// document.querySelector(home1).onmousedown =function() {
//     // document.querySelector(Imagees).src='images  '
//     document.getElementById(home1)
    
// }
//                 //Я не знаю шаблона как связать картину home1 с JS




                            //Домашка 12 . 5
    


function check() {

let input = document.querySelector('input');
let a = new Set();
//    let b = [7,17,27,77,777]
    a.add('Hello')      
    a.add('Привет')
    a.add('Салем')
    a.add('Meraba')
    a.add('Hola')
console.log(input.value );
console.log(a.has());
  
}
