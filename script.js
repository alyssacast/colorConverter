//create an array of base 16 values A-F
//when enter is clicked from the code text box
//The program will validate the information inputted first
//display color in preview section


//for depending on which code type call..
    //Q: How to change the textbox into three separate text boxees, depending on the color code selected...
  //disappear or hide property in css...hide classes or something like that.

  //LAST UPDATE:: WORKING ON SETTING THE COLOR PREVIEW.....AGAIN
  //NOT SURE IF WE NEED TO CHANGE TO STRING OR USE A DIFFERENT METHOD COMPLETELY
  //I RECCOMMEND REVIEWING THE FLOW OF THE PROGRAM AGAIN, MAYBE ON PAPER BUT SO FAR
  //WE SELECT THE CODE TYPE AND THEN THE BOXES OF THE RESPECTED ONE APPEARS
  //AFTER ENTERING THE CODES FOR BOTH IN AND OUT PUTS THE CONVERT() CALLS TO VALIDATE BOTH CODES
  // VALIDATIONG WORKS, JUST THE COLOR PREVIEW/VALIDATE RGB/ AND THE ACTUAL MATHEMATICAL CONVERT FUNCTION

  var inputColorCode;
  var colorCodeRGB = 0;
  var hexCode = 0;
  var rgbCode = 0;
  var colorCirclePreview;
  var colorPreview;
  // var colorCodeR;
  // var colorCodeG;
  // var colorCodeB;
  
  console.log("im alive");

  var a = "19";
  var b = parseInt((a.slice(0,1) * 16)) + parseInt(a.slice(1,2));
  console.log(b);
  // var charR = (hexCode.slice(0, 2));

  // let whole, remain;
  // whole = 153 / 16;
  // console.log("whole: " + whole.split(0));
  
  // //remain = 153 - (16 * whole.toFixed(0));
  // console.log("153 / 16 = " + whole);
  // //console.log("remaining " + remain);

  // console.log("output: " + whole.toString(remain));



  // function convert(){

  //   //validate input color code
  //   validateInputColorCode();

  // }



  function displayInputColorCode(value){
    console.log("display tracer input");

    var element;

    switch(value){
      //no color code selected
    case "0": alert("Select Your Color Type");  break;

      //HEX code selected-> show HEX textbox
    case "1": element = document.getElementById("color-code-HEX"); 
              element.classList.remove("hexHidden"); //remove hidden class

              element = document.getElementById("color-code-R");
              element.classList.add("rgbHidden"); //hide R box by adding back hidden class
              element = document.getElementById("color-code-G");
              element.classList.add("rgbHidden"); //hide G box by adding back hidden class
              element = document.getElementById("color-code-B");
              element.classList.add("rgbHidden"); //hide B box by adding back hidden class
              break;
      //RGB color is selected-> show RGB textboxes
    case "2": element = document.getElementById("color-code-R");
              element.classList.remove("rgbHidden"); //display R box by adding back hidden class
              element = document.getElementById("color-code-G");
              element.classList.remove("rgbHidden"); //display G box by adding back hidden class
              element = document.getElementById("color-code-B");
              element.classList.remove("rgbHidden"); //display B box by adding back hidden class

              element = document.getElementById("color-code-HEX"); 
              element.classList.add("hexHidden");//hide hex boxe by adding back hidden class
              break;
    // element.classList.remove("none");
    }//end of switch
  }

  function displayOutputColorCode(value){
    console.log("display tracer output");

    var element;

    switch(value){
      //no color code selected
    case "0": alert("Select Your Color Type");  break;

      //HEX code selected-> show HEX textbox
    case "1": element = document.getElementById("color-code-HEX2"); 
              element.classList.remove("hexHidden"); //remove hidden class

              //hide other color code types
              element = document.getElementById("color-code-R2");
              element.classList.add("rgbHidden"); //hide R box by adding back hidden class
              element = document.getElementById("color-code-G2");
              element.classList.add("rgbHidden"); //hide G box by adding back hidden class
              element = document.getElementById("color-code-B2");
              element.classList.add("rgbHidden"); //hide B box by adding back hidden class
              break;

    case "2": element = document.getElementById("color-code-R2");
              element.classList.remove("rgbHidden"); //display R box by adding back hidden class
              element = document.getElementById("color-code-G2");
              element.classList.remove("rgbHidden"); //display G box by adding back hidden class
              element = document.getElementById("color-code-B2");
              element.classList.remove("rgbHidden"); //display B box by adding back hidden class

              element = document.getElementById("color-code-HEX2"); 
              element.classList.add("hexHidden");//hide hex boxe by adding back hidden class
              break;
    // element.classList.remove("none");
    }//end of switch
  }//end of displayOutputColorCode()


  function validateColorCodes()//CHANGE NAME TO VALIDATE COLOR CODES
  {
    console.log("VALIDATE COLOR CODE ENTERED tracer");
     //reads in the 'Your Color Type'
    var firstCode = document.getElementById("framework1").value;
    console.log("The first code is:: " + firstCode);
    
    //validating the selection
    switch(firstCode){

      //no color code selected
    case "0": alert("Select Your Color Type");  
    break;

      //HEX code selected
    case "1": 
      //gather code value
      inputColorCode = document.getElementsByName("colorCodeHEX")[0].value;
      console.log("Color code entered:: " + inputColorCode);
      
      //validate the HEX code format: should be 6 digits and update the inputColorCode
      inputColorCode = validateHEX(inputColorCode);
      console.log("HEX code VALIDATED");

      //PREVIEW THE COLOR
      HEXcolorCirclePreview(inputColorCode);

      //convert
      HEXtoRGB(inputColorCode); 
      break;
      

    case "2":
      //gather code values
      colorCodeR = document.getElementsByName("colorCodeR")[0].value;
      colorCodeG = document.getElementsByName("colorCodeG")[0].value;
      colorCodeB = document.getElementsByName("colorCodeB")[0].value;
      console.log("R: " + colorCodeR + " G: " + colorCodeG + " B: " + colorCodeB);

      //validate the RGB code
      validateRGB(colorCodeR, colorCodeG, colorCodeB);

      //PREVIEW THE COLOR
      RGBcolorCirclePreview(colorCodeR, colorCodeG, colorCodeB);
      break;

    }//end of switch

  }

  //change color of preview circle
  function HEXcolorCirclePreview(inputCC) {

    // colorPreview.style.backgroundColor = "#000000";
    
    document.getElementById("colorPreview").style.backgroundColor = ("#" + inputCC);
    console.log("HEX color preview set");
  }
  //document.getElementById("color-code-HEX").addEventListener("blur", colorPreview());


  function RGBcolorCirclePreview(R, G, B){

    document.getElementById("colorPreview").style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
    console.log("RBG color preview set");

  }


 //called when HEX is selceted as input color code
  function validateHEX(hexCode){  
  
    // checking if # is included in the hex string
    var firstChar = hexCode.charAt(0);
  
    if(firstChar == "#") //if user inputs '#'
    {
      hexCode = hexCode.substr(1); //update hexCode without '#'
      console.log("Your new hex code hash is: " + hexCode);
    } 
      
    else if (hexCode.length != 6) //not enough numbers
      {
        alert("Enter a full 6 character hex code");
      }
    
    else if (firstChar != "#" && hexCode.length != 6 )// if # not included and its not
          {
            alert("Enter a full 6 character hex code");
          }

          return hexCode;
    }//end of validateHEX()    
    

    function validateRGB(R, G, B){
   
      console.log("Entered validate RBG:" + R + " " + G + " " + B);

      if (R > 255 || R < 0){//the value is not within limit
        alert("Enter a value within 0 and 255 for R value");
      } 
      else if (G > 255 || G < 0){//the value is not within limit
        alert("Enter a value within 0 and 255 for G value");
      } 
      else if (B > 255 || B < 0){//the value is not within limit
        alert("Enter a value within 0 and 255 for B value");

      } 

    }
  
   
    
    function HEXtoRGB(hexCode){
      console.log("Entered HEXtoRGB()");

      /** THE LOGIC:
       * Separate the hexcode into the three rgb pairs
       * Calculate the rgb equivalent multiplying separated pairs; the first digit by 16 and adding the second.
       * parseInt the string and store in appropriate variable.
       * example:: 66 ->  (6 * 16^1) + (6 * 16^0)
       * then display the final conversion
       */



      //WELCOME TO A REVIEW ON HOW TO WRITE A FOR LOOP
      //for(let i=0; i<5; i++){}

      
      //break code into three pairs with and calculate the rgb equivalent
      charR = parseInt((a.slice(0,1) * 16)) + parseInt(a.slice(1,2));
      charG = parseInt((a.slice(2,3) * 16)) + parseInt(a.slice(3,4));
      charB = parseInt((a.slice(4,5) * 16)) + parseInt(a.slice(5,6)); //when taking the last char for the .split() enter +1 out of bounds

      const results = 

      document.createElement()

      // }
    }
      


// //function called when 'CONVERT' button is clicked
//   function validateInput()
//   {
//     //reads in the 'Your Color Type'
//     var firstCode = document.getElementById("framework1").value;
//     console.log("The first code is:: " + firstCode);

//     //reads in 'Desired Color Type'
//     var secondCode = document.getElementById("framework2").value;
//     console.log("The first code is:: " + secondCode);

//     //validating the selection
//     switch(firstCode){
//       //no color code selected
//     case "0": alert("Select Your Color Type");  break;
//       //HEX code selected
//     case "1": 
//       //gather code value
//       inputColorCode = document.getElementsByName("colorCodeHEX")[0].value;
//       console.log("Color code entered:: " + inputColorCode);
//       //validate the HEX code format: should be 6 digits
//       validateHEX(inputColorCode);
//       console.log("HEX code VALIDATED");
      
//       //change color of preview circle
//       function colorPreview(){

//         colorPreview.style.backgroundColor = ("#" + inputColorCode);
//         console.log("color preview set");
//       }
//       document.getElementById("color-code-HEX").addEventListener("blur", colorPreview());
      
//       // var colorPreview = document.getElementById("colorPreview");
//       //   colorPreview.style.backgroundColor = ("#" + inputColorCode);
//       // console.log("color preview set");
      
//     break;
//       //RGB code selected
//     case "2": validateRGB();
//     break;
//   };
      
//   }//end of validateInput()  



  
  
  
  
  // function convertRGBtoHEX(hexCode,rgbCode) {
  //   console.log("convertRGBtoHEX called");
  //   //decimal to hexadecimal
  //   //while loop that divides the letter values by 16 and traverse through the remainders to find the 
  
  //   //https://www.rapidtables.com/convert/color/how-rgb-to-hex.html
  
  //   //https://www.google.com/search?q=how+to+convert+base+10+to+base+16&rlz=1C1CHZN_enUS932US932&sxsrf=APq-WBuZ8qcn4Amh36cPyfVFgP8Nay8y-A%3A1646247310345&ei=jr0fYtTFFOS3ggeRmqiQDw&oq=how+to+convebase+10+to+base+16&gs_lcp=Cgdnd3Mtd2l6EAMYADIECAAQDTIFCAAQhgM6BwgAEEcQsANKBAhBGABKBAhGGABQwQ1YwQ1g5BpoAnABeACAAVeIAVeSAQExmAEAoAEByAEIwAEB&sclient=gws-wiz#kpvalbx=_lL0fYqvtBeGc_QaT9bmACQ27
    
  // }//end of converRGBtoHEX()
  
  // function convertHEXtoRGB(hexCode,rgbCode){
  //   console.log("convertHEXtoRGB called");
  // }
  
  
  // //put this somewhere so when you press enter it converts the color codes
  // // Execute a function when the user releases a key on the keyboard
  // input.addEventListener("keyup", function(event) {
  //   // Number 13 is the "Enter" key on the keyboard
  //   if (event.keyCode === 13) {
  //     // Cancel the default action, if needed
  //     event.preventDefault();
  //     // Trigger the button element with a click
  //     document.getElementById("myBtn").click();
  //   }
  
  // extra notes on addEventL()
  // https://www.freecodecamp.org/news/javascript-addeventlistener-example-code/#:~:text=%20The%20addEventListener%20%28%29%20Method%20%E2%80%93%20JavaScript%20Event,This%20is%20a%20simple%20example%20I...%20More%20
  
  
  
  //create an if statement that calls the appropriate convert function
  //validation cases include:
  //  - the framework.value != 0
  //  - framework1 != framework2
  //  - based off of framework1 ensure that the format is correct
  // Can I change the text box into three separate one for RBG HSB?
  //what is the format for CMYK? Four textboxes?
  
  
  
  //scan in hex decimal
  // var hex = document.getElementById("color-code");
  // console.log("This is the hex: " + hex.value);
