const users = [];

const addUser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  //Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (existingUser) {
    return {
      error: "Username already taken",
    };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => {
    return user.id === id;
  });
  return user;
};

const getUsersInRoom = (room) => {
  const userInRoom = [];
  users.map((user) => {
    if (user.room === room) {
      userInRoom.push(user);
    }
  });
  return userInRoom;
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
