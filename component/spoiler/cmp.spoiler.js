// © 2025 DJS 



class ComponentSpoiler { 
 
 
 
	static args = {}; 
 
 
 
	static html( objData = {} ) { 
		const fooName = this.name + '.html()'; 
 
		this.args = objData.args ? objData.args : {}; 
 
 
		//console.log( 'fooName: ', fooName ); 
		//console.log( 'objData: ', objData ); 



		//console.log( fooName, ' objData: ', objData );





		let tagParam = { 
			//'class' 		: '', 
			//'name' 		: '', 
			//'title' 		: '', 
			//'data-key' 		: objData.key, 
			//'data-volume' 		: objData.volume, 
			'data-id' 		: objData.id, 
			//'onclick' 		: 'ComponentSpoyler.clc( this )', 
			//'selected' 	: '', 
			//'defer' 		: '', 
		}











		let html = '';

		if ( objData ) {


			let title = objData.title ? objData.title : 'немає `objData.title`'; 

			html = `
				<div class="spoiler-title">
					<div class="txt">${ title }</div>
					<div class="pm" title="Розгорнути / згорнути">+</div>
				</div>
				<div class="body"></div>
			`; 


		}



		return { tagParam, html };  
	} 
 
 
 
 
 



	static clc( elem ) {
		const fooName = this.name + '.clc()'; 


		//console.log( 'fooName: ', fooName ); 


		//console.log( 'elem: ', elem ); 

		//let id = elem.dataset.id;
		//let type = elem.dataset.type;




		//console.log( 'id: ', id ); 
		//console.log( 'type: ', type ); 

		let elemBody = elem.querySelector( '.body' );



		//console.log( 'elem: ', elem ); 



		if ( elemBody.innerHTML ) {

			elemBody.hidden = !elemBody.hidden;

		} else {

			//elemBody.innerHTML = `<div>${ type }</div><div>${ id }</div>`;

			let html = '';


			//console.log( 'id: ', elem.dataset.id ); 
			//console.log( 'name: ', elem.dataset.name ); 


			let arrSelect = arrListGumLiners.filter( k_gum => {

				if ( k_gum.hash && k_gum.hash[ elem.dataset.id ] ) 
					return true;
				
			});



			//console.log( 'arrSelect: ', arrSelect ); 

			if ( arrSelect.length ) 
				html = `${ Component( 'Gallery', { id: elem.dataset.id, arr: arrSelect } ) }`;
			


			elemBody.innerHTML = html;
		}

	}






	static modal( elem ) { // data - id
		const fooName = this.name + '.modal()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 
		//console.log( 'objListJars: ', objListJars[ data ] ); 



		//console.log( 'id: ', elem.dataset.id ); 

		let obj = {};

		if ( elem.dataset.id ) {

			if ( objListJars[ elem.dataset.id ] ) {

				obj = objListJars[ elem.dataset.id ];

			}
		}
		



		let elemParent = elem.closest( 'cmp-spoyler' );




		//console.log( 'elemParent: ', elemParent ); 





		let htmlVolume = '';
		if ( obj.hash ){

			if ( obj.hash._025 )
				htmlVolume = '0.25';

			if ( obj.hash._033 )
				htmlVolume = '0.33';

			if ( obj.hash._05 )
				htmlVolume = '0.5';
		}


		elemParent.querySelector( '.modal' ).innerHTML = `<div>
			<div class="close pointer" onclick="${ this.name }.close( this )">x Close</div>
			<div class="img">
				<img src="img/jars/${ obj.id }.jpg" alt="">
			</div>
			<div class="info">
				<div class="info-title">${ obj.title }</div>
				<div class="info-volume">${ htmlVolume } ml</div>
				<div class="info-barcode">${ obj.barcode }</div>
			</div>
		</div>`; 
	}








	static close( elem ) {
		const fooName = this.name + '.close()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 


		let elemParent = elem.closest( 'cmp-spoyler' );


		//console.log( 'elemParent: ', elemParent ); 

		this.closeModal( elemParent );
	}







	static closeModal( elem ) { // elem - parent
		const fooName = this.name + '.closeModal()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'elem: ', elem ); 

		elem.querySelector( '.modal' ).innerHTML = '';
	}






	static linkTo( data = {} ) {
		const fooName = this.name + '.linkTo()'; 

		//console.log( 'fooName: ', fooName ); 
		//console.log( 'data: ', data ); 







	}






 
 
 
} 
 
 
 	
 
 
 
 
 	
 
 
