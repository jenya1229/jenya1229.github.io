var app = angular.module('angularModule',[]);
app.controller('ProductController',['$scope',function($scope){
	$scope.products = [
		{   "product_id" : 1,
			"product_image":"./img/xbox.jpg",
			"product_name" :"Xbox one",
			"product_price" :1200,
     "cart_btn" : "Add to Cart"

		},
		{   "product_id" : 2,
			"product_image":"./img/wiU.jpg",
			"product_name" :"Wiu",
			"product_price" :1000,
     "cart_btn" : "Add to Cart"

		},
		{   "product_id" : 3,
			"product_image":"./img/ps4.jpg",
			"product_name" :"Ps4",
			"product_desc" :"lorum ipsum",
			"product_price" :1549,
     "cart_btn" : "Add to Cart"

		},

		{   "product_id" :4,
			"product_image":"./img/vita.jpg",
			"product_name" : "Sony PlayStation Vita 2000",
			"product_price" :1000,
     "cart_btn" : "Add to Cart"

		},


	]

	$scope.cart = [];
	$scope.cartCount= 0;

	$scope.addTocart = function(productIndex){
		$scope.cart.push($scope.products[productIndex]);
		$scope.products[productIndex].disable =true;
		$scope.cartCount= $scope.cart.length;
    $scope.products[productIndex].cart_btn = 'Added...';
	};
	$scope.removeItem = function(itemIndex){
		$scope.cart[itemIndex].disable = false;
    $scope.cart[itemIndex].cart_btn = 'Add to Cart';
		$scope.cart.splice(itemIndex,1);
		$scope.cartCount= $scope.cart.length;
   
	};

	$scope.getTotal = function(){
		var total = 0;
		angular.forEach($scope.cart,function(value){
			total = total + value.product_price;
		});
		return total;
	};

}]);
app.controller('IndexController',['$scope',function($scope){
  $scope.languages =[
 	{
 		"name" : "Javascript",
 		"version" : 1.0,
 	},
 	{
 		"name" : "php",
 		"version" : 5.5,
 	},
 	{
 		"name" : "AngularJs",
 		"version" : 1.6
 	}
];
}]);


      $("#cart").on("click", function() {
    $(".caption").fadeToggle( "fast");
  });

$(document).on('click','.product',function(e){
  e.preventDefault();
  $('.empty').hide();
  
  //---------------------------------------------------------
  if($(this).hasClass('disable')){    //disable mutiple clicks
  
  }
  $(document).find('.product').addClass('disable');
    return false;
});
