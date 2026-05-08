function enviarFormulario() {

    const form = document.getElementById('encuestaSaludForm');
    const edad = document.getElementById('edad');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const pasos = document.getElementById('pasos_diarios');
    const sueno = document.getElementById('horas_sueño');
    const tipoSangre = document.getElementById('tipo_sangre');


    document.querySelectorAll('.error-message').forEach(e => e.textContent = "");

    let ok = true;

    if (!edad.value) { document.getElementById('edadError').textContent="Requerido"; ok=false; }
    if (!peso.value) { document.getElementById('pesoError').textContent="Requerido"; ok=false; }
    if (!altura.value) { document.getElementById('alturaError').textContent="Requerido"; ok=false; }
    if (!pasos.value) { document.getElementById('pasosError').textContent="Requerido"; ok=false; }
    if (!sueno.value) { document.getElementById('suenoError').textContent="Requerido"; ok=false; }
    if (!tipoSangre.value) { document.getElementById('tipoSangreError').textContent="Selecciona uno"; ok=false; }

    if(ok){
        alert("¡Encuesta enviada correctamente! 😁");
        form.reset();
        document.getElementById('nivelDolorValor').textContent = "0";
    }
}

// Actualizar número del slider
document.getElementById('nivel_dolor').addEventListener('input', function(){
    document.getElementById('nivelDolorValor').textContent = this.value;

    });
