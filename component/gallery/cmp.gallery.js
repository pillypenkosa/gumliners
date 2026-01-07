
 
 
 
 
 
class ComponentGallery { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
 
		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-id' 	: '', 
			//'onclick' 	: '', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}; 
 
 
 
		let html = ''; 

 		//console.log( objData );

 		if ( objData ) {

 			let arr = objData.arr ? objData.arr : [];

 			arr.forEach( k_gum => {

 				html += `<div class="each-gumliner gumliner-${ objData.id }">

 					<div class="img">
 						<img src="img/${ objData.id  }/${ k_gum.id }.jpg" alt="${ k_gum.id }">
 					</div>

 				</div>`;

 			});
 			
 		}
 

 
 
		return { tagParam, html };  
	} 
 
 
 
 
 
	static clc( data ) { 
		const fooName = this.name + '.clc()'; 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 
 
	} 
 
 
 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
