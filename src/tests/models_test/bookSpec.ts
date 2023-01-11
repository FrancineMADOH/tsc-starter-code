import { book, bookStore } from "../../models/book";

const store = new bookStore()

describe("Book store model class", ()=>{
    //check if a particular method exist
    it("should have an index method", ()=>{
        expect(store.index).toBeDefined();
    })

    //check if our array is actually returned
    it("index method shoul return a list of books", async()=>{
        const result = await store.index()
        //since we are not sure on the result we will run it on a test database 
        expect(result).toEqual([])
    })
})