var metro={};

$(document).ready(function() {
    $('header').load('modules/header.html');
    $('footer').load('modules/footer.html');
    $('select').material_select();
    $.getJSON('metro.json', function (data) {
        metro = data;
        selectF(metro);
    });
    //функция заполнения в HTML-файле элементов для выбора станции
    function selectF(array) {
        for (var key in array) {
       var optoins=document.createElement('option');
           optoins.value = key;
           optoins.innerHTML = array[key].name;
           $('.option').add(optoins);
        }
    };

    $('#rezult').on('click',function () {
        var peresadka;
        var out='';
        $('#out').empty();
        var start=$('#start').val();
        var finish=$('#finish').val();
        if (start[0]== finish[0]) {
            if (+start < +finish) {
                for (var i = start; i <= finish; i++) {
                    out +='<div class="chip">'+ metro[i].name + "</div>";
                }
            } else if (+start > +finish) {
                for (var i = start; i >= finish; i--) {
                    out +='<div class="chip">'+ metro[i].name + "</div>";
                }
            }
        }
        else if (start[0]!= finish[0]) {
            for (var i = (start[0]+'00'); i <= (start[0]+'99'); i++) {
                if (metro[i]== undefined) {break};
                if (metro[i].peresadka[0]== finish[0]){
                    peresadka=metro[i].peresadka;
                    if (+start < i) {
                        for (var keyId = start; keyId <= i; keyId++) {
                            out +='<div class="chip">'+ metro[keyId].name + "</div>";
                        }
                    } else if (+start > i) {
                        for (var keyId = start; keyId >= i; keyId--) {
                            out +='<div class="chip">'+ metro[keyId].name + "</div>";
                        }
                    }
                }
            }
            out += '<span class="perehid">Перехід</span>';
            if (+finish <= +peresadka) {
                for (var i = peresadka; i >= finish; i--) {
                    out +='<div class="chip">'+ metro[i].name + "</div>";
                }
            } else if (+finish > +peresadka) {
                for (var i = peresadka; i <= finish; i++) {
                    out +='<div class="chip">'+ metro[i].name + "</div>";
                }
            }
        }
        $('#out').append(out);
    });
});