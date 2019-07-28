
var lenString = prompt ('Введите строку для поиска символа','Введите строку');
var symbol = prompt ('Введите символ для его поиска его в строке','о');

 function isCharPresent (Allstring,foundSymbol) {
 	Allstring = Allstring || 'Введите строку';
 	foundSymbol = foundSymbol || 'о';
 	for (var i = 0; i < Allstring.length; i++) {
 		if (Allstring[i] === foundSymbol) {
 			return true;
 		}
 	}
 		return false;
 }

alert (isCharPresent (lenString, symbol) ? 'Такой символ есть в строке!' : 'Такого символа в строке нет!');

/*
1. Вам нужно написать функцию isCharPresent. 
Она принимает 2 аргумента - строку и символ и узнает содержится ли символ в строке, возращает true / false*/