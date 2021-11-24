"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logarClasse(constructor) {
    console.log(constructor);
}
function decoratorVazio(_) { }
function logarClasseSe(valor) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(obj) {
    return function (_) {
        console.log(obj.a + ' ' + obj.b);
    };
}
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
};
Eletrodomestico = __decorate([
    logarObjeto
], Eletrodomestico);
function logarObjeto(constructor) {
    console.log('carregando...');
    return class extends constructor {
        constructor(...args) {
            console.log('antes...');
            super(...args);
            console.log('depois...');
        }
    };
}
new Eletrodomestico();
new Eletrodomestico();
// Desafio 
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'gui@gui.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        console.log('Algo esta errado');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Sem permissao');
            }
        }
    };
}
class ContaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        // if(valor <= this.saldo){
        this.saldo -= valor;
        return true;
        // } else{
        //   return false
        // }
    }
    getSaldoo() {
        return this.saldo;
    }
}
__decorate([
    congelar,
    __param(0, paramInfo)
], ContaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], ContaCorrente.prototype, "getSaldoo", null);
const cc = new ContaCorrente(20000);
cc.sacar(4000);
cc.sacar(20000);
// cc.getSaldoo = function(){
//   return this['saldo'] + 7000
// }
console.log(cc.getSaldoo());
function congelar(alvo, metodo, descritor) {
    console.log(alvo);
    console.log(metodo);
    descritor.writable = false;
}
// Decorator atributo
function naoNegativo(alvo, nomePropriedade) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function () {
            return alvo["_" + nomePropriedade];
        },
        set: function (valor) {
            if (valor < 0) {
                throw new Error('Saldo Invalido');
            }
            else {
                alvo['_' + nomePropriedade] = valor;
            }
        }
    });
}
// Decorator Parametro Metodo
function paramInfo(alvo, nomeDoMetodo, indiceParam) {
    console.log(`Alvo ${alvo}`);
    console.log(`Nome do Metodo ${nomeDoMetodo}`);
    console.log(`Indice do parametro ${indiceParam}`);
}
//# sourceMappingURL=decorators.js.map