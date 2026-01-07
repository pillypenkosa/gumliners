const appProjectName = 'Gumliners DJS';




/*
let errConsole 		= [];
let warningConsole 	= [];
*/








// возврат HTML-разметки конкретного компонента
function Component( txt, obj = {} ) { 		// txt - назва компонента, obj - дані для компонента

	const name = 'Component()';



	let arr = txt.split( '-' );
	//console.log( 'arr:', arr );
	//console.log( 'txt:', txt );
	//console.log( 'obj:', obj );

	let className = 'Component';
	arr.forEach( k => {
		className += k;
	});

	let tagName = 'cmp-' + txt.toLowerCase();
	let fileName = txt.toLowerCase();



	//const txtEavl_1 = className + '.html( obj )';

	// дані з конкретного компонента
	let objIni = eval( className + '.html( obj )' );

	//console.log( objIni );

	let tagParam = '';
	if ( objIni ) {
		if ( objIni.tagParam ) {

			for ( let k in objIni.tagParam ) 
				tagParam += ' ' + k + '="' + objIni.tagParam[ k ] + '"';
		}
	}


	// допоміжна приблуда // можно прибрати
	//cns( 'var', 'задіяно компонент', className + '.html()' );

	return '<' + tagName + ' ' + tagParam + '>' + ( objIni.html ? objIni.html : '' ) + '</' + tagName + '>';
}







// встановлення МЕТА-тегів
function setMeta ( obj = {} ) {



	let title = '';
	if ( obj.title ) {

		title += obj.title;

		if ( obj.year ) 
			title += ' (' + obj.year + ')';
	}



	document.title = 
		document.querySelector( 'head meta[ property="og:title" ]' ).content = 
			title;





	document.querySelector( 'head meta[ name="description" ]' ).content = 
		document.querySelector( 'head meta[ property="og:description" ]' ).content = 
			obj.description ? obj.description : '';





	//console.log( document.querySelector( 'head link[ rel="image_src" ]' ) );
	document.querySelector( 'head link[ rel="image_src" ]' ).href =
		document.querySelector( 'head meta[ property="og:image" ]' ).content =
			document.querySelector( 'head meta[ property="og:image:url" ]' ).content =
				obj.image ? obj.image : '';





	document.querySelector( 'head meta[ name="keywords" ]' ).content = 
		obj.keywords ? obj.keywords : '';





	document.querySelector( 'head meta[ property="og:site_name" ]' ).content = appProjectName;

	document.querySelector( 'head meta[ property="og:url" ]' ).content = 'https://pillypenkosa.github.io/movies';














/*

"og:title" — указывает заголовок статьи.
"og:description" — указывает краткое описание, которое выводится при формировании превью ссылки.
"og:image" — ссылка на картинку, которая будет отображаться в посте.
"og:url" — ссылка на страницу сайта.
"og:type" — указывает тип страницы (статья, новость, видео, категория и т. д.), можно использовать по умолчанию "article".
"og:site_name" — название сайта.

"og:locale" — указывает локализацию (язык сайта), можно использовать значение "ru_RU" по умолчанию.



*/

}






// відображення в консолі факт задії компонента
function cnsInfoCmp ( txt ) {

	if ( isCmpInfo )
		cns( 'var', 'name', txt );
}

























