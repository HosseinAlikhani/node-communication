print("Started Adding the Users.");
// db = db.getSiblingDB("admin");
db.createUser({
  user: "username",
  pwd: "password",
  roles: [
    { role: "readWrite", db: "communications" },
    { role: "root", db: "admin" }
  ],
});
print("End Adding the User Roles.");