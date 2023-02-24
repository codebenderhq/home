
/**
 * @name indexAPI
 * This is a test function
 */


 const hello =  async (req, data) => {

    console.log(req.method)
    return {status:200, data}
}

export default hello




 
 