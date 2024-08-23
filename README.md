# c20-42-n-java-react-telemedicina

# TelemedicinaApp (inserte nombre creativo aquí)
App de telemedicina

Features
-
coming soon...


Guía para ejecutar el proyecto:
-
Requerimientos:

* JDK 17+
* Maven 3+
* MySql

1) Configuración de la Base de Datos

    1. Asegúrate de que MySql esté ejecutándose. Por defecto, la aplicación se conectará a la base de datos en el puerto 3306 con el usuario `root` y la contraseña vacía

    2. En caso de tener una configuración de MySQL distinta, actualiza el puerto en [application.yml](src/main/resources/application.yml)

2) Para buildear(?) y ejecutar el proyecto, sigue los siguientes pasos:


1. Clona el repositorio:
   ```
   git clone https://github.com/23737k/c20-42-n-java-react-telemedicina.git
   ```

2. Navega hasta el directorio `c20-42-n-java-react-telemedicina` :
   ```
   cd c20-42-n-java-react-telemedicina
   ```
3. Instala las dependencias (asumimos que tienes Maven instalado):
   ```
   mvn clean install
   ```
4. Corre el proyecto
   ```
   mvn spring-boot:run
   ```
5. Accede a la documentación de la api utilizando Swagger UI:

   Abre tu navegador preferido y ve a http://localhost:8080/doc/swagger-ui.html


-> La aplicación estará disponible en  http://localhost:8080