// Función para registrar la honestidad del usuario
function registerHonesty(isHonest) {
  const result = document.getElementById("result-honesty");
  const honestyHidden = document.getElementById("honestyHidden");
  if (isHonest) {
    result.innerHTML = "Gracias por ser honesto/a.";
    honestyHidden.value = 'true';
  } else {
    result.innerHTML = "Agradecemos tu sinceridad.";
    honestyHidden.value = 'false';
  }
}


// Función para validar el nombre del usuario
function validateName() {
  const input = document.getElementById("nombre");
  input.value = input.value.toUpperCase().replace(/[^a-zA-Z ]/g, "");
}

// Función para mostrar información basada en la facultad seleccionada
function showInfo() {
  const facultad = document.getElementById("facultad").value;
  const container = document.getElementById("info-container");

  let employmentLink = "";
  let salaryInfo = "";
  let newsLink = "";

  switch (facultad) {
    case "Derecho":
      employmentLink =
        "https://co.linkedin.com/jobs/derecho-empleos?position=1&pageNum=0";
      salaryInfo = "Salario promedio: COP 4,000,000 - COP 7,000,000";
      newsLink = "https://www.bbc.com/mundo/articles/cd15pl2z76ko";
      break;
    case "Biología Ambiental":
      employmentLink =
        "https://www.google.com/search?q=empleos+de+biología+ambiental&sourceid=chrome";
      salaryInfo = "Salario promedio: COP 3,000,000 - COP 5,000,000";
      newsLink =
        "https://medioambiente.uexternado.edu.co/la-corrupcion-en-el-sector-ambiental-como-medio-de-degradacion-del-patrimonio-natural-colombiano/";
      break;
    case "Ingeniería Civil":
      employmentLink =
        "https://co.linkedin.com/jobs/ingeniero-civil-empleos?position=1&pageNum=0";
      salaryInfo = "Salario promedio: COP 3,000,000 - COP 6,000,000";
      newsLink =
        "https://caracol.com.co/emisora/2021/06/11/ibague/1623427051_661926.html";
      break;
    case "Ingeniería Electrónica":
      employmentLink =
        "https://www.google.com/search?q=empleos+relacionados+con+ingeniería+electrónica";
      salaryInfo = "Salario promedio: COP 3,500,000 - COP 7,000,000";
      newsLink =
        "https://urosario.edu.co/periodico-nova-et-vetera/nuestra-u/la-industria-de-la-electronica-se-enfrentara-una-crisis-de-escasez-de-ingenieros/";
      break;
    case "Ingeniería Industrial":
      employmentLink =
        "https://www.google.com/search?q=trabajos+relacionados+con+ingeniería+industrial";
      salaryInfo = "Salario promedio: COP 3,500,000 - COP 6,500,000";
      newsLink =
        "https://www.abc.es/economia/20151005/abci-ingenieros-escandalo-volkswagen-201510051829.html";
      break;
    case "Ingeniería Mecánica":
      employmentLink =
        "https://www.google.com/search?q=trabajos+relacionados+con+ingeniería+mecánica";
      salaryInfo = "Salario promedio: COP 3,500,000 - COP 6,500,000";
      newsLink =
        "https://www.elespectador.com/ambiente/francisco-posada-el-caleno-que-detono-el-escandalo-de-volkswagen-article-603678/";
      break;
    case "Ingeniería de Sistemas":
      employmentLink =
        "https://www.google.com/search?q=trabajos+relacionados+con+ingeniería+en+sistemas";
      salaryInfo = "Salario promedio: COP 4,000,000 - COP 7,000,000";
      newsLink =
        "https://www.elmundo.es/tecnologia/2020/02/27/5e56e29a21efa0822f8b4715.html";
      break;
    case "Administración de Empresas":
      employmentLink =
        "https://co.linkedin.com/jobs/administrador-de-empresa-empleos?currentJobId=3891616027&position=9&pageNum=0";
      salaryInfo = "Salario promedio: COP 3,000,000 - COP 6,000,000";
      newsLink =
        "https://www.imf.org/es/Blogs/Articles/2017/09/21/corruption-in-latin-america-taking-stock";
      break;
    case "Arquitectura":
      employmentLink =
        "https://www.google.com/search?q=trabajos+relacionados+con+arquitectura";
      salaryInfo = "Salario promedio: COP 3,500,000 - COP 7,000,000";
      newsLink =
        "https://www.lanacion.com.py/pais_edicion_impresa/2023/05/26/por-indicios-de-corrupcion-allanan-arquitectura-una/";
      break;
    case "Comunicación Social y Periodismo":
      employmentLink = "https://co.linkedin.com/jobs/comunicador-empleos";
      salaryInfo = "Salario promedio: COP 2,000,000 - COP 4,500,000";
      newsLink =
        "https://www.hayderecho.com/2015/01/28/crisis-y-corrupcion-tambien-en-los-medios-de-comunicacion/";
      break;
    case "Diseño":
      employmentLink =
        "https://co.linkedin.com/jobs/dise%C3%B1ador-gr%C3%A1fico-empleos";
      salaryInfo = "Salario promedio: COP 2,000,000 - COP 4,500,000";
      newsLink =
        "https://repositorio.uniandes.edu.co/server/api/core/bitstreams/266823ef-ff72-4956-9fa9-e59f0e164e75/content";
      break;
    case "Psicología":
      employmentLink =
        "https://www.google.com/search?q=trabajos+relacionados+con+psicología";
      salaryInfo = "Salario promedio: COP 3,000,000 - COP 5,500,000";
      newsLink =
        "https://scielo.isciii.es/scielo.php?pid=S0212-97282020000200016&script=sci_arttext&tlng=es";
      break;
  }

  const adminSalaryLink = "https://www.comfama.com/finanzas/educacion-financiera/como-administrar-bien-el-sueldo/";

  const content = `
        <h3>Información de Facultad</h3>
        <ul>
            <li><a href="${employmentLink}" target="_blank">Enlaces a empleos relacionados</a></li>
            <li>${salaryInfo}</li>
            <li><a href="${adminSalaryLink}" target="_blank">Cómo administrar el sueldo</a></li>
            <li><a href="${newsLink}" target="_blank">Noticias sobre corrupción</a></li>
        </ul>
    `;

  container.innerHTML = content;
}

// Función para activar o desactivar la cámara
let stream;

function toggleCamera(activate) {
  const cameraContainer = document.getElementById("camera-container");
  const photoContainer = document.getElementById("photo-result");
  const video = document.getElementById("video");
  const name = document.getElementById("nombre").value;

  if (activate) {
    cameraContainer.style.display = "block";

    if (!stream) {
      navigator.mediaDevices
       .getUserMedia({ video: true })
       .then((mediaStream) => {
          stream = mediaStream;
          video.srcObject = stream;
        })
       .catch((error) => {
          console.error("Error al activar la cámara:", error);
        });
    }
  } else {
    cameraContainer.style.display = "none";
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      stream = null;
    }

    photoContainer.innerHTML = `${name} LA HONESTIDAD ES FUNDAMENTAL PARA CONSTRUIR UNA SOCIEDAD JUSTA Y EQUITATIVA AYUDA A PREVENIR CORRUPCIONES Y PROMUEVE CONFIANZA EN LAS INSTITUCIONES Y EN EL SER CON EL OTRO`;
  }
}

// Función para tomar una foto
function takePhoto() {
  const video = document.getElementById("video");
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const name = document.getElementById("nombre").value;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const photoContainer = document.getElementById("photo-result");
  photoContainer.innerHTML = `<h3>LA DECISION DE CAMBIAR AL MUNDO ES TUYA, ${name}</h3>`;
  photoContainer.appendChild(canvas);
}

document.querySelector('form').addEventListener('submit', function(e) {
  // Captura el valor del campo oculto honestyHidden
  var honestyValue = document.getElementById('honestyHidden').value;
  // Captura el valor seleccionado en el campo de cámara
  var cameraValue = document.querySelector('input[name="camera"]:checked').value === 'on'? 'true' : 'false';

  // Crea campos ocultos para almacenar los valores capturados
  var honestyHidden = document.createElement('input');
  honestyHidden.type = 'hidden';
  honestyHidden.name = 'honesty';
  honestyHidden.value = honestyValue;
  this.appendChild(honestyHidden);

  var cameraHidden = document.createElement('input');
  cameraHidden.type = 'hidden';
  cameraHidden.name = 'camera';
  cameraHidden.value = cameraValue;
  this.appendChild(cameraHidden);
});

