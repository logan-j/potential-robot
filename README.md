[![Build Status](https://travis-ci.org/logan-j/potential-robot.png?branch=master)](https://travis-ci.org/logan-j/potential-robot)

# Demo Project
To successfully run this project will require that the server and client applications are both installed and running on the correct configured ports (the client expects the server application to be running on port 8000). Once both are running, navigate to http://localhost:3000/ to view the client application.

## Client

### Dependencies
The client application requires that you have up to date versions of node (>8.10.0) and yarn (>1.9.2) and possibly npm.

### Install
To install the client application, from the root/client directory run:
```
yarn install
```

### Run
To run the client application, from the root/client directory run:
```
yarn start
```

### Tests
To run the tests for the client application, from the root/client directory run:
```
yarn test
```
## Server

### Dependencies
The server application requires that you have at least python 3.6 as well as an up to date version of pip installed. The python module pipenv is also recommended

### Install

To install the server application dependencies, in the root/server/ directory run:

##### without pipenv
```
pip install -Ur requirements.txt
```

##### with pipenv
```
pipenv install
```

### Run
To run the server application after the dependencies are installed, in the root/server/server directory run:

##### without pipenv
```
python3 ./manage.py test
```

##### with pipenv
```
pipenv run ./manage.py test
```

### Tests

To run the tests for the server application, from the root/server/server directory run:

##### without pipenv
```
python3 ./manage.py runserver
```

##### with pipenv
```
pipenv run ./manage.py runserver
```
