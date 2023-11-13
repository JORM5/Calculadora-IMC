function calculaICM() {
    // crea las varobles trayevndo los inout por medio de la id
    var alturaInput = document.getElementById("Altura");
    var pesoInput = document.getElementById("Peso");
    var resultadoDiv = document.getElementById("Resultado");
    var imagenDiv = document.getElementById("imagen");

    // pasa a las varibles a unas nuevas donde puede aceptar numeros decimales
    var altura = parseFloat(alturaInput.value);
    var peso = parseFloat(pesoInput.value);

    // hace la resticciones "La lógica"
    if (isNaN(altura)|| isNaN(peso)) {
        // busca para que es innerHTML
        resultadoDiv.innerHTML = "Por favor ingrese un peso y altura valido.";
        return;
    }

    var IMC = peso/((altura/100)**2);
    var categoria = "";

    if (IMC < 18.5) {
        categoria = "Peso bajo";
        imagenDiv.innerHTML ='<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e04d7c6c-6012-44f7-b315-b1b63efd240f/d6y2or8-fda22ba9-7a11-4b22-9ba0-0238e0f9e64c.png/v1/fill/w_752,h_1063,q_70,strp/gotenks___flaco_by_zener88_d6y2or8-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyMCIsInBhdGgiOiJcL2ZcL2UwNGQ3YzZjLTYwMTItNDRmNy1iMzE1LWIxYjYzZWZkMjQwZlwvZDZ5Mm9yOC1mZGEyMmJhOS03YTExLTRiMjItOWJhMC0wMjM4ZTBmOWU2NGMucG5nIiwid2lkdGgiOiI8PTc5MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5XZooqKGfnDrtwBlFShxEkYPf_S6ElhkGN7xNwgq9eM" style="width: 200px; height: 300px; alt="Blaco">'
      } else if (IMC < 25) {
        categoria = "Peso normal";
        imagenDiv.innerHTML = '<img src="https://i.pinimg.com/originals/0e/5e/b9/0e5eb9c7ad1da1c8f8723eab295bda49.gif" alt="Peso_normal">'
      } else if (IMC < 30) {
        categoria = "Exceso de peso";
        imagenDiv.innerHTML = '<img src="https://depor.com/resizer/_Xpqb1N37M26JPmnLTl9XJLIUsw=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GISYQBRJVZE2ZIC4RQSOY3XOBY.JPG" style="width: 300px; height: auto; alt="Sobre_peso">'
      } else {
        categoria = "Obeso";
        imagenDiv.innerHTML = '<img src="https://pbs.twimg.com/media/DIVrmXVW4AAMOv2.jpg" style="width: 300px; height: auto; alt="Obeso">'
    };

    resultadoDiv.innerHTML = "Su BMI es " + IMC.toFixed(2) + " - Categoría: " + categoria ;
    imagenDiv.innerHTML = imagenDiv.innerHTML

}