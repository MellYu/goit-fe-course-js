const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "Happy";
user.hobby = "Skydiving";
user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
