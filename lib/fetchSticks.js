async function getAllSticks() {
  const res = await fetch('http://localhost:3000/api/sticks');
  const allSticks = res.json();
  return allSticks;
}

export default getAllSticks;
