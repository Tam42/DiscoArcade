# DiscoArcade
**Equipo:**<br>
Fiebre De Programar Por La Noche.<br>
**Integrantes:**<br>
:vhs:Tamara Isabel Arenas Vázquez.<br>
:vhs:Giovanni Garfias Becerril.<br>
:vhs:Báez de la Rosa Ingrid Montserrat.<br><br>
**Organizacion:**<br>
|Integrante|Actividades|
|----------|-----------|
|Tamara Arenas| Disco Crush, Base de Datos, Pac-man, Bocetos, Animaciones, Página de Inicio, Conexión Base de Datos.|
|Giovanni Garfias|Pac-man, Index, Pagina de Incio, Base de Datos, Paginas Intermedias, Bocetos, Sesión, Conexión Base de Datos.|
|Montse Báez| Paginas Intermedias, Base de Datos, Pac-man, README, Conexión Base de Datos, Sesión.|


**Guia de Instalación del Proyecto:**<br>
Para poder utilizar esta página se deberá descargar XAMPP en "https://www.apachefriends.org/es/index.html"<br>
Antes de descargar los archivos lo primero a realizar, es descargar el repositorio dentro de la carpeta "xampp" en "htdocs". En ella se encontrarán las siguientes carpetas secundarias y su contenido:<br>
|Carpetas Secundarias | Carpetas Terciarias o acrhivos|
|---------------------|-------------------------------|
|docs| Se encontrará el respaldo de la Base de Datos (lleva la terminacion ".sql"). Al crear la base en su ordenador, deberá llevar el nombre "DB_DiscoArcade".
|dynamics|Aquí se encontrarán las carpetas "php"(Donde se encontrarán todos los archivos con terminacion ".php") y "js" (Donde se encontrarán todos los archivos con terminacion ".js")|
|lib|Carpetas: "fuentes"(Donde se encontrarán todos los archivos con terminacion ".ttf") y "fontawesome-free-5.13.0-web"(Donde se encontrarán todos los archivos que digan "fontawesome-free-5.13.0-web" de no quere descargar cada archivo uno por uno en "https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use" se puede encontrar la libreria completa).|
|statics|Carpetas: "css"(Donde se encontrarán todos los archivos con terminación ".css"), "media"(Donde se encontrarán todos los archivos con terminación ".jpeg" '[imagenes]')| 
|templates|Aquí se deberá encontrar todos los archivos con terminación ".html"[excepto el archivo rock.html]|
|rock.html|Este es el formulario de inicio.|


**Guía de Configuración del Proyecto:**<br>
-Descargar Repositorio-<br>
Después de descargar XAMPP: Entrar a la terminal con boton windows + r. Se pondrá:<br>
1.-cd xampp/htdocs + enter<br>
En github clonar la url del repositorio y en la terminal:<br>
2.-git clone "pegar la url" + enter<br>
3.-cd "nombre y dirección del repositorio" + enter<br>
¡Ya está descargado el repositorio!<br>
Se debe organizar conforme se indico en "**Guía de Instalación del Proyecto:**"<br><br>
-Base de Datos-<br>
Entrar a la terminal y poner:<br>
1.-cd /xampp/htdocs/"nombre de la carpeta del repositorio"/docs + enter.(Archivo donde se entrá)<br>
2.-xampp -u root + enter(Es el usuario de la terminal, se debe dejar sin contraseña)<br>
Se crea la base de datos:<br>
3.- CREATE DATABASE proyecto_dos; + enter<br>
4.- USE proyecto_dos; + enter<br>
5.- SOURCE DB_DiscoArcade; + enter<br><br>
**Cracter´´´´isticas del Proyecto:**<br>
El proyecto se compone por una página de:<br><br>
:red_circle: Inicio: Se mostrará un formulario, que pide el nombre y contraseña del usuarios.En un php se valida si el usuario existe en la base de datos, si existe pasará directamente a la sigiente página, de no ser así sus datos serán agregados a la base de datos y pasará a la siguiente página, al no guardarse la informacián con exito aparecerá el enunciado "No se a podido realizar su registro.".<br><br>
:red_circle: Intermedias:De igual forma, esta página dependerá del usuario. Si es nuevo se le mostrarán opciones para escoger entre dos paletas de colores, que como será guardado en la base de datos es permanente, al no guardarse la información con exito aparecerá el enunciado "No se pudo guardar el color.".En caso contrario(si el usuario ya existia), se le dará la bienvenida al usuario, el cual tendrá que presionar la palabra comenzar para pasar a la sigiente parte.<br><br>
:red_circle: Principal:Consta de tres partes:<br>
     :cyclone: Cabecera: Donde se muestra el Logo,Menú, Pac-man, Disco-Crush(estos dos ultimos llevan directamente al ususario a los juego), Records (muestra los 5 puntajes más altos), Creditos (muestra los nombres de los creadores).<br>
     :cyclone: Cuerpo: Aquí se muestra un menú de los juegos que se encuentran disponibles que al presionar alguna nos muestra una breve descripción del modo de juego y un boton que lo enviará a jugar.<br>
     :cyclone: Pie de Página: Se muestran algunas redes sociales para contactar por si se presenta algun tipo de problema y un mensaje sobre los derechos reservados.<br><br>
:red_circle: Pac-man: En este juego, se muestra a nuestro celebre amigo amarillo que busca comer la mayor cantidad de píldoras mientras evita a los fantasmas que lo harán perder. Hay botones para finalizar el juego, cambiar de juego (sin perder puntos), reiniciar el juego.<br><br>
:red_circle: Disco-crush: Similar a un Candy-crush, en este juego con ayuda del mouse se tendrán que unir tres figuras de forma horizontal o vertical. Existen dos botones uno para salir del juego y regresar al menú(donde se guardarán tus puntos) y uno para finalizar la partida(donde no se guardaran los puntos). El objetivo de esté juego es guardar la puntuación más alta.<br><br>

Todo el proyecto está inspirado en la epoca de los 80´s, por ello todo se muestra con esa temática:<br><br>
:red_circle: Inicio: El formulario aparece sobre una rockola con bordes coloridos y base de madera, que se envía mediante un boton simulando que se inicia una canción en la rockola. Además se tiene una imagen de bola disco giratoria en la esquina superior derecha.<br><br>
:red_circle: Intermedias: En está se tiene un cassette colorido y su nombre es la bienvenida, con los nombres de los integrantes del equipo en la parte inferior, y en el centro dependiendo del usuario aparece "Comenzar" para ir a la pagina principal o un formulario para escoger una paleta de colores(conteniendo colores calidos y frios) y el usuario tenga una pagina referente a sus preferencias.<br><br>
:red_circle: Principal: La cabezera y el pie de pagina tienen un fondo color negro y letras blancas. En el cuerpo llevará un fondo en forma de cuadrículas de colores (dependiendo de lo que se haya escogido en la pagina intermedia) los cuales estarán cambiando cada cierto tiempo simulando una pista de baile real, sobre ella se encontrarán discos de vinilo (menú) con nombres de  los juegos.<br><br>
:red_circle: Pac-man: El personaje se puede mover con los botones w(arriba), s(abajo), a(izquierda) y d(derecha). El entorno es un diseño unico hecho por los participantes del proyecto. En la parte inferior se encuentran los botones que controlan la partida.<br><br>
:red_circle: Disco-crush: Aquí se muestra un tablero coon diferentes figuras repetidas (entre ellas un pac-man, un disco, un arcade, un fantasma, entre otras). Se mostrará en la parte superior el puntaje, el boton de finalizar y el boton de ir a menú.<br><br>
**Comentarios:**<br>
:floppy_disk: Se tenía planeado realizar un tercer juego "El Buscaminas", desafortunadamente no fue posible por cuestiones de tiempo y logistica del equipo.<br>
:floppy_disk: Tampoco se pudo realizar la validación de la contraseña en el usuario existente.<br> 
:floppy_disk: También faltaron las opciones de fondo para los juegos.
