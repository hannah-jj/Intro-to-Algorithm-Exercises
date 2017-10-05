 //#16
 //given cakeTypes with weight and value
 //calculate the max monetary value a bag can take giving certain capacity
 var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];
var capacity = 20;

function maxDuffelBagValue(cakes, maxCapacity){
	var valueRatio = []
	for(let i = 0; i < cakes.length; i ++){
		valueRatio[i] = cakes[i].value/weight;
	}
}

maxDuffelBagValue(cakeTypes, capacity);