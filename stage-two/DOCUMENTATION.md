# CRUD API Documentation

This documentation provides details on how to use the CRUD (Create, Read, Update, Delete) API for managing persons. This API allows you to perform various operations on person records.

## API Endpoints

## Create a New Student

- **Endpoint**: POST BASE_URL/api
- **Request Body**: JSON object containing student details (name, email).
- **Response**: Returns a message with status code 201 (Created) if student is successfully created, else an error message with status code 400 if request body is empty or invalid or student already exists, or a message with status code 500 if an internal error occurs while creating student.

## Get all Students

- **Endpoint**: GET BASE_URL/api
- **Request Body**: Body of request is empty
- **Response**: Returns all students in the database with a status code of 200(OK).

## Get one Student by name

- **Endpoint**: GET BASE_URL/api/studentName
- **Request Body**: Body of request is empty
- **Response**: Returns student information with status code 200 if in database, else an error message with status code 404.

## Update a Student Information by name

- **Endpoint**: PUT BASE_URL/api/studentName.
- **Request Body**: JSON object containing new student details(name, email).
- **Response**: Returns updated student information with status code 200 if studentName exists in database, else an error message with status code 404 if studentName does not exist in database, or an error message with status code 400 if request body is empty or invalid, or a message with status code 500 if an internal error occurs while updating student information.

## Delete a Student Information by name

- **Endpoint**: DELETE BASE_URL/api/studentName.
- **Request Body**: Body of request is empty
- **Response**: Returns success message with status code 200 if studentName exists in database, else an error message with status code 404 if studentName does not exist in database, or a message with status code 500 if an internal error occurs while deleting student information.
