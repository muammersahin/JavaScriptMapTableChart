<!DOCTYPE html>
<html>
  <head>
  <link href="style.css" rel="stylesheet" type="text/css"/>
  <script src="jquery-3.1.1.js" type="text/javascript"></script>
  <script src="codes.js" type="text/javascript"></script>
      <script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKC5tz3veDcHLnUyk99b3yr1MtnjoMrSY&callback=initMap">
    </script>
  </head>
  <body>

      <table id="locations">
             
          <tr>

<td id="formap"><h3>User Locations</h3>
<div id="map"></div>
              
</td>
<td id="forchart">
    <h3>Post Percentage</h3>     
<div id="chartContainer" ></div>

              
</td>
          </tr>
          
      
          
      </table>
      
      <table id="usersdata" style="height: 100px">
          
          <tr style="text-align: center"><td colspan="9"><h3>User Table</h3></td></tr> 
          
       
          <tr id="headof" class="elements">
          <td id="all"><input type="checkbox" id="0"></td>
          <td>id</td>
          <td>username</td>
          <td>name</td>
          <td>email</td>
          <td>phone</td>
          <td>website</td>
          <td>company</td>
          <td>address</td>
          </tr>
          
          
          
          
      
          
      </table>
        
  </body>
  
  


</html>