
const ruslan = [

{id:1,imya:"Моль-минёр", cena: 5700, strana: "Океания", kartinka: "./pictures/miner.jpg"},
{id:2,imya:"Данаида хризипп", cena: 3500, strana: "Океания", kartinka: "./pictures/danaus.jpg"},
{id:3,imya:"Бражник Мегера", cena: 4000, strana: "Африка", kartinka: "./pictures/megera.jpg"},
{id:4,imya:"Парусник Перикл", cena: 4000, strana: "Океания", kartinka: "./pictures/perikl.jpg"},
{id:5,imya:"Дровосек-титан", cena: 6300, strana: "Южная Америка", kartinka: "./pictures/titan.jpg"},
{id:6,imya:"Усач", cena: 2500, strana: "Южная Америка", kartinka: "./pictures/usach.jpg"},
{id:7,imya:"Тригон", cena: 4000, strana: "Южная Америка; Азия", kartinka: "./pictures/trigon.jpg"},
{id:8,imya:"Жужелица Агра", cena: 3750, strana: "Южная Америка", kartinka: "./pictures/agra.jpg"},
{id:9,imya:"Морфо Киприда", cena: 6300, strana: "Южная Америка", kartinka: "./pictures/kiprida.jpg"},
{id:10,imya:"Рогач Гранта", cena: 4200, strana: "Южная Америка", kartinka: "./pictures/grant.jpg"},
{id:11,imya:"Бибазис Орлиная", cena: 4800, strana: "Азия", kartinka: "./pictures/bibasis.jpg"},
{id:12,imya:"Актиас", cena: 9300, strana: "Азия", kartinka: "./pictures/Actiasis.jpg"},
{id:13,imya:"Палочник(Аннам)", cena: 3400, strana: "Азия", kartinka: "./pictures/palka.jpg"},
{id:14,imya:"Белый птерофор", cena: 8500, strana: "Евразия", kartinka: "./pictures/pterofor.jpg"},
{id:15,imya:"Полярный шмель", cena: 6250, strana: "Арктика", kartinka: "./pictures/polsh.png"},
{id:16,imya:"Испанский копр", cena: 4000, strana: "Северная Африка", kartinka: "./pictures/kopr.jpg"},
{id:17,imya:"Чёртов цветок", cena: 5700, strana: "Африка", kartinka: "./pictures/chert.jpg"},
{id:18,imya:"Уэта", cena: 2300, strana: "Новая Зеландия", kartinka: "./pictures/ueta.jpg"},
{id:19,imya:"Мадагас.таракан", cena: 4300, strana: "Мадагаскар", kartinka: "./pictures/mtarakan.jpg"},
{id:20,imya:"Жирафф", cena: 6100, strana: "Мадагаскар", kartinka: "./pictures/giraff.jpg"},

]
//Дополнение сетки товров картами товара
const tuwi = document.querySelector(".cardlist")

//Создание карты товара
const funk = ()=>{
	ruslan.map((cardinf)=>{
	tuwi.insertAdjacentHTML("afterbegin", `
	<div class="card">
	<img class="kart" src=${cardinf.kartinka}>

	<div class="cont">
		<div class="imya">${cardinf.imya}</div>
		<div class="cena">${cardinf.cena} руб.</div>
		<div class="strana">${cardinf.strana}</div>
	<button id="product_${cardinf.id}"  class="knopka">В корзину</button>
	</div>
		
</div>
	`)
	const button = document.querySelector(`#product_${cardinf.id}`)
	button.addEventListener(`click`, ()=>{
      const currSum = localStorage.getItem('danya')
			localStorage.setItem(`danya`, Number(currSum) + ruslan[cardinf.id-1].cena)
	})
	})
}


funk()


