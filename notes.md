Primary Key: A person can have a unique id under two different companies in two differnt databases. Its how you guarentee uniqueness

The client for this API is a car dealer who has provided the following specs:
- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

Cars Table Schema
- Id : integer
- VIN : string
- Make: string
- Model: string 
- Mileage: integer

Title
- Type: string
- Status: string