module.exports = (req, res, next) => {
	res.header('Content-Range', 'posts 1-10/10');
	next();
};