export async function getUser() {
  const response = await fetch("https://api.github.com/users/torvalds");
  const user = await response.json();
  console.log(user.name, user.public_repos);
}
