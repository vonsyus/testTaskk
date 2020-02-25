$( function() {
	$( "#tabs1, #tabs2" ).tabs();
	$( "#tabs3" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	$( "#tabs3 li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
	$( "#tabs4" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	$( "#tabs4 li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} );