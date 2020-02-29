function registracija(){
    var vardas = document.getElementById('vardas').value;
    var vardas_input = document.getElementById('vardas');
    var pavarde = document.getElementById('pavarde').value;
    var pavarde_input = document.getElementById('pavarde');
    var el_pastas = document.getElementById('el_pastas').value;
    var el_pastas_input = document.getElementById('el_pastas');
    var password = document.getElementById('password').value;
    var password_input = document.getElementById('password');
    var repeat_password = document.getElementById('repeat_password').value;
    var repeat_password_input = document.getElementById('repeat_password');
    var tekstas = document.querySelector('.tekstas_po_input');
    if(vardas.length < 1 || pavarde.length < 1 || el_pastas.length < 1 || password.length < 1 || repeat_password.length < 1 ){
        tekstas.innerHTML = '*Užpildykite tuščius langelius'
    }
    else if(password !== repeat_password){
        tekstas.innerHTML = '*Slaptažodis nesutampa'
    } else{
        tekstas.innerHTML = ''
    };

    if(vardas.length < 1){
        vardas_input.classList.add('red_borders');
    } else{
        vardas_input.classList.remove('red_borders');
    }

    if(pavarde.length < 1){
        pavarde_input.classList.add('red_borders');
    } else{
        pavarde_input.classList.remove('red_borders');
    }

    if(el_pastas.length < 1){
        el_pastas_input.classList.add('red_borders');
    } else{
        el_pastas_input.classList.remove('red_borders');
    }

    if(password.length < 1 || password !== repeat_password){
        password_input.classList.add('red_borders');
    } else{
        password_input.classList.remove('red_borders');
    }

    if(repeat_password.length < 1 || password !== repeat_password){
        repeat_password_input.classList.add('red_borders');
    } else{
        repeat_password_input.classList.remove('red_borders');
    }
}


//=========================PRISIJUNGIMO FORMA START

function prisijungimas(){
    console.log('labas');
    var el_pastas = document.getElementById('exampleInputEmail1').value;
    var el_pastas_input = document.getElementById('exampleInputEmail1');
    var password = document.getElementById('exampleInputPassword1').value;
    var password_input = document.getElementById('exampleInputPassword1');
    var tekstas = document.querySelector('.tekstas_po_input_prisijungimo');

    if(el_pastas.length < 1 || password.length < 1){
        tekstas.innerHTML = '*Užpildykite tuščius langelius'
    } else{
        tekstas.innerHTML = ''
    };

    if(el_pastas.length < 1){
        el_pastas_input.classList.add('red_borders');
    } else{
        el_pastas_input.classList.remove('red_borders');
    }

    if(password.length < 1){
        password_input.classList.add('red_borders');
    } else{
        password_input.classList.remove('red_borders');
    }
}

//===============================PRISIJUNGIMO FORMA END