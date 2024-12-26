## Validación de un formulario - Firebase:
La aplicación permite a los usuarios ingresar su nombre, correo electrónico y contraseña, y luego guarda los datos en una base de datos de Firebase.

## Configuración de Firebase

Antes de comenzar, asegúrate de obtener los datos de configuración necesarios de Firebase. Debes tener una cuenta de Firebase y un proyecto configurado. Luego, reemplaza los valores de `API_KEY`, `authDomain`, `projectId`, `storageBucket`, `messagingSenderId`, `appId` y `measurementId` en el objeto `firebaseConfig` con los valores correspondientes proporcionados por Firebase.

    const firebaseConfig = {
      apiKey: "API_KEY",
      authDomain: "authDomain",
      projectId: "datos-de-formulario",
      storageBucket: "datos-de-formulario.appspot.com",
      messagingSenderId: "messagingSenderId",
      appId: "appId",
      measurementId: "measurementId"
    };
    
    // Inicializar Firebase
    firebase.initializeApp(firebaseConfig);

## Inicialización de Firestore

Después de configurar Firebase, inicializamos Firestore y obtenemos una referencia al servicio. Esto nos permite interactuar con la base de datos de Firebase.

    const db = firebase.firestore();


