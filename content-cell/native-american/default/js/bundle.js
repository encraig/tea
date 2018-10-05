var bundle = [];

		var outfit = function(n, sku1, sku2, sku3, sku4, sku5, sku6, sku7, sku8, sku9, sku10){
			var obj = {};
			obj.name = n;
			obj.skus = [sku1,sku2,sku3,sku4,sku5,sku6, sku7, sku8, sku9, sku10];
			bundle.push(obj)
		};

		// PROD BUNDLE
		// J GROWING THUNDER
		outfit('j-growing','8F82100-014', '8F12100-917', '8F42509-455', '8F82110-452', '8F22121-452', '8F12301-014', '8F32310-526', '8F82121-E72', '8F22113-E72'); 

		// Jeffrey Gibson
		outfit('jeffrey','8F12104-982', '8F22122-065', '8F12302-G01');

		// Julia Marden
		outfit('julia','8F12129-405', '8F22141-G39'); 

		//////////////////////////

		// museum
		outfit('museum','8W31300-525', '8W41500-014', '8W11105-014', '8W21101-014', '8W81102-J01', '8S12307R-E47', '8S12307R-E28', '8S12307B-E47', '8S22111R-G18', '8S23600R-E96', '8S42503B-G18', '8S32901B-C05');
		
		// Gregory
		outfit('gregory','8S12116R-C05', '8S22110R-010');
		
		// Martha Berry
		// outfit('8S12309R-429', '8S22106R-710', '8S32100B-724', '8S32100B-061', '8S32502B-429');
		outfit('martha','8S12309R-429', '8S22106R-710', '8S32502B-429');
		
		// Benjamin Harjo
		outfit('benjamin','8S12115R-061', '8S22107R-220', '8S42100B-223');
		
		// Jessica
		outfit('jessica','8S82301K-F47', '8S12308R-F47', '8S12307B-F47', '8S22115R-E16', '8S12207R-F47', '8S32203B-F47');
		

		/*************************************************************************************/

		// DEV BUNDLE
		//outfit 1
		// outfit('7F13305-001', '7F12338-014', '7F12218-633', '7F12322-577', '7F12319-948', '6F12200-633', '7F12336-324');

		// outfit 2
		// outfit('7F12336-324', '7F12335-936');

		// outfit 3
		// outfit('7F12335-936', '7F12336-324', '7F12338-014', '7F12218-633');

		// outfit 4
		// outfit('7F13305-001', '7F12338-014', '7F12218-633');

		// outfit 5
		// outfit('7F12322-577', '7F12319-948', '6F12200-633');
		
		// outfit 6
		// outfit('7F12332-474', '', '');

		// console.log(bundle);

		//add bundle to divs
		$.each(bundle, function(i,val){
			var cell = i + 1;
			var skus = val.skus;
			var name = val.name;
			
			$.each(skus, function(j,arr){
				if(arr !== ""){
					var num = j + 1;
					var data = 'data-sku-' + num; 
				
					$('.' + name).attr(data, arr);
				}
			});
		});