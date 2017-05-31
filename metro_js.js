// var line={
//     "1":{"name":"Лукянівська"},
//     "2":{"name":"Золоті ворота",
//     "peresadka":["red","Театральнв"]
// },
//     "3":{"name":"Палац спорту",
//     "peresadka":["blue","Площа Льва Толстого"]
// },
//     "4":{"name":"Кловська"}
// };
// var red={
//     "1":{"name":"Університет"},
//     "2":{"name":"Театральна",
//     "peresadka":["green","Золоті ворота"]
// },
//     "3":{"name":"Хрещатик",
//     "peresadka":["blue","Майдан Незалежності"]
// },
//     "4":{"name":"Арсенальна"}
// };
// var blue={
//     "1":{"name":"Поштова площа"},
//     "2":{"name":"Майдан Незалежності",
//         "peresadka":["red","Хрещатик"]
//     },
//     "3":{"name":"Площа Льва Толстого",
//         "peresadka":["green","Палац Спорту"]
//     },
//     "4":{"name":"Олімпійська"}
// };



// var metro={
//     "100":{"name":"Лукянівська",
//            "peresadka":""},
//     "101":{"name":"Золоті ворота",
//            "peresadka":"201"
//     },
//     "102":{"name":"Палац спорту",
//            "peresadka":"302"
//     },
//     "103":{"name":"Кловська",
//            "peresadka":""},
//
//     "200":{"name":"Університет",
//            "peresadka":""},
//     "201":{"name":"Театральна",
//            "peresadka":"101"
//     },
//     "202":{"name":"Хрещатик",
//            "peresadka":"301"
//     },
//     "203":{"name":"Арсенальна",
//            "peresadka":""},
//
//     "300":{"name":"Поштова площа",
//            "peresadka":""},
//     "301":{"name":"Майдан Незалежності",
//            "peresadka":"202"
//     },
//     "302":{"name":"Площа Льва Толстого",
//            "peresadka":"102"
//     },
//     "303":{"name":"Олімпійська",
//            "peresadka":""}
// };


// var out='';
// var out1='';
// var out2='';
// var out3='';
// var out4='';
// var out5='';
// var peresadka;
// $('#rezult').on('click',function () {
//     var start=$('#start').val();
//     var finish=$('#finish').val();
//     console.log(metro[101].peresadka[0]);
//     console.log(start[0]+'00');
//     if (start[0]== finish[0]) {
//         if (+start < +finish) {
//             console.log(+start, +finish);
//             for (var i = start; i <= finish; i++) {
//                 out += metro[i].name + ", ";
//                 console.log(out);
//             }
//         } else if (+start > +finish) {
//             console.log(+start, +finish);
//             for (var i = start; i >= finish; i--) {
//                 out1 += metro[i].name + ", ";
//                 console.log(out1);
//             }
//         }
//     }
//     else if (start[0]!= finish[0]) {
//         for (var i = (start[0]+'00'); i <= (start[0]+'99'); i++) {
//             // console.log('metro[i]',metro[i].peresadka[0]);
//             // console.log('[i]',i);
//             if (metro[i]== undefined) {break};
//             // console.log('metro[i] step break',metro[i].peresadka[0]);
//             // console.log('[i]',i);
//             if (metro[i].peresadka[0]== finish[0]){
//                 console.log('metro[i] step peresadka',metro[i]);
//                 console.log('[i]',i);
//                 peresadka=metro[i].peresadka;
//                 console.log(metro[i].name+'-//-'+metro[i].peresadka);
//
//                     if (+start < i) {
//                         console.log(+start, i);
//                         for (var iP = start; iP <= i; iP++) {
//                             out2 += metro[iP].name + ", ";
//                             console.log('out2/lineStart',out2);
//                         }
//                     } else if (+start > i) {
//                         console.log(+start, i);
//                         for (var iP = start; iP >= i; iP--) {
//                             out3 += metro[iP].name + ", ";
//                             console.log('out3/lineStart',out3);
//                         }
//                     }
//
//
//             }
//         }
//         if (+finish < +peresadka) {
//             console.log(+finish, peresadka);
//             for (var i = peresadka; i >= finish; i--) {
//                 out4 += metro[i].name + ", ";
//                 console.log('out4/lineStart',out4);
//             }
//         } else if (+finish > +peresadka) {
//             console.log(finish, peresadka);
//             for (var i = peresadka; i <= finish; i++) {
//                 out5 += metro[i].name + ", ";
//                 console.log('out5/lineStart',out5);
//             }
//         }
//     }
// });

var out='';
var metro={};
var peresadka;
$(document).ready(function() {
    $.getJSON('metro.json', function (data) {
            metro = data;
    });

$('#rezult').on('click',function () {
    $('#out').empty();
    var start=$('#start').val();
    var finish=$('#finish').val();
    console.log(metro[101].peresadka[0]);
    console.log(start[0]+'00');
    if (start[0]== finish[0]) {
        if (+start < +finish) {
            console.log(+start, +finish);
            out='';
            for (var i = start; i <= finish; i++) {
                out += metro[i].name + " -> ";
                console.log(out);
            }
        } else if (+start > +finish) {
            out='';
            console.log(+start, +finish);
            for (var i = start; i >= finish; i--) {
                out += metro[i].name + " -> ";
                console.log(out);
            }
        }
    }
    else if (start[0]!= finish[0]) {
        out='';
        for (var i = (start[0]+'00'); i <= (start[0]+'99'); i++) {
            // console.log('metro[i]',metro[i].peresadka[0]);
            // console.log('[i]',i);
            if (metro[i]== undefined) {break};
            // console.log('metro[i] step break',metro[i].peresadka[0]);
            // console.log('[i]',i);
            if (metro[i].peresadka[0]== finish[0]){
                console.log('metro[i] step peresadka',metro[i]);
                console.log('[i]',i);
                peresadka=metro[i].peresadka;
                console.log(metro[i].name+'-//-'+metro[i].peresadka);

                if (+start < i) {
                    console.log(+start, i);
                    for (var iP = start; iP <= i; iP++) {
                        out += metro[iP].name + " -> ";
                        console.log('out2/lineStart',out);
                    }
                } else if (+start > i) {
                    console.log(+start, i);
                    for (var iP = start; iP >= i; iP--) {
                        out += metro[iP].name + " -> ";
                        console.log('out3/lineStart',out);
                    }
                }


            }
        }
        out += '<b>Перехід</b>  -> ';
        if (+finish < +peresadka) {
            console.log(+finish, peresadka);
            for (var i = peresadka; i >= finish; i--) {
                out += metro[i].name + " -> ";
                console.log('out4/lineStart',out);
            }
        } else if (+finish > +peresadka) {
            console.log(finish, peresadka);
            for (var i = peresadka; i <= finish; i++) {
                out += metro[i].name + " -> ";
                console.log('finish',out);
            }
        }
    }
    $('#out').append(out);
});

});