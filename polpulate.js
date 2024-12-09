const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Connection to MongoDB failed...", err));

const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String
}));

const createAuthor = async (name, bio, website) => {
  const author = new Author({
    name,
    bio,
    website
  })

  const result = await author.save();
  console.log(result);
}

const createCourse = async (name, author) => {
  const course = new Course({
    name,
    author
  });

  const result = await course.save();
  console.log(result);
}

const listCourses = async () => {
  const courses = await Course
    .find()
    .select('name');
  console.log(courses);
}

createAuthor('Shiven', 'About me', 'My website');

// createCourse('Node Course', 'authorId');

// listCourses();