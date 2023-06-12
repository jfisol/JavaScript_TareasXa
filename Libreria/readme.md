## Versión Final

En esta versión cumple con los requerimientos de la tarea
 
->**Libreria**
--->`node_modules` : Este módulo se genera en la instalación de express.

  
  

--->`src`: Módulo donde se organiza el proyecto.

  
  

-------->`auth` : Módulo donde se organiza las autenticaciones del usuario.

  
  

-------->`controlles`: Módulo donde se almacena las response y request que trasladan la información.

  
  

-------->`db`: Contiene la información para la conexión de base de datos.

  
  

-------->`middlewares`contiene archivos para manejo de errores y autenticación.

  
  

-------->`models`: Contiene la lógica de la estructura de tablas de la base de datos.

  
  

-------->`routes`: contiene las rutas para realizar diferentes acciones para la manipulación de la información.

  
  

-------->`services`: Estos contienen la lógica del negocio, permitiendo ajustar el comportamiento a lo requerido.

  
  

--->`index.js`: archivo principal de la aplicación, se encarga de inicializar la misma con las acciones requeridas.

  
  

--->`package-look.json`: Archivo que contiene información de las librerías y módulos utilizados con express.

  
  

--->`package.json`: Contiene información principal de la aplicación.

  
  

--->`readme.md` Descripción, resumen informativo sobre el desarrollo y avance del versionado.

  
  

# Ejemplo para probar API
Este ejemplo de rutas funciona solo en local, por lo tanto deberá de instalar y ejecutar lo necesario en su equipo para poder probar la API
## Login
```json
`POST` localhost:3000/login
				{
				"name": "admin",
				"password":"admin"
				}
	/*el login retorna un tocken que permite acceder a las funcionalidades que requieran estar logeados*/			
```
 ## Librería
Una librería puede tener desde 0 a muchos libros.
#### Ejemplo de las rutas para probar la API.
##### Crear librería (AUTH)
 ```json
 //Peticion POST 
//Crea libreria nueva.
 `POST`  localhost:3000/library/crear-libreria
 `BODY`
			 {
			"name": "santa fe",
			"location": "avenida mertiolate",
			"telefono":"14256351"
			}
//en parámetos se debe de agregar el tocken recibido al momento de logearse (login).

     |     key    |   values     |  
     |Authorizated|Beaber ¨token¨|
```

 ##### Obtener una librería
  ```json
 //Peticion Get 
//Obtiene todas las librerias con los libros asignados a las mismas.
 `GET`  localhost:3000/library/obtener-libreria/1
```
##### Obtener todas las librerías : 
  ```json
 //Peticion Get 
//Obtiene todas las librerias con los libros asignados a las mismas.
 `GET`  localhost:3000/library/obtener-librerias
```
##### Modificar una librería (AUTH)
 ```json
 //Peticion POST 
//Modificar libreria.
 `POST`  localhost:3000/library/modificar-libreria/1
 `BODY`
			 {
			"name": "fe"
			}
//en parámetos se debe de agregar el tocken recibido al momento de logearse (login).

     |     key    |   values     |  
     |Authorizated|Beaber ¨token¨|
```
##### Eliminar una librería (**) (AUTH)
 ```json
 //Peticion POST 
//Eliminar libreria.
 `POST`  localhost:3000/library/eliminar-libreria/1
 //Esta librería se elimina de forma lógica

 //en parámetos se debe de agregar el tocken recibido al momento de logearse (login).

     |     key    |   values     |  
     |Authorizated|Beaber ¨token¨|
```
##### Agregar un libro nuevo en libreria (*) (AUTH)
 ```json
 //Peticion POST 
//Crea libro nueve en libreria.
 `POST`  localhost:3000/library/modificar-libreria/1/agregar-libro
 `BODY`
			{
			"isbn": "1123",
			"titulo":"EL emperador",
			"autor":"Leoncio",
			"year":"2023"
			}
//en parámetos se debe de agregar el tocken recibido al momento de logearse (login).

     |     key    |   values     |  
     |Authorizated|Beaber ¨token¨|
```

## Libro
#### Ejemplo de las rutas para probar la API.
##### Crear Libro (AUTH)
```json
 //Peticion POST 
//Crea libro.
 `POST`  localhost:3000/book/crear-libros
 `BODY`
			 {
			"isbn": "1123",
			"titulo":"EL emperador",
			"autor":"Leoncio",
			"year":"2023"
			"Library_id": "1"
			}
//en parámetos se debe de agregar el tocken recibido al momento de logearse (login).

     |     key    |   values     |  
     |Authorizated|Beaber ¨token¨|
```
##### Obtener un Libro en particular
```json
 //Peticion Get 
//Obtiene un libro en particular
 `GET`  localhost:3000/book/obtener-libro/1
 ```
 ##### Obtener un Libro en particular
```json
 //Peticion Get 
//Obtiene un libro en particular
 `GET`  localhost:3000/book/obtener-libros
 ```
 ##### Modicar Libro (AUTH)
```json
 //Peticion POST 
//Modificar libro.
 `POST`  /modificar-libro/:id
 `BODY`
			 {
			"titulo":"EL emperador",
			}
//en parámetos se debe de agregar el tocken recibido al momento de logearse (login).

     |     key    |   values     |  
     |Authorizated|Beaber ¨token¨|
```
##### Eliminar Libro (AUTH)
```json
 //Peticion POST 
//Eliminar libro.
 `POST` localhost:3000/eliminar-libro/:id
 //Libro se elimina de manera lógica
 //en parámetos se debe de agregar el tocken recibido al momento de logearse (login).

     |     key    |   values     |  
     |Authorizated|Beaber ¨token¨|
```

## Usuario
### Crear usuario
// El usuario se crea de forma automática al ir a la siguiente ruta
```json
//Crear usuario
`POST`localhost:3000/user

//Nombre Usuario: admin Password: admmin

```
## Login
Para logearse se envía una petición post 
cons los parametos usuario y password a la siguiente ruta

```json
//Crear usuario
`POST`localhost:3000/login

// enviar los siguientes parámetdos:
//  name: admin password: admmin

```

