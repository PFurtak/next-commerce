export async function getAllSticks() {
  const res = await fetch('http://localhost:3000/api/sticks');
  const allSticks = res.json();
  return allSticks;
}

export async function getAllStickIds() {
  const sticks = await getAllSticks();

  return sticks.stock.map((stick) => {
    return {
      params: {
        id: stick.pid,
      },
    };
  });
}
