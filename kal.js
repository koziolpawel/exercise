function kal (ileCzasu) {
	console.log('lorem ipsum' + ileCzasu)
}
kal('10 minut');

function jazda (km, gdzie) {
	console.log('Wlasnie jade' + km + 'km/h, w kierunku' + gdzie)

}

var predkosc = jazda (130, 'Warszawa');
console.log(predkosc)


//***********
function policz (dzialanie, liczba1, liczba2){
	var wynik = false;
	
	if (dzialanie === 'dodaj') {
		wynik = liczba1 + liczba2;
	} else if (dzialanie === 'odejmij'){
		wynik = liczba1 - liczba2;
	} else if (dzialanie === 'pomnoz'){
		wynik = liczba1 * liczba2;
	} else if (dzialanie === 'podziel'){
		wynik = liczba1 / liczba2;
	}
	
	return wynik;
}

console.log(policz('dodaj', 90, 150));
console.log(policz('pomnoz', 5, 10));
console.log(policz('podziel', 90, 15));
