//sort the sizesArray for XS, S, M, L, XL
if(sizesArray[0].size == 'XS' || sizesArray[0].size == 'S' || sizesArray[0].size == 'M' || sizesArray[0].size == 'L' || sizesArray[0].size == 'XL') {								
	//if 3 sizes
	if(sizesArray.length == 3){
		// console.log('it is 3');
		$.each(sizesArray, function(i,val){
			if(val == 'S'){
				sizesArray[0].size = 'S';
				sizesArray[1].size = 'M';
				sizesArray[2].size = 'L';
			}
			else {
				sizesArray[0].size = 'M';
				sizesArray[1].size = 'L';
				sizesArray[2].size = 'XL';
			}
		});
	}
	//if 4 sizes
	else if(sizesArray.length == 4){
		// console.log('it is 4');
		$.each(sizesArray, function(i,val){
			if(val == 'XS'){
				sizesArray[0].size = 'XS';
				sizesArray[1].size = 'S';
				sizesArray[2].size = 'M';
				sizesArray[3].size = 'L';
			}
			else {
				sizesArray[0].size = 'S';
				sizesArray[1].size = 'M';
				sizesArray[2].size = 'L';
				sizesArray[3].size = 'XL';
			}
		});
	}
	//if 5 sizes just order them
	else if(sizesArray.length == 5){
		// console.log('it is 5');
		sizesArray[0].size = 'XS';
		sizesArray[1].size = 'S';
		sizesArray[2].size = 'M';
		sizesArray[3].size = 'L';
		sizesArray[4].size = 'XL';
	}
}

//sort the sizesArray for 0_3, 12_18, 18_24, 3_6, 9_12, 6_9
else if(sizesArray[0].size.indexOf('_') !== -1 ) {
	// console.log('its _');
	// if 5 sizes
	if(sizesArray.length == 5){
		// console.log('it is 5');
		sizesArray[0].size = '0_3';
		sizesArray[1].size = '3_6';
		sizesArray[2].size = '6_9';
		sizesArray[3].size = '9_12';
		sizesArray[4].size = '12_18';
	}
	// if 6 sizes
	else if(sizesArray.length == 6){
		// console.log('it is 6');
		sizesArray[0].size = '0_3';
		sizesArray[1].size = '3_6';
		sizesArray[2].size = '6_9';
		sizesArray[3].size = '9_12';
		sizesArray[4].size = '12_18';
		sizesArray[5].size = '18_24';
	}
}

// sort the regular numbers
else {		
	sizesArray.sort(function(a, b){return a.size - b.size});
}
									
// console.log(sizesArray);