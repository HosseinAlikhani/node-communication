print("Started Adding the Users.");
// db = db.getSiblingDB("admin");
db.createUser({
  user: "communication_user",
  pwd: "communication_password",
  roles: [
    { role: "readWrite", db: "communication" },
    { role: "root", db: "admin" }
  ],
});
print("End Adding the User Roles.");