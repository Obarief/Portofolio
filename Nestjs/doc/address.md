# Address API Spec

## Create

Endpoint: POST /api/contacts/:contactId/addresses

Header: 
- Authorization: token

Request Body

{

    "street": "Jalan Albariyah", *optional
    "city": "Jakarta", *optional
    "province": "provinsi", *optional
    "country": "Indonesia", 
    "postal_code": "1234" *optional

}

Response Body

{

    "data": {

        "id": 1,
        "street": "Jalan Albariyah", *optional
        "city": "Jakarta", *optional
        "province": "provinsi", *optional
        "country": "Indonesia", 
        "postal_code": "1234" *optional

    }

}

## Get

Endpoint: GET /api/contacts/:contactId/addresses/:addressId

Header: 
- Authorization: token


Response Body

{

    "data": {

        "id": 1,
        "street": "Jalan Albariyah", *optional
        "city": "Jakarta", *optional
        "province": "provinsi", *optional
        "country": "Indonesia", 
        "postal_code": "1234" *optional

    }

}

## Update

Endpoint: PUT /api/contacts/:contactId/addresses/:addressId

Header: 
- Authorization: token

Request Body

{

    "street": "Jalan Albariyah", *optional
    "city": "Jakarta", *optional
    "province": "provinsi", *optional
    "country": "Indonesia", 
    "postal_code": "1234" *optional

}

Response Body

{

    "data": {

        "id": 1,
        "street": "Jalan Albariyah", *optional
        "city": "Jakarta", *optional
        "province": "provinsi", *optional
        "country": "Indonesia", 
        "postal_code": "1234" *optional

    }

}

## Remove

Endpoint: DELETE /api/contacts/:contactId/addresses/:addressId

Header: 
- Authorization: token


Response Body

{

    "data": true

}

## List

Endpoint: GET /api/contacts/:contactId/addresses

Header: 
- Authorization: token

Response Body

{

    "data": [
        {

            "id": 1,
            "street": "Jalan Albariyah", *optional
            "city": "Jakarta", *optional
            "province": "provinsi", *optional
            "country": "Indonesia", 
            "postal_code": "1234" *optional

        },
        {
            "id": 2,
            "street": "Jalan Albariyah", *optional
            "city": "Jakarta", *optional
            "province": "provinsi", *optional
            "country": "Indonesia", 
            "postal_code": "1234" *optional
        }
    ]

}