// Write your "actions" router here!
const express = require("express");

const database = require("./actions-model");

const router = express.Router();

//get
router.get("/", (req, res) => {
  database
    .get()
    .then((actions) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "The actions information could not be retrieved" });
    });
});


//get
router.get("/:id", (req, res) => {
  const actions = req.body;
  database
    .findById(actions.id)
    .then((action) => {
      if (action === null) {
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
  const action = req.body;
  console.log(req.body);
  if (action === undefined || action.project_id === undefined) {
    res
      .status(400)
      .json({ message: "Please provide project id for the action" });
  } else {
    database
      .insert(action)
      .then((newAction) => {
        res.status(201).json(newAction);
      })
      .catch((error) => {
        res.status(500).json({
          message: "There was an error while saving the action to the database",
        });
      });
  }
});


//put
router.put("/", (req, res) => {
  const action = req.body;
  if (
    action === undefined ||
    action.id === undefined 
   
  ) {
    res
      .status(404)
      .json({ message: "The action with the specified ID does not exist" });
  }
  database
    .update(action.id,action)
    .then((action) => {
      if (action === null) {
        res
          .status(400)
          .json({ message: "Please provide title and contents for the post" });
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
    
    const action= req.body;
  
    database.delete(action.id).then((action) => {
        if(action===null){
            res.status(404)
            .json({message:'TThe action with the specified ID does not exist'})
        }
    }).catch((error)=>{
  res.status(500)
      .json({ message: "The action could not be removed"  })
    })


  });