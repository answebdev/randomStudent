const express = require('express');
const router = express.Router();

// @route   GET api/students
// @desc    Get all user students
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all students');
});

// @route   POST api/students
// @desc    Add new student
// @access  Private
router.post('/', (req, res) => {
  res.send('Add student');
});

// @route   PUT api/students/:id
// @desc    Update student
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update student');
});

// @route   DELETE api/students/:id
// @desc    Delete student
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete student');
});

module.exports = router;
