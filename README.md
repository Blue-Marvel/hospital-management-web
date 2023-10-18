## Frontend Setup

- [Install node <https://nodejs.org/en/download>](#)
- [Run this commands in your terminal after installing node](#)
  - [<Check if node is properly intall> npm --version && node --version](#)
  - [<Clone the repositoy> git clone --branch front_end https://github.com/Blue-Marvel/hospital-management-web.git](#)
  - [change the folder_name "hospital-management-web" to "hospital-management-frontend"](#)
  - [<move to the cloned directory in your terminal> cd hospital-management-frontend](#)
  - [<Install node modules> npm install](#install-packages)
  - [npm start](#npm-start)
  - [This will load in the browser with port 3000](#)

## Backend Setup
- [Run this commands in your terminal after installing node](#)
  - [<Clone the repositoy> git clone --branch back_end https://github.com/Blue-Marvel/hospital-management-web.git](#)
  - [<move to the cloned directory in your terminal> cd hospital-management-web](#)
  - [<Install node modules> npm install](#install-packages)
  - [create .env file to root file path](#copy-.env-file)
  - [request .env file details from collaborator](#)
  - [npm start](#npm-start)
  - [This will load in the browser with port 8000](#)
 
  ## postman setup
  -[ setting token dynamically on postman  ]
  -[under login & reg route]

-[under test] 
-[copy and paste 
//accessing the response 
const jsonData = pm.response.json()
//token value/global var
pm.globals.set("accessToken",jsonData.token )
]



-[then on any request go to "Authorization">>type>>select "bearer token ">>under token set global var to {{accessToken}}]


