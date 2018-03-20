app.controller('MainController',['$scope',function($scope){
  $scope.title='its my name s';
  $scope.promo = 'first promo';
  $scope.products= [ 
  { 
    name: 'The Book of Trees', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/banner1.jpg' ,
    likes: 0,
    dislikes:0
    
  }, 
  { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/banner2.jpg',
    likes: 0,
    dislikes:0
    
  },
    { 
    name: 'My favourite b', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/banner1.jpg',
    likes: 0,
      dislikes:0
     
  },
    { 
    name: 'Program or be Programmed', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/banner2.jpg',
    likes: 0,
     dislikes:0
  },
    
    
]
  $scope.plusOne = function(index) { 
  $scope.products[index].likes += 1; 
};
  $scope.minusOne= function(index){
    $scope.products[index].dislikes += 1;
  };
  
 
}])