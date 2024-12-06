# Contact API Spec

## Create

Endpoint: POST /api/contacts

Header: 
- Authorization: token

Request Body: 

json{

    "first_name": "Oktavari",
    "last_name": "Budi Arief",
    "email": "example@gmail.com",
    "phone": "13185011258"

}

Response Body (Success):

json{
    
    "data": {

        "id": 1,
        "first_name": "Oktavari",
        "last_name": "Budi Arief",
        "email": "example@gmail.com",
        "phone": "13185011258"

    }

}

## Get

Endpoint: GET /api/contacts/:contactId

Header: 
- Authorization: token


Response Body (Success):

json{
    
    "data": {
        
        "id": 1,
        "first_name": "Oktavari",
        "last_name": "Budi Arief",
        "email": "example@gmail.com",
        "phone": "13185011258"

    }

}

## Update

Endpoint: PUT /api/contacts/:contactId

Header: 
- Authorization: token

Request Body: 

json{

    "first_name": "Oktavari",
    "last_name": "Budi Arief",
    "email": "example@gmail.com",
    "phone": "13185011258"

}

Response Body (Success):

json{
    
    "data": {
        
        "id": 1,
        "first_name": "Oktavari",
        "last_name": "Budi Arief",
        "email": "example@gmail.com",
        "phone": "13185011258"

    }

}
## Remove

Endpoint: DELETE /api/contacts/contactId

Header: 
- Authorization: token


Response Body (Success):

json{
    
    "data": true

}

## Search

Endpoint: GET /api/contacts

Header: 
- Authorization: token

Query Params:
- name: string, contact first name of contact last name, *optional

- phone: string, contact phone, *optional

- email: string, contact email, *optional

- page: number, default 1

- size: number, default 10

Response Body (Success):

json{
    
    "data": [
        {

            "id": 1,
            "first_name": "Oktavari",
            "last_name": "Budi Arief",
            "email": "example@gmail.com",
            "phone": "13185011258"

        },
        {

            "id": 2,
            "first_name": "Ucup",
            "last_name": "John McLaren",
            "email": "example@gmail.com",
            "phone": "01957019355"

        }
    ],
    "paging": {
        "current_page": 1,
        "total_page": 10,
        "size": 10
    }

}