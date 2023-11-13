
    class operators
    {
        constructor()
        {
            this.decimalused = false;
        }
        resetdecimalflag()
        {
            this.decimalused = false;
        }
        enabledecimalbutton()
        {
            document.getElementById("decimal").disabled = false;
        }
    }

const decimalhandler = new operators();

function    AppendToTextbox(value)
{
    const clickedbutton = value;
    const buttonsclass = value.classname;
    console.log(buttonsclass);
    console.log(clickedbutton);

         var result = document.getElementById("answer");
        result.value += value;
    
    // if (clickedbutton.classList.contains("operators"))
    // {
    //     decimalhandler.resetdecimalflag();
    //     decimalhandler.enabledecimalbutton();
    //     }
        
        }
        
function ClearValue()
{
    var result = document.getElementById("answer");
    result.value = '';
}

function AppendDecimal()
{
    var decimalused = false;
    if (!decimalhandler.decimalused)
    {
        var result = document.getElementById("answer");
        result.value += '.';
        decimalhandler.decimalused = true;
        document.getElementById("decimal").disabled = true;

    }
}

function CalculateValue()
{
    var result = document.getElementById("answer");
    try {
        result.value = eval(result.value);
    } catch 
    {
        result.value = 'invalid input';
    }
}
