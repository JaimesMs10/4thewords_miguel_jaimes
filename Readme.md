# 4TheWords Project

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes requisitos:

- [Python 3.x](https://www.python.org/downloads/) <!-- o instalar el python 3.11 de Microsoft Store -->
- [WAMP Server](https://sourceforge.net/projects/wampserver/files/WampServer%203/WampServer%203.0.0/wampserver3.3.7_x64.exe/download) (para ejecutar el servidor MySQL)
- [MySQL Database](https://www.mysql.com/) configurado a través de WAMP Server 

## Instalación

### 1. Configuración de la Base de Datos

Antes de ejecutar la aplicación, asegúrate de configurar correctamente la base de datos.

1. Abre el archivo `app.py` en tu editor de texto y localiza la siguiente línea (línea 15):

    ```python
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://TuUsuario:TuContraseña@localhost/4thewords_prueba_miguel_jaimes'
    ```

2. Cambia `'TuUsuario'` y `'TuContraseña'` por tus credenciales de MySQL.

    - Por ejemplo: `mysql://root:1234@localhost/4thewords_prueba_miguel_jaimes`

### 2. Crear un Entorno Virtual (Si es necesario)

Si el entorno virtual aún no está creado, sigue estos pasos:

1. Abre una terminal y navega a la carpeta raíz de tu proyecto (`4TheWords`).

2. Ejecuta el siguiente comando para crear un entorno virtual:

    ```bash
    python -m venv venv
    ```

3. Activa el entorno virtual:

   - En Windows:

     ```bash
     ./venv/Scripts/activate
     ```

   - En Linux/Mac:

     ```bash
     source venv/bin/activate
     ```

4. Instala las dependencias requeridas:

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

### 3. Iniciar el Servidor

1. Asegúrate de tener WAMP Server corriendo y MySQL activado.

2. Para iniciar la aplicación, ejecuta el siguiente comando:

    ```bash
    python start.py
    ```

    Esto iniciará automáticamente la aplicación, creando la base de datos si no existe y configurando las tablas.

   Si no funciona automáticamente, sigue los pasos a continuación.

### 4. Crear la ejecucion manual

Si tienes problemas para ejecutar `start.py` o la base de datos no se crea correctamente, puedes crearla manualmente:

1. Abre el archivo `app.py` y asegúrate de que la conexión a la base de datos esté correcta.

2. Abre MySQL Workbench o usa la consola de MySQL y ejecuta el siguiente comando para crear la base de datos:

    ```sql
    CREATE DATABASE 4thewords_prueba_miguel_jaimes;
    ```

3. Luego, regresa al proyecto y ejecuta el siguiente comando dentro de la carpeta backend:

    ```bash
    python app.py
    ```

### 5. Acceder a la Aplicación

Una vez que todo esté configurado y el servidor esté corriendo, puedes acceder a la aplicación desde tu navegador en:
http://localhost:8080


## Endpoints de la API

La aplicación también expone una API RESTful para interactuar con las leyendas.

- **GET** `/api/legends`: Obtiene todas las leyendas.
- **GET** `/api/legends/<id>`: Obtiene una leyenda específica por ID.
- **POST** `/api/legends`: Agrega una nueva leyenda.
- **PUT** `/api/legends/<id>`: Actualiza una leyenda existente.
- **DELETE** `/api/legends/<id>`: Elimina una leyenda existente.

## Tecnologías Utilizadas

- **Flask**: Framework web para el backend.
- **SQLAlchemy**: ORM para interactuar con la base de datos.
- **MySQL**: Base de datos relacional.
- **Werkzeug**: Utilidades para la gestión de archivos y seguridad.
- **Tailwind css**: Motor de plantillas para el frontend.

## Notas

Si experimentas algún error al iniciar la aplicación, asegúrate de que:

1. MySQL esté correctamente configurado en WAMP Server.
2. Las credenciales de la base de datos estén correctas.
3. El entorno virtual esté correctamente activado. 


