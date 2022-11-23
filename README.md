Estos son los pasos a seguir para desplegar el CRUD de la aplicacion de contactos solicitada por la empresa escuela digital de innovacion:
1. Se deben descargar los proyectos de github a continuacion:
    a. https://github.com/santos130400/pruebaTecnicaEDII
    b.https://github.com/santos130400/preuebaTecnicaIEDIReacts
    
Se tienen dos proyectos, el primero aloja el API rest, la conexion a la base de datos y los modelos y el segundo es el proyecto en reactJS, se debio realizar de esta forma debido a unos problemas subiendo el archivo de forma conjunta.

2. Antes de comenzar se debe crear la base de datos en mySQL, para la creacion de la base de datos puede encontrar el archivo.sql en la carpeta database/createDB.sql alojada en el proyecto a (pruebaTecnicaEDII)
3. Para desplegar la parte del API rest y la conexion de base de datos, se debe abrir la carpeta del proyecto descargado y ejecutar los siguientes comandos:
npm install
npm start
Esto permitira la conexion a la base de datos a traves de los APIs creados en el puerto 2020, se debe tener en cuenta que en el archivo en la ruta src/db/connections.js se encuentran los campos para cambiar las credenciales de acceso a mySQL workbench (en mi caso), y aqui se deben cambiar a las credenciales propias.

const connection = new Sequelize("contactsCRUD", "root", "volley-2020",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

Los parametros se reciben en el siguiente orden, nombre del esquema, usuario, contraseña.

Para todo lo que fue el desarrollo de este apartado se siguieron los siguientes pasos:
-Descargar node js
-Instalar el yarn que facilita el uso, tambien se puede utilizar npm(npm i --global yarn)
-Instalar comnplemento rest client de VS tambien es para hacer mas sencillo todo
-Instalar express en el proyecto con yarn (yarn add express)
-Instalar para facilitar el desarrollo nodemon (yarn add -D nodemon) dependencia de desarrollo
-Instalar sequelize (npm install --save sequelize) y el driver de la base de datos (npm install --save mysql2)

4. Para desplegar la parte de las vistas en reactJS, se debe abrir la carpeta del proyecto descargado (b pruebaTecnicaEDIReacts y ejecutar los siguientes comandos:
npm start
De esa forma se iniciara la aplicacion en la web, es importante haber realizado primero el paso 3 para que ya se encuentre la conexion con la base de datos y esten disponibles los APIs

Para el desarrolo de este apartado se realizaron los siguinetes pasos
-Descargar react
npm install -g create-react-app
Y crear la app
npx create-react-app contactscrud
cd contactscrud
npm start
y posteriormente se ralizo toda la aplicacion en react.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
