//const express = require("express");
//const router = express.Router();
const express = require("express");
const router = express.Router();
const {
  getContacts,
  updateContact,
  getContact,
  delectContact,
  createContact} =require("../controllers/contactControllers")
router.route('/').get(getContacts).post(createContact).get(getContact).put(updateContact ).delete(delectContact);
module.exports = router;
//=require("../controllers/contactControllers")
//router.route('/').get(getContacts).post(createContact).get(getContact).put(updateContact ).delete(delectContact);
// module.exports = router;
