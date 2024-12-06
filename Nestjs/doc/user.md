
# User API Spec

## Register

Endpoint : POST /api/users

Request Body :

json{

    "username": "obarief",
    "password": "rahasia",
    "name": "Oktavari Budi Arief"

}

Response Body (Success) :

json{

    "data": {
        "username": "obarief",
        "name": "Oktavari Budi Arief"
    }

}

Response Body (Failed) :

json{

    "errors": "Username already registered"

}




## Login

Endpoint : POST /api/login

Request Body :

json{

    "username": "obarief",
    "password": "rahasia"

}

Response Body (Success) :

json{

    "data": {
        "username": "obarief",
        "name": "Oktavari Budi Arief",
        "token": "session_id_generated"
    }

}

Response Body (Failed) :

json{

    "errors": "Username or password is wrong"

}


## Get

Endpoint : GET /api/current

Header :
- Authorization: token

Response Body (Success) :

json{

    "data": {
        "username": "obarief",
        "name": "Oktavari Budi Arief",
        
    }

}

Response Body (Failed) :

json{

    "errors": "Unauthorized"

}

## Update

Endpoint : PATCH /api/users/current

Header :
- Authorization: token

Request Body :

json{

    "password": "rahasia", *optional
    "name": "Oktavari Budi Arief" *optional

}

Response Body (Success) :

json{

    "data": {
        "username": "obarief",
        "name": "Oktavari Budi Arief"
    }

}


## Logout

Endpoint : DELETE /api/users/current

Header :
- Authorization: token


Response Body (Success) :

json{

    "data": true

}
