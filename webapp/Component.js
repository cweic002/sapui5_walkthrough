sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"./controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
	"use strict";
	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
		metadata : {
			manifest : "json"
		},
		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			// set data model
			var oData = {
				recipient : {
					name : "World"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
            
        /*    var oKatalog = {
				Katalog : [{
					name  : "Отборник СТАНДАРТ забуриваемый",
                    name2 : "Черный Металопрокат", 
                    image :  "/Ressourse/1.png",
                    prise : "1352"
                },{
					name  : "Артикул 1503",
                    name2 : "Нержавеющая сталь", 
                    image : "/Ressourse/2.png",
                    prise : "8000"
                },{
					name  : "Артикул 1404",
                    name2 : "Черный Металопрокат", 
                    image : "/Ressourse/3.png",
                    prise : "632"
                },{
					name  : "Отборник СТАНДАРТ фланцевый",
                    name2 : "Черный Металопрокат", 
                    image : "/Ressourse/4.png",
                    prise : "2552"
                }]
			};
			var oModelKatalog = new JSONModel(oKatalog);
			this.setModel(oModelKatalog);
            */
            
            var oModelStocks = new JSONModel();
            oModelStocks.loadData("stocks.json");
            this.setModel(oModelStocks, "stocks");
           
			// set dialog
			this._helloDialog = new HelloDialog(this.getRootControl());
            
		},
		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},

		openHelloDialog : function () {
			this._helloDialog.open();
		}
	});
});