app.controller('ListController', ['$scope', '$rootScope', ListController])

function ListController(sc, rs){
    rs.name = "Admin"
    sc.itemList = [];
    sc.view = "list";
    sc.currItemIndex;

    function clearFields(obj){
        for(key in obj){
            obj[key] = "";
        }
    }

    sc.addItem = function(item){
        var date = new Date();
        var itemToAdd = {
            name: item.name,
            desc: item.desc,
            date: date,
            status: "New",
            completed: true,
            comments: []
        };
        sc.itemList.push(itemToAdd);
        clearFields(item);
    }

    sc.returnToList = function(){
        sc.view = "list";
    }

    sc.toComments = function(index){
        console.log(index);
        sc.currItemIndex = index;
        sc.view = "comments";
    }

    sc.addComment = function(comment){
        var date = new Date();
        var commentToAdd = {
            user: rs.name,
            text: comment.text,
            date: date
        }
        sc.itemList[sc.currItemIndex].comments.push(commentToAdd);
        clearFields(comment);
    }
}
