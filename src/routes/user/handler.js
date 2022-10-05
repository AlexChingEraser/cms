//root handler
//req -> request object, reply -> reply chain functions
const decryptData = require('../../common/utils/decrypted')
const generateJWT = require('../../common/utils/jwt')
const model = require('../../models')

module.exports = async (req, reply) => {
    //find the userid
    //if not exist, return null
    let results = await model.user.findAll({
        where: {
            firstName: req.payload.name
        }
    })
    if (!results.length) return "sorry, we not find you auth"
    //decrypted hashed passwd
    const user = results[0]
    if(decryptData(user.passwd, req.payload.encryptedData)) {
        return generateJWT({ name: req.payload.name })
    }
    return "sorry, we not find you auth";
}