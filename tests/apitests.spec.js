import { test, expect } from '@playwright/test';
import { REPL_MODE_STRICT } from 'repl';

test("Create Booking", async({request}) => {

    const response = await request.post ('https://restful-booker.herokuapp.com/booking' , {
    data: {"firstname" : "Jim","lastname" : "Brown", "totalprice" : 111, "depositpaid" : true,"bookingdates" : {
          "checkin" : "2018-01-01", 
          "checkout" : "2019-01-01"
        },"additionalneeds" : "Breakfast"}
    ,
    headers: {
        "Accept" : "application/json"
    }
    });
    expect(response.status()).toBe(200);  

    const responseJSON = await response.json();
    console.log(responseJSON);
    
    const bookingid = responseJSON.bookingid;
    console.log(bookingid);

    expect (responseJSON.booking.firstname).toBe("Jim");
    expect (responseJSON.booking.lastname).toBe("Brown");
    expect (responseJSON.booking.totalprice).toBe(111);
    expect (responseJSON.booking.depositpaid).toBe(true);
    expect (responseJSON.booking.bookingdates.checkin).toBe("2018-01-01");
    expect (responseJSON.booking.bookingdates.checkout).toBe("2019-01-01");
    expect (responseJSON.booking.additionalneeds).toBe("Breakfast");

});


