/**
 * Created by rui on 10/31/17.
 */
module.exports = {
    sendError: (res, httpErrorCode, err) => {
        res.status(httpErrorCode);
        return res.json({
            error: err
        })
    }
}
