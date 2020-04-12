const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Student = require('../models/Student');

// @route   GET api/students
// @desc    Get all user students
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const students = await Student.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/students
// @desc    Add new student
// @access  Private
router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;

    try {
      const newStudent = new Student({
        name,
        user: req.user.id,
      });

      const student = await newStudent.save();

      res.json(student);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

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
