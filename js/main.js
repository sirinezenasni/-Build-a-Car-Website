// STEP 1
$(".nav li").on("click", function(event){
    event.preventDefault();

    $(".nav li.active").not(this).removeClass("active");
    $(this).toggleClass("active");

    var tabOption = $(this).data("tab");
    console.log("tabOption: ", tabOption);
  
    $("#options-display").val("");


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

// STEP 4
