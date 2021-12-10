const GeneralError = require('../errors/GeneralError')
const logger = require('../db/logger')


const handleErrors = (err, req, res, next) => {
    try {
        if (err instanceof GeneralError) {
            throw err
        }
        if (err instanceof BaseError) {
            if (err instanceof UniqueConstraintError) {
                throw new SequelizeDbError(err.parent.message)
            }
            throw new SequelizeDbError(err.message)
        }
        if (err instanceof ResponseError) {
            let e = err.toJSON()
            return res.send(new SendgridApiError(`Sendgrid API: ${e.message}`, e.response.body.errors, e.code))
        }
        if (axios.default.isAxiosError(err)) {
        
            if (err?.code == 'ECONNREFUSED') {
                throw new TgCfApiError('Connection Refused by the Course Finder Api')
            }
            throw new TgCfApiError(err.response.data?.message, err.response.data?.moreInfo)
        }
        if (err instanceof Error) {
            console.log(err)
            logger.error(err)
            return res.status(500).send({
                status: 'error',
                message: err.message
            });
        }
    } catch (err) {
        if (err.message) {
            if(!err.moreInfo){
                err.moreInfo = []
            }
            if (err.moreInfo.length == 0) {
                err.moreInfo.push({ msg: err.message })
            }
        }
        res.status(err.status ? err.status : 500)
        return res.send({
            status: 'error',
            message: err.message,
            moreInfo: err.moreInfo,
            errorName: err.errorName ? err.errorName : "Error"
        })
    }


}


module.exports = handleErrors;