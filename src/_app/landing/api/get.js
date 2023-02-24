
/**
 * @name indexAPI
 * This is a test function
 */


const hello =  async (req) => {

    console.log(req.method)
    return {status:200, msg: 'BAD'}
}

export default hello




 
 