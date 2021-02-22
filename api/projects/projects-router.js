// Write your "projects" router here!
const express = require("express");

const database = require("./projects-model");

const router = express.Router();


//get
router.get("/", (req, res) => {
    database
      .get()
      .then((projects) => {
        res.status(200).json(projects);
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: "The projects information could not be retrieved" });
      });
  });


  //get
router.get("/:id", (req, res) => {
    const projects = req.body;
    database
      .findById(projects.id)
      .then((project) => {
        if (project === null) {
          res
            .status(404)
            .json({ message: "The action with the specified ID does not exist" });
        }
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: "The action information could not be retrieved" });
      });
  });

  //post
router.post("/", (req, res) => {
    const projects = req.body;
    console.log(req.body);
    if (project === undefined || projects.project_id === undefined) {
      res
        .status(400)
        .json({ message: "Please provide project id for the action" });
    } else {
      database
        .insert(project)
        .then((newProjects) => {
          res.status(201).json(newProjects);
        })
        .catch((error) => {
          res.status(500).json({
            message: "There was an error while saving the project to the database",
          });
        });
    }
  });


  //put
router.put("/", (req, res) => {
    const project = req.body;
    if (
      project === undefined ||
      project.id === undefined 
     
    ) {
      res
        .status(404)
        .json({ message: "The project with the specified ID does not exist" });
    }
    database
      .update(project.id,project)
      .then((project) => {
        if (project === null) {
          res
            .status(400)
            .json({ message: "Please provide info for the post" });
        }
        
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: "The user information could not be modified" });
      });
  });


  //delete
router.delete('/:id', (req, res) => {
    
    const project= req.body;
  
    database.delete(project.id).then((project) => {
        if(project===null){
            res.status(404)
            .json({message:'TThe project with the specified ID does not exist'})
        }
    }).catch((error)=>{
  res.status(500)
      .json({ message: "The project could not be removed"  })
    })


  });