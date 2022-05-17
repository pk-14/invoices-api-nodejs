This is a invoices API.

How to use:

Download and extract the files present in the zip file into a folder. (say backend)

Open VS CODE in that folder and type "npm install" to install all dependencies.

Once the dependencies were installed, the api is ready to use.

Start the server using "nodemon index"

In console, if "server is running" is been shown then we are good to go.

To enter a shop details, customer details and items purchased details, go to "/addDetails" route of the localhost:5000.
i.e., go to "http://localhost:5000/addDetails".

To add details in Postman, send a POST request of JSON body with array of shop object, customer object, items object.
for example, 

JSON = [
    {
        "name" : "Shop1",
        "address" : "BHR, IITBBS",
        "contactNumber" : 123456789,
        "emailId" : "abc@google.com"
    },
    {
        "name" : "Person1",
        "contactNumber" : 11111111,
        "dateAndTime" : "2022-03-12T14:19:12.000Z",
        "items":[
            {
                "name" : "Item1",
                "quantity" : 10,
                "pricePerQuantity" : 200,
                "discount" : 20,
                "gst" : 7.58,
                "total" : 0
            },
            {
                "name" : "Item2",
                "quantity" : 20,
                "pricePerQuantity" : 20,
                "discount" : 1,
                "gst" : 7.582,
                "total" : 0
            }
        ],
        "totalAmount" : 0,
        "invoice" : "Paid"
    }
]

(Totals are calculated automatically.)

Hence, add different shop details, customers details (linked to particular shops automatically), items (linked to particular customer automatically).

Once all the data was added. We can perform different operations to see the data as convineint as possible.

To display items transacted, sorted by customer name and number, go to "/byCustomer" route of the localhost:5000.
i.e., go to "http://localhost:5000/byCustomer".

Send a GET request to the route with a JSON Body of format as below:
{
	"name" : "Person1",
	"contactNumber" : 1112223334
}

then you will receive all the items that customer has purchased differentiated by ShopIds.

To display customers and total amount they spent during a time period, go to "/byDate" route of the localhost:5000.
i.e., go to "http://localhost:5000/byDate".

Send a GET request to the route with a JSON Body of format as below:
{
	"fromDate" : "YY-MM-DDTHH:MM:SSZ",
	"toDate" : "YY-MM-DDTHH:MM:SSZ"
}

i.e., the date is of "YY-MM-DDTHH:MM:SSZ" this format.
this will be easy if there's a frontend date element.
Hence you will receive all the customers and total amount they spent during a time period.

To display customers and items they bought of a particular shop, go to "/byShop" route of the localhost:5000.
i.e., go to "http://localhost:5000/byShop".

Send a GET request to the route with a JSON Body of format as below:
{
	"name" : "Shop1",
}

then you will receive all the customers and items they bought of a particular shop given.




