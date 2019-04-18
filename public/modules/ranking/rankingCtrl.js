app.controller('RankingCtrl', ['$scope', 'categoryService', 'mediaService', 'optioService', '$cookieStore', '$filter', '$routeParams', function($scope, categoryService, mediaService, optioService, $cookieStore, $filter, $routeParams) {
    $scope.name = 'Products';
    $scope.mostTitle = 'Most Voted Optios';
    $scope.considerCategory = null;
    $scope.allOptio = [];
    optioService.getAll().then(function(data){
        angular.forEach(data, function (optio) {
            $scope.allOptio.push(optio);
        });
    }, function (err) {
        console.log(err)
    });

    $scope.categorys = [];
    $scope.categoryShow = [];
    categoryService.getAll().then(function(data){
        angular.forEach(data, function (category) {
            if ($routeParams.param == category.cParent) {
                category.width = $scope.getRandomInt(180, 250);
                category.href = '/ranking/'+category.id;
                // category.height = $scope.getRandomInt(250, 350);    
                $scope.categorys.push(category);
            } else if ($routeParams.param == category.id) {
                category.cName = "Most Voted Optios in "+category.cName;
                $scope.considerCategory = category;
            }
        });

        // if ($routeParams.param && $scope.categorys[0]) {
        //     $scope.mostImage = $scope.categorys[0].cImage;
        //     $scope.mostTitle = "Most Voted Optios in "+$scope.categorys[0].cName;
        // }
        
    }, function (err) {
        console.log(err)
    });

    $scope.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $scope.$on('$viewContentLoaded', function(){
        if ($('body').hasClass('mobile-nav-active')) {
          // $('body').removeClass('mobile-nav-active');
          // $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          // $('.mobile-nav-overly').fadeOut();
          $('.mobile-nav-toggle').trigger('click');
        }
        document.addEventListener('DOMContentLoaded', function(){
          /* Start rowGrid.js */
          var container = document.getElementsByClassName('i-container')[0];
          rowGrid(container, {itemSelector: '.item', minMargin: 10, maxMargin: 25, firstItemClass: 'first-item', lastRowClass: 'last-row', minWidth: 500});
        });

        $('.portfolio-container').imagesLoaded(function () {
            var portfolioIsotope = $('.portfolio-container').isotope({
              itemSelector: '.portfolio-item'
            });
            $('#portfolio-flters li').on( 'click', function() {
              $("#portfolio-flters li").removeClass('filter-active');
              $(this).addClass('filter-active');
          
              portfolioIsotope.isotope({ filter: $(this).data('filter') });
            });
        });
          
    });
}]);