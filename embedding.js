const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Connection to MongoDB failed...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const courseSchema = new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Types.ObjectId,
    ref: "Author"
  }
});

const Author = mongoose.model("Author", authorSchema);
const Course = mongoose.model("Course", courseSchema);

const createCourse = async (name, author) => {
  //const newauthor = new Author(author)
  //console.log(newauthor);
  
  /*const course = new Course({
    name: name,
    author: newauthor
  });*/
  //console.log(course);
  
  let newauthor = null
  if (typeof author == Object){
    newauthor = await Author.create(author)
  }
  if (typeof author == String){
    newauthor = await Author.findById(author)
  }
  console.log(newauthor);
  const course = await Course.create({
    name: name, author: newauthor
  })

  /*const result = await course.save();
  console.log(result);*/
}

const listCourses = async () => {
  const courses = await Course.find();
  console.log(courses);
}

//createCourse("Express Course 4353454", { name: "Shiven2", bio: "my bio", website: "my web" });
//createCourse("Express Course 4353454", { _id:"6751e217e007febc71e9e7ca" });