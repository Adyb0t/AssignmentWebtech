function reveal(){
    document.getElementById("bg").style.opacity = "1";
}

function hide(){
    document.getElementById("bg").style.opacity = "0";
}

function print_start(){
    document.getElementById("start_date").addEventListener("change", function(){
        var input = this.value;
        console.log(input);
        document.getElementById("start").innerHTML = input;
    });
}

function print_end(){
    document.getElementById("end_date").addEventListener("change", function(){
        var input = this.value;
        console.log(input);
        document.getElementById("end").innerHTML = input;
    });
}

function scrll(){
    console.log("scrolling");
    window.scrollTo({
        top:document.getElementById("container").clientHeight,
        behavior: "smooth"
    });
}

function up(){
    window.scrollTo({
        top:-(document.getElementById("container").clientHeight),
        behavior: "smooth"
    });
}

function checkMinDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
    dd = '0' + dd;
    }

    if (mm < 10) {
    mm = '0' + mm;
    } 
        
    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("start_date").setAttribute("min", today);
    document.getElementById("end_date").setAttribute("min", today);
    document.getElementById("form_date").setAttribute("min", today);
    console.log(today);
}

function validate(form){
    console.log(form, form.name)
    return false;
}

function submitAll(){
    for(var i=0, n=document.forms.length; i<n; i++){
        alert(i);
        document.forms[i].onsubmit();
    }

}

function checkCheckBox(){
    var checkbox = document.getElementById("kulliyah_option");
    var dropdown_container = document.getElementById("kulliyah_option_input");

    if(checkbox.checked){
        var dropdown = document.createElement("select");
        dropdown.name = "kulliyah";
        var option1 = document.createElement("option");
        option1.text = "KICT";
        dropdown.add(option1);
        var option2 = document.createElement("option");
        option2.text = "KOE";
        dropdown.add(option2);
        var option3 = document.createElement("option");
        option3.text = "KAED";
        dropdown.add(option3);
        var option4 = document.createElement("option");
        option4.text = "KENMS";
        dropdown.add(option4);
        var option5 = document.createElement("option");
        option5.text = "KOED";
        dropdown.add(option5);
        var option6 = document.createElement("option");
        option6.text = "AIKOL";
        dropdown.add(option6);
        var option7 = document.createElement("option");
        option7.text = "Nursing";
        dropdown.add(option7);
        var option8 = document.createElement("option");
        option8.text = "Dentistry";
        dropdown.add(option8);
        var option9 = document.createElement("option");
        option9.text = "KOS";
        dropdown.add(option9);
        var option10 = document.createElement("option");
        option10.text = "KAHS";
        dropdown.add(option10);
        var option11 = document.createElement("option");
        option11.text = "Pharmacy";
        dropdown.add(option11);
        var option12 = document.createElement("option");
        option12.text = "Medicine";
        dropdown.add(option12);

        dropdown_container.innerHTML = "For Kulliyah of "
        dropdown_container.appendChild(dropdown);
    // dropdown_container.style.display = "block";
    }else{
        dropdown_container.innerHTML = "";
        // dropdown_container.style.display = "none";
    }

}
