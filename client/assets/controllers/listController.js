app.controller('ListController', ['$scope', ListController])

function ListController(sc){
    sc.itemList = [];
    sc.addItem = function(){
        console.log(sc.item.name);
        var item = {
            name: sc.item.name,
            desc: sc.item.desc,
            completed: true,
        }
        sc.itemList.push(item);
        sc.item = {};
    }
}
