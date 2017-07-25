export default function() {
  this.namespace = '/api';

  var filterbyCity = function(arr, cityName){
    let result = []
    arr.filter(function(o){
      if (o.city.toLowerCase().includes(cityName.toLowerCase())){
        result.push(o);
      } 
    });

    arr.models = result;
    return arr;
  }

  this.get('/rentals', function (db, request) {
      if (request.queryParams !== undefined) {
        if (request.queryParams.city !== undefined) {
          var filteredList = filterbyCity(db.rentals.all(), request.queryParams.city);          
          return db.rentals.find(filteredList.models.map(function(o) {return o.id;}));
        } else {
          return db.rentals.all();
        }
      } else {
        return db.rentals.all();
      }
    });

  this.get('/rentals/:id', (db, request) => {
      return db.rentals.find((rental) => request.params.id === rental.id);
  });
}