// Pizza Size vvv
function getReceipt() 
{
	text1 = '';
	text2 = '';
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	for (var i = 0; i < sizeArray.length; i++)
	{ if (sizeArray[i].checked)
		{	var selectedSize = sizeArray[i].value;
	text1 = text1+selectedSize+"<br>"	} 	} 
	if (selectedSize === "Personal Pizza")  
	{sizeTotal = 6;
	text2 = text2+sizeTotal+"<br>";}
	else if (selectedSize === "Medium Pizza")
	{sizeTotal = 10;
	text2 = text2+sizeTotal+"<br>";}
	else if (selectedSize === "Large Pizza")
	{sizeTotal = 14;
	text2 = text2+sizeTotal+"<br>";}
	else if (selectedSize === "Extra Large Pizza")
	{sizeTotal = 16;
	text2 = text2+sizeTotal+"<br>";}
		runningTotal = sizeTotal;
getCrust(runningTotal,text1,text2)
};

//CRUST
function getCrust (runningTotal,text1,text2)
{
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	for (var j = 0; j < crustArray.length; j++)
	{	if (crustArray[j].checked)
		{	selectedCrust = crustArray[j].value;
			text1 = text1 + selectedCrust + "<br>";		}
		if (selectedCrust === "Cheese Stuffed Crust")
		{	crustTotal = 3;		}	}
runningTotal = (runningTotal + crustTotal);
text2 = text2 + crustTotal + "<br>";
getCheese(runningTotal,text1,text2)
};

//Cheese function
function getCheese(runningTotal,text1,text2) 
{
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	for (var j = 0; j < cheeseArray.length; j++) 
	{	if (cheeseArray[j].checked)
		{	selectedCheese = cheeseArray[j].value;	}
		if (selectedCheese === "Extra cheese") 
		{	cheeseTotal = 3;	}	}
	text2 = text2+cheeseTotal+"<br>";
	text1 = text1+selectedCheese+"<br>";
	runningTotal = (runningTotal + cheeseTotal);
getMeat(runningTotal,text1,text2);
};

//MEAT FUNCTION
function getMeat(runningTotal,text1,text2)
{
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	for (var j = 0; j < meatArray.length; j++)	
	{	if (meatArray[j].checked) 
	{	selectedMeat.push(meatArray[j].value);	}	}
	var meatCount = selectedMeat.length;
		if (meatCount > 1)
		{	meatTotal = (meatCount - 1);	}
		else {	meatTotal = 0;	}
			runningTotal = (runningTotal + meatTotal);
			for (var j = 0; j < selectedMeat.length; j++)
			{	text1 = text1+selectedMeat[j]+"<br>";
					if (meatCount <= 1) 
					{	text2 =text2 + 0 + "<br>";
						meatCount = meatCount - 1;	}
					else if (meatCount == 2) 
					{	text2 = text2 + 1 + "<br>";
						meatCount = meatCount - 1;	}
					else {	text2 = text2 + 1 + "<br>";
					meatCount = meatCount - 1;	}	}	
getVegetable(runningTotal,text1,text2);
};


// Vegetables
function getVegetable(runningTotal,text1,text2)
{
	var vegetableTotal = 0;
	var selectedVegetable = [];
	var vegetableArray = document.getElementsByClassName("vegetables");
	for (var j = 0; j < vegetableArray.length; j++) 
	{	if (vegetableArray[j].checked)
	{	selectedVegetable.push(vegetableArray[j].value);	}	}
		var vegetableCount = selectedVegetable.length;
		if (vegetableCount >= 2) 
		{	vegetableTotal = (vegetableCount - 1);	}
		else {	vegetableTotal = 0; 	}
		runningTotal = (runningTotal + vegetableTotal);
		for (var j =0; j < selectedVegetable.length; j++)  
		{	text1 = text1+selectedVegetable[j]+"<br>";
			if (vegetableCount <=1)
			{	text2 = text2 + 0 + "<br>";
				vegetableCount = vegetableCount - 1;	}
			else if (vegetableCount == 2) 
			{	text2 = text2 + 1 + "<br>";
				vegetableCount = vegetableCount - 1;	}
			else 
			{	text2 = text2 + 1 + "<br>";
				vegetableCount = vegetableCount - 1;	}	}
getSauce(runningTotal,text1,text2)
};


// SAucefunction
function getSauce(runningTotal,text1,text2)
{
	var sauceArray = document.getElementsByClassName("sauce");
	for (var j = 0; j < sauceArray.length; j++)
	{	if (sauceArray[j].checked)
		{	selectedSauce = sauceArray[j].value;
			text1 = text1 + selectedSauce + "<br>"; 	}	}
text2 = text2 + 0 + "<br>";
document.getElementById("cart").style.opacity=1;
document.getElementById("showText1").innerHTML=text1;
document.getElementById("showText2").innerHTML=text2;
document.getElementById("totalPrice2").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
};

// clear code	
	
function clearAll() {
	document.getElementById("frmMenu").reset();
	document.getElementById("cart").style.opacity=0;
};
	

	

					
	
	

