window.onload = app{

var mapOptions = {
	zoom: 10,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
	scrollwheel: false      
}
 
map = new google.maps.Map(document.getElementById("map"), mapOptions);

}