// @desc      get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'get all bootcamps', hello: req.hello });
};

// @desc      get single bootcamp by id
// @route     GET /api/v1/bootcamps/:id
// @access    public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` });
};

// @desc      create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'create bootcamp' });
};

// @desc      update bootcamp by id
// @route     PUT /api/v1/bootcamps/:id
// @access    private
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` });
};

// @desc      delete bootcamp by id
// @route     DELETE /api/v1/bootcamps/:id
// @access    private
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}` });
};
