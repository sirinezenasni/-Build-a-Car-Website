// STEP 1, 4
$(".nav li").on("click", function(event){
    event.preventDefault();

    $(".nav li.active").not(this).removeClass("active");
    $(this).toggleClass("active");

    var tabOption = $(this).data("tab");
    //console.log("tabOption: ", tabOption);
  
    $("#options-display").empty();

    switch (tabOption) {
        case "vehicle":
            var vehicleItem = [];

            for (var k in vehicleOptions) {
                var data = {
                    feature: vehicleOptions[k].choice,
                    price: vehicleOptions[k].price,
                };
                var source = $("#vehicle-options-template").html();
                var template = Handlebars.compile(source);
            
                var vehicleList = template(data);
                vehicleItem.push(vehicleList);
                $("#options-display").html(vehicleItem);
            };
            break;

        case "color":
            var colorItem = [];

            for (var k in colorOptions) {
                var data = {
                    feature: colorOptions[k].choice,
                    price: colorOptions[k].price,
                };
                //console.log("data: ", data);
                var source = $("#color-options-template").html();
                var template = Handlebars.compile(source);
                var colorList = template(data);
                //console.log("colorList: ", colorList);
                colorItem.push(colorList);
                //console.log("colorItem: ", colorItem);
                $("#options-display").html(colorItem);
            };
            break;
            
        case "package":
            var packageItem = [];

            for (var k in packageOptions) {
                var data = {
                    feature: packageOptions[k].choice,
                    price: packageOptions[k].price,
                };
                var source = $("#package-options-template").html();
                var template = Handlebars.compile(source);
                var packageList = template(data);
                packageItem.push(packageList);
                $("#options-display").html(packageItem);
            };
            break;
        
        case "summary":
                var source = $("#summary-options-template").html();
                var template = Handlebars.compile(source);
                var summaryList = template(carSelection);
                $("#options-display").html(summaryList);
            break;
    };
});

// STEP 4, 5
$("#options-display").on("click", "div, .option", function(event) {
    event.preventDefault();
    var option = $(this).data("panel");
    //console.log("option: ", option);


    carSelection[option].choice = $(this).data("option");
    //console.log("carSelection[option].choice: ", carSelection[option].choice);

    carSelection[option].price = $(this).data("price");  

    if (option === "vehicle") {
        var images = $("img.col-md-12.vehicle-display");
        var image = images[0]; 
        //console.log("image: ", image);
        image.src = "assets/" + carSelection[option].choice + ".jpg";
    }
    else if (option === "color"){
        var images = $("img.col-md-12.vehicle-display");
        var image = images[0]; 
        //console.log("image: ", image);
        image.src = "assets/" + carSelection.vehicle.choice + "-" + carSelection[option].choice + ".jpg";
    }
    
});

// STEP 2
var vehicleOptions = [
    {choice: "cadenza", price: "35000"},
    {choice: "forte", price: "20000"},
    {choice: "optima" , price: "29050"},
    {choice: "sedona" , price: "38650"},
    {choice: "soul" , price: "42200"}
  ];

var colorOptions = [
    {choice: "black" , price: "50"},
    {choice: "white" , price: "100"},
    {choice: "silver" , price: "250"}
  ];

var packageOptions = [
    {choice: "Rear Camera" , price: "150"},
    {choice: "LED Positioning Light" , price: "150"},
    {choice: "Rear Camera and LED Positioning Light" , price: "200"}
];

// STEP 3
var carSelection = {
    vehicle: {choice: "Not Selected", price: 0},
    color: {choice: "Not Selected", price: 0},
    package: {choice: "Not Selected", price: 0}
};