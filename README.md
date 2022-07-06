# Final2

Examen Final 2da oportunidad

## Plantillas

Utilizar la [plantilla](https://drive.google.com/file/d/1IjQcCgzw0jb11otTmdcVMlTSOuR4P2aB/view?usp=sharing) inicial base 

![Plantilla](<./public/general.png>)

## Restricciones

1. Implementar una pequeña **aplicación Web** que nos permita "twitear" usando la plantilla dada
1. La misma debe poseer una **base de datos** por detrás para el manejo de la información, la misma debe estar en la nube, pudiendo ser SQL o NoSQL
1. La base de datos se debe diseñar para soportar correctamente los distintos Requerimientos de la aplicación
1. Debe ser un proyecto **NodeJS** utilizando **Express**
1. La aplicación debe estar alojada **en la nube** usando **Heroku**
1. La interacción con la base de datos se daba en forma asíncrona, usando Ajax y cualquier librería de Frontend a su elección
1. Usar Socket.io para los Websockets
1. El código a ser corregido debe estar en la rama "main", la cuál se debe actualizar con un merge request al profesor
1. En la fecha del examen se debe presentar el trabajo finalizado en forma **individual**, con una defensa personal o modificación de los realizado

## Requerimientos

1. Listar Tweets `4 puntos`

    - [ ] Diseño de la base de datos para almacenar los tweets con todos sus datos
    - [ ] Servicio API Rest que debe listar los últimos 10 tweets almacenados al ingresar a la pagina, en base a su fecha de creación
    - [ ] Se debe elegir un usuario (de 3 posibles cargados en la BD), para cargar el listado de tweets para el mismo
        - Definir 3 usuarios en su BD, cada uno con su información necesaria de nombre, avatar, etc.
        - Mostrar un elemento de selección con estos usuarios, el que se selecciona es quien quedará como usuario "logueado" en ese momento
        - Los usuarios deben cargarse dinámicamente de la BD - no estar _en duro_ en la interfaz
        - Si se modifica el usuario seleccionado, la lista se debe refrescar
    - [ ] Si no se selecciona un usuario en la interfaz, se debe mostrar un error de que no se puede cargar el listado
    - [ ] Este servicio debe traer solos los tweets publicados por otros usuarios, no los del usuario actual seleccionado
    - [ ] De cada tweet mostrado, se debe visualizar en forma dinámica:
        - El texto del mismo - máximo 280 - la plantilla debe mostrarse correctamente con mensajes de hasta ese límite
        - El avatar del usuario
        - El nombre de la persona que lo escribió
        - El @usario que lo escribió
        - Todos los usuarios deben tener la tilde azul de "confirmado"
        - La fecha y hora de escritura del mismo
        - Si el tweet tiene una imagen asociada (url, no se deben almacenar imágenes), mostrarla correctamente
        - La **cantidad** de favs y de reweets que dicho tweet tiene
    - [ ] Agregar un icono o botón de refrescar listado para actualizar el mismo bajo demanda del usuario

    ![Listado](<./public/lista.jpg>)

1. Crear Tweet `2 puntos`

    - [ ] Servicio API Rest de tipo POST que permita agregar un nuevo tweet:
        - La fecha y hora se debe tomar automáticamente al insertar en la BD
        - Se debe mostrar en la interfaz un contador de caracteres a medida que se tipea en el campo de texto - 0/280 - 5/280 - 15/280 etc.
        - Al presionar el botón o apretar ENTER, se debe validar que el campo no esté vacío, y que no se hayan excedido la cantidad de caracteres
        - Si se inserta correctamente en la BD, se debe mostrar en la lista de tweets automáticamente como primer elemento
        - El usuario que hace el posteo debe ser el mismo para el cual se visualiza el listado en ese momento
        - Agregar un icono u opción para agregar hasta una foto (no obligatoriamente). La foto solo debe ser un enlace - no se necesita hacer _upload_ de la misma
        - Agregar un indicador visual en pantalla mientras se inserta el tweet (para saber que algo está ocurriendo por detrás)


    ![Crear](<./public/crear.png>)

1. Buscar/Filtrar tweets `2 puntos`

    - [ ] Servicio que permita buscar tweets ya creados:
        - Utilizar el elemento de búsqueda dado
        - Al escribir en dicho elemento, se deben buscar los tweets que tengan el texto buscado como parte del texto del mismo, o del usuario o @usuario que contengan el texto escrito.
        - La búsqueda no debe ser sensible a mayúsculas/minúsculas y debe buscar por todo el texto - ejemplo "HOLA MUNDO" debe buscar todos los tweets que tengan HOLA **y** MUNDO en cualquier parte mencionada, aunque no necesariamente una seguida de la otra (HOLA que tal MUNDO por ejemplo debería ser un resultado encontrado)
        - La búsqueda debe aplicarse al escribir dentro del campo de texto - evento de teclado.
        - Los resultados de la búsqueda deben mostrarse en una ventana o elemento adyacente al elemento de búsqueda (sin modificar el listado del primer punto)
        - Agregar un control de tiempo entre cada vez que se presiona la tecla - que no se busque inmediatamente sino con un delay
        - Agregar un indicador visual en pantalla cuando se está realizando la búsqueda

    ![Buscar](<./public/buscar.png>)

1. Websockets `2 puntos`

    - [ ] Websocket que permita refrescar el listado de tweets en forma automática cuando otro usuario vaya posteando nuevos tweets
        - Los nuevos tweets se debe agregar al inicio de la lista de acuerdo a su fecha en forma dinámica - sin requerir que el usuario recargue el listado o estar consultando al servidor si hay nuevos tweets

1. Fav y Retweet (rt) `2 puntos`

    - [ ] Servicio API Rest PUT que permita hacer "fav" de un tweet
        - Al presionar, se debe elegir cuál usuario de los creados es el que está haciendo fav
        - Si es la primera vez, debe agregar como favorito e incrementar el contador
        - Si ya hizo fav previamente, des-favear y decrementar contador
        - Indicar visualmente en la interfaz la cantidad de veces actualizada y visiblemente el estado en dicho tweet (icono de otro color que ya hizo FAV)

    ![Fav](<./public/fav.png>)

    - [ ] Servicio API Rest PUT que permita hacer "RT" de un tweet
        - Al presionar, se debe elegir cuál usuario de los creados es el que está haciendo retweet
        - Si es la primera vez, debe agregar como RT e incrementar el contador
        - Si ya hizo rt previamente, des-rt y decrementar contador
        - Indicar visualmente en la interfaz la cantidad de veces actualizada y visiblemente el estado en dicho tweet (icono de otro color que ya hizo RT)

    ![Retweet](<./public/rt.png>)


1. Documentación y Enlaces `3 puntos`

    - [ ] Elegir uno de los enlaces del lado izquierdo y renombrarlo a **Documentación** 
        
        - Crear una página estática con:
            - Su información personal 
            - Diagrama (imagen) de la arquitectura de su aplicación durante el desarrollo, incluyendo todos los elementos necesarios y como se encuentran relacionados
            - Diagrama (imagen) de la arquitectura de su aplicación durante la ejecución en producción, incluyendo todos los elementos necesarios y sus relaciones
            - Agregar descripción en texto del funcionamiento de esta arquitecura (repositorio, ramas, PaaS usados, como se realiza la actualización de la aplicación, alojamiento BD, tipo BD, dependecias de su proyecto, etc.)
            - Verificar corrección ortográfica, explicación de todos los elementos usados y procedimientos seguidos
            - Indicar herramientas, plataformas en la nube utilizada y su tipo - Saas, PaaS, etc.
            - Agregar un bloque estático con todos los servicios API utilizados:
                - URL 
                - Valores dinámicos 
                - Datos enviados
                - Datos recibidos
            - Aplicar un estilo CSS adecuado y formato documento - título, contenido, etc.


    - [ ] Elegir uno de los enlaces del lado izquierdo y renombrarlo a **Enlaces**

        - Crear una página estática con todos los recursos utilizados para hacer el trabajo
        - Plantillas usadas
        - Páginas de consulta, libros o tutoriales
        - Aplicar un estilo CSS adecuado y formato documento - título, contenido, etc.

1. Actualización nube 

    - [ ] Actualización en la nube con CI desde GitLab, proveyendo los datos al profesor para aplicación y key desde rama "main". **Solo se corregirá el código que esté en la rama main y funcionando en Heroku**
