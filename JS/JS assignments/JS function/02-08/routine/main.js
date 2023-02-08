let routine = [10, 1, 2, 3, 8];
let activities = [];

for (let i = 0; i < routine.length; i++) {
  activities.push(Math.round((routine[i] / 24) * 100) + "%");
}

console.log(routine);
console.log(activities);
