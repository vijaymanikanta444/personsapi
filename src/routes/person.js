import express from 'express';
import Person from '../models/Person';

const router = express.Router();

// router.get('/', async (req, res) => {
//   // console.log(await Person.find({}));
//   res.json(await Person.find({}));
// });

router.get('/', async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const person = new Person({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    gender: req.body.gender,
  });
  //   console.log(person);
  try {
    const savedPerson = await person.save();

    res.json(savedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:personId', async (req, res) => {
  //   console.log(req.params.personId);
  try {
    const person = await Person.findById(req.params.personId);
    res.json(person);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:personId', async (req, res) => {
  //   console.log(req.params.personId);
  try {
    const removedPerson = await Person.remove({ _id: req.params.personId });
    res.json(removedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/:personId', async (req, res) => {
  //   console.log(req.params.personId);
  try {
    const updatedPerson = await Person.updateOne(
      { _id: req.params.personId },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          age: req.body.age,
          gender: req.body.gender,
        },
      }
    );
    res.json(updatedPerson);
  } catch (err) {
    res.json({ message: err });
  }
});

export default router;
