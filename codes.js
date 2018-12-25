
          
  var uluru = {lat: 39, lng: 35};
          
      function initMap() {
       
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
          
        });

    map.addListener('click', function(e) {
        marker.setPosition(e.latLng);
    });
      }
      
   posts = [];
   users = [];
   userpost = [];
      
    
  
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(function(json) {
      
         for(var x in json){
  users.push(json[x]);
    console.log(users[0].id);
    }
        fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(function(json) {
    
    
    for(var x in json){
  posts.push(json[x]);
}
var x = 0;
  
  
  selecteduser = [];
  
  
  for(var k = 0; k<10; k++){
      
        for(var i = 0; i<100; i++){
      if( users[k].id === posts[i].userId){      
          x++;     
        }     
  }
  userpost[k] = {y: x, indexLabel: users[k].username};
x=0;
  }
  
  var val;
  chart(userpost);
  
    
 for(var i = 0 ; i<users.length; i++){
    
    $("#usersdata").append("<tr class='elements'><td>"+"<input type='checkbox' id='"+users[i].id+"'>"+"</td><td>"+users[i].id+"</td><td>"+users[i].username+"</td><td>"+users[i].name+"</td><td>"+users[i].email+"</td><td>"+users[i].phone+"</td><td>"+users[i].website+"</td><td>"+users[i].company.name+"</td><td>"+users[i].address.street+","+ users[i].address.city+"</td><td>")
    
    
}
    
      
      
      var clicked = false;
      
$(":checkbox").click(function() {
    
    if(parseInt($(this).attr("id"))===0){
      if(clicked===false){
                       for(var i=0; i<userpost.length; i++)
                           {
                            $('#'+(i+1)).prop('checked', true);
                            $('#'+(i+1)).parent().parent().css("background","#3f86c5");

                           }
        selecteduser = userpost;
     clicked = true;
      } else {
          
            for(var i=0; i<userpost.length; i++)
                           {
                            $('#'+(i+1)).prop('checked', false);
                            $('#'+(i+1)).parent().parent().css("background","white");

                           }
          
          clicked= false;
          selecteduser = [];
      }
        } 
        else {
            
             for(var i=0; i<userpost.length; i++){
                  
    if($('#'+(i+1)).is(':checked')){
    
    if(users[i].id === parseInt($(this).attr("id"))){
            
            console.log(users[i].address.geo.lat + ", " + users[i].address.geo.lng);
            
            uluru = {lat: parseFloat(users[i].address.geo.lat), lng: parseFloat(users[i].address.geo.lng)};
            initMap();
            
            selecteduser.push(userpost[i]);
            $('#'+(i+1)).parent().parent().css("background","#3f86c5");

            
        }
    
    } else if(!$('#'+(i+1)).is(':checked')){
        
         if(users[i].id === parseInt($(this).attr("id"))){
            
            
            var index = selecteduser.indexOf(userpost[i]);
            selecteduser.splice(index, 1);
            $('#'+(i+1)).parent().parent().css("background","white");

        }
        
        
                }
        
        
            }
            
        }
console.log(selecteduser);
console.log($(this).attr("id"));
  
chart(selecteduser);
    
})
      
  
 function chart(selecteduser){
         var chart = new CanvasJS.Chart("chartContainer",
	{
		
		legend: {
			maxWidth: 350,
			itemWidth: 120
		},
		data: [
		{
			type: "pie",
			showInLegend: true,
			legendText: "{indexLabel}",
			dataPoints: selecteduser
                        
			
		}
		]
	});
        
          chart.render();
        
  }
  

      
     
        
    console.log(users);
    

    
} );
   


    
} );
 // console.log(posts[0].id);
  
  

      