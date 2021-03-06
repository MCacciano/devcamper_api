const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');

// @desc      get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();

  res.status(200).json({ success: true, count: bootcamps.length, data: bootcamps });
});

// @desc      get single bootcamp by id
// @route     GET /api/v1/bootcamps/:id
// @access    public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id);

  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: bootcamp });
});

// @desc      create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);

  res.status(201).json({ sucess: true, data: bootcamp });
});

// @desc      update bootcamp by id
// @route     PUT /api/v1/bootcamps/:id
// @access    private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({ sucess: true, data: bootcamp });
});

// @desc      delete bootcamp by id
// @route     DELETE /api/v1/bootcamps/:id
// @access    private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

  if (!bootcamp) {
    return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
  }

  res.status(201).json({ sucess: true, data: {} });
});
