class GetNumero {
    constructor(id) {
        this.id = id;
    }

    GetNumber() {
        return document.getElementById(this.id).value;
    }
}

class ParseadorDeInt {
    constructor(string) {
        this.string = string;
    }

    parsear() {
        return parseInt(this.string);
    }
}

class CalculaResto {
    constructor(num) {
        this.num = num;
    }

    Resto() {
        return this.num % 2;
    }
}

class IsPar {
    constructor(num) {
        this.num = num;
    }

    isNumberPar() {
        if(this.num == 0) {
            return true;
        } else {
            return false;
        }
    }
}

class Conclude {
    constructor(bool) {
        this.bool = bool;
    }

    concluir() {
        if(this.bool) {
            alert("Número é par sim");
        } else {
            alert("Número não é par");
        }
    }
}

var calculate = function() {
    var getNumero = new GetNumero("numero");
    var numero = getNumero.GetNumber();
    var parser = new ParseadorDeInt(numero);
    var intNum = parser.parsear();
    var calculaResto = new CalculaResto(intNum);
    var result = calculaResto.Resto();
    var isPar = new IsPar(result);
    var result2 = isPar.isNumberPar();
    var conclude = new Conclude(result2);
    conclude.concluir();
}