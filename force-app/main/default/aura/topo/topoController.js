({
    myAction : function(component, event, helper) {

    },

    recibirClic : function(component, event, helper){
        var myAttribute = component.get("v.clase");

        if(myAttribute == "color"){
            var evento = $A.get("e.c:almacenarIntentos");
            evento.SetParams({
                "sumar" : true
            });
            evento.fire();
        }
        else {
            var evento = $A.get("e.c:almacenarIntentos");
            evento.SetParams({
                "sumar" : false
            });
            evento.fire();
        }
    }
})
