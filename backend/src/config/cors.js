module.exports = function(req, res, next){
    res.header('Access-Contorl-Allow-Origin', '*')
    res.header('Access-Contorl-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATH, DELETE')
    res.header('Access-Contorl-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}